import heroBg from "../../assets/integrations/crm_hero.jpg";
import sfdcImg from "../../assets/integrations/salesforce_crm.jpg";
import hubspotImg from "../../assets/integrations/hubspot_inbound.jpg";
import zendeskImg from "../../assets/integrations/zendesk_support.jpg";
import dynamicsImg from "../../assets/integrations/dynamics_crm.jpg";
import caseImg from "../../assets/integrations/crm_case.jpg";

export const crmPlatformsData = {
  id: "crm-platforms",
  category: "Integrations",
  name: "CRM Platforms",
  tagline: "Bi-Directional Connectors for Salesforce, HubSpot, Zendesk & Dynamics 365",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // REVENUE & CRM MESH",
    subBadge: "REAL-TIME LEAD & PIPELINE SYNC",
    titleLight: "Supercharge Customer Relations with",
    titleBold: "DevOpsTRIO CRM Integrations",
    description: "Connect autonomous sales, marketing, and support AI agents directly into Salesforce, HubSpot, Zendesk, and Dynamics 365. Synchronize opportunity stages, enrich leads automatically, and auto-log omnichannel customer interactions in real time.",
    bgImage: heroBg,
    liveBadge: "Active CRM Mesh: 99.999% Delivery",
    telemetry: {
      avgSyncLatency: "11ms",
      activeWebhooks: "210,000+",
      authProtocol: "OAuth 2.0 / JWT",
      securityStandard: "SOC 2 Type II"
    }
  },
  stats: [
    { value: "< 12ms", label: "Bi-Directional Sync Latency", sub: "Sub-second lead & deal updates across CRMs" },
    { value: "40+ CRMs", label: "Pre-Built Native Connectors", sub: "Salesforce, HubSpot, Zendesk, Dynamics 365, Zoho" },
    { value: "99.999%", label: "Data Consistency SLA", sub: "Zero duplicate records with real-time deduplication" },
    { value: "15M+", label: "Daily Synchronized Lead Records", sub: "Processed seamlessly across global sales swarms" }
  ],
  connectors: [
    {
      id: "salesforce-cloud",
      name: "Salesforce Sales & Service Cloud",
      category: "Enterprise CRM",
      badge: "Salesforce REST / Bulk API v2",
      image: sfdcImg,
      description: "Bi-directional integration for Leads, Opportunities, Accounts, and Cases with real-time Change Data Capture (CDC) and Apex trigger webhook listeners.",
      protocols: ["Salesforce REST & Bulk API v2", "OAuth 2.0 JWT Bearer Token", "Pub/Sub Event Streaming"],
      syncCapabilities: [
        "Autonomous lead qualification and real-time Opportunity stage progression",
        "Bi-directional case routing and sentiment classification for support agents",
        "Automated CPQ quote configuration and contract synchronization"
      ],
      avgLatency: "10ms"
    },
    {
      id: "hubspot-crm",
      name: "HubSpot Marketing & Sales Hub",
      category: "Inbound CRM",
      badge: "HubSpot v3 API",
      image: hubspotImg,
      description: "Connect inbound lead funnels, marketing automation workflows, deal pipelines, and custom contact properties with instantaneous webhook dispatch.",
      protocols: ["HubSpot Webhooks v3", "Private App Access Tokens", "Batch Associations API"],
      syncCapabilities: [
        "Instant lead enrichment from web visits and corporate domain lookups",
        "Autonomous email sequence orchestration triggered by lead behavior",
        "Real-time pipeline revenue forecasting and win-rate analysis"
      ],
      avgLatency: "12ms"
    },
    {
      id: "zendesk-support",
      name: "Zendesk Support & Sunshine",
      category: "Omnichannel CX",
      badge: "Zendesk Sunshine Conversations",
      image: zendeskImg,
      description: "Streamline customer ticket deflection, automated macro execution, and escalation triggers across chat, email, and social customer channels.",
      protocols: ["Zendesk REST API v2", "Sunshine Events API", "OAuth 2.0 PKCE"],
      syncCapabilities: [
        "Automated triage, SLA priority assignment, and tagging in under 2 seconds",
        "Autonomous AI agent resolution of Tier-1 and Tier-2 support tickets",
        "Real-time CSAT prediction and customer sentiment trend alerts"
      ],
      avgLatency: "9ms"
    },
    {
      id: "microsoft-dynamics",
      name: "Microsoft Dynamics 365 CRM",
      category: "Enterprise Relationship",
      badge: "Dataverse Web API",
      image: dynamicsImg,
      description: "Deep integration with Dynamics 365 Sales, Customer Service, and Microsoft Power Platform with native Dataverse table synchronization.",
      protocols: ["Dataverse OData v4 REST", "Azure Service Bus Webhooks", "OAuth 2.0 Azure AD"],
      syncCapabilities: [
        "Continuous account hierarchy sync between ERP and Dynamics 365",
        "Automated sales call transcript logging and action item creation",
        "Cross-departmental customer 360-degree view unification"
      ],
      avgLatency: "14ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive CRM Webhook & Sync Studio",
    subtitle: "Select a revenue automation trigger below to inspect real-time CRM payload transformation and pipeline synchronization.",
    scenarios: [
      {
        id: "sfdc-lead-enrich",
        title: "Inbound Lead ➔ Salesforce Auto-Qualification & Opportunity",
        trigger: "New Enterprise Demo Request: 'Global Financial Corp ($500M+ ARR)'",
        sourceApp: "HubSpot Inbound Form",
        targetApp: "Salesforce Sales Cloud",
        executionTime: "92ms",
        status: "200 OK — Opportunity OPP-8821 Created ($120k ARR)",
        payload: {
          event_type: "crm.lead_created",
          company_name: "Global Financial Corp",
          annual_revenue: "$540M",
          qualification_score: 96,
          assigned_rep: "alex.morgan@devopstrio.com",
          salesforce_action: "CREATE_OPPORTUNITY_AND_TASK",
          stage: "Value Proposition",
          contract_est_arr: 120000
        }
      },
      {
        id: "zendesk-escalation",
        title: "Negative Sentiment Detected ➔ Zendesk VIP Escalation",
        trigger: "Customer Support Chat: 'Production outage on EU payment gateway'",
        sourceApp: "Zendesk Live Chat",
        targetApp: "PagerDuty & Salesforce Case",
        executionTime: "115ms",
        status: "200 OK — Priority P1 Escalation Triggered",
        payload: {
          event_type: "ticket_sentiment_critical",
          ticket_id: "ZD-499120",
          sentiment_score: -0.92,
          customer_tier: "Enterprise Tier-1",
          incident_created: true,
          escalated_to: "oncall-eng-lead@devopstrio.com"
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Field-Level Granular Permissions",
      desc: "Connectors enforce strict column-level read and write policies, ensuring sensitive customer PII and financial contract terms remain sealed."
    },
    {
      title: "Real-Time Idempotent Deduplication",
      desc: "Distributed hash keys prevent duplicate lead generation and duplicate opportunity creation during network retries or batch sync cycles."
    },
    {
      title: "End-to-End TLS 1.3 & AES-256 Encryption",
      desc: "All customer records, notes, and call recordings are encrypted in transit and at rest with customer-managed cryptographic keys."
    },
    {
      title: "Automated API Rate-Limit Queuing",
      desc: "Built-in token bucket rate limiters prevent API throttling against Salesforce 24-hour request quotas and HubSpot call limits."
    }
  ],
  caseStudy: {
    client: "Global Fintech & Banking SaaS Provider",
    industry: "Financial CRM & Customer Success",
    headline: "How 450 Sales Reps Doubled Pipeline Velocity Using DevOpsTRIO's Salesforce & HubSpot Sync Mesh",
    quote: "DevOpsTRIO's bi-directional CRM connectors eliminated 4 hours of manual Salesforce data entry per rep every week. Lead-to-opportunity conversions jumped by 38%.",
    author: "Global VP of Revenue Operations",
    company: "Top Tier FinTech Enterprise",
    image: caseImg,
    results: [
      { stat: "38%", label: "Increase in lead-to-opportunity velocity" },
      { stat: "< 12ms", label: "Real-time CRM webhook sync latency" },
      { stat: "4 Hrs", label: "Saved per sales rep every single week" }
    ]
  }
};
