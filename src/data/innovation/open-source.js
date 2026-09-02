import heroBg from "../../assets/fresh/programming-background-with-person-working-with-codes-computer.jpg";
import repo1 from "../../assets/fresh/kubernetes_cluster_nodes.jpg";
import repo2 from "../../assets/fresh/integration_microservices.jpg";
import repo3 from "../../assets/fresh/dashboard_ai_model_training.jpg";
import repo4 from "../../assets/fresh/server_rack_neon_glow.jpg";
import caseImg from "../../assets/fresh/lead_developer_mentor.jpg";

export const openSourceData = {
  id: "open-source",
  category: "Innovation Lab",
  name: "Open Source",
  tagline: "Open-Weights Models, High-Throughput Inference Kernels & Community Developer Tooling",
  hero: {
    badge: "INNOVATION LAB // OPEN SOURCE",
    subBadge: "APACHE 2.0 COMMUNITY FRAMEWORKS",
    titleLight: "Empowering the Global AI Community with",
    titleBold: "DevOpsTRIO Open Source",
    description: "We believe frontier artificial intelligence must be transparent, auditable, and accessible. DevOpsTRIO contributes open-weights foundation models, FlashAttention kernels, and agentic orchestration frameworks used by over 500,000 developers worldwide.",
    bgImage: heroBg,
    liveBadge: "2.4M+ PyPI Downloads"
  },
  stats: [
    { value: "2.4M+", label: "Total Package Downloads", sub: "PyPI, Conda & Hugging Face Hub" },
    { value: "18.5k★", label: "GitHub Stars Across Repos", sub: "Global developer community contributions" },
    { value: "Apache 2.0", label: "Permissive Open Licensing", sub: "Free for commercial enterprise usage" },
    { value: "450+", label: "Community Contributors", sub: "Engineers from top AI labs & universities" }
  ],
  pillars: [
    {
      id: "agentic-runtime",
      tag: "AGENTIC FRAMEWORK",
      title: "SwarmMesh: Distributed Multi-Agent Runtime",
      description: "A lightweight, async Python/Rust runtime for orchestrating 10,000+ communicating agents with built-in consensus protocols and persistent memory fabric.",
      image: repo1,
      metricBadge: "10,000+ Agents",
      highlights: [
        "Sub-millisecond inter-agent message passing over gRPC and ZeroMQ",
        "Deterministic replay debugger for distributed multi-agent traces",
        "Zero external database dependencies with embedded vector memory"
      ]
    },
    {
      id: "flash-kernel",
      tag: "INFERENCE OPTIMIZATION",
      title: "TrioKernel: Ultra-Fast Flash-Decoding CUDA Kernels",
      description: "Custom Triton and CUDA C++ kernels providing 3.4x faster long-context attention decoding on NVIDIA Blackwell and Hopper GPUs.",
      image: repo2,
      metricBadge: "3.4x Faster TTFT",
      highlights: [
        "FP8 block-scaled matrix multiplication for 128k context windows",
        "PagedKVCache integration natively compatible with vLLM and SGLang",
        "40% reduction in peak GPU VRAM allocation during batch decoding"
      ]
    },
    {
      id: "interp-sae",
      tag: "SAFETY TOOLKIT",
      title: "OpenSAE: Mechanistic Interpretability Library",
      description: "The premier open-source toolkit for training and evaluating Sparse Autoencoders (SAE) on billion-parameter foundation models.",
      image: repo3,
      metricBadge: "16M Monosemantic Features",
      highlights: [
        "One-click extraction of monosemantic feature vectors from Llama and Mistral",
        "Interactive web visualizer for neuron circuit exploration and steering",
        "Automated red-teaming probe generator detecting deceptive alignment"
      ]
    },
    {
      id: "eval-harness",
      tag: "BENCHMARK SUITE",
      title: "ProofEval: Neuro-Symbolic Mathematical Benchmarks",
      description: "Standardized evaluation benchmark suite for measuring mathematical reasoning, code synthesis correctness, and formal theorem proof completion.",
      image: repo4,
      metricBadge: "Lean 4 Certified",
      highlights: [
        "10,000+ curated Olympiad and university mathematics problems with Lean 4 proofs",
        "Dockerized sandbox preventing LLM execution jailbreaks during eval",
        "Real-time leaderboard comparing open-source models against frontier commercial LLMs"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "swarm-mesh-demo",
      title: "SwarmMesh Distributed Agent Orchestrator",
      category: "Open-Source Framework",
      badge: "pip install swarmmesh",
      image: repo1,
      benchmark: "12,000 msgs/sec throughput",
      summary: "High-throughput asynchronous communication mesh connecting specialized sub-agents with automatic leader election and tool sandboxing.",
      features: [
        "Native Python async/await bindings with Rust core",
        "Built-in Raft consensus protocol for state synchronization",
        "Seamless export to OpenTelemetry and Prometheus"
      ]
    },
    {
      id: "trio-kernel-demo",
      title: "TrioKernel FP8 Attention Kernel",
      category: "Inference Kernel",
      badge: "CUDA / Triton C++",
      image: repo2,
      benchmark: "3.4x Speedup at 128k Context",
      summary: "Optimized attention decoding kernel eliminating memory-bound bottlenecks on H100 GPU clusters during long-context document synthesis.",
      features: [
        "Supports dynamic sequence length batching",
        "Native drop-in replacement for FlashAttention-2",
        "Tested across Llama-3, DeepSeek, and Mistral architectures"
      ]
    },
    {
      id: "open-sae-demo",
      title: "OpenSAE Circuit Inspection Visualizer",
      category: "Safety Toolkit",
      badge: "pip install opensae",
      image: repo3,
      benchmark: "Mapped 16.3M Latent Features",
      summary: "Web-based neuron inspection dashboard allowing researchers to click on intermediate layer activations and view human-interpretable feature labels.",
      features: [
        "Zero-shot automated feature labeler using Claude 3.5 Sonnet",
        "Interactive steering slider to clamp model biases in real time",
        "Exports full PyTorch hook layers with one line of code"
      ]
    }
  ],
  papers: [
    {
      title: "SwarmMesh: A High-Throughput Decentralized Runtime for Autonomous Agent Swarms",
      venue: "OSDI Enterprise Systems 2025",
      authors: "DevOpsTRIO Open Source Team & University of Washington",
      doi: "10.48550/arXiv.2508.08119",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "TrioKernel: Block-Quantized FP8 Attention Decoding on Hopper Architecture",
      venue: "ACM PPoPP High Performance Parallelism 2025",
      authors: "DevOpsTRIO Systems Group & NVIDIA Research Collaborators",
      doi: "10.48550/arXiv.2509.11902",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "OpenSAE: Standardized Dictionaries and Benchmarks for Mechanistic Interpretability",
      venue: "NeurIPS Safety & Benchmarks 2025",
      authors: "DevOpsTRIO Safety Lab & Alignment Research Center",
      doi: "10.48550/arXiv.2511.04113",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Global Open-Source Developer & AI Startup Ecosystem",
    collaborationType: "Community Framework Adoption",
    headline: "How SwarmMesh and TrioKernel Reduced Cloud GPU Inference Costs by 65% for 1,200+ AI Startups Worldwide",
    quote: "DevOpsTRIO's open-source kernels are an indispensable component of our high-concurrency production stack. They enabled us to deliver sub-100ms LLM voice streaming without quadrupling our GPU cluster budget.",
    author: "Chief Technology Officer",
    organization: "Voice AI & Generative Media Unicorn",
    image: caseImg,
    metrics: [
      { stat: "65%", label: "Inference compute cost reduction" },
      { stat: "3.4x", label: "Faster long-context response time" },
      { stat: "2.4M+", label: "Packages downloaded globally" }
    ]
  }
};
