import heroBg from "../../assets/library/agent_research_analyst.jpg";
import marketImg from "../../assets/fresh/agent_deep_market_research.jpg";
import compImg from "../../assets/fresh/deep_learning_tensor.jpg";
import patentImg from "../../assets/fresh/quantum_laser_optics.jpg";
import dossierImg from "../../assets/fresh/executive_boardroom_ai.jpg";
import caseImg from "../../assets/fresh/multinational_team_summit.jpg";

export const researchAgentData = {
  id: "research-agent",
  category: "Productivity",
  name: "Research Agent Swarm",
  tagline: "Deep Market Intelligence, Competitor Analysis & Scientific Dossier Synthesis",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Deep Market Intelligence with",
    titleBold: "DevOpsTRIO Research Agent",
    description: "Autonomous scientific and market intelligence agent that scrapes thousands of SEC filings, patent registries, clinical trials, and academic papers to compile comprehensive 20-page strategic executive dossiers in minutes.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 34,
      latency: "310ms",
      connectedTools: 18,
      autonomyScore: "99.6%"
    }
  },
  metrics: [
    { value: "20x", label: "Research Synthesis Speed", sub: "Deep dossiers generated in minutes" },
    { value: "50,000+", label: "Sources Scanned per Query", sub: "SEC filings, patents, journals & news" },
    { value: "100%", label: "Fact-Checked Citations", sub: "Dual-model epistemic validation" },
    { value: "84%", label: "Competitive Lead Time", sub: "Early signal detection ahead of market" }
  ],
  overview: {
    heading: "The Autonomous Strategic Intelligence Analyst for Enterprise Leaders",
    description: "Strategy, product, and investment teams spend weeks compiling competitor dossiers, parsing complex 10-K regulatory disclosures, and tracking patent filings.\n\nThe DevOpsTRIO Research Agent deploys a coordinated swarm of investigative research agents. It scours public and proprietary databases, synthesizes multi-perspective analysis, cross-verifies conflicting claims, and delivers boardroom-ready strategic intelligence reports overnight.",
    keyPoints: [
      "Deep multi-source research across SEC EDGAR, Google Patents, PubMed, and global news feeds",
      "Automated competitor landscape matrices and feature-by-feature teardowns",
      "Fact-checked synthesis with dual-model epistemic reflection and citation grounding",
      "Comprehensive 20-page executive PDF and Notion dossiers with interactive charts"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Source Ingestion",
      role: "Multi-Modal Web & Filing Scraper",
      description: "Crawls SEC 10-K/10-Q filings, patent databases, earnings call transcripts, clinical registries, and scientific preprints.",
      tech: "Headless Web Scrapers, SEC EDGAR APIs & PDF Parsers"
    },
    {
      tier: "02",
      name: "Epistemic Kernel",
      role: "Cross-Verification & Synthesis Engine",
      description: "Detects factual contradictions between sources, weighs evidence strength, and structures hierarchical arguments.",
      tech: "Debate Frameworks, Multi-Agent Critique & Tree-of-Thought"
    },
    {
      tier: "03",
      name: "Dossier Mesh",
      role: "Document & Visual Gateway",
      description: "Generates formatted PDF whitepapers, executive slide decks, Notion docs, and interactive charts.",
      tech: "KaTeX Math Rendering, Vega-Lite Charts & PDF Generation"
    }
  ],
  capabilities: [
    {
      id: "market-dossiers",
      tag: "STRATEGIC INTELLIGENCE",
      title: "Comprehensive Strategic Dossiers",
      description: "Generates 20+ page deep-dive market intelligence reports complete with executive summaries, TAM sizing, and industry trends.",
      features: [
        "Synthesizes 50,000+ data sources into structured, actionable insights",
        "Includes TAM/SAM market size estimations backed by verified methodologies",
        "Interactive timeline visualizations of market inflection points",
        "20x faster than traditional manual research consulting firms"
      ],
      image: marketImg,
      metricBadge: "20x Faster Research"
    },
    {
      id: "competitor-teardown",
      tag: "COMPETITIVE INTEL",
      title: "Competitor Product & Patent Teardowns",
      description: "Continuously tracks rival product releases, pricing changes, patent filings, and hiring trends to predict their roadmap.",
      features: [
        "Monitors USPTO and WIPO patent filings for emerging technological moats",
        "Automated pricing page scraping and feature tier comparison matrices",
        "Analyzes rival employee LinkedIn hiring clusters to predict new product launches",
        "Surfaces competitive threats 3 to 6 months before public launch"
      ],
      image: compImg,
      metricBadge: "6-Month Early Warning"
    },
    {
      id: "sec-analysis",
      tag: "FINANCIAL RESEARCH",
      title: "SEC Filing & Earnings Call Synthesis",
      description: "Extracts hidden revenue risk factors, litigation disclosures, and executive sentiment shifts from quarterly 10-Q and annual 10-K filings.",
      features: [
        "Detects nuanced linguistic sentiment changes between consecutive quarters",
        "Extracts segment revenue breakdowns and supply chain dependency risks",
        "Transcribes earnings call Q&A sessions, isolating executive evasion patterns",
        "Provides investment committees with deep financial due diligence"
      ],
      image: dossierImg,
      metricBadge: "100% SEC Coverage"
    },
    {
      id: "patent-discovery",
      tag: "IP & SCIENTIFIC",
      title: "Scientific Literature & Patent Discovery",
      description: "Scans arXiv, PubMed, Nature, and IEEE databases to synthesize the state-of-the-art across AI, biotech, and quantum computing.",
      features: [
        "Extracts mathematical formulas, benchmark results, and experimental codebases",
        "Identifies foundational prior art for corporate patent applications",
        "Maps academic research breakthroughs to practical enterprise use cases",
        "100% verified factual citations with DOI and patent links"
      ],
      image: patentImg,
      metricBadge: "State-of-the-Art Intel"
    }
  ],
  comparison: [
    { metric: "Deep Research Dossier", legacy: "3 to 4 Weeks ($40k+ Consulting fee)", agent: "Under 15 Minutes (Comprehensive Dossier)" },
    { metric: "Data Source Coverage", legacy: "Sample of 20–30 search results", agent: "50,000+ Filings, patents, and papers" },
    { metric: "Fact-Checking & Validation", legacy: "Prone to human confirmation bias", agent: "Dual-model adversarial critique & verification" },
    { metric: "Patent & Filing Tracking", legacy: "Manual quarterly searches", agent: "Continuous 24/7 autonomous alert streams" },
    { metric: "Deliverable Format", legacy: "Static PDF emails", agent: "Live Notion, interactive charts & PDF decks" }
  ],
  interactiveDemo: {
    title: "Research Swarm Studio",
    subtitle: "Observe the Research Agent autonomously ingest SEC filings, scrape patent registries, and compile an executive market report in real time.",
    scenarios: [
      {
        id: "competitor-dossier",
        title: "Enterprise AI Market Teardown",
        role: "Research Target: Top 5 Enterprise AI Infrastructure Competitors",
        executionTime: "8.6s",
        humanTime: "2 Weeks",
        status: "24-Page Dossier Synthesized",
        agentsInvolved: ["SEC EDGAR Harvester", "Patent Analyzer", "Dossier Publisher"],
        planSteps: [
          { step: "Crawled 10-K and S-1 filings for 5 rival companies across SEC EDGAR database", time: "2.1s" },
          { step: "Extracted gross margin profiles, cloud vendor commitments, and customer churn metrics", time: "2.4s" },
          { step: "Identified 18 newly granted WIPO patents in vector caching and multi-agent coordination", time: "2.1s" },
          { step: "Generated executive comparison matrix and strategic SWOT analysis", time: "2.0s" }
        ],
        outcome: "24-page executive intelligence dossier compiled with 42 verified citations."
      },
      {
        id: "sec-risk-audit",
        title: "10-K Hidden Risk Factor Audit",
        role: "Target: Fortune 100 Supply Chain Conglomerate",
        executionTime: "4.2s",
        humanTime: "4 Days",
        status: "Risk Highlights Extracted",
        agentsInvolved: ["Linguistic Anomaly Scanner", "Financial Graph Modeler", "Risk Alert Gateway"],
        planSteps: [
          { step: "Ingested 180-page 10-K filing and compared against prior year disclosures", time: "1.2s" },
          { step: "Detected new risk disclosure regarding rare-earth semiconductor export restrictions", time: "1.4s" },
          { step: "Correlated risk with customer manufacturing dependencies across 4 subsidiaries", time: "0.9s" },
          { step: "Pushed 1-page executive brief to Chief Strategy Officer Slack", time: "0.7s" }
        ],
        outcome: "Early supply chain disruption risk surfaced 4 months before market recognition."
      },
      {
        id: "patent-landscape",
        title: "Quantum Cryogenic Patent Landscape",
        role: "Target: Global Prior-Art Search (Quantum Cryo Interconnects)",
        executionTime: "6.1s",
        humanTime: "3 Weeks",
        status: "Landscape Map Generated",
        agentsInvolved: ["USPTO Scraper", "Semantic Prior-Art Matcher", "Chart Generator"],
        planSteps: [
          { step: "Scanned 14,000 international patent filings across USPTO, EPO, and JPO", time: "1.8s" },
          { step: "Filtered down to 42 core patents relating to sub-kelvin superconducting bus interconnects", time: "1.6s" },
          { step: "Identified white-space opportunity for low-thermal-conductivity ribbon cables", time: "1.4s" },
          { step: "Generated interactive 3D patent landscape cluster map", time: "1.3s" }
        ],
        outcome: "Identified unpatented technology white-space for corporate R&D team."
      }
    ]
  },
  integrations: [
    { name: "SEC EDGAR Database", type: "Financial Disclosures" },
    { name: "Google Patents & USPTO", type: "Global IP Registries" },
    { name: "arXiv & PubMed", type: "Scientific Literature" },
    { name: "Bloomberg & Refinitiv", type: "Financial Market Feeds" },
    { name: "Notion & Coda", type: "Live Dossier Workspace" },
    { name: "Figma & Google Slides", type: "Executive Decks" }
  ],
  governance: [
    { label: "100% Fact-Checked Citations", desc: "Dual-model epistemic critique eliminates hallucinated facts" },
    { label: "Public & Legal Scraper Compliance", desc: "Strict adherence to robots.txt and data access limits" },
    { label: "Zero Plagiarism Guarantee", desc: "Original synthesized analysis with clear attributed quotations" },
    { label: "Confidential Query Enclave", desc: "Your strategic research topics are never logged or exposed" }
  ],
  caseStudy: {
    client: "Global Private Equity & Growth Fund",
    industry: "Investment Management",
    headline: "How a $12B Private Equity Firm Accelerated Deal Due Diligence from 3 Weeks to 4 Hours",
    quote: "DevOpsTRIO Research Agent is our secret weapon for thesis generation. It delivers deeper market intelligence in 15 minutes than external agencies produce in a month.",
    author: "Managing Director & Head of Tech Investments",
    company: "Global Growth Equity Fund",
    image: caseImg,
    results: [
      { stat: "20x", label: "Faster research turnaround" },
      { stat: "50,000+", label: "Sources analyzed per thesis" },
      { stat: "$1.4M", label: "Annual consulting cost savings" }
    ]
  }
};
