import heroBg from "../../assets/library/agent_finance_reconciliation.jpg";
import matchImg from "../../assets/fresh/automated_invoice_processing.jpg";
import reconImg from "../../assets/unique_agents/finance_audit_recon.jpg";
import fraudImg from "../../assets/fresh/fintech_algorithmic_trading.jpg";
import forecastImg from "../../assets/fresh/bajaj_finance_bharti_airtel_partnership_financial__1737355875195_1770527459556.webp";
import caseImg from "../../assets/unique_agents/finance_agent_case.jpg";

export const financeAgentData = {
  id: "finance-agent",
  category: "Business Operations",
  name: "Finance Agent Swarm",
  tagline: "Touchless 3-Way Matching, Real-Time Ledger Reconciliation & Cash Forecasting",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Continuous Financial Control with",
    titleBold: "Devopstrio Finance Agent",
    description: "Automate accounts payable/receivable, eliminate month-end reconciliation backlogs, intercept invoice fraud in real time, and close corporate financial books in hours instead of weeks.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 32,
      latency: "350ms",
      connectedTools: 19,
      autonomyScore: "99.8%"
    }
  },
  metrics: [
    { value: "96%", label: "Touchless 3-Way Match", sub: "Automated PO, receipt & invoice reconciliation" },
    { value: "4 Hours", label: "Month-End Close Time", sub: "Down from 12 business days" },
    { value: "99.9%", label: "Audit Accuracy", sub: "Cryptographically verified ledger entries" },
    { value: "88%", label: "Invoice Fraud Interception", sub: "Real-time anomaly & duplicate detection" }
  ],
  overview: {
    heading: "The Autonomous Digital Controller for Enterprise Finance",
    description: "Enterprise finance teams spend countless hours on manual data re-entry, matching PDF invoices to ERP purchase orders, and hunting down ledger discrepancies at month-end.\n\nThe Devopstrio Finance Agent deploys specialized sub-agents that continuously ingest bank feeds, extract line-item invoice data, cross-reference goods receipts, and post audited journal entries into NetSuite, SAP, and QuickBooks automatically.",
    keyPoints: [
      "Autonomous 3-way matching across purchase orders, receiving slips, and invoices",
      "Real-time ledger reconciliation with automatic discrepancy classification",
      "Zero-latency fraud detection identifying duplicate billing, IBAN tampering, and unauthorized vendors",
      "Predictive multi-currency cash flow forecasting models updated daily"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Financial Ingestion",
      role: "Document & Feed Listener",
      description: "Extracts multi-currency line items from PDF invoices, scanned receipts, bank statement feeds, and ERP webhooks.",
      tech: "Multi-Modal OCR, Table Transformers & Fedwire Webhooks"
    },
    {
      tier: "02",
      name: "Reconciliation Kernel",
      role: "Audit & Validation Engine",
      description: "Applies 3-way matching logic, calculates tax withholdings, checks cost-center budget limits, and detects anomalies.",
      tech: "Rule-Engine Constraints & Probabilistic Anomaly Detection"
    },
    {
      tier: "03",
      name: "Ledger Settlement",
      role: "ERP Transaction Gateway",
      description: "Posts verified journal entries into SAP, NetSuite, and Workday Financials with dual-key cryptographic sealing.",
      tech: "Signed REST Payloads & Sandboxed Bank Gateways"
    }
  ],
  capabilities: [
    {
      id: "matching",
      tag: "AP AUTOMATION",
      title: "Touchless 3-Way Matching",
      description: "Extracts line items from vendor invoices and matches them against purchase orders and warehouse receiving slips automatically.",
      features: [
        "96% straight-through processing with zero human touch required",
        "Multi-currency exchange rate calculation and VAT compliance check",
        "Automated vendor payment scheduling optimizing early-pay discounts",
        "Reduces invoice processing cost by up to 78%"
      ],
      image: matchImg,
      metricBadge: "96% Touchless Match"
    },
    {
      id: "ledger-recon",
      tag: "CONTINUOUS ACCOUNTING",
      title: "Continuous Month-End Close",
      description: "Reconciles general ledger balances against bank accounts and payment gateways in real time, eliminating the month-end crunch.",
      features: [
        "Reconciles 500,000+ daily transactions across Stripe, Adyen, and bank accounts",
        "Automated journal entry posting with complete audit trails",
        "Shortens month-end financial close from 12 days to under 4 hours",
        "100% compliance with GAAP and IFRS standards"
      ],
      image: reconImg,
      metricBadge: "4-Hour Close"
    },
    {
      id: "fraud-defense",
      tag: "SECURITY & RISK",
      title: "Real-Time Invoice Fraud Defense",
      description: "Intercepts fraudulent vendor invoices, altered bank accounts, duplicate submissions, and anomalous spend patterns before payment.",
      features: [
        "IBAN and bank routing number change verification workflows",
        "Cross-vendor duplicate invoice detection across subsidiaries",
        "Autonomous vendor reputation and sanctions list screening",
        "88% higher detection of sophisticated financial fraud attempts"
      ],
      image: fraudImg,
      metricBadge: "88% Fraud Intercept"
    },
    {
      id: "cash-forecast",
      tag: "TREASURY & FINOPS",
      title: "Predictive Cash Flow Forecasting",
      description: "Synthesizes customer collection patterns, vendor payment terms, and seasonality to predict 90-day cash positions with 98% accuracy.",
      features: [
        "Daily liquidity forecasting across 40+ global subsidiaries and currencies",
        "Dynamic scenario modeling for working capital optimization",
        "Automated accounts receivable dunning reminders for delinquent accounts",
        "Provides CFOs with real-time treasury decision recommendations"
      ],
      image: forecastImg,
      metricBadge: "98% Forecast Precision"
    }
  ],
  comparison: [
    { metric: "Invoice Processing", legacy: "5 to 8 Days per invoice (Manual)", agent: "Sub-Second Extraction & Match (< 3s)" },
    { metric: "Month-End Close", legacy: "10 to 14 Business days", agent: "Continuous Real-Time Close (< 4 Hours)" },
    { metric: "Ledger Discrepancies", legacy: "Scattered Excel reconciliation files", agent: "100% Verified, Sealed ERP Audit Trail" },
    { metric: "Invoice Fraud Detection", legacy: "Sample checks after payment", agent: "Real-time pre-settlement interception" },
    { metric: "Cash Forecasting", legacy: "Static weekly spreadsheet models", agent: "Continuous AI liquidity models updated hourly" }
  ],
  interactiveDemo: {
    title: "Finance Swarm Workspace",
    subtitle: "Launch a financial transaction to observe the agent perform multi-system invoice ingestion, 3-way matching, and automated ledger settlement.",
    scenarios: [
      {
        id: "ap-match",
        title: "Touchless AP 3-Way Match",
        role: "Invoice #INV-9204 // $84,250 Hardware Shipment",
        executionTime: "4.1s",
        humanTime: "3 Days",
        status: "Settled",
        agentsInvolved: ["Invoice Extractor", "3-Way Matcher", "NetSuite Gateway"],
        planSteps: [
          { step: "Extracted 14 line items from Cisco vendor PDF invoice via Vision OCR", time: "0.8s" },
          { step: "Queried SAP ERP for Purchase Order #PO-88219 (Found exact dollar and quantity match)", time: "1.1s" },
          { step: "Verified warehouse goods receipt slip from Dallas distribution center", time: "0.7s" },
          { step: "Posted GL Journal #JE-4019 in NetSuite and scheduled ACH payment for 2% cash discount", time: "1.5s" }
        ],
        outcome: "100% touchless 3-way match verified. $1,685 early-payment discount captured."
      },
      {
        id: "fraud-intercept",
        title: "Altered IBAN Fraud Interception",
        role: "Target: Vendor #VEND-1102 ($142,000 Payment Request)",
        executionTime: "2.8s",
        humanTime: "5 Days (Post-Loss)",
        status: "Payment Blocked & Flagged",
        agentsInvolved: ["Bank Vector Validator", "Vendor Risk Agent", "CFO Alert Gate"],
        planSteps: [
          { step: "Ingested incoming invoice claiming expedited wire transfer for software licenses", time: "0.4s" },
          { step: "Detected mismatch between historical vendor bank account and new Cyprus IBAN", time: "0.9s" },
          { step: "Cross-referenced vendor domain DKIM headers: Discovered spoofed executive email", time: "0.8s" },
          { step: "Froze payment batch and dispatched high-priority incident dossier to CFO and Security", time: "0.7s" }
        ],
        outcome: "Wire transfer intercepted. Prevented $142,000 corporate payment diversion."
      },
      {
        id: "treasury-forecast",
        title: "Multi-Subsidiary Cash Optimization",
        role: "Treasury Operation: 14 Global Entity Cash Balancing",
        executionTime: "6.2s",
        humanTime: "1 Week",
        status: "Completed",
        agentsInvolved: ["FX Liquidity Modeler", "Intercompany Settlement Agent", "Treasury Gateway"],
        planSteps: [
          { step: "Aggregated real-time cash balances across 28 global bank accounts (USD, EUR, GBP, JPY)", time: "1.6s" },
          { step: "Identified €1.2M shortfall risk in German entity ahead of upcoming tax payment", time: "1.4s" },
          { step: "Calculated optimal zero-tax intercompany loan transfer from UK holding company", time: "1.8s" },
          { step: "Generated automated treasury authorization memo for Treasury Director approval", time: "1.4s" }
        ],
        outcome: "Liquidity shortfall resolved with zero FX penalty and full transfer pricing compliance."
      }
    ]
  },
  integrations: [
    { name: "SAP S/4HANA", type: "Core Financial ERP" },
    { name: "Oracle NetSuite", type: "General Ledger & AP" },
    { name: "Workday Financials", type: "Enterprise Accounting" },
    { name: "Stripe & Adyen", type: "Payment Gateway Sync" },
    { name: "Coupa & Tipalti", type: "Procure-to-Pay" },
    { name: "Plaid & Fedwire", type: "Bank Feed Webhooks" }
  ],
  governance: [
    { label: "SOX & GAAP Compliant", desc: "Strict separation of duties and dual-authorization" },
    { label: "Immutable Audit Trails", desc: "Every ledger entry is cryptographically sealed" },
    { label: "Bank-Grade Encryption", desc: "AES-256 and TLS 1.3 for all financial transactions" },
    { label: "Dual-Key Approval Gates", desc: "High-value wire transfers require secondary human sign-off" }
  ],
  caseStudy: {
    client: "Publicly Traded Manufacturing Enterprise",
    industry: "Industrial Manufacturing",
    headline: "How a $3.2B Global Enterprise Automated 96% of Accounts Payable and Cut Month-End Close by 70%",
    quote: "Devopstrio Finance Agent gave our controller team unprecedented visibility. We went from frantic month-end spreadsheet firefighting to continuous automated reconciliation.",
    author: "VP of Financial Operations & Controller",
    company: "Global Fortune 1000 Manufacturer",
    image: caseImg,
    results: [
      { stat: "96%", label: "Touchless 3-way matching" },
      { stat: "4 Hours", label: "Month-end close time" },
      { stat: "$1.8M", label: "Early-payment discounts captured" }
    ]
  }
};
