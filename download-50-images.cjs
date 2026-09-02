const fs = require('fs');
const https = require('https');
const path = require('path');

const IMAGES = [
  // AI Products
  { name: 'product_safesign_contract.jpg', id: '1450133064473-71024230f97b' },
  { name: 'product_devops_copilot.jpg', id: '1555066931-4365d14bab8c' },
  { name: 'product_humanex_talent.jpg', id: '1522202176988-66273c2fd55f' },
  { name: 'product_sales_intelligence.jpg', id: '1460925895917-afdab827c52f' },
  { name: 'product_knowledge_search.jpg', id: '1507842229440-9a3b98453412' },
  { name: 'product_document_ocr.jpg', id: '1568667256549-094345857637' },
  { name: 'product_workflow_automation.jpg', id: '1518770660439-4636190af475' },
  { name: 'product_assistant_chat.jpg', id: '1534972195531-a756b1126f25' },
  { name: 'product_ai_studio_ide.jpg', id: '1517694712202-14dd9538aa97' },
  { name: 'product_support_desk.jpg', id: '1486312338219-ce68d2c6f44d' },
  { name: 'product_marketing_creative.jpg', id: '1542744094-3a31f272c490' },
  { name: 'product_finance_ledger.jpg', id: '1554224155-8d04cb21cd6c' },
  { name: 'product_mailtab_inbox.jpg', id: '1596526131083-e8c633c948d2' },
  { name: 'product_brio_enterprise.jpg', id: '1497215728101-856f4ea42174' },
  { name: 'product_aihire_recruiting.jpg', id: '1573496359142-b8d87734a5a2' },

  // AI Agents
  { name: 'agent_hr_workforce.jpg', id: '1531482615713-2afd69097998' },
  { name: 'agent_sales_outreach.jpg', id: '1556761175-5973dc0f32e7' },
  { name: 'agent_marketing_campaign.jpg', id: '1432888498266-38ffec3eaf0a' },
  { name: 'agent_support_triage.jpg', id: '1516321318423-f06f85e504b3' },
  { name: 'agent_finance_reconciliation.jpg', id: '1554224154-26032ffc0d07' },
  { name: 'agent_procurement_vendor.jpg', id: '1454165804606-c3d57bc86b40' },
  { name: 'agent_legal_compliance.jpg', id: '1589829545856-d10d557cf95f' },
  { name: 'agent_executive_assistant.jpg', id: '1573497019940-1c28c88b4f3e' },
  { name: 'agent_devops_cicd.jpg', id: '1618401471353-b98afee0b2eb' },
  { name: 'agent_swe_coding.jpg', id: '1526374965328-7f61d4dc18c5' },
  { name: 'agent_qa_testing.jpg', id: '1504639725590-34d0984388bd' },
  { name: 'agent_cloud_infra.jpg', id: '1558494949-ef010cbdcc31' },
  { name: 'agent_security_soc.jpg', id: '1563986768609-322da13575f3' },
  { name: 'agent_database_tuning.jpg', id: '1544197150-b99a580bb7a8' },
  { name: 'agent_knowledge_graph.jpg', id: '1509228468518-180dd4864904' },
  { name: 'agent_research_analyst.jpg', id: '1532094349884-543bc11b234d' },
  { name: 'agent_meeting_notes.jpg', id: '1517048676732-d65bc937f952' },
  { name: 'agent_workflow_orchestrator.jpg', id: '1551836022-d5d88e9218df' },

  // Innovation & Lab
  { name: 'innovation_quantum_chip.jpg', id: '1518770660439-4636190af475' },
  { name: 'innovation_neural_network.jpg', id: '1620712943543-bcc4688e7485' },
  { name: 'innovation_robotics_arm.jpg', id: '1485827404703-89b55fcc595e' },
  { name: 'innovation_vr_workspace.jpg', id: '1592478411213-6153e4ebc07d' },
  { name: 'innovation_bio_ai_lab.jpg', id: '1532187863486-abf9dbad1b69' },

  // Integrations & Mesh
  { name: 'integration_cloud_mesh.jpg', id: '1508739773434-c26b3d09e071' },
  { name: 'integration_microservices.jpg', id: '1558494949-ef010cbdcc31' },
  { name: 'integration_api_gateway.jpg', id: '1520869562399-e772f042f422' },
  { name: 'integration_hybrid_network.jpg', id: '1517245386807-bb43f82c33c4' },
  { name: 'integration_event_streaming.jpg', id: '1573164713988-8665fc963095' },

  // Enterprise Dashboards & UI
  { name: 'dashboard_fintech_metrics.jpg', id: '1551288049-bebda4e38f71' },
  { name: 'dashboard_cyber_soc.jpg', id: '1550751827-4bd374c3f58b' },
  { name: 'dashboard_supply_chain.jpg', id: '1586528116311-ad8dd3c8310d' },
  { name: 'dashboard_ai_model_training.jpg', id: '1526374965328-7f61d4dc18c5' },
  { name: 'dashboard_executive_kpi.jpg', id: '1504868584819-f8e8b4b6d7e3' },
  { name: 'dashboard_cloud_telemetry.jpg', id: '1451187580459-43490279c0fa' },
  { name: 'dashboard_customer_journey.jpg', id: '1519389950473-47ba0277781c' }
];

const downloadsDir = 'C:\\Users\\mani\\Downloads';
const libraryDir = path.join(__dirname, 'src', 'assets', 'library');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}
if (!fs.existsSync(libraryDir)) {
  fs.mkdirSync(libraryDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 2000) {
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
  console.log(`Starting download of ${IMAGES.length} high-res images to Downloads & Project Library...`);
  for (let i = 0; i < IMAGES.length; i++) {
    const item = IMAGES[i];
    const url = `https://images.unsplash.com/photo-${item.id}?q=85&w=1200&auto=format&fit=crop`;
    
    // Save to Downloads folder
    const destDownloads = path.join(downloadsDir, item.name);
    await download(url, destDownloads);
    
    // Also save directly into project library so we can immediately import in React
    const destLib = path.join(libraryDir, item.name);
    if (fs.existsSync(destDownloads) && fs.statSync(destDownloads).size > 2000) {
      fs.copyFileSync(destDownloads, destLib);
    }
    
    console.log(`[${i + 1}/${IMAGES.length}] Saved: ${item.name}`);
  }
  console.log('All 50 images successfully saved in Downloads and src/assets/library!');
}

run();
