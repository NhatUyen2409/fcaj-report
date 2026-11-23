const http = require('http');

function fetch(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    });
  });
}

async function run() {
  const homeVi = await fetch('http://127.0.0.1:1313/fcaj-report/vi/');
  console.log('Home VI contains student-profile-card:', homeVi.includes('student-profile-card'));
  console.log('Home VI contains SE196682:', homeVi.includes('SE196682'));
  console.log('Home VI contains AWS082025:', homeVi.includes('AWS082025'));
  console.log('Home VI contains profile.jpg:', homeVi.includes('/fcaj-report/images/profile.jpg'));

  const homeEn = await fetch('http://127.0.0.1:1313/fcaj-report/');
  console.log('Home EN contains student-profile-card:', homeEn.includes('student-profile-card'));
  console.log('Home EN contains SE196682:', homeEn.includes('SE196682'));

  const blogVi = await fetch('http://127.0.0.1:1313/fcaj-report/vi/3-blogsposted/3.1-s3-express-one-zone/');
  console.log('Blog 3.1 contains width:28%:', blogVi.includes('width:28%') || blogVi.includes('width: 28%'));
  console.log('Blog 3.1 contains width:24%:', blogVi.includes('width:24%') || blogVi.includes('width: 24%'));
  console.log('Blog 3.1 contains Giai doan thuc thi:', blogVi.includes('Giai đoạn thực thi'));
  console.log('Blog 3.1 contains S3 Express One Zone:', blogVi.includes('S3 Express One Zone'));

  const selfVi = await fetch('http://127.0.0.1:1313/fcaj-report/vi/6-self-evaluation/');
  console.log('Self-eval contains self-evaluation-table:', selfVi.includes('self-evaluation-table'));
}

run();
