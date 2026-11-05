import heroBg from "../../assets/fresh/dark_ai_neural_grid.jpg";
import pub1 from "../../assets/fresh/publications_pillar_formal_proofs.webp";
import pub2 from "../../assets/fresh/publications_pillar_interpretability.webp";
import pub3 from "../../assets/fresh/publications_pillar_world_models.webp";
import pub4 from "../../assets/fresh/publications_pillar_agent_swarms.webp";
import frontier1 from "../../assets/fresh/publications_frontier_neuro_symbolic.webp";
import frontier2 from "../../assets/fresh/publications_frontier_sparse_autoencoders.webp";
import frontier3 from "../../assets/fresh/publications_frontier_spatio_temporal.webp";
import caseImg from "../../assets/fresh/publications_case_study.webp";

export const publicationsData = {
  id: "publications",
  category: "Innovation Lab",
  name: "Publications",
  tagline: "Peer-Reviewed Scientific Papers, Technical Whitepapers & Mathematical Preprints",
  hero: {
    badge: "DEVOPS TRIO // SCIENTIFIC PAPERS",
    subBadge: "OPEN ACCESS & PEER-REVIEWED",
    titleLight: "Scientific Papers &",
    titleBold: "Research Preprints",
    description: "Open-access foundational research, formal verification preprints, and mechanistic safety benchmarks published with reproducible artifacts.",
    bgImage: heroBg,
    liveBadge: "Active Research Catalog",
    primaryCtaText: "Browse Papers",
    secondaryCtaText: "View Preprints"
  },
  stats: [
    { value: "Preprints", label: "Foundational Papers", sub: "Peer-reviewed research and dispatches" },
    { value: "Open", label: "Open Access Availability", sub: "Preprints and benchmark codebases" },
    { value: "Lean 4", label: "Machine-Checked Logic", sub: "Formally verified theorem proofs" },
    { value: "Artifacts", label: "Reproducible Datasets", sub: "Verified evaluation baselines" }
  ],
  pillars: [
    {
      id: "formal-math-papers",
      tag: "NEURO-SYMBOLIC & LOGIC",
      title: "Foundations of Neuro-Symbolic Theorem Proving",
      description: "Publications formalizing the integration of deep transformer policies with interactive theorem provers (Lean 4, Coq) and SMT constraint solvers.",
      image: pub1,
      highlights: [
        "Explores formal verification bounds across mathematical problem solving",
        "Introduces automated lemma decomposition algorithms for high-dimensional geometry",
        "Includes complete machine-checked Lean 4 formal verification proofs"
      ]
    },
    {
      id: "interpretability-papers",
      tag: "ALIGNMENT & SAFETY",
      title: "Scalable Mechanistic Interpretability & Circuit Analysis",
      description: "Research introducing hierarchical Sparse Autoencoders (SAE) to map monosemantic feature directions in large foundation models.",
      image: pub2,
      highlights: [
        "Analyzes millions of latent features across intermediate transformer layers",
        "Demonstrates real-time activation steering vectors guiding model behavior",
        "Establishes standardized safety audit benchmarks for regulated enterprise AI"
      ]
    },
    {
      id: "world-models-papers",
      tag: "PHYSICAL SIMULATION",
      title: "Continuous Spatio-Temporal Diffusion for World Modeling",
      description: "Research formulating continuous 3D generative world models that simulate fluid mechanics and physical stress faster than traditional solvers.",
      image: pub3,
      highlights: [
        "Physics-informed loss functions enforcing Navier-Stokes conservation of momentum",
        "Sim-to-real robotic policy transfer with sub-millimeter precision",
        "Open-weights model and aerodynamic simulation dataset published for review"
      ]
    },
    {
      id: "swarm-consensus-papers",
      tag: "DISTRIBUTED SYSTEMS",
      title: "Decentralized Consensus in Large-Scale Agent Swarms",
      description: "Investigating distributed consensus protocols and game-theoretic equilibrium discovery across thousands of collaborating cognitive agents.",
      image: pub4,
      highlights: [
        "Proves convergence bounds for decentralized agent market mechanisms",
        "Sub-millisecond Byzantine fault-tolerant consensus over noisy networks",
        "Evaluated on real-time multi-cloud computing resource allocation testbeds"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "neuro-symbolic-preprint",
      title: "Automated Lemma Synthesis with Guided Lean 4 Search",
      tabLabel: "Neuro-Symbolic",
      category: "Preprint // Formal Logic",
      badge: "Peer-Reviewed",
      image: frontier1,
      summary: "Demonstrates how combining Monte Carlo tree search with neural heuristic priors enables automated synthesis of non-trivial mathematical proofs.",
      features: [
        "Full preprint PDF with formal mathematical proofs and appendix",
        "Interactive proof explorer tracing each Lean 4 tactic step",
        "Open GitHub repository with complete replication instructions"
      ]
    },
    {
      id: "sae-monosemantic-preprint",
      title: "Dictionary Learning for Monosemantic Circuit Dissection",
      tabLabel: "Sparse Autoencoders",
      category: "Preprint // Mechanistic Safety",
      badge: "Preprint",
      image: frontier2,
      summary: "Scales sparse dictionary learning across 128 layers of dense transformers to extract monosemantic circuits and steer model generation.",
      features: [
        "Monosemantic feature visualizer exploring learned dictionary representations",
        "Safety evaluation suite testing sycophancy reduction under steering",
        "Trained SAE weight checkpoints downloadable via Hugging Face Hub"
      ]
    },
    {
      id: "navier-stokes-diffusion",
      title: "Equivariant World Diffusion for Fluid Mechanics",
      tabLabel: "World Models",
      category: "Preprint // Physical Simulation",
      badge: "Conference Highlight",
      image: frontier3,
      summary: "Introduces an SE(3)-equivariant continuous diffusion architecture simulating turbulent boundary layers and high-velocity aerodynamic shock waves.",
      features: [
        "Direct comparison graphs against traditional finite element solvers",
        "Interactive 3D airflow velocity field visualizer running in WebGL",
        "Standardized aerospace benchmarking dataset with wind tunnel validation"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Academic Research Publishing",
    partner: "International Consortium of Mathematical AI Researchers",
    title: "Neuro-Symbolic Theorem Proving & Formal Verification",
    description: "Joint publication formalizing the integration of deep learning with machine-checked Lean 4 proof kernels, establishing verifiable correctness standards.",
    image: caseImg,
    metrics: [
      { stat: "Lean 4", label: "Machine-checked formal verification" },
      { stat: "100%", label: "Open access publication" },
      { stat: "Reproducible", label: "Publicly verified code artifacts" }
    ],
    highlights: [
      "Rigorous mathematical formulations and peer-reviewed methodology",
      "Open datasets and model weights published for verification",
      "Collaborative research across leading academic institutions"
    ],
    ctaText: "Request Preprint Package",
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
    title: "How We Publish Foundational Research",
    steps: [
      {
        step: "01",
        name: "Research Problem",
        desc: "Identify fundamental theoretical questions in AI alignment, formal logic, and simulation."
      },
      {
        step: "02",
        name: "Formal Proof",
        desc: "Construct rigorous mathematical proofs and test empirically across GPU clusters."
      },
      {
        step: "03",
        name: "Open Publication",
        desc: "Publish preprints openly with machine-checked verification scripts and code artifacts."
      }
    ]
  },
  closingCta: {
    title: "Publish with Our Research Group",
    description: "We collaborate with academic researchers, doctoral candidates, and enterprise scientists to push the boundaries of foundational artificial intelligence.",
    primaryText: "Explore Research Careers",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Submit Research Collaboration",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
