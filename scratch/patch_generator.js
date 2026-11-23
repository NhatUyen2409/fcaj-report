const fs = require('fs');

let content = fs.readFileSync('scratch/generate_hugo_content.js', 'utf8');

// Normalize line endings to \n
content = content.replace(/\r\n/g, '\n');

// 1. Replace criteriaTableVi & criteriaTableEn
const oldCriteria = `const criteriaTableVi = data.criteria.map((c, i) => \`| \${i + 1} | \${c.nameVi} | \${c.score} | \${c.commentVi || ''} |\`).join('\\n');
const criteriaTableEn = data.criteria.map((c, i) => \`| \${i + 1} | \${c.nameEn} | \${c.score} | \${c.commentEn || ''} |\`).join('\\n');`;

const newCriteria = `const ratingViMap = { excellent: 'Xuất sắc', good: 'Tốt', fair: 'Khá' };
const ratingEnMap = { excellent: 'Excellent', good: 'Good', fair: 'Fair' };

const criteriaTableVi = data.criteria.map((c, i) => {
  const ratingText = ratingViMap[c.rating] || c.rating;
  const desc = (c.desc_vi || '').replace(/\\r?\\n/g, '<br>').replace(/\\|/g, '\\\\|');
  const title = (c.title_vi || '').replace(/\\|/g, '\\\\|');
  return \`| \${c.id || (i + 1)} | **\${title}**<br>\${desc} | \${ratingText} | Hoàn thành tốt yêu cầu, chủ động học hỏi và vận dụng vào dự án thực tế. |\`;
}).join('\\n');

const criteriaTableEn = data.criteria.map((c, i) => {
  const ratingText = ratingEnMap[c.rating] || c.rating;
  const desc = (c.desc_en || '').replace(/\\r?\\n/g, '<br>').replace(/\\|/g, '\\\\|');
  const title = (c.title_en || '').replace(/\\|/g, '\\\\|');
  return \`| \${c.id || (i + 1)} | **\${title}**<br>\${desc} | \${ratingText} | Satisfactorily met requirements, proactively learned and applied concepts to real project. |\`;
}).join('\\n');`;

if (!content.includes(oldCriteria)) {
  console.error('ERROR: oldCriteria not found!');
  process.exit(1);
}

content = content.replace(oldCriteria, newCriteria);

// 2. Replace feedback section
const oldFbVi = `### 1. Trải nghiệm trong suốt kỳ thực tập:
\${data.feedback.vi.experience}

### 2. Mức độ hài lòng:
\${data.feedback.vi.satisfaction}

### 3. Đóng góp ý kiến và đề xuất cải tiến:
\${data.feedback.vi.improvements}

### 4. Đánh giá và giới thiệu cho sinh viên khóa sau:
\${data.feedback.vi.recommendation}`;

const newFbVi = `### 1. Môi trường làm việc tại AWS:
\${data.feedback.vi.env}

### 2. Hướng dẫn của Mentor và hỗ trợ từ Ban tổ chức:
\${data.feedback.vi.mentor}

### 3. Tính liên hệ thực tiễn và phát triển từ chương trình đào tạo:
\${data.feedback.vi.relevance}

### 4. Kiến thức và kỹ năng kỹ thuật thu nhận được:
\${data.feedback.vi.learning}

### 5. Văn hóa doanh nghiệp & Amazon Leadership Principles:
\${data.feedback.vi.culture}

### 6. Chính sách hỗ trợ thực tập:
\${data.feedback.vi.policies}

### 7. Đóng góp ý kiến và đề xuất cải tiến chương trình:
\${data.feedback.vi.suggestions}`;

const oldFbEn = `### 1. Internship Experience:
\${data.feedback.en.experience}

### 2. Overall Satisfaction:
\${data.feedback.en.satisfaction}

### 3. Suggestions for Program Improvement:
\${data.feedback.en.improvements}

### 4. Recommendation for Future Students:
\${data.feedback.en.recommendation}`;

const newFbEn = `### 1. Working Environment at AWS:
\${data.feedback.en.env}

### 2. Guidance from Mentor & Support Team:
\${data.feedback.en.mentor}

### 3. Academic Relevance & Practical Application:
\${data.feedback.en.relevance}

### 4. Technical Learnings & Skills Acquired:
\${data.feedback.en.learning}

### 5. Corporate Culture & Amazon Leadership Principles:
\${data.feedback.en.culture}

### 6. Internship Policies & Resources:
\${data.feedback.en.policies}

### 7. Suggestions for Program Improvement:
\${data.feedback.en.suggestions}`;

content = content.replace(oldFbVi, newFbVi).replace(oldFbEn, newFbEn);

fs.writeFileSync('scratch/generate_hugo_content.js', content, 'utf8');
console.log('SUCCESS: scratch/generate_hugo_content.js patched successfully!');
