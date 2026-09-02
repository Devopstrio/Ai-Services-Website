const fs = require('fs');
const path = require('path');

const solutions = [
  {
    id: "hr-ai",
    titleLight: "Human Resources",
    titleBold: "AI",
    heroDesc: "Empower your people operations with cognitive AI agents and predictive analytics. Streamline global talent acquisition, eliminate candidate screening bottlenecks, reduce costly attrition, and deliver 24/7 intelligent HR support across your enterprise workforce.",
    overviewHeading: "Intelligent Workforce Optimization & Talent Strategy",
    overviewPara: "DevOpsTRIO helps global enterprises, high-growth technology firms, and distributed organizations modernize talent management workflows through custom Artificial Intelligence. By integrating LLM-powered recruitment intelligence, real-time employee engagement analytics, and automated compliance tracking, we eliminate repetitive administrative overhead while helping leaders build high-retention, high-performance teams.\n\nFrom automated multi-channel candidate sourcing to predictive flight-risk modeling and personalized career progression paths, our secure on-premise and VPC deployments ensure full compliance with global privacy regulations and zero algorithmic bias.",
    metrics: [
      { value: "70%", label: "Faster Time-to-Hire" },
      { value: "45%", label: "Reduction in Attrition" },
      { value: "10K+", label: "Resumes Screened Daily" },
      { value: "0%", label: "Demographic Bias" }
    ],
    bento: [
      {
        title: "Predictive Talent Intelligence",
        desc: "Analyze historical performance, engagement metrics, and market compensation data to accurately forecast organizational skill gaps and identify high flight-risk employees before they resign.",
        colSpan: 2
      },
      {
        title: "Automated Onboarding",
        desc: "Deliver personalized, interactive onboarding paths that guide new hires through documentation, compliance training, and tooling setup without manual HR intervention.",
        colSpan: 1
      },
      {
        title: "24/7 Employee HR Copilot",
        desc: "Empower employees with an intelligent conversational assistant that instantly answers policy queries, manages leave requests, and resolves benefits questions.",
        colSpan: 1
      },
      {
        title: "Enterprise Compliance & Governance",
        desc: "Ensure complete adherence to EEOC, GDPR, and global labor laws through automated bias auditing, encrypted data handling, and strict role-based access control.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "AI RECRUITMENT ENGINE",
        title: "Cognitive Resume Parsing & Intelligent Matching",
        text: "Move beyond keyword filtering. Our deep semantic models evaluate candidate portfolios, past project impact, and domain expertise against exact role requirements. Automatically rank applicants, generate tailored technical interview questions, and schedule panel discussions across global time zones."
      },
      {
        tag: "WORKFORCE RETENTION",
        title: "Flight Risk Prediction & Sentiment Modeling",
        text: "Proactively safeguard enterprise talent. By analyzing aggregated feedback, workload velocity, and sentiment signals without compromising individual privacy, our models identify burnout indicators and churn probabilities, enabling leadership to intervene with targeted retention initiatives."
      },
      {
        tag: "EMPLOYEE SUCCESS",
        title: "Autonomous Career Pathing & Upskilling",
        text: "Drive internal mobility and workforce agility. The system maps internal competencies against strategic corporate roadmaps, automatically recommending specialized training, cross-functional mentorships, and open project assignments tailored to each team member's growth goals."
      }
    ],
    stories: [
      {
        company: "Global Logistics Conglomerate",
        metric: "68% Faster",
        desc: "Reduced corporate hiring cycles from 52 days to 16 days across 12 countries by deploying autonomous candidate screening and interview scheduling agents."
      },
      {
        company: "Fortune 500 Financial Services",
        metric: "$14M Saved",
        desc: "Saved millions annually in executive recruitment and replacement costs by deploying predictive retention modeling that curbed key personnel attrition by 38%."
      },
      {
        company: "Enterprise SaaS Platform",
        metric: "94% First-Contact",
        desc: "Resolved 94% of internal employee HR tickets and benefits inquiries instantly using a fine-tuned RAG assistant integrated with Workday and Slack."
      }
    ]
  },
  {
    id: "customer-support-ai",
    titleLight: "Customer Support",
    titleBold: "AI",
    heroDesc: "Elevate your customer experience with autonomous tier-1 resolution, sentiment-aware routing, and real-time agent copilots. Deliver rapid, empathetic, and multi-lingual support that drives brand loyalty and reduces operational support costs.",
    overviewHeading: "Autonomous Support Orchestration & Real-Time Resolution",
    overviewPara: "DevOpsTRIO transforms customer service operations from costly reactive cost-centers into high-efficiency value drivers. By combining advanced conversational intelligence with deep internal knowledge-base retrieval, our support platforms resolve high-volume customer inquiries instantly across voice, chat, email, and social channels.\n\nWhen complex edge cases require human assistance, our real-time Agent Assist tool synthesizes case context, retrieves relevant customer history, and drafts high-accuracy response suggestions—reducing Average Handle Time (AHT) while dramatically improving customer satisfaction scores.",
    metrics: [
      { value: "85%", label: "Automated Ticket Deflection" },
      { value: "60%", label: "Reduction in Handle Time" },
      { value: "< 2s", label: "Average First Response" },
      { value: "+42", label: "CSAT Score Growth" }
    ],
    bento: [
      {
        title: "Multi-Modal Autonomous Resolution",
        desc: "Resolve routine billing, returns, technical troubleshooting, and account inquiries instantly across chat, email, and messaging platforms without human intervention.",
        colSpan: 2
      },
      {
        title: "Real-Time Sentiment Triage",
        desc: "Detect customer urgency, frustration, or VIP status instantly to prioritize escalation queues and route high-stakes accounts to senior specialists.",
        colSpan: 1
      },
      {
        title: "Live Agent Copilot",
        desc: "Equip support representatives with real-time response drafting, automated CRM summarization, and recommended troubleshooting steps during live interactions.",
        colSpan: 1
      },
      {
        title: "Self-Healing Knowledge Graph",
        desc: "Continuously analyze unresolved customer queries and ticket transcripts to automatically identify documentation gaps and recommend knowledge-base updates.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "AUTONOMOUS AGENTS",
        title: "End-to-End Transactional Support Bots",
        text: "Enable conversational agents to execute backend operations such as issuing refunds, updating shipping manifests, re-authenticating credentials, and provisioning licenses safely via secure, audited API connectors."
      },
      {
        tag: "AGENT EMPOWERMENT",
        title: "Contextual Copilot & One-Click Case Summaries",
        text: "Eliminate manual ticket wrap-up time. Our systems automatically ingest lengthy conversation histories, summarize the core issue and resolution status, update CRM fields, and log sentiment metrics the moment a call or chat finishes."
      },
      {
        tag: "OMNICHANNEL UNIFICATION",
        title: "Continuous Multi-Channel Conversation State",
        text: "Ensure customers never have to repeat themselves. Maintain persistent conversational state and user intent seamlessly whether a customer initiates support on WhatsApp, transitions to Web Chat, or follows up via email."
      }
    ],
    stories: [
      {
        company: "International E-Commerce Leader",
        metric: "82% Deflection",
        desc: "Deflected over 450,000 seasonal return and tracking inquiries during holiday peak periods without adding temporary offshore headcount."
      },
      {
        company: "Global Telecommunications Provider",
        metric: "3.5x Faster AHT",
        desc: "Reduced Average Handle Time from 9.2 minutes to 2.6 minutes by arming 4,000 tier-2 support engineers with real-time AI response drafting."
      },
      {
        company: "Fintech Banking App",
        metric: "+38 NPS",
        desc: "Elevated customer satisfaction to industry-leading levels by delivering sub-second, multi-lingual account troubleshooting 24/7/365."
      }
    ]
  },
  {
    id: "sales-intelligence",
    titleLight: "Sales",
    titleBold: "Intelligence",
    heroDesc: "Supercharge your B2B revenue engine with predictive pipeline modeling, automated prospect research, and live deal execution copilots. Convert more pipeline, accurately forecast revenue, and shorten enterprise sales cycles.",
    overviewHeading: "Predictive Revenue Orchestration & Deal Acceleration",
    overviewPara: "DevOpsTRIO equips modern sales organizations with enterprise AI that turns raw pipeline data into actionable revenue outcomes. Our platforms autonomously analyze buyer signals, historical win/loss patterns, and market intent to focus your sales reps on the deals most likely to close.\n\nFrom automated CRM updates and custom battlecard generation to real-time speech analytics during executive demo calls, we empower revenue teams to identify risks early, navigate multi-stakeholder purchasing committees, and consistently exceed quarterly targets.",
    metrics: [
      { value: "35%", label: "Win Rate Increase" },
      { value: "94%", label: "Forecast Accuracy" },
      { value: "12h", label: "Saved per Rep / Week" },
      { value: "4.2x", label: "Pipeline Velocity" }
    ],
    bento: [
      {
        title: "Predictive Lead & Account Scoring",
        desc: "Prioritize accounts exhibiting high purchasing intent by evaluating historical conversion factors, firmographic changes, and digital engagement signals.",
        colSpan: 2
      },
      {
        title: "Automated Meeting Prep",
        desc: "Generate comprehensive account dossiers, stakeholder profiles, and competitor battlecards in seconds prior to discovery and demo meetings.",
        colSpan: 1
      },
      {
        title: "Zero-Touch CRM Automation",
        desc: "Capture call notes, action items, next steps, and contact updates directly from emails and Zoom calls without reps typing a single line.",
        colSpan: 1
      },
      {
        title: "Revenue Risk & Churn Diagnostics",
        desc: "Detect stalling momentum, missing decision-makers, and competitor mentions across active enterprise deals before they slip past quarter end.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "PIPELINE INTELLIGENCE",
        title: "Dynamic Deal Health & Slippage Prediction",
        text: "Eliminate subjective pipeline forecasting. Our algorithms continuously analyze buyer email cadence, contract review turnaround, and stakeholder participation to score deal probability and alert sales leadership to hidden risks."
      },
      {
        tag: "CONVERSATION INTELLIGENCE",
        title: "Live Objection Handling & Competitive Guidance",
        text: "Provide real-time guidance during live sales calls. When prospects bring up competitor pricing or obscure technical compliance questions, the copilot instantly presents battle-tested positioning and ROI talking points."
      },
      {
        tag: "OUTREACH AUTOMATION",
        title: "Hyper-Personalized Multi-Threaded Outreach",
        text: "Generate high-converting, personalized cold outreach and follow-up sequences tailored to specific executive personas, industry regulations, and current company news."
      }
    ],
    stories: [
      {
        company: "Enterprise Cloud Infrastructure Firm",
        metric: "32% Win Rate",
        desc: "Increased enterprise sales win rates by 32% within 6 months while expanding average contract value by $180,000 across core markets."
      },
      {
        company: "Global HR Tech Provider",
        metric: "95% Accuracy",
        desc: "Eliminated quarterly revenue surprises with machine-learning forecasts that predicted closing ARR within a 2% variance."
      },
      {
        company: "Cybersecurity Platform",
        metric: "14h Reclaimed",
        desc: "Reclaimed 14 hours per sales rep every week by automating CRM data hygiene, follow-up drafting, and pre-call research."
      }
    ]
  },
  {
    id: "marketing-ai",
    titleLight: "Marketing",
    titleBold: "AI",
    heroDesc: "Drive exponential customer acquisition and brand loyalty with generative campaign engines, real-time creative optimization, dynamic audience segmentation, and predictive multi-touch attribution.",
    overviewHeading: "Generative Content Engines & Predictive Acquisition",
    overviewPara: "DevOpsTRIO enables marketing teams to scale brand reach and customer lifetime value using foundational models tuned to your brand guidelines. We replace generic broadcast marketing with dynamic 1:1 personalization across web, email, paid media, and product touchpoints.\n\nOur systems ingest performance metrics in real-time, automatically adjusting creative assets, copy variants, and audience bid strategies to maximize Return on Ad Spend (ROAS) and lower Customer Acquisition Cost (CAC).",
    metrics: [
      { value: "48%", label: "Lower Customer Acquisition Cost" },
      { value: "8x", label: "Creative Asset Velocity" },
      { value: "1:1", label: "Hyper-Personalization Scale" },
      { value: "3.4x", label: "Return on Ad Spend (ROAS)" }
    ],
    bento: [
      {
        title: "Brand-Aligned Generative Content",
        desc: "Generate high-converting ad copy, thought-leadership articles, landing page variants, and social assets that strictly adhere to your visual and tone-of-voice standards.",
        colSpan: 2
      },
      {
        title: "Autonomous Bidding & Budgeting",
        desc: "Optimize ad spend allocation dynamically across Google, Meta, LinkedIn, and programmatic channels based on real-time CAC and pipeline velocity.",
        colSpan: 1
      },
      {
        title: "Predictive Customer Lifetime Value",
        desc: "Identify high-value user cohorts early in the onboarding funnel to tailor nurture campaigns and maximize long-term retention.",
        colSpan: 1
      },
      {
        title: "Multi-Touch Revenue Attribution",
        desc: "Unravel complex B2B buyer journeys with deep algorithmic attribution that tracks how every blog, webinar, and ad contributed to pipeline creation.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "CAMPAIGN ENGINE",
        title: "Dynamic Creative & Copy Personalization",
        text: "Automatically generate personalized website hero banners, email subject lines, and marketing collateral customized to the visitor's industry, company size, and previous browsing history in milliseconds."
      },
      {
        tag: "AUDIENCE DISCOVERY",
        title: "Neural Behavioral Clustering & Micro-Segmentation",
        text: "Move beyond standard demographics. Our unsupervised learning models uncover hidden behavioral patterns among power users, allowing marketing teams to target lookalike prospects with laser precision."
      },
      {
        tag: "SEO & STRATEGY",
        title: "Autonomous SEO & Market Trend Analysis",
        text: "Continuously monitor search intent, competitor content shifts, and industry conversations to surface untapped keyword opportunities and auto-generate comprehensive content briefs."
      }
    ],
    stories: [
      {
        company: "Direct-to-Consumer Retail Group",
        metric: "52% CAC Drop",
        desc: "Reduced blended customer acquisition cost by 52% across digital channels using dynamic visual personalization and automated bid optimization."
      },
      {
        company: "B2B FinTech Platform",
        metric: "10x Output",
        desc: "Scaled technical content production 10-fold while maintaining strict compliance review standards, driving a 240% surge in organic inbound leads."
      },
      {
        company: "Global Hospitality Brand",
        metric: "+64% CTR",
        desc: "Achieved a 64% increase in email click-through rates by deploying AI that dynamically personalizes travel recommendations per recipient."
      }
    ]
  },
  {
    id: "finance-ai",
    titleLight: "Finance",
    titleBold: "AI",
    heroDesc: "Transform corporate finance with autonomous invoice reconciliation, real-time fraud mitigation, algorithmic cash flow forecasting, and automated multi-entity regulatory reporting.",
    overviewHeading: "Autonomous Financial Operations & Precision Risk Modeling",
    overviewPara: "DevOpsTRIO empowers Chief Financial Officers and treasury leaders with cognitive financial systems that eliminate manual spreadsheet operations and close financial books in hours instead of weeks. Our platform matches complex invoices, detects anomalies, and reconciles cross-border transactions automatically.\n\nWith military-grade cryptographic security and full traceability, our financial models operate directly within your private cloud environment to ensure your proprietary ledger and trading data remain completely confidential.",
    metrics: [
      { value: "99.8%", label: "Fraud Detection Accuracy" },
      { value: "80%", label: "Faster Month-End Close" },
      { value: "Zero", label: "Manual Reconciliation" },
      { value: "100%", label: "Audit Trail Compliance" }
    ],
    bento: [
      {
        title: "Real-Time Transaction Fraud Defense",
        desc: "Detect suspicious spending, identity impersonation, and fraudulent payments in sub-50 milliseconds using deep behavioral graph neural networks.",
        colSpan: 2
      },
      {
        title: "Automated AP/AR Reconciliation",
        desc: "Match multi-currency purchase orders, delivery notes, and tax invoices seamlessly without human data entry clerks.",
        colSpan: 1
      },
      {
        title: "Predictive Cash Flow Forecasting",
        desc: "Model dynamic liquidity positions, supply chain cost fluctuations, and foreign exchange exposure across multiple subsidiaries with unmatched precision.",
        colSpan: 1
      },
      {
        title: "Regulatory Reporting & ESG Audit",
        desc: "Auto-generate audit-ready IFRS, GAAP, SEC, and ESG disclosures directly from underlying ERP transactions with complete provenance tracking.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "FINANCIAL INTELLIGENCE",
        title: "Cognitive Document Extraction & Ledger Matching",
        text: "Extract unstructured financial data from PDF invoices, bank receipts, and contracts across 40+ languages with 99.5% field-level accuracy, automatically booking journal entries into SAP, Oracle, or NetSuite."
      },
      {
        tag: "RISK MITIGATION",
        title: "Continuous Anomaly & Compliance Surveillance",
        text: "Scan every ledger entry and expense report against internal procurement thresholds, sanctions lists, and anti-money laundering (AML) protocols in real-time, instantly isolating unauthorized deviations."
      },
      {
        tag: "TREASURY STRATEGY",
        title: "Algorithmic Working Capital Optimization",
        text: "Empower treasury teams with dynamic scenario planning that balances early payment vendor discounts against capital reserve requirements and macro interest rate changes."
      }
    ],
    stories: [
      {
        company: "Multinational Manufacturing Corporation",
        metric: "2-Day Close",
        desc: "Shortened quarterly financial close from 14 business days to just 2 days by automating reconciliation across 28 global operating subsidiaries."
      },
      {
        company: "Tier-1 Payment Processor",
        metric: "$22M Saved",
        desc: "Prevented over $22 million in unauthorized chargebacks and merchant fraud within the first 9 months of deploying real-time neural anomaly detection."
      },
      {
        company: "Commercial Real Estate Fund",
        metric: "95% STP",
        desc: "Achieved 95% straight-through processing for thousands of monthly lease agreements and tenant remittances without manual review."
      }
    ]
  },
  {
    id: "document-intelligence",
    titleLight: "Document",
    titleBold: "Intelligence",
    heroDesc: "Unlock dark unstructured enterprise data across millions of PDF contracts, handwritten forms, medical records, and technical schematics with zero-template neural extraction pipelines.",
    overviewHeading: "Zero-Shot Document Understanding & Structured Extraction",
    overviewPara: "DevOpsTRIO replaces brittle OCR templates with foundational Vision-Language Models (VLMs) that comprehend documents the way human experts do. Our architecture reads handwritten notes, complex multi-column tables, stamped seals, and hierarchical technical documentation with exceptional accuracy.\n\nWhether extracting indemnity terms from legacy insurance binders or digitizing international customs manifests, our solution seamlessly transforms chaotic PDF repositories into validated, queryable JSON schemas integrated with your enterprise data warehouse.",
    metrics: [
      { value: "99.4%", label: "Field Extraction Precision" },
      { value: "100x", label: "Faster Processing Speed" },
      { value: "Zero", label: "Manual Template Setup" },
      { value: "50+", label: "Supported Languages" }
    ],
    bento: [
      {
        title: "Complex Table & Layout Parsing",
        desc: "Accurately parse nested financial tables, borderless spreadsheets, and distorted scanned reports while preserving relational data integrity.",
        colSpan: 2
      },
      {
        title: "Handwritten & Legacy Script OCR",
        desc: "Digitize historical forms, handwritten medical records, and field engineer notes that conventional OCR engines fail to decipher.",
        colSpan: 1
      },
      {
        title: "Automated PII & Redaction",
        desc: "Identify and redact sensitive customer credentials, social security numbers, and protected health data automatically prior to archival.",
        colSpan: 1
      },
      {
        title: "Multi-Document Cross-Verification",
        desc: "Cross-validate extracted claims against supporting identification, receipts, and government registries to flag inconsistencies automatically.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "VISION LANGUAGE PIPELINES",
        title: "Zero-Shot Semantic Understanding",
        text: "Process new document formats immediately without training custom templates. Simply specify the target schema in natural language, and our models locate, extract, and normalize the required entities."
      },
      {
        tag: "INTELLIGENT VALIDATION",
        title: "Human-in-the-Loop Confidence Scoring",
        text: "Every extracted data point is accompanied by a mathematical confidence score and direct visual bounding-box coordinates, routing only uncertain edge cases to human operators for rapid verification."
      },
      {
        tag: "SYSTEM INTEGRATION",
        title: "Enterprise ERP & DMS Auto-Ingestion",
        text: "Automatically ingest incoming documents from SFTP servers, email inboxes, and cloud storage, delivering structured payloads directly into SAP, Salesforce, Guidewire, or Snowflake in real time."
      }
    ],
    stories: [
      {
        company: "Global Maritime Logistics Leader",
        metric: "1.2M Docs/Yr",
        desc: "Automated the extraction of complex Bills of Lading and customs declarations across 40 maritime ports, cutting manual processing time by 88%."
      },
      {
        company: "International Health Insurance Provider",
        metric: "4-Minute Claims",
        desc: "Reduced medical claims processing from 5 days to 4 minutes by extracting line-item hospital bills, doctor signatures, and pharmacy receipts automatically."
      },
      {
        company: "Tier-1 Mortgage Lender",
        metric: "Zero Backlog",
        desc: "Eliminated loan underwriting backlogs by auto-processing W2s, tax returns, and bank statements with 99.8% data accuracy."
      }
    ]
  },
  {
    id: "knowledge-management",
    titleLight: "Knowledge",
    titleBold: "Management",
    heroDesc: "Break enterprise information silos with private Retrieval-Augmented Generation (RAG) and Neural Search. Connect Slack, Confluence, SharePoint, and code repositories into a unified, halluncination-free knowledge engine.",
    overviewHeading: "Enterprise Neural Search & Grounded Conversational RAG",
    overviewPara: "DevOpsTRIO helps global organizations eliminate the hundreds of hours engineers and business leaders lose every year searching for critical documents. Our neural knowledge platform indexes enterprise data across diverse storage silos while enforcing granular, real-time Role-Based Access Control (RBAC).\n\nWhen employees ask questions in natural language, our systems generate authoritative, cited answers drawn directly from verified company documentation—ensuring absolute factual accuracy, zero AI hallucinations, and airtight corporate data privacy.",
    metrics: [
      { value: "40%", label: "Reduction in Research Time" },
      { value: "100%", label: "Grounded & Cited Answers" },
      { value: "200+", label: "Native Data Connectors" },
      { value: "Zero", label: "Data Leakage Across Roles" }
    ],
    bento: [
      {
        title: "Unified Multi-Source Neural Indexing",
        desc: "Index Notion, Jira, SharePoint, Google Drive, Zendesk, and GitHub into a unified vector space with automated real-time synchronization.",
        colSpan: 2
      },
      {
        title: "Granular ACL & Permission Sync",
        desc: "Ensure users only receive answers synthesized from documents they have explicit authorization to view in the underlying source systems.",
        colSpan: 1
      },
      {
        title: "Interactive Codebase Chat",
        desc: "Enable software engineering teams to query legacy architectures, API patterns, and deployment configurations directly from their IDE.",
        colSpan: 1
      },
      {
        title: "Knowledge Gap Diagnostics",
        desc: "Identify frequently queried topics with missing or outdated documentation to guide knowledge curation and corporate wiki maintenance.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "HYBRID RETRIEVAL",
        title: "Dense Vector & BM25 Keyword Hybrid Search",
        text: "Combine dense semantic embeddings with precise lexical matching to handle technical jargon, part numbers, acronyms, and conceptual questions with equal precision."
      },
      {
        tag: "FACTUAL VERIFICATION",
        title: "Citation Highlighting & Source Deep-Linking",
        text: "Every generated insight contains verifiable markdown citations that link directly to the exact page, slide, or code line in the source system, allowing users to verify facts with a single click."
      },
      {
        tag: "ENTERPRISE SECURITY",
        title: "Air-Gapped & VPC On-Premise Deployments",
        text: "Deploy state-of-the-art vector databases and open-weights LLMs entirely within your private cloud. Your intellectual property is never transmitted to third-party public model providers."
      }
    ],
    stories: [
      {
        company: "Global Management Consulting Firm",
        metric: "35,000 Staff",
        desc: "Connected 15 years of proprietary research decks and engagement models into a single conversational portal used by 35,000 consultants worldwide."
      },
      {
        company: "Biotech Drug Discovery Firm",
        metric: "75% Faster",
        desc: "Accelerated regulatory filing prep by 75% by enabling research scientists to query 500,000 pages of clinical trial findings instantly."
      },
      {
        company: "Fintech Unicorn",
        metric: "Zero Onboarding Lag",
        desc: "Cut new software engineer onboarding time from 8 weeks to 2 weeks with an intelligent architecture copilot that explains complex microservices."
      }
    ]
  },
  {
    id: "workflow-automation",
    titleLight: "Workflow",
    titleBold: "Automation",
    heroDesc: "Orchestrate complex cross-departmental operations with autonomous AI agents. Replace rigid, fragile legacy RPA scripts with adaptive cognitive workflows that handle unexpected exceptions with ease.",
    overviewHeading: "Cognitive Process Automation & Autonomous Operations",
    overviewPara: "DevOpsTRIO transitions enterprise business processes from brittle, rules-based RPA scripts to resilient, cognitive workflow agents. Our systems understand natural language instructions, navigate modern web and desktop interfaces, adapt to unexpected UI changes, and handle non-standard data exceptions autonomously.\n\nFrom automated vendor onboarding and contract lifecycle routing to complex cross-system inventory reconciliations, our workflow engines execute multi-step operations 24/7 with comprehensive audit logs and human-in-the-loop escalation boundaries.",
    metrics: [
      { value: "65%", label: "Operational Cost Reduction" },
      { value: "24/7", label: "Continuous Autonomous Execution" },
      { value: "0%", label: "Manual Data Entry Errors" },
      { value: "10x", label: "Process Throughput Velocity" }
    ],
    bento: [
      {
        title: "Adaptive Cross-System Task Execution",
        desc: "Execute multi-step transactions across legacy mainframes, modern SaaS platforms, and internal databases without requiring custom API redesigns.",
        colSpan: 2
      },
      {
        title: "Intelligent Exception Handling",
        desc: "Resolve missing data fields, non-standard formats, and conflicting inputs dynamically without halting business operations.",
        colSpan: 1
      },
      {
        title: "Human-in-the-Loop Governance",
        desc: "Define strict confidence thresholds that automatically route high-risk transactions to designated supervisors for single-click approvals.",
        colSpan: 1
      },
      {
        title: "Real-Time Process Mining & Diagnostics",
        desc: "Continuously monitor execution bottlenecks, queue latency, and cycle times to recommend continuous process optimization.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "AGENTIC WORKFLOWS",
        title: "Multi-Agent System Orchestration",
        text: "Deploy specialized agent swarms that divide complex projects into parallel tasks—validating inputs, checking compliance registries, updating ERP records, and notifying stakeholders concurrently."
      },
      {
        tag: "DYNAMIC ADAPTATION",
        title: "Self-Healing UI Interaction",
        text: "Unlike traditional RPA that breaks when a web button changes position, our computer-vision and DOM-understanding models locate interface elements reliably even after software upgrades."
      },
      {
        tag: "AUDIT & TRACEABILITY",
        title: "Deterministic Logging & Replay Architecture",
        text: "Maintain complete regulatory compliance with immutable execution logs that capture the reasoning chain, API calls, and screenshots for every automated action taken."
      }
    ],
    stories: [
      {
        company: "Global Automotive Manufacturer",
        metric: "$8.5M Annual Savings",
        desc: "Automated vendor parts procurement and invoice verification across 65 international suppliers, eliminating 12,000 hours of manual data entry."
      },
      {
        company: "National Healthcare Network",
        metric: "90% Faster",
        desc: "Reduced patient insurance pre-authorization turnaround from 4 days to 25 minutes using autonomous multi-system data gathering agents."
      },
      {
        company: "Commercial Bank",
        metric: "100% STP",
        desc: "Achieved zero-touch straight-through processing for commercial loan collateral verification across 12 state registries."
      }
    ]
  },
  {
    id: "contact-center-ai",
    titleLight: "Contact Center",
    titleBold: "AI",
    heroDesc: "Modernize telecom and customer contact centers with sub-second conversational voice bots, real-time agent whisper guidance, and 100% automated quality assurance analytics.",
    overviewHeading: "Conversational Voice Intelligence & Real-Time Agent Guidance",
    overviewPara: "DevOpsTRIO upgrades traditional call centers into intelligent conversational hubs. Our low-latency voice AI engines engage callers in human-like dialogue, understanding natural speech, interruptions, accents, and emotional nuances to resolve caller requests autonomously.\n\nFor human-handled calls, our Real-Time Agent Whisper platform listens to the interaction, automatically surfacing policy answers, customer purchase history, and recommended next actions onto the representative's screen in under 200 milliseconds.",
    metrics: [
      { value: "100%", label: "Automated Call Quality Auditing" },
      { value: "45%", label: "Reduction in Hold Times" },
      { value: "< 250ms", label: "Voice Response Latency" },
      { value: "+35%", label: "First-Call Resolution Rate" }
    ],
    bento: [
      {
        title: "Human-Quality Voice Agents",
        desc: "Deploy natural, interruption-friendly voice bots that converse fluidly to authenticate callers, book appointments, and process payments securely.",
        colSpan: 2
      },
      {
        title: "100% Automated Call QA",
        desc: "Audit every single recorded call for regulatory compliance, script adherence, customer sentiment, and agent professionalism automatically.",
        colSpan: 1
      },
      {
        title: "Real-Time Agent Whisper",
        desc: "Provide frontline representatives with live contextual prompts, objection handling tips, and knowledge base lookups during active customer calls.",
        colSpan: 1
      },
      {
        title: "Post-Call Auto-Summarization",
        desc: "Generate structured call notes, root cause codes, and follow-up action items directly into Salesforce, Genesys, or Five9 in seconds.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "VOICE ARCHITECTURE",
        title: "Ultra-Low Latency Speech Synthesis & STT",
        text: "Built on streaming WebRTC pipelines, our speech-to-text and neural voice models achieve lightning-fast roundtrip latency, eliminating unnatural pauses and conversational collisions."
      },
      {
        tag: "SENTIMENT SURVEILLANCE",
        title: "Acoustic Tone & Stress Analysis",
        text: "Analyze speech acoustic patterns and pitch variations to detect escalating customer frustration in real-time, automatically triggering supervisor whisper coaching or warm call transfers."
      },
      {
        tag: "TELEPHONY CONNECTIVITY",
        title: "Turnkey Telephony Integration",
        text: "Seamlessly integrate with Genesys Cloud, Amazon Connect, Cisco Webex, Avaya, and Twilio with zero disruption to existing SIP trunking and routing infrastructure."
      }
    ],
    stories: [
      {
        company: "Major Airline Group",
        metric: "70,000 Calls/Day",
        desc: "Handled massive weather-induced flight cancellation surges autonomously with conversational voice bots that rebooked 84% of stranded passengers."
      },
      {
        company: "Utility & Energy Provider",
        metric: "40% AHT Drop",
        desc: "Reduced average call duration from 7.5 minutes to 4.5 minutes across 1,200 agents with real-time billing assist and automated post-call CRM logging."
      },
      {
        company: "National Insurance Carrier",
        metric: "100% QA Score",
        desc: "Replaced 2% random human supervisor call sampling with 100% automated regulatory compliance auditing across 3 million annual claims calls."
      }
    ]
  },
  {
    id: "it-operations-ai",
    titleLight: "IT Operations",
    titleBold: "AI (AIOps)",
    heroDesc: "Eliminate downtime and alert fatigue with autonomous incident triage, predictive outage forecasting, and self-healing cloud infrastructure orchestrated by AIOps intelligence.",
    overviewHeading: "Predictive Infrastructure Resilience & Autonomous AIOps",
    overviewPara: "DevOpsTRIO helps enterprise Site Reliability Engineering (SRE) and IT Operations teams transition from reactive firefighting to predictive incident prevention. Our AIOps platform ingests millions of telemetry signals, logs, and distributed traces in real-time, isolating true anomalies from background noise.\n\nWhen anomalies appear, our root-cause engine correlates infrastructure topology across Kubernetes clusters, cloud networks, and databases to pinpoint the exact failure point—automatically executing self-healing runbooks before end-users experience service degradation.",
    metrics: [
      { value: "85%", label: "Alert Noise Reduction" },
      { value: "70%", label: "Faster Mean-Time-to-Resolution" },
      { value: "Zero", label: "Unplanned Production Downtime" },
      { value: "99.999%", label: "Target Infrastructure Availability" }
    ],
    bento: [
      {
        title: "Intelligent Alert Correlation",
        desc: "Cluster thousands of cascading alerts into single, actionable incident tickets with clear root-cause explanations and blast-radius visualization.",
        colSpan: 2
      },
      {
        title: "Predictive Anomaly Detection",
        desc: "Forecast memory leaks, database connection exhaustion, and disk saturation hours before they cause catastrophic system failure.",
        colSpan: 1
      },
      {
        title: "Self-Healing Automated Runbooks",
        desc: "Execute safe remediation actions—restarting failing containers, scaling replica sets, and clearing stale locks—without human on-call intervention.",
        colSpan: 1
      },
      {
        title: "Topology-Aware Blast Radius Analysis",
        desc: "Map dynamic microservice dependencies to understand how a failure in a database tier cascades to user-facing API endpoints.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "LOG INTELLIGENCE",
        title: "High-Volume Unstructured Log Analytics",
        text: "Analyze terabytes of unstructured application logs in real-time using specialized language models that extract error patterns, stack traces, and anomalous spikes without manual regex maintenance."
      },
      {
        tag: "INCIDENT COPILOT",
        title: "SRE Incident Command & War Room Assistant",
        text: "Synthesize active incident context for on-call engineers, automatically retrieving related past post-mortems, recent code deployments, and suggested Git commits that likely caused the regression."
      },
      {
        tag: "OBSERVABILITY UNIFICATION",
        title: "Full-Stack Observability Integration",
        text: "Integrate seamlessly with Datadog, Dynatrace, Prometheus, Grafana, Splunk, and PagerDuty to create a unified intelligence layer over your existing monitoring investments."
      }
    ],
    stories: [
      {
        company: "Global Financial Exchange",
        metric: "Zero Outages",
        desc: "Predicted database thread contention 20 minutes prior to market open, automatically optimizing connection pooling and averting critical trading delays."
      },
      {
        company: "E-Commerce Cloud SaaS",
        metric: "88% Noise Drop",
        desc: "Reduced weekly on-call alerts from 14,000 to under 1,600 meaningful incidents, dramatically improving SRE team morale and preventing engineer burnout."
      },
      {
        company: "FinTech Banking Core",
        metric: "6-Minute MTTR",
        desc: "Reduced Mean Time to Resolution from 45 minutes to 6 minutes by deploying autonomous self-healing remediation runbooks for Kubernetes pod failures."
      }
    ]
  },
  {
    id: "devops-ai",
    titleLight: "DevOps",
    titleBold: "AI",
    heroDesc: "Accelerate software delivery velocity with AI-augmented CI/CD pipelines, automated pull request security reviews, self-generating Terraform infrastructure, and predictive release risk scoring.",
    overviewHeading: "Autonomous CI/CD Orchestration & Shift-Left Engineering",
    overviewPara: "DevOpsTRIO supercharges engineering organizations by embedding cognitive AI directly into the software development lifecycle. Our DevOps AI models review pull requests for hidden race conditions, generate unit and integration tests for legacy codebases, and optimize cloud infrastructure costs.\n\nBy analyzing historical deployment telemetry and code churn, our platform scores deployment risk before you merge to production—allowing development teams to ship software 5x faster while maintaining enterprise-grade security and stability.",
    metrics: [
      { value: "5x", label: "Deployment Velocity" },
      { value: "90%", label: "Automated Test Coverage" },
      { value: "40%", label: "Cloud Infrastructure Cost Savings" },
      { value: "Zero", label: "Security Regressions in Prod" }
    ],
    bento: [
      {
        title: "Autonomous PR Review & Bug Detection",
        desc: "Scan code diffs for security vulnerabilities, concurrency flaws, memory leaks, and architectural deviations with actionable inline suggestions.",
        colSpan: 2
      },
      {
        title: "Automated Test Generation",
        desc: "Generate comprehensive unit, mock, and edge-case integration tests for complex codebases to rapidly achieve 90%+ code coverage.",
        colSpan: 1
      },
      {
        title: "Infrastructure as Code (IaC) Copilot",
        desc: "Auto-generate modular, audited Terraform, Helm, and Ansible templates conforming strictly to your corporate cloud landing zone policies.",
        colSpan: 1
      },
      {
        title: "Predictive Release Risk Scoring",
        desc: "Evaluate commit velocity, author experience, and test delta to score deployment risk and automatically configure canary rollout strategies.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "PIPELINE OPTIMIZATION",
        title: "Flaky Test Elimination & Smart Build Caching",
        text: "Identify non-deterministic test suites automatically, quarantine flaky tests, and predict build dependency caches to cut CI pipeline execution times by up to 60%."
      },
      {
        tag: "FINOPS INTELLIGENCE",
        title: "Autonomous Cloud FinOps Optimization",
        text: "Continuously analyze AWS, Azure, and GCP workload utilization to identify overprovisioned Kubernetes clusters, idle compute instances, and unattached storage volumes, safely rightsizing infrastructure."
      },
      {
        tag: "DEVELOPER EXPERIENCE",
        title: "IDE & Git Workflow Integration",
        text: "Seamlessly integrate with GitHub Actions, GitLab CI, Bitbucket, and VS Code, delivering intelligent suggestions and automated security remediations directly inside developer workflows."
      }
    ],
    stories: [
      {
        company: "B2B SaaS Unicorn",
        metric: "4x Faster Deployments",
        desc: "Scaled from 10 weekly deployments to over 40 daily production releases without a single Sev-1 incident by deploying automated canary risk scoring."
      },
      {
        company: "Legacy Enterprise Software Firm",
        metric: "85% Test Coverage",
        desc: "Auto-generated 450,000 lines of comprehensive unit tests for a 10-year-old Java and C++ codebase in under three weeks."
      },
      {
        company: "Global Media Streaming Platform",
        metric: "$3.8M Cloud Savings",
        desc: "Reduced annual AWS and Kubernetes infrastructure spend by $3.8M using autonomous workload rightsizing and spot instance orchestration."
      }
    ]
  },
  {
    id: "cybersecurity-ai",
    titleLight: "Cybersecurity",
    titleBold: "AI",
    heroDesc: "Defend against advanced persistent threats with autonomous SOC triage, predictive behavioral zero-trust analytics, real-time phishing neutralization, and self-patching vulnerability management.",
    overviewHeading: "Autonomous Threat Hunting & Adaptive Zero-Trust Defense",
    overviewPara: "DevOpsTRIO equips Chief Information Security Officers (CISOs) with AI-native cyber defense systems capable of countering machine-speed cyber attacks. Our platform continuously ingests network telemetry, endpoint signals, cloud access logs, and dark web threat intelligence to isolate anomalous lateral movement.\n\nWhen zero-day intrusions or credential hijacking attempts occur, our autonomous containment agents isolate compromised workloads, revoke token permissions, and generate forensic timelines in milliseconds—empowering your Security Operations Center (SOC) to stay steps ahead of adversaries.",
    metrics: [
      { value: "99.9%", label: "Threat Neutralization Rate" },
      { value: "< 1s", label: "Intrusion Containment Speed" },
      { value: "90%", label: "Reduction in False Positives" },
      { value: "24/7", label: "Autonomous SOC Monitoring" }
    ],
    bento: [
      {
        title: "Behavioral Zero-Trust Analytics",
        desc: "Detect credential theft and insider threats by modeling normal user baseline behavior and flagging anomalous access patterns instantly.",
        colSpan: 2
      },
      {
        title: "Autonomous SOC Analyst Copilot",
        desc: "Correlate millions of disparate SIEM logs into structured attack graphs, generating comprehensive MITRE ATT&CK kill-chain visualizations.",
        colSpan: 1
      },
      {
        title: "AI Phishing & Social Engineering Shield",
        desc: "Analyze inbound email language, sender reputation, and embedded attachments with multi-modal vision models to quarantine deceptive spear-phishing.",
        colSpan: 1
      },
      {
        title: "Self-Patching Vulnerability Prioritization",
        desc: "Prioritize CVEs based on active real-world exploitability and automatically generate verified security patches for underlying dependencies.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "THREAT INTELLIGENCE",
        title: "Dark Web & Zero-Day Threat Correlation",
        text: "Continuously scan global threat intelligence feeds, hacker forums, and dark web leak sites to identify compromised enterprise credentials and emerging zero-day vulnerabilities targeting your technology stack."
      },
      {
        tag: "CONTAINMENT AUTOMATION",
        title: "Micro-Segmentation & Instant Isolation",
        text: "Automatically execute software-defined network quarantine rules the microsecond anomalous ransomware encryption or data exfiltration behavior is detected on any cloud endpoint."
      },
      {
        tag: "COMPLIANCE & AUDIT",
        title: "Continuous SOC2, ISO27001 & FedRAMP Auditing",
        text: "Maintain continuous compliance posture with automated evidence gathering, IAM permission right-sizing, and immutable audit trails across multi-cloud environments."
      }
    ],
    stories: [
      {
        company: "Tier-1 Defense Contractor",
        metric: "Zero Breaches",
        desc: "Successfully neutralized a nation-state spear-phishing campaign within 800 milliseconds, preventing unauthorized access to sensitive aerospace schematics."
      },
      {
        company: "Healthcare Hospital Network",
        metric: "100% Ransomware Block",
        desc: "Detected and isolated an active lateral ransomware spread across 8,000 hospital workstations, preventing medical database encryption and saving patient services."
      },
      {
        company: "Global FinTech Platform",
        metric: "92% SOC Efficiency",
        desc: "Automated tier-1 incident triage across 50 million daily security events, allowing senior analysts to focus exclusively on high-priority threat hunting."
      }
    ]
  },
  {
    id: "manufacturing-ai",
    titleLight: "Manufacturing",
    titleBold: "AI",
    heroDesc: "Drive Industry 4.0 transformation with edge computer vision quality inspection, predictive machine maintenance, dynamic supply chain routing, and autonomous energy consumption optimization.",
    overviewHeading: "Intelligent Factory Automation & Predictive Asset Management",
    overviewPara: "DevOpsTRIO empowers manufacturing enterprises to maximize Overall Equipment Effectiveness (OEE) and eliminate unscheduled production downtime. By deploying high-performance computer vision models directly onto factory floor edge devices, we inspect manufactured goods at line speed with sub-millimeter precision.\n\nOur predictive maintenance algorithms ingest acoustic, thermal, and vibration sensor telemetry from turbines, robotic arms, and CNC machines to detect mechanical wear weeks before catastrophic equipment failure occurs.",
    metrics: [
      { value: "35%", label: "Reduction in Unplanned Downtime" },
      { value: "0.02%", label: "Defect Escape Rate" },
      { value: "22%", label: "Energy Consumption Savings" },
      { value: "+18%", label: "Overall Equipment Effectiveness" }
    ],
    bento: [
      {
        title: "Edge Computer Vision Quality Control",
        desc: "Inspect microscopic soldering flaws, paint blemishes, and dimensional tolerances at 60+ frames per second directly on high-speed conveyor lines.",
        colSpan: 2
      },
      {
        title: "Predictive Equipment Maintenance",
        desc: "Analyze vibration harmonics and thermal sensor telemetry to schedule maintenance off-shift, preventing costly mid-production breakdowns.",
        colSpan: 1
      },
      {
        title: "Dynamic Supply Chain Balancing",
        desc: "Anticipate raw material shortages and transport bottlenecks by modeling weather, port congestion, and supplier lead times in real-time.",
        colSpan: 1
      },
      {
        title: "Autonomous Factory Energy Optimization",
        desc: "Use reinforcement learning to orchestrate HVAC, smelting furnaces, and heavy machinery around dynamic grid peak-pricing tariffs.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "EDGE INTELLIGENCE",
        title: "Sub-Millisecond Edge Vision Inference",
        text: "Deploy quantized neural models onto ruggedized industrial edge hardware (NVIDIA Jetson, Intel OpenVINO) operating disconnected from cloud latency for real-time robotic sorting."
      },
      {
        tag: "DIGITAL TWINS",
        title: "Physics-Informed Digital Factory Twins",
        text: "Simulate plant layout adjustments, assembly line bottlenecks, and tool re-configurations in a virtual physics twin before investing capital in physical retooling."
      },
      {
        tag: "SAFETY SURVEILLANCE",
        title: "Worker Safety & PPE Compliance Monitoring",
        text: "Detect missing hardhats, hazardous chemical spills, and unauthorized personnel in danger zones automatically, alerting plant safety supervisors instantly."
      }
    ],
    stories: [
      {
        company: "Global Automotive OEM",
        metric: "32% Downtime Drop",
        desc: "Eliminated catastrophic robotic welding failures across 4 assembly plants, saving an estimated $12M annually in lost production capacity."
      },
      {
        company: "Semiconductor Fabrication Leader",
        metric: "99.98% QA Precision",
        desc: "Detected micro-cracks on silicon wafers at 120 units per minute, reducing defect escape rate to an unprecedented 0.02%."
      },
      {
        company: "Chemical Processing Conglomerate",
        metric: "$4.5M Energy Saved",
        desc: "Optimized multi-kiln energy consumption using predictive thermal modeling, cutting carbon emissions by 24,000 metric tons annually."
      }
    ]
  },
  {
    id: "retail-ai",
    titleLight: "Retail",
    titleBold: "AI",
    heroDesc: "Maximize store and e-commerce revenue with dynamic algorithmic pricing, real-time demand forecasting, visual product search, and hyper-personalized loyalty recommendation engines.",
    overviewHeading: "Omnichannel Retail Optimization & Predictive Commerce",
    overviewPara: "DevOpsTRIO transforms modern retail operations by bridging physical brick-and-mortar stores with digital e-commerce storefronts. Our retail AI models analyze regional buying trends, weather patterns, competitor price adjustments, and social sentiment to optimize inventory placement and markdown timing.\n\nFrom frictionless checkout and visual search to personalized product discovery feeds that boost Average Order Value (AOV), we help leading retail brands deliver high-margin, customer-centric shopping experiences.",
    metrics: [
      { value: "18%", label: "Gross Margin Expansion" },
      { value: "45%", label: "Reduction in Stockouts" },
      { value: "+28%", label: "Average Order Value (AOV)" },
      { value: "92%", label: "Forecast Accuracy" }
    ],
    bento: [
      {
        title: "Dynamic Competitive Pricing Engine",
        desc: "Adjust retail prices and markdown schedules dynamically based on competitor stock levels, local elasticity, and shelf-life expiration.",
        colSpan: 2
      },
      {
        title: "Predictive Inventory Allocation",
        desc: "Route regional inventory proactively to prevent out-of-stock events during localized demand surges and viral marketing events.",
        colSpan: 1
      },
      {
        title: "Visual Search & Fit Recommendation",
        desc: "Allow shoppers to upload inspiration photos to find matching catalog items and receive AI-guided size and fit recommendations.",
        colSpan: 1
      },
      {
        title: "Autonomous Loss Prevention",
        desc: "Deploy in-store computer vision to identify shelf stockouts, sweet-hearting at self-checkout, and organized retail theft without tracking individual identities.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "PERSONALIZATION",
        title: "Real-Time 1:1 Recommendations",
        text: "Deliver individualized product carousels and bundle suggestions across web, mobile app, and email based on real-time in-session clickstream intent."
      },
      {
        tag: "INVENTORY FORECASTING",
        title: "Multi-Echelon Demand Modeling",
        text: "Forecast SKU-level demand across distribution centers and store networks by factoring in macro-economic data, local events, and seasonal promotional calendars."
      },
      {
        tag: "FRICTIONLESS COMMERCE",
        title: "Conversational Shopping Stylist",
        text: "Equip digital shoppers with an interactive AI stylist that answers detailed product queries, compares materials, and styles complete outfits conversationally."
      }
    ],
    stories: [
      {
        company: "International Fashion Retailer",
        metric: "16% Margin Growth",
        desc: "Implemented dynamic markdown optimization across 450 stores, liquidating seasonal inventory 3 weeks faster while capturing $18M in extra margin."
      },
      {
        company: "National Supermarket Chain",
        metric: "Zero Produce Waste",
        desc: "Reduced perishable grocery spoilage by 38% while cutting customer out-of-stock complaints in half across 200 metropolitan locations."
      },
      {
        company: "Luxury Home Goods Brand",
        metric: "+34% Conversion",
        desc: "Increased mobile e-commerce conversion rates by 34% by allowing customers to photograph their living spaces for visual room matching."
      }
    ]
  },
  {
    id: "healthcare-ai",
    titleLight: "Healthcare",
    titleBold: "AI",
    heroDesc: "Empower clinicians and healthcare systems with ambient clinical documentation, AI-assisted radiological diagnostics, predictive patient triage, and HIPAA-compliant administrative automation.",
    overviewHeading: "Clinical Decision Support & Ambient Hospital Intelligence",
    overviewPara: "DevOpsTRIO helps hospitals, medical networks, and life sciences organizations deliver better patient outcomes while curbing physician burnout. Our ambient voice systems listen to doctor-patient consultations, automatically generating structured SOAP notes and billing codes directly into electronic health records (EHR).\n\nWith strict HIPAA, HITECH, and GDPR compliance, our deep learning imaging models assist radiologists in identifying early-stage nodules, micro-fractures, and anomalies in CT, MRI, and X-ray scans with remarkable precision.",
    metrics: [
      { value: "2.5h", label: "Saved per Doctor Daily" },
      { value: "99.2%", label: "Radiological Anomaly Detection" },
      { value: "40%", label: "Faster Patient Triage" },
      { value: "100%", label: "HIPAA / HITECH Compliant" }
    ],
    bento: [
      {
        title: "Ambient Clinical Note Generation",
        desc: "Capture doctor-patient conversations ambiently, automatically structuring medical notes, symptom timelines, and prescription orders into Epic or Cerner.",
        colSpan: 2
      },
      {
        title: "Radiology & Imaging AI Assist",
        desc: "Flag early indicators of malignancies, stroke, and cardiovascular anomalies on CT and MRI scans to assist radiologists during emergency triage.",
        colSpan: 1
      },
      {
        title: "Predictive ICU Sepsis Early Warning",
        desc: "Analyze real-time bedside telemetry to alert medical teams to impending septic shock hours before visible physiological deterioration.",
        colSpan: 1
      },
      {
        title: "Automated Prior-Authorization & Billing",
        desc: "Match medical records against insurance criteria automatically to eliminate prior-authorization delays and reduce claim denials.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "CLINICAL AMBIENT AI",
        title: "Multi-Specialty Medical Vocabulary Models",
        text: "Trained on millions of verified medical transcripts across cardiology, oncology, pediatrics, and neurology to understand complex pharmacology and clinical terminology with zero transcription errors."
      },
      {
        tag: "PATIENT FLOW",
        title: "Emergency Department Triage Optimization",
        text: "Continuously score incoming emergency room patients by combining vital signs, medical history, and presenting symptoms to optimize bed allocation and nurse staffing."
      },
      {
        tag: "DATA PRIVACY",
        title: "Air-Gapped On-Premise Healthcare Clouds",
        text: "Deploy models entirely within hospital on-premise infrastructure with zero patient data transmission over the public internet, ensuring absolute compliance with federal privacy standards."
      }
    ],
    stories: [
      {
        company: "National Hospital Network",
        metric: "1,200 Doctors",
        desc: "Eliminated 2.5 hours of daily nighttime EHR documentation per physician across 14 hospitals, significantly improving doctor satisfaction and retention."
      },
      {
        company: "Regional Diagnostic Center",
        metric: "45% Faster Review",
        desc: "Accelerated emergency brain CT scan triage from 40 minutes to under 8 minutes for suspected stroke victims, dramatically improving patient recovery rates."
      },
      {
        company: "Specialty Healthcare Provider",
        metric: "82% Denial Drop",
        desc: "Cut insurance claim denial rates from 18% to under 3% by auto-validating medical necessity documentation prior to billing submission."
      }
    ]
  },
  {
    id: "banking-financial-services",
    titleLight: "Banking &",
    titleBold: "Financial Services",
    heroDesc: "Drive core banking modernization with AI-powered sub-second credit decisioning, automated KYC/AML onboarding, algorithmic portfolio management, and real-time fraud defense.",
    overviewHeading: "Core Banking Modernization & Intelligent Financial Ecosystems",
    overviewPara: "DevOpsTRIO helps tier-1 retail banks, investment institutions, and fintech challengers modernize core banking architecture. Our platforms automate compliance monitoring, streamline KYC/AML customer onboarding, and power intelligent wealth management advisories.\n\nBy leveraging predictive models deployed across secure private cloud VPCs, financial institutions can identify emerging market risks, prevent sophisticated fraud syndicates, and deliver hyper-personalized mobile banking experiences to millions of retail customers.",
    metrics: [
      { value: "< 2s", label: "Instant Loan Underwriting" },
      { value: "99.9%", label: "AML Compliance Detection" },
      { value: "75%", label: "Faster Customer Onboarding" },
      { value: "+32%", label: "Wealth Advisory Engagement" }
    ],
    bento: [
      {
        title: "Alternative Credit Underwriting",
        desc: "Evaluate alternative financial data, cash-flow velocity, and behavioral signals to issue fair, instantaneous credit lines with reduced default risk.",
        colSpan: 2
      },
      {
        title: "Automated KYC & Biometric AML",
        desc: "Verify government passports, detect synthetic identity fraud, and screen global sanctions watchlists in seconds during digital onboarding.",
        colSpan: 1
      },
      {
        title: "Algorithmic Wealth Copilot",
        desc: "Deliver personalized tax-loss harvesting, asset allocation rebalancing, and financial goal tracking to retail and private wealth clients.",
        colSpan: 1
      },
      {
        title: "Real-Time Payment Fraud Shield",
        desc: "Analyze cross-border wire transfers and card swipes in sub-50 milliseconds to block fraudulent card-not-present transactions instantly.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "CREDIT SCORING",
        title: "Explainable Machine Learning Underwriting",
        text: "Every credit decision is generated with complete mathematical feature attribution (SHAP values) to provide regulatory-compliant adverse action notices and eliminate unintended demographic bias."
      },
      {
        tag: "SANCTIONS & AML",
        title: "Graph Neural Networks for Money Laundering",
        text: "Uncover hidden corporate shell networks, smurfing rings, and multi-hop transactional layering across banking ledgers with deep graph analytics."
      },
      {
        tag: "OMNICHANNEL BANKING",
        title: "Conversational Financial Concierge",
        text: "Empower retail banking customers to check balances, transfer funds, dispute charges, and apply for mortgages conversationally through voice and mobile app interfaces."
      }
    ],
    stories: [
      {
        company: "Tier-1 Commercial Bank",
        metric: "Instant Approvals",
        desc: "Automated SME loan underwriting, delivering decisions in 90 seconds instead of 14 days while reducing 90-day delinquency rates by 22%."
      },
      {
        company: "Digital Challenger Bank",
        metric: "4M Customers",
        desc: "Scaled digital customer onboarding to 4 million accounts with zero human compliance clerks while maintaining 100% regulatory audit approval."
      },
      {
        company: "Global Investment Firm",
        metric: "$18M Alpha Generated",
        desc: "Processed alternative satellite, customs, and macroeconomic signals to optimize systematic algorithmic equity portfolios in volatile markets."
      }
    ]
  },
  {
    id: "legal-ai",
    titleLight: "Legal",
    titleBold: "AI",
    heroDesc: "Accelerate due diligence, contract lifecycle review, and e-discovery with private generative legal copilots. Extract clauses, identify non-standard liabilities, and draft briefs in minutes with verifiable citations.",
    overviewHeading: "Intelligent Contract Analytics & Autonomous Legal Due Diligence",
    overviewPara: "DevOpsTRIO equips leading law firms and corporate legal departments with secure legal AI trained on millions of case precedents, statutes, and commercial agreements. Our platform reads 500-page complex contracts in seconds, identifying risk terms, indemnification gaps, and non-compete clauses with pinpoint precision.\n\nBuilt with air-gapped security and strict attorney-client privilege isolation, our legal models ensure your firm's sensitive litigation files and proprietary M&A deal structures never leave your encrypted private tenant.",
    metrics: [
      { value: "85%", label: "Faster Contract Review" },
      { value: "100%", label: "Cited Case Precedents" },
      { value: "10x", label: "Faster e-Discovery Speed" },
      { value: "Zero", label: "Missed Liability Clauses" }
    ],
    bento: [
      {
        title: "Automated M&A Due Diligence",
        desc: "Analyze thousands of legacy supplier agreements, leases, and intellectual property assignments overnight during complex merger due diligence.",
        colSpan: 2
      },
      {
        title: "Clause Extraction & Comparison",
        desc: "Identify deviations from company standard fallback clauses in commercial NDAs, Master Service Agreements, and vendor contracts instantly.",
        colSpan: 1
      },
      {
        title: "Intelligent e-Discovery & Redaction",
        desc: "Sift through millions of corporate emails and internal chats to surface responsive litigation evidence while auto-redacting privileged communications.",
        colSpan: 1
      },
      {
        title: "Legal Research & Brief Drafting",
        desc: "Synthesize jurisdictional case law, statutory precedents, and judicial rulings into comprehensive legal memoranda with exact page citations.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "CONTRACT INTELLIGENCE",
        title: "Redlining & Risk Scoring Engine",
        text: "Automatically redline third-party contracts against internal playbook guidelines, inserting pre-approved compromise language and providing attorneys with a risk score."
      },
      {
        tag: "SEARCH & PRECEDENTS",
        title: "Neural Case Law Search Across Jurisdictions",
        text: "Move beyond keyword search. Query complex legal concepts in natural language to uncover relevant state, federal, and appellate precedents that direct keyword searches miss."
      },
      {
        tag: "PRIVILEGE PROTECTION",
        title: "Zero Data Retention Guarantee",
        text: "Deploy models with strict cryptographic zero-retention guarantees. Your proprietary legal briefs and client communications are never used to train foundational public models."
      }
    ],
    stories: [
      {
        company: "Magic Circle Law Firm",
        metric: "80% Time Saved",
        desc: "Accelerated contract due diligence review for a $4.2B international cross-border acquisition from 6 weeks to 4 business days."
      },
      {
        company: "Fortune 100 Corporate Counsel",
        metric: "12,000 NDAs/Yr",
        desc: "Automated standard NDA and vendor agreement reviews, routing 75% of low-risk contracts directly for e-signature without lawyer intervention."
      },
      {
        company: "Litigation Boutique",
        metric: "2M Emails Filtered",
        desc: "Isolated key smoking-gun trial exhibits from 2 million discovery documents in 48 hours, securing a multi-million dollar favorable settlement."
      }
    ]
  },
  {
    id: "education-ai",
    titleLight: "Education",
    titleBold: "AI",
    heroDesc: "Personalize learning pathways with adaptive assessment engines, automated essay grading, predictive student at-risk retention analytics, and 24/7 intelligent academic tutoring.",
    overviewHeading: "Adaptive Learning Ecosystems & Educational Intelligence",
    overviewPara: "DevOpsTRIO partners with universities, K-12 school districts, and EdTech platforms to build personalized educational experiences tailored to each student's unique learning pace. Our adaptive learning systems evaluate comprehension in real time, dynamically adjusting lesson difficulty and providing customized practice exercises.\n\nFor educators and administrators, our platform automates time-consuming grading workflows, identifies students at risk of academic drop-out early in the semester, and streamlines institutional administrative operations.",
    metrics: [
      { value: "1:1", label: "Personalized Tutoring Scale" },
      { value: "85%", label: "Reduction in Grading Time" },
      { value: "92%", label: "At-Risk Retention Prediction" },
      { value: "+24%", label: "Average Test Score Gain" }
    ],
    bento: [
      {
        title: "Adaptive Learning Pathways",
        desc: "Dynamically adjust curriculum pacing, multimedia explanations, and difficulty levels based on individual student mastery and learning styles.",
        colSpan: 2
      },
      {
        title: "Automated Assessment & Essay Grading",
        desc: "Grade short-form answers, math derivations, and full essays with rubric-aligned feedback, freeing teachers for direct student mentorship.",
        colSpan: 1
      },
      {
        title: "Predictive At-Risk Student Intervention",
        desc: "Analyze LMS engagement, assignment submission velocity, and quiz scores to alert academic advisors to struggling students weeks before midterms.",
        colSpan: 1
      },
      {
        title: "24/7 Socratic Student Tutor",
        desc: "Provide students with a patient, conversational tutor that guides them through STEM and humanities problems using Socratic questioning rather than giving answers.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "SOCRATIC TUTORING",
        title: "Pedagogically Aligned Conversational Agents",
        text: "Designed with cognitive educational principles to foster critical thinking. The tutor asks probing questions, breaks down multi-step equations, and adapts analogies to the student's personal interests."
      },
      {
        tag: "CONTENT GENERATION",
        title: "Curriculum & Quiz Generation Engine",
        text: "Empower educators to generate differentiated reading passages, quizzes, homework sets, and lesson plans aligned with state and national educational standards in seconds."
      },
      {
        tag: "ACCESSIBILITY",
        title: "Multi-Modal Accessibility & Translation",
        text: "Auto-generate real-time audio transcripts, translated subtitles in 40+ languages, and simplified reading levels for neurodiverse students and ESL learners."
      }
    ],
    stories: [
      {
        company: "State University System",
        metric: "88% Retention",
        desc: "Identified 3,200 at-risk freshmen in week 4 of the semester, enabling targeted academic tutoring that curbed first-year dropouts by 28%."
      },
      {
        company: "Global EdTech Platform",
        metric: "2.5M Students",
        desc: "Scaled 24/7 AI-guided Socratic math tutoring across 2.5 million active learners, boosting average standardized test scores by 18 percentile points."
      },
      {
        company: "K-12 School District",
        metric: "15h Saved / Wk",
        desc: "Reclaimed 15 hours of weekly grading and lesson-planning time per teacher, dramatically reducing educator burnout across 42 schools."
      }
    ]
  },
  {
    id: "government-ai",
    titleLight: "Government",
    titleBold: "AI",
    heroDesc: "Enhance citizen services, optimize urban transit, and accelerate public policy analysis with air-gapped, FedRAMP-compliant Artificial Intelligence designed for public sector security.",
    overviewHeading: "Citizen-Centric Public Services & Smart Governance",
    overviewPara: "DevOpsTRIO delivers mission-critical AI solutions for federal agencies, state governments, and municipal public sector organizations. We streamline complex citizen interactions—from permit applications and tax filing assistance to veterans' benefit claims processing.\n\nOur smart city infrastructure models optimize municipal traffic signal timing, monitor civil infrastructure health, and support disaster relief coordination—all deployed with strict FedRAMP High, IL5/IL6, and StateRAMP security compliance.",
    metrics: [
      { value: "24/7", label: "Multi-Lingual Citizen Support" },
      { value: "65%", label: "Faster Benefit Claim Processing" },
      { value: "30%", label: "Reduction in Urban Traffic Congestion" },
      { value: "FedRAMP", label: "High Security Compliance" }
    ],
    bento: [
      {
        title: "Omnichannel Citizen Concierge",
        desc: "Help residents navigate complex municipal permits, licensing, tax inquiries, and social services conversationally in over 50 languages.",
        colSpan: 2
      },
      {
        title: "Benefit Claims Acceleration",
        desc: "Process veterans' affairs, unemployment, and healthcare assistance applications automatically, eliminating months of administrative backlogs.",
        colSpan: 1
      },
      {
        title: "Smart Traffic & Transit Optimization",
        desc: "Analyze intersection camera feeds to dynamically synchronize traffic lights, reducing commuter congestion and emergency vehicle response times.",
        colSpan: 1
      },
      {
        title: "Disaster Response Coordination",
        desc: "Synthesize satellite imagery, weather telemetry, and emergency call logs during natural disasters to route first responders and relief supplies efficiently.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "PUBLIC INFRASTRUCTURE",
        title: "Computer Vision Civil Asset Monitoring",
        text: "Analyze high-resolution municipal drone and vehicle camera footage to automatically detect potholes, damaged guardrails, bridge cracks, and failing streetlights."
      },
      {
        tag: "POLICY INTELLIGENCE",
        title: "Legislative Synthesis & Impact Modeling",
        text: "Enable policy analysts to query thousands of pages of municipal code, zoning regulations, and federal statutes, evaluating budgetary and environmental impacts."
      },
      {
        tag: "SECURITY & SOVEREIGNTY",
        title: "Air-Gapped GovCloud Deployments",
        text: "Deploy models entirely within AWS GovCloud or Azure Government regions, maintaining complete data sovereignty and strict CJIS/FedRAMP regulatory boundaries."
      }
    ],
    stories: [
      {
        company: "Metropolitan City Government",
        metric: "28% Less Congestion",
        desc: "Optimized traffic signal synchronization across 650 downtown intersections, reducing peak-hour commuter travel times by 28% and cutting vehicle emissions."
      },
      {
        company: "State Department of Labor",
        metric: "Zero Claim Backlog",
        desc: "Automated unemployment benefit eligibility verification, reducing claim turnaround from 28 days to 48 hours for 450,000 citizens."
      },
      {
        company: "Federal Transportation Agency",
        metric: "10,000 Bridges",
        desc: "Monitored structural integrity across 10,000 highway bridges using satellite and drone vision AI, identifying critical corrosion years before failure."
      }
    ]
  },
  {
    id: "custom-ai-solutions",
    titleLight: "Custom AI",
    titleBold: "Solutions",
    heroDesc: "Architect bespoke, proprietary foundational models, autonomous multi-agent swarms, and edge AI systems engineered specifically for your enterprise's unique competitive advantage.",
    overviewHeading: "Bespoke Enterprise AI Engineering & Proprietary IP Creation",
    overviewPara: "DevOpsTRIO partners with pioneering enterprise leaders who require proprietary AI capabilities that off-the-shelf commercial APIs cannot provide. We design, pre-train, and fine-tune domain-specific foundational models built exclusively on your confidential corporate data assets.\n\nFrom air-gapped on-device neural deployment to complex multi-agent collaborative swarms, our deep learning research engineers deliver production-grade, highly scalable systems where you retain 100% intellectual property ownership.",
    metrics: [
      { value: "100%", label: "Proprietary IP Ownership" },
      { value: "Bespoke", label: "Neural Model Architectures" },
      { value: "Zero", label: "Third-Party API Dependency" },
      { value: "Infinite", label: "Scalability on Your VPC" }
    ],
    bento: [
      {
        title: "Domain-Specific Pre-Training & Fine-Tuning",
        desc: "Pre-train and fine-tune custom open-weights models (Llama 3, Mistral, DeepSeek) on your private internal datasets for unmatched domain mastery.",
        colSpan: 2
      },
      {
        title: "Autonomous Multi-Agent Swarms",
        desc: "Architect collaborative multi-agent ecosystems where specialized cognitive agents plan, debate, execute, and verify complex end-to-end tasks.",
        colSpan: 1
      },
      {
        title: "Ultra-Lightweight Edge Quantization",
        desc: "Optimize complex deep learning models to run with sub-millisecond latency on constrained IoT, drone, and on-premise hardware.",
        colSpan: 1
      },
      {
        title: "Enterprise Air-Gapped Security",
        desc: "Deploy completely self-contained AI infrastructure within private VPCs or on-premise data centers with zero external internet dependencies.",
        colSpan: 2
      }
    ],
    features: [
      {
        tag: "BESPOKE ARCHITECTURE",
        title: "Custom Loss Functions & Novel Model Design",
        text: "Our research engineers develop proprietary neural architectures, mixture-of-experts (MoE) routers, and domain-tuned tokenizers tailored to your specific data modality and latency budgets."
      },
      {
        tag: "DATA CURATION",
        title: "Synthetic Data Generation & Curation Pipelines",
        text: "Overcome proprietary data scarcity with validated synthetic data generation, rigorous automated filtering, and reinforcement learning from human feedback (RLHF)."
      },
      {
        tag: "IP OWNERSHIP",
        title: "Total Commercial Sovereignty",
        text: "You retain full legal ownership of model weights, training checkpoints, data pipelines, and deployment artifacts with zero vendor lock-in or recurring per-token SaaS fees."
      }
    ],
    stories: [
      {
        company: "Fortune 50 Conglomerate",
        metric: "100% Owned LLM",
        desc: "Trained a proprietary 70B parameter enterprise foundation model on 30 years of confidential internal engineering blueprints and operational procedures."
      },
      {
        company: "Autonomous Robotics Pioneer",
        metric: "Sub-5ms Inference",
        desc: "Engineered quantized edge vision-action models running on custom robotic hardware with ultra-low power consumption and zero cloud latency."
      },
      {
        company: "Global Commodity Trading House",
        metric: "Multi-Agent Swarm",
        desc: "Deployed an autonomous multi-agent intelligence swarm that continuously models global weather, vessel AIS tracking, and energy derivatives to inform trading strategies."
      }
    ]
  }
];

function randImg() {
  return Math.floor(Math.random() * 30) + 1;
}

solutions.forEach(s => {
  const indices = new Set();
  while(indices.size < 8) {
    indices.add(randImg());
  }
  const idxArr = Array.from(indices);

  let content = "import img1 from '../../assets/solutions/" + idxArr[0] + ".jpg';\n";
  content += "import img2 from '../../assets/solutions/" + idxArr[1] + ".jpg';\n";
  content += "import img3 from '../../assets/solutions/" + idxArr[2] + ".jpg';\n";
  content += "import img4 from '../../assets/solutions/" + idxArr[3] + ".jpg';\n";
  content += "import img5 from '../../assets/solutions/" + idxArr[4] + ".jpg';\n";
  content += "import img6 from '../../assets/solutions/" + idxArr[5] + ".jpg';\n";
  content += "import img7 from '../../assets/solutions/" + idxArr[6] + ".jpg';\n";
  content += "import img8 from '../../assets/solutions/" + idxArr[7] + ".jpg';\n\n";

  content += "const data = {\n";
  content += "  id: '" + s.id + "',\n";
  content += "  breadcrumbs: ['Enterprise Solutions', '" + s.titleLight + " " + s.titleBold + "'],\n";
  content += "  hero: {\n";
  content += "    titleLight: '" + s.titleLight + "',\n";
  content += "    titleBold: '" + s.titleBold + "',\n";
  content += "    description: " + JSON.stringify(s.heroDesc) + ",\n";
  content += "    bgImage: img1\n";
  content += "  },\n";
  content += "  metricsBanner: " + JSON.stringify(s.metrics, null, 2) + ",\n";
  content += "  overview: {\n";
  content += "    heading: " + JSON.stringify(s.overviewHeading) + ",\n";
  content += "    paragraph: " + JSON.stringify(s.overviewPara) + ",\n";
  content += "    image: img2\n";
  content += "  },\n";
  
  // Bento
  const bentoWithImgs = [
    { ...s.bento[0], image: "__IMG3__" },
    { ...s.bento[1], image: "__IMG4__" },
    { ...s.bento[2], image: "__IMG5__" },
    { ...s.bento[3], image: "__IMG6__" }
  ];
  content += "  benefitsBento: " + JSON.stringify(bentoWithImgs, null, 2).replace(/"__IMG3__"/g, 'img3').replace(/"__IMG4__"/g, 'img4').replace(/"__IMG5__"/g, 'img5').replace(/"__IMG6__"/g, 'img6') + ",\n";

  // Features
  const featuresWithImgs = [
    { ...s.features[0], image: "__IMG7__" },
    { ...s.features[1], image: "__IMG8__" },
    { ...s.features[2], image: "__IMG1__" }
  ];
  content += "  featuresZigZag: " + JSON.stringify(featuresWithImgs, null, 2).replace(/"__IMG7__"/g, 'img7').replace(/"__IMG8__"/g, 'img8').replace(/"__IMG1__"/g, 'img1') + ",\n";

  // Success Stories
  content += "  successStories: " + JSON.stringify(s.stories, null, 2) + "\n";
  content += "};\n\n";
  content += "export default data;\n";

  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'solutions', s.id + '.js'), content);
});

console.log("Successfully generated comprehensive rich content for all 20 enterprise solutions!");
