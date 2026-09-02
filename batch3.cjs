const fs = require('fs');

const infraData = `const aiInfra = {
  id: "ai-infrastructure",
  breadcrumbs: ["AI Capabilities", "AI Infrastructure & MLOps"],
  hero: {
    titleLight: "AI Infrastructure",
    titleBold: "& MLOps",
    description: "Scale your AI from prototype to production. We build the high-performance computing clusters and automated deployment pipelines required to run AI at an enterprise scale.",
  },
  inAction: {
    headingLight: "Build for",
    headingRed: "Scale",
    paragraph: "A model on a laptop is a toy. A model in production requires massive compute, rigorous monitoring, and automated retraining pipelines. DevOpsTRIO engineers cloud-native AI infrastructure utilizing Kubernetes, GPU clustering, and advanced MLOps tools. We optimize for high availability and low inference latency while keeping your cloud compute costs strictly under control.",
    buttonText: "Scale Your AI",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "40%", label: "Cloud Cost Reduction", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Downtime Deployments", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "99.99%", label: "API Uptime", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Automated", label: "Model Retraining", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Infrastructure",
    titleRed: "Challenges",
    items: [
      { title: "Runaway Cloud Costs", desc: "We implement dynamic batching and right-sized GPU provisioning to slash monthly inference bills.", icon: "database" },
      { title: "Model Degradation", desc: "Models drift over time. We build automated pipelines that detect drift and trigger retraining seamlessly.", icon: "cpu" },
      { title: "Deployment Bottlenecks", desc: "Move from deploying a model once a month to deploying multiple times a day with automated testing.", icon: "users" }
    ]
  },
  benefits: {
    titleLight: "The MLOps",
    titleRed: "Advantage",
    items: [
      { title: "Continuous Delivery", desc: "Apply software engineering best practices to machine learning. Version, test, and deploy models automatically.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Cost Optimization", desc: "Stop over-provisioning expensive A100 GPUs. We scale compute down to zero when not in use.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Total Observability", desc: "Monitor memory usage, inference latency, and data drift in real-time through centralized dashboards.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Infrastructure",
    titleRed: "Capabilities",
    items: [
      { badge: "COMPUTE", title: "GPU Cluster Management", body: "Deploy and manage massive distributed training clusters across AWS, GCP, or Azure.", more: "We utilize Kubernetes, Ray, and Slurm to orchestrate multi-node GPU workloads efficiently.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SERVING", title: "High-Performance Serving", body: "Expose models via ultra-low latency endpoints using Triton, vLLM, or TensorFlow Serving.", more: "We implement continuous batching and KV-cache management to maximize throughput on language models.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PIPELINES", title: "Automated ML Pipelines", body: "Build DAGs (Directed Acyclic Graphs) to automate data extraction, training, and deployment.", more: "Utilize tools like Kubeflow, MLflow, and Apache Airflow to remove human error from model updates.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MONITORING", title: "Model Observability", body: "Track statistical data drift, concept drift, and performance degradation in production.", more: "Alert data scientists immediately if the distribution of incoming data shifts away from the training baseline.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "EDGE", title: "Edge Deployment (AIoT)", body: "Compress and quantize models to run on low-power devices like cameras or factory sensors.", more: "We use TensorRT and ONNX to shrink model size by 80% without sacrificing accuracy.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "IAC", title: "Infrastructure as Code", body: "Provision your entire AI stack via Terraform and Ansible for reproducible environments.", more: "Spin up identical staging, QA, and production AI environments in minutes, perfectly configured.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "MLOps",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Slashing LLM Inference Costs by 60%", desc: "How we migrated a SaaS platform from OpenAI to self-hosted vLLM instances.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The DevOpsTRIO Guide to Kubeflow", desc: "Best practices for orchestrating machine learning workflows on Kubernetes.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Detecting Data Drift in Production", desc: "Statistical methods for monitoring model accuracy when ground truth is delayed.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Quantization and Edge AI", desc: "How to fit a 7B parameter LLM onto a standard commercial laptop.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Zero-Downtime Deployments", desc: "Implementing shadow deployments and A/B testing for a critical fraud model.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Buy vs Build Dilemma", desc: "When to use managed SageMaker/Vertex AI versus rolling your own Kubernetes stack.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiInfra;`;

const respAiData = `const responsibleAi = {
  id: "responsible-ai",
  breadcrumbs: ["AI Capabilities", "Responsible AI & Governance"],
  hero: {
    titleLight: "Responsible AI",
    titleBold: "& Governance",
    description: "Innovate without the risk. We implement strict governance frameworks, bias detection, and ethical guardrails to ensure your AI systems are fair, secure, and compliant.",
  },
  inAction: {
    headingLight: "Trust in",
    headingRed: "Intelligence",
    paragraph: "AI can inadvertently amplify bias, leak private data, or hallucinate harmful information. DevOpsTRIO engineers Responsible AI frameworks that act as the safety net for your innovation. We audit models for fairness, implement deterministic output guardrails, and ensure compliance with global regulations like the EU AI Act—protecting both your users and your brand reputation.",
    buttonText: "Audit Your AI",
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "100%", label: "GDPR Compliant", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "Automated", label: "Bias Detection", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Data Leakage", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "SOC2", label: "Certified Pipelines", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Governance",
    titleRed: "Use Cases",
    items: [
      { title: "Financial Services", desc: "Ensuring credit-scoring algorithms do not discriminate based on protected demographics.", icon: "database" },
      { title: "Healthcare", desc: "De-identifying patient data and ensuring diagnostic models provide explainable outputs.", icon: "cpu" },
      { title: "Human Resources", desc: "Auditing automated resume-screening tools to guarantee fair and unbiased hiring practices.", icon: "users" }
    ]
  },
  benefits: {
    titleLight: "Why Governance",
    titleRed: "Matters",
    items: [
      { title: "Regulatory Compliance", desc: "Stay ahead of the EU AI Act and state-level privacy laws with built-in audit trails and transparency.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Brand Protection", desc: "Prevent catastrophic PR incidents caused by rogue chatbots or discriminatory automated decisions.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "User Trust", desc: "Customers are more likely to engage with AI features when they know their data is secure and the AI is unbiased.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Governance",
    titleRed: "Capabilities",
    items: [
      { badge: "FAIRNESS", title: "Bias Detection & Mitigation", body: "Statistically analyze training data and model outputs to identify and correct demographic biases.", more: "We utilize tools like IBM AI Fairness 360 to ensure your models treat all users equitably.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PRIVACY", title: "Data Anonymization", body: "Automatically scrub Personally Identifiable Information (PII) before it enters a training pipeline or LLM.", more: "Implement robust NER models that replace names, SSNs, and addresses with synthetic placeholders.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "EXPLAINABILITY", title: "Explainable AI (XAI)", body: "Generate human-readable explanations for why an AI model made a specific decision.", more: "Crucial for highly regulated industries where 'black box' algorithms are legally prohibited.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GUARDRAILS", title: "Input/Output Guardrails", body: "Place deterministic filters around LLMs to prevent prompt injection and toxic outputs.", more: "We deploy NeMo Guardrails to ensure conversational AI strictly adheres to corporate policy.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SECURITY", title: "Adversarial Defense", body: "Harden models against adversarial attacks that attempt to manipulate or extract data.", more: "We conduct AI red-teaming to discover vulnerabilities before malicious actors do.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "AUDIT", title: "Model Lineage & Auditing", body: "Maintain a cryptographic ledger of exactly which data was used to train which version of a model.", more: "Easily comply with 'Right to be Forgotten' requests by quickly identifying and retraining affected models.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Governance",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Auditing a National Bank's AI", desc: "How we identified and mitigated historical bias in an automated mortgage approval system.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Preparing for the EU AI Act", desc: "A practical checklist for classifying risk levels and ensuring compliance.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Red-Teaming Large Language Models", desc: "Techniques for discovering prompt injection vulnerabilities before launch.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Implementing NeMo Guardrails", desc: "How to use Nvidia's open-source tool to force LLMs to stay on topic.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Securing Healthcare Chatbots", desc: "Automated PII scrubbing for an AI symptom checker.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Cost of AI Bias", desc: "Why investing in fairness and governance upfront is cheaper than settling lawsuits.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default responsibleAi;`;

const strategyData = `const aiStrategy = {
  id: "ai-strategy",
  breadcrumbs: ["AI Capabilities", "AI Strategy & Consulting"],
  hero: {
    titleLight: "AI Strategy",
    titleBold: "& Consulting",
    description: "Navigate the AI revolution with clarity. We help enterprise leaders identify high-ROI use cases, assess technical readiness, and build a roadmap for autonomous transformation.",
  },
  inAction: {
    headingLight: "From Hype to",
    headingRed: "Execution",
    paragraph: "Every company wants to 'use AI,' but very few know where to start. DevOpsTRIO's strategic consultants bridge the gap between business objectives and deep technical execution. We don't just deliver slide decks; we audit your data architecture, prototype use cases, and deliver a concrete, phased roadmap to integrate AI into your core business model.",
    buttonText: "Schedule a Workshop",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "30 Days", label: "To First Prototype", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "100+", label: "Use Cases Evaluated", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "Clear", label: "ROI Projections", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Executive", label: "Alignment", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Strategic",
    titleRed: "Partnerships",
    items: [
      { title: "C-Suite & Boards", desc: "Align executive leadership on the realistic capabilities, timelines, and budgets required for AI.", icon: "users" },
      { title: "IT & Architecture", desc: "Assess current infrastructure readiness and design the modern data stack needed to support AI.", icon: "cpu" },
      { title: "Product & Innovation", desc: "Identify features within your existing SaaS products that can be drastically improved with LLMs.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "The Consulting",
    titleRed: "Advantage",
    items: [
      { title: "Avoid Expensive Mistakes", desc: "Stop investing in 'cool' AI projects that don't solve real business problems. We focus strictly on measurable ROI.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Data Reality Check", desc: "We audit your data silos to tell you exactly what needs to be cleaned and structured before AI is even possible.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Build vs. Buy Analysis", desc: "Unbiased recommendations on when to use off-the-shelf SaaS versus building custom, proprietary models.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Consulting",
    titleRed: "Offerings",
    items: [
      { badge: "WORKSHOP", title: "Discovery Workshops", body: "Interactive sessions with key stakeholders to demystify AI and brainstorm practical use cases for your industry.", more: "We align your team's understanding of what AI can (and cannot) do today.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "ASSESSMENT", title: "Readiness Assessment", body: "A deep dive into your data architecture, security posture, and talent pool to evaluate your ability to execute AI.", more: "Deliverable includes a gap-analysis report highlighting exact technical blockers.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "ROADMAP", title: "Strategic Roadmapping", body: "Develop a phased, 12-24 month plan prioritizing use cases by complexity and expected ROI.", more: "Ensures you secure early wins to build momentum before tackling massive transformations.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PROTOTYPE", title: "Rapid Prototyping", body: "Don't wait months. We build a functional Proof-of-Concept (PoC) in 4-6 weeks to validate the strategy.", more: "Prove the technical feasibility and business value before committing massive budget.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "TALENT", title: "Center of Excellence", body: "Help establishing an internal AI CoE, defining governance, roles, and hiring strategies for your enterprise.", more: "We transition our knowledge to your internal teams so you can sustain innovation independently.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VENDOR", title: "Vendor Selection", body: "Unbiased technical evaluations of third-party AI tools and cloud providers.", more: "We cut through marketing hype to tell you which vendor actually fits your technical constraints.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Strategic",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Transforming a 100-Year-Old Manufacturer", desc: "How we mapped a 3-year AI roadmap from legacy systems to predictive maintenance.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The AI Readiness Framework", desc: "How to assess your data, culture, and infrastructure before buying an LLM.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Prioritizing Use Cases", desc: "A matrix for evaluating AI projects based on Business Value vs. Technical Complexity.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Building an AI Center of Excellence", desc: "Structuring internal teams to scale AI securely across a global enterprise.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Failed AI Projects", desc: "Post-mortems of common AI mistakes and how strategic planning avoids them.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The GenAI ROI Timeline", desc: "Realistic expectations for when your AI investments will actually hit the bottom line.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiStrategy;`;

const innovationData = `const aiInnovationLab = {
  id: "ai-innovation-lab",
  breadcrumbs: ["AI Capabilities", "AI Innovation Lab"],
  hero: {
    titleLight: "AI Innovation",
    titleBold: "Lab",
    description: "Your dedicated R&D partner. We co-create moonshot AI concepts, rapidly prototype bleeding-edge technologies, and turn wild ideas into production-ready software.",
  },
  inAction: {
    headingLight: "Explore the",
    headingRed: "Bleeding Edge",
    paragraph: "Enterprises often struggle to innovate because day-to-day operations consume all their engineering resources. DevOpsTRIO's AI Innovation Lab acts as your external R&D department. We partner with forward-thinking organizations to experiment with unproven technologies—like multi-agent frameworks, neuro-symbolic AI, and spatial computing—building rapid prototypes to test viability before you commit to massive investments.",
    buttonText: "Pitch an Idea",
    imageSrc: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "4 Weeks", label: "To Minimum Viable Prototype", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "Co-Creation", label: "Shared IP Models", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "PhD", label: "Research Scientists", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "100%", label: "Experimental Freedom", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Innovation",
    titleRed: "Partners",
    items: [
      { title: "Startups & Scaleups", desc: "Accelerate your product roadmap by offloading complex AI feature development to our specialized lab.", icon: "cpu" },
      { title: "Enterprise R&D", desc: "Partner with our PhDs to explore applications of generative AI that your internal teams don't have time to research.", icon: "users" },
      { title: "Venture Capital", desc: "Technical due diligence and rapid prototyping for portfolio companies exploring AI pivots.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "Why Co-Create",
    titleRed: "With Us?",
    items: [
      { title: "Speed to Validation", desc: "Don't spend a year building something nobody wants. We build functional prototypes in weeks to test with real users.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "De-Risk Investment", desc: "Fail fast and fail cheap. Test high-risk, high-reward concepts without disrupting your core engineering teams.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Access to Rare Talent", desc: "Gain immediate access to AI researchers and engineers who specialize in technologies released just weeks ago.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Lab",
    titleRed: "Offerings",
    items: [
      { badge: "IDEATION", title: "Design Thinking Workshops", body: "Collaborative sessions to brainstorm impossible ideas and sketch out how AI could solve them.", more: "We combine your deep domain expertise with our knowledge of what's technically possible today.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PROTOTYPING", title: "Rapid PoC Development", body: "We take an idea from a whiteboard to a clickable, AI-powered prototype in 4 to 6 weeks.", more: "Perfect for testing user interfaces, proving technical viability, or securing stakeholder funding.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RESEARCH", title: "Applied AI Research", body: "Tackling unsolved problems. We review academic papers and adapt theoretical models for commercial use.", more: "From experimenting with novel attention mechanisms to exploring quantum machine learning concepts.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HACKATHONS", title: "Corporate Hackathons", body: "We organize and run intensive 48-hour AI hackathons for your employees to spark internal innovation.", more: "We provide the APIs, the cloud environments, and the mentorship; your team provides the domain problems.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PILOTS", title: "Production Pilots", body: "Scale a successful prototype into a secure, limited-release pilot for a subset of your users.", more: "We handle the MLOps and infrastructure needed to test the concept in the real world securely.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "INCUBATION", title: "Venture Incubation", body: "Co-investing in spin-off products. We provide the technical equity to build the product while you run the business.", more: "Shared risk and shared reward for truly disruptive industry solutions.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Lab",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "From Concept to Series A", desc: "How our Lab built the core generative AI engine for a legal-tech startup in 8 weeks.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The Rapid Prototyping Playbook", desc: "Methodologies for validating AI ideas without writing production code.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Exploring Neuro-Symbolic AI", desc: "Combining deep learning with rules-based logic for perfect mathematical reasoning.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Structuring Shared IP Agreements", desc: "Legal and strategic frameworks for co-creating software with an innovation lab.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "AI in Spatial Computing", desc: "Prototyping computer vision applications for augmented reality headsets.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The State of AI Research 2026", desc: "A summary of the most disruptive academic papers released this year.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiInnovationLab;`;


fs.writeFileSync('src/data/capabilities/ai-infra.js', infraData);
fs.writeFileSync('src/data/capabilities/responsible-ai.js', respAiData);
fs.writeFileSync('src/data/capabilities/ai-strategy.js', strategyData);
fs.writeFileSync('src/data/capabilities/ai-innovation-lab.js', innovationData);
