import heroBg from "../../assets/library/agent_sales_outreach.jpg";
import pipelineImg from "../../assets/unique_agents/sales_pipeline_velocity.jpg";
import intentImg from "../../assets/fresh/dashboard_customer_journey.jpg";
import coachImg from "../../assets/fresh/sales-growth-graph-on-laptop-screen-with-pointing-hand-illustrating-business-success-and-market-trend-photo.jpeg";
import crmImg from "../../assets/fresh/crm-software-platforms-hero-2026-1000x600.webp";
import caseImg from "../../assets/unique_agents/sales_agent_case.jpg";

export const salesAgentData = {
  id: "sales-agent",
  category: "Business Operations",
  name: "Sales Agent Swarm",
  tagline: "Autonomous Prospect Sourcing, Intent Scoring & Real-Time Deal Execution Swarms",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "High-Velocity Pipeline with",
    titleBold: "DevOpsTRIO Sales Agent",
    description: "Deploy autonomous sales swarms that detect buyer intent signals across 50+ data sources, synthesize hyper-personalized research outreach, coach reps on live calls, and execute CRM updates with zero friction.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 38,
      latency: "380ms",
      connectedTools: 14,
      autonomyScore: "99.2%"
    }
  },
  metrics: [
    { value: "4.8x", label: "Pipeline Velocity", sub: "Faster outbound-to-opportunity cycle" },
    { value: "68%", label: "Meeting Conversion", sub: "Higher reply & discovery booking rate" },
    { value: "< 5s", label: "CRM Auto-Sync", sub: "Instant call summary & field updates" },
    { value: "+34%", label: "Quota Attainment", sub: "Average rep revenue improvement" }
  ],
  overview: {
    heading: "The Autonomous Revenue Engine for Enterprise Sales Teams",
    description: "Modern enterprise sales reps spend over 65% of their working hours on manual prospecting, CRM data hygiene, and pre-call research instead of selling.\n\nThe DevOpsTRIO Sales Agent operates as a collaborative swarm of specialized cognitive agents. It continuously tracks account intent vectors, drafts personalized multi-touch sequences, and guides deals through closing stages autonomously.",
    keyPoints: [
      "Continuous buyer intent scoring across social, technographic & hiring signals",
      "Hyper-personalized 1:1 outreach grounded in account pain points and SEC filings",
      "Real-time live call coaching with instant objection-handling battlecards",
      "Touchless Salesforce & HubSpot synchronization with bi-directional pipeline governance"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Signal Perception",
      role: "Intent Harvester",
      description: "Monitors 50+ real-time intent streams including LinkedIn hiring velocity, 10-K disclosures, tech stack changes, and web visitation spikes.",
      tech: "Graph Neural Networks & Technographic Webhooks"
    },
    {
      tier: "02",
      name: "Strategic Reasoning",
      role: "Deal Copilot",
      description: "Formulates account penetration plans, selects value propositions, calculates optimal pricing discounts, and generates bespoke multi-channel sequences.",
      tech: "Tree-of-Thought & Persona Embeddings"
    },
    {
      tier: "03",
      name: "Execution Gateway",
      role: "CRM & Outreach Mesh",
      description: "Executes verified multi-channel touches via Outreach, Apollo, and Gmail, updating opportunity stages and next steps across Salesforce in real time.",
      tech: "Bi-Directional REST & Sandboxed API Tokens"
    }
  ],
  capabilities: [
    {
      id: "prospecting",
      tag: "SOURCING",
      title: "Autonomous Account Sourcing",
      description: "Discovers high-propensity buying committees across target accounts and verifies work emails and direct phone lines.",
      features: [
        "Multi-modal intent ingestion from hiring boards, tech telemetry & funding events",
        "Automated buying committee mapping with verified contact credentials",
        "Dynamic ICP fit scoring updated every 6 hours",
        "4.8x higher qualified pipeline creation rate"
      ],
      image: pipelineImg,
      metricBadge: "4.8x Pipeline"
    },
    {
      id: "outreach",
      tag: "PERSONALIZATION",
      title: "Contextual Outreach Swarms",
      description: "Drafts hyper-tailored email sequences and LinkedIn messages referencing specific company initiatives and mutual connections.",
      features: [
        "Generates 1:1 custom copy referencing podcast quotes and quarterly earnings",
        "Multi-touch cadence coordination across email, LinkedIn, and phone scripts",
        "Adaptive response handling with autonomous objection triage",
        "68% increase in outbound meeting conversion"
      ],
      image: intentImg,
      metricBadge: "68% Response Rate"
    },
    {
      id: "coaching",
      tag: "CALL COPILOT",
      title: "Live Call & Deal Guidance",
      description: "Listens to live Zoom and Teams sales meetings, feeding reps competitive battlecards and pricing guidance in real time.",
      features: [
        "Sub-second competitive battlecard popups during prospect objections",
        "Automated MEDDPICC qualifying score calculation",
        "Live transcription with instant executive summary generation",
        "Reduces deal cycle length by an average of 42%"
      ],
      image: coachImg,
      metricBadge: "< 1s Battlecards"
    },
    {
      id: "crm-hygiene",
      tag: "AUTOMATION",
      title: "Zero-Touch CRM Hygiene",
      description: "Eliminates manual data entry by extracting action items, contacts, and forecast changes directly from call transcripts.",
      features: [
        "100% automated Salesforce & HubSpot deal field updating",
        "Cryptographically sealed audit trail for revenue compliance",
        "Automated stakeholder contact creation with role hierarchy",
        "Reclaims 12+ hours per week per account executive"
      ],
      image: crmImg,
      metricBadge: "100% Automated CRM"
    }
  ],
  comparison: [
    { metric: "Prospect Research", legacy: "45–60 mins per account (Manual)", agent: "Under 3 seconds (Autonomous Swarm)" },
    { metric: "Outbound Personalization", legacy: "Generic cold templates", agent: "Hyper-tailored 1:1 contextual copy" },
    { metric: "CRM Data Updates", legacy: "Skipped or delayed 2–3 days", agent: "Instant real-time sync after every touch" },
    { metric: "Call Objection Handling", legacy: "Rep memory or static PDFs", agent: "Live AI battlecards in < 1 second" },
    { metric: "Forecast Accuracy", legacy: "Subjective rep gut feel", agent: "Algorithmic multi-signal probability scoring" }
  ],
  interactiveDemo: {
    title: "Autonomous Revenue Studio",
    subtitle: "Observe the Sales Agent Swarm intercept buyer intent, build custom outreach, and sync CRM pipelines in real time.",
    scenarios: [
      {
        id: "intent-outreach",
        title: "Intent-Triggered Outbound",
        role: "Target: VP of Cloud Infra // Global Logistics Corp",
        executionTime: "4.2s",
        humanTime: "2 Days",
        status: "Completed",
        agentsInvolved: ["Intent Harvester", "Dossier Synthesizer", "Email Personalizer"],
        planSteps: [
          { step: "Detected hiring spike for 12 Kubernetes engineers on LinkedIn", time: "0.4s" },
          { step: "Parsed recent 10-K risk factor regarding legacy cloud costs", time: "1.1s" },
          { step: "Identified VP of Cloud Infra and verified direct enterprise email", time: "0.8s" },
          { step: "Generated personalized 3-step value pitch with FinOps ROI metrics", time: "1.2s" },
          { step: "Logged new Prospect & Opportunity stage in Salesforce CRM", time: "0.7s" }
        ],
        outcome: "Personalized sequence dispatched. Prospect clicked ROI deck within 14 minutes."
      },
      {
        id: "live-call-deal",
        title: "Live Call Deal Guidance",
        role: "Live Discovery Call // Enterprise FinTech ($180k ARR)",
        executionTime: "1.8s",
        humanTime: "3 Hours",
        status: "Completed",
        agentsInvolved: ["Speech Listener", "Battlecard Retriever", "CRM Sync Agent"],
        planSteps: [
          { step: "Ingested live audio stream: Prospect mentioned Datadog price objection", time: "0.2s" },
          { step: "Retrieved Datadog vs DevOpsTRIO comparative cost benchmark", time: "0.5s" },
          { step: "Pushed silent screen battlecard to rep with 3 key negotiation pivots", time: "0.4s" },
          { step: "Extracted 4 next-step deliverables and assigned to Solutions Architect", time: "0.7s" }
        ],
        outcome: "Objection successfully deflected. Demo scheduled for technical evaluation."
      },
      {
        id: "pipeline-forecast",
        title: "Predictive Pipeline Triage",
        role: "Q3 Enterprise Pipeline Review // 42 Mid-Flight Opportunities",
        executionTime: "6.4s",
        humanTime: "1 Week",
        status: "Completed",
        agentsInvolved: ["Forecast Auditor", "Engagement Tracker", "Executive Gateway"],
        planSteps: [
          { step: "Scanned email response velocity and stakeholder participation", time: "1.8s" },
          { step: "Flagged 3 stalled deals where champion changed employment", time: "2.1s" },
          { step: "Dispatched re-engagement playbooks and alternate contact cards", time: "1.4s" },
          { step: "Updated weighted pipeline forecast in Salesforce Revenue Cloud", time: "1.1s" }
        ],
        outcome: "Forecast adjusted with 98.4% predictive accuracy. Re-engagement actions triggered."
      }
    ]
  },
  integrations: [
    { name: "Salesforce CRM", type: "Bi-Directional Sync" },
    { name: "HubSpot", type: "Contact & Pipeline" },
    { name: "Outreach & Salesloft", type: "Cadence Execution" },
    { name: "Apollo & ZoomInfo", type: "B2B Contact Graph" },
    { name: "Gong & Chorus", type: "Call Telemetry" },
    { name: "Gmail & Outlook", type: "Email Concierge" }
  ],
  governance: [
    { label: "CAN-SPAM & GDPR Compliant", desc: "Automated opt-out and compliance guardrails" },
    { label: "Role-Based Token Scoping", desc: "Least-privilege CRM access credentials" },
    { label: "Zero PII Model Storage", desc: "Prospect personal data is never trained on" },
    { label: "Audited Email Volume Caps", desc: "Anti-spam rate limiting and domain protection" }
  ],
  caseStudy: {
    client: "Global Cloud Security SaaS",
    industry: "Enterprise Software",
    headline: "How a 450-Rep Enterprise SaaS Accelerated Outbound Pipeline by 4.8x in 90 Days",
    quote: "DevOpsTRIO Sales Agent gave our account executives their time back. Every rep now conducts discovery calls backed by instant intelligence.",
    author: "Chief Revenue Officer",
    company: "Publicly Traded SaaS Leader",
    image: caseImg,
    results: [
      { stat: "4.8x", label: "Increase in outbound pipeline" },
      { stat: "34%", label: "Higher quota attainment" },
      { stat: "$8.6M", label: "New ARR generated in 2 quarters" }
    ]
  }
};
