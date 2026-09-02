import heroBg from "../../assets/integrations/aillm_hero.jpg";
import openaiImg from "../../assets/integrations/openai_gpt.jpg";
import anthropicImg from "../../assets/integrations/anthropic_claude.jpg";
import geminiImg from "../../assets/integrations/gemini_google.jpg";
import vllmImg from "../../assets/integrations/vllm_huggingface.jpg";
import caseImg from "../../assets/integrations/aillm_case.jpg";

export const aiLlmProvidersData = {
  id: "ai-llm-providers",
  category: "Integrations",
  name: "AI & LLM Providers",
  tagline: "Universal Gateway for OpenAI, Anthropic, Google Gemini, Mistral & vLLM Clusters",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // MULTI-LLM GATEWAY",
    subBadge: "ZERO-DOWNTIME MODEL ROUTING & SEMANTIC CACHING",
    titleLight: "Unify Your Model Stack with",
    titleBold: "DevOpsTRIO AI & LLM Providers",
    description: "Connect and route prompts dynamically across OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini 1.5 Pro, Mistral Large, and private self-hosted vLLM clusters with automated failover, semantic caching, and unified rate limiting.",
    bgImage: heroBg,
    liveBadge: "Active LLM Gateway: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "4ms",
      activeWebhooks: "500,000+",
      authProtocol: "Unified API Key / mTLS",
      securityStandard: "Zero-Data-Retention Vault"
    }
  },
  stats: [
    { value: "< 4ms", label: "Gateway Routing Overhead", sub: "Ultra-fast proxying with semantic token caching" },
    { value: "25+ Models", label: "Pre-Built LLM Providers", sub: "OpenAI, Anthropic, Google Gemini, Mistral, Llama 3" },
    { value: "52% Average", label: "LLM API Token Cost Savings", sub: "Achieved via exact & semantic embedding caching" },
    { value: "100%", label: "Zero Model Downtime Guarantee", sub: "Autonomous cascade failover to backup providers" }
  ],
  connectors: [
    {
      id: "openai-connector",
      name: "OpenAI GPT-4o & o1",
      category: "Frontier Foundation Models",
      badge: "OpenAI REST / Realtime API",
      image: openaiImg,
      description: "Direct bi-directional streaming for GPT-4o, o1 reasoning models, Whisper audio transcription, and DALL-E image synthesis with native structured JSON outputs.",
      protocols: ["OpenAI Responses API", "Server-Sent Events (SSE)", "Realtime WebSocket API"],
      syncCapabilities: [
        "Sub-second streaming token response with automated schema validation",
        "Fine-grained temperature, top_p, and custom system prompt overrides",
        "Automated fallback to secondary OpenAI tier upon rate limit 429 response"
      ],
      avgLatency: "5ms"
    },
    {
      id: "anthropic-connector",
      name: "Anthropic Claude 3.5 Sonnet & Opus",
      category: "Reasoning & Coding Models",
      badge: "Anthropic Messages API",
      image: anthropicImg,
      description: "High-performance integration for Claude 3.5 Sonnet, Claude 3 Opus, and computer use capabilities with prompt caching and 200k token context windows.",
      protocols: ["Anthropic Messages v1", "Prompt Caching API", "OAuth 2.0 / API Keys"],
      syncCapabilities: [
        "Up to 90% cost reduction on large prompts using Anthropic Prompt Caching",
        "Autonomous code synthesis and multi-file artifact editing",
        "Strict adherence to enterprise system guidelines and safety boundaries"
      ],
      avgLatency: "6ms"
    },
    {
      id: "google-gemini-connector",
      name: "Google Gemini 1.5 Pro & Flash",
      category: "Long-Context & Multimodal",
      badge: "Google Vertex AI / Gemini API",
      image: geminiImg,
      description: "Harness 2M+ token multimodal context windows across video, audio, PDFs, and code repositories with ground-truth search citations.",
      protocols: ["Vertex AI Predict API", "gRPC Streaming", "Google Service Account IAM"],
      syncCapabilities: [
        "Ingests multi-hour video streams and 1,000-page PDF documents natively",
        "Integrated Google Search Grounding for real-time web factual accuracy",
        "Ultra-low-cost high-throughput batch processing via Gemini 1.5 Flash"
      ],
      avgLatency: "5ms"
    },
    {
      id: "vllm-selfhosted",
      name: "vLLM & Private Hugging Face Models",
      category: "Sovereign Private AI",
      badge: "vLLM PagedAttention / OpenAI Specs",
      image: vllmImg,
      description: "Deploy and orchestrate open-weights models (Llama 3.3 70B, Qwen 2.5, DeepSeek R1) on private NVIDIA H100 GPU clusters with OpenAI API compatibility.",
      protocols: ["OpenAI-Compatible REST v1", "vLLM gRPC Server", "Kubernetes GPU Ingress"],
      syncCapabilities: [
        "100% on-premises data sovereignty with zero external data egress",
        "Optimized continuous batching with FP8 and AWQ quantization runtime",
        "Zero token billing fees — unlimited inference on dedicated hardware"
      ],
      avgLatency: "3ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Multi-LLM Routing Studio",
    subtitle: "Select a prompt scenario below to observe automated model cascading, semantic cache hits, and latency telemetry.",
    scenarios: [
      {
        id: "smart-llm-cascade",
        title: "High-Complexity Code Query ➔ Cascade Routing",
        trigger: "User Prompt: 'Refactor distributed Raft consensus implementation in Rust'",
        sourceApp: "IDE Copilot Client",
        targetApp: "Claude 3.5 Sonnet (Primary)",
        executionTime: "165ms",
        status: "200 OK — Claude 3.5 Sonnet Selected (Prompt Cached)",
        payload: {
          event_type: "llm_routing_decision",
          prompt_complexity_score: 0.94,
          routed_provider: "Anthropic (Claude 3.5 Sonnet)",
          prompt_cache_hit: true,
          input_tokens: 4280,
          output_tokens: 650,
          cost_saved_usd: "$0.0128",
          total_ttft_ms: 165
        }
      },
      {
        id: "semantic-cache-hit",
        title: "Recurring FAQ Query ➔ Instant Semantic Cache Hit",
        trigger: "User Prompt: 'How do I configure SAML SSO with Okta in the dashboard?'",
        sourceApp: "Customer Support Bot",
        targetApp: "Redis Semantic Cache",
        executionTime: "4ms",
        status: "200 OK — 100% Cache Hit (Zero LLM Tokens Consumed)",
        payload: {
          event_type: "semantic_cache_hit",
          cosine_similarity: 0.984,
          matched_canonical_question: "Configure Okta SAML SSO Guide",
          tokens_consumed: 0,
          latency_ms: 4,
          cost_usd: "$0.0000"
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Zero-Data-Retention (ZDR) Legal Guarantees",
      desc: "All enterprise connectors route requests under contractual ZDR terms where model providers are legally prohibited from training on customer data."
    },
    {
      title: "Automated PII & Secret Redaction Pipeline",
      desc: "Pre-inference tokenizers automatically detect and mask credit cards, API keys, passwords, and healthcare PHI before requests reach external LLM endpoints."
    },
    {
      title: "Universal Prompt Injection & Jailbreak Guardrails",
      desc: "Real-time semantic safety filters evaluate inputs and model completions in under 3 milliseconds to block prompt injection and data extraction attacks."
    },
    {
      title: "Dynamic Token Budgeting & Departmental Quotas",
      desc: "Set and enforce strict monthly LLM spending limits across engineering, marketing, and sales departments with automated slack alerts."
    }
  ],
  caseStudy: {
    client: "Global Digital Health & Insurance Platform (25M Users)",
    industry: "Healthcare & AI Technology",
    headline: "How Multi-Model Gateway Routing Cut Monthly LLM Expenses by 52% While Eliminating Outages",
    quote: "DevOpsTRIO's universal AI provider gateway gave us total model independence. When OpenAI or Anthropic faces an outage, our pipelines failover seamlessly in under 50 milliseconds without customer impact.",
    author: "Chief AI Officer",
    company: "Digital Health Enterprise Leader",
    image: caseImg,
    results: [
      { stat: "52%", label: "Monthly LLM API token spend reduction" },
      { stat: "< 4ms", label: "Gateway routing and semantic caching latency" },
      { stat: "100%", label: "Zero customer-facing model downtime" }
    ]
  }
};
