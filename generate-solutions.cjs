const { writeFileSync } = require('fs');

const pool = [
  "1522071820081-009f0129c71c", "1600880292203-757bb62b4baf", "1573496359142-b8d87734a5a2",
  "1516321318423-f06f85e504b3", "1551836022-d5d88e9218df", "1531497865144-0464ef8fb9a9",
  "1586281380349-632531db7ed4", "1553877522-43269d4ea984", "1531973576160-7125cd663d86",
  "1556742049-0cfed4f6a45d", "1460925895917-afdab827c52f", "1517694712202-14dd9538aa97",
  "1451187580459-43490279c0fa", "1551288049-bebda4e38f71", "1526374965328-7f61d4dc18c5",
  "1518770660439-4636190af475", "1677442136019-21780ecad995", "1633412802994-5c058f151b66",
  "1558494949-ef010cbdcc31", "1563013544-824ae1b704d3", "1525547719571-a2d4ac8945e2",
  "1441986300917-64674bd600d8", "1684369175836-8208a0d4c988", "1618044733300-9472054094ee",
  "1507146153580-69a1fe6d8aa1", "1519389950473-47ba0277781c", "1620712943543-bcc4688e7485",
  "1550751827-4bd374c3f58b", "1488590528505-98d2b5aba04b", "1550745165-9bc0b252726f"
];

function getRandomImg() {
  return "https://images.unsplash.com/photo-" + pool[Math.floor(Math.random() * pool.length)] + "?q=80&w=1200&auto=format&fit=crop";
}

const solutions = [
  { id: "customer-support-ai", titleLight: "Customer Support", titleBold: "AI", tag1: "TICKET TRIAGE", tag2: "SENTIMENT ANALYSIS", tag3: "VIRTUAL AGENTS" },
  { id: "sales-intelligence", titleLight: "Sales", titleBold: "Intelligence", tag1: "LEAD SCORING", tag2: "FORECASTING", tag3: "DEAL COACHING" },
  { id: "marketing-ai", titleLight: "Marketing", titleBold: "AI", tag1: "PERSONALIZATION", tag2: "AD OPTIMIZATION", tag3: "CONTENT GENERATION" },
  { id: "finance-ai", titleLight: "Finance", titleBold: "AI", tag1: "FRAUD DETECTION", tag2: "AUTO RECONCILIATION", tag3: "RISK SCORING" },
  { id: "document-intelligence", titleLight: "Document", titleBold: "Intelligence", tag1: "OCR EXTRACTION", tag2: "CONTRACT ANALYSIS", tag3: "DATA ENTRY" },
  { id: "knowledge-management", titleLight: "Knowledge", titleBold: "Management", tag1: "ENTERPRISE SEARCH", tag2: "RAG PIPELINES", tag3: "WIKI AUTOMATION" },
  { id: "workflow-automation", titleLight: "Workflow", titleBold: "Automation", tag1: "BPA", tag2: "EXCEPTION HANDLING", tag3: "CROSS-SYSTEM ROUTING" },
  { id: "contact-center-ai", titleLight: "Contact Center", titleBold: "AI", tag1: "CALL TRANSCRIPTION", tag2: "AGENT ASSIST", tag3: "VOICE BOTS" },
  { id: "it-operations-ai", titleLight: "IT Operations", titleBold: "AI (AIOps)", tag1: "PREDICTIVE OUTAGES", tag2: "AUTO REMEDIATION", tag3: "ALERT REDUCTION" },
  { id: "devops-ai", titleLight: "DevOps", titleBold: "AI", tag1: "CODE REVIEW", tag2: "PIPELINE OPTIMIZATION", tag3: "INFRA AS CODE" },
  { id: "cybersecurity-ai", titleLight: "Cybersecurity", titleBold: "AI", tag1: "THREAT HUNTING", tag2: "ANOMALY DETECTION", tag3: "ZERO TRUST" },
  { id: "manufacturing-ai", titleLight: "Manufacturing", titleBold: "AI", tag1: "PREDICTIVE MAINTENANCE", tag2: "COMPUTER VISION QA", tag3: "SUPPLY CHAIN" },
  { id: "retail-ai", titleLight: "Retail", titleBold: "AI", tag1: "DYNAMIC PRICING", tag2: "INVENTORY FORECASTING", tag3: "VISUAL SEARCH" },
  { id: "healthcare-ai", titleLight: "Healthcare", titleBold: "AI", tag1: "MEDICAL IMAGING", tag2: "PATIENT TRIAGE", tag3: "EHR AUTOMATION" },
  { id: "banking-financial-services", titleLight: "Banking &", titleBold: "Financial Services", tag1: "ALGORITHMIC TRADING", tag2: "CREDIT DECISIONING", tag3: "AML COMPLIANCE" },
  { id: "legal-ai", titleLight: "Legal", titleBold: "AI", tag1: "CASE RESEARCH", tag2: "CLAUSE EXTRACTION", tag3: "E-DISCOVERY" },
  { id: "education-ai", titleLight: "Education", titleBold: "AI", tag1: "ADAPTIVE LEARNING", tag2: "AUTO GRADING", tag3: "STUDENT AT-RISK" },
  { id: "government-ai", titleLight: "Government", titleBold: "AI", tag1: "CITIZEN SERVICES", tag2: "POLICY ANALYSIS", tag3: "SMART CITIES" },
  { id: "custom-ai-solutions", titleLight: "Custom AI", titleBold: "Solutions", tag1: "PROPRIETARY LLMS", tag2: "MULTI-AGENT SYSTEMS", tag3: "EDGE DEPLOYMENTS" }
];

solutions.forEach(s => {
  const dataObj = {
    id: s.id,
    breadcrumbs: ["Enterprise Solutions", s.titleLight + " " + s.titleBold],
    hero: {
      titleLight: s.titleLight,
      titleBold: s.titleBold,
      description: "Transform your " + s.titleLight + " workflows with enterprise-grade Artificial Intelligence. Automate tedious tasks, predict outcomes, and empower your team to focus on strategic execution.",
      bgImage: getRandomImg()
    },
    metricsBanner: [
      { value: "40%", label: "Increase in Efficiency" },
      { value: "3x", label: "Faster Resolution" },
      { value: "24/7", label: "Continuous Operation" },
      { value: "99%", label: "Accuracy Rate" }
    ],
    overview: {
      heading: "Intelligent " + s.titleLight + " Transformation",
      paragraph: "Modern enterprises are moving beyond rigid rules-based software. Our " + s.titleLight + " " + s.titleBold + " solutions utilize state-of-the-art machine learning and generative models to understand context, make probabilistic decisions, and orchestrate complex workflows across your existing tech stack.",
      image: getRandomImg()
    },
    benefitsBento: [
      {
        title: "Predictive Intelligence",
        desc: "Anticipate issues and opportunities before they arise by analyzing historical patterns.",
        colSpan: 2,
        image: getRandomImg()
      },
      {
        title: "Workflow Automation",
        desc: "Eliminate manual data entry and repetitive approvals.",
        colSpan: 1,
        image: getRandomImg()
      },
      {
        title: "Actionable Insights",
        desc: "Turn massive data lakes into clear, strategic dashboards.",
        colSpan: 1,
        image: getRandomImg()
      },
      {
        title: "Secure & Compliant",
        desc: "Deployed within your secure VPC with strict RBAC and data governance controls.",
        colSpan: 2,
        image: getRandomImg()
      }
    ],
    featuresZigZag: [
      {
        title: "Core Functionality: " + s.tag1,
        text: "We implement advanced algorithms specifically trained on your proprietary data to automate " + s.tag1.toLowerCase() + ". This reduces overhead while drastically improving operational speed and reliability.",
        image: getRandomImg(),
        tag: s.tag1
      },
      {
        title: "Strategic Capability: " + s.tag2,
        text: "By leveraging large language models and predictive analytics, our systems can handle " + s.tag2.toLowerCase() + " autonomously. Employees are kept in the loop only for high-value exceptions and final approvals.",
        image: getRandomImg(),
        tag: s.tag2
      },
      {
        title: "Advanced Integration: " + s.tag3,
        text: "Our solutions don't live in a silo. We seamlessly integrate " + s.tag3.toLowerCase() + " directly into the enterprise applications your team already uses every day, ensuring maximum adoption.",
        image: getRandomImg(),
        tag: s.tag3
      }
    ],
    successStories: [
      {
        company: "Enterprise Leader",
        metric: "50% ROI",
        desc: "Realized within the first 6 months of deploying our autonomous " + s.titleLight + " systems.",
      },
      {
        company: "Global Corporation",
        metric: "10K+ Hours",
        desc: "Saved annually by automating repetitive analysis and data extraction.",
      },
      {
        company: "Industry Disruptor",
        metric: "Zero",
        desc: "Security breaches while maintaining full compliance with international regulations.",
      }
    ]
  };

  const fileContent = "const data = " + JSON.stringify(dataObj, null, 2) + ";\n\nexport default data;";
  writeFileSync("src/data/solutions/" + s.id + ".js", fileContent);
});

// Update index.js
let imports = "";
let exportsObj = "";

solutions.forEach(s => {
  const camel = s.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  imports += "import " + camel + " from './" + s.id + "';\n";
  exportsObj += '  "' + s.id + '": ' + camel + ',\n';
});

const indexContent = "import hrAi from './hr-ai';\n" + imports + "\nexport const ENTERPRISE_SOLUTIONS_DATA = {\n  \"hr-ai\": hrAi,\n" + exportsObj + "};\n";

writeFileSync('src/data/solutions/index.js', indexContent);
console.log('Generated 19 remaining solution files with random images!');
