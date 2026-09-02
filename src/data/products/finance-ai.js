import heroBg from "../../assets/fresh/images_12_.jpg";
import feat1Img from "../../assets/fresh/identification-vs-authontication-2.jpg";
import feat2Img from "../../assets/fresh/high_speed_fiber.jpg";
import feat3Img from "../../assets/fresh/image.png";
import feat4Img from "../../assets/fresh/product_finance_ledger.jpg";
import caseImg from "../../assets/fresh/dashboard_fintech_metrics.jpg";

export const financeaiData = {
  "id": "finance-ai",
  "category": "Business AI",
  "name": "Finance AI",
  "tagline": "Sub-Second Ledger Automation, Fraud Detection & Dynamic Cash Flow Forecasting",
  "metrics": [
    {
      "value": "95%",
      "label": "Touchless 3-Way Matching",
      "sub": "Invoices, POs & receiving reports"
    },
    {
      "value": "< 10ms",
      "label": "Real-Time Fraud Triage",
      "sub": "Immediate unauthorized spend alert"
    },
    {
      "value": "4x",
      "label": "Faster Month-End Close",
      "sub": "Close financial books in hours"
    },
    {
      "value": "$2.8M",
      "label": "Early Payment Discounts Unlocked",
      "sub": "Automated AP dynamic discounting"
    }
  ],
  "overview": {
    "heading": "The Autonomous CFO Operating System for Real-Time Corporate Financial Control",
    "description": "Financial controllers and AP teams waste hundreds of hours manually matching invoices against purchase orders, tracking missing receipts, and consolidating spreadsheets for month-end close. Finance AI delivers touchless accounting.\n\nFrom automated 3-way reconciliation and duplicate invoice prevention to algorithmic cash flow forecasting, Finance AI gives leadership real-time financial clarity.",
    "keyPoints": [
      "Touchless 3-way matching across purchase orders, invoices, and receiving slips",
      "Real-time fraud anomaly detection and unauthorized transaction blocking",
      "Automated continuous month-end reconciliation closing books in hours",
      "Dynamic multi-scenario cash flow and working capital forecasting"
    ]
  },
  "features": [
    {
      "id": "ap",
      "tabTitle": "AP / AR Automation",
      "title": "Touchless 3-Way Invoice & PO Reconciliation",
      "description": "Matches incoming supplier invoices against open POs and warehouse receiving slips, scheduling payments to maximize early cash discounts.",
      "highlights": [
        "Automated line-item validation against contract rates",
        "Flags invoice discrepancies before payment disbursement",
        "Captures 2/10 net 30 supplier cash discounts",
        "Integrates with SAP, Oracle, and NetSuite"
      ],
      "image": "automated_invoice_processing.jpg"
    },
    {
      "id": "fraud",
      "tabTitle": "Fraud Detection",
      "title": "Real-Time Fraud & Anomaly Triage",
      "description": "Monitors corporate credit card spend, wire transfers, and supplier bank account changes to intercept fraud attempts in milliseconds.",
      "highlights": [
        "Flags split-invoicing under manager approval limits",
        "Detects altered vendor banking coordinates",
        "Stops duplicate and ghost vendor payments",
        "Continuous compliance check against OFAC / AML lists"
      ],
      "image": "cyber_threat_map.jpg"
    },
    {
      "id": "close",
      "tabTitle": "Month-End Close",
      "title": "Autonomous Continuous Month-End Close",
      "description": "Reconciles intercompany balances, bank transactions, and ledger accruals in real time throughout the month instead of a frantic 10-day sprint.",
      "highlights": [
        "Reduces month-end close cycle from 12 days to 36 hours",
        "Automated currency translation and consolidation",
        "Generates audit-ready balance sheet schedules",
        "Executive financial briefing packs compiled automatically"
      ],
      "image": "tech_architect_whiteboard.jpg"
    },
    {
      "id": "forecasting",
      "tabTitle": "Cash Forecasting",
      "title": "Dynamic Multi-Scenario Cash Flow Forecasting",
      "description": "Projects rolling 13-week cash positions and revenue trajectories based on real-time collection velocity and outstanding commitments.",
      "highlights": [
        "Simulates interest rate and supply chain inflation scenarios",
        "Predicts DSO (Days Sales Outstanding) by customer cohort",
        "Optimizes working capital and short-term liquidity",
        "Board-ready visual cash flow forecast dashboards"
      ],
      "image": "fintech_algorithmic_trading.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Transaction Capture",
      "desc": "Ingests electronic invoices, bank feeds, and card transactions."
    },
    {
      "step": "02",
      "title": "3-Way Match",
      "desc": "Validates line items against purchase orders and receiving logs."
    },
    {
      "step": "03",
      "title": "Fraud Audit",
      "desc": "Evaluates anomaly risk scoring and vendor legitimacy."
    },
    {
      "step": "04",
      "title": "Ledger Posting",
      "desc": "Posts balanced journal entries directly to ERP general ledger."
    },
    {
      "step": "05",
      "title": "Cash Optimization",
      "desc": "Schedules payment disbursement to capture supplier discounts."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Financial Reconciliation Simulator",
    "subtitle": "Select a financial transaction below to see Finance AI perform 3-way matching, audit vendor terms, and detect invoice fraud anomalies.",
    "personas": [
      {
        "name": "Supplier Invoice vs PO Discrepancy",
        "role": "Vendor: Global Server Hardware Corp // $340,000",
        "experience": "Invoice #INV-9402 • 14 Line Items",
        "matchScore": 89,
        "matchGrade": "Price Variance Flagged",
        "summary": "Identified a $14,000 price variance on Line Item 4 (NVMe drives charged at $420 vs contracted PO rate of $380). Flagged for auto-credit.",
        "competencies": [
          {
            "skill": "3-Way Matching Precision",
            "score": 99
          },
          {
            "skill": "Contract Rate Verification",
            "score": 98
          },
          {
            "skill": "Vendor History Check",
            "score": 97
          },
          {
            "skill": "Auto-Debit Memo Generation",
            "score": 100
          }
        ],
        "aiInsight": "Generated automated vendor debit memo for $14,000 variance and approved $326,000 baseline payment."
      }
    ]
  },
  "integrations": [
    {
      "name": "SAP S/4HANA",
      "type": "Native General Ledger Connector"
    },
    {
      "name": "Oracle NetSuite",
      "type": "Automated AP/AR Postings"
    },
    {
      "name": "Workday Financial Management",
      "type": "Expense & Ledger Sync"
    },
    {
      "name": "J.P. Morgan & Plaid",
      "type": "Direct Multi-Bank Data Feeds"
    },
    {
      "name": "Coupa & Tipalti",
      "type": "Procure-to-Pay Integration"
    },
    {
      "name": "QuickBooks Enterprise",
      "type": "Mid-Market Accounting Sync"
    }
  ],
  "security": [
    {
      "label": "SOC 1 & SOC 2 Type II",
      "desc": "Certified financial data controls and SOX compliance"
    },
    {
      "label": "Immutable Audit Ledger",
      "desc": "Cryptographically timestamped transaction history"
    },
    {
      "label": "Dual-Control Permissions",
      "desc": "Segregation of duties enforced on all wire transfers"
    },
    {
      "label": "Zero Public AI Retention",
      "desc": "Financial data never stored on public models"
    }
  ],
  "caseStudy": {
    "client": "Global Manufacturing Enterprise",
    "industry": "Manufacturing & Industrial",
    "headline": "How 45,000 Monthly Invoices Were Reconciled with 95% Touchless Automation",
    "quote": "Finance AI eliminated our invoice backlogs and saved us $2.8M in missed supplier early-payment discounts in our very first year.",
    "author": "Chief Financial Officer",
    "company": "Global Industrial Manufacturer",
    "image": "executive_boardroom_ai.jpg",
    "results": [
      {
        "stat": "95%",
        "label": "Touchless 3-way invoice matching"
      },
      {
        "stat": "4 Days",
        "label": "Saved on month-end close cycle"
      },
      {
        "stat": "$2.8M",
        "label": "Captured early-pay supplier discounts"
      }
    ]
  },
  "hero": {
    "badge": "BUSINESS AI // FINANCIAL OPERATIONS",
    "titleLight": "Autonomous Financial Operations with",
    "titleBold": "Finance AI",
    "description": "Automate accounts payable/receivable, eliminate expense reconciliation backlogs, detect fraud patterns in real time, and provide executive leadership with continuous rolling cash flow forecasts.",
    "liveBadge": "v4.5 Enterprise Ready",
    "bgImage": "heroBg"
  }
};
financeaiData.hero.bgImage = heroBg;
financeaiData.features[0].image = feat1Img || heroBg;
financeaiData.features[1].image = feat2Img || heroBg;
financeaiData.features[2].image = feat3Img || heroBg;
financeaiData.features[3].image = feat4Img || heroBg;
financeaiData.caseStudy.image = caseImg || heroBg;
