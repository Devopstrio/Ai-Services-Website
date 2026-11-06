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

export function getIntegrationFaqs(integrationId, integrationName) {
  const name = integrationName || "Enterprise Integration";
  return [
    {
      q: `How does Devopstrio connect ${name} securely to our existing enterprise infrastructure?`,
      a: `Connectors for ${name} deploy as containerized stateless microservices within your private VPC perimeter or hybrid cloud network. Using mutual TLS (mTLS 1.3), OAuth 2.0 / SAML token exchanges, and private network peering (AWS PrivateLink / Azure Private Link), data flows directly without public exposure.`,
      proof: `Connector Architecture: Private VPC & mTLS 1.3 Enforced Peering for ${name}`,
      tags: ["Security", "mTLS", "PrivateLink", "VPC", "Enterprise Connectors"]
    },
    {
      q: `Does customer data get cached or persisted in the ${name} middleware layer?`,
      a: `No. The ${name} integration layer operates strictly in-memory. Payloads are processed on-the-fly, normalized, and streamed directly between source and target systems without any intermediate disk persistence or unencrypted staging.`,
      proof: "Zero-Persistence: Ephemeral In-Memory Streaming with Zero Disk Staging",
      tags: ["Stateless", "Data Privacy", "In-Memory", "Zero Staging"]
    },
    {
      q: `How does ${name} handle high-throughput real-time event streaming and spikes?`,
      a: `We utilize distributed event backbones powered by Apache Kafka, Redis Streams, or native cloud pub/sub queues. Built-in token-bucket rate limiters, backpressure controls, and exponential backoff retry algorithms prevent third-party API rate-limiting errors.`,
      proof: "Throughput Guarantee: Kafka-Backed Event Streaming with Automated Backpressure",
      tags: ["Kafka", "Throughput", "Rate Limiting", "Fault Tolerance"]
    },
    {
      q: `What authentication and zero-trust policies are enforced for ${name}?`,
      a: `We enforce least-privilege scoping, automated secret rotation via HashiCorp Vault or AWS Secrets Manager, fine-grained Role-Based Access Control (RBAC), and cryptographic audit signatures for every transaction.`,
      proof: "Zero-Trust: Automated Secrets Rotation & Cryptographic Audit Signatures",
      tags: ["Zero-Trust", "Secrets Manager", "RBAC", "Access Control"]
    },
    {
      q: `Can ${name} connectors operate in air-gapped or on-premise legacy environments?`,
      a: `Yes. Lightweight Devopstrio gateway agents can be installed directly in air-gapped on-premise data centers, enabling legacy mainframe or relational database workloads to communicate securely with modern AI pipelines via hardware-isolated reverse proxies.`,
      proof: "Hybrid Deployments: On-Premise Gateway Agents for Air-Gapped Environments",
      tags: ["Hybrid Cloud", "On-Premise", "Air-Gapped", "Legacy Systems"]
    },
    {
      q: `What monitoring, telemetry, and error alerting are included with ${name}?`,
      a: `Pre-configured Prometheus, Grafana, and Datadog telemetry dashboards provide real-time visibility into request throughput, latency percentiles (p50/p95/p99), status distributions, and automated PagerDuty alert triggers for connector anomalies.`,
      proof: "Observability: Prometheus & Grafana Metrics with Automated PagerDuty Alerts",
      tags: ["Observability", "Prometheus", "Telemetry", "Alerting"]
    },
    {
      q: `What is the typical deployment timeline for enterprise-grade ${name} connectors?`,
      a: `Pre-built cloud and enterprise SaaS connectors validate and deploy within 24 to 48 hours. Bespoke integrations with proprietary internal APIs or custom schemas are delivered in production-ready condition within 1 to 2 weeks.`,
      proof: "Deployment Velocity: 24-48 Hour Turnaround for Pre-Built Connectors",
      tags: ["Timeline", "Deployment", "Agile Integration", "ROI"]
    },
    {
      q: `How do we request custom connector extensions or schema modifications for ${name}?`,
      a: `Our solutions engineering team provides continuous connector maintenance and custom schema mapping as part of our integration services. You can request architectural scoping and new endpoint connectors directly through our engineering review team.`,
      proof: "Engineering Support: Continuous Connector Maintenance & Schema Customization",
      tags: ["Custom Extensions", "Schema Mapping", "Support", "Maintenance"]
    }
  ];
}
