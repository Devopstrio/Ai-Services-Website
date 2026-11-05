import heroBg from "../../assets/fresh/telecom_5g_network_tower.jpg";
import photonicPillarImg from "../../assets/fresh/technology_exploration_pillar_photonic_optical_matrix.webp";
import latticePillarImg from "../../assets/fresh/technology_exploration_pillar_lattice_cryptography.webp";
import neuromorphicPillarImg from "../../assets/fresh/technology_exploration_pillar_spiking_neuromorphic.webp";
import neuralDecodingPillarImg from "../../assets/fresh/technology_exploration_pillar_neural_decoding.webp";
import photonicFrontierImg from "../../assets/fresh/technology_exploration_frontier_photonic_tensor.webp";
import latticeFrontierImg from "../../assets/fresh/technology_exploration_frontier_lattice_key_exchange.webp";
import caseImg from "../../assets/fresh/technology_exploration_case_study_telecom_defense.webp";

export const technologyExplorationData = {
  id: "technology-exploration",
  category: "Innovation Lab",
  name: "Technology Exploration",
  tagline: "360° Emerging Tech Radar, Horizon Scanning & Next-Gen Hardware Synthesis",
  hero: {
    badge: "DEVOPS TRIO // TECH RADAR",
    subBadge: "HORIZON SCANNING (2026-2035)",
    titleLight: "Emerging Tech &",
    titleBold: "Hardware Frontiers",
    description: "Continuous evaluation of post-quantum cryptography, silicon photonics, and neuromorphic edge computing for forward-looking enterprise architecture.",
    bgImage: heroBg,
    liveBadge: "Active Horizon Radar",
    primaryCtaText: "Explore Tech Radar",
    secondaryCtaText: "View Analysis"
  },
  stats: [
    { value: "Radar", label: "Horizon Scanning", sub: "Emerging technological radar" },
    { value: "pTPU", label: "Silicon Photonics", sub: "Analog optical tensor compute" },
    { value: "PQC", label: "Post-Quantum Cryptography", sub: "NIST-standardized lattice encryption" },
    { value: "SNN", label: "Neuromorphic Edge", sub: "Sub-milliwatt event-driven chips" }
  ],
  pillars: [
    {
      id: "optical-computing",
      tag: "SILICON & PHOTONICS",
      title: "Photonic Tensor Processing Units (pTPU)",
      description: "Evaluating analog optical matrix multipliers that calculate matrix-vector dot products at the speed of light with near-zero heat dissipation.",
      image: photonicPillarImg,
      highlights: [
        "Silicon photonics waveguides executing optical interference convolutions",
        "100x lower thermal dissipation compared to traditional copper interconnects",
        "Sub-picosecond latency for real-time aerospace radar signal filtering"
      ]
    },
    {
      id: "post-quantum-crypto",
      tag: "CYBER DEFENSE",
      title: "Quantum-Resistant Lattice Cryptography",
      description: "Implementing and stress-testing NIST-standardized lattice-based encryption algorithms (Kyber, Dilithium) across distributed enterprise mesh networks.",
      image: latticePillarImg,
      highlights: [
        "Cryptographic agility layer allowing seamless migration from legacy RSA/ECC",
        "Zero performance degradation in TLS 1.3 encrypted handshake latency",
        "Immutable hardware security module (HSM) key derivation integration"
      ]
    },
    {
      id: "neuromorphic-snn",
      tag: "NEUROMORPHIC EDGE",
      title: "Spiking Neuromorphic Edge Architectures",
      description: "Investigating event-driven asynchronous neuromorphic processors for ultra-low-power edge robotics and IoT nodes.",
      image: neuromorphicPillarImg,
      highlights: [
        "Spike-timing-dependent plasticity (STDP) continuous on-chip learning",
        "Operates under 10 milliwatts on solar and kinetic energy harvesting",
        "Sub-millisecond acoustic vibration anomaly detection on industrial turbines"
      ]
    },
    {
      id: "neural-decoding",
      tag: "NEURAL INTERFACES",
      title: "Non-Invasive High-Bandwidth Neural Decoding",
      description: "Researching high-density EEG and functional near-infrared spectroscopy (fNIRS) foundation models for non-invasive intent classification.",
      image: neuralDecodingPillarImg,
      highlights: [
        "Transformer-based temporal alignment filtering high-amplitude muscular artifacts",
        "Zero-calibration cross-subject transfer learning for assistive communication",
        "Sub-20ms cognitive load estimation for safety-critical aviation cockpits"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "photonic-matrix",
      title: "Photonic Matrix Multiplier Benchmarking Simulator",
      tabLabel: "Silicon Photonics",
      category: "Optical Computing",
      badge: "Optical Matrix",
      image: photonicFrontierImg,
      summary: "Simulate matrix multiplication operations executed through Mach-Zehnder optical interferometers and compare power consumption against modern GPUs.",
      features: [
        "Interactive wavelength frequency allocation matrix across 128 channels",
        "Simulates thermal phase drift and automated digital feedback compensation",
        "Calculates theoretical energy savings across billion-parameter inference workloads"
      ]
    },
    {
      id: "lattice-encryption",
      title: "Post-Quantum TLS 1.3 Handshake Testbed",
      tabLabel: "Lattice Crypto",
      category: "Quantum Defense",
      badge: "Post-Quantum",
      image: latticeFrontierImg,
      summary: "Test live quantum-resistant key exchanges using ML-KEM (Kyber-768) and stateful hash-based digital signatures against active adversary replay.",
      features: [
        "Side-by-side packet capture comparison between classic ECDHE and ML-KEM",
        "Simulated harvest-now, decrypt-later cryptographic attack analysis",
        "Automated certificate authority migration roadmap generator for enterprise CISOs"
      ]
    }
  ],
  caseStudy: {
    tag: "CO-INNOVATION INITIATIVE",
    collaborationType: "Emerging Tech Evaluation",
    partner: "Global Telecommunications & Aerospace Leader",
    title: "Post-Quantum Secure Telemetry & Photonic Switching",
    description: "Evaluating NIST-standardized lattice encryption across sovereign satellite ground stations, paired with photonic tensor processing for real-time signal filtering.",
    image: caseImg,
    metrics: [
      { stat: "Sub-ms", label: "Lattice key encapsulation latency" },
      { stat: "100x", label: "Lower thermal dissipation over photonics" },
      { stat: "NIST FIPS", label: "Standardized quantum resistance" }
    ],
    highlights: [
      "Hardware security module integration with zero handoff delay",
      "Analog optical matrix convolution benchmarks",
      "Joint technical assessment presented to national infrastructure regulators"
    ],
    ctaText: "Request Technology Brief",
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
    title: "How We Evaluate Emerging Tech",
    steps: [
      {
        step: "01",
        name: "Horizon Radar",
        desc: "Continuously scan academic patents, physical labs, and hardware prototypes across 5 maturity quadrants."
      },
      {
        step: "02",
        name: "Lab Benchmarking",
        desc: "Acquire early developer kits, simulate physical performance, and stress-test in isolated environments."
      },
      {
        step: "03",
        name: "Strategic Synthesis",
        desc: "Deliver actionable transition roadmaps and risk-adjusted implementation plans to leadership."
      }
    ]
  },
  closingCta: {
    title: "Prepare Your Enterprise for the Future",
    description: "Our technology exploration team helps enterprise CTOs and architectural boards de-risk emerging hardware and cryptographic shifts.",
    primaryText: "Explore Engineering Careers",
    primaryHref: "https://devopstrio.co.uk/careers",
    secondaryText: "Request an Executive Briefing",
    secondaryHref: "https://devopstrio.co.uk/contact#contact-form"
  }
};
