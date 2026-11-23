const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

// 1. Remove unwanted PROGRESS.md link
const progressTarget = '\n[Project Progress Documentation](https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/main/docs/PROGRESS.md)';
s = s.split(progressTarget).join('');

// 2. Remove 404 links in 3.2 and 3.3
const dead1 = '          title: "AWS Compute Blog – Designing for Idempotency and Race Conditions in Serverless",\n          url: "https://aws.amazon.com/blogs/compute/handling-duplicate-records-in-amazon-sqs-fifo-queues/"\n        },\n';
const dead1CR = dead1.replace(/\n/g, '\r\n');
const dead2 = '          title: "AWS Security Blog – Limiting Scope of Compromised Credentials with VPC Condition Keys",\n          url: "https://aws.amazon.com/blogs/security/how-to-use-aws-condition-keys-to-limit-access-from-specific-vpcs/"\n        },\n';
const dead2CR = dead2.replace(/\n/g, '\r\n');
s = s.split(dead1).join('').split(dead1CR).join('').split(dead2).join('').split(dead2CR).join('');

// 3. Blog 3.1: Change formulas from <code> to <span class="calc-text">
s = s.split('<code>${escapeHtml(a.sections[2].expressIo)}</code>').join('<span class="calc-text">${escapeHtml(a.sections[2].expressIo)}</span>');
s = s.split('<code>${escapeHtml(a.sections[2].expressCompute)}</code>').join('<span class="calc-text">${escapeHtml(a.sections[2].expressCompute)}</span>');
s = s.split('<code>${escapeHtml(a.sections[2].expressTotal)}</code>').join('<span class="calc-text">${escapeHtml(a.sections[2].expressTotal)}</span>');

// 4. Event 2: Add 6 speakers to t object and meta-strip in renderMeetupEventDetail
const oldEvent2T = '    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",\r\n    role: isVi ? "Người tham dự (Attendee)" : "Attendee",';
const newEvent2T = '    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",\r\n    speakers: isVi ? "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh" : "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh",\r\n    role: isVi ? "Người tham dự (Attendee)" : "Attendee",';

const oldEvent2LF = '    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",\n    role: isVi ? "Người tham dự (Attendee)" : "Attendee",';
const newEvent2LF = '    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",\n    speakers: isVi ? "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh" : "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh",\n    role: isVi ? "Người tham dự (Attendee)" : "Attendee",';

if (s.includes(oldEvent2T)) s = s.replace(oldEvent2T, newEvent2T);
else if (s.includes(oldEvent2LF)) s = s.replace(oldEvent2LF, newEvent2LF);

const oldEvent2Strip = `          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">\${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>\${escapeHtml(t.role)}</strong></span>
          </div>`;

const newEvent2Strip = `          <div class="meta-strip-item">
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

s = s.replace(oldEvent2Strip.replace(/\n/g, '\r\n'), newEvent2Strip.replace(/\n/g, '\r\n'));
s = s.replace(oldEvent2Strip, newEvent2Strip);

// Also clean speakers list in DEFAULT_BILINGUAL_DATA Event 2
s = s.replace(
  'speakers: "Kiệt Trần, Long Huỳnh & Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh"',
  'speakers: "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh"'
);
s = s.replace(
  'speakers: "Kiệt Trần (Revve AI), Long Huỳnh & Thịnh Nguyễn (Styl Solution), Xuân An (HCMUTE), Khoa Kiều (ACB), Nghi Danh (AWS Community Builder)"',
  'speakers: "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh"'
);

fs.writeFileSync('app.js', s, 'utf8');
console.log('app.js cleanly updated via script!');
