const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('app.js', 'utf8');
code += '\nglobal.getWorkshopViHtml = getWorkshopViHtml;\n';

const ctx = {
  window: {},
  document: { addEventListener: () => {} },
  localStorage: { getItem: () => 'vi', setItem: () => {} },
  location: { hash: '' },
  global: {}
};

vm.createContext(ctx);
vm.runInContext(code, ctx);

const html = ctx.global.getWorkshopViHtml();
const idx7 = html.indexOf('pane-ws-5-7');
console.log('Index of pane-ws-5-7:', idx7);
if (idx7 !== -1) {
  console.log(html.substring(idx7, idx7 + 500));
}
