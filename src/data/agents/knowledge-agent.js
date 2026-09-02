import heroBg from "../../assets/library/agent_knowledge_graph.jpg";
import graphImg from "../../assets/fresh/agent_knowledge_graph_synthesis.jpg";
import searchImg from "../../assets/unique_agents/knowledge_rag_graph.jpg";
import groundedImg from "../../assets/fresh/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg";
import rbacImg from "../../assets/fresh/identification-vs-authontication-2.jpg";
import caseImg from "../../assets/unique_agents/knowledge_agent_case.jpg";

export const knowledgeAgentData = {
  id: "knowledge-agent",
  category: "Productivity",
  name: "Knowledge Agent Swarm",
  tagline: "Neural Enterprise Retrieval, Institutional Memory & Grounded Synthesis",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Unify Institutional Memory with",
    titleBold: "DevOpsTRIO Knowledge Agent",
    description: "Autonomous knowledge retrieval agent that indexes enterprise repositories across SharePoint, Confluence, Jira, Google Drive, and Slack to deliver citation-backed answers with strict role-based access control.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 48,
      latency: "260ms",
      connectedTools: 20,
      autonomyScore: "99.7%"
    }
  },
  metrics: [
    { value: "< 1.5s", label: "Search & Answer Speed", sub: "Instant grounded synthesis across silos" },
    { value: "100%", label: "Verifiable Citations", sub: "Exact document link and page references" },
    { value: "0%", label: "Permission Leakage", sub: "Strict document ACL & RBAC enforcement" },
    { value: "8.5 Hrs", label: "Weekly Employee Time Saved", sub: "Eliminates manual knowledge searching" }
  ],
  overview: {
    heading: "The Autonomous Enterprise Search & Institutional Memory Engine",
    description: "Enterprise knowledge is scattered across hundreds of disconnected tools, causing employees to spend 20% of their work week searching for information or recreating existing work.\n\nThe DevOpsTRIO Knowledge Agent acts as an autonomous collective brain for your company. It continuously indexes technical docs, PDFs, Slack conversations, and design specs, synthesizing direct, verifiable answers with exact source citations while strictly respecting user permission boundaries.",
    keyPoints: [
      "Sub-second semantic search and question answering across SharePoint, Confluence, Google Drive & Slack",
      "100% citation grounding with direct clickable deep links to exact document paragraphs",
      "Zero permission leakage enforcing native enterprise Active Directory & Google Workspace ACLs",
      "Dynamic knowledge graph extraction linking projects, experts, and architectural decisions"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Knowledge Perception",
      role: "Multi-Source Document Ingestor",
      description: "Continuously syncs webhooks across Google Drive, Notion, Confluence, Jira, and GitHub, parsing rich formats into semantic vectors.",
      tech: "Real-Time Change Streams, Chunking & Dense Retrieval Embeddings"
    },
    {
      tier: "02",
      name: "RAG & Graph Kernel",
      role: "Hybrid Search & Reasoning Engine",
      description: "Combines dense vector retrieval with lexical BM25 and knowledge graph traversal to identify authoritative ground truth.",
      tech: "Hybrid Search, Cross-Encoders & Graph Neural Networks"
    },
    {
      tier: "03",
      name: "Grounded Synthesis Mesh",
      role: "Citation & ACL Gateway",
      description: "Filters retrieved document chunks by requester's Active Directory permissions and synthesizes concise, cited answers.",
      tech: "Document ACL Enclaves & Cryptographic Citation Verification"
    }
  ],
  capabilities: [
    {
      id: "hybrid-rag",
      tag: "SEARCH & RETRIEVAL",
      title: "Grounded Multi-Modal RAG Search",
      description: "Searches across text, spreadsheets, architectural diagrams, and PDF presentations with hybrid vector + keyword precision.",
      features: [
        "Combines semantic embeddings with exact keyword match (BM25 + Dense Vectors)",
        "Understands tables, charts, and diagrams via multi-modal vision models",
        "Directly quotes authoritative sources with 100% verifiable citations",
        "Sub-1.5s latency for complex multi-document synthesis"
      ],
      image: searchImg,
      metricBadge: "< 1.5s Search"
    },
    {
      id: "knowledge-graph",
      tag: "ENTERPRISE GRAPH",
      title: "Dynamic Knowledge Graph Synthesis",
      description: "Builds a living graph of enterprise entities, mapping which engineers own specific services, patents, and architectural decisions.",
      features: [
        "Automatically identifies subject matter experts (SMEs) across the company",
        "Tracks decision rationale across Slack discussions and RFC documents",
        "Surfaces duplicate internal projects to prevent redundant engineering spend",
        "Provides visual interactive knowledge graph exploration"
      ],
      image: graphImg,
      metricBadge: "Living Org Graph"
    },
    {
      id: "acl-guard",
      tag: "SECURITY & PERMISSIONS",
      title: "Zero-Leakage Permission (ACL) Guardrails",
      description: "Strictly filters all search results against the requesting user's specific Active Directory, Okta, or Google Workspace access rights.",
      features: [
        "Never leaks confidential executive, HR, or M&A documents to unauthorized staff",
        "Real-time evaluation of document-level permissions at query time",
        "Audited compliance with SOC 2, HIPAA, and GDPR security standards",
        "0% permission leakage verified across millions of daily queries"
      ],
      image: rbacImg,
      metricBadge: "0% ACL Leakage"
    },
    {
      id: "auto-curation",
      tag: "KNOWLEDGE HYGIENE",
      title: "Autonomous Knowledge Base Hygiene",
      description: "Detects outdated, contradictory, or duplicate documentation across repositories, flagging stale articles for review.",
      features: [
        "Identifies conflicting policy docs (e.g. vacation policy v1 vs v3)",
        "Alerts doc owners when code changes make documentation obsolete",
        "Automated FAQ generation from common Slack and customer support tickets",
        "Reclaims 8.5+ hours per employee every single week"
      ],
      image: groundedImg,
      metricBadge: "8.5 Hrs Saved/Wk"
    }
  ],
  comparison: [
    { metric: "Information Search Time", legacy: "20 to 45 mins per query across 5 tools", agent: "Under 1.5 Seconds (Grounded Synthesis)" },
    { metric: "Source Citations", legacy: "None (Manual copy-pasting)", agent: "100% Verifiable deep links to source paragraphs" },
    { metric: "Permission Enforcement", legacy: "Often misconfigured in shared drives", agent: "Strict document-level ACL checks on every query" },
    { metric: "Outdated Documentation", legacy: "Silently lingers for years causing errors", agent: "Autonomous staleness detection and owner alerts" },
    { metric: "SME Identification", legacy: "Asking in Slack general channels", agent: "Instant automated expert mapping from commit graph" }
  ],
  interactiveDemo: {
    title: "Knowledge Swarm Studio",
    subtitle: "Query the Knowledge Agent across multi-system enterprise repositories to observe semantic RAG retrieval, permission filtering, and citation grounding.",
    scenarios: [
      {
        id: "rag-query",
        title: "Cross-System Architecture Query",
        role: "Question: 'What is our disaster recovery RTO/RPO policy for Europe payment clusters?'",
        executionTime: "1.4s",
        humanTime: "30 Mins",
        status: "Answer Synthesized with 3 Citations",
        agentsInvolved: ["Vector Retriever", "Permission Filter", "Citation Verifier"],
        planSteps: [
          { step: "Queried hybrid index across Confluence, Google Drive, and GitHub RFCs", time: "0.4s" },
          { step: "Filtered 14 candidate document chunks against user's 'Engineering Lead' ACL", time: "0.3s" },
          { step: "Extracted exact ground truth: RTO is 15 minutes, RPO is 0 seconds (Active-Active Replication)", time: "0.4s" },
          { step: "Attached 3 deep links: Confluence RFC-104, DR Policy 2026.pdf, and AWS Architecture Spec", time: "0.3s" }
        ],
        outcome: "Accurate, citation-backed answer delivered in 1.4s with direct document links."
      },
      {
        id: "acl-security",
        title: "Confidential Executive Document Guard",
        role: "Query: 'What are the executive compensation targets for Q4 2026?'",
        executionTime: "0.8s",
        humanTime: "N/A (Security Event)",
        status: "Access Restricted",
        agentsInvolved: ["Active Directory Validator", "Security Enclave", "Audit Logger"],
        planSteps: [
          { step: "Ingested query from user: #ENG-DEV-490 (Software Engineer)", time: "0.2s" },
          { step: "Evaluated Google Drive ACL on 'Executive Comp Q4.xlsx' (Restricted to C-Suite & HR)", time: "0.3s" },
          { step: "Blocked document chunk ingestion from RAG context window", time: "0.2s" },
          { step: "Returned polite access boundary message without confirming document existence", time: "0.1s" }
        ],
        outcome: "Strict zero-leakage security enforced. Zero confidential PII exposed."
      },
      {
        id: "stale-doc",
        title: "Outdated Documentation Staleness Alert",
        role: "Event: GitHub PR #940 merged deprecating Python 3.8 Runtime",
        executionTime: "2.1s",
        humanTime: "1 Week",
        status: "Confluence Doc Flagged & PR Opened",
        agentsInvolved: ["Git Commit Watcher", "Doc Semantic Matcher", "Confluence Bot"],
        planSteps: [
          { step: "Detected commit #sha-4092 deprecating Python 3.8 in favor of Python 3.12", time: "0.4s" },
          { step: "Scanned Confluence knowledge base: Found 4 onboarding articles recommending Python 3.8", time: "0.8s" },
          { step: "Added warning banner to Confluence pages: 'Outdated runtime spec — see RFC #940'", time: "0.5s" },
          { step: "Assigned documentation update task to author in Jira", time: "0.4s" }
        ],
        outcome: "Stale documentation caught and flagged within 2.1s of code merge."
      }
    ]
  },
  integrations: [
    { name: "SharePoint & OneDrive", type: "Microsoft Enterprise Docs" },
    { name: "Confluence & Jira", type: "Atlassian Knowledge Sync" },
    { name: "Google Workspace Drive", type: "Docs, Sheets & Slides" },
    { name: "Notion & Coda", type: "Modern Knowledge Hubs" },
    { name: "Slack & Microsoft Teams", type: "Conversational History" },
    { name: "GitHub & GitLab Wikis", type: "Technical Engineering Docs" }
  ],
  governance: [
    { label: "Document-Level ACL Enforced", desc: "Every RAG search honors native enterprise permission matrices" },
    { label: "Zero Public Model Leakage", desc: "Internal company knowledge is never trained on public LLMs" },
    { label: "SOC 2 Type II & ISO 27001", desc: "Audited enterprise cryptographic storage and transit" },
    { label: "100% Grounded Citations", desc: "Strict anti-hallucination guardrails with verifiable source links" }
  ],
  caseStudy: {
    client: "Global Management Consulting Enterprise",
    industry: "Professional Services",
    headline: "How a 15,000-Consultant Global Enterprise Saved 8.5 Hours per Consultant Every Week",
    quote: "DevOpsTRIO Knowledge Agent transformed how our teams deliver client work. We find past case studies, financial models, and research in seconds rather than days.",
    author: "Chief Knowledge Officer & Partner",
    company: "Global Tier-1 Consulting Firm",
    image: caseImg,
    results: [
      { stat: "< 1.5s", label: "Average search & synthesis speed" },
      { stat: "8.5 Hrs", label: "Weekly time saved per employee" },
      { stat: "100%", label: "Citation verification accuracy" }
    ]
  }
};
