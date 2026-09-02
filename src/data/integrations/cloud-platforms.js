import heroBg from "../../assets/integrations/cloud_hero.jpg";
import awsImg from "../../assets/integrations/aws_cloud.jpg";
import azureImg from "../../assets/integrations/azure_cloud.jpg";
import gcpImg from "../../assets/integrations/gcp_cloud.jpg";
import k8sImg from "../../assets/integrations/k8s_cluster.jpg";
import caseImg from "../../assets/integrations/cloud_case.jpg";

export const cloudPlatformsData = {
  id: "cloud-platforms",
  category: "Integrations",
  name: "Cloud Platforms",
  tagline: "Multi-Cloud Connectors for AWS, Microsoft Azure, Google Cloud & Kubernetes Clusters",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // HYBRID CLOUD FABRIC",
    subBadge: "MULTI-REGION SOVEREIGN CLOUD SYNC",
    titleLight: "Unified Multi-Cloud Orchestration with",
    titleBold: "DevOpsTRIO Cloud Integrations",
    description: "Connect distributed AI swarms directly into AWS, Microsoft Azure, Google Cloud Platform (GCP), and private Kubernetes clusters with automated IAM role assumption, Terraform state sync, and FinOps cloud spend governance.",
    bgImage: heroBg,
    liveBadge: "Active Multi-Cloud Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "8ms",
      activeWebhooks: "350,000+",
      authProtocol: "OIDC / IAM Roles",
      securityStandard: "FedRAMP High & ISO 27001"
    }
  },
  stats: [
    { value: "< 8ms", label: "Cloud API Execution Latency", sub: "Sub-millisecond IAM policy & container dispatch" },
    { value: "4 Major Clouds", label: "Native Unified Multi-Cloud", sub: "AWS, Azure, Google Cloud, On-Premises Bare-Metal" },
    { value: "35% Average", label: "FinOps Cloud Cost Reduction", sub: "Autonomous spot instance & serverless optimization" },
    { value: "50,000+", label: "Kubernetes Nodes Managed", sub: "Distributed across multi-region sovereign clusters" }
  ],
  connectors: [
    {
      id: "aws-cloud",
      name: "Amazon Web Services (AWS)",
      category: "Hyperscale Cloud",
      badge: "AWS IAM / EventBridge / EKS",
      image: awsImg,
      description: "Direct bi-directional integration across Amazon EKS, Lambda, S3, SQS, SageMaker, and Bedrock with native IAM temporary role assumption and EventBridge bus listeners.",
      protocols: ["AWS SDK v3 / SigV4", "Amazon EventBridge Rules", "AWS Secrets Manager IAM"],
      syncCapabilities: [
        "Dynamic GPU spot cluster scale-up and scale-down based on queue depth",
        "Continuous CloudTrail security audit logging and automated remediation",
        "Multi-region DynamoDB global table replication for AI vector memory"
      ],
      avgLatency: "7ms"
    },
    {
      id: "azure-cloud",
      name: "Microsoft Azure",
      category: "Enterprise Cloud",
      badge: "Azure Resource Manager / AKS",
      image: azureImg,
      description: "Deep integration with Azure Kubernetes Service (AKS), Azure OpenAI Service, Cosmos DB, and Azure Key Vault with native Entra ID managed identities.",
      protocols: ["Azure REST APIs", "Azure Event Grid Subscriptions", "Managed Identities OIDC"],
      syncCapabilities: [
        "Zero-trust credential-less authentication using Azure Workload Identity",
        "Autonomous Azure OpenAI quota management and semantic request caching",
        "Unified compliance monitoring across sovereign EU & US government enclaves"
      ],
      avgLatency: "9ms"
    },
    {
      id: "google-cloud-platform",
      name: "Google Cloud Platform (GCP)",
      category: "AI & Big Data Cloud",
      badge: "Google Cloud APIs / GKE",
      image: gcpImg,
      description: "Connect to Google Kubernetes Engine (GKE), BigQuery, Cloud Run, Vertex AI, and Pub/Sub with automated service account impersonation.",
      protocols: ["Google Cloud Pub/Sub", "Vertex AI Prediction REST", "GCP Workload Identity Federation"],
      syncCapabilities: [
        "High-throughput TPU and GPU node autoscaling on Google GKE",
        "Sub-second BigQuery data lake streaming for real-time telemetry analytics",
        "Serverless container trigger dispatch from Cloud Storage upload events"
      ],
      avgLatency: "8ms"
    },
    {
      id: "kubernetes-hybrid",
      name: "Kubernetes & Hybrid Mesh",
      category: "Container Orchestration",
      badge: "K8s Operator / Istio Mesh",
      image: k8sImg,
      description: "Deploy custom Kubernetes operators and CRDs to orchestrate multi-tenant agent swarms across on-premises bare-metal and hybrid cloud clusters.",
      protocols: ["Kubernetes OpenAPI v1.30+", "Istio Service Mesh mTLS", "Prometheus Metrics Exporter"],
      syncCapabilities: [
        "Zero-downtime rolling canary deployments for AI microservice models",
        "Dynamic namespace resource quota enforcement and memory limits",
        "Self-healing node eviction and automatic failed container recovery"
      ],
      avgLatency: "6ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Multi-Cloud Dispatch Studio",
    subtitle: "Select a cloud infrastructure trigger below to observe real-time IAM authentication, container autoscaling, and cross-cloud execution.",
    scenarios: [
      {
        id: "aws-gpu-scale",
        title: "Workload Surge ➔ AWS EKS GPU Spot Auto-Provisioning",
        trigger: "Inference queue depth exceeded 10,000 tasks on model 'trio-vision-70b'",
        sourceApp: "DevOpsTRIO Telemetry",
        targetApp: "AWS EKS & Karpenter",
        executionTime: "84ms",
        status: "200 OK — 16x NVIDIA H100 Nodes Provisioned",
        payload: {
          event_type: "cloud.capacity_surge_detected",
          cluster_name: "prod-us-east-1-ai-cluster",
          target_nodegroup: "gpu-h100-spot",
          nodes_requested: 16,
          spot_discount_savings: "68.4%",
          iam_role_assumed: "arn:aws:iam::123456789:role/TrioKarpenterAdmin",
          kube_action: "karpenter.provision_nodepool"
        }
      },
      {
        id: "azure-failover",
        title: "Regional Outage ➔ Multi-Cloud Automated Failover",
        trigger: "Azure US-East-2 connectivity degradation detected (> 500ms latency)",
        sourceApp: "Global Health Probe",
        targetApp: "Google Cloud GKE (us-central1)",
        executionTime: "120ms",
        status: "200 OK — 100% Traffic Rerouted to GCP",
        payload: {
          event_type: "dns.traffic_failover_initiated",
          primary_cloud: "Azure us-east-2 (Degraded)",
          secondary_cloud: "GCP us-central1 (Active)",
          dns_ttl_seconds: 5,
          affected_endpoints: 12,
          packet_loss: "0.00%",
          traffic_rerouted_pct: 100
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Workload Identity & Credential-Less IAM",
      desc: "Eliminates long-lived static API keys by leveraging short-lived OIDC token exchanges with AWS IAM, Azure Entra ID, and GCP Workload Identity."
    },
    {
      title: "Multi-Cloud FinOps Budget Enforcement",
      desc: "Autonomous cost kill-switches and automated spot instance bidding prevent unbudgeted cloud infrastructure spending spikes."
    },
    {
      title: "Encrypted Cross-Cloud WireGuard Mesh",
      desc: "All traffic between AWS, Azure, GCP, and on-premises data centers travels through high-bandwidth encrypted WireGuard tunnels."
    },
    {
      title: "Sovereign EU & US Data Locality Guards",
      desc: "Enforces strict geographic boundary rules ensuring data processing never leaves designated sovereign legal jurisdictions."
    }
  ],
  caseStudy: {
    client: "Global Telecommunications & Cloud Infrastructure Provider",
    industry: "Telecommunications & Cloud Services",
    headline: "How Multi-Cloud AI Workload Routing Reduced Cloud Infrastructure Spend by 41% Annually",
    quote: "DevOpsTRIO's unified multi-cloud connectors allowed us to dynamically route training and inference workloads across AWS, GCP, and on-prem clusters based on spot pricing and renewable energy availability.",
    author: "VP of Cloud Architecture & Infrastructure",
    company: "Tier-1 Global Telecom & Cloud Operator",
    image: caseImg,
    results: [
      { stat: "41%", label: "Annual cloud infrastructure spend reduction" },
      { stat: "< 8ms", label: "Real-time multi-cloud API dispatch speed" },
      { stat: "99.999%", label: "Multi-region cluster uptime SLA maintained" }
    ]
  }
};
