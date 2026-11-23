const fs = require('fs');

console.log('1. Updating static/css/custom.css...');
let css = fs.readFileSync('static/css/custom.css', 'utf8');

// Remove the old profile-card styles and replace with pure official template portrait styling
const oldCardSectionRegex = /\/\* Avatar within Student Profile Card or Standalone \*\/[\s\S]*?@media \(max-width: 768px\) \{[\s\S]*?\.profile-field-label \{[\s\S]*?\}\s*\}/;

const newPortraitCss = `/* ==========================================================================
   STUDENT PORTRAIT & OFFICIAL TEMPLATE LAYOUT
   Rectangular portrait, centered, natural aspect ratio, no crop, no circle border, no shadow
   ========================================================================== */
#body-inner img[src*="profile.jpg"],
#body-inner img[alt*="Profile"],
#body-inner img[alt*="chân dung"],
#body-inner img[alt*="đại diện"],
.student-portrait-img {
  display: block !important;
  margin: 1.8rem auto 2.2rem auto !important;
  max-width: 320px !important;
  width: auto !important;
  height: auto !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: none !important;
  object-fit: contain !important;
}

@media (max-width: 768px) {
  #body-inner img[src*="profile.jpg"],
  #body-inner img[alt*="Profile"],
  #body-inner img[alt*="chân dung"],
  #body-inner img[alt*="đại diện"],
  .student-portrait-img {
    max-width: 260px !important;
  }
}`;

if (oldCardSectionRegex.test(css)) {
  css = css.replace(oldCardSectionRegex, newPortraitCss);
  console.log('custom.css: Replaced profile card section with clean portrait CSS.');
} else {
  console.warn('custom.css: Card section regex did not match, cleaning manually...');
  // Fallback: replace any remaining .student-profile-card blocks
  css = newPortraitCss + '\n\n' + css;
}

fs.writeFileSync('static/css/custom.css', css, 'utf8');

console.log('2. Updating scratch/generate_hugo_content.js...');
let gen = fs.readFileSync('scratch/generate_hugo_content.js', 'utf8');

// Replace homeVi and homeEn with the clean official 9-field template
const oldHomeViRegex = /const homeVi = `---[\s\S]*?### Nội dung báo cáo[\s\S]*?7\. \[Chia sẻ, đóng góp ý kiến\]\(7-feedback\/\)\r?\n`;/;
const newHomeVi = `const homeVi = \`---
title: "Báo cáo thực tập"
date: 2026-09-14
weight: 1
chapter: false
---

# Báo cáo thực tập tốt nghiệp

### Thông tin sinh viên:
&emsp; **Họ và tên:** \${info.fullName}

&emsp; **Số điện thoại:** \${info.phone}

&emsp; **Email:** \${info.email}

&emsp; **Trường đại học:** \${info.vi.university}

&emsp; **Chuyên ngành:** \${info.vi.major}

&emsp; **Lớp:** AWS082025

&emsp; **Công ty thực tập:** \${info.vi.company}

&emsp; **Vị trí thực tập:** \${info.vi.position}

&emsp; **Thời gian thực tập:** \${info.vi.duration}

![Ảnh đại diện sinh viên](/fcaj-report/images/profile.jpg)

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
&emsp; **Full Name:** \${info.fullName}

&emsp; **Phone Number:** \${info.phone}

&emsp; **Email:** \${info.email}

&emsp; **University:** \${info.en.university}

&emsp; **Major:** \${info.en.major}

&emsp; **Class:** AWS082025

&emsp; **Internship Company:** \${info.en.company}

&emsp; **Internship Position:** \${info.en.position}

&emsp; **Internship Duration:** \${info.en.duration}

![Profile picture](/fcaj-report/images/profile.jpg)

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
  console.log('generate_hugo_content.js: homeVi updated.');
} else {
  console.warn('generate_hugo_content.js: homeVi regex did not match.');
}

if (oldHomeEnRegex.test(gen)) {
  gen = gen.replace(oldHomeEnRegex, newHomeEn);
  console.log('generate_hugo_content.js: homeEn updated.');
} else {
  console.warn('generate_hugo_content.js: homeEn regex did not match.');
}

fs.writeFileSync('scratch/generate_hugo_content.js', gen, 'utf8');
console.log('Files updated successfully.');
