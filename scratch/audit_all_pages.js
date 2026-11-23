const http = require('http');

const urls = [
  '/fcaj-report/2-proposal/',
  '/fcaj-report/vi/2-proposal/',
  '/fcaj-report/1-worklog/1.1-week1/',
  '/fcaj-report/vi/1-worklog/1.1-week1/',
  '/fcaj-report/1-worklog/1.12-week12/',
  '/fcaj-report/vi/1-worklog/1.12-week12/',
  '/fcaj-report/3-blogsposted/3.1-s3-express-one-zone/',
  '/fcaj-report/vi/3-blogsposted/3.1-s3-express-one-zone/',
  '/fcaj-report/3-blogsposted/3.2-event-driven-architecture/',
  '/fcaj-report/vi/3-blogsposted/3.2-event-driven-architecture/',
  '/fcaj-report/3-blogsposted/3.3-identity-containment/',
  '/fcaj-report/vi/3-blogsposted/3.3-identity-containment/',
  '/fcaj-report/4-eventparticipated/4.1-database-modernization/',
  '/fcaj-report/vi/4-eventparticipated/4.1-database-modernization/',
  '/fcaj-report/4-eventparticipated/4.2-fcaj-meetup/',
  '/fcaj-report/vi/4-eventparticipated/4.2-fcaj-meetup/',
  '/fcaj-report/4-eventparticipated/4.3-enterprise-ai-on-aws/',
  '/fcaj-report/vi/4-eventparticipated/4.3-enterprise-ai-on-aws/',
  '/fcaj-report/5-workshop/5.1-workshop-overview/',
  '/fcaj-report/vi/5-workshop/5.1-workshop-overview/',
  '/fcaj-report/5-workshop/5.2-prerequisites/',
  '/fcaj-report/vi/5-workshop/5.2-prerequisites/',
  '/fcaj-report/5-workshop/5.3-core-infrastructure/',
  '/fcaj-report/vi/5-workshop/5.3-core-infrastructure/',
  '/fcaj-report/5-workshop/5.4-application-deployment/',
  '/fcaj-report/vi/5-workshop/5.4-application-deployment/',
  '/fcaj-report/5-workshop/5.5-bedrock-ai/',
  '/fcaj-report/vi/5-workshop/5.5-bedrock-ai/',
  '/fcaj-report/5-workshop/5.6-monitoring-cost/',
  '/fcaj-report/vi/5-workshop/5.6-monitoring-cost/',
  '/fcaj-report/5-workshop/5.7-cleanup/',
  '/fcaj-report/vi/5-workshop/5.7-cleanup/',
  '/fcaj-report/6-self-evaluation/',
  '/fcaj-report/vi/6-self-evaluation/',
  '/fcaj-report/7-feedback/',
  '/fcaj-report/vi/7-feedback/'
];

async function checkUrl(u) {
  return new Promise((resolve) => {
    http.get('http://localhost:1313' + u, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Check if there are unintended pre tags containing escaped raw HTML
        const preEscaped = (data.match(/<pre><code>&lt;/g) || []).length;
        // Check if css/styles.css is linked
        const hasCss = data.includes('styles.css');
        resolve({
          url: u,
          status: res.statusCode,
          len: data.length,
          preEscaped: preEscaped,
          hasCss: hasCss
        });
      });
    }).on('error', (err) => {
      resolve({ url: u, status: 0, error: err.message });
    });
  });
}

async function run() {
  console.log(`Auditing ${urls.length} pages on Hugo preview server...`);
  let hasErrors = false;
  for (const u of urls) {
    const r = await checkUrl(u);
    if (r.status !== 200 || r.preEscaped > 0) {
      console.error(`❌ FAIL: ${r.url} | Status: ${r.status} | Escaped Pre: ${r.preEscaped}`);
      hasErrors = true;
    } else {
      console.log(`✅ OK: ${r.url} | Status: ${r.status} | Len: ${r.len} | CSS Linked: ${r.hasCss}`);
    }
  }

  if (!hasErrors) {
    console.log('\n🎉 ALL PAGES VERIFIED SUCCESSFULLY: 0 raw HTML escaped blocks found! HTML correctly rendered into live DOM.');
  } else {
    console.error('\n⚠️ SOME PAGES HAVE UNINTENDED ESCAPED RAW HTML BLOCKS.');
  }
}

run();
