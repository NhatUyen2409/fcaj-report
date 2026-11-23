const http = require('http');

http.get('http://localhost:1313/fcaj-report/2-proposal/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const preTags = data.match(/<pre[^>]*>[\s\S]*?<\/pre>/gi);
    console.log('Pre tags count:', preTags ? preTags.length : 0);
    if (preTags) {
      console.log('First pre snippet:', preTags[0].substring(0, 300));
    }
    console.log('Has rendered <div class="tech-report">?', data.includes('<div class="tech-report">'));
    console.log('Has rendered <h1 class="report-title">?', data.includes('<h1 class="report-title">'));
  });
});
