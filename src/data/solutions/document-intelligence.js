import img1 from '../../assets/unique_solutions/doc_intel_ocr.jpg';
import img2 from '../../assets/solutions/6.jpg';
import img3 from '../../assets/unique_solutions/doc_intel_case.jpg';
import img4 from '../../assets/fresh/dashboard_ai_model_training.jpg';
import img5 from '../../assets/solutions/4.jpg';
import img6 from '../../assets/fresh/product_aihire_recruiting.jpg';
import img7 from '../../assets/fresh/saas_cloud_platform_ui.jpg';
import img8 from '../../assets/fresh/modern-interior-design-office.jpg';

const data = {
  id: 'document-intelligence',
  breadcrumbs: ['Enterprise Solutions', 'Document Intelligence'],
  hero: {
    titleLight: 'Document',
    titleBold: 'Intelligence',
    description: "Unlock dark unstructured enterprise data across millions of PDF contracts, handwritten forms, medical records, and technical schematics with zero-template neural extraction pipelines.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "99.4%",
    "label": "Field Extraction Precision"
  },
  {
    "value": "100x",
    "label": "Faster Processing Speed"
  },
  {
    "value": "Zero",
    "label": "Manual Template Setup"
  },
  {
    "value": "50+",
    "label": "Supported Languages"
  }
],
  overview: {
    heading: "Zero-Shot Document Understanding & Structured Extraction",
    paragraph: "Devopstrio replaces brittle OCR templates with foundational Vision-Language Models (VLMs) that comprehend documents the way human experts do. Our architecture reads handwritten notes, complex multi-column tables, stamped seals, and hierarchical technical documentation with exceptional accuracy.\n\nWhether extracting indemnity terms from legacy insurance binders or digitizing international customs manifests, our solution seamlessly transforms chaotic PDF repositories into validated, queryable JSON schemas integrated with your enterprise data warehouse.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Complex Table & Layout Parsing",
    "desc": "Accurately parse nested financial tables, borderless spreadsheets, and distorted scanned reports while preserving relational data integrity.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Handwritten & Legacy Script OCR",
    "desc": "Digitize historical forms, handwritten medical records, and field engineer notes that conventional OCR engines fail to decipher.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Automated PII & Redaction",
    "desc": "Identify and redact sensitive customer credentials, social security numbers, and protected health data automatically prior to archival.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Multi-Document Cross-Verification",
    "desc": "Cross-validate extracted claims against supporting identification, receipts, and government registries to flag inconsistencies automatically.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "VISION LANGUAGE PIPELINES",
    "title": "Zero-Shot Semantic Understanding",
    "text": "Process new document formats immediately without training custom templates. Simply specify the target schema in natural language, and our models locate, extract, and normalize the required entities.",
    "image": img7
  },
  {
    "tag": "INTELLIGENT VALIDATION",
    "title": "Human-in-the-Loop Confidence Scoring",
    "text": "Every extracted data point is accompanied by a mathematical confidence score and direct visual bounding-box coordinates, routing only uncertain edge cases to human operators for rapid verification.",
    "image": img8
  },
  {
    "tag": "SYSTEM INTEGRATION",
    "title": "Enterprise ERP & DMS Auto-Ingestion",
    "text": "Automatically ingest incoming documents from SFTP servers, email inboxes, and cloud storage, delivering structured payloads directly into SAP, Salesforce, Guidewire, or Snowflake in real time.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Global Maritime Logistics Leader",
    "metric": "1.2M Docs/Yr",
    "desc": "Automated the extraction of complex Bills of Lading and customs declarations across 40 maritime ports, cutting manual processing time by 88%."
  },
  {
    "company": "International Health Insurance Provider",
    "metric": "4-Minute Claims",
    "desc": "Reduced medical claims processing from 5 days to 4 minutes by extracting line-item hospital bills, doctor signatures, and pharmacy receipts automatically."
  },
  {
    "company": "Tier-1 Mortgage Lender",
    "metric": "Zero Backlog",
    "desc": "Eliminated loan underwriting backlogs by auto-processing W2s, tax returns, and bank statements with 99.8% data accuracy."
  }
]
};

export default data;
