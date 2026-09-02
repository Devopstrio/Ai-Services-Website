import heroBg from "../../assets/fresh/talent_intelligence_portal.jpg";
import resumeParsingImg from "../../assets/unique_agents/hr_talent_onboarding.jpg";
import videoInterviewImg from "../../assets/fresh/ai_consultants_discussion.jpg";
import antiBiasImg from "../../assets/fresh/identification-vs-authontication-2.jpg";
import retentionImg from "../../assets/fresh/enterprise_innovation_hub.jpg";
import caseStudyImg from "../../assets/unique_agents/hr_agent_case.jpg";

export const aihireData = {
  id: "aihire",
  category: "AI Product Suite",
  name: "AIHIRE",
  tagline: "Hire Better Talent Faster With AI — Unified AI Recruitment, Smart Matching & Automated Interview Platform",
  hero: {
    badge: "AI RECRUITMENT PLATFORM // AIHIRE LIVE",
    titleLight: "Hire Better Talent Faster With",
    titleBold: "AIHIRE",
    description: "Source candidates, screen resumes, conduct automated AI video interviews with real-time proctoring, and make hiring decisions with confidence from one unified platform. Trusted by 1,200+ recruiters and modern hiring teams.",
    bgImage: heroBg,
    liveBadge: "Active SaaS Platform: Live on Azure Cloud",
    primaryCta: "Launch AIHIRE App",
    primaryCtaLink: "https://aihire-eahrhrdwhdd6c7ad.southindia-01.azurewebsites.net/",
    secondaryCta: "Schedule Live Demo",
    secondaryCtaLink: "https://devopstrio.co.uk/contact"
  },
  metrics: [
    { value: "70%", label: "Faster Time-to-Hire", sub: "Reduce manual screening and accelerate hiring decisions" },
    { value: "95%", label: "Candidate Matching Accuracy", sub: "AI identifies the best fit based on skills and experience" },
    { value: "1,200+", label: "Active Recruiters & Teams", sub: "Automating hiring pipelines globally with AIHIRE" },
    { value: "92%", label: "Interview Evaluation Accuracy", sub: "Structured dimensional scoring with AI proctoring" }
  ],
  overview: {
    heading: "Everything Recruiters & Hiring Managers Need to Hire Smarter",
    description: "Recruitment teams spend countless hours reviewing resumes, scheduling interviews, tracking candidates, and making subjective hiring decisions. AIHIRE removes repetitive work by combining AI resume screening, intelligent candidate ranking, and automated asynchronous video interviews into a streamlined end-to-end recruitment platform.\n\nFrom generating role-specific technical questions to real-time proctored video assessments and collaborative hiring manager scorecards, AIHIRE delivers top-tier candidates in record time.",
    keyPoints: [
      "AI Resume Screening: Automatically analyze resumes and rank candidates based on skills, experience, and job relevance",
      "Smart Candidate Matching: Real-time match scores identifying the most suitable applicants for open roles",
      "AI Video Interviews & Assessments: Conduct automated video interviews and technical assessments with detailed AI scoring",
      "Built-in AI Proctoring: Live eye-tracking, tab-switch prevention, and multi-face violation monitoring ensuring assessment integrity",
      "Collaborative ATS & Pipeline: Recruiters and hiring managers review candidates together with AI-powered insights"
    ]
  },
  features: [
    {
      id: "parsing",
      tabTitle: "AI Resume Screening",
      title: "Automated Resume Ranking & Competency Analysis",
      description: "Instantly screen hundreds of candidate resumes against job descriptions. AIHIRE extracts key technical skills, years of domain experience, and educational background to generate structured competency match scores without human bias.",
      highlights: [
        "Instant multi-format CV parsing (PDF, DOCX, LinkedIn Profiles)",
        "Deep semantic extraction of technical stacks, frameworks, and role responsibilities",
        "Automated candidate ranking from top fit to lowest match score",
        "Zero-bias algorithmic screening focusing strictly on verified capabilities"
      ],
      image: resumeParsingImg
    },
    {
      id: "interviewing",
      tabTitle: "AI Video Interviews",
      title: "Automated Asynchronous Video Interviews & Assessments",
      description: "Empower candidates to complete video interviews on their schedule. AIHIRE conducts structured AI-led interviews, dynamically evaluates spoken responses, and transcribes answers into actionable assessment reports for hiring managers.",
      highlights: [
        "Customizable question banks with role-tailored technical and behavioral prompts",
        "Automated speech-to-text transcription with sentiment and clarity analysis",
        "Dimensional scoring across problem solving, communication, and domain depth",
        "Instant candidate feedback and comparative scoring benchmarks"
      ],
      image: videoInterviewImg
    },
    {
      id: "proctoring",
      tabTitle: "AI Proctoring & Integrity",
      title: "Real-Time Assessment Security & Anti-Cheating Engine",
      description: "Ensure assessment honesty with AI-powered proctoring. AIHIRE monitors camera feeds and browser sessions in real time, alerting recruiters to tab switches, background voices, or unauthorized secondary devices.",
      highlights: [
        "Continuous AI webcam facial presence and gaze tracking",
        "Active tab-switching and clipboard copy-paste prevention",
        "Automated integrity violation log timestamped on the candidate scorecard",
        "Privacy-first compliance conforming to GDPR and candidate data rights"
      ],
      image: antiBiasImg
    },
    {
      id: "collaboration",
      tabTitle: "Collaborative Pipeline",
      title: "Centralized Candidate CRM & Hiring Workflow Studio",
      description: "Unify recruiters, hiring managers, and interviewers in one collaborative workspace. Share candidate dossiers, submit ratings, schedule final rounds, and dispatch automated offer letters seamlessly.",
      highlights: [
        "Visual drag-and-drop hiring pipeline stages from Sourced to Hired",
        "Automated email notifications and interview invitation dispatch",
        "Shared candidate evaluation notes and consensus scorecards",
        "Real-time analytics on pipeline velocity, drop-off rates, and source ROI"
      ],
      image: retentionImg
    }
  ],
  architecture: {
    heading: "The AIHIRE Platform Architecture",
    description: "Built on Microsoft Azure cloud infrastructure, AIHIRE leverages secure enterprise LLMs, computer vision proctoring engines, and high-throughput video streaming pipelines to ensure sub-second response times and 99.99% availability.",
    layers: [
      {
        title: "Candidate Sourcing & Job Requisition Layer",
        desc: "Job description generator, multi-channel job board syndication, and inbound application ingestion gateway."
      },
      {
        title: "Cognitive Matching & Scoring Engine",
        desc: "Semantic embeddings comparing resume skills against requisition criteria with multi-dimensional match algorithms."
      },
      {
        title: "Video Interview & AI Proctoring Core",
        desc: "WebRTC low-latency video streaming with on-device AI vision models detecting gaze orientation and tab focus."
      },
      {
        title: "Collaborative ATS & Governance Layer",
        desc: "Role-based access control, automated candidate status synchronization, and SOC 2 Type II data encryption."
      }
    ]
  },
  caseStudy: {
    client: "Global Tech Enterprise (5,000+ Employees)",
    industry: "Enterprise SaaS & Engineering",
    headline: "How AIHIRE Reduced Engineering Time-to-Hire by 70% Across 400 Annual Hires",
    quote: "AIHIRE transformed our tech recruitment. Automated resume screening and proctored AI video interviews cut our screening time from 3 weeks to under 48 hours, while hiring manager satisfaction surged to 96%.",
    author: "VP of Global Talent Acquisition",
    company: "Enterprise Technology Leader",
    image: caseStudyImg,
    results: [
      { stat: "70%", label: "Reduction in overall time-to-hire" },
      { stat: "95%", label: "Interview-to-offer accuracy rate" },
      { stat: "80 Hrs", label: "Recruiter screening time saved per open job" }
    ]
  },
  faq: [
    {
      q: "How does AIHIRE score candidate resumes against job descriptions?",
      a: "AIHIRE uses advanced semantic NLP models that evaluate skills, relevant past projects, and role seniority rather than simple keyword matching, calculating an objective match percentage (e.g. 94% Match)."
    },
    {
      q: "How does the AI video interview and proctoring work?",
      a: "Candidates receive a link to complete an asynchronous video interview. The platform presents structured questions, records video responses, transcribes them, and analyzes them against job competencies while monitoring for tab switching or secondary voices."
    },
    {
      q: "Can I integrate AIHIRE with our existing ATS (Workday, Greenhouse, Lever)?",
      a: "Yes! AIHIRE provides pre-built REST API and webhook integrations for leading applicant tracking systems, synchronizing candidate statuses and scorecards automatically."
    },
    {
      q: "Where can I access the live AIHIRE platform?",
      a: "You can access the live application directly at https://aihire-eahrhrdwhdd6c7ad.southindia-01.azurewebsites.net/ to start screening candidates and creating hiring pipelines."
    }
  ]
};
