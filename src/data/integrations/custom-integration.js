import heroBg from "../../assets/integrations/custom_hero.jpg";
import openapiImg from "../../assets/integrations/openapi_mesh.jpg";
import grpcImg from "../../assets/integrations/grpc_microservices.jpg";
import gqlImg from "../../assets/integrations/graphql_federation.jpg";
import sdkImg from "../../assets/integrations/sdk_bridges.jpg";
import caseImg from "../../assets/integrations/custom_case.jpg";

export const customIntegrationData = {
  id: "custom-integration",
  category: "Integrations",
  name: "Custom Integration",
  tagline: "Developer SDKs, OpenAPI 3.1, GraphQL Federation & Custom gRPC Microservice Bridges",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // DEVELOPER SDK & API MESH",
    subBadge: "BESPOKE CONNECTORS FOR LEGACY MAINFRAMES & PROPRIETARY MICROSERVICES",
    titleLight: "Build Any Custom Connection with",
    titleBold: "DevOpsTRIO Custom Integration SDK",
    description: "Use our lightweight TypeScript, Python, and Go SDKs to build bespoke enterprise connectors for proprietary internal APIs, legacy mainframe databases, private gRPC microservices, and federated GraphQL schemas in minutes.",
    bgImage: heroBg,
    liveBadge: "Active SDK Framework: v5.2 Ready",
    telemetry: {
      avgSyncLatency: "1ms",
      activeWebhooks: "1,200,000+",
      authProtocol: "gRPC mTLS / API Keys",
      securityStandard: "SOC 2 Type II & OpenID"
    }
  },
  stats: [
    { value: "< 1ms", label: "gRPC Microservice Overhead", sub: "Sub-millisecond binary Protocol Buffer serialization" },
    { value: "4 SDKs", label: "Official Language Runtimes", sub: "TypeScript, Python, Go, and Rust SDKs with auto-types" },
    { value: "100%", label: "OpenAPI 3.1 & GraphQL Spec Parity", sub: "Auto-generate typed client SDKs from schema contracts" },
    { value: "1,000+", label: "Custom Connectors Deployed in Production", sub: "Connecting proprietary internal systems globally" }
  ],
  connectors: [
    {
      id: "openapi-rest-mesh",
      name: "OpenAPI 3.1 & REST Gateway",
      category: "Standardized REST Mesh",
      badge: "OpenAPI 3.1 / JSON Schema",
      image: openapiImg,
      description: "Import any OpenAPI 3.1 specification to instantly generate fully-typed, authenticated tool interfaces for your autonomous AI swarms.",
      protocols: ["OpenAPI Specification v3.1", "JSON Schema Draft 2020-12", "HMAC / Bearer Auth"],
      syncCapabilities: [
        "Instant schema parsing turning REST endpoints into executable AI agent tools",
        "Automated request payload validation against JSON Schema constraints",
        "Dynamic mock server generation for rapid local development testing"
      ],
      avgLatency: "2ms"
    },
    {
      id: "grpc-microservices",
      name: "gRPC & Protocol Buffers",
      category: "High-Performance RPC",
      badge: "Protobuf v3 / HTTP/2",
      image: grpcImg,
      description: "Ultra-low-latency binary communication for high-throughput internal microservices, streaming real-time sensor data and trade orders.",
      protocols: ["gRPC over HTTP/2", "Protocol Buffers v3", "Mutual TLS (mTLS)"],
      syncCapabilities: [
        "Sub-millisecond bidirectional streaming RPCs between agent swarms and microservices",
        "Strict proto contract enforcement preventing backward-incompatible breaking changes",
        "Native connection multiplexing over single persistent TCP sockets"
      ],
      avgLatency: "1ms"
    },
    {
      id: "graphql-federation",
      name: "GraphQL Federation & Mesh",
      category: "Unified Graph API",
      badge: "Apollo Federation v2",
      image: gqlImg,
      description: "Unify distributed subgraphs across multiple engineering teams into a single queryable graph schema for autonomous agent exploration.",
      protocols: ["Apollo Federation v2 Specification", "GraphQL Subscriptions WebSocket", "OAuth 2.0"],
      syncCapabilities: [
        "Query optimization executing parallel sub-queries across 20+ backend microservices",
        "Real-time GraphQL subscriptions for live event updates and chat messages",
        "Type-safe schema composition with automated conflict resolution"
      ],
      avgLatency: "3ms"
    },
    {
      id: "developer-sdks",
      name: "TypeScript, Python & Go SDKs",
      category: "Native Language SDKs",
      badge: "npm / PyPI / Go Modules",
      image: sdkImg,
      description: "Lightweight, zero-dependency client SDKs providing automated retry logic, exponential backoff, rate limiting, and telemetry instrumentation.",
      protocols: ["OpenTelemetry Spans", "Automatic Exponential Backoff", "Type-Safe CodeGen"],
      syncCapabilities: [
        "Pre-built decorators and middleware for FastAPI, Express, NestJS, and Gin",
        "Built-in OpenTelemetry tracing linking every agent tool call to APM dashboards",
        "Zero-config local development emulator for testing webhooks without public URLs"
      ],
      avgLatency: "1ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Custom Connector Code Studio",
    subtitle: "Select a custom protocol scenario below to observe automated tool definition generation and gRPC execution traces.",
    scenarios: [
      {
        id: "openapi-tool-gen",
        title: "OpenAPI Spec Ingestion ➔ Instant AI Tool Generation",
        trigger: "Imported Spec: 'https://api.internal.bank/v1/openapi.json' (Wire Transfer Endpoint)",
        sourceApp: "DevOpsTRIO SDK CLI",
        targetApp: "Autonomous Banking Agent Tool Registry",
        executionTime: "24ms",
        status: "200 OK — Tool 'initiate_wire_transfer' Registered & Verified",
        payload: {
          event_type: "custom_connector_registered",
          connector_type: "OpenAPI_3_1_REST",
          parsed_endpoints_count: 14,
          generated_tool: {
            tool_name: "initiate_wire_transfer",
            description: "Initiates an ISO 20022 wire transfer with compliance verification",
            parameters: {
              account_from: "string (IBAN format)",
              account_to: "string (IBAN format)",
              amount: "number (min: 0.01)",
              currency: "string (enum: USD, EUR, GBP)"
            },
            auth_method: "mTLS_Hardware_Certificate"
          },
          ready_for_agents: true
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Strict Mutual TLS (mTLS) with Certificate Pinning",
      desc: "Every custom microservice connector enforces bi-directional cryptographic identity verification between agent runtimes and private endpoints."
    },
    {
      title: "Automated Schema Input Sanitization & Bounds Checking",
      desc: "SDK request interceptors validate all input payloads against strict parameter bounds, preventing buffer overflow and parameter injection."
    },
    {
      title: "Distributed Circuit Breaker & Fallback Handlers",
      desc: "If an internal legacy system slows down or becomes unavailable, circuit breakers trip in 10 milliseconds to prevent cascading service failure."
    },
    {
      title: "Built-In OpenTelemetry Distributed Tracing",
      desc: "Every custom connector call emits standardized W3C trace context headers, allowing end-to-end distributed transaction tracing in Datadog and Dynatrace."
    }
  ],
  caseStudy: {
    client: "Tier-1 Defense & Aerospace Engineering Conglomerate",
    industry: "Aerospace, Defense & High-Performance Engineering",
    headline: "How Custom gRPC & OpenAPI Connectors Linked 40 Legacy Mainframe Systems to Autonomous Engineering Swarms",
    quote: "We had four decades of proprietary CAD tools, legacy FORTRAN mainframes, and private databases. DevOpsTRIO's custom integration SDK allowed our engineers to build secure, typed connectors in days instead of months.",
    author: "Principal Enterprise Architect",
    company: "Global Aerospace & Defense Leader",
    image: caseImg,
    results: [
      { stat: "40", label: "Legacy mainframe and custom systems connected" },
      { stat: "< 1ms", label: "gRPC microservice invocation overhead latency" },
      { stat: "100%", label: "Air-gapped security and on-premises data sovereignty" }
    ]
  }
};
