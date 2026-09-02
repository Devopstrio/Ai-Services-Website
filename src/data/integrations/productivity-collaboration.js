import heroBg from "../../assets/integrations/productivity_hero.jpg";
import msftImg from "../../assets/integrations/microsoft_teams_collab.jpg";
import googleImg from "../../assets/integrations/google_workspace_sync.jpg";
import slackImg from "../../assets/integrations/slack_automation_mesh.jpg";
import jiraImg from "../../assets/integrations/jira_confluence_agile.jpg";
import notionImg from "../../assets/integrations/notion_linear_knowledge.jpg";
import caseImg from "../../assets/integrations/enterprise_collab_case.jpg";

export const productivityCollaborationData = {
  id: "productivity-collaboration",
  category: "Integrations",
  name: "Productivity & Collaboration",
  tagline: "Bi-Directional Zero-Latency Connectors for Microsoft 365, Google Workspace, Slack & Jira",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // COLLABORATION MESH",
    subBadge: "REAL-TIME BI-DIRECTIONAL SYNC",
    titleLight: "Unify Your Modern Workspace with",
    titleBold: "DevOpsTRIO Productivity & Collaboration",
    description: "Connect your AI agent swarms seamlessly into Microsoft 365, Google Workspace, Slack, Jira, Notion, and Linear. Enable conversational triggers, automatic document indexing, and touchless cross-tool synchronization with sub-15ms webhook execution.",
    bgImage: heroBg,
    liveBadge: "Active Mesh: 99.999% Sync Fidelity",
    telemetry: {
      avgSyncLatency: "12ms",
      activeWebhooks: "140,000+",
      authProtocol: "OAuth 2.0 / OIDC",
      securityStandard: "SOC 2 Type II"
    }
  },
  stats: [
    { value: "< 15ms", label: "Webhook Sync Latency", sub: "Sub-second event propagation across SaaS tools" },
    { value: "50+ Connectors", label: "Pre-Built Native Integrations", sub: "Microsoft 365, Google Workspace, Slack, Atlassian" },
    { value: "99.999%", label: "Data Delivery Guarantee", sub: "Zero message loss with persistent dead-letter queues" },
    { value: "10M+", label: "Daily Synchronized Events", sub: "Handled seamlessly across Fortune 500 clusters" }
  ],
  connectors: [
    {
      id: "microsoft-365",
      name: "Microsoft 365 & Teams",
      category: "Enterprise Suite",
      badge: "Microsoft Graph API",
      image: msftImg,
      description: "Bi-directional integration across Outlook, Microsoft Teams, SharePoint, OneDrive, and Word with real-time Graph webhook listeners and Azure AD scope blinding.",
      protocols: ["Microsoft Graph REST API v1.0", "Azure AD OAuth 2.0", "Delta Sync Webhooks"],
      syncCapabilities: [
        "Real-time Teams bot message interception and dynamic adaptive card responses",
        "Continuous SharePoint document library indexing for AI knowledge retrieval",
        "Automated Outlook calendar meeting scheduling and inbox email triage"
      ],
      avgLatency: "11ms"
    },
    {
      id: "google-workspace",
      name: "Google Workspace",
      category: "Cloud Collaboration",
      badge: "Google Cloud APIs",
      image: googleImg,
      description: "Native synchronization with Google Drive, Gmail, Docs, Sheets, and Google Meet with zero-data-retention security and fine-grained OAuth permissions.",
      protocols: ["Google Drive Push Notifications", "Gmail REST API", "Google Service Accounts"],
      syncCapabilities: [
        "Instant vectorization of newly uploaded Google Drive PDFs and Sheets",
        "Real-time Google Meet audio transcript ingestion for automated action items",
        "Automated draft composition and label classification in Gmail"
      ],
      avgLatency: "14ms"
    },
    {
      id: "slack-discord",
      name: "Slack & Messaging Mesh",
      category: "Conversational Ops",
      badge: "Slack Block Kit / Socket Mode",
      image: slackImg,
      description: "Deploy interactive conversational AI agents directly into Slack public/private channels, supporting slash commands, modal forms, and dynamic thread state.",
      protocols: ["Slack Socket Mode", "Block Kit Dynamic Components", "OAuth 2.0 Bot Tokens"],
      syncCapabilities: [
        "Conversational workflow execution with interactive approval buttons",
        "Automatic channel knowledge synthesis and weekly summary generation",
        "Sub-second alert dispatch for PagerDuty and incident response bots"
      ],
      avgLatency: "9ms"
    },
    {
      id: "atlassian-suite",
      name: "Atlassian Jira & Confluence",
      category: "Issue Tracking & Knowledge",
      badge: "Atlassian Forge / REST v3",
      image: jiraImg,
      description: "Automate sprint planning, ticket triaging, bug reproduction, and documentation publishing across Jira Software, Jira Service Management, and Confluence.",
      protocols: ["Jira Webhooks v3", "Atlassian Forge Runtime", "CQL Full-Text Search"],
      syncCapabilities: [
        "Autonomous Jira issue creation from Slack threads and customer emails",
        "Automatic Confluence technical documentation generation from Git commits",
        "Predictive sprint velocity forecasting and story point estimation"
      ],
      avgLatency: "15ms"
    },
    {
      id: "notion-linear",
      name: "Notion & Linear",
      category: "Modern PM & Docs",
      badge: "GraphQL & Sync Engine",
      image: notionImg,
      description: "Seamless bi-directional sync between Notion structured databases, Linear developer cycles, and AI agent memory vectors.",
      protocols: ["Notion Database API", "Linear GraphQL Webhooks", "OAuth 2.0 PKCE"],
      syncCapabilities: [
        "Continuous sync of engineering roadmaps between Linear and Notion",
        "Autonomous PR linkage and automated ticket state transitions",
        "Structured knowledge base search with inline citations"
      ],
      avgLatency: "12ms"
    },
    {
      id: "box-dropbox",
      name: "Box & Enterprise Storage",
      category: "Content Cloud",
      badge: "Box Enterprise API",
      image: heroBg,
      description: "Secure ingestion and OCR processing of high-volume corporate document repositories stored across Box, Dropbox, and cloud file systems.",
      protocols: ["Box Webhooks v2", "OAuth 2.0 JWT Grant", "Chunked File Upload REST"],
      syncCapabilities: [
        "Encrypted multi-modal OCR extraction for 500+ page enterprise contracts",
        "Automated document classification and metadata tagging in Box",
        "Immutable compliance audit logs for SEC and GDPR regulatory mandates"
      ],
      avgLatency: "18ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Live Webhook & Sync Studio",
    subtitle: "Select a cross-platform productivity trigger below to observe real-time payload transformation, cryptographic verification, and target system execution.",
    scenarios: [
      {
        id: "slack-to-jira",
        title: "Slack Directive ➔ Jira Issue & Branch Creation",
        trigger: "Slack message: '@agent create high-priority bug for SSO login timeout on mobile iOS'",
        sourceApp: "Slack Enterprise Grid",
        targetApp: "Jira Software Cloud",
        executionTime: "118ms",
        status: "200 OK — Issue ENG-4921 Created",
        payload: {
          event_type: "app_mention",
          channel: "C084F819A",
          user: "U94821",
          intent: "CREATE_JIRA_ISSUE",
          extracted_entities: {
            project: "ENG",
            priority: "Highest",
            summary: "SSO login timeout on mobile iOS",
            component: "Auth-Mobile",
            assignee: "Auto-Assigned (Identity Pod)"
          },
          target_action: "jira.create_issue_and_branch",
          created_branch: "bugfix/ENG-4921-sso-timeout-ios"
        }
      },
      {
        id: "meet-to-asana",
        title: "Google Meet Transcript ➔ Asana Action Items Allocation",
        trigger: "Google Meet ended: 'Q3 Product Architecture & Sprint Alignment' (45 mins)",
        sourceApp: "Google Workspace Meet",
        targetApp: "Asana & Slack",
        executionTime: "240ms",
        status: "200 OK — 4 Action Items Dispatched",
        payload: {
          event_type: "meet_transcript_completed",
          meeting_id: "meet.google.com/xyz-abc-qrs",
          duration_minutes: 45,
          extracted_action_items: [
            { task: "Refactor Redis connection pool", assignee: "sarah@devopstrio.com", due: "2026-09-05" },
            { task: "Update OpenTelemetry span exporters", assignee: "alex@devopstrio.com", due: "2026-09-07" },
            { task: "Draft security whitepaper", assignee: "david@devopstrio.com", due: "2026-09-10" }
          ],
          slack_digest_posted: true,
          asana_project_id: "ASANA-PRJ-88102"
        }
      },
      {
        id: "drive-to-notion",
        title: "Google Drive Upload ➔ Notion Vector Ingestion",
        trigger: "New PDF uploaded: 'Global_Partner_Compliance_Framework_2026.pdf'",
        sourceApp: "Google Drive Enterprise",
        targetApp: "Notion & Vector DB",
        executionTime: "310ms",
        status: "200 OK — 48 Pages Vectorized",
        payload: {
          event_type: "drive_file_created",
          file_name: "Global_Partner_Compliance_Framework_2026.pdf",
          file_size_bytes: 4892011,
          ocr_extracted_pages: 48,
          notion_database_id: "NOTION-DB-9021",
          vector_embeddings_generated: 192,
          vector_index: "enterprise-knowledge-v4",
          pii_redacted: true
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "OAuth 2.0 & Granular Scope Blinding",
      desc: "Connectors request only minimal required read/write permissions. Customer tokens are encrypted with hardware HSM keys and automatically rotated."
    },
    {
      title: "End-to-End AES-256 & TLS 1.3 In-Transit",
      desc: "All webhook payloads and bi-directional API communications are encrypted in transit and at rest with zero plain-text data exposure."
    },
    {
      title: "Zero-Data-Retention (ZDR) Privacy Vault",
      desc: "Message contents and documents are processed in ephemeral memory without ever being cached on external public servers or used for model training."
    },
    {
      title: "Automated Rate-Limiting & Idempotency",
      desc: "Built-in token bucket rate limiters prevent API throttling across Microsoft Graph and Google Cloud, guaranteeing 100% reliable message delivery."
    }
  ],
  caseStudy: {
    client: "Global SaaS Enterprise (12,000 Employees)",
    industry: "Enterprise Cloud & Collaboration",
    headline: "How 12,000 Employees Saved 14.5 Hours per Month Using DevOpsTRIO's Bi-Directional Productivity Mesh",
    quote: "Integrating our AI agents directly into Slack, Google Workspace, and Jira eliminated manual status updates, meeting follow-ups, and ticket creation across our entire 1,500-person engineering department.",
    author: "Chief Information Officer",
    company: "Public Cloud Enterprise Software Leader",
    image: caseImg,
    results: [
      { stat: "14.5 Hrs", label: "Saved per employee every month" },
      { stat: "< 15ms", label: "Real-time webhook sync speed" },
      { stat: "100%", label: "Zero data delivery loss across 10M events" }
    ]
  }
};
