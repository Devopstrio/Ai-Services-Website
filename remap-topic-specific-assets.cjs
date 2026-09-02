const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const freshDir = path.join(__dirname, 'src', 'assets', 'fresh');
const availableFresh = fs.readdirSync(freshDir).filter(f => !f.startsWith('.'));

console.log(`Verified enterprise tech image pool: ${availableFresh.length}`);

// Categorized asset pools for smart matching
const THEMED_POOLS = {
  security: availableFresh.filter(f => /cyber|shield|firewall|threat|matrix|security|guard/i.test(f)),
  devops: availableFresh.filter(f => /devops|cloud|server|kubernetes|binary|console|datacenter|cluster|code/i.test(f)),
  ai: availableFresh.filter(f => /neural|deep|tensor|holographic|multimodal|wafer|lithography|data_globe/i.test(f)),
  finance: availableFresh.filter(f => /fintech|finance|trading|invoice|revenue|crm|growth|sales/i.test(f)),
  healthcare: availableFresh.filter(f => /clinical|diagnostics|bio|analyst|tablet|health/i.test(f)),
  enterprise: availableFresh.filter(f => /executive|boardroom|discussion|summit|business|office|mentor|team/i.test(f)),
  logistics: availableFresh.filter(f => /shipping|port|logistics|robotic|precision|supply/i.test(f)),
  support: availableFresh.filter(f => /support|ticket|inbox|desk|triage/i.test(f)),
  quantum: availableFresh.filter(f => /quantum|cryo|laser|optics|lab/i.test(f)),
  network: availableFresh.filter(f => /telecom|network|tower|gateway|mesh|streaming|integration/i.test(f))
};

function getBestAsset(topic, usedSet) {
  let pool = THEMED_POOLS[topic] || availableFresh;
  let candidates = pool.filter(f => !usedSet.has(f));
  if (candidates.length === 0) {
    candidates = availableFresh.filter(f => !usedSet.has(f));
  }
  if (candidates.length === 0) {
    // If all used, pick from pool
    return pool[Math.floor(Math.random() * pool.length)];
  }
  const picked = candidates[0];
  usedSet.add(picked);
  return picked;
}

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
const usedAssets = new Set();

let fixedImports = 0;

jsFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  const importRegex = /import\s+([\w\d_]+)\s+from\s+["']([^"']+\.(jpg|jpeg|png|webp|avif))["']/g;
  let match;
  let modified = false;

  // Determine file topic
  const fileName = path.basename(file).toLowerCase();
  let topic = 'enterprise';
  if (/security|firewall|threat/i.test(fileName)) topic = 'security';
  else if (/devops|cloud|infra|sre/i.test(fileName)) topic = 'devops';
  else if (/finance|fintech|banking/i.test(fileName)) topic = 'finance';
  else if (/health|pharma|bio/i.test(fileName)) topic = 'healthcare';
  else if (/support|customer|contact/i.test(fileName)) topic = 'support';
  else if (/logistics|supply|manufacturing/i.test(fileName)) topic = 'logistics';
  else if (/quantum|future|innovation/i.test(fileName)) topic = 'quantum';
  else if (/network|integration|telecom/i.test(fileName)) topic = 'network';
  else if (/ai|model|studio|ml/i.test(fileName)) topic = 'ai';

  while ((match = importRegex.exec(content)) !== null) {
    const varName = match[1];
    const importPath = match[2];
    const assetBaseName = path.basename(importPath);

    const fullAssetPath = path.resolve(path.dirname(file), importPath);
    const exists = fs.existsSync(fullAssetPath);

    // If missing or duplicate or not in fresh assets
    if (!exists || !availableFresh.includes(assetBaseName) || usedAssets.has(assetBaseName)) {
      const best = getBestAsset(topic, usedAssets);
      const dirOfFile = path.dirname(file);
      const relativeToNew = path.relative(dirOfFile, path.join(freshDir, best)).replace(/\\/g, '/');
      const cleanRelative = relativeToNew.startsWith('.') ? relativeToNew : `./${relativeToNew}`;

      content = content.replace(importPath, cleanRelative);
      modified = true;
      fixedImports++;
    } else {
      usedAssets.add(assetBaseName);
    }
  }

  if (modified) {
    fs.writeFileSync(file, content);
  }
});

console.log(`Audited all files! Remapped ${fixedImports} image imports to verified topic-specific enterprise stock photos.`);
