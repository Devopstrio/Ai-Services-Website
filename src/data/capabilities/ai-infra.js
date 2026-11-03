const aiInfra = {
  id: "ai-infrastructure",
  breadcrumbs: ["AI Capabilities", "AI Infrastructure & MLOps"],
  hero: {
    titleLight: "AI Infrastructure",
    titleBold: "& MLOps",
    description: "Scale your AI from prototype to production. We build the high-performance computing clusters and automated deployment pipelines required to run AI at an enterprise scale.",
  },
  inAction: {
    headingLight: "Build for",
    headingRed: "Scale",
    paragraph: "A model on a laptop is a toy. A model in production requires massive compute, rigorous monitoring, and automated retraining pipelines. Devopstrio engineers cloud-native AI infrastructure utilizing Kubernetes, GPU clustering, and advanced MLOps tools. We optimize for high availability and low inference latency while keeping your cloud compute costs strictly under control.",
    buttonText: "Scale Your AI",
    imageSrc: "/assets/capability-references/ai-infra/in-action.webp",
  },
  metricsCards: [
    { value: "40%", label: "Cloud Cost Reduction", image: "/assets/capability-references/ai-infra/metric-0.webp" },
    { value: "Zero", label: "Downtime Deployments", image: "/assets/capability-references/ai-infra/metric-1.webp" },
    { value: "99.99%", label: "API Uptime", image: "/assets/capability-references/ai-infra/metric-2.webp" },
    { value: "Automated", label: "Model Retraining", image: "/assets/capability-references/ai-infra/metric-3.webp" }
  ],
  whoWeWorkWith: {
    titleLight: "Infrastructure",
    titleRed: "Challenges",
    items: [
      { title: "Runaway Cloud Costs", desc: "We implement dynamic batching and right-sized GPU provisioning to slash monthly inference bills.", icon: "database" },
      { title: "Model Degradation", desc: "Models drift over time. We build automated pipelines that detect drift and trigger retraining seamlessly.", icon: "cpu" },
      { title: "Deployment Bottlenecks", desc: "Move from deploying a model once a month to deploying multiple times a day with automated testing.", icon: "users" }
    ]
  },
  benefits: {
    titleLight: "The MLOps",
    titleRed: "Advantage",
    items: [
      { title: "Continuous Delivery", desc: "Apply software engineering best practices to machine learning. Version, test, and deploy models automatically.", image: "/assets/capability-references/ai-infra/benefit-0.webp" },
      { title: "Cost Optimization", desc: "Stop over-provisioning expensive A100 GPUs. We scale compute down to zero when not in use.", image: "/assets/capability-references/ai-infra/benefit-1.webp" },
      { title: "Total Observability", desc: "Monitor memory usage, inference latency, and data drift in real-time through centralized dashboards.", image: "/assets/capability-references/ai-infra/benefit-2.webp" }
    ]
  },
  cards: {
    titleLight: "Infrastructure",
    titleRed: "Capabilities",
    items: [
      { badge: "COMPUTE", title: "GPU Cluster Management", body: "Deploy and manage massive distributed training clusters across AWS, GCP, or Azure.", more: "We utilize Kubernetes, Ray, and Slurm to orchestrate multi-node GPU workloads efficiently.", image: "/assets/capability-references/ai-infra/capability-0.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SERVING", title: "High-Performance Serving", body: "Expose models via ultra-low latency endpoints using Triton, vLLM, or TensorFlow Serving.", more: "We implement continuous batching and KV-cache management to maximize throughput on language models.", image: "/assets/capability-references/ai-infra/capability-1.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PIPELINES", title: "Automated ML Pipelines", body: "Build DAGs (Directed Acyclic Graphs) to automate data extraction, training, and deployment.", more: "Utilize tools like Kubeflow, MLflow, and Apache Airflow to remove human error from model updates.", image: "/assets/capability-references/ai-infra/capability-2.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MONITORING", title: "Model Observability", body: "Track statistical data drift, concept drift, and performance degradation in production.", more: "Alert data scientists immediately if the distribution of incoming data shifts away from the training baseline.", image: "/assets/capability-references/ai-infra/capability-3.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "EDGE", title: "Edge Deployment (AIoT)", body: "Compress and quantize models to run on low-power devices like cameras or factory sensors.", more: "We use TensorRT and ONNX to shrink model size by 80% without sacrificing accuracy.", image: "/assets/capability-references/ai-infra/capability-4.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "IAC", title: "Infrastructure as Code", body: "Provision your entire AI stack via Terraform and Ansible for reproducible environments.", more: "Spin up identical staging, QA, and production AI environments in minutes, perfectly configured.", image: "/assets/capability-references/ai-infra/capability-5.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "MLOps",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Slashing LLM Inference Costs by 60%", desc: "How we migrated a SaaS platform from OpenAI to self-hosted vLLM instances.", image: "/images/downloaded/ed43542bb6_photo-1556742049-0cfed4f6a45d.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The Devopstrio Guide to Kubeflow", desc: "Best practices for orchestrating machine learning workflows on Kubernetes.", image: "/images/downloaded/179ada9fcc_photo-1550745165-9bc0b252726f.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Detecting Data Drift in Production", desc: "Statistical methods for monitoring model accuracy when ground truth is delayed.", image: "/images/downloaded/a8c62fbe44_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Quantization and Edge AI", desc: "How to fit a 7B parameter LLM onto a standard commercial laptop.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Zero-Downtime Deployments", desc: "Implementing shadow deployments and A/B testing for a critical fraud model.", image: "/images/downloaded/ede5d7b698_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Buy vs Build Dilemma", desc: "When to use managed SageMaker/Vertex AI versus rolling your own Kubernetes stack.", image: "/assets/services/webp/bg-devops.webp", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiInfra;