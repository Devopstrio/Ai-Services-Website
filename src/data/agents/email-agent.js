import heroBg from "../../assets/library/product_mailtab_inbox.jpg";
import triageImg from "../../assets/unique_agents/email_inbox_triage.jpg";
import draftImg from "../../assets/fresh/digital-workspace-with-data-analysis-visualization.jpg";
import scheduleImg from "../../assets/fresh/microsoft-teams-and-sharepoint-the-perfect-collaboration-bundle-01.webp";
import followImg from "../../assets/unique_agents/meeting_transcript_hub.jpg";
import caseImg from "../../assets/unique_agents/email_agent_case.jpg";

export const emailAgentData = {
  id: "email-agent",
  category: "Productivity",
  name: "Email Agent Swarm",
  tagline: "Smart Inbox Triage, Executive Draft Generation & Commitment Tracking",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Inbox Zero on Autopilot with",
    titleBold: "DevOpsTRIO Email Agent",
    description: "Autonomous email agent that filters incoming messages by business urgency, synthesizes context-aligned reply drafts, extracts action items, and schedules meetings without human delays.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 42,
      latency: "250ms",
      connectedTools: 12,
      autonomyScore: "99.7%"
    }
  },
  metrics: [
    { value: "80%", label: "Inbox Time Cut", sub: "Automated triage & draft generation" },
    { value: "< 5s", label: "Email Triage Speed", sub: "Instant priority classification" },
    { value: "96%", label: "Draft Acceptance Rate", sub: "One-click executive send rate" },
    { value: "100%", label: "Zero Missed Follow-ups", sub: "Automated commitment reminders" }
  ],
  overview: {
    heading: "The Autonomous Digital Email Concierge for Busy Professionals",
    description: "Knowledge workers spend over 3 hours every day drowning in email newsletters, calendar requests, vendor pitches, and buried customer emergencies.\n\nThe DevOpsTRIO Email Agent acts as an intelligent executive gatekeeper. It prioritizes urgent messages from key clients and leadership, drafts nuanced contextual responses matching your tone, tracks promises made in outgoing threads, and organizes calendar bookings autonomously.",
    keyPoints: [
      "24/7 intelligent inbox triage filtering newsletters, spam, and urgent client requests",
      "Context-aware reply draft generation matching your authentic personal communication tone",
      "Automated calendar scheduling links and direct meeting invite coordination",
      "Commitment tracking engine that alerts you when someone owes you a response"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Inbound Perception",
      role: "Email & Thread Listener",
      description: "Monitors Gmail and Outlook IMAP/Graph streams in real time, extracting thread history, sender relationship strength, and intent.",
      tech: "Microsoft Graph API, Gmail Pub/Sub & NLP Intent Parsers"
    },
    {
      tier: "02",
      name: "Context & Tone Kernel",
      role: "Draft Synthesis Engine",
      description: "Cross-references company knowledge, CRM deals, and past sent emails to generate authentic, personalized reply drafts.",
      tech: "Few-Shot Tone Adaptation & Contextual RAG"
    },
    {
      tier: "03",
      name: "Mailbox Mesh",
      role: "Action & Dispatch Gateway",
      description: "Applies labels, archives newsletters, prepares drafts in outbox, and sends calendar invites with user approval.",
      tech: "OAuth 2.0 Mailbox Tokens & Sandboxed Draft Staging"
    }
  ],
  capabilities: [
    {
      id: "smart-triage",
      tag: "INBOX MANAGEMENT",
      title: "Intelligent Urgency Triage",
      description: "Sorts incoming emails into structured categories: Urgent Client, Internal Leadership, Needs Reply, and FYI/Newsletters.",
      features: [
        "Identifies high-value enterprise clients and urgent contract requests instantly",
        "Auto-archives marketing blasts and cold vendor prospecting emails",
        "Generates a 3-bullet morning briefing of messages requiring your personal attention",
        "Reduces daily email management time by up to 80%"
      ],
      image: triageImg,
      metricBadge: "80% Time Cut"
    },
    {
      id: "draft-generation",
      tag: "DRAFT SYNTHESIS",
      title: "Context-Aware Reply Drafting",
      description: "Drafts nuanced, professional email replies ready in your drafts folder, referencing relevant project context and attached files.",
      features: [
        "Adapts to your authentic vocabulary, greeting style, and sign-off patterns",
        "Pulls answers from company documentation and recent meeting notes",
        "Generates polite declines for unaligned vendor outreach",
        "96% of generated drafts accepted with minor or zero edits"
      ],
      image: draftImg,
      metricBadge: "96% Draft Acceptance"
    },
    {
      id: "calendar-scheduler",
      tag: "SCHEDULING",
      title: "Autonomous Calendar Scheduling",
      description: "Reads incoming meeting requests, proposes available time slots, and sends Google/Outlook calendar invites automatically.",
      features: [
        "Resolves multi-timezone scheduling without back-and-forth email loops",
        "Enforces your personal meeting buffer rules and focus time blocks",
        "Attaches Zoom or Teams video links automatically to confirmed invites",
        "Eliminates the friction of sending external calendar booking links"
      ],
      image: scheduleImg,
      metricBadge: "Zero Scheduling Ping-Pong"
    },
    {
      id: "commitment-tracker",
      tag: "FOLLOW-UP DEFENSE",
      title: "Proactive Follow-Up & Commitment Guard",
      description: "Scans outgoing messages for commitments ('I'll send the contract by Friday') and alerts you if a recipient hasn't replied.",
      features: [
        "Tracks unanswered questions sent to external vendors and clients",
        "Drafts gentle follow-up nudges after 3 business days of silence",
        "Maintains a living dashboard of promises made across all active threads",
        "100% follow-through on business commitments"
      ],
      image: followImg,
      metricBadge: "100% Follow-Through"
    }
  ],
  comparison: [
    { metric: "Daily Inbox Triage", legacy: "2 to 3 hours reading messy inboxes", agent: "Under 15 minutes reviewing prioritized drafts" },
    { metric: "Email Drafting Speed", legacy: "10 to 15 mins per nuanced reply", agent: "1-Click approval of AI synthesized drafts" },
    { metric: "Meeting Scheduling", legacy: "5 to 8 back-and-forth emails per booking", agent: "Instant automated slot proposition & invite sync" },
    { metric: "Follow-Up Tracking", legacy: "Forgotten in overflowing sent folder", agent: "Autonomous tracking and reminder alerts" },
    { metric: "Newsletter & Spam Clutter", legacy: "Crowds out urgent customer messages", agent: "Auto-categorized & filed away safely" }
  ],
  interactiveDemo: {
    title: "Email Swarm Control Studio",
    subtitle: "Experience how the Email Agent intercepts high-priority client messages, generates context-grounded drafts, and handles meeting invites in real time.",
    scenarios: [
      {
        id: "client-urgent-draft",
        title: "Enterprise Client SLA Inquiry",
        role: "Incoming: VP of Tech at Key Client // Inquiring on SOC 2 Report",
        executionTime: "1.8s",
        humanTime: "20 Mins",
        status: "Draft Ready in Inbox",
        agentsInvolved: ["Priority Classifier", "Knowledge Retriever", "Draft Synthesizer"],
        planSteps: [
          { step: "Identified high-priority message from Tier-1 Client ($480k ARR account)", time: "0.3s" },
          { step: "Retrieved updated 2026 SOC 2 Type II compliance report link from internal drive", time: "0.5s" },
          { step: "Synthesized warm, professional reply draft with report attachment and executive sign-off", time: "0.6s" },
          { step: "Placed draft into user's Gmail Drafts folder and dispatched 1-click Slack prompt", time: "0.4s" }
        ],
        outcome: "Contextual reply ready in drafts in 1.8s. 1-click to review and send."
      },
      {
        id: "schedule-booking",
        title: "Autonomous Meeting Scheduling",
        role: "Incoming: Partner at VC Firm // Requesting 30-min Catchup",
        executionTime: "1.4s",
        humanTime: "15 Mins",
        status: "Calendar Invite Dispatched",
        agentsInvolved: ["Calendar Availability Checker", "Slot Proposer", "Google Calendar Gateway"],
        planSteps: [
          { step: "Parsed incoming email intent: 'Let's catch up for 30 mins next Wednesday or Thursday afternoon'", time: "0.3s" },
          { step: "Checked Google Calendar: Identified free slots on Wednesday at 2:00 PM and Thursday at 3:30 PM", time: "0.4s" },
          { step: "Drafted polite response proposing both times with automatic calendar hold blocks", time: "0.4s" },
          { step: "Prepared draft in Outlook for immediate confirmation", time: "0.3s" }
        ],
        outcome: "Optimal meeting slots proposed in 1.4 seconds with zero calendar conflicts."
      },
      {
        id: "followup-nudge",
        title: "Unanswered Vendor Contract Nudge",
        role: "Thread: Pending Signature on Cloud Renewal ($84k Value)",
        executionTime: "1.2s",
        humanTime: "10 Mins",
        status: "Follow-Up Draft Created",
        agentsInvolved: ["Thread Aging Monitor", "Tone Balancer", "Mailbox Gate"],
        planSteps: [
          { step: "Detected 4 business days elapsed without reply from vendor legal contact", time: "0.3s" },
          { step: "Referenced original message context and upcoming renewal deadline", time: "0.3s" },
          { step: "Drafted polite, concise follow-up nudge asking if additional information is needed", time: "0.3s" },
          { step: "Surfaced reminder card to user in morning email digest", time: "0.3s" }
        ],
        outcome: "Follow-up nudge prepared automatically, keeping contract on schedule."
      }
    ]
  },
  integrations: [
    { name: "Google Workspace & Gmail", type: "Mailbox & Pub/Sub" },
    { name: "Microsoft 365 & Outlook", type: "Graph API & Exchange" },
    { name: "Google & Outlook Calendar", type: "Event Synchronization" },
    { name: "HubSpot & Salesforce", type: "CRM Email Logging" },
    { name: "Slack & Microsoft Teams", type: "Urgent Push Notifications" },
    { name: "Superhuman & Spark", type: "Client Application Sync" }
  ],
  governance: [
    { label: "Zero Autonomous Outbound Sending", desc: "Agent creates drafts; human maintains final send approval" },
    { label: "Zero Public Model Training", desc: "Private email communications are never stored or trained on" },
    { label: "Bank-Grade Mailbox Encryption", desc: "OAuth 2.0 scoped tokens with TLS 1.3 encryption" },
    { label: "Sensitive Data Redaction", desc: "Passwords, credit card numbers, and PII automatically masked" }
  ],
  caseStudy: {
    client: "Global Venture Capital & Advisory Firm",
    industry: "Financial Services & Venture",
    headline: "How 80 Partners at a Global Venture Firm Cut Email Overhead by 80% and Never Dropped a Deal Follow-Up",
    quote: "DevOpsTRIO Email Agent is like having a full-time executive assistant managing your inbox. My response time improved by 4x while my daily email time dropped from 3 hours to 20 minutes.",
    author: "Managing Partner",
    company: "Global Venture Capital Group",
    image: caseImg,
    results: [
      { stat: "80%", label: "Reduction in daily email time" },
      { stat: "96%", label: "Draft acceptance rate without edits" },
      { stat: "100%", label: "On-time commitment follow-through" }
    ]
  }
};
