import heroBg from "../../assets/fresh/innovation_vr_workspace.jpg";
import demo1 from "../../assets/fresh/man-using-laptop-tablet-analyze-260nw-2727872547.webp";
import demo2 from "../../assets/fresh/multimodal_ai_workbench.jpg";
import demo3 from "../../assets/fresh/sales-growth-graph-on-laptop-screen-with-pointing-hand-illustrating-business-success-and-market-trend-photo.jpeg";
import demo4 from "../../assets/fresh/dashboard_executive_kpi.jpg";
import caseImg from "../../assets/fresh/person-using-ar-technology-perform-their-occupation.jpg";

export const aiDemonstrationsData = {
  id: "ai-demonstrations",
  category: "Innovation Lab",
  name: "AI Demonstrations",
  tagline: "Live Interactive Sandboxes, Benchmark Replays & Real-Time Swarm Visualizers",
  hero: {
    badge: "INNOVATION LAB // LIVE DEMOS",
    subBadge: "INTERACTIVE RUNTIMES & BENCHMARKS",
    titleLight: "Experience the Future Live with",
    titleBold: "DevOpsTRIO AI Demonstrations",
    description: "Interact directly with live foundation models, emergent multi-agent simulations, and autonomous coding swarms running on dedicated cloud GPU clusters.",
    bgImage: heroBg,
    liveBadge: "Live Cluster Online"
  },
  stats: [
    { value: "10+ Demos", label: "Interactive Live Sandboxes", sub: "Live model inference with real-time telemetry" },
    { value: "< 100ms", label: "End-to-End Latency", sub: "Ultra-fast streaming token generation" },
    { value: "50,000+", label: "Interactive Sessions Run", sub: "By enterprise engineers & researchers" },
    { value: "100%", label: "Live Code Execution", sub: "Secure sandboxed WebAssembly & Python execution" }
  ],
  pillars: [
    {
      id: "swarm-visualizer",
      tag: "AGENTIC SIMULATION",
      title: "Real-Time 1,000-Agent Market Simulator",
      description: "Visualizing emergent decentralized coordination as 1,000 autonomous agents negotiate, bid, and optimize multi-cloud computing resources in real time.",
      image: demo2,
      metricBadge: "1,000 Live Agents",
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
      description: "Experience ultra-low-latency voice conversational agents with native emotion modulation, dynamic interruption handling, and tool execution.",
      image: demo1,
      metricBadge: "85ms Voice Latency",
      highlights: [
        "End-to-end neural audio-to-audio streaming with zero intermediate text bottleneck",
        "Natural conversational turn-taking with graceful barge-in handling",
        "Supports 35+ global languages with regional dialect adaptation"
      ]
    },
    {
      id: "vision-spatial-demo",
      tag: "SPATIAL REASONING",
      title: "Real-Time 3D Spatial Video Inspection",
      description: "Interact with multi-modal vision foundation models identifying micro-defects, safety violations, and component wear on 4K industrial video streams.",
      image: heroBg,
      metricBadge: "60 FPS 4K Inspection",
      highlights: [
        "Zero-shot defect bounding box localization with 99.4% precision",
        "Continuous 3D spatial coordinate tracking across moving factory assembly lines",
        "Instant PDF audit summary generation with timestamped video proof frames"
      ]
    },
    {
      id: "formal-code-demo",
      tag: "DETERMINISTIC CODE",
      title: "Jira-to-PR Autonomous Coding Sandbox",
      description: "Watch an autonomous software engineering agent ingest complex Jira issue descriptions, reproduce bugs in isolated test containers, and issue verified PRs.",
      image: demo3,
      metricBadge: "100% Verified Tests",
      highlights: [
        "Automated reproduction unit test synthesis before code modification",
        "Self-healing syntax and type error loops in under 30 seconds",
        "Generates detailed architectural pull request summaries with diff explanations"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "live-swarm-demo",
      title: "Multi-Agent Cloud Resource Auction",
      category: "Autonomous Swarm",
      badge: "1,000 Agents Live",
      image: demo2,
      benchmark: "99.1% Pareto Efficiency",
      summary: "Launch a live multi-agent simulation where 1,000 sub-agents compete in a Dutch auction to allocate serverless GPU workloads at lowest aggregate cost.",
      features: [
        "Interactive parameter slider for market volatility and bidder risk tolerance",
        "Live visual chart tracking aggregate cloud spend reduction",
        "Exports full transaction ledger for audit inspection"
      ]
    },
    {
      id: "live-voice-demo",
      title: "Ultra-Low Latency Duplex Voice Agent",
      category: "Multimodal Voice",
      badge: "85ms Latency",
      image: demo1,
      benchmark: "Sub-100ms Turnaround",
      summary: "Experience native neural audio streaming with zero perceptible delay, tested under simulated high-jitter cellular network conditions.",
      features: [
        "Real-time audio waveform visualizer with sentiment inflection markers",
        "Handles conversational interruptions without breaking context",
        "Demonstrates dynamic CRM database lookup during live speech"
      ]
    },
    {
      id: "live-vision-demo",
      title: "Industrial 4K Video Defect Inspector",
      category: "Computer Vision",
      badge: "60 FPS Inspection",
      image: heroBg,
      benchmark: "99.4% Defect Catch Rate",
      summary: "Upload or stream live high-definition video to observe real-time spatial object tracking, anomaly detection, and automated alert triggering.",
      features: [
        "Sub-millimeter defect detection on automotive and electronic assemblies",
        "Heatmap visualization highlighting anomalous component stress regions",
        "Direct export to Siemens and Rockwell automation PLCs"
      ]
    }
  ],
  papers: [
    {
      title: "Design Principles for Real-Time Duplex Neural Audio Streaming Systems",
      venue: "ACM Multimedia Systems 2025",
      authors: "DevOpsTRIO Multimodal Team & Stanford CCRMA",
      doi: "10.48550/arXiv.2509.09812",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Interactive Visualization and Tracing of Distributed Multi-Agent Consensus",
      venue: "IEEE VIS Visual Analytics 2025",
      authors: "DevOpsTRIO Visualization Group & MIT Media Lab",
      doi: "10.48550/arXiv.2510.11429",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Zero-Shot Spatial 3D Video Inspection for High-Velocity Industrial Assembly",
      venue: "CVPR Industrial Vision 2025",
      authors: "DevOpsTRIO Vision Lab & University of Oxford",
      doi: "10.48550/arXiv.2511.03190",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Global Automotive OEM & Industrial Manufacturing Leader",
    collaborationType: "Live Demonstration Pilot",
    headline: "How Live Video Defect Inspection Saved \$18.4M in Preventable Assembly Recalls in Year One",
    quote: "Testing DevOpsTRIO's live computer vision demonstration on our actual stamping plant video feeds convinced our executive committee in 15 minutes. It detected micro-fissures that human inspectors missed.",
    author: "Global Head of Quality Assurance",
    organization: "Leading Global Automotive Manufacturer",
    image: caseImg,
    metrics: [
      { stat: "99.4%", label: "Micro-defect detection accuracy" },
      { stat: "\$18.4M", label: "Saved in preventable warranty recalls" },
      { stat: "60 FPS", label: "Real-time 4K inspection throughput" }
    ]
  }
};
