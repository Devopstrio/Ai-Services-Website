const fs = require('fs');
const path = require('path');

const PRODUCTS_CONFIG = [
  {
    id: "mailtab",
    category: "Business Platform",
    name: "MailTab",
    tagline: "Autonomous Email Intelligence, Smart Inbox Triage & Executive Action Synthesis",
    hero: {
      badge: "BUSINESS PLATFORM // EMAIL INTELLIGENCE",
      titleLight: "Intelligent Inbox Operations with",
      titleBold: "MailTab",
      description: "Stop losing executive hours to email overload. MailTab deploys autonomous cognitive agents that classify incoming messages by priority, synthesize context-aware draft responses, extract actionable deliverables, and coordinate calendar commitments with zero human friction.",
      bgImage: "smart_inbox_triage.jpg",
      liveBadge: "v3.8 Production Ready"
    },
    metrics: [
      { value: "4.5 hrs", label: "Saved Per Employee / Day", sub: "Automated triage & drafting" },
      { value: "94%", label: "First-Pass Response Accuracy", sub: "Context-aligned tone & policy" },
      { value: "< 30s", label: "Urgent Thread Escalation", sub: "Real-time executive alerting" },
      { value: "100%", label: "Data Isolation & Privacy", sub: "Air-gapped on-prem or private cloud" }
    ],
    overview: {
      heading: "Transforming the Enterprise Inbox into an Autonomous Action Center",
      description: "Modern knowledge workers spend over 28% of their workweek reading and drafting emails. Fragmented threads across Outlook and Gmail lead to missed customer commitments and delayed decisions.\n\nMailTab integrates seamlessly into your email infrastructure to read, summarize, draft, and schedule on your behalf while keeping full human-in-the-loop oversight.",
      keyPoints: [
        "Semantic thread summarization across multi-week conversations",
        "Autonomous reply drafting trained on enterprise brand voice and policy",
        "Action item extraction that pushes directly to Jira, Asana, and Slack",
        "Military-grade encryption with zero retention on public models"
      ]
    },
    features: [
      {
        id: "triage",
        tabTitle: "Smart Triage",
        title: "Intent-Based Inbox Categorization & Filtering",
        description: "MailTab parses incoming messages in milliseconds, grouping them by business urgency, customer value, and required action instead of standard spam filters.",
        highlights: [
          "Identifies high-value enterprise deal inquiries instantly",
          "Filters automated notifications into structured executive digests",
          "Detects urgency and escalation flags in customer emails",
          "Supports multi-inbox shared executive accounts"
        ],
        image: "smart_inbox_triage.jpg"
      },
      {
        id: "drafting",
        tabTitle: "Contextual Drafting",
        title: "Brand-Aligned Autonomous Response Generation",
        description: "Drafts tailored, highly accurate replies by pulling context from past email threads, internal knowledge wikis, and CRM notes.",
        highlights: [
          "Multi-lingual response drafting across 30+ languages",
          "Contextual attachments lookup from Google Drive and OneDrive",
          "Custom tone profiles for executives, sales, and support",
          "One-click review and send interface"
        ],
        image: "multimodal_ai_workbench.jpg"
      },
      {
        id: "calendar",
        tabTitle: "Calendar Sync",
        title: "Autonomous Meeting Scheduling & Commitment Tracking",
        description: "Eliminates back-and-forth calendar negotiation. MailTab reads requested timeframes and sends personalized booking slots directly in the thread.",
        highlights: [
          "Resolves double-booking conflicts across multiple time zones",
          "Automated agenda and pre-read document distribution",
          "Follow-up reminder triggers for pending commitments",
          "Native Outlook 365 and Google Workspace integration"
        ],
        image: "product_design_review.jpg"
      },
      {
        id: "security",
        tabTitle: "Zero-Trust Privacy",
        title: "Enterprise DLP & Confidentiality Guardrails",
        description: "Protects sensitive enterprise IP. Automatically flags accidental PII or confidential leaks before an email leaves your corporate domain.",
        highlights: [
          "Real-time DLP (Data Loss Prevention) scanning",
          "Role-based email access controls and audit logs",
          "Strict data residency compliance (GDPR, HIPAA, SOC 2)",
          "Air-gapped private LLM deployment support"
        ],
        image: "cyber_threat_map.jpg"
      }
    ],
    workflow: [
      { step: "01", title: "Stream Ingestion", desc: "Secure webhook connects to corporate Exchange or Gmail with zero latency." },
      { step: "02", title: "Intent & Sentiment Triage", desc: "AI models classify thread importance and extract action items." },
      { step: "03", title: "Context Gathering", desc: "Retrieves relevant customer history and knowledge docs." },
      { step: "04", title: "Draft Generation", desc: "Produces natural, context-rich draft replies for human review." },
      { step: "05", title: "One-Click Dispatch", desc: "Executive approves with a single hotkey and action items sync to CRM." }
    ],
    interactiveDemo: {
      title: "Interactive Email Triage & Response Simulator",
      subtitle: "Select an incoming email scenario below to see how MailTab analyzes intent, extracts deliverables, and generates an executive response.",
      personas: [
        {
          name: "Tier-1 Enterprise Deal Inbound",
          role: "Subject: Urgent: Custom SLA & Pricing for Global Rollout",
          experience: "From: VP of Engineering, Fortune 500 Bank",
          matchScore: 99,
          matchGrade: "Critical Priority",
          summary: "Client requests custom SLA terms, SOC2 compliance confirmation, and a multi-region deployment discount before Friday's board meeting.",
          competencies: [
            { skill: "Intent Classification", score: 99 },
            { skill: "Context Retrieval (CRM)", score: 97 },
            { skill: "Tone Alignment", score: 95 },
            { skill: "Calendar Coordination", score: 98 }
          ],
          aiInsight: "High-value expansion deal (\$1.2M ARR). Drafted tailored response referencing SOC2 package and proposed executive sync tomorrow at 2:00 PM EST."
        },
        {
          name: "Critical Escalation Thread",
          role: "Subject: Production Pipeline Latency in EU-West",
          experience: "From: Lead DevOps Architect",
          matchScore: 96,
          matchGrade: "High Priority",
          summary: "Incident report detailing sporadic API timeout in Frankfurt datacenter. Team is investigating root cause.",
          competencies: [
            { skill: "Incident Severity Triage", score: 98 },
            { skill: "Jira Ticket Sync", score: 95 },
            { skill: "Stakeholder Summary", score: 94 },
            { skill: "Action Extraction", score: 96 }
          ],
          aiInsight: "Synthesized technical incident summary and notified On-Call Engineering Leads via Slack webhook."
        },
        {
          name: "Vendor Contract Renewal",
          role: "Subject: Annual Cloud Security License Renewal",
          experience: "From: Enterprise Procurement Lead",
          matchScore: 92,
          matchGrade: "Standard Priority",
          summary: "Vendor provided 3-year term agreement with 15% discount if signed prior to quarter close.",
          competencies: [
            { skill: "Contract Parsing", score: 94 },
            { skill: "Budget Check", score: 92 },
            { skill: "Executive Briefing", score: 95 },
            { skill: "Legal Redline Routing", score: 93 }
          ],
          aiInsight: "Calculated multi-year ROI vs annual plan and queued draft review for Head of Procurement."
        }
      ]
    },
    integrations: [
      { name: "Microsoft 365 / Outlook", type: "Native Add-in & Webhook" },
      { name: "Google Workspace", type: "Gmail Extension & API" },
      { name: "Salesforce CRM", type: "Auto-Thread Logging" },
      { name: "HubSpot", type: "Contact & Deal Sync" },
      { name: "Jira & Linear", type: "Task Auto-Creation" },
      { name: "Slack & Teams", type: "High-Priority Pushes" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Audited security architecture" },
      { label: "Zero Model Retention", desc: "Emails never stored for public LLM training" },
      { label: "End-to-End Encryption", desc: "TLS 1.3 in transit and AES-256 at rest" },
      { label: "GDPR Compliant", desc: "Granular data residency controls" }
    ],
    caseStudy: {
      client: "Global Private Equity Firm",
      industry: "Financial Services",
      headline: "How 250 Investment Partners Saved 1,000+ Weekly Hours on Deal Inbounds",
      quote: "MailTab cut through our inbox noise immediately. Our partners now respond to critical founder pitches in under 5 minutes, giving us a major edge in fast-moving rounds.",
      author: "Managing Partner",
      company: "Top-Tier European Venture Fund",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "80%", label: "Reduction in triage backlog" },
        { stat: "3.5 hrs", label: "Saved per partner daily" },
        { stat: "< 4 min", label: "Average response latency" }
      ]
    }
  },
  {
    id: "safesign-ai",
    category: "Business Platform",
    name: "SafeSign AI",
    tagline: "Enterprise Digital Signatures & Neural Contract Risk Analysis",
    hero: {
      badge: "BUSINESS PLATFORM // CONTRACT INTELLIGENCE",
      titleLight: "Secure Digital Agreements with",
      titleBold: "SafeSign AI",
      description: "Accelerate agreement turnaround while neutralizing legal risk. SafeSign AI combines cryptographic e-signatures with real-time neural contract analysis, clause risk scoring, and automated compliance redlines.",
      bgImage: "executive_boardroom_ai.jpg",
      liveBadge: "v4.0 Enterprise Ready"
    },
    metrics: [
      { value: "75%", label: "Faster Contract Turnaround", sub: "From initial draft to execution" },
      { value: "99.8%", label: "Clause Anomaly Detection", sub: "Detect hidden indemnities & risks" },
      { value: "100%", label: "eIDAS & ESIGN Legal Validity", sub: "Cryptographically certified audit logs" },
      { value: "60%", label: "Legal Review Cost Savings", sub: "Automate repetitive redlines" }
    ],
    overview: {
      heading: "Next-Generation Contract Intelligence and Legally Binding E-Signatures",
      description: "Enterprise contract workflows frequently stall in manual legal review queues. SafeSign AI automates the entire lifecycle — from NDA generation and risk redlining to multi-party cryptographic signature collection and post-signing compliance monitoring.",
      keyPoints: [
        "Instant contract clause risk scoring against your legal playbook",
        "Cryptographically sealed digital signatures compliant with ESIGN, UETA, and eIDAS",
        "Automated deviation tracking across MSAs, SOWs, and NDAs",
        "Native integrations with Salesforce, DocuSign legacy archives, and ERPs"
      ]
    },
    features: [
      {
        id: "risk",
        tabTitle: "Risk Analysis",
        title: "Real-Time Neural Clause Risk Detection",
        description: "SafeSign AI reads multi-page agreements in seconds, highlighting non-standard terms, unlimited liability clauses, and unfavorable termination penalties.",
        highlights: [
          "Instant redlining mapped directly to corporate legal standards",
          "Identifies hidden auto-renewal and price escalation traps",
          "Automated comparison against gold-standard baseline contracts",
          "Multi-jurisdiction regulatory compliance checks"
        ],
        image: "cyber_digital_matrix.jpg"
      },
      {
        id: "esign",
        tabTitle: "Secure Signatures",
        title: "Cryptographic Multi-Party E-Signatures",
        description: "Collect legally binding signatures on any device with biometric authentication, SMS OTP verification, and tamper-evident audit certificates.",
        highlights: [
          "Compliant with US ESIGN, UETA, and EU eIDAS regulations",
          "SHA-256 hash sealing preventing post-signing document alterations",
          "Sequential and parallel multi-signer routing workflows",
          "Mobile-optimized signing with zero app installation"
        ],
        image: "tech_architect_whiteboard.jpg"
      },
      {
        id: "playbook",
        tabTitle: "Playbook Rules",
        title: "Dynamic Legal Playbook & Fallback Clauses",
        description: "Empower commercial sales teams to negotiate pre-approved fallback clauses safely without waiting for in-house legal counsel.",
        highlights: [
          "Curated repository of standard fallback language",
          "Automated approval escalation for threshold breaches",
          "Version control with full visual difference highlighting",
          "Audit logs for all stakeholder comments and modifications"
        ],
        image: "product_design_review.jpg"
      },
      {
        id: "postsign",
        tabTitle: "Post-Sign Intelligence",
        title: "Contract Obligation & Renewal Tracking",
        description: "Never miss a renewal deadline or SLA milestone. SafeSign AI extracts active deliverables and syncs them directly into operational calendars.",
        highlights: [
          "Automated renewal and expiration alerting",
          "Extraction of payment terms and milestone triggers",
          "Centralized searchable contract repository with neural search",
          "ERP invoice validation against contracted rate cards"
        ],
        image: "saas_cloud_platform_ui.jpg"
      }
    ],
    workflow: [
      { step: "01", title: "Document Upload", desc: "Upload PDF or DOCX agreement via web or CRM plugin." },
      { step: "02", title: "Neural Risk Triage", desc: "SafeSign scans clauses and highlights risk anomalies." },
      { step: "03", title: "Playbook Redlining", desc: "Automated standard redlines inserted in one click." },
      { step: "04", title: "Signature Collection", desc: "Multi-party sequential signing with tamper-proof hashing." },
      { step: "05", title: "Vault & Tracking", desc: "Executed contract stored with automated obligation alerts." }
    ],
    interactiveDemo: {
      title: "Interactive Contract Risk Analyzer Simulator",
      subtitle: "Select a contract type below to see how SafeSign AI audits clauses, identifies high-risk liabilities, and suggests pre-approved fallbacks.",
      personas: [
        {
          name: "Master Services Agreement (MSA)",
          role: "Vendor Contract // \$2.5M Value",
          experience: "42 Pages • 18 Exhibits",
          matchScore: 88,
          matchGrade: "3 High-Risk Flags",
          summary: "Identified unlimited indemnity clause in Section 14.2 and an ambiguous net-90 payment trigger. Recommended standard fallback to 2x contract value cap.",
          competencies: [
            { skill: "Indemnity Risk Detection", score: 99 },
            { skill: "Payment Term Parsing", score: 96 },
            { skill: "IP Ownership Guardrail", score: 97 },
            { skill: "Jurisdiction Compliance", score: 95 }
          ],
          aiInsight: "Replaced 4 non-standard clauses with pre-approved playbook terms. Estimated legal review time saved: 6 hours."
        },
        {
          name: "Mutual NDA (Commercial)",
          role: "Strategic Partner Agreement",
          experience: "6 Pages • 2 Signers",
          matchScore: 98,
          matchGrade: "Low Risk (Auto-Approved)",
          summary: "Standard 3-year term with mutual non-disclosure protections. Full alignment with enterprise security policy.",
          competencies: [
            { skill: "Confidentiality Scope", score: 98 },
            { skill: "Term Verification", score: 99 },
            { skill: "Governing Law Check", score: 97 },
            { skill: "Auto-Signature Ready", score: 100 }
          ],
          aiInsight: "100% compliant with standard corporate guidelines. Routed directly to CEO for one-click signature."
        },
        {
          name: "Cloud SLA & Data Processing (DPA)",
          role: "SaaS Infrastructure Agreement",
          experience: "24 Pages • GDPR / EU Data",
          matchScore: 94,
          matchGrade: "Moderate Risk",
          summary: "Data residency clause lacked explicit EU-only failover guarantees. Inserted Standard Contractual Clauses (SCCs).",
          competencies: [
            { skill: "GDPR Compliance Check", score: 96 },
            { skill: "Data Breach SLA Parsing", score: 95 },
            { skill: "Subprocessor Audit", score: 93 },
            { skill: "Standard Clause Mapping", score: 97 }
          ],
          aiInsight: "Guaranteed 48-hour breach notification SLA inserted. Audit trail sealed."
        }
      ]
    },
    integrations: [
      { name: "Salesforce CRM", type: "One-Click Contract Generation" },
      { name: "HubSpot", type: "Deal Pipeline Signature Sync" },
      { name: "Workday", type: "Employee Agreement Sync" },
      { name: "Google Drive & Box", type: "Automated Vault Archiving" },
      { name: "Slack", type: "Signature Status Notifications" },
      { name: "SAP Ariba", type: "Procurement Workflow Connector" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Verified enterprise controls" },
      { label: "eIDAS Compliant", desc: "EU-wide legal validity" },
      { label: "AES-256 Encryption", desc: "Military-grade cryptographic sealing" },
      { label: "21 CFR Part 11", desc: "FDA audit-trail compliance" }
    ],
    caseStudy: {
      client: "Global Logistics Conglomerate",
      industry: "Supply Chain & Logistics",
      headline: "How 12,000 Annual Carrier Agreements Were Accelerated from 14 Days to 4 Hours",
      quote: "SafeSign AI eliminated our contract backlogs completely. Our commercial teams can now close vendor agreements on the road in hours while knowing our risk exposure is 100% guarded.",
      author: "General Counsel",
      company: "Global 500 Shipping Operator",
      image: "global_shipping_container_port.jpg",
      results: [
        { stat: "85%", label: "Faster contract execution" },
        { stat: "\$1.8M", label: "Annual external legal savings" },
        { stat: "0", label: "Compliance breaches reported" }
      ]
    }
  }
];

const productsDir = path.join(__dirname, 'src', 'data', 'products');

// Write out all files
console.log('Writing product data files...');
// Write mailtab and safesign
fs.writeFileSync(path.join(productsDir, 'mailtab.js'), `import heroBg from "../../assets/fresh/smart_inbox_triage.jpg";
import triageImg from "../../assets/fresh/smart_inbox_triage.jpg";
import draftImg from "../../assets/fresh/multimodal_ai_workbench.jpg";
import calImg from "../../assets/fresh/product_design_review.jpg";
import secImg from "../../assets/fresh/cyber_threat_map.jpg";
import caseImg from "../../assets/fresh/executive_boardroom_ai.jpg";

export const mailtabData = ${JSON.stringify(PRODUCTS_CONFIG[0], null, 2)}
mailtabData.hero.bgImage = heroBg;
mailtabData.features[0].image = triageImg;
mailtabData.features[1].image = draftImg;
mailtabData.features[2].image = calImg;
mailtabData.features[3].image = secImg;
mailtabData.caseStudy.image = caseImg;
`);

fs.writeFileSync(path.join(productsDir, 'safesign-ai.js'), `import heroBg from "../../assets/fresh/executive_boardroom_ai.jpg";
import riskImg from "../../assets/fresh/cyber_digital_matrix.jpg";
import esignImg from "../../assets/fresh/tech_architect_whiteboard.jpg";
import playImg from "../../assets/fresh/product_design_review.jpg";
import postImg from "../../assets/fresh/saas_cloud_platform_ui.jpg";
import caseImg from "../../assets/fresh/global_shipping_container_port.jpg";

export const safesignData = ${JSON.stringify(PRODUCTS_CONFIG[1], null, 2)}
safesignData.hero.bgImage = heroBg;
safesignData.features[0].image = riskImg;
safesignData.features[1].image = esignImg;
safesignData.features[2].image = playImg;
safesignData.features[3].image = postImg;
safesignData.caseStudy.image = caseImg;
`);

console.log('Finished writing base files!');
