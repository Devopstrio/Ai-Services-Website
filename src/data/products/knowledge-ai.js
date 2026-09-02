import heroBg from "../../assets/fresh/images_10_.jpg";
import feat1Img from "../../assets/fresh/hardware_security_module.jpg";
import feat2Img from "../../assets/fresh/images_11_.jpg";
import feat3Img from "../../assets/fresh/ijgktdssvo1m7d1wscpf.webp";
import feat4Img from "../../assets/fresh/images_13_.jpg";
import caseImg from "../../assets/fresh/dashboard_ai_model_training.jpg";

export const knowledgeaiData = {
  "id": "knowledge-ai",
  "category": "Productivity AI",
  "name": "Knowledge AI",
  "tagline": "Neural Enterprise Retrieval-Augmented Generation & Multi-Modal Document Q&A",
  "metrics": [
    {
      "value": "99.4%",
      "label": "Citation Accuracy",
      "sub": "Strict ground-truth extraction"
    },
    {
      "value": "85%",
      "label": "Faster Research Velocity",
      "sub": "Instant answers across thousands of files"
    },
    {
      "value": "100%",
      "label": "RBAC Compliance",
      "sub": "Inherits Active Directory permissions"
    },
    {
      "value": "60+",
      "label": "Document Formats Supported",
      "sub": "PDF, DOCX, XLSX, PPTX, EPUB, Audio"
    }
  ],
  "overview": {
    "heading": "Enterprise-Grade Retrieval Augmented Generation (RAG) Built for Trust",
    "description": "Generic LLMs hallucinate and lack private company context. Knowledge AI combines high-density vector retrieval, reranking algorithms, and private LLMs to deliver accurate answers with clickable document page citations.",
    "keyPoints": [
      "Advanced hybrid keyword and vector semantic search retrieval",
      "Document-level permission enforcement preventing data leakage",
      "Multi-modal table and chart understanding from complex PDF reports",
      "Automated semantic index updates on document modification"
    ]
  },
  "features": [
    {
      "id": "rag",
      "tabTitle": "Neural Search",
      "title": "Hybrid Dense & Sparse Neural Retrieval",
      "description": "Combines vector embeddings with BM25 keyword matching and cross-encoder rerankers to surface exact technical answers in milliseconds.",
      "highlights": [
        "Cross-encoder reranking for maximum precision",
        "Handles multi-language documents seamlessly",
        "Zero data leakage between business departments",
        "Under 150ms average query latency"
      ],
      "image": "holographic_data_globe.jpg"
    },
    {
      "id": "citations",
      "tabTitle": "Citations",
      "title": "Verifiable Ground-Truth Document Highlighting",
      "description": "Every answer is tethered to verifiable source text. Click on any citation number to open the exact page and highlighted paragraph.",
      "highlights": [
        "Exact PDF page and bounding box highlights",
        "Confidence rating on every generated statement",
        "Exportable audit summary for compliance",
        "Side-by-side document comparison viewer"
      ],
      "image": "multimodal_ai_workbench.jpg"
    },
    {
      "id": "tables",
      "tabTitle": "Table & OCR",
      "title": "Complex Financial Table & Diagram Extraction",
      "description": "Parses complex multi-column spreadsheets, financial income statements, and technical schematic diagrams with zero distortion.",
      "highlights": [
        "High-accuracy table-to-markdown translation",
        "Mathematical reasoning across financial statements",
        "Handles low-resolution scanned legacy paperwork",
        "Automated currency and metric conversions"
      ],
      "image": "automated_invoice_processing.jpg"
    },
    {
      "id": "connectors",
      "tabTitle": "Integrations",
      "title": "Enterprise Zero-ETL Knowledge Connectors",
      "description": "Integrates directly with SharePoint, Google Drive, Box, Confluence, and AWS S3 with continuous automated synchronization.",
      "highlights": [
        "Real-time webhook change data capture",
        "Preserves existing folder structures and metadata",
        "Automated deduplication and version tracking",
        "Scales to tens of millions of enterprise files"
      ],
      "image": "saas_cloud_platform_ui.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Ingestion",
      "desc": "Connects securely to internal cloud drives and databases."
    },
    {
      "step": "02",
      "title": "Parsing & OCR",
      "desc": "Extracts text, tables, and diagrams into clean semantic chunks."
    },
    {
      "step": "03",
      "title": "Embedding",
      "desc": "Generates high-dimensional vector embeddings with metadata tags."
    },
    {
      "step": "04",
      "title": "Query & Rerank",
      "desc": "Hybrid search retrieves the top relevant context snippets."
    },
    {
      "step": "05",
      "title": "Grounded Answer",
      "desc": "Private LLM generates response with clickable citations."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Knowledge RAG Query Simulator",
    "subtitle": "Select a complex research query below to see how Knowledge AI extracts verifiable answers from private enterprise documents.",
    "personas": [
      {
        "name": "Q4 Data Center Cooling Specs & PUE",
        "role": "Query across 14 Engineering PDF Specifications",
        "experience": "Sources: Ashrae 90.4 • Tier 4 Annex",
        "matchScore": 99,
        "matchGrade": "Verified Citation",
        "summary": "Maximum allowable chiller loop temperature is 18.5°C under peak load with a design PUE target of 1.14 in Frankfurt datacenter cluster.",
        "competencies": [
          {
            "skill": "Table Extraction Accuracy",
            "score": 99
          },
          {
            "skill": "Metric Validation",
            "score": 98
          },
          {
            "skill": "Citation Precision",
            "score": 99
          },
          {
            "skill": "ACL Verification",
            "score": 100
          }
        ],
        "aiInsight": "Derived from Page 42, Paragraph 3 of 'Global Infrastructure Spec 2026.pdf'. Exact diagram highlighted."
      }
    ]
  },
  "integrations": [
    {
      "name": "Microsoft SharePoint",
      "type": "Full Document Sync"
    },
    {
      "name": "Google Drive",
      "type": "Workspace Integration"
    },
    {
      "name": "Atlassian Confluence",
      "type": "Wiki Space Indexer"
    },
    {
      "name": "Box & Dropbox",
      "type": "Secure Cloud Storage Sync"
    },
    {
      "name": "AWS S3 / Azure Blob",
      "type": "Object Store Direct Connector"
    },
    {
      "name": "Slack & MS Teams",
      "type": "Knowledge Bot Plugin"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Audited data encryption in transit and at rest"
    },
    {
      "label": "Zero Public AI Training",
      "desc": "Your data is strictly isolated"
    },
    {
      "label": "Role-Based ACL",
      "desc": "Mirrors existing enterprise Active Directory permissions"
    },
    {
      "label": "HIPAA & GDPR Compliant",
      "desc": "Meets stringent global privacy mandates"
    }
  ],
  "caseStudy": {
    "client": "Global Semiconductor Manufacturer",
    "industry": "Hardware & Semiconductor",
    "headline": "How 4,000 Chip Designers Cut Patent & Spec Research Time by 80%",
    "quote": "Knowledge AI turned our 30-year archive of chip design schematics into an interactive brainstorming partner. Complex specification lookups that took hours now happen in seconds.",
    "author": "VP of Engineering",
    "company": "Leading Silicon Provider",
    "image": "microchip_wafer_lithography.jpg",
    "results": [
      {
        "stat": "80%",
        "label": "Reduction in engineering research time"
      },
      {
        "stat": "2.4M",
        "label": "Technical pages indexed"
      },
      {
        "stat": "99.6%",
        "label": "Answer verification score"
      }
    ]
  },
  "hero": {
    "badge": "PRODUCTIVITY // NEURAL RAG",
    "titleLight": "Instant Institutional Answers with",
    "titleBold": "Knowledge AI",
    "description": "Unlock institutional knowledge trapped in static PDFs, spreadsheets, research archives, and tickets. Knowledge AI provides citation-backed, hallucination-free answers with strict document-level role-based access control.",
    "liveBadge": "v4.2 Production Ready",
    "bgImage": "heroBg"
  }
};
knowledgeaiData.hero.bgImage = heroBg;
knowledgeaiData.features[0].image = feat1Img || heroBg;
knowledgeaiData.features[1].image = feat2Img || heroBg;
knowledgeaiData.features[2].image = feat3Img || heroBg;
knowledgeaiData.features[3].image = feat4Img || heroBg;
knowledgeaiData.caseStudy.image = caseImg || heroBg;
