import heroBg from "../../assets/fresh/it-experts-server-hub-doing-brainstorming-finding-ways-shield-data.jpg";
import feat1Img from "../../assets/fresh/kubernetes_cluster_nodes.jpg";
import feat2Img from "../../assets/fresh/binary_code_tunnel.jpg";
import feat3Img from "../../assets/fresh/product_devops_copilot.jpg";
import feat4Img from "../../assets/fresh/programming-background-with-person-working-with-codes-computer.jpg";
import caseImg from "../../assets/fresh/serviceman-server-hub-checking-documentation-supercomputers.jpg";

export const devopscopilotData = {
  "id": "devops-copilot",
  "category": "Business Platform",
  "name": "DevOps Copilot",
  "tagline": "Autonomous CI/CD Debugging, Infrastructure as Code Synthesis & AIOps SRE",
  "metrics": [
    {
      "value": "80%",
      "label": "MTTR Incident Reduction",
      "sub": "Instant root cause isolation"
    },
    {
      "value": "5x",
      "label": "Faster Deployment Frequency",
      "sub": "Automated pipeline optimization"
    },
    {
      "value": "99.99%",
      "label": "Cloud Uptime Guarantee",
      "sub": "Predictive anomaly remediation"
    },
    {
      "value": "45%",
      "label": "Cloud Compute Cost Savings",
      "sub": "Autonomous rightsizing & spot tuning"
    }
  ],
  "overview": {
    "heading": "The Autonomous Site Reliability Engineer for Modern Multi-Cloud Stacks",
    "description": "Complex Kubernetes clusters, sprawling microservices, and distributed databases create alert fatigue and expensive production downtime. DevOps Copilot operates as an autonomous 24/7 SRE engineer embedded in your CI/CD pipelines.\n\nFrom parsing gigabytes of Datadog and CloudWatch telemetry in milliseconds to generating self-healing pull requests, DevOps Copilot eliminates platform bottlenecks.",
    "keyPoints": [
      "Autonomous root-cause analysis across logs, metrics, and distributed traces",
      "Natural language to validated Infrastructure as Code (Terraform, Pulumi, Helm)",
      "Self-healing CI/CD pipeline auto-triage for failed test suites and Docker builds",
      "Predictive FinOps engine that rightsizes Kubernetes pods and cloud databases"
    ]
  },
  "features": [
    {
      "id": "rootcause",
      "tabTitle": "Incident Triage",
      "title": "Sub-Second Root-Cause Analysis & Diagnostics",
      "description": "When an alert fires, DevOps Copilot correlates millions of telemetry events, git commits, and dependency graphs to pinpoint the exact failure line in seconds.",
      "highlights": [
        "Correlates OpenTelemetry traces with GitHub commits",
        "Generates human-readable incident post-mortems instantly",
        "Reduces MTTR from hours to under 3 minutes",
        "Integrates with PagerDuty, Opsgenie, and Slack"
      ],
      "image": "server_rack_neon_glow.jpg"
    },
    {
      "id": "iac",
      "tabTitle": "IaC Generation",
      "title": "Production-Grade Terraform & Helm Generation",
      "description": "Generate compliant, secure multi-cloud infrastructure configurations from plain English requirements with built-in CIS benchmark security checks.",
      "highlights": [
        "Enforces enterprise security guardrails automatically",
        "Validates syntax and cloud provider API schemas",
        "Prevents misconfigurations like open S3 buckets",
        "Automated drift detection and remediation"
      ],
      "image": "binary_code_tunnel.jpg"
    },
    {
      "id": "cihealing",
      "tabTitle": "Pipeline Healing",
      "title": "Self-Healing CI/CD Pipeline Optimizer",
      "description": "Identifies flaky tests, optimizes parallel build steps, and generates instant fix pull requests for broken Docker build dependencies.",
      "highlights": [
        "5x faster GitHub Actions & GitLab CI build speeds",
        "Automated dependency vulnerability patching",
        "Caches intelligence across distributed runners",
        "Flaky test quarantine and automatic rerun heuristics"
      ],
      "image": "saas_cloud_platform_ui.jpg"
    },
    {
      "id": "finops",
      "tabTitle": "FinOps Tuning",
      "title": "Continuous Cloud Cost & Spot Instance Optimizer",
      "description": "Monitors real-time resource utilization to downscale idle environments, rightsizes CPU/RAM requests, and leverages spot instances with zero downtime risk.",
      "highlights": [
        "45% average cloud infrastructure bill reduction",
        "Automated Kubernetes HPA/VPA autoscaling optimization",
        "Identifies orphaned EBS volumes and idle clusters",
        "Executive FinOps cloud budget forecasting"
      ],
      "image": "cloud_data_center_hall.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Telemetry Ingest",
      "desc": "Connects agent to Kubernetes, CloudWatch, Datadog, and Prometheus."
    },
    {
      "step": "02",
      "title": "Baseline Modeling",
      "desc": "AI models normal traffic patterns and establishes anomaly thresholds."
    },
    {
      "step": "03",
      "title": "Incident Detection",
      "desc": "Sub-second triage pinpoints root cause across millions of log lines."
    },
    {
      "step": "04",
      "title": "Self-Healing PR",
      "desc": "Generates fix PR with IaC adjustment and unit test verification."
    },
    {
      "step": "05",
      "title": "Automated Deploy",
      "desc": "Deploys patch through CI/CD pipeline with continuous canary checks."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive AIOps Incident Resolution Simulator",
    "subtitle": "Select a production outage scenario below to see how DevOps Copilot analyzes telemetry, pinpoints root cause, and generates self-healing patches.",
    "personas": [
      {
        "name": "Kubernetes OOMKilled & Deadlock Outage",
        "role": "Incident: 504 Gateway Timeout on Checkout API",
        "experience": "Severity 1 • 14 Pods Affected",
        "matchScore": 99,
        "matchGrade": "Root Cause Isolated in 42s",
        "summary": "Identified memory leak in Redis caching client introduced in PR #842. Pods exceeded 2GB limit causing cascading cluster restarts.",
        "competencies": [
          {
            "skill": "Trace Correlation",
            "score": 99
          },
          {
            "skill": "Log Anomaly Detection",
            "score": 98
          },
          {
            "skill": "Memory Leak Isolation",
            "score": 97
          },
          {
            "skill": "Patch PR Generation",
            "score": 100
          }
        ],
        "aiInsight": "Generated hotfix PR adjusting connection pool parameters and scaled memory limit to 4GB temporarily. Service recovered in 2.1 minutes."
      },
      {
        "name": "Terraform IAM Policy Misconfiguration",
        "role": "Security Audit: Over-Permissive S3 Bucket",
        "experience": "Severity 2 • Compliance Vulnerability",
        "matchScore": 97,
        "matchGrade": "Auto-Remediated",
        "summary": "Staging deployment attempted to apply public read permissions on customer analytics datalake.",
        "competencies": [
          {
            "skill": "CIS Benchmark Check",
            "score": 100
          },
          {
            "skill": "Terraform Linting",
            "score": 99
          },
          {
            "skill": "IAM Policy Restrict",
            "score": 98
          },
          {
            "skill": "Audit Log Sync",
            "score": 96
          }
        ],
        "aiInsight": "Blocked deployment pipeline and inserted AWS KMS encryption block with restricted VPC endpoint policy."
      }
    ]
  },
  "integrations": [
    {
      "name": "Kubernetes & OpenShift",
      "type": "Cluster Operator & Helm"
    },
    {
      "name": "GitHub Actions & GitLab",
      "type": "CI/CD Native Pipeline App"
    },
    {
      "name": "AWS, Azure & GCP",
      "type": "Multi-Cloud IAM & Telemetry"
    },
    {
      "name": "Terraform & Pulumi",
      "type": "IaC Generation Engine"
    },
    {
      "name": "Datadog & Prometheus",
      "type": "Metrics & Logs Stream"
    },
    {
      "name": "PagerDuty & Slack",
      "type": "Real-Time SRE Alerts"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Certified infrastructure access controls"
    },
    {
      "label": "Read-Only Sandbox",
      "desc": "No destructive commands without explicit human approval"
    },
    {
      "label": "Air-Gapped Support",
      "desc": "Deployable in isolated government / banking enclaves"
    },
    {
      "label": "Zero Model Retention",
      "desc": "Source code and logs never stored on public AI"
    }
  ],
  "caseStudy": {
    "client": "Global Tier-1 E-Commerce Platform",
    "industry": "Retail & E-Commerce",
    "headline": "How Black Friday Traffic Surges Handled 40M Requests with Zero Downtime",
    "quote": "DevOps Copilot is like having 10 principal SRE architects on call 24/7. It caught a cascading database connection bottleneck 10 minutes before it could bring down checkout.",
    "author": "VP of Cloud Infrastructure",
    "company": "Fortune 100 Retailer",
    "image": "cloud_data_center_hall.jpg",
    "results": [
      {
        "stat": "82%",
        "label": "Reduction in MTTR outage time"
      },
      {
        "stat": "99.999%",
        "label": "Uptime achieved during peak sales"
      },
      {
        "stat": "$3.1M",
        "label": "Annual AWS compute savings"
      }
    ]
  },
  "hero": {
    "badge": "PRODUCTIVITY // CLOUD & DEVOPS AI",
    "titleLight": "Self-Healing Cloud Infrastructure with",
    "titleBold": "DevOps Copilot",
    "description": "Accelerate software delivery velocity and slash MTTR. DevOps Copilot analyzes deployment logs in real time, generates production-ready Terraform blueprints, predicts cluster bottlenecks, and automatically resolves production incidents.",
    "liveBadge": "v4.5 Enterprise Ready",
    "bgImage": "heroBg"
  }
};
devopscopilotData.hero.bgImage = heroBg;
devopscopilotData.features[0].image = feat1Img || heroBg;
devopscopilotData.features[1].image = feat2Img || heroBg;
devopscopilotData.features[2].image = feat3Img || heroBg;
devopscopilotData.features[3].image = feat4Img || heroBg;
devopscopilotData.caseStudy.image = caseImg || heroBg;
