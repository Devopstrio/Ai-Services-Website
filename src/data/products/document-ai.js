import heroBg from "../../assets/fresh/i69gm3mijzfrp2ca43ii.webp";
import feat1Img from "../../assets/fresh/enterprise_scrum_sprint.jpg";
import feat2Img from "../../assets/fresh/fintech_algorithmic_trading.jpg";
import feat3Img from "../../assets/fresh/tech_architect_whiteboard.jpg";
import feat4Img from "../../assets/fresh/hf4lskkkwpiy2moy4rqa.webp";
import caseImg from "../../assets/fresh/global_shipping_container_port.jpg";

export const documentaiData = {
  "id": "document-ai",
  "category": "Productivity AI",
  "name": "Document AI",
  "tagline": "Intelligent Document Processing (IDP) & Automated Multi-Modal Data Extraction",
  "metrics": [
    {
      "value": "99.8%",
      "label": "Field Extraction Accuracy",
      "sub": "Self-correcting neural OCR"
    },
    {
      "value": "85%",
      "label": "Processing Cost Reduction",
      "sub": "Eliminate manual data entry"
    },
    {
      "value": "< 2s",
      "label": "Per-Page Ingestion Speed",
      "sub": "High-throughput batch processing"
    },
    {
      "value": "50M+",
      "label": "Pages Processed Annually",
      "sub": "Enterprise scale and resilience"
    }
  ],
  "overview": {
    "heading": "Next-Gen Intelligent Document Processing for High-Volume Workflows",
    "description": "Manual data entry from invoices, claims, and customs manifests causes operational bottlenecks and human error. Document AI uses multi-modal visual LLMs to understand document layout, handwriting, and complex tables natively.",
    "keyPoints": [
      "Layout-aware multi-modal visual document comprehension",
      "Handwriting, signature, and stamp verification algorithms",
      "Automated exception flagging with human-in-the-loop validation UI",
      "Direct export to SAP, Oracle, NetSuite, and Salesforce"
    ]
  },
  "features": [
    {
      "id": "layout",
      "tabTitle": "Visual Parsing",
      "title": "Layout-Aware Neural Vision Parsing",
      "description": "Understands document context based on spatial layout, headers, footnotes, and multi-page nested tables.",
      "highlights": [
        "Processes rotated, skewed, or wrinkled document scans",
        "Extracts key-value pairs without rigid template configuration",
        "Recognizes stamps, checkmarks, and signatures",
        "Multi-lingual parsing in 50+ international languages"
      ],
      "image": "saas_cloud_platform_ui.jpg"
    },
    {
      "id": "tables",
      "tabTitle": "Table Extraction",
      "title": "Nested & Multi-Page Table Extraction",
      "description": "Extracts line items across multi-page invoices with automatic subtotal mathematical verification.",
      "highlights": [
        "Verifies line-item mathematical sums automatically",
        "Maps vendor item codes to internal inventory SKUs",
        "Handles borderless and merged-cell tables",
        "Exports to JSON, CSV, or direct ERP databases"
      ],
      "image": "automated_invoice_processing.jpg"
    },
    {
      "id": "validation",
      "tabTitle": "Exception Review",
      "title": "Human-in-the-Loop Exception Workspace",
      "description": "Low-confidence extraction fields are automatically flagged and routed to operators with side-by-side visual bounding boxes.",
      "highlights": [
        "Confidence scoring per individual field",
        "One-click operator review and correction interface",
        "Continuous active learning from human feedback",
        "SLA tracking on all exception review queues"
      ],
      "image": "tech_architect_whiteboard.jpg"
    },
    {
      "id": "fraud",
      "tabTitle": "Fraud Detection",
      "title": "Document Tampering & Digital Forgery Detection",
      "description": "Analyzes digital document artifacts to detect modified font kerning, pixel tampering, and forged signatures.",
      "highlights": [
        "Detects digital PDF metadata alterations",
        "Validates tax ID and business registration numbers",
        "Cross-references vendor banking coordinates",
        "Stops invoice fraud before payments disburse"
      ],
      "image": "cyber_threat_map.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Capture",
      "desc": "Ingests scanned PDFs, mobile photos, email attachments, and EDI streams."
    },
    {
      "step": "02",
      "title": "Visual OCR",
      "desc": "Multi-modal vision model extracts text, tables, and spatial layout."
    },
    {
      "step": "03",
      "title": "Validation",
      "desc": "Verifies mathematical totals and cross-checks master database records."
    },
    {
      "step": "04",
      "title": "Exception Routing",
      "desc": "Low-confidence fields routed to operator review queue."
    },
    {
      "step": "05",
      "title": "ERP Sync",
      "desc": "Structured data dispatches directly to SAP, NetSuite, or Workday."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Document Extraction Simulator",
    "subtitle": "Select a document type below to see Document AI extract structured line-items, verify mathematical totals, and flag anomalies.",
    "personas": [
      {
        "name": "Commercial Freight Bill of Lading (BOL)",
        "role": "Logistics Import Document // 8 Line Items",
        "experience": "Scanned PDF • 300 DPI",
        "matchScore": 99,
        "matchGrade": "100% Extracted Cleanly",
        "summary": "Extracted container numbers, HS codes, port of entry, gross weight (42,500 kg), and consignee details. Mathematical verification passed.",
        "competencies": [
          {
            "skill": "Header Key-Value Extraction",
            "score": 100
          },
          {
            "skill": "Line-Item Table Parsing",
            "score": 99
          },
          {
            "skill": "Container ID Checksum",
            "score": 100
          },
          {
            "skill": "HS Code Validation",
            "score": 98
          }
        ],
        "aiInsight": "Parsed in 1.4 seconds. Dispatched directly to customs clearance workflow."
      }
    ]
  },
  "integrations": [
    {
      "name": "SAP S/4HANA & ECC",
      "type": "Native AP/AR Connector"
    },
    {
      "name": "Oracle Cloud ERP",
      "type": "Automated Invoice Ingestion"
    },
    {
      "name": "NetSuite",
      "type": "Transaction Posting Plugin"
    },
    {
      "name": "Salesforce",
      "type": "Contract & Order Processing"
    },
    {
      "name": "UiPath & Automation Anywhere",
      "type": "RPA Bot Pipeline Step"
    },
    {
      "name": "REST API & Webhooks",
      "type": "Sub-Second Ingestion API"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Certified document processing security"
    },
    {
      "label": "HIPAA Compliant",
      "desc": "Certified medical record redaction"
    },
    {
      "label": "Automated PII Masking",
      "desc": "Strips SSN and payment card numbers before storage"
    },
    {
      "label": "Zero Model Retention",
      "desc": "Documents never retained on external servers"
    }
  ],
  "caseStudy": {
    "client": "Top-10 Global Freight Forwarder",
    "industry": "Logistics & Customs",
    "headline": "How 2.5 Million Annual Customs Documents Were Automated with 99.8% Accuracy",
    "quote": "Document AI cleared our customs manifest backlog overnight. Processing turnaround dropped from 4 hours to under 30 seconds per shipment.",
    "author": "Head of Customs Technology",
    "company": "Global Logistics Leader",
    "image": "global_shipping_container_port.jpg",
    "results": [
      {
        "stat": "92%",
        "label": "Touchless straight-through processing"
      },
      {
        "stat": "< 25s",
        "label": "Average document turnaround"
      },
      {
        "stat": "$4.8M",
        "label": "Annual operational savings"
      }
    ]
  },
  "hero": {
    "badge": "PRODUCTIVITY // OCR & IDP",
    "titleLight": "Automate Unstructured Documents with",
    "titleBold": "Document AI",
    "description": "Transform unstructured invoices, bills of lading, medical records, tax filings, and legal contracts into structured, database-ready records with 99.8% field accuracy.",
    "liveBadge": "v3.9 Production Ready",
    "bgImage": "heroBg"
  }
};
documentaiData.hero.bgImage = heroBg;
documentaiData.features[0].image = feat1Img || heroBg;
documentaiData.features[1].image = feat2Img || heroBg;
documentaiData.features[2].image = feat3Img || heroBg;
documentaiData.features[3].image = feat4Img || heroBg;
documentaiData.caseStudy.image = caseImg || heroBg;
