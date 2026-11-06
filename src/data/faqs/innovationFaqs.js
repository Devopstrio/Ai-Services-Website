export const INNOVATION_OVERVIEW_FAQS = [
  {
    q: "What is the primary focus of Devopstrio's AI Innovation Lab?",
    a: "The Innovation Lab explores frontier deep learning engineering—including custom GPU kernels, neuromorphic event-driven computing, federated privacy-preserving training, and sovereign air-gapped sandboxes—translating emerging research into practical, production-hardened enterprise capabilities.",
    proof: "Research Mission: Translating Frontier AI Research into Enterprise Capabilities",
    tags: ["Innovation", "R&D", "GPU Kernels", "Neuromorphic AI"]
  },
  {
    q: "What is TrioKernel FP8 Attention and what performance advantages does it offer?",
    a: "TrioKernel is a custom low-level Triton/CUDA attention kernel designed to maximize compute efficiency on NVIDIA Hopper (H100) and Blackwell GPUs. By quantizing non-critical attention pathways to FP8 while preserving sensitive outliers in higher precision, it significantly improves inference throughput for long-context workloads.",
    proof: "Kernel Engineering: Custom Triton/CUDA FP8 Acceleration for Long-Context LLMs",
    tags: ["TrioKernel", "FP8", "Triton", "CUDA", "Inference"]
  },
  {
    q: "How does Devopstrio approach Sovereign Air-Gapped AI Sandboxes?",
    a: "We engineer fully isolated, hardware-enforced environments completely disconnected from public networks. These environments deploy self-contained open-weights models and local vector search to satisfy strict national security, defense, and central banking data sovereignty requirements.",
    proof: "Sovereign AI: Disconnected Hardware Enclaves for Defense & Regulated Banking",
    tags: ["Sovereign AI", "Air-Gapped", "Defense", "Data Sovereignty"]
  },
  {
    q: "What is Neuromorphic Computing and what use cases does it address?",
    a: "Neuromorphic computing utilizes event-driven spiking neural networks (SNNs) that mimic biological neural activity, consuming up to 90% less power than traditional GPUs. We test these architectures for extreme battery-constrained edge IoT devices, remote acoustic anomaly detection, and real-time robotics.",
    proof: "Edge Innovation: Event-Driven Spiking Neural Networks for Low-Power Edge Devices",
    tags: ["Neuromorphic", "Spiking Networks", "Edge Computing", "Low Power"]
  },
  {
    q: "How does decentralized federated learning protect proprietary enterprise datasets?",
    a: "Models train locally across isolated enterprise nodes or independent institutions, exchanging only encrypted gradient updates rather than raw training data. Differential privacy and secure aggregation algorithms prevent reconstruction of underlying source records.",
    proof: "Federated Learning: Decentralized On-Device Training with Encrypted Gradients",
    tags: ["Federated Learning", "Differential Privacy", "Decentralized AI", "Encryption"]
  },
  {
    q: "Can enterprise clients co-develop confidential prototypes with the Innovation Lab?",
    a: "Yes. We establish structured joint R&D sprints where client technical teams collaborate directly with our research engineers to build proprietary proofs-of-concept under strict intellectual property exclusivity.",
    proof: "Joint R&D: Confidential Co-Development Sprints with 100% Client IP Assignment",
    tags: ["Co-Development", "Joint R&D", "Prototyping", "Confidentiality"]
  },
  {
    q: "How does Devopstrio rigorously benchmark new frontier models before recommending them?",
    a: "We run standardized automated evaluation suites measuring reasoning consistency, instruction-following fidelity, hallucination frequency, and token economics across thousands of domain-specific enterprise prompts.",
    proof: "Benchmarking Rigour: Domain-Specific Evaluation Suites for Frontier Models",
    tags: ["Benchmarking", "Model Evaluation", "Token Economics", "Quality"]
  },
  {
    q: "How can enterprise leadership teams participate in Innovation Lab briefings?",
    a: "Technical leaders can arrange a private Innovation Briefing to review live prototypes, examine architectural benchmarks, and evaluate how emerging research aligns with their multi-year technology roadmaps.",
    proof: "Executive Briefings: Private Architectural Demonstrations & Research Reviews",
    tags: ["Executive Briefings", "Technology Roadmap", "Architecture", "Consulting"]
  }
];

export function getInnovationFaqs(innovationId) {
  return INNOVATION_OVERVIEW_FAQS;
}
