import heroBg from "../../assets/library/agent_marketing_campaign.jpg";
import campaignImg from "../../assets/unique_agents/marketing_campaign_studio.jpg";
import abmImg from "../../assets/fresh/what_is_marketing_management_7f06fabeac.webp";
import creativeImg from "../../assets/fresh/multimodal_ai_workbench.jpg";
import analyticsImg from "../../assets/fresh/dashboard_customer_journey.jpg";
import caseImg from "../../assets/unique_agents/marketing_agent_case.jpg";

export const marketingAgentData = {
  id: "marketing-agent",
  category: "Business Operations",
  name: "Marketing Agent Swarm",
  tagline: "Autonomous Multi-Channel Campaign Generation & Dynamic ABM Orchestration",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Scale Brand Growth with",
    titleBold: "Devopstrio Marketing Agent",
    description: "Deploy autonomous creative marketing swarms that synthesize brand-aligned thought leadership, generate localized ad creative variants, execute dynamic ABM landing page personalization, and optimize ad spend autonomously.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 46,
      latency: "410ms",
      connectedTools: 16,
      autonomyScore: "99.1%"
    }
  },
  metrics: [
    { value: "10x", label: "Creative Velocity", sub: "Multi-variant ad & copy generation" },
    { value: "48%", label: "CAC Reduction", sub: "Real-time algorithmic ad spend tuning" },
    { value: "+62%", label: "ABM Conversion", sub: "Dynamic account-personalized pages" },
    { value: "100%", label: "Brand Voice Match", sub: "Neural style guide enforcement" }
  ],
  overview: {
    heading: "The Autonomous Growth Engine for Modern Marketing Teams",
    description: "Enterprise marketing teams face bottlenecks in creative production, cross-channel campaign localization, and continuous ABM experimentation.\n\nThe Devopstrio Marketing Agent coordinates specialized sub-agents that continuously analyze market trends, generate on-brand copy and visuals, deploy targeted campaigns across Google, LinkedIn, and Meta, and adjust budgets in real time.",
    keyPoints: [
      "Autonomous 24/7 campaign generation across email, search, display & social channels",
      "Dynamic real-time landing page and copy personalization for Tier-1 ABM accounts",
      "Algorithmic ad budget allocation prioritizing highest pipeline ROI channels",
      "Multi-modal brand guardrails enforcing strict typography, tone, and compliance standards"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Trend Perception",
      role: "Market Listener",
      description: "Scans social sentiment, competitor ad changes, keyword search volume shifts, and audience engagement vectors continuously.",
      tech: "Real-time NLP, Social Webhooks & SEM Telemetry"
    },
    {
      tier: "02",
      name: "Creative Synthesis",
      role: "Content Kernel",
      description: "Generates multi-format creative assets, optimizes headlines for click-through probability, and applies enterprise brand voice vectors.",
      tech: "Diffusion Models, Neural Style Anchors & LLMs"
    },
    {
      tier: "03",
      name: "Omnichannel Deployment",
      role: "Campaign Gateway",
      description: "Publishes and monitors ad sets across Google Ads, LinkedIn Campaign Manager, Meta, HubSpot, and Webflow with automated rollback safeguards.",
      tech: "OAuth 2.0 Connectors & Real-Time Bid APIs"
    }
  ],
  capabilities: [
    {
      id: "campaign-gen",
      tag: "CREATIVE",
      title: "Omnichannel Campaign Generation",
      description: "Converts a single product release brief into 50+ localized ad variants, blog posts, whitepapers, and email nurturing sequences.",
      features: [
        "Multi-channel format adaptation across LinkedIn, Google, Meta & X",
        "Deterministic brand voice and compliance guardrail auditing",
        "Automated SEO optimization with high-intent keyword clustering",
        "10x faster campaign turnaround from weeks to minutes"
      ],
      image: campaignImg,
      metricBadge: "10x Faster Deployment"
    },
    {
      id: "abm",
      tag: "ACCOUNT PERSONALIZATION",
      title: "Dynamic ABM Orchestration",
      description: "Personalizes web copy, case studies, and call-to-actions dynamically based on the visiting enterprise account's IP and technographics.",
      features: [
        "Real-time reverse-IP lookup and industry-specific copy swapping",
        "Dynamic embedding of target account logo, pain points & ROI stats",
        "Synchronized email and ad creative delivery to buying committee",
        "62% increase in ABM account meeting conversions"
      ],
      image: abmImg,
      metricBadge: "+62% Conversion"
    },
    {
      id: "budget-tuning",
      tag: "ALGORITHMIC FINOPS",
      title: "Real-Time Ad Budget Optimization",
      description: "Continuously shifts ad spend toward high-performing ad sets and keyword groups while pausing underperforming variants.",
      features: [
        "Autonomous cross-platform budget reallocation every 30 minutes",
        "Down-funnel CRM opportunity attribution modeling",
        "Automated negative keyword harvesting to eliminate ad waste",
        "48% reduction in customer acquisition cost (CAC)"
      ],
      image: analyticsImg,
      metricBadge: "48% Lower CAC"
    },
    {
      id: "brand-guard",
      tag: "GOVERNANCE",
      title: "Brand Voice & Regulatory Enclave",
      description: "Enforces strict brand tone, visual identity, copyright verification, and advertising regulatory compliance across all assets.",
      features: [
        "Zero-tolerance hallucination and factual citation checking",
        "FTC, GDPR, and industry advertising guideline compliance check",
        "Automated plagiarism and copyright risk scanning",
        "Cryptographic timestamping for all published content"
      ],
      image: creativeImg,
      metricBadge: "100% On-Brand"
    }
  ],
  comparison: [
    { metric: "Campaign Turnaround", legacy: "3 to 5 Weeks (Agency handoffs)", agent: "Under 15 Minutes (Autonomous Swarm)" },
    { metric: "Creative Variations", legacy: "3–5 static variants per test", agent: "50+ multi-modal targeted variants" },
    { metric: "ABM Personalization", legacy: "Manual landing page forks", agent: "Dynamic real-time IP-based customization" },
    { metric: "Budget Optimization", legacy: "Weekly or bi-weekly manual reviews", agent: "Continuous 30-min algorithmic reallocation" },
    { metric: "Brand Voice Alignment", legacy: "Subjective editorial review loops", agent: "Strict neural style guide vector matching" }
  ],
  interactiveDemo: {
    title: "Autonomous Campaign Studio",
    subtitle: "Launch a campaign objective to see how the Marketing Agent autonomously plans, generates, and deploys targeted creative across enterprise channels.",
    scenarios: [
      {
        id: "product-launch",
        title: "Enterprise Product Launch",
        role: "Goal: Launch AI Observability Module to Fortune 500 CTOs",
        executionTime: "8.4s",
        humanTime: "3 Weeks",
        status: "Completed",
        agentsInvolved: ["Market Research Agent", "Copy Synthesizer", "Channel Dispatcher"],
        planSteps: [
          { step: "Analyzed competitive search landscape and identified 14 high-ROI keywords", time: "1.2s" },
          { step: "Generated 12 LinkedIn ad variants with custom enterprise CTO hooks", time: "2.4s" },
          { step: "Built dynamic Webflow landing page with interactive ROI calculator", time: "2.8s" },
          { step: "Configured 3-stage email nurturing drip in HubSpot", time: "1.2s" },
          { step: "Pushed initial ad sets to Google Ads and LinkedIn with $10k initial budget cap", time: "0.8s" }
        ],
        outcome: "Complete omnichannel campaign live across 4 channels with verified brand compliance."
      },
      {
        id: "abm-triage",
        title: "Tier-1 ABM Personalization",
        role: "Target: 25 Global Investment Banks ($500M+ Revenue)",
        executionTime: "5.1s",
        humanTime: "2 Weeks",
        status: "Completed",
        agentsInvolved: ["Technographic Analyzer", "Dynamic Web Personalizer", "Ad Sync Agent"],
        planSteps: [
          { step: "Mapped banking tech stacks from Jobvite, BuiltWith, and 10-K filings", time: "1.1s" },
          { step: "Crafted personalized FinTech compliance case study callouts", time: "1.4s" },
          { step: "Configured IP-triggered dynamic hero headline in CMS", time: "1.6s" },
          { step: "Synchronized LinkedIn Matched Audiences with Salesforce target accounts", time: "1.0s" }
        ],
        outcome: "Dynamic ABM experiences active for all 25 investment banking buying committees."
      },
      {
        id: "budget-surge",
        title: "Ad Spend Reallocation Surge",
        role: "Q4 High-Intent Search Keyword Surge Optimization",
        executionTime: "3.2s",
        humanTime: "4 Days",
        status: "Completed",
        agentsInvolved: ["Bid Optimizer", "Negative Keyword Scraper", "Finance Gateway"],
        planSteps: [
          { step: "Identified 320% surge in 'Enterprise AI SRE' search queries with 8.4% conversion", time: "0.6s" },
          { step: "Paused 14 low-performing display ad groups on Meta", time: "0.8s" },
          { step: "Shifted $4,500 daily budget to high-intent Google Search exact-match terms", time: "1.1s" },
          { step: "Dispatched Slack alert to VP of Growth with real-time CAC delta report", time: "0.7s" }
        ],
        outcome: "Budget reallocated to top-performing keyword cluster, boosting pipeline yield by 34%."
      }
    ]
  },
  integrations: [
    { name: "HubSpot & Marketo", type: "Marketing Automation" },
    { name: "Google Ads & 360", type: "Search & Display" },
    { name: "LinkedIn Campaign Mgr", type: "B2B Social & ABM" },
    { name: "Webflow & WordPress", type: "Dynamic CMS Sync" },
    { name: "Google Analytics 4", type: "Attribution Telemetry" },
    { name: "Figma & Adobe CC", type: "Creative Asset Sync" }
  ],
  governance: [
    { label: "FTC & Advertising Standards", desc: "Automated truth-in-advertising checks" },
    { label: "GDPR & Cookie Compliance", desc: "Zero tracking without user consent" },
    { label: "Brand Tone Guardrails", desc: "Anti-hallucination and style conformity" },
    { label: "Daily Spend Cap Locks", desc: "Hard budget boundaries preventing ad overspend" }
  ],
  caseStudy: {
    client: "Global B2B DevOps Platform",
    industry: "Developer Tools",
    headline: "How a Cloud Infrastructure Unicorn Doubled Inbound Demo Requests While Slashing CAC by 48%",
    quote: "Devopstrio Marketing Agent changed our entire go-to-market speed. We launch hyper-personalized campaigns in minutes that used to take an agency six weeks.",
    author: "VP of Global Demand Generation",
    company: "Publicly Traded Cloud Platform",
    image: caseImg,
    results: [
      { stat: "10x", label: "Increase in content velocity" },
      { stat: "48%", label: "Reduction in blended CAC" },
      { stat: "+114%", label: "Inbound pipeline growth" }
    ]
  }
};
