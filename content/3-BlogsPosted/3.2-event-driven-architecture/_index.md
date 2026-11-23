---
title: "AWS Event-Driven Architecture"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

<article class="minimal-article-container">
<!-- Top Back Navigation -->
<nav class="minimal-article-nav">
<a href="../"  class="minimal-back-link">
<span>← Back to Articles</span>
</a>
</nav>

<!-- Minimalist Article Header -->
<header class="minimal-article-header">
<div class="minimal-category-tag">AWS / Distributed Systems / Architecture</div>
<h1 class="minimal-article-title">AWS EVENT-DRIVEN ARCHITECTURE – WHEN ALL SERVICES SUCCEED, WHY CAN DATA STILL BE WRONG?</h1>

<!-- Community Post Link under Title -->
<div style="margin: 4px 0 16px 0;">
<a href="https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/" 
target="_blank" 
rel="noopener noreferrer" 
class="minimal-ref-link"
style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
<span>View post on AWS Study Group VN community</span>
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="minimal-article-date">04/11/2026</div>

<!-- Architecture Cover Image -->
<div class="minimal-cover-box">
<img src="/fcaj-report/images/aws-event-driven-architecture.png" alt="AWS EVENT-DRIVEN ARCHITECTURE – WHEN ALL SERVICES SUCCEED, WHY CAN DATA STILL BE WRONG?"  title="Click to enlarge diagram" loading="lazy">
<div class="minimal-cover-caption">
AWS Event-Driven Architecture – Event Processing, Ordering and Atomic Publishing
</div>
</div>

<!-- Introductory Summary Lead -->
<p class="minimal-article-lead">While researching Event-Driven Architecture on AWS, I identified a critical paradox: A system can process all events with 100% success yet still generate incorrect business data due to Race Conditions. This stems directly from the asynchronous nature of decoupled services, particularly when orchestrating Amazon S3, EventBridge, SQS, AWS Lambda, and DynamoDB.</p>
</header>

<hr class="minimal-divider">

<!-- Section 1: VẤN ĐỀ Ở ĐÂY LÀ GÌ? -->
<section class="minimal-section" id="eda-sec-1">
<h2 class="minimal-section-title">1. WHAT IS THE PROBLEM HERE?</h2>
<p class="minimal-p">Amazon S3 Event Notifications operate on an At-Least-Once Delivery model, providing no inherent guarantee that events arrive exactly once or in chronological order.</p>
<p class="minimal-p">Suppose an AI document processing pipeline updates a file from Version A to Version B:</p>

<ul class="minimal-list">
<li><strong>Lambda A:</strong> Processes baseline Version A in 15 seconds.</li><li><strong>Lambda B:</strong> Processes updated Version B in only 4 seconds.</li><li><strong>Outcome:</strong> B completes first, but Lambda A finishes later and overwrites the newer result with stale data.</li>
</ul>

<p class="minimal-p">Both Lambda invocations succeed with HTTP 200, yet the final persisted business outcome is completely corrupted.</p>

<!-- Race Condition Timeline Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th>Worker / Invocation</th><th>Document Version</th><th>Start Time</th><th>Duration</th><th>Write Time</th><th>Actual Outcome</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>Worker A</strong></td><td>Version A (v1)</td><td>T0</td><td>15 seconds</td><td>T0 + 15s</td><td><strong>Overwrites newer result of B</strong></td>
</tr>

<tr>
<td><strong>Worker B</strong></td><td>Version B (v2 - Latest)</td><td>T0 + 2s</td><td>4 seconds</td><td>T0 + 6s</td><td>Overwritten by stale output from A</td>
</tr>

</tbody>
</table>
</div>

<div class="minimal-callout">
Core reality: Every individual AWS service worked as designed, yet the business result became corrupted due to uneven invocation latency across distributed workers.
</div>
</section>

<hr class="minimal-divider">

<!-- Section 2: VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ? -->
<section class="minimal-section" id="eda-sec-2">
<h2 class="minimal-section-title">2. WHY ARE IDEMPOTENCY AND SQS NOT ENOUGH?</h2>
<p class="minimal-p">Engineers commonly assume that applying Idempotency and SQS FIFO queues will eliminate race conditions in event-driven systems. In practice, both exhibit fundamental boundaries:</p>

<ul class="minimal-list">
<li><strong>Idempotency:</strong> Prevents duplicate side-effects from identical event retries, but cannot prevent an older stale event from overwriting a newer result.</li><li><strong>Amazon SQS FIFO:</strong> Enforces strict ordering within Message Groups, but cannot restore chronological order if events were already delivered out-of-order prior to entering the queue.</li><li><strong>TOCTOU (Time-of-Check to Time-of-Use):</strong> Even when a Lambda inspects object versions before processing, underlying data can change during execution.</li>
</ul>
</section>

<hr class="minimal-divider">

<!-- Section 3: ĐỀ XUẤT -->
<section class="minimal-section" id="eda-sec-3">
<h2 class="minimal-section-title">3. PROPOSED ARCHITECTURAL SOLUTION</h2>
<p class="minimal-p">Rather than allowing Lambda functions to directly overwrite shared storage, the recommended pattern blends five core mechanisms:</p>

<ul class="minimal-list">
<li><strong>S3 Versioning:</strong> Retrieve the exact input data version. Guarantees workers read the specific object version tied to the event.</li><li><strong>S3 Sequencer:</strong> Determine event sequence order on the same object key using the physical hexadecimal timestamp in S3 event payloads.</li><li><strong>Immutable Output:</strong> Each Lambda writes results to a dedicated immutable path (e.g., output/{key}/{version_id}/result.json), preventing direct overwrite conflicts.</li><li><strong>DynamoDB Conditional Write:</strong> Control result publishing using atomic Compare-and-Swap conditional updates. Only updates state if the sequencer is newer.</li><li><strong>Reconciliation:</strong> Recover interrupted tasks and reconcile state inconsistencies when partial failures occur.</li>
</ul>

<!-- Solution Component Role Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th>Component</th><th>Role in Architecture</th><th>Correctness Guarantee Mechanism</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>Amazon S3 Versioning</strong></td><td>Input source data preservation</td><td>Immutable Version ID per PutObject invocation</td>
</tr>

<tr>
<td><strong>S3 Object Sequencer</strong></td><td>Original event ordering authority</td><td>Hexadecimal string reflecting physical S3 commit order</td>
</tr>

<tr>
<td><strong>Immutable Output</strong></td><td>Isolated intermediate storage</td><td>Dedicated prefix per worker, zero direct overwrite</td>
</tr>

<tr>
<td><strong>DynamoDB Conditional Write</strong></td><td>Atomic result pointer publishing</td><td>Compare-and-Swap: updates state only if s3_sequencer is newer</td>
</tr>

<tr>
<td><strong>Reconciliation Worker</strong></td><td>Partial failure recovery</td><td>Audits state discrepancies between S3 and DynamoDB pointer</td>
</tr>

</tbody>
</table>
</div>

<!-- DynamoDB Conditional Write Code Box -->
<div class="minimal-formula-box">
<strong>DynamoDB Atomic Conditional Update Pattern (Compare-and-Swap):</strong><br><br>
<pre style="margin:0; font-family:inherit; font-size:inherit; white-space:pre-wrap;">UpdateItem(
  Key = { &quot;object_key&quot;: &quot;document-123.pdf&quot; },
  UpdateExpression = &quot;SET latest_version = :v, result_uri = :uri, s3_sequencer = :seq, updated_at = :ts&quot;,
  ConditionExpression = &quot;attribute_not_exists(object_key) OR s3_sequencer &lt; :seq&quot;,
  ExpressionAttributeValues = {
    &quot;:seq&quot;: event.s3.object.sequencer,
    &quot;:v&quot;: event.s3.object.versionId,
    &quot;:uri&quot;: &quot;s3://bucket/output/doc-123/v2/result.json&quot;,
    &quot;:ts&quot;: &quot;2026-11-04T10:30:00Z&quot;
  }
)</pre>
</div>

<p class="minimal-p">Under this architecture, Lambda A can finish after B without ever overwriting B&#039;s published result.</p>

<div class="minimal-callout">
However, Amazon S3 and DynamoDB do not share an atomic two-phase commit transaction. Systems must incorporate Retry and Recovery mechanisms to handle partial failures when S3 writes succeed but DynamoDB updates are interrupted.
</div>
</section>

<hr class="minimal-divider">

<!-- Section 4: KẾT LUẬN -->
<section class="minimal-section" id="eda-sec-4">
<h2 class="minimal-section-title">4. CONCLUSION &amp; PRINCIPLES</h2>
<p class="minimal-p">In cloud architecture: 100% successful Lambda invocations do not equate to 100% correct business state.</p><p class="minimal-p">Instead of attempting to force every distributed event to process in strict serial order, architectures should control which version is permitted to publish the authoritative result.</p>

<div class="minimal-callout">
“100% Lambda Invocations successful does not equal 100% business correctness.”
</div>

<div style="margin-top:24px;">
<h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 12px 0;">
Core Distributed Design Principles:
</h3>
<ul class="minimal-list">
<li>1. <strong>Decouple Processing from Publishing:</strong> Leverage Immutable Output for processing and atomic pointers for publishing.</li><li>2. <strong>Enforce Ordering at the Destination:</strong> Use S3 Sequencers and DynamoDB ConditionExpression instead of fragile queue arrival order.</li><li>3. <strong>Design for Partial Failure:</strong> Build Reconciliation Workers to automatically heal cross-service inconsistencies.</li>
</ul>
</div>
</section>

<hr class="minimal-divider">

<!-- Official AWS References -->
<section class="minimal-section">
<h2 class="minimal-section-title">Official AWS Documentation &amp; Resources</h2>
<ol class="minimal-ref-list">

<li>
<a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-content-structure.html" target="_blank" rel="noopener" class="minimal-ref-link">
AWS Documentation – Amazon S3 Event Notifications &amp; Object Sequencer
</a>
</li>

<li>
<a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate" target="_blank" rel="noopener" class="minimal-ref-link">
AWS Documentation – Working with Queries and Conditional Writes in DynamoDB
</a>
</li>

<li>
<a href="https://aws.amazon.com/event-driven-architecture/" target="_blank" rel="noopener" class="minimal-ref-link">
AWS Architecture Center – Event-Driven Architecture Patterns and Best Practices
</a>
</li>

<li>
<a href="https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/" target="_blank" rel="noopener" class="minimal-ref-link">
View post on AWS Study Group VN community
</a>
</li>

</ol>
</section>

<!-- Bottom Navigation Footer -->
<footer class="minimal-footer-nav">
<button type="button" class="btn-minimal-outline" >
<span>← Back to Articles</span>
</button>
<button type="button" class="btn-minimal-outline" >
<span>Scroll to Top ↑</span>
</button>
</footer>
</article>
