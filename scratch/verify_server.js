const http = require('http');

function fetch(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('--- AUDITING HUGO SERVER ---');
  
  // 1. Check CSS
  const css = await fetch('http://127.0.0.1:1313/fcaj-report/css/theme-techreport.css');
  console.log('[1] theme-techreport.css STATUS:', css.status, 'LENGTH:', css.data.length);

  // 2. Check 2-proposal EN and VI
  const propEn = await fetch('http://127.0.0.1:1313/fcaj-report/2-proposal/');
  console.log('[2] /fcaj-report/2-proposal/ STATUS:', propEn.status);
  const propEnSelect = propEn.data.match(/<select id="select-language"[\s\S]*?<\/select>/);
  console.log('    Proposal EN select-language options:');
  if (propEnSelect) {
    const opts = propEnSelect[0].match(/<option[^>]*>[\s\S]*?<\/option>/g);
    console.log('   ', opts ? opts.map(o => o.trim()).join(' | ') : 'none');
  }

  const propVi = await fetch('http://127.0.0.1:1313/fcaj-report/vi/2-proposal/');
  console.log('[3] /fcaj-report/vi/2-proposal/ STATUS:', propVi.status);
  const propViSelect = propVi.data.match(/<select id="select-language"[\s\S]*?<\/select>/);
  console.log('    Proposal VI select-language options:');
  if (propViSelect) {
    const opts = propViSelect[0].match(/<option[^>]*>[\s\S]*?<\/option>/g);
    console.log('   ', opts ? opts.map(o => o.trim()).join(' | ') : 'none');
  }

  // 3. Check Blog 3.1
  const b1 = await fetch('http://127.0.0.1:1313/fcaj-report/3-blogsposted/3.1-s3-express-one-zone/');
  console.log('[4] /fcaj-report/3-blogsposted/3.1-s3-express-one-zone/ STATUS:', b1.status);
  console.log('    Has leaked raw attributes:', b1.data.includes('title="Click to enlarge diagram" loading="lazy">'));
  console.log('    Has cover image:', b1.data.includes('/fcaj-report/images/s3-express-one-zone-architecture.png'));

  // 4. Check Blog 3.2
  const b2 = await fetch('http://127.0.0.1:1313/fcaj-report/3-blogsposted/3.2-event-driven-architecture/');
  console.log('[5] /fcaj-report/3-blogsposted/3.2-event-driven-architecture/ STATUS:', b2.status);
  console.log('    Has leaked raw attributes:', b2.data.includes('title="Click to enlarge diagram" loading="lazy">'));
  console.log('    Has cover image:', b2.data.includes('/fcaj-report/images/aws-event-driven-architecture.png'));

  // 5. Check Blog 3.3
  const b3 = await fetch('http://127.0.0.1:1313/fcaj-report/3-blogsposted/3.3-identity-containment/');
  console.log('[6] /fcaj-report/3-blogsposted/3.3-identity-containment/ STATUS:', b3.status);
  console.log('    Has leaked raw attributes:', b3.data.includes('title="Click to enlarge diagram" loading="lazy">'));
  console.log('    Has cover image:', b3.data.includes('/fcaj-report/images/aws-ec2-identity-containment-architecture.png'));

  // 6. Check Home page
  const homeEn = await fetch('http://127.0.0.1:1313/fcaj-report/');
  console.log('[7] /fcaj-report/ Home EN STATUS:', homeEn.status);
  console.log('    Home EN has profile image:', homeEn.data.includes('/fcaj-report/images/profile.jpg'));

  // 7. Check Event 3 speakers
  const ev3 = await fetch('http://127.0.0.1:1313/fcaj-report/4-eventparticipated/4.3-enterprise-ai-on-aws/');
  console.log('[8] Event 3 has all 4 speakers:', 
    ev3.data.includes('Khang Duong') && 
    ev3.data.includes('Phuong Huyen') && 
    ev3.data.includes('Bao Nguyen') && 
    ev3.data.includes('Khuong Huynh')
  );

  console.log('--- AUDIT COMPLETE ---');
}

verify().catch(console.error);
