import heroBg from "../../assets/fresh/cheerful-business-team-watching-presentation-laptop-sitting-workplace-staring-display-smiling-copy-space-business-meeting-concept.jpg";
import fellowshipPillarImg from "../../assets/fresh/innovation_programs_pillar_phd_fellowship.webp";
import cocreationPillarImg from "../../assets/fresh/innovation_programs_pillar_enterprise_cocreation.webp";
import computeGrantsPillarImg from "../../assets/fresh/innovation_programs_pillar_supercomputing_grants.webp";
import ventureStudioPillarImg from "../../assets/fresh/innovation_programs_pillar_venture_studio.webp";
import fellowshipFrontierImg from "../../assets/fresh/innovation_programs_frontier_fellowship_application.webp";
import cocreationFrontierImg from "../../assets/fresh/innovation_programs_frontier_cocreation_sprint.webp";
import computeGrantsFrontierImg from "../../assets/fresh/innovation_programs_frontier_compute_grants.webp";
import caseImg from "../../assets/fresh/innovation_programs_case_study_research_university.webp";

export const innovationProgramsData = {
  id: "innovation-programs",
  category: "Innovation Lab",
  name: "Innovation Programs",
  tagline: "Academic Fellowships, Enterprise Co-Creation Enclaves & Supercomputing GPU Grants",
  hero: {
    badge: "DEVOPS TRIO // GLOBAL PROGRAMS",
    subBadge: "FELLOWSHIPS, GRANTS & CO-CREATION",
    titleLight: "Academic Fellowships &",
    titleBold: "Compute Grants",
    description: "Empowering researchers and enterprise partners through sponsored fellowships, dedicated GPU compute allocations, and joint innovation enclaves.",
    bgImage: heroBg,
    liveBadge: "Active Cohort Open",
    primaryCtaText: "Explore Programs",
    secondaryCtaText: "Apply for Grants"
  },
  stats: [
    { value: "Fellowships", label: "Frontier PhD Programs", sub: "Fully funded research stipends" },
    { value: "SuperPOD", label: "Dedicated Compute Grants", sub: "High-performance GPU cluster hours" },
    { value: "Co-Labs", label: "Enterprise Co-Innovation", sub: "Joint intellectual property initiatives" },
    { value: "Open", label: "Publication Freedom", sub: "Unrestricted peer-reviewed scientific publishing" }
  ],
  pillars: [
    {
      id: "phd-fellowship",
      tag: "ACADEMIC EXCELLENCE",
      title: "Devopstrio Frontier AI PhD Fellowship",
      description: "Providing fully funded stipends and access to our high-performance GPU SuperPOD cluster for doctoral students working on foundational AI.",
      image: fellowshipPillarImg,
      highlights: [
        "Comprehensive tuition, living stipend, and conference travel funding",
        "Direct mentorship from senior research scientists and lab directors",
        "Open publication rights with zero proprietary patent lock-in"
      ]
    },
    {
      id: "enterprise-cocreation",
      tag: "INDUSTRY CO-CREATION",
      title: "Joint Enterprise AI Co-Innovation Enclaves",
      description: "Embedding dedicated research teams inside enterprise environments to co-design bespoke foundation models, agent swarms, and proprietary IP.",
      image: cocreationPillarImg,
      highlights: [
        "Collaborative agreements preserving customer IP ownership",
        "Quarterly breakthrough milestones with verified production deployment gates",
        "Executive briefings on emerging frontier technology trajectories"
      ]
    },
    {
      id: "compute-grants",
      tag: "COMPUTE EMPOWERMENT",
      title: "Academic Supercomputing GPU Grants",
      description: "Awarding GPU hours on high-density SuperPOD clusters to independent researchers working on AI safety, alignment, and open science.",
      image: computeGrantsPillarImg,
      highlights: [
        "Fast-track application review cycle with rapid evaluation",
        "High-bandwidth InfiniBand cluster nodes with pre-installed PyTorch & JAX",
        "Dedicated engineering support for distributed parallel training optimization"
      ]
    },
    {
      id: "venture-studio",
      tag: "COMMERCIAL SPIN-OUTS",
      title: "Frontier AI Venture Incubation Studio",
      description: "Spinning off lab-proven research breakthroughs into independent venture-backed enterprise companies with seed capital and cloud credits.",
      image: ventureStudioPillarImg,
      highlights: [
        "Pre-seed capital, legal formation, and enterprise pilot matching",
        "Dedicated cloud infrastructure credits and engineering support",
        "Direct warm intros to top-tier enterprise software venture funds"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "fellowship-portal",
      title: "PhD Fellowship Interactive Eligibility Screener",
      tabLabel: "PhD Fellowship",
      category: "Academic Grants",
      badge: "Fellowship Screener",
      image: fellowshipFrontierImg,
      summary: "Evaluate your research proposal against our annual fellowship priority areas and compute resource matching criteria.",
      features: [
        "Automated semantic keyword matching against priority research tracks",
        "Compute allocation estimator calculating required GPU cluster hours",
        "Direct submission portal with rolling peer-review feedback cycles"
      ]
    },
    {
      id: "cocreation-sprint",
      title: "Enterprise Co-Creation Sprint Designer",
      tabLabel: "Enterprise Co-Lab",
      category: "Corporate Innovation",
      badge: "Sprint Designer",
      image: cocreationFrontierImg,
      summary: "Design a customized 90-day joint research sprint embedding Devopstrio scientists with your enterprise domain experts.",
      features: [
        "Select focus areas: generative models, multi-agent swarms, or computer vision",
        "Define target intellectual property milestones and governance structures",
        "Receive a detailed timeline with assigned research leads and compute quotas"
      ]
    },
    {
      id: "compute-grant-allocator",
      title: "Academic Supercomputing Grant Portal",
      tabLabel: "Compute Grants",
      category: "Supercomputing",
      badge: "GPU Allocator",
      image: computeGrantsFrontierImg,
      summary: "Submit your open-source research proposal for immediate allocation of high-performance GPU compute on our sovereign research clusters.",
      features: [
        "Instant validation of academic email and institutional affiliation",
        "PyTorch distributed multi-node parallel benchmarking templates",
        "Automatic Slurm job script generation for seamless cluster queueing"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Academic Supercomputing Partnership",
    partner: "Leading Global Research University",
    title: "Frontier SuperPOD Allocation & Formal Proving Breakthrough",
    description: "Partnering with university computer science faculty to allocate dedicated GPU cluster hours, leading to breakthrough machine-verified mathematical proof systems.",
    image: caseImg,
    metrics: [
      { stat: "Dedicated", label: "GPU SuperPOD cluster allocation" },
      { stat: "100%", label: "Open peer-reviewed publishing" },
      { stat: "3-Year", label: "Doctoral research funding support" }
    ],
    highlights: [
      "InfiniBand-connected parallel training nodes",
      "Direct technical mentorship from senior lab staff",
      "Joint publication presented at top AI conferences"
    ],
    ctaText: "Request Program Details",
    ctaHref: "https://devopstrio.co.uk/contact#contact-form"
  },
    publicationsState: {
    heading: "Publications & Research Notes",
    tag: "PUBLICATIONS & RESEARCH NOTES",
    body: "Our formal publication list will be added as papers are finalized and peer-reviewed. In the interim, foundational preprints and quarterly research dispatches are shared through our research insights feed.",
    buttonText: "Subscribe for Updates",
    buttonHref: "https://devopstrio.co.uk/insights",
    statusBadge: "Next Release: Q4 2026",
    statusNote: "Formal verification & mechanistic interpretability preprints currently in internal review."
  },
  howWeWork: {
    tag: "COLLABORATION MODEL",
    title: "How We Support Researchers & Partners",
    steps: [
      {
        step: "01",
        name: "Proposal Review",
        desc: "Evaluate technical merit, open-science impact, and compute feasibility within 14 days."
      },
      {
        step: "02",
        name: "Resource Allocation",
        desc: "Provision dedicated SuperPOD cluster queues, direct mentorship, and seed funding."
      },
      {
        step: "03",
        name: "Collaborative Delivery",
        desc: "Publish open research papers, deploy joint IP, or spin off venture-backed initiatives."
      }
    ]
  },
  closingCta: {
    title: "Apply for Research Grants & Fellowships",
    description: "We partner with leading universities, doctoral candidates, and innovative enterprises to foster the next generation of artificial intelligence.",
    primaryText: "Explore Fellowship Careers",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Apply for a Compute Grant",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
