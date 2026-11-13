const generativeAi = {
    id: "generative-ai",
    breadcrumbs: ["AI Capabilities", "Generative AI"],
    hero: {
      titleLight: "Generative",
      titleBold: "AI",
      description: "Transform business operations with Gen AI services from Devopstrio. We help enterprises adopt generative AI solutions to automate complex workflows, generate content, support advanced reasoning, and accelerate code development",
    },
    inAction: {
      headingLight: "Beyond Basic",
      headingRed: "Chatbots",
      paragraph: "We develop specialised LLMs and multimodal models for enterprise generative AI solutions using your business data. Our secure Gen AI services streamline workflows, automate reporting and power intelligent assistants, delivering measurable business value.",
      buttonText: "Explore Use Cases",
      imageSrc: "/assets/capability-references/generative-ai/in-action.webp",
    },
    metricsCards: [
      { 
        value: "50+", 
        label: "Production Models",
        image: "/assets/capability-references/generative-ai/metric-0.webp"
      },
      { 
        value: "60%", 
        label: "Cost Reduction",
        image: "/assets/capability-references/generative-ai/metric-1.webp"
      },
      { 
        value: "100%", 
        label: "Data Privacy",
        image: "/assets/capability-references/generative-ai/metric-2.webp"
      },
      { 
        value: "15+", 
        label: "Industry LLMs",
        image: "/assets/capability-references/generative-ai/metric-3.webp"
      }
    ],
    whoWeWorkWith: {
      titleLight: "Who We",
      titleRed: "Empower",
      items: [
        {
          title: "Enterprise IT & Ops",
          desc: "Automate internal helpdesks, code generation, and complex legacy system migrations using enterprise generative AI services and specialised coding models.",
          icon: "cpu" 
        },
        {
          title: "Customer Experience",
          desc: "Deploy contextual, multilingual Gen AI agents that resolve tier-1 and tier-2 customer support tickets autonomously, improving service efficiency and customer experience.",
          icon: "users"
        },
        {
          title: "Data & Analytics",
          desc: "Transform unstructured documents into searchable databases using advanced retrieval-augmented generation (RAG) and intelligent document processing pipelines.",
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
          desc: "Reduce time spent on manual reporting, data entry, and content creation using generative AI copilots that improve employee productivity.",
          image: "/assets/capability-references/generative-ai/benefit-0.webp"
        },
        {
          title: "Zero Data Leakage",
          desc: "Protect business data with secure Gen AI deployments, private infrastructure and enterprise-grade controls that keep proprietary information within your environment.",
          image: "/assets/capability-references/generative-ai/benefit-1.webp" // Fixed image link
        },
        {
          title: "Predictable Scaling Costs",
          desc: "Control generative AI infrastructure costs through quantized models and dynamic batching, optimising cloud inference and improving resource efficiency.",
          image: "/assets/capability-references/generative-ai/benefit-2.webp" // Replaced duplicate image
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
          body: "We fine-tune open-source models (Llama 3, Mistral) using private datasets to deliver domain-specific generative AI capabilities.",
          more: "By adapting foundational models to your specific vocabulary, industry compliance rules, and formatting, you get highly accurate responses without leaking intellectual property.",
          image: "/assets/capability-references/generative-ai/capability-0.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "ARCHITECTURE",
          title: "RAG Pipelines",
          body: "Reduce AI hallucinations by grounding generative AI responses in your enterprise documents, internal knowledge sources and databases.",
          more: "We build secure Retrieval-Augmented Generation architectures that fetch live data from your internal knowledge bases, ensuring every generated output is factual and verifiable.",
          image: "/assets/capability-references/generative-ai/capability-1.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "DELIVERY",
          title: "Multi-Modal Generation",
          body: "From automated visual inspection reports in manufacturing to generating UI code from design screenshots, our multimodal AI services process diverse data types.",
          more: "From automated visual inspection reporting in manufacturing to generating UI code directly from design screenshots, we build pipelines that handle all data types.",
          image: "/assets/capability-references/generative-ai/capability-2.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "GOVERNANCE",
          title: "Guardrails & Compliance",
          body: "Implement deterministic safety layers that filter PII and prevent prompt injection attacks.",
          more: "We deploy guardrails that sit between the user and the LLM, intercepting harmful inputs and sanitizing outputs to guarantee regulatory compliance in every interaction.",
          image: "/assets/capability-references/generative-ai/capability-3.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "PARTNERSHIPS",
          title: "Agentic Workflows",
          body: "Deploy autonomous AI agents that don't just generate text, but actively execute tasks.",
          more: "Our GenAI agents can call APIs, navigate software, and orchestrate complex business processes end-to-end, acting as autonomous team members.",
          image: "/assets/capability-references/generative-ai/capability-4.webp",
          color1: "#F5F2EA", color2: "#E6DBC6"
        },
        {
          badge: "SECURITY",
          title: "Cost-Optimized Inference",
          body: "Scale without massive API bills by deploying quantized models on edge or cloud infrastructure.",
          more: "We implement advanced batching, quantization, and specialized hardware selection to ensure real-time AI responses under heavy load while minimizing compute costs.",
          image: "/assets/capability-references/generative-ai/capability-5.webp",
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