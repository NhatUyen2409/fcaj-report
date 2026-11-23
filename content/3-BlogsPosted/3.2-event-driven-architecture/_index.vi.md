---
title: "Kiến trúc hướng sự kiện AWS"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
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
<div class="minimal-category-tag">AWS / Distributed Systems / Architecture</div>
<h1 class="minimal-article-title">AWS EVENT-DRIVEN ARCHITECTURE – KHI MỌI DỊCH VỤ ĐỀU HOẠT ĐỘNG ĐÚNG, TẠI SAO DỮ LIỆU VẪN CÓ THỂ SAI?</h1>

<!-- Community Post Link under Title -->
<div style="margin: 4px 0 16px 0;">
<a href="https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/" 
target="_blank" 
rel="noopener noreferrer" 
class="minimal-ref-link"
style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
<span>Xem bài viết trên cộng đồng AWS Study Group VN</span>
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="minimal-article-date">04/11/2026</div>

<!-- Architecture Cover Image -->
<div class="minimal-cover-box">
<img src="/fcaj-report/images/aws-event-driven-architecture.png" alt="AWS EVENT-DRIVEN ARCHITECTURE – KHI MỌI DỊCH VỤ ĐỀU HOẠT ĐỘNG ĐÚNG, TẠI SAO DỮ LIỆU VẪN CÓ THỂ SAI?"  title="Nhấn để xem sơ đồ phóng to" loading="lazy">
<div class="minimal-cover-caption">
Kiến trúc Event-Driven trên AWS – Xử lý sự kiện, kiểm soát thứ tự và công bố kết quả nguyên tử
</div>
</div>

<!-- Introductory Summary Lead -->
<p class="minimal-article-lead">Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS, mình nhận thấy một vấn đề: Một hệ thống có thể xử lý tất cả sự kiện thành công nhưng vẫn tạo ra kết quả sai do Race Condition. Điều này xuất phát từ đặc điểm xử lý bất đồng bộ, đặc biệt khi kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB.</p>
</header>

<hr class="minimal-divider">

<!-- Section 1: VẤN ĐỀ Ở ĐÂY LÀ GÌ? -->
<section class="minimal-section" id="eda-sec-1">
<h2 class="minimal-section-title">1. VẤN ĐỀ Ở ĐÂY LÀ GÌ?</h2>
<p class="minimal-p">Amazon S3 Event Notifications sử dụng cơ chế At-Least-Once Delivery, không bảo đảm sự kiện được gửi duy nhất một lần hoặc theo đúng thứ tự.</p>
<p class="minimal-p">Giả sử một hệ thống AI xử lý tài liệu được cập nhật từ phiên bản A sang B:</p>

<ul class="minimal-list">
<li><strong>Lambda A:</strong> Xử lý phiên bản gốc A trong 15 giây.</li><li><strong>Lambda B:</strong> Xử lý phiên bản cập nhật B chỉ trong 4 giây.</li><li><strong>Hậu quả:</strong> B hoàn thành trước, nhưng A hoàn thành sau và ghi đè kết quả cũ lên kết quả mới.</li>
</ul>

<p class="minimal-p">Cả hai Lambda đều thực thi thành công (HTTP 200), nhưng kết quả cuối cùng lại sai.</p>

<!-- Race Condition Timeline Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th>Luồng xử lý</th><th>Phiên bản tài liệu</th><th>Thời điểm bắt đầu</th><th>Thời gian xử lý</th><th>Thời điểm ghi kết quả</th><th>Hậu quả thực tế</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>Worker A</strong></td><td>Phiên bản A (v1)</td><td>T0</td><td>15 giây</td><td>T0 + 15s</td><td><strong>Ghi đè sai kết quả của B</strong></td>
</tr>

<tr>
<td><strong>Worker B</strong></td><td>Phiên bản B (v2 - Mới nhất)</td><td>T0 + 2s</td><td>4 giây</td><td>T0 + 6s</td><td>Bị kết quả cũ của A ghi đè mất</td>
</tr>

</tbody>
</table>
</div>

<div class="minimal-callout">
Mấu chốt vấn đề: Không có bất kỳ lỗi ứng dụng nào xảy ra và 100% lời gọi hàm Lambda đều thành công, nhưng kết quả nghiệp vụ cuối cùng vẫn bị sai lệch do sự chênh lệch thời gian xử lý trong môi trường bất đồng bộ.
</div>
</section>

<hr class="minimal-divider">

<!-- Section 2: VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ? -->
<section class="minimal-section" id="eda-sec-2">
<h2 class="minimal-section-title">2. VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ?</h2>
<p class="minimal-p">Nhiều kỹ sư thường mặc định rằng việc áp dụng Idempotency và Message Queuing sẽ giải quyết được bài toán Race Condition. Tuy nhiên trên thực tế, các cơ chế này có những giới hạn cốt lõi:</p>

<ul class="minimal-list">
<li><strong>Idempotency:</strong> Giúp ngăn tác động xử lý trùng lặp của cùng một sự kiện, nhưng không tự động ngăn sự kiện cũ ghi đè kết quả mới.</li><li><strong>Amazon SQS FIFO:</strong> Duy trì thứ tự theo Message Group, nhưng không thể khôi phục thứ tự gốc nếu các sự kiện đã đến sai trước khi vào hàng đợi.</li><li><strong>Vấn đề TOCTOU (Time-of-Check to Time-of-Use):</strong> Ngay cả khi Lambda kiểm tra phiên bản trước khi xử lý, dữ liệu vẫn có thể thay đổi trong lúc thực thi.</li>
</ul>
</section>

<hr class="minimal-divider">

<!-- Section 3: ĐỀ XUẤT -->
<section class="minimal-section" id="eda-sec-3">
<h2 class="minimal-section-title">3. ĐỀ XUẤT</h2>
<p class="minimal-p">Thay vì để Lambda ghi đè trực tiếp kết quả vào vị trí lưu trữ dùng chung, mình đề xuất mô hình kiến trúc kết hợp 5 cơ chế cốt lõi:</p>

<ul class="minimal-list">
<li><strong>S3 Versioning:</strong> Truy xuất đúng phiên bản dữ liệu đầu vào. Đảm bảo worker đọc đúng phiên bản tương ứng với sự kiện, tránh đọc nhầm dữ liệu đang bị thay đổi.</li><li><strong>S3 Sequencer:</strong> Xác định thứ tự các thao tác được hỗ trợ trên cùng object key. Chuỗi ký tự thập lục phân trong payload sự kiện cung cấp thứ tự vật lý tin cậy tuyệt đối.</li><li><strong>Immutable Output:</strong> Mỗi Lambda ghi kết quả vào đường dẫn riêng (ví dụ: output/{key}/{version_id}/result.json), tuyệt đối không ghi đè trực tiếp.</li><li><strong>DynamoDB Conditional Write:</strong> Kiểm soát việc công bố kết quả bằng điều kiện cập nhật nguyên tử. Chỉ cho phép cập nhật con trỏ trạng thái nếu sequencer mới hơn.</li><li><strong>Reconciliation:</strong> Phục hồi tác vụ bị gián đoạn và đối chiếu trạng thái khi cần.</li>
</ul>

<!-- Solution Component Role Table -->
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th>Thành phần</th><th>Vai trò trong giải pháp</th><th>Cơ chế bảo đảm tính đúng đắn</th>
</tr>
</thead>
<tbody>

<tr>
<td><strong>Amazon S3 Versioning</strong></td><td>Bảo toàn dữ liệu nguồn đầu vào</td><td>Version ID bất biến cho từng lần tải lên đối tượng</td>
</tr>

<tr>
<td><strong>S3 Object Sequencer</strong></td><td>Xác định thứ tự nghiệp vụ gốc</td><td>So sánh chuỗi thập lục phân biểu diễn timestamp vật lý từ S3</td>
</tr>

<tr>
<td><strong>Immutable Output</strong></td><td>Lưu trữ trung gian độc lập</td><td>Mỗi worker ghi vào prefix riêng, triệt tiêu xung đột ghi đè</td>
</tr>

<tr>
<td><strong>DynamoDB Conditional Write</strong></td><td>Công bố kết quả nguyên tử</td><td>Compare-and-Swap: chỉ cập nhật nếu s3_sequencer mới hơn</td>
</tr>

<tr>
<td><strong>Reconciliation Worker</strong></td><td>Xử lý lỗi cục bộ (Partial Failure)</td><td>Đối chiếu trạng thái giữa S3 và con trỏ DynamoDB</td>
</tr>

</tbody>
</table>
</div>

<!-- DynamoDB Conditional Write Code Box -->
<div class="minimal-formula-box">
<strong>Cơ chế cập nhật nguyên tử DynamoDB Conditional Write (Compare-and-Swap):</strong><br><br>
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

<p class="minimal-p">Với kiến trúc này, Lambda A có thể hoàn thành sau B nhưng không được ghi đè kết quả B đã công bố.</p>

<div class="minimal-callout">
Tuy nhiên, S3 và DynamoDB không hỗ trợ một transaction nguyên tử chung. Vì vậy, hệ thống vẫn cần cơ chế Retry và Recovery để xử lý Partial Failure khi ghi S3 thành công nhưng cập nhật DynamoDB bị gián đoạn.
</div>
</section>

<hr class="minimal-divider">

<!-- Section 4: KẾT LUẬN -->
<section class="minimal-section" id="eda-sec-4">
<h2 class="minimal-section-title">4. KẾT LUẬN</h2>
<p class="minimal-p">Theo mình, một vấn đề đáng quan tâm trong Cloud Architecture là: 100% Lambda Invocations thành công không đồng nghĩa với 100% kết quả nghiệp vụ chính xác.</p><p class="minimal-p">Thay vì cố gắng buộc mọi sự kiện xử lý đúng thứ tự, kiến trúc nên kiểm soát phiên bản nào được phép thay đổi kết quả chính thức.</p>

<div class="minimal-callout">
“100% Lambda Invocations thành công không đồng nghĩa với 100% kết quả nghiệp vụ chính xác.”
</div>

<div style="margin-top:24px;">
<h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 12px 0;">
Đúc kết nguyên tắc thiết kế phân tán:
</h3>
<ul class="minimal-list">
<li>1. <strong>Tách biệt tính toán và công bố:</strong> Sử dụng Immutable Output cho lưu trữ trung gian và DynamoDB làm con trỏ công bố trạng thái chính thức.</li><li>2. <strong>Kiểm soát thứ tự tại đích:</strong> Sử dụng S3 Sequencer và DynamoDB ConditionExpression thay vì dựa vào thứ tự đến của hàng đợi.</li><li>3. <strong>Thiết kế sẵn sàng cho Partial Failure:</strong> Luôn xây dựng Reconciliation Worker để tự động đối chiếu và khôi phục trạng thái nhất quán.</li>
</ul>
</div>
</section>

<hr class="minimal-divider">

<!-- Official AWS References -->
<section class="minimal-section">
<h2 class="minimal-section-title">Tài liệu tham khảo chính thức từ AWS</h2>
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
Xem bài viết trên cộng đồng AWS Study Group VN
</a>
</li>

</ol>
</section>

<!-- Bottom Navigation Footer -->
<footer class="minimal-footer-nav">
<button type="button" class="btn-minimal-outline" >
<span>← Quay lại danh sách bài viết</span>
</button>
<button type="button" class="btn-minimal-outline" >
<span>Lên đầu trang ↑</span>
</button>
</footer>
</article>
