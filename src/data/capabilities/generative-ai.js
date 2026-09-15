const generativeAi = {
    id: "generative-ai",
    breadcrumbs: ["AI Capabilities", "Generative AI"],
    hero: {
      titleLight: "Generative",
      titleBold: "AI",
      description: "Empower your enterprise with custom foundational models. Automate complex reasoning, content generation, and code synthesis securely at scale with Devopstrio's experts.",
    },
    inAction: {
      headingLight: "Beyond Basic",
      headingRed: "Chatbots",
      paragraph: "We engineer highly specialized LLMs and multi-modal models that deeply understand your proprietary data. By implementing strict guardrails and quantization, we reduce manual overhead by up to 60% while adhering to enterprise security constraints. From automated reporting to hyper-personalized assistants, this is GenAI that actually drives ROI.",
      buttonText: "Explore Use Cases",
      imageSrc: "/images/downloaded/560988f906_img.jpg",
    },
    metricsCards: [
      { 
        value: "50+", 
        label: "Production Models",
        image: "/images/downloaded/090bb5653b_img.jpg"
      },
      { 
        value: "60%", 
        label: "Cost Reduction",
        image: "/images/downloaded/aa314d90f7_photo-1550751827-4bd374c3f58b.jpg"
      },
      { 
        value: "100%", 
        label: "Data Privacy",
        image: "/images/downloaded/478798247d_img.jpg"
      },
      { 
        value: "15+", 
        label: "Industry LLMs",
        image: "/images/downloaded/d97187fdf9_img.jpg"
      }
    ],
    whoWeWorkWith: {
      titleLight: "Who We",
      titleRed: "Empower",
      items: [
        {
          title: "Enterprise IT & Ops",
          desc: "Automate internal helpdesks, code generation, and complex legacy system migrations using specialized coding models.",
          icon: "cpu" 
        },
        {
          title: "Customer Experience",
          desc: "Deploy highly contextual, multi-lingual AI agents that resolve tier-1 and tier-2 support tickets autonomously.",
          icon: "users"
        },
        {
          title: "Data & Analytics",
          desc: "Transform unstructured documents into queryable databases using advanced RAG and document intelligence pipelines.",
          icon: "database"
        }
      ]
    },
    benefits: {
      titleLight: "How You",
      titleRed: "Benefit",
      items: [
        {
          title: "Accelerated Workflows",
          desc: "Reduce time spent on manual reporting, data entry, and content generation by empowering employees with AI copilots.",
          image: "/assets/fresh/multimodal_ai_workbench.jpg"
        },
        {
          title: "Zero Data Leakage",
          desc: "Unlike public APIs, our air-gapped deployments ensure your proprietary data never leaves your secure VPC environment.",
          image: "/assets/fresh/cloud-security-hub-hero.jpg" // Fixed image link
        },
        {
          title: "Predictable Scaling Costs",
          desc: "Optimize cloud inference costs by utilizing quantized models and dynamic batching rather than paying per-token fees.",
          image: "/assets/fresh/deep_learning_tensor.jpg" // Replaced duplicate image
        }
      ]
    },
    cards: {
      titleLight: "Core GenAI",
      titleRed: "Capabilities",
      items: [
        {
          badge: "FINE-TUNING",
          title: "Custom LLM Tuning",
          body: "We fine-tune open-source models (Llama 3, Mistral) on your private datasets to create domain-specific intelligence.",
          more: "By adapting foundational models to your specific vocabulary, industry compliance rules, and formatting, you get highly accurate responses without leaking intellectual property.",
          image: "/images/downloaded/930d9ac6ae_img.jpg",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "ARCHITECTURE",
          title: "RAG Pipelines",
          body: "Eliminate hallucinations by grounding AI responses entirely in your enterprise documents and databases.",
          more: "We build secure Retrieval-Augmented Generation architectures that fetch live data from your internal knowledge bases, ensuring every generated output is factual and verifiable.",
          image: "/assets/services/webp/bg-ai.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "DELIVERY",
          title: "Multi-Modal Generation",
          body: "Process and generate text, image, audio, and code simultaneously for complex enterprise workflows.",
          more: "From automated visual inspection reporting in manufacturing to generating UI code directly from design screenshots, we build pipelines that handle all data types.",
          image: "/images/downloaded/3f90bfcdd3_img.jpg",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "GOVERNANCE",
          title: "Guardrails & Compliance",
          body: "Implement deterministic safety layers that filter PII and prevent prompt injection attacks.",
          more: "We deploy guardrails that sit between the user and the LLM, intercepting harmful inputs and sanitizing outputs to guarantee regulatory compliance in every interaction.",
          image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "PARTNERSHIPS",
          title: "Agentic Workflows",
          body: "Deploy autonomous AI agents that don't just generate text, but actively execute tasks.",
          more: "Our GenAI agents can call APIs, navigate software, and orchestrate complex business processes end-to-end, acting as autonomous team members.",
          image: "/images/downloaded/001f4d30d1_img.jpg",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "SECURITY",
          title: "Cost-Optimized Inference",
          body: "Scale without massive API bills by deploying quantized models on edge or cloud infrastructure.",
          more: "We implement advanced batching, quantization, and specialized hardware selection to ensure real-time AI responses under heavy load while minimizing compute costs.",
          image: "/assets/services/webp/bg-cloud.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        }
      ]
    },
    insights: {
      titleLight: "Latest GenAI",
      titleRed: "Insights",
      items: [
        {
          tag: "CASE STUDY",
          title: "Global Bank Reduces Audit Time by 40% with RAG",
          desc: "How we deployed an internal, air-gapped LLM that safely processes millions of confidential financial documents.",
          image: "/assets/services/webp/bg-devops.webp",
          color1: "#2A2A2A", color2: "#1A1A1A"
        },
        {
          tag: "WHITE PAPER",
          title: "The Enterprise Guide to LLM Security",
          desc: "Best practices for preventing prompt injection, managing PII, and deploying guardrails in production Generative AI.",
          image: "/assets/services/webp/bg-data.webp",
          color1: "#2A2A2A", color2: "#1A1A1A"
        },
        {
          tag: "RESEARCH",
          title: "Fine-Tuning vs. RAG: What Enterprises Need",
          desc: "A technical breakdown of when to use Retrieval-Augmented Generation versus full parameter fine-tuning.",
          image: "/assets/services/webp/bg-software.webp",
          color1: "#2A2A2A", color2: "#1A1A1A"
        },
        {
          tag: "FRAMEWORK",
          title: "GenAI Cost Optimization Strategies",
          desc: "How to deploy large language models in production without incurring massive GPU computing costs.",
          image: "/assets/services/webp/bg-consulting.webp",
          color1: "#2A2A2A", color2: "#1A1A1A"
        },
        {
          tag: "CASE STUDY",
          title: "Retail Personalization at Scale",
          desc: "Using multi-modal GenAI to create hyper-personalized shopping experiences and automated product descriptions.",
          image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-1.webp",
          color1: "#2A2A2A", color2: "#1A1A1A"
        },
        {
          tag: "REPORT",
          title: "The Future of Agentic Workflows",
          desc: "Moving from Chatbots to autonomous systems that execute tasks across your digital ecosystem.",
          image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-2.webp",
          color1: "#2A2A2A", color2: "#1A1A1A"
        }
      ]
    }
  }
export default generativeAi;