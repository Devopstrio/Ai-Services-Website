import heroBg from "../../assets/fresh/saas_cloud_platform_ui.jpg";
import feat1Img from "../../assets/fresh/multimodal_ai_workbench.jpg";
import feat2Img from "../../assets/fresh/deep_learning_tensor.jpg";
import feat3Img from "../../assets/fresh/microchip_wafer_lithography.jpg";
import feat4Img from "../../assets/fresh/server_rack_neon_glow.jpg";
import caseImg from "../../assets/fresh/holographic_data_globe.jpg";

export const aistudioData = {
  "id": "ai-studio",
  "category": "Productivity AI",
  "name": "AI Studio",
  "tagline": "Enterprise LLM Development Workbench, Prompt IDE & Fine-Tuning Sandbox",
  "metrics": [
    {
      "value": "10x",
      "label": "Faster Model Evaluation",
      "sub": "Automated regression testing"
    },
    {
      "value": "40%",
      "label": "Inference Token Cost Savings",
      "sub": "Dynamic model routing & quantization"
    },
    {
      "value": "< 20ms",
      "label": "Gateway Routing Overhead",
      "sub": "Ultra-low latency inference mesh"
    },
    {
      "value": "100%",
      "label": "Model Governance & Auditing",
      "sub": "Complete prompt & output logs"
    }
  ],
  "overview": {
    "heading": "The Complete Enterprise LLMOps Platform from Experimentation to Production",
    "description": "Building production-grade AI applications requires more than just calling raw API endpoints. AI Studio provides an integrated workbench for prompt optimization, fine-tuning open-weights models (Llama, Mistral), evaluating hallucinations, and managing model guardrails at scale.",
    "keyPoints": [
      "Visual prompt testing sandbox with side-by-side model comparisons",
      "Automated evaluation metrics (ROUGE, BLEU, G-Eval, Hallucination Index)",
      "LoRA and QLoRA fine-tuning workflows on private enterprise clusters",
      "Production AI Gateway with load balancing, caching, and rate limiting"
    ]
  },
  "features": [
    {
      "id": "promptide",
      "tabTitle": "Prompt IDE",
      "title": "Collaborative Prompt Engineering Sandbox",
      "description": "Design, test, and version-control complex multi-turn system prompts across 20+ foundational models simultaneously.",
      "highlights": [
        "Side-by-side latency, cost, and output comparison",
        "Variables and dynamic template injection support",
        "Git-like version control for prompt commits",
        "One-click deployment to REST and GraphQL APIs"
      ],
      "image": "multimodal_ai_workbench.jpg"
    },
    {
      "id": "evaluation",
      "tabTitle": "Evaluations",
      "title": "Automated Regression & Hallucination Testing",
      "description": "Run automated test suites across thousands of synthetic and historical customer test cases before promoting prompt changes to production.",
      "highlights": [
        "Custom evaluation rubrics and automated grading",
        "Detects semantic drift and hallucination regressions",
        "Red-teaming adversarial vulnerability testing",
        "Continuous evaluation metrics dashboard"
      ],
      "image": "deep_learning_tensor.jpg"
    },
    {
      "id": "finetuning",
      "tabTitle": "Fine-Tuning",
      "title": "Private Domain Model Fine-Tuning (LoRA / QLoRA)",
      "description": "Fine-tune open-weights models on your proprietary enterprise datasets with automated dataset preparation and validation.",
      "highlights": [
        "Automated data cleansing and synthetic expansion",
        "Cost-effective LoRA and full-parameter tuning",
        "Exports GGUF and TensorRT-LLM optimized weights",
        "Runs on private Kubernetes GPU clusters"
      ],
      "image": "microchip_wafer_lithography.jpg"
    },
    {
      "id": "gateway",
      "tabTitle": "AI Gateway",
      "title": "Enterprise High-Speed AI Proxy & Guardrails",
      "description": "Route production traffic across multiple LLM providers with automatic fallback, semantic caching, rate limiting, and PII masking.",
      "highlights": [
        "Reduces token costs up to 40% with semantic caching",
        "Sub-second automatic failover when providers outage",
        "Enforces strict PII masking and content moderation",
        "Unified usage billing and quota tracking by team"
      ],
      "image": "server_rack_neon_glow.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Prompt Design",
      "desc": "Engineers prototype prompts across frontier and open-weights models."
    },
    {
      "step": "02",
      "title": "Dataset Eval",
      "desc": "Automated benchmark runs 1,000+ test cases to grade accuracy."
    },
    {
      "step": "03",
      "title": "Fine-Tuning",
      "desc": "Trains custom domain weights using private enterprise data."
    },
    {
      "step": "04",
      "title": "Guardrails",
      "desc": "Applies PII filters, content moderation, and latency thresholds."
    },
    {
      "step": "05",
      "title": "Deploy Gateway",
      "desc": "Deploys to production with high-speed caching and auto-failover."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Model Evaluation & Tuning Simulator",
    "subtitle": "Select an enterprise AI workload below to see how AI Studio benchmarks model performance, evaluates latency, and optimizes token costs.",
    "personas": [
      {
        "name": "Legal Contract Clause Extractor",
        "role": "Benchmark: Llama-3-70B vs GPT-4o vs Fine-Tuned 8B",
        "experience": "Test Suite: 500 Complex MSA Contracts",
        "matchScore": 99,
        "matchGrade": "Fine-Tuned 8B Selected",
        "summary": "Fine-Tuned Llama-3-8B achieved 98.6% extraction accuracy matching frontier models while cutting inference latency by 72% and token costs by 84%.",
        "competencies": [
          {
            "skill": "Field Accuracy Score",
            "score": 99
          },
          {
            "skill": "Latency Reduction",
            "score": 96
          },
          {
            "skill": "Cost Optimization",
            "score": 98
          },
          {
            "skill": "Guardrail Compliance",
            "score": 100
          }
        ],
        "aiInsight": "Deployed Fine-Tuned 8B model to private EU inference cluster with $180K annual API cost savings."
      }
    ]
  },
  "integrations": [
    {
      "name": "OpenAI, Anthropic & Google",
      "type": "Frontier Model API Connectors"
    },
    {
      "name": "Hugging Face & Ollama",
      "type": "Open-Weights Model Registry"
    },
    {
      "name": "vLLM & TensorRT-LLM",
      "type": "Optimized GPU Inference Engine"
    },
    {
      "name": "LangChain & LlamaIndex",
      "type": "Framework SDK Support"
    },
    {
      "name": "Kubernetes & Ray",
      "type": "Distributed Training Orchestration"
    },
    {
      "name": "Datadog & OpenTelemetry",
      "type": "LLM Observability Traces"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Audited developer infrastructure security"
    },
    {
      "label": "On-Premises GPU Support",
      "desc": "Deployable entirely behind your corporate firewall"
    },
    {
      "label": "Role-Based Token Keys",
      "desc": "Granular spending limits and API key scoping"
    },
    {
      "label": "Zero Model Leakage",
      "desc": "Custom weights remain 100% proprietary to your enterprise"
    }
  ],
  "caseStudy": {
    "client": "Global FinTech Platform",
    "industry": "Financial Technology",
    "headline": "How 200 AI Engineers Cut Model Inference Costs by 65% while Shipping 8 New GenAI Features",
    "quote": "AI Studio gave us enterprise-grade observability and testing. We moved from fragile ad-hoc prompt testing to deterministic engineering with automated quality gates.",
    "author": "VP of Artificial Intelligence",
    "company": "Fortune 500 Fintech",
    "image": "cloud_data_center_hall.jpg",
    "results": [
      {
        "stat": "65%",
        "label": "Reduction in monthly LLM token costs"
      },
      {
        "stat": "4x",
        "label": "Faster deployment velocity to production"
      },
      {
        "stat": "99.99%",
        "label": "Inference gateway reliability"
      }
    ]
  },
  "hero": {
    "badge": "PRODUCTIVITY // DEVELOPER TOOLING",
    "titleLight": "Build & Fine-Tune Models with",
    "titleBold": "AI Studio",
    "description": "The complete enterprise IDE for building, evaluating, and deploying custom AI applications. Features prompt engineering sandboxes, RLHF evaluation pipelines, and one-click production API deployment.",
    "liveBadge": "v5.0 Developer Ready",
    "bgImage": "heroBg"
  }
};
aistudioData.hero.bgImage = heroBg;
aistudioData.features[0].image = feat1Img || heroBg;
aistudioData.features[1].image = feat2Img || heroBg;
aistudioData.features[2].image = feat3Img || heroBg;
aistudioData.features[3].image = feat4Img || heroBg;
aistudioData.caseStudy.image = caseImg || heroBg;
