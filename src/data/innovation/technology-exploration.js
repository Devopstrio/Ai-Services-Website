import heroBg from "../../assets/fresh/telecom_5g_network_tower.jpg";
import tech1 from "../../assets/fresh/integration_hybrid_network.jpg";
import tech2 from "../../assets/fresh/high_speed_fiber.jpg";
import tech3 from "../../assets/fresh/dark_ai_neural_grid.jpg";
import tech4 from "../../assets/fresh/microchip_wafer_lithography.jpg";
import caseImg from "../../assets/fresh/multinational_team_summit.jpg";

export const technologyExplorationData = {
  id: "technology-exploration",
  category: "Innovation Lab",
  name: "Technology Exploration",
  tagline: "360° Emerging Tech Radar, Horizon Scanning & Next-Gen Hardware Synthesis",
  hero: {
    badge: "INNOVATION LAB // TECH RADAR",
    subBadge: "HORIZON SCANNING (2026-2035)",
    titleLight: "Navigating the Next Decade with",
    titleBold: "Devopstrio Technology Exploration",
    description: "Our Technology Exploration division acts as a forward radar for enterprise leadership, continuously evaluating breakthroughs in photonic tensor processing, post-quantum cryptography, and spatial neuromorphic computing.",
    bgImage: heroBg,
    liveBadge: "Radar Edition: 2026-Q3"
  },
  stats: [
    { value: "10-Year", label: "Horizon Technology Horizon", sub: "Actionable roadmap forecasting 2026-2035" },
    { value: "120+", label: "Frontier Technologies Tracked", sub: "Assessed across 5 maturity quadrants" },
    { value: "100x", label: "Efficiency in Photonic AI", sub: "Sub-picosecond optical matrix compute" },
    { value: "50+ Reports", label: "Executive Intelligence Briefs", sub: "Published annually for enterprise CTOs" }
  ],
  pillars: [
    {
      id: "optical-computing",
      tag: "SILICON & PHOTONICS",
      title: "Photonic Tensor Processing Units (pTPU)",
      description: "Evaluating analog optical matrix multipliers that calculate matrix-vector dot products at the speed of light with near-zero heat dissipation.",
      image: tech2,
      metricBadge: "Speed-of-Light Inference",
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
      image: tech1,
      metricBadge: "NIST FIPS 203/204",
      highlights: [
        "Cryptographic agility layer allowing seamless migration from RSA/ECC",
        "Zero performance degradation in TLS 1.3 encrypted handshake latency",
        "Immutable hardware security module (HSM) key derivation integration"
      ]
    },
    {
      id: "neuromorphic-snn",
      tag: "NEUROMORPHIC EDGE",
      title: "Spiking Neuromorphic Edge Architectures",
      description: "Investigating event-driven asynchronous neuromorphic processors (Intel Loihi, BrainChip) for ultra-low-power edge robotics and IoT nodes.",
      image: tech4,
      metricBadge: "Sub-10mW Inference",
      highlights: [
        "Spike-timing-dependent plasticity (STDP) continuous on-chip learning",
        "Operates under 10 milliwatts on solar and kinetic energy harvesting",
        "Sub-millisecond acoustic vibration anomaly detection on industrial turbines"
      ]
    },
    {
      id: "spatial-bci",
      tag: "NEURAL INTERFACES",
      title: "Non-Invasive Neural Decoding Interfaces",
      description: "Translating high-density EEG and functional near-infrared spectroscopy (fNIRS) telemetry into intent vectors for hands-free industrial CAD manipulation.",
      image: tech3,
      metricBadge: "Neural Telemetry",
      highlights: [
        "Continuous transformer decoding of motor cortex neural intent signals",
        "95.4% intent classification accuracy across 40 complex CAD operations",
        "Zero-calibration adaptive cross-subject neural transfer learning"
      ]
    }
  ],
  interactiveFrontiers: [
    {
      id: "photonic-radar",
      title: "Photonic Optical Matrix Multiplier",
      category: "Optical AI Hardware",
      badge: "Analog Light Compute",
      image: tech2,
      benchmark: "0.01 picoseconds / MAC",
      summary: "Simulates optical phase shifters and Mach-Zehnder interferometers performing 4096x4096 matrix multiplications using wavelength-division multiplexing.",
      features: [
        "Zero resistive thermal dissipation",
        "100 GHz modulation bandwidth per optical channel",
        "Calculates complete attention layer in 12 picoseconds"
      ]
    },
    {
      id: "quantum-crypto-radar",
      title: "Lattice Post-Quantum Key Exchange",
      category: "Post-Quantum Security",
      badge: "ML-KEM (Kyber-1024)",
      image: tech1,
      benchmark: "Immune to Shor's Algorithm",
      summary: "Interactive cryptographic sandbox demonstrating real-time lattice encapsulation and decapsulation defending against quantum attacks.",
      features: [
        "Validated against 10,000-qubit simulated Shor quantum attack",
        "Sub-millisecond key encapsulation overhead on mobile devices",
        "Full backward compatibility with existing enterprise X.509 PKI"
      ]
    },
    {
      id: "neuromorphic-edge-radar",
      title: "Event-Based Spiking Neural Engine",
      category: "Neuromorphic AI",
      badge: "Asynchronous Spikes",
      image: tech4,
      benchmark: "8.4 mW Peak Power",
      summary: "Processes dynamic vision sensor (DVS) microsecond event streams to track high-velocity objects in microgravity and edge aerospace conditions.",
      features: [
        "1,000,000 events/second temporal resolution",
        "Zero idle power consumption when scene is static",
        "Direct FPGA emulation on Xilinx Kria silicon"
      ]
    }
  ],
  papers: [
    {
      title: "Co-Design of Photonic Silicon and Transformer Models for Sub-Picosecond Inference",
      venue: "Nature Electronics & Hardware 2025",
      authors: "Devopstrio Hardware Lab & UC Santa Barbara",
      doi: "10.48550/arXiv.2510.14209",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Enterprise Migration Architectures for Post-Quantum Lattice Cryptography",
      venue: "IEEE Security & Privacy 2025",
      authors: "Devopstrio Cryptography Group & ETH Zurich",
      doi: "10.48550/arXiv.2508.06912",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    },
    {
      title: "Asynchronous Spiking Neural Networks for Ultra-Low-Power Edge Anomaly Detection",
      venue: "IEEE Transactions on Neural Networks 2025",
      authors: "Devopstrio Neuromorphic Team & TU Munich",
      doi: "10.48550/arXiv.2512.08831",
      downloadUrl: "https://devopstrio.co.uk/insights/white-paper"
    }
  ],
  caseStudy: {
    partner: "Global Telecommunications & Defense Infrastructure Operator",
    collaborationType: "Horizon Technology Assessment",
    headline: "How Devopstrio's Post-Quantum Tech Radar Protected Critical Satellite Communications Across 4 Continents",
    quote: "Devopstrio's technology exploration team gave us the 5-year cryptographic roadmap we needed. We upgraded our core satellite ground stations to post-quantum lattice security two years ahead of international mandate deadlines.",
    author: "Chief Information Security Officer",
    organization: "Global Satellite Communications Leader",
    image: caseImg,
    metrics: [
      { stat: "100%", label: "Post-quantum lattice security migration" },
      { stat: "2 Years", label: "Ahead of regulatory compliance mandate" },
      { stat: "0 ms", label: "Additional handshake latency overhead" }
    ]
  }
};
