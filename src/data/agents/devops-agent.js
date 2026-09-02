import heroBg from "../../assets/library/agent_devops_cicd.jpg";
import ciImg from "../../assets/unique_agents/devops_pipeline_heal.jpg";
import k8sImg from "../../assets/fresh/kubernetes_cluster_nodes.jpg";
import sreImg from "../../assets/fresh/server_rack_neon_glow.jpg";
import iacImg from "../../assets/fresh/cloud_data_center_hall.jpg";
import caseImg from "../../assets/unique_agents/devops_agent_case.jpg";

export const devopsAgentData = {
  id: "devops-agent",
  category: "Engineering & IT",
  name: "DevOps Agent Swarm",
  tagline: "Autonomous CI/CD Auto-Healing, Multi-Cloud IaC & 24/7 SRE Triage",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Self-Healing Infrastructure with",
    titleBold: "DevOpsTRIO DevOps Agent",
    description: "Embedded 24/7 SRE and Cloud platform agent that correlates telemetry traces across Datadog, Prometheus, and Kubernetes, diagnoses root-cause incidents in seconds, generates verified Terraform patches, and auto-heals failed CI/CD pipelines.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 62,
      latency: "210ms",
      connectedTools: 24,
      autonomyScore: "99.8%"
    }
  },
  metrics: [
    { value: "< 45s", label: "MTTR Outage Triage", sub: "Instant root-cause telemetry diagnosis" },
    { value: "94%", label: "CI/CD Auto-Healing", sub: "Autonomous pipeline failure resolution" },
    { value: "99.99%", label: "Fleet Uptime", sub: "Continuous multi-cloud self-healing" },
    { value: "68%", label: "SRE On-Call Fatigue Cut", sub: "Automated alert noise deduplication" }
  ],
  overview: {
    heading: "The Autonomous SRE & Infrastructure Engineer for Modern Engineering Orgs",
    description: "Engineering teams lose thousands of developer hours every sprint to broken CI/CD pipelines, messy Terraform drifts, and late-night pager alerts.\n\nThe DevOpsTRIO DevOps Agent functions as an autonomous Site Reliability Engineering swarm. It continuously listens to distributed traces, Kubernetes events, and container logs, detects anomalies before outages occur, generates deterministic Terraform pull requests, and restarts unhealthy workloads safely.",
    keyPoints: [
      "24/7 autonomous SRE incident detection, root-cause correlation, and auto-remediation",
      "Self-healing CI/CD pipelines resolving flaky tests, broken dependencies, and Docker build errors",
      "Multi-cloud Infrastructure-as-Code (Terraform & Pulumi) drift detection and automated PRs",
      "Intelligent alert deduplication suppressing 90%+ of false-positive PagerDuty alarms"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Telemetry Perception",
      role: "Distributed Trace & Log Listener",
      description: "Ingests OpenTelemetry streams, Datadog APM traces, Prometheus metrics, and Kubernetes cluster events in real time.",
      tech: "eBPF Kernel Probes, OpenTelemetry & Vector Search"
    },
    {
      tier: "02",
      name: "Root-Cause Reasoning",
      role: "SRE Diagnostic Engine",
      description: "Correlates commit diffs, config deployments, and memory leaks to pinpoint exact code or infrastructure failures.",
      tech: "Causal Graph Modeling & Log Analysis Models"
    },
    {
      tier: "03",
      name: "Infrastructure Mesh",
      role: "Deterministic Execution Gateway",
      description: "Executes verified remediation steps: rollbacks, pod restarts, Terraform pull requests, and canary rollouts.",
      tech: "Sandboxed Kubernetes Operators & HashiCorp Vault Auth"
    }
  ],
  capabilities: [
    {
      id: "sre-triage",
      tag: "INCIDENT MANAGEMENT",
      title: "Sub-Minute SRE Outage Triage",
      description: "Correlates thousands of microservice log lines, trace spans, and commit hashes to deliver instant root-cause diagnostics during incidents.",
      features: [
        "Identifies faulty deployments, memory leaks, and deadlocks in under 45 seconds",
        "Generates automated 1-click rollback plans with zero risk of database corruption",
        "Dispatches comprehensive incident post-mortems with timeline to Slack",
        "Reduces Mean Time to Resolution (MTTR) by up to 82%"
      ],
      image: sreImg,
      metricBadge: "< 45s MTTR"
    },
    {
      id: "cicd-healing",
      tag: "CI/CD PIPELINES",
      title: "Autonomous Pipeline Auto-Healing",
      description: "Fixes broken GitHub Actions and GitLab CI builds caused by dependency mismatches, expired tokens, or flaky test configurations.",
      features: [
        "Diagnoses Docker container build failures and updates Dockerfile layers",
        "Resolves package lockfile and peer dependency conflicts automatically",
        "Re-runs verified flaky tests in isolated test containers",
        "94% of broken CI/CD builds healed without developer interruption"
      ],
      image: ciImg,
      metricBadge: "94% Auto-Heal"
    },
    {
      id: "k8s-orchestration",
      tag: "KUBERNETES & CLOUD",
      title: "Kubernetes Fleet Self-Healing",
      description: "Continuously monitors pod health, OOMKilled events, CrashLoopBackOff states, and ingress routing across multi-region clusters.",
      features: [
        "Autonomous pod rescheduling and resource request rightsizing",
        "Detects zombie processes and throttled CPU limits dynamically",
        "Zero-downtime rolling deployments and canary traffic shifting",
        "Maintains 99.99% multi-cloud Kubernetes cluster uptime"
      ],
      image: k8sImg,
      metricBadge: "99.99% Uptime"
    },
    {
      id: "iac-drift",
      tag: "INFRASTRUCTURE AS CODE",
      title: "Terraform & Cloud Drift Remediation",
      description: "Detects discrepancies between live cloud state (AWS, Azure, GCP) and Terraform / Pulumi repos, opening self-correcting pull requests.",
      features: [
        "Continuous 24/7 scanning of AWS, Azure, and Google Cloud infrastructure",
        "Generates clean, modular HCL Terraform pull requests for drifted assets",
        "Prevents accidental cloud resource deletion with strict IAM policies",
        "Full GitOps synchronization across staging and production fleets"
      ],
      image: iacImg,
      metricBadge: "100% GitOps Match"
    }
  ],
  comparison: [
    { metric: "Incident MTTR", legacy: "45 to 90 Minutes (War rooms)", agent: "Under 45 Seconds (Autonomous Triage)" },
    { metric: "Broken CI/CD Builds", legacy: "Blocks dev team for hours", agent: "Auto-healed in background in < 2 mins" },
    { metric: "Terraform Drift Detection", legacy: "Discovered during failed deployments", agent: "Continuous real-time drift pull requests" },
    { metric: "Alert Noise & Fatigue", legacy: "Hundreds of un-actionable Slack alerts", agent: "90%+ Deduplication into single incident dossier" },
    { metric: "Post-Mortem Documentation", legacy: "Takes 2 days of manual log digging", agent: "Instant automated timeline & root-cause report" }
  ],
  interactiveDemo: {
    title: "DevOps Swarm Control Plane",
    subtitle: "Trigger simulated production infrastructure failures to see how the DevOps Agent diagnoses root causes and executes self-healing fixes in real time.",
    scenarios: [
      {
        id: "k8s-crashloop",
        title: "Kubernetes OOMKilled CrashLoop",
        role: "Production Cluster: auth-service-v2 (Europe-West Pods)",
        executionTime: "3.6s",
        humanTime: "35 Mins",
        status: "Auto-Healed",
        agentsInvolved: ["eBPF Kernel Prober", "Kubernetes Controller", "Slack SRE Bot"],
        planSteps: [
          { step: "Detected 8 pods in CrashLoopBackOff state due to memory limit breach (512MiB)", time: "0.4s" },
          { step: "Traced root cause to unindexed database query in commit #sha-88912", time: "0.9s" },
          { step: "Adjusted pod memory limits dynamically to 1024MiB via Helm patch", time: "1.1s" },
          { step: "Restarted deployment and opened Jira ticket for DB indexing optimization", time: "1.2s" }
        ],
        outcome: "Pods restored to 100% healthy running state. Incident resolved in 3.6s with zero user downtime."
      },
      {
        id: "cicd-autoheal",
        title: "CI/CD Docker Build Failure Auto-Healing",
        role: "GitHub Actions Workflow: main-service-build (PR #492)",
        executionTime: "4.2s",
        humanTime: "45 Mins",
        status: "Build Fixed & Passed",
        agentsInvolved: ["Log Error Parser", "Dependency Resolver", "Git Pull Request Agent"],
        planSteps: [
          { step: "Parsed GitHub Actions error: 'npm ERR! ERESOLVE unable to resolve dependency tree'", time: "0.6s" },
          { step: "Identified peer dependency collision between React 19 and legacy icon library", time: "1.2s" },
          { step: "Generated package.json update with updated compatible version tag", time: "1.1s" },
          { step: "Pushed patch commit to branch and re-triggered GitHub Actions workflow", time: "1.3s" }
        ],
        outcome: "CI/CD build passed successfully. Developer unblocked automatically."
      },
      {
        id: "terraform-drift",
        title: "AWS Security Group Drift Remediation",
        role: "Target: AWS Production VPC (Port 22 SSH Expose Drift)",
        executionTime: "2.8s",
        humanTime: "2 Hours",
        status: "Closed & Synced",
        agentsInvolved: ["Cloud Drift Scanner", "Terraform Generator", "Security Guard"],
        planSteps: [
          { step: "Detected uncommitted security group rule opening Port 22 to 0.0.0.0/0", time: "0.4s" },
          { step: "Queried HashiCorp Vault: Rule lacked required security ticket reference", time: "0.8s" },
          { step: "Revoked unauthorized security group rule via AWS SDK within 800ms", time: "0.8s" },
          { step: "Opened Git pull request syncing Terraform state with secure bastion configuration", time: "0.8s" }
        ],
        outcome: "Security vulnerability remediated in 2.8 seconds. GitOps state reconciled."
      }
    ]
  },
  integrations: [
    { name: "Kubernetes & EKS/GKE", type: "Container Fleet" },
    { name: "Terraform & Pulumi", type: "Infrastructure as Code" },
    { name: "Datadog & Prometheus", type: "APM & Telemetry" },
    { name: "GitHub Actions & GitLab", type: "CI/CD Pipelines" },
    { name: "AWS, Azure & GCP", type: "Multi-Cloud APIs" },
    { name: "PagerDuty & Opsgenie", type: "Incident Orchestration" }
  ],
  governance: [
    { label: "Least-Privilege Cloud IAM", desc: "Short-lived STS tokens for all infrastructure changes" },
    { label: "Safe Deployment Blast-Radius", desc: "Automated canary gates preventing full-fleet outages" },
    { label: "Immutable GitOps Audit Log", desc: "Every auto-healing patch is committed to version control" },
    { label: "Production Freeze Windows", desc: "Emergency human approval required during maintenance blackouts" }
  ],
  caseStudy: {
    client: "Global Streaming & Media Platform",
    industry: "Consumer Technology",
    headline: "How a 100M-User Streaming Platform Reduced SRE MTTR by 82% and Cut Production Outages by 70%",
    quote: "DevOpsTRIO DevOps Agent transformed our on-call life. Incidents that used to wake up 10 engineers at 3 AM now auto-heal in under a minute.",
    author: "VP of Cloud Infrastructure & SRE",
    company: "Publicly Traded Media Giant",
    image: caseImg,
    results: [
      { stat: "< 45s", label: "Average incident MTTR" },
      { stat: "94%", label: "CI/CD auto-healing rate" },
      { stat: "$3.8M", label: "Downtime revenue loss prevented" }
    ]
  }
};
