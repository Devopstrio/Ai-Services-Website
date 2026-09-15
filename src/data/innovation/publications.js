import heroBg from "../../assets/fresh/dark_ai_neural_grid.jpg";
import pub1 from "../../assets/fresh/neural_connections_nodes.jpg";
import pub2 from "../../assets/fresh/quantum_laser_optics.jpg";
import pub3 from "../../assets/fresh/quantum_cryo_computing.jpg";
import pub4 from "../../assets/fresh/innovation_bio_ai_lab.jpg";
import caseImg from "../../assets/fresh/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks.jpg";

export const publicationsData = {
  id: "publications",
  category: "Innovation Lab",
  name: "Publications",
  tagline: "Peer-Reviewed Scientific Papers, Technical Whitepapers & Mathematical Preprints",
  hero: {
    badge: "INNOVATION LAB // SCIENTIFIC PAPERS",
    subBadge: "OPEN ACCESS & PEER-REVIEWED",
    titleLight: "Advancing Global Knowledge with",
    titleBold: "Devopstrio Scientific Publications",
    description: "Access our full library of peer-reviewed foundational research papers published across NeurIPS, ICML, ICLR, CVPR, and top scientific journals with reproducible code repositories.",
    bgImage: heroBg,
    liveBadge: "48+ Peer-Reviewed Papers"
  },
  stats: [
    { value: "48+ Papers", label: "Peer-Reviewed Citations", sub: "Published across top tier A* conferences" },
    { value: "100%", label: "Open Access Availability", sub: "Full PDFs and dataset weights publicly available" },
    { value: "3,800+", label: "Academic Citations (h-index: 28)", sub: "Referenced by global AI researchers" },
    { value: "100%", label: "Reproducible Codebases", sub: "Every paper paired with verified GitHub artifacts" }
  ],
  pillars: [
    {
      id: "formal-math-papers",
      tag: "NEURO-SYMBOLIC & LOGIC",
      title: "Foundations of Neuro-Symbolic Theorem Proving",
      description: "Landmark publications formalizing the integration of deep transformer policies with interactive theorem provers (Lean 4, Coq) and SMT constraint solvers.",
      image: pub1,
      metricBadge: "NeurIPS Oral 2025",
      highlights: [
        "Proves zero arithmetic hallucination bounds across Olympiad mathematics",
        "Introduces automated lemma decomposition algorithms for high-dimensional geometry",
        "Includes complete machine-checked Lean 4 formal verification proofs"
      ]
    },
    {
      id: "interpretability-papers",
      tag: "ALIGNMENT & SAFETY",
      title: "Scalable Mechanistic Interpretability & Circuit Analysis",
      description: "Breakthrough papers introducing hierarchical Sparse Autoencoders (SAE) to map monosemantic feature directions in 70B+ parameter language models.",
      image: pub2,
      metricBadge: "ICML Spotlight 2025",
      highlights: [
        "Unpacks 16.3 million latent features across intermediate transformer layers",
        "Demonstrates real-time activation steering vectors reducing sycophancy by 98%",
        "Establishes standardized safety audit benchmarks for regulated enterprise AI"
      ]
    },
    {
      id: "world-models-papers",
      tag: "PHYSICAL SIMULATION",
      title: "Continuous Spatio-Temporal Diffusion for World Modeling",
      description: "Peer-reviewed research formulating continuous 3D generative world models that simulate fluid mechanics and physical stress 20x faster than traditional FEM.",
      image: pub3,
      metricBadge: "CVPR Highlight 2026",
      highlights: [
        "Physics-informed loss functions enforcing Navier-Stokes conservation of momentum",
        "Zero-shot sim-to-real robotic policy transfer with sub-millimeter precision",
        "Open-weights model and aerodynamic simulation dataset published on Hugging Face"
      ]
    },
    {
      id: "multi-agent-papers",
      tag: "AUTONOMOUS DYNAMICS",
      title: "Game-Theoretic Emergence in Large-Scale Agent Swarms",
      description: "Award-winning papers modeling decentralized cooperation and auction dynamics across swarms of over 10,000 heterogeneous cognitive sub-agents.",
      image: pub4,
      metricBadge: "ICLR Best Paper 2026",
      highlights: [
        "Proves Pareto-optimal convergence in constrained multi-agent communication networks",
        "Discovers emergent cooperative bidding strategies cutting cloud spend by 41%",
        "Open-source SwarmMesh runtime benchmarks with reproducible Docker traces"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "pub-formal-proofs",
      title: "Provable Neuro-Symbolic Synthesis (NeurIPS 2025)",
      category: "Neuro-Symbolic Math",
      badge: "Oral Presentation",
      image: pub1,
      benchmark: "94.8% IMO Proof Accuracy",
      summary: "Full paper introducing bounded tree search over Lean 4 formal axioms to guarantee zero structural hallucination in high-assurance engineering systems.",
      features: [
        "Authors: Dr. K. Vance, Dr. E. Rostova & Stanford University Collaborators",
        "DOI: 10.48550/arXiv.2511.08921",
        "Full reproducible GitHub codebase and Lean 4 libraries included"
      ]
    },
    {
      id: "pub-mechanistic-sae",
      title: "Hierarchical Sparse Autoencoders (ICML 2025)",
      category: "Safety & Interpretability",
      badge: "Spotlight Paper",
      image: pub2,
      benchmark: "99.4% Deception Isolation",
      summary: "Pioneering paper demonstrating real-time activation steering on 70B parameter models to eliminate deceptive alignment without degrading reasoning.",
      features: [
        "Authors: Dr. S. Chen, M. Al-Mansoor & MIT CSAIL Fellows",
        "DOI: 10.48550/arXiv.2508.14022",
        "Includes interactive web visualizer for 16M monosemantic neurons"
      ]
    },
    {
      id: "pub-spatio-temporal",
      title: "Continuous Spatio-Temporal Diffusion (CVPR 2026)",
      category: "World Models",
      badge: "Highlight Paper",
      image: pub3,
      benchmark: "20x Faster than FEM",
      summary: "Presents continuous 3D world models learning physics-grounded aerodynamic and material stress dynamics directly from raw sensor telemetry.",
      features: [
        "Authors: Devopstrio World Models Lab & Oxford Visual Geometry Group",
        "DOI: 10.48550/arXiv.2602.04118",
        "Published dataset covering 50,000 hours of continuous physics rollouts"
      ]
    }
  ],
  papers: [
    {
      title: "Provable Neuro-Symbolic Synthesis for High-Assurance Enterprise Autonomous Systems",
      venue: "NeurIPS 2025 (Oral Presentation)",
      authors: "Dr. K. Vance, Dr. E. Rostova, Devopstrio AI Research & Stanford University Collaborators",
      doi: "10.48550/arXiv.2511.08921",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Scalable Mechanistic Interpretability via Hierarchical Multi-Scale Sparse Autoencoders",
      venue: "ICML 2025 (Spotlight Paper)",
      authors: "Dr. S. Chen, M. Al-Mansoor, Devopstrio Safety Group & MIT CSAIL Fellows",
      doi: "10.48550/arXiv.2508.14022",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Emergent Cooperative Strategies in Large-Scale Asymmetric Multi-Agent Economies",
      venue: "ICLR 2026 (Outstanding Paper Award)",
      authors: "Devopstrio Autonomous Systems Group & Cambridge Computer Laboratory",
      doi: "10.48550/arXiv.2601.09412",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Continuous Spatio-Temporal Diffusion for Transonic Physical Dynamics Simulation",
      venue: "CVPR 2026 (Highlight Paper)",
      authors: "Devopstrio World Models Lab & Oxford Visual Geometry Group",
      doi: "10.48550/arXiv.2602.04118",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "International Scientific Research Consortium & University Network",
    collaborationType: "Academic Citation & Open Science",
    headline: "How Devopstrio's Open Research Publications Powered Breakthrough Findings at Over 100 Universities Worldwide",
    quote: "Devopstrio's commitment to open scientific publishing and reproducible code has accelerated our graduate research program immensely. Their neuro-symbolic papers set the standard for mathematical rigor in modern AI.",
    author: "Director of Institute for Artificial Intelligence",
    organization: "Global Research University Consortium",
    image: caseImg,
    metrics: [
      { stat: "3,800+", label: "Academic paper citations worldwide" },
      { stat: "100%", label: "Open-access peer-reviewed availability" },
      { stat: "48+", label: "Papers accepted at top-tier conferences" }
    ]
  }
};
