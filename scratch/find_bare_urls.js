const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

const bareUrls = new Set();
const lines = s.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('ref:')) {
    // Check if there are bare URLs: http... not preceded by (
    const regex = /(https?:\/\/[^\s"'()<>]+)/g;
    let match;
    while ((match = regex.exec(l)) !== null) {
      const u = match[1];
      const prevChar = l[match.index - 1];
      if (prevChar !== '(') {
        bareUrls.add(u);
        console.log(`Bare URL at line ${idx + 1}: ${u}`);
      }
    }
  }
});

console.log(`Total unique bare URLs found: ${bareUrls.size}`);
bareUrls.forEach(u => console.log(' - ' + u));
