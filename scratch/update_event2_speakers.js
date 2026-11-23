const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

// Update t object in renderMeetupEventDetail
const oldT = `    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",`;

const newT = `    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    speakers: "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",`;

s = s.replace(oldT.replace(/\n/g, '\r\n'), newT.replace(/\n/g, '\r\n'));
s = s.replace(oldT, newT);

// Update HTML strip in renderMeetupEventDetail
const oldStrip = `          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">\${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">\${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>\${escapeHtml(t.role)}</strong></span>
          </div>`;

const newStrip = `          <div class="meta-strip-item">
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

s = s.replace(oldStrip.replace(/\n/g, '\r\n'), newStrip.replace(/\n/g, '\r\n'));
s = s.replace(oldStrip, newStrip);

fs.writeFileSync('app.js', s, 'utf8');
console.log('Successfully updated Event 2 speakers in renderMeetupEventDetail!');
