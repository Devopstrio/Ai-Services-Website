import heroBg from "../../assets/fresh/cheerful-business-team-watching-presentation-laptop-sitting-workplace-staring-display-smiling-copy-space-business-meeting-concept.jpg";
import prog1 from "../../assets/fresh/ai_consultants_discussion.jpg";
import prog2 from "../../assets/fresh/interested-coworkers-with-new-project.jpg";
import prog3 from "../../assets/fresh/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data.jpg";
import prog4 from "../../assets/fresh/enterprise_innovation_hub.jpg";
import caseImg from "../../assets/fresh/tech_architect_whiteboard.jpg";

export const innovationProgramsData = {
  id: "innovation-programs",
  category: "Innovation Lab",
  name: "Innovation Programs",
  tagline: "Academic Fellowships, Enterprise Co-Creation Enclaves & Supercomputing GPU Grants",
  hero: {
    badge: "INNOVATION LAB // GLOBAL PROGRAMS",
    subBadge: "FELLOWSHIPS, GRANTS & CO-CREATION",
    titleLight: "Fostering the Next Generation of AI with",
    titleBold: "Devopstrio Innovation Programs",
    description: "We empower top researchers, academic institutions, and forward-thinking enterprise innovators through sponsored PhD fellowships, dedicated GPU compute allocations, and joint industry co-creation labs.",
    bgImage: heroBg,
    liveBadge: "2026-2027 Cohort Open"
  },
  stats: [
    { value: "$20M+", label: "Annual Compute & Research Grants", sub: "Allocated to universities & startup innovators" },
    { value: "45+ Universities", label: "Global Academic Partners", sub: "Stanford, MIT, Cambridge, Oxford, CMU, ETH" },
    { value: "120+ Fellows", label: "Sponsored PhD & Postdocs", sub: "Publishing breakthrough peer-reviewed research" },
    { value: "32 Co-Labs", label: "Enterprise Co-Creation Centers", sub: "Building joint IP with Fortune 500 leaders" }
  ],
  pillars: [
    {
      id: "phd-fellowship",
      tag: "ACADEMIC EXCELLENCE",
      title: "Devopstrio Frontier AI PhD Fellowship",
      description: "Providing 3-year fully funded stipends and unlimited access to our 420 PFLOPS H100 SuperPOD cluster for doctoral students working on foundational AI.",
      image: prog1,
      metricBadge: "Full 3-Yr Funding",
      highlights: [
        "100% tuition, living stipend, and conference travel grant coverage",
        "Direct mentorship from senior research scientists and lab directors",
        "Open publication rights with zero proprietary patent lock-in"
      ]
    },
    {
      id: "enterprise-cocreation",
      tag: "INDUSTRY CO-CREATION",
      title: "Joint Enterprise AI Co-Innovation Enclaves",
      description: "Embedding dedicated research teams inside enterprise environments to co-design bespoke foundation models, agent swarms, and proprietary IP.",
      image: prog4,
      metricBadge: "Joint IP Creation",
      highlights: [
        "Shared equity and licensing agreements preserving customer IP ownership",
        "Quarterly breakthrough milestones with verified production deployment gates",
        "Executive board briefings on emerging frontier technology trajectories"
      ]
    },
    {
      id: "compute-grants",
      tag: "COMPUTE EMPOWERMENT",
      title: "Academic Supercomputing GPU Grants",
      description: "Awarding 10,000+ GPU hours on NVIDIA H100 and B200 SuperPOD clusters to independent researchers working on AI safety, alignment, and open science.",
      image: prog3,
      metricBadge: "10,000+ GPU Hours",
      highlights: [
        "Fast-track application review cycle with decisions in under 14 days",
        "High-bandwidth 3.2 Tbps InfiniBand cluster nodes with pre-installed PyTorch & JAX",
        "Dedicated engineering support for distributed parallel training optimization"
      ]
    },
    {
      id: "startup-incubation",
      tag: "VENTURE ACCELERATION",
      title: "Frontier AI Venture Studio Incubation",
      description: "Partnering with early-stage deep tech founders to provide seed capital, architecture design, and direct distribution to our enterprise customer base.",
      image: prog2,
      metricBadge: "Seed to Series A",
      highlights: [
        "Up to $500k in non-dilutive compute credits and seed architecture support",
        "Direct sandbox pilots with Fortune 500 banking, retail, and healthcare CIOs",
        "Legal and compliance scaffolding for EU AI Act and SOC 2 Type II"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "fellowship-portal",
      title: "Academic Fellowship Application Track",
      category: "PhD Programs",
      badge: "Fall 2026 Applications",
      image: prog1,
      benchmark: "100% Fully Funded",
      summary: "Explore application tracks across Neuro-Symbolic Logic, Mechanistic Interpretability, Multimodal World Models, and Quantum Algorithms.",
      features: [
        "Open to PhD candidates worldwide",
        "Includes 50,000 H100 GPU compute hours",
        "Annual summer residency at our central lab campus"
      ]
    },
    {
      id: "co-lab-portal",
      title: "Enterprise Co-Innovation Sprint",
      category: "Enterprise Partnership",
      badge: "6-Month Joint Sprint",
      image: prog4,
      benchmark: "Guaranteed Production PoC",
      summary: "Collaborative 6-month research sprint solving domain-specific bottleneck challenges with customized multi-agent foundation models.",
      features: [
        "Dedicated team of 4 senior AI research scientists",
        "Bi-weekly sprint demos with empirical benchmark tracking",
        "Full enterprise source code and model weights handover"
      ]
    },
    {
      id: "compute-grant-portal",
      title: "Open Science Compute Grant Pool",
      category: "Compute Allocation",
      badge: "14-Day Fast Track",
      image: prog3,
      benchmark: "420 PFLOPS Available",
      summary: "Apply for non-dilutive high-performance GPU allocations to train academic pre-prints, open-weights models, and benchmark evaluation suites.",
      features: [
        "Zero compute cost for verified academic institutions",
        "Slurm cluster access with automated checkpointing",
        "Published results featured on our global research portal"
      ]
    }
  ],
  papers: [
    {
      title: "A Model for Public-Private Foundational AI Co-Innovation in Regulated Industries",
      venue: "Harvard Business Review Tech 2025",
      authors: "Devopstrio Innovation Leadership & Stanford Graduate School of Business",
      doi: "10.48550/arXiv.2506.09112",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Maximizing Academic Research Velocity Through Democratized Supercomputing Grants",
      venue: "Communications of the ACM 2025",
      authors: "Devopstrio Academic Directorate & MIT CSAIL",
      doi: "10.48550/arXiv.2507.12091",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Frameworks for Open Intellectual Property in Collaborative Frontier Model Research",
      venue: "Oxford Journal of Law and Technology 2025",
      authors: "Devopstrio Legal & University of Cambridge",
      doi: "10.48550/arXiv.2510.03811",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Leading Global Research University & Health System",
    collaborationType: "PhD Fellowship & Compute Grant",
    headline: "How a Devopstrio Sponsored PhD Fellowship Discovered a Novel Protein Folding Algorithm for Rare Oncology Targets",
    quote: "The combination of Devopstrio's supercomputing cluster and expert research mentorship allowed our doctoral team to achieve what would have taken 5 years in just 9 months.",
    author: "Chair of Computational Biology",
    organization: "Top-5 Global Medical Research University",
    image: caseImg,
    metrics: [
      { stat: "9 Months", label: "From thesis proposal to wet-lab validation" },
      { stat: "100,000", label: "GPU hours provided via compute grant" },
      { stat: "Nature Bio", label: "Lead publication accepted with high impact" }
    ]
  }
};
