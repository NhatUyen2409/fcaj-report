---
title: "Project Proposal"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

<div class="tech-report">
<!-- HEADER -->
<header>
<div class="report-eyebrow">Project Proposal</div>
<h1 class="report-title">Personalized Nutrition E-Commerce Platform on AWS</h1>
<p class="report-subtitle">Cloud-native AI-Powered Nutrition E-Commerce Platform</p>
<p class="report-intro">
An intelligent e-commerce platform integrating generative AI for personalized nutrition analysis and meal planning, 
architected and deployed entirely on Amazon Web Services using React, Spring Boot 4, Amazon ECS Fargate, 
Amazon Bedrock, and Terraform.
</p>
</header>

<!-- 1. PROJECT OVERVIEW -->
<section class="report-section">
<h2 class="report-h2">1. Project Overview</h2>
<p class="report-p">
The Personalized Nutrition E-Commerce Platform is developed as part of the <strong>AWS First Cloud AI Journey (FCAJ)</strong> program. 
The platform delivers a healthy food e-commerce experience (Eat Clean, Low-Carb, High-Protein, Vegan) augmented by an intelligent AI assistant, 
empowering consumers to find and purchase products tailored to their nutritional requirements and fitness goals.
</p>

<h3 class="report-h3">Core Technologies and AWS Services:</h3>
<ul class="report-list">
<li><strong>Frontend:</strong> React 19, TypeScript, Vite, Tailwind CSS – Modern responsive Single Page Application.</li>
<li><strong>Backend API:</strong> Spring Boot 4 (Java 21) – RESTful microservices-ready architecture handling orders and USDA data.</li>
<li><strong>Database:</strong> PostgreSQL 17 on Amazon RDS – Standardized 152-product catalog with detailed USDA nutritional metrics.</li>
<li><strong>Distribution & Storage:</strong> Amazon CloudFront & Amazon S3 – Global low-latency CDN and secure static asset hosting.</li>
<li><strong>Compute & Load Balancing:</strong> Amazon ECS Fargate & Application Load Balancer (ALB) – Serverless container management.</li>
<li><strong>Identity & Authentication:</strong> Amazon Cognito User Pools – Secure stateless JWT Bearer token issuance and RBAC.</li>
<li><strong>Artificial Intelligence (AI):</strong> Amazon Bedrock (Nova 2 Lite) & Bedrock Guardrails – Natural Language Understanding and content moderation.</li>
<li><strong>Infrastructure as Code (IaC) & CI/CD:</strong> Terraform & GitHub Actions (AWS OIDC) – 100% automated provisioning without long-lived static keys.</li>
</ul>

<div class="report-callout">
<strong>Core AI Principle:</strong> The architecture strictly adheres to the rule that <em>AI only performs intent classification and parameter extraction</em> from the user's natural language queries. All numerical nutritional figures (Calories, Protein, Carbohydrates, Fat, and allergens) <strong>are queried directly from the verified PostgreSQL database sourced from USDA FoodData Central</strong>, eliminating AI hallucination.
</div>
</section>

<!-- 2. PROBLEMS AND SOLUTIONS -->
<section class="report-section">
<h2 class="report-h2">2. Problem Statement & Solutions</h2>
<p class="report-p"><strong>User Challenges in Traditional Food E-Commerce:</strong></p>
<ul class="report-list">
<li>Lack of transparent nutritional data on conventional food shopping platforms.</li>
<li>Hidden food allergy hazards due to ambiguous ingredient labeling.</li>
<li>Tedious manual calculation required to balance daily macro targets.</li>
<li>No flexible personalized filtering based on individual fitness goals.</li>
</ul>

<p class="report-p"><strong>Core Solution Capabilities:</strong></p>
<ul class="report-list">
<li><strong>152 USDA Standardized Catalog:</strong> Clean food catalog standardized against USDA FoodData Central with precise macro/calorie breakdown.</li>
<li><strong>Multi-Attribute Nutrition Filter:</strong> Allows users to filter by calorie ranges (Min-Max), minimum protein targets, and carb/fat ceilings.</li>
<li><strong>9 Allergens & 6 Diet Tags:</strong> Strict detection of 9 major allergens (fail-closed exclusion) and 6 dietary badges (Low-Carb, High-Protein, Vegan, Keto, Gluten-Free, Clean Eating).</li>
<li><strong>AI Natural Language Lookup:</strong> Amazon Bedrock Nova 2 Lite transforms free-text user inquiries into structured SQL query parameters.</li>
<li><strong>Nutrition Profile & Meal Suggestions:</strong> Calculates user BMR and TDEE, suggesting balanced single-meal compositions aligned with daily targets.</li>
<li><strong>Real-Time Cart Macro Summary:</strong> Automatically tallies cumulative calories and macro distribution in the shopping cart prior to checkout.</li>
<li><strong>Flexible Payment Methods:</strong> Supports Cash on Delivery (COD) and secure simulated online payment via VNPAY Sandbox gateway.</li>
<li><strong>Administrative Dashboard:</strong> Product inventory management, order processing, and USDA data synchronization.</li>
</ul>

<div class="report-callout report-callout-disclaimer">
<strong>Medical Disclaimer:</strong> This application is intended solely for general nutritional guidance and e-commerce shopping. It <strong>is not a medical device and does not offer clinical diagnosis, medical therapy, or licensed dietary treatment</strong>. Users with chronic medical conditions or severe food allergies must consult licensed healthcare professionals.
</div>
</section>

<!-- 3. AWS ARCHITECTURE -->
<section class="report-section">
<h2 class="report-h2">3. AWS Architecture</h2>
<p class="report-p">
The system architecture follows the <strong>AWS Well-Architected Framework</strong>, combining serverless containers, 
managed relational databases, and secure foundation AI services across two Asia-Pacific regions.
</p>

<!-- FIGURE 1: AWS ARCHITECTURE -->
<div class="report-figure">
<div class="report-figure-img-wrap"  title="Click to enlarge">
<img src="/fcaj-report/images/proposal/aws-architecture.png" alt="AWS Architecture Diagram" class="report-figure-img" loading="lazy" />
</div>
<div class="report-figure-caption">Figure 1: Comprehensive AWS Cloud Architecture Diagram (Singapore ap-southeast-1 & Tokyo ap-northeast-1) — <em>Click to enlarge</em></div>
</div>

<h3 class="report-h3">Architectural Specifications & Infrastructure Components:</h3>
<ul class="report-list">
<li><strong>Primary Region (Singapore - <code>ap-southeast-1</code>):</strong> Hosts all primary compute, database, storage, networking, and security services.</li>
<li><strong>AI Services Region (Tokyo - <code>ap-northeast-1</code>):</strong> Direct integration with Amazon Bedrock (Nova 2 Lite) and Bedrock Guardrails.</li>
<li><strong>Amazon CloudFront & Amazon S3:</strong> Edge caching distributes the React SPA static build from S3 and securely proxies <code>/api/*</code> traffic to the ALB.</li>
<li><strong>Application Load Balancer (ALB):</strong> Ingress controller routing incoming API traffic across ECS Fargate tasks.</li>
<li><strong>Amazon ECS Fargate:</strong> Serverless compute hosting Spring Boot 4. In demo mode, it runs <strong>a single active task</strong> provisioned with <strong>0.5 vCPU and 1 GB RAM</strong>.</li>
<li><strong>Amazon RDS PostgreSQL:</strong> PostgreSQL 17 engine on instance class <strong>db.t4g.micro with 20 GB gp3 storage in Single-AZ configuration</strong>.</li>
<li><strong>Subnet & Network Topology:</strong>
ECS Task is placed in a Public Subnet with a Public IPv4 address to pull container images from ECR and call Bedrock (Tokyo) <em>without requiring an AWS NAT Gateway</em> (saving ~$32/month per gateway). 
RDS PostgreSQL resides strictly within a Private Subnet isolated from public ingress, strictly permitting connections only from the ECS Security Group on port 5432. 
The secondary subnet in AZ-2 serves as standby resilience for future Multi-AZ failover; no concurrent tasks run in AZ-2 during demo.
</li>
<li><strong>Identity & Monitoring:</strong> Amazon Cognito User Pool manages authentication via stateless JWT tokens; AWS Secrets Manager stores credentials; CloudWatch, Budgets, and SNS provide monitoring and cost alerts.</li>
<li><strong>Current Architectural Constraint:</strong> Transport between CloudFront and ALB currently uses <strong>HTTP</strong> (Client-to-CloudFront is HTTPS; communication is secured with a Custom Secret Header validating origin).</li>
</ul>

<!-- FIGURE 2: APPLICATION FLOW -->
<div class="report-figure" style="margin-top: 28px;">
<div class="report-figure-img-wrap"  title="Click to enlarge">
<img src="/fcaj-report/images/proposal/application-flow.png" alt="Application Flow Diagram" class="report-figure-img" loading="lazy" />
</div>
<div class="report-figure-caption">Figure 2: Application Flow Diagram — Complete transaction lifecycle from Client to CloudFront, Cognito, ALB, ECS, Bedrock Tokyo, and RDS — <em>Click to enlarge</em></div>
</div>

<h3 class="report-h3">Eight-Step Application Execution Flow:</h3>
<ol class="report-list" style="padding-left: 20px;">
<li>Client sends secure HTTPS requests to the Amazon CloudFront edge distribution domain.</li>
<li>CloudFront serves cached React assets from S3 or routes <code>/api/*</code> calls to the Application Load Balancer.</li>
<li>ALB verifies the Custom Secret Header from CloudFront and routes requests to the Spring Boot container on ECS Fargate.</li>
<li>Users authenticate against Amazon Cognito User Pool; Client attaches JWT Bearer token to API request headers.</li>
<li>Spring Security validates RSA JWT cryptographic signature and enforces Role-Based Access Control (RBAC).</li>
<li>For natural language queries, Spring Boot invokes Bedrock Nova 2 Lite in Tokyo to extract structured nutrient filter parameters.</li>
<li>Backend executes SQL queries with extracted parameters against the isolated PostgreSQL RDS instance in the Private Subnet.</li>
<li>Backend returns standardized JSON containing USDA-verified nutritional items to the React SPA for immediate rendering.</li>
</ol>
</section>

<!-- 4. TECHNOLOGIES AND IMPLEMENTATION PLAN -->
<section class="report-section">
<h2 class="report-h2">4. Technologies & Implementation Plan</h2>
<p class="report-p"><strong>Technology Stack Summary:</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 20%;">Layer</th>
<th style="width: 40%;">Technology / Service</th>
<th style="width: 40%;">Role in Architecture</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Frontend</strong></td>
<td>React 19, TypeScript, Vite, Tailwind CSS</td>
<td>Responsive Single Page Application with optimized bundle delivery.</td>
</tr>
<tr>
<td><strong>Backend</strong></td>
<td>Spring Boot 4.1 (Java 21), Spring Security</td>
<td>High-throughput RESTful API with automated database migrations and security filtering.</td>
</tr>
<tr>
<td><strong>Database</strong></td>
<td>PostgreSQL 17 on Amazon RDS (db.t4g.micro)</td>
<td>Relational data persistence storing users, orders, and 152 USDA food items.</td>
</tr>
<tr>
<td><strong>AI & GenAI</strong></td>
<td>Amazon Bedrock (Nova 2 Lite), Bedrock Guardrails</td>
<td>Nutritional natural language parsing and prompt safety moderation.</td>
</tr>
<tr>
<td><strong>Compute</strong></td>
<td>Amazon ECS (Fargate), Amazon ECR, Docker</td>
<td>Serverless container execution (0.5 vCPU, 1 GB RAM active task).</td>
</tr>
<tr>
<td><strong>Networking</strong></td>
<td>Amazon CloudFront, Application Load Balancer, VPC</td>
<td>Global CDN acceleration, Layer-7 load balancing, and private network isolation.</td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td>Amazon Cognito, AWS Secrets Manager, IAM Roles</td>
<td>Identity provider, centralized credential vault, and least-privilege policies.</td>
</tr>
<tr>
<td><strong>IaC & CI/CD</strong></td>
<td>Terraform, GitHub Actions, AWS OIDC</td>
<td>100% Infrastructure as Code and automated delivery pipeline without static access keys.</td>
</tr>
</tbody>
</table>
</div>

<p class="report-p" style="margin-top: 18px;"><strong>Five Project Phases:</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 22%;">Phase Timeline</th>
<th style="width: 38%;">Key Activities</th>
<th style="width: 40%;">Deliverables</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Oct 29 – Nov 01, 2026</strong></td>
<td>Project Inception & Architecture</td>
<td>Scope specification, AWS Well-Architected design, and USDA data model definition.</td>
</tr>
<tr>
<td><strong>Nov 03 – Nov 10, 2026</strong></td>
<td>Frontend UI & USDA Dataset</td>
<td>React components, Tailwind layouts, 152-product USDA data ingestion and JPA entities.</td>
</tr>
<tr>
<td><strong>Nov 11 – Nov 12, 2026</strong></td>
<td>AWS Infrastructure Provisioning</td>
<td>Terraform modules deploying VPC, Subnets, RDS, ECR, ECS Fargate, ALB, and CloudFront.</td>
</tr>
<tr>
<td><strong>Nov 13 – Nov 18, 2026</strong></td>
<td>AI Integration & Business Logic</td>
<td>Bedrock Nova 2 Lite prompt engineering, Guardrails configuration, cart, and VNPAY Sandbox.</td>
</tr>
<tr>
<td><strong>Nov 20 – Nov 22, 2026</strong></td>
<td>End-to-End Testing & Optimization</td>
<td>Integration testing, cost reconciliation, security hardening, and final technical report.</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 5. AWS COST ESTIMATION -->
<section class="report-section">
<h2 class="report-h2">5. AWS Cost Estimation</h2>
<p class="report-p">
Expenditures are modeled across three operational scenarios and reconciled against empirical data from <strong>AWS Cost Explorer</strong>:
</p>

<p class="report-p"><strong>Table 1: Three-Scenario Monthly Cost Comparison (USD/month):</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 40%;">AWS Service</th>
<th class="text-right" style="width: 20%;">Demo (~4h/day)</th>
<th class="text-right" style="width: 20%;">24/7 Continuous</th>
<th class="text-right" style="width: 20%;">Proposed Production</th>
</tr>
</thead>
<tbody>
<tr>
<td>Amazon RDS PostgreSQL (db.t4g.micro)</td>
<td class="text-right">~4</td>
<td class="text-right">~22</td>
<td class="text-right">~70</td>
</tr>
<tr>
<td>Application Load Balancer (ALB)</td>
<td class="text-right">~3</td>
<td class="text-right">~20</td>
<td class="text-right">~22</td>
</tr>
<tr>
<td>Amazon ECS Fargate (0.5 vCPU, 1 GB RAM)</td>
<td class="text-right">~2.5</td>
<td class="text-right">~15</td>
<td class="text-right">~30</td>
</tr>
<tr>
<td>Public IPv4 Address</td>
<td class="text-right">~2</td>
<td class="text-right">~11</td>
<td class="text-right">~11</td>
</tr>
<tr>
<td>AWS Secrets Manager</td>
<td class="text-right">0.8</td>
<td class="text-right">0.8</td>
<td class="text-right">0.8</td>
</tr>
<tr>
<td>Amazon Bedrock (Nova 2 Lite)</td>
<td class="text-right">&lt; 1</td>
<td class="text-right">&lt; 1</td>
<td class="text-right">Usage-based</td>
</tr>
<tr>
<td>CloudFront, Cognito, CloudTrail, S3, ECR, CloudWatch</td>
<td class="text-right">~0–1</td>
<td class="text-right">~1–3</td>
<td class="text-right">~5</td>
</tr>
<tr>
<td>AWS WAF (Optional)</td>
<td class="text-right">0</td>
<td class="text-right">~8–10</td>
<td class="text-right">~10</td>
</tr>
<tr class="total-row">
<td>Projected Total (USD/month)</td>
<td class="text-right">~12–18</td>
<td class="text-right">~65–75</td>
<td class="text-right">~150–200</td>
</tr>
</tbody>
</table>
</div>

<p class="report-p" style="margin-top: 18px;"><strong>Table 2: Empirical Spending from AWS Cost Explorer (Nov 01 – Nov 21, 2026):</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 50%;">Primary AWS Service Item</th>
<th class="text-right" style="width: 25%;">Actual Incurred Cost (USD)</th>
<th style="width: 25%;">Operational Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Amazon RDS PostgreSQL (db.t4g.micro)</td>
<td class="text-right font-bold">2.77</td>
<td>Instance hours and 20 GB gp3 storage.</td>
</tr>
<tr>
<td>Application Load Balancer (ALB)</td>
<td class="text-right font-bold">1.29</td>
<td>Load balancer active hours and integration testing traffic.</td>
</tr>
<tr>
<td>Amazon ECS Fargate</td>
<td class="text-right font-bold">1.21</td>
<td>Serverless container compute runtime for active tasks.</td>
</tr>
<tr>
<td>Public IPv4 Address</td>
<td class="text-right font-bold">0.74</td>
<td>Public IPv4 allocation fees for task in public subnet.</td>
</tr>
<tr>
<td>Amazon Bedrock (Nova 2 Lite)</td>
<td class="text-right font-bold">0.21</td>
<td>Token processing for nutrition natural language queries.</td>
</tr>
<tr>
<td>AWS Secrets Manager</td>
<td class="text-right font-bold">0.20</td>
<td>Encrypted credential storage and retrieval API calls.</td>
</tr>
<tr class="total-row">
<td>Total Major Services Spend</td>
<td class="text-right">6.44</td>
<td>100% Offset by Promotional AWS Credits</td>
</tr>
</tbody>
</table>
</div>
<p class="report-p" style="font-size: 12.5px; color: #64748B; font-style: italic;">
* Note: Figures represent dominant expenditures incurred from Nov 01 to Nov 21, 2026. 
The production scenario reflects future architectural recommendations not yet deployed during the internship.
</p>
</section>

<!-- 6. SECURITY AND RISK MANAGEMENT -->
<section class="report-section">
<h2 class="report-h2">6. Security & Risk Management</h2>
<p class="report-p"><strong>Implemented Multi-Layered Security Controls:</strong></p>
<ul class="report-list">
<li><strong>Stateless Authentication with Cognito JWT:</strong> RSA cryptographic validation on incoming bearer tokens; completely stateless backend without session affinity.</li>
<li><strong>IAM Least Privilege & OIDC:</strong> Dedicated IAM Task and Execution Roles; GitHub Actions deployments use AWS OIDC without static long-lived credentials.</li>
<li><strong>AWS Secrets Manager:</strong> Database credentials and API keys are encrypted at rest and injected directly at container boot.</li>
<li><strong>Network Isolation & Private Subnets:</strong> RDS PostgreSQL resides strictly within private subnets, accepting ingress only from the ECS task Security Group on port 5432.</li>
<li><strong>Bedrock Guardrails Safety:</strong> Proactive defense filtering prompt injection attempts and blocking unauthorized clinical advice.</li>
<li><strong>Custom Secret Header Defense:</strong> CloudFront injects a custom cryptographic header; direct requests to the ALB public DNS are rejected with 403 Forbidden.</li>
<li><strong>AWS Budgets & SNS Alerting:</strong> Real-time budget threshold monitors dispatching immediate email alerts via Amazon SNS if spend crosses 80%.</li>
<li><strong>AWS WAF (Production Proposal):</strong> Web Application Firewall evaluating managed rulesets against SQLi, XSS, and volumetric attacks.</li>
</ul>

<p class="report-p" style="margin-top: 18px;"><strong>Risk Analysis and Mitigation Strategy:</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 25%;">Identified Risk</th>
<th style="width: 35%;">Severity & Impact</th>
<th style="width: 40%;">Implemented Mitigation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Cloud Cost Overrun</strong></td>
<td>Medium – Potential budget depletion from forgotten running resources.</td>
<td>AWS Budgets configured with SNS alerts; single active ECS task running during demo hours; lightweight db.t4g.micro RDS instance.</td>
</tr>
<tr>
<td><strong>AI Hallucination</strong></td>
<td>High – Fabricated calorie or macro figures posing potential health concerns.</td>
<td>AI scope strictly restricted to intent parsing; 100% of nutritional figures are retrieved directly from PostgreSQL USDA tables.</td>
</tr>
<tr>
<td><strong>Single-AZ Outage</strong></td>
<td>Low (Demo Environment) – Brief downtime if the primary Singapore AZ experiences disruption.</td>
<td>ECS service automatically restarts containers upon failure; Terraform manifests already define a secondary standby subnet for Multi-AZ upgrades.</td>
</tr>
<tr>
<td><strong>Allergen Ingestion Risk</strong></td>
<td>High – Undetected allergens posing severe health threats to consumers.</td>
<td>Fail-closed verification: if an item has ambiguous allergen tags matching user exclusion criteria, it is automatically omitted from suggestions.</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 7. RESULTS AND FUTURE ROADMAP -->
<section class="report-section">
<h2 class="report-h2">7. Results & Future Roadmap</h2>
<p class="report-p"><strong>Key Project Accomplishments:</strong></p>
<ul class="report-list">
<li>End-to-end cloud deployment of a full-stack personalized nutrition platform on AWS.</li>
<li>Robust serverless container operation using Amazon ECS Fargate and managed PostgreSQL RDS.</li>
<li>Accurate nutritional intent extraction with Amazon Bedrock Nova 2 Lite in Tokyo.</li>
<li>152 items standardized with 9 allergen filters and 6 dietary tags according to USDA FoodData Central.</li>
<li>100% Terraform coverage with secure GitHub Actions OIDC CI/CD automated deployment.</li>
<li>Incurred only $6.44 over three weeks, fully offset by promotional AWS credits.</li>
</ul>

<p class="report-p" style="margin-top: 18px;"><strong>Production Roadmap (Future Enhancements - Not Yet Deployed):</strong></p>
<ul class="report-list">
<li><strong>Amazon RDS Multi-AZ Deployment:</strong> Enable automatic synchronous standby replica failover achieving 99.95% availability SLA.</li>
<li><strong>Multi-Task ECS Fargate Auto-Scaling:</strong> Scale from 1 task to minimum 2 tasks distributed across multiple AZs with metric-based autoscaling.</li>
<li><strong>End-to-End HTTPS Origin Encryption:</strong> Attach AWS Certificate Manager (ACM) public certificates to the ALB with custom Route 53 domain routing.</li>
<li><strong>Permanent AWS WAF Protection:</strong> Deploy AWS WAF at the CloudFront tier with managed rule groups against layer-7 exploitation.</li>
<li><strong>Automated Backups & Cross-Region DR:</strong> Automated daily snapshots with asynchronous cross-region replication for disaster recovery.</li>
<li><strong>Deep Nutrition Algorithms:</strong> Expand to automated weekly meal planning workflows based on long-term user health metrics.</li>
</ul>
</section>
</div>
