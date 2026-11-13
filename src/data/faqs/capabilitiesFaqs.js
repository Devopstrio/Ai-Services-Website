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
  ],
  "enterprise-ai-development": [
    {
      q: "What are AI development services?",
      a: "AI development services involve building intelligent solutions to automate tasks, analyse data and improve business operations."
    },
    {
      q: "What AI solutions does Devopstrio develop?",
      a: "We develop custom AI applications, machine learning models, predictive analytics and intelligent automation solutions."
    },
    {
      q: "Why choose custom AI development?",
      a: "Custom AI solutions address specific business needs, improve efficiency and integrate with existing systems."
    },
    {
      q: "How much do AI development services cost in the UK?",
      a: "Costs depend on project complexity, data requirements, technology and integration needs."
    },
    {
      q: "Can AI integrate with existing business systems?",
      a: "Yes. AI solutions can connect with existing software, databases, APIs and cloud platforms."
    },
    {
      q: "How does Devopstrio ensure AI security?",
      a: "We use access controls, data protection and secure deployment practices to safeguard business information."
    },
    {
      q: "How long does AI development take?",
      a: "Timelines depend on project scope, data availability, technical requirements and integration complexity."
    },
    {
      q: "Does Devopstrio provide ongoing AI support?",
      a: "Yes. We provide model monitoring, performance optimisation, maintenance and system updates."
    }
  ],
  "machine-learning": [
    {
      q: "What are machine learning services?",
      a: "Machine learning services develop models that analyse data, identify patterns and support automated decisions."
    },
    {
      q: "What machine learning solutions does Devopstrio provide?",
      a: "We provide predictive analytics, custom ML models, demand forecasting and anomaly detection solutions."
    },
    {
      q: "How can machine learning benefit businesses?",
      a: "Machine learning improves decision-making, automates processes and helps businesses identify valuable insights."
    },
    {
      q: "What industries benefit from machine learning?",
      a: "Retail, finance, healthcare, manufacturing, supply chain and cybersecurity benefit from machine learning solutions."
    },
    {
      q: "Can machine learning integrate with existing systems?",
      a: "Yes. Machine learning models can integrate with existing software, databases, APIs and cloud platforms."
    },
    {
      q: "How secure are machine learning solutions?",
      a: "Security measures such as access controls, data encryption and secure deployment help protect business data."
    },
    {
      q: "Does Devopstrio provide ongoing machine learning support?",
      a: "Yes. Support includes model monitoring, performance optimisation, maintenance and continuous improvements."
    }
  ],
  "intelligent-automation": [
    {
      q: "What is intelligent automation, and how does it differ from traditional RPA?",
      a: "Traditional RPA follows predefined rules to complete repetitive tasks. Intelligent automation combines RPA with AI, Machine Learning and other technologies to process different types of information, manage exceptions and support more complex workflows."
    },
    {
      q: "How can intelligent automation integrate with our existing business systems?",
      a: "Automation solutions can connect with existing enterprise applications through APIs, integration platforms, connectors and other suitable methods. We assess your current systems and infrastructure before recommending an integration approach."
    },
    {
      q: "How do you protect sensitive business data during automation?",
      a: "We design automation workflows with appropriate access controls, encryption, identity management and secure data handling practices. Security requirements are considered throughout development and deployment."
    },
    {
      q: "How long does it take to implement an intelligent automation solution?",
      a: "The timeline depends on workflow complexity, integration requirements, data availability and approval processes. A focused automation pilot may take less time than a large enterprise-wide implementation. We define the project timeline after an initial assessment."
    },
    {
      q: "Can intelligent automation handle exceptions and unexpected requests?",
      a: "Yes. AI-enabled workflows can classify exceptions and follow predefined decision rules. Complex or sensitive cases can be routed to employees for review and approval."
    },
    {
      q: "Can our internal team manage the automation after deployment?",
      a: "Yes. We can provide documentation, knowledge transfer and training so your internal team can monitor workflows, manage routine updates and handle day-to-day operations."
    },
    {
      q: "Who owns the intellectual property developed for our automation project?",
      a: "Ownership and usage rights are agreed as part of the project contract. We clarify the ownership of custom-developed components, configurations and deliverables before development begins."
    },
    {
      q: "How do you monitor automation performance and costs?",
      a: "We can monitor workflow execution, processing times, failure rates, resource usage and platform costs. Regular reviews help identify performance issues and opportunities to improve efficiency."
    },
    {
      q: "Do you provide ongoing support for automation systems?",
      a: "Yes. We can provide maintenance, monitoring, troubleshooting and optimisation support based on your business requirements and chosen support arrangement."
    }
  ],
  "ai-integration": [
    {
      q: "What are AI integration services?",
      a: "AI integration services connect artificial intelligence models with existing business software, applications and systems."
    },
    {
      q: "Why do businesses need AI integration services?",
      a: "Businesses use AI integration to automate workflows, improve processes and connect intelligent technologies with existing systems."
    },
    {
      q: "Can AI be integrated into existing legacy systems?",
      a: "Yes. AI models can be connected to legacy systems through APIs, middleware and custom integrations."
    },
    {
      q: "Can AI integrate with Salesforce and SAP?",
      a: "Yes. AI can integrate with Salesforce, SAP and other CRM and ERP platforms to support business operations."
    },
    {
      q: "How long does AI integration take?",
      a: "The timeline depends on system complexity, integration requirements and the AI technologies involved."
    },
    {
      q: "Are AI integration services secure?",
      a: "Yes. Security measures such as encryption, access controls and secure APIs help protect data during integration."
    },
    {
      q: "Which UK businesses can benefit from AI integration services?",
      a: "Businesses across IT, finance, healthcare, retail and other sectors can use AI integration to connect systems."
    }
  ],
  "computer-vision": [
    {
      q: "What are Computer Vision Services?",
      a: "Computer vision services use artificial intelligence and machine learning to help computers interpret images and videos. Businesses use this technology for object detection, image recognition, automated inspection and visual analytics."
    },
    {
      q: "How do Computer Vision Solutions benefit businesses?",
      a: "Computer vision solutions help automate visual inspections, improve operational efficiency, identify defects, monitor activities and extract useful information from images and videos."
    },
    {
      q: "What is AI Image Recognition?",
      a: "AI image recognition is a technology that enables computer systems to identify and classify objects, patterns and other visual elements within images."
    },
    {
      q: "What is Object Detection in Computer Vision?",
      a: "Object detection identifies and locates multiple objects within an image or video. It is commonly used in manufacturing, retail, security monitoring and inventory management."
    },
    {
      q: "Can Computer Vision process live video feeds?",
      a: "Yes. Computer vision models can analyse live video feeds to detect objects, identify activities and monitor events in real time, depending on the infrastructure and model capabilities."
    },
    {
      q: "Can Computer Vision Solutions integrate with existing business systems?",
      a: "Yes. Computer vision applications can integrate with existing business platforms, databases and cloud environments through APIs and suitable integration frameworks."
    },
    {
      q: "Are Computer Vision Services suitable for different industries?",
      a: "Yes. Computer vision technology can support manufacturing, healthcare, retail, logistics, security and other industries that use image and video data."
    }
  ],
  "intelligent-document-processing": [
    {
      q: "What is Intelligent Document Processing?",
      a: "Intelligent Document Processing (IDP) uses artificial intelligence, machine learning and OCR technology to extract, classify, validate and organise information from digital and scanned documents."
    },
    {
      q: "How do IDP Solutions benefit businesses?",
      a: "IDP solutions reduce manual data entry, improve document accuracy, speed up information extraction and help businesses manage large volumes of documents more efficiently."
    },
    {
      q: "What types of documents can AI Document Processing handle?",
      a: "AI document processing can handle invoices, receipts, contracts, application forms, financial statements, medical records, PDFs and other structured or unstructured documents."
    },
    {
      q: "How does Automated Document Extraction work?",
      a: "Automated document extraction uses AI and OCR technologies to identify text, tables and relevant fields within documents. The extracted information is then converted into structured data for further processing."
    },
    {
      q: "Can Intelligent Document Processing recognise handwritten information?",
      a: "Yes. Intelligent Character Recognition (ICR) technologies can identify and extract handwritten information from forms and scanned documents, depending on handwriting quality and model capabilities."
    },
    {
      q: "Can IDP Solutions integrate with existing business applications?",
      a: "Yes. IDP systems can integrate with ERP platforms, CRM systems, databases and other business applications through APIs and suitable integration methods."
    },
    {
      q: "How does IDP maintain document accuracy?",
      a: "IDP systems use data validation, confidence scoring and human review workflows to identify uncertain information and reduce extraction errors."
    },
    {
      q: "Is Intelligent Document Processing suitable for large businesses?",
      a: "Yes. IDP solutions can support high-volume document workflows across finance, insurance, healthcare, logistics and other industries."
    }
  ],
  "ai-search-knowledge-management": [
    {
      q: "What are AI Search and Knowledge Management Solutions?",
      a: "These solutions use artificial intelligence to organise, retrieve and understand business information. They help employees find relevant documents, internal knowledge and answers across multiple enterprise systems."
    },
    {
      q: "What is Enterprise AI Search?",
      a: "Enterprise AI Search is an intelligent search technology that helps organisations find information across internal databases, documents, applications and business platforms using natural language and contextual search."
    },
    {
      q: "How does AI Knowledge Management work?",
      a: "AI knowledge management uses AI, machine learning and natural language processing to organise business information, identify relevant content and make organisational knowledge easier to access and use."
    },
    {
      q: "What are Intelligent Search Solutions?",
      a: "Intelligent search solutions use technologies such as semantic search, machine learning and natural language processing to understand user queries and deliver relevant information based on meaning and context."
    },
    {
      q: "Can AI Search connect with existing business applications?",
      a: "Yes. AI search platforms can integrate with enterprise applications such as SharePoint, Google Drive, Confluence, Jira and internal databases through suitable connectors and APIs."
    },
    {
      q: "How does RAG improve AI search results?",
      a: "Retrieval-Augmented Generation (RAG) retrieves relevant information from connected data sources before generating an answer. It helps ground responses in available business information and provides supporting references."
    },
    {
      q: "How is enterprise information protected?",
      a: "Enterprise AI search systems can use role-based access controls, encryption and secure authentication to protect sensitive information and maintain existing document permissions."
    },
    {
      q: "Which industries can benefit from AI Knowledge Management?",
      a: "Industries such as IT, healthcare, finance, manufacturing, education and professional services can use AI knowledge management to improve information access and internal collaboration."
    }
  ],
  "data-intelligence": [
    {
      q: "How do Data Intelligence Services integrate with existing business systems?",
      a: "We assess your existing applications, databases and cloud infrastructure before designing an integration approach. Depending on your requirements, we use APIs, connectors, ETL/ELT pipelines and streaming technologies to bring information into a unified data environment."
    },
    {
      q: "How do you protect sensitive business data?",
      a: "We implement appropriate security controls, including encryption, role-based access, data masking and monitoring. Data protection requirements are considered throughout the architecture and implementation process."
    },
    {
      q: "How long does it take to build a modern data platform?",
      a: "The timeline depends on data volume, source systems, migration requirements, infrastructure and project complexity. We begin with an architecture assessment and define a suitable implementation plan."
    },
    {
      q: "How do you maintain data quality and accuracy?",
      a: "We use validation rules, transformation checks, monitoring and data quality processes to identify incomplete, duplicated or inconsistent information. Data lineage also helps teams understand where information comes from and how it changes."
    },
    {
      q: "Can our internal team manage the data platform after deployment?",
      a: "Yes. We can provide documentation, knowledge transfer and technical training to help internal teams manage data pipelines, monitor platform performance and maintain governance processes."
    },
    {
      q: "How does data intelligence support AI and machine learning?",
      a: "Data intelligence prepares information for AI applications by improving its quality, structure and accessibility. Reliable data pipelines and governance processes help provide machine learning models with consistent and relevant information."
    },
    {
      q: "How do you manage cloud infrastructure and data processing costs?",
      a: "We review storage usage, processing workloads, query performance and resource allocation. Based on the platform and business requirements, we identify opportunities to improve efficiency and manage cloud costs."
    },
    {
      q: "Do you provide ongoing data platform support?",
      a: "Yes. Support options can include pipeline monitoring, issue resolution, platform maintenance, performance optimisation and improvements as business requirements change."
    }
  ],
  "predictive-analytics": [
    {
      q: "How do Predictive Analytics Services integrate with existing business systems?",
      a: "We assess your current data sources, applications and infrastructure before recommending an integration approach. Predictive models can connect with suitable databases, cloud platforms, APIs and business applications to use relevant information and deliver insights."
    },
    {
      q: "How do you protect sensitive business data?",
      a: "We apply appropriate security measures such as encryption, access controls, data masking and secure data processing. Data protection and privacy requirements are considered throughout the project."
    },
    {
      q: "How long does it take to develop a predictive analytics solution?",
      a: "The timeline depends on data availability, project complexity, integration requirements and the type of model needed. We begin by understanding your business objectives and assessing the available data before defining the development and testing stages."
    },
    {
      q: "How do you ensure predictive model accuracy?",
      a: "We evaluate models using suitable historical datasets, validation techniques and performance metrics. We also monitor model performance after deployment to identify changes in data patterns that may affect predictions."
    },
    {
      q: "Can predictive analytics work with our existing data?",
      a: "In many cases, yes. We assess the quality, format and availability of your existing data to determine whether it is suitable for predictive modelling. Data preparation and integration may be required before development."
    },
    {
      q: "Can our internal team manage predictive models after deployment?",
      a: "Yes. We can provide documentation, knowledge transfer and training to help your team monitor model performance, understand outputs and manage routine updates."
    },
    {
      q: "How do you monitor changes in predictive model performance?",
      a: "We use model monitoring and data drift checks to identify changes in incoming data or prediction quality. Where required, models can be reviewed, updated or retrained using more recent information."
    },
    {
      q: "Do you provide ongoing predictive analytics support?",
      a: "Yes. Support options can include model monitoring, troubleshooting, performance reviews, retraining and optimisation based on your business requirements."
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
