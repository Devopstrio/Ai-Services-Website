const fs = require('fs');
const path = require('path');

const freshDir = path.join(__dirname, 'src', 'assets', 'fresh');
const files = fs.readdirSync(freshDir);

console.log(`Total files in fresh: ${files.length}`);

// Patterns of files to exclude (personal, screenshots, memes, random portraits, generic banners)
const excludePatterns = [
  /^chatgpt_image/i,
  /^gemini_generated/i,
  /screenshot/i,
  /screen_shot/i,
  /capture/i,
  /whatsapp/i,
  /portrait-young-bearded/i,
  /woman-cafe/i,
  /street-city-bangkok/i,
  /tokyo-people/i,
  /meeting_banner/i,
  /intern_linkedin/i,
  /logo_\d/i,
  /\.user_uploaded/i,
  /media_\d+/i,
  /^\d{13}\./, // timestamp names like 1695392027480.jpg
  /^37655/,
  /full-shot-people-learning/i,
  /confident-handsome/i
];

const toRemove = [];
files.forEach(f => {
  if (excludePatterns.some(p => p.test(f))) {
    toRemove.push(f);
  }
});

console.log(`Identified ${toRemove.length} non-enterprise/screenshot files to remove:`, toRemove);

toRemove.forEach(f => {
  const p = path.join(freshDir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }
});

console.log(`Cleaned fresh assets folder! Remaining verified enterprise assets: ${fs.readdirSync(freshDir).length}`);
