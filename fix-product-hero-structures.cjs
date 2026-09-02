const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'src', 'data', 'products');
const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.js') && f !== 'index.js');

files.forEach(file => {
  const filePath = path.join(productsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // If hero is missing as a nested object in the exported data
  const exportMatch = content.match(/export const (\w+) = (\{[\s\S]+\});\s*(\w+)\.hero\.bgImage/);
  if (exportMatch) {
    const varName = exportMatch[1];
    let dataObj;
    try {
      eval(`dataObj = ${exportMatch[2]}`);
    } catch(e) {
      console.log('Error parsing:', file, e.message);
      return;
    }

    if (!dataObj.hero) {
      dataObj.hero = {
        badge: dataObj.badge || "BUSINESS PLATFORM // AI",
        titleLight: dataObj.titleLight || "Accelerate with",
        titleBold: dataObj.titleBold || dataObj.name,
        description: dataObj.description || dataObj.tagline,
        liveBadge: dataObj.liveBadge || "v4.0 Enterprise Ready",
        bgImage: "heroBg"
      };
      delete dataObj.badge;
      delete dataObj.titleLight;
      delete dataObj.titleBold;
      delete dataObj.description;
      delete dataObj.liveBadge;
      delete dataObj.bgImage;

      // Reconstruct file content
      const topImports = content.split(/export const \w+/)[0];
      const newFileContent = `${topImports}export const ${varName} = ${JSON.stringify(dataObj, null, 2)};
${varName}.hero.bgImage = heroBg;
${varName}.features[0].image = feat1Img || heroBg;
${varName}.features[1].image = feat2Img || heroBg;
${varName}.features[2].image = feat3Img || heroBg;
${varName}.features[3].image = feat4Img || heroBg;
${varName}.caseStudy.image = caseImg || heroBg;
`;
      fs.writeFileSync(filePath, newFileContent);
      console.log(`Fixed hero in: ${file}`);
    }
  }
});

console.log('All product files fixed!');
