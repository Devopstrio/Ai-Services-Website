const fs = require('fs');

const cardsFile = 'src/components/integration/IntegrationCards.jsx';
let cardsContent = fs.readFileSync(cardsFile, 'utf8');

const newCards = `const CARDS = [
  {
    badge: "STRATEGY",
    title: "Ecosystem Strategy",
    body: "We map your entire digital ecosystem to identify friction points and siloed data.",
    more: "Our architects work with your stakeholders to define an integration roadmap that aligns with your business goals, whether that's retiring technical debt or enabling new digital channels.",
    color1: "#E11D48",
    color2: "#9f1239"
  },
  {
    badge: "ARCHITECTURE",
    title: "Modern Integration Platforms",
    body: "Scalable, resilient architectures designed for real-time data flows and hybrid cloud environments.",
    more: "We implement API gateways, service meshes, and event brokers that decouple your systems, ensuring your infrastructure can handle massive throughput without breaking.",
    color1: "#be123c",
    color2: "#881337"
  },
  {
    badge: "DELIVERY",
    title: "Agile API & Pipeline Delivery",
    body: "From legacy connectors to serverless functions, we build integrations that work from day one.",
    more: "Our engineering pods own the end-to-end delivery of APIs and data pipelines, utilizing CI/CD best practices to ensure rapid deployment and zero downtime.",
    color1: "#9f1239",
    color2: "#4c0519"
  },
  {
    badge: "GOVERNANCE",
    title: "Centralized Control",
    body: "Maintain visibility, rate limiting, and access control across thousands of endpoints.",
    more: "We establish API governance models and observability dashboards that give your IT teams complete control over who is accessing your data and how it's being used.",
    color1: "#881337",
    color2: "#000000"
  },
  {
    badge: "PARTNERSHIPS",
    title: "Platform Expertise",
    body: "We partner with leading iPaaS and API management vendors to accelerate your time-to-market.",
    more: "Our deep expertise with platforms like Mulesoft, Apigee, and Confluent allows us to select and configure the absolute best-in-class components for your specific use case.",
    color1: "#E11D48",
    color2: "#4c0519"
  },
  {
    badge: "SECURITY",
    title: "Zero-Trust Connectivity",
    body: "Enterprise-grade security architectures built into every single connection.",
    more: "We implement mutual TLS, OAuth 2.0, and continuous threat monitoring to ensure your data is encrypted in transit and at rest. We never compromise on enterprise security.",
    color1: "#be123c",
    color2: "#000000"
  },
];`;

cardsContent = cardsContent.replace(/const CARDS = \[[\s\S]*?\];/, newCards);
cardsContent = cardsContent.replace('Powering AI with', 'Powering Connectivity with');
fs.writeFileSync(cardsFile, cardsContent);


const insightsFile = 'src/components/integration/IntegrationInsights.jsx';
let insightsContent = fs.readFileSync(insightsFile, 'utf8');

const newItems = `const ITEMS = [
  {
    tag: "WHITE PAPER",
    title: "The ROI of API-Led Connectivity",
    desc: "Why point-to-point integrations are killing your agility, and how modern API strategies reduce maintenance costs by 60%.",
    color1: "#E11D48",
    color2: "#9f1239"
  },
  {
    tag: "RESEARCH REPORT",
    title: "Event-Driven Architecture in the Enterprise",
    desc: "An exploration of how top-performing organizations are using Kafka and event meshes to enable real-time business processes.",
    color1: "#be123c",
    color2: "#881337"
  },
  {
    tag: "CASE STUDY",
    title: "Global Retailer Unifies 40+ Legacy Systems",
    desc: "By implementing a central iPaaS solution, this global retailer achieved a single view of the customer and accelerated order fulfillment.",
    color1: "#9f1239",
    color2: "#4c0519"
  },
  {
    tag: "RESEARCH REPORT",
    title: "Modernizing the Mainframe",
    desc: "Strategies for securely exposing legacy COBOL and mainframe applications to cloud-native digital channels without disruption.",
    color1: "#881337",
    color2: "#000000"
  },
  {
    tag: "FRAMEWORK",
    title: "The Zero-Trust Integration Playbook",
    desc: "The architecture, policies, and tools required to secure complex multi-cloud and B2B integrations.",
    color1: "#E11D48",
    color2: "#4c0519"
  },
  {
    tag: "CASE STUDY",
    title: "Real-Time Supply Chain Visibility",
    desc: "A deep dive into how we built an event-driven data pipeline that provided instant visibility into global logistics and inventory.",
    color1: "#be123c",
    color2: "#000000"
  },
];`;

insightsContent = insightsContent.replace(/const ITEMS = \[[\s\S]*?\];/, newItems);
insightsContent = insightsContent.replace('Explore AI', 'Explore Integration');
fs.writeFileSync(insightsFile, insightsContent);

console.log('Updated Cards and Insights');
