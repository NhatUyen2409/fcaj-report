const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (!['.git', 'public', 'node_modules', 'themes'].includes(file)) {
        searchDir(full);
      }
    } else if (file.endsWith('.md') || file.endsWith('.html') || file.endsWith('.toml') || file.endsWith('.css') || file.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/\/aws\/[^\s"'`\)]*/g);
      if (matches) {
        console.log(full, matches.length, 'matches:', matches.slice(0, 3));
      }
    }
  });
}

searchDir('.');
