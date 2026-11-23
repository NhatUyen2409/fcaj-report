const fs = require('fs');
const path = require('path');

console.log('1. Updating app.js table headers...');
let app = fs.readFileSync('app.js', 'utf8');

const oldTableSearch = `        <!-- Performance Summary Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th>\${lang === 'vi' ? 'Giai đoạn thực thi' : 'Execution Stage'}</th>
                <th>S3 Standard (Baseline)</th>
                <th>S3 Express One Zone</th>
                <th>\${lang === 'vi' ? 'Mức cải thiện' : 'Improvement'}</th>
              </tr>
            </thead>`;

const newTableReplace = `        <!-- Performance Summary Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:28%;">\${lang === 'vi' ? 'Giai đoạn thực thi' : 'Execution Stage'}</th>
                <th style="width:24%;">S3 Standard (Baseline)</th>
                <th style="width:24%;">S3 Express One Zone</th>
                <th style="width:24%;">\${lang === 'vi' ? 'Mức cải thiện' : 'Improvement'}</th>
              </tr>
            </thead>`;

// Normalize crlf
if (app.includes(oldTableSearch.replace(/\n/g, '\r\n'))) {
  app = app.replace(oldTableSearch.replace(/\n/g, '\r\n'), newTableReplace.replace(/\n/g, '\r\n'));
  fs.writeFileSync('app.js', app, 'utf8');
  console.log('app.js updated successfully (CRLF).');
} else if (app.includes(oldTableSearch)) {
  app = app.replace(oldTableSearch, newTableReplace);
  fs.writeFileSync('app.js', app, 'utf8');
  console.log('app.js updated successfully (LF).');
} else {
  console.log('Could not find target table in app.js, checking with regex...');
  const tableRegex = /(<!-- Performance Summary Table -->\r?\n\s*<div class="minimal-table-wrap">\r?\n\s*<table class="minimal-table">\r?\n\s*<thead>\r?\n\s*<tr>\r?\n\s*)<th>(\${lang === 'vi' \? 'Giai đoạn thực thi' : 'Execution Stage'}<\/th>\r?\n\s*)<th>(S3 Standard \(Baseline\)<\/th>\r?\n\s*)<th>(S3 Express One Zone<\/th>\r?\n\s*)<th>(\${lang === 'vi' \? 'Mức cải thiện' : 'Improvement'}<\/th>)/;
  if (tableRegex.test(app)) {
    app = app.replace(tableRegex, `$1<th style="width:28%;">$2<th style="width:24%;">$3<th style="width:24%;">$4<th style="width:24%;">$5`);
    fs.writeFileSync('app.js', app, 'utf8');
    console.log('app.js updated via regex.');
  } else {
    console.warn('Regex match failed on app.js');
  }
}

console.log('2. Updating static/css/custom.css...');
let css = fs.readFileSync('static/css/custom.css', 'utf8');

// Replace avatar centering rule so that avatar inside .student-profile-card or .profile-avatar-box is not isolated
const oldAvatarCss = `#body-inner img[alt*="Avatar"],
#body-inner img[alt*="đại diện"] {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #283e5b;
  margin: 1.5rem auto;
  display: block;
}`;

const newAvatarCss = `/* Avatar within Student Profile Card or Standalone */
#body-inner img[alt*="Avatar"]:not(.profile-avatar-img),
#body-inner img[alt*="đại diện"]:not(.profile-avatar-img) {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #283e5b;
  margin: 1.2rem auto;
  display: block;
  box-shadow: 0 4px 10px rgba(40, 62, 91, 0.12);
}

/* ==========================================================================
   STUDENT PROFILE CARD (AWS FCAJ STANDARD TEMPLATE LAYOUT - IMAGE 3 ALIGNMENT)
   ========================================================================== */
.student-profile-card {
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-start !important;
  gap: 24px !important;
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 8px !important;
  padding: 24px !important;
  margin: 1.5rem 0 2rem 0 !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
  box-sizing: border-box !important;
  width: 100% !important;
}

.profile-avatar-box {
  flex-shrink: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-start !important;
}

.profile-avatar-img {
  width: 135px !important;
  height: 135px !important;
  border-radius: 50% !important;
  border: 3px solid #283e5b !important;
  object-fit: cover !important;
  box-shadow: 0 4px 12px rgba(40, 62, 91, 0.15) !important;
  display: block !important;
  margin: 0 !important;
}

.profile-info-box {
  flex: 1 1 auto !important;
  min-width: 0 !important;
}

.profile-name {
  font-size: 22px !important;
  font-weight: 700 !important;
  color: #283e5b !important;
  margin: 0 0 14px 0 !important;
  padding-bottom: 8px !important;
  border-bottom: 2px solid #ea580c !important;
  letter-spacing: -0.01em !important;
  line-height: 1.3 !important;
}

.profile-info-table {
  width: 100% !important;
  border-collapse: collapse !important;
  margin: 0 !important;
  background: transparent !important;
  border: 1px solid #e2e8f0 !important;
}

.profile-info-table tr {
  background: transparent !important;
}

.profile-info-table tr:nth-child(even) td {
  background: #f8fafc !important;
}

.profile-info-table tr:nth-child(odd) td {
  background: #ffffff !important;
}

.profile-info-table td {
  padding: 7px 12px !important;
  border: 1px solid #e2e8f0 !important;
  font-size: 0.92rem !important;
  line-height: 1.5 !important;
  vertical-align: middle !important;
}

.profile-field-label {
  width: 180px !important;
  min-width: 160px !important;
  color: #283e5b !important;
  font-weight: 600 !important;
  background-color: #f1f5f9 !important;
  white-space: nowrap !important;
}

.profile-field-value {
  color: #334155 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}

.profile-field-value a {
  color: #ea580c !important;
  text-decoration: underline !important;
  font-weight: 500 !important;
}

@media (max-width: 768px) {
  .student-profile-card {
    flex-direction: column !important;
    align-items: center !important;
    padding: 16px !important;
    gap: 16px !important;
  }
  .profile-avatar-box {
    margin-bottom: 8px !important;
  }
  .profile-name {
    text-align: center !important;
  }
  .profile-field-label {
    width: auto !important;
    white-space: normal !important;
  }
}`;

if (css.includes(oldAvatarCss)) {
  css = css.replace(oldAvatarCss, newAvatarCss);
  console.log('Avatar CSS updated.');
} else {
  console.warn('Old avatar CSS pattern not matched, prepending new avatar CSS...');
  css = newAvatarCss + '\n\n' + css;
}

// Replace the problematic 4-column table rule
const old4ColRule = `/* 3.2 Self-Evaluation 4-column table widths */
/* (Columns: No. 6%, Criteria 24%, Self Score 12% (centered), Detailed Remarks 58%) */
table:has(th:nth-child(4):last-child) th:nth-child(1),
table:has(th:nth-child(4):last-child) td:nth-child(1) {
  width: 6% !important;
  min-width: 45px !important;
  text-align: center !important;
  white-space: nowrap !important;
  font-variant-numeric: tabular-nums;
}

table:has(th:nth-child(4):last-child) th:nth-child(2),
table:has(th:nth-child(4):last-child) td:nth-child(2) {
  width: 24% !important;
  min-width: 160px !important;
}

table:has(th:nth-child(4):last-child) th:nth-child(3),
table:has(th:nth-child(4):last-child) td:nth-child(3) {
  width: 12% !important;
  min-width: 85px !important;
  text-align: center !important;
  white-space: nowrap !important;
  font-weight: 600;
}

table:has(th:nth-child(4):last-child) th:nth-child(4),
table:has(th:nth-child(4):last-child) td:nth-child(4) {
  width: 58% !important;
  min-width: 280px !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}`;

const new4ColRule = `/* 3.2 Self-Evaluation Specific 4-column Table Layout */
.self-evaluation-table table th:nth-child(1),
.self-evaluation-table table td:nth-child(1) {
  width: 6% !important;
  min-width: 45px !important;
  text-align: center !important;
  white-space: nowrap !important;
  font-variant-numeric: tabular-nums;
}

.self-evaluation-table table th:nth-child(2),
.self-evaluation-table table td:nth-child(2) {
  width: 25% !important;
  min-width: 160px !important;
}

.self-evaluation-table table th:nth-child(3),
.self-evaluation-table table td:nth-child(3) {
  width: 14% !important;
  min-width: 85px !important;
  text-align: center !important;
  white-space: nowrap !important;
  font-weight: 600;
}

.self-evaluation-table table th:nth-child(4),
.self-evaluation-table table td:nth-child(4) {
  width: 55% !important;
  min-width: 280px !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}

/* 3.3 General Balanced 4-Column Tables (Blogs, Proposal, Workshop) */
/* Fixes Image 1: columns are evenly proportioned so middle columns never cram */
table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) th:nth-child(1),
table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) td:nth-child(1) {
  width: 28% !important;
  min-width: 140px !important;
}

table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) th:nth-child(2),
table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) td:nth-child(2) {
  width: 24% !important;
  min-width: 125px !important;
}

table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) th:nth-child(3),
table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) td:nth-child(3) {
  width: 24% !important;
  min-width: 125px !important;
}

table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) th:nth-child(4),
table:has(th:nth-child(4):last-child):not(.self-evaluation-table table) td:nth-child(4) {
  width: 24% !important;
  min-width: 125px !important;
}

/* 3.4 General Balanced 3-Column Tables */
table:has(th:nth-child(3):last-child):not(.self-evaluation-table table):not(.profile-info-table) th:nth-child(1),
table:has(th:nth-child(3):last-child):not(.self-evaluation-table table):not(.profile-info-table) td:nth-child(1) {
  width: 28% !important;
  min-width: 140px !important;
}

table:has(th:nth-child(3):last-child):not(.self-evaluation-table table):not(.profile-info-table) th:nth-child(2),
table:has(th:nth-child(3):last-child):not(.self-evaluation-table table):not(.profile-info-table) td:nth-child(2) {
  width: 36% !important;
  min-width: 160px !important;
}

table:has(th:nth-child(3):last-child):not(.self-evaluation-table table):not(.profile-info-table) th:nth-child(3),
table:has(th:nth-child(3):last-child):not(.self-evaluation-table table):not(.profile-info-table) td:nth-child(3) {
  width: 36% !important;
  min-width: 160px !important;
}`;

if (css.includes(old4ColRule)) {
  css = css.replace(old4ColRule, new4ColRule);
  console.log('4-col table CSS updated.');
} else {
  console.warn('Old 4-col table CSS not found, appending new rules...');
  css += '\n\n' + new4ColRule;
}

fs.writeFileSync('static/css/custom.css', css, 'utf8');
console.log('custom.css saved.');

console.log('3. Updating scratch/generate_hugo_content.js...');
let gen = fs.readFileSync('scratch/generate_hugo_content.js', 'utf8');

// Replace homeVi and homeEn generation
const oldHomeViRegex = /const homeVi = `---[\s\S]*?### Nội dung báo cáo[\s\S]*?7\. \[Chia sẻ, đóng góp ý kiến\]\(7-feedback\/\)\r?\n`;/;
const newHomeVi = `const homeVi = \`---
title: "Báo cáo thực tập"
date: 2026-09-14
weight: 1
chapter: false
---

# Báo cáo thực tập tốt nghiệp

### Thông tin sinh viên:

<div class="student-profile-card">
  <div class="profile-avatar-box">
    <img src="/fcaj-report/images/profile.jpg" alt="\${info.fullName}" class="profile-avatar-img">
  </div>
  <div class="profile-info-box">
    <h3 class="profile-name">\${info.fullName}</h3>
    <table class="profile-info-table">
      <tbody>
        <tr>
          <td class="profile-field-label"><strong>Họ và tên:</strong></td>
          <td class="profile-field-value"><strong>\${info.fullName}</strong></td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Mã số sinh viên:</strong></td>
          <td class="profile-field-value">\${info.studentId}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Lớp / Khóa:</strong></td>
          <td class="profile-field-value">AWS082025 (FCAJ Fall 2026)</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Email:</strong></td>
          <td class="profile-field-value"><a href="mailto:\${info.email}">\${info.email}</a></td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Số điện thoại:</strong></td>
          <td class="profile-field-value">\${info.phone}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Trường đại học:</strong></td>
          <td class="profile-field-value">\${info.vi.university}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Chuyên ngành:</strong></td>
          <td class="profile-field-value">\${info.vi.major}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Đơn vị thực tập:</strong></td>
          <td class="profile-field-value">\${info.vi.company}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Vị trí thực tập:</strong></td>
          <td class="profile-field-value">\${info.vi.position}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Thời gian thực tập:</strong></td>
          <td class="profile-field-value">\${info.vi.duration}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Nội dung báo cáo

1. [Nhật ký công việc (Worklog)](1-worklog/)
2. [Đề xuất dự án (Proposal)](2-proposal/)
3. [Các bài blogs đã đăng](3-blogsposted/)
4. [Các events đã tham gia](4-eventparticipated/)
5. [Workshop](5-workshop/)
6. [Tự đánh giá](6-self-evaluation/)
7. [Chia sẻ, đóng góp ý kiến](7-feedback/)
\`;`;

const oldHomeEnRegex = /const homeEn = `---[\s\S]*?### Report Content[\s\S]*?7\. \[Feedback & Recommendations\]\(7-feedback\/\)\r?\n`;/;
const newHomeEn = `const homeEn = \`---
title: "Internship Report"
date: 2026-09-14
weight: 1
chapter: false
---

# Internship Report

### Student Information:

<div class="student-profile-card">
  <div class="profile-avatar-box">
    <img src="/fcaj-report/images/profile.jpg" alt="\${info.fullName}" class="profile-avatar-img">
  </div>
  <div class="profile-info-box">
    <h3 class="profile-name">\${info.fullName}</h3>
    <table class="profile-info-table">
      <tbody>
        <tr>
          <td class="profile-field-label"><strong>Full Name:</strong></td>
          <td class="profile-field-value"><strong>\${info.fullName}</strong></td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Student ID:</strong></td>
          <td class="profile-field-value">\${info.studentId}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Class / Cohort:</strong></td>
          <td class="profile-field-value">AWS082025 (FCAJ Fall 2026)</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Email:</strong></td>
          <td class="profile-field-value"><a href="mailto:\${info.email}">\${info.email}</a></td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Phone Number:</strong></td>
          <td class="profile-field-value">\${info.phone}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>University:</strong></td>
          <td class="profile-field-value">\${info.en.university}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Major:</strong></td>
          <td class="profile-field-value">\${info.en.major}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Internship Company:</strong></td>
          <td class="profile-field-value">\${info.en.company}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Internship Position:</strong></td>
          <td class="profile-field-value">\${info.en.position}</td>
        </tr>
        <tr>
          <td class="profile-field-label"><strong>Internship Duration:</strong></td>
          <td class="profile-field-value">\${info.en.duration}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Report Content

1. [Worklog](1-worklog/)
2. [Proposal](2-proposal/)
3. [Blogs Posted](3-blogsposted/)
4. [Events Participated](4-eventparticipated/)
5. [Workshop](5-workshop/)
6. [Self-evaluation](6-self-evaluation/)
7. [Feedback & Recommendations](7-feedback/)
\`;`;

if (oldHomeViRegex.test(gen)) {
  gen = gen.replace(oldHomeViRegex, newHomeVi);
  console.log('homeVi replaced.');
} else {
  console.warn('homeVi regex did not match.');
}

if (oldHomeEnRegex.test(gen)) {
  gen = gen.replace(oldHomeEnRegex, newHomeEn);
  console.log('homeEn replaced.');
} else {
  console.warn('homeEn regex did not match.');
}

// Wrap self-eval tables with <div class="self-evaluation-table">
const oldEvalVi = `| STT | Tiêu chí đánh giá | Điểm tự đánh giá | Nhận xét chi tiết |
| :---: | ------------------ | :---: | ------------------ |
\${criteriaTableVi}`;

const newEvalVi = `<div class="self-evaluation-table">

| STT | Tiêu chí đánh giá | Điểm tự đánh giá | Nhận xét chi tiết |
| :---: | ------------------ | :---: | ------------------ |
\${criteriaTableVi}

</div>`;

if (gen.includes(oldEvalVi)) {
  gen = gen.replace(oldEvalVi, newEvalVi);
  console.log('evalVi wrapped with self-evaluation-table.');
}

const oldEvalEn = `| No. | Evaluation Criteria | Self Score | Detailed Remarks |
| :---: | ------------------- | :---: | ---------------- |
\${criteriaTableEn}`;

const newEvalEn = `<div class="self-evaluation-table">

| No. | Evaluation Criteria | Self Score | Detailed Remarks |
| :---: | ------------------- | :---: | ---------------- |
\${criteriaTableEn}

</div>`;

if (gen.includes(oldEvalEn)) {
  gen = gen.replace(oldEvalEn, newEvalEn);
  console.log('evalEn wrapped with self-evaluation-table.');
}

fs.writeFileSync('scratch/generate_hugo_content.js', gen, 'utf8');
console.log('scratch/generate_hugo_content.js updated.');
