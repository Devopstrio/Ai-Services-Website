import heroBg from "../../assets/library/agent_legal_compliance.jpg";
import redlineImg from "../../assets/fresh/agent_compliance_auditing.jpg";
import playbookImg from "../../assets/unique_agents/legal_contract_review.jpg";
import mnaImg from "../../assets/fresh/executive_boardroom_ai.jpg";
import sealImg from "../../assets/fresh/identification-vs-authontication-2.jpg";
import caseImg from "../../assets/unique_agents/legal_agent_case.jpg";

export const legalAgentData = {
  id: "legal-agent",
  category: "Business Operations",
  name: "Legal Agent Swarm",
  tagline: "Contract Clause Risk Redlines, Playbook Compliance & M&A Due Diligence",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Accelerate Contract Turnaround with",
    titleBold: "DevOpsTRIO Legal Agent",
    description: "Audit complex MSAs, NDAs, DPAs, and vendor agreements against enterprise legal playbooks in seconds. Automatically insert pre-approved fallback clauses, flag uncapped liabilities, and seal cryptographic audit trails.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 22,
      latency: "320ms",
      connectedTools: 12,
      autonomyScore: "99.7%"
    }
  },
  metrics: [
    { value: "88%", label: "Contract Review Speed", sub: "From 5 business days to 12 minutes" },
    { value: "100%", label: "Playbook Compliance", sub: "Zero non-standard clause leakage" },
    { value: "99.9%", label: "Risk Extraction Accuracy", sub: "Grounded clause analysis & redlining" },
    { value: "75%", label: "Legal Ops Cost Reduction", sub: "Automated routine agreement triage" }
  ],
  overview: {
    heading: "The Autonomous Digital Counsel for Modern In-House Legal Teams",
    description: "Enterprise general counsels and legal teams are inundated by high-volume routine contract reviews, slowing down revenue deals and vendor onboarding.\n\nThe DevOpsTRIO Legal Agent operates as a collaborative swarm of specialized cognitive legal sub-agents. It ingests inbound contract redlines, checks each clause against your corporate risk playbooks, inserts negotiated standard positions, and routes non-standard terms to human counsel with precise risk briefs.",
    keyPoints: [
      "Sub-second analysis of MSAs, NDAs, DPAs, and software license agreements",
      "Automated Word (DOCX) redline generation with pre-approved standard fallbacks",
      "High-speed M&A virtual data room (VDR) clause extraction and risk scoring",
      "Cryptographically sealed audit logs ensuring compliance with EU AI Act and GDPR"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Contract Perception",
      role: "Clause Ingestion & Tokenizer",
      description: "Parses complex DOCX and scanned PDF agreements, isolating individual clauses, governing law, and defined terms.",
      tech: "Legal Transformers & Semantic Structure Trees"
    },
    {
      tier: "02",
      name: "Risk & Policy Kernel",
      role: "Playbook Comparison Engine",
      description: "Evaluates clause language against corporate risk guidelines (e.g. indemnity caps, IP ownership, governing jurisdiction).",
      tech: "Constraint Satisfaction & Epistemic Legal Vector Matching"
    },
    {
      tier: "03",
      name: "Redline & CLM Mesh",
      role: "Contract Lifecycle Gateway",
      description: "Applies tracked changes into DOCX files, coordinates DocuSign/Ironclad workflows, and seals cryptographic signatures.",
      tech: "OpenXML Tracked Changes Engine & DocuSign eIDAS APIs"
    }
  ],
  capabilities: [
    {
      id: "redlining",
      tag: "CONTRACT REVIEW",
      title: "Autonomous Contract Redlining",
      description: "Generates production-ready Microsoft Word redlines with tracked changes, replacing hostile vendor terms with company-approved fallbacks.",
      features: [
        "Identifies uncapped indemnity, broad warranties, and aggressive termination clauses",
        "Inserts approved standard fallback language dynamically based on contract value",
        "Adds explanatory margin comments citing specific company policy requirements",
        "Reduces average contract review turnaround time by 88%"
      ],
      image: redlineImg,
      metricBadge: "88% Faster Review"
    },
    {
      id: "playbook-guard",
      tag: "COMPLIANCE & RISK",
      title: "Dynamic Legal Playbook Enforcement",
      description: "Maintains a live corporate playbook of approved terms across jurisdictions (US, UK, EU, APAC), preventing rogue clause approvals.",
      features: [
        "Location-aware governing law and jurisdiction verification",
        "Strict GDPR, HIPAA, and CCPA data processing agreement (DPA) guardrails",
        "Automated liability cap calculation based on annual contract value",
        "100% adherence to General Counsel risk thresholds"
      ],
      image: playbookImg,
      metricBadge: "100% Playbook Guard"
    },
    {
      id: "mna-due-diligence",
      tag: "M&A INTELLIGENCE",
      title: "M&A Due Diligence & VDR Audit",
      description: "Scans thousands of contracts across Virtual Data Rooms (VDR) during mergers and acquisitions, surfacing hidden liabilities in hours.",
      features: [
        "Extracts change-of-control, exclusivity, and non-compete clauses across 10,000+ files",
        "Generates executive risk dossiers and summary tables for investment committees",
        "Identifies assignment restrictions and customer termination rights",
        "Reduces M&A due diligence timeline from 4 weeks to 24 hours"
      ],
      image: mnaImg,
      metricBadge: "24-Hour M&A Audit"
    },
    {
      id: "crypto-seal",
      tag: "AUDIT & SECURITY",
      title: "Cryptographic Agreement Sealing",
      description: "Creates immutable, tamper-proof SHA-256 audit records of all executed agreements, negotiation iterations, and sign-offs.",
      features: [
        "Cryptographically sealed audit logs for every clause modification",
        "Bi-directional synchronization with Ironclad, Agiloft, and DocuSign CLM",
        "Automated contract renewal and price escalation notification triggers",
        "Zero model training on proprietary customer contract data"
      ],
      image: sealImg,
      metricBadge: "SHA-256 Audit Trail"
    }
  ],
  comparison: [
    { metric: "Standard NDA / MSA Review", legacy: "3 to 5 Business days (Queue backlog)", agent: "Under 12 Minutes (Autonomous Redline)" },
    { metric: "Playbook Adherence", legacy: "Variable (Depends on assigned junior associate)", agent: "100% Deterministic rule enforcement" },
    { metric: "M&A Data Room Audit", legacy: "3 to 6 Weeks ($200k+ Law firm bill)", agent: "Under 24 Hours with full clause index" },
    { metric: "Version Tracking & Audit", legacy: "Scattered Word attachments in email", agent: "Cryptographically sealed CLM timeline" },
    { metric: "Contract Risk Visibility", legacy: "Hidden until litigation arises", agent: "Live enterprise contract risk dashboards" }
  ],
  interactiveDemo: {
    title: "Legal Swarm Studio",
    subtitle: "Observe the Legal Agent parse an enterprise MSA, identify hostile terms, apply tracked changes redlines, and seal the audit log in real time.",
    scenarios: [
      {
        id: "msa-redline",
        title: "Enterprise MSA Clause Triage",
        role: "Inbound Contract: $450k Cloud Software MSA (Supplier Paper)",
        executionTime: "4.6s",
        humanTime: "3 Days",
        status: "Redlined & Ready for Counsel",
        agentsInvolved: ["Clause Extractor", "Playbook Comparator", "Tracked Changes Engine"],
        planSteps: [
          { step: "Extracted 38 individual sections from incoming Word DOCX contract", time: "0.8s" },
          { step: "Identified Section 11: Uncapped consequential damages liability (Breach of Playbook)", time: "1.2s" },
          { step: "Applied Tracked Changes: Replaced with pre-approved 12-month fees liability cap", time: "1.4s" },
          { step: "Updated governing law clause from Delaware to State of New York as required", time: "1.2s" }
        ],
        outcome: "Clean DOCX redline generated with 4 risk annotations ready for General Counsel sign-off."
      },
      {
        id: "dpa-compliance",
        title: "GDPR Cross-Border DPA Audit",
        role: "Target: Sub-Processor Data Processing Agreement // EU Customer",
        executionTime: "3.1s",
        humanTime: "2 Days",
        status: "Verified & Compliant",
        agentsInvolved: ["Privacy Vector Auditor", "Standard Contractual Clauses Engine", "DocuSign Gateway"],
        planSteps: [
          { step: "Validated 2021 EU Standard Contractual Clauses (SCC) Module 2 terms", time: "0.7s" },
          { step: "Checked technical & organizational security measures (TOMs) against SOC 2 controls", time: "0.9s" },
          { step: "Inserted mandatory 48-hour data breach notification window requirement", time: "0.8s" },
          { step: "Dispatched agreement to DocuSign envelope for authorized corporate signature", time: "0.7s" }
        ],
        outcome: "DPA verified and approved with 100% EU GDPR and UK data transfer compliance."
      },
      {
        id: "mna-vdr-scan",
        title: "M&A Virtual Data Room Audit",
        role: "Acquisition Target: 420 Customer Contracts ($60M Deal Size)",
        executionTime: "8.2s",
        humanTime: "3 Weeks",
        status: "Completed",
        agentsInvolved: ["VDR Bulk Ingestor", "Change-of-Control Analyzer", "Executive Dossier Agent"],
        planSteps: [
          { step: "Ingested 420 customer PDF contracts from Datasite Virtual Data Room", time: "2.1s" },
          { step: "Identified 8 key enterprise contracts with change-of-control termination rights", time: "2.8s" },
          { step: "Calculated potential revenue at risk ($4.2M) if consent is withheld", time: "1.8s" },
          { step: "Generated executive due diligence memo for Investment Committee review", time: "1.5s" }
        ],
        outcome: "Virtual Data Room audit complete. Surfaced $4.2M consent risk before deal closing."
      }
    ]
  },
  integrations: [
    { name: "Ironclad CLM", type: "Contract Lifecycle Sync" },
    { name: "DocuSign & SafeSign", type: "Digital Agreement Sealing" },
    { name: "Agiloft & Icertis", type: "Enterprise CLM Gateway" },
    { name: "Microsoft Word (O365)", type: "Tracked Changes Engine" },
    { name: "Salesforce CRM", type: "Deal & NDA Pipeline Sync" },
    { name: "SharePoint & Box", type: "Repository Storage" }
  ],
  governance: [
    { label: "Privilege Protection Enclave", desc: "Maintains strict attorney-client privilege boundaries" },
    { label: "Zero Model Retention", desc: "Proprietary agreements are never cached or trained on" },
    { label: "EU AI Act & GDPR Audited", desc: "Full explainability and deterministic reasoning logs" },
    { label: "Dual Legal Authorization", desc: "High-liability departures require senior counsel sign-off" }
  ],
  caseStudy: {
    client: "Global Financial Services Enterprise",
    industry: "Banking & Financial Services",
    headline: "How a Global Bank Accelerated Commercial Contract Turnaround by 88% with Zero Compliance Slips",
    quote: "DevOpsTRIO Legal Agent eliminated our review backlogs entirely. Our commercial attorneys now focus strictly on high-stakes strategic negotiations rather than routine NDA redlines.",
    author: "General Counsel & VP of Legal Operations",
    company: "Publicly Traded Banking Institution",
    image: caseImg,
    results: [
      { stat: "88%", label: "Faster contract turnaround" },
      { stat: "100%", label: "Playbook compliance rate" },
      { stat: "$2.6M", label: "Annual external counsel savings" }
    ]
  }
};
