export const INTEGRATIONS_OVERVIEW_FAQS = [
  {
    q: "What core platforms and clouds does Devopstrio AI integrate with natively?",
    a: "We provide pre-built, authenticated connectors for Cloud Hyperscalers (AWS Bedrock, Azure OpenAI, GCP Vertex AI), Enterprise Data Warehouses (Snowflake, Databricks), Relational and Vector Databases (PostgreSQL, Pinecone, Milvus), and Enterprise SaaS (ServiceNow, Salesforce, Jira, Slack).",
    proof: "Integration Matrix: Native Connectors for AWS, Azure, Snowflake & Enterprise SaaS",
    tags: ["Integrations", "Cloud Hyperscalers", "Snowflake", "ServiceNow"]
  },
  {
    q: "How does Devopstrio securely integrate with AWS Bedrock and Microsoft Azure OpenAI?",
    a: "We deploy secure IAM-authenticated proxy gateways that enforce zero-retention logging, centralized token rate-limiting, cross-region failover, and comprehensive OpenTelemetry tracing across all API calls.",
    proof: "Gateway Security: IAM-Authenticated Proxy with Zero-Retention Data Policies",
    tags: ["AWS Bedrock", "Azure OpenAI", "IAM", "API Gateway"]
  },
  {
    q: "Does client data get cached or stored within the integration middleware layer?",
    a: "No. Our integration middleware operates statelessly, processing payloads strictly in memory using end-to-end TLS 1.3 encryption, ensuring that no client data persists within transit layers.",
    proof: "Privacy Architecture: Stateless In-Memory Streaming with Zero Transit Staging",
    tags: ["Stateless", "Data Privacy", "In-Memory", "Zero Staging"]
  },
  {
    q: "How do your integrations handle high-throughput real-time event streaming?",
    a: "We utilize Apache Kafka and event-driven webhook listeners that ingest real-time data events with exactly-once delivery guarantees, triggering downstream AI workflows with sub-second response times.",
    proof: "Streaming Throughput: Apache Kafka Streaming with Exactly-Once Delivery",
    tags: ["Kafka", "Event-Driven", "Webhooks", "Real-Time Streaming"]
  },
  {
    q: "How does the integration layer prevent API rate-limiting errors during usage spikes?",
    a: "Built-in distributed token-bucket rate limiters, asynchronous queue buffering, and exponential backoff retry policies prevent threshold throttling when interacting with third-party SaaS APIs.",
    proof: "Resilience Engineering: Distributed Token-Bucket Throttling & Exponential Retries",
    tags: ["Rate Limiting", "Fault Tolerance", "Queue Buffering", "Resilience"]
  },
  {
    q: "Can integrations operate in hybrid-cloud or on-premise environments?",
    a: "Yes. Lightweight gateway agents connect on-premise legacy databases and mainframes securely to cloud-hosted AI microservices via mutual TLS (mTLS) encrypted tunnels.",
    proof: "Hybrid Connectivity: Mutual TLS (mTLS) Tunnels for Secure On-Premise Bridging",
    tags: ["Hybrid Cloud", "mTLS", "On-Premise", "Tunneling"]
  },
  {
    q: "What monitoring and telemetry are available for integration pipelines?",
    a: "Integrated Prometheus and Grafana dashboards monitor API latencies, error status distributions, and payload throughput in real-time, accompanied by automated alerting to on-call channels.",
    proof: "Telemetry Standard: Prometheus & Grafana Dashboards with Real-Time Alerting",
    tags: ["Monitoring", "Prometheus", "Grafana", "Telemetry"]
  },
  {
    q: "What is the typical deployment timeline for enterprise connectors?",
    a: "Pre-configured cloud and SaaS connectors deploy within 24 to 48 hours, while bespoke legacy mainframe or custom database integrations typically validate within 1 to 2 weeks.",
    proof: "Deployment Velocity: 24 to 48 Hour Connector Configuration Timeframe",
    tags: ["Deployment", "Timeline", "Connectors", "Agile Integration"]
  }
];

export function getIntegrationFaqs(integrationId) {
  return INTEGRATIONS_OVERVIEW_FAQS;
}
