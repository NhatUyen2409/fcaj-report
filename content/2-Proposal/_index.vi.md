---
title: "Đề xuất dự án (Proposal)"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

<div class="tech-report">
<header>
<div class="report-eyebrow">Đề xuất dự án</div>
<p class="report-intro">Thiết kế kiến trúc, phạm vi, vấn đề giải quyết, kế hoạch và ước tính chi phí cho dự án workshop.</p>
<h1 class="report-title">Nền tảng Thương mại Điện tử Dinh dưỡng Cá nhân hóa trên AWS</h1>
<p class="report-subtitle">Tra cứu dinh dưỡng có nguồn và mua sắm trên hạ tầng AWS</p>
</header>

<!-- 1. 1. TÓM TẮT ĐỀ XUẤT -->
<section class="report-section">
<h2 class="report-h2">1. Tóm tắt đề xuất</h2>
<p class="report-p">Nền tảng thương mại điện tử dinh dưỡng cá nhân hóa trên AWS hỗ trợ tra cứu thực phẩm, mua hàng và gợi ý bữa ăn từ dữ liệu có nguồn. React gọi Spring Boot qua CloudFront và ALB; PostgreSQL lưu dữ liệu, Bedrock chỉ diễn giải yêu cầu. Sản phẩm thiếu dữ liệu bị loại khi lọc dinh dưỡng hoặc allergen. Số liệu trả lời do code lấy từ DB, kết hợp vận hành theo buổi demo để kiểm soát chi phí.</p>
</section>

<!-- 2. 2. VẤN ĐỀ CẦN GIẢI QUYẾT -->
<section class="report-section">
<h2 class="report-h2">2. Vấn đề cần giải quyết</h2>
<h3 class="report-h3">Vấn đề là gì?</h3>
<p class="report-p">Người mua khó so sánh thực phẩm khi dữ liệu dinh dưỡng và allergen thiếu nhất quán. Câu trả lời AI có thể chứa con số thiếu căn cứ nếu model tự sinh nội dung.</p>
<h3 class="report-h3">Giải pháp</h3>
<p class="report-p">Người mua khó đối chiếu dữ liệu dinh dưỡng và allergen giữa các sản phẩm. Chatbot sinh văn bản có thể đưa ra con số không có căn cứ. MVP gồm catalog 152 sản phẩm USDA, tài khoản, bộ lọc theo dinh dưỡng, 9 allergen và 6 nhãn chế độ ăn; phân tích bữa ăn; AI tra cứu chỉ đọc; giỏ hàng, đặt hàng, quản lý sản phẩm, ảnh, đơn, thống kê và nhật ký thanh toán. COD và VNPAY sandbox nằm trong phạm vi.</p>
<p class="report-p">D32 bổ sung hồ sơ và gợi ý một bữa gồm món protein, rau/trái cây và tinh bột. Mục tiêu tính bằng Mifflin-St Jeor × mức vận động. Chỉ áp dụng cho tuổi 18–65, BMI 17–35, loại trừ mang thai, cho con bú và bệnh cần giám sát. Không có thanh toán thật, hoàn tiền tự động hoặc tư vấn y tế. Danh tính lấy từ JWT; trừ kho bằng UPDATE có điều kiện trong transaction.</p>
<h3 class="report-h3">Lợi ích và hiệu quả đầu tư</h3>
<p class="report-p">Người mua tra cứu thông tin từ DB, lọc theo nhu cầu và xem giới hạn dữ liệu. Cửa hàng quản lý catalog, ảnh, đơn và nhật ký thanh toán trong cùng ứng dụng. Cost Explorer ghi 6,44 USD cho 01–21/11/2026, toàn bộ được credit bù. Chưa có số liệu doanh thu hay tiết kiệm lao động để tính ROI tài chính.</p>
</section>

<!-- 3. 3. KIẾN TRÚC GIẢI PHÁP -->
<section class="report-section">
<h2 class="report-h2">3. Kiến trúc giải pháp</h2>
<h3 class="report-h3">AWS architecture reference</h3>
<p class="report-p">Nhấp vào hình để phóng to / tương tác thu phóng</p>
<div class="report-figure">
<a href="/fcaj-report/images/workshop/5.1-overview/aws-architecture.png" target="_blank" class="report-figure-img-wrap" title="Nhấp để phóng to">
<img src="/fcaj-report/images/workshop/5.1-overview/aws-architecture.png" alt="Sơ đồ kiến trúc hạ tầng AWS" class="report-figure-img" loading="lazy" />
</a>
<div class="report-figure-caption">Sơ đồ kiến trúc AWS vẽ trên draw.io bằng bộ AWS Architecture Icons, cập nhật Multi-AZ và AWS STS ngày 25/11/2026</div>
</div>
<p class="report-p">Từ 22/11/2026 (D33), môi trường dev chạy 2 task ECS, mỗi Availability Zone một task, và RDS ở chế độ Multi-AZ với bản dự phòng (Standby) ở AZ thứ hai. Diễn tập Reboot with failover ngày 22/11 chuyển AZ chính từ ap-southeast-1a sang ap-southeast-1b trong khoảng 20–45 giây; API gián đoạn khoảng nửa phút rồi tự phục hồi, không mất dữ liệu.</p>
<h3 class="report-h3">Các dịch vụ AWS sử dụng</h3>
<p class="report-p">CloudFront + S3 — React SPA và ảnh qua OAC; Function viết lại đường dẫn; hai bucket riêng tư.</p>
<p class="report-p">ALB + ECS Fargate + ECR — ALB nhận CloudFront + header bí mật; Spring Boot 4 / Java 21, ARM64, 0,5 vCPU / 1 GB, 2 task ở 2 AZ.</p>
<p class="report-p">RDS PostgreSQL + Secrets Manager — db.t4g.micro, 20 GB gp3, Multi-AZ (standby ở AZ thứ hai), private subnet, mã hóa; Flyway V1–V11.</p>
<p class="report-p">Cognito — JWT sub và cognito:groups; USER / ADMIN.</p>
<p class="report-p">Bedrock + Guardrails — Nova 2 Lite ở Tokyo; tool chỉ đọc, số liệu do code lấy từ DB.</p>
<p class="report-p">CloudWatch + SNS + Budgets — Log 14 ngày, 7 alarm, cảnh báo thư điện tử; ngân sách 100 USD.</p>
<p class="report-p">CloudTrail + S3 audit + WAF — Audit và ALB logs lưu 30 ngày; WAF chỉ bật khi demo; KMS do AWS quản lý.</p>
<p class="report-p">Terraform + IAM + STS + GitHub Actions — State S3 use_lockfile; SSO, boundary; CI/CD qua OIDC, AWS STS cấp quyền tạm thời (AssumeRoleWithWebIdentity), không lưu access key.</p>
<p class="report-p">Ứng dụng ở ap-southeast-1, tiền tố nutrition-dev, chỉ một môi trường dev. D15 đặt ECS ở public subnet với IP công khai để tránh chi phí NAT, còn RDS giữ private. D17 chọn một môi trường để phù hợp đồ án. D18 chuyển lời gọi Bedrock và Guardrail sang ap-northeast-1 vì quota Singapore của tài khoản bằng 0; profile jp.amazon.nova-2-lite-v1:0. D24/D31 giới hạn model vào searchProducts với intent search, facts, compare, plan; số liệu do backend ghép. CloudFront → ALB hiện dùng HTTP vì chưa có domain riêng.</p>
<h3 class="report-h3">Thiết kế thành phần</h3>
<p class="report-p">Frontend React + TypeScript hiển thị catalog, giỏ hàng, hồ sơ, gợi ý và trang quản trị.</p>
<p class="report-p">Backend Spring Boot 4 / Java 21: catalog quản lý tra cứu; commerce xử lý giỏ/đơn; payments xác minh IPN; ai trích ý định; admin cung cấp API quản trị; profile tính mục tiêu và gợi ý.</p>
<p class="report-p">Database PostgreSQL dùng SQL tham số hóa và Flyway V1–V11.</p>
<p class="report-p">AI dùng Nova 2 Lite với Guardrails; code kiểm bộ lọc và ghép số liệu từ DB.</p>
<p class="report-p">CI/CD GitHub Actions kiểm thử, build ARM64, lấy quyền tạm thời từ AWS STS qua OIDC, đẩy ECR và deploy.</p>
</section>

<!-- 4. 4. TRIỂN KHAI KỸ THUẬT -->
<section class="report-section">
<h2 class="report-h2">4. Triển khai kỹ thuật</h2>
<p class="report-p">Terraform dựng hạ tầng; Maven wrapper và Flyway quản lý backend/schema; React + TypeScript tạo frontend. Pipeline OIDC build, kiểm thử và triển khai theo nhánh master. Các pha được nhóm theo mốc đã ghi trong repo.</p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 15%;">Pha</th>
<th style="width: 25%;">Thời gian 2026</th>
<th style="width: 60%;">Nội dung thực tế</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>29/10–01/11</td>
<td>Repo, khung frontend, catalog backend, Cognito</td>
</tr>
<tr>
<td>2</td>
<td>03–10/11</td>
<td>Thiết kế giao diện, dữ liệu USDA</td>
</tr>
<tr>
<td>3</td>
<td>11–12/11</td>
<td>Terraform mạng/RDS/ECR/Cognito/ALB/ECS/CloudFront; OIDC; chạy AWS lần đầu</td>
</tr>
<tr>
<td>4</td>
<td>13–18/11</td>
<td>AI, Guardrails, alarm; tìm kiếm, giới hạn tốc độ, phân tích bữa ăn, VNPAY sandbox, giao diện</td>
</tr>
<tr>
<td>5</td>
<td>20–22/11</td>
<td>Tokyo, E2E, audit/WAF tùy chọn; AI đủ intent, D32, apply audit và đo chi phí</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 5. 5. KẾ HOẠCH VÀ MỐC TRIỂN KHAI -->
<section class="report-section">
<h2 class="report-h2">5. Kế hoạch và mốc triển khai</h2>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 30%;">Ngày</th>
<th style="width: 70%;">Mốc thực tế</th>
</tr>
</thead>
<tbody>
<tr>
<td>29/10/2026</td>
<td>Khởi tạo repo</td>
</tr>
<tr>
<td>01/11/2026</td>
<td>Khung frontend, catalog backend, Cognito</td>
</tr>
<tr>
<td>03–06/11/2026</td>
<td>Thiết kế lại giao diện</td>
</tr>
<tr>
<td>10/11/2026</td>
<td>Dữ liệu USDA</td>
</tr>
<tr>
<td>11/11/2026</td>
<td>Terraform mạng, RDS, ECR, Cognito, ALB, ECS và CloudFront</td>
</tr>
<tr>
<td>12/11/2026</td>
<td>OIDC, ảnh sản phẩm và lần chạy AWS đầu tiên</td>
</tr>
<tr>
<td>13/11/2026</td>
<td>AI, Guardrails, đánh giá và alarm</td>
</tr>
<tr>
<td>14–15/11/2026</td>
<td>Tìm kiếm, quên mật khẩu, thống kê, giới hạn tốc độ, Spring Boot 4</td>
</tr>
<tr>
<td>16/11/2026</td>
<td>Mở rộng catalog, nhãn chế độ ăn, phân tích bữa, VNPAY sandbox</td>
</tr>
<tr>
<td>17–18/11/2026</td>
<td>Hoàn thiện giao diện</td>
</tr>
<tr>
<td>20/11/2026</td>
<td>Tokyo, E2E, audit, WAF tùy chọn, nhật ký thanh toán</td>
</tr>
<tr>
<td>21/11/2026</td>
<td>AI đủ intent, hồ sơ và gợi ý D32</td>
</tr>
<tr>
<td>22/11/2026</td>
<td>Apply audit và đo chi phí</td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- 6. 6. ƯỚC TÍNH NGÂN SÁCH -->
<section class="report-section">
<h2 class="report-h2">6. Ước tính ngân sách</h2>
<h3 class="report-h3">Chi phí hạ tầng</h3>
<p class="report-p">Ước tính USD/tháng, đối chiếu AWS Pricing Calculator ngày 25/11/2026 cho cấu hình Multi-AZ và 2 task (D33), chưa thuế, sai lệch có thể ±10%. Production là phương án tương lai chưa triển khai. Bedrock thực tế gọi tại Tokyo.</p>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 40%;">Dịch vụ / Cấu hình</th>
<th class="text-right" style="width: 20%;">Demo (~4h/ngày)</th>
<th class="text-right" style="width: 20%;">24/7 (Pricing Calculator)</th>
<th class="text-right" style="width: 20%;">Production đề xuất</th>
</tr>
</thead>
<tbody>
<tr>
<td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td>
<td class="text-right">~11,6</td>
<td class="text-right">42,75</td>
<td class="text-right">~70 (Multi-AZ, db.t4g.small)</td>
</tr>
<tr>
<td>ECS Fargate ARM64, 0,5 vCPU / 1 GB, 2 task</td>
<td class="text-right">~5,9</td>
<td class="text-right">35,98</td>
<td class="text-right">~36–72 (2–4 task, auto scaling)</td>
</tr>
<tr>
<td>Application Load Balancer</td>
<td class="text-right">~3,1</td>
<td class="text-right">18,63</td>
<td class="text-right">~22</td>
</tr>
<tr>
<td>Public IPv4, 4 địa chỉ</td>
<td class="text-right">~2,4</td>
<td class="text-right">14,60</td>
<td class="text-right">~15</td>
</tr>
<tr>
<td>Secrets Manager, 2 secret</td>
<td class="text-right">0,85</td>
<td class="text-right">0,85</td>
<td class="text-right">0,85</td>
</tr>
<tr>
<td>Bedrock (Nova Lite làm giá tham chiếu, Tokyo)</td>
<td class="text-right">&lt;0,7</td>
<td class="text-right">0,70</td>
<td class="text-right">Theo lượng dùng</td>
</tr>
<tr>
<td>CloudFront 1,02 · CloudWatch 1,70 · ECR 0,10 · S3 0,07 · Cognito 0 · CloudTrail 0</td>
<td class="text-right">~2,9</td>
<td class="text-right">2,89</td>
<td class="text-right">~5</td>
</tr>
<tr class="total-row">
<td>Tổng (không WAF)</td>
<td class="text-right">~27</td>
<td class="text-right">116,40</td>
<td class="text-right">~150–190</td>
</tr>
<tr>
<td>WAF (tùy chọn, nhóm Optional)</td>
<td class="text-right">0</td>
<td class="text-right">9,60</td>
<td class="text-right">~10</td>
</tr>
<tr class="total-row">
<td>Tổng có WAF</td>
<td class="text-right">—</td>
<td class="text-right">126,00</td>
<td class="text-right">~160–200</td>
</tr>
</tbody>
</table>
</div>
<p class="report-p">Cost Explorer ghi nhận 6,44 USD cho 01–21/11/2026, được credit bù toàn bộ. RDS 2,77; ALB 1,29; ECS 1,21; IPv4 0,74; Bedrock 0,21; Secrets Manager 0,20 USD. Các khoản liệt kê là những khoản lớn, không phải phép cộng chi tiết toàn bộ hóa đơn. App chỉ bật khi demo nên không dùng số thực tế này để suy ra mức chạy 24/7. Số thực tế này ghi nhận trước khi bật Multi-AZ.</p>
<p class="report-p">Bảng giá AWS Pricing Calculator: estimate ngày 25/11/2026. Cột 24/7 lấy đúng số của Calculator (Singapore, riêng Bedrock ở Tokyo). Cột Demo quy đổi từ đó cho khoảng 120 giờ chạy mỗi tháng: các khoản tính theo giờ (RDS instance, Fargate, ALB, IPv4) nhân 120/730, còn ổ đĩa RDS (5,52 USD) và các khoản theo lượng dùng giữ nguyên. Giả định tải: 50 người dùng/tháng, 5 GB CloudFront, khoảng 3.600 câu hỏi AI/tháng (1 câu/phút trong 2 giờ/ngày, 1.500 token vào, 300 token ra). Calculator chưa có Amazon Nova 2 Lite nên dùng Amazon Nova Lite làm giá tham chiếu. Estimate không tính RDS Proxy và Database Insights Advanced vì dự án không dùng.</p>
</section>

<!-- 7. 7. ĐÁNH GIÁ RỦI RO -->
<section class="report-section">
<h2 class="report-h2">7. Đánh giá rủi ro</h2>
<h3 class="report-h3">Ma trận rủi ro</h3>
<div class="report-table-wrapper">
<table class="report-table">
<thead>
<tr>
<th style="width: 30%;">Rủi ro</th>
<th style="width: 20%;">Ảnh hưởng</th>
<th style="width: 25%;">Khả năng</th>
<th style="width: 25%;">Mức độ</th>
</tr>
</thead>
<tbody>
<tr>
<td>Chi phí ngoài dự kiến</td>
<td>Trung bình</td>
<td>Trung bình</td>
<td>Trung bình</td>
</tr>
<tr>
<td>Lộ dữ liệu cá nhân</td>
<td>Cao</td>
<td>Thấp</td>
<td>Trung bình</td>
</tr>
<tr>
<td>AI trả lời sai/y tế</td>
<td>Cao</td>
<td>Trung bình</td>
<td>Cao</td>
</tr>
<tr>
<td>Quota Bedrock</td>
<td>Trung bình</td>
<td>Cao (đã xảy ra ở Singapore)</td>
<td>Trung bình</td>
</tr>
<tr>
<td>HTTP từ CloudFront tới ALB</td>
<td>Trung bình</td>
<td>Thấp</td>
<td>Thấp</td>
</tr>
<tr>
<td>Sự cố một Availability Zone</td>
<td>Cao</td>
<td>Thấp</td>
<td>Trung bình (đã giảm nhờ Multi-AZ)</td>
</tr>
</tbody>
</table>
</div>
<p class="report-p">Cách chấm: Ảnh hưởng và Khả năng theo ba mức Thấp / Trung bình / Cao; Mức độ là kết hợp của hai yếu tố, sau khi tính các biện pháp giảm thiểu bên dưới. Rủi ro AI được xếp Cao vì sai số liệu dinh dưỡng hoặc lời khuyên y tế có thể ảnh hưởng tới sức khỏe người dùng, nên được ưu tiên kiểm soát nhiều lớp.</p>
<h3 class="report-h3">Biện pháp giảm thiểu</h3>
<p class="report-p">Chi phí: Budgets 100 USD, alarm và up/down. RDS có thể tự bật sau 7 ngày dừng.</p>
<p class="report-p">Dữ liệu cá nhân: JWT và phân quyền; tránh log PII, dữ liệu cơ thể không gửi model; người dùng tự xóa hồ sơ.</p>
<p class="report-p">AI: Guardrails, tool chỉ đọc, số liệu từ DB; đánh giá 45 câu ngày 21/11/2026 đạt an toàn 17/17, tra cứu 27/28, ngưỡng 85%. Câu L01 còn dao động.</p>
<p class="report-p">Quota: Tokyo thay cho Singapore theo D18; theo dõi quyền ApplyGuardrail.</p>
<p class="report-p">Origin: prefix list CloudFront và header bí mật giảm truy cập trực tiếp; HTTP tới ALB vẫn là hạn chế. HTTPS origin cần domain và chứng chỉ trong tương lai.</p>
<h3 class="report-h3">Phương án dự phòng</h3>
<p class="report-p">Khi Bedrock không gọi được, duy trì catalog và luồng mua hàng, trả lỗi AI có kiểm soát. Nếu chi phí tăng, dùng down theo runbook. Khi cần khôi phục DB, làm theo quy trình snapshot trong docs/runbook.md; biên bản diễn tập vẫn chờ chủ repo thực hiện.</p>
</section>

<!-- 8. 8. KẾT QUẢ KỲ VỌNG -->
<section class="report-section">
<h2 class="report-h2">8. Kết quả kỳ vọng</h2>
<h3 class="report-h3">Cải thiện kỹ thuật:</h3>
<p class="report-p">Web React và API trên CloudFront.</p>
<p class="report-p">Mã nguồn, kiểm thử và workflow OIDC trên GitHub.</p>
<p class="report-p">Terraform và hướng dẫn vận hành theo buổi demo.</p>
<p class="report-p">Bộ workshop 7 mục lớn cùng các bước con và báo cáo song ngữ.</p>
<h3 class="report-h3">Nguồn đối chiếu:</h3>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/architecture.md" target="_blank" rel="noopener noreferrer">docs/architecture.md</a></p>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/decisions.md" target="_blank" rel="noopener noreferrer">docs/decisions.md</a></p>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/api-contract.md" target="_blank" rel="noopener noreferrer">docs/api-contract.md</a></p>
<p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/db-schema.md" target="_blank" rel="noopener noreferrer">docs/db-schema.md</a></p>
<h3 class="report-h3">Giá trị dài hạn</h3>
<p class="report-p">Lộ trình production chưa triển khai gồm RDS Multi-AZ, hai task, domain riêng với HTTPS tới ALB và WAF thường trực. Mỗi thay đổi cần plan, đánh giá khả năng chịu lỗi và cập nhật ước tính chi phí.</p>
</section>
</div>
