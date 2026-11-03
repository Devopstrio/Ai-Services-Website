const enterpriseAi = {
  id: "enterprise-ai-development",
  breadcrumbs: ["AI Capabilities", "Enterprise AI Development"],
  hero: {
    titleLight: "Enterprise AI",
    titleBold: "Development",
    description: "End-to-end custom AI engineering. We build resilient, scalable AI products integrated seamlessly into your existing enterprise software ecosystem.",
  },
  inAction: {
    headingLight: "Build AI That",
    headingRed: "Scales",
    paragraph: "Off-the-shelf AI doesn't solve unique enterprise problems. We provide full-lifecycle AI development—from data engineering and model training to frontend integration and MLOps. Whether you are building an AI-powered SaaS product or modernizing internal legacy systems with machine learning, our engineering teams ensure your AI is secure, scalable, and built for production environments.",
    buttonText: "Discuss Your Project",
    imageSrc: "/assets/capability-references/enterprise-ai/in-action.webp",
  },
  metricsCards: [
    { 
      value: "3x", 
      label: "Faster Time-to-Market",
      image: "/assets/capability-references/enterprise-ai/metric-0.webp"
    },
    { 
      value: "99.9%", 
      label: "Model Uptime",
      image: "/assets/capability-references/enterprise-ai/metric-1.webp"
    },
    { 
      value: "SOC2", 
      label: "Compliant Pipelines",
      image: "/assets/capability-references/enterprise-ai/metric-2.webp"
    },
    { 
      value: "10M+", 
      label: "Daily Inferences",
      image: "/assets/capability-references/enterprise-ai/metric-3.webp"
    }
  ],
  whoWeWorkWith: {
    titleLight: "Who We",
    titleRed: "Partner With",
    items: [
      {
        title: "SaaS Platforms",
        desc: "Integrate powerful predictive features and Generative AI directly into your B2B software products.",
        icon: "cpu" 
      },
      {
        title: "Financial Institutions",
        desc: "Build highly secure, low-latency models for fraud detection and algorithmic trading.",
        icon: "database"
      },
      {
        title: "Healthcare Providers",
        desc: "Develop HIPAA-compliant AI applications for patient diagnostics and EHR management.",
        icon: "users"
      }
    ]
  },
  benefits: {
    titleLight: "The Custom AI",
    titleRed: "Advantage",
    items: [
      {
        title: "IP Ownership",
        desc: "Stop renting intelligence. When we build your enterprise AI solutions, you own the models, the data pipelines, and the competitive advantage.",
        image: "/assets/capability-references/enterprise-ai/benefit-0.webp"
      },
      {
        title: "Seamless Integration",
        desc: "We don't just build isolated models; we engineer the APIs and frontend interfaces to seamlessly blend AI into your users' daily workflows.",
        image: "/assets/capability-references/enterprise-ai/benefit-1.webp"
      },
      {
        title: "Future-Proof Architecture",
        desc: "Built on modular, cloud-agnostic frameworks (Kubernetes, Ray) so you can easily swap foundational models as technology evolves.",
        image: "/assets/capability-references/enterprise-ai/benefit-2.webp"
      }
    ]
  },
  cards: {
    titleLight: "Development",
    titleRed: "Expertise",
    items: [
      {
        badge: "DATA",
        title: "Data Engineering",
        body: "AI is only as good as its data. We build robust ETL pipelines, data lakes, and feature stores to feed your models.",
        more: "Using Snowflake, Databricks, and Kafka, we ensure high-quality, real-time data is always available for model training and inference.",
        image: "/assets/capability-references/enterprise-ai/capability-0.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "TRAINING",
        title: "Custom Model Training",
        body: "From classical machine learning to deep neural networks, we architect and train models optimized for your specific metrics.",
        more: "We leverage PyTorch and TensorFlow, utilizing distributed GPU clusters to train highly complex models efficiently.",
        image: "/assets/capability-references/enterprise-ai/capability-1.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "INTEGRATION",
        title: "API & Microservices",
        body: "We expose models as highly available, low-latency microservices that can be consumed by any internal or external application.",
        more: "Built with FastAPI, gRPC, and Docker, our model endpoints are designed to scale instantly under heavy load.",
        image: "/assets/capability-references/enterprise-ai/capability-2.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "MLOPS",
        title: "Continuous Deployment",
        body: "Automated pipelines for model evaluation, deployment, and rollback. Never deploy a degraded model to production.",
        more: "We implement CI/CD for machine learning using MLflow, Kubeflow, and GitHub Actions, ensuring consistent and reproducible deployments.",
        image: "/assets/capability-references/enterprise-ai/capability-3.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "UI/UX",
        title: "AI Frontend Integration",
        body: "We build intuitive React and Next.js applications that make complex AI insights easy for end-users to understand and act upon.",
        more: "From interactive data visualizations to chat interfaces, we bridge the gap between backend intelligence and user experience.",
        image: "/assets/capability-references/enterprise-ai/capability-4.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SECURITY",
        title: "Enterprise Security",
        body: "End-to-end encryption, role-based access control, and comprehensive audit logging for all AI interactions.",
        more: "We design architectures that pass strict SOC2, HIPAA, and GDPR compliance audits, keeping your enterprise safe.",
        image: "/assets/capability-references/enterprise-ai/capability-5.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      }
    ]
  },
  insights: {
    titleLight: "Engineering",
    titleRed: "Insights",
    items: [
      {
        tag: "CASE STUDY",
        title: "Building a Custom AI Engine for a Fortune 500",
        desc: "How we replaced a legacy rules engine with a scalable machine learning microservice.",
        image: "/assets/services/webp/bg-data.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "WHITE PAPER",
        title: "The Shift from Monolithic to Microservice AI",
        desc: "Architectural patterns for deploying scalable machine learning models in Kubernetes.",
        image: "/assets/services/webp/bg-software.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "RESEARCH",
        title: "Latency Optimization in PyTorch",
        desc: "Techniques for reducing inference time by 40% using TensorRT and model quantization.",
        image: "/assets/services/webp/bg-consulting.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "FRAMEWORK",
        title: "The Devopstrio MLOps Blueprint",
        desc: "Our standardized approach to ensuring model reliability and continuous delivery.",
        image: "/assets/services/webp/bg-managed.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "CASE STUDY",
        title: "AI Integration for Next-Gen SaaS",
        desc: "Embedding predictive analytics seamlessly into a modern B2B software platform.",
        image: "/assets/services/webp/bg-transformation.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "REPORT",
        title: "State of Enterprise AI 2026",
        desc: "Trends in custom model development vs. relying on managed cloud APIs.",
        image: "/images/downloaded/090bb5653b_img.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      }
    ]
  }
};
export default enterpriseAi;
