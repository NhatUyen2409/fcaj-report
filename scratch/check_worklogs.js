const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('app.js', 'utf8');
code += '; global.data = DEFAULT_BILINGUAL_DATA;';

const ctx = {
  window: {},
  document: { addEventListener: () => {} },
  localStorage: { getItem: () => 'vi', setItem: () => {} },
  location: { hash: '' },
  global: {}
};

vm.createContext(ctx);
vm.runInContext(code, ctx);

const worklogs = ctx.global.data.worklogs;
console.log('Total weeks found:', worklogs.length);

worklogs.forEach(w => {
  console.log(`\n=== WEEK ${w.weekNum} ===`);
  console.log('VI Topic:', w.vi.topic);
  console.log('EN Topic:', w.en.topic);
  console.log(`VI Tasks (${w.vi.tasks.length}):`);
  w.vi.tasks.forEach((t, i) => {
    console.log(`  [${i+1}] ${t.day} | ${t.start} -> ${t.end}`);
    console.log(`      Desc: ${t.desc.replace(/\n/g, ' ')}`);
    console.log(`      Ref:  ${t.ref}`);
  });
});
