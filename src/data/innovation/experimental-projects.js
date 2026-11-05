import heroBg from "../../assets/fresh/innovation_robotics_arm.jpg";
import moonshot1 from "../../assets/fresh/innovation_vr_workspace.jpg";
import moonshot2 from "../../assets/fresh/microchip_wafer_lithography.jpg";
import moonshot3 from "../../assets/fresh/quantum_cryo_computing.jpg";
import moonshot4 from "../../assets/fresh/innovation_bio_ai_lab.jpg";
import roboticsPillarImg from "../../assets/fresh/experimental_projects_pillar_dexterous_robotics.webp";
import spatialPillarImg from "../../assets/fresh/experimental_projects_pillar_4d_neural_radiance.webp";
import quantumPillarImg from "../../assets/fresh/experimental_projects_pillar_quantum_gate_synthesis.webp";
import biologyPillarImg from "../../assets/fresh/experimental_projects_pillar_metabolic_enzymes.webp";
import roboticsFrontierImg from "../../assets/fresh/experimental_projects_frontier_dual_arm_manipulation.webp";
import spatialFrontierImg from "../../assets/fresh/experimental_projects_frontier_factory_gaussian_twin.webp";
import quantumFrontierImg from "../../assets/fresh/experimental_projects_frontier_quantum_compiler.webp";
import caseImg from "../../assets/fresh/experimental_projects_case_study_robotics_foundry.webp";

export const experimentalProjectsData = {
  id: "experimental-projects",
  category: "Innovation Lab",
  name: "Experimental Projects",
  tagline: "High-Impact Moonshots, Autonomous Neuro-Robotics & Quantum-AI Exploration",
  hero: {
    badge: "DEVOPS TRIO // MOONSHOT LAB",
    subBadge: "HIGH-IMPACT FRONTIER R&D",
    titleLight: "Radical Moonshots &",
    titleBold: "Embodied Robotics",
    description: "Exploring high-risk, high-reward frontiers from embodied robotics manipulation to spatial neural rendering and quantum circuit synthesis.",
    bgImage: heroBg,
    liveBadge: "Active Lab Cohort",
    primaryCtaText: "Explore Moonshots",
    secondaryCtaText: "View Prototypes"
  },
  stats: [
    { value: "VLA", label: "Vision-Language-Action", sub: "Embodied robotics policies" },
    { value: "4D", label: "Gaussian Splatting", sub: "Real-time dynamic twins" },
    { value: "NISQ", label: "Quantum Gate Synthesis", sub: "Fault-tolerant circuit search" },
    { value: "Moonshot", label: "Radical R&D Pipeline", sub: "Active exploratory projects" }
  ],
  pillars: [
    {
      id: "embodied-robotics",
      tag: "EMBODIED COGNITION",
      title: "Autonomous Dexterous Robotics Swarms",
      description: "Training vision-language-action foundation models for dual-arm robotic manipulators with zero-shot generalization in unmapped industrial settings.",
      image: roboticsPillarImg,
      highlights: [
        "Tactile sensory feedback loop operating with high-frequency compliance",
        "End-to-end visuomotor policy rollout for dexterous tool handling",
        "Zero-shot tool use and deformable material manipulation"
      ]
    },
    {
      id: "spatial-neural",
      tag: "SPATIAL COMPUTING",
      title: "Real-Time 4D Neural Radiance Fields",
      description: "Generative spatial world rendering synthesizing dynamic, photorealistic 4D environments from sparse video feeds for immersive digital twins.",
      image: spatialPillarImg,
      highlights: [
        "Continuous spatio-temporal 4D Gaussian splatting for smooth replay",
        "Dynamic lighting and physical shadow recalculation in real time",
        "Sub-centimeter industrial factory twin spatial accuracy"
      ]
    },
    {
      id: "quantum-compiler",
      tag: "QUANTUM-AI ALGORITHMS",
      title: "AI-Driven Quantum Gate Synthesis",
      description: "Deploying reinforcement learning search algorithms to discover error-mitigated quantum circuits and optimize gate fidelity for NISQ hardware.",
      image: quantumPillarImg,
      highlights: [
        "Automated discovery of optimal Clifford+T quantum fault-tolerant gates",
        "Topological circuit routing minimizing cross-talk error rates",
        "Hardware-in-the-loop compilation benchmarks on superconducting qubits"
      ]
    },
    {
      id: "synthetic-biology",
      tag: "COMPUTATIONAL BIOLOGY",
      title: "Generative Metabolic Enzyme Engineering",
      description: "Designing synthetic biocatalysts and multi-enzyme cascades for carbon sequestration and industrial chemical synthesis.",
      image: biologyPillarImg,
      highlights: [
        "Equivariant diffusion models predicting transition state binding free energy",
        "Wet-lab validated catalytic efficiency improvements for carbon fixation",
        "De novo active site generation with atom-level structural precision"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "robotics-arm",
      title: "Autonomous Dual-Arm Bimanual Assembly",
      tabLabel: "Dual-Arm VLA",
      category: "Embodied Robotics",
      badge: "Robotic Policy",
      image: roboticsFrontierImg,
      summary: "End-to-end visuomotor foundation model rolling out sub-millimeter precision tasks for complex cable threading and microscopic screw insertion.",
      features: [
        "Real-time tactile sensor fusion across multi-finger grippers",
        "Zero-shot sim-to-real policy transfer trained on GPU-accelerated simulators",
        "Graceful physical obstacle avoidance and human co-worker safety compliance"
      ]
    },
    {
      id: "spatial-twin",
      title: "4D Dynamic Factory Gaussian Digital Twin",
      tabLabel: "4D Gaussian Twin",
      category: "Spatial Rendering",
      badge: "Real-Time 4D",
      image: spatialFrontierImg,
      summary: "Dynamic spatial reconstruction transforming four security camera feeds into an immersive, queryable 3D representation of shop floor operations.",
      features: [
        "Real-time tracking of AGVs, human workers, and robotic arms",
        "Temporal anomaly detection highlighting blocked pathways",
        "Streaming WebGPU renderer delivering photorealistic fidelity"
      ]
    },
    {
      id: "quantum-synth",
      title: "RL-Based Quantum Gate Optimization Engine",
      tabLabel: "Quantum RL Compiler",
      category: "Quantum Algorithms",
      badge: "Circuit Compiler",
      image: quantumFrontierImg,
      summary: "Reinforcement learning compiler discovering shortened quantum circuit depths and fault-tolerant stabilizer codes for near-term quantum processors.",
      features: [
        "AlphaZero-style tree search over quantum gate commutation graphs",
        "Noise-adaptive circuit transpilation optimized for real device topology",
        "Direct export to Qiskit, Cirq, and OpenQASM formats"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Moonshot Co-Development",
    partner: "Advanced Industrial Robotics Foundry",
    title: "Embodied Robotic Assembly & 4D Factory Twin Simulation",
    description: "Deploying vision-language-action policies across automated manufacturing cells, paired with real-time 4D Gaussian splatting to achieve zero-downtime assembly reconfiguration.",
    image: caseImg,
    metrics: [
      { stat: "500 Hz", label: "Tactile feedback control loop" },
      { stat: "120 FPS", label: "Real-time 4D spatial twin rendering" },
      { stat: "Zero-Shot", label: "Tool generalization in unmapped cells" }
    ],
    highlights: [
      "Hardware-in-the-loop visuomotor policy training",
      "Dynamic shopfloor spatial reconstruction over WebGPU",
      "Unified telemetry architecture with safety interlocks"
    ],
    ctaText: "Request Moonshot Brief",
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
    title: "How We Incubate Moonshots",
    steps: [
      {
        step: "01",
        name: "Hypothesis",
        desc: "Isolate high-impact technical hypotheses with verifiable success milestones."
      },
      {
        step: "02",
        name: "Rapid Prototyping",
        desc: "Build simulation-first experimental models across dedicated test benches."
      },
      {
        step: "03",
        name: "Transition",
        desc: "Validate enterprise feasibility and graduate successful prototypes into production."
      }
    ]
  },
  closingCta: {
    title: "Partner with Our Moonshot Lab",
    description: "We work with forward-thinking research foundations, enterprise engineering teams, and robotics manufacturers to test radical emerging technologies.",
    primaryText: "Explore Fellowship Opportunities",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Discuss an Incubation Project",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
