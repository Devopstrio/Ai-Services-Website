const fs = require('fs');
const https = require('https');
const path = require('path');

const FRESH_IMAGES = [
  // 1. Futuristic Cyber & Dark AI Interfaces
  { name: 'dark_ai_neural_grid.jpg', id: '1618005182384-a83a8bd57fbe' },
  { name: 'cyber_digital_matrix.jpg', id: '1526374965328-7f61d4dc18c5' },
  { name: 'holographic_data_globe.jpg', id: '1508739773434-c26b3d09e071' },
  { name: 'ai_circuit_mesh.jpg', id: '1518770660439-4636190af475' },
  { name: 'quantum_laser_optics.jpg', id: '1507413245164-6160d8298b31' },
  { name: 'deep_learning_tensor.jpg', id: '1677442136019-21780ecad995' },
  { name: 'neural_connections_nodes.jpg', id: '1620712943543-bcc4688e7485' },
  { name: 'cyber_threat_map.jpg', id: '1563986768609-322da13575f3' },
  { name: 'binary_code_tunnel.jpg', id: '1550751827-4bd374c3f58b' },
  { name: 'high_speed_fiber.jpg', id: '1544197150-b99a580bb7a8' },

  // 2. High-Tech Enterprise Office, Teams & Strategy
  { name: 'executive_boardroom_ai.jpg', id: '1577495508048-b635879837f1' },
  { name: 'tech_architect_whiteboard.jpg', id: '1531403009284-440f080d1e12' },
  { name: 'enterprise_scrum_sprint.jpg', id: '1522071820081-009f0129c71c' },
  { name: 'global_operations_center.jpg', id: '1504384308090-c894fdcc538d' },
  { name: 'product_design_review.jpg', id: '1581291518857-4e27b48ff24e' },
  { name: 'ai_consultants_discussion.jpg', id: '1556761175-5973dc0f32e7' },
  { name: 'multinational_team_summit.jpg', id: '1515187029135-18ee286d815b' },
  { name: 'engineering_standup_meeting.jpg', id: '1522202176988-66273c2fd55f' },
  { name: 'lead_developer_mentor.jpg', id: '1573496359142-b8d87734a5a2' },
  { name: 'enterprise_innovation_hub.jpg', id: '1497366216548-37526070297c' },

  // 3. Products & Platforms (SaaS, Signatures, HR, Copilots)
  { name: 'saas_cloud_platform_ui.jpg', id: '1551288049-bebda4e38f71' },
  { name: 'digital_contract_tablet.jpg', id: '1450133064473-71024230f97b' },
  { name: 'devops_cloud_console.jpg', id: '1618401471353-b98afee0b2eb' },
  { name: 'talent_intelligence_portal.jpg', id: '1573497019940-1c28c88b4f3e' },
  { name: 'crm_revenue_forecasting.jpg', id: '1460925895917-afdab827c52f' },
  { name: 'neural_search_engine.jpg', id: '1507842229440-9a3b98453412' },
  { name: 'automated_invoice_processing.jpg', id: '1554224155-8d04cb21cd6c' },
  { name: 'multimodal_ai_workbench.jpg', id: '1517694712202-14dd9538aa97' },
  { name: 'support_ticket_automation.jpg', id: '1486312338219-ce68d2c6f44d' },
  { name: 'smart_inbox_triage.jpg', id: '1596526131083-e8c633c948d2' },

  // 4. Autonomous Agents in Action
  { name: 'agent_swarm_orchestration.jpg', id: '1551836022-d5d88e9218df' },
  { name: 'agent_code_refactoring.jpg', id: '1555066931-4365d14bab8c' },
  { name: 'agent_automated_qa_pipeline.jpg', id: '1504639725590-34d0984388bd' },
  { name: 'agent_database_optimizer.jpg', id: '1544197150-b99a580bb7a8' },
  { name: 'agent_knowledge_graph_synthesis.jpg', id: '1509228468518-180dd4864904' },
  { name: 'agent_deep_market_research.jpg', id: '1532094349884-543bc11b234d' },
  { name: 'agent_meeting_intelligence.jpg', id: '1517048676732-d65bc937f952' },
  { name: 'agent_procurement_negotiation.jpg', id: '1454165804606-c3d57bc86b40' },
  { name: 'agent_compliance_auditing.jpg', id: '1589829545856-d10d557cf95f' },
  { name: 'agent_secops_incident_responder.jpg', id: '1563986768609-322da13575f3' },

  // 5. Cloud Infrastructure, Datacenters & Edge Hardware
  { name: 'server_rack_neon_glow.jpg', id: '1558494949-ef010cbdcc31' },
  { name: 'cloud_data_center_hall.jpg', id: '1544197150-b99a580bb7a8' },
  { name: 'microchip_wafer_lithography.jpg', id: '1518770660439-4636190af475' },
  { name: 'kubernetes_cluster_nodes.jpg', id: '1520869562399-e772f042f422' },
  { name: 'edge_computing_satellite.jpg', id: '1451187580459-43490279c0fa' },
  { name: 'hardware_security_module.jpg', id: '1563986768609-322da13575f3' },
  { name: 'quantum_cryo_computing.jpg', id: '1532187863486-abf9dbad1b69' },
  { name: 'automated_logistics_hub.jpg', id: '1586528116311-ad8dd3c8310d' },
  { name: 'robotic_assembly_precision.jpg', id: '1485827404703-89b55fcc595e' },
  { name: 'augmented_reality_simulation.jpg', id: '1592478411213-6153e4ebc07d' },

  // 6. FinTech, Healthcare, Supply Chain & Industry AI
  { name: 'fintech_algorithmic_trading.jpg', id: '1611974789855-9c2a0a7236a3' },
  { name: 'clinical_ai_diagnostics.jpg', id: '1576091160399-112ba8d25d1d' },
  { name: 'telecom_5g_network_tower.jpg', id: '1519389950473-47ba0277781c' },
  { name: 'energy_smart_grid_monitoring.jpg', id: '1473341304170-971dccb5ac1e' },
  { name: 'automotive_autonomous_driving.jpg', id: '1549399542-7e3f8b79c341' },
  { name: 'retail_computer_vision_checkout.jpg', id: '1556742049-0a67e5574f73' },
  { name: 'aerospace_telemetry_control.jpg', id: '1517976487507-5b3b4b45f6ed' },
  { name: 'manufacturing_predictive_maintenance.jpg', id: '1581091226825-a6a2a5aee158' },
  { name: 'smart_city_traffic_ai.jpg', id: '1477959858617-67f30bc75b82' },
  { name: 'global_shipping_container_port.jpg', id: '1578575437130-527eed3abbec' }
];

const downloadsDir = 'C:\\Users\\mani\\Downloads\\fresh_tech_assets';
const projectDir = path.join(__dirname, 'src', 'assets', 'fresh');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 2000) {
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
  console.log(`Starting download of ${FRESH_IMAGES.length} fresh tech photos...`);
  let successCount = 0;
  for (let i = 0; i < FRESH_IMAGES.length; i++) {
    const item = FRESH_IMAGES[i];
    const url = `https://images.unsplash.com/photo-${item.id}?q=85&w=1200&auto=format&fit=crop`;
    const destDown = path.join(downloadsDir, item.name);
    const destProj = path.join(projectDir, item.name);
    
    await download(url, destDown);
    try {
      if (fs.existsSync(destDown) && fs.statSync(destDown).size > 1000) {
        fs.copyFileSync(destDown, destProj);
        successCount++;
      }
    } catch (e) {
      console.log('Skipped file sync:', item.name);
    }
    console.log(`[${i + 1}/${FRESH_IMAGES.length}] Processed: ${item.name}`);
  }
  console.log(`SUCCESS: ${successCount} fresh images saved into Downloads/fresh_tech_assets/ and src/assets/fresh/`);
}

run();
