---
title: "Đề xuất dự án (Proposal)"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

<div class="tech-report">
<!-- HEADER -->
<header>
<div class="report-eyebrow">Project Proposal</div>
<h1 class="report-title">Nền tảng Thương mại Điện tử Dinh dưỡng Cá nhân hóa trên AWS</h1>
<p class="report-subtitle">Personalized Nutrition E-Commerce Platform on AWS</p>
<p class="report-intro">
Dự án xây dựng nền tảng thương mại điện tử thực phẩm tích hợp trí tuệ nhân tạo (AI) hỗ trợ phân tích và cá nhân hóa nhu cầu dinh dưỡng cho người dùng. 
Toàn bộ hệ thống được thiết kế, vận hành và tự động hóa trên nền tảng điện toán đám mây AWS với React, Spring Boot 4, Amazon ECS Fargate, 
Amazon Bedrock và Terraform.
</p>
</header>

<!-- 1. TỔNG QUAN DỰ ÁN -->
<section class="report-section">
<h2 class="report-h2">1. Tổng quan dự án</h2>
<p class="report-p">
Nền tảng Thương mại Điện tử Dinh dưỡng Cá nhân hóa là giải pháp hỗ trợ người tiêu dùng tiếp cận thực phẩm lành mạnh 
(Eat Clean, Low-Carb, High-Protein, Vegan) dựa trên chỉ số dinh dưỡng rõ ràng và mục tiêu thể trạng cá nhân. 
Hệ thống kết hợp giữa kiến trúc backend mạnh mẽ và trợ lý AI thông minh nhằm đơn giản hóa việc tra cứu khẩu phần ăn.
</p>

<h3 class="report-h3">Các công nghệ và dịch vụ nền tảng:</h3>
<ul class="report-list">
<li><strong>Giao diện người dùng:</strong> React 19, TypeScript, Vite, Tailwind CSS – Ứng dụng Single Page Application (SPA) tối ưu tốc độ phản hồi.</li>
<li><strong>Dịch vụ ứng dụng backend:</strong> Spring Boot 4 (Java 21) – RESTful API xử lý nghiệp vụ đơn hàng, danh mục và truy vấn dữ liệu dinh dưỡng.</li>
<li><strong>Cơ sở dữ liệu:</strong> PostgreSQL 17 trên Amazon RDS – Lưu trữ chuẩn hóa 152 sản phẩm với hồ sơ dinh dưỡng USDA FoodData Central.</li>
<li><strong>Phân phối và lưu trữ tĩnh:</strong> Amazon CloudFront và Amazon S3 – Mạng CDN toàn cầu và lưu trữ an toàn mã nguồn frontend cùng hình ảnh sản phẩm.</li>
<li><strong>Môi trường tính toán và cân bằng tải:</strong> Amazon ECS Fargate và Application Load Balancer (ALB) – Vận hành container không máy chủ, tự động quản lý.</li>
<li><strong>Quản lý định danh:</strong> Amazon Cognito User Pools – Xác thực tài khoản người dùng và cấp phát JWT token an toàn.</li>
<li><strong>Trí tuệ nhân tạo (AI):</strong> Amazon Bedrock (Nova 2 Lite) và Bedrock Guardrails – Xử lý ngôn ngữ tự nhiên và kiểm duyệt an toàn nội dung.</li>
<li><strong>Hạ tầng như mã nguồn (IaC) và CI/CD:</strong> Terraform và GitHub Actions (AWS OIDC) – Tự động hóa triển khai 100%, bảo mật không lưu Access Key tĩnh.</li>
</ul>

<div class="report-callout">
<strong>Nguyên tắc cốt lõi về AI:</strong> Hệ thống tuân thủ nguyên tắc <em>AI chỉ phân tích ý đồ (Intent Classification) và trích xuất tham số lọc (Parameter Extraction)</em> từ câu hỏi tự nhiên của người dùng. Toàn bộ số liệu dinh dưỡng (calo, macro, chất dị ứng) <strong>đều được truy vấn trực tiếp từ cơ sở dữ liệu PostgreSQL chuẩn USDA</strong>, loại bỏ hoàn toàn hiện tượng AI tự sinh số liệu (hallucination).
</div>
</section>

<!-- 2. VẤN ĐỀ VÀ GIẢI PHÁP -->
<section class="report-section">
<h2 class="report-h2">2. Vấn đề và giải pháp</h2>
<p class="report-p"><strong>Khó khăn thực tế của người dùng:</strong></p>
<ul class="report-list">
<li>Thiếu thông tin dinh dưỡng minh bạch và chi tiết trên các sàn thương mại điện tử thực phẩm truyền thống.</li>
<li>Khó kiểm soát các chất gây dị ứng nguy hiểm (gluten, đậu phộng, hải sản,...) do thành phần không được ghi rõ ràng.</li>
<li>Tốn nhiều thời gian và công sức tính toán macro (Calo, Protein, Carbs, Fat) thủ công cho từng bữa ăn.</li>
<li>Thiếu công cụ tìm kiếm và lọc sản phẩm theo mục tiêu dinh dưỡng cá nhân hóa linh hoạt.</li>
</ul>

<p class="report-p"><strong>Các chức năng giải pháp cốt lõi:</strong></p>
<ul class="report-list">
<li><strong>Catalog 152 sản phẩm USDA:</strong> Dữ liệu thực phẩm sạch được chuẩn hóa theo chuẩn USDA FoodData Central với đầy đủ hàm lượng calo và macro trên từng khẩu phần.</li>
<li><strong>Bộ lọc dinh dưỡng đa tiêu chí:</strong> Cho phép lọc chính xác theo khoảng calo, mức protein tối thiểu, giới hạn carb và chất béo.</li>
<li><strong>Kiểm soát 9 allergen và 6 chế độ ăn:</strong> Nhận diện và cảnh báo nghiêm ngặt 9 chất gây dị ứng phổ biến (cơ chế fail-closed: loại bỏ khi nghi vấn) và 6 nhãn chế độ ăn (Low-Carb, High-Protein, Vegan, Keto, Gluten-Free, Clean Eating).</li>
<li><strong>AI tra cứu sản phẩm thông minh:</strong> Trợ lý Amazon Bedrock Nova 2 Lite chuyển đổi yêu cầu ngôn ngữ tự nhiên thành các tham số truy vấn dữ liệu chuẩn xác.</li>
<li><strong>Hồ sơ dinh dưỡng và gợi ý bữa ăn:</strong> Tính toán chỉ số BMR, TDEE và gợi ý cơ cấu một bữa ăn cân bằng macro phù hợp với người dùng.</li>
<li><strong>Giỏ hàng và đặt hàng trực tuyến:</strong> Theo dõi tổng lượng dinh dưỡng và biểu đồ phân bổ macro của đơn hàng theo thời gian thực.</li>
<li><strong>Thanh toán linh hoạt:</strong> Hỗ trợ thanh toán khi nhận hàng (COD) và tích hợp cổng thanh toán trực tuyến mô phỏng VNPAY Sandbox.</li>
<li><strong>Trang quản trị (Admin):</strong> Quản lý danh mục sản phẩm, theo dõi đơn hàng và cập nhật dữ liệu USDA.</li>
</ul>

<div class="report-callout report-callout-disclaimer">
<strong>Tuyên bố miễn trừ trách nhiệm y tế (Medical Disclaimer):</strong> Nền tảng được xây dựng nhằm hỗ trợ theo dõi thói quen dinh dưỡng và mua sắm thực phẩm lành mạnh; hệ thống <strong>không phải là thiết bị y tế và không đưa ra chẩn đoán, điều trị hay tư vấn y khoa chuyên nghiệp</strong>. Người dùng có bệnh lý nền cần tham khảo ý kiến bác sĩ hoặc chuyên gia dinh dưỡng.
</div>
</section>

<!-- 3. KIẾN TRÚC AWS -->
<section class="report-section">
<h2 class="report-h2">3. Kiến trúc AWS</h2>
<p class="report-p">
Hệ thống được thiết kế theo các nguyên tắc của <strong>AWS Well-Architected Framework</strong>, 
kết hợp giữa mô hình container không máy chủ, cơ sở dữ liệu quan hệ được quản lý và dịch vụ trí tuệ nhân tạo tạo sinh.
</p>

<!-- HÌNH 1: AWS ARCHITECTURE -->
<div class="report-figure">
<div class="report-figure-img-wrap"  title="Nhấp để phóng to">
<img src="/fcaj-report/images/proposal/aws-architecture.png" alt="Sơ đồ kiến trúc hạ tầng AWS" class="report-figure-img" loading="lazy" />
</div>
<div class="report-figure-caption">Hình 1: Sơ đồ kiến trúc tổng thể AWS (Singapore ap-southeast-1 & Tokyo ap-northeast-1) — <em>Nhấp để phóng to</em></div>
</div>

<h3 class="report-h3">Mô tả cấu hình và phân bổ dịch vụ:</h3>
<ul class="report-list">
<li><strong>Singapore (<code>ap-southeast-1</code>):</strong> Vùng vận hành chính chứa VPC, Subnets, ECS Fargate, ALB, RDS PostgreSQL, S3, Cognito và CloudWatch.</li>
<li><strong>Tokyo (<code>ap-northeast-1</code>):</strong> Vùng phục vụ cho Amazon Bedrock (Nova 2 Lite) và Bedrock Guardrails nhằm đảm bảo tính khả dụng của mô hình AI.</li>
<li><strong>Amazon CloudFront & S3:</strong> CloudFront phân phối giao diện React tĩnh từ S3 và chuyển tiếp API request đến ALB.</li>
<li><strong>Application Load Balancer (ALB):</strong> Tiếp nhận yêu cầu từ CloudFront, cân bằng tải và định tuyến đến cụm container Spring Boot trên ECS Fargate.</li>
<li><strong>Amazon ECS Fargate:</strong> Chạy container backend Spring Boot 4. Trong môi trường Demo, hệ thống triển khai <strong>1 task duy nhất (Active)</strong> với cấu hình tối ưu chi phí: <strong>0,5 vCPU và 1 GB RAM</strong>.</li>
<li><strong>Amazon RDS PostgreSQL:</strong> PostgreSQL 17, instance class <strong>db.t4g.micro, dung lượng 20 GB gp3, Single-AZ</strong>.</li>
<li><strong>Phân vùng mạng và tối ưu chi phí:</strong>
ECS Task đặt trong Public Subnet (gán Public IPv4) để kéo Docker image từ ECR và gọi Bedrock Tokyo mà <em>không cần khởi tạo NAT Gateway</em> (tiết kiệm ~32 USD/tháng cho mỗi NAT Gateway). 
RDS PostgreSQL đặt trong Private Subnet cách ly hoàn toàn Internet, chỉ chấp nhận kết nối nội bộ từ Security Group của ECS trên cổng 5432. 
Subnet thứ hai ở AZ-2 đóng vai trò standby resilience (sẵn sàng nâng cấp Multi-AZ trong tương lai), không chạy task đồng thời trong demo.
</li>
<li><strong>Định danh và giám sát:</strong> Amazon Cognito quản lý định danh người dùng qua JWT; AWS Secrets Manager bảo vệ mật khẩu; CloudWatch, Budgets và SNS giám sát tài nguyên và cảnh báo chi phí.</li>
<li><strong>Giới hạn kiến trúc hiện tại:</strong> Giao tiếp từ CloudFront đến ALB hiện sử dụng giao thức HTTP (kết nối Client đến CloudFront là HTTPS, kết hợp Custom Secret Header xác thực giữa CloudFront và ALB để chặn truy cập trực tiếp).</li>
</ul>

<!-- HÌNH 2: APPLICATION FLOW -->
<div class="report-figure" style="margin-top: 28px;">
<div class="report-figure-img-wrap"  title="Nhấp để phóng to">
<img src="/fcaj-report/images/proposal/application-flow.png" alt="Sơ đồ luồng hoạt động ứng dụng" class="report-figure-img" loading="lazy" />
</div>
<div class="report-figure-caption">Hình 2: Sơ đồ luồng hoạt động ứng dụng (Application Flow Diagram) — <em>Nhấp để phóng to</em></div>
</div>

<h3 class="report-h3">Luồng xử lý 8 bước của ứng dụng:</h3>
<ol class="report-list" style="padding-left: 20px;">
<li>Người dùng truy cập ứng dụng qua giao thức HTTPS đến tên miền Amazon CloudFront CDN.</li>
<li>CloudFront trả về các tệp tĩnh React SPA từ Amazon S3 hoặc chuyển tiếp yêu cầu API <code>/api/*</code> đến ALB.</li>
<li>ALB kiểm tra Custom Secret Header từ CloudFront và chuyển tiếp yêu cầu đến container Spring Boot trên ECS Fargate.</li>
<li>Người dùng xác thực với Amazon Cognito User Pool; Client đính kèm JWT Bearer token vào Header của mọi request.</li>
<li>Spring Security xác thực chữ ký số JWT của Cognito và phân quyền truy cập người dùng/quản trị viên.</li>
<li>Khi có câu hỏi tự nhiên về dinh dưỡng, Backend gọi API Amazon Bedrock Nova 2 Lite (Tokyo) để trích xuất ý đồ và tham số lọc.</li>
<li>Backend dùng tham số từ AI truy vấn dữ liệu 152 sản phẩm trực tiếp từ PostgreSQL RDS trong Private Subnet.</li>
<li>Backend trả về kết quả JSON chứa thông tin dinh dưỡng chuẩn hóa cho Client hiển thị.</li>
</ol>
</section>

<!-- 4. CÔNG NGHỆ VÀ KẾ HOẠCH TRIỂN KHAI -->
<section class="report-section">
<h2 class="report-h2">4. Công nghệ và kế hoạch triển khai</h2>
<p class="report-p"><strong>Bảng tổng hợp công nghệ:</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 20%;">Lớp kiến trúc</th>
<th style="width: 40%;">Công nghệ / Dịch vụ</th>
<th style="width: 40%;">Mục đích sử dụng</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Frontend</strong></td>
<td>React 19, TypeScript, Vite, Tailwind CSS</td>
<td>Single Page Application phản hồi nhanh, giao diện thân thiện và responsive.</td>
</tr>
<tr>
<td><strong>Backend</strong></td>
<td>Spring Boot 4.1 (Java 21), Spring Security</td>
<td>RESTful API xử lý logic đơn hàng, xác thực JWT và kết nối cơ sở dữ liệu.</td>
</tr>
<tr>
<td><strong>Database</strong></td>
<td>PostgreSQL 17 trên Amazon RDS (db.t4g.micro)</td>
<td>Lưu trữ dữ liệu quan hệ, người dùng, đơn hàng và 152 sản phẩm chuẩn USDA.</td>
</tr>
<tr>
<td><strong>AI & GenAI</strong></td>
<td>Amazon Bedrock (Nova 2 Lite), Bedrock Guardrails</td>
<td>Trích xuất ý đồ tìm kiếm dinh dưỡng và kiểm duyệt an toàn nội dung.</td>
</tr>
<tr>
<td><strong>Compute</strong></td>
<td>Amazon ECS (Fargate), Amazon ECR, Docker</td>
<td>Vận hành container backend không máy chủ (0,5 vCPU, 1 GB RAM active task).</td>
</tr>
<tr>
<td><strong>Networking</strong></td>
<td>Amazon CloudFront, Application Load Balancer, VPC</td>
<td>Phân phối CDN toàn cầu, cân bằng tải và phân vùng mạng bảo vệ dữ liệu.</td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td>Amazon Cognito, AWS Secrets Manager, IAM Roles</td>
<td>Quản lý định danh người dùng và bảo mật thông tin xác thực backend.</td>
</tr>
<tr>
<td><strong>IaC & CI/CD</strong></td>
<td>Terraform, GitHub Actions, AWS OIDC</td>
<td>Tự động hóa 100% hạ tầng và triển khai liên tục không dùng static keys.</td>
</tr>
</tbody>
</table>
</div>

<p class="report-p" style="margin-top: 18px;"><strong>Kế hoạch 5 giai đoạn thực hiện:</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 22%;">Giai đoạn</th>
<th style="width: 38%;">Hạng mục chính</th>
<th style="width: 40%;">Kết quả bàn giao</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>29/10 – 01/11/2026</strong></td>
<td>Khởi tạo & Thiết kế</td>
<td>Xác định phạm vi, thiết kế kiến trúc AWS và mô hình dữ liệu dinh dưỡng.</td>
</tr>
<tr>
<td><strong>03/11 – 10/11/2026</strong></td>
<td>Giao diện & Dữ liệu</td>
<td>Phát triển giao diện React, chuẩn hóa 152 sản phẩm USDA và các Entity backend.</td>
</tr>
<tr>
<td><strong>11/11 – 12/11/2026</strong></td>
<td>Triển khai hạ tầng</td>
<td>Viết Terraform triển khai VPC, Subnets, RDS, ECR, ECS Fargate, ALB và CloudFront.</td>
</tr>
<tr>
<td><strong>13/11 – 18/11/2026</strong></td>
<td>AI & Nghiệp vụ</td>
<td>Tích hợp Bedrock Nova 2 Lite, cấu hình Guardrails, hoàn thiện giỏ hàng và VNPAY Sandbox.</td>
</tr>
<tr>
<td><strong>20/11 – 22/11/2026</strong></td>
<td>Kiểm thử & Tối ưu</td>
<td>Kiểm thử tích hợp đầu cuối, tối ưu chi phí thực tế và hoàn tất tài liệu đồ án.</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 5. ƯỚC TÍNH CHI PHÍ -->
<section class="report-section">
<h2 class="report-h2">5. Ước tính chi phí</h2>
<p class="report-p">
Chi phí được ước tính dựa trên 3 kịch bản vận hành và được đối chiếu với dữ liệu thực tế từ <strong>AWS Cost Explorer</strong>:
</p>

<p class="report-p"><strong>Bảng 1: So sánh chi phí theo 3 kịch bản vận hành (USD/tháng):</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 40%;">Dịch vụ AWS</th>
<th class="text-right" style="width: 20%;">Demo (~4h/ngày)</th>
<th class="text-right" style="width: 20%;">24/7</th>
<th class="text-right" style="width: 20%;">Production đề xuất</th>
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
<td>Amazon ECS Fargate (0,5 vCPU, 1 GB RAM)</td>
<td class="text-right">~2,5</td>
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
<td class="text-right">0,8</td>
<td class="text-right">0,8</td>
<td class="text-right">0,8</td>
</tr>
<tr>
<td>Amazon Bedrock (Nova 2 Lite)</td>
<td class="text-right">Dưới 1</td>
<td class="text-right">Dưới 1</td>
<td class="text-right">Theo lượng dùng</td>
</tr>
<tr>
<td>CloudFront, Cognito, CloudTrail, S3, ECR, CloudWatch</td>
<td class="text-right">~0–1</td>
<td class="text-right">~1–3</td>
<td class="text-right">~5</td>
</tr>
<tr>
<td>AWS WAF (Tùy chọn)</td>
<td class="text-right">0</td>
<td class="text-right">~8–10</td>
<td class="text-right">~10</td>
</tr>
<tr class="total-row">
<td>Tổng dự kiến (USD/tháng)</td>
<td class="text-right">~12–18</td>
<td class="text-right">~65–75</td>
<td class="text-right">~150–200</td>
</tr>
</tbody>
</table>
</div>

<p class="report-p" style="margin-top: 18px;"><strong>Bảng 2: Chi phí thực tế ghi nhận từ AWS Cost Explorer (01/11 – 21/11/2026):</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 50%;">Hạng mục dịch vụ chính</th>
<th class="text-right" style="width: 25%;">Chi phí phát sinh (USD)</th>
<th style="width: 25%;">Ghi chú</th>
</tr>
</thead>
<tbody>
<tr>
<td>Amazon RDS PostgreSQL (db.t4g.micro)</td>
<td class="text-right font-bold">2,77</td>
<td>Instance PostgreSQL và 20 GB gp3 storage.</td>
</tr>
<tr>
<td>Application Load Balancer (ALB)</td>
<td class="text-right font-bold">1,29</td>
<td>Cân bằng tải kiểm thử tích hợp hệ thống.</td>
</tr>
<tr>
<td>Amazon ECS Fargate</td>
<td class="text-right font-bold">1,21</td>
<td>Tài nguyên container Spring Boot hoạt động.</td>
</tr>
<tr>
<td>Public IPv4 Address</td>
<td class="text-right font-bold">0,74</td>
<td>Địa chỉ IPv4 công cộng cho task trong public subnet.</td>
</tr>
<tr>
<td>Amazon Bedrock (Nova 2 Lite)</td>
<td class="text-right font-bold">0,21</td>
<td>Token phân tích ngôn ngữ tự nhiên câu hỏi dinh dưỡng.</td>
</tr>
<tr>
<td>AWS Secrets Manager</td>
<td class="text-right font-bold">0,20</td>
<td>Lưu trữ và truy xuất các khóa bí mật hệ thống.</td>
</tr>
<tr class="total-row">
<td>Tổng chi phí các khoản chính</td>
<td class="text-right">6,44</td>
<td>Được bù đắp 100% bằng AWS Credits</td>
</tr>
</tbody>
</table>
</div>
<p class="report-p" style="font-size: 12.5px; color: #64748B; font-style: italic;">
* Ghi chú: Số liệu trên là các khoản chi phí chính ghi nhận trong kỳ đo từ 01/11 đến 21/11/2026, không phải toàn bộ hóa đơn. 
Phương án Production là kế hoạch đề xuất cho tương lai, chưa triển khai thực tế trong khuôn khổ kỳ thực tập.
</p>
</section>

<!-- 6. BẢO MẬT VÀ QUẢN LÝ RỦI RO -->
<section class="report-section">
<h2 class="report-h2">6. Bảo mật và quản lý rủi ro</h2>
<p class="report-p"><strong>Các cơ chế bảo mật đã triển khai:</strong></p>
<ul class="report-list">
<li><strong>Xác thực Stateless với Cognito JWT:</strong> Kiểm tra chữ ký số RSA từ token của Cognito trên mọi API request, loại bỏ hoàn toàn việc lưu session tại máy chủ backend.</li>
<li><strong>Nguyên tắc đặc quyền tối thiểu (IAM Least Privilege):</strong> Phân quyền qua IAM Task Role chuyên biệt cho ECS; GitHub Actions triển khai qua AWS OIDC không dùng key tĩnh.</li>
<li><strong>Quản lý bí mật bằng Secrets Manager:</strong> Mật khẩu database và các secret được lưu tập trung và inject vào container lúc khởi động.</li>
<li><strong>Cách ly mạng Private Subnet:</strong> RDS PostgreSQL nằm hoàn toàn trong Private Subnet, chỉ chấp nhận kết nối nội bộ từ Security Group của ECS trên cổng 5432.</li>
<li><strong>Kiểm duyệt AI qua Bedrock Guardrails:</strong> Thiết lập bộ lọc ngăn chặn prompt injection và ngăn chặn việc đưa ra lời khuyên y tế sai lệch.</li>
<li><strong>Bảo vệ ALB bằng Custom Secret Header:</strong> Thiết lập header bí mật giữa CloudFront và ALB; các request gọi trực tiếp vào ALB sẽ bị chặn (403 Forbidden).</li>
<li><strong>Giám sát ngân sách AWS Budgets & SNS:</strong> Tự động gửi email cảnh báo khi chi phí chạm 80% ngân sách dự kiến.</li>
<li><strong>AWS WAF (Tùy chọn cho Production):</strong> Tường lửa ứng dụng web phòng chống SQL Injection, XSS và DDoS.</li>
</ul>

<p class="report-p" style="margin-top: 18px;"><strong>Ma trận đánh giá rủi ro và biện pháp giảm thiểu:</strong></p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 25%;">Rủi ro tiềm ẩn</th>
<th style="width: 35%;">Mức độ & Tác động</th>
<th style="width: 40%;">Biện pháp giảm thiểu</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Vượt chi phí (Cost Overrun)</strong></td>
<td>Trung bình – Có thể phát sinh chi phí nếu quên tắt tài nguyên.</td>
<td>Cấu hình AWS Budgets cảnh báo qua SNS; chỉ chạy 1 ECS task trong giờ làm việc; dùng Fargate và RDS db.t4g.micro.</td>
</tr>
<tr>
<td><strong>Ảo giác AI (AI Hallucination)</strong></td>
<td>Nghiêm trọng – Nếu AI tự đưa ra con số calo/macro sai lệch sẽ ảnh hưởng sức khỏe.</td>
<td>Giới hạn AI chỉ trích xuất intent/filter; 100% số liệu dinh dưỡng được truy vấn từ bảng USDA trong PostgreSQL.</td>
</tr>
<tr>
<td><strong>Sự cố đơn vùng (Single-AZ Failure)</strong></td>
<td>Thấp (môi trường Demo) – Có thể gặp gián đoạn nếu AZ Singapore gặp lỗi.</td>
<td>ECS service tự tạo task mới khi crash; kiến trúc Terraform đã sẵn sàng subnet thứ hai để nâng cấp Multi-AZ.</td>
</tr>
<tr>
<td><strong>Dị ứng thực phẩm (Allergen Safety)</strong></td>
<td>Nghiêm trọng – Bỏ sót chất dị ứng có thể nguy hiểm cho người dùng.</td>
<td>Áp dụng cơ chế fail-closed: nếu sản phẩm có nghi vấn chứa allergen người dùng chọn, hệ thống tự động loại trừ khỏi kết quả.</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 7. KẾT QUẢ VÀ ĐỊNH HƯỚNG -->
<section class="report-section">
<h2 class="report-h2">7. Kết quả và định hướng</h2>
<p class="report-p"><strong>Kết quả đạt được:</strong></p>
<ul class="report-list">
<li>Triển khai thành công nền tảng full-stack thương mại điện tử dinh dưỡng hoàn chỉnh trên hạ tầng đám mây AWS.</li>
<li>Vận hành ổn định mô hình Serverless Container với Amazon ECS Fargate và cơ sở dữ liệu quan hệ Amazon RDS PostgreSQL.</li>
<li>Tích hợp thành công Amazon Bedrock Nova 2 Lite trích xuất ý đồ tìm kiếm dinh dưỡng ngôn ngữ tự nhiên chính xác.</li>
<li>Chuẩn hóa 152 sản phẩm thực phẩm theo nguồn USDA, tích hợp bộ lọc dinh dưỡng, 9 chất dị ứng và 6 chế độ ăn.</li>
<li>Tự động hóa 100% hạ tầng bằng Terraform và thiết lập quy trình CI/CD an toàn qua GitHub Actions với AWS OIDC.</li>
<li>Kiểm soát chi phí thực tế xuất sắc: chỉ phát sinh 6,44 USD trong 3 tuần và được tài trợ 100% bằng AWS Credits.</li>
</ul>

<p class="report-p" style="margin-top: 18px;"><strong>Định hướng nâng cấp Production (Kế hoạch tương lai chưa triển khai):</strong></p>
<ul class="report-list">
<li><strong>Chuyển đổi Amazon RDS sang Multi-AZ:</strong> Kích hoạt Standby Replica tự động failover để đạt độ sẵn sàng cao 99.95%.</li>
<li><strong>Mở rộng cụm ECS Fargate tối thiểu 2 tasks đa vùng:</strong> Thiết lập chính sách tự động co giãn (Auto Scaling Policy) theo CPU/RAM.</li>
<li><strong>Bảo mật HTTPS toàn trình (Origin SSL/TLS):</strong> Tích hợp chứng chỉ ACM lên ALB với tên miền tùy chỉnh qua Route 53.</li>
<li><strong>Triển khai AWS WAF thường trực:</strong> Bảo vệ toàn diện tầng CDN CloudFront trước các cuộc tấn công DDoS và khai thác lỗ hổng web.</li>
<li><strong>Chiến lược sao lưu tự động & Disaster Recovery:</strong> Tự động snapshot RDS hàng ngày và sao chép định kỳ sang AWS Region thứ hai.</li>
<li><strong>Mở rộng thuật toán phân tích dinh dưỡng:</strong> Bổ sung tính năng lập kế hoạch thực đơn trọn gói theo tuần dựa trên hồ sơ sức khỏe dài hạn.</li>
</ul>
</section>
</div>
