import heroBg from "../../assets/fresh/programming-background-with-person-working-with-codes-computer.jpg";
import swarmMeshPillarImg from "../../assets/fresh/open_source_pillar_swarmmesh_runtime.webp";
import trioKernelPillarImg from "../../assets/fresh/open_source_pillar_triokernel_flash_decoding.webp";
import openSaEPillarImg from "../../assets/fresh/open_source_pillar_opensae_interpretability.webp";
import proofEvalPillarImg from "../../assets/fresh/open_source_pillar_proofeval_benchmarks.webp";
import swarmMeshFrontierImg from "../../assets/fresh/open_source_frontier_swarmmesh_orchestrator.webp";
import trioKernelFrontierImg from "../../assets/fresh/open_source_frontier_triokernel_fp8_attention.webp";
import openSaEFrontierImg from "../../assets/fresh/open_source_frontier_opensae_visualizer.webp";
import caseImg from "../../assets/fresh/open_source_case_study_global_ecosystem.webp";

export const openSourceData = {
  id: "open-source",
  category: "Innovation Lab",
  name: "Open Source",
  tagline: "Open-Weights Models, High-Throughput Inference Kernels & Community Developer Tooling",
  hero: {
    badge: "DEVOPS TRIO // OPEN LABS",
    subBadge: "APACHE 2.0 COMMUNITY FRAMEWORKS",
    titleLight: "Open-Weights &",
    titleBold: "Inference Kernels",
    description: "Open-weights foundation frameworks, custom FlashAttention kernels, and agentic orchestration tooling built for the global developer ecosystem.",
    bgImage: heroBg,
    liveBadge: "Active Community Releases",
    primaryCtaText: "Explore Repositories",
    secondaryCtaText: "View Documentation"
  },
  stats: [
    { value: "Apache 2.0", label: "Permissive Open Licensing", sub: "Enterprise production grade" },
    { value: "CUDA/FP8", label: "Accelerated Kernel Ops", sub: "Optimized attention decoding" },
    { value: "SwarmMesh", label: "Distributed Agent Runtime", sub: "Lightweight async memory fabric" },
    { value: "OpenSAE", label: "Mechanistic Interpretability", sub: "Monosemantic feature analysis" }
  ],
  pillars: [
    {
      id: "agentic-runtime",
      tag: "AGENTIC FRAMEWORK",
      title: "SwarmMesh: Distributed Multi-Agent Runtime",
      description: "A lightweight, async Python/Rust runtime for orchestrating 10,000+ communicating agents with built-in consensus protocols and persistent memory fabric.",
      image: swarmMeshPillarImg,
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
      description: "Custom Triton and CUDA C++ kernels providing 3.4x faster long-context attention decoding on modern GPU architectures.",
      image: trioKernelPillarImg,
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
      description: "The premier open-source toolkit for training and evaluating Sparse Autoencoders (SAE) on foundation models.",
      image: openSaEPillarImg,
      highlights: [
        "One-click extraction of monosemantic feature vectors from open foundation models",
        "Interactive web visualizer for neuron circuit exploration and steering",
        "Automated red-teaming probe generator detecting deceptive alignment"
      ]
    },
    {
      id: "proof-eval",
      tag: "FORMAL BENCHMARKS",
      title: "ProofEval: Lean 4 Mathematical Reasoning Benchmark",
      description: "A standardized open-source evaluation suite containing 1,500+ Olympiad-level Lean 4 formal proving problems.",
      image: proofEvalPillarImg,
      highlights: [
        "Automated Docker execution harness with sandboxed Lean 4 kernel verification",
        "Standardized leaderboard tracking formal reasoning accuracy across top models",
        "Publicly downloadable training splits with full tactic trace sequences"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "swarm-orchestrator",
      title: "SwarmMesh Visual Agent Orchestrator",
      tabLabel: "SwarmMesh",
      category: "Agent Framework",
      badge: "Mesh Orchestrator",
      image: swarmMeshFrontierImg,
      summary: "Interactive runtime debugger visualizing real-time message topology, token consumption, and state rollbacks across distributed agent swarms.",
      features: [
        "Visual timeline graph of every agent tool invocation and return payload",
        "Hot-swapping agent prompt definitions without restarting the mesh session",
        "One-click export to production Kubernetes helm charts and Docker Compose"
      ]
    },
    {
      id: "triokernel-demo",
      title: "TrioKernel FP8 Attention Latency Benchmark",
      tabLabel: "TrioKernel FP8",
      category: "Inference Kernel",
      badge: "CUDA Kernel",
      image: trioKernelFrontierImg,
      summary: "Compare raw token throughput between standard PyTorch SDPA, FlashAttention-2, and TrioKernel across custom context lengths.",
      features: [
        "Interactive slider adjusting context lengths from 4k up to 128k tokens",
        "Real-time GPU VRAM memory footprint visualizer with cache paging metrics",
        "Copy-paste pip install triokernel instructions with zero compilation hurdles"
      ]
    },
    {
      id: "opensae-visualizer",
      title: "OpenSAE Monosemantic Feature Explorer",
      tabLabel: "OpenSAE",
      category: "Interpretability",
      badge: "Latent Visualizer",
      image: openSaEFrontierImg,
      summary: "Explore 16 million monosemantic latent features extracted from open LLMs and interactively test real-time activation steering.",
      features: [
        "Search features by semantic concept (e.g. 'sycophancy', 'deception', 'code syntax')",
        "Adjust feature activation sliders to dynamically steer model text generation",
        "Export learned feature dictionaries in standard Hugging Face Safetensors format"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Open-Source Community Initiative",
    partner: "Global Open Source AI Ecosystem",
    title: "High-Throughput FP8 Attention & Swarm Runtime Integration",
    description: "Open-sourcing TrioKernel and SwarmMesh to empower enterprise developers with production-grade inference speedups and multi-agent coordination tooling.",
    image: caseImg,
    metrics: [
      { stat: "3.4x", label: "Faster token generation throughput" },
      { stat: "40%", label: "Reduction in GPU VRAM allocation" },
      { stat: "Apache 2.0", label: "Permissive commercial license" }
    ],
    highlights: [
      "Custom Triton and CUDA kernel implementations",
      "Native compatibility with vLLM and SGLang runtimes",
      "Community contributions from top machine learning researchers"
    ],
    ctaText: "Explore GitHub Repositories",
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
    title: "How We Build Open Source",
    steps: [
      {
        step: "01",
        name: "Open RFC",
        desc: "Publish architectural specifications and performance targets for public design review."
      },
      {
        step: "02",
        name: "Community Iteration",
        desc: "Develop in public repositories with automated CI benchmarks and reproducibility checks."
      },
      {
        step: "03",
        name: "Stable Release",
        desc: "Ship production-grade packages with permissive licensing and comprehensive documentation."
      }
    ]
  },
  closingCta: {
    title: "Contribute to Open Science",
    description: "We are actively recruiting open-source maintainers, kernel optimization engineers, and research contributors.",
    primaryText: "View Open Engineering Roles",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Collaborate on Open Source",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
