---
title: "EC2 Identity Containment"
date: 2026-09-14
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
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
<div class="minimal-category-tag">AWS STUDY GROUP / CLOUD SECURITY</div>
<h1 class="minimal-article-title">EC2 ISOLATION DOES NOT MEAN THE ATTACKER IS ISOLATED</h1>
<div style="font-size:16px; font-weight:600; color:#555555; margin:-4px 0 10px 0; font-style:italic;">
Beyond Network Isolation: Rethinking Identity Containment on AWS
</div>

<!-- Community Post Link under Title & Subtitle -->
<div style="margin: 4px 0 16px 0;">
<a href="https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/" 
target="_blank" 
rel="noopener noreferrer" 
class="minimal-ref-link"
style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
<span>View post on AWS Study Group VN community</span>
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="minimal-article-date">15/11/2026</div>

<!-- Architecture Cover Image -->
<div class="minimal-cover-box">
<img src="/fcaj-report/images/aws-ec2-identity-containment-architecture.png" alt="EC2 ISOLATION DOES NOT MEAN THE ATTACKER IS ISOLATED"  title="Click to enlarge diagram" loading="lazy">
<div class="minimal-cover-caption">
Figure 1: Automated Incident Response architecture on AWS – Combining Network Containment, Credential Issuance Containment, and Identity Containment.
</div>
</div>

<!-- Introductory Summary Lead -->
<p class="minimal-article-lead">What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth architectural analysis of Network Containment versus Identity Containment: why Security Groups cannot terminate active IAM sessions, the limitations of IMDSv2 against remote code execution, and designing an automated incident response workflow combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys.</p>
</header>

<hr class="minimal-divider">

<!-- Section 1 -->
<section class="minimal-section" id="ic-sec-1">
<h2 class="minimal-section-title">1. When What Is Stolen Is Not Just Data, But Identity</h2>
<p class="minimal-p">Consider an enterprise deploying its backend workload on Amazon EC2, using Amazon S3 for durable object storage and Amazon DynamoDB for transactional state.</p><p class="minimal-p">Rather than embedding long-lived Access Keys into source code, EC2 is attached to an IAM Role via an Instance Profile, consuming Temporary Security Credentials issued dynamically by the Instance Metadata Service (IMDS).</p><p class="minimal-p">While this aligns with AWS security best practices, examine this realistic incident timeline:</p>

<!-- Incident Timeline Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width:16%;">Time</th>
<th style="width:32%;">Event / Action</th>
<th style="width:52%;">Technical Implication & State</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>09:00</strong></td>
<td>EC2 Host Compromise</td>
<td>Attacker exploits an application vulnerability to achieve arbitrary remote code execution (RCE) on the host.</td>
</tr>

<tr>
<td><strong>09:05</strong></td>
<td>Credentials Exfiltration</td>
<td>Attacker queries IMDS and extracts temporary security tokens (AccessKey, SecretKey, SessionToken).</td>
</tr>

<tr>
<td><strong>09:10</strong></td>
<td>Security Team Detects Anomaly</td>
<td>Security operations center (SOC) detects suspicious host behavior or unexpected API calls.</td>
</tr>

<tr>
<td><strong>09:15</strong></td>
<td>Quarantine Security Group Applied</td>
<td>EC2 is isolated at the network layer by stripping standard inbound and outbound traffic rules.</td>
</tr>

<tr>
<td><strong>09:20</strong></td>
<td>Attacker Accesses S3 from Outside</td>
<td>From an external Internet environment, the attacker successfully dispatches requests to Amazon S3 using the stolen credentials.</td>
</tr>

</tbody>
</table>
</div>

<div class="minimal-callout">
<div style="font-weight:700; color:#171717; margin-bottom:6px;">
Why does this happen?
</div>
<p style="margin:0; font-size:15px; line-height:1.7;">
Because Temporary Credentials are not inherently bound to the network origin of the EC2 instance that received them. As long as the credentials have not expired and access has not been denied by security policies, an attacker can exploit the workload identity directly against AWS APIs without needing any ongoing network connection to the original EC2 instance.
</p>
</div>
</section>

<hr class="minimal-divider">

<!-- Section 2 -->
<section class="minimal-section" id="ic-sec-2">
<h2 class="minimal-section-title">2. Network Containment ≠ Identity Containment</h2>
<p class="minimal-p">A critical pitfall in cloud incident response is failing to distinguish between two distinct control planes: Network Containment (isolating resources at the network perimeter) and Identity Containment (governing and revoking the operational permissions of compromised identities).</p>

<!-- Comparison Table: Network vs Identity Containment -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width:24%;">Control Layer</th>
<th style="width:22%;">Mechanism</th>
<th style="width:27%;">Capability</th>
<th style="width:27%;">Core Limitation</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>Network Containment</strong><br><small style="color:#666;">Network Layer</small></td>
<td>Quarantine Security Group, NACLs, Private Subnets</td>
<td>Blocks network ingress/egress to and from the EC2 instance</td>
<td>Cannot invalidate active IAM credentials; does not drop tracked stateful connections immediately.</td>
</tr>

<tr>
<td><strong>Identity Containment</strong><br><small style="color:#666;">Identity Layer (IAM)</small></td>
<td>Revoke Active Sessions, Policy Denials, Detach Instance Profile</td>
<td>Revokes operational validity of temporary STS credentials</td>
<td>Without detaching the Instance Profile, the instance can immediately request new credentials from IMDS.</td>
</tr>

</tbody>
</table>
</div>

<p class="minimal-p">Security Groups filter network ingress and egress traffic, but possess zero awareness or authority over IAM sessions. Furthermore, modifying a Security Group does not automatically terminate existing tracked stateful TCP connections.</p><p class="minimal-p">Private Subnets prevent direct inbound connections from the public Internet, but do not protect against an attacker utilizing exfiltrated credentials from an external machine.</p><p class="minimal-p">Even IMDSv2, while highly effective against Server-Side Request Forgery (SSRF) exploits, offers no protection once an attacker has established arbitrary code execution on the instance.</p><p class="minimal-p">Each security mechanism addresses a different failure domain. Stacking security tools without understanding their architectural boundaries does not produce a secure architecture.</p>
</section>

<hr class="minimal-divider">

<!-- Section 3 -->
<section class="minimal-section" id="ic-sec-3">
<h2 class="minimal-section-title">3. If Credentials Are Stolen, Can We Render Them Useless Out of Context?</h2>
<p class="minimal-p">AWS provides Global Condition Keys that enable organizations to restrict credential usage based on operational context, verifying that request attributes match the issuance environment:</p>

<ul class="minimal-list">

<li><code>aws:EC2InstanceSourceVPC</code>: Enforces that requests must originate from the exact VPC where the EC2 instance was granted credentials.</li>

<li><code>aws:EC2InstanceSourcePrivateIPv4</code>: Verifies the private IPv4 address assigned to the instance when the credentials were issued.</li>

<li><code>aws:SourceVpc</code>: Checks whether the request passed through a specific VPC Endpoint when accessing AWS service APIs.</li>

<li><code>aws:VpcSourceIp</code>: Validates the source IP address within the private VPC network space.</li>

</ul>

<p class="minimal-p">In the illustrated architecture, EC2 resides within a Private Subnet and connects to Amazon S3 and DynamoDB via dedicated Gateway Endpoints.</p>
<p class="minimal-p">By authoring IAM Policies that compare credential issuance context with runtime request context, we can deny unauthorized requests originating outside the legitimate network boundary, even when the security token is valid.</p>

<!-- Monospace IAM Condition Code Block -->
<div class="minimal-formula-box">
<div style="font-size:12px; color:#666; margin-bottom:8px; font-family:sans-serif; font-weight:600;">
Example: IAM Policy Deny access outside source VPC (Context-Aware Enforcement)
</div>
<pre style="margin:0; font-family:inherit; white-space:pre-wrap;">{
  &quot;Version&quot;: &quot;2012-10-17&quot;,
  &quot;Statement&quot;: [
    {
      &quot;Sid&quot;: &quot;EnforceVpcSourceContext&quot;,
      &quot;Effect&quot;: &quot;Deny&quot;,
      &quot;Action&quot;: [&quot;s3:*&quot;, &quot;dynamodb:*&quot;],
      &quot;Resource&quot;: &quot;*&quot;,
      &quot;Condition&quot;: {
        &quot;StringNotEquals&quot;: {
          &quot;aws:EC2InstanceSourceVPC&quot;: &quot;vpc-0123456789abcdef0&quot;
        }
      }
    }
  ]
}</pre>
</div>

<p class="minimal-p">However, architects must keep in mind that not all AWS APIs utilize VPC Endpoints. Overly restrictive policies can break legitimate operational workloads.</p><p class="minimal-p">This mechanism also does not prevent malicious actions carried out directly on the compromised EC2 instance itself.</p><p class="minimal-p">This is why a robust cloud security strategy demands layered Defense in Depth.</p>
</section>

<hr class="minimal-divider">

<!-- Section 4 -->
<section class="minimal-section" id="ic-sec-4">
<h2 class="minimal-section-title">4. When Security Remediation Causes Operational Outages</h2>
<p class="minimal-p">AWS IAM provides an Active Session Revocation mechanism using the managed AWSRevokeOlderSessions policy and the aws:TokenIssueTime condition to deny requests from credentials issued prior to a specific cutoff timestamp.</p><p class="minimal-p">However, imagine a production fleet where 10 EC2 instances share a single IAM Role, but only one instance has been compromised.</p><p class="minimal-p">Executing a blanket session revocation on that IAM Role immediately disrupts all 9 healthy instances, inducing a widespread cascading outage.</p><p class="minimal-p">Furthermore, Revoke Active Sessions does not stop the compromised EC2 from immediately querying IMDS for fresh credentials. Therefore, security teams must detach or swap the Instance Profile with a restricted quarantine profile.</p><p class="minimal-p">At this point, engineering teams confront the delicate trade-off between Security and Availability.</p><p class="minimal-p">This demonstrates that IAM architecture is not just about granting Least Privilege, but equally about strictly limiting the Blast Radius when an incident occurs.</p>
</section>

<hr class="minimal-divider">

<!-- Section 5 -->
<section class="minimal-section" id="ic-sec-5">
<h2 class="minimal-section-title">5. Architectural Approach on AWS</h2>
<p class="minimal-p">Synthesizing the architecture diagram, we can construct an Automated Incident Response workflow as follows:</p>

<!-- Components Breakdown Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width:28%;">AWS Service</th>
<th style="width:72%;">Role in Incident Response</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>AWS CloudTrail</strong></td>
<td>Captures and records AWS API activity. Data Events must be enabled on S3 and DynamoDB for granular data-tier visibility.</td>
</tr>

<tr>
<td><strong>Amazon GuardDuty</strong></td>
<td>Continuously monitors security data sources to detect anomalous credential usage (e.g. InstanceCredentialExfiltration.OutsideAWS finding).</td>
</tr>

<tr>
<td><strong>Amazon EventBridge</strong></td>
<td>Matches GuardDuty finding event patterns and triggers automated incident response handlers.</td>
</tr>

<tr>
<td><strong>AWS Lambda</strong></td>
<td>Executes an AWS Systems Manager Automation runbook to carry out multi-tiered containment actions.</td>
</tr>

</tbody>
</table>
</div>

<p class="minimal-p"><strong>The containment workflow executes across three synchronized action tiers:</strong></p>

<div class="minimal-callout">
<ul class="minimal-list" style="margin:0; padding-left:18px;">

<li><strong>Network Containment:</strong> Attaches a Quarantine Security Group and inspects existing stateful connections.</li>

<li><strong>Credential Issuance Containment:</strong> Detaches or swaps the Instance Profile to prevent the instance from receiving fresh privileged credentials.</li>

<li><strong>Identity Containment:</strong> Revokes active IAM Role sessions and verifies policy propagation across AWS endpoints.</li>

</ul>
</div>

<p class="minimal-p">In production environments, actions that carry high operational disruption risks should be governed by appropriate approval workflows. The ultimate goal is not simply deploying more tools, but ensuring that each defensive layer successfully contains damage when another layer fails.</p>
</section>

<!-- Key Takeaway Callout -->
<div class="minimal-callout" style="border-left: 3px solid #171717; background:#F8FAFC; margin:32px 0;">
<div style="font-size:16px; font-weight:700; color:#171717; margin-bottom:8px;">
Key Takeaway
</div>
<p style="margin:0 0 10px 0; font-size:15px; line-height:1.7;">
An AWS Incident Response workflow must govern both Network Containment and Identity Containment simultaneously. Isolating EC2 only solves part of the problem if the operational permissions of the compromised identity have not been revoked.
</p>
<p style="margin:0; font-size:15.5px; font-weight:700; color:#171717; line-height:1.7;">
Because in cloud environments, an attack may begin on a host but propagates through identity abuse.
</p>
</div>

<!-- Hashtags -->
<div style="margin:24px 0; font-size:13.5px; color:#555555; line-height:1.8; word-spacing:4px;">
#AWS #AWSStudyGroup #CloudSecurity #CyberSecurity #IAM #AmazonEC2 #GuardDuty #IncidentResponse #DefenseInDepth #CloudArchitecture
</div>

<hr class="minimal-divider">

<!-- References Section -->
<section class="minimal-section" id="ic-sec-refs">
<h2 class="minimal-section-title" style="font-size:18px;">
Official Documentation & References
</h2>
<ul class="minimal-ref-list">

<li>
<span>AWS Security Incident Response Guide – Containment and Remediation Strategies:</span> 
<a href="https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html" target="_blank" rel="noopener noreferrer" class="minimal-ref-link">
https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html
</a>
</li>

<li>
<span>AWS IAM Documentation – Revoking IAM Role Temporary Security Credentials:</span> 
<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html" target="_blank" rel="noopener noreferrer" class="minimal-ref-link">
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html
</a>
</li>

<li>
<span>Amazon GuardDuty Finding Types – InstanceCredentialExfiltration.OutsideAWS:</span> 
<a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html" target="_blank" rel="noopener noreferrer" class="minimal-ref-link">
https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html
</a>
</li>

<li>

<a href="https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/" target="_blank" rel="noopener noreferrer" class="minimal-ref-link">
View post on AWS Study Group VN community
</a>
</li>

</ul>
</section>

<!-- Minimal Footer Navigation -->
<footer class="minimal-footer-nav">
<button type="button" class="btn-minimal-outline" >
<span>← Back to Articles</span>
</button>
<button type="button" class="btn-minimal-outline" >
<span>Scroll to Top ↑</span>
</button>
</footer>
</article>
