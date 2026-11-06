export const SOLUTIONS_OVERVIEW_FAQS = [
  {
    q: "What defines Devopstrio's Enterprise AI Solutions portfolio?",
    a: "Our Enterprise Solutions represent pre-engineered, modular architectural blueprints addressing mission-critical business challenges across DevSecOps, enterprise knowledge retrieval, multi-agent swarms, HR automation, and FinOps. They combine field-tested accelerators with bespoke engineering tailored to your data schema and security policies.",
    proof: "Portfolio Architecture: Modular Blueprints with Custom VPC Hardening",
    tags: ["Enterprise Solutions", "Modular Blueprints", "Cloud Architecture"]
  },
  {
    q: "Can multiple Devopstrio solutions be integrated into a unified control plane?",
    a: "Yes. All Devopstrio solutions are built on modular, event-driven interfaces. For example, Autonomous DevSecOps, Enterprise RAG, and Workflow Automation can share a centralized identity boundary, unified observability dashboard, and shared vector lakehouse infrastructure.",
    proof: "Interoperability: Unified Event Bus & Shared Identity Federation",
    tags: ["Interoperability", "Event-Driven", "Unified Control Plane"]
  },
  {
    q: "How do your solutions connect with legacy ERP and database systems?",
    a: "We deploy secure, bidirectional enterprise connectors for platforms such as SAP, Salesforce, Oracle, ServiceNow, and Snowflake. Ingestion uses event-driven Kafka streams and secure REST/GraphQL adapters with in-flight data normalization and strict credential isolation.",
    proof: "Integration Stack: Native Kafka, REST & GraphQL Adapters for Core ERPs",
    tags: ["Legacy Integration", "SAP", "Salesforce", "Enterprise Connectors"]
  },
  {
    q: "What security and compliance frameworks govern these enterprise blueprints?",
    a: "Every solution blueprint is architected to satisfy UK GDPR, SOC 2 Type II, HIPAA, and ISO 27001 requirements. Data isolation, encrypted transport (TLS 1.3), customer-managed encryption keys (CMEK), and granular RBAC are standard architectural requirements.",
    proof: "Security Posture: UK GDPR, SOC 2 Type II & CMEK Encryption by Default",
    tags: ["Security", "Compliance", "UK GDPR", "CMEK"]
  },
  {
    q: "How long does it take to customize a solution for a specific enterprise environment?",
    a: "Core architectural deployment typically takes 1 to 2 weeks, while custom schema integration, security hardening, user access configuration, and end-to-end testing are generally completed within 4 to 8 weeks depending on legacy complexity.",
    proof: "Deployment Velocity: 4 to 8 Week End-to-End Customization Cycle",
    tags: ["Delivery Timeline", "Customization", "Production Readiness"]
  },
  {
    q: "How do you prevent model performance degradation and concept drift over time?",
    a: "Our solutions incorporate automated continuous evaluation loops that monitor output semantic coherence, prediction confidence, latency percentiles, and input data distributions, triggering automated alerts or scheduled retraining when thresholds drift.",
    proof: "Model Reliability: Continuous Telemetry & Statistical Drift Detection",
    tags: ["Drift Detection", "Continuous Evaluation", "Model Reliability"]
  },
  {
    q: "Can solutions be deployed in sovereign air-gapped or hybrid environments?",
    a: "Yes. All solution architectures support containerized deployment (via Kubernetes and Helm) in fully disconnected, air-gapped environments or hybrid cloud setups without dependencies on public cloud endpoints.",
    proof: "Deployment Flexibility: Containerized Air-Gapped & Hybrid Cloud Support",
    tags: ["Air-Gapped", "Sovereign Cloud", "Kubernetes", "Containerized"]
  },
  {
    q: "What ongoing support is provided after solution deployment?",
    a: "Every solution includes a 90-day hypercare operational warranty, complete architectural documentation, staff training sessions, and the option to transition to our 24/7 Managed AI Services for continuous monitoring and platform evolution.",
    proof: "Support Commitment: 90-Day Hypercare Warranty & 24/7 Managed Evolution",
    tags: ["Hypercare", "Warranty", "Managed Support", "Documentation"]
  }
];

export const SOLUTION_DETAIL_FAQS = {
  "hr-ai": [
    {
      q: "How does Devopstrio HR AI protect sensitive employee data under UK GDPR?",
      a: "Our HR AI systems are provisioned inside your private VPC perimeter with strict tenant isolation. In-flight PII masking filters strip employee personal identifiers, national insurance numbers, and bank details before processing, and queries are strictly evaluated against authorized corporate policy documents.",
      proof: "Privacy Standard: In-Flight PII Masking & UK GDPR Compliant Enclaves",
      tags: ["HR AI", "UK GDPR", "PII Masking", "Data Protection"]
    },
    {
      q: "What HRIS and talent platforms can the solution integrate with?",
      a: "The solution integrates bi-directionally with Workday, BambooHR, SAP SuccessFactors, Greenhouse, and ADP using secure OAuth2 service credentials to synchronize employee profiles, leave balances, and onboarding workflows.",
      proof: "Integration Ecosystem: Native Workday, BambooHR & SuccessFactors Connectors",
      tags: ["HRIS", "Workday", "Onboarding", "OAuth2"]
    },
    {
      q: "How does the HR AI answer policy questions without generating incorrect guidance?",
      a: "Answers are synthesized exclusively through grounded Retrieval-Augmented Generation (RAG) referencing approved internal policy handbooks, benefits guides, and employee agreements with direct paragraph-level citations.",
      proof: "Accuracy Verification: Grounded RAG with Direct Policy Footnote Citations",
      tags: ["Grounded RAG", "Accuracy", "Policy Compliance", "Employee FAQ"]
    },
    {
      q: "How does the system handle sensitive or personal employee grievances?",
      a: "The AI recognizes sensitive grievance keywords, mental health inquiries, or complex HR issues and immediately executes a confidential, direct handoff to an assigned human HR Business Partner without logging grievance details in public channels.",
      proof: "Confidentiality Protocol: Automated Sensitive Triage & Private HRBP Escalation",
      tags: ["Confidentiality", "Triage", "Human-in-the-Loop", "Employee Care"]
    },
    {
      q: "Can the solution automate new-hire onboarding checklists and IT provisioning?",
      a: "Yes. The system coordinates onboarding workflows across HRIS and IT service desks (e.g. ServiceNow, Jira), tracking document completion, provisioning hardware access, and scheduling introductory orientation meetings.",
      proof: "Workflow Automation: Automated Cross-System Onboarding Coordination",
      tags: ["Onboarding", "IT Provisioning", "ServiceNow", "Jira"]
    },
    {
      q: "How do you evaluate employee adoption and satisfaction with the HR AI assistant?",
      a: "An embedded analytics console tracks query resolution rates, time saved per query, common employee confusion areas, and post-interaction satisfaction scores while maintaining individual anonymity.",
      proof: "Analytics Console: Anonymous Resolution Metrics & Sentiment Telemetry",
      tags: ["Adoption Analytics", "CSAT", "Resolution Rate", "Employee Insights"]
    },
    {
      q: "Can employees access the assistant via existing workplace chat tools like Slack or Teams?",
      a: "Yes. We deploy native Slack and Microsoft Teams bots with single-sign-on (SSO) integration, allowing employees to query benefits, request time off, and access policies directly in their daily workflow.",
      proof: "Chat Integration: Native Slack & Microsoft Teams Enterprise SSO Bots",
      tags: ["Slack", "Microsoft Teams", "SSO", "Workplace Chat"]
    },
    {
      q: "What is the typical deployment timeline for enterprise HR AI?",
      a: "Most organizations achieve pilot rollout within 3 to 5 weeks, covering knowledge base ingestion, HRIS integration, security reviews, and employee pilot testing.",
      proof: "Rollout Velocity: 3 to 5 Week Pilot-to-Production Timeline",
      tags: ["Deployment", "Timeline", "Agile Pilot", "Enterprise Rollout"]
    }
  ],
  "devops-ai": [
    {
      q: "How does Devopstrio DevOps AI accelerate CI/CD release cycles?",
      a: "By integrating automated code security analysis, intelligent test suite selection (running only affected tests), and autonomous canary deployment validation, our platform removes manual approval bottlenecks while improving release safety.",
      proof: "Release Acceleration: Automated Test Selection & Canary Verification",
      tags: ["DevOps AI", "CI/CD", "Canary Rollouts", "Test Optimization"]
    },
    {
      q: "How does the platform handle automated vulnerability remediation?",
      a: "When critical CVEs or dependency vulnerabilities are detected, autonomous agents inspect call graphs to verify exploitability, generate targeted pull requests with upgraded dependencies, and validate compatibility in isolated CI environments.",
      proof: "Remediation Pipeline: Automated Exploitability Triage & Verified Pull Requests",
      tags: ["CVE Remediation", "Security Scanning", "Automated PRs", "Dependency Management"]
    },
    {
      q: "What Git and CI/CD tools are supported out of the box?",
      a: "We support GitHub Actions, GitLab CI, Jenkins, Bitbucket Pipelines, CircleCI, and ArgoCD through native webhook integrations and CLI plugins.",
      proof: "Toolchain Compatibility: GitHub, GitLab, Jenkins, CircleCI & ArgoCD",
      tags: ["GitHub", "GitLab", "Jenkins", "ArgoCD"]
    },
    {
      q: "How does policy-as-code enforcement function across deployment pipelines?",
      a: "We utilize Open Policy Agent (OPA) and Kyverno rules to evaluate infrastructure manifests and container images against corporate security baselines before deployments reach production clusters.",
      proof: "Policy Enforcement: Open Policy Agent (OPA) Guardrails at Pre-Commit & Runtime",
      tags: ["Policy-as-Code", "OPA", "Kyverno", "Governance"]
    },
    {
      q: "How does the system reduce Mean Time to Resolution (MTTR) during production incidents?",
      a: "During anomalies, AI agents correlate logs, metrics, and recent commits across distributed microservices, isolating the root cause and suggesting verified remediation runbooks to on-call engineers.",
      proof: "Operational Telemetry: Cross-Service Log Correlation & Diagnostic Runbooks",
      tags: ["MTTR Reduction", "Root Cause Analysis", "Observability", "Incident Response"]
    },
    {
      q: "Can the platform automatically manage cloud compute scaling for build runners?",
      a: "Yes. Dynamic runner auto-scalers provision ephemeral spot instances during peak build windows and scale down to zero during idle periods, significantly curtailing CI infrastructure spend.",
      proof: "Infrastructure Efficiency: Ephemeral Spot Runner Auto-Scaling to Zero",
      tags: ["Cloud Infrastructure", "Spot Instances", "Auto-Scaling", "FinOps"]
    },
    {
      q: "How is human oversight maintained in high-risk production deployments?",
      a: "Critical production deployments require explicit human cryptographic sign-off, providing engineers with an annotated risk summary, test results, and one-click approval controls.",
      proof: "Governance Safeguard: Cryptographic Lead Approval for Production Changes",
      tags: ["Human-in-the-Loop", "Change Management", "Production Gateways"]
    },
    {
      q: "Does the solution generate compliance documentation for SOC 2 and ISO 27001 audits?",
      a: "Yes. Every commit, pipeline run, code review, and deployment event is captured in an immutable audit ledger, enabling automated single-click audit report generation for compliance officers.",
      proof: "Audit Readiness: Immutable Event Logging & Automated SOC 2 Compliance Reports",
      tags: ["SOC 2", "ISO 27001", "Compliance Audit", "Immutable Logs"]
    }
  ],
  "cybersecurity-ai": [
    {
      q: "How does Cybersecurity AI detect advanced persistent threats (APTs)?",
      a: "Our models analyze network telemetry, authentication logs, and endpoint behavioral baselines using unsupervised anomaly detection and graph neural networks to catch lateral movement and privilege escalation before data exfiltration occurs.",
      proof: "Threat Detection: Behavioral Anomaly Detection & Graph Neural Networks",
      tags: ["Cybersecurity", "APT Detection", "Threat Intelligence", "Graph AI"]
    },
    {
      q: "How does the platform prevent alert fatigue for Security Operations (SecOps) teams?",
      a: "Intelligent correlation engines cluster related alerts across firewalls, EDR agents, and cloud logs into unified incident cases, filtering out benign background noise and assigning contextual risk scores.",
      proof: "SecOps Optimization: Contextual Alert Grouping & Noise Suppression",
      tags: ["SecOps", "Alert Fatigue", "EDR", "SIEM"]
    },
    {
      q: "What SIEM and SOAR platforms does the solution integrate with?",
      a: "We integrate natively with Microsoft Sentinel, Splunk, Elastic Security, Palo Alto Cortex, and IBM QRadar through secure streaming APIs and bi-directional incident webhooks.",
      proof: "Ecosystem Compatibility: Native Sentinel, Splunk & Elastic Connectors",
      tags: ["SIEM", "SOAR", "Sentinel", "Splunk"]
    },
    {
      q: "Can the AI execute autonomous containment actions during an active breach?",
      a: "Yes. Pre-approved automated playbooks can isolate compromised endpoints, revoke compromised IAM tokens, and update firewall blocklists within seconds of verified malicious behavior.",
      proof: "Automated Response: Sub-Minute Endpoint Isolation & IAM Token Revocation",
      tags: ["Incident Response", "Automated Containment", "Zero-Trust", "IAM"]
    },
    {
      q: "How does the system protect against prompt injection and adversarial AI attacks?",
      a: "We deploy multi-layered input sanitization gateways, semantic boundary checkers, and secondary classifier models that detect and neutralize prompt injection, jailbreaks, and model inversion attempts.",
      proof: "AI Defense: Multi-Layered Prompt Injection & Jailbreak Defense Gateways",
      tags: ["Adversarial AI", "Prompt Injection", "Model Security", "Guardrails"]
    },
    {
      q: "How are sensitive encryption keys and API secrets managed?",
      a: "Keys and secrets are managed exclusively through enterprise key management services (AWS KMS, Azure Key Vault, HashiCorp Vault) with automated rotation and zero hardcoded secrets.",
      proof: "Secrets Governance: Enterprise KMS Integration & Automated Key Rotation",
      tags: ["Key Management", "KMS", "HashiCorp Vault", "Encryption"]
    },
    {
      q: "Does the platform assist with regulatory data breach notification timelines?",
      a: "Automated forensics collectors compile detailed incident timeline dossiers detailing affected systems, accessed records, and containment actions to assist legal teams in meeting regulatory reporting requirements.",
      proof: "Forensics Dossier: Automated Incident Timelines for Regulatory Disclosures",
      tags: ["Forensics", "Breach Notification", "UK GDPR", "Regulatory Compliance"]
    },
    {
      q: "How does Devopstrio conduct security audits of its own AI architectures?",
      a: "We employ independent third-party penetration testing, continuous static and dynamic analysis (SAST/DAST), and internal red-teaming exercises to rigorously validate our architectures against modern attack vectors.",
      proof: "Security Assurance: Independent Penetration Testing & Continuous Red-Teaming",
      tags: ["Penetration Testing", "SAST", "DAST", "Red Teaming"]
    }
  ],
  "document-intelligence": [
    {
      q: "What complex document formats can the Document Intelligence solution process?",
      a: "The solution extracts data from scanned multi-page PDFs, TIFFs, low-resolution camera photos, complex financial tables, handwritten applications, and technical architectural blueprints.",
      proof: "Format Versatility: Multi-Page PDFs, Handwritten Scans & Complex Tables",
      tags: ["Document AI", "OCR", "Table Extraction", "Computer Vision"]
    },
    {
      q: "How does the system handle multi-column layouts and non-standard forms?",
      a: "Vision-transformer layout models analyze document spatial geometry, accurately reconstructing reading order, nested hierarchies, and key-value pairs across unstructured formats.",
      proof: "Spatial Extraction: Vision-Transformer Layout Analysis & Hierarchy Parsing",
      tags: ["Layout Analysis", "Key-Value Pairs", "Unstructured Data", "Transformers"]
    },
    {
      q: "How are low-confidence extraction fields handled safely?",
      a: "Every extracted entity carries a calibrated confidence score. Fields falling below enterprise validation thresholds automatically route to a web verification interface for swift human operator confirmation.",
      proof: "Verification Loop: Calibrated Confidence Scoring & Human Review Queue",
      tags: ["Human-in-the-Loop", "Confidence Scoring", "Verification", "Accuracy"]
    },
    {
      q: "What ERP and accounting systems can extracted data sync with?",
      a: "Validated records export directly into SAP S/4HANA, Oracle ERP, NetSuite, Microsoft Dynamics 365, and QuickBooks via authenticated REST APIs and scheduled batch drops.",
      proof: "ERP Integration: Direct Two-Way Sync with SAP, Oracle & Dynamics 365",
      tags: ["SAP", "Oracle", "ERP Sync", "Accounts Payable"]
    },
    {
      q: "Can the system detect fraudulent or altered digital documents?",
      a: "Forensic image analysis checks for digital font inconsistencies, modified pixel matrices, altered EXIF metadata, and duplicate invoice numbers across historical archives.",
      proof: "Fraud Detection: Digital Forensic Image Inspection & Metadata Verification",
      tags: ["Fraud Detection", "Document Forensics", "Invoice Verification"]
    },
    {
      q: "How does the model improve over time from operator corrections?",
      a: "Active learning pipelines continuously ingest operator corrections to fine-tune field extraction weights, delivering measurable accuracy gains as document volume increases.",
      proof: "Continuous Learning: Active Learning Ingestion from Operator Feedback",
      tags: ["Active Learning", "Model Improvement", "Fine-Tuning", "Efficiency"]
    },
    {
      q: "Is document processing compliant with UK GDPR and data privacy laws?",
      a: "Yes. Processing takes place within private dedicated enterprise enclaves, with optional ephemeral processing that deletes document images immediately after data extraction.",
      proof: "Privacy Architecture: Ephemeral Memory Processing & Zero Persistent Staging",
      tags: ["UK GDPR", "Data Privacy", "Ephemeral Storage", "Data Retention"]
    },
    {
      q: "What throughput volume can the document processing cluster support?",
      a: "Distributed horizontal worker nodes scale dynamically to process thousands of pages per hour, easily handling end-of-quarter invoice spikes without queue timeouts.",
      proof: "Scalability: Horizontal Worker Auto-Scaling for Peak Document Volume",
      tags: ["Throughput", "Horizontal Scaling", "Batch Processing", "High Volume"]
    }
  ]
};

export function getSolutionFaqs(solutionId) {
  if (solutionId && SOLUTION_DETAIL_FAQS[solutionId]) {
    return SOLUTION_DETAIL_FAQS[solutionId];
  }
  // Universal high-quality enterprise solution fallback (8 FAQs)
  return [
    {
      q: "How does this enterprise solution integrate with our existing IT infrastructure?",
      a: "We architect the solution to deploy directly into your private enterprise cloud perimeter (AWS, Azure, GCP) or on-premise infrastructure. Using Zero-Trust identity boundaries, secure API gateways, and standardized container runtimes, the system connects cleanly to your existing core platforms without disruptive migrations.",
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
      q: "Can internal teams operate this solution independently after deployment?",
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
