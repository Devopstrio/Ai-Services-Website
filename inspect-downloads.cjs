const fs = require('fs');
const path = require('path');

const downloadsDir = 'C:\\Users\\mani\\Downloads';
const targetDir = path.join(__dirname, 'src', 'assets', 'fresh');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function scanDir(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // skip node_modules or huge dirs
          if (!file.includes('node_modules') && !file.startsWith('.')) {
            results = results.concat(scanDir(fullPath));
          }
        } else {
          const ext = path.extname(file).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
            results.push({ fullPath, file, mtime: stat.mtimeMs, size: stat.size });
          }
        }
      } catch(e) {}
    });
  } catch(e) {}
  return results;
}

const found = scanDir(downloadsDir);
console.log(`Total images found in Downloads: ${found.length}`);

// Sort by latest mtime
found.sort((a, b) => b.mtime - a.mtime);

// Show top 30
console.log('Top 30 latest images in Downloads:');
found.slice(0, 30).forEach((item, i) => {
  console.log(`${i + 1}. ${item.file} (${Math.round(item.size / 1024)} KB)`);
});
