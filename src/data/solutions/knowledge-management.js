import img1 from '../../assets/fresh/ai_consultants_discussion.jpg';
import img2 from '../../assets/fresh/lead_developer_mentor.jpg';
import img3 from '../../assets/fresh/executive_boardroom_ai.jpg';
import img4 from '../../assets/fresh/agent_devops_cicd.jpg';
import img5 from '../../assets/fresh/dashboard_executive_kpi.jpg';
import img6 from '../../assets/fresh/modern-interior-design-office.jpg';
import img7 from '../../assets/fresh/cheerful-business-team-watching-presentation-laptop-sitting-workplace-staring-display-smiling-copy-space-business-meeting-concept.jpg';
import img8 from '../../assets/fresh/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data.jpg';

const data = {
  id: 'knowledge-management',
  breadcrumbs: ['Enterprise Solutions', 'Knowledge Management'],
  hero: {
    titleLight: 'Knowledge',
    titleBold: 'Management',
    description: "Break enterprise information silos with private Retrieval-Augmented Generation (RAG) and Neural Search. Connect Slack, Confluence, SharePoint, and code repositories into a unified, halluncination-free knowledge engine.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "40%",
    "label": "Reduction in Research Time"
  },
  {
    "value": "100%",
    "label": "Grounded & Cited Answers"
  },
  {
    "value": "200+",
    "label": "Native Data Connectors"
  },
  {
    "value": "Zero",
    "label": "Data Leakage Across Roles"
  }
],
  overview: {
    heading: "Enterprise Neural Search & Grounded Conversational RAG",
    paragraph: "Devopstrio helps global organizations eliminate the hundreds of hours engineers and business leaders lose every year searching for critical documents. Our neural knowledge platform indexes enterprise data across diverse storage silos while enforcing granular, real-time Role-Based Access Control (RBAC).\n\nWhen employees ask questions in natural language, our systems generate authoritative, cited answers drawn directly from verified company documentation—ensuring absolute factual accuracy, zero AI hallucinations, and airtight corporate data privacy.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Unified Multi-Source Neural Indexing",
    "desc": "Index Notion, Jira, SharePoint, Google Drive, Zendesk, and GitHub into a unified vector space with automated real-time synchronization.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Granular ACL & Permission Sync",
    "desc": "Ensure users only receive answers synthesized from documents they have explicit authorization to view in the underlying source systems.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Interactive Codebase Chat",
    "desc": "Enable software engineering teams to query legacy architectures, API patterns, and deployment configurations directly from their IDE.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Knowledge Gap Diagnostics",
    "desc": "Identify frequently queried topics with missing or outdated documentation to guide knowledge curation and corporate wiki maintenance.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "HYBRID RETRIEVAL",
    "title": "Dense Vector & BM25 Keyword Hybrid Search",
    "text": "Combine dense semantic embeddings with precise lexical matching to handle technical jargon, part numbers, acronyms, and conceptual questions with equal precision.",
    "image": img7
  },
  {
    "tag": "FACTUAL VERIFICATION",
    "title": "Citation Highlighting & Source Deep-Linking",
    "text": "Every generated insight contains verifiable markdown citations that link directly to the exact page, slide, or code line in the source system, allowing users to verify facts with a single click.",
    "image": img8
  },
  {
    "tag": "ENTERPRISE SECURITY",
    "title": "Air-Gapped & VPC On-Premise Deployments",
    "text": "Deploy state-of-the-art vector databases and open-weights LLMs entirely within your private cloud. Your intellectual property is never transmitted to third-party public model providers.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Global Management Consulting Firm",
    "metric": "35,000 Staff",
    "desc": "Connected 15 years of proprietary research decks and engagement models into a single conversational portal used by 35,000 consultants worldwide."
  },
  {
    "company": "Biotech Drug Discovery Firm",
    "metric": "75% Faster",
    "desc": "Accelerated regulatory filing prep by 75% by enabling research scientists to query 500,000 pages of clinical trial findings instantly."
  },
  {
    "company": "Fintech Unicorn",
    "metric": "Zero Onboarding Lag",
    "desc": "Cut new software engineer onboarding time from 8 weeks to 2 weeks with an intelligent architecture copilot that explains complex microservices."
  }
]
};

export default data;
