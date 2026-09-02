import heroBg from "../../assets/integrations/erp_hero.jpg";
import sapImg from "../../assets/integrations/sap_s4hana.jpg";
import oracleImg from "../../assets/integrations/oracle_netsuite.jpg";
import workdayImg from "../../assets/integrations/workday_hcm.jpg";
import erpFinImg from "../../assets/integrations/erp_finance.jpg";
import caseImg from "../../assets/integrations/erp_case.jpg";

export const erpSystemsData = {
  id: "erp-systems",
  category: "Integrations",
  name: "ERP Systems",
  tagline: "Sub-Second Enterprise Connectors for SAP S/4HANA, Oracle NetSuite & Workday",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // ERP & CORE LEDGER",
    subBadge: "REAL-TIME FINANCIAL & LEDGER RECONCILIATION",
    titleLight: "Touchless General Ledger Sync with",
    titleBold: "DevOpsTRIO ERP Integrations",
    description: "Automate purchase order 3-way matching, invoice reconciliation, vendor onboarding, and global payroll sync across SAP S/4HANA, Oracle NetSuite, Workday, and Microsoft Dynamics 365 Finance.",
    bgImage: heroBg,
    liveBadge: "Active ERP Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "16ms",
      activeWebhooks: "95,000+",
      authProtocol: "mTLS / OAuth 2.0",
      securityStandard: "SOX & SOC 1/2"
    }
  },
  stats: [
    { value: "< 16ms", label: "Ledger Webhook Sync Speed", sub: "Sub-second financial transaction verification" },
    { value: "30+ ERPs", label: "Native Enterprise Connectors", sub: "SAP S/4HANA, NetSuite, Workday, Dynamics, Infor" },
    { value: "100%", label: "SOX & GAAP Compliance", sub: "Immutable cryptographic audit trail for every change" },
    { value: "\$4.2B+", label: "Monthly Reconciled Transactions", sub: "Processed with zero manual ledger mismatch" }
  ],
  connectors: [
    {
      id: "sap-s4hana",
      name: "SAP S/4HANA & ECC",
      category: "Global Enterprise ERP",
      badge: "SAP OData / BAPI / RFC",
      image: sapImg,
      description: "Direct bi-directional integration for Purchase Orders, General Ledger (GL) entries, Material Management (MM), and Sales Distribution (SD).",
      protocols: ["SAP OData v2/v4 Services", "SAP BAPI & RFC", "SAP Event Mesh WebSocket"],
      syncCapabilities: [
        "Automated 3-way matching of Invoices, Purchase Orders, and Goods Receipts",
        "Real-time inventory level sync across 50+ global distribution warehouses",
        "Autonomous vendor invoice entry and exception routing for AP teams"
      ],
      avgLatency: "15ms"
    },
    {
      id: "oracle-netsuite",
      name: "Oracle NetSuite Cloud ERP",
      category: "Mid-Market & Enterprise",
      badge: "SuiteTalk REST & SuiteScript",
      image: oracleImg,
      description: "Synchronize chart of accounts, vendor bills, customer payments, multi-currency conversions, and revenue recognition schedules in real time.",
      protocols: ["SuiteTalk REST Web Services", "SuiteScript 2.1 Webhooks", "OAuth 2.0 Token-Based Auth (TBA)"],
      syncCapabilities: [
        "Touchless multi-currency billing and revenue recognition amortization",
        "Instant purchase requisition approval routing via Slack & Teams bots",
        "Automated bank feed reconciliation and GL discrepancy flagging"
      ],
      avgLatency: "14ms"
    },
    {
      id: "workday-hcm-finance",
      name: "Workday HCM & Financials",
      category: "Human Capital & Finance",
      badge: "Workday Enterprise Interface (EIB)",
      image: workdayImg,
      description: "Automate global employee onboarding, compensation adjustments, expense report verification, and headcount budgeting synchronization.",
      protocols: ["Workday Web Services (WWS)", "Workday REST API", "OAuth 2.0 JWT Bearer"],
      syncCapabilities: [
        "Instant user identity provisioning across IT systems upon HR hire event",
        "Autonomous audit of corporate travel & entertainment (T&E) expense receipts",
        "Real-time payroll tax calculation and benefits ledger updates"
      ],
      avgLatency: "18ms"
    },
    {
      id: "dynamics-finance",
      name: "Microsoft Dynamics 365 Finance",
      category: "Financial Operations",
      badge: "OData / Azure Service Bus",
      image: erpFinImg,
      description: "End-to-end integration for Accounts Payable (AP), Accounts Receivable (AR), fixed asset depreciation, and fiscal period close acceleration.",
      protocols: ["Dynamics OData REST API", "Azure Data Factory Sync", "OAuth 2.0 Azure AD"],
      syncCapabilities: [
        "Accelerates month-end financial close cycles from 10 days to under 48 hours",
        "Automated dunning notices and dynamic customer credit limit adjustments",
        "Multi-entity consolidation and intercompany transfer pricing balance"
      ],
      avgLatency: "16ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive ERP Webhook & Ledger Studio",
    subtitle: "Select an enterprise finance or procurement trigger below to observe real-time ERP transaction verification and GL posting.",
    scenarios: [
      {
        id: "sap-po-match",
        title: "Vendor Invoice ➔ SAP 3-Way Match & GL Approval",
        trigger: "New PDF Invoice #INV-99201 (\$84,500.00) from Siemens Logistics",
        sourceApp: "Coupa Procurement",
        targetApp: "SAP S/4HANA Finance",
        executionTime: "142ms",
        status: "200 OK — PO #440019 Matched & Posted to GL",
        payload: {
          event_type: "invoice.three_way_match",
          vendor_id: "VEND-88219 (Siemens Logistics)",
          invoice_amount_usd: 84500.0,
          purchase_order_id: "PO-440019",
          goods_receipt_id: "GR-901182",
          discrepancy_variance: "0.00%",
          target_sap_action: "BAPI_INCOMINGINVOICE_CREATE",
          gl_account: "201000 (Accounts Payable)",
          payment_terms: "Net 30"
        }
      },
      {
        id: "workday-onboarding",
        title: "Workday New Hire Event ➔ Automated IT & Payroll Provisioning",
        trigger: "Candidate Signed Offer: 'Lead AI Infrastructure Engineer (San Francisco)'",
        sourceApp: "Workday HCM",
        targetApp: "Okta, SAP Payroll & Slack",
        executionTime: "185ms",
        status: "200 OK — Accounts & Payroll Provisioned",
        payload: {
          event_type: "workday.worker_hired",
          employee_id: "EMP-499102",
          department: "AI Infrastructure",
          cost_center: "CC-9010",
          provisioned_services: ["Okta SSO", "AWS Admin IAM", "Slack Workspace", "SAP Payroll #8812"],
          auto_allocated_budget: "$185,000.00"
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Mutual TLS (mTLS) & Hardware HSM Tokens",
      desc: "All ERP connections enforce strict mutual certificate authentication and hardware security module (HSM) signed JWT assertions."
    },
    {
      title: "Immutable SOX Audit Ledger",
      desc: "Every API call, record update, and financial modification is cryptographically hashed and logged to write-once-read-many (WORM) audit storage."
    },
    {
      title: "Multi-Entity Tenant Isolation",
      desc: "Strict logical data barriers prevent cross-subsidiary data leakage across multinational parent/subsidiary corporate entities."
    },
    {
      title: "Two-Person Rule for High-Value Transactions",
      desc: "Transactions exceeding configurable thresholds (e.g. > $100,000) automatically require dual cryptographic signature approval."
    }
  ],
  caseStudy: {
    client: "Global Industrial Equipment Manufacturer ($3.8B Revenue)",
    industry: "Enterprise Manufacturing & ERP",
    headline: "How Automated SAP S/4HANA 3-Way Matching Cut Month-End Accounting Close by 70%",
    quote: "DevOpsTRIO's SAP and NetSuite connectors transformed our accounts payable department. We now process over 45,000 supplier invoices monthly with zero human intervention.",
    author: "Global Chief Financial Officer",
    company: "Public Industrial Manufacturing Enterprise",
    image: caseImg,
    results: [
      { stat: "70%", label: "Reduction in month-end financial close time" },
      { stat: "45,000", label: "Supplier invoices matched touchlessly every month" },
      { stat: "100%", label: "SOX & GAAP audit compliance maintained" }
    ]
  }
};
