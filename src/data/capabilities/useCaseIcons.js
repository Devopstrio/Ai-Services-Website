const iconAssets = import.meta.glob(
  "../../assets/capabilities/use-cases/**/*.svg",
  { eager: true, import: "default", query: "?url" }
);

const capabilityIcons = {
  "ai-agents": {
    folder: "ai-agents",
    items: {
      "IT & DevOps": "IT & DevOps.svg",
      "Customer Support": "Customer Support.svg",
      "Financial Operations": "Financial Operations.svg",
    },
  },
  "enterprise-ai-development": {
    folder: "enterprise-ai",
    items: {
      "SaaS Platforms": "SaaS Platforms.svg",
      "Financial Institutions": "Financial Institutions.svg",
      "Healthcare Providers": "Healthcare Providers.svg",
    },
  },
  "machine-learning": {
    folder: "machine-learning",
    items: {
      "Retail & E-commerce": "Retail & E-commerce.svg",
      "Supply Chain": "Supply Chain.svg",
      Cybersecurity: "Cybersecurity.svg",
    },
  },
  nlp: {
    folder: "nlp",
    items: {
      "Legal & Compliance": "Legal & Compliance.svg",
      "Customer Support": "Customer Support.svg",
      "Market Research": "Market Research.svg",
    },
  },
  "computer-vision": {
    folder: "computer-vision",
    items: {
      Manufacturing: "manufacturing.svg",
      Retail: "Retail.svg",
      Healthcare: "Healthcare.svg",
    },
  },
  "intelligent-document-processing": {
    folder: "idp",
    items: {
      "Finance & Accounts": "Finance & Accounts.svg",
      Insurance: "Insurance.svg",
      Logistics: "Logistics.svg",
    },
  },
  "ai-search-knowledge-management": {
    folder: "ai-search",
    items: {
      "Employee Onboarding": "Employee Onboarding.svg",
      "R&D & Engineering": "R&D & Engineering.svg",
      "Customer Success": "Customer Success.svg",
    },
  },
  "intelligent-automation": {
    folder: "intelligent-automation",
    items: {
      "HR & Onboarding": "HR & Onboarding.svg",
      "Supply Chain": "Supply Chain.svg",
      "IT Operations": "IT Operations.svg",
    },
  },
  "data-intelligence": {
    folder: "data-intelligence",
    items: {
      "Financial Services": "Financial Services.svg",
      "Retail & CPG": "Retail & CPG.svg",
      Healthcare: "Healthcare.svg",
    },
  },
  "predictive-analytics": {
    folder: "predictive-analytics",
    items: {
      "Supply Chain": "Supply Chain.svg",
      "Marketing & Sales": "Marketing & Sales.svg",
      "Heavy Industry": "Heavy Industry.svg",
    },
  },
  "ai-integration": {
    folder: "ai-integration",
    items: {
      "Salesforce & CRMs": "Salesforce & CRMs.svg",
      "SAP & ERPs": "SAP & ERPs.svg",
      "Custom Legacy Apps": "Custom Legacy Apps.svg",
    },
  },
  "ai-infrastructure-mlops": {
    folder: "ai-infra",
    items: {
      "Runaway Cloud Costs": "Runaway Cloud Costs.svg",
      "Model Degradation": "Model Degradation.svg",
      "Deployment Bottlenecks": "Deployment Bottlenecks.svg",
    },
  },
  "responsible-ai-governance": {
    folder: "responsible-ai",
    items: {
      "Financial Services": "Financial Services.svg",
      Healthcare: "Healthcare.svg",
      "Human Resources": "Human Resources.svg",
    },
  },
  "ai-strategy-consulting": {
    folder: "ai-strategy",
    items: {
      "C-Suite & Boards": "C-Suite & Boards.svg",
      "IT & Architecture": "IT & Architecture.svg",
      "Product & Innovation": "Product & Innovation.svg",
    },
  },
  "ai-innovation-lab": {
    folder: "ai-innovation-lab",
    items: {
      "Startups & Scaleups": "Startups & Scaleups.svg",
      "Enterprise R&D": "Enterprise R&D.svg",
      "Venture Capital": "Venture Capital.svg",
    },
  },
};

export function getCapabilityUseCaseIcon(serviceId, itemTitle) {
  const capability = capabilityIcons[serviceId];
  const filename = capability?.items[itemTitle];

  if (!filename) {
    return null;
  }

  const assetPath = `../../assets/capabilities/use-cases/${capability.folder}/${filename}`;
  const icon = iconAssets[assetPath];

  if (!icon) {
    throw new Error(`Missing use-case icon asset: ${assetPath}`);
  }

  return icon;
}
