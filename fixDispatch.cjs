const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.jsx', 'utf8');
content = content.replace(
  'window.dispatchEvent(new CustomEvent("open-resources-tab"));',
  'setTimeout(() => window.dispatchEvent(new CustomEvent("open-resources-tab")), 20);'
);
fs.writeFileSync('src/components/layout/Header.jsx', content);
