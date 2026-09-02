import img1 from '../../assets/unique_solutions/legal_ai_search.jpg';
import img2 from '../../assets/fresh/neural_connections_nodes.jpg';
import img3 from '../../assets/unique_solutions/legal_ai_case.jpg';
import img4 from '../../assets/fresh/deep_learning_tensor.jpg';
import img5 from '../../assets/solutions/13.jpg';
import img6 from '../../assets/solutions/14.jpg';
import img7 from '../../assets/solutions/15.jpg';
import img8 from '../../assets/fresh/talent_intelligence_portal.jpg';

const data = {
  id: 'legal-ai',
  breadcrumbs: ['Enterprise Solutions', 'Legal AI'],
  hero: {
    titleLight: 'Legal',
    titleBold: 'AI',
    description: "Accelerate due diligence, contract lifecycle review, and e-discovery with private generative legal copilots. Extract clauses, identify non-standard liabilities, and draft briefs in minutes with verifiable citations.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "85%",
    "label": "Faster Contract Review"
  },
  {
    "value": "100%",
    "label": "Cited Case Precedents"
  },
  {
    "value": "10x",
    "label": "Faster e-Discovery Speed"
  },
  {
    "value": "Zero",
    "label": "Missed Liability Clauses"
  }
],
  overview: {
    heading: "Intelligent Contract Analytics & Autonomous Legal Due Diligence",
    paragraph: "DevOpsTRIO equips leading law firms and corporate legal departments with secure legal AI trained on millions of case precedents, statutes, and commercial agreements. Our platform reads 500-page complex contracts in seconds, identifying risk terms, indemnification gaps, and non-compete clauses with pinpoint precision.\n\nBuilt with air-gapped security and strict attorney-client privilege isolation, our legal models ensure your firm's sensitive litigation files and proprietary M&A deal structures never leave your encrypted private tenant.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Automated M&A Due Diligence",
    "desc": "Analyze thousands of legacy supplier agreements, leases, and intellectual property assignments overnight during complex merger due diligence.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Clause Extraction & Comparison",
    "desc": "Identify deviations from company standard fallback clauses in commercial NDAs, Master Service Agreements, and vendor contracts instantly.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Intelligent e-Discovery & Redaction",
    "desc": "Sift through millions of corporate emails and internal chats to surface responsive litigation evidence while auto-redacting privileged communications.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Legal Research & Brief Drafting",
    "desc": "Synthesize jurisdictional case law, statutory precedents, and judicial rulings into comprehensive legal memoranda with exact page citations.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "CONTRACT INTELLIGENCE",
    "title": "Redlining & Risk Scoring Engine",
    "text": "Automatically redline third-party contracts against internal playbook guidelines, inserting pre-approved compromise language and providing attorneys with a risk score.",
    "image": img7
  },
  {
    "tag": "SEARCH & PRECEDENTS",
    "title": "Neural Case Law Search Across Jurisdictions",
    "text": "Move beyond keyword search. Query complex legal concepts in natural language to uncover relevant state, federal, and appellate precedents that direct keyword searches miss.",
    "image": img8
  },
  {
    "tag": "PRIVILEGE PROTECTION",
    "title": "Zero Data Retention Guarantee",
    "text": "Deploy models with strict cryptographic zero-retention guarantees. Your proprietary legal briefs and client communications are never used to train foundational public models.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Magic Circle Law Firm",
    "metric": "80% Time Saved",
    "desc": "Accelerated contract due diligence review for a $4.2B international cross-border acquisition from 6 weeks to 4 business days."
  },
  {
    "company": "Fortune 100 Corporate Counsel",
    "metric": "12,000 NDAs/Yr",
    "desc": "Automated standard NDA and vendor agreement reviews, routing 75% of low-risk contracts directly for e-signature without lawyer intervention."
  },
  {
    "company": "Litigation Boutique",
    "metric": "2M Emails Filtered",
    "desc": "Isolated key smoking-gun trial exhibits from 2 million discovery documents in 48 hours, securing a multi-million dollar favorable settlement."
  }
]
};

export default data;
