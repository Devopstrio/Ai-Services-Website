import heroBg from "../../assets/library/agent_meeting_notes.jpg";
import speechImg from "../../assets/fresh/agent_meeting_intelligence.jpg";
import taskImg from "../../assets/fresh/engineering_standup_meeting.jpg";
import syncImg from "../../assets/fresh/microsoft-teams-and-sharepoint-the-perfect-collaboration-bundle-01.webp";
import diarizationImg from "../../assets/unique_agents/meeting_transcript_hub.jpg";
import caseImg from "../../assets/unique_agents/meeting_agent_case.jpg";

export const meetingAgentData = {
  id: "meeting-agent",
  category: "Productivity",
  name: "Meeting Agent Swarm",
  tagline: "Multi-Speaker Transcription, Action Extraction & Project Handover Sync",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Zero-Friction Collaboration with",
    titleBold: "Devopstrio Meeting Agent",
    description: "Autonomous meeting agent that joins Zoom, Microsoft Teams, and Google Meet sessions, transcribes multi-speaker discussions with 99.6% accuracy, extracts decisions, and pushes Jira tasks automatically with zero human effort.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 38,
      latency: "220ms",
      connectedTools: 14,
      autonomyScore: "99.8%"
    }
  },
  metrics: [
    { value: "99.6%", label: "Transcription Accuracy", sub: "Multi-speaker voice diarization" },
    { value: "< 90s", label: "Recap Generation Speed", sub: "Instant post-meeting decision summaries" },
    { value: "100%", label: "Action Item Capture", sub: "Direct Jira, Linear & Asana sync" },
    { value: "5+ Hrs", label: "Weekly Engineering Time Saved", sub: "Eliminates manual meeting note-taking" }
  ],
  overview: {
    heading: "The Autonomous Meeting Intelligence & Action Execution Engine",
    description: "Teams spend hours in meetings every week, yet critical decisions and follow-ups are lost in fragmented personal notes and unrecorded discussions.\n\nThe Devopstrio Meeting Agent attends video conferences as a silent intelligent participant. It understands domain jargon, differentiates between speakers, synthesizes concise executive summaries, and turns verbal commitments into assigned, tracked project deliverables.",
    keyPoints: [
      "24/7 autonomous bot attendance on Zoom, Google Meet, and Microsoft Teams",
      "Advanced multi-speaker diarization understanding technical and industry jargon",
      "Instant 90-second executive summaries with key decisions, risks, and next steps",
      "Direct bi-directional synchronization with Jira, Asana, Linear, and Notion"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Acoustic Perception",
      role: "Audio Stream & Diarization Ingestor",
      description: "Captures multi-channel WebRTC audio feeds, identifying individual speaker voiceprints and separating overlapping speech.",
      tech: "Whisper Large-v3, Neural Speaker Diarization & Noise Gates"
    },
    {
      tier: "02",
      name: "Synthesis Kernel",
      role: "Semantic Decision Parser",
      description: "Filters conversational banter to isolate key decisions, unresolved debates, budget approvals, and assignee commitments.",
      tech: "Domain-Tuned Summarizers & Intent Classifiers"
    },
    {
      tier: "03",
      name: "Project Mesh",
      role: "Task Delegation Gateway",
      description: "Dispatches formatted meeting recaps to Slack channels and creates structured user stories in Jira, Linear, and Asana.",
      tech: "OAuth 2.0 Atlassian/Linear APIs & Slack Block Kit"
    }
  ],
  capabilities: [
    {
      id: "diarization",
      tag: "VOICE AI",
      title: "Multi-Speaker Voice Diarization",
      description: "Accurately identifies and labels each meeting attendee even during fast-paced, multi-party heated discussions.",
      features: [
        "Separates overlapping voices with 99.6% speaker attribution accuracy",
        "Supports 35+ international accents and multi-lingual code-switching",
        "Domain-tuned vocabulary for software engineering, finance, and medicine",
        "Zero-latency real-time closed captions during live calls"
      ],
      image: diarizationImg,
      metricBadge: "99.6% Accuracy"
    },
    {
      id: "action-extraction",
      tag: "TASK DELEGATION",
      title: "Autonomous Action Item Extraction",
      description: "Extracts verbal commitments (e.g. 'I'll have the PR ready by Tuesday') and creates structured tasks with assignees and due dates.",
      features: [
        "Extracts clear task descriptions, owners, and explicit/implicit deadlines",
        "Maps mentioned dependencies directly to existing Jira Epics",
        "Dispatches Slack confirmation cards to assignees for 1-click approval",
        "100% action item capture rate with zero dropped commitments"
      ],
      image: taskImg,
      metricBadge: "100% Action Sync"
    },
    {
      id: "decision-recap",
      tag: "EXECUTIVE SYNTHESIS",
      title: "90-Second Executive Meeting Summaries",
      description: "Delivers a 3-paragraph executive brief to Slack and email within 90 seconds of meeting adjournment, highlighting core decisions.",
      features: [
        "Structured format: Key Decisions Made, Open Risks, and Next Steps",
        "Interactive audio timeline clips linked to specific discussion points",
        "Suppresses small talk and non-relevant conversational digressions",
        "Reclaims 5+ hours per week of manual note-taking overhead"
      ],
      image: speechImg,
      metricBadge: "< 90s Recaps"
    },
    {
      id: "cross-meeting-memory",
      tag: "PROJECT CONTINUITY",
      title: "Cross-Meeting Project Memory",
      description: "Connects recurring sprint standups, quarterly business reviews, and 1-on-1s into an overarching project knowledge graph.",
      features: [
        "Checks status of previous meeting action items at the start of new sessions",
        "Tracks recurring organizational blockers across multiple project teams",
        "Searchable archive across all past company meeting transcripts",
        "Complete enterprise encryption with role-based access control"
      ],
      image: syncImg,
      metricBadge: "Living Project Memory"
    }
  ],
  comparison: [
    { metric: "Meeting Note-Taking", legacy: "Manual (Distracts attendees from discussing)", agent: "100% Autonomous background transcription" },
    { metric: "Recap Delivery Time", legacy: "1 to 2 Days (or never sent)", agent: "Dispatched to Slack in under 90 seconds" },
    { metric: "Action Item Capture", legacy: "Lost in scattered notebook scribbles", agent: "Automatically created & assigned in Jira/Linear" },
    { metric: "Speaker Attribution", legacy: "Unlabeled audio recordings", agent: "Exact speaker diarization and quote timestamps" },
    { metric: "Historical Search", legacy: "Impossible (Audio files unindexed)", agent: "Fully indexed semantic transcript search" }
  ],
  interactiveDemo: {
    title: "Meeting Swarm Studio",
    subtitle: "Observe the Meeting Agent process a simulated 30-minute Sprint Planning session, identify action items, and push tasks to Jira in real time.",
    scenarios: [
      {
        id: "sprint-planning",
        title: "Sprint Planning Action Extraction",
        role: "Meeting: Engineering Sprint 42 Planning (6 Participants)",
        executionTime: "2.4s",
        humanTime: "45 Mins",
        status: "4 Jira Tasks Created",
        agentsInvolved: ["Audio Diarizer", "Action Item Extractor", "Jira API Mesh"],
        planSteps: [
          { step: "Processed 30-minute audio stream, identifying 6 individual engineering speaker tracks", time: "0.6s" },
          { step: "Extracted decision: 'Migrate auth service to OAuth 2.0 PKCE in Sprint 42'", time: "0.6s" },
          { step: "Identified commitment: 'Alex to create Redis caching layer benchmarks by Thursday'", time: "0.6s" },
          { step: "Created 4 linked Jira user stories under Epic #ENG-402 and sent Slack recap", time: "0.6s" }
        ],
        outcome: "Meeting recap delivered to #eng-team Slack in 2.4s with 4 assigned Jira issues."
      },
      {
        id: "board-review",
        title: "Executive Board Session Synthesis",
        role: "Meeting: Q3 Executive Leadership Review (Confidential)",
        executionTime: "3.2s",
        humanTime: "2 Hours",
        status: "Board Minutes Delivered",
        agentsInvolved: ["Confidential Audio Enclave", "Executive Synthesizer", "PDF Publisher"],
        planSteps: [
          { step: "Processed encrypted audio stream inside dedicated enterprise security enclave", time: "0.8s" },
          { step: "Extracted formal resolutions: 2027 Budget Approval & European Expansion Plan", time: "1.0s" },
          { step: "Generated formatted PDF Board Minutes with attendee roll call and voting records", time: "0.8s" },
          { step: "Dispatched encrypted document to board member email inboxes", time: "0.6s" }
        ],
        outcome: "Formal board minutes generated and delivered to directors with zero human delay."
      },
      {
        id: "sales-handover",
        title: "Sales Discovery to Solutions Architect Handover",
        role: "Meeting: Enterprise Client Discovery Call ($220k ARR)",
        executionTime: "2.1s",
        humanTime: "1 Hour",
        status: "Solutions Brief Generated",
        agentsInvolved: ["Customer Need Extractor", "Architecture Mapper", "HubSpot Gateway"],
        planSteps: [
          { step: "Identified customer technical requirements: Kubernetes on-prem, SAML SSO, and SOC 2", time: "0.5s" },
          { step: "Extracted customer budget timeline (Target deployment: Q4 2026)", time: "0.5s" },
          { step: "Generated structured Solutions Architecture Brief for post-sales team", time: "0.6s" },
          { step: "Attached transcript highlights and deal notes to HubSpot Opportunity card", time: "0.5s" }
        ],
        outcome: "Solutions architect briefed instantly with zero sales rep note-taking overhead."
      }
    ]
  },
  integrations: [
    { name: "Zoom & Zoom Rooms", type: "Video Conferencing Bot" },
    { name: "Microsoft Teams", type: "Enterprise Collaboration" },
    { name: "Google Meet", type: "Workspace Video Sync" },
    { name: "Jira & Linear", type: "Task & Sprint Sync" },
    { name: "Slack & Teams Channels", type: "Recap Push Notifications" },
    { name: "Notion & Confluence", type: "Knowledge Repository" }
  ],
  governance: [
    { label: "End-to-End Audio Encryption", desc: "TLS 1.3 audio stream ingestion with zero local caching" },
    { label: "Zero Public Model Training", desc: "Private meeting audio and transcripts are never trained on" },
    { label: "Attendee Consent Banners", desc: "Automated recording consent announcements for compliance" },
    { label: "Role-Based Transcript Access", desc: "Confidential meeting notes restricted by Active Directory groups" }
  ],
  caseStudy: {
    client: "Global Software Engineering Enterprise",
    industry: "Enterprise Technology",
    headline: "How an 800-Person Engineering Org Reclaimed 5+ Hours per Engineer Every Week with Automated Meeting Sync",
    quote: "Devopstrio Meeting Agent eliminated our post-meeting alignment overhead. Our engineers leave meetings knowing every action item is already tracked in Jira.",
    author: "VP of Engineering Operations",
    company: "Publicly Traded SaaS Enterprise",
    image: caseImg,
    results: [
      { stat: "99.6%", label: "Transcription & diarization accuracy" },
      { stat: "5+ Hrs", label: "Weekly time saved per engineer" },
      { stat: "100%", label: "Action item accountability" }
    ]
  }
};
