import heroBg from "../../assets/fresh/innovation_quantum_chip.jpg";
import neuroImg from "../../assets/fresh/neural_connections_nodes.jpg";
import interpretImg from "../../assets/fresh/quantum_laser_optics.jpg";
import worldModelImg from "../../assets/fresh/quantum_cryo_computing.jpg";
import bioImg from "../../assets/fresh/innovation_bio_ai_lab.jpg";
import caseImg from "../../assets/fresh/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks.jpg";

export const aiResearchData = {
  id: "ai-research",
  category: "Innovation Lab",
  name: "AI Research",
  tagline: "Frontier Foundation Models, Neuro-Symbolic Logic & Mathematical Alignment",
  hero: {
    badge: "DEVOPS TRIO // RESEARCH LABS",
    subBadge: "FRONTIER AI & ADVANCED SCIENCE",
    titleLight: "Pioneering Frontier AI with",
    titleBold: "Mathematical Rigor & World Models",
    description: "DevOpsTRIO AI Research invents foundational model architectures, neuro-symbolic reasoning frameworks, and provable safety alignment — transforming theoretical breakthroughs into scalable enterprise impact.",
    bgImage: heroBg,
    liveBadge: "Active Cohort 2026-Q3"
  },
  stats: [
    { value: "420 PFLOPS", label: "Supercompute Cluster", sub: "Dedicated NVIDIA H100 & B200 SuperPOD" },
    { value: "48+ Papers", label: "Peer-Reviewed Publications", sub: "NeurIPS, ICML, ICLR & CVPR" },
    { value: "99.8%", label: "Formal Logic Verification", sub: "Machine-checked proofs in Lean 4" },
    { value: "2.4M+", label: "Open Weights Downloads", sub: "Global scientific research community" }
  ],
  pillars: [
    {
      id: "neuro-symbolic",
      tag: "MATHEMATICAL FOUNDATIONS",
      title: "Neuro-Symbolic Reasoning & Formal Logic",
      description: "Fusing deep neural representations with deterministic first-order logic solvers to eliminate arithmetic hallucinations and guarantee provable mathematical accuracy.",
      image: neuroImg,
      metricBadge: "100% Provable Logic",
      highlights: [
        "Machine-checkable formal theorem proofs in Lean 4 and Coq",
        "SMT solver constraints eliminating structural hallucinations",
        "State-of-the-art results on IMO and Putnam mathematical benchmarks"
      ]
    },
    {
      id: "interpretability",
      tag: "SAFETY & ALIGNMENT",
      title: "Mechanistic Interpretability & Circuit Analysis",
      description: "Reverse-engineering transformer networks into monosemantic circuits using Sparse Autoencoders, isolating deceptive behaviors and steering models in real time.",
      image: interpretImg,
      metricBadge: "Zero Deception",
      highlights: [
        "Millions of monosemantic features mapped across intermediate layers",
        "Real-time activation clamping preventing deceptive alignment",
        "Provably secure safety bounds for regulated enterprise deployments"
      ]
    },
    {
      id: "world-models",
      tag: "PHYSICAL SIMULATION",
      title: "Generative Physical World Models",
      description: "Training continuous 3D spatio-temporal foundation models that simulate fluid dynamics, aerodynamics, and material stress 20x faster than traditional FEM solvers.",
      image: worldModelImg,
      metricBadge: "20x Physics Speedup",
      highlights: [
        "Continuous 3D space-time representations preserving physical laws",
        "Zero-shot sim-to-real transfer for robotics and aerospace engineering",
        "Navier-Stokes fluid dynamics simulation with sub-millimeter precision"
      ]
    },
    {
      id: "biomolecular",
      tag: "LIFE SCIENCES & DEEP TECH",
      title: "Generative Biomolecular Design",
      description: "Applying SE(3)-equivariant geometric deep learning to design de novo protein structures, antibody therapeutics, and synthetic enzyme catalysts.",
      image: bioImg,
      metricBadge: "Validated Wet-Lab Bind",
      highlights: [
        "All-atom geometric diffusion generating custom therapeutic antibodies",
        "Cryo-EM structural affinity prediction with sub-angstrom resolution",
        "82% wet-lab experimental binding success rate"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "formal-math",
      title: "Lean 4 Formal Theorem Proving",
      category: "Neuro-Symbolic AI",
      badge: "Math Olympiad Solver",
      image: neuroImg,
      benchmark: "94.8% on IMO Geometry Proofs",
      summary: "Combines neural search heuristics with the Lean 4 formal verification kernel, producing machine-checked mathematical proofs with zero hallucinations.",
      features: [
        "Guided Monte Carlo Tree Search over formal Lean 4 algebraic axioms",
        "Automated lemma extraction with SMT constraint solvers",
        "Deterministic mathematical guarantees on mission-critical algorithms"
      ]
    },
    {
      id: "sae-safety",
      title: "SAE Mechanistic Circuit Steering",
      category: "Safety & Alignment",
      badge: "Deception Clamp",
      image: interpretImg,
      benchmark: "99.4% Deception Circuit Isolation",
      summary: "Extracts millions of monosemantic latent features from neural residual streams, applying real-time steering vectors to prevent deceptive responses.",
      features: [
        "Hierarchical dictionary learning across 70B+ parameter models",
        "Real-time activation clamping with zero reasoning loss",
        "Full mechanistic circuit atlas for regulated enterprise compliance"
      ]
    },
    {
      id: "transonic-physics",
      title: "Transonic Aerodynamic World Simulator",
      category: "Physical Systems",
      badge: "Fluid Dynamics",
      image: worldModelImg,
      benchmark: "22x Faster than ANSYS Fluent",
      summary: "Simulates turbulent airflow and shockwave boundary layer detachment on supersonic aircraft airfoils directly from continuous latent representations.",
      features: [
        "Continuous 3D coordinate grid with 10M spatial voxels",
        "Conservation of momentum loss functions grounded in Navier-Stokes",
        "Real-time aerodynamic coefficient rollout in sub-2 seconds"
      ]
    }
  ],
  papers: [
    {
      title: "Provable Neuro-Symbolic Synthesis for High-Assurance Enterprise Autonomous Systems",
      venue: "NeurIPS 2025 (Oral)",
      authors: "Dr. K. Vance, Dr. E. Rostova, DevOpsTRIO Research & Stanford University",
      doi: "10.48550/arXiv.2511.08921",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Scalable Mechanistic Interpretability via Hierarchical Multi-Scale Sparse Autoencoders",
      venue: "ICML 2025 (Spotlight)",
      authors: "Dr. S. Chen, M. Al-Mansoor, DevOpsTRIO Safety Group & MIT CSAIL",
      doi: "10.48550/arXiv.2508.14022",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Continuous Spatio-Temporal Diffusion for Transonic Physical Dynamics Simulation",
      venue: "CVPR 2026 (Highlight)",
      authors: "DevOpsTRIO World Models Lab & Oxford Visual Geometry Group",
      doi: "10.48550/arXiv.2602.04118",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Global Aerospace & Defense Consortium",
    collaborationType: "Frontier Research Partnership",
    headline: "How DevOpsTRIO AI Research Accelerated Quantum-Resistant Cryptography and Aerospace Simulation by 22x",
    quote: "DevOpsTRIO AI Research provides the rare combination of pure mathematical rigor and scalable production architecture. Their neuro-symbolic algorithms cut our physical flight simulator computation from 3 days to 45 seconds while maintaining provable mathematical correctness.",
    author: "Chief Scientist & Fellow",
    organization: "Global Aerospace & Advanced Computing Institute",
    image: caseImg,
    metrics: [
      { stat: "22x", label: "Faster physical dynamics simulation" },
      { stat: "100%", label: "Mathematically proven safety bounds" },
      { stat: "$14.2M", label: "Annual High-Performance Compute savings" }
    ]
  }
};
