const fs = require('fs');
const https = require('https');
const http = require('http');

const files = [
  'content/3-BlogsPosted/3.1-s3-express-one-zone/_index.md',
  'content/3-BlogsPosted/3.1-s3-express-one-zone/_index.vi.md',
  'content/3-BlogsPosted/3.2-event-driven-architecture/_index.md',
  'content/3-BlogsPosted/3.2-event-driven-architecture/_index.vi.md',
  'content/3-BlogsPosted/3.3-identity-containment/_index.md',
  'content/3-BlogsPosted/3.3-identity-containment/_index.vi.md'
];

const urls = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /https?:\/\/[^\s"'><\)\\]+/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    let u = match[0];
    while (u.endsWith('.') || u.endsWith(',') || u.endsWith(')')) {
      u = u.slice(0, -1);
    }
    urls.add(u);
  }
});

console.log('Found', urls.size, 'unique URLs in blogs:');
const urlList = Array.from(urls);
urlList.forEach(u => console.log('-', u));
