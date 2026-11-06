export const AGENTS_OVERVIEW_FAQS = [
  {
    q: "What defines an autonomous AI agent within Devopstrio's ecosystem?",
    a: "Our autonomous agents are goal-directed software entities capable of multi-step reasoning, independent tool calling via secure APIs, shared state management, and continuous self-correction to complete complex workflows without requiring line-by-line manual prompts.",
    proof: "Agent Framework: Goal-Directed Execution & Autonomous API Tool Invocation",
    tags: ["Autonomous Agents", "Tool Calling", "Multi-Step Reasoning", "LangGraph"]
  },
  {
    q: "How do multiple specialized agents coordinate within a swarm?",
    a: "An Orchestrator Agent decomposes high-level business goals into discrete tasks, delegating them to specialized domain agents (such as Coder, Researcher, Auditor). The agents exchange structured JSON messages over an event bus and coordinate through a shared state graph.",
    proof: "Swarm Coordination: Event-Driven JSON Bus & Shared State Memory Graphs",
    tags: ["Agent Swarms", "Orchestration", "State Management", "JSON Bus"]
  },
  {
    q: "How do you enforce security and prevent agents from executing unauthorized actions?",
    a: "Agents operate within isolated sandboxes utilizing short-lived IAM credentials with strict least-privilege scoping. Critical, high-impact actions (e.g. database deletions, financial disbursements) require cryptographic human sign-off before execution.",
    proof: "Security Model: Scoped Least-Privilege IAM & Sandboxed Container Execution",
    tags: ["Zero-Trust", "Least Privilege", "IAM", "Sandboxing", "Security"]
  },
  {
    q: "How do agents maintain state and memory across long-running enterprise workflows?",
    a: "We integrate durable execution platforms (e.g. Temporal) paired with persistent vector and relational memory graphs. This enables agents to resume tasks seamlessly after server restarts, network interruptions, or human review delays.",
    proof: "Durable State: Temporal-Backed Persistence for Multi-Day Workflows",
    tags: ["Temporal", "Durable State", "Episodic Memory", "Resilience"]
  },
  {
    q: "How do you prevent hallucinations and cascading errors across agent steps?",
    a: "Dedicated Verification and Critic agent nodes evaluate intermediate outputs against domain constraints before allowing subsequent agents to proceed, triggering recursive correction loops if discrepancies are detected.",
    proof: "Error Prevention: Critic Nodes & Automated Recursive Self-Correction Loops",
    tags: ["Hallucinations", "Verification", "Error Handling", "Quality Assurance"]
  },
  {
    q: "What enterprise tools and APIs can Devopstrio agents interact with?",
    a: "Our agents leverage OpenAPI specifications to securely invoke tools across Jira, ServiceNow, GitHub, Slack, SAP, Salesforce, Snowflake, and internal microservice APIs.",
    proof: "Tool Integration: OpenAPI & REST Connectors across Core Enterprise SaaS",
    tags: ["OpenAPI", "Jira", "ServiceNow", "Salesforce", "GitHub"]
  },
  {
    q: "How is agent activity audited for compliance and regulatory reporting?",
    a: "Every reasoning step, context input, tool execution payload, and output response is recorded in an immutable, timestamped JSON audit ledger, satisfying enterprise compliance standards.",
    proof: "Auditability: Immutable Trace Logging of Reasoning, Tools & Output Payloads",
    tags: ["Audit Logging", "Compliance", "Observability", "Explainability"]
  },
  {
    q: "What is the typical deployment timeline for an autonomous agent swarm?",
    a: "Following initial toolchain connection and policy alignment, a functional multi-agent pilot typically deploys into staging within 3 to 5 weeks.",
    proof: "Deployment Velocity: 3 to 5 Week Pilot-to-Staging Timeline",
    tags: ["Pilot Timeline", "Agile Deployment", "Production Readiness"]
  }
];

export function getAgentFaqs(agentId, agentName) {
  return [
    {
      q: `How does the ${agentName || "agent"} operate safely within our enterprise infrastructure?`,
      a: `The agent deploys directly within your private enterprise perimeter (AWS, Azure, GCP) or on-premise infrastructure. Using Zero-Trust identity boundaries, secure API gateways, and standardized container runtimes, it connects cleanly to your existing core platforms without disruptive migrations.`,
      proof: "Enterprise Architecture: VPC Private Deployment | SOC 2 & ISO 27001 Aligned",
      tags: ["Integration", "Cloud Architecture", "Zero-Trust", "Security"]
    },
    {
      q: `How does the ${agentName || "agent"} protect sensitive enterprise data and maintain compliance?`,
      a: `Data protection is enforced at every layer: in-flight PII masking, end-to-end TLS 1.3 encryption, customer-managed encryption keys (CMEK), and granular role-based access control (RBAC). The architecture adheres to UK GDPR, SOC 2, and relevant industry regulations.`,
      proof: "Data Governance: Private Enclaves & UK GDPR Audit-Ready Runbooks",
      tags: ["Data Privacy", "UK GDPR", "CMEK", "Access Control"]
    },
    {
      q: `What is the typical deployment timeline for the ${agentName || "agent"}?`,
      a: `Following initial architectural alignment and data schema validation, our engineering teams typically deploy a functional production pilot within 4 to 6 weeks, building on pre-tested modular accelerators to ensure rapid time-to-value.`,
      proof: "Delivery Cadence: 4 to 6 Week Production Pilot Velocity",
      tags: ["Delivery Timeline", "Agile Pilot", "Accelerators", "ROI"]
    },
    {
      q: `How do you ensure factual accuracy and prevent hallucinations in the ${agentName || "agent"}'s actions?`,
      a: `We implement grounded Retrieval-Augmented Generation (RAG) paired with multi-agent cross-verification. Automated outputs are directly linked to verified enterprise source documents with full citation lineage, and deterministic safety filters intercept uncertain responses.`,
      proof: "Accuracy Verification: Grounded RAG with Direct Citation Footnotes",
      tags: ["Accuracy", "Grounded RAG", "Verification", "Quality Control"]
    },
    {
      q: `Can internal teams operate and adjust the ${agentName || "agent"} independently after deployment?`,
      a: `Yes. Every engagement concludes with structured engineering handoffs, pair programming walkthroughs, and comprehensive runbook documentation. Clients can choose full internal operation or engage our 24/7 Managed Services for ongoing telemetry and maintenance.`,
      proof: "Knowledge Transfer: Comprehensive Runbooks & Structured Handoffs",
      tags: ["Knowledge Transfer", "Enablement", "Runbooks", "Independence"]
    },
    {
      q: `How does intellectual property (IP) ownership work for custom agent workflows?`,
      a: `100% of custom code, fine-tuned model weights, proprietary orchestration workflows, and pipeline configurations developed for your organization belong exclusively to your enterprise. Devopstrio retains zero claim over your proprietary business logic.`,
      proof: "Commercial Terms: 100% Client IP Ownership & Code Escrow",
      tags: ["IP Ownership", "Commercial Terms", "Transparency", "Client Governance"]
    },
    {
      q: `How do you monitor and optimize compute and inference costs for the ${agentName || "agent"}?`,
      a: `Through embedded FinOps practices, we monitor real-time token utilization, query routing efficiency, and compute allocation. Model quantization, continuous batching, and intelligent model routing are applied to minimize ongoing operational expenses.`,
      proof: "FinOps Benchmark: Dynamic Compute Allocation & Smart Query Routing",
      tags: ["FinOps", "Cost Control", "Optimization", "Efficiency"]
    },
    {
      q: `What ongoing managed support options are available for the ${agentName || "agent"}?`,
      a: `We offer tailored service level agreements (SLAs) supporting 24/7/365 infrastructure telemetry, proactive anomaly alerting, automated model drift retraining, security patch management, and dedicated tier-3 platform engineering support.`,
      proof: "Support SLA: Tailored Availability & Dedicated Platform Engineering Support",
      tags: ["Managed Services", "SLA", "24/7 Support", "Maintenance"]
    }
  ];
}
