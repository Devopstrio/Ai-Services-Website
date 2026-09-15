import heroBg from "../../assets/library/agent_executive_assistant.jpg";
import scheduleImg from "../../assets/fresh/digital-workspace-with-data-analysis-visualization.jpg";
import briefingImg from "../../assets/fresh/executive_boardroom_ai.jpg";
import minutesImg from "../../assets/fresh/agent_meeting_notes.jpg";
import actionsImg from "../../assets/unique_agents/exec_assistant_case.jpg";
import caseImg from "../../assets/unique_agents/meeting_agent_case.jpg";

export const executiveAssistantData = {
  id: "executive-assistant",
  category: "Business Operations",
  name: "Executive Assistant Agent",
  tagline: "Digital Chief of Staff, Pre-Meeting Dossiers & Schedule Defense",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Supercharge Leadership Velocity with",
    titleBold: "Devopstrio Executive Assistant",
    description: "An autonomous digital Chief of Staff that compiles 60-second attendee briefing dossiers, transcribes executive board sessions, tracks cross-team action deliverables, and defends focus calendars proactively.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 26,
      latency: "280ms",
      connectedTools: 15,
      autonomyScore: "99.6%"
    }
  },
  metrics: [
    { value: "14+ Hrs", label: "Executive Time Reclaimed", sub: "Weekly administrative hours saved" },
    { value: "100%", label: "Action Item Tracking", sub: "Automated deliverable follow-through" },
    { value: "< 60s", label: "Pre-Meeting Dossiers", sub: "Instant attendee & context synthesis" },
    { value: "92%", label: "Calendar Defense Score", sub: "Automated focus block optimization" }
  ],
  overview: {
    heading: "The Autonomous Chief of Staff for C-Suite Leaders",
    description: "Enterprise executives lose over 15 hours every week to calendar conflicts, unstructured meeting notes, delayed follow-ups, and lack of pre-meeting intelligence.\n\nThe Devopstrio Executive Assistant functions as an always-on digital Chief of Staff. It coordinates calendars with high-priority stakeholders, researches meeting attendees, drafts context-rich briefing memos, and ensures executive decisions turn into tracked project deliverables immediately.",
    keyPoints: [
      "Autonomous 60-second attendee briefing dossiers with LinkedIn & company news",
      "Real-time executive meeting transcription, synthesis, and Jira/Asana task creation",
      "Proactive schedule defense blocking daily deep-work focus time",
      "Executive inbox triage categorizing critical stakeholder emails and drafting replies"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Context Perception",
      role: "Calendar & Inbound Listener",
      description: "Monitors Outlook and Google Calendars, incoming executive emails, and corporate news feeds to detect upcoming strategic obligations.",
      tech: "Calendar Webhooks, Graph API & Email Intent Embeddings"
    },
    {
      tier: "02",
      name: "Strategic Synthesis",
      role: "Chief of Staff Kernel",
      description: "Aggregates past email exchanges, CRM interactions, and executive priorities to create concise, high-impact briefing memos.",
      tech: "Recursive Summarization & Priority Vector Weighting"
    },
    {
      tier: "03",
      name: "Task & Deliverable Mesh",
      role: "Action Gateway",
      description: "Dispatches meeting recaps, assigns Jira/Linear deliverables to team leaders, and updates executive Kanban boards automatically.",
      tech: "OAuth 2.0 Project Connectors & Slack Webhooks"
    }
  ],
  capabilities: [
    {
      id: "briefing-dossiers",
      tag: "EXECUTIVE PREP",
      title: "Pre-Meeting Executive Briefing Dossiers",
      description: "Delivers a 1-page executive brief 10 minutes before every meeting, outlining attendee biographies, past company history, and key discussion goals.",
      features: [
        "Synthesizes LinkedIn profiles, recent press releases, and past email exchanges",
        "Highlights open opportunities and unresolved tickets with attendee's organization",
        "Suggests strategic conversational hooks and desired meeting outcomes",
        "Generates briefs in under 60 seconds automatically"
      ],
      image: briefingImg,
      metricBadge: "< 60s Dossiers"
    },
    {
      id: "calendar-defense",
      tag: "TIME OPTIMIZATION",
      title: "Intelligent Schedule & Focus Defense",
      description: "Negotiates meeting times autonomously with internal and external parties while strictly guarding executive deep-work focus blocks.",
      features: [
        "Resolves multi-party calendar scheduling conflicts with zero email ping-pong",
        "Enforces mandatory 3-hour daily deep-work focus buffers",
        "Automated travel time and time-zone buffer insertion",
        "Reclaims 14+ hours of executive bandwidth every week"
      ],
      image: scheduleImg,
      metricBadge: "14+ Hours Saved"
    },
    {
      id: "meeting-minutes",
      tag: "MEETING INTELLIGENCE",
      title: "Boardroom Transcription & Decision Synthesis",
      description: "Listens to executive committee sessions, generates structured board minutes, and extracts decisions with zero fluff.",
      features: [
        "Multi-speaker diarization with 99.4% speech-to-text precision",
        "Extracts formal board resolutions, votes, and strategic agreements",
        "Dispatches formatted executive summary to attendees within 2 minutes of meeting close",
        "100% confidential and encrypted on dedicated enterprise enclaves"
      ],
      image: minutesImg,
      metricBadge: "99.4% Accuracy"
    },
    {
      id: "action-tracker",
      tag: "ACCOUNTABILITY",
      title: "Autonomous Action Item Delegation",
      description: "Converts executive meeting commitments into assigned tasks in Jira, Asana, and Linear, tracking deadlines until completion.",
      features: [
        "Extracts owner, deadline, and success criteria for every action item",
        "Sends gentle automated Slack reminders to assignees before due dates",
        "Provides weekly executive accountability dashboards to the CEO / COO",
        "Eliminates dropped commitments and missed project milestones"
      ],
      image: actionsImg,
      metricBadge: "100% Task Delivery"
    }
  ],
  comparison: [
    { metric: "Pre-Meeting Research", legacy: "30–45 mins per meeting (Manual)", agent: "Automated 60-second briefing dossier" },
    { metric: "Meeting Notes & Recaps", legacy: "Delayed 1–2 days (often skipped)", agent: "Dispatched within 2 minutes of call end" },
    { metric: "Calendar Scheduling", legacy: "5 to 8 back-and-forth emails per booking", agent: "Instant 1-click autonomous booking" },
    { metric: "Action Item Follow-Through", legacy: "Forgotten in personal notebooks", agent: "Automated Jira/Asana task creation & tracking" },
    { metric: "Executive Focus Time", legacy: "Fragmented by back-to-back 30-min calls", agent: "Proactively defended deep-work blocks" }
  ],
  interactiveDemo: {
    title: "Executive Swarm Studio",
    subtitle: "Experience how the Executive Assistant prepares briefing dossiers, captures meeting decisions, and synchronizes deliverables across the company.",
    scenarios: [
      {
        id: "pre-meeting-prep",
        title: "Board & Investor Briefing",
        role: "Meeting: Q3 Board Review with Lead Investor (Sequoia Capital)",
        executionTime: "3.2s",
        humanTime: "2 Hours",
        status: "Dossier Delivered to Mobile",
        agentsInvolved: ["Context Harvester", "CRM Dossier Agent", "Mobile Push Gateway"],
        planSteps: [
          { step: "Queried Salesforce for partner interaction history and recent board memos", time: "0.6s" },
          { step: "Parsed Q3 financial metrics: 142% NRR, $14.2M ARR, and 72% Gross Margins", time: "0.9s" },
          { step: "Identified 2 key strategic discussion points: Europe expansion and Series C timeline", time: "0.9s" },
          { step: "Pushed 1-page structured briefing card to CEO Slack and Apple Watch", time: "0.8s" }
        ],
        outcome: "CEO entered board meeting fully briefed with up-to-date ARR and expansion metrics."
      },
      {
        id: "meeting-to-jira",
        title: "Executive Decision to Jira Delegation",
        role: "Post-Meeting Action: Product Strategy Alignment Session",
        executionTime: "2.4s",
        humanTime: "45 Mins",
        status: "Tasks Assigned & Synced",
        agentsInvolved: ["Audio Diarizer", "Action Item Extractor", "Jira API Mesh"],
        planSteps: [
          { step: "Processed 45-minute audio transcript of Product Strategy session", time: "0.8s" },
          { step: "Extracted commitment: 'VP of Eng to deliver SOC 2 audit scope by Friday'", time: "0.5s" },
          { step: "Created Jira Epic #ENG-9401 with Friday due date and assigned to VP of Eng", time: "0.6s" },
          { step: "Sent private Slack confirmation to CEO and calendar invite to VP of Eng", time: "0.5s" }
        ],
        outcome: "3 strategic deliverables assigned in Jira within 2.4s of meeting conclusion."
      },
      {
        id: "calendar-defense",
        title: "Autonomous Schedule Defense",
        role: "Incoming: 4 Competing Meeting Invites on Thursday Afternoon",
        executionTime: "1.8s",
        humanTime: "30 Mins",
        status: "Schedule Protected",
        agentsInvolved: ["Calendar Priority Classifier", "Focus Guard", "Google Calendar Gateway"],
        planSteps: [
          { step: "Evaluated 4 conflicting meeting requests against Thursday Focus Block rule", time: "0.4s" },
          { step: "Approved urgent Investor sync and offered alternative Friday slots for 3 internal catchups", time: "0.6s" },
          { step: "Preserved 3-hour contiguous deep-work block for Q4 Strategic Planning", time: "0.5s" },
          { step: "Updated calendar with color-coded priority markers", time: "0.3s" }
        ],
        outcome: "Executive focus time preserved. All 4 meeting stakeholders accommodated seamlessly."
      }
    ]
  },
  integrations: [
    { name: "Google Workspace & O365", type: "Calendar & Email" },
    { name: "Zoom & Microsoft Teams", type: "Live Audio Telemetry" },
    { name: "Jira & Linear", type: "Engineering Delegation" },
    { name: "Asana & Monday.com", type: "Operations Task Sync" },
    { name: "Slack & Apple Watch", type: "Executive Push Alerts" },
    { name: "Salesforce CRM", type: "Account History Sync" }
  ],
  governance: [
    { label: "Executive Confidentiality Enclave", desc: "Board-level encryption and zero-knowledge storage" },
    { label: "Zero Model Training", desc: "Executive voice and text notes are never cached" },
    { label: "Role-Based Calendar Scoping", desc: "Granular access limits for executive schedule data" },
    { label: "Biometric Approval Gate", desc: "Sensitive outbound emails require executive FaceID/TouchID confirmation" }
  ],
  caseStudy: {
    client: "Global Enterprise Technology Unicorn",
    industry: "Enterprise Software",
    headline: "How 45 C-Suite Executives at a $4B Unicorn Reclaimed 14+ Hours Every Week",
    quote: "Devopstrio Executive Assistant is like having a seasoned Chief of Staff in your pocket. Meeting prep and follow-ups happen instantly with zero dropped balls.",
    author: "Chief Executive Officer & Co-Founder",
    company: "Publicly Traded SaaS Enterprise",
    image: caseImg,
    results: [
      { stat: "14+ Hrs", label: "Reclaimed executive time per week" },
      { stat: "100%", label: "Meeting action item delivery" },
      { stat: "3.4x", label: "Faster leadership decision cycles" }
    ]
  }
};
