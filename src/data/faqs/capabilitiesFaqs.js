export const CAPABILITIES_OVERVIEW_FAQS = [
  {
    q: "What distinguishes Devopstrio's 16 core AI engineering capabilities?",
    a: "Our capabilities span the complete enterprise intelligence lifecycle: from foundational data engineering and high-density GPU infrastructure to custom generative models, autonomous multi-agent networks, computer vision, and strict responsible AI governance. Each capability is engineered for secure, enterprise-grade deployment rather than exploratory prototyping.",
    proof: "Core Breadth: 16 Specialized Disciplines Spanning Data, Models & Infrastructure",
    tags: ["Capabilities", "Full-Stack AI", "Enterprise Architecture"]
  },
  {
    q: "Can organizations engage Devopstrio for an individual capability or only full-suite programs?",
    a: "You can engage our teams for a single targeted discipline—such as high-performance GPU cluster orchestration or custom LLM fine-tuning—or partner with us across a comprehensive multi-capability digital transformation initiative.",
    proof: "Engagement Flexibility: Modular Single-Capability Sprints or End-to-End Delivery",
    tags: ["Modular Engagement", "Consulting", "Targeted Sprints"]
  },
  {
    q: "What foundational technologies and frameworks do your engineering teams deploy?",
    a: "We work with open standards and leading enterprise frameworks including PyTorch, vLLM, Hugging Face, LangChain, Ray, Triton Inference Server, Kafka, Snowflake, Databricks, Kubernetes, and major cloud hyperscalers (AWS, Azure, GCP).",
    proof: "Technology Stack: Open-Source Standards & Production Enterprise Frameworks",
    tags: ["PyTorch", "vLLM", "Kubernetes", "Snowflake", "Databricks"]
  },
  {
    q: "How does Devopstrio prevent enterprise vendor lock-in with proprietary AI platforms?",
    a: "We prioritize open-weights models (e.g. Llama, Mistral), containerized Kubernetes runtimes, and portable API gateways. This architectural independence ensures your models and data pipelines can transition between cloud providers or migrate on-premise without costly refactoring.",
    proof: "Architecture Principle: Vendor-Neutral Portability Across Multi-Cloud & On-Premise",
    tags: ["Vendor Neutrality", "Portability", "Open Weights", "Multi-Cloud"]
  },
  {
    q: "How do your capabilities accommodate sovereign and air-gapped environment requirements?",
    a: "All 16 capabilities can be packaged into self-contained, air-gapped container images deployed on on-premise hardware or sovereign clouds, operating with zero external outbound network dependencies.",
    proof: "Deployment Options: Fully Air-Gapped & Sovereign Cloud Container Packaging",
    tags: ["Air-Gapped", "Sovereign Cloud", "Defense Grade", "Data Isolation"]
  },
  {
    q: "How do you evaluate and benchmark model accuracy across specialized industry domains?",
    a: "We establish domain-specific golden evaluation datasets and automated LLM-as-a-judge pipelines that benchmark hallucination rates, semantic accuracy, and edge-case resilience prior to and continuously during production deployment.",
    proof: "Benchmarking Protocol: Domain-Specific Golden Datasets & Continuous LLM-as-a-Judge",
    tags: ["Benchmarking", "Evaluation", "Accuracy", "Quality Assurance"]
  },
  {
    q: "What security and governance standards apply across all capability implementations?",
    a: "Every implementation incorporates UK GDPR privacy controls, in-flight PII masking, cryptographic data encryption at rest (AES-256) and in transit (TLS 1.3), granular role-based access control, and complete audit logging.",
    proof: "Security Foundation: UK GDPR, TLS 1.3, AES-256 & Comprehensive Audit Logging",
    tags: ["Security", "UK GDPR", "Audit Logging", "Encryption"]
  },
  {
    q: "How does Devopstrio facilitate internal capability transfer to client engineering teams?",
    a: "We conduct structured sprint handoffs, paired engineering sessions, code walkthroughs, and deliver comprehensive operational runbooks, ensuring your internal teams develop the skills and confidence to operate and evolve the platform.",
    proof: "Enablement Framework: Paired Engineering, Runbook Delivery & Technical Enablement",
    tags: ["Enablement", "Pair Programming", "Knowledge Transfer", "Runbooks"]
  }
];

export const CAPABILITY_DETAIL_FAQS = {
  "generative-ai": [
    {
      q: "How does Devopstrio fine-tune open-weights models for proprietary enterprise domains?",
      a: "We employ parameter-efficient fine-tuning (PEFT/LoRA/QLoRA) on curated private enterprise datasets inside your dedicated VPC. This adapts the model's vocabulary, industry compliance awareness, and output schemas while preserving core reasoning abilities and safeguarding your IP.",
      proof: "Fine-Tuning Architecture: PEFT / LoRA / QLoRA inside Private Client Enclaves",
      tags: ["Generative AI", "LoRA", "Fine-Tuning", "Private LLM"]
    },
    {
      q: "What foundation models can be deployed within enterprise environments?",
      a: "We deploy and fine-tune open-weights models (including Llama 3, Mistral, and DeepSeek) alongside secure enterprise integrations with commercial APIs (Anthropic Claude, OpenAI, Google Gemini) governed by zero-retention contracts.",
      proof: "Model Flexibility: Open-Weights (Llama, Mistral) & Commercial APIs (Claude, GPT)",
      tags: ["Llama", "Mistral", "Claude", "Open-Weights", "APIs"]
    },
    {
      q: "How do you optimize generative AI inference latency for interactive applications?",
      a: "We utilize modern serving engines (such as vLLM and TensorRT-LLM) with continuous batching, PagedAttention, and FP8 quantization to achieve responsive time-to-first-token (TTFT) performance on cost-effective GPU clusters.",
      proof: "Latency Engineering: vLLM PagedAttention & FP8 Quantization Acceleration",
      tags: ["vLLM", "TensorRT-LLM", "PagedAttention", "Latency"]
    },
    {
      q: "Can custom generative models run in air-gapped environments without public cloud access?",
      a: "Yes. Self-contained model containers and local inference runtimes deploy onto on-premise GPU clusters with zero external internet dependencies, satisfying sovereign defense and regulated banking requirements.",
      proof: "Deployment Security: Disconnected On-Premise GPU Container Deployment",
      tags: ["Air-Gapped", "On-Premise", "GPU Clusters", "Sovereignty"]
    },
    {
      q: "How do you systematically monitor and eliminate model hallucinations?",
      a: "We integrate grounded Retrieval-Augmented Generation (RAG), strict input/output guardrails, and automated semantic verification checks that validate model claims against verified source documents before response delivery.",
      proof: "Reliability Strategy: Grounded RAG & Semantic Output Guardrails",
      tags: ["Hallucinations", "RAG", "Guardrails", "Verification"]
    },
    {
      q: "How do self-hosted open-weights models compare commercially to per-token APIs?",
      a: "For high-volume production use cases, hosting fine-tuned open-source models on dedicated GPU instances frequently delivers substantial unit-cost savings compared to recurring commercial API per-token fees, while securing data sovereignty.",
      proof: "Economic Model: Dedicated Compute Unit Savings for High-Volume Inference",
      tags: ["Unit Economics", "Token Costs", "Self-Hosting", "FinOps"]
    },
    {
      q: "How do you manage prompt template versioning and regression testing?",
      a: "We treat prompts as code: utilizing version-controlled repositories, automated regression test suites, and dynamic context injection pipelines to ensure template modifications do not introduce output regressions.",
      proof: "Engineering Rigour: Git-Controlled Prompt Versioning & Regression Test Suites",
      tags: ["Prompt Engineering", "CI/CD", "Regression Testing", "GitOps"]
    },
    {
      q: "Can generative AI generate structured code and validated SQL for internal systems?",
      a: "Yes. We engineer domain-specialized code-generation models that generate structured SQL, Python, or infrastructure manifests validated against your internal database schemas and static analysis linters before execution.",
      proof: "Code Generation: Schema-Validated SQL & Linter-Checked Code Synthesis",
      tags: ["Code Generation", "Text-to-SQL", "Schema Validation", "Developer Tooling"]
    }
  ],
  "ai-agents": [
    {
      q: "What software architectures does Devopstrio use to build autonomous agent swarms?",
      a: "We build on modular, event-driven frameworks including LangGraph, AutoGen, CrewAI, and custom Python microservices. Agents communicate using structured JSON message buses and coordinate through durable shared-state graphs.",
      proof: "Architecture Stack: LangGraph, AutoGen, CrewAI & Event-Driven Microservices",
      tags: ["AI Agents", "Agent Swarms", "LangGraph", "Event-Driven"]
    },
    {
      q: "How do autonomous agents authenticate and invoke tools securely?",
      a: "Each agent operates within an isolated sandbox environment using scoped OAuth2 service principals and short-lived IAM credentials. Fine-grained permission boundaries restrict tool calls to pre-approved API endpoints.",
      proof: "Security Boundary: Sandboxed Execution & Scoped Least-Privilege IAM Credentials",
      tags: ["Tool Calling", "Sandboxing", "OAuth2", "Least Privilege"]
    },
    {
      q: "How do you prevent cascading errors and runaway execution loops in agent workflows?",
      a: "We implement deterministic recursion limits, maximum token budgets, execution timeouts, and dedicated verification agent nodes that evaluate intermediate step outputs before subsequent tasks proceed.",
      proof: "Execution Safety: Deterministic Recursion Limits & Multi-Agent Verification",
      tags: ["Loop Prevention", "Verification", "Safety", "Execution Limits"]
    },
    {
      q: "Can agents execute long-running asynchronous workflows spanning days?",
      a: "Yes. By integrating durable execution platforms (e.g. Temporal), agent state, task histories, and tool results persist reliably across server restarts, network interruptions, and human review pauses.",
      proof: "Durable State: Temporal-Backed State Persistence for Long-Running Tasks",
      tags: ["Temporal", "Durable State", "Asynchronous Tasks", "Resilience"]
    },
    {
      q: "How are human-in-the-loop review checkpoints incorporated into agent operations?",
      a: "Configurable approval nodes pause execution for high-impact actions (e.g. financial transfers, production deployments, customer communications), alerting human operators via Slack, Teams, or email for one-click authorization.",
      proof: "Governance Control: Configurable Human Approval Breakpoints for High-Risk Actions",
      tags: ["Human-in-the-Loop", "Governance", "Approval Gateways", "Slack/Teams"]
    },
    {
      q: "How is agent decision reasoning audited and recorded?",
      a: "Every reasoning trace, input context, tool invocation parameter, and output response is recorded in an immutable, structured JSON audit log, providing complete visibility for compliance and post-hoc diagnostics.",
      proof: "Auditability: Immutable Trace Logging of Reasoning, Tools & Output Payloads",
      tags: ["Audit Logging", "Explainability", "Tracing", "Compliance"]
    },
    {
      q: "Can agents safely generate and run their own code within an enterprise environment?",
      a: "Yes. When code synthesis is required, execution occurs within ephemeral, resource-constrained container sandboxes (e.g. gVisor or Docker) completely isolated from the host enterprise filesystem and network.",
      proof: "Code Isolation: Ephemeral gVisor Container Sandboxing with Zero Host Access",
      tags: ["Code Execution", "gVisor", "Container Isolation", "Security"]
    },
    {
      q: "What business domains experience the fastest ROI from autonomous agents?",
      a: "High-volume operational domains—such as accounts reconciliation, automated IT incident resolution, legal contract review, and customer tier-1 triage—typically demonstrate rapid operational return on investment.",
      proof: "ROI Domains: Financial Reconciliation, IT SRE, Legal Triage & Tier-1 Support",
      tags: ["ROI", "Business Operations", "Finance", "IT Operations"]
    }
  ]
};

export function getCapabilityFaqs(serviceId) {
  if (serviceId && CAPABILITY_DETAIL_FAQS[serviceId]) {
    return CAPABILITY_DETAIL_FAQS[serviceId];
  }
  // Universal high-quality enterprise capability fallback (8 FAQs)
  return [
    {
      q: "How does this capability integrate into our existing enterprise environment?",
      a: "We architect this capability to deploy natively within your private enterprise perimeter (AWS, Azure, GCP) or on-premise infrastructure. Using Zero-Trust identity boundaries, secure API gateways, and standardized container runtimes, it connects cleanly to your existing core platforms without disruptive migrations.",
      proof: "Enterprise Architecture: VPC Private Deployment | SOC 2 & ISO 27001 Aligned",
      tags: ["Integration", "Cloud Architecture", "Zero-Trust", "Security"]
    },
    {
      q: "How do you protect sensitive enterprise data and maintain compliance?",
      a: "Data protection is enforced at every layer: in-flight PII masking, end-to-end TLS 1.3 encryption, customer-managed encryption keys (CMEK), and granular role-based access control (RBAC). The architecture adheres to UK GDPR, SOC 2, and relevant industry regulations.",
      proof: "Data Governance: Private Enclaves & UK GDPR Audit-Ready Runbooks",
      tags: ["Data Privacy", "UK GDPR", "CMEK", "Access Control"]
    },
    {
      q: "What is the typical timeline from architecture discovery to production pilot?",
      a: "Following initial architectural alignment and data schema validation, our engineering teams typically deploy a functional production pilot within 4 to 6 weeks, building on pre-tested modular accelerators to ensure rapid time-to-value.",
      proof: "Delivery Cadence: 4 to 6 Week Production Pilot Velocity",
      tags: ["Delivery Timeline", "Agile Pilot", "Accelerators", "ROI"]
    },
    {
      q: "How do you ensure factual accuracy and prevent hallucinations in automated outputs?",
      a: "We implement grounded Retrieval-Augmented Generation (RAG) paired with multi-agent cross-verification. Automated outputs are directly linked to verified enterprise source documents with full citation lineage, and deterministic safety filters intercept uncertain responses.",
      proof: "Accuracy Verification: Grounded RAG with Direct Citation Footnotes",
      tags: ["Accuracy", "Grounded RAG", "Verification", "Quality Control"]
    },
    {
      q: "Can internal teams operate this capability independently after deployment?",
      a: "Yes. Every engagement concludes with structured engineering handoffs, pair programming walkthroughs, and comprehensive runbook documentation. Clients can choose full internal operation or engage our 24/7 Managed Services for ongoing telemetry and maintenance.",
      proof: "Knowledge Transfer: Comprehensive Runbooks & Structured Handoffs",
      tags: ["Knowledge Transfer", "Enablement", "Runbooks", "Independence"]
    },
    {
      q: "How does intellectual property (IP) ownership work for this engagement?",
      a: "100% of custom code, fine-tuned model weights, proprietary orchestration workflows, and pipeline configurations developed for your organization belong exclusively to your enterprise. Devopstrio retains zero claim over your proprietary business logic.",
      proof: "Commercial Terms: 100% Client IP Ownership & Code Escrow",
      tags: ["IP Ownership", "Commercial Terms", "Transparency", "Client Governance"]
    },
    {
      q: "How do you monitor and optimize cloud compute and inference costs?",
      a: "Through embedded FinOps practices, we monitor real-time token utilization, query routing efficiency, and compute allocation. Model quantization, continuous batching, and intelligent model routing are applied to minimize ongoing operational expenses.",
      proof: "FinOps Benchmark: Dynamic Compute Allocation & Smart Query Routing",
      tags: ["FinOps", "Cost Control", "Optimization", "Efficiency"]
    },
    {
      q: "What ongoing managed support options are available?",
      a: "We offer tailored service level agreements (SLAs) supporting 24/7/365 infrastructure telemetry, proactive anomaly alerting, automated model drift retraining, security patch management, and dedicated tier-3 platform engineering support.",
      proof: "Support SLA: Tailored Availability & Dedicated Platform Engineering Support",
      tags: ["Managed Services", "SLA", "24/7 Support", "Maintenance"]
    }
  ];
}
