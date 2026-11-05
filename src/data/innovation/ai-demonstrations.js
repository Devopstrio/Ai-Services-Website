import heroBg from "../../assets/fresh/innovation_vr_workspace.jpg";
import marketAuctionPillarImg from "../../assets/fresh/ai_demonstrations_pillar_multi_agent_auction.webp";
import duplexVoicePillarImg from "../../assets/fresh/ai_demonstrations_pillar_duplex_voice.webp";
import defectInspectorPillarImg from "../../assets/fresh/ai_demonstrations_pillar_4k_defect_inspector.webp";
import jiraToPrPillarImg from "../../assets/fresh/ai_demonstrations_pillar_jira_to_pr.webp";
import marketAuctionFrontierImg from "../../assets/fresh/ai_demonstrations_frontier_market_simulator.webp";
import duplexVoiceFrontierImg from "../../assets/fresh/ai_demonstrations_frontier_duplex_voice.webp";
import spatialInspectionFrontierImg from "../../assets/fresh/ai_demonstrations_frontier_spatial_inspection.webp";
import caseImg from "../../assets/fresh/ai_demonstrations_case_study_automotive_manufacturing.webp";

export const aiDemonstrationsData = {
  id: "ai-demonstrations",
  category: "Innovation Lab",
  name: "AI Demonstrations",
  tagline: "Live Interactive Sandboxes, Benchmark Replays & Real-Time Swarm Visualizers",
  hero: {
    badge: "DEVOPS TRIO // LIVE DEMOS",
    subBadge: "INTERACTIVE RUNTIMES & BENCHMARKS",
    titleLight: "Interactive Sandboxes &",
    titleBold: "AI Demonstrations",
    description: "Experience live foundation models, emergent multi-agent simulations, and sub-100ms conversational audio streaming in sandboxed environments.",
    bgImage: heroBg,
    liveBadge: "Live Cluster Online",
    primaryCtaText: "Launch Sandboxes",
    secondaryCtaText: "View Demonstrations"
  },
  stats: [
    { value: "Interactive", label: "Live Model Sandboxes", sub: "Real-time telemetry and execution" },
    { value: "Streaming", label: "Sub-100ms Duplex Audio", sub: "Natural conversational turn-taking" },
    { value: "Swarm", label: "Agentic Coordination", sub: "Decentralized bidding visualizers" },
    { value: "Wasm/GPU", label: "Isolated Execution", sub: "Secure sandboxed runtime environments" }
  ],
  pillars: [
    {
      id: "swarm-visualizer",
      tag: "AGENTIC SIMULATION",
      title: "Real-Time 1,000-Agent Market Simulator",
      description: "Visualizing emergent decentralized coordination as autonomous agents negotiate, bid, and optimize computing resources in real time.",
      image: marketAuctionPillarImg,
      highlights: [
        "Live interactive graph showing agent communication topology and message throughput",
        "Configurable private utility functions and bidding strategies",
        "Sub-second Pareto-optimal consensus discovery visualizer"
      ]
    },
    {
      id: "voice-streaming-demo",
      tag: "SUB-100MS MULTIMODAL",
      title: "Sub-100ms Duplex Voice Conversational AI",
      description: "Experience low-latency voice conversational agents with native emotion modulation, dynamic interruption handling, and tool execution.",
      image: duplexVoicePillarImg,
      highlights: [
        "End-to-end neural audio-to-audio streaming with minimal latency bottlenecks",
        "Natural conversational turn-taking with graceful barge-in handling",
        "Broad language support with regional dialect adaptation"
      ]
    },
    {
      id: "vision-spatial-demo",
      tag: "SPATIAL REASONING",
      title: "Real-Time 3D Spatial Video Inspection",
      description: "Interact with multi-modal vision foundation models identifying micro-defects, safety conditions, and component wear on high-resolution industrial video streams.",
      image: defectInspectorPillarImg,
      highlights: [
        "Zero-shot defect bounding box localization with high precision",
        "Continuous 3D spatial coordinate tracking across moving assembly lines",
        "Instant audit summary generation with timestamped video proof frames"
      ]
    },
    {
      id: "code-swarm-demo",
      tag: "AUTONOMOUS DEVOPS",
      title: "Autonomous Jira-to-PR Coding Swarm",
      description: "Watch a team of 4 specialized AI agents read an issue ticket, locate relevant files in a repository, write tests, and submit a working pull request.",
      image: jiraToPrPillarImg,
      highlights: [
        "Live terminal view showing agents executing linters, unit tests, and git commands",
        "Automated rollback if synthetic test suites fail during compilation",
        "Full diff view highlighting generated code changes and architectural justification"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "market-auction-sim",
      title: "Live Decentralized Resource Auction",
      tabLabel: "Market Auction",
      category: "Multi-Agent Sim",
      badge: "Auction Sim",
      image: marketAuctionFrontierImg,
      summary: "Control simulated supply shocks and observe how autonomous agents dynamically adapt spot compute prices through decentralized auctions.",
      features: [
        "Slider controlling sudden node outages and workload spikes",
        "Real-time chart tracking clearing prices vs theoretical Nash equilibrium",
        "Inspect individual agent decision logs explaining their bidding logic"
      ]
    },
    {
      id: "duplex-voice-sandbox",
      title: "Interactive Voice Latency Sandbox",
      tabLabel: "Duplex Voice",
      category: "Audio Streaming",
      badge: "Voice Demo",
      image: duplexVoiceFrontierImg,
      summary: "Speak directly into your microphone to test voice agent responsiveness, interrupt mid-sentence, and evaluate natural response pacing.",
      features: [
        "Live oscilloscope showing voice input vs agent response audio waves",
        "Toggle background noise filters to test industrial factory robustness",
        "Switch between conversational personas: support, technical lead, and executive"
      ]
    },
    {
      id: "spatial-inspector-sandbox",
      title: "Interactive 4K Component Defect Inspector",
      tabLabel: "Spatial Inspection",
      category: "Computer Vision",
      badge: "Vision QC",
      image: spatialInspectionFrontierImg,
      summary: "Upload or select sample industrial video clips to watch our spatial vision model detect hairline solder fractures and component misalignments.",
      features: [
        "Side-by-side view showing raw video vs model segmentation masks",
        "Adjust confidence thresholds in real time to balance precision and recall",
        "Export structured JSON defect reports with precise spatial coordinates"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Interactive Sandbox Demonstration",
    partner: "Leading Automotive Tier-1 Supplier",
    title: "High-Speed Spatial Defect Inspection & Telemetry",
    description: "Demonstrating real-time 3D spatial computer vision across automated assembly lines, confirming micro-defect detection with zero false-alarm line halts.",
    image: caseImg,
    metrics: [
      { stat: "60 FPS", label: "High-resolution video inspection rate" },
      { stat: "Sub-100ms", label: "End-to-end classification latency" },
      { stat: "Zero-Shot", label: "New defect pattern adaptation" }
    ],
    highlights: [
      "Hardware-accelerated edge inference on industrial nodes",
      "Live operator review dashboard with visual proof frames",
      "Immediate automated reporting integrated into plant MES"
    ],
    ctaText: "Schedule Interactive Demo",
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
    title: "How to Experience Our Sandboxes",
    steps: [
      {
        step: "01",
        name: "Select Sandbox",
        desc: "Choose from agent swarms, sub-100ms duplex voice, or 3D spatial computer vision."
      },
      {
        step: "02",
        name: "Test Workload",
        desc: "Provide custom test inputs or evaluate live benchmarks across real-time telemetry."
      },
      {
        step: "03",
        name: "Deploy Architecture",
        desc: "Transition sandbox configurations into dedicated enterprise environments."
      }
    ]
  },
  closingCta: {
    title: "Build Next-Generation AI Experiences",
    description: "Our demonstration team builds interactive sandboxes and proof-of-concept experiences for world-class enterprise clients.",
    primaryText: "Join Our Engineering Team",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Request a Private Demonstration",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
