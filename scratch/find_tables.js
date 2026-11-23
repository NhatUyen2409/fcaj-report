const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.md')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('content');
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.trim().startsWith('|') && l.trim().endsWith('|')) {
      const pipes = (l.match(/\|/g) || []).length;
      if (lines[idx + 1] && lines[idx + 1].includes('---')) {
        console.log(`${f} L${idx + 1} (${pipes - 1} cols): ${l.trim()}`);
      }
    }
    if (l.includes('<table')) {
      console.log(`${f} L${idx + 1} (HTML Table): ${l.trim()}`);
    }
  });
});
