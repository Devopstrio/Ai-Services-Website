const fs = require('fs');
const path = require('path');

const src = 'src/components/capabilities';
const dest = 'src/components/integration';

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
}

fs.readdirSync(src).forEach(file => {
  if (file.endsWith('.jsx')) {
    const newFile = file.replace('Capabilities', 'Integration');
    let content = fs.readFileSync(path.join(src, file), 'utf8');
    
    // Replace names
    content = content.replace(/Capabilities/g, 'Integration');
    content = content.replace(/capabilities/g, 'integration');
    content = content.replace(/CAPABILITIES/g, 'INTEGRATION');
    
    fs.writeFileSync(path.join(dest, newFile), content);
  }
});
console.log('Cloned to integration');
