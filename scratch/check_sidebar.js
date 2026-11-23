const http = require('http');

http.get('http://127.0.0.1:1313/fcaj-report/vi/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const list = [];
    const lines = data.split('\n');
    lines.forEach((l, idx) => {
      if (l.includes('data-nav-id=')) {
        const idMatch = l.match(/data-nav-id="([^"]+)"/);
        const nextLines = lines.slice(idx, idx + 8).join(' ');
        const hasArrow = nextLines.includes('category-icon');
        const hasCheck = nextLines.includes('read-icon');
        list.push({ id: idMatch ? idMatch[1] : '', hasArrow, hasCheck });
      }
    });
    console.log('Sidebar sections check:');
    list.forEach(item => console.log(item));
  });
});
