const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

// Normalize CRLF to LF for reliable search and replace
s = s.replace(/\r\n/g, '\n');

// 1. In renderMeetupEventDetail:
const target1 = `    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",`;

const repl1 = `    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    speakers: isVi ? "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh" : "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",`;

if (s.includes(target1)) {
  s = s.replace(target1, repl1);
  console.log('1. Added speakers to t in renderMeetupEventDetail!');
} else {
  console.error('1. Target 1 not found!');
}

const target2 = `          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">\${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>\${escapeHtml(t.role)}</strong></span>
          </div>`;

const repl2 = `          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">\${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Diễn giả:' : 'Speakers:'}</span>
            <span class="meta-strip-val"><strong>\${escapeHtml(t.speakers)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>\${escapeHtml(t.role)}</strong></span>
          </div>`;

if (s.includes(target2)) {
  s = s.replace(target2, repl2);
  console.log('2. Added speakers to HTML strip in renderMeetupEventDetail!');
} else {
  console.error('2. Target 2 not found!');
}

// 2. Also check DEFAULT_BILINGUAL_DATA events list:
s = s.replace(
  'speakers: "Kiệt Trần, Long Huỳnh & Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh"',
  'speakers: "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh"'
);
s = s.replace(
  'speakers: "Kiệt Trần (Revve AI), Long Huỳnh & Thịnh Nguyễn (Styl Solution), Xuân An (HCMUTE), Khoa Kiều (ACB), Nghi Danh (AWS Community Builder)"',
  'speakers: "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh"'
);

fs.writeFileSync('app.js', s, 'utf8');
console.log('Updated app.js successfully!');
