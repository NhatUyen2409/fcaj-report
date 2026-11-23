const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

const t1 = '<code>${escapeHtml(a.sections[2].expressIo)}</code>';
const r1 = '<span class="calc-text">${escapeHtml(a.sections[2].expressIo)}</span>';

const t2 = '<code>${escapeHtml(a.sections[2].expressCompute)}</code>';
const r2 = '<span class="calc-text">${escapeHtml(a.sections[2].expressCompute)}</span>';

const t3 = '<code>${escapeHtml(a.sections[2].expressTotal)}</code>';
const r3 = '<span class="calc-text">${escapeHtml(a.sections[2].expressTotal)}</span>';

s = s.replace(t1, r1).replace(t2, r2).replace(t3, r3);
fs.writeFileSync('app.js', s, 'utf8');
console.log('Successfully updated app.js with calc-text!');
