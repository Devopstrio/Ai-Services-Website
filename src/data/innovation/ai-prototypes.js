import heroBg from "../../assets/fresh/product_ai_studio_ide.jpg";
import proto1 from "../../assets/fresh/saas_cloud_platform_ui.jpg";
import proto2 from "../../assets/fresh/dashboard_ai_model_training.jpg";
import proto3 from "../../assets/fresh/multimodal_ai_workbench.jpg";
import proto4 from "../../assets/fresh/server_rack_neon_glow.jpg";
import cognitiveSandboxImg from "../../assets/fresh/ai_prototypes_pillar_cognitive_sandboxes.webp";
import multiAgentWorkflowImg from "../../assets/fresh/ai_prototypes_pillar_multi_agent_workflows.webp";
import modelBenchmarkImg from "../../assets/fresh/ai_prototypes_pillar_model_benchmarks.webp";
import airGappedSandboxImg from "../../assets/fresh/ai_prototypes_pillar_air_gapped_sandboxes.webp";
import loanUnderwritingImg from "../../assets/fresh/ai_prototypes_frontier_loan_underwriting.webp";
import clinicalTrialsImg from "../../assets/fresh/ai_prototypes_frontier_clinical_trials.webp";
import kubernetesRemediationImg from "../../assets/fresh/ai_prototypes_frontier_kubernetes_remediation.webp";
import caseImg from "../../assets/fresh/ai_prototypes_case_study_financial_services.webp";

export const aiPrototypesData = {
  id: "ai-prototypes",
  category: "Innovation Lab",
  name: "AI Prototypes",
  tagline: "Rapid Sandbox Incubation, Interactive MVPs & Production-Grade PoC Acceleration",
  hero: {
    badge: "DEVOPS TRIO // RAPID SANDBOX",
    subBadge: "RAPID ITERATION & VALIDATION",
    titleLight: "Rapid Incubation &",
    titleBold: "AI Prototypes",
    description: "De-risking enterprise AI investment by building high-fidelity interactive prototypes with live model inference in under 14 days.",
    bgImage: heroBg,
    liveBadge: "Active Sandbox Cohort",
    primaryCtaText: "Explore Prototypes",
    secondaryCtaText: "View Case Study"
  },
  stats: [
    { value: "14 Days", label: "Concept-to-Working-MVP", sub: "Interactive full-stack prototype delivery" },
    { value: "PoC", label: "Production Transition Ready", sub: "Architected for scalable enterprise deployment" },
    { value: "SLM/LLM", label: "Multi-Model Bake-Offs", sub: "Side-by-side cost and latency evaluation" },
    { value: "Air-Gap", label: "Isolated Sandboxes", sub: "Zero enterprise data leakage" }
  ],
  pillars: [
    {
      id: "cognitive-mvp",
      tag: "FULL-STACK PROTOTYPING",
      title: "Interactive Cognitive Enterprise Sandboxes",
      description: "Building production-grade interactive React & Node web applications powered by custom fine-tuned models to demonstrate live user workflows.",
      image: cognitiveSandboxImg,
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
      image: multiAgentWorkflowImg,
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
      image: modelBenchmarkImg,
      highlights: [
        "Side-by-side output evaluation using automated LLM-as-a-judge",
        "Quantization stress-tests (FP8 vs INT4) measuring accuracy degradation",
        "Clear unit-economic projections modeling monthly API and GPU expenses"
      ]
    },
    {
      id: "air-gapped-sandbox",
      tag: "HIGH-ASSURANCE SECURITY",
      title: "Ephemeral Air-Gapped Validation Sandboxes",
      description: "Spinning up completely isolated, zero-egress VPC sandboxes where enterprise compliance officers can safely review prototype behaviour on real PII/HIPAA data.",
      image: airGappedSandboxImg,
      highlights: [
        "One-click teardown with cryptographic verification of data destruction",
        "Network-isolated model execution with local weight storage",
        "Automated compliance logs generated for enterprise audit teams"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "loan-underwriting",
      title: "Autonomous Commercial Loan Underwriting Copilot",
      tabLabel: "Loan Underwriting",
      category: "Fintech Prototype",
      badge: "Financial Copilot",
      image: loanUnderwritingImg,
      summary: "An interactive prototype extracting financial covenants and cash flow statements from 200+ page SEC 10-K filings, producing auditable credit memos in minutes.",
      features: [
        "Cross-checks balance sheets with deterministic Python calculation kernels",
        "Strict citation highlighting linking every insight to original PDF coordinates",
        "Interactive human credit committee review and signature approval workflow"
      ]
    },
    {
      id: "clinical-trials",
      title: "Multi-Modal Patient-Trial Matching Workbench",
      tabLabel: "Clinical Matching",
      category: "Healthcare Prototype",
      badge: "Clinical NLP",
      image: clinicalTrialsImg,
      summary: "Parses complex EHR oncology narratives and genomic biomarkers against 45,000 active ClinicalTrials.gov protocols with deterministic inclusion/exclusion logic.",
      features: [
        "Hybrid biomedical NER extracting TNM staging and mutation profiles",
        "Transparent eligibility justification trees for clinical review",
        "Full HIPAA-compliant local execution without external cloud calls"
      ]
    },
    {
      id: "k8s-remediation",
      title: "Autonomous Kubernetes CrashLoop Remediation Agent",
      tabLabel: "K8s Remediation",
      category: "DevOps Prototype",
      badge: "Infrastructure Agent",
      image: kubernetesRemediationImg,
      summary: "Inspects live Prometheus metrics, pod events, and stack traces to automatically formulate, test, and apply hotfix PRs for production crash loops.",
      features: [
        "Dry-run simulation cluster verifying hotfixes before production release",
        "Generates clean GitHub Pull Requests with root-cause postmortems",
        "Instant Slack notification with one-click engineer approval buttons"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Enterprise Prototype Acceleration",
    partner: "Tier-1 Global Financial Services Institution",
    title: "Autonomous Commercial Credit Underwriting Sandbox",
    description: "Built a fully functioning, air-gapped prototype in 14 days that automates complex SEC 10-K extraction, cash-flow reconciliation, and credit memo drafting.",
    image: caseImg,
    metrics: [
      { stat: "14 Days", label: "From blank canvas to working MVP" },
      { stat: "100%", label: "Auditable citation tracking" },
      { stat: "Air-Gapped", label: "Zero customer PII leakage" }
    ],
    highlights: [
      "Deterministic balance sheet reconciliation engine",
      "Interactive multi-model comparison matrix",
      "Executive sponsor demo with zero infrastructure lag"
    ],
    ctaText: "Request Prototype Brief",
    ctaHref: "https://devopstrio.co.uk/contact#contact-form"
  },
    publicationsState: {
    heading: "Publications & Research Notes",
    tag: "PUBLICATIONS & RESEARCH NOTES",
    body: "Our formal publication list will be added as papers are finalized and peer-reviewed. In the interim, foundational preprints and quarterly research dispatches are shared through our research insights feed.",
    buttonText: "Subscribe for Updates",
    buttonHref: "https://devopstrio.co.uk/insights",
    statusBadge: "Next Release: Q4 2026",
    statusNote: "Formal verification & mechanistic interpretability preprints currently in internal review."
  },
  howWeWork: {
    tag: "COLLABORATION MODEL",
    title: "From Concept to Prototype in 14 Days",
    steps: [
      {
        step: "01",
        name: "Discovery & Scope",
        desc: "Align on enterprise workflow, target user persona, and foundational models in 48 hours."
      },
      {
        step: "02",
        name: "Interactive Build",
        desc: "Develop full-stack web UI with live inference, synthetic test datasets, and audit logs."
      },
      {
        step: "03",
        name: "Executive Handoff",
        desc: "Demonstrate live prototype to stakeholders with full architecture code and ROI matrix."
      }
    ]
  },
  closingCta: {
    title: "Bring Your AI Concept to Life",
    description: "Our rapid prototyping lab turns complex enterprise AI concepts into working, production-grade prototypes in under two weeks.",
    primaryText: "Join Our Engineering Team",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Request a 14-Day Sandbox Sprint",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
