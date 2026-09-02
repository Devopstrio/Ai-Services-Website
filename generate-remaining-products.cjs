const fs = require('fs');
const path = require('path');

const REMAINING_PRODUCTS = [
  {
    id: "knowledge-ai",
    category: "Productivity AI",
    name: "Knowledge AI",
    tagline: "Neural Enterprise Retrieval-Augmented Generation & Multi-Modal Document Q&A",
    badge: "PRODUCTIVITY // NEURAL RAG",
    titleLight: "Instant Institutional Answers with",
    titleBold: "Knowledge AI",
    description: "Unlock institutional knowledge trapped in static PDFs, spreadsheets, research archives, and tickets. Knowledge AI provides citation-backed, hallucination-free answers with strict document-level role-based access control.",
    bgImage: "neural_connections_nodes.jpg",
    liveBadge: "v4.2 Production Ready",
    metrics: [
      { value: "99.4%", label: "Citation Accuracy", sub: "Strict ground-truth extraction" },
      { value: "85%", label: "Faster Research Velocity", sub: "Instant answers across thousands of files" },
      { value: "100%", label: "RBAC Compliance", sub: "Inherits Active Directory permissions" },
      { value: "60+", label: "Document Formats Supported", sub: "PDF, DOCX, XLSX, PPTX, EPUB, Audio" }
    ],
    overview: {
      heading: "Enterprise-Grade Retrieval Augmented Generation (RAG) Built for Trust",
      description: "Generic LLMs hallucinate and lack private company context. Knowledge AI combines high-density vector retrieval, reranking algorithms, and private LLMs to deliver accurate answers with clickable document page citations.",
      keyPoints: [
        "Advanced hybrid keyword and vector semantic search retrieval",
        "Document-level permission enforcement preventing data leakage",
        "Multi-modal table and chart understanding from complex PDF reports",
        "Automated semantic index updates on document modification"
      ]
    },
    features: [
      { id: "rag", tabTitle: "Neural Search", title: "Hybrid Dense & Sparse Neural Retrieval", description: "Combines vector embeddings with BM25 keyword matching and cross-encoder rerankers to surface exact technical answers in milliseconds.", highlights: ["Cross-encoder reranking for maximum precision", "Handles multi-language documents seamlessly", "Zero data leakage between business departments", "Under 150ms average query latency"], image: "holographic_data_globe.jpg" },
      { id: "citations", tabTitle: "Citations", title: "Verifiable Ground-Truth Document Highlighting", description: "Every answer is tethered to verifiable source text. Click on any citation number to open the exact page and highlighted paragraph.", highlights: ["Exact PDF page and bounding box highlights", "Confidence rating on every generated statement", "Exportable audit summary for compliance", "Side-by-side document comparison viewer"], image: "multimodal_ai_workbench.jpg" },
      { id: "tables", tabTitle: "Table & OCR", title: "Complex Financial Table & Diagram Extraction", description: "Parses complex multi-column spreadsheets, financial income statements, and technical schematic diagrams with zero distortion.", highlights: ["High-accuracy table-to-markdown translation", "Mathematical reasoning across financial statements", "Handles low-resolution scanned legacy paperwork", "Automated currency and metric conversions"], image: "automated_invoice_processing.jpg" },
      { id: "connectors", tabTitle: "Integrations", title: "Enterprise Zero-ETL Knowledge Connectors", description: "Integrates directly with SharePoint, Google Drive, Box, Confluence, and AWS S3 with continuous automated synchronization.", highlights: ["Real-time webhook change data capture", "Preserves existing folder structures and metadata", "Automated deduplication and version tracking", "Scales to tens of millions of enterprise files"], image: "saas_cloud_platform_ui.jpg" }
    ],
    workflow: [
      { step: "01", title: "Ingestion", desc: "Connects securely to internal cloud drives and databases." },
      { step: "02", title: "Parsing & OCR", desc: "Extracts text, tables, and diagrams into clean semantic chunks." },
      { step: "03", title: "Embedding", desc: "Generates high-dimensional vector embeddings with metadata tags." },
      { step: "04", title: "Query & Rerank", desc: "Hybrid search retrieves the top relevant context snippets." },
      { step: "05", title: "Grounded Answer", desc: "Private LLM generates response with clickable citations." }
    ],
    interactiveDemo: {
      title: "Interactive Knowledge RAG Query Simulator",
      subtitle: "Select a complex research query below to see how Knowledge AI extracts verifiable answers from private enterprise documents.",
      personas: [
        {
          name: "Q4 Data Center Cooling Specs & PUE",
          role: "Query across 14 Engineering PDF Specifications",
          experience: "Sources: Ashrae 90.4 • Tier 4 Annex",
          matchScore: 99,
          matchGrade: "Verified Citation",
          summary: "Maximum allowable chiller loop temperature is 18.5°C under peak load with a design PUE target of 1.14 in Frankfurt datacenter cluster.",
          competencies: [
            { skill: "Table Extraction Accuracy", score: 99 },
            { skill: "Metric Validation", score: 98 },
            { skill: "Citation Precision", score: 99 },
            { skill: "ACL Verification", score: 100 }
          ],
          aiInsight: "Derived from Page 42, Paragraph 3 of 'Global Infrastructure Spec 2026.pdf'. Exact diagram highlighted."
        }
      ]
    },
    integrations: [
      { name: "Microsoft SharePoint", type: "Full Document Sync" },
      { name: "Google Drive", type: "Workspace Integration" },
      { name: "Atlassian Confluence", type: "Wiki Space Indexer" },
      { name: "Box & Dropbox", type: "Secure Cloud Storage Sync" },
      { name: "AWS S3 / Azure Blob", type: "Object Store Direct Connector" },
      { name: "Slack & MS Teams", type: "Knowledge Bot Plugin" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Audited data encryption in transit and at rest" },
      { label: "Zero Public AI Training", desc: "Your data is strictly isolated" },
      { label: "Role-Based ACL", desc: "Mirrors existing enterprise Active Directory permissions" },
      { label: "HIPAA & GDPR Compliant", desc: "Meets stringent global privacy mandates" }
    ],
    caseStudy: {
      client: "Global Semiconductor Manufacturer",
      industry: "Hardware & Semiconductor",
      headline: "How 4,000 Chip Designers Cut Patent & Spec Research Time by 80%",
      quote: "Knowledge AI turned our 30-year archive of chip design schematics into an interactive brainstorming partner. Complex specification lookups that took hours now happen in seconds.",
      author: "VP of Engineering",
      company: "Leading Silicon Provider",
      image: "microchip_wafer_lithography.jpg",
      results: [
        { stat: "80%", label: "Reduction in engineering research time" },
        { stat: "2.4M", label: "Technical pages indexed" },
        { stat: "99.6%", label: "Answer verification score" }
      ]
    }
  },
  {
    id: "document-ai",
    category: "Productivity AI",
    name: "Document AI",
    tagline: "Intelligent Document Processing (IDP) & Automated Multi-Modal Data Extraction",
    badge: "PRODUCTIVITY // OCR & IDP",
    titleLight: "Automate Unstructured Documents with",
    titleBold: "Document AI",
    description: "Transform unstructured invoices, bills of lading, medical records, tax filings, and legal contracts into structured, database-ready records with 99.8% field accuracy.",
    bgImage: "automated_invoice_processing.jpg",
    liveBadge: "v3.9 Production Ready",
    metrics: [
      { value: "99.8%", label: "Field Extraction Accuracy", sub: "Self-correcting neural OCR" },
      { value: "85%", label: "Processing Cost Reduction", sub: "Eliminate manual data entry" },
      { value: "< 2s", label: "Per-Page Ingestion Speed", sub: "High-throughput batch processing" },
      { value: "50M+", label: "Pages Processed Annually", sub: "Enterprise scale and resilience" }
    ],
    overview: {
      heading: "Next-Gen Intelligent Document Processing for High-Volume Workflows",
      description: "Manual data entry from invoices, claims, and customs manifests causes operational bottlenecks and human error. Document AI uses multi-modal visual LLMs to understand document layout, handwriting, and complex tables natively.",
      keyPoints: [
        "Layout-aware multi-modal visual document comprehension",
        "Handwriting, signature, and stamp verification algorithms",
        "Automated exception flagging with human-in-the-loop validation UI",
        "Direct export to SAP, Oracle, NetSuite, and Salesforce"
      ]
    },
    features: [
      { id: "layout", tabTitle: "Visual Parsing", title: "Layout-Aware Neural Vision Parsing", description: "Understands document context based on spatial layout, headers, footnotes, and multi-page nested tables.", highlights: ["Processes rotated, skewed, or wrinkled document scans", "Extracts key-value pairs without rigid template configuration", "Recognizes stamps, checkmarks, and signatures", "Multi-lingual parsing in 50+ international languages"], image: "saas_cloud_platform_ui.jpg" },
      { id: "tables", tabTitle: "Table Extraction", title: "Nested & Multi-Page Table Extraction", description: "Extracts line items across multi-page invoices with automatic subtotal mathematical verification.", highlights: ["Verifies line-item mathematical sums automatically", "Maps vendor item codes to internal inventory SKUs", "Handles borderless and merged-cell tables", "Exports to JSON, CSV, or direct ERP databases"], image: "automated_invoice_processing.jpg" },
      { id: "validation", tabTitle: "Exception Review", title: "Human-in-the-Loop Exception Workspace", description: "Low-confidence extraction fields are automatically flagged and routed to operators with side-by-side visual bounding boxes.", highlights: ["Confidence scoring per individual field", "One-click operator review and correction interface", "Continuous active learning from human feedback", "SLA tracking on all exception review queues"], image: "tech_architect_whiteboard.jpg" },
      { id: "fraud", tabTitle: "Fraud Detection", title: "Document Tampering & Digital Forgery Detection", description: "Analyzes digital document artifacts to detect modified font kerning, pixel tampering, and forged signatures.", highlights: ["Detects digital PDF metadata alterations", "Validates tax ID and business registration numbers", "Cross-references vendor banking coordinates", "Stops invoice fraud before payments disburse"], image: "cyber_threat_map.jpg" }
    ],
    workflow: [
      { step: "01", title: "Capture", desc: "Ingests scanned PDFs, mobile photos, email attachments, and EDI streams." },
      { step: "02", title: "Visual OCR", desc: "Multi-modal vision model extracts text, tables, and spatial layout." },
      { step: "03", title: "Validation", desc: "Verifies mathematical totals and cross-checks master database records." },
      { step: "04", title: "Exception Routing", desc: "Low-confidence fields routed to operator review queue." },
      { step: "05", title: "ERP Sync", desc: "Structured data dispatches directly to SAP, NetSuite, or Workday." }
    ],
    interactiveDemo: {
      title: "Interactive Document Extraction Simulator",
      subtitle: "Select a document type below to see Document AI extract structured line-items, verify mathematical totals, and flag anomalies.",
      personas: [
        {
          name: "Commercial Freight Bill of Lading (BOL)",
          role: "Logistics Import Document // 8 Line Items",
          experience: "Scanned PDF • 300 DPI",
          matchScore: 99,
          matchGrade: "100% Extracted Cleanly",
          summary: "Extracted container numbers, HS codes, port of entry, gross weight (42,500 kg), and consignee details. Mathematical verification passed.",
          competencies: [
            { skill: "Header Key-Value Extraction", score: 100 },
            { skill: "Line-Item Table Parsing", score: 99 },
            { skill: "Container ID Checksum", score: 100 },
            { skill: "HS Code Validation", score: 98 }
          ],
          aiInsight: "Parsed in 1.4 seconds. Dispatched directly to customs clearance workflow."
        }
      ]
    },
    integrations: [
      { name: "SAP S/4HANA & ECC", type: "Native AP/AR Connector" },
      { name: "Oracle Cloud ERP", type: "Automated Invoice Ingestion" },
      { name: "NetSuite", type: "Transaction Posting Plugin" },
      { name: "Salesforce", type: "Contract & Order Processing" },
      { name: "UiPath & Automation Anywhere", type: "RPA Bot Pipeline Step" },
      { name: "REST API & Webhooks", type: "Sub-Second Ingestion API" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified document processing security" },
      { label: "HIPAA Compliant", desc: "Certified medical record redaction" },
      { label: "Automated PII Masking", desc: "Strips SSN and payment card numbers before storage" },
      { label: "Zero Model Retention", desc: "Documents never retained on external servers" }
    ],
    caseStudy: {
      client: "Top-10 Global Freight Forwarder",
      industry: "Logistics & Customs",
      headline: "How 2.5 Million Annual Customs Documents Were Automated with 99.8% Accuracy",
      quote: "Document AI cleared our customs manifest backlog overnight. Processing turnaround dropped from 4 hours to under 30 seconds per shipment.",
      author: "Head of Customs Technology",
      company: "Global Logistics Leader",
      image: "global_shipping_container_port.jpg",
      results: [
        { stat: "92%", label: "Touchless straight-through processing" },
        { stat: "< 25s", label: "Average document turnaround" },
        { stat: "\$4.8M", label: "Annual operational savings" }
      ]
    }
  },
  {
    id: "workflow-ai",
    category: "Productivity AI",
    name: "Workflow AI",
    tagline: "Autonomous Cognitive Process Automation & Cross-System Orchestration",
    badge: "PRODUCTIVITY // WORKFLOW AUTOMATION",
    titleLight: "Intelligent Process Automation with",
    titleBold: "Workflow AI",
    description: "Connect legacy monoliths and modern cloud apps into resilient autonomous workflows. Workflow AI monitors events, coordinates multi-step operational tasks, and handles exceptions with human-in-the-loop safety.",
    bgImage: "binary_code_tunnel.jpg",
    liveBadge: "v4.0 Production Ready",
    metrics: [
      { value: "85%", label: "Process Cycle Time Reduction", sub: "From days to automated seconds" },
      { value: "0", label: "Manual API Token Friction", sub: "Autonomous authentication mesh" },
      { value: "99.99%", label: "Workflow Execution Reliability", sub: "Automated idempotent retries" },
      { value: "10x", label: "Higher Operations Throughput", sub: "Scale operations without headcount" }
    ],
    overview: {
      heading: "Orchestrating Complex Enterprise Operations with Autonomous Multi-Agent Swarms",
      description: "Traditional RPA bots break whenever UI buttons change or schemas drift. Workflow AI uses cognitive agents that understand business intent, dynamically navigating API shifts and legacy system bottlenecks.",
      keyPoints: [
        "Intent-driven workflow orchestration that adapts to UI and API changes",
        "Autonomous multi-step execution across ERP, CRM, and HRIS systems",
        "Configurable human approval gates for high-value financial thresholds",
        "Visual drag-and-drop workflow canvas with natural language prompt generation"
      ]
    },
    features: [
      { id: "orchestration", tabTitle: "Orchestration", title: "Cross-System Autonomous Orchestration", description: "Triggers multi-step business transactions across disparate cloud and legacy software systems seamlessly.", highlights: ["Autonomous decision branches based on business logic", "Idempotent state management with zero data loss", "Real-time rollback triggers for failed transactions", "Sub-second event trigger response times"], image: "saas_cloud_platform_ui.jpg" },
      { id: "selfhealing", tabTitle: "Self-Healing", title: "Resilient Self-Healing Integrations", description: "Unlike legacy RPA scripts, Workflow AI dynamically adapts when DOM elements change, API endpoints update, or schemas drift.", highlights: ["Auto-discovers altered API schema endpoints", "Heuristic DOM element fallback for browser tasks", "Zero maintenance downtime when SaaS apps update", "Automated error diagnostic logs generated"], image: "tech_architect_whiteboard.jpg" },
      { id: "approvals", tabTitle: "Human Gates", title: "Configurable Human Approval Gates", description: "Embed instant human verification into critical workflows via Slack, Teams, or email before high-risk actions execute.", highlights: ["One-click Slack and Teams approval buttons", "Dynamic risk thresholds requiring dual-manager sign-off", "Full audit logging for regulatory compliance", "Configurable escalation timers for idle requests"], image: "executive_boardroom_ai.jpg" },
      { id: "analytics", tabTitle: "Telemetry", title: "Real-Time Bottleneck & Process Mining", description: "Visualizes operational flow velocity, highlighting manual delays, high-failure endpoints, and throughput bottlenecks.", highlights: ["Visual bottleneck heatmap across all pipelines", "ROI and labor cost savings calculation dashboard", "Predictive throughput capacity planning", "Real-time SLA breach alerting"], image: "cloud_data_center_hall.jpg" }
    ],
    workflow: [
      { step: "01", title: "Event Trigger", desc: "Webhook or scheduled trigger detects new business event." },
      { step: "02", title: "Intent Routing", desc: "Cognitive agent determines optimal path across downstream APIs." },
      { step: "03", title: "Data Enrichment", desc: "Gathers supporting context from internal databases." },
      { step: "04", title: "Approval Check", desc: "Executes human approval gate if transaction exceeds threshold." },
      { step: "05", title: "Multi-App Post", desc: "Updates ERP, CRM, and ledger records simultaneously." }
    ],
    interactiveDemo: {
      title: "Interactive Workflow Orchestration Simulator",
      subtitle: "Select an enterprise workflow below to see how Workflow AI coordinates cross-system tasks autonomously.",
      personas: [
        {
          name: "Global Employee Onboarding & Asset Provisioning",
          role: "Triggers: Workday ➔ Okta ➔ ServiceNow ➔ AWS ➔ Slack",
          experience: "14 Automated Tasks • 3 Systems",
          matchScore: 99,
          matchGrade: "Executed in 18s",
          summary: "Created corporate SSO identity, provisioned role-based AWS IAM policies, ordered dev laptop via ServiceNow, and invited employee to team Slack channels.",
          competencies: [
            { skill: "Identity Lifecycle Provisioning", score: 100 },
            { skill: "Role-Based IAM Assignment", score: 99 },
            { skill: "Hardware Asset Order Sync", score: 98 },
            { skill: "Audit Logging", score: 100 }
          ],
          aiInsight: "Replaced 3 days of manual HR and IT tickets with a single 18-second autonomous pipeline."
        }
      ]
    },
    integrations: [
      { name: "ServiceNow", type: "ITSM & Asset Automation" },
      { name: "Salesforce", type: "Lead-to-Cash Workflow" },
      { name: "Workday", type: "HR Lifecycle Sync" },
      { name: "SAP S/4HANA", type: "Supply Chain & Order Routing" },
      { name: "Jira Software", type: "Engineering Ticket Automation" },
      { name: "Slack & Teams", type: "Human-in-the-Loop Bot" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified transactional data isolation" },
      { label: "Role-Based IAM", desc: "Least-privilege operational access tokens" },
      { label: "Audit Traceability", desc: "Cryptographically sealed immutable execution logs" },
      { label: "Zero Public AI Retention", desc: "Workflow payloads never shared" }
    ],
    caseStudy: {
      client: "Global Financial Services Institution",
      industry: "Banking & Financial Services",
      headline: "How Commercial Loan Onboarding Was Accelerated from 12 Days to 45 Minutes",
      quote: "Workflow AI united our legacy core banking mainframe with modern cloud SaaS. What took 12 days of manual email handoffs now executes seamlessly in under an hour.",
      author: "Head of Digital Transformation",
      company: "Top-20 Global Bank",
      image: "fintech_algorithmic_trading.jpg",
      results: [
        { stat: "95%", label: "Reduction in loan origination cycle time" },
        { stat: "450K", label: "Transactions automated monthly" },
        { stat: "\$5.2M", label: "Annual operational cost savings" }
      ]
    }
  },
  {
    id: "assistant-ai",
    category: "Productivity AI",
    name: "Assistant AI",
    tagline: "Context-Aware Executive & Enterprise Productivity Copilot",
    badge: "PRODUCTIVITY // EXECUTIVE ASSISTANT",
    titleLight: "Supercharge Daily Output with",
    titleBold: "Assistant AI",
    description: "An intelligent digital assistant integrated directly into executive desktop and mobile workflows. Summarizes complex briefings, drafts memos, schedules meetings, and tracks team commitments.",
    bgImage: "multimodal_ai_workbench.jpg",
    liveBadge: "v3.8 Production Ready",
    metrics: [
      { value: "3.5 hrs", label: "Daily Time Saved Per Leader", sub: "Automated executive synthesis" },
      { value: "100%", label: "Action Item Accountability", sub: "Zero missed meeting deliverables" },
      { value: "< 5s", label: "Meeting Briefing Generation", sub: "Synthesizes attendee dossiers" },
      { value: "98%", label: "Executive Voice Consistency", sub: "Trained on leadership communication" }
    ],
    overview: {
      heading: "The Autonomous Digital Chief of Staff for High-Impact Leadership",
      description: "Executive leaders are overwhelmed by constant meeting cascades, fragmented Slack updates, and hundreds of daily action items. Assistant AI acts as your dedicated digital Chief of Staff.\n\nFrom preparing 60-second attendee briefing dossiers before client meetings to synthesizing post-meeting action plans and tracking team deliverables, Assistant AI ensures nothing falls through the cracks.",
      keyPoints: [
        "Automated pre-meeting briefings with attendee background dossiers",
        "Real-time meeting audio transcription and structured action item extraction",
        "Executive ghostwriting for memos, board decks, and announcements",
        "Proactive calendar defense and high-priority schedule optimization"
      ]
    },
    features: [
      { id: "briefings", tabTitle: "Pre-Meeting Prep", title: "Automated Attendee & Context Dossiers", description: "Receives calendar notifications 10 minutes before meetings and delivers a 1-page executive brief containing past conversation history, deal status, and key objectives.", highlights: ["Synthesizes CRM history, emails, and LinkedIn bios", "Highlights open blockers from previous discussions", "Suggests tactical meeting agenda topics", "Delivered directly to mobile or Slack"], image: "executive_boardroom_ai.jpg" },
      { id: "transcripts", tabTitle: "Action Tracker", title: "Multi-Speaker Audio Synthesis & Action Extraction", description: "Listens to Zoom, Teams, or Google Meet conversations, identifying speakers, synthesizing technical decisions, and creating Jira tasks automatically.", highlights: ["Accurate speaker identification and sentiment markers", "Differentiates casual chat from firm commitments", "Pushes action items directly to Asana and Linear", "Generates concise 3-minute executive summaries"], image: "ai_consultants_discussion.jpg" },
      { id: "ghostwriting", tabTitle: "Ghostwriting", title: "Leadership Communication & Memo Drafting", description: "Drafts all-hands announcements, strategy memos, and external partner updates matching the executive's unique voice and formatting preferences.", highlights: ["Learns communication style from historical writing samples", "Maintains corporate brand guidelines and legal guardrails", "Generates multi-slide executive presentation outlines", "Supports rapid voice-to-text dictation refinement"], image: "product_design_review.jpg" },
      { id: "calendar", tabTitle: "Time Defense", title: "Autonomous Calendar Defense & Focus Blocks", description: "Defends deep work focus hours by automatically declining low-priority meeting invites and grouping fragmented calls into dedicated blocks.", highlights: ["Protects minimum 3 hours of daily focus time", "Resolves executive scheduling conflicts autonomously", "Tracks recurring meeting ROI and recommends cancellations", "Integrates with personal and corporate calendars"], image: "multinational_team_summit.jpg" }
    ],
    workflow: [
      { step: "01", title: "Calendar Monitor", desc: "Monitors upcoming schedule and identifies required preparation." },
      { step: "02", title: "Context Dossier", desc: "Assembles briefing dossier from emails, CRM, and files." },
      { step: "03", title: "Live Synthesis", desc: "Transcribes meeting and isolates key decisions in real time." },
      { step: "04", title: "Deliverables Sync", desc: "Assigns tasks to team members with agreed deadlines." },
      { step: "05", title: "Follow-Up Draft", desc: "Generates tailored thank-you and recap email for participants." }
    ],
    interactiveDemo: {
      title: "Interactive Executive Assistant Simulator",
      subtitle: "Select a leadership scenario below to see how Assistant AI prepares dossiers, transcribes meetings, and dispatches action plans.",
      personas: [
        {
          name: "Board of Directors Strategy Prep",
          role: "Meeting: Q3 Revenue & Strategic Expansion Review",
          experience: "Attendees: 8 Board Members • 60 Mins",
          matchScore: 99,
          matchGrade: "Dossier Ready",
          summary: "Synthesized Q3 revenue (+34% YoY), highlighted European expansion progress, and prepared responses for expected margin questions.",
          competencies: [
            { skill: "Financial Data Synthesis", score: 99 },
            { skill: "Board Member Bio Dossiers", score: 98 },
            { skill: "Anticipated Q&A Prep", score: 97 },
            { skill: "Executive Voice Match", score: 99 }
          ],
          aiInsight: "Briefing delivered 15 mins prior. Action items auto-assigned to VP Finance immediately after call."
        }
      ]
    },
    integrations: [
      { name: "Zoom & Microsoft Teams", type: "Meeting Audio Plugin" },
      { name: "Google Meet", type: "Real-Time In-Browser Capture" },
      { name: "Google Calendar & Outlook", type: "Full Schedule Access" },
      { name: "Slack & WhatsApp", type: "Executive Chat Assistant" },
      { name: "Asana & Linear", type: "Action Item Task Sync" },
      { name: "Notion & Coda", type: "Executive Memo Vault" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified executive data protection" },
      { label: "Zero Audio Retention", desc: "Audio streams processed in memory and discarded" },
      { label: "Private LLM Encryption", desc: "End-to-end encrypted model isolation" },
      { label: "GDPR Compliant", desc: "Attendee consent compliance controls" }
    ],
    caseStudy: {
      client: "Global Tech Enterprise",
      industry: "Enterprise Software",
      headline: "How 120 C-Suite Executives Reclaimed 400+ Hours Weekly of High-Leverage Strategic Focus",
      quote: "Assistant AI is the closest thing to cloning your best executive assistant. Our leadership team is dramatically more organized, responsive, and accountable.",
      author: "Chief Executive Officer",
      company: "Public Cloud Enterprise",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "3.5 hrs", label: "Saved per executive daily" },
        { stat: "100%", label: "Post-meeting deliverables logged" },
        { stat: "4.9/5", label: "Executive satisfaction score" }
      ]
    }
  },
  {
    id: "ai-studio",
    category: "Productivity AI",
    name: "AI Studio",
    tagline: "Enterprise LLM Development Workbench, Prompt IDE & Fine-Tuning Sandbox",
    badge: "PRODUCTIVITY // DEVELOPER TOOLING",
    titleLight: "Build & Fine-Tune Models with",
    titleBold: "AI Studio",
    description: "The complete enterprise IDE for building, evaluating, and deploying custom AI applications. Features prompt engineering sandboxes, RLHF evaluation pipelines, and one-click production API deployment.",
    bgImage: "saas_cloud_platform_ui.jpg",
    liveBadge: "v5.0 Developer Ready",
    metrics: [
      { value: "10x", label: "Faster Model Evaluation", sub: "Automated regression testing" },
      { value: "40%", label: "Inference Token Cost Savings", sub: "Dynamic model routing & quantization" },
      { value: "< 20ms", label: "Gateway Routing Overhead", sub: "Ultra-low latency inference mesh" },
      { value: "100%", label: "Model Governance & Auditing", sub: "Complete prompt & output logs" }
    ],
    overview: {
      heading: "The Complete Enterprise LLMOps Platform from Experimentation to Production",
      description: "Building production-grade AI applications requires more than just calling raw API endpoints. AI Studio provides an integrated workbench for prompt optimization, fine-tuning open-weights models (Llama, Mistral), evaluating hallucinations, and managing model guardrails at scale.",
      keyPoints: [
        "Visual prompt testing sandbox with side-by-side model comparisons",
        "Automated evaluation metrics (ROUGE, BLEU, G-Eval, Hallucination Index)",
        "LoRA and QLoRA fine-tuning workflows on private enterprise clusters",
        "Production AI Gateway with load balancing, caching, and rate limiting"
      ]
    },
    features: [
      { id: "promptide", tabTitle: "Prompt IDE", title: "Collaborative Prompt Engineering Sandbox", description: "Design, test, and version-control complex multi-turn system prompts across 20+ foundational models simultaneously.", highlights: ["Side-by-side latency, cost, and output comparison", "Variables and dynamic template injection support", "Git-like version control for prompt commits", "One-click deployment to REST and GraphQL APIs"], image: "multimodal_ai_workbench.jpg" },
      { id: "evaluation", tabTitle: "Evaluations", title: "Automated Regression & Hallucination Testing", description: "Run automated test suites across thousands of synthetic and historical customer test cases before promoting prompt changes to production.", highlights: ["Custom evaluation rubrics and automated grading", "Detects semantic drift and hallucination regressions", "Red-teaming adversarial vulnerability testing", "Continuous evaluation metrics dashboard"], image: "deep_learning_tensor.jpg" },
      { id: "finetuning", tabTitle: "Fine-Tuning", title: "Private Domain Model Fine-Tuning (LoRA / QLoRA)", description: "Fine-tune open-weights models on your proprietary enterprise datasets with automated dataset preparation and validation.", highlights: ["Automated data cleansing and synthetic expansion", "Cost-effective LoRA and full-parameter tuning", "Exports GGUF and TensorRT-LLM optimized weights", "Runs on private Kubernetes GPU clusters"], image: "microchip_wafer_lithography.jpg" },
      { id: "gateway", tabTitle: "AI Gateway", title: "Enterprise High-Speed AI Proxy & Guardrails", description: "Route production traffic across multiple LLM providers with automatic fallback, semantic caching, rate limiting, and PII masking.", highlights: ["Reduces token costs up to 40% with semantic caching", "Sub-second automatic failover when providers outage", "Enforces strict PII masking and content moderation", "Unified usage billing and quota tracking by team"], image: "server_rack_neon_glow.jpg" }
    ],
    workflow: [
      { step: "01", title: "Prompt Design", desc: "Engineers prototype prompts across frontier and open-weights models." },
      { step: "02", title: "Dataset Eval", desc: "Automated benchmark runs 1,000+ test cases to grade accuracy." },
      { step: "03", title: "Fine-Tuning", desc: "Trains custom domain weights using private enterprise data." },
      { step: "04", title: "Guardrails", desc: "Applies PII filters, content moderation, and latency thresholds." },
      { step: "05", title: "Deploy Gateway", desc: "Deploys to production with high-speed caching and auto-failover." }
    ],
    interactiveDemo: {
      title: "Interactive Model Evaluation & Tuning Simulator",
      subtitle: "Select an enterprise AI workload below to see how AI Studio benchmarks model performance, evaluates latency, and optimizes token costs.",
      personas: [
        {
          name: "Legal Contract Clause Extractor",
          role: "Benchmark: Llama-3-70B vs GPT-4o vs Fine-Tuned 8B",
          experience: "Test Suite: 500 Complex MSA Contracts",
          matchScore: 99,
          matchGrade: "Fine-Tuned 8B Selected",
          summary: "Fine-Tuned Llama-3-8B achieved 98.6% extraction accuracy matching frontier models while cutting inference latency by 72% and token costs by 84%.",
          competencies: [
            { skill: "Field Accuracy Score", score: 99 },
            { skill: "Latency Reduction", score: 96 },
            { skill: "Cost Optimization", score: 98 },
            { skill: "Guardrail Compliance", score: 100 }
          ],
          aiInsight: "Deployed Fine-Tuned 8B model to private EU inference cluster with \$180K annual API cost savings."
        }
      ]
    },
    integrations: [
      { name: "OpenAI, Anthropic & Google", type: "Frontier Model API Connectors" },
      { name: "Hugging Face & Ollama", type: "Open-Weights Model Registry" },
      { name: "vLLM & TensorRT-LLM", type: "Optimized GPU Inference Engine" },
      { name: "LangChain & LlamaIndex", type: "Framework SDK Support" },
      { name: "Kubernetes & Ray", type: "Distributed Training Orchestration" },
      { name: "Datadog & OpenTelemetry", type: "LLM Observability Traces" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Audited developer infrastructure security" },
      { label: "On-Premises GPU Support", desc: "Deployable entirely behind your corporate firewall" },
      { label: "Role-Based Token Keys", desc: "Granular spending limits and API key scoping" },
      { label: "Zero Model Leakage", desc: "Custom weights remain 100% proprietary to your enterprise" }
    ],
    caseStudy: {
      client: "Global FinTech Platform",
      industry: "Financial Technology",
      headline: "How 200 AI Engineers Cut Model Inference Costs by 65% while Shipping 8 New GenAI Features",
      quote: "AI Studio gave us enterprise-grade observability and testing. We moved from fragile ad-hoc prompt testing to deterministic engineering with automated quality gates.",
      author: "VP of Artificial Intelligence",
      company: "Fortune 500 Fintech",
      image: "cloud_data_center_hall.jpg",
      results: [
        { stat: "65%", label: "Reduction in monthly LLM token costs" },
        { stat: "4x", label: "Faster deployment velocity to production" },
        { stat: "99.99%", label: "Inference gateway reliability" }
      ]
    }
  },
  {
    id: "sales-ai",
    category: "Business AI",
    name: "Sales AI",
    tagline: "Predictive Lead Scoring, Automated Outreach & Real-Time Deal Execution Intelligence",
    badge: "BUSINESS AI // REVENUE INTELLIGENCE",
    titleLight: "Accelerate Revenue Cycles with",
    titleBold: "Sales AI",
    description: "Supercharge your revenue teams. Sales AI analyzes customer intent signals, scores leads with predictive algorithms, automates personalized multi-channel outreach, and provides real-time conversational call coaching.",
    bgImage: "crm_revenue_forecasting.jpg",
    liveBadge: "v4.3 Production Ready",
    metrics: [
      { value: "35%", label: "Increase in Win Rates", sub: "Data-driven deal coaching" },
      { value: "4.2x", label: "More Qualified Pipeline", sub: "Intent-based automated sourcing" },
      { value: "45%", label: "Shorter Sales Cycles", sub: "Automated objection handling" },
      { value: "8 hrs", label: "Saved Weekly Per Account Exec", sub: "Zero manual CRM logging" }
    ],
    overview: {
      heading: "The Autonomous Revenue Engine for High-Velocity Enterprise Sales Teams",
      description: "Sales representatives spend less than 30% of their time actually selling due to manual CRM data entry, prospecting research, and drafting follow-up emails. Sales AI eliminates administrative friction.\n\nFrom scoring inbound leads using real-time intent signals to listening to live sales calls and surfacing battlecards and objection-handling tactics in real time, Sales AI helps reps close deals faster.",
      keyPoints: [
        "Predictive lead scoring based on hiring signals, tech stack changes, and web intent",
        "Real-time live call coaching with instant competitor battlecard surfacing",
        "Autonomous multi-channel personalized email and LinkedIn outreach sequences",
        "Automated CRM thread logging, deal stage updates, and pipeline risk forecasting"
      ]
    },
    features: [
      { id: "leadscoring", tabTitle: "Lead Scoring", title: "Predictive Intent-Driven Lead Scoring", description: "Continuously monitors buyer intent signals, funding announcements, and technology adoption to surface high-converting accounts.", highlights: ["Predicts deal conversion probability with 94% accuracy", "Enriches contacts with verified email and phone coordinates", "Identifies decision-maker buying committees", "Integrates with Salesforce, HubSpot, and Gong"], image: "crm_revenue_forecasting.jpg" },
      { id: "callcoaching", tabTitle: "Call Coaching", title: "Real-Time Conversational Call Coaching", description: "Listens to live Zoom, Teams, and dialer calls, surfacing competitor comparison talking points and customer objection responses in real time.", highlights: ["Live battlecard suggestions when competitor names are mentioned", "Tracks speaker talk-to-listen ratio and sentiment", "Automated call summary with agreed next steps", "Identifies buyer hesitation and budget indicators"], image: "ai_consultants_discussion.jpg" },
      { id: "outreach", tabTitle: "Personalized Outreach", title: "Autonomous Hyper-Personalized Sequences", description: "Generates tailored outbound cold emails referencing the prospect's recent podcast interviews, news articles, and strategic company goals.", highlights: ["3.8x higher response rate than generic mail templates", "Automated multi-step follow-ups with dynamic context", "A/B testing of subject lines and value propositions", "Integrated with Outlook, Gmail, and Salesloft"], image: "smart_inbox_triage.jpg" },
      { id: "forecast", tabTitle: "Pipeline Forecast", title: "Algorithmic Revenue & Deal Risk Forecasting", description: "Analyzes email sentiment, executive engagement frequency, and proposal changes to forecast quarterly pipeline revenue with objective precision.", highlights: ["Replaces subjective rep forecasts with algorithmic truth", "Flags dormant deals at risk of slipping quarter", "Recommends tactical interventions to save stalled deals", "Executive board-ready revenue forecast reports"], image: "fintech_algorithmic_trading.jpg" }
    ],
    workflow: [
      { step: "01", title: "Signal Detection", desc: "Monitors intent data and identifies high-fit target accounts." },
      { step: "02", title: "Hyper-Personalized Outreach", desc: "Dispatches research-backed contextual outreach sequences." },
      { step: "03", title: "Live Call Copilot", desc: "Surfaces real-time battlecards during prospect discovery calls." },
      { step: "04", title: "CRM Sync", desc: "Logs summary, action items, and updates opportunity stage automatically." },
      { step: "05", title: "Deal Health Tracking", desc: "Monitors momentum and alerts reps to closing risks." }
    ],
    interactiveDemo: {
      title: "Interactive Deal Execution & Coaching Simulator",
      subtitle: "Select an enterprise sales opportunity below to see how Sales AI analyzes deal signals, scores win probability, and provides live call coaching.",
      personas: [
        {
          name: "Fortune 500 Enterprise Cloud Modernization",
          role: "Opportunity Value: \$1.8M ARR • Stage: Proposal Review",
          experience: "Champion: VP Cloud Infra • Competitor: Legacy Tech",
          matchScore: 92,
          matchGrade: "Win Probability: 88%",
          summary: "Champion requested security whitepaper and clarification on multi-region failover. Competitor offering 15% discount.",
          competencies: [
            { skill: "Champion Engagement Index", score: 96 },
            { skill: "Competitor Battlecard Match", score: 98 },
            { skill: "Economic Buyer Touchpoints", score: 90 },
            { skill: "Closing Velocity", score: 94 }
          ],
          aiInsight: "Surfaced battlecard highlighting our zero-downtime SLA. Recommended scheduling CFO meeting before Thursday to lock fiscal year discount."
        }
      ]
    },
    integrations: [
      { name: "Salesforce CRM", type: "Full Bi-Directional Deal Sync" },
      { name: "HubSpot", type: "Pipeline & Contact Ingestion" },
      { name: "Gong & Chorus", type: "Call Audio & Transcript Ingestion" },
      { name: "Salesloft & Outreach", type: "Sequence Execution Engine" },
      { name: "LinkedIn Sales Navigator", type: "Prospect Enrichment" },
      { name: "Slack", type: "Real-Time Deal Desk Alerts" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified enterprise sales data protection" },
      { label: "GDPR & CAN-SPAM", desc: "Compliant email deliverability and opt-out handling" },
      { label: "Private Voice Encryption", desc: "Audio processed securely with zero data sharing" },
      { label: "Role-Based Territory Permissions", desc: "Reps only access assigned accounts" }
    ],
    caseStudy: {
      client: "Global Enterprise Cloud Provider",
      industry: "Cloud & Cybersecurity",
      headline: "How 450 Account Executives Boosted Win Rates by 38% and Added \$42M in Pipeline",
      quote: "Sales AI changed how our team sells. Reps enter calls fully briefed with real-time battlecards at their fingertips. Our ramp time for new reps dropped by 50%.",
      author: "Chief Commercial Officer",
      company: "Fast-Growing SaaS Leader",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "38%", label: "Increase in closed-won deal rates" },
        { stat: "\$42M", label: "Net new pipeline generated" },
        { stat: "50%", label: "Faster new sales rep onboarding" }
      ]
    }
  },
  {
    id: "marketing-ai",
    category: "Business AI",
    name: "Marketing AI",
    tagline: "Autonomous Multi-Channel Campaign Generation & Hyper-Personalized Growth Engine",
    badge: "BUSINESS AI // GROWTH & CONTENT",
    titleLight: "Hyper-Personalized Growth with",
    titleBold: "Marketing AI",
    description: "Scale on-brand enterprise marketing. Marketing AI synthesizes high-converting copy, localized ad campaigns, thought leadership whitepapers, and dynamic personalized web experiences at global scale.",
    bgImage: "product_design_review.jpg",
    liveBadge: "v4.1 Production Ready",
    metrics: [
      { value: "4.5x", label: "Increase in Content Output", sub: "Without expanding creative agency spend" },
      { value: "65%", label: "Higher CTR & Conversion", sub: "Dynamic persona-based personalization" },
      { value: "100%", label: "Brand Guidelines Alignment", sub: "Automated tone & compliance filters" },
      { value: "35+", label: "Global Languages Localized", sub: "Context-aware cultural adaptation" }
    ],
    overview: {
      heading: "Autonomous Multi-Channel Marketing Architecture for Enterprise Brands",
      description: "Scaling marketing campaigns across multiple buyer personas, languages, and channels requires weeks of agency drafting and compliance review. Marketing AI acts as an autonomous creative engine.\n\nFrom generating localized ad creatives and SEO pillar content to personalizing landing pages in real time for specific target accounts, Marketing AI accelerates growth.",
      keyPoints: [
        "Brand-governed content generation trained on corporate voice and style guides",
        "Dynamic landing page and email copy personalization for ABM target accounts",
        "Multi-lingual localization with cultural context adaptation across 35+ regions",
        "Automated multi-variant A/B headline and creative testing engine"
      ]
    },
    features: [
      { id: "content", tabTitle: "Content Engine", title: "Brand-Governed Content & Whitepaper Generation", description: "Produces authoritative thought leadership articles, case studies, and social campaigns aligned with your tone of voice.", highlights: ["Trained on existing corporate brand and style guidelines", "Integrated SEO keyword optimization and readability scoring", "Automatic multi-format adaptation (blog ➔ LinkedIn ➔ newsletter)", "Plagiarism and copyright safety verification"], image: "multimodal_ai_workbench.jpg" },
      { id: "abm", tabTitle: "ABM Personalization", title: "Dynamic Account-Based Marketing (ABM) Engine", description: "Personalizes website headlines, case study proofs, and ad copy in real time based on the visitor's industry, company size, and tech stack.", highlights: ["65% higher landing page conversion rates", "Integrates with 6sense, Demandbase, and Clearbit", "Generates custom 1-to-1 account pitch decks in seconds", "Dynamic industry-specific social proof swapping"], image: "saas_cloud_platform_ui.jpg" },
      { id: "localization", tabTitle: "Localization", title: "Context-Aware Global Market Localization", description: "Translates and culturally adapts marketing campaigns across 35+ global languages without robotic phrasing.", highlights: ["Adapts cultural idioms, currencies, and case examples", "Ensures regional regulatory and advertising compliance", "Consistent global brand tone across all markets", "Accelerates new international market launches"], image: "multinational_team_summit.jpg" },
      { id: "testing", tabTitle: "A/B Testing", title: "Autonomous Campaign Multi-Variant Optimization", description: "Continuously generates and tests dozens of creative variants, reallocating ad budget to top-performing combinations.", highlights: ["Automated ad copy variant generation for Google & LinkedIn", "Predictive click-through rate forecasting", "Real-time budget optimization recommendations", "Cross-channel attribution modeling dashboard"], image: "crm_revenue_forecasting.jpg" }
    ],
    workflow: [
      { step: "01", title: "Campaign Brief", desc: "Marketing lead enters target persona, product goals, and channels." },
      { step: "02", title: "Asset Synthesis", desc: "Generates multi-channel copy, ads, landing pages, and email copy." },
      { step: "03", title: "Brand Audit", desc: "Automated guardrails verify compliance, tone, and legal accuracy." },
      { step: "04", title: "Multi-Variant Launch", desc: "Deploys variants to CMS and advertising platforms simultaneously." },
      { step: "05", title: "Autonomous Optimization", desc: "Continuously monitors conversion and promotes winning variants." }
    ],
    interactiveDemo: {
      title: "Interactive Campaign Generation Simulator",
      subtitle: "Select a marketing campaign type below to see Marketing AI generate multi-channel assets tailored to specific buyer personas.",
      personas: [
        {
          name: "Enterprise FinTech ABM Launch",
          role: "Target: CTOs & Head of Risk at Tier-1 Banks",
          experience: "Channels: LinkedIn Ads • Landing Page • Email Sequence",
          matchScore: 98,
          matchGrade: "Brand Approved",
          summary: "Generated 3 executive headline variants focused on zero-trust AI compliance, a 4-part email sequence, and tailored case study highlights.",
          competencies: [
            { skill: "Brand Tone Alignment", score: 100 },
            { skill: "Technical Accuracy", score: 98 },
            { skill: "SEO & Intent Score", score: 96 },
            { skill: "Conversion Optimization", score: 97 }
          ],
          aiInsight: "Predicted 4.2% LinkedIn CTR (2.5x industry benchmark). Ready for one-click CMS publishing."
        }
      ]
    },
    integrations: [
      { name: "HubSpot & Marketo", type: "Marketing Automation Sync" },
      { name: "WordPress, Webflow & Contentful", type: "CMS Publishing Plugin" },
      { name: "Google Ads & LinkedIn Ads", type: "Ad Creative Campaign Ingestion" },
      { name: "6sense & Demandbase", type: "ABM Intent Data Stream" },
      { name: "Google Analytics 4", type: "Conversion Feedback Loop" },
      { name: "Figma", type: "Design Token & Copy Sync" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified marketing data protection" },
      { label: "Zero Public AI Retention", desc: "Proprietary campaigns never leaked" },
      { label: "Copyright Safety Filter", desc: "Guarantees original, non-infringing creative output" },
      { label: "Role-Based Publishing", desc: "Requires human marketing lead sign-off" }
    ],
    caseStudy: {
      client: "Global Cybersecurity Leader",
      industry: "Enterprise Cybersecurity",
      headline: "How a Global Security Brand Scaled Inbound MQLs by 180% While Cutting Agency Spend by 60%",
      quote: "Marketing AI enabled our 10-person marketing team to produce the output of a 50-person agency. Our personalized ABM campaigns drove record pipeline conversions.",
      author: "Chief Marketing Officer",
      company: "Top Enterprise Security Firm",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "180%", label: "Increase in qualified inbound leads" },
        { stat: "60%", label: "Reduction in external agency fees" },
        { stat: "35+", label: "International regional campaigns launched" }
      ]
    }
  },
  {
    id: "support-ai",
    category: "Business AI",
    name: "Support AI",
    tagline: "Autonomous Multi-Lingual Customer Support & Tier-1 Ticket Resolution Platform",
    badge: "BUSINESS AI // CUSTOMER EXPERIENCE",
    titleLight: "24/7 Delightful Customer Support with",
    titleBold: "Support AI",
    description: "Deploy autonomous customer support agents that resolve up to 75% of inquiries instantly across web chat, email, and voice. Seamlessly escalates complex issues to human agents with rich contextual briefing notes.",
    bgImage: "support_ticket_automation.jpg",
    liveBadge: "v4.6 Production Ready",
    metrics: [
      { value: "75%", label: "First-Contact Resolution", sub: "Autonomous ticket settlement" },
      { value: "< 2s", label: "Average Response Time", sub: "Instant 24/7 multi-channel replies" },
      { value: "96%", label: "CSAT Satisfaction Score", sub: "Empathetic, highly accurate answers" },
      { value: "60%", label: "Support Operating Cost Savings", sub: "Deflect repetitive tier-1 tickets" }
    ],
    overview: {
      heading: "Autonomous Customer Experience Architecture that Resolves Issues at Machine Speed",
      description: "Customer support backlogs, long hold times, and robotic canned responses destroy brand loyalty. Support AI deploys cognitive agents that take real actions — issuing refunds, resetting credentials, updating shipping addresses, and diagnosing technical bugs in seconds.",
      keyPoints: [
        "Autonomous action-taking agents that integrate with your billing and order databases",
        "Seamless human agent escalation with synthesized conversation briefing notes",
        "Native omnichannel support across Web Chat, WhatsApp, Email, Zendesk, and Voice",
        "Real-time sentiment monitoring that flags angry customers for immediate VIP routing"
      ]
    },
    features: [
      { id: "resolution", tabTitle: "Autonomous Triage", title: "Sub-Second Tier-1 Autonomous Resolution", description: "Resolves common inquiries (order tracking, billing disputes, password resets, product setup) without human intervention.", highlights: ["Executes database actions via secure transactional APIs", "Zero customer wait time across all time zones", "Maintains conversational memory throughout ticket lifecycle", "Multi-lingual support across 45+ languages"], image: "support_ticket_automation.jpg" },
      { id: "escalation", tabTitle: "Smart Escalation", title: "Intelligent Human Agent Escalation Dossiers", description: "When a complex issue requires human empathy or policy exceptions, Support AI routes the ticket to the right specialist with a 3-bullet briefing.", highlights: ["Summarizes the customer's problem and attempted fixes", "Highlights customer sentiment and lifetime value (LTV)", "Drafts recommended solutions for the human agent", "Eliminates frustrating customer repetition"], image: "ai_consultants_discussion.jpg" },
      { id: "voice", tabTitle: "Voice AI Agent", title: "Ultra-Low Latency Conversational Voice AI", description: "Handles incoming telephone support calls with natural human-like voice synthesis, ultra-low latency interruptions, and instant telephony sync.", highlights: ["Under 400ms end-to-end voice latency", "Natural conversational interruptions and cadence", "Integrates with Genesys, Twilio, and Amazon Connect", "Automated call recording and CRM logging"], image: "multimodal_ai_workbench.jpg" },
      { id: "insights", tabTitle: "Product Telemetry", title: "Voice of the Customer & Bug Intelligence", description: "Analyzes thousands of daily support interactions to cluster recurring product bugs, UX confusion, and feature requests for engineering teams.", highlights: ["Auto-generates Jira bug reports with reproduction steps", "Real-time CSAT and NPS sentiment tracking", "Surfaces emerging product defect spikes immediately", "Executive customer health reporting dashboard"], image: "saas_cloud_platform_ui.jpg" }
    ],
    workflow: [
      { step: "01", title: "Inbound Channel", desc: "Customer reaches out via web chat, email, phone, or WhatsApp." },
      { step: "02", title: "Intent & Auth", desc: "Agent authenticates customer and identifies exact inquiry intent." },
      { step: "03", title: "Action Execution", desc: "Agent queries backend APIs and executes resolution immediately." },
      { step: "04", title: "Smart Escalation", desc: "Complex tickets route to specialist with a pre-written dossier." },
      { step: "05", title: "Feedback Loop", desc: "CSAT score collected and conversation synced to CRM." }
    ],
    interactiveDemo: {
      title: "Interactive Customer Support Resolution Simulator",
      subtitle: "Select a customer support scenario below to see Support AI authenticate users, execute backend actions, and resolve tickets in real time.",
      personas: [
        {
          name: "Urgent Enterprise Flight Booking Modification",
          role: "Channel: Web Chat • VIP Platinum Customer",
          experience: "Request: Reschedule London ➔ NYC flight due to weather",
          matchScore: 99,
          matchGrade: "Resolved in 14s",
          summary: "Authenticated passenger, verified airline waiver policy, rebooked to flight BA-178 at 14:00 GMT, and emailed updated boarding pass.",
          competencies: [
            { skill: "Identity Verification", score: 100 },
            { skill: "GDS API Flight Exchange", score: 99 },
            { skill: "Waiver Policy Check", score: 99 },
            { skill: "CSAT Experience Score", score: 98 }
          ],
          aiInsight: "Zero hold time. Ticket settled in 14 seconds with 5-star customer rating."
        }
      ]
    },
    integrations: [
      { name: "Zendesk & Freshdesk", type: "Full Ticket Lifecycle Sync" },
      { name: "Salesforce Service Cloud", type: "CRM Case Management" },
      { name: "Intercom & Drift", type: "Live Web Chat Widget" },
      { name: "Twilio & Amazon Connect", type: "Telephony Voice Stream" },
      { name: "Stripe & Shopify", type: "Billing & Order Action API" },
      { name: "Jira Service Management", type: "Engineering Bug Sync" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified customer support data protection" },
      { label: "PCI-DSS Compliant", desc: "Credit card masking and secure billing actions" },
      { label: "HIPAA Certified", desc: "Secure healthcare patient support" },
      { label: "Zero Public AI Retention", desc: "Conversations never used for public training" }
    ],
    caseStudy: {
      client: "Global E-Commerce Marketplace",
      industry: "Retail & Marketplace",
      headline: "How 1.2M Monthly Customer Tickets Were Resolved in Under 10 Seconds with a 96% CSAT Score",
      quote: "Support AI transformed our customer satisfaction. During peak holiday shopping, our resolution time dropped from 18 hours to 8 seconds while cutting support costs in half.",
      author: "VP of Customer Operations",
      company: "Top 5 Global E-Commerce Platform",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "74%", label: "Autonomous straight-through resolution" },
        { stat: "96%", label: "Customer satisfaction rating (CSAT)" },
        { stat: "\$3.6M", label: "Annual customer service savings" }
      ]
    }
  },
  {
    id: "finance-ai",
    category: "Business AI",
    name: "Finance AI",
    tagline: "Sub-Second Ledger Automation, Fraud Detection & Dynamic Cash Flow Forecasting",
    badge: "BUSINESS AI // FINANCIAL OPERATIONS",
    titleLight: "Autonomous Financial Operations with",
    titleBold: "Finance AI",
    description: "Automate accounts payable/receivable, eliminate expense reconciliation backlogs, detect fraud patterns in real time, and provide executive leadership with continuous rolling cash flow forecasts.",
    bgImage: "fintech_algorithmic_trading.jpg",
    liveBadge: "v4.5 Enterprise Ready",
    metrics: [
      { value: "95%", label: "Touchless 3-Way Matching", sub: "Invoices, POs & receiving reports" },
      { value: "< 10ms", label: "Real-Time Fraud Triage", sub: "Immediate unauthorized spend alert" },
      { value: "4x", label: "Faster Month-End Close", sub: "Close financial books in hours" },
      { value: "\$2.8M", label: "Early Payment Discounts Unlocked", sub: "Automated AP dynamic discounting" }
    ],
    overview: {
      heading: "The Autonomous CFO Operating System for Real-Time Corporate Financial Control",
      description: "Financial controllers and AP teams waste hundreds of hours manually matching invoices against purchase orders, tracking missing receipts, and consolidating spreadsheets for month-end close. Finance AI delivers touchless accounting.\n\nFrom automated 3-way reconciliation and duplicate invoice prevention to algorithmic cash flow forecasting, Finance AI gives leadership real-time financial clarity.",
      keyPoints: [
        "Touchless 3-way matching across purchase orders, invoices, and receiving slips",
        "Real-time fraud anomaly detection and unauthorized transaction blocking",
        "Automated continuous month-end reconciliation closing books in hours",
        "Dynamic multi-scenario cash flow and working capital forecasting"
      ]
    },
    features: [
      { id: "ap", tabTitle: "AP / AR Automation", title: "Touchless 3-Way Invoice & PO Reconciliation", description: "Matches incoming supplier invoices against open POs and warehouse receiving slips, scheduling payments to maximize early cash discounts.", highlights: ["Automated line-item validation against contract rates", "Flags invoice discrepancies before payment disbursement", "Captures 2/10 net 30 supplier cash discounts", "Integrates with SAP, Oracle, and NetSuite"], image: "automated_invoice_processing.jpg" },
      { id: "fraud", tabTitle: "Fraud Detection", title: "Real-Time Fraud & Anomaly Triage", description: "Monitors corporate credit card spend, wire transfers, and supplier bank account changes to intercept fraud attempts in milliseconds.", highlights: ["Flags split-invoicing under manager approval limits", "Detects altered vendor banking coordinates", "Stops duplicate and ghost vendor payments", "Continuous compliance check against OFAC / AML lists"], image: "cyber_threat_map.jpg" },
      { id: "close", tabTitle: "Month-End Close", title: "Autonomous Continuous Month-End Close", description: "Reconciles intercompany balances, bank transactions, and ledger accruals in real time throughout the month instead of a frantic 10-day sprint.", highlights: ["Reduces month-end close cycle from 12 days to 36 hours", "Automated currency translation and consolidation", "Generates audit-ready balance sheet schedules", "Executive financial briefing packs compiled automatically"], image: "tech_architect_whiteboard.jpg" },
      { id: "forecasting", tabTitle: "Cash Forecasting", title: "Dynamic Multi-Scenario Cash Flow Forecasting", description: "Projects rolling 13-week cash positions and revenue trajectories based on real-time collection velocity and outstanding commitments.", highlights: ["Simulates interest rate and supply chain inflation scenarios", "Predicts DSO (Days Sales Outstanding) by customer cohort", "Optimizes working capital and short-term liquidity", "Board-ready visual cash flow forecast dashboards"], image: "fintech_algorithmic_trading.jpg" }
    ],
    workflow: [
      { step: "01", title: "Transaction Capture", desc: "Ingests electronic invoices, bank feeds, and card transactions." },
      { step: "02", title: "3-Way Match", desc: "Validates line items against purchase orders and receiving logs." },
      { step: "03", title: "Fraud Audit", desc: "Evaluates anomaly risk scoring and vendor legitimacy." },
      { step: "04", title: "Ledger Posting", desc: "Posts balanced journal entries directly to ERP general ledger." },
      { step: "05", title: "Cash Optimization", desc: "Schedules payment disbursement to capture supplier discounts." }
    ],
    interactiveDemo: {
      title: "Interactive Financial Reconciliation Simulator",
      subtitle: "Select a financial transaction below to see Finance AI perform 3-way matching, audit vendor terms, and detect invoice fraud anomalies.",
      personas: [
        {
          name: "Supplier Invoice vs PO Discrepancy",
          role: "Vendor: Global Server Hardware Corp // \$340,000",
          experience: "Invoice #INV-9402 • 14 Line Items",
          matchScore: 89,
          matchGrade: "Price Variance Flagged",
          summary: "Identified a \$14,000 price variance on Line Item 4 (NVMe drives charged at \$420 vs contracted PO rate of \$380). Flagged for auto-credit.",
          competencies: [
            { skill: "3-Way Matching Precision", score: 99 },
            { skill: "Contract Rate Verification", score: 98 },
            { skill: "Vendor History Check", score: 97 },
            { skill: "Auto-Debit Memo Generation", score: 100 }
          ],
          aiInsight: "Generated automated vendor debit memo for \$14,000 variance and approved \$326,000 baseline payment."
        }
      ]
    },
    integrations: [
      { name: "SAP S/4HANA", type: "Native General Ledger Connector" },
      { name: "Oracle NetSuite", type: "Automated AP/AR Postings" },
      { name: "Workday Financial Management", type: "Expense & Ledger Sync" },
      { name: "J.P. Morgan & Plaid", type: "Direct Multi-Bank Data Feeds" },
      { name: "Coupa & Tipalti", type: "Procure-to-Pay Integration" },
      { name: "QuickBooks Enterprise", type: "Mid-Market Accounting Sync" }
    ],
    security: [
      { label: "SOC 1 & SOC 2 Type II", desc: "Certified financial data controls and SOX compliance" },
      { label: "Immutable Audit Ledger", desc: "Cryptographically timestamped transaction history" },
      { label: "Dual-Control Permissions", desc: "Segregation of duties enforced on all wire transfers" },
      { label: "Zero Public AI Retention", desc: "Financial data never stored on public models" }
    ],
    caseStudy: {
      client: "Global Manufacturing Enterprise",
      industry: "Manufacturing & Industrial",
      headline: "How 45,000 Monthly Invoices Were Reconciled with 95% Touchless Automation",
      quote: "Finance AI eliminated our invoice backlogs and saved us \$2.8M in missed supplier early-payment discounts in our very first year.",
      author: "Chief Financial Officer",
      company: "Global Industrial Manufacturer",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "95%", label: "Touchless 3-way invoice matching" },
        { stat: "4 Days", label: "Saved on month-end close cycle" },
        { stat: "\$2.8M", label: "Captured early-pay supplier discounts" }
      ]
    }
  },
  {
    id: "future-products",
    category: "Innovation",
    name: "Future Products",
    tagline: "Next-Horizon Autonomous Computing, Quantum-Assisted Models & Spatial AI",
    badge: "INNOVATION // NEXT-GEN R&D",
    titleLight: "Building What Comes Next with",
    titleBold: "Future Products",
    description: "Explore experimental prototypes and early-access platforms from the DevOpsTRIO Innovation Lab, including spatial intelligence, quantum neural networks, and physical AI robotics.",
    bgImage: "quantum_laser_optics.jpg",
    liveBadge: "v0.9 Experimental Lab",
    metrics: [
      { value: "50+", label: "Active Patents & Research Papers", sub: "Applied frontier science" },
      { value: "100x", label: "Theoretical Quantum Speedup", sub: "Tensor network simulation" },
      { value: "Zero", label: "Sim-to-Real Domain Gap", sub: "Spatial digital twin fidelity" },
      { value: "4 Weeks", label: "From Lab POC to Pilot", sub: "Accelerated enterprise sandbox" }
    ],
    overview: {
      heading: "Frontier AI Technologies Incubated for Tomorrow's Enterprise",
      description: "The next wave of technological disruption is already unfolding in our research laboratories. Future Products is our dedicated innovation incubator where enterprise partners co-create next-horizon applications.\n\nFrom quantum-assisted portfolio optimization and spatial robotics simulation to neuromorphic edge architectures, we help forward-thinking enterprises lead rather than react.",
      keyPoints: [
        "Quantum-classical hybrid neural algorithms for NP-hard optimization",
        "Spatial intelligence and physics-grounded digital twins for robotics",
        "Neuromorphic computing on sub-watt edge AI silicon",
        "Collaborative joint-venture IP incubation and enterprise sandboxes"
      ]
    },
    features: [
      { id: "quantum", tabTitle: "Quantum AI", title: "Quantum-Classical Hybrid Tensor Networks", description: "Leveraging quantum tensor network algorithms to solve complex logistics routing, protein folding, and financial risk models.", highlights: ["Simulates quantum circuits on classical GPU supercomputers", "Solves high-dimensional combinatorial optimization", "Sub-second portfolio risk recalculations", "Co-authored with leading academic research institutions"], image: "quantum_cryo_computing.jpg" },
      { id: "spatial", tabTitle: "Spatial AI", title: "Physics-Grounded Spatial Digital Twins", description: "Simulate real-world industrial environments with millimeter precision to train autonomous robotic arms and automated factory vehicles.", highlights: ["Zero sim-to-real transfer loss for robotics", "Real-time photorealistic sensor simulation (LiDAR, Camera)", "Synthetic training data generation for edge vision", "Interactive VR/AR digital twin command centers"], image: "robotic_assembly_precision.jpg" },
      { id: "neuromorphic", tabTitle: "Edge Silicon", title: "Ultra-Low Power Neuromorphic Edge Computing", description: "Deploying spiking neural network architectures on sub-watt edge processors for mission-critical aerospace and remote infrastructure monitoring.", highlights: ["Operates on micro-watt battery power for 5+ years", "Real-time edge event processing with zero cloud latency", "Air-gapped security for defense and critical infrastructure", "Adaptive on-device lifelong continual learning"], image: "microchip_wafer_lithography.jpg" },
      { id: "bio", tabTitle: "Bio AI", title: "Computational Biology & Molecular Modeling", description: "Neural foundation models trained on biological structures to accelerate drug candidate screening and chemical material discovery.", highlights: ["Predicts protein-ligand binding affinities overnight", "Generative molecular design with target safety constraints", "Accelerates lab discovery cycles from years to weeks", "Enterprise biotech data sandbox security"], image: "clinical_ai_diagnostics.jpg" }
    ],
    workflow: [
      { step: "01", title: "Problem Definition", desc: "Identify high-value frontier challenge unsolvable with classical computing." },
      { step: "02", title: "Sandbox Setup", desc: "Deploy isolated lab sandbox with quantum simulation and GPU clusters." },
      { step: "03", title: "Algorithm Design", desc: "Research engineers formulate proprietary neural tensor architecture." },
      { step: "04", title: "Simulation & Benchmark", desc: "Rigorous stress testing against real-world production datasets." },
      { step: "05", title: "Pilot Deployment", desc: "Transition prototype into a secure enterprise pilot deployment." }
    ],
    interactiveDemo: {
      title: "Interactive Frontier Research Sandbox Simulator",
      subtitle: "Select an active innovation lab initiative below to explore experimental benchmarks, algorithms, and prototype results.",
      personas: [
        {
          name: "Quantum Tensor Logistics Route Optimization",
          role: "Experiment: Global Maritime 10,000-Port Traveling Salesman",
          experience: "Hardware: Hybrid GPU-Quantum Tensor Simulation",
          matchScore: 99,
          matchGrade: "Breakthrough Benchmark",
          summary: "Solved 10,000-node global logistics dispatch in 3.4 seconds compared to 48 hours on classical integer programming, cutting fleet fuel consumption by 14%.",
          competencies: [
            { skill: "Quantum Tensor Speedup", score: 99 },
            { skill: "Energy Efficiency", score: 98 },
            { skill: "Mathematical Proof", score: 100 },
            { skill: "Sim-to-Real Readiness", score: 95 }
          ],
          aiInsight: "Ready for enterprise pilot testing with commercial shipping partners."
        }
      ]
    },
    integrations: [
      { name: "NVIDIA Omniverse & Isaac Sim", type: "Spatial Robotics Simulation" },
      { name: "Qiskit & PennyLane", type: "Quantum Algorithm Frameworks" },
      { name: "PyTorch & JAX", type: "Frontier Tensor Computation" },
      { name: "ROS 2 (Robot Operating System)", type: "Autonomous Robotics Middleware" },
      { name: "AWS Braket & Azure Quantum", type: "Cloud Quantum Hardware APIs" },
      { name: "Custom Edge Silicon SDKs", type: "Neuromorphic Hardware Drivers" }
    ],
    security: [
      { label: "Strict IP Isolation", desc: "Co-developed patents and proprietary models belong to the enterprise" },
      { label: "Air-Gapped Lab Enclaves", desc: "Zero risk of data leakage during R&D experimentation" },
      { label: "SOC 2 Type II Certified", desc: "Audited lab infrastructure security" },
      { label: "Ethical AI Principles", desc: "Rigorous safety and alignment testing on all emerging models" }
    ],
    caseStudy: {
      client: "Global Aerospace & Defense Conglomerate",
      industry: "Aerospace & Defense",
      headline: "How Autonomous Satellite Constellation Telemetry Was Simulated with Zero Latency",
      quote: "The DevOpsTRIO Innovation Lab gave our engineering team a 5-year leap into the future. Their quantum-assisted tensor models solved orbital trajectory calculations we thought were impossible.",
      author: "Chief Technology Officer",
      company: "Leading Aerospace Prime",
      image: "aerospace_telemetry_control.jpg",
      results: [
        { stat: "100x", label: "Computational acceleration achieved" },
        { stat: "3", label: "Joint patents filed" },
        { stat: "4 Weeks", label: "From research thesis to live working demo" }
      ]
    }
  }
];

const productsDir = path.join(__dirname, 'src', 'data', 'products');

REMAINING_PRODUCTS.forEach(prod => {
  const filePath = path.join(productsDir, `${prod.id}.js`);
  const content = `import heroBg from "../../assets/fresh/${prod.bgImage}";
import feat1Img from "../../assets/fresh/${prod.features[0].image}";
import feat2Img from "../../assets/fresh/${prod.features[1].image}";
import feat3Img from "../../assets/fresh/${prod.features[2].image}";
import feat4Img from "../../assets/fresh/${prod.features[3].image}";
import caseImg from "../../assets/fresh/${prod.caseStudy.image}";

export const ${prod.id.replace(/-/g, '')}Data = ${JSON.stringify(prod, null, 2)};
${prod.id.replace(/-/g, '')}Data.hero.bgImage = heroBg;
${prod.id.replace(/-/g, '')}Data.features[0].image = feat1Img;
${prod.id.replace(/-/g, '')}Data.features[1].image = feat2Img;
${prod.id.replace(/-/g, '')}Data.features[2].image = feat3Img;
${prod.id.replace(/-/g, '')}Data.features[3].image = feat4Img;
${prod.id.replace(/-/g, '')}Data.caseStudy.image = caseImg;
`;
  fs.writeFileSync(filePath, content);
  console.log(`Generated: ${prod.id}.js`);
});

console.log('All remaining product data files successfully generated!');
