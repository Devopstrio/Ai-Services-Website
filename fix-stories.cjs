const { writeFileSync } = require('fs');

const NEW_IMG_POOL = [
  "1504384308090-c894fdcc538d", "1498050108023-c5249f4df085", "1551434678-e076c223a692", "1486406146926-c627a92ad1ab",
  "1557804506-664524d564bb", "1542744094-24638dd581cb", "1573164713988-8665fc963095", "1522071820081-009f0129c71c",
  "1600880292203-757bb62b4baf", "1573496359142-b8d87734a5a2", "1516321318423-f06f85e504b3", "1551836022-d5d88e9218df",
  "1531497865144-0464ef8fb9a9", "1586281380349-632531db7ed4", "1553877522-43269d4ea984", "1531973576160-7125cd663d86",
  "1454165804606-c3d57bc86b40", "1519389950473-47ba0277781c", "1568992687947-8270c6beef0c", "1551288049-bebda4e38f71",
  "1460925895917-afdab827c52f", "1507146153580-69a1fe6d8aa1", "1526374965328-7f61d4dc18c5", "1556742049-0cfed4f6a45d",
  "1618044733300-9472054094ee", "1684369175836-8208a0d4c988", "1488590528505-98d2b5aba04b", "1677442136019-21780ecad995",
  "1563013544-824ae1b704d3", "1441986300917-64674bd600d8", "1550745165-9bc0b252726f", "1525547719571-a2d4ac8945e2",
  "1517694712202-14dd9538aa97", "1633412802994-5c058f151b66", "1558494949-ef010cbdcc31", "1550751827-4bd374c3f58b",
  "1620712943543-bcc4688e7485", "1611162617474-5b21e879e113", "1555255707-c07966088b7b", "1541888062-87db3bb3d75c"
];

function rImg() {
  return "https://images.unsplash.com/photo-" + NEW_IMG_POOL[Math.floor(Math.random() * NEW_IMG_POOL.length)] + "?q=80&w=1200&auto=format&fit=crop";
}

const customData = [
  {
    id: "customer-support-ai",
    titleLight: "Customer Support", titleBold: "AI",
    tag1: "TICKET TRIAGE", tag2: "SENTIMENT ANALYSIS", tag3: "VIRTUAL AGENTS",
    metric1: "80%", mLabel1: "Deflection Rate",
    metric2: "24/7", mLabel2: "Global Availability",
    metric3: "< 1s", mLabel3: "Average Response Time",
    metric4: "+45", mLabel4: "NPS Increase",
    stories: [
      { company: "Global E-Commerce Brand", metric: "80% Deflection", desc: "Resolved customer tier-1 shipping queries instantly without human intervention." },
      { company: "Telecom Provider", metric: "3x Faster", desc: "Reduced average handle time by providing agents with AI-generated draft responses." },
      { company: "SaaS Platform", metric: "$4M Saved", desc: "Avoided massive BPO scaling costs during their peak holiday season." }
    ]
  },
  {
    id: "sales-intelligence",
    titleLight: "Sales", titleBold: "Intelligence",
    tag1: "LEAD SCORING", tag2: "FORECASTING", tag3: "DEAL COACHING",
    metric1: "3x", mLabel1: "Conversion Rate",
    metric2: "95%", mLabel2: "Forecast Accuracy",
    metric3: "10h+", mLabel3: "Saved per Rep/Week",
    metric4: "Zero", mLabel4: "Data Entry Required",
    stories: [
      { company: "B2B Software Enterprise", metric: "30% Win-Rate", desc: "Increased close rates by deploying AI deal coaching that analyzes prospect sentiment." },
      { company: "Real Estate Brokerage", metric: "95% Accuracy", desc: "Achieved unprecedented revenue forecasting accuracy using predictive modeling." },
      { company: "Manufacturing Corp", metric: "15k Leads", desc: "Automatically scored and prioritized inbound pipelines to focus on high-value accounts." }
    ]
  },
  {
    id: "marketing-ai",
    titleLight: "Marketing", titleBold: "AI",
    tag1: "PERSONALIZATION", tag2: "AD OPTIMIZATION", tag3: "CONTENT GENERATION",
    metric1: "40%", mLabel1: "Lower CAC",
    metric2: "10x", mLabel2: "Content Output",
    metric3: "1:1", mLabel3: "Hyper-Personalization",
    metric4: "Dynamic", mLabel4: "A/B Testing",
    stories: [
      { company: "DTC Retailer", metric: "40% CAC Drop", desc: "Lowered acquisition costs by letting AI dynamically adjust ad bidding across 5 platforms." },
      { company: "Media Agency", metric: "10x Content", desc: "Scaled blog and SEO generation while maintaining strict brand voice guidelines." },
      { company: "Travel Booking Site", metric: "120% CTR", desc: "Increased click-through rates via hyper-personalized email campaigns generated on the fly." }
    ]
  },
  {
    id: "finance-ai",
    titleLight: "Finance", titleBold: "AI",
    tag1: "FRAUD DETECTION", tag2: "AUTO RECONCILIATION", tag3: "RISK SCORING",
    metric1: "99.9%", mLabel1: "Fraud Prevention",
    metric2: "Zero", mLabel2: "Manual Reconciliation",
    metric3: "< 50ms", mLabel3: "Transaction Scoring",
    metric4: "100%", mLabel4: "Audit Traceability",
    stories: [
      { company: "Global FinTech", metric: "$12M Blocked", desc: "Prevented fraudulent transactions in real-time using deep learning anomaly detection." },
      { company: "Accounting Firm", metric: "Zero Manual", desc: "Eliminated end-of-month reconciliation completely by matching invoices autonomously." },
      { company: "Insurance Provider", metric: "Instant Payouts", desc: "Automated risk assessment for micro-claims, processing payouts in under 3 minutes." }
    ]
  },
  {
    id: "document-intelligence",
    titleLight: "Document", titleBold: "Intelligence",
    tag1: "OCR EXTRACTION", tag2: "CONTRACT ANALYSIS", tag3: "DATA ENTRY",
    metric1: "95%", mLabel1: "Straight-Through Processing",
    metric2: "100x", mLabel2: "Faster Digitization",
    metric3: "Zero", mLabel3: "Template Setup",
    metric4: "Multi", mLabel4: "Language Parsing",
    stories: [
      { company: "Top 10 Law Firm", metric: "5k Contracts", desc: "Analyzed thousands of legacy contracts to extract non-compete clauses overnight." },
      { company: "Logistics Giant", metric: "95% STP", desc: "Processed handwritten Bills of Lading directly into their ERP without human clerks." },
      { company: "Healthcare Network", metric: "1M Records", desc: "Digitized unstructured patient notes into a standardized FHIR database safely." }
    ]
  },
  {
    id: "knowledge-management",
    titleLight: "Knowledge", titleBold: "Management",
    tag1: "ENTERPRISE SEARCH", tag2: "RAG PIPELINES", tag3: "WIKI AUTOMATION",
    metric1: "40%", mLabel1: "Time Saved Searching",
    metric2: "Zero", mLabel2: "Hallucinations",
    metric3: "100+", mLabel3: "Data Connectors",
    metric4: "Strict", mLabel4: "ACL Permissions",
    stories: [
      { company: "Multinational R&D", metric: "40% Time Saved", desc: "Engineers stopped digging through Confluence and started chatting with their codebase." },
      { company: "Consulting Group", metric: "100% Secure", desc: "United SharePoint and G-Drive into a single neural search bar respecting all access rights." },
      { company: "Support Network", metric: "Instant Answers", desc: "Provided tier-2 agents with cited, verified answers drawn from 10,000 legacy PDF manuals." }
    ]
  },
  {
    id: "workflow-automation",
    titleLight: "Workflow", titleBold: "Automation",
    tag1: "BPA", tag2: "EXCEPTION HANDLING", tag3: "CROSS-SYSTEM ROUTING",
    metric1: "60%", mLabel1: "Cost Reduction",
    metric2: "24/7", mLabel2: "Process Uptime",
    metric3: "0", mLabel3: "Fatigue Errors",
    metric4: "Agile", mLabel4: "Process Mining",
    stories: [
      { company: "Automotive Manufacturer", metric: "60% Cheaper", desc: "Replaced brittle RPA scripts with cognitive agents that adapt when the UI changes." },
      { company: "Global Supply Chain", metric: "24/7 Routing", desc: "Automated vendor onboarding by linking emails, SAP, and background check APIs." },
      { company: "HR Department", metric: "Zero Bottlenecks", desc: "Orchestrated complex multi-department approval chains without dropping a single ticket." }
    ]
  },
  {
    id: "contact-center-ai",
    titleLight: "Contact Center", titleBold: "AI",
    tag1: "CALL TRANSCRIPTION", tag2: "AGENT ASSIST", tag3: "VOICE BOTS",
    metric1: "100%", mLabel1: "Calls Analyzed",
    metric2: "30%", mLabel2: "AHT Reduction",
    metric3: "Real-Time", mLabel3: "Coaching",
    metric4: "Zero", mLabel4: "Wait Times",
    stories: [
      { company: "National Bank", metric: "30% Faster AHT", desc: "Transcribed live calls and surfaced relevant policy documents to agents instantly." },
      { company: "Airline Support", metric: "Zero Hold", desc: "Deployed conversational voice bots that successfully rebooked flights during weather delays." },
      { company: "Utility Provider", metric: "100% QA", desc: "Automatically audited every single recorded call for compliance and script adherence." }
    ]
  },
  {
    id: "it-operations-ai",
    titleLight: "IT Operations", titleBold: "AI (AIOps)",
    tag1: "PREDICTIVE OUTAGES", tag2: "AUTO REMEDIATION", tag3: "ALERT REDUCTION",
    metric1: "70%", mLabel1: "Alert Noise Reduction",
    metric2: "Zero", mLabel2: "Unplanned Downtime",
    metric3: "L1", mLabel3: "Total Automation",
    metric4: "Instant", mLabel4: "Root Cause Analysis",
    stories: [
      { company: "Cloud Provider", metric: "70% Less Noise", desc: "Grouped thousands of cascading alerts into single, actionable incidents for SREs." },
      { company: "E-Commerce Platform", metric: "Auto Healed", desc: "Restarted memory-leaking pods autonomously before customers ever noticed a slowdown." },
      { company: "Financial Exchange", metric: "Zero Outages", desc: "Predicted database locking issues 15 minutes before they caused transaction failures." }
    ]
  },
  {
    id: "devops-ai",
    titleLight: "DevOps", titleBold: "AI",
    tag1: "CODE REVIEW", tag2: "PIPELINE OPTIMIZATION", tag3: "INFRA AS CODE",
    metric1: "5x", mLabel1: "Faster Deployments",
    metric2: "90%", mLabel2: "Automated Testing",
    metric3: "Zero", mLabel3: "Config Drifts",
    metric4: "Secure", mLabel4: "Shift-Left Scanning",
    stories: [
      { company: "Unicorn Startup", metric: "5x Velocity", desc: "Used AI to auto-generate Terraform scripts and enforce infrastructure best practices." },
      { company: "Legacy Bank", metric: "Zero Drift", desc: "Automatically detected and reconciled manual changes made to production Kubernetes clusters." },
      { company: "Game Studio", metric: "90% Test Coverage", desc: "Generated unit tests and security linting for 1M lines of undocumented legacy C++." }
    ]
  },
  {
    id: "cybersecurity-ai",
    titleLight: "Cybersecurity", titleBold: "AI",
    tag1: "THREAT HUNTING", tag2: "ANOMALY DETECTION", tag3: "ZERO TRUST",
    metric1: "99%", mLabel1: "Threats Blocked",
    metric2: "< 1s", mLabel2: "Intrusion Detection",
    metric3: "Zero", mLabel3: "False Positives",
    metric4: "24/7", mLabel4: "SOC Monitoring",
    stories: [
      { company: "Federal Agency", metric: "Zero Breaches", desc: "Blocked zero-day malware attacks by analyzing network behavioral anomalies." },
      { company: "Healthcare Network", metric: "99% Blocked", desc: "Automated phishing email detection, quarantining threats before they reached employee inboxes." },
      { company: "Financial Corp", metric: "SOC Multiplier", desc: "Empowered tier-1 SOC analysts to investigate incidents with the context of a senior engineer." }
    ]
  },
  {
    id: "manufacturing-ai",
    titleLight: "Manufacturing", titleBold: "AI",
    tag1: "PREDICTIVE MAINTENANCE", tag2: "COMPUTER VISION QA", tag3: "SUPPLY CHAIN",
    metric1: "30%", mLabel1: "Downtime Reduction",
    metric2: "0.01%", mLabel2: "Defect Escape Rate",
    metric3: "Optimized", mLabel3: "Energy Usage",
    metric4: "Agile", mLabel4: "Routing",
    stories: [
      { company: "Automotive OEM", metric: "30% Uptime", desc: "Predicted robotic arm failure weeks in advance, scheduling maintenance off-shift." },
      { company: "Electronics Fab", metric: "0.01% Defects", desc: "Used edge computer vision to detect microscopic soldering flaws at 60 frames per second." },
      { company: "Chemical Plant", metric: "20% Energy Saved", desc: "Dynamically adjusted HVAC and furnace temps using predictive reinforcement learning." }
    ]
  },
  {
    id: "retail-ai",
    titleLight: "Retail", titleBold: "AI",
    tag1: "DYNAMIC PRICING", tag2: "INVENTORY FORECASTING", tag3: "VISUAL SEARCH",
    metric1: "15%", mLabel1: "Margin Increase",
    metric2: "Zero", mLabel2: "Stockouts",
    metric3: "1:1", mLabel3: "Loyalty Marketing",
    metric4: "Seamless", mLabel4: "Self-Checkout",
    stories: [
      { company: "Global Grocery Chain", metric: "Zero Stockouts", desc: "Anticipated regional demand surges to route fresh produce exactly where it was needed." },
      { company: "Fashion Brand", metric: "15% Margins", desc: "Implemented dynamic markdown pricing to clear seasonal inventory without losing profit." },
      { company: "Home Goods Store", metric: "Visual Search", desc: "Allowed customers to upload photos of their living room to get instant furniture recommendations." }
    ]
  },
  {
    id: "healthcare-ai",
    titleLight: "Healthcare", titleBold: "AI",
    tag1: "MEDICAL IMAGING", tag2: "PATIENT TRIAGE", tag3: "EHR AUTOMATION",
    metric1: "40%", mLabel1: "Admin Overhead Reduction",
    metric2: "99%", mLabel2: "Diagnostic Accuracy",
    metric3: "Zero", mLabel3: "Burnout",
    metric4: "HIPAA", mLabel4: "Compliant",
    stories: [
      { company: "National Hospital Group", metric: "40% Less Admin", desc: "Used ambient voice AI to instantly draft patient notes into the EHR during consultations." },
      { company: "Radiology Clinic", metric: "99% Accuracy", desc: "Assisted doctors in identifying early-stage anomalies in MRI and CT scans." },
      { company: "Telehealth Startup", metric: "Instant Triage", desc: "Deployed a secure symptom-checking chatbot that routed critical cases to humans immediately." }
    ]
  },
  {
    id: "banking-financial-services",
    titleLight: "Banking &", titleBold: "Financial Services",
    tag1: "ALGORITHMIC TRADING", tag2: "CREDIT DECISIONING", tag3: "AML COMPLIANCE",
    metric1: "< 1s", mLabel1: "Loan Approval",
    metric2: "Zero", mLabel2: "Compliance Fines",
    metric3: "Alpha", mLabel3: "Generation",
    metric4: "Bias-Free", mLabel4: "Scoring",
    stories: [
      { company: "Tier-1 Investment Bank", metric: "Alpha Gen", desc: "Processed millions of alternative data signals to identify undervalued equities in real-time." },
      { company: "Challenger Bank", metric: "< 1s Approvals", desc: "Issued lines of credit instantly using alternative scoring metrics beyond traditional FICO." },
      { company: "Global Processor", metric: "Zero Fines", desc: "Automated Anti-Money Laundering (AML) checks across borders to ensure strict compliance." }
    ]
  },
  {
    id: "legal-ai",
    titleLight: "Legal", titleBold: "AI",
    tag1: "CASE RESEARCH", tag2: "CLAUSE EXTRACTION", tag3: "E-DISCOVERY",
    metric1: "80%", mLabel1: "Time Saved on Review",
    metric2: "Zero", mLabel2: "Missed Precedents",
    metric3: "Secure", mLabel3: "Client Portals",
    metric4: "Instant", mLabel4: "Redaction",
    stories: [
      { company: "Magic Circle Firm", metric: "80% Faster", desc: "Accelerated due diligence by having AI flag risky indemnification clauses in M&A deals." },
      { company: "Corporate Counsel", metric: "Instant e-Discovery", desc: "Sifted through 2 million internal emails overnight to isolate relevant litigation evidence." },
      { company: "Public Defender", metric: "Zero Misses", desc: "Built a chat interface that instantly retrieved case law and precedents for trial prep." }
    ]
  },
  {
    id: "education-ai",
    titleLight: "Education", titleBold: "AI",
    tag1: "ADAPTIVE LEARNING", tag2: "AUTO GRADING", tag3: "STUDENT AT-RISK",
    metric1: "1:1", mLabel1: "Tutoring Ratio",
    metric2: "90%", mLabel2: "Retention Rate",
    metric3: "Zero", mLabel3: "Grading Backlog",
    metric4: "Custom", mLabel4: "Curriculums",
    stories: [
      { company: "EdTech Startup", metric: "1:1 Tutoring", desc: "Deployed an AI tutor that adapted math problems in real-time based on student struggle areas." },
      { company: "State University", metric: "90% Retention", desc: "Identified students at risk of dropping out by analyzing LMS engagement and attendance data." },
      { company: "Online Academy", metric: "Zero Backlog", desc: "Automated the grading of short-form essays while providing constructive feedback to students." }
    ]
  },
  {
    id: "government-ai",
    titleLight: "Government", titleBold: "AI",
    tag1: "CITIZEN SERVICES", tag2: "POLICY ANALYSIS", tag3: "SMART CITIES",
    metric1: "24/7", mLabel1: "Citizen Support",
    metric2: "30%", mLabel2: "Traffic Reduction",
    metric3: "Zero", mLabel3: "Data Leaks",
    metric4: "FedRAMP", mLabel4: "Certified",
    stories: [
      { company: "Major Metropolis", metric: "30% Less Traffic", desc: "Optimized traffic light timing across 500 intersections using real-time computer vision." },
      { company: "Federal Agency", metric: "24/7 Support", desc: "Deployed multi-lingual bots that helped citizens navigate complex tax codes and forms." },
      { company: "Defense Contractor", metric: "FedRAMP Secure", desc: "Built air-gapped language models to analyze satellite imagery on highly classified networks." }
    ]
  },
  {
    id: "custom-ai-solutions",
    titleLight: "Custom AI", titleBold: "Solutions",
    tag1: "PROPRIETARY LLMS", tag2: "MULTI-AGENT SYSTEMS", tag3: "EDGE DEPLOYMENTS",
    metric1: "100%", mLabel1: "IP Ownership",
    metric2: "Bespoke", mLabel2: "Architectures",
    metric3: "Zero", mLabel3: "API Dependency",
    metric4: "Infinite", mLabel4: "Scalability",
    stories: [
      { company: "Fortune 50 Conglomerate", metric: "100% Owned", desc: "Pre-trained a massive proprietary LLM from scratch on decades of secret internal blueprints." },
      { company: "Deep Tech Startup", metric: "Edge AI", desc: "Deployed extremely lightweight, high-performance models onto custom IoT hardware." },
      { company: "Logistics Innovator", metric: "Multi-Agent", desc: "Built a swarm of autonomous AI agents that negotiate shipping rates with each other in real-time." }
    ]
  }
];

customData.forEach(s => {
  const dataObj = {
    id: s.id,
    breadcrumbs: ["Enterprise Solutions", s.titleLight + " " + s.titleBold],
    hero: {
      titleLight: s.titleLight,
      titleBold: s.titleBold,
      description: "Transform your " + s.titleLight + " workflows with enterprise-grade Artificial Intelligence. Automate tedious tasks, predict outcomes, and empower your team to focus on strategic execution.",
      bgImage: rImg()
    },
    metricsBanner: [
      { value: s.metric1, label: s.mLabel1 },
      { value: s.metric2, label: s.mLabel2 },
      { value: s.metric3, label: s.mLabel3 },
      { value: s.metric4, label: s.mLabel4 }
    ],
    overview: {
      heading: "Intelligent " + s.titleLight + " Transformation",
      paragraph: "Modern enterprises are moving beyond rigid rules-based software. Our " + s.titleLight + " " + s.titleBold + " solutions utilize state-of-the-art machine learning and generative models to understand context, make probabilistic decisions, and orchestrate complex workflows across your existing tech stack.",
      image: rImg()
    },
    benefitsBento: [
      {
        title: "Predictive Intelligence",
        desc: "Anticipate issues and opportunities before they arise by analyzing historical patterns.",
        colSpan: 2,
        image: rImg()
      },
      {
        title: "Workflow Automation",
        desc: "Eliminate manual data entry and repetitive approvals.",
        colSpan: 1,
        image: rImg()
      },
      {
        title: "Actionable Insights",
        desc: "Turn massive data lakes into clear, strategic dashboards.",
        colSpan: 1,
        image: rImg()
      },
      {
        title: "Secure & Compliant",
        desc: "Deployed within your secure VPC with strict RBAC and data governance controls.",
        colSpan: 2,
        image: rImg()
      }
    ],
    featuresZigZag: [
      {
        title: "Core Functionality: " + s.tag1,
        text: "We implement advanced algorithms specifically trained on your proprietary data to automate " + s.tag1.toLowerCase() + ". This reduces overhead while drastically improving operational speed and reliability.",
        image: rImg(),
        tag: s.tag1
      },
      {
        title: "Strategic Capability: " + s.tag2,
        text: "By leveraging large language models and predictive analytics, our systems can handle " + s.tag2.toLowerCase() + " autonomously. Employees are kept in the loop only for high-value exceptions and final approvals.",
        image: rImg(),
        tag: s.tag2
      },
      {
        title: "Advanced Integration: " + s.tag3,
        text: "Our solutions don't live in a silo. We seamlessly integrate " + s.tag3.toLowerCase() + " directly into the enterprise applications your team already uses every day, ensuring maximum adoption.",
        image: rImg(),
        tag: s.tag3
      }
    ],
    successStories: s.stories
  };

  const fileContent = "const data = " + JSON.stringify(dataObj, null, 2) + ";\n\nexport default data;";
  writeFileSync("src/data/solutions/" + s.id + ".js", fileContent);
});

console.log('Fixed exactly 19 solutions with completely unique success stories and fresh images!');
