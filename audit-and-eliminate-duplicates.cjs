const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const freshAssetsDir = path.join(__dirname, 'src', 'assets', 'fresh');
const freshFiles = fs.readdirSync(freshAssetsDir).filter(f => !f.startsWith('.'));

console.log(`Available fresh assets pool: ${freshFiles.length}`);

// We will track all used assets
const usageMap = new Map(); // asset -> Array of { file, importStatement }
let unallocatedAssets = [...freshFiles];

function getAllJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(getAllJsFiles(fullPath));
      }
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const jsFiles = getAllJsFiles(srcDir);
console.log(`Scanning ${jsFiles.length} source files for image usages...`);

// Regex to find imports from assets
const importRegex = /import\s+([\w\d_]+)\s+from\s+["']([^"']+\.(jpg|jpeg|png|webp|avif))["']/g;

const allUsages = [];

jsFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const varName = match[1];
    const importPath = match[2];
    const assetBaseName = path.basename(importPath);

    allUsages.push({
      file,
      varName,
      importPath,
      assetBaseName,
      fullStatement: match[0]
    });

    if (!usageMap.has(assetBaseName)) {
      usageMap.set(assetBaseName, []);
    }
    usageMap.get(assetBaseName).push({ file, varName, importPath });

    // Remove already used from unallocated if present
    const idx = unallocatedAssets.indexOf(assetBaseName);
    if (idx !== -1) {
      unallocatedAssets.splice(idx, 1);
    }
  }
});

console.log(`Total image import statements across app: ${allUsages.length}`);
console.log(`Unique images currently in use: ${usageMap.size}`);
console.log(`Remaining unused fresh images available: ${unallocatedAssets.length}`);

let duplicateCount = 0;
usageMap.forEach((occurrences, asset) => {
  if (occurrences.length > 1) {
    duplicateCount += (occurrences.length - 1);
    console.log(`Duplicate: "${asset}" used in ${occurrences.length} files:`);
    occurrences.forEach(o => console.log(`   - ${path.relative(srcDir, o.file)}`));
  }
});

console.log(`Total duplicate instances: ${duplicateCount}`);

// Now replace duplicates (keep the first occurrence, replace 2nd, 3rd, etc. with fresh unused ones)
let replacedCount = 0;

usageMap.forEach((occurrences, asset) => {
  if (occurrences.length > 1) {
    // Keep occurrences[0], replace occurrences[1..n]
    for (let i = 1; i < occurrences.length; i++) {
      if (unallocatedAssets.length === 0) break;
      const newAsset = unallocatedAssets.shift();
      const targetOccur = occurrences[i];

      let content = fs.readFileSync(targetOccur.file, 'utf-8');
      // Replace import
      const dirOfFile = path.dirname(targetOccur.file);
      const relativeToNew = path.relative(dirOfFile, path.join(freshAssetsDir, newAsset)).replace(/\\/g, '/');
      const cleanRelative = relativeToNew.startsWith('.') ? relativeToNew : `./${relativeToNew}`;

      content = content.replace(targetOccur.importPath, cleanRelative);
      fs.writeFileSync(targetOccur.file, content);
      console.log(`Replaced duplicate "${asset}" in ${path.relative(srcDir, targetOccur.file)} with "${newAsset}"`);
      replacedCount++;
    }
  }
});

console.log(`Successfully replaced ${replacedCount} duplicate image instances with brand-new fresh assets!`);
