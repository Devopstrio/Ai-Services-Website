import heroBg from "../../assets/integrations/bi_hero.jpg";
import pbiImg from "../../assets/integrations/powerbi_dash.jpg";
import tabImg from "../../assets/integrations/tableau_viz.jpg";
import lookerImg from "../../assets/integrations/looker_explore.jpg";
import tsImg from "../../assets/integrations/thoughtspot_search.jpg";
import caseImg from "../../assets/integrations/bi_case.jpg";

export const businessIntelligenceData = {
  id: "business-intelligence",
  category: "Integrations",
  name: "Business Intelligence",
  tagline: "Real-Time BI Connectors for Power BI, Tableau, Looker & ThoughtSpot",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // REAL-TIME BI & ANALYTICS",
    subBadge: "CONVERSATIONAL METRICS, DAX/LOOKML GENERATION & DASHBOARDS",
    titleLight: "Conversational Analytics with",
    titleBold: "DevOpsTRIO BI Integrations",
    description: "Transform natural language queries into interactive Power BI reports, automated LookML data models, Tableau dashboards, and real-time executive KPI push alerts across Microsoft Fabric, Tableau Cloud, and Looker.",
    bgImage: heroBg,
    liveBadge: "Active BI Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "8ms",
      activeWebhooks: "190,000+",
      authProtocol: "OAuth 2.0 / Service Principal",
      securityStandard: "SOC 2 Type II"
    }
  },
  stats: [
    { value: "< 8ms", label: "Dashboard Event Sync Latency", sub: "Sub-second analytical data refresh & push" },
    { value: "20+ BI Engines", label: "Supported Analytics Platforms", sub: "Power BI, Tableau, Looker, ThoughtSpot, Superset" },
    { value: "100%", label: "Real-Time Row-Level Security (RLS)", sub: "Enforce departmental data access boundaries" },
    { value: "5M+", label: "Daily Analytical Questions Answered", sub: "Dispatched across executive leadership swarms" }
  ],
  connectors: [
    {
      id: "microsoft-power-bi",
      name: "Microsoft Power BI & Fabric",
      category: "Enterprise BI Cloud",
      badge: "Power BI REST API / DAX Engine",
      image: pbiImg,
      description: "Direct bi-directional integration with Power BI workspaces, OneLake datasets, and DAX calculation engines with real-time push dataset streaming.",
      protocols: ["Power BI REST API v1.0", "DAX Query REST", "Azure Service Principal Auth"],
      syncCapabilities: [
        "Natural language prompt to complex DAX calculation measure generation",
        "Automated report generation and dynamic export to PowerPoint/PDF for board decks",
        "Real-time streaming dataset ingestion for IoT and financial operations"
      ],
      avgLatency: "8ms"
    },
    {
      id: "tableau-cloud",
      name: "Tableau Cloud & Server",
      category: "Visual Analytics",
      badge: "Tableau REST & Hyper API",
      image: tabImg,
      description: "Connect to Tableau Cloud, Hyper in-memory data extracts, and Tableau Pulse for metric tracking and visual analytics synthesis.",
      protocols: ["Tableau REST API 3.20+", "Hyper Data API", "Personal Access Tokens (PAT)"],
      syncCapabilities: [
        "Autonomous visualization styling matching enterprise corporate brand guidelines",
        "Dynamic filter synchronization linked to live Slack and Teams conversations",
        "Real-time anomaly detection triggering automated executive digest alerts"
      ],
      avgLatency: "9ms"
    },
    {
      id: "google-looker",
      name: "Google Looker & LookML",
      category: "Semantic Data Modeling",
      badge: "Looker 4.0 API / LookML",
      image: lookerImg,
      description: "Harness Looker's centralized LookML semantic data models for governed, single-source-of-truth business metrics and dashboards.",
      protocols: ["Looker SDK 4.0", "LookML Git Integration", "OAuth 2.0 Client Credentials"],
      syncCapabilities: [
        "Autonomous LookML dimension and measure generation from database schemas",
        "Zero-hallucination metric calculations guaranteed by LookML semantic definitions",
        "Automated scheduled dashboard delivery to executive Slack channels"
      ],
      avgLatency: "7ms"
    },
    {
      id: "thoughtspot-analytics",
      name: "ThoughtSpot & Self-Service BI",
      category: "Search-Driven Analytics",
      badge: "ThoughtSpot REST v2",
      image: tsImg,
      description: "Embed conversational AI search and Liveboards directly into custom SaaS products and internal enterprise web portals.",
      protocols: ["ThoughtSpot REST API v2.0", "ThoughtSpot Everywhere SDK", "SAML SSO"],
      syncCapabilities: [
        "Self-service search queries answering ad-hoc executive financial questions",
        "Interactive embedded Liveboards customized per enterprise customer tenant",
        "Automated drill-down analysis pinpointing root causes of revenue fluctuations"
      ],
      avgLatency: "6ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive BI Query & Visualization Studio",
    subtitle: "Select a conversational analytics query below to observe automated DAX/LookML metric calculation, dashboard rendering, and RLS enforcement.",
    scenarios: [
      {
        id: "powerbi-kpi-sim",
        title: "Conversational Question ➔ Power BI DAX & Chart Generation",
        trigger: "Executive Query: 'What is our Net Revenue Retention (NRR) trend across North America?'",
        sourceApp: "Executive Mobile Assistant",
        targetApp: "Power BI Workspace (Revenue Fabric)",
        executionTime: "76ms",
        status: "200 OK — DAX Measure Calculated & Chart Rendered (NRR: 124.2%)",
        payload: {
          event_type: "bi.conversational_query_executed",
          generated_dax: "CALCULATE([NRR_Percentage], FILTER(Dim_Geography, Dim_Geography[Region] = 'North America'), DATESBETWEEN(Dim_Date[Date], DATE(2026,1,1), DATE(2026,9,1)))",
          calculated_kpi: {
            metric_name: "Net Revenue Retention (NRR)",
            value: "124.2%",
            quarter_over_quarter_change: "+3.8%",
            confidence_score: "100% (LookML Governed)"
          },
          chart_type: "Area_Chart_Monthly_Trend",
          row_level_security_applied: "Role: Executive_Leadership_NA"
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Strict Row-Level Security (RLS) & Column Masking",
      desc: "Connectors inherit existing enterprise BI security models, guaranteeing users only see financial data permitted by their corporate role."
    },
    {
      title: "LookML / Semantic Layer Single Source of Truth",
      desc: "All calculations route through validated semantic models (e.g. LookML, Power BI Datamarts) to eliminate hallucinated financial formulas."
    },
    {
      title: "Service Principal & OAuth 2.0 Auth",
      desc: "Connections authenticate via enterprise service principals with scoped workspace permissions, avoiding individual user credential exposure."
    },
    {
      title: "Automated Data Governance & Lineage Tracking",
      desc: "Every metric displayed is accompanied by a full cryptographic data lineage trace back to the raw source database table."
    }
  ],
  caseStudy: {
    client: "Global Consumer Goods & Retail Brand ($8.5B Revenue)",
    industry: "Consumer Goods & Enterprise BI",
    headline: "How Conversational Power BI & Looker Connectors Saved 25,000 Hours of Ad-Hoc Report Building Annually",
    quote: "Our centralized BI team spent 40% of their time answering repetitive report requests. DevOpsTRIO's BI connectors gave 4,000 regional store managers the ability to query Power BI in plain English with 100% mathematical accuracy.",
    author: "Global Director of Business Intelligence",
    company: "Public Retail & CPG Corporation",
    image: caseImg,
    results: [
      { stat: "25,000 Hrs", label: "Saved in manual BI report creation per year" },
      { stat: "< 8ms", label: "Real-time dashboard query and calculation latency" },
      { stat: "100%", label: "Single-source-of-truth mathematical consistency" }
    ]
  }
};
