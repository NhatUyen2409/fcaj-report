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
<span>← Quay lại danh sách bài viết</span>
</a>
</nav>

<!-- Minimalist Article Header -->
<header class="minimal-article-header">
<div class="minimal-category-tag">AWS STUDY GROUP / CLOUD SECURITY</div>
<h1 class="minimal-article-title">CÔ LẬP EC2 KHÔNG CÓ NGHĨA LÀ ĐÃ CÔ LẬP KẺ TẤN CÔNG</h1>
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
<span>Xem bài viết trên cộng đồng AWS Study Group VN</span>
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="minimal-article-date">15/11/2026</div>

<!-- Architecture Cover Image -->
<div class="minimal-cover-box">
<img src="/fcaj-report/images/aws-ec2-identity-containment-architecture.png" alt="CÔ LẬP EC2 KHÔNG CÓ NGHĨA LÀ ĐÃ CÔ LẬP KẺ TẤN CÔNG"  title="Nhấn để xem sơ đồ phóng to" loading="lazy">
<div class="minimal-cover-caption">
Hình 1: Mô hình Automated Incident Response trên AWS – Kết hợp Network Containment, Credential Issuance Containment và Identity Containment.
</div>
</div>

<!-- Introductory Summary Lead -->
<p class="minimal-article-lead">Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích chuyên sâu về sự khác biệt giữa Network Containment và Identity Containment: Vì sao Security Group không thể thu hồi IAM Sessions, giới hạn của IMDSv2 trước Remote Code Execution, và mô hình phản ứng sự cố tự động (Automated Incident Response) kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC.</p>
</header>

<hr class="minimal-divider">

<!-- Section 1 -->
<section class="minimal-section" id="ic-sec-1">
<h2 class="minimal-section-title">1. Khi thứ bị đánh cắp không chỉ là dữ liệu, mà còn là danh tính</h2>
<p class="minimal-p">Giả sử một doanh nghiệp triển khai backend trên Amazon EC2, sử dụng Amazon S3 để lưu trữ dữ liệu và Amazon DynamoDB để quản lý thông tin giao dịch.</p><p class="minimal-p">Thay vì lưu Access Key trực tiếp trong mã nguồn, EC2 được gắn IAM Role thông qua Instance Profile và sử dụng Temporary Security Credentials được cung cấp bởi Instance Metadata Service (IMDS).</p><p class="minimal-p">Đây là một phương pháp bảo mật được AWS khuyến nghị. Tuy nhiên, hãy xét một kịch bản giả định:</p>

<!-- Incident Timeline Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width:16%;">Thời điểm</th>
<th style="width:32%;">Sự kiện / Hành động</th>
<th style="width:52%;">Ý nghĩa kỹ thuật & Trạng thái</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>09:00</strong></td>
<td>EC2 bị xâm nhập</td>
<td>Kẻ tấn công khai thác lỗ hổng ứng dụng để thực thi mã từ xa (RCE) trên instance.</td>
</tr>

<tr>
<td><strong>09:05</strong></td>
<td>Temporary Credentials bị đánh cắp</td>
<td>Kẻ tấn công trích xuất token xác thực tạm thời từ Instance Metadata Service (IMDS).</td>
</tr>

<tr>
<td><strong>09:10</strong></td>
<td>Đội ngũ Security phát hiện sự cố</td>
<td>Hệ thống giám sát ghi nhận hoạt động bất thường và phát tín hiệu cảnh báo.</td>
</tr>

<tr>
<td><strong>09:15</strong></td>
<td>Quarantine Security Group được áp dụng để cô lập EC2</td>
<td>Cô lập EC2 ở tầng mạng bằng cách gỡ bỏ toàn bộ inbound/outbound rules thông thường.</td>
</tr>

<tr>
<td><strong>09:20</strong></td>
<td>Kẻ tấn công vẫn có thể gửi yêu cầu truy cập Amazon S3 từ một môi trường khác</td>
<td>Từ một máy chủ ngoài Internet, kẻ tấn công dùng credentials vừa lấy cắp để gửi request trực tiếp đến S3 API.</td>
</tr>

</tbody>
</table>
</div>

<div class="minimal-callout">
<div style="font-weight:700; color:#171717; margin-bottom:6px;">
Tại sao điều này lại xảy ra?
</div>
<p style="margin:0; font-size:15px; line-height:1.7;">
Bởi vì Temporary Credentials không mặc định bị ràng buộc với môi trường mạng của EC2 đã nhận chúng. Nếu credentials chưa hết hạn và quyền truy cập chưa bị từ chối bởi các chính sách bảo mật, kẻ tấn công vẫn có thể lợi dụng danh tính của workload để tương tác với AWS API mà không cần kết nối lại với EC2 ban đầu.
</p>
</div>
</section>

<hr class="minimal-divider">

<!-- Section 2 -->
<section class="minimal-section" id="ic-sec-2">
<h2 class="minimal-section-title">2. Network Containment ≠ Identity Containment</h2>
<p class="minimal-p">Một trong những vấn đề khi xử lý sự cố trên Cloud là sự khác biệt giữa hai lớp kiểm soát: Network Containment (Cô lập tài nguyên ở cấp độ mạng) và Identity Containment (Kiểm soát và vô hiệu hóa quyền truy cập của danh tính đã bị xâm phạm).</p>

<!-- Comparison Table: Network vs Identity Containment -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width:24%;">Lớp kiểm soát</th>
<th style="width:22%;">Cơ chế triển khai</th>
<th style="width:27%;">Khả năng bảo vệ</th>
<th style="width:27%;">Giới hạn cốt lõi</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>Network Containment</strong><br><small style="color:#666;">Tầng mạng (Network Layer)</small></td>
<td>Quarantine Security Group, NACL, Private Subnet</td>
<td>Chặn ingress/egress lưu lượng mạng vào/ra EC2</td>
<td>Không vô hiệu hóa IAM token; không cắt đứt kết nối stateful đang theo dõi.</td>
</tr>

<tr>
<td><strong>Identity Containment</strong><br><small style="color:#666;">Tầng định danh (Identity Layer)</small></td>
<td>Revoke Active Sessions, Policy Deny, Gỡ Instance Profile</td>
<td>Hủy bỏ hiệu lực của token bảo mật tạm thời (STS temporary credentials)</td>
<td>Nếu không gỡ Instance Profile, instance vẫn có thể xin token mới từ IMDS.</td>
</tr>

</tbody>
</table>
</div>

<p class="minimal-p">Security Group kiểm soát lưu lượng mạng nhưng không có chức năng thu hồi IAM Sessions. Hơn nữa, việc thay đổi Security Group không nhất thiết chấm dứt ngay những kết nối đang được theo dõi trước đó (stateful connection tracking).</p><p class="minimal-p">Private Subnet hạn chế khả năng truy cập trực tiếp từ Internet, nhưng không đảm bảo rằng danh tính của workload không thể bị lợi dụng từ bên ngoài.</p><p class="minimal-p">Ngay cả IMDSv2, mặc dù giúp giảm thiểu một số hình thức khai thác SSRF, cũng không bảo vệ tuyệt đối credentials khi kẻ tấn công đã có khả năng thực thi mã trên instance.</p><p class="minimal-p">Mỗi cơ chế bảo mật giải quyết một vấn đề khác nhau. Vì vậy, việc triển khai nhiều công cụ bảo mật chưa chắc đã tạo ra một kiến trúc an toàn nếu chúng ta không hiểu rõ giới hạn của từng công cụ.</p>
</section>

<hr class="minimal-divider">

<!-- Section 3 -->
<section class="minimal-section" id="ic-sec-3">
<h2 class="minimal-section-title">3. Nếu credentials bị đánh cắp, liệu có thể khiến chúng trở nên vô dụng khi được sử dụng sai ngữ cảnh?</h2>
<p class="minimal-p">AWS cung cấp các Global Condition Keys cho phép kiểm soát ngữ cảnh sử dụng credentials:</p>

<ul class="minimal-list">

<li><code>aws:EC2InstanceSourceVPC</code>: Ràng buộc yêu cầu phải xuất phát từ đúng VPC nơi EC2 instance được cấp credentials.</li>

<li><code>aws:EC2InstanceSourcePrivateIPv4</code>: Ràng buộc yêu cầu phải xuất phát từ đúng địa chỉ IP riêng của instance trong VPC.</li>

<li><code>aws:SourceVpc</code>: Kiểm tra request có đi qua VPC Endpoint cụ thể hay không khi truy cập tài nguyên AWS.</li>

<li><code>aws:VpcSourceIp</code>: Xác thực địa chỉ IP nguồn bên trong không gian mạng VPC nội bộ.</li>

</ul>

<p class="minimal-p">Trong kiến trúc minh họa, EC2 nằm trong Private Subnet và truy cập Amazon S3, DynamoDB thông qua hai Gateway Endpoint tương ứng.</p>
<p class="minimal-p">Bằng cách xây dựng IAM Policy đối chiếu ngữ cảnh cấp credentials với ngữ cảnh thực tế của request, chúng ta có thể từ chối những yêu cầu xuất phát từ môi trường không được phép, ngay cả khi thông tin xác thực vẫn còn hiệu lực.</p>

<!-- Monospace IAM Condition Code Block -->
<div class="minimal-formula-box">
<div style="font-size:12px; color:#666; margin-bottom:8px; font-family:sans-serif; font-weight:600;">
Ví dụ: IAM Policy Deny truy cập ngoài VPC nguồn (Context-Aware Enforcement)
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

<p class="minimal-p">Tuy nhiên, cần lưu ý rằng không phải mọi AWS API đều sử dụng VPC Endpoint. Chính sách quá nghiêm ngặt có thể ảnh hưởng đến workload hợp lệ.</p><p class="minimal-p">Phương pháp này cũng không ngăn được mọi hành vi độc hại diễn ra ngay trên EC2 đã bị xâm nhập.</p><p class="minimal-p">Đó là lý do cần kết hợp nhiều lớp phòng thủ — Defense in Depth.</p>
</section>

<hr class="minimal-divider">

<!-- Section 4 -->
<section class="minimal-section" id="ic-sec-4">
<h2 class="minimal-section-title">4. Khi giải pháp bảo mật có thể trở thành nguyên nhân gây gián đoạn hệ thống</h2>
<p class="minimal-p">AWS IAM cung cấp cơ chế Revoke Active Sessions, sử dụng chính sách AWSRevokeOlderSessions và điều kiện aws:TokenIssueTime để từ chối quyền của các phiên xác thực được cấp trước một thời điểm xác định.</p><p class="minimal-p">Nhưng hãy tưởng tượng có 10 EC2 instance cùng sử dụng một IAM Role, trong đó chỉ một instance bị xâm nhập.</p><p class="minimal-p">Việc thu hồi toàn bộ session cũ của IAM Role có thể ảnh hưởng đến cả những instance đang hoạt động bình thường, gây gián đoạn dịch vụ diện rộng.</p><p class="minimal-p">Bên cạnh đó, Revoke Active Sessions không tự động ngăn EC2 nhận credentials mới. Vì vậy, cần kết hợp việc gỡ hoặc thay thế Instance Profile bằng một cấu hình hạn chế quyền phù hợp.</p><p class="minimal-p">Lúc này, chúng ta phải đối mặt với sự đánh đổi giữa Security và Availability.</p><p class="minimal-p">Điều đó cho thấy thiết kế IAM không chỉ là câu chuyện cấp quyền tối thiểu (Least Privilege), mà còn là bài toán giới hạn phạm vi ảnh hưởng (Blast Radius) khi sự cố xảy ra.</p>
</section>

<hr class="minimal-divider">

<!-- Section 5 -->
<section class="minimal-section" id="ic-sec-5">
<h2 class="minimal-section-title">5. Hướng tiếp cận kiến trúc trên AWS</h2>
<p class="minimal-p">Dựa trên sơ đồ Architecture đính kèm, chúng ta có thể xây dựng một quy trình Automated Incident Response như sau:</p>

<!-- Components Breakdown Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width:28%;">Dịch vụ AWS</th>
<th style="width:72%;">Vai trò trong quy trình Incident Response</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>AWS CloudTrail</strong></td>
<td>Hỗ trợ ghi nhận và điều tra các hoạt động AWS API. Đối với những thao tác ở cấp dữ liệu trên S3 và DynamoDB, cần cấu hình Data Events phù hợp.</td>
</tr>

<tr>
<td><strong>Amazon GuardDuty</strong></td>
<td>Phân tích các nguồn dữ liệu bảo mật để phát hiện dấu hiệu sử dụng credentials bất thường (ví dụ: finding InstanceCredentialExfiltration.OutsideAWS).</td>
</tr>

<tr>
<td><strong>Amazon EventBridge</strong></td>
<td>Tiếp nhận GuardDuty Findings theo mẫu sự kiện bảo mật và kích hoạt AWS Lambda.</td>
</tr>

<tr>
<td><strong>AWS Lambda</strong></td>
<td>Khởi chạy runbook được cấu hình trong AWS Systems Manager Automation để thực thi các bước cô lập.</td>
</tr>

</tbody>
</table>
</div>

<p class="minimal-p"><strong>Quy trình ứng phó thực hiện ba nhóm hành động chính:</strong></p>

<div class="minimal-callout">
<ul class="minimal-list" style="margin:0; padding-left:18px;">

<li><strong>Network Containment:</strong> Áp dụng Quarantine Security Group và kiểm tra các kết nối mạng hiện có.</li>

<li><strong>Credential Issuance Containment:</strong> Gỡ hoặc thay thế Instance Profile để hạn chế việc tiếp tục nhận credentials có quyền truy cập.</li>

<li><strong>Identity Containment:</strong> Thu hồi quyền của các IAM Role Sessions đã được cấp và kiểm tra hiệu quả sau khi chính sách có hiệu lực.</li>

</ul>
</div>

<p class="minimal-p">Đối với môi trường production, những hành động có khả năng gây gián đoạn hệ thống nên được kiểm soát bằng cơ chế phê duyệt phù hợp. Mục tiêu không phải là triển khai càng nhiều dịch vụ càng tốt, mà là đảm bảo mỗi lớp bảo mật có thể giới hạn thiệt hại khi một lớp khác thất bại.</p>
</section>

<!-- Key Takeaway Callout -->
<div class="minimal-callout" style="border-left: 3px solid #171717; background:#F8FAFC; margin:32px 0;">
<div style="font-size:16px; font-weight:700; color:#171717; margin-bottom:8px;">
Đúc kết chính
</div>
<p style="margin:0 0 10px 0; font-size:15px; line-height:1.7;">
Một quy trình Incident Response trên AWS cần kiểm soát đồng thời cả Network Containment và Identity Containment. Việc cô lập EC2 chỉ giải quyết một phần sự cố nếu quyền truy cập của danh tính đã bị xâm phạm vẫn chưa được vô hiệu hóa.
</p>
<p style="margin:0; font-size:15.5px; font-weight:700; color:#171717; line-height:1.7;">
Bởi trong môi trường Cloud, một cuộc tấn công có thể bắt đầu từ máy chủ nhưng tiếp tục dưới hình thức lạm dụng danh tính.
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
Tài liệu tham khảo
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
Xem bài viết trên cộng đồng AWS Study Group VN
</a>
</li>

</ul>
</section>

<!-- Minimal Footer Navigation -->
<footer class="minimal-footer-nav">
<button type="button" class="btn-minimal-outline" >
<span>← Quay lại danh sách bài viết</span>
</button>
<button type="button" class="btn-minimal-outline" >
<span>Về đầu trang ↑</span>
</button>
</footer>
</article>
