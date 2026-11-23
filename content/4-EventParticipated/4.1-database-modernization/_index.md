---
title: "Modernizing Applications & Databases with GenAI (29/09/2026)"
date: 2026-09-14
weight: 1
chapter: false
pre: " <b> 4.1. </b> "
---

<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="../" >
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Events Participated</span>
</a>
<span class="sep">/</span>
<span class="current">Event 1 - First Cloud AI Journey (29/09/2026)</span>
</div>
<button type="button" class="btn btn-outline btn-sm" >
<span>← Back to Events</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">EVENT HARVEST REPORT</span>
<span class="badge badge-blue">Application &amp; Database Modernization</span>
<span class="badge badge-gray">Official • AWS FCAJ</span>
</div>
<h1 class="report-main-title">FIRST CLOUD AI JOURNEY – 29/09/2026</h1>
<p class="report-main-subtitle">In-depth Workshop on Application &amp; Database Modernization and GenAI-powered Code Transformation on AWS</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Event Name:</span>
<span class="meta-strip-val"><strong>First Cloud AI Journey – 29/09/2026</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Date & Time:</span>
<span class="meta-strip-val">08:00 AM – 05:00 PM, September 29, 2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Location:</span>
<span class="meta-strip-val">26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Speakers:</span>
<span class="meta-strip-val"><strong>Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Role:</span>
<span class="meta-strip-val"><strong>Attendee</strong></span>
</div>
</div>
</header>

<!-- Event 1 Check-in Photo -->
<div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
<div class="event-uploaded-img-wrap"  title="Click to view high-definition image">
<img id="event-1-cover-img" src="/fcaj-report/images/events/event-1.jpg" alt="First Cloud AI Journey – 29/09/2026" class="event-uploaded-img" onload="const w = document.getElementById('event-1-cover-wrap'); if (w) w.style.display='block';" onerror="const w = document.getElementById('event-1-cover-wrap'); if (w) w.style.display='none';" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Authentic attendee check-in photograph at First Cloud AI Journey (September 29, 2026) – 26th Floor, Bitexco Financial Tower
</div>
</div>

<!-- SECTION I – EVENT OVERVIEW -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">I. Event Overview</h2>
</div>
<div class="report-prose">
<p>The <strong>First Cloud AI Journey</strong> workshop focused on enterprise application and database modernization strategies on AWS Cloud, transitioning from monolithic architectures to cloud-native microservices, and leveraging Generative AI (GenAI) for automated code transformation.</p>

<div class="report-quote-box" style="border-left-color: #171717;">
“The workshop featured deep technical sessions covering monolithic architecture bottlenecks, Domain-Driven Design (DDD) methodologies, Event-Driven Architecture (EDA) patterns, and automated code migration with Amazon Q Developer.”
</div>

<p>The program was delivered by senior technical leaders from AWS: <strong>Jignesh Shah</strong> (Director, Open Source Databases), <strong>Erica Liu</strong> (Senior GTM Specialist, AppMod), and <strong>Fabrianne Effendi</strong> (Associate Specialist Solutions Architect), providing comprehensive architectural insights and technical demonstrations.</p>
</div>
</section>

<!-- SECTION II – EVENT OBJECTIVES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">II. Event Objectives</h2>
</div>
<div class="report-prose">
<p>Core technical and architectural objectives established during the workshop:</p>
<ul>
<li><strong>Analyze monolithic bottlenecks:</strong> Identify challenges related to tight coupling, protracted release cycles, and excessive failure blast radius in legacy systems.</li>
<li><strong>3 pillars of modern Microservices decoupling:</strong> Introduce foundational decoupling mechanisms using Queue Management, Caching Strategies, and Flexible Messaging.</li>
<li><strong>Domain-Driven Design (DDD) framework:</strong> Apply the 4-step domain modeling framework to establish precise Bounded Contexts.</li>
<li><strong>Event-Driven Architecture (EDA):</strong> Explore asynchronous Pub/Sub, Point-to-Point Queue, and Data Streaming patterns for decentralized communication.</li>
<li><strong>GenAI for automated modernization:</strong> Demonstrate Amazon Q Developer capabilities in legacy Java upgrades, automated refactoring, and commercial database conversions.</li>
</ul>
</div>
</section>

<!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">III. Key Topics & Technical Content</h2>
</div>
<div class="report-prose">

<!-- 1. Limitations of Legacy Monoliths -->
<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">1. Limitations of Legacy Monolithic Architectures</h3>
<p>The opening session examined the fundamental challenges of legacy monolithic systems in modern enterprise environments. Bundling all business domains into a single monolithic codebase creates critical bottlenecks:</p>
<ul>
<li><strong>Protracted release cycles:</strong> Deploying minor updates requires rebuilding and releasing the entire application, slowing deployment cadences.</li>
<li><strong>Horizontal scalability bottlenecks:</strong> The entire application must be cloned when only a specific sub-component experiences high load.</li>
<li><strong>Excessive blast radius:</strong> Failures or resource leaks in a single module can compromise the availability of the entire platform.</li>
</ul>

<hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

<!-- 2. 3 Pillars of Modern Microservices Transition -->
<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">2. 3 Pillars of Modern Microservices Transition</h3>
<p>To decouple monolithic dependencies without disrupting continuous operations, AWS specialists presented three technical pillars:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Technical Pillar</th>
<th style="width: 25%;">AWS Service</th>
<th style="width: 50%;">Architectural Role &amp; Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Queue Management</strong></td>
<td>Amazon SQS (Simple Queue Service)</td>
<td>Buffers requests and decouples processing stages, ensuring resilience and zero message loss during peak traffic bursts.</td>
</tr>
<tr>
<td><strong>Caching Strategies</strong></td>
<td>Amazon ElastiCache (Redis/Memcached)</td>
<td>Caches frequent queries in in-memory storage, drastically relieving database load and achieving sub-millisecond latencies.</td>
</tr>
<tr>
<td><strong>Flexible Messaging</strong></td>
<td>Amazon SNS &amp; Amazon EventBridge</td>
<td>Routes events asynchronously via pub/sub fanout across independent microservices, facilitating loosely coupled integrations.</td>
</tr>
</tbody>
</table>
</div>

<hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

<!-- 3. Domain-Driven Design (DDD) 4-Step Methodology -->
<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">3. Domain-Driven Design 4-Step Methodology</h3>
<p>Decomposing microservices was structured around domain-driven modeling principles via a 4-step framework:</p>

<ul>
<li><strong>Step 1 - Identify Domain Events:</strong> Inventory all core events that occur within the business lifecycle (e.g. Order Placed, Payment Authorized, Shipment Dispatched).</li>
<li><strong>Step 2 - Arrange Timeline:</strong> Map events sequentially on a chronological timeline to clarify triggers, dependencies, and cause-and-effect flows.</li>
<li><strong>Step 3 - Identify Actors:</strong> Determine the initiators and consumers of each event (end users, external systems, automated background jobs).</li>
<li><strong>Step 4 - Define Bounded Contexts:</strong> Cluster related domain events and data models into discrete Bounded Contexts, mapping directly to microservice boundaries.</li>
</ul>

<hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

<!-- 4. Event-Driven Architecture Patterns -->
<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4. Event-Driven Architecture Patterns</h3>
<p>The workshop examined three asynchronous messaging patterns that enable decoupled service communications:</p>

<div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
Publish/Subscribe (Amazon SNS & EventBridge) | Point-to-Point Queue (Amazon SQS) | High-Throughput Streaming (Amazon Kinesis)
</div>

<ul>
<li><strong>Publish/Subscribe:</strong> Enables an event producer to broadcast messages simultaneously to multiple decoupled consumers via SNS and EventBridge.</li>
<li><strong>Point-to-Point Queue:</strong> Ensures single-worker message processing backed by Dead-Letter Queues (DLQ) for error containment.</li>
<li><strong>Data Streaming:</strong> Ingests and processes millions of ordered records per second in real time for live analytics using Amazon Kinesis.</li>
</ul>

<hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

<!-- 5. Amazon Q Developer -->
<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">5. AI-Assisted Modernization with Amazon Q Developer</h3>
<p>Presentations by specialists Erica Liu and Fabrianne Effendi demonstrated how Generative AI tools accelerate labor-intensive modernization stages:</p>

<ul>
<li><strong>Application transformation (AppMod):</strong> Amazon Q Developer analyzes legacy Java repositories, identifies outdated dependencies, refactors deprecated syntax, and automates upgrades to Java 17/21.</li>
<li><strong>Database conversion:</strong> Assists in converting schemas and stored procedures from commercial proprietary engines (Oracle, MS SQL) to open-source Amazon Aurora PostgreSQL/MySQL.</li>
<li><strong>Security code review:</strong> Operates directly inside developer IDEs to pinpoint OWASP vulnerabilities and hardcoded credentials, generating remediation diffs.</li>
</ul>

<hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

<!-- 6. Technical Demos & Q&A -->
<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">6. Technical Demonstrations &amp; Expert Q&amp;A</h3>
<p>The workshop included live technical demonstrations executed directly on AWS environments:</p>
<ul>
<li><strong>Automated code scanning demo:</strong> Demonstrated Amazon Q Developer scanning a monolithic Java project, generating test suites, and completing framework upgrades.</li>
<li><strong>Database migration demo:</strong> Visualized database schema conversions using AWS SCT and AWS DMS targeting Amazon Aurora.</li>
<li><strong>Resilience demo with SQS and DLQ:</strong> Simulated a downstream payment service outage, verifying how SQS preserved incoming customer transactions without data loss.</li>
<li><strong>Expert Q&amp;A with Director Jignesh Shah:</strong> Technical discussion on eventual consistency across distributed domains and cost governance strategies for cloud database migrations.</li>
</ul>
</div>
</section>

<!-- SECTION IV – KEY TAKEAWAYS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">IV. Key Takeaways</h2>
</div>
<div class="report-prose">
<p>The workshop synthesized foundational architectural lessons in distributed software engineering:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 30%;">Technical Area</th>
<th style="width: 70%;">Key Architectural Concepts</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Monolith Limitations</strong></td>
<td>Understanding tight coupling bottlenecks, protracted release cycles, and excessive failure blast radius.</td>
</tr>
<tr>
<td><strong>Queue Management</strong></td>
<td>Leveraging Amazon SQS to buffer requests, decouple processing stages, and absorb traffic spikes.</td>
</tr>
<tr>
<td><strong>Caching Strategy</strong></td>
<td>Utilizing Amazon ElastiCache to alleviate database read pressure and achieve sub-millisecond latencies.</td>
</tr>
<tr>
<td><strong>Event-Driven Messaging</strong></td>
<td>Applying Pub/Sub and Streaming patterns with Amazon SNS, EventBridge, and Kinesis for loose coupling.</td>
</tr>
<tr>
<td><strong>Domain-Driven Design</strong></td>
<td>Mastering the 4-step DDD methodology to delineate clean bounded contexts and avoid distributed monoliths.</td>
</tr>
<tr>
<td><strong>Database Modernization</strong></td>
<td>Migrating commercial proprietary databases to Amazon Aurora PostgreSQL for cost freedom and high scalability.</td>
</tr>
<tr>
<td><strong>AI-Assisted Modernization</strong></td>
<td>Employing Amazon Q Developer to automate repository analysis, legacy runtime refactoring, and code reviews.</td>
</tr>
</tbody>
</table>
</div>

<p style="font-weight:700; color:#171717; margin-top:20px;">
Core architectural principles established:
</p>
<ul>
<li>Modernization is an architecture-driven evolution, not a mere lift-and-shift code relocation.</li>
<li>Asynchronous decoupling is essential to preventing cascading failures and ensuring independent scalability.</li>
<li>Accurate domain boundaries defined through DDD are the foundation of successful, sustainable microservices.</li>
<li>Cloud-native open-source databases deliver technological independence and substantial cost savings over proprietary engines.</li>
<li>AI assistants are redefining software engineering, empowering engineers to focus on high-value architectural reasoning.</li>
</ul>
</div>
</section>

<!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">V. Lessons Learned & Personal Contributions</h2>
</div>
<div class="report-prose">

<!-- 1. Lessons Learned -->
<h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
1. Lessons Learned
</h3>
<ul>
<li><strong>Enterprise modernization mindset:</strong> Understood that application modernization is an architecture-driven evolution requiring domain-based decoupling rather than a simple infrastructure lift-and-shift.</li>
<li><strong>Role of asynchronous decoupling:</strong> Recognized how message buffering with Amazon SQS and event routing via SNS/EventBridge eliminate single points of failure and prevent cascading outages.</li>
<li><strong>Domain boundary precision:</strong> Mastered the 4-step Domain-Driven Design (DDD) methodology to establish clean bounded contexts and avoid distributed monolith antipatterns.</li>
<li><strong>Cloud database optimization:</strong> Acknowledged the strategic economic and operational advantages of migrating proprietary commercial databases to Amazon Aurora PostgreSQL.</li>
<li><strong>GenAI automation leverage:</strong> Realized the transformative capability of GenAI engineering assistants like Amazon Q Developer to automate routine migration and refactoring tasks.</li>
</ul>

<!-- 2. Practical Applications -->
<h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
2. Practical Applications
</h3>
<ul>
<li><strong>Apply Domain-Driven Design to coursework:</strong> Leverage the 4-step DDD methodology to analyze business requirements and define modular service boundaries in academic capstone projects.</li>
<li><strong>Design asynchronous AWS workflows:</strong> Implement Amazon SQS and EventBridge to build fault-tolerant, event-driven architectures capable of handling bursty workloads in cloud labs.</li>
<li><strong>Explore database migration workflows:</strong> Experiment with schema conversion and data migration workflows targeting Amazon Aurora PostgreSQL for cost governance and query optimization.</li>
<li><strong>Integrate AI assistants into IDE:</strong> Utilize Amazon Q Developer in daily developer environments to audit security vulnerabilities and standardize code quality against AWS Well-Architected practices.</li>
</ul>

<!-- 3. Personal Contributions -->
<h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
3. Personal Contributions
</h3>
<ul>
<li>Participated fully in the workshop as an Attendee from 08:00 AM to 05:00 PM on September 29, 2026, on the 26th Floor of Bitexco Financial Tower.</li>
<li>Listened attentively, took detailed technical notes, and consolidated domain knowledge on Microservices, DDD, Event-Driven Architecture, and Amazon Q Developer from AWS specialists.</li>
<li>Systematized technical concepts, comparison matrices, and workflow blueprints for structured knowledge retention.</li>
<li>Authored and published a detailed technical event report on the Personal Worklog website within the First Cloud AI Journey program.</li>
<li>Maintained and published the acquired technical documentation openly via GitHub Pages.</li>
</ul>
</div>
</section>

<!-- SECTION VI – CONCLUSION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">VI. Conclusion</h2>
</div>
<div class="report-prose">
<p>The First Cloud AI Journey workshop on September 29, 2026, delivered substantial practical value regarding enterprise cloud software modernization.</p>

<p>The event fostered significant growth in my technical mindset: transitioning from isolated application development to holistic distributed system architecture, where modularity, fault tolerance, and domain independence are essential. It also provided a grounded perspective on GenAI in software engineering — AI serves as an automated accelerator empowering engineers to focus on core architectural reasoning.</p>

<p>These insights establish a strong foundational knowledge base guiding my deep-dive studies in Cloud Solutions Architecture and long-term career growth on AWS.</p>

<div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
“Modernization is not merely lifting code to the cloud, but an architectural paradigm shift — where modularity, event-driven decoupling, and AI automation converge to build resilient enterprise systems.”
</div>

<!-- Tags -->
<div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
#AWS #FirstCloudAIJourney #AppMod #Microservices #DDD #EventDriven #AmazonQ #DatabaseModernization #Serverless
</div>
</div>
</section>

<!-- Bottom Navigation Actions -->
<div class="report-bottom-actions">
<button type="button" class="btn btn-outline" >
<span>← Back to Events</span>
</button>
<button type="button" class="btn btn-primary" >
<span>↑ Back to top</span>
</button>
</div>
</article>
