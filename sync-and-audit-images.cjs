const fs = require('fs');
const path = require('path');

const downloadsDir = 'C:\\Users\\mani\\Downloads';
const targetDir = path.join(__dirname, 'src', 'assets', 'fresh');

// 1. Copy fresh images from Downloads root into src/assets/fresh
const rootFiles = fs.readdirSync(downloadsDir);
let copiedCount = 0;

rootFiles.forEach(file => {
  const fullPath = path.join(downloadsDir, file);
  const stat = fs.statSync(fullPath);
  if (stat.isFile()) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
      // Clean name: replace spaces and parens with underscores
      let cleanName = file.replace(/[\s\(\)]+/g, '_').toLowerCase();
      if (!cleanName.endsWith(ext)) cleanName += ext;
      const destPath = path.join(targetDir, cleanName);
      
      fs.copyFileSync(fullPath, destPath);
      copiedCount++;
    }
  }
});

console.log(`Copied ${copiedCount} assets from Downloads to src/assets/fresh/`);

const allFreshFiles = fs.readdirSync(targetDir);
console.log(`Total fresh assets in src/assets/fresh: ${allFreshFiles.length}`);
