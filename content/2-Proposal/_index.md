---
title: "Project Proposal"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

<div class="tech-report">
<header>
<div class="report-eyebrow">Project Proposal</div>
<p class="report-intro">Architecture design, scope, problem statement, timeline, and cost estimate for the workshop project.</p>
<h1 class="report-title">Personalized Nutrition E-Commerce Platform on AWS</h1>
<p class="report-subtitle">Sourced nutrition lookup and shopping on AWS infrastructure</p>
</header>

<!-- 1. 1. PROPOSAL SUMMARY -->
<section class="report-section">
<h2 class="report-h2">1. Proposal Summary</h2>
<p class="report-p">The personalized nutrition e-commerce platform on AWS supports food lookup, purchasing, and meal recommendations from sourced data. React invokes Spring Boot via CloudFront and ALB; PostgreSQL stores data, while Bedrock only interprets requests. Products with missing data are excluded during nutrition or allergen filtering. Response metrics are retrieved by code directly from the DB, combined with demo-session-based operation to control costs.</p>
</section>

<!-- 2. 2. PROBLEM STATEMENT -->
<section class="report-section">
<h2 class="report-h2">2. Problem Statement</h2>
<h3 class="report-h3">What is the problem?</h3>
<p class="report-p">Buyers struggle to compare food products when nutrition and allergen data are inconsistent. AI responses may contain unfounded figures if the model generates content autonomously.</p>
<h3 class="report-h3">Solution</h3>
<p class="report-p">Buyers struggle to cross-reference nutrition and allergen data across products. Text-generating chatbots can produce unfounded figures. The MVP includes a catalog of 152 USDA products, accounts, filtering by nutrition, 9 allergens, and 6 diet labels; meal analysis; read-only AI lookup; shopping cart, ordering, product management, images, orders, analytics, and payment logs. COD and VNPAY sandbox are within scope.</p>
<p class="report-p">D32 adds profiles and single-meal recommendations consisting of a protein dish, vegetables/fruit, and carbohydrates. Targets are calculated using Mifflin-St Jeor × activity level. Applicable only for ages 18–65, BMI 17–35, excluding pregnancy, lactation, and conditions requiring medical supervision. There are no real payments, automated refunds, or medical advice. Identity is extracted from JWT; inventory deduction uses conditional UPDATE within transactions.</p>
<h3 class="report-h3">Benefits and Return on Investment</h3>
<p class="report-p">Buyers look up information from the DB, filter according to needs, and view data limitations. Store owners manage catalog, images, orders, and payment logs within the same application. Cost Explorer recorded 6.44 USD for Nov 01–21, 2026, fully covered by credits. There are no revenue or labor-saving figures yet to calculate financial ROI.</p>
</section>

<!-- 3. 3. SOLUTION ARCHITECTURE -->
<section class="report-section">
<h2 class="report-h2">3. Solution Architecture</h2>
<h3 class="report-h3">AWS architecture reference</h3>
<p class="report-p">Click on the image to expand / interactive zoom</p>
<div class="report-figure">
<a href="/fcaj-report/images/workshop/5.1-overview/aws-architecture.png" target="_blank" class="report-figure-img-wrap" title="Click to zoom">
<img src="/fcaj-report/images/workshop/5.1-overview/aws-architecture.png" alt="AWS Architecture Diagram" class="report-figure-img" loading="lazy" />
</a>
<div class="report-figure-caption">AWS architecture diagram drawn on draw.io using AWS Architecture Icons, updated with Multi-AZ and AWS STS on Nov 25, 2026</div>
</div>
<p class="report-p">From Nov 22, 2026 (D33), the dev environment runs 2 ECS tasks, one task per Availability Zone, and RDS in Multi-AZ mode with a standby replica in the second AZ. Reboot with failover drill on Nov 22 switched the primary AZ from ap-southeast-1a to ap-southeast-1b in about 20–45 seconds; API experienced roughly half a minute of disruption then automatically recovered, with zero data loss.</p>
<h3 class="report-h3">AWS services used</h3>
<p class="report-p">CloudFront + S3 — React SPA and images via OAC; Function for path rewrites; two private buckets.</p>
<p class="report-p">ALB + ECS Fargate + ECR — ALB accepts CloudFront + secret header; Spring Boot 4 / Java 21, ARM64, 0.5 vCPU / 1 GB, 2 tasks across 2 AZs.</p>
<p class="report-p">RDS PostgreSQL + Secrets Manager — db.t4g.micro, 20 GB gp3, Multi-AZ (standby in the second AZ), private subnet, encrypted; Flyway V1–V11.</p>
<p class="report-p">Cognito — JWT sub and cognito:groups; USER / ADMIN.</p>
<p class="report-p">Bedrock + Guardrails — Nova 2 Lite in Tokyo; read-only tools, metrics retrieved by code from the DB.</p>
<p class="report-p">CloudWatch + SNS + Budgets — 14-day logs, 7 alarms, email alerts; 100 USD budget.</p>
<p class="report-p">CloudTrail + S3 audit + WAF — Audit and ALB logs retained for 30 days; WAF only enabled during demo; AWS-managed KMS.</p>
<p class="report-p">Terraform + IAM + STS + GitHub Actions — S3 state use_lockfile; SSO, boundary; CI/CD via OIDC, AWS STS grants temporary credentials (AssumeRoleWithWebIdentity), no static access keys stored.</p>
<p class="report-p">Application deployed in ap-southeast-1, prefix nutrition-dev, single dev environment. D15 places ECS in public subnets with public IP to avoid NAT costs, while RDS remains private. D17 chooses a single environment to fit the capstone project. D18 shifts Bedrock and Guardrail invocations to ap-northeast-1 because Singapore quota for the account is 0; profile jp.amazon.nova-2-lite-v1:0. D24/D31 restricts model to searchProducts with search, facts, compare, plan intents; metrics are assembled by the backend. CloudFront → ALB currently uses HTTP due to lack of a custom domain.</p>
<h3 class="report-h3">Component design</h3>
<p class="report-p">Frontend React + TypeScript displays catalog, shopping cart, profiles, recommendations, and admin dashboard.</p>
<p class="report-p">Backend Spring Boot 4 / Java 21: catalog manages lookups; commerce handles cart/orders; payments verifies IPN; ai extracts intent; admin provides management APIs; profile calculates targets and recommendations.</p>
<p class="report-p">Database PostgreSQL uses parameterized SQL and Flyway V1–V11.</p>
<p class="report-p">AI uses Nova 2 Lite with Guardrails; code validates filters and aggregates metrics from DB.</p>
<p class="report-p">CI/CD GitHub Actions runs tests, builds ARM64, obtains temporary credentials from AWS STS via OIDC, pushes to ECR, and deploys.</p>
</section>

<!-- 4. 4. TECHNICAL IMPLEMENTATION -->
<section class="report-section">
<h2 class="report-h2">4. Technical Implementation</h2>
<p class="report-p">Terraform provisions infrastructure; Maven wrapper and Flyway manage backend/schema; React + TypeScript builds frontend. OIDC pipeline builds, tests, and deploys along the master branch. Phases are grouped according to milestones recorded in the repository.</p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 15%;">Phase</th>
<th style="width: 25%;">2026 Timeline</th>
<th style="width: 60%;">Actual Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Oct 29–Nov 01</td>
<td>Repository, frontend skeleton, catalog backend, Cognito</td>
</tr>
<tr>
<td>2</td>
<td>Nov 03–10</td>
<td>UI design, USDA data</td>
</tr>
<tr>
<td>3</td>
<td>Nov 11–12</td>
<td>Terraform network/RDS/ECR/Cognito/ALB/ECS/CloudFront; OIDC; first AWS run</td>
</tr>
<tr>
<td>4</td>
<td>Nov 13–18</td>
<td>AI, Guardrails, alarms; search, rate limiting, meal analysis, VNPAY sandbox, UI</td>
</tr>
<tr>
<td>5</td>
<td>Nov 20–22</td>
<td>Tokyo, E2E, audit/optional WAF; AI full intent, D32, audit apply and cost measurement</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 5. 5. IMPLEMENTATION PLAN AND MILESTONES -->
<section class="report-section">
<h2 class="report-h2">5. Implementation Plan and Milestones</h2>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 30%;">Date</th>
<th style="width: 70%;">Actual Milestone</th>
</tr>
</thead>
<tbody>
<tr>
<td>29/10/2026</td>
<td>Repository initialization</td>
</tr>
<tr>
<td>01/11/2026</td>
<td>Frontend skeleton, catalog backend, Cognito</td>
</tr>
<tr>
<td>03–06/11/2026</td>
<td>UI redesign</td>
</tr>
<tr>
<td>10/11/2026</td>
<td>USDA data</td>
</tr>
<tr>
<td>11/11/2026</td>
<td>Terraform networking, RDS, ECR, Cognito, ALB, ECS, and CloudFront</td>
</tr>
<tr>
<td>12/11/2026</td>
<td>OIDC, product images, and first AWS run</td>
</tr>
<tr>
<td>13/11/2026</td>
<td>AI, Guardrails, evaluation, and alarms</td>
</tr>
<tr>
<td>14–15/11/2026</td>
<td>Search, password reset, statistics, rate limiting, Spring Boot 4</td>
</tr>
<tr>
<td>16/11/2026</td>
<td>Catalog expansion, diet labels, meal analysis, VNPAY sandbox</td>
</tr>
<tr>
<td>17–18/11/2026</td>
<td>UI finalization</td>
</tr>
<tr>
<td>20/11/2026</td>
<td>Tokyo, E2E, audit, optional WAF, payment logs</td>
</tr>
<tr>
<td>21/11/2026</td>
<td>AI full intent, profiles, and D32 recommendations</td>
</tr>
<tr>
<td>22/11/2026</td>
<td>Audit apply and cost measurement</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 6. 6. BUDGET ESTIMATE -->
<section class="report-section">
<h2 class="report-h2">6. Budget Estimate</h2>
<h3 class="report-h3">Infrastructure cost</h3>
<p class="report-p">Estimated USD/month, cross-referenced with AWS Pricing Calculator on Nov 25, 2026 for Multi-AZ configuration and 2 tasks (D33), exclusive of tax, variance may be ±10%. Production is a future proposal not yet deployed. Bedrock actually invoked in Tokyo.</p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 40%;">Service / Configuration</th>
<th class="text-right" style="width: 20%;">Demo (~4h/day)</th>
<th class="text-right" style="width: 20%;">24/7 (Pricing Calculator)</th>
<th class="text-right" style="width: 20%;">Proposed Production</th>
</tr>
</thead>
<tbody>
<tr>
<td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td>
<td class="text-right">~11.6</td>
<td class="text-right">42.75</td>
<td class="text-right">~70 (Multi-AZ, db.t4g.small)</td>
</tr>
<tr>
<td>ECS Fargate ARM64, 0.5 vCPU / 1 GB, 2 tasks</td>
<td class="text-right">~5.9</td>
<td class="text-right">35.98</td>
<td class="text-right">~36–72 (2–4 tasks, auto scaling)</td>
</tr>
<tr>
<td>Application Load Balancer</td>
<td class="text-right">~3.1</td>
<td class="text-right">18.63</td>
<td class="text-right">~22</td>
</tr>
<tr>
<td>Public IPv4, 4 addresses</td>
<td class="text-right">~2.4</td>
<td class="text-right">14.60</td>
<td class="text-right">~15</td>
</tr>
<tr>
<td>Secrets Manager, 2 secrets</td>
<td class="text-right">0.85</td>
<td class="text-right">0.85</td>
<td class="text-right">0.85</td>
</tr>
<tr>
<td>Bedrock (Nova Lite as pricing reference, Tokyo)</td>
<td class="text-right">&lt;0.7</td>
<td class="text-right">0.70</td>
<td class="text-right">Based on usage</td>
</tr>
<tr>
<td>CloudFront 1.02 · CloudWatch 1.70 · ECR 0.10 · S3 0.07 · Cognito 0 · CloudTrail 0</td>
<td class="text-right">~2.9</td>
<td class="text-right">2.89</td>
<td class="text-right">~5</td>
</tr>
<tr class="total-row">
<td>Total (without WAF)</td>
<td class="text-right">~27</td>
<td class="text-right">116.40</td>
<td class="text-right">~150–190</td>
</tr>
<tr>
<td>WAF (optional, Optional group)</td>
<td class="text-right">0</td>
<td class="text-right">9.60</td>
<td class="text-right">~10</td>
</tr>
<tr class="total-row">
<td>Total with WAF</td>
<td class="text-right">—</td>
<td class="text-right">126.00</td>
<td class="text-right">~160–200</td>
</tr>
</tbody>
</table>
</div>
<p class="report-p">Cost Explorer recorded 6.44 USD for Nov 01–21, 2026, fully covered by credits. RDS 2.77; ALB 1.29; ECS 1.21; IPv4 0.74; Bedrock 0.21; Secrets Manager 0.20 USD. The listed items represent the major charges, not an itemized sum of the entire invoice. Since the app is only turned on during demo sessions, these actual numbers must not be used to extrapolate 24/7 operation. These actual figures were recorded before enabling Multi-AZ.</p>
<p class="report-p">AWS Pricing Calculator estimate dated Nov 25, 2026. The 24/7 column uses the exact figures from Calculator (Singapore, except Bedrock in Tokyo). The Demo column converts from that for approximately 120 operating hours per month: hourly charges (RDS instance, Fargate, ALB, IPv4) multiplied by 120/730, while RDS storage (5.52 USD) and usage-based items remain unchanged. Load assumptions: 50 users/month, 5 GB CloudFront, approximately 3,600 AI queries/month (1 query/minute for 2 hours/day, 1,500 input tokens, 300 output tokens). Since the Calculator did not yet list Amazon Nova 2 Lite, Amazon Nova Lite was used as the pricing reference. The estimate excludes RDS Proxy and Database Insights Advanced as they are not used by the project.</p>
</section>

<!-- 7. 7. RISK ASSESSMENT -->
<section class="report-section">
<h2 class="report-h2">7. Risk Assessment</h2>
<h3 class="report-h3">Risk matrix</h3>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 30%;">Risk</th>
<th style="width: 20%;">Impact</th>
<th style="width: 25%;">Probability</th>
<th style="width: 25%;">Level</th>
</tr>
</thead>
<tbody>
<tr>
<td>Unexpected cost</td>
<td>Medium</td>
<td>Medium</td>
<td>Medium</td>
</tr>
<tr>
<td>Personal data exposure</td>
<td>High</td>
<td>Low</td>
<td>Medium</td>
</tr>
<tr>
<td>AI incorrect/medical response</td>
<td>High</td>
<td>Medium</td>
<td>High</td>
</tr>
<tr>
<td>Bedrock quota</td>
<td>Medium</td>
<td>High (already occurred in Singapore)</td>
<td>Medium</td>
</tr>
<tr>
<td>HTTP from CloudFront to ALB</td>
<td>Medium</td>
<td>Low</td>
<td>Low</td>
</tr>
<tr>
<td>Single Availability Zone failure</td>
<td>High</td>
<td>Low</td>
<td>Medium (reduced via Multi-AZ)</td>
</tr>
</tbody>
</table>
</div>
<p class="report-p">Scoring methodology: Impact and Probability are evaluated across three levels: Low / Medium / High; Level is a combination of the two factors, after factoring in mitigation measures below. AI risk is classified as High because incorrect nutrition figures or medical advice can affect user health, thus prioritized for multi-layered controls.</p>
<h3 class="report-h3">Mitigation measures</h3>
<p class="report-p">Cost: 100 USD Budgets, alarms, and up/down scripts. RDS may automatically turn back on after 7 days stopped.</p>
<p class="report-p">Personal data: JWT and authorization; avoid logging PII, physical biometric data is not sent to the model; users can delete their own profiles.</p>
<p class="report-p">AI: Guardrails, read-only tools, metrics from DB; evaluation of 45 queries on Nov 21, 2026 achieved 17/17 safety, 27/28 lookup, 85% threshold. Query L01 still fluctuates.</p>
<p class="report-p">Quota: Tokyo replaces Singapore per D18; monitor ApplyGuardrail permissions.</p>
<p class="report-p">Origin: CloudFront prefix list and secret header reduce direct access; HTTP to ALB remains a constraint. HTTPS origin will require a custom domain and certificate in the future.</p>
<h3 class="report-h3">Contingency plan</h3>
<p class="report-p">When Bedrock is unreachable, maintain catalog and shopping flows, returning controlled AI errors. If costs rise, scale down following the runbook. When DB restoration is needed, follow the snapshot procedure in docs/runbook.md; drill record still awaits repository owner execution.</p>
</section>

<!-- 8. 8. EXPECTED OUTCOMES -->
<section class="report-section">
<h2 class="report-h2">8. Expected Outcomes</h2>
<h3 class="report-h3">Technical improvements:</h3>
<p class="report-p">React Web and API on CloudFront.</p>
<p class="report-p">Source code, tests, and OIDC workflow on GitHub.</p>
<p class="report-p">Terraform and demo-session operational guidelines.</p>
<p class="report-p">Workshop package with 7 major sections, sub-steps, and bilingual report.</p>
<h3 class="report-h3">Reference sources:</h3>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/architecture.md" target="_blank" rel="noopener noreferrer">docs/architecture.md</a></p>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/decisions.md" target="_blank" rel="noopener noreferrer">docs/decisions.md</a></p>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/api-contract.md" target="_blank" rel="noopener noreferrer">docs/api-contract.md</a></p>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/db-schema.md" target="_blank" rel="noopener noreferrer">docs/db-schema.md</a></p>
<h3 class="report-h3">Long-term value</h3>
<p class="report-p">The yet-to-be-deployed production roadmap includes RDS Multi-AZ, two tasks, a custom domain with HTTPS to ALB, and persistent WAF. Every change requires planning, fault-tolerance assessment, and updated cost estimates.</p>
</section>
</div>
