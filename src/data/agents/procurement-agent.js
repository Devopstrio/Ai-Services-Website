import heroBg from "../../assets/library/agent_procurement_vendor.jpg";
import rfqImg from "../../assets/unique_agents/procurement_vendor_rfq.jpg";
import vendorImg from "../../assets/fresh/automated_logistics_hub.jpg";
import spendImg from "../../assets/fresh/dashboard_supply_chain.jpg";
import contractImg from "../../assets/fresh/global_shipping_container_port.jpg";
import caseImg from "../../assets/unique_agents/procurement_agent_case.jpg";

export const procurementAgentData = {
  id: "procurement-agent",
  category: "Business Operations",
  name: "Procurement Agent Swarm",
  tagline: "Vendor Contract Auditing, Dynamic RFQ Scoring & Spend Control",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Strategic Spend Control with",
    titleBold: "Devopstrio Procurement Agent",
    description: "Automate supplier onboarding, analyze RFP/RFQ vendor responses with neural risk scoring, negotiate pre-approved contract rate cards, and enforce corporate spend policy guardrails autonomously.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 28,
      latency: "390ms",
      connectedTools: 16,
      autonomyScore: "99.4%"
    }
  },
  metrics: [
    { value: "14.2%", label: "Direct Spend Savings", sub: "Algorithmic RFQ price benchmarking" },
    { value: "5x", label: "RFQ Sourcing Speed", sub: "From 6 weeks down to 4 days" },
    { value: "99.7%", label: "Contract SLA Accuracy", sub: "Automated vendor milestone tracking" },
    { value: "100%", label: "Policy Compliance", sub: "Pre-purchase policy guardrail locks" }
  ],
  overview: {
    heading: "The Autonomous Digital Buyer for Modern Enterprises",
    description: "Procurement teams are burdened by manual vendor negotiations, sprawling maverick spend, and lengthy RFQ evaluation cycles across siloed suppliers.\n\nThe Devopstrio Procurement Agent deploys cognitive sub-agents that continuously audit supplier risk, compare market rate cards, draft standardized RFQ documents, and negotiate optimal contract terms within approved enterprise parameters.",
    keyPoints: [
      "Autonomous RFQ generation and vendor response comparison matrices",
      "Dynamic price benchmarking against regional market indices and historical POs",
      "Automated supplier ESG, cybersecurity, and financial solvency screening",
      "Real-time Maverick spend interception across corporate purchasing cards"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Supplier Perception",
      role: "Vendor & Market Ingestion",
      description: "Monitors global commodity price indices, supplier financial health feeds, and inbound vendor proposal documents.",
      tech: "Market Data Webhooks & Multi-Modal Document Extraction"
    },
    {
      tier: "02",
      name: "Strategic Evaluation",
      role: "RFQ Scoring & Negotiation Engine",
      description: "Scores vendor bids across price, SLA, warranty, and risk factors, generating optimized counter-offers within policy constraints.",
      tech: "Game-Theoretic Optimization & Neural Contract Scoring"
    },
    {
      tier: "03",
      name: "Contract & ERP Mesh",
      role: "Procure-to-Pay Gateway",
      description: "Issues purchase orders, executes digital vendor agreements, and syncs item catalogs across Coupa, SAP Ariba, and NetSuite.",
      tech: "OAuth 2.0 Coupa/Ariba APIs & Cryptographic Signatures"
    }
  ],
  capabilities: [
    {
      id: "rfq-scoring",
      tag: "SOURCING & EVALUATION",
      title: "Autonomous RFQ Scoring Matrix",
      description: "Extracts line items, delivery timelines, and payment terms from 20+ vendor bids, generating objective comparison matrices instantly.",
      features: [
        "Parses multi-tab complex Excel and PDF vendor pricing sheets",
        "Normalizes currency conversions, shipping tariffs, and bulk discounts",
        "Calculates 3-year Total Cost of Ownership (TCO) automatically",
        "5x faster vendor evaluation cycle time"
      ],
      image: rfqImg,
      metricBadge: "5x Faster Sourcing"
    },
    {
      id: "vendor-onboarding",
      tag: "SUPPLIER MANAGEMENT",
      title: "Automated Vendor Risk & Onboarding",
      description: "Screens supplier SOC 2 reports, insurance certificates, sanctions lists, and ESG compliance before issuing vendor approval.",
      features: [
        "Real-time verification of vendor banking credentials to prevent fraud",
        "Automated COI (Certificate of Insurance) expiry tracking",
        "Sanctions, PEP, and adverse media screening across global databases",
        "Reduces vendor onboarding turnaround from 3 weeks to 18 minutes"
      ],
      image: vendorImg,
      metricBadge: "18-Min Onboarding"
    },
    {
      id: "spend-guard",
      tag: "MAVERICK SPEND",
      title: "Maverick Spend Guardrails",
      description: "Enforces pre-purchase approval rules across corporate credit cards and expense tools, eliminating unapproved software and hardware purchases.",
      features: [
        "Real-time evaluation of purchasing intent against pre-negotiated master catalogs",
        "Automated software duplicate license detection before new seat purchases",
        "Enforces threshold approvals based on management hierarchy",
        "14.2% average direct cost savings"
      ],
      image: spendImg,
      metricBadge: "14.2% Cost Savings"
    },
    {
      id: "sla-audit",
      tag: "CONTRACT GOVERNANCE",
      title: "Continuous Vendor SLA Auditing",
      description: "Tracks supplier delivery milestones and uptime performance against contractual SLAs, automatically requesting service credits for breaches.",
      features: [
        "Correlates shipping tracking numbers and invoice payment releases",
        "Automated service credit calculation for vendor SLA shortfalls",
        "Generates quarterly supplier performance scorecards for CPO reviews",
        "99.7% contractual SLA tracking accuracy"
      ],
      image: contractImg,
      metricBadge: "99.7% SLA Accuracy"
    }
  ],
  comparison: [
    { metric: "RFQ Sourcing Cycle", legacy: "4 to 6 Weeks (Manual spreadsheets)", agent: "2 to 4 Days (Autonomous Swarm)" },
    { metric: "Supplier Due Diligence", legacy: "Manual spot-checks once a year", agent: "Continuous 24/7 automated risk monitoring" },
    { metric: "Spend Compliance", legacy: "25–35% Unapproved maverick spend", agent: "100% Pre-purchase policy enforcement" },
    { metric: "Contract Rate Card Review", legacy: "Static PDFs forgotten in filing cabinets", agent: "Live algorithmic price benchmarking" },
    { metric: "SLA Credit Recovery", legacy: "Rarely claimed due to manual tracking", agent: "Automated service credit requests" }
  ],
  interactiveDemo: {
    title: "Procurement Swarm Studio",
    subtitle: "See how the Procurement Agent evaluates multi-vendor bids, conducts supplier compliance checks, and generates purchase orders in real time.",
    scenarios: [
      {
        id: "rfq-eval",
        title: "Multi-Vendor Cloud Hardware RFQ",
        role: "RFQ Target: 500 Enterprise GPU Compute Nodes ($1.4M Value)",
        executionTime: "5.8s",
        humanTime: "3 Weeks",
        status: "Completed",
        agentsInvolved: ["Bidding Ingestion Agent", "TCO Modeler", "Negotiation Optimizer"],
        planSteps: [
          { step: "Parsed 6 vendor proposal bids across Dell, HPE, Supermicro, and Lenovo", time: "1.2s" },
          { step: "Normalized payment terms, 5-year power consumption, and warranty exclusions", time: "1.8s" },
          { step: "Identified Supermicro as lowest TCO ($1.18M) with 14-day delivery SLA", time: "1.4s" },
          { step: "Generated automated counter-offer requesting 3% cash rebate and 4-year onsite warranty", time: "1.4s" }
        ],
        outcome: "RFQ scored. Counter-proposal accepted, saving $220,000 against initial budget."
      },
      {
        id: "supplier-audit",
        title: "Supplier Compliance Triage",
        role: "Target: New Logistics Vendor // Tier-1 Freight Partner",
        executionTime: "3.4s",
        humanTime: "2 Weeks",
        status: "Verified & Approved",
        agentsInvolved: ["KYB Risk Checker", "Insurance Auditor", "Coupa Sync Agent"],
        planSteps: [
          { step: "Ingested supplier tax ID, Certificate of Insurance, and bank confirmation letter", time: "0.8s" },
          { step: "Validated $10M liability insurance policy via carrier verification API", time: "0.9s" },
          { step: "Screened executive directors against global OFAC and EU sanctions lists", time: "0.7s" },
          { step: "Created verified vendor profile and active catalog in Coupa Procure-to-Pay", time: "1.0s" }
        ],
        outcome: "Vendor fully onboarded with 100% compliance in 3.4 seconds."
      },
      {
        id: "maverick-spend",
        title: "Duplicate SaaS License Interception",
        role: "Employee Request: 20 New Notion AI Seats ($4,800 / Year)",
        executionTime: "1.9s",
        humanTime: "4 Days",
        status: "Redirected to Existing Plan",
        agentsInvolved: ["License Graph Analyzer", "Spend Gatekeeper", "Slack Bot"],
        planSteps: [
          { step: "Detected purchasing card request for 20 new Notion software seats", time: "0.3s" },
          { step: "Queried enterprise SaaS license inventory across Okta SSO", time: "0.6s" },
          { step: "Discovered 45 unassigned Notion Enterprise seats in Marketing pool", time: "0.5s" },
          { step: "Automated license reallocation via Okta and notified requester with instant access", time: "0.5s" }
        ],
        outcome: "Request fulfilled instantly without new budget expenditure. Saved $4,800 annually."
      }
    ]
  },
  integrations: [
    { name: "Coupa Software", type: "Procure-to-Pay" },
    { name: "SAP Ariba", type: "Enterprise Sourcing" },
    { name: "Oracle NetSuite", type: "PO & Vendor Master" },
    { name: "Workday Procurement", type: "Spend Governance" },
    { name: "Dun & Bradstreet", type: "Supplier Risk Telemetry" },
    { name: "DocuSign & SafeSign", type: "Digital Contract Execution" }
  ],
  governance: [
    { label: "FCPA & Anti-Bribery Audited", desc: "Rigorous anti-corruption and supplier vetting" },
    { label: "Least-Privilege ERP Access", desc: "Sandboxed token credentials for all purchasing actions" },
    { label: "Immutable Vendor Audit Log", desc: "Every bid comparison and PO modification is sealed" },
    { label: "Multi-Level Spend Approval", desc: "Automated routing based on enterprise financial delegations" }
  ],
  caseStudy: {
    client: "Global Logistics & Transportation Enterprise",
    industry: "Supply Chain & Logistics",
    headline: "How a Global Logistics Giant Unlocked $18.4M in Direct Sourcing Savings in 12 Months",
    quote: "Devopstrio Procurement Agent gave our buyers superhuman capabilities. We evaluate 5x more supplier bids and negotiate from a position of real-time data strength.",
    author: "Chief Procurement Officer",
    company: "Publicly Traded Freight Enterprise",
    image: caseImg,
    results: [
      { stat: "14.2%", label: "Direct procurement savings" },
      { stat: "5x", label: "Faster RFQ cycle turnaround" },
      { stat: "$18.4M", label: "Total annual spend optimized" }
    ]
  }
};
