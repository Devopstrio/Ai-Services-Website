import heroBg from "../../assets/fresh/innovation_robotics_arm.jpg";
import moonshot1 from "../../assets/fresh/innovation_vr_workspace.jpg";
import moonshot2 from "../../assets/fresh/microchip_wafer_lithography.jpg";
import moonshot3 from "../../assets/fresh/quantum_cryo_computing.jpg";
import moonshot4 from "../../assets/fresh/innovation_bio_ai_lab.jpg";
import caseImg from "../../assets/fresh/cloud_data_center_hall.jpg";

export const experimentalProjectsData = {
  id: "experimental-projects",
  category: "Innovation Lab",
  name: "Experimental Projects",
  tagline: "High-Impact Moonshots, Autonomous Neuro-Robotics & Quantum-AI Exploration",
  hero: {
    badge: "INNOVATION LAB // MOONSHOT LAB",
    subBadge: "HIGH-RISK HIGH-REWARD R&D",
    titleLight: "Incubating Radical Moonshots with",
    titleBold: "DevOpsTRIO Experimental Projects",
    description: "Our Moonshot Lab explores high-risk, high-reward frontiers — from embodied robotics manipulation and spatial neural rendering to brain-computer interfaces and quantum circuit synthesis.",
    bgImage: heroBg,
    liveBadge: "12 Active Moonshots"
  },
  stats: [
    { value: "12 Moonshots", label: "Active Incubation Projects", sub: "Exploring post-transformer frontiers" },
    { value: "99.2%", label: "Sim-to-Real Precision", sub: "Sub-millimeter tactile robotic control" },
    { value: "10x Faster", label: "Quantum Synthesis", sub: "AI-guided quantum gate compilation" },
    { value: "$35M+", label: "Incubation Grant Value", sub: "Accelerating radical enterprise breakthroughs" }
  ],
  pillars: [
    {
      id: "embodied-robotics",
      tag: "EMBODIED COGNITION",
      title: "Autonomous Dexterous Robotics Swarms",
      description: "Training vision-language-action (VLA) foundation models for dual-arm robotic manipulators with zero-shot generalization in unmapped industrial settings.",
      image: heroBg,
      metricBadge: "Sub-mm Precision",
      highlights: [
        "Real-time tactile sensory feedback loop operating at 500 Hz",
        "End-to-end visuomotor policy rollout with physical compliance",
        "Zero-shot tool use and deformable object manipulation"
      ]
    },
    {
      id: "spatial-neural",
      tag: "SPATIAL COMPUTING",
      title: "Real-Time 4D Neural Radiance Fields",
      description: "Generative spatial world rendering synthesizing dynamic, photorealistic 4D environments from sparse video feeds for immersive digital twins.",
      image: moonshot1,
      metricBadge: "120 FPS 4D Render",
      highlights: [
        "Continuous spatio-temporal 4D Gaussian splatting at 120 FPS",
        "Dynamic lighting and physical shadow recalculation in real time",
        "Sub-centimeter industrial factory twin spatial accuracy"
      ]
    },
    {
      id: "quantum-compiler",
      tag: "QUANTUM-AI ALGORITHMS",
      title: "AI-Driven Quantum Gate Synthesis",
      description: "Deploying reinforcement learning search algorithms to discover error-mitigated quantum circuits and optimize gate fidelity for NISQ hardware.",
      image: moonshot3,
      metricBadge: "90% Gate Compression",
      highlights: [
        "Automated discovery of optimal Clifford+T quantum fault-tolerant gates",
        "Noise-adaptive circuit routing across IBM and Rigetti quantum topologies",
        "10x reduction in quantum decoherence compilation latency"
      ]
    },
    {
      id: "synthetic-biology-ai",
      tag: "BIO-MOONSHOT",
      title: "De Novo Metabolic Enzyme Catalysts",
      description: "Engineering synthetic enzymes and biochemical catalysts using all-atom generative diffusion to accelerate industrial carbon capture.",
      image: moonshot4,
      metricBadge: "Carbon Sequestration",
      highlights: [
        "SE(3)-equivariant geometric protein backbone generation",
        "Validated wet-lab kinetic catalytic enhancement exceeding 400x",
        "Targeted carbon mineralization and biodegradable plastic synthesis"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "robotics-sandbox",
      title: "Visuomotor Dual-Arm Manipulation",
      category: "Embodied Robotics",
      badge: "500 Hz Tactile Policy",
      image: heroBg,
      benchmark: "99.2% Task Success Rate",
      summary: "Evaluates closed-loop visuomotor foundation models manipulating complex electronic assemblies with deformable cables and dynamic obstacles.",
      features: [
        "Real-time torque and force vector prediction",
        "Autonomous trajectory replanning in 2 milliseconds",
        "Generalizes across 100+ unmodeled mechanical components"
      ]
    },
    {
      id: "spatial-twin",
      title: "4D Industrial Factory Gaussian Twin",
      category: "Spatial Computing",
      badge: "Real-Time Telemetry",
      image: moonshot1,
      benchmark: "120 FPS at 4K Resolution",
      summary: "Streams live LiDAR and RGB camera telemetry into continuous 4D Gaussian splats to simulate factory floor bottlenecks in real time.",
      features: [
        "Sub-millimeter collision avoidance simulation",
        "Dynamic worker and AGV traffic heatmaps",
        "Full physics-informed lighting and thermal raytracing"
      ]
    },
    {
      id: "quantum-gate-sim",
      title: "Quantum Error-Mitigated Compiler",
      category: "Quantum Computing",
      badge: "NISQ Optimization",
      image: moonshot3,
      benchmark: "10x Lower Circuit Depth",
      summary: "Synthesizes ultra-dense quantum circuits by discovering non-intuitive topological gate commutations using neural Monte Carlo tree search.",
      features: [
        "Compiles 128-qubit quantum algorithms in under 3 seconds",
        "Reduces two-qubit CNOT error propagation by 68%",
        "Direct export to Qiskit, Cirq, and OpenQASM 3.0"
      ]
    }
  ],
  papers: [
    {
      title: "Visuomotor Foundation Models for High-Precision Industrial Robotics Manipulation",
      venue: "CoRL 2025 (Oral Presentation)",
      authors: "DevOpsTRIO Robotics Lab & MIT CSAIL",
      doi: "10.48550/arXiv.2510.09112",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Neural Quantum Gate Synthesis via Deep Reinforcement Learning over Clifford Groups",
      venue: "Quantum Science & Tech 2025",
      authors: "DevOpsTRIO Quantum Group & Oxford Quantum Institute",
      doi: "10.48550/arXiv.2509.04331",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Continuous 4D Gaussian Splatting for Dynamic Enterprise Digital Twins",
      venue: "SIGGRAPH Asia 2025 (Highlight)",
      authors: "DevOpsTRIO Spatial Lab & Stanford University",
      doi: "10.48550/arXiv.2512.01988",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Advanced Industrial Robotics & Silicon Foundry",
    collaborationType: "Moonshot Co-Development",
    headline: "How Autonomous Visuomotor Robotics Eliminated 98% of Precision Assembly Defects in Semiconductor Cleanrooms",
    quote: "The Moonshot Lab provided breakthrough tactile foundation models that allowed our robots to handle fragile 300mm silicon wafers with zero physical breakage.",
    author: "VP of Automation & Robotics",
    organization: "Global Semiconductor Manufacturing Consortium",
    image: caseImg,
    metrics: [
      { stat: "98%", label: "Defect reduction in wafer handling" },
      { stat: "0.2mm", label: "Micro-alignment positioning accuracy" },
      { stat: "500 Hz", label: "Real-time tactile sensor control loop" }
    ]
  }
};
