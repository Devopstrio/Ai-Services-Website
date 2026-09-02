const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'src', 'data', 'products');
const assetsFreshDir = path.join(__dirname, 'src', 'assets', 'fresh');
const assetsLibDir = path.join(__dirname, 'src', 'assets', 'library');

const availableFresh = fs.readdirSync(assetsFreshDir);
const availableLib = fs.readdirSync(assetsLibDir);

console.log('Available Fresh assets:', availableFresh.length);
console.log('Available Library assets:', availableLib.length);

const productFiles = fs.readdirSync(productsDir).filter(f => f.endsWith('.js') && f !== 'index.js');

productFiles.forEach(file => {
  const filePath = path.join(productsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find all imports from ../../assets/fresh/
  const importRegex = /import\s+(\w+)\s+from\s+["']\.\.\/\.\.\/assets\/fresh\/([^"']+)["']/g;
  let match;
  let changed = false;

  while ((match = importRegex.exec(content)) !== null) {
    const varName = match[1];
    const assetName = match[2];

    if (!fs.existsSync(path.join(assetsFreshDir, assetName))) {
      console.log(`Missing in fresh: ${assetName} in ${file}`);
      // Find fallback in library or pick an existing fresh one
      if (fs.existsSync(path.join(assetsLibDir, assetName))) {
        content = content.replace(`../../assets/fresh/${assetName}`, `../../assets/library/${assetName}`);
        changed = true;
        console.log(`-> Replaced with ../../assets/library/${assetName}`);
      } else {
        // Pick alternative from fresh
        const fallback = availableFresh[Math.floor(Math.random() * availableFresh.length)];
        content = content.replace(`../../assets/fresh/${assetName}`, `../../assets/fresh/${fallback}`);
        changed = true;
        console.log(`-> Replaced with ../../assets/fresh/${fallback}`);
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});

console.log('All product files validated!');
