import heroBg from "../../assets/integrations/devops_hero.jpg";
import ghImg from "../../assets/integrations/github_actions.jpg";
import glImg from "../../assets/integrations/gitlab_ci.jpg";
import argoImg from "../../assets/integrations/argocd_gitops.jpg";
import tfImg from "../../assets/integrations/terraform_iac.jpg";
import caseImg from "../../assets/integrations/devops_case.jpg";

export const devopsData = {
  id: "devops",
  category: "Integrations",
  name: "DevOps",
  tagline: "GitOps Connectors for GitHub Actions, GitLab CI, ArgoCD, Terraform & Kubernetes",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // GITOPS & CI/CD MESH",
    subBadge: "AUTONOMOUS PULL REQUEST REVIEW & PIPELINE HEALING",
    titleLight: "Autonomous Continuous Delivery with",
    titleBold: "DevOpsTRIO DevOps Integrations",
    description: "Trigger autonomous code reviews, self-healing pipeline rollbacks, architectural drift remediation, and infrastructure provisioning directly from GitHub Actions, GitLab CI, ArgoCD, and Terraform Cloud.",
    bgImage: heroBg,
    liveBadge: "Active GitOps Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "6ms",
      activeWebhooks: "520,000+",
      authProtocol: "GitHub App / OIDC Tokens",
      securityStandard: "SLSA Level 3 & SOC 2"
    }
  },
  stats: [
    { value: "< 6ms", label: "Webhook Trigger Dispatch Speed", sub: "Sub-second pipeline trigger and PR comment execution" },
    { value: "45+ Tools", label: "Pre-Built DevOps Integrations", sub: "GitHub, GitLab, ArgoCD, Terraform, Jenkins, Datadog" },
    { value: "65%", label: "Faster Pull Request Merge Velocity", sub: "Achieved via autonomous test verification & code review" },
    { value: "100%", label: "SLSA Level 3 Provenance Security", sub: "Cryptographically signed build artifacts with Cosign" }
  ],
  connectors: [
    {
      id: "github-actions",
      name: "GitHub Enterprise & Actions",
      category: "Source Code & CI/CD",
      badge: "GitHub Apps / GraphQL API",
      image: ghImg,
      description: "Bi-directional integration for Pull Requests, Issue triage, GitHub Actions workflows, Dependabot alerts, and GitHub Copilot extensions.",
      protocols: ["GitHub REST & GraphQL API v4", "GitHub App Webhooks", "OIDC Token Exchange"],
      syncCapabilities: [
        "Autonomous code review with inline syntax, security, and performance suggestions",
        "Automated unit test generation achieving 100% formal branch coverage",
        "Self-healing PR fixes triggered automatically upon failed CI workflow checks"
      ],
      avgLatency: "6ms"
    },
    {
      id: "gitlab-ci",
      name: "GitLab Ultimate & Auto DevOps",
      category: "Unified DevSecOps",
      badge: "GitLab REST / Webhooks",
      image: glImg,
      description: "Integrate with GitLab Merge Requests, CI/CD Pipelines, SAST/DAST security scanning, and container registries.",
      protocols: ["GitLab REST API v4", "GitLab System Webhooks", "GitLab CI Job Tokens"],
      syncCapabilities: [
        "Real-time vulnerability triaging and automated patch branch creation",
        "Pipeline failure root-cause analysis with actionable remediation suggestions",
        "Continuous compliance monitoring across regulated software release gates"
      ],
      avgLatency: "7ms"
    },
    {
      id: "argocd-gitops",
      name: "ArgoCD & Kubernetes GitOps",
      category: "Declarative GitOps",
      badge: "ArgoCD REST / gRPC",
      image: argoImg,
      description: "Automate Kubernetes cluster synchronization, canary rollouts, automated rollbacks, and drift detection across multi-cluster fleets.",
      protocols: ["ArgoCD gRPC API", "Kubernetes Webhooks", "OAuth 2.0 / Dex OIDC"],
      syncCapabilities: [
        "Autonomous rollbacks when Prometheus error rates exceed baseline thresholds",
        "Declarative GitOps repository synchronization across 500+ microservices",
        "Automated canary analysis evaluating live latency and error metrics"
      ],
      avgLatency: "5ms"
    },
    {
      id: "terraform-cloud",
      name: "HashiCorp Terraform & OpenTofu",
      category: "Infrastructure as Code",
      badge: "Terraform Cloud Run API",
      image: tfImg,
      description: "Manage and validate Infrastructure as Code (IaC) plans, detect architectural drift, and enforce Sentinel security policies automatically.",
      protocols: ["Terraform Cloud REST API", "HCL Parser AST Engine", "OIDC Cloud Auth"],
      syncCapabilities: [
        "Autonomous drift detection and automated remediation pull requests",
        "Real-time cloud infrastructure cost estimation before apply phase",
        "Enforces zero-trust networking rules across multi-cloud VPC architectures"
      ],
      avgLatency: "8ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive GitOps Trigger Studio",
    subtitle: "Select a CI/CD or deployment event below to observe autonomous code review generation, test execution, and GitOps sync.",
    scenarios: [
      {
        id: "github-pr-review",
        title: "GitHub Pull Request Opened ➔ Autonomous Security Review",
        trigger: "PR #419 Created: 'feat(auth): Upgrade Redis connection pool to TLS v1.3'",
        sourceApp: "GitHub Enterprise Webhook",
        targetApp: "DevOpsTRIO Autonomous Reviewer",
        executionTime: "110ms",
        status: "200 OK — 2 Verified Suggestions & Approval Posted",
        payload: {
          event_type: "pull_request.opened",
          repository: "devopstrio/core-api-service",
          pull_request_number: 419,
          author: "developer@enterprise.com",
          diff_lines_changed: 142,
          security_review_result: {
            vulnerabilities_detected: 0,
            tls_cipher_strength: "AES-256-GCM (Passed)",
            connection_leak_risk: "None (Thread-Safe Verified)"
          },
          status: "APPROVED_WITH_COMMENTS",
          ci_merge_unblocked: true
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "SLSA Level 3 Cryptographic Build Provenance",
      desc: "Every deployed container and package artifact is signed with Sigstore Cosign, guaranteeing tamper-proof supply chain integrity."
    },
    {
      title: "Static Application Security Testing (SAST) Gates",
      desc: "Scans code for hardcoded secrets, SQL injection, and OWASP Top 10 vulnerabilities before allowing pull requests to merge."
    },
    {
      title: "Ephemeral OIDC Tokens for Cloud Deployments",
      desc: "Deployments utilize temporary OIDC credentials from GitHub Actions to AWS/GCP, eliminating long-lived cloud keys."
    },
    {
      title: "Automated Blast-Radius & Dry-Run Verification",
      desc: "Terraform plans and Kubernetes manifests are simulated in isolated sandbox clusters to ensure zero unintended service disruptions."
    }
  ],
  caseStudy: {
    client: "Global Fintech & Neo-Bank Platform ($50B Annual Payments)",
    industry: "Financial DevOps & Cloud Infrastructure",
    headline: "How Autonomous GitHub & ArgoCD DevOps Connectors Accelerated Deployment Cadence by 400%",
    quote: "Our engineering team deploys over 250 releases daily. DevOpsTRIO's GitHub Actions and ArgoCD integrations automated our entire testing and canary rollback pipeline, reducing failed production incidents to zero.",
    author: "Head of Site Reliability & DevOps Engineering",
    company: "Public Fintech Leader",
    image: caseImg,
    results: [
      { stat: "400%", label: "Increase in daily production release velocity" },
      { stat: "< 6ms", label: "Real-time webhook and CI/CD event response speed" },
      { stat: "Zero", label: "Unplanned production downtime incidents" }
    ]
  }
};
