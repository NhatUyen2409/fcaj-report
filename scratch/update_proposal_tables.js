const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

// Update Proposal VI Table 1 (Technology Stack Summary)
s = s.replace(
  '<th style="width: 25%;">Lớp kiến trúc</th>\n                <th style="width: 35%;">Công nghệ / Dịch vụ</th>\n                <th style="width: 40%;">Mục đích sử dụng</th>',
  '<th style="width: 20%;">Lớp kiến trúc</th>\n                <th style="width: 40%;">Công nghệ / Dịch vụ</th>\n                <th style="width: 40%;">Mục đích sử dụng</th>'
);
s = s.replace(
  '<th style="width: 25%;">Lớp kiến trúc</th>\r\n                <th style="width: 35%;">Công nghệ / Dịch vụ</th>\r\n                <th style="width: 40%;">Mục đích sử dụng</th>',
  '<th style="width: 20%;">Lớp kiến trúc</th>\r\n                <th style="width: 40%;">Công nghệ / Dịch vụ</th>\r\n                <th style="width: 40%;">Mục đích sử dụng</th>'
);

// Update Proposal VI Table 2 (Five Project Phases)
s = s.replace(
  '<th style="width: 24%;">Giai đoạn</th>\n                <th style="width: 30%;">Hạng mục chính</th>\n                <th style="width: 46%;">Kết quả bàn giao</th>',
  '<th style="width: 22%;">Giai đoạn</th>\n                <th style="width: 38%;">Hạng mục chính</th>\n                <th style="width: 40%;">Kết quả bàn giao</th>'
);
s = s.replace(
  '<th style="width: 24%;">Giai đoạn</th>\r\n                <th style="width: 30%;">Hạng mục chính</th>\r\n                <th style="width: 46%;">Kết quả bàn giao</th>',
  '<th style="width: 22%;">Giai đoạn</th>\r\n                <th style="width: 38%;">Hạng mục chính</th>\r\n                <th style="width: 40%;">Kết quả bàn giao</th>'
);

// Update Proposal EN Table 1 (Technology Stack Summary)
s = s.replace(
  '<th style="width: 25%;">Layer</th>\n                <th style="width: 35%;">Technology / Service</th>\n                <th style="width: 40%;">Role in Architecture</th>',
  '<th style="width: 20%;">Layer</th>\n                <th style="width: 40%;">Technology / Service</th>\n                <th style="width: 40%;">Role in Architecture</th>'
);
s = s.replace(
  '<th style="width: 25%;">Layer</th>\r\n                <th style="width: 35%;">Technology / Service</th>\r\n                <th style="width: 40%;">Role in Architecture</th>',
  '<th style="width: 20%;">Layer</th>\r\n                <th style="width: 40%;">Technology / Service</th>\r\n                <th style="width: 40%;">Role in Architecture</th>'
);

// Update Proposal EN Table 2 (Five Project Phases)
s = s.replace(
  '<th style="width: 24%;">Phase Timeline</th>\n                <th style="width: 30%;">Key Activities</th>\n                <th style="width: 46%;">Deliverables</th>',
  '<th style="width: 22%;">Phase Timeline</th>\n                <th style="width: 38%;">Key Activities</th>\n                <th style="width: 40%;">Deliverables</th>'
);
s = s.replace(
  '<th style="width: 24%;">Phase Timeline</th>\r\n                <th style="width: 30%;">Key Activities</th>\r\n                <th style="width: 46%;">Deliverables</th>',
  '<th style="width: 22%;">Phase Timeline</th>\r\n                <th style="width: 38%;">Key Activities</th>\r\n                <th style="width: 40%;">Deliverables</th>'
);

fs.writeFileSync('app.js', s, 'utf8');
console.log('Updated Proposal table header widths in app.js!');
