import heroBg from "../../assets/fresh/product_workflow_automation.jpg";
import road1 from "../../assets/fresh/dashboard_executive_kpi.jpg";
import road2 from "../../assets/fresh/product_devops_copilot.jpg";
import road3 from "../../assets/fresh/product_brio_enterprise.jpg";
import road4 from "../../assets/fresh/server_rack_neon_glow.jpg";
import caseImg from "../../assets/fresh/modern-interior-design-office.jpg";

export const productRoadmapData = {
  id: "product-roadmap",
  category: "Innovation Lab",
  name: "Product Roadmap",
  tagline: "Transparent Horizon Architecture, Upcoming Feature Releases & Lab Milestones",
  hero: {
    badge: "INNOVATION LAB // PRODUCT HORIZON",
    subBadge: "TRANSPARENT 2026-2027 ROADMAP",
    titleLight: "Engineering Tomorrow's Platform with",
    titleBold: "DevOpsTRIO Product Roadmap",
    description: "Explore our transparent quarterly product roadmap detailing upcoming foundation models, autonomous agent frameworks, and enterprise developer tooling releases.",
    bgImage: heroBg,
    liveBadge: "Roadmap: 2026-Q3 Active"
  },
  stats: [
    { value: "4 Quarters", label: "Transparent Forward Horizon", sub: "Quarterly release milestones mapped to 2027" },
    { value: "100%", label: "Backward Compatibility", sub: "Zero breaking API changes across upgrades" },
    { value: "99.99%", label: "Target Uptime SLA", sub: "Multi-region sovereign high-availability" },
    { value: "2 Weeks", label: "Continuous Release Cadence", sub: "Bi-weekly minor updates & security patches" }
  ],
  pillars: [
    {
      id: "q3-2026-release",
      tag: "CURRENT RELEASE // Q3 2026",
      title: "SwarmOS v5.0: Autonomous Agent Mesh",
      description: "Next-gen distributed multi-agent runtime featuring sub-millisecond gRPC consensus, persistent vector memory fabric, and deterministic GitOps rollbacks.",
      image: road2,
      metricBadge: "Now in Production",
      highlights: [
        "10,000+ concurrent cognitive agents per cluster node",
        "Deterministic replay debugger for distributed agent execution traces",
        "Native bi-directional connectors for Workday, SAP, and Salesforce"
      ]
    },
    {
      id: "q4-2026-release",
      tag: "UPCOMING // Q4 2026",
      title: "Neuro-Symbolic IDE & Lean 4 Copilot",
      description: "An integrated developer environment that verifies code correctness and mathematical logic using automated Lean 4 theorem proving kernels.",
      image: road1,
      metricBadge: "Beta Launch Oct 2026",
      highlights: [
        "Zero-hallucination code generation with SMT solver constraint checking",
        "Automated unit test synthesis with 100% formal branch coverage",
        "VS Code and JetBrains IDE native language server extensions"
      ]
    },
    {
      id: "q1-2027-release",
      tag: "HORIZON // Q1 2027",
      title: "Photonic TPU & Sub-Watt Inference Runtime",
      description: "Co-designed inference runtime optimized for emerging optical silicon accelerators, cutting data center power consumption by 90%.",
      image: road4,
      metricBadge: "In Lab Validation",
      highlights: [
        "Speed-of-light optical matrix-vector multiplier driver layers",
        "Sub-picosecond latency for high-frequency financial & aerospace telemetry",
        "Zero thermal throttling on high-density edge computing racks"
      ]
    },
    {
      id: "q2-2027-release",
      tag: "VISION // Q2 2027",
      title: "Spatio-Temporal 4D World Simulator v2",
      description: "Continuous 3D physics foundation model simulating fluid dynamics, structural elasticity, and robotic compliance for industrial CAD manufacturing.",
      image: road3,
      metricBadge: "Research Preview",
      highlights: [
        "Simulates complex physical dynamics 20x faster than classical FEM",
        "Zero-shot sim-to-real robotic policy transfer with sub-millimeter precision",
        "Real-time digital twin synchronization with live factory IoT sensors"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "swarmos-preview",
      title: "SwarmOS v5.0 Architecture Deep Dive",
      category: "Agent Runtime",
      badge: "Production Ready",
      image: road2,
      benchmark: "Sub-millisecond Latency",
      summary: "Explore the internal architecture of our distributed agent swarm engine with native consensus election and encrypted memory fabric.",
      features: [
        "Zero external database dependencies",
        "Supports dynamic sub-agent role specialization",
        "Cryptographically signed audit logs exportable in one click"
      ]
    },
    {
      id: "lean-ide-preview",
      title: "Lean 4 Mathematical IDE Copilot",
      category: "Developer Tools",
      badge: "Beta Cohort Open",
      image: road1,
      benchmark: "100% Formal Verification",
      summary: "See how our upcoming IDE Copilot proves algebraic and algorithmic invariants before allowing code to merge into production branches.",
      features: [
        "Automated proof-step auto-completion in Lean 4 and Coq",
        "Flags arithmetic edge cases and security race conditions",
        "Works seamlessly across Rust, Python, Go, and C++"
      ]
    },
    {
      id: "photonic-preview",
      title: "Photonic Optical Compute Engine",
      category: "Hardware Acceleration",
      badge: "Lab Benchmark: 12ps",
      image: road4,
      benchmark: "90% Lower Power",
      summary: "Review preliminary benchmark traces of our optical tensor multiplication driver running on prototype silicon photonics chips.",
      features: [
        "Sub-watt inference token generation",
        "Immune to electromagnetic interference in aerospace environments",
        "Standardized PyTorch C++ extension backend"
      ]
    }
  ],
  papers: [
    {
      title: "Architectural Evolution of Enterprise AI Platforms: A 5-Year Retrospective and Roadmap",
      venue: "IEEE Computer Society Horizon 2025",
      authors: "DevOpsTRIO Architecture Council & MIT CSAIL",
      doi: "10.48550/arXiv.2508.11029",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "SwarmOS: Decentralized Fault-Tolerant Orchestration for Enterprise Cognitive Agents",
      venue: "ACM EuroSys Cloud Systems 2025",
      authors: "DevOpsTRIO Distributed Systems Team",
      doi: "10.48550/arXiv.2510.04891",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Formal Invariant Synthesis in Developer Tooling via Neuro-Symbolic Verification",
      venue: "ACM SIGPLAN PLDI 2025",
      authors: "DevOpsTRIO Programming Languages Group & Oxford",
      doi: "10.48550/arXiv.2512.03112",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Fortune 50 Enterprise Technology & Cloud Services Provider",
    collaborationType: "Early Roadmap Access Partner",
    headline: "How Early Access to SwarmOS v5.0 Accelerated Enterprise Customer Deployments by 400%",
    quote: "DevOpsTRIO's transparent product roadmap gave our engineering organization the visibility we needed to plan our multi-cloud AI infrastructure two years ahead of competitors.",
    author: "Senior Vice President of Engineering",
    organization: "Global Cloud & AI Infrastructure Leader",
    image: caseImg,
    metrics: [
      { stat: "400%", label: "Faster deployment of customer AI agents" },
      { stat: "Zero", label: "Breaking API changes across major upgrades" },
      { stat: "99.99%", label: "Production uptime maintained globally" }
    ]
  }
};
