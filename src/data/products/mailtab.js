import heroBg from "../../assets/fresh/images_15_.jpg";
import triageImg from "../../assets/fresh/smart_inbox_triage.jpg";
import draftImg from "../../assets/fresh/images_14_.jpg";
import calImg from "../../assets/fresh/quantum_laser_optics.jpg";
import secImg from "../../assets/fresh/images_16_.jpg";
import caseImg from "../../assets/fresh/digital-workspace-with-data-analysis-visualization.jpg";

export const mailtabData = {
  "id": "mailtab",
  "category": "Business Platform",
  "name": "MailTab",
  "tagline": "Autonomous Email Intelligence, Smart Inbox Triage & Executive Action Synthesis",
  "hero": {
    "badge": "BUSINESS PLATFORM // EMAIL INTELLIGENCE",
    "titleLight": "Intelligent Inbox Operations with",
    "titleBold": "MailTab",
    "description": "Stop losing executive hours to email overload. MailTab deploys autonomous cognitive agents that classify incoming messages by priority, synthesize context-aware draft responses, extract actionable deliverables, and coordinate calendar commitments with zero human friction.",
    "bgImage": "smart_inbox_triage.jpg",
    "liveBadge": "v3.8 Production Ready"
  },
  "metrics": [
    {
      "value": "4.5 hrs",
      "label": "Saved Per Employee / Day",
      "sub": "Automated triage & drafting"
    },
    {
      "value": "94%",
      "label": "First-Pass Response Accuracy",
      "sub": "Context-aligned tone & policy"
    },
    {
      "value": "< 30s",
      "label": "Urgent Thread Escalation",
      "sub": "Real-time executive alerting"
    },
    {
      "value": "100%",
      "label": "Data Isolation & Privacy",
      "sub": "Air-gapped on-prem or private cloud"
    }
  ],
  "overview": {
    "heading": "Transforming the Enterprise Inbox into an Autonomous Action Center",
    "description": "Modern knowledge workers spend over 28% of their workweek reading and drafting emails. Fragmented threads across Outlook and Gmail lead to missed customer commitments and delayed decisions.\n\nMailTab integrates seamlessly into your email infrastructure to read, summarize, draft, and schedule on your behalf while keeping full human-in-the-loop oversight.",
    "keyPoints": [
      "Semantic thread summarization across multi-week conversations",
      "Autonomous reply drafting trained on enterprise brand voice and policy",
      "Action item extraction that pushes directly to Jira, Asana, and Slack",
      "Military-grade encryption with zero retention on public models"
    ]
  },
  "features": [
    {
      "id": "triage",
      "tabTitle": "Smart Triage",
      "title": "Intent-Based Inbox Categorization & Filtering",
      "description": "MailTab parses incoming messages in milliseconds, grouping them by business urgency, customer value, and required action instead of standard spam filters.",
      "highlights": [
        "Identifies high-value enterprise deal inquiries instantly",
        "Filters automated notifications into structured executive digests",
        "Detects urgency and escalation flags in customer emails",
        "Supports multi-inbox shared executive accounts"
      ],
      "image": "smart_inbox_triage.jpg"
    },
    {
      "id": "drafting",
      "tabTitle": "Contextual Drafting",
      "title": "Brand-Aligned Autonomous Response Generation",
      "description": "Drafts tailored, highly accurate replies by pulling context from past email threads, internal knowledge wikis, and CRM notes.",
      "highlights": [
        "Multi-lingual response drafting across 30+ languages",
        "Contextual attachments lookup from Google Drive and OneDrive",
        "Custom tone profiles for executives, sales, and support",
        "One-click review and send interface"
      ],
      "image": "multimodal_ai_workbench.jpg"
    },
    {
      "id": "calendar",
      "tabTitle": "Calendar Sync",
      "title": "Autonomous Meeting Scheduling & Commitment Tracking",
      "description": "Eliminates back-and-forth calendar negotiation. MailTab reads requested timeframes and sends personalized booking slots directly in the thread.",
      "highlights": [
        "Resolves double-booking conflicts across multiple time zones",
        "Automated agenda and pre-read document distribution",
        "Follow-up reminder triggers for pending commitments",
        "Native Outlook 365 and Google Workspace integration"
      ],
      "image": "product_design_review.jpg"
    },
    {
      "id": "security",
      "tabTitle": "Zero-Trust Privacy",
      "title": "Enterprise DLP & Confidentiality Guardrails",
      "description": "Protects sensitive enterprise IP. Automatically flags accidental PII or confidential leaks before an email leaves your corporate domain.",
      "highlights": [
        "Real-time DLP (Data Loss Prevention) scanning",
        "Role-based email access controls and audit logs",
        "Strict data residency compliance (GDPR, HIPAA, SOC 2)",
        "Air-gapped private LLM deployment support"
      ],
      "image": "cyber_threat_map.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Stream Ingestion",
      "desc": "Secure webhook connects to corporate Exchange or Gmail with zero latency."
    },
    {
      "step": "02",
      "title": "Intent & Sentiment Triage",
      "desc": "AI models classify thread importance and extract action items."
    },
    {
      "step": "03",
      "title": "Context Gathering",
      "desc": "Retrieves relevant customer history and knowledge docs."
    },
    {
      "step": "04",
      "title": "Draft Generation",
      "desc": "Produces natural, context-rich draft replies for human review."
    },
    {
      "step": "05",
      "title": "One-Click Dispatch",
      "desc": "Executive approves with a single hotkey and action items sync to CRM."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Email Triage & Response Simulator",
    "subtitle": "Select an incoming email scenario below to see how MailTab analyzes intent, extracts deliverables, and generates an executive response.",
    "personas": [
      {
        "name": "Tier-1 Enterprise Deal Inbound",
        "role": "Subject: Urgent: Custom SLA & Pricing for Global Rollout",
        "experience": "From: VP of Engineering, Fortune 500 Bank",
        "matchScore": 99,
        "matchGrade": "Critical Priority",
        "summary": "Client requests custom SLA terms, SOC2 compliance confirmation, and a multi-region deployment discount before Friday's board meeting.",
        "competencies": [
          {
            "skill": "Intent Classification",
            "score": 99
          },
          {
            "skill": "Context Retrieval (CRM)",
            "score": 97
          },
          {
            "skill": "Tone Alignment",
            "score": 95
          },
          {
            "skill": "Calendar Coordination",
            "score": 98
          }
        ],
        "aiInsight": "High-value expansion deal ($1.2M ARR). Drafted tailored response referencing SOC2 package and proposed executive sync tomorrow at 2:00 PM EST."
      },
      {
        "name": "Critical Escalation Thread",
        "role": "Subject: Production Pipeline Latency in EU-West",
        "experience": "From: Lead DevOps Architect",
        "matchScore": 96,
        "matchGrade": "High Priority",
        "summary": "Incident report detailing sporadic API timeout in Frankfurt datacenter. Team is investigating root cause.",
        "competencies": [
          {
            "skill": "Incident Severity Triage",
            "score": 98
          },
          {
            "skill": "Jira Ticket Sync",
            "score": 95
          },
          {
            "skill": "Stakeholder Summary",
            "score": 94
          },
          {
            "skill": "Action Extraction",
            "score": 96
          }
        ],
        "aiInsight": "Synthesized technical incident summary and notified On-Call Engineering Leads via Slack webhook."
      },
      {
        "name": "Vendor Contract Renewal",
        "role": "Subject: Annual Cloud Security License Renewal",
        "experience": "From: Enterprise Procurement Lead",
        "matchScore": 92,
        "matchGrade": "Standard Priority",
        "summary": "Vendor provided 3-year term agreement with 15% discount if signed prior to quarter close.",
        "competencies": [
          {
            "skill": "Contract Parsing",
            "score": 94
          },
          {
            "skill": "Budget Check",
            "score": 92
          },
          {
            "skill": "Executive Briefing",
            "score": 95
          },
          {
            "skill": "Legal Redline Routing",
            "score": 93
          }
        ],
        "aiInsight": "Calculated multi-year ROI vs annual plan and queued draft review for Head of Procurement."
      }
    ]
  },
  "integrations": [
    {
      "name": "Microsoft 365 / Outlook",
      "type": "Native Add-in & Webhook"
    },
    {
      "name": "Google Workspace",
      "type": "Gmail Extension & API"
    },
    {
      "name": "Salesforce CRM",
      "type": "Auto-Thread Logging"
    },
    {
      "name": "HubSpot",
      "type": "Contact & Deal Sync"
    },
    {
      "name": "Jira & Linear",
      "type": "Task Auto-Creation"
    },
    {
      "name": "Slack & Teams",
      "type": "High-Priority Pushes"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Audited security architecture"
    },
    {
      "label": "Zero Model Retention",
      "desc": "Emails never stored for public LLM training"
    },
    {
      "label": "End-to-End Encryption",
      "desc": "TLS 1.3 in transit and AES-256 at rest"
    },
    {
      "label": "GDPR Compliant",
      "desc": "Granular data residency controls"
    }
  ],
  "caseStudy": {
    "client": "Global Private Equity Firm",
    "industry": "Financial Services",
    "headline": "How 250 Investment Partners Saved 1,000+ Weekly Hours on Deal Inbounds",
    "quote": "MailTab cut through our inbox noise immediately. Our partners now respond to critical founder pitches in under 5 minutes, giving us a major edge in fast-moving rounds.",
    "author": "Managing Partner",
    "company": "Top-Tier European Venture Fund",
    "image": "executive_boardroom_ai.jpg",
    "results": [
      {
        "stat": "80%",
        "label": "Reduction in triage backlog"
      },
      {
        "stat": "3.5 hrs",
        "label": "Saved per partner daily"
      },
      {
        "stat": "< 4 min",
        "label": "Average response latency"
      }
    ]
  }
}
mailtabData.hero.bgImage = heroBg;
mailtabData.features[0].image = triageImg;
mailtabData.features[1].image = draftImg;
mailtabData.features[2].image = calImg;
mailtabData.features[3].image = secImg;
mailtabData.caseStudy.image = caseImg;
