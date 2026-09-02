import heroBg from "../../assets/fresh/images_3_.jpg";
import feat1Img from "../../assets/fresh/programming-background-with-person-working-with-codes-computer.jpg";
import feat2Img from "../../assets/fresh/images_4_.jpg";
import feat3Img from "../../assets/fresh/images_5_.jpg";
import feat4Img from "../../assets/fresh/dashboard_cloud_telemetry.jpg";
import caseImg from "../../assets/fresh/images_6_.jpg";

export const workflowaiData = {
  "id": "workflow-ai",
  "category": "Productivity AI",
  "name": "Workflow AI",
  "tagline": "Autonomous Cognitive Process Automation & Cross-System Orchestration",
  "metrics": [
    {
      "value": "85%",
      "label": "Process Cycle Time Reduction",
      "sub": "From days to automated seconds"
    },
    {
      "value": "0",
      "label": "Manual API Token Friction",
      "sub": "Autonomous authentication mesh"
    },
    {
      "value": "99.99%",
      "label": "Workflow Execution Reliability",
      "sub": "Automated idempotent retries"
    },
    {
      "value": "10x",
      "label": "Higher Operations Throughput",
      "sub": "Scale operations without headcount"
    }
  ],
  "overview": {
    "heading": "Orchestrating Complex Enterprise Operations with Autonomous Multi-Agent Swarms",
    "description": "Traditional RPA bots break whenever UI buttons change or schemas drift. Workflow AI uses cognitive agents that understand business intent, dynamically navigating API shifts and legacy system bottlenecks.",
    "keyPoints": [
      "Intent-driven workflow orchestration that adapts to UI and API changes",
      "Autonomous multi-step execution across ERP, CRM, and HRIS systems",
      "Configurable human approval gates for high-value financial thresholds",
      "Visual drag-and-drop workflow canvas with natural language prompt generation"
    ]
  },
  "features": [
    {
      "id": "orchestration",
      "tabTitle": "Orchestration",
      "title": "Cross-System Autonomous Orchestration",
      "description": "Triggers multi-step business transactions across disparate cloud and legacy software systems seamlessly.",
      "highlights": [
        "Autonomous decision branches based on business logic",
        "Idempotent state management with zero data loss",
        "Real-time rollback triggers for failed transactions",
        "Sub-second event trigger response times"
      ],
      "image": "saas_cloud_platform_ui.jpg"
    },
    {
      "id": "selfhealing",
      "tabTitle": "Self-Healing",
      "title": "Resilient Self-Healing Integrations",
      "description": "Unlike legacy RPA scripts, Workflow AI dynamically adapts when DOM elements change, API endpoints update, or schemas drift.",
      "highlights": [
        "Auto-discovers altered API schema endpoints",
        "Heuristic DOM element fallback for browser tasks",
        "Zero maintenance downtime when SaaS apps update",
        "Automated error diagnostic logs generated"
      ],
      "image": "tech_architect_whiteboard.jpg"
    },
    {
      "id": "approvals",
      "tabTitle": "Human Gates",
      "title": "Configurable Human Approval Gates",
      "description": "Embed instant human verification into critical workflows via Slack, Teams, or email before high-risk actions execute.",
      "highlights": [
        "One-click Slack and Teams approval buttons",
        "Dynamic risk thresholds requiring dual-manager sign-off",
        "Full audit logging for regulatory compliance",
        "Configurable escalation timers for idle requests"
      ],
      "image": "executive_boardroom_ai.jpg"
    },
    {
      "id": "analytics",
      "tabTitle": "Telemetry",
      "title": "Real-Time Bottleneck & Process Mining",
      "description": "Visualizes operational flow velocity, highlighting manual delays, high-failure endpoints, and throughput bottlenecks.",
      "highlights": [
        "Visual bottleneck heatmap across all pipelines",
        "ROI and labor cost savings calculation dashboard",
        "Predictive throughput capacity planning",
        "Real-time SLA breach alerting"
      ],
      "image": "cloud_data_center_hall.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Event Trigger",
      "desc": "Webhook or scheduled trigger detects new business event."
    },
    {
      "step": "02",
      "title": "Intent Routing",
      "desc": "Cognitive agent determines optimal path across downstream APIs."
    },
    {
      "step": "03",
      "title": "Data Enrichment",
      "desc": "Gathers supporting context from internal databases."
    },
    {
      "step": "04",
      "title": "Approval Check",
      "desc": "Executes human approval gate if transaction exceeds threshold."
    },
    {
      "step": "05",
      "title": "Multi-App Post",
      "desc": "Updates ERP, CRM, and ledger records simultaneously."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Workflow Orchestration Simulator",
    "subtitle": "Select an enterprise workflow below to see how Workflow AI coordinates cross-system tasks autonomously.",
    "personas": [
      {
        "name": "Global Employee Onboarding & Asset Provisioning",
        "role": "Triggers: Workday ➔ Okta ➔ ServiceNow ➔ AWS ➔ Slack",
        "experience": "14 Automated Tasks • 3 Systems",
        "matchScore": 99,
        "matchGrade": "Executed in 18s",
        "summary": "Created corporate SSO identity, provisioned role-based AWS IAM policies, ordered dev laptop via ServiceNow, and invited employee to team Slack channels.",
        "competencies": [
          {
            "skill": "Identity Lifecycle Provisioning",
            "score": 100
          },
          {
            "skill": "Role-Based IAM Assignment",
            "score": 99
          },
          {
            "skill": "Hardware Asset Order Sync",
            "score": 98
          },
          {
            "skill": "Audit Logging",
            "score": 100
          }
        ],
        "aiInsight": "Replaced 3 days of manual HR and IT tickets with a single 18-second autonomous pipeline."
      }
    ]
  },
  "integrations": [
    {
      "name": "ServiceNow",
      "type": "ITSM & Asset Automation"
    },
    {
      "name": "Salesforce",
      "type": "Lead-to-Cash Workflow"
    },
    {
      "name": "Workday",
      "type": "HR Lifecycle Sync"
    },
    {
      "name": "SAP S/4HANA",
      "type": "Supply Chain & Order Routing"
    },
    {
      "name": "Jira Software",
      "type": "Engineering Ticket Automation"
    },
    {
      "name": "Slack & Teams",
      "type": "Human-in-the-Loop Bot"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Certified transactional data isolation"
    },
    {
      "label": "Role-Based IAM",
      "desc": "Least-privilege operational access tokens"
    },
    {
      "label": "Audit Traceability",
      "desc": "Cryptographically sealed immutable execution logs"
    },
    {
      "label": "Zero Public AI Retention",
      "desc": "Workflow payloads never shared"
    }
  ],
  "caseStudy": {
    "client": "Global Financial Services Institution",
    "industry": "Banking & Financial Services",
    "headline": "How Commercial Loan Onboarding Was Accelerated from 12 Days to 45 Minutes",
    "quote": "Workflow AI united our legacy core banking mainframe with modern cloud SaaS. What took 12 days of manual email handoffs now executes seamlessly in under an hour.",
    "author": "Head of Digital Transformation",
    "company": "Top-20 Global Bank",
    "image": "fintech_algorithmic_trading.jpg",
    "results": [
      {
        "stat": "95%",
        "label": "Reduction in loan origination cycle time"
      },
      {
        "stat": "450K",
        "label": "Transactions automated monthly"
      },
      {
        "stat": "$5.2M",
        "label": "Annual operational cost savings"
      }
    ]
  },
  "hero": {
    "badge": "PRODUCTIVITY // WORKFLOW AUTOMATION",
    "titleLight": "Intelligent Process Automation with",
    "titleBold": "Workflow AI",
    "description": "Connect legacy monoliths and modern cloud apps into resilient autonomous workflows. Workflow AI monitors events, coordinates multi-step operational tasks, and handles exceptions with human-in-the-loop safety.",
    "liveBadge": "v4.0 Production Ready",
    "bgImage": "heroBg"
  }
};
workflowaiData.hero.bgImage = heroBg;
workflowaiData.features[0].image = feat1Img || heroBg;
workflowaiData.features[1].image = feat2Img || heroBg;
workflowaiData.features[2].image = feat3Img || heroBg;
workflowaiData.features[3].image = feat4Img || heroBg;
workflowaiData.caseStudy.image = caseImg || heroBg;
