import heroBg from "../../assets/library/agent_hr_workforce.jpg";
import onboardImg from "../../assets/unique_agents/hr_talent_onboarding.jpg";
import policyImg from "../../assets/fresh/executive_boardroom_ai.jpg";
import skillImg from "../../assets/fresh/talent_intelligence_portal.jpg";
import retainImg from "../../assets/fresh/dashboard_executive_kpi.jpg";
import caseImg from "../../assets/unique_agents/hr_agent_case.jpg";

export const hragentData = {
  id: "hr-agent",
  category: "Business Operations",
  name: "HR Agent Swarm",
  tagline: "Autonomous Employee Lifecycle Orchestration & Real-Time HR Operations",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Enterprise HR Operations with",
    titleBold: "Devopstrio HR Agent",
    description: "Deploy an autonomous cognitive agent that executes end-to-end talent operations — from onboarding and policy resolution to retention intelligence — across Workday, ServiceNow, Okta, and Slack.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 42,
      latency: "420ms",
      connectedTools: 18,
      autonomyScore: "99.4%"
    }
  },
  metrics: [
    { value: "85%", label: "Task Deflection", sub: "Autonomous HR inquiry resolution" },
    { value: "< 2s", label: "Query Resolution", sub: "Instant policy & benefits answers" },
    { value: "99.4%", label: "Compliance Rate", sub: "Automated onboarding accuracy" },
    { value: "42%", label: "Turnover Reduced", sub: "Proactive retention intervention" }
  ],
  overview: {
    heading: "The Autonomous Digital Workforce for Modern HR",
    description: "Traditional HR operations are held back by fragmented tools, manual ticket queues, and reactive engagement. The Devopstrio HR Agent changes that.\n\nOperating as a collaborative swarm of specialized cognitive agents, it autonomously orchestrates complex workflows — from onboarding to retention — while enforcing enterprise guardrails at every step.",
    keyPoints: [
      "24/7 multi-lingual HR policy and benefits assistant",
      "Zero-touch employee onboarding and IT provisioning",
      "Real-time organizational skill graph from work artifacts",
      "Predictive flight-risk modeling with proactive interventions"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Perception Layer",
      role: "Sensory Ingestion",
      description: "Monitors conversational streams across Slack, Teams, and ServiceNow — extracting employee intent, sentiment, and authorization scope in real time.",
      tech: "Real-time SSE, Webhooks & NLU"
    },
    {
      tier: "02",
      name: "Reasoning Engine",
      role: "Cognitive Planner",
      description: "Formulates multi-step execution plans, queries policy vectors, evaluates compliance boundaries, and self-corrects paths before taking action.",
      tech: "ReAct Framework & Tree-of-Thought"
    },
    {
      tier: "03",
      name: "Execution Mesh",
      role: "Tool Gateway",
      description: "Executes verified, sandboxed API transactions across Workday, Okta, DocuSign, and payroll systems with cryptographic audit sealing.",
      tech: "OAuth 2.0 & Sandboxed Enclaves"
    }
  ],
  capabilities: [
    {
      id: "onboarding",
      tag: "LIFECYCLE",
      title: "Zero-Touch Onboarding",
      description: "From offer acceptance to Day-1 productivity in under 18 minutes — fully automated across all enterprise systems.",
      features: [
        "Automated contract generation & cryptographic sealing via DocuSign",
        "SSO, GitHub & corporate email provisioning via Okta & Entra ID",
        "Hardware procurement & delivery tracking via ServiceNow",
        "Personalized Day-1 orientation & buddy assignment"
      ],
      image: onboardImg,
      metricBadge: "99.8% Setup Rate"
    },
    {
      id: "policy",
      tag: "CONCIERGE",
      title: "24/7 Employee Concierge",
      description: "Answers intricate benefits, equity, leave, and compensation inquiries with verifiable citations from corporate policy.",
      features: [
        "Contextual responses grounded in employee level & location",
        "35+ languages with regional labor law compliance",
        "Direct calculation of leave balances & tax deductions",
        "85% deflection of tier-1 HR inquiries"
      ],
      image: policyImg,
      metricBadge: "< 2s Latency"
    },
    {
      id: "skillgraph",
      tag: "TALENT",
      title: "Enterprise Skill Graph",
      description: "Live taxonomy of competencies built from daily work artifacts — replacing static job descriptions with dynamic skill telemetry.",
      features: [
        "Live skill telemetry replacing outdated job descriptions",
        "Automated internal candidate matching for key vacancies",
        "3.2x higher internal promotion velocity",
        "Executive skill gap visualization dashboards"
      ],
      image: skillImg,
      metricBadge: "3.2x Velocity"
    },
    {
      id: "retention",
      tag: "PREDICTIVE",
      title: "Flight-Risk Intelligence",
      description: "Identifies early signals of burnout, compensation lag, and career plateauing to trigger proactive retention before it's too late.",
      features: [
        "Privacy-first aggregated sentiment & engagement metrics",
        "Automated compensation benchmarking against market indices",
        "Confidential retention dossiers for business unit leaders",
        "42% reduction in unplanned attrition"
      ],
      image: retainImg,
      metricBadge: "42% Less Turnover"
    }
  ],
  comparison: [
    { metric: "Onboarding", legacy: "8–14 days manual process", agent: "18 minutes, fully autonomous" },
    { metric: "Policy Inquiries", legacy: "24–48 hour ticket queue", agent: "Instant sub-second answers" },
    { metric: "IT Provisioning", legacy: "Multiple manual tickets", agent: "Zero-touch automated sync" },
    { metric: "Retention", legacy: "Reactive exit interviews", agent: "6-month proactive intervention" },
    { metric: "Audit Trail", legacy: "Scattered spreadsheets", agent: "Cryptographic sealed logs" }
  ],
  interactiveDemo: {
    title: "Agent Workflow Studio",
    subtitle: "See how the HR Agent autonomously executes complex operational goals across your enterprise stack.",
    scenarios: [
      {
        id: "onboard-exec",
        title: "Executive Onboarding",
        role: "VP of AI Engineering — London Office",
        executionTime: "12.4s",
        humanTime: "8 Days",
        status: "Completed",
        agentsInvolved: ["Onboarding Orchestrator", "Security Provisioner", "Hardware Logistics"],
        planSteps: [
          { step: "Ingest offer letter & verify compensation", time: "0.4s" },
          { step: "Generate UK employment agreement via DocuSign", time: "2.1s" },
          { step: "Provision Okta SSO & GitHub Enterprise seat", time: "3.2s" },
          { step: "Dispatch MacBook Pro M4 Max via ServiceNow", time: "4.8s" },
          { step: "Schedule executive syncs with CTO & team leads", time: "1.9s" }
        ],
        outcome: "100% zero-touch onboarding complete. All systems, equipment, and calendar invitations active."
      },
      {
        id: "retention-triage",
        title: "Flight-Risk Triage",
        role: "Cloud Architecture & SRE Cohort — 14 Engineers",
        executionTime: "8.2s",
        humanTime: "3 Weeks",
        status: "Dispatched",
        agentsInvolved: ["Talent Intelligence", "Compensation Analyzer", "Executive Gateway"],
        planSteps: [
          { step: "Scan tenure, compensation & project velocity", time: "1.2s" },
          { step: "Identified 2 engineers with 18% market lag", time: "2.4s" },
          { step: "Formulated retention: equity adjustment + lead role", time: "2.8s" },
          { step: "Dispatched confidential dossier to CHRO", time: "1.8s" }
        ],
        outcome: "Proactive retention dossier submitted. Estimated attrition prevention ROI: $360,000."
      },
      {
        id: "leave-calc",
        title: "Statutory Leave & Handover",
        role: "Senior Product Designer — Maternity Leave",
        executionTime: "4.6s",
        humanTime: "4 Days",
        status: "Approved",
        agentsInvolved: ["Benefits Calculator", "Sprint Handover Agent"],
        planSteps: [
          { step: "Parse statutory maternity + 16-week company top-up", time: "0.8s" },
          { step: "Calculate exact payroll pro-rata across Q4 2026", time: "1.4s" },
          { step: "Identify open Jira epics & assign handover buddy", time: "1.2s" },
          { step: "Dispatch confirmation to employee & manager", time: "1.2s" }
        ],
        outcome: "Leave scheduled with zero handover friction and 100% statutory compliance."
      }
    ]
  },
  integrations: [
    { name: "Workday HCM", type: "Bi-Directional Sync" },
    { name: "SAP SuccessFactors", type: "Employee Data" },
    { name: "ServiceNow HRSD", type: "IT & Hardware" },
    { name: "Okta & Entra ID", type: "Identity & SSO" },
    { name: "DocuSign", type: "Agreement Sealing" },
    { name: "Slack & Teams", type: "Agent Interface" }
  ],
  governance: [
    { label: "SOC 2 Type II & ISO 27001", desc: "Audited enterprise security controls" },
    { label: "Role-Based Agent Scoping", desc: "Least-privilege API access tokens" },
    { label: "EEOC & EU AI Act Compliant", desc: "Anti-bias & demographic blinding" },
    { label: "Zero Model Retention", desc: "Employee PII never stored or trained on" }
  ],
  caseStudy: {
    client: "Global FinTech Enterprise",
    industry: "Financial Services",
    headline: "12,000-Employee FinTech Reduced HR Ticket Backlogs by 82% in 60 Days",
    quote: "The Devopstrio HR Agent transformed our people operations. What used to take days of email handoffs now settles automatically in seconds.",
    author: "Global Head of People & Culture",
    company: "Publicly Traded FinTech Unicorn",
    image: caseImg,
    results: [
      { stat: "82%", label: "Ticket backlog reduction" },
      { stat: "18 Min", label: "Average onboarding cycle" },
      { stat: "$2.4M", label: "Annual labor unlocked" }
    ]
  }
};
