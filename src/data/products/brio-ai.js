import heroBg from "../../assets/fresh/digital-world-banner-background-remixed-from-public-domain-by-nasa_1_.jpg";
import feat1Img from "../../assets/fresh/digital-world-banner-background-remixed-from-public-domain-by-nasa_2_.jpg";
import feat2Img from "../../assets/fresh/edge_computing_satellite.jpg";
import feat3Img from "../../assets/fresh/cyber_threat_map.jpg";
import feat4Img from "../../assets/fresh/enabling_secure_innovation_for_devops_globalsign.jpg";
import caseImg from "../../assets/fresh/energy_smart_grid_monitoring.jpg";

export const brioaiData = {
  "id": "brio-ai",
  "category": "Business Platform",
  "name": "Brio AI",
  "tagline": "Enterprise Cognitive Search & Multi-Agent Organizational Knowledge Engine",
  "metrics": [
    {
      "value": "< 200ms",
      "label": "Search Query Latency",
      "sub": "Sub-second federated retrieval"
    },
    {
      "value": "99.2%",
      "label": "Hallucination-Free Responses",
      "sub": "Strict citation-backed answers"
    },
    {
      "value": "150+",
      "label": "Enterprise Data Connectors",
      "sub": "Zero-ETL plug and play"
    },
    {
      "value": "6.5 hrs",
      "label": "Saved Per Employee / Week",
      "sub": "Instant answers to complex questions"
    }
  ],
  "overview": {
    "heading": "The Neural Operating System for Enterprise Institutional Knowledge",
    "description": "Enterprises lose millions of hours searching for scattered information across fragmented SharePoint folders, Confluence wikis, and Jira backlogs. Brio AI creates a unified vector knowledge index across all internal systems.\n\nEquipped with fine-grained role-based permissions, Brio AI synthesizes complex technical questions, drafts client briefings, and reveals hidden operational insights with verifiable citations.",
    "keyPoints": [
      "Federated neural search across cloud and on-premises data silos",
      "Strict document-level permissions (ACL) synchronization in real time",
      "Verifiable source citations with exact page and paragraph highlights",
      "Autonomous multi-agent synthesis for complex cross-system queries"
    ]
  },
  "features": [
    {
      "id": "federated",
      "tabTitle": "Federated Search",
      "title": "Cross-Platform Neural Vector Indexing",
      "description": "Indexes Google Workspace, Microsoft 365, Notion, Jira, Salesforce, and Snowflake without duplicating or moving raw enterprise data.",
      "highlights": [
        "Real-time document ingestion via webhooks",
        "Zero-ETL semantic vector indexing",
        "Supports 80+ file formats including audio transcripts",
        "Multi-lingual semantic cross-lingual search"
      ],
      "image": "holographic_data_globe.jpg"
    },
    {
      "id": "citations",
      "tabTitle": "Citation Engine",
      "title": "Hallucination-Free Citation Architecture",
      "description": "Every generated insight or summary provides clickable source references linked directly to the underlying document paragraph.",
      "highlights": [
        "Exact document snippet verification",
        "Confidence scoring for all synthesized claims",
        "Audit trail for compliance and legal review",
        "One-click navigation to origin files"
      ],
      "image": "deep_learning_tensor.jpg"
    },
    {
      "id": "acl",
      "tabTitle": "Security & ACL",
      "title": "Real-Time Access Control (ACL) Enforcement",
      "description": "Guarantees employees only see answers derived from documents they have explicit authorization to view in origin systems.",
      "highlights": [
        "Inherits permissions from Active Directory and Okta",
        "Prevents unauthorized visibility of payroll or executive memos",
        "Air-gapped private cluster deployment options",
        "Zero data retention on public model APIs"
      ],
      "image": "cyber_threat_map.jpg"
    },
    {
      "id": "agents",
      "tabTitle": "Multi-Agent Synthesis",
      "title": "Autonomous Knowledge Synthesis Agents",
      "description": "Assign complex research tasks to background agents that aggregate data from multiple systems to compile comprehensive executive reports.",
      "highlights": [
        "Generates customer QBR dossiers in 30 seconds",
        "Synthesizes competitive market intelligence",
        "Summarizes complex architectural RFCs",
        "Automated weekly department briefing generation"
      ],
      "image": "multimodal_ai_workbench.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Connect Sources",
      "desc": "Authenticate enterprise data connectors with one-click OAuth."
    },
    {
      "step": "02",
      "title": "Vector Indexing",
      "desc": "Brio builds semantic embeddings while mirroring native ACLs."
    },
    {
      "step": "03",
      "title": "Conversational Query",
      "desc": "User asks complex questions in plain natural language."
    },
    {
      "step": "04",
      "title": "Citation Retrieval",
      "desc": "Neural search retrieves exact snippets and verifies permissions."
    },
    {
      "step": "05",
      "title": "Synthesized Answer",
      "desc": "Delivers comprehensive answer with direct source citations."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Enterprise Knowledge Query Simulator",
    "subtitle": "Select an enterprise query below to see how Brio AI searches across silos, verifies access control, and synthesizes citation-backed answers.",
    "personas": [
      {
        "name": "SLA & Multi-Region Failover Architecture",
        "role": "Query across Confluence, Jira & GitHub RFCs",
        "experience": "Sources: 4 Repos • 12 Wiki Pages",
        "matchScore": 99,
        "matchGrade": "Direct Verified Answer",
        "summary": "Our production failover in EU-Central initiates automatically when latency exceeds 450ms for 3 consecutive minutes, routing traffic to AWS Ireland with zero transaction loss.",
        "competencies": [
          {
            "skill": "Confluence RFC 104",
            "score": 99
          },
          {
            "skill": "Terraform Module Ver.",
            "score": 98
          },
          {
            "skill": "SOC2 Audit Annex B",
            "score": 97
          },
          {
            "skill": "ACL Verification",
            "score": 100
          }
        ],
        "aiInsight": "Derived from 3 verified documents. Verified that requester has Platform Engineer permissions."
      },
      {
        "name": "Q3 Customer Expansion Playbook & Terms",
        "role": "Query across Salesforce, Google Drive & Slack",
        "experience": "Sources: 8 Deals • 2 Pricing Sheets",
        "matchScore": 96,
        "matchGrade": "Direct Verified Answer",
        "summary": "Standard enterprise expansion tier offers 20% discount on 2-year commit exceeding 5,000 active seats, requiring VP Sales approval for custom SLA riders.",
        "competencies": [
          {
            "skill": "Salesforce CPQ Guidelines",
            "score": 98
          },
          {
            "skill": "Commercial Playbook 2026",
            "score": 96
          },
          {
            "skill": "Slack Deal Desk Thread",
            "score": 94
          },
          {
            "skill": "ACL Verification",
            "score": 100
          }
        ],
        "aiInsight": "Derived from verified Sales Operations folder. Filtered out unauthorized executive compensation documents."
      }
    ]
  },
  "integrations": [
    {
      "name": "Microsoft 365 & SharePoint",
      "type": "Full Tenant Vector Sync"
    },
    {
      "name": "Google Workspace & Drive",
      "type": "Real-Time File Ingestion"
    },
    {
      "name": "Atlassian Confluence & Jira",
      "type": "Issue & Wiki Indexing"
    },
    {
      "name": "Notion & Coda",
      "type": "Workspace Integration"
    },
    {
      "name": "Slack & Microsoft Teams",
      "type": "Conversational Bot Plugin"
    },
    {
      "name": "Snowflake & BigQuery",
      "type": "Structured Data Query"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Certified enterprise knowledge security"
    },
    {
      "label": "ISO 27001",
      "desc": "Information security management certified"
    },
    {
      "label": "Native ACL Mirroring",
      "desc": "Respects origin document viewing permissions"
    },
    {
      "label": "Zero Model Training",
      "desc": "Your IP is completely isolated"
    }
  ],
  "caseStudy": {
    "client": "Global Management Consulting Firm",
    "industry": "Professional Services",
    "headline": "How 15,000 Consultants Reduced Proposal Prep Time from 4 Days to 2 Hours",
    "quote": "Brio AI revolutionized our institutional memory. Decades of research and case studies are now instantly discoverable, allowing us to pitch proposals with unprecedented precision.",
    "author": "Chief Information Officer",
    "company": "Top 3 Global Strategy Firm",
    "image": "executive_boardroom_ai.jpg",
    "results": [
      {
        "stat": "85%",
        "label": "Faster proposal research"
      },
      {
        "stat": "1.2M",
        "label": "Documents indexed seamlessly"
      },
      {
        "stat": "$6.5M",
        "label": "Annual billable hours unlocked"
      }
    ]
  },
  "hero": {
    "badge": "BUSINESS PLATFORM // KNOWLEDGE AI",
    "titleLight": "Unify Enterprise Knowledge with",
    "titleBold": "Brio AI",
    "description": "Eliminate institutional data silos. Brio AI connects scattered documents, wikis, Slack threads, Jira tickets, and cloud data lakes into a single, highly secure, conversational decision intelligence interface.",
    "liveBadge": "v4.4 Enterprise Ready",
    "bgImage": "heroBg"
  }
};
brioaiData.hero.bgImage = heroBg;
brioaiData.features[0].image = feat1Img || heroBg;
brioaiData.features[1].image = feat2Img || heroBg;
brioaiData.features[2].image = feat3Img || heroBg;
brioaiData.features[3].image = feat4Img || heroBg;
brioaiData.caseStudy.image = caseImg || heroBg;
