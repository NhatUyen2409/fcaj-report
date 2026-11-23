const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.resolve('.');
const destDir = path.resolve('..', 'fcaj-report');

console.log(`Source: ${srcDir}`);
console.log(`Destination: ${destDir}`);

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Helper to copy directory recursively
function copyDir(src, dest, ignoreList = []) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (ignoreList.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, ignoreList);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Copy necessary directories and files
console.log('Copying project files to fcaj-report...');
const topLevelDirs = ['archetypes', 'content', 'layouts', 'static', 'themes', 'assets', 'scratch'];
topLevelDirs.forEach(d => {
  const p = path.join(srcDir, d);
  if (fs.existsSync(p)) {
    console.log(`  Copying ${d}...`);
    copyDir(p, path.join(destDir, d), ['.git', 'public', '.hugo_build.lock']);
  }
});

const topLevelFiles = ['config.toml', 'package.json', 'app.js', '.gitmodules', '.nojekyll'];
topLevelFiles.forEach(f => {
  const p = path.join(srcDir, f);
  if (fs.existsSync(p)) {
    console.log(`  Copying ${f}...`);
    fs.copyFileSync(p, path.join(destDir, f));
  }
});

// 2. Update config.toml in destDir
console.log('Updating config.toml baseURL...');
const configPath = path.join(destDir, 'config.toml');
let config = fs.readFileSync(configPath, 'utf8');
config = config.replace(/baseURL\s*=\s*["'][^"']*["']/, 'baseURL = "https://nhatuyen2409.github.io/fcaj-report/"');
fs.writeFileSync(configPath, config, 'utf8');

// 3. Update layouts/_default/_markup/render-image.html
console.log('Updating render-image.html...');
const renderImagePath = path.join(destDir, 'layouts', '_default', '_markup', 'render-image.html');
if (fs.existsSync(renderImagePath)) {
  let renderImg = fs.readFileSync(renderImagePath, 'utf8');
  renderImg = renderImg.replace(/\/aws\//g, '/fcaj-report/');
  fs.writeFileSync(renderImagePath, renderImg, 'utf8');
}

// 4. Update 404.html in static
console.log('Updating static/404.html...');
const notFoundPath = path.join(destDir, 'static', '404.html');
if (fs.existsSync(notFoundPath)) {
  let notFound = fs.readFileSync(notFoundPath, 'utf8');
  notFound = notFound.replace(/\/aws\//g, '/fcaj-report/');
  fs.writeFileSync(notFoundPath, notFound, 'utf8');
}

// 5. Replace /fcaj-report/ with /fcaj-report/ in all content files
console.log('Replacing /fcaj-report/ with /fcaj-report/ in content files...');
function replaceInDir(dir, findStr, replaceStr) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInDir(fullPath, findStr, replaceStr);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(findStr)) {
        content = content.split(findStr).join(replaceStr);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`  Updated: ${path.relative(destDir, fullPath)}`);
      }
    }
  }
}

replaceInDir(path.join(destDir, 'content'), '/fcaj-report/', '/fcaj-report/');
replaceInDir(path.join(destDir, 'scratch'), '/fcaj-report/', '/fcaj-report/');

// 6. Setup GitHub Actions workflow in destDir
console.log('Setting up .github/workflows/deploy.yml...');
const workflowDir = path.join(destDir, '.github', 'workflows');
fs.mkdirSync(workflowDir, { recursive: true });

const workflowContent = `name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source code
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "0.134.3"
          extended: true

      - name: Build website
        run: hugo --minify

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: gh-pages
          force_orphan: true
`;

fs.writeFileSync(path.join(workflowDir, 'deploy.yml'), workflowContent, 'utf8');

// 7. Setup .gitignore in destDir
console.log('Setting up .gitignore...');
const gitignoreContent = `public/
resources/
.hugo_build.lock
.DS_Store
Thumbs.db
node_modules/
`;
fs.writeFileSync(path.join(destDir, '.gitignore'), gitignoreContent, 'utf8');

// 8. Setup README.md in destDir
console.log('Setting up README.md...');
const readmeContent = `# AWS First Cloud AI Journey - Internship Report (fcaj-report)

Website báo cáo thực tập độc lập của sinh viên Phan Nhật Uyên trong chương trình AWS First Cloud AI Journey (FCAJ).

- **Sinh viên:** Phan Nhật Uyên
- **Mã số sinh viên:** SE196682
- **Lớp:** AWS082025
- **Địa chỉ website:** [https://nhatuyen2409.github.io/fcaj-report/](https://nhatuyen2409.github.io/fcaj-report/)
- **Template tham chiếu:** [AWS FCAJ Workshop Template](https://github.com/thienluhoan/fcj-workshop-template)

## Cấu trúc nội dung
1. **Worklog:** Nhật ký 12 tuần học tập & nghiên cứu AWS Cloud.
2. **Proposal:** Đề xuất kiến trúc dự án Nutrition E-Commerce.
3. **Blogs Posted:** 3 bài viết chuyên sâu về kiến trúc điện toán đám mây AWS.
4. **Events Participated:** 3 sự kiện công nghệ và hội thảo AWS.
5. **Workshop:** Hướng dẫn thực hành Lab AWS 7 bước hoàn chỉnh.
6. **Self-evaluation:** Báo cáo tự đánh giá theo 8 tiêu chí chuẩn FCAJ.
7. **Sharing and Feedback:** Chia sẻ và đóng góp ý kiến hoàn thiện chương trình.

## Phát triển & Xem trước tại Local
\`\`\`bash
hugo server -D
\`\`\`
Truy cập tại: \`http://localhost:1313/fcaj-report/\`
`;
fs.writeFileSync(path.join(destDir, 'README.md'), readmeContent, 'utf8');

console.log('Independent project fcaj-report created successfully!');
