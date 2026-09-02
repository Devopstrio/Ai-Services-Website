const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const freshDir = path.join(__dirname, 'src', 'assets', 'fresh');
const availableFresh = fs.readdirSync(freshDir).filter(f => !f.startsWith('.'));

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
let fixedCount = 0;

jsFiles.forEach(file => {
  let lines = fs.readFileSync(file, 'utf-8').split('\n');
  let changed = false;

  lines = lines.map(line => {
    const importMatch = line.match(/^import\s+([\w\d_]+)\s+from\s+["']([^"']+\.(jpg|jpeg|png|webp|avif))["']/);
    if (importMatch) {
      const varName = importMatch[1];
      const importPath = importMatch[2];
      const resolvedPath = path.resolve(path.dirname(file), importPath);

      if (!fs.existsSync(resolvedPath)) {
        // Pick a verified replacement
        const randomAsset = availableFresh[Math.floor(Math.random() * availableFresh.length)];
        const dirOfFile = path.dirname(file);
        const relativeToNew = path.relative(dirOfFile, path.join(freshDir, randomAsset)).replace(/\\/g, '/');
        const cleanRelative = relativeToNew.startsWith('.') ? relativeToNew : `./${relativeToNew}`;

        const newLine = `import ${varName} from "${cleanRelative}";`;
        console.log(`Fixing missing import in ${path.relative(srcDir, file)}: ${importPath} -> ${cleanRelative}`);
        changed = true;
        fixedCount++;
        return newLine;
      }
    }
    return line;
  });

  if (changed) {
    fs.writeFileSync(file, lines.join('\n'));
  }
});

console.log(`Total missing imports fixed: ${fixedCount}`);
