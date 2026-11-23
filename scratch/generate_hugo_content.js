const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load app.js in sandbox
let code = fs.readFileSync('app.js', 'utf8');
code += `
window.setAppLang = (l) => { if (typeof app !== 'undefined') app.currentLang = l; };
window.DEFAULT_BILINGUAL_DATA = DEFAULT_BILINGUAL_DATA;
window.BLOG_ARTICLES = BLOG_ARTICLES;
window.EVENT_REPORTS = EVENT_REPORTS;
window.getProposalViHtml = getProposalViHtml;
window.getProposalEnHtml = getProposalEnHtml;
window.getWorkshopViHtml = getWorkshopViHtml;
window.getWorkshopEnHtml = getWorkshopEnHtml;
window.renderBlogDetail = renderBlogDetail;
window.renderEventDetail = renderEventDetail;
window.renderEventDrivenBlogDetail = renderEventDrivenBlogDetail;
window.renderIdentityContainmentBlogDetail = renderIdentityContainmentBlogDetail;
window.renderModernizationEventDetail = renderModernizationEventDetail;
window.renderMeetupEventDetail = renderMeetupEventDetail;
window.renderEnterpriseAIEventDetail = renderEnterpriseAIEventDetail;
`;

const elements = {};
function createMockElement() {
  return {
    innerHTML: '',
    style: {},
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    querySelectorAll: () => [],
    addEventListener: () => {}
  };
}

const ctx = {
  window: {},
  app: { currentLang: 'vi' },
  document: {
    addEventListener: () => {},
    getElementById: (id) => {
      if (!elements[id]) elements[id] = createMockElement();
      return elements[id];
    },
    querySelectorAll: () => [],
    documentElement: { lang: 'vi' },
    title: ''
  },
  localStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  },
  console: console,
  setTimeout: (cb) => { cb(); },
  clearTimeout: () => {},
  setInterval: () => {},
  clearInterval: () => {}
};

vm.createContext(ctx);
vm.runInContext(code, ctx);

const data = ctx.window.DEFAULT_BILINGUAL_DATA;
const proposalVi = ctx.window.getProposalViHtml();
const proposalEn = ctx.window.getProposalEnHtml();
const workshopVi = ctx.window.getWorkshopViHtml();
const workshopEn = ctx.window.getWorkshopEnHtml();

// Function to clean raw HTML
function cleanHtmlForMarkdown(html) {
  if (!html) return '';

  // 1. Collapse any multi-line <img> tags into a single line
  let cleaned = html.replace(/<img\b[\s\S]*?>/gi, (match) => {
    return match.replace(/\s*\n\s*/g, ' ');
  });

  // 2. Normalize image paths so they work with Hugo base URL /fcaj-report/
  cleaned = cleaned
    .replace(/(["'])(\/)?assets\/images\//g, '$1/fcaj-report/images/')
    .replace(/(["'])\/images\//g, '$1/fcaj-report/images/')
    .replace(/href="#\/blogs-posted"/g, 'href="../"')
    .replace(/href="#\/events"/g, 'href="../"')
    .replace(/onclick="[^"]*"/g, '');

  // 3. Remove any completely empty <li> elements or <li> containing only empty tags
  cleaned = cleaned.replace(/<li>\s*(?:<span>\s*<\/span>)?\s*<\/li>/gi, '');
  cleaned = cleaned.replace(/<li>\s*<a\s+[^>]*>\s*<\/a>\s*<\/li>/gi, '');

  // 4. Temporarily protect <pre><code> blocks
  const preBlocks = [];
  let protectedHtml = cleaned.replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, (match) => {
    const idx = preBlocks.length;
    preBlocks.push(match.trim());
    return `___PRE_BLOCK_${idx}___`;
  });

  // 5. Strip all leading spaces/tabs on every line so Goldmark will NEVER treat lines as indented code blocks
  protectedHtml = protectedHtml.replace(/^[ \t]+/gm, '');

  // 6. Restore <pre> blocks
  protectedHtml = protectedHtml.replace(/___PRE_BLOCK_(\d+)___/g, (match, p1) => {
    return preBlocks[parseInt(p1, 10)];
  });

  return protectedHtml.trim();
}

// Helper to get rendered blog HTML
function getRenderedBlog(slug, lang) {
  const container = createMockElement();
  elements['blog-detail-s3-express-container'] = container;
  ctx.window.setAppLang(lang);

  const article = (ctx.window.BLOG_ARTICLES[slug] && ctx.window.BLOG_ARTICLES[slug][lang])
    ? ctx.window.BLOG_ARTICLES[slug][lang]
    : (ctx.window.BLOG_ARTICLES[slug] ? ctx.window.BLOG_ARTICLES[slug].vi : null);

  if (slug === 's3-express-one-zone') {
    ctx.window.renderBlogDetail('s3-express-one-zone');
    return cleanHtmlForMarkdown(container.innerHTML);
  } else if (slug === 'aws-event-driven-architecture') {
    ctx.window.renderEventDrivenBlogDetail(container, article, lang);
    return cleanHtmlForMarkdown(container.innerHTML);
  } else if (slug === 'aws-ec2-identity-containment') {
    ctx.window.renderIdentityContainmentBlogDetail(container, article, lang);
    return cleanHtmlForMarkdown(container.innerHTML);
  }
  return '';
}

// Helper to get rendered event HTML
function getRenderedEvent(slug, lang) {
  const container = createMockElement();
  if (slug === 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai') {
    ctx.window.renderModernizationEventDetail(container, lang);
    return cleanHtmlForMarkdown(container.innerHTML);
  } else if (slug === 'first-cloud-ai-journey-24-10-2026') {
    ctx.window.renderMeetupEventDetail(container, lang);
    return cleanHtmlForMarkdown(container.innerHTML);
  } else if (slug === 'enterprise-ai-on-aws-cloud') {
    ctx.window.renderEnterpriseAIEventDetail(container, lang);
    return cleanHtmlForMarkdown(container.innerHTML);
  }
  return '';
}

// Ensure directories
function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function cleanLinks(html) {
  if (!html) return '';
  return cleanHtmlForMarkdown(html);
}

function formatBullets(val) {
  if (!val) return '';
  if (Array.isArray(val)) {
    return val.map(x => `* ${x}`).join('\n');
  }
  const lines = val.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.map(l => {
    if (l.startsWith('-') || l.startsWith('*')) return `* ${l.substring(1).trim()}`;
    return `* ${l}`;
  }).join('\n');
}

// 1. Home / Student Information
console.log('Generating Home pages...');
const info = data.studentInfo;

const homeVi = `---
title: "Báo cáo thực tập"
date: 2026-09-14
weight: 1
chapter: false
---

# Báo cáo thực tập tốt nghiệp

### Thông tin sinh viên:
&emsp; **Họ và tên:** ${info.fullName}

&emsp; **Số điện thoại:** ${info.phone}

&emsp; **Email:** ${info.email}

&emsp; **Trường đại học:** ${info.vi.university}

&emsp; **Chuyên ngành:** ${info.vi.major}

&emsp; **Lớp:** AWS082025

&emsp; **Công ty thực tập:** ${info.vi.company}

&emsp; **Vị trí thực tập:** ${info.vi.position}

&emsp; **Thời gian thực tập:** ${info.vi.duration}

![Ảnh đại diện sinh viên](/fcaj-report/images/profile.jpg)

### Nội dung báo cáo

1. [Nhật ký công việc (Worklog)](1-worklog/)
2. [Đề xuất dự án (Proposal)](2-proposal/)
3. [Các bài blogs đã đăng](3-blogsposted/)
4. [Các events đã tham gia](4-eventparticipated/)
5. [Workshop](5-workshop/)
6. [Tự đánh giá](6-self-evaluation/)
7. [Chia sẻ, đóng góp ý kiến](7-feedback/)
`;

const homeEn = `---
title: "Internship Report"
date: 2026-09-14
weight: 1
chapter: false
---

# Internship Report

### Student Information:
&emsp; **Full Name:** ${info.fullName}

&emsp; **Phone Number:** ${info.phone}

&emsp; **Email:** ${info.email}

&emsp; **University:** ${info.en.university}

&emsp; **Major:** ${info.en.major}

&emsp; **Class:** AWS082025

&emsp; **Internship Company:** ${info.en.company}

&emsp; **Internship Position:** ${info.en.position}

&emsp; **Internship Duration:** ${info.en.duration}

![Profile picture](/fcaj-report/images/profile.jpg)

### Report Content

1. [Worklog](1-worklog/)
2. [Proposal](2-proposal/)
3. [Blogs Posted](3-blogsposted/)
4. [Events Participated](4-eventparticipated/)
5. [Workshop](5-workshop/)
6. [Self-evaluation](6-self-evaluation/)
7. [Feedback & Recommendations](7-feedback/)
`;

ensureDir('content');
fs.writeFileSync('content/_index.vi.md', homeVi, 'utf8');
fs.writeFileSync('content/_index.md', homeEn, 'utf8');

// 2. Section 1: Worklog
console.log('Generating 1-Worklog...');
const worklogDir = path.join('content', '1-Worklog');
ensureDir(worklogDir);

const worklogIndexVi = `---
title: "Worklog"
date: 2026-09-14
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

# Nhật ký công việc thực tập (Worklog)

Nhật ký ghi lại quá trình học tập, nghiên cứu dịch vụ AWS và phát triển dự án thực tế qua 12 tuần trong chương trình AWS First Cloud AI Journey.

### Danh sách tuần:
${data.worklogs.map(w => `* [Tuần ${w.weekNum}: ${w.vi.topic}](1.${w.weekNum}-week${w.weekNum}/)`).join('\n')}
`;

const worklogIndexEn = `---
title: "Worklog"
date: 2026-09-14
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

# Internship Worklog

Detailed log of learning AWS cloud technologies and hands-on project development across 12 weeks of the AWS First Cloud AI Journey internship.

### Weekly Index:
${data.worklogs.map(w => `* [Week ${w.weekNum}: ${w.en.topic}](1.${w.weekNum}-week${w.weekNum}/)`).join('\n')}
`;

fs.writeFileSync(path.join(worklogDir, '_index.vi.md'), worklogIndexVi, 'utf8');
fs.writeFileSync(path.join(worklogDir, '_index.md'), worklogIndexEn, 'utf8');

// Weeks 1 to 12
data.worklogs.forEach(w => {
  const weekFolder = path.join(worklogDir, `1.${w.weekNum}-Week${w.weekNum}`);
  ensureDir(weekFolder);

  // VI week
  const viTasksTable = w.vi.tasks.map(t => {
    let desc = (t.desc || '').trim()
      .replace(/^Công việc chính:\s*/i, '**Main Task:** ')
      .replace(/\nHoạt động chi tiết:\s*/i, '<br>**Detailed Activities:** ')
      .replace(/^Main Task:\s*/i, '**Main Task:** ')
      .replace(/\nDetailed Activities:\s*/i, '<br>**Detailed Activities:** ')
      .replace(/\r?\n/g, '<br>')
      .replace(/\|/g, '\\|');

    let ref = (t.ref || '').trim()
      .replace(/https?:\/\/awsstudygroup\.com/g, 'https://cloudjourney.awsfcaj.com/')
      .replace(/\r?\n/g, '<br>')
      .replace(/\|/g, '\\|');

    const start = (t.start || '').trim();
    const end = (t.end || '').trim();

    return `| ${t.day} | ${desc} | ${start} | ${end} | ${ref} |`;
  }).join('\n');

  const viWeekMd = `---
title: "Worklog Tuần ${w.weekNum}"
date: 2026-09-14
weight: ${w.weekNum}
chapter: false
pre: " <b> 1.${w.weekNum}. </b> "
---

# Tuần ${w.weekNum}: ${w.vi.topic}

### Mục tiêu tuần ${w.weekNum}:
${formatBullets(w.vi.objectives)}

### Các công việc triển khai trong tuần:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --------- | ------------ | --------------- | -------------- |
${viTasksTable}

### Kết quả đạt được tuần ${w.weekNum}:
${formatBullets(w.vi.achievements)}
`;

  // EN week
  const enTasksTable = w.en.tasks.map(t => {
    let desc = (t.desc || '').trim()
      .replace(/^Main Task:\s*/i, '**Main Task:** ')
      .replace(/\nDetailed Activities:\s*/i, '<br>**Detailed Activities:** ')
      .replace(/\r?\n/g, '<br>')
      .replace(/\|/g, '\\|');

    let ref = (t.ref || '').trim()
      .replace(/https?:\/\/awsstudygroup\.com/g, 'https://cloudjourney.awsfcaj.com/')
      .replace(/\r?\n/g, '<br>')
      .replace(/\|/g, '\\|');

    const start = (t.start || '').trim();
    const end = (t.end || '').trim();

    return `| ${t.day} | ${desc} | ${start} | ${end} | ${ref} |`;
  }).join('\n');

  const enWeekMd = `---
title: "Worklog Week ${w.weekNum}"
date: 2026-09-14
weight: ${w.weekNum}
chapter: false
pre: " <b> 1.${w.weekNum}. </b> "
---

# Week ${w.weekNum}: ${w.en.topic}

### Week ${w.weekNum} Objectives:
${formatBullets(w.en.objectives)}

### Weekly Tasks & Activities:
| Day | Task & Details | Start Date | Completion Date | Reference Materials |
| --- | -------------- | ---------- | --------------- | ------------------- |
${enTasksTable}

### Week ${w.weekNum} Achievements:
${formatBullets(w.en.achievements)}
`;

  fs.writeFileSync(path.join(weekFolder, '_index.vi.md'), viWeekMd, 'utf8');
  fs.writeFileSync(path.join(weekFolder, '_index.md'), enWeekMd, 'utf8');
});

// 3. Section 2: Proposal
console.log('Generating 2-Proposal...');
const proposalDir = path.join('content', '2-Proposal');
ensureDir(proposalDir);

const cleanProposalVi = cleanHtmlForMarkdown(proposalVi.replace(/assets\/images\//g, '/images/'));
const cleanProposalEn = cleanHtmlForMarkdown(proposalEn.replace(/assets\/images\//g, '/images/'));

const proposalViMd = `---
title: "Đề xuất dự án (Proposal)"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

${cleanProposalVi}
`;

const proposalEnMd = `---
title: "Project Proposal"
date: 2026-09-14
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

${cleanProposalEn}
`;

fs.writeFileSync(path.join(proposalDir, '_index.vi.md'), proposalViMd, 'utf8');
fs.writeFileSync(path.join(proposalDir, '_index.md'), proposalEnMd, 'utf8');

// 4. Section 3: BlogsPosted
console.log('Generating 3-BlogsPosted...');
const blogsDir = path.join('content', '3-BlogsPosted');
ensureDir(blogsDir);

const blogsIndexVi = `---
title: "Các bài blogs đã đăng"
date: 2026-09-14
weight: 3
chapter: false
pre: " <b> 3. </b> "
---

# Các bài viết chuyên môn (AWS Blogs)

Trong quá trình thực tập tại AWS First Cloud AI Journey, sinh viên nghiên cứu và đóng góp các bài viết chuyên môn sâu về kiến trúc hạ tầng và bảo mật đám mây AWS.

### Danh sách các bài viết:
1. [Amazon S3 Express One Zone: Lưu trữ độ trễ mili-giây đơn](3.1-s3-express-one-zone/)
2. [Kiến trúc hướng sự kiện toàn diện trên AWS](3.2-event-driven-architecture/)
3. [EC2 Identity Containment: Cơ chế cô lập danh tính](3.3-identity-containment/)
`;

const blogsIndexEn = `---
title: "Blogs Posted"
date: 2026-09-14
weight: 3
chapter: false
pre: " <b> 3. </b> "
---

# Technical AWS Blog Posts

During the AWS First Cloud AI Journey internship, the student authored and published in-depth technical blogs focusing on AWS cloud architecture, serverless performance, and identity security.

### Published Articles:
1. [Amazon S3 Express One Zone: Single-Digit Millisecond Latency Storage](3.1-s3-express-one-zone/)
2. [Event-Driven Architecture on AWS: Enterprise Design Patterns](3.2-event-driven-architecture/)
3. [EC2 Identity Containment: Securing IAM Credentials](3.3-identity-containment/)
`;

fs.writeFileSync(path.join(blogsDir, '_index.vi.md'), blogsIndexVi, 'utf8');
fs.writeFileSync(path.join(blogsDir, '_index.md'), blogsIndexEn, 'utf8');

// Subpages for each blog
const blogMeta = [
  { folder: '3.1-s3-express-one-zone', slug: 's3-express-one-zone', weight: 1, num: '3.1', titleVi: 'Amazon S3 Express One Zone', titleEn: 'Amazon S3 Express One Zone' },
  { folder: '3.2-event-driven-architecture', slug: 'aws-event-driven-architecture', weight: 2, num: '3.2', titleVi: 'Kiến trúc hướng sự kiện AWS', titleEn: 'AWS Event-Driven Architecture' },
  { folder: '3.3-identity-containment', slug: 'aws-ec2-identity-containment', weight: 3, num: '3.3', titleVi: 'EC2 Identity Containment', titleEn: 'EC2 Identity Containment' }
];

blogMeta.forEach(b => {
  const bDir = path.join(blogsDir, b.folder);
  ensureDir(bDir);

  const viHtml = cleanLinks(getRenderedBlog(b.slug, 'vi'));
  const enHtml = cleanLinks(getRenderedBlog(b.slug, 'en'));

  const bViMd = `---
title: "${b.titleVi}"
date: 2026-09-14
weight: ${b.weight}
chapter: false
pre: " <b> ${b.num}. </b> "
---

${viHtml}
`;

  const bEnMd = `---
title: "${b.titleEn}"
date: 2026-09-14
weight: ${b.weight}
chapter: false
pre: " <b> ${b.num}. </b> "
---

${enHtml}
`;

  fs.writeFileSync(path.join(bDir, '_index.vi.md'), bViMd, 'utf8');
  fs.writeFileSync(path.join(bDir, '_index.md'), bEnMd, 'utf8');
});

// 5. Section 4: EventParticipated
console.log('Generating 4-EventParticipated...');
const eventsDir = path.join('content', '4-EventParticipated');
ensureDir(eventsDir);

const eventMeta = [
  { folder: '4.1-database-modernization', slug: 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai', weight: 1, num: '4.1', titleVi: 'Hiện đại hóa Ứng dụng & CSDL với GenAI (29/09/2026)', titleEn: 'Modernizing Applications & Databases with GenAI (29/09/2026)' },
  { folder: '4.2-fcaj-meetup', slug: 'first-cloud-ai-journey-24-10-2026', weight: 2, num: '4.2', titleVi: 'First Cloud AI Journey Meetup (24/10/2026)', titleEn: 'First Cloud AI Journey Meetup (24/10/2026)' },
  { folder: '4.3-enterprise-ai-on-aws', slug: 'enterprise-ai-on-aws-cloud', weight: 3, num: '4.3', titleVi: 'Enterprise AI on AWS Cloud (14/11/2026)', titleEn: 'Enterprise AI on AWS Cloud (14/11/2026)' }
];

const eventsIndexVi = `---
title: "Các events đã tham gia"
date: 2026-09-14
weight: 4
chapter: false
pre: " <b> 4. </b> "
---

# Báo cáo tham gia sự kiện công nghệ AWS

Tổng hợp các sự kiện hội thảo công nghệ, meetup và chương trình đào tạo chuyên sâu về AWS Cloud, Database Modernization và Enterprise Generative AI đã tham gia.

### Danh sách sự kiện:
1. [Sự kiện 1: Hiện đại hóa Ứng dụng & CSDL với GenAI (29/09/2026)](4.1-database-modernization/)
2. [Sự kiện 2: First Cloud AI Journey Meetup (24/10/2026)](4.2-fcaj-meetup/)
3. [Sự kiện 3: Enterprise AI on AWS Cloud: Từ Prototype đến Production (14/11/2026)](4.3-enterprise-ai-on-aws/)
`;

const eventsIndexEn = `---
title: "Events Participated"
date: 2026-09-14
weight: 4
chapter: false
pre: " <b> 4. </b> "
---

# AWS Events & Workshops Participation Report

Summary and key technical takeaways from AWS community conferences, technology meetups, and enterprise AI workshops attended during the internship.

### Attended Events:
1. [Event 1: Modernizing Applications & Databases with GenAI (29/09/2026)](4.1-database-modernization/)
2. [Event 2: First Cloud AI Journey Meetup (24/10/2026)](4.2-fcaj-meetup/)
3. [Event 3: Enterprise AI on AWS Cloud: From Prototype to Production (14/11/2026)](4.3-enterprise-ai-on-aws/)
`;

fs.writeFileSync(path.join(eventsDir, '_index.vi.md'), eventsIndexVi, 'utf8');
fs.writeFileSync(path.join(eventsDir, '_index.md'), eventsIndexEn, 'utf8');

eventMeta.forEach(e => {
  const eDir = path.join(eventsDir, e.folder);
  ensureDir(eDir);

  const viHtml = cleanLinks(getRenderedEvent(e.slug, 'vi'));
  const enHtml = cleanLinks(getRenderedEvent(e.slug, 'en'));

  const eViMd = `---
title: "${e.titleVi}"
date: 2026-09-14
weight: ${e.weight}
chapter: false
pre: " <b> ${e.num}. </b> "
---

${viHtml}
`;

  const eEnMd = `---
title: "${e.titleEn}"
date: 2026-09-14
weight: ${e.weight}
chapter: false
pre: " <b> ${e.num}. </b> "
---

${enHtml}
`;

  fs.writeFileSync(path.join(eDir, '_index.vi.md'), eViMd, 'utf8');
  fs.writeFileSync(path.join(eDir, '_index.md'), eEnMd, 'utf8');
});

// 6. Section 5: Workshop
console.log('Generating 5-Workshop...');
const wsDir = path.join('content', '5-Workshop');
ensureDir(wsDir);

const wsIndexVi = `---
title: "Workshop"
date: 2026-09-14
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Hướng dẫn thực hành Workshop AWS

Tài liệu chi tiết hướng dẫn thực hành triển khai ứng dụng Personalized Nutrition E-Commerce trên nền tảng AWS.

### Các phần của Workshop:
1. [5.1. Giới thiệu tổng quan Workshop](5.1-workshop-overview/)
2. [5.2. Các bước chuẩn bị môi trường](5.2-prerequisites/)
3. [5.3. Xây dựng hạ tầng mạng cốt lõi (VPC & EKS)](5.3-core-infrastructure/)
4. [5.4. Triển khai ứng dụng và cấu hình dịch vụ](5.4-application-deployment/)
5. [5.5. Tích hợp GenAI với Amazon Bedrock](5.5-bedrock-ai/)
6. [5.6. Giám sát hệ thống và quản lý chi phí](5.6-monitoring-cost/)
7. [5.7. Dọn dẹp tài nguyên (Clean-up)](5.7-cleanup/)
`;

const wsIndexEn = `---
title: "Workshop"
date: 2026-09-14
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Hands-on AWS Workshop Guide

Detailed documentation and step-by-step guidance for deploying the Personalized Nutrition E-Commerce platform on AWS Cloud.

### Workshop Sections:
1. [5.1. Workshop Overview & Architecture](5.1-workshop-overview/)
2. [5.2. Prerequisites & Initial Setup](5.2-prerequisites/)
3. [5.3. Core Infrastructure Deployment (VPC & EKS)](5.3-core-infrastructure/)
4. [5.4. Application Deployment & Microservices](5.4-application-deployment/)
5. [5.5. Bedrock Generative AI Integration](5.5-bedrock-ai/)
6. [5.6. Monitoring & Cost Management](5.6-monitoring-cost/)
7. [5.7. Resource Cleanup](5.7-cleanup/)
`;

fs.writeFileSync(path.join(wsDir, '_index.vi.md'), wsIndexVi, 'utf8');
fs.writeFileSync(path.join(wsDir, '_index.md'), wsIndexEn, 'utf8');

// Subpages 5.1 to 5.7
const workshopModules = [
  { folder: '5.1-workshop-overview', weight: 1, num: '5.1', titleVi: 'Tổng quan Workshop', titleEn: 'Workshop Overview', viTag: 'sec-overview', enTag: 'sec-overview' },
  { folder: '5.2-prerequisites', weight: 2, num: '5.2', titleVi: 'Các bước chuẩn bị', titleEn: 'Prerequisites', viTag: 'sec-prereq', enTag: 'sec-prereq' },
  { folder: '5.3-core-infrastructure', weight: 3, num: '5.3', titleVi: 'Hạ tầng cốt lõi', titleEn: 'Core Infrastructure', viTag: 'sec-infra', enTag: 'sec-infra' },
  { folder: '5.4-application-deployment', weight: 4, num: '5.4', titleVi: 'Triển khai ứng dụng', titleEn: 'Application Deployment', viTag: 'sec-app', enTag: 'sec-app' },
  { folder: '5.5-bedrock-ai', weight: 5, num: '5.5', titleVi: 'Tích hợp Amazon Bedrock', titleEn: 'Amazon Bedrock Integration', viTag: 'sec-bedrock', enTag: 'sec-bedrock' },
  { folder: '5.6-monitoring-cost', weight: 6, num: '5.6', titleVi: 'Giám sát và chi phí', titleEn: 'Monitoring and Cost', viTag: 'sec-monitor', enTag: 'sec-monitor' },
  { folder: '5.7-cleanup', weight: 7, num: '5.7', titleVi: 'Dọn dẹp tài nguyên', titleEn: 'Resource Cleanup', viTag: 'sec-cleanup', enTag: 'sec-cleanup' }
];

function extractSectionContent(fullHtml, sectionTag) {
  const startRegex = new RegExp(`<section[^>]*id=["']${sectionTag}["'][^>]*>`, 'i');
  const startMatch = fullHtml.match(startRegex);
  if (!startMatch) return '';
  const startIndex = startMatch.index;
  const afterStart = fullHtml.slice(startIndex);
  const endRegex = /<\/section>/i;
  const endMatch = afterStart.match(endRegex);
  if (!endMatch) return afterStart;
  return afterStart.slice(0, endMatch.index + endMatch[0].length);
}

workshopModules.forEach(mod => {
  const modDir = path.join(wsDir, mod.folder);
  ensureDir(modDir);

  const viSecHtml = extractSectionContent(workshopVi, mod.viTag);
  const enSecHtml = extractSectionContent(workshopEn, mod.enTag);

  const viContent = cleanHtmlForMarkdown(viSecHtml || workshopVi);
  const enContent = cleanHtmlForMarkdown(enSecHtml || workshopEn);

  const modViMd = `---
title: "${mod.titleVi}"
date: 2026-09-14
weight: ${mod.weight}
chapter: false
pre: " <b> ${mod.num}. </b> "
---

${viContent}
`;

  const modEnMd = `---
title: "${mod.titleEn}"
date: 2026-09-14
weight: ${mod.weight}
chapter: false
pre: " <b> ${mod.num}. </b> "
---

${enContent}
`;

  fs.writeFileSync(path.join(modDir, '_index.vi.md'), modViMd, 'utf8');
  fs.writeFileSync(path.join(modDir, '_index.md'), modEnMd, 'utf8');
});

// 7. Section 6: Self-evaluation (EXACTLY 8 CRITERIA)
console.log('Generating 6-Self-evaluation (8 official FCAJ criteria)...');
const evalDir = path.join('content', '6-Self-evaluation');
ensureDir(evalDir);

const official8Criteria = [
  {
    id: 1,
    title_vi: "Kiến thức chuyên môn",
    title_en: "Professional Knowledge",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Nắm vững các dịch vụ AWS cốt lõi đã học (IAM, EC2, VPC, S3, Lambda, Cloud9, RDS, DynamoDB), chủ động tìm hiểu kiến trúc triển khai ứng dụng thực tế.",
    remarks_en: "Solid understanding of core AWS services studied (IAM, EC2, VPC, S3, Lambda, Cloud9, RDS, DynamoDB), actively researching practical deployment architectures."
  },
  {
    id: 2,
    title_vi: "Khả năng tự học và nghiên cứu",
    title_en: "Self-learning and Research",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Chủ động nghiên cứu tài liệu kỹ thuật AWS Documentation, AWS Blogs và các buổi hội thảo công nghệ, tự giải quyết các lỗi cấu hình trong quá trình thực hành.",
    remarks_en: "Proactively researched official AWS Documentation, AWS Blogs, and technical seminars, independently troubleshooting configuration issues during hands-on labs."
  },
  {
    id: 3,
    title_vi: "Tính chủ động trong công việc",
    title_en: "Proactiveness",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Chủ động nhận nhiệm vụ, hoàn thành đúng tiến độ học tập hàng tuần, tích cực đề xuất giải pháp tối ưu hóa lưu trữ và phương án tổ chức tài liệu kỹ thuật.",
    remarks_en: "Consistently took initiative on weekly study milestones, actively proposed storage optimization approaches, and organized technical documentation effectively."
  },
  {
    id: 4,
    title_vi: "Kỷ luật và tuân thủ quy định",
    title_en: "Discipline and Compliance",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Tuân thủ nghiêm túc thời gian biểu, bảo mật tài khoản Sandbox và khóa truy cập IAM, ghi chép nhật ký công việc (Worklog) đầy đủ và đúng hạn.",
    remarks_en: "Strictly observed project schedules, practiced least-privilege security for Sandbox accounts and IAM access, maintaining prompt and detailed Worklog entries."
  },
  {
    id: 5,
    title_vi: "Kỹ năng giao tiếp",
    title_en: "Communication Skills",
    score_vi: "Khá",
    score_en: "Fair",
    remarks_vi: "Trình bày nội dung báo cáo rõ ràng, chủ động trao đổi tiến độ với Mentor và các thành viên; tiếp tục rèn luyện kỹ năng thuyết trình kỹ thuật bằng tiếng Anh.",
    remarks_en: "Communicated status clearly, actively discussed progress with Mentor and team members; continuing to develop technical presentation fluency in English."
  },
  {
    id: 6,
    title_vi: "Làm việc nhóm",
    title_en: "Teamwork",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Hợp tác tích cực với các thành viên trong nhóm dự án Nutrition E-Commerce, chia sẻ tài liệu học tập và phối hợp nhịp nhàng trong các buổi thảo luận.",
    remarks_en: "Collaborated well with peers on the Nutrition E-Commerce project, sharing learning resources and participating actively in team discussions."
  },
  {
    id: 7,
    title_vi: "Năng lực giải quyết vấn đề",
    title_en: "Problem-solving Ability",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Phân tích nguyên nhân sự cố mạng VPC, phân quyền IAM và cấu hình cơ sở dữ liệu dựa trên tài liệu AWS chính thức, đề xuất giải pháp khả thi và an toàn.",
    remarks_en: "Analyzed root causes of VPC networking, IAM permissions, and database connectivity issues using official AWS docs, proposing secure and viable solutions."
  },
  {
    id: 8,
    title_vi: "Đóng góp cho Workshop",
    title_en: "Workshop Contribution",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Hỗ trợ biên soạn và kiểm thử tài liệu hướng dẫn thực hành Workshop 7 bước, chuẩn hóa quy trình triển khai hạ tầng và dọn dẹp tài nguyên sau bài lab.",
    remarks_en: "Assisted in compiling and validating 7-step hands-on Workshop documentation, standardizing infrastructure deployment instructions and cleanup steps."
  }
];

const criteriaTableVi = official8Criteria.map(c => {
  return `| ${c.id} | **${c.title_vi}** | ${c.score_vi} | ${c.remarks_vi} |`;
}).join('\n');

const criteriaTableEn = official8Criteria.map(c => {
  return `| ${c.id} | **${c.title_en}** | ${c.score_en} | ${c.remarks_en} |`;
}).join('\n');

const evalViMd = `---
title: "Tự đánh giá"
date: 2026-09-14
weight: 6
chapter: false
pre: " <b> 6. </b> "
---

# Báo cáo tự đánh giá kết quả thực tập

Bảng tự đánh giá theo 8 tiêu chí chuẩn của chương trình AWS First Cloud AI Journey.

<div class="self-evaluation-table">

| STT | Tiêu chí đánh giá | Điểm tự đánh giá | Nhận xét chi tiết |
| :---: | ------------------ | :---: | ------------------ |
${criteriaTableVi}

</div>

### Tự nhận xét tổng thể:
${data.selfNarrative.vi}

### Các điểm cần cải thiện và kế hoạch phát triển:
${data.needsImprovement.vi}
`;

const evalEnMd = `---
title: "Self-evaluation"
date: 2026-09-14
weight: 6
chapter: false
pre: " <b> 6. </b> "
---

# Internship Self-Evaluation Report

Self-assessment against the 8 official evaluation criteria of the AWS First Cloud AI Journey program.

<div class="self-evaluation-table">

| No. | Evaluation Criteria | Self Score | Detailed Remarks |
| :---: | ------------------- | :---: | ---------------- |
${criteriaTableEn}

</div>

### Overall Self-Evaluation:
${data.selfNarrative.en}

### Areas for Improvement & Future Action Plan:
${data.needsImprovement.en}
`;

fs.writeFileSync(path.join(evalDir, '_index.vi.md'), evalViMd, 'utf8');
fs.writeFileSync(path.join(evalDir, '_index.md'), evalEnMd, 'utf8');

// 8. Section 7: Feedback (SHORT VERSION - 4 SECTIONS)
console.log('Generating 7-Feedback (Concise 4 sections)...');
const fbDir = path.join('content', '7-Feedback');
ensureDir(fbDir);

const fbViMd = `---
title: "Chia sẻ, đóng góp ý kiến"
date: 2026-09-14
weight: 7
chapter: false
pre: " <b> 7. </b> "
---

# Chia sẻ và đóng góp ý kiến về chương trình thực tập

### 1. Trải nghiệm thực tập
Kỳ thực tập tại AWS First Cloud AI Journey mang đến môi trường làm việc cởi mở, chuyên nghiệp và giàu tính thử thách. Sinh viên được trực tiếp nghiên cứu, thực hành trên nền tảng AWS Cloud hàng đầu và nhận được sự định hướng, hỗ trợ tận tình từ Mentor và Ban tổ chức.

### 2. Mức độ hài lòng
Tôi hoàn toàn hài lòng với chương trình đào tạo và lộ trình phát triển kỹ năng thực tế. Các nội dung học tập bám sát kiến thức nền tảng tại trường đại học, đồng thời mở rộng đáng kể năng lực thực chiến với các công nghệ đám mây hiện đại.

### 3. Đề xuất cải thiện
Chương trình có thể tổ chức thêm các buổi thực hành trực tiếp (Offline Hackathon) và các buổi giao lưu định hướng nghề nghiệp cùng cựu học viên đang làm việc tại các đối tác lớn của AWS. Điều này sẽ giúp sinh viên cọ xát thực tế nhiều hơn nữa.

### 4. Giới thiệu chương trình cho sinh viên khóa sau
Đây là chương trình thực tập xuất sắc và rất giá trị dành cho các bạn sinh viên đam mê Cloud và Trí tuệ nhân tạo. Tôi chắc chắn sẽ nhiệt tình giới thiệu AWS First Cloud AI Journey cho các bạn sinh viên khóa sau tại trường.
`;

const fbEnMd = `---
title: "Sharing and Feedback"
date: 2026-09-14
weight: 7
chapter: false
pre: " <b> 7. </b> "
---

# Internship Experience & Feedback

### 1. Internship Experience
The internship at AWS First Cloud AI Journey provided an open, professional, and inspiring environment. I had the privilege of working hands-on with cutting-edge AWS Cloud technologies while receiving dedicated, insightful guidance from my Mentor and the organizing team.

### 2. Satisfaction Level
I am thoroughly satisfied with the curriculum structure and practical skill development. The assignments complemented my academic studies at the university while substantially broadening my production cloud engineering competencies.

### 3. Suggestions for Improvement
The program could consider introducing in-person hackathons and career mentoring roundtables with alumni working at major AWS Premier Partners. This would offer even deeper networking and collaborative problem-solving opportunities.

### 4. Recommendation to Future Students
This is an exceptional and highly rewarding internship program for students aspiring to build careers in Cloud Computing and Generative AI. I will enthusiastically recommend the AWS First Cloud AI Journey to junior peers in upcoming cohorts.
`;

fs.writeFileSync(path.join(fbDir, '_index.vi.md'), fbViMd, 'utf8');
fs.writeFileSync(path.join(fbDir, '_index.md'), fbEnMd, 'utf8');

console.log('SUCCESS: All markdown content regenerated with 0 leading indentation for HTML tags!');
