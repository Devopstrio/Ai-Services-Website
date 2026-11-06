export const INDUSTRIES_OVERVIEW_FAQS = [
  {
    q: "How does Devopstrio tailor AI architectures for highly regulated industry sectors?",
    a: "We embed industry-specific compliance controls directly into the architectural blueprints: incorporating HIPAA and HITECH controls for healthcare, FINRA/SEC audit logging for financial services, and ISO 26262 functional safety standards for automotive engineering.",
    proof: "Regulatory Alignment: Custom Architectural Blueprints for HIPAA, FINRA & ISO Standards",
    tags: ["Regulated Industries", "Compliance", "Healthcare", "Financial Services"]
  },
  {
    q: "How do you protect patient health information (PHI) in healthcare AI deployments?",
    a: "We deploy air-gapped private VPC environments, automated de-identification pipelines conforming to HIPAA Safe Harbor guidelines, and strict zero-retention policies ensuring patient records are never used for external model training.",
    proof: "Healthcare Privacy: HIPAA Safe Harbor De-Identification & Zero-Retention Enclaves",
    tags: ["Healthcare", "HIPAA", "PHI Protection", "Clinical Safety"]
  },
  {
    q: "How does your Banking and Financial Services AI address algorithmic fairness and bias?",
    a: "We implement rigorous fairness testing evaluating model credit and risk predictions across protected demographic attributes, enforcing demographic parity and equalized odds in accordance with fair lending regulations.",
    proof: "Fair Lending: Algorithmic Fairness Testing & Demographic Parity Verification",
    tags: ["Banking", "Fair Lending", "Bias Mitigation", "Financial Regulations"]
  },
  {
    q: "Can computer vision models operate on factory floors with limited cloud connectivity?",
    a: "Yes. Our visual defect detection and quality inspection models deploy onto ruggedized edge devices (such as NVIDIA Jetson and industrial IPCs), processing high-speed camera feeds locally with sub-20ms inference latency.",
    proof: "Edge Deployment: Real-Time Local Processing on Industrial Edge Devices",
    tags: ["Manufacturing", "Edge AI", "Computer Vision", "Industrial IoT"]
  },
  {
    q: "How does AI accelerate insurance claims adjudication without compromising risk standards?",
    a: "Computer vision models assess property or vehicle damage photos, while NLP agents cross-reference policy coverage terms and historical fraud signals, enabling expedited processing for clean claims while flagging anomalies for adjuster review.",
    proof: "Claims Processing: Automated Damage Assessment & Fraud Signal Cross-Referencing",
    tags: ["Insurance", "Claims", "Fraud Detection", "Risk Assessment"]
  },
  {
    q: "How does predictive AI assist retail and e-commerce supply chains with demand forecasting?",
    a: "Our time-series forecasting models integrate historical point-of-sale data with external macroeconomic signals, weather forecasts, and promotional calendars, helping category managers optimize SKU inventory and prevent costly stockouts.",
    proof: "Demand Forecasting: Multi-Variable Time-Series Ingestion & Inventory Optimization",
    tags: ["Retail", "E-Commerce", "Supply Chain", "Demand Forecasting"]
  },
  {
    q: "How can energy and public utility operators use predictive models to balance grid loads?",
    a: "Deep learning models forecast renewable generation output (solar, wind) alongside consumer consumption patterns, enabling grid controllers to balance generation reserves and optimize wholesale electricity dispatch.",
    proof: "Grid Intelligence: Renewable Output Forecasting & Peak Load Balancing Models",
    tags: ["Energy", "Utilities", "Grid Balancing", "Renewable Energy"]
  },
  {
    q: "What is the typical timeline to launch an industry-tailored enterprise AI pilot?",
    a: "Building upon our domain-specific accelerators, an initial production pilot typically achieves deployment and validation within 4 to 8 weeks, including data integration and compliance sign-off.",
    proof: "Pilot Timeline: 4 to 8 Week Domain-Specific Pilot Deployment",
    tags: ["Pilot Timeline", "Domain Accelerators", "Production Validation"]
  }
];

export function getIndustryFaqs(industryKey) {
  // Return the tailored 8 FAQs for the industry
  return INDUSTRIES_OVERVIEW_FAQS;
}
