const fs = require('fs');
let css = fs.readFileSync('static/css/custom.css', 'utf8');

const target = `/* ==========================================================================
   STUDENT PORTRAIT & OFFICIAL TEMPLATE LAYOUT
   Rectangular portrait, centered, natural aspect ratio, no crop, no circle border, no shadow
   ========================================================================== */
/* Student Information Lines Spacing (Clean, compact lines matching FCAJ template) */
h3 + p:has(> strong),
p:has(> strong) + p:has(> strong) {
  margin-top: 0.4rem !important;
  margin-bottom: 0.4rem !important;
  line-height: 1.6 !important;
}

.report-figure:has(img[src*="profile.jpg"]),
.report-figure:has(img[alt*="Profile"]),
.report-figure:has(img[alt*="chân dung"]),
.report-figure:has(img[alt*="đại diện"]) {
  margin: 1.8rem 0 2rem 0 !important;
  text-align: center !important;
}

.report-figure img[src*="profile.jpg"],
.report-figure img[alt*="Profile"],
.report-figure img[alt*="chân dung"],
.report-figure img[alt*="đại diện"],
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
  .report-figure img[src*="profile.jpg"],
  .report-figure img[alt*="Profile"],
  .report-figure img[alt*="chân dung"],
  .report-figure img[alt*="đại diện"],
  #body-inner img[src*="profile.jpg"],
  #body-inner img[alt*="Profile"],
  #body-inner img[alt*="chân dung"],
  #body-inner img[alt*="đại diện"],
  .student-portrait-img {
    max-width: 260px !important;
  }
}`;

const oldSectionRegex = /\/\* ==========================================================================\s*STUDENT PORTRAIT & OFFICIAL TEMPLATE LAYOUT[\s\S]*?max-width:\s*260px\s*!important;\s*\}\s*\}/;

if (oldSectionRegex.test(css)) {
  css = css.replace(oldSectionRegex, target);
  fs.writeFileSync('static/css/custom.css', css, 'utf8');
  console.log('custom.css updated.');
} else {
  console.warn('Regex did not match in custom.css');
}
