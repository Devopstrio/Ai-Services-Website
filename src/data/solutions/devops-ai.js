import img1 from '../../assets/fresh/agent_code_refactoring.jpg';
import img2 from '../../assets/fresh/programming-background-with-person-working-with-codes-computer.jpg';
import img3 from '../../assets/fresh/kubernetes_cluster_nodes.jpg';
import img4 from '../../assets/fresh/devops_cloud_console.jpg';
import img5 from '../../assets/fresh/1200x627_blog-buildingtrust.webp';
import img6 from '../../assets/fresh/serviceman-server-hub-checking-documentation-supercomputers.jpg';
import img7 from '../../assets/fresh/binary_code_tunnel.jpg';
import img8 from '../../assets/fresh/person-using-ar-technology-perform-their-occupation.jpg';

const data = {
  id: 'devops-ai',
  breadcrumbs: ['Enterprise Solutions', 'DevOps AI'],
  hero: {
    titleLight: 'DevOps',
    titleBold: 'AI',
    description: "Accelerate software delivery velocity with AI-augmented CI/CD pipelines, automated pull request security reviews, self-generating Terraform infrastructure, and predictive release risk scoring.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "5x",
    "label": "Deployment Velocity"
  },
  {
    "value": "90%",
    "label": "Automated Test Coverage"
  },
  {
    "value": "40%",
    "label": "Cloud Infrastructure Cost Savings"
  },
  {
    "value": "Zero",
    "label": "Security Regressions in Prod"
  }
],
  overview: {
    heading: "Autonomous CI/CD Orchestration & Shift-Left Engineering",
    paragraph: "Devopstrio supercharges engineering organizations by embedding cognitive AI directly into the software development lifecycle. Our DevOps AI models review pull requests for hidden race conditions, generate unit and integration tests for legacy codebases, and optimize cloud infrastructure costs.\n\nBy analyzing historical deployment telemetry and code churn, our platform scores deployment risk before you merge to production—allowing development teams to ship software 5x faster while maintaining enterprise-grade security and stability.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Autonomous PR Review & Bug Detection",
    "desc": "Scan code diffs for security vulnerabilities, concurrency flaws, memory leaks, and architectural deviations with actionable inline suggestions.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Automated Test Generation",
    "desc": "Generate comprehensive unit, mock, and edge-case integration tests for complex codebases to rapidly achieve 90%+ code coverage.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Infrastructure as Code (IaC) Copilot",
    "desc": "Auto-generate modular, audited Terraform, Helm, and Ansible templates conforming strictly to your corporate cloud landing zone policies.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Predictive Release Risk Scoring",
    "desc": "Evaluate commit velocity, author experience, and test delta to score deployment risk and automatically configure canary rollout strategies.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "PIPELINE OPTIMIZATION",
    "title": "Flaky Test Elimination & Smart Build Caching",
    "text": "Identify non-deterministic test suites automatically, quarantine flaky tests, and predict build dependency caches to cut CI pipeline execution times by up to 60%.",
    "image": img7
  },
  {
    "tag": "FINOPS INTELLIGENCE",
    "title": "Autonomous Cloud FinOps Optimization",
    "text": "Continuously analyze AWS, Azure, and GCP workload utilization to identify overprovisioned Kubernetes clusters, idle compute instances, and unattached storage volumes, safely rightsizing infrastructure.",
    "image": img8
  },
  {
    "tag": "DEVELOPER EXPERIENCE",
    "title": "IDE & Git Workflow Integration",
    "text": "Seamlessly integrate with GitHub Actions, GitLab CI, Bitbucket, and VS Code, delivering intelligent suggestions and automated security remediations directly inside developer workflows.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "B2B SaaS Unicorn",
    "metric": "4x Faster Deployments",
    "desc": "Scaled from 10 weekly deployments to over 40 daily production releases without a single Sev-1 incident by deploying automated canary risk scoring."
  },
  {
    "company": "Legacy Enterprise Software Firm",
    "metric": "85% Test Coverage",
    "desc": "Auto-generated 450,000 lines of comprehensive unit tests for a 10-year-old Java and C++ codebase in under three weeks."
  },
  {
    "company": "Global Media Streaming Platform",
    "metric": "$3.8M Cloud Savings",
    "desc": "Reduced annual AWS and Kubernetes infrastructure spend by $3.8M using autonomous workload rightsizing and spot instance orchestration."
  }
]
};

export default data;
