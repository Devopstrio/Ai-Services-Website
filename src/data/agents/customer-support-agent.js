import heroBg from "../../assets/library/agent_support_triage.jpg";
import triageImg from "../../assets/fresh/support_ticket_automation.jpg";
import omniImg from "../../assets/unique_agents/customer_cx_triage.jpg";
import actionsImg from "../../assets/fresh/remote-it-support-provider-2.webp";
import escalationImg from "../../assets/fresh/dashboard_cyber_soc.jpg";
import caseImg from "../../assets/unique_agents/support_agent_case.jpg";

export const customerSupportAgentData = {
  id: "customer-support-agent",
  category: "Business Operations",
  name: "Customer Support Agent Swarm",
  tagline: "24/7 Omnichannel Resolution, Transactional Actions & Smart Escalation",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Delightful 24/7 Resolution with",
    titleBold: "DevOpsTRIO Support Agent",
    description: "Resolve up to 85% of tier-1 and tier-2 customer tickets autonomously across web chat, email, voice, and WhatsApp. Autonomous agents execute database actions, process refunds, diagnose API errors, and brief human specialists seamlessly.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 54,
      latency: "290ms",
      connectedTools: 22,
      autonomyScore: "99.5%"
    }
  },
  metrics: [
    { value: "85%", label: "First-Contact Resolution", sub: "Fully autonomous ticket closure" },
    { value: "< 2s", label: "Average Response Time", sub: "Instant multi-lingual answers" },
    { value: "4.9/5", label: "Customer CSAT Score", sub: "Verified user satisfaction rating" },
    { value: "72%", label: "Support Cost Reduction", sub: "Lower tier-1 operational overhead" }
  ],
  overview: {
    heading: "The Autonomous Digital Support Team for Modern Enterprises",
    description: "Traditional customer support operations are burdened by slow escalation queues, fragmented customer history, and repetitive tier-1 ticket backlogs.\n\nThe DevOpsTRIO Customer Support Agent operates as a collaborative swarm of specialized cognitive agents. Equipped with deterministic tool mesh APIs, it doesn't just generate text answers—it securely interacts with billing databases, order tracking, authentication systems, and cloud APIs to solve customer problems on the spot.",
    keyPoints: [
      "24/7 multi-lingual omnichannel support across chat, email, Zendesk, and voice",
      "Deterministic database actions: process refunds, re-issue licenses, reset credentials",
      "Semantic root-cause clustering that pinpoints product bugs in real time",
      "Context-rich human handoffs with 3-sentence situation dossiers when escalations occur"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Perception & Sentiment",
      role: "Omnichannel Listener",
      description: "Ingests messages across Zendesk, Intercom, Slack, and email, evaluating customer sentiment, intent classification, and urgency vectors.",
      tech: "Real-Time WebSockets, NLU & Sentiment Embeddings"
    },
    {
      tier: "02",
      name: "Reasoning & Policy",
      role: "Resolution Engine",
      description: "Formulates resolution workflows, checks warranty and SLA entitlement policies, and determines required tool actions.",
      tech: "ReAct Framework & Grounded Knowledge Graph"
    },
    {
      tier: "03",
      name: "Transactional Gateway",
      role: "Execution Mesh",
      description: "Executes verified transactions across Stripe, PostgreSQL, Okta, and shipping carriers with cryptographically signed logs.",
      tech: "Scoped OAuth 2.0 & Sandboxed API Enclaves"
    }
  ],
  capabilities: [
    {
      id: "instant-triage",
      tag: "TRIAGE & RESOLVE",
      title: "Zero-Latency Inquiry Resolution",
      description: "Instantly answers complex billing, configuration, and product questions with citations from your live knowledge base and docs.",
      features: [
        "Resolves tier-1 queries in under 2 seconds with 99.4% factual accuracy",
        "Supports 45+ international languages with native colloquial fluency",
        "Dynamic citation linking to authoritative documentation pages",
        "85% deflection of repetitive inquiry tickets"
      ],
      image: triageImg,
      metricBadge: "< 2s Response"
    },
    {
      id: "transactional-actions",
      tag: "DATABASE ACTIONS",
      title: "Autonomous Transaction Execution",
      description: "Performs real-time account modifications, license upgrades, invoice regeneration, and payment retries safely within defined limits.",
      features: [
        "Direct integration with Stripe, Chargebee, and ERP billing ledgers",
        "Automated credential and MFA reset via Okta / Entra ID verification",
        "Courier package rerouting via FedEx and DHL webhooks",
        "Zero human intervention required for standard transactional requests"
      ],
      image: actionsImg,
      metricBadge: "100% Automated Actions"
    },
    {
      id: "omnichannel-sync",
      tag: "OMNICHANNEL",
      title: "Omnichannel Conversation Memory",
      description: "Maintains a unified customer memory graph across email, phone calls, mobile app chat, and social direct messages.",
      features: [
        "Persistent cross-channel context eliminating customer repetition",
        "Full conversation timeline synchronization across Zendesk & Salesforce",
        "Real-time voice-to-action transcription during incoming calls",
        "4.9 / 5.0 average customer satisfaction (CSAT) rating"
      ],
      image: omniImg,
      metricBadge: "4.9/5 CSAT"
    },
    {
      id: "smart-escalation",
      tag: "HANDOFF & TRIAGE",
      title: "Contextual Human Escalation",
      description: "When complex anomalies or edge cases arise, packages a 3-sentence summary, attempted diagnostics, and recommended solutions for Tier-3 engineers.",
      features: [
        "Automated VIP and enterprise SLA threshold detection",
        "Generates pre-filled diagnostic tickets for specialized engineering teams",
        "Zero context loss during smooth agent-to-human transitions",
        "Reduces average human handling time by 64%"
      ],
      image: escalationImg,
      metricBadge: "64% Faster Handling"
    }
  ],
  comparison: [
    { metric: "First Response Time", legacy: "4 to 12 Hours (Ticket queue)", agent: "Sub-Second (< 2s instant response)" },
    { metric: "Issue Resolution", legacy: "Back-and-forth emails over 2 days", agent: "Single-session autonomous fix" },
    { metric: "Transactional Capability", legacy: "Human agent manual clicks in 5 tools", agent: "Deterministic API tool execution" },
    { metric: "Omnichannel Continuity", legacy: "Siloed tickets across channels", agent: "Unified persistent customer memory" },
    { metric: "Escalation Efficiency", legacy: "Customer must repeat story", agent: "Instant 3-sentence context dossier" }
  ],
  interactiveDemo: {
    title: "Support Swarm Simulator",
    subtitle: "Trigger real-world support inquiries to watch the agent swarm triage sentiment, query internal systems, and execute transactional actions in real time.",
    scenarios: [
      {
        id: "billing-refund",
        title: "Enterprise Overcharge Triage",
        role: "User: Enterprise Customer // Duplicate Charge ($1,450)",
        executionTime: "3.4s",
        humanTime: "2 Days",
        status: "Resolved",
        agentsInvolved: ["Sentiment Listener", "Stripe Gateway Agent", "Audit Logger"],
        planSteps: [
          { step: "Ingested high-urgency message regarding double-billing on annual subscription", time: "0.2s" },
          { step: "Queried Stripe API for Customer ID #CUST-9821 and verified duplicate invoice #INV-4019", time: "0.8s" },
          { step: "Evaluated enterprise refund policy guardrails (Authorized cap: $5,000)", time: "0.5s" },
          { step: "Executed Stripe.refundPayment(id='ch_3N92k...', amount=145000, reason='duplicate')", time: "1.2s" },
          { step: "Dispatched confirmation email with PDF credit note and updated Zendesk ticket", time: "0.7s" }
        ],
        outcome: "Duplicate invoice refunded automatically in 3.4s with 100% audit compliance."
      },
      {
        id: "api-debug",
        title: "Developer API Key Outage",
        role: "User: Lead Architect // Webhook Delivery 500 Error",
        executionTime: "4.8s",
        humanTime: "4 Hours",
        status: "Resolved",
        agentsInvolved: ["Technical Diagnostics", "Log Correlator", "Security Mesh"],
        planSteps: [
          { step: "Parsed developer error log snippet from chat: 'Webhook signature verification failed'", time: "0.4s" },
          { step: "Queried Datadog endpoint health: Found expired HMAC secret key on client side", time: "1.4s" },
          { step: "Generated step-by-step code snippet showing correct HMAC SHA-256 header format", time: "1.6s" },
          { step: "Offered to rotate sandbox API secret key via Okta authenticated verification", time: "1.4s" }
        ],
        outcome: "Developer received root-cause fix and code snippet. API traffic restored."
      },
      {
        id: "vip-escalation",
        title: "Critical Enterprise SLA Handover",
        role: "User: CTO of Fortune 500 Client // Production Cluster Degradation",
        executionTime: "2.1s",
        humanTime: "45 Mins",
        status: "Escalated to On-Call SRE",
        agentsInvolved: ["VIP Detection Agent", "SRE Dispatcher", "Executive Gateway"],
        planSteps: [
          { step: "Identified $1.2M ARR Tier-1 Enterprise account via customer domain", time: "0.2s" },
          { step: "Initiated automated diagnostic ping to Europe-West cluster endpoints", time: "0.6s" },
          { step: "Assembled 3-sentence incident dossier: impacted pods, telemetry trace, error rate", time: "0.7s" },
          { step: "Paged On-Call Principal SRE via PagerDuty and opened private Slack incident room", time: "0.6s" }
        ],
        outcome: "Incident escalated to senior engineer with full diagnostic brief in 2.1s."
      }
    ]
  },
  integrations: [
    { name: "Zendesk & Freshdesk", type: "Ticket Management" },
    { name: "Intercom & Crisp", type: "Real-Time Web Chat" },
    { name: "Stripe & Chargebee", type: "Billing & Refunds" },
    { name: "Salesforce Service Cloud", type: "CRM & History" },
    { name: "Okta & Auth0", type: "Identity & MFA" },
    { name: "Slack & Teams", type: "Internal Escalations" }
  ],
  governance: [
    { label: "SOC 2 Type II Certified", desc: "Enterprise data encryption in transit & rest" },
    { label: "Financial Action Limits", desc: "Hard monetary caps requiring secondary authorization" },
    { label: "PII & PCI Redaction", desc: "Credit card and identity numbers automatically masked" },
    { label: "Complete Audit Trail", desc: "Every database transaction is cryptographically logged" }
  ],
  caseStudy: {
    client: "Global E-Commerce & FinTech Platform",
    industry: "Consumer Technology",
    headline: "How an E-Commerce Unicorn Handled 1.2M Holiday Tickets with 85% Touchless Resolution",
    quote: "DevOpsTRIO Customer Support Agent scaled our holiday capacity effortlessly. Response times dropped from 6 hours to 2 seconds while CSAT reached an all-time high.",
    author: "Global VP of Customer Operations",
    company: "Publicly Traded Commerce Leader",
    image: caseImg,
    results: [
      { stat: "85%", label: "Autonomous ticket deflection" },
      { stat: "< 2s", label: "Average first response time" },
      { stat: "$4.1M", label: "Annual operational savings" }
    ]
  }
};
