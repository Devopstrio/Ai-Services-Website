import heroBg from "../../assets/fresh/product_mailtab_inbox.jpg";
import feat1Img from "../../assets/fresh/support_ticket_automation.jpg";
import feat2Img from "../../assets/fresh/product_support_desk.jpg";
import feat3Img from "../../assets/fresh/cheerful-business-team-watching-presentation-laptop-sitting-workplace-staring-display-smiling-copy-space-business-meeting-concept.jpg";
import feat4Img from "../../assets/fresh/remote-it-support-provider-2.webp";
import caseImg from "../../assets/fresh/edge_computing_satellite.jpg";

export const supportaiData = {
  "id": "support-ai",
  "category": "Business AI",
  "name": "Support AI",
  "tagline": "Autonomous Multi-Lingual Customer Support & Tier-1 Ticket Resolution Platform",
  "metrics": [
    {
      "value": "75%",
      "label": "First-Contact Resolution",
      "sub": "Autonomous ticket settlement"
    },
    {
      "value": "< 2s",
      "label": "Average Response Time",
      "sub": "Instant 24/7 multi-channel replies"
    },
    {
      "value": "96%",
      "label": "CSAT Satisfaction Score",
      "sub": "Empathetic, highly accurate answers"
    },
    {
      "value": "60%",
      "label": "Support Operating Cost Savings",
      "sub": "Deflect repetitive tier-1 tickets"
    }
  ],
  "overview": {
    "heading": "Autonomous Customer Experience Architecture that Resolves Issues at Machine Speed",
    "description": "Customer support backlogs, long hold times, and robotic canned responses destroy brand loyalty. Support AI deploys cognitive agents that take real actions — issuing refunds, resetting credentials, updating shipping addresses, and diagnosing technical bugs in seconds.",
    "keyPoints": [
      "Autonomous action-taking agents that integrate with your billing and order databases",
      "Seamless human agent escalation with synthesized conversation briefing notes",
      "Native omnichannel support across Web Chat, WhatsApp, Email, Zendesk, and Voice",
      "Real-time sentiment monitoring that flags angry customers for immediate VIP routing"
    ]
  },
  "features": [
    {
      "id": "resolution",
      "tabTitle": "Autonomous Triage",
      "title": "Sub-Second Tier-1 Autonomous Resolution",
      "description": "Resolves common inquiries (order tracking, billing disputes, password resets, product setup) without human intervention.",
      "highlights": [
        "Executes database actions via secure transactional APIs",
        "Zero customer wait time across all time zones",
        "Maintains conversational memory throughout ticket lifecycle",
        "Multi-lingual support across 45+ languages"
      ],
      "image": "support_ticket_automation.jpg"
    },
    {
      "id": "escalation",
      "tabTitle": "Smart Escalation",
      "title": "Intelligent Human Agent Escalation Dossiers",
      "description": "When a complex issue requires human empathy or policy exceptions, Support AI routes the ticket to the right specialist with a 3-bullet briefing.",
      "highlights": [
        "Summarizes the customer's problem and attempted fixes",
        "Highlights customer sentiment and lifetime value (LTV)",
        "Drafts recommended solutions for the human agent",
        "Eliminates frustrating customer repetition"
      ],
      "image": "ai_consultants_discussion.jpg"
    },
    {
      "id": "voice",
      "tabTitle": "Voice AI Agent",
      "title": "Ultra-Low Latency Conversational Voice AI",
      "description": "Handles incoming telephone support calls with natural human-like voice synthesis, ultra-low latency interruptions, and instant telephony sync.",
      "highlights": [
        "Under 400ms end-to-end voice latency",
        "Natural conversational interruptions and cadence",
        "Integrates with Genesys, Twilio, and Amazon Connect",
        "Automated call recording and CRM logging"
      ],
      "image": "multimodal_ai_workbench.jpg"
    },
    {
      "id": "insights",
      "tabTitle": "Product Telemetry",
      "title": "Voice of the Customer & Bug Intelligence",
      "description": "Analyzes thousands of daily support interactions to cluster recurring product bugs, UX confusion, and feature requests for engineering teams.",
      "highlights": [
        "Auto-generates Jira bug reports with reproduction steps",
        "Real-time CSAT and NPS sentiment tracking",
        "Surfaces emerging product defect spikes immediately",
        "Executive customer health reporting dashboard"
      ],
      "image": "saas_cloud_platform_ui.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Inbound Channel",
      "desc": "Customer reaches out via web chat, email, phone, or WhatsApp."
    },
    {
      "step": "02",
      "title": "Intent & Auth",
      "desc": "Agent authenticates customer and identifies exact inquiry intent."
    },
    {
      "step": "03",
      "title": "Action Execution",
      "desc": "Agent queries backend APIs and executes resolution immediately."
    },
    {
      "step": "04",
      "title": "Smart Escalation",
      "desc": "Complex tickets route to specialist with a pre-written dossier."
    },
    {
      "step": "05",
      "title": "Feedback Loop",
      "desc": "CSAT score collected and conversation synced to CRM."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Customer Support Resolution Simulator",
    "subtitle": "Select a customer support scenario below to see Support AI authenticate users, execute backend actions, and resolve tickets in real time.",
    "personas": [
      {
        "name": "Urgent Enterprise Flight Booking Modification",
        "role": "Channel: Web Chat • VIP Platinum Customer",
        "experience": "Request: Reschedule London ➔ NYC flight due to weather",
        "matchScore": 99,
        "matchGrade": "Resolved in 14s",
        "summary": "Authenticated passenger, verified airline waiver policy, rebooked to flight BA-178 at 14:00 GMT, and emailed updated boarding pass.",
        "competencies": [
          {
            "skill": "Identity Verification",
            "score": 100
          },
          {
            "skill": "GDS API Flight Exchange",
            "score": 99
          },
          {
            "skill": "Waiver Policy Check",
            "score": 99
          },
          {
            "skill": "CSAT Experience Score",
            "score": 98
          }
        ],
        "aiInsight": "Zero hold time. Ticket settled in 14 seconds with 5-star customer rating."
      }
    ]
  },
  "integrations": [
    {
      "name": "Zendesk & Freshdesk",
      "type": "Full Ticket Lifecycle Sync"
    },
    {
      "name": "Salesforce Service Cloud",
      "type": "CRM Case Management"
    },
    {
      "name": "Intercom & Drift",
      "type": "Live Web Chat Widget"
    },
    {
      "name": "Twilio & Amazon Connect",
      "type": "Telephony Voice Stream"
    },
    {
      "name": "Stripe & Shopify",
      "type": "Billing & Order Action API"
    },
    {
      "name": "Jira Service Management",
      "type": "Engineering Bug Sync"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Certified customer support data protection"
    },
    {
      "label": "PCI-DSS Compliant",
      "desc": "Credit card masking and secure billing actions"
    },
    {
      "label": "HIPAA Certified",
      "desc": "Secure healthcare patient support"
    },
    {
      "label": "Zero Public AI Retention",
      "desc": "Conversations never used for public training"
    }
  ],
  "caseStudy": {
    "client": "Global E-Commerce Marketplace",
    "industry": "Retail & Marketplace",
    "headline": "How 1.2M Monthly Customer Tickets Were Resolved in Under 10 Seconds with a 96% CSAT Score",
    "quote": "Support AI transformed our customer satisfaction. During peak holiday shopping, our resolution time dropped from 18 hours to 8 seconds while cutting support costs in half.",
    "author": "VP of Customer Operations",
    "company": "Top 5 Global E-Commerce Platform",
    "image": "executive_boardroom_ai.jpg",
    "results": [
      {
        "stat": "74%",
        "label": "Autonomous straight-through resolution"
      },
      {
        "stat": "96%",
        "label": "Customer satisfaction rating (CSAT)"
      },
      {
        "stat": "$3.6M",
        "label": "Annual customer service savings"
      }
    ]
  },
  "hero": {
    "badge": "BUSINESS AI // CUSTOMER EXPERIENCE",
    "titleLight": "24/7 Delightful Customer Support with",
    "titleBold": "Support AI",
    "description": "Deploy autonomous customer support agents that resolve up to 75% of inquiries instantly across web chat, email, and voice. Seamlessly escalates complex issues to human agents with rich contextual briefing notes.",
    "liveBadge": "v4.6 Production Ready",
    "bgImage": "heroBg"
  }
};
supportaiData.hero.bgImage = heroBg;
supportaiData.features[0].image = feat1Img || heroBg;
supportaiData.features[1].image = feat2Img || heroBg;
supportaiData.features[2].image = feat3Img || heroBg;
supportaiData.features[3].image = feat4Img || heroBg;
supportaiData.caseStudy.image = caseImg || heroBg;
