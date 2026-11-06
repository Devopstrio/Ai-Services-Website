export const HOME_FAQS = [
  {
    q: "How does Devopstrio AI integrate autonomous systems into existing enterprise infrastructure?",
    a: "We engineer modular AI architectures that deploy directly within your private cloud environment (AWS, Azure, GCP) or on-premise infrastructure. Using Zero-Trust identity boundaries, secure API gateways, and standardized containerized runtimes, our solutions interface seamlessly with your existing CI/CD pipelines, ERPs, and database clusters without requiring wholesale architectural rewrites.",
    proof: "Enterprise Architecture: VPC Private Deployment | SOC 2 & ISO 27001 Aligned",
    tags: ["Cloud Architecture", "Zero-Trust", "Multi-Cloud", "Integration"]
  },
  {
    q: "How do you protect proprietary business data from leaking into public model training datasets?",
    a: "We implement strict data sovereignty controls: zero-retention API contracts, self-hosted open-weights models (such as Llama and Mistral), and private tenant isolation. In-flight PII masking filters and custom guardrail middleware guarantee that sensitive enterprise IP remains strictly within your governed security perimeter and is never used to train public models.",
    proof: "Data Governance: Zero Retention Guarantee | Dedicated Private Enclaves",
    tags: ["Data Privacy", "Model Guardrails", "Data Sovereignty", "UK GDPR"]
  },
  {
    q: "Do you build hybrid AI architectures combining commercial and self-hosted models?",
    a: "Yes. We design intelligent multi-tier routing gateways that direct high-complexity reasoning tasks to frontier models (e.g. Claude 3.5, GPT-4o), while routing high-frequency, latency-sensitive, and data-sensitive queries to optimized open-source models hosted within your own cluster. This delivers an optimal balance of reasoning quality, data privacy, and cost efficiency.",
    proof: "Cost Optimization: Up to 50% Token Expenditure Reduction via Smart Routing",
    tags: ["Hybrid AI", "Intelligent Routing", "Open Weights", "Inference"]
  },
  {
    q: "How do you minimize hallucinations and ensure factual accuracy in enterprise AI outputs?",
    a: "We rely on grounded Retrieval-Augmented Generation (RAG) paired with multi-agent cross-validation. Every generated response is strictly attributed to verified internal enterprise knowledge sources, complete with traceable citation metadata. Deterministic evaluation layers intercept and filter outputs before they reach end users.",
    proof: "Quality Benchmark: Multi-Agent Cross-Verification & Citation Grounding",
    tags: ["Enterprise RAG", "Hallucination Defense", "Verification", "Accuracy"]
  },
  {
    q: "What is the typical timeframe for delivering a production-ready enterprise AI pilot?",
    a: "Following an initial discovery and architectural alignment sprint, our engineering teams typically deliver an end-to-end functional pilot within 4 to 6 weeks. We utilize modular, pre-tested engineering accelerators to avoid pilot stagnation and establish clear production readiness criteria from day one.",
    proof: "Delivery Cadence: 4 to 6 Week Production Pilot Velocity",
    tags: ["Agile Delivery", "Production Pilots", "Accelerators", "ROI"]
  },
  {
    q: "What ongoing management and site reliability engineering (SRE) support do you offer?",
    a: "Our Managed AI Services provide continuous cluster telemetry, proactive anomaly detection, automated model drift monitoring, security patch management, and SLA-backed engineering support. We act as an extension of your platform engineering team to ensure high availability and continuous operational stability.",
    proof: "Operational SLA: 24/7 Monitored Telemetry | SRE Runbook Automation",
    tags: ["Managed Services", "SRE", "Observability", "Drift Monitoring"]
  },
  {
    q: "How does Devopstrio assist with managing escalating cloud and GPU infrastructure spend?",
    a: "Through embedded FinOps practices, we analyze real-time GPU allocation, token consumption patterns, and query complexity. By introducing model quantization (FP8/INT4), continuous batching, and dynamic compute autoscaling, we help organizations eliminate idle cluster waste and substantially reduce ongoing cloud compute expenditure.",
    proof: "FinOps Benchmark: Dynamic GPU Allocation & Spot Instance Orchestration",
    tags: ["FinOps", "GPU Optimization", "Cost Control", "Quantization"]
  },
  {
    q: "How does intellectual property (IP) ownership work for models and code built during an engagement?",
    a: "100% of the custom code, fine-tuned model adapters, proprietary orchestration workflows, and pipeline configurations developed for your organization belong exclusively to your enterprise. Devopstrio retains zero claim over your proprietary business logic and client-specific IP.",
    proof: "Commercial Terms: 100% Client IP Ownership & Code Escrow",
    tags: ["IP Ownership", "Commercial Terms", "Transparency", "Client Governance"]
  }
];
