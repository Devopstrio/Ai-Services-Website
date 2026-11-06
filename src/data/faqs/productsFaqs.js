export const PRODUCTS_OVERVIEW_FAQS = [
  {
    q: "How are Devopstrio's AI products architected for enterprise deployment?",
    a: "Our products deploy as self-contained microservices inside your dedicated Virtual Private Cloud (AWS, Azure, GCP) or private Kubernetes cluster, ensuring that enterprise data never traverses shared multi-tenant SaaS environments.",
    proof: "Deployment Architecture: Dedicated Private Tenant or Self-Hosted VPC",
    tags: ["Product Suite", "VPC Deployment", "Data Isolation", "Microservices"]
  },
  {
    q: "Can our engineering team customize product functionality via APIs and SDKs?",
    a: "Yes. All Devopstrio products expose comprehensive, authenticated REST APIs, GraphQL endpoints, and Python/TypeScript SDKs, enabling your engineers to embed product capabilities directly into internal applications.",
    proof: "API Extensibility: OpenAPI & GraphQL Specifications with Python/TS SDKs",
    tags: ["REST API", "GraphQL", "Python SDK", "TypeScript", "Extensibility"]
  },
  {
    q: "How does the Document AI engine handle complex unstructured files?",
    a: "Using vision-transformer layout models, Document AI parses multi-page PDFs, scans, and spreadsheets, reconstructing reading hierarchies and extracting tables and key-value pairs with high accuracy.",
    proof: "Document Accuracy: Transformer Layout Parsing & Table Normalization",
    tags: ["Document AI", "OCR", "Table Extraction", "Computer Vision"]
  },
  {
    q: "How does Developer Copilot Engine maintain code security and privacy?",
    a: "Developer Copilot indexes only your approved internal repositories within your secure perimeter, offering contextual autocompletions while enforcing real-time linters that block known vulnerability patterns.",
    proof: "Code Security: Private Repo Indexing & Real-Time OWASP Vulnerability Filtering",
    tags: ["Developer Copilot", "Code Security", "OWASP", "Private Repos"]
  },
  {
    q: "What enterprise identity and access control (IAM) systems are supported?",
    a: "All products integrate natively with enterprise Identity Providers via SAML 2.0 and OIDC (including Okta, Microsoft Entra ID / Azure AD, and Ping Identity), supporting granular role-based access control (RBAC).",
    proof: "IAM Integration: Native Okta, Microsoft Entra ID & SAML 2.0 / OIDC SSO",
    tags: ["SSO", "SAML", "Okta", "Entra ID", "RBAC"]
  },
  {
    q: "How are product updates and model upgrades deployed with zero downtime?",
    a: "We employ blue-green and canary Kubernetes deployment pipelines that progressively route traffic to updated model containers while verifying inference latency and output stability.",
    proof: "Zero-Downtime Releases: Blue-Green & Canary Progressive Rollouts",
    tags: ["Canary Deployment", "Kubernetes", "Zero Downtime", "Blue-Green"]
  },
  {
    q: "What ongoing maintenance and support are provided with product licenses?",
    a: "Enterprise licenses include dedicated Technical Account Management, SLA-backed tier-3 engineering support, scheduled security vulnerability patching, and quarterly architecture reviews.",
    proof: "Support Standard: SLA-Backed Technical Account Management & Patching",
    tags: ["Support", "SLA", "Maintenance", "Quarterly Reviews"]
  },
  {
    q: "What commercial licensing options are available for Devopstrio AI products?",
    a: "We offer transparent annual enterprise licensing scaled by compute capacity and operational scope, eliminating unpredictable per-seat penalties and hidden per-token fees.",
    proof: "Licensing Model: Predictable Enterprise Capacity Tiers & Zero Seat Penalties",
    tags: ["Licensing", "Enterprise Pricing", "Transparency", "Commercial Terms"]
  }
];

export function getProductFaqs(productId, productName) {
  return [
    {
      q: `How does ${productName || "this product"} integrate into our existing enterprise environment?`,
      a: `We engineer the product to deploy directly into your private enterprise cloud perimeter (AWS, Azure, GCP) or on-premise infrastructure. Using Zero-Trust identity boundaries, secure API gateways, and standardized container runtimes, it connects cleanly to your existing core platforms without disruptive migrations.`,
      proof: "Enterprise Architecture: VPC Private Deployment | SOC 2 & ISO 27001 Aligned",
      tags: ["Integration", "Cloud Architecture", "Zero-Trust", "Security"]
    },
    {
      q: `How does ${productName || "this product"} protect sensitive enterprise data and maintain compliance?`,
      a: `Data protection is enforced at every layer: in-flight PII masking, end-to-end TLS 1.3 encryption, customer-managed encryption keys (CMEK), and granular role-based access control (RBAC). The architecture adheres to UK GDPR, SOC 2, and relevant industry regulations.`,
      proof: "Data Governance: Private Enclaves & UK GDPR Audit-Ready Runbooks",
      tags: ["Data Privacy", "UK GDPR", "CMEK", "Access Control"]
    },
    {
      q: `What is the typical deployment timeline for ${productName || "this product"}?`,
      a: `Following initial architectural alignment and data schema validation, our engineering teams typically deploy a functional production pilot within 4 to 6 weeks, building on pre-tested modular accelerators to ensure rapid time-to-value.`,
      proof: "Delivery Cadence: 4 to 6 Week Production Pilot Velocity",
      tags: ["Delivery Timeline", "Agile Pilot", "Accelerators", "ROI"]
    },
    {
      q: `How do you ensure factual accuracy and reliability in ${productName || "this product"}'s outputs?`,
      a: `We implement grounded Retrieval-Augmented Generation (RAG) paired with multi-agent cross-verification. Automated outputs are directly linked to verified enterprise source documents with full citation lineage, and deterministic safety filters intercept uncertain responses.`,
      proof: "Accuracy Verification: Grounded RAG with Direct Citation Footnotes",
      tags: ["Accuracy", "Grounded RAG", "Verification", "Quality Control"]
    },
    {
      q: `Can internal teams operate ${productName || "this product"} independently after deployment?`,
      a: `Yes. Every engagement concludes with structured engineering handoffs, pair programming walkthroughs, and comprehensive runbook documentation. Clients can choose full internal operation or engage our 24/7 Managed Services for ongoing telemetry and maintenance.`,
      proof: "Knowledge Transfer: Comprehensive Runbooks & Structured Handoffs",
      tags: ["Knowledge Transfer", "Enablement", "Runbooks", "Independence"]
    },
    {
      q: `How does intellectual property (IP) ownership work for ${productName || "this product"}?`,
      a: `100% of custom code, fine-tuned model weights, proprietary orchestration workflows, and pipeline configurations developed for your organization belong exclusively to your enterprise. Devopstrio retains zero claim over your proprietary business logic.`,
      proof: "Commercial Terms: 100% Client IP Ownership & Code Escrow",
      tags: ["IP Ownership", "Commercial Terms", "Transparency", "Client Governance"]
    },
    {
      q: `How do you monitor and optimize cloud compute costs for ${productName || "this product"}?`,
      a: `Through embedded FinOps practices, we monitor real-time token utilization, query routing efficiency, and compute allocation. Model quantization, continuous batching, and intelligent model routing are applied to minimize ongoing operational expenses.`,
      proof: "FinOps Benchmark: Dynamic Compute Allocation & Smart Query Routing",
      tags: ["FinOps", "Cost Control", "Optimization", "Efficiency"]
    },
    {
      q: `What ongoing managed support options are available for ${productName || "this product"}?`,
      a: `We offer tailored service level agreements (SLAs) supporting 24/7/365 infrastructure telemetry, proactive anomaly alerting, automated model drift retraining, security patch management, and dedicated tier-3 platform engineering support.`,
      proof: "Support SLA: Tailored Availability & Dedicated Platform Engineering Support",
      tags: ["Managed Services", "SLA", "24/7 Support", "Maintenance"]
    }
  ];
}
