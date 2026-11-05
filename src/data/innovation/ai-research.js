import heroBg from "../../assets/fresh/innovation_quantum_chip.jpg";
import neuroPillarImg from "../../assets/fresh/ai_research_pillar_neuro_symbolic.webp";
import interpretPillarImg from "../../assets/fresh/ai_research_pillar_mechanistic_interpretability.webp";
import worldModelPillarImg from "../../assets/fresh/ai_research_pillar_physical_world_models.webp";
import bioPillarImg from "../../assets/fresh/ai_research_pillar_biomolecular_design.webp";
import formalMathFrontierImg from "../../assets/fresh/ai_research_frontier_lean4_formal_proving.webp";
import saeFrontierImg from "../../assets/fresh/ai_research_frontier_sae_circuit_steering.webp";
import transonicFrontierImg from "../../assets/fresh/ai_research_frontier_transonic_simulator.webp";
import caseImg from "../../assets/fresh/ai_research_global_aerospace_consortium.webp";

export const aiResearchData = {
  id: "ai-research",
  category: "Innovation Lab",
  name: "AI Research",
  tagline: "Frontier Foundation Models, Neuro-Symbolic Logic & Mathematical Alignment",
  hero: {
    badge: "DEVOPS TRIO // RESEARCH LABS",
    subBadge: "FRONTIER AI & ADVANCED SCIENCE",
    titleLight: "Frontier AI &",
    titleBold: "World Models",
    description: "Pioneering neuro-symbolic reasoning, mechanistic interpretability, and physical world models for high-assurance enterprise systems.",
    bgImage: heroBg,
    liveBadge: "Active Cohort 2026-Q3",
    primaryCtaText: "Explore Research Areas",
    secondaryCtaText: "View Capabilities"
  },
  stats: [
    { value: "GPU", label: "Accelerated research compute", sub: "Dedicated compute cluster" },
    { value: "4", label: "Core research pillars", sub: "Foundational focus domains" },
    { value: "Lean 4", label: "Formal proof workflows", sub: "Machine-checked verification" },
    { value: "Open", label: "Research publication approach", sub: "Community benchmarks & papers" }
  ],
  pillars: [
    {
      id: "neuro-symbolic",
      tag: "MATHEMATICAL FOUNDATIONS",
      title: "Neuro-Symbolic Reasoning & Formal Logic",
      description: "Fusing deep neural representations with deterministic first-order logic solvers to check arithmetic consistency and improve formal mathematical accuracy.",
      image: neuroPillarImg,
      highlights: [
        "Machine-checkable formal proofs using Lean 4 and Coq",
        "SMT solver constraints to check structural consistency of outputs",
        "Evaluation on olympiad-style mathematical benchmarks"
      ]
    },
    {
      id: "interpretability",
      tag: "SAFETY & ALIGNMENT",
      title: "Mechanistic Interpretability & Circuit Analysis",
      description: "Reverse-engineering transformer networks into monosemantic circuits using Sparse Autoencoders to identify internal features and guide model behaviour.",
      image: interpretPillarImg,
      highlights: [
        "Sparse autoencoder analysis of intermediate model features",
        "Activation steering research for controlling model behaviour",
        "Exploring verifiable safety constraints for regulated deployments"
      ]
    },
    {
      id: "world-models",
      tag: "PHYSICAL SIMULATION",
      title: "Generative Physical World Models",
      description: "Training continuous 3D spatio-temporal models that aim to simulate fluid dynamics and material stress faster than traditional finite element solvers.",
      image: worldModelPillarImg,
      highlights: [
        "Continuous space-time representations that encode physical constraints",
        "Research into simulation-to-real transfer for robotics and aerospace",
        "Fluid dynamics simulation research based on Navier-Stokes formulations"
      ]
    },
    {
      id: "biomolecular",
      tag: "LIFE SCIENCES & DEEP TECH",
      title: "Generative Biomolecular Design",
      description: "Applying SE(3)-equivariant geometric deep learning to protein structures, antibody therapeutics, and synthetic enzyme research.",
      image: bioPillarImg,
      highlights: [
        "Geometric diffusion models for protein and antibody design research",
        "Structure-based binding affinity prediction research",
        "Equivariant neural architectures for multi-conformation molecular modeling"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "formal-math",
      title: "Neuro-Symbolic AI — Prototype",
      tabLabel: "Lean 4",
      category: "Neuro-Symbolic AI",
      badge: "Math Olympiad Solver",
      image: formalMathFrontierImg,
      summary: "Combines neural search heuristics with the Lean 4 proof kernel to produce machine-checked proofs, so outputs can be verified rather than trusted.",
      features: [
        "Monte Carlo tree search guided over Lean 4 algebraic axioms",
        "Automated lemma extraction with SMT constraint solvers",
        "Formal verification applied to selected mission-critical algorithm components"
      ]
    },
    {
      id: "sae-safety",
      title: "SAE Mechanistic Circuit Steering",
      tabLabel: "SAE",
      category: "Safety & Alignment",
      badge: "Behaviour Steering",
      image: saeFrontierImg,
      summary: "Extracts monosemantic latent features from neural residual streams, applying real-time steering vectors to guide model responses.",
      features: [
        "Hierarchical dictionary learning across foundational architectures",
        "Real-time activation clamping and feature steering",
        "Mechanistic circuit mapping for regulated enterprise compliance"
      ]
    },
    {
      id: "transonic-physics",
      title: "Transonic Aerodynamic World Simulator",
      tabLabel: "Transonic Simulator",
      category: "Physical Systems",
      badge: "Fluid Dynamics",
      image: transonicFrontierImg,
      summary: "Simulates airflow dynamics and boundary layer detachment from continuous latent spatial representations.",
      features: [
        "Continuous 3D coordinate grid with spatial voxel representations",
        "Conservation of momentum loss formulations grounded in Navier-Stokes",
        "Near real-time aerodynamic coefficient rollout"
      ]
    }
  ],
  // Frontier Research Partnership per user specification
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Frontier Research Partnership",
    partner: "Global Aerospace & Defense Consortium",
    title: "Aerodynamic World Simulation & Verifiable Flight Modeling",
    description: "Joint research applying neuro-symbolic reasoning and continuous spatio-temporal world models to transonic aircraft dynamics, achieving machine-verified stability constraints across turbulent flight envelopes.",
    image: caseImg,
    metrics: [
      { stat: "22x", label: "Faster physical dynamics simulation" },
      { stat: "100%", label: "Mathematically checked stability bounds" },
      { stat: "Open", label: "Shared benchmark validation dataset" }
    ],
    highlights: [
      "Continuous Navier-Stokes spatio-temporal modeling",
      "Formal proof constraints integrated into flight telemetry",
      "Joint validation across isolated sovereign research clusters"
    ],
    ctaText: "Request Research Brief",
    ctaHref: "https://devopstrio.co.uk/contact#contact-form"
  },
  // Empty-state publication info per §4.5
    publicationsState: {
    heading: "Publications & Research Notes",
    tag: "PUBLICATIONS & RESEARCH NOTES",
    body: "Our formal publication list will be added as papers are finalized and peer-reviewed. In the interim, foundational preprints and quarterly research dispatches are shared through our research insights feed.",
    buttonText: "Subscribe for Updates",
    buttonHref: "https://devopstrio.co.uk/insights",
    statusBadge: "Next Release: Q4 2026",
    statusNote: "Formal verification & mechanistic interpretability preprints currently in internal review."
  },
  closingCta: {
    title: "Work with Our Research Team",
    description: "We partner with academic institutions, frontier research labs, and enterprise engineering teams to translate theoretical machine learning breakthroughs into verifiable production systems.",
    primaryText: "Apply for Research Fellowship",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Discuss a Research Collaboration",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
