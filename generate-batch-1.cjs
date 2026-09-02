const fs = require('fs');
const path = require('path');

const PRODUCTS_MASTER = [
  {
    id: "humanex-ai",
    category: "Business Platform",
    name: "Humanex AI",
    tagline: "Predictive Workforce Intelligence & Enterprise Skill Graph Platform",
    badge: "BUSINESS PLATFORM // WORKFORCE AI",
    titleLight: "Predictive Talent Strategy with",
    titleBold: "Humanex AI",
    description: "Future-proof your workforce. Humanex AI maps enterprise organizational skills, forecasts employee retention risks, identifies internal mobility opportunities, and personalizes career development paths across thousands of employees.",
    bgImage: "talent_intelligence_portal.jpg",
    liveBadge: "v4.1 Enterprise Ready",
    metrics: [
      { value: "40%", label: "Reduction in Employee Turnover", sub: "Proactive flight-risk intervention" },
      { value: "3.2x", label: "Increase in Internal Mobility", sub: "Dynamic skill-based matching" },
      { value: "92%", label: "Workforce Skill Coverage", sub: "Continuous graph extraction" },
      { value: "\$3.8M", label: "Annual Replacement Cost Savings", sub: "Retain top tier domain talent" }
    ],
    overview: {
      heading: "Building a Resilient, Skills-First Enterprise Organization",
      description: "Managing enterprise headcount with static job descriptions and annual reviews creates blind spots and costly attrition. Humanex AI provides real-time visibility into your workforce skills taxonomy.\n\nBy synthesizing project deliverables, code commits, customer feedback, and learning milestones, Humanex AI connects employees to the right internal projects and leadership trajectories.",
      keyPoints: [
        "Dynamic organizational skill graph that updates in real time",
        "Predictive flight-risk modeling with proactive retention triggers",
        "AI-curated career pathways and continuous micro-learning",
        "Seamless bi-directional sync with Workday, SAP, and BambooHR"
      ]
    },
    features: [
      {
        id: "skillgraph",
        tabTitle: "Skill Graph",
        title: "Real-Time Organizational Skill Taxonomy",
        description: "Automatically extracts and maps hard and soft competencies across all departments from daily work artifacts.",
        highlights: ["Identifies hidden domain expertise across teams", "Visual skill gap heatmap for business units", "Replaces outdated static job descriptions", "Tracks real-time emerging technical skill trends"],
        image: "neural_connections_nodes.jpg"
      },
      {
        id: "flightrisk",
        tabTitle: "Retention Modeling",
        title: "Predictive Flight-Risk & Engagement Forecasting",
        description: "Analyzes burnout indicators, compensation discrepancies, and role stagnation to alert HR leads before key talent departs.",
        highlights: ["Privacy-first aggregate sentiment indicators", "Automated retention intervention playbooks", "Benchmark compensation vs market rate", "Custom risk weighting by critical business roles"],
        image: "enterprise_innovation_hub.jpg"
      },
      {
        id: "mobility",
        tabTitle: "Internal Mobility",
        title: "Autonomous Internal Talent Marketplace",
        description: "Matches open strategic initiatives and internal role vacancies with existing employees ready for their next challenge.",
        highlights: ["3.2x higher internal promotion velocity", "Reduces external recruitment spending", "Personalized employee career roadmap suggestions", "Cross-functional gig project staffing"],
        image: "enterprise_scrum_sprint.jpg"
      },
      {
        id: "succession",
        tabTitle: "Succession Planning",
        title: "Algorithmic Leadership Succession Planning",
        description: "Ensures continuous leadership continuity for mission-critical roles by identifying and mentoring high-potential successors.",
        highlights: ["Simulated organizational succession readiness", "Mentorship pairing based on complementary skills", "Objective competency-based promotion tracking", "Executive leadership bench strength dashboard"],
        image: "lead_developer_mentor.jpg"
      }
    ],
    workflow: [
      { step: "01", title: "Artifact Ingestion", desc: "Connects to HRIS, GitHub, Jira, and Slack to analyze skill signals." },
      { step: "02", title: "Graph Construction", desc: "Builds dynamic multi-dimensional skill graph of the enterprise." },
      { step: "03", title: "Risk & Gap Scoring", desc: "Identifies retention vulnerabilities and talent shortages." },
      { step: "04", title: "Opportunity Matching", desc: "Recommends internal transfers, promotions, and training modules." },
      { step: "05", title: "Executive Dashboard", desc: "Delivers board-ready workforce health and succession telemetry." }
    ],
    interactiveDemo: {
      title: "Interactive Workforce Skill & Retention Simulator",
      subtitle: "Select an employee profile below to see how Humanex AI models competency depth, evaluates flight risk, and recommends strategic career actions.",
      personas: [
        {
          name: "Dr. Sarah Chen",
          role: "Principal AI Research Scientist",
          experience: "5 Years at Org • 14 Patents",
          matchScore: 98,
          matchGrade: "Critical Asset • Flight Risk: Moderate",
          summary: "Top contributor across foundational LLM training. Identified compensation lag vs market rate and limited recent cross-functional leadership opportunities.",
          competencies: [
            { skill: "Transformer Architectures", score: 99 },
            { skill: "Distributed Training", score: 98 },
            { skill: "Patent Creation", score: 97 },
            { skill: "Org Leadership Readiness", score: 91 }
          ],
          aiInsight: "Recommended promotion to Fellow / Research Director + equity adjustment. Retaining Dr. Chen prevents \$850K replacement and IP loss."
        },
        {
          name: "David Kim",
          role: "Senior Cloud Platform Engineer",
          experience: "3 Years at Org • Kubernetes Lead",
          matchScore: 94,
          matchGrade: "High Growth • Flight Risk: Low",
          summary: "Demonstrated exceptional mastery of multi-region service mesh. Expressed interest in moving into AI Infrastructure Engineering.",
          competencies: [
            { skill: "Kubernetes & Istio", score: 97 },
            { skill: "IaC Terraform", score: 95 },
            { skill: "GPU Cluster Scheduling", score: 89 },
            { skill: "Mentorship Impact", score: 92 }
          ],
          aiInsight: "Matched with Internal GenAI Platform Infrastructure team vacancy. Fast-tracked internal transfer without recruiter fees."
        }
      ]
    },
    integrations: [
      { name: "Workday", type: "Full Bi-Directional HCM Sync" },
      { name: "SAP SuccessFactors", type: "Core Employee Data Sync" },
      { name: "BambooHR", type: "Talent Roster Ingestion" },
      { name: "Jira & GitHub", type: "Skill Artifact Parsing" },
      { name: "Cornerstone OnDemand", type: "LMS Course Mapping" },
      { name: "Slack", type: "Private Pulse Check-ins" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Audited employee privacy boundaries" },
      { label: "GDPR Compliant", desc: "Strict personal data anonymization" },
      { label: "Zero Model Retention", desc: "No HR data shared with public LLMs" },
      { label: "Role-Based Access", desc: "Granular manager-level view permissions" }
    ],
    caseStudy: {
      client: "Global SaaS Enterprise",
      industry: "Enterprise Software",
      headline: "How 8,000 Employees Were Mapped to Save \$4.2M in Unplanned Executive Attrition",
      quote: "Humanex AI gives our executive team an X-ray of our organizational health. We detected and resolved critical retention risks 6 months before people even thought of leaving.",
      author: "Chief Human Resources Officer",
      company: "Nasdaq-Listed Cloud Leader",
      image: "multinational_team_summit.jpg",
      results: [
        { stat: "42%", label: "Reduction in engineering turnover" },
        { stat: "480+", label: "Internal promotions executed" },
        { stat: "\$4.2M", label: "Saved in recruiter fees" }
      ]
    }
  },
  {
    id: "brio-ai",
    category: "Business Platform",
    name: "Brio AI",
    tagline: "Enterprise Cognitive Search & Multi-Agent Organizational Knowledge Engine",
    badge: "BUSINESS PLATFORM // KNOWLEDGE AI",
    titleLight: "Unify Enterprise Knowledge with",
    titleBold: "Brio AI",
    description: "Eliminate institutional data silos. Brio AI connects scattered documents, wikis, Slack threads, Jira tickets, and cloud data lakes into a single, highly secure, conversational decision intelligence interface.",
    bgImage: "neural_connections_nodes.jpg",
    liveBadge: "v4.4 Enterprise Ready",
    metrics: [
      { value: "< 200ms", label: "Search Query Latency", sub: "Sub-second federated retrieval" },
      { value: "99.2%", label: "Hallucination-Free Responses", sub: "Strict citation-backed answers" },
      { value: "150+", label: "Enterprise Data Connectors", sub: "Zero-ETL plug and play" },
      { value: "6.5 hrs", label: "Saved Per Employee / Week", sub: "Instant answers to complex questions" }
    ],
    overview: {
      heading: "The Neural Operating System for Enterprise Institutional Knowledge",
      description: "Enterprises lose millions of hours searching for scattered information across fragmented SharePoint folders, Confluence wikis, and Jira backlogs. Brio AI creates a unified vector knowledge index across all internal systems.\n\nEquipped with fine-grained role-based permissions, Brio AI synthesizes complex technical questions, drafts client briefings, and reveals hidden operational insights with verifiable citations.",
      keyPoints: [
        "Federated neural search across cloud and on-premises data silos",
        "Strict document-level permissions (ACL) synchronization in real time",
        "Verifiable source citations with exact page and paragraph highlights",
        "Autonomous multi-agent synthesis for complex cross-system queries"
      ]
    },
    features: [
      {
        id: "federated",
        tabTitle: "Federated Search",
        title: "Cross-Platform Neural Vector Indexing",
        description: "Indexes Google Workspace, Microsoft 365, Notion, Jira, Salesforce, and Snowflake without duplicating or moving raw enterprise data.",
        highlights: ["Real-time document ingestion via webhooks", "Zero-ETL semantic vector indexing", "Supports 80+ file formats including audio transcripts", "Multi-lingual semantic cross-lingual search"],
        image: "holographic_data_globe.jpg"
      },
      {
        id: "citations",
        tabTitle: "Citation Engine",
        title: "Hallucination-Free Citation Architecture",
        description: "Every generated insight or summary provides clickable source references linked directly to the underlying document paragraph.",
        highlights: ["Exact document snippet verification", "Confidence scoring for all synthesized claims", "Audit trail for compliance and legal review", "One-click navigation to origin files"],
        image: "deep_learning_tensor.jpg"
      },
      {
        id: "acl",
        tabTitle: "Security & ACL",
        title: "Real-Time Access Control (ACL) Enforcement",
        description: "Guarantees employees only see answers derived from documents they have explicit authorization to view in origin systems.",
        highlights: ["Inherits permissions from Active Directory and Okta", "Prevents unauthorized visibility of payroll or executive memos", "Air-gapped private cluster deployment options", "Zero data retention on public model APIs"],
        image: "cyber_threat_map.jpg"
      },
      {
        id: "agents",
        tabTitle: "Multi-Agent Synthesis",
        title: "Autonomous Knowledge Synthesis Agents",
        description: "Assign complex research tasks to background agents that aggregate data from multiple systems to compile comprehensive executive reports.",
        highlights: ["Generates customer QBR dossiers in 30 seconds", "Synthesizes competitive market intelligence", "Summarizes complex architectural RFCs", "Automated weekly department briefing generation"],
        image: "multimodal_ai_workbench.jpg"
      }
    ],
    workflow: [
      { step: "01", title: "Connect Sources", desc: "Authenticate enterprise data connectors with one-click OAuth." },
      { step: "02", title: "Vector Indexing", desc: "Brio builds semantic embeddings while mirroring native ACLs." },
      { step: "03", title: "Conversational Query", desc: "User asks complex questions in plain natural language." },
      { step: "04", title: "Citation Retrieval", desc: "Neural search retrieves exact snippets and verifies permissions." },
      { step: "05", title: "Synthesized Answer", desc: "Delivers comprehensive answer with direct source citations." }
    ],
    interactiveDemo: {
      title: "Interactive Enterprise Knowledge Query Simulator",
      subtitle: "Select an enterprise query below to see how Brio AI searches across silos, verifies access control, and synthesizes citation-backed answers.",
      personas: [
        {
          name: "SLA & Multi-Region Failover Architecture",
          role: "Query across Confluence, Jira & GitHub RFCs",
          experience: "Sources: 4 Repos • 12 Wiki Pages",
          matchScore: 99,
          matchGrade: "Direct Verified Answer",
          summary: "Our production failover in EU-Central initiates automatically when latency exceeds 450ms for 3 consecutive minutes, routing traffic to AWS Ireland with zero transaction loss.",
          competencies: [
            { skill: "Confluence RFC 104", score: 99 },
            { skill: "Terraform Module Ver.", score: 98 },
            { skill: "SOC2 Audit Annex B", score: 97 },
            { skill: "ACL Verification", score: 100 }
          ],
          aiInsight: "Derived from 3 verified documents. Verified that requester has Platform Engineer permissions."
        },
        {
          name: "Q3 Customer Expansion Playbook & Terms",
          role: "Query across Salesforce, Google Drive & Slack",
          experience: "Sources: 8 Deals • 2 Pricing Sheets",
          matchScore: 96,
          matchGrade: "Direct Verified Answer",
          summary: "Standard enterprise expansion tier offers 20% discount on 2-year commit exceeding 5,000 active seats, requiring VP Sales approval for custom SLA riders.",
          competencies: [
            { skill: "Salesforce CPQ Guidelines", score: 98 },
            { skill: "Commercial Playbook 2026", score: 96 },
            { skill: "Slack Deal Desk Thread", score: 94 },
            { skill: "ACL Verification", score: 100 }
          ],
          aiInsight: "Derived from verified Sales Operations folder. Filtered out unauthorized executive compensation documents."
        }
      ]
    },
    integrations: [
      { name: "Microsoft 365 & SharePoint", type: "Full Tenant Vector Sync" },
      { name: "Google Workspace & Drive", type: "Real-Time File Ingestion" },
      { name: "Atlassian Confluence & Jira", type: "Issue & Wiki Indexing" },
      { name: "Notion & Coda", type: "Workspace Integration" },
      { name: "Slack & Microsoft Teams", type: "Conversational Bot Plugin" },
      { name: "Snowflake & BigQuery", type: "Structured Data Query" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified enterprise knowledge security" },
      { label: "ISO 27001", desc: "Information security management certified" },
      { label: "Native ACL Mirroring", desc: "Respects origin document viewing permissions" },
      { label: "Zero Model Training", desc: "Your IP is completely isolated" }
    ],
    caseStudy: {
      client: "Global Management Consulting Firm",
      industry: "Professional Services",
      headline: "How 15,000 Consultants Reduced Proposal Prep Time from 4 Days to 2 Hours",
      quote: "Brio AI revolutionized our institutional memory. Decades of research and case studies are now instantly discoverable, allowing us to pitch proposals with unprecedented precision.",
      author: "Chief Information Officer",
      company: "Top 3 Global Strategy Firm",
      image: "executive_boardroom_ai.jpg",
      results: [
        { stat: "85%", label: "Faster proposal research" },
        { stat: "1.2M", label: "Documents indexed seamlessly" },
        { stat: "\$6.5M", label: "Annual billable hours unlocked" }
      ]
    }
  },
  {
    id: "devops-copilot",
    category: "Business Platform",
    name: "DevOps Copilot",
    tagline: "Autonomous CI/CD Debugging, Infrastructure as Code Synthesis & AIOps SRE",
    badge: "PRODUCTIVITY // CLOUD & DEVOPS AI",
    titleLight: "Self-Healing Cloud Infrastructure with",
    titleBold: "DevOps Copilot",
    description: "Accelerate software delivery velocity and slash MTTR. DevOps Copilot analyzes deployment logs in real time, generates production-ready Terraform blueprints, predicts cluster bottlenecks, and automatically resolves production incidents.",
    bgImage: "devops_cloud_console.jpg",
    liveBadge: "v4.5 Enterprise Ready",
    metrics: [
      { value: "80%", label: "MTTR Incident Reduction", sub: "Instant root cause isolation" },
      { value: "5x", label: "Faster Deployment Frequency", sub: "Automated pipeline optimization" },
      { value: "99.99%", label: "Cloud Uptime Guarantee", sub: "Predictive anomaly remediation" },
      { value: "45%", label: "Cloud Compute Cost Savings", sub: "Autonomous rightsizing & spot tuning" }
    ],
    overview: {
      heading: "The Autonomous Site Reliability Engineer for Modern Multi-Cloud Stacks",
      description: "Complex Kubernetes clusters, sprawling microservices, and distributed databases create alert fatigue and expensive production downtime. DevOps Copilot operates as an autonomous 24/7 SRE engineer embedded in your CI/CD pipelines.\n\nFrom parsing gigabytes of Datadog and CloudWatch telemetry in milliseconds to generating self-healing pull requests, DevOps Copilot eliminates platform bottlenecks.",
      keyPoints: [
        "Autonomous root-cause analysis across logs, metrics, and distributed traces",
        "Natural language to validated Infrastructure as Code (Terraform, Pulumi, Helm)",
        "Self-healing CI/CD pipeline auto-triage for failed test suites and Docker builds",
        "Predictive FinOps engine that rightsizes Kubernetes pods and cloud databases"
      ]
    },
    features: [
      {
        id: "rootcause",
        tabTitle: "Incident Triage",
        title: "Sub-Second Root-Cause Analysis & Diagnostics",
        description: "When an alert fires, DevOps Copilot correlates millions of telemetry events, git commits, and dependency graphs to pinpoint the exact failure line in seconds.",
        highlights: ["Correlates OpenTelemetry traces with GitHub commits", "Generates human-readable incident post-mortems instantly", "Reduces MTTR from hours to under 3 minutes", "Integrates with PagerDuty, Opsgenie, and Slack"],
        image: "server_rack_neon_glow.jpg"
      },
      {
        id: "iac",
        tabTitle: "IaC Generation",
        title: "Production-Grade Terraform & Helm Generation",
        description: "Generate compliant, secure multi-cloud infrastructure configurations from plain English requirements with built-in CIS benchmark security checks.",
        highlights: ["Enforces enterprise security guardrails automatically", "Validates syntax and cloud provider API schemas", "Prevents misconfigurations like open S3 buckets", "Automated drift detection and remediation"],
        image: "binary_code_tunnel.jpg"
      },
      {
        id: "cihealing",
        tabTitle: "Pipeline Healing",
        title: "Self-Healing CI/CD Pipeline Optimizer",
        description: "Identifies flaky tests, optimizes parallel build steps, and generates instant fix pull requests for broken Docker build dependencies.",
        highlights: ["5x faster GitHub Actions & GitLab CI build speeds", "Automated dependency vulnerability patching", "Caches intelligence across distributed runners", "Flaky test quarantine and automatic rerun heuristics"],
        image: "saas_cloud_platform_ui.jpg"
      },
      {
        id: "finops",
        tabTitle: "FinOps Tuning",
        title: "Continuous Cloud Cost & Spot Instance Optimizer",
        description: "Monitors real-time resource utilization to downscale idle environments, rightsizes CPU/RAM requests, and leverages spot instances with zero downtime risk.",
        highlights: ["45% average cloud infrastructure bill reduction", "Automated Kubernetes HPA/VPA autoscaling optimization", "Identifies orphaned EBS volumes and idle clusters", "Executive FinOps cloud budget forecasting"],
        image: "cloud_data_center_hall.jpg"
      }
    ],
    workflow: [
      { step: "01", title: "Telemetry Ingest", desc: "Connects agent to Kubernetes, CloudWatch, Datadog, and Prometheus." },
      { step: "02", title: "Baseline Modeling", desc: "AI models normal traffic patterns and establishes anomaly thresholds." },
      { step: "03", title: "Incident Detection", desc: "Sub-second triage pinpoints root cause across millions of log lines." },
      { step: "04", title: "Self-Healing PR", desc: "Generates fix PR with IaC adjustment and unit test verification." },
      { step: "05", title: "Automated Deploy", desc: "Deploys patch through CI/CD pipeline with continuous canary checks." }
    ],
    interactiveDemo: {
      title: "Interactive AIOps Incident Resolution Simulator",
      subtitle: "Select a production outage scenario below to see how DevOps Copilot analyzes telemetry, pinpoints root cause, and generates self-healing patches.",
      personas: [
        {
          name: "Kubernetes OOMKilled & Deadlock Outage",
          role: "Incident: 504 Gateway Timeout on Checkout API",
          experience: "Severity 1 • 14 Pods Affected",
          matchScore: 99,
          matchGrade: "Root Cause Isolated in 42s",
          summary: "Identified memory leak in Redis caching client introduced in PR #842. Pods exceeded 2GB limit causing cascading cluster restarts.",
          competencies: [
            { skill: "Trace Correlation", score: 99 },
            { skill: "Log Anomaly Detection", score: 98 },
            { skill: "Memory Leak Isolation", score: 97 },
            { skill: "Patch PR Generation", score: 100 }
          ],
          aiInsight: "Generated hotfix PR adjusting connection pool parameters and scaled memory limit to 4GB temporarily. Service recovered in 2.1 minutes."
        },
        {
          name: "Terraform IAM Policy Misconfiguration",
          role: "Security Audit: Over-Permissive S3 Bucket",
          experience: "Severity 2 • Compliance Vulnerability",
          matchScore: 97,
          matchGrade: "Auto-Remediated",
          summary: "Staging deployment attempted to apply public read permissions on customer analytics datalake.",
          competencies: [
            { skill: "CIS Benchmark Check", score: 100 },
            { skill: "Terraform Linting", score: 99 },
            { skill: "IAM Policy Restrict", score: 98 },
            { skill: "Audit Log Sync", score: 96 }
          ],
          aiInsight: "Blocked deployment pipeline and inserted AWS KMS encryption block with restricted VPC endpoint policy."
        }
      ]
    },
    integrations: [
      { name: "Kubernetes & OpenShift", type: "Cluster Operator & Helm" },
      { name: "GitHub Actions & GitLab", type: "CI/CD Native Pipeline App" },
      { name: "AWS, Azure & GCP", type: "Multi-Cloud IAM & Telemetry" },
      { name: "Terraform & Pulumi", type: "IaC Generation Engine" },
      { name: "Datadog & Prometheus", type: "Metrics & Logs Stream" },
      { name: "PagerDuty & Slack", type: "Real-Time SRE Alerts" }
    ],
    security: [
      { label: "SOC 2 Type II", desc: "Certified infrastructure access controls" },
      { label: "Read-Only Sandbox", desc: "No destructive commands without explicit human approval" },
      { label: "Air-Gapped Support", desc: "Deployable in isolated government / banking enclaves" },
      { label: "Zero Model Retention", desc: "Source code and logs never stored on public AI" }
    ],
    caseStudy: {
      client: "Global Tier-1 E-Commerce Platform",
      industry: "Retail & E-Commerce",
      headline: "How Black Friday Traffic Surges Handled 40M Requests with Zero Downtime",
      quote: "DevOps Copilot is like having 10 principal SRE architects on call 24/7. It caught a cascading database connection bottleneck 10 minutes before it could bring down checkout.",
      author: "VP of Cloud Infrastructure",
      company: "Fortune 100 Retailer",
      image: "cloud_data_center_hall.jpg",
      results: [
        { stat: "82%", label: "Reduction in MTTR outage time" },
        { stat: "99.999%", label: "Uptime achieved during peak sales" },
        { stat: "\$3.1M", label: "Annual AWS compute savings" }
      ]
    }
  }
];

const productsDir = path.join(__dirname, 'src', 'data', 'products');

// Generate the specific product files
PRODUCTS_MASTER.forEach(prod => {
  const filePath = path.join(productsDir, `${prod.id}.js`);
  const content = `import heroBg from "../../assets/fresh/${prod.bgImage}";
import feat1Img from "../../assets/fresh/${prod.features[0].image}";
import feat2Img from "../../assets/fresh/${prod.features[1].image}";
import feat3Img from "../../assets/fresh/${prod.features[2].image}";
import feat4Img from "../../assets/fresh/${prod.features[3].image}";
import caseImg from "../../assets/fresh/${prod.caseStudy.image}";

export const ${prod.id.replace(/-/g, '')}Data = ${JSON.stringify(prod, null, 2)};
${prod.id.replace(/-/g, '')}Data.hero.bgImage = heroBg;
${prod.id.replace(/-/g, '')}Data.features[0].image = feat1Img;
${prod.id.replace(/-/g, '')}Data.features[1].image = feat2Img;
${prod.id.replace(/-/g, '')}Data.features[2].image = feat3Img;
${prod.id.replace(/-/g, '')}Data.features[3].image = feat4Img;
${prod.id.replace(/-/g, '')}Data.caseStudy.image = caseImg;
`;
  fs.writeFileSync(filePath, content);
  console.log(`Generated: ${prod.id}.js`);
});

console.log('Master products batch 1 generated successfully!');
