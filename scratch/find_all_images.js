const fs = require('fs');
const path = require('path');

function findImages(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      findImages(p);
    } else if (f.endsWith('.md')) {
      const c = fs.readFileSync(p, 'utf8');
      const mdImgs = [];
      const reMd = /!\[[^\]]*\]\(([^)]+)\)/g;
      let m;
      while ((m = reMd.exec(c)) !== null) {
        mdImgs.push(m[1]);
      }
      const htmlImgs = [];
      const reHtml = /<img[^>]+src=["']([^"']+)["']/gi;
      while ((m = reHtml.exec(c)) !== null) {
        htmlImgs.push(m[1]);
      }
      const all = [...mdImgs, ...htmlImgs];
      if (all.length > 0) {
        console.log(p, '->', all);
      }
    }
  }
}

findImages('content');
