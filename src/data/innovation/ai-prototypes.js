import heroBg from "../../assets/fresh/product_ai_studio_ide.jpg";
import proto1 from "../../assets/fresh/saas_cloud_platform_ui.jpg";
import proto2 from "../../assets/fresh/dashboard_ai_model_training.jpg";
import proto3 from "../../assets/fresh/multimodal_ai_workbench.jpg";
import proto4 from "../../assets/fresh/server_rack_neon_glow.jpg";
import caseImg from "../../assets/fresh/office-work-environment-stockcake.jpg";

export const aiPrototypesData = {
  id: "ai-prototypes",
  category: "Innovation Lab",
  name: "AI Prototypes",
  tagline: "Rapid Sandbox Incubation, Interactive MVPs & Production-Grade PoC Acceleration",
  hero: {
    badge: "INNOVATION LAB // RAPID SANDBOX",
    subBadge: "FROM CONCEPT TO MVP IN 2 WEEKS",
    titleLight: "Accelerate Idea-to-Code Velocity with",
    titleBold: "Devopstrio AI Prototypes",
    description: "De-risk capital investment and test radical enterprise AI use cases before broad commitment. We build high-fidelity interactive prototypes with live model inference in under 14 days.",
    bgImage: heroBg,
    liveBadge: "Active Sandbox v4.6"
  },
  stats: [
    { value: "< 14 Days", label: "Idea-to-Working-MVP", sub: "Interactive full-stack prototype delivery" },
    { value: "94.6%", label: "Production Transition Rate", sub: "Prototypes graduated into enterprise production" },
    { value: "100+ PoCs", label: "Enterprise Sandboxes Built", sub: "Across Fortune 500 financial, healthcare & SaaS" },
    { value: "4.8x", label: "ROI Acceleration", sub: "Validated commercial viability before full build" }
  ],
  pillars: [
    {
      id: "cognitive-mvp",
      tag: "FULL-STACK PROTOTYPING",
      title: "Interactive Cognitive Enterprise Sandboxes",
      description: "Building production-grade interactive React & Node web applications powered by custom fine-tuned models to demonstrate live user workflows.",
      image: proto1,
      metricBadge: "14-Day Delivery",
      highlights: [
        "Pre-integrated enterprise authentication (Okta, Entra ID, SAML)",
        "Synthetic test data generators mimicking proprietary enterprise datasets",
        "Interactive analytics dashboards recording real-time latency and accuracy"
      ]
    },
    {
      id: "agentic-poc",
      tag: "AGENTIC WORKFLOWS",
      title: "Multi-Agent Workflow Simulation Testbeds",
      description: "Prototyping collaborative multi-agent swarms that execute end-to-end business logic across mocked ERP, CRM, and ticketing endpoints.",
      image: proto3,
      metricBadge: "End-to-End Mesh",
      highlights: [
        "Live tool-calling simulations with deterministic rollback guards",
        "Asynchronous human-in-the-loop review and approval gateways",
        "Deterministic audit trails capturing token costs and latency profiles"
      ]
    },
    {
      id: "inference-benchmarking",
      tag: "PERFORMANCE VALIDATION",
      title: "Multi-Model Latency & Cost Bake-Offs",
      description: "Benchmarking proprietary LLMs, open-weights models, and custom SLMs against your specific enterprise workloads to pinpoint optimal price-to-performance.",
      image: proto2,
      metricBadge: "Cost & Speed Matrix",
      highlights: [
        "Side-by-side output evaluation using automated LLM-as-a-judge",
        "Quantization benchmarks (FP8, INT4, AWQ) on NVIDIA and AMD silicon",
        "Exact dollar cost per 1M tokens calculated against real workload distributions"
      ]
    },
    {
      id: "private-enclave-poc",
      tag: "DATA PRIVACY & SOVEREIGNTY",
      title: "Zero-Data-Retention Air-Gapped Sandboxes",
      description: "Spinning up isolated VPC enclaves where confidential enterprise data is processed without leaving your dedicated cloud perimeter.",
      image: proto4,
      metricBadge: "Air-Gapped Privacy",
      highlights: [
        "Customer-managed encryption keys (CMEK) with cryptographic isolation",
        "Zero model training or public weights caching guarantee",
        "Full SOC 2 Type II and HIPAA compliant prototype environments"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "fintech-proto",
      title: "Automated Commercial Loan Underwriting MVP",
      category: "Fintech Prototyping",
      badge: "Real-Time OCR & SMT Match",
      image: proto1,
      benchmark: "Processed in 4.2 Seconds",
      summary: "Interactive sandbox extracting 100+ page commercial balance sheets, cross-verifying tax filings, and generating structured credit committee dossiers.",
      features: [
        "Multi-modal extraction across scanned bank PDFs and SEC filings",
        "Automated debt-service coverage ratio (DSCR) algorithmic scoring",
        "Instant credit approval recommendation with full explainability logs"
      ]
    },
    {
      id: "health-proto",
      title: "Clinical Trial Eligibility Matcher",
      category: "Healthcare & Life Sciences",
      badge: "HIPAA Compliant Enclave",
      image: proto3,
      benchmark: "98.7% Patient Match Accuracy",
      summary: "Parses complex EHR medical records against 5,000+ active clinical trial protocols to identify eligible candidates in seconds.",
      features: [
        "De-identifies patient health information (PHI) via cryptographic blinding",
        "Extracts inclusion/exclusion criteria using medical ontology vectors",
        "Generates audit-ready compliance dossiers for principal investigators"
      ]
    },
    {
      id: "devops-proto",
      title: "Kubernetes Incident Auto-Remediation Bot",
      category: "Engineering Sandbox",
      badge: "Sub-Second Pod Healing",
      image: proto2,
      benchmark: "Auto-Resolved in 1.8s",
      summary: "Live simulated sandbox intercepting CrashLoopBackOff alerts, diagnosing root cause memory leaks, and issuing safe GitOps pull requests.",
      features: [
        "Ingests live Prometheus telemetry and structured container logs",
        "Generates isolated canary test sandbox to verify patch before deploy",
        "Integrates with Slack & PagerDuty for instant SRE sign-off"
      ]
    }
  ],
  papers: [
    {
      title: "Empirical Frameworks for Rapid Prototyping of Large Language Model Workflows",
      venue: "IEEE Software Enterprise AI 2025",
      authors: "Devopstrio Prototyping Division & Carnegie Mellon University",
      doi: "10.48550/arXiv.2507.03921",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Cost-Performance Tradeoffs in Quantized Enterprise Foundation Model Inference",
      venue: "SysML 2025 (Best Practice)",
      authors: "Devopstrio Systems Group & UC Berkeley",
      doi: "10.48550/arXiv.2506.11029",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Air-Gapped Multi-Agent Sandbox Architecture for Regulated Financial Institutions",
      venue: "ACM FinTech Computing 2025",
      authors: "Devopstrio Security Lab & Imperial College London",
      doi: "10.48550/arXiv.2511.05432",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Tier-1 Global Financial Services Institution",
    collaborationType: "Rapid Prototyping Sandbox",
    headline: "How a 14-Day AI Prototype Proved Commercial Viability for a \$40M Global Wealth Intelligence Platform",
    quote: "Devopstrio's AI Prototypes sandbox gave our executive board the confidence to greenlight our multi-million dollar AI transformation. They delivered a fully functional MVP with real customer telemetry in just 10 business days.",
    author: "Head of Digital Innovation & Wealth Tech",
    organization: "Global Tier-1 Banking Leader",
    image: caseImg,
    metrics: [
      { stat: "10 Days", label: "From kickoff to working executive demo" },
      { stat: "96.4%", label: "Model precision on private wealth data" },
      { stat: "\$40M", label: "Commercial program greenlit by board" }
    ]
  }
};
