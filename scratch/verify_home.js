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

async function verifyHome() {
  console.log('--- VERIFYING HOME VI ---');
  const vi = await fetch('http://127.0.0.1:1313/fcaj-report/vi/');
  const fieldsVi = [
    'Họ và tên:',
    'Số điện thoại:',
    'Email:',
    'Trường đại học:',
    'Chuyên ngành:',
    'Lớp:',
    'Công ty thực tập:',
    'Vị trí thực tập:',
    'Thời gian thực tập:'
  ];
  fieldsVi.forEach(f => {
    console.log(`VI Field [${f}]:`, vi.includes(f));
  });
  console.log('VI has profile.jpg:', vi.includes('/fcaj-report/images/profile.jpg'));
  console.log('VI has Report Content:', vi.includes('Nội dung báo cáo'));
  console.log('VI has NO custom card:', !vi.includes('student-profile-card'));

  console.log('\n--- VERIFYING HOME EN ---');
  const en = await fetch('http://127.0.0.1:1313/fcaj-report/');
  const fieldsEn = [
    'Full Name:',
    'Phone Number:',
    'Email:',
    'University:',
    'Major:',
    'Class:',
    'Internship Company:',
    'Internship Position:',
    'Internship Duration:'
  ];
  fieldsEn.forEach(f => {
    console.log(`EN Field [${f}]:`, en.includes(f));
  });
  console.log('EN has profile.jpg:', en.includes('/fcaj-report/images/profile.jpg'));
  console.log('EN has Report Content:', en.includes('Report Content'));
  console.log('EN has NO custom card:', !en.includes('student-profile-card'));
}

verifyHome();
