import heroBg from "../../assets/fresh/product_workflow_automation.jpg";
import swarmOSPillarImg from "../../assets/fresh/product_roadmap_pillar_swarmos_agent_mesh.webp";
import leanIdePillarImg from "../../assets/fresh/product_roadmap_pillar_neurosymbolic_ide.webp";
import photonicPillarImg from "../../assets/fresh/product_roadmap_pillar_photonic_tpu.webp";
import worldSimulatorPillarImg from "../../assets/fresh/product_roadmap_pillar_4d_world_simulator.webp";
import swarmOSFrontierImg from "../../assets/fresh/product_roadmap_frontier_swarmos_architecture.webp";
import leanIdeFrontierImg from "../../assets/fresh/product_roadmap_frontier_lean4_ide.webp";
import photonicFrontierImg from "../../assets/fresh/product_roadmap_frontier_photonic_compute.webp";
import caseImg from "../../assets/fresh/product_roadmap_case_study_fortune50_provider.webp";

export const productRoadmapData = {
  id: "product-roadmap",
  category: "Innovation Lab",
  name: "Product Roadmap",
  tagline: "Transparent Horizon Architecture, Upcoming Feature Releases & Lab Milestones",
  hero: {
    badge: "DEVOPS TRIO // PRODUCT HORIZON",
    subBadge: "TRANSPARENT 2026-2027 ROADMAP",
    titleLight: "Architecture &",
    titleBold: "Product Roadmap",
    description: "Transparent quarterly release milestones for upcoming foundation models, autonomous agent frameworks, and enterprise developer tooling.",
    bgImage: heroBg,
    liveBadge: "Roadmap: Active Release Horizon",
    primaryCtaText: "Explore Roadmap",
    secondaryCtaText: "View Releases"
  },
  stats: [
    { value: "Quarterly", label: "Predictable Release Cadence", sub: "Milestone-driven roadmap" },
    { value: "API First", label: "Stable Interfaces", sub: "Backward-compatible contract guarantees" },
    { value: "SwarmOS", label: "Distributed Mesh Architecture", sub: "Multi-agent runtime framework" },
    { value: "Early Access", label: "Enterprise Preview Channel", sub: "Testing pre-release capabilities" }
  ],
  pillars: [
    {
      id: "q3-2026-release",
      tag: "CURRENT RELEASE // Q3 2026",
      title: "SwarmOS v5.0: Autonomous Agent Mesh",
      description: "Next-gen distributed multi-agent runtime featuring sub-millisecond gRPC consensus, persistent vector memory fabric, and deterministic GitOps rollbacks.",
      image: swarmOSPillarImg,
      highlights: [
        "High-density concurrent cognitive agents per cluster node",
        "Deterministic replay debugger for distributed agent execution traces",
        "Native bi-directional enterprise connectors for standard business systems"
      ]
    },
    {
      id: "q4-2026-release",
      tag: "UPCOMING // Q4 2026",
      title: "Neuro-Symbolic IDE & Lean 4 Copilot",
      description: "An integrated developer environment that verifies code correctness and mathematical logic using automated Lean 4 theorem proving kernels.",
      image: leanIdePillarImg,
      highlights: [
        "Verified code generation with SMT solver constraint checking",
        "Automated unit test synthesis with formal branch coverage",
        "VS Code and JetBrains IDE native language server extensions"
      ]
    },
    {
      id: "q1-2027-release",
      tag: "HORIZON // Q1 2027",
      title: "Photonic TPU & Sub-Watt Inference Runtime",
      description: "Co-designed inference runtime optimized for emerging optical silicon accelerators, cutting data center power consumption.",
      image: photonicPillarImg,
      highlights: [
        "Optical matrix-vector multiplier driver layers for high-speed compute",
        "Sub-picosecond latency for telemetry and high-frequency data streams",
        "Optimized thermal profile on high-density edge computing racks"
      ]
    },
    {
      id: "q2-2027-release",
      tag: "LONG-RANGE // Q2 2027",
      title: "Generative 4D World Simulator v2",
      description: "Continuous real-time spatial simulator trained on multi-modal physical telemetry for robotics sim-to-real transfer.",
      image: worldSimulatorPillarImg,
      highlights: [
        "Continuous 3D space-time representations with physical constraint guarantees",
        "Real-time sensor simulation for LiDAR, stereo vision, and tactile pads",
        "Automated scenario synthesis testing edge-case safety failure modes"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "swarmos-architecture",
      title: "SwarmOS Agent Mesh Interactive Topology",
      tabLabel: "SwarmOS v5",
      category: "Platform Architecture",
      badge: "Agent Mesh",
      image: swarmOSFrontierImg,
      summary: "Explore the internal architecture of SwarmOS: from the distributed raft consensus engine down to the embedded vector memory layer.",
      features: [
        "Interactive component diagram showing dataflow between agents and external APIs",
        "Simulate node failure and watch the self-healing failover protocol in action",
        "Download sample infrastructure-as-code deployment manifests for AWS and Azure"
      ]
    },
    {
      id: "lean-ide-preview",
      title: "Neuro-Symbolic IDE Interface Walkthrough",
      tabLabel: "Neuro-Symbolic IDE",
      category: "Developer Tooling",
      badge: "Lean 4 IDE",
      image: leanIdeFrontierImg,
      summary: "Experience how the upcoming Lean 4 copilot automatically proves lemmas and prevents logic errors in real time as you write code.",
      features: [
        "Live split-screen showing generated Python code alongside Lean 4 formal proofs",
        "Automated theorem generator validating edge cases before code execution",
        "Sign up for private developer preview access opening in Q4 2026"
      ]
    },
    {
      id: "photonic-runtime-preview",
      title: "Optical Acceleration Driver Stack",
      tabLabel: "Photonic Runtime",
      category: "Hardware Runtime",
      badge: "Optical TPU",
      image: photonicFrontierImg,
      summary: "Review the software stack connecting PyTorch models directly to emerging optical hardware accelerators with zero code refactoring.",
      features: [
        "Hardware abstraction layer mapping matrix ops to optical interference filters",
        "Thermal and optical calibration feedback loop maintaining calculation fidelity",
        "Early benchmark results against standard Hopper and Blackwell GPU clusters"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Roadmap Early Access Partner",
    partner: "Fortune 50 Enterprise Cloud Provider",
    title: "Enterprise Agent Mesh Deployment & Early Access Stress Test",
    description: "Validating SwarmOS v5.0 across distributed multi-region infrastructure, confirming sub-millisecond agent coordination and backward API stability.",
    image: caseImg,
    metrics: [
      { stat: "Sub-ms", label: "Inter-agent message latency" },
      { stat: "Zero", label: "Breaking API changes across versions" },
      { stat: "Multi-Region", label: "High-availability deployment" }
    ],
    highlights: [
      "Automated GitOps state rollback mechanisms",
      "Native bi-directional enterprise connectors",
      "Stress testing under sustained high-throughput workloads"
    ],
    ctaText: "Request Roadmap Brief",
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
    title: "How We Ship Enterprise Software",
    steps: [
      {
        step: "01",
        name: "Architecture Preview",
        desc: "Share RFC specifications and prototype builds with enterprise design partners."
      },
      {
        step: "02",
        name: "Enterprise Canary",
        desc: "Deploy pre-release versions across isolated production test environments."
      },
      {
        step: "03",
        name: "General Availability",
        desc: "Deliver hardened releases backed by enterprise SLAs and comprehensive documentation."
      }
    ]
  },
  closingCta: {
    title: "Shape the Future of Enterprise AI",
    description: "Join our platform engineering and research teams building the foundation models and developer runtimes of tomorrow.",
    primaryText: "Explore Platform Roles",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Join the Early Access Program",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
