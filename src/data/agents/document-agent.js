import heroBg from "../../assets/library/product_document_ocr.jpg";
import ocrImg from "../../assets/fresh/automated_invoice_processing.jpg";
import tableImg from "../../assets/fresh/dashboard_supply_chain.jpg";
import formsImg from "../../assets/fresh/talent_intelligence_portal.jpg";
import idpImg from "../../assets/fresh/digital-workspace-with-data-analysis-visualization.jpg";
import caseImg from "../../assets/fresh/multinational_team_summit.jpg";

export const documentAgentData = {
  id: "document-agent",
  category: "Productivity",
  name: "Document Agent Swarm",
  tagline: "Intelligent Document Processing, Multi-Modal OCR & Structured Data Extraction",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Touchless Document Ingestion with",
    titleBold: "Devopstrio Document Agent",
    description: "Autonomous Intelligent Document Processing (IDP) agent that parses complex scanned PDFs, bills of lading, medical records, invoices, and structured forms into database records with 99.8% field extraction accuracy.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 52,
      latency: "310ms",
      connectedTools: 16,
      autonomyScore: "99.8%"
    }
  },
  metrics: [
    { value: "99.8%", label: "Field Extraction Precision", sub: "Multi-modal OCR & table parsing" },
    { value: "< 1.2s", label: "Page Processing Speed", sub: "Real-time document-to-JSON extraction" },
    { value: "92%", label: "Manual Entry Eliminated", sub: "Straight-through database ingestion" },
    { value: "60+", label: "International Formats", sub: "Global invoices, customs & legal forms" }
  ],
  overview: {
    heading: "The Autonomous Intelligent Document Processing Engine",
    description: "Enterprise operations in logistics, insurance, healthcare, and finance are slowed down by thousands of scanned PDF documents requiring manual data entry.\n\nThe Devopstrio Document Agent operates as an autonomous document understanding swarm. It ingests messy scans, multi-page tables, rotated images, and handwritten annotations, converting complex unstructured documents into validated JSON schemas and SQL records automatically.",
    keyPoints: [
      "Sub-second multi-modal OCR extracting tables, key-value pairs, and handwriting with 99.8% precision",
      "Automated cross-validation against internal ERP databases and business logic rules",
      "Dynamic schema mapping converting any invoice, bill of lading, or tax form into structured JSON",
      "Confidential processing enclaves with zero PII retention on third-party models"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Visual & Layout Perception",
      role: "Multi-Modal OCR Ingestor",
      description: "Applies computer vision models to segment bounding boxes, rotate skewed pages, and extract raw text from low-res scans.",
      tech: "Vision Transformers, LayoutLM & Handwriting Models"
    },
    {
      tier: "02",
      name: "Schema Extraction Kernel",
      role: "Structured Field Parser",
      description: "Maps unstructured text and multi-column tables into strict JSON schemas, performing arithmetic checks (tax, line totals).",
      tech: "Table Transformers & JSON Schema Enforcers"
    },
    {
      tier: "03",
      name: "ERP & Database Mesh",
      role: "Transactional Ingestion Gateway",
      description: "Inserts validated records into SAP, Salesforce, Snowflake, and Postgres, routing edge cases to human verification queues.",
      tech: "REST Webhooks & Automated Validation Enclaves"
    }
  ],
  capabilities: [
    {
      id: "table-parsing",
      tag: "TABLE & GRID OCR",
      title: "Complex Multi-Page Table Extraction",
      description: "Extracts line items from nested, borderless, and multi-page tables across invoices, bank statements, and shipping manifests.",
      features: [
        "Handles merged table cells, missing borders, and multi-line item descriptions",
        "Performs automated mathematical reconciliation (Quantity x Unit Price = Total)",
        "Outputs clean JSON and CSV arrays ready for database insertion",
        "99.8% precision on complex financial tables"
      ],
      image: tableImg,
      metricBadge: "99.8% Table Accuracy"
    },
    {
      id: "handwriting-forms",
      tag: "HANDWRITING & FORMS",
      title: "Handwritten & Scanned Form Processing",
      description: "Parses handwritten doctor prescriptions, customs declarations, insurance claim forms, and signed paper contracts.",
      features: [
        "Advanced handwriting recognition (HTR) trained on millions of global scripts",
        "Understands checkboxes, radio buttons, and physical signature boxes",
        "Auto-enhances blurred, wrinkled, and skewed smartphone document photos",
        "Reduces manual form data entry by up to 92%"
      ],
      image: formsImg,
      metricBadge: "92% Less Manual Entry"
    },
    {
      id: "schema-mapping",
      tag: "DYNAMIC SCHEMAS",
      title: "Dynamic Schema Mapping & Validation",
      description: "Automatically maps arbitrary vendor invoice formats to your standardized ERP schema without requiring custom template configuration.",
      features: [
        "Zero-shot extraction: No brittle manual coordinate templates needed",
        "Cross-references extracted vendor tax IDs against government business registries",
        "Validates postal codes, currency symbols, and international date formats",
        "Handles 60+ global document types out of the box"
      ],
      image: ocrImg,
      metricBadge: "Zero-Template IDP"
    },
    {
      id: "idp-mesh",
      tag: "INTEGRATION",
      title: "Automated ERP & Warehouse Ingestion",
      description: "Pushes extracted and validated document data straight into SAP, Oracle, NetSuite, and Snowflake with cryptographic audit trails.",
      features: [
        "Bi-directional webhook synchronization with enterprise document management systems",
        "Automated PDF archiving with searchable OCR text layers",
        "Built-in human-in-the-loop validation queues for low-confidence fields",
        "Processed in under 1.2 seconds per page"
      ],
      image: idpImg,
      metricBadge: "< 1.2s Per Page"
    }
  ],
  comparison: [
    { metric: "Document Extraction Speed", legacy: "10 to 15 mins per document (Manual)", agent: "Sub-Second Extraction (< 1.2s per page)" },
    { metric: "Template Configuration", legacy: "Weeks of manual coordinate mapping", agent: "Zero-shot AI schema understanding" },
    { metric: "Handwriting & Skewed Scans", legacy: "Rejected by legacy OCR tools", agent: "Deep vision transformer handwriting parsing" },
    { metric: "Data Validation & Math Checks", legacy: "Manual cross-checking in Excel", agent: "Automated line-item arithmetic verification" },
    { metric: "Integration to ERP", legacy: "Manual data re-entry into SAP/Oracle", agent: "Direct straight-through JSON API ingestion" }
  ],
  interactiveDemo: {
    title: "Document Swarm Studio",
    subtitle: "Upload a simulated unstructured document to see the Document Agent segment tables, extract handwriting, and output validated JSON schemas in real time.",
    scenarios: [
      {
        id: "bill-of-lading",
        title: "International Bill of Lading Extraction",
        role: "Document: Scanned Customs Shipping Manifest (Rotated 15° Scan)",
        executionTime: "2.8s",
        humanTime: "25 Mins",
        status: "Validated & Ingested to SAP",
        agentsInvolved: ["Vision De-Skewing Agent", "Table Transformer", "SAP Gateway"],
        planSteps: [
          { step: "Applied computer vision deskewing and contrast normalization to scanned PDF", time: "0.6s" },
          { step: "Extracted 28 container numbers, HS tariff codes, and gross metric ton weights", time: "0.9s" },
          { step: "Validated container check-digits against ISO 6346 international standard", time: "0.6s" },
          { step: "Generated validated JSON payload and posted goods receipt into SAP S/4HANA", time: "0.7s" }
        ],
        outcome: "Bill of lading processed in 2.8s. All 28 containers logged into ERP."
      },
      {
        id: "medical-claims",
        title: "Handwritten Insurance Claim Form",
        role: "Document: Scanned CMS-1500 Health Insurance Form with Handwriting",
        executionTime: "3.2s",
        humanTime: "30 Mins",
        status: "Extracted with 99.8% Confidence",
        agentsInvolved: ["Handwriting HTR Model", "ICD-10 Validator", "Claims Mesh"],
        planSteps: [
          { step: "Segmented 32 form fields including physician notes and patient diagnosis", time: "0.8s" },
          { step: "Decoded handwritten ICD-10 diagnosis code: 'E11.9 (Type 2 Diabetes)'", time: "1.0s" },
          { step: "Cross-referenced patient policy ID against insurer database eligibility", time: "0.7s" },
          { step: "Dispatched structured claim record to claims adjudication gateway", time: "0.7s" }
        ],
        outcome: "Handwritten form digitized with 99.8% accuracy in 3.2 seconds."
      },
      {
        id: "multipage-invoice",
        title: "14-Page Complex Vendor Invoice",
        role: "Document: Amazon AWS Monthly Consolidated Invoice ($248,000)",
        executionTime: "4.4s",
        humanTime: "2 Hours",
        status: "Reconciled to NetSuite",
        agentsInvolved: ["Multi-Page Table Stitcher", "Arithmetic Auditor", "GL Mapper"],
        planSteps: [
          { step: "Parsed 480 micro-service line items across 14 PDF pages", time: "1.4s" },
          { step: "Calculated subtotal sum ($248,192.40) and verified exact match with invoice header", time: "1.1s" },
          { step: "Mapped AWS service lines to corresponding internal cost-center GL accounts", time: "1.1s" },
          { step: "Exported structured journal entry to Oracle NetSuite ERP", time: "0.8s" }
        ],
        outcome: "480 line items extracted and mapped to general ledger accounts in 4.4 seconds."
      }
    ]
  },
  integrations: [
    { name: "SAP S/4HANA", type: "Core ERP Ingestion" },
    { name: "Oracle NetSuite", type: "Financial Ledger Sync" },
    { name: "Salesforce CRM", type: "Customer Attachment Sync" },
    { name: "Snowflake & BigQuery", type: "Data Warehouse Ingestion" },
    { name: "Box & SharePoint", type: "Repository Storage" },
    { name: "AWS S3 & Azure Blob", type: "Raw Document Storage" }
  ],
  governance: [
    { label: "Zero Model Data Retention", desc: "Customer document PII is never stored or trained on" },
    { label: "SOC 2 Type II & HIPAA Certified", desc: "Audited encryption for medical and financial documents" },
    { label: "Cryptographic Document Hashes", desc: "Every extracted record links to SHA-256 hash of original scan" },
    { label: "Confidence Threshold Gates", desc: "Fields below 95% confidence routed to human reviewers" }
  ],
  caseStudy: {
    client: "Global Logistics & Freight Conglomerate",
    industry: "Logistics & Supply Chain",
    headline: "How a Global Freight Giant Automated 1.4M Shipping Documents Annually with 99.8% Accuracy",
    quote: "Devopstrio Document Agent eliminated our shipping document processing backlog entirely. Containers now clear customs in minutes rather than days.",
    author: "Global Head of Digital Operations",
    company: "Publicly Traded Freight Group",
    image: caseImg,
    results: [
      { stat: "99.8%", label: "Field extraction accuracy" },
      { stat: "< 1.2s", label: "Processing speed per page" },
      { stat: "$2.8M", label: "Annual operational labor saved" }
    ]
  }
};
