const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  }
  return files;
}

const mdFiles = walk('content').filter(f => f.endsWith('.md'));
const imgRegex = /<img[^>]+src=["']([^"']+)["']|!\[[^\]]*\]\(([^)]+)\)/g;
const found = new Set();

for (const file of mdFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1] || match[2];
    found.add(src);
  }
}

console.log(`Found ${found.size} unique image references:`);
for (const src of Array.from(found).sort()) {
  let clean = src.replace(/^\/aws\//, '').replace(/^\//, '');
  const existsStatic = fs.existsSync(path.join('static', clean));
  const cleanNoAssets = clean.replace(/^assets\//, '');
  const existsNoAssets = fs.existsSync(path.join('static', cleanNoAssets));
  console.log(`${src} => existsStatic: ${existsStatic}, existsInStaticWithoutAssets: ${existsNoAssets}`);
}
