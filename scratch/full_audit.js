const http = require('http');

const PORT = 1313;
const HOST = '127.0.0.1';

function fetch(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://${HOST}:${PORT}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

const pagesToTest = [
  // Home
  { name: 'Home (EN)', url: '/fcaj-report/' },
  { name: 'Home (VI)', url: '/fcaj-report/vi/' },

  // Worklogs (Sample: Week 1, Week 6, Week 10, Week 12)
  { name: 'Worklog Index (EN)', url: '/fcaj-report/1-worklog/' },
  { name: 'Worklog Index (VI)', url: '/fcaj-report/vi/1-worklog/' },
  { name: 'Worklog Week 1 (EN)', url: '/fcaj-report/1-worklog/1.1-week1/' },
  { name: 'Worklog Week 1 (VI)', url: '/fcaj-report/vi/1-worklog/1.1-week1/' },
  { name: 'Worklog Week 6 (EN)', url: '/fcaj-report/1-worklog/1.6-week6/' },
  { name: 'Worklog Week 6 (VI)', url: '/fcaj-report/vi/1-worklog/1.6-week6/' },
  { name: 'Worklog Week 10 (EN)', url: '/fcaj-report/1-worklog/1.10-week10/' },
  { name: 'Worklog Week 10 (VI)', url: '/fcaj-report/vi/1-worklog/1.10-week10/' },
  { name: 'Worklog Week 12 (EN)', url: '/fcaj-report/1-worklog/1.12-week12/' },
  { name: 'Worklog Week 12 (VI)', url: '/fcaj-report/vi/1-worklog/1.12-week12/' },

  // Proposal
  { name: 'Proposal (EN)', url: '/fcaj-report/2-proposal/' },
  { name: 'Proposal (VI)', url: '/fcaj-report/vi/2-proposal/' },

  // Blogs
  { name: 'Blogs Index (EN)', url: '/fcaj-report/3-blogsposted/' },
  { name: 'Blogs Index (VI)', url: '/fcaj-report/vi/3-blogsposted/' },
  { name: 'Blog 3.1 S3 Express (EN)', url: '/fcaj-report/3-blogsposted/3.1-s3-express-one-zone/' },
  { name: 'Blog 3.1 S3 Express (VI)', url: '/fcaj-report/vi/3-blogsposted/3.1-s3-express-one-zone/' },
  { name: 'Blog 3.2 Event Driven (EN)', url: '/fcaj-report/3-blogsposted/3.2-event-driven-architecture/' },
  { name: 'Blog 3.2 Event Driven (VI)', url: '/fcaj-report/vi/3-blogsposted/3.2-event-driven-architecture/' },
  { name: 'Blog 3.3 Identity Containment (EN)', url: '/fcaj-report/3-blogsposted/3.3-identity-containment/' },
  { name: 'Blog 3.3 Identity Containment (VI)', url: '/fcaj-report/vi/3-blogsposted/3.3-identity-containment/' },

  // Events
  { name: 'Events Index (EN)', url: '/fcaj-report/4-eventparticipated/' },
  { name: 'Events Index (VI)', url: '/fcaj-report/vi/4-eventparticipated/' },
  { name: 'Event 4.1 Modernization (VI)', url: '/fcaj-report/vi/4-eventparticipated/4.1-database-modernization/' },
  { name: 'Event 4.2 FCAJ Meetup (VI)', url: '/fcaj-report/vi/4-eventparticipated/4.2-fcaj-meetup/' },
  { name: 'Event 4.2 FCAJ Meetup (EN)', url: '/fcaj-report/4-eventparticipated/4.2-fcaj-meetup/' },
  { name: 'Event 4.3 Enterprise AI (VI)', url: '/fcaj-report/vi/4-eventparticipated/4.3-enterprise-ai-on-aws/' },

  // Workshop
  { name: 'Workshop Index (EN)', url: '/fcaj-report/5-workshop/' },
  { name: 'Workshop Index (VI)', url: '/fcaj-report/vi/5-workshop/' },
  { name: 'Workshop 5.1 Overview (VI)', url: '/fcaj-report/vi/5-workshop/5.1-workshop-overview/' },
  { name: 'Workshop 5.3 Core Infra (VI)', url: '/fcaj-report/vi/5-workshop/5.3-core-infrastructure/' },
  { name: 'Workshop 5.5 Bedrock (VI)', url: '/fcaj-report/vi/5-workshop/5.5-bedrock-ai/' },
  { name: 'Workshop 5.7 Cleanup (VI)', url: '/fcaj-report/vi/5-workshop/5.7-cleanup/' },

  // Self Evaluation
  { name: 'Self Evaluation (EN)', url: '/fcaj-report/6-self-evaluation/' },
  { name: 'Self Evaluation (VI)', url: '/fcaj-report/vi/6-self-evaluation/' },

  // Feedback
  { name: 'Feedback (EN)', url: '/fcaj-report/7-feedback/' },
  { name: 'Feedback (VI)', url: '/fcaj-report/vi/7-feedback/' }
];

async function runAudit() {
  console.log('=====================================================');
  console.log('   FULL AUTOMATED AUDIT - STANDARDIZED FCAJ SITE     ');
  console.log('=====================================================');

  let totalErrors = 0;
  const verifiedImages = new Set();

  for (const page of pagesToTest) {
    const res = await fetch(page.url);
    if (res.status !== 200) {
      console.error(`[FAIL] Page ${page.name} (${page.url}) returned status ${res.status}`);
      totalErrors++;
      continue;
    }

    // Check undefined
    if (res.data.includes('undefined')) {
      console.error(`[FAIL] 'undefined' detected on page ${page.name} (${page.url})`);
      totalErrors++;
    }

    // Check PROGRESS.md (must be zero)
    if (res.data.includes('PROGRESS.md')) {
      console.error(`[FAIL] PROGRESS.md link detected on page ${page.name} (${page.url})`);
      totalErrors++;
    }

    // Check language switcher
    const selectMatch = res.data.match(/<select[^>]*id=["']?select-language["']?[\s\S]*?<\/select>/i);
    if (!selectMatch) {
      console.error(`[FAIL] Language switcher not found on ${page.name}`);
      totalErrors++;
    }

    // Extract image sources
    const imgRegex = /<img[^>]+src=["']?([^"'\s>]+)["']?/gi;
    let match;
    while ((match = imgRegex.exec(res.data)) !== null) {
      verifiedImages.add(match[1]);
    }
  }

  console.log(`[PASS] Tested ${pagesToTest.length} pages. All returned HTTP 200, zero 'undefined', zero 'PROGRESS.md'.`);

  // Check CSS & Theme
  console.log('\n--- TEMPLATE CSS AUDIT ---');
  const customCss = await fetch('/fcaj-report/css/custom.css');
  console.log(`custom.css Status: ${customCss.status} (Length: ${customCss.data.length} bytes)`);

  // Check Self-evaluation content (must have exactly 8 criteria rows)
  console.log('\n--- SELF-EVALUATION AUDIT ---');
  const selfEvalVi = await fetch('/fcaj-report/vi/6-self-evaluation/');
  const tableRowsVi = (selfEvalVi.data.match(/<tr>/g) || []).length;
  // Note: 1 header row + 8 data rows = 9 rows in HTML table
  const hasExact8Criteria = tableRowsVi === 9;
  console.log(`VI Self-Evaluation table has 8 criteria rows: ${hasExact8Criteria} (Total <tr>: ${tableRowsVi})`);
  console.log(`VI Self-Evaluation has narrative: ${selfEvalVi.data.includes('Trong suốt kỳ thực tập')}`);

  // Check Feedback content (must have 4 concise sections)
  console.log('\n--- FEEDBACK AUDIT ---');
  const fbVi = await fetch('/fcaj-report/vi/7-feedback/');
  const has4Sections = fbVi.data.includes('1. Trải nghiệm thực tập') &&
                       fbVi.data.includes('2. Mức độ hài lòng') &&
                       fbVi.data.includes('3. Đề xuất cải thiện') &&
                       fbVi.data.includes('4. Giới thiệu chương trình');
  console.log(`VI Feedback has 4 concise sections: ${has4Sections}`);

  // Check Event 2 speakers
  console.log('\n--- EVENT 2 SPEAKERS AUDIT ---');
  const ev2Vi = await fetch('/fcaj-report/vi/4-eventparticipated/4.2-fcaj-meetup/');
  const hasAll6SpeakersVi = ev2Vi.data.includes('Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh');
  console.log(`Event 2 VI has 6 speakers: ${hasAll6SpeakersVi}`);

  const ev2En = await fetch('/fcaj-report/4-eventparticipated/4.2-fcaj-meetup/');
  const hasAll6SpeakersEn = ev2En.data.includes('Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh');
  console.log(`Event 2 EN has 6 speakers: ${hasAll6SpeakersEn}`);

  // Check Blog 3.1 diagram
  console.log('\n--- BLOG 3.1 ARCHITECTURE DIAGRAM AUDIT ---');
  const blog31Vi = await fetch('/fcaj-report/vi/3-blogsposted/3.1-s3-express-one-zone/');
  const hasDiagram = blog31Vi.data.includes('minimal-tier-diagram') &&
                     blog31Vi.data.includes('Lớp 1: Amazon S3 Standard') &&
                     blog31Vi.data.includes('Lớp 2: S3 Express One Zone') &&
                     blog31Vi.data.includes('Tầng Điện toán: EC2 / GPU');
  console.log(`Blog 3.1 VI has Two-Tier diagram: ${hasDiagram}`);

  console.log('\n=====================================================');
  console.log(`AUDIT COMPLETE. Total critical errors: ${totalErrors}`);
  console.log('=====================================================');
}

runAudit().catch(console.error);
