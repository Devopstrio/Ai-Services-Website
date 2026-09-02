import heroBg from "../../assets/fresh/global_operations_center.jpg";
import fintechImg from "../../assets/fresh/fintech_algorithmic_trading.jpg";
import healthImg from "../../assets/fresh/clinical_ai_diagnostics.jpg";
import autoImg from "../../assets/fresh/automotive_autonomous_driving.jpg";
import telecomImg from "../../assets/fresh/telecom_5g_network_tower.jpg";
import caseImg from "../../assets/fresh/multinational_team_summit.jpg";

export const industryAgentsData = {
  id: "industry-agents",
  category: "Specialized",
  name: "Industry AI Agent Swarms",
  tagline: "Domain-Tuned Cognitive Swarms for Banking, Healthcare, Telecom & Manufacturing",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Vertical AI Intelligence with",
    titleBold: "DevOpsTRIO Industry Agents",
    description: "Pre-trained vertical agent swarms equipped with deep regulatory, compliance, and operational ontologies for clinical healthcare diagnostics, algorithmic banking, 5G telecom network orchestration, and predictive industrial manufacturing.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 84,
      latency: "190ms",
      connectedTools: 40,
      autonomyScore: "99.9%"
    }
  },
  metrics: [
    { value: "4 Vertical", label: "Specialized Swarms", sub: "Banking, Health, Telecom & Industrial" },
    { value: "100%", label: "Regulatory Compliance", sub: "HIPAA, Basel III, 3GPP & ISO 9001" },
    { value: "< 1s", label: "Domain Decision Speed", sub: "Sub-second mission-critical execution" },
    { value: "70%", label: "Industry Ops Cost Cut", sub: "Automated specialized workflows" }
  ],
  overview: {
    heading: "The Domain-Specialized Cognitive Workforce for Regulated Industries",
    description: "Generic AI models fail in regulated sectors because they lack deep industry vocabulary, compliance guardrails, and deterministic protocol interfaces.\n\nDevOpsTRIO Industry Agents are purpose-built vertical swarms pre-trained on domain ontologies. Whether calculating capital adequacy ratios for tier-1 banks, triaging clinical lab results under HIPAA, managing 5G slice QoS for telecom carriers, or predicting factory equipment maintenance, our industry agents deliver specialized precision out of the box.",
    keyPoints: [
      "Financial Services Swarms: Automated AML/KYC screening, algorithmic fraud detection & trade reconciliation",
      "Healthcare & Life Sciences Swarms: HIPAA-compliant clinical record synthesis & diagnostic triage",
      "Telecommunications Swarms: Autonomous 5G network slice optimization & subscriber QoS routing",
      "Manufacturing & Energy Swarms: IoT telemetry anomaly detection & predictive maintenance dispatch"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Domain Perception",
      role: "Vertical Telemetry Ingestor",
      description: "Ingests HL7/FHIR medical feeds, SWIFT/FIX financial transactions, 3GPP telecom metrics, and SCADA industrial IoT streams.",
      tech: "Domain Protocol Decoders (FIX, FHIR, Modbus, OPC-UA)"
    },
    {
      tier: "02",
      name: "Regulatory & Logic Kernel",
      role: "Compliance & Industry Reasoning",
      description: "Evaluates industry regulations (FDA, SEC, FCC, OSHA), checks risk boundaries, and simulates domain outcomes.",
      tech: "Ontological Graph Embeddings & Constrained Decision Trees"
    },
    {
      tier: "03",
      name: "Mission-Critical Mesh",
      role: "Industrial Action Gateway",
      description: "Executes verified transactions across Bloomberg, Epic EHR, Ericsson OSS, and Siemens PLM with cryptographic proof.",
      tech: "Air-Gapped Industrial Enclaves & Certified API Gateways"
    }
  ],
  capabilities: [
    {
      id: "banking-swarm",
      tag: "FINANCIAL SERVICES",
      title: "Banking & Capital Markets Swarm",
      description: "Executes real-time AML transaction screening, trade order matching, regulatory capital reporting (Basel III), and fraud defense.",
      features: [
        "Real-time SWIFT and Fedwire transaction anomaly scoring in < 50ms",
        "Automated Suspicious Activity Report (SAR) dossier generation for compliance officers",
        "Trade settlement reconciliation across DTCC and Euroclear clearing houses",
        "100% compliance with SEC, FINRA, and FCA regulatory requirements"
      ],
      image: fintechImg,
      metricBadge: "Sub-50ms AML Score"
    },
    {
      id: "health-swarm",
      tag: "HEALTHCARE & LIFE SCIENCES",
      title: "Clinical Healthcare & Diagnostics Swarm",
      description: "Synthesizes electronic health records (EHR), triages lab diagnostics, extracts clinical trial data, and enforces HIPAA privacy.",
      features: [
        "Bi-directional FHIR / HL7 integration with Epic, Cerner, and Allscripts",
        "Clinical note transcription and ICD-10 / CPT billing code generation",
        "Automated drug interaction screening and patient care plan summarization",
        "HIPAA and FDA Part 11 certified with zero PHI data retention"
      ],
      image: healthImg,
      metricBadge: "HIPAA & FHIR Certified"
    },
    {
      id: "telecom-swarm",
      tag: "TELECOMMUNICATIONS",
      title: "5G & Telecom Network Swarm",
      description: "Continuously optimizes 5G radio access network (RAN) parameters, allocates network slices for ultra-low latency, and fixes QoS drops.",
      features: [
        "Autonomous cell tower antenna tilt and power optimization for traffic surges",
        "Dynamic network slicing QoS allocation for autonomous driving and emergency services",
        "Sub-second fiber outage rerouting across global carrier backbones",
        "Cuts customer telecom network churn by up to 34%"
      ],
      image: telecomImg,
      metricBadge: "Autonomous 5G RAN"
    },
    {
      id: "manufacturing-swarm",
      tag: "MANUFACTURING & IOT",
      title: "Industrial Manufacturing & Predictive IoT",
      description: "Monitors factory floor IoT sensors, predicts bearing and motor failures before breakdowns occur, and dispatches maintenance crews.",
      features: [
        "Ingests millions of vibration, temperature, and pressure sensor readings per second",
        "Predicts machinery mechanical failure 14 days before catastrophic breakdown",
        "Automated spare part requisition and maintenance work order generation in SAP",
        "Reduces unplanned factory downtime by up to 72%"
      ],
      image: autoImg,
      metricBadge: "72% Less Downtime"
    }
  ],
  comparison: [
    { metric: "Domain Vocabulary", legacy: "Generic AI hallucinates specialized terms", agent: "Deeply pre-trained on vertical industry ontologies" },
    { metric: "Regulatory Compliance", legacy: "Non-compliant with industry standards", agent: "100% HIPAA, Basel III, FDA, and 3GPP certified" },
    { metric: "Protocol Compatibility", legacy: "Only supports generic JSON APIs", agent: "Native support for FIX, FHIR, DICOM, OPC-UA" },
    { metric: "Mission-Critical Latency", legacy: "3 to 10 seconds (Unreliable for industrial ops)", agent: "Sub-second deterministic response (< 1s)" },
    { metric: "Audit Proof", legacy: "Scattered unverified logs", agent: "Cryptographically sealed regulatory audit trails" }
  ],
  interactiveDemo: {
    title: "Industry Swarms Studio",
    subtitle: "Select a vertical domain to observe specialized agent swarms execute mission-critical regulatory, clinical, and industrial actions in real time.",
    scenarios: [
      {
        id: "aml-banking",
        title: "Real-Time AML Money Laundering Intercept",
        role: "Transaction: $1.8M Structured Wire across 4 Offshore Accounts",
        executionTime: "1.2s",
        humanTime: "3 Days",
        status: "Wire Frozen & SAR Dossier Filed",
        agentsInvolved: ["SWIFT Telemetry Ingestor", "Graph Laundering Detector", "Regulatory Filing Gate"],
        planSteps: [
          { step: "Ingested incoming $1.8M wire batch across 4 shell entities in Panama and Cyprus", time: "0.2s" },
          { step: "Graph Neural Network traced ultimate beneficial owner (UBO) to sanctioned entity", time: "0.4s" },
          { step: "Executed transaction freeze on core banking ledger within 200ms", time: "0.3s" },
          { step: "Generated automated FinCEN Suspicious Activity Report (SAR) with complete evidence", time: "0.3s" }
        ],
        outcome: "Sanctioned money laundering transaction blocked in 1.2s with full regulatory dossier."
      },
      {
        id: "clinical-triage",
        title: "Emergency Clinical Lab Triage",
        role: "Patient: ICU Critical Lab Results (Elevated Troponin & Potassium)",
        executionTime: "0.9s",
        humanTime: "45 Mins",
        status: "Physician Paged with Clinical Brief",
        agentsInvolved: ["HL7 Lab Stream Listener", "Cardiology Risk Modeler", "Epic EHR Gateway"],
        planSteps: [
          { step: "Ingested HL7 lab feed: Troponin I level at 4.8 ng/mL (Severe Cardiac Distress)", time: "0.2s" },
          { step: "Queried Epic EHR: Found patient history of prior coronary artery disease", time: "0.3s" },
          { step: "Generated emergency clinical alert card with recommended cardiac protocol", time: "0.2s" },
          { step: "Paged on-duty Attending Cardiologist with critical lab breakdown", time: "0.2s" }
        ],
        outcome: "Physician alerted in 0.9s. Patient received emergency cardiac intervention."
      },
      {
        id: "iot-factory",
        title: "Turbine Bearing Failure Prediction",
        role: "Factory Floor: CNC Milling Machine #CNC-DALLAS-08",
        executionTime: "1.8s",
        humanTime: "14 Days (Post-Crash)",
        status: "Maintenance Work Order Dispatched",
        agentsInvolved: ["Vibration Sensor Prober", "Predictive Physics Model", "SAP PM Mesh"],
        planSteps: [
          { step: "Analyzed 10kHz vibration sensor stream: Detected 142Hz harmonic frequency spike", time: "0.4s" },
          { step: "Predictive physics model calculated bearing cage micro-fracture (98.4% probability)", time: "0.5s" },
          { step: "Generated SAP Maintenance Work Order and reserved replacement bearing in stockroom", time: "0.5s" },
          { step: "Scheduled maintenance during planned shift changeover to prevent production halt", time: "0.4s" }
        ],
        outcome: "Bearing failure averted. Prevented estimated $180,000 factory line shutdown."
      }
    ]
  },
  integrations: [
    { name: "Bloomberg & SWIFT", type: "Financial Protocol Mesh" },
    { name: "Epic & Cerner EHR", type: "Healthcare FHIR/HL7" },
    { name: "Ericsson & Nokia OSS", type: "5G RAN Network Core" },
    { name: "Siemens & Rockwell PLM", type: "Industrial SCADA / OPC-UA" },
    { name: "SAP Plant Maintenance", type: "Enterprise Asset Management" },
    { name: "AWS IoT & Azure IoT Hub", type: "Telemetry Streaming" }
  ],
  governance: [
    { label: "HIPAA & HITECH Certified", desc: "Air-gapped clinical processing with zero PHI retention" },
    { label: "Basel III & FINRA Compliant", desc: "Immutable financial decision records and audit logs" },
    { label: "FDA 21 CFR Part 11", desc: "Electronic signature and regulatory audit verification" },
    { label: "ISO 9001 & OSHA Aligned", desc: "Strict industrial safety and equipment maintenance guardrails" }
  ],
  caseStudy: {
    client: "Tier-1 Global Investment Bank & Healthcare Conglomerate",
    industry: "Multi-Industry Enterprise",
    headline: "How Global Enterprise Leaders in Banking, Healthcare, and Telecom Deployed Domain-Specialized AI Swarms with Zero Compliance Slips",
    quote: "DevOpsTRIO Industry Agents understand our domain language on day one. They bridge the gap between complex regulatory mandates and automated high-velocity execution.",
    author: "Chief Technology & Innovation Officer",
    company: "Fortune 50 Enterprise Conglomerate",
    image: caseImg,
    results: [
      { stat: "100%", label: "Regulatory compliance rate" },
      { stat: "< 1s", label: "Mission-critical decision speed" },
      { stat: "$12.4M", label: "Annual operational value unlocked" }
    ]
  }
};
