const fs = require('fs');
const https = require('https');
const path = require('path');

const CARD_IMAGES = [
  // Strategy, Architecture, AI Platforms, Cloud, Security
  { name: 'strategy.jpg', id: '1454165804606-c3d57bc86b40' },
  { name: 'architecture.jpg', id: '1558494949-ef010cbdcc31' },
  { name: 'delivery.jpg', id: '1522071820081-009f0129c71c' },
  { name: 'governance.jpg', id: '1507679799987-c73779587ccf' },
  { name: 'partnerships.jpg', id: '1556761175-5973dc0f32e7' },
  { name: 'security.jpg', id: '1563986768609-322da13575f3' },

  // Challenges & Outcomes
  { name: 'challenge1.jpg', id: '1551836022-d5d88e9218df' },
  { name: 'challenge2.jpg', id: '1519389950473-47ba0277781c' },
  { name: 'challenge3.jpg', id: '1460925895917-afdab827c52f' },
  { name: 'outcome1.jpg', id: '1551288049-bebda4e38f71' },
  { name: 'outcome2.jpg', id: '1504868584819-f8e8b4b6d7e3' },
  { name: 'outcome3.jpg', id: '1531482615713-2afd69097998' },

  // Insights & Research
  { name: 'insight1.jpg', id: '1618005182384-a83a8bd57fbe' },
  { name: 'insight2.jpg', id: '1677442136019-21780ecad995' },
  { name: 'insight3.jpg', id: '1531297484001-80022131f5a1' },
  { name: 'insight4.jpg', id: '1488590528505-98d2b5aba04b' },
  { name: 'insight5.jpg', id: '1526374965328-7f61d4dc18c5' },
  { name: 'insight6.jpg', id: '1518770660439-4636190af475' },

  // Innovation & Lab
  { name: 'innovation1.jpg', id: '1581091226825-a6a2a5aee158' },
  { name: 'innovation2.jpg', id: '1485827404703-89b55fcc595e' },
  { name: 'innovation3.jpg', id: '1535378917042-10a22c95931a' },
  { name: 'lab-action.jpg', id: '1507413245164-6160d8298b31' },

  // Integration & Ecosystem
  { name: 'integration1.jpg', id: '1544197150-b99a580bb7a8' },
  { name: 'integration2.jpg', id: '1520869562399-e772f042f422' },
  { name: 'integration3.jpg', id: '1517245386807-bb43f82c33c4' },
  { name: 'integration-action.jpg', id: '1573164713988-8665fc963095' },

  // Products UI & Dashboards
  { name: 'product-hero.jpg', id: '1551288049-bebda4e38f71' },
  { name: 'ecosystem1.jpg', id: '1550751827-4bd374c3f58b' },
  { name: 'ecosystem2.jpg', id: '1550745165-9bc0b252726f' },
  { name: 'ecosystem3.jpg', id: '1526374965328-7f61d4dc18c5' }
];

const targetDir = path.join(__dirname, 'src', 'assets', 'cards');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log('Already exists:', dest);
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (redRes) => {
          redRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', () => resolve());
        return;
      }
      if (res.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', () => {
      fs.unlink(dest, () => {});
      resolve();
    });
  });
}

async function run() {
  console.log('Downloading card assets...');
  for (const item of CARD_IMAGES) {
    const url = `https://images.unsplash.com/photo-${item.id}?q=80&w=900&auto=format&fit=crop`;
    const dest = path.join(targetDir, item.name);
    await download(url, dest);
    console.log('Processed:', item.name);
  }
  console.log('All card images ready!');
}

run();
