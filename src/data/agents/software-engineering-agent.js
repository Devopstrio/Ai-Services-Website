import heroBg from "../../assets/library/agent_swe_coding.jpg";
import codeImg from "../../assets/unique_agents/swe_coding_copilot.jpg";
import refactorImg from "../../assets/fresh/lead_developer_mentor.jpg";
import prImg from "../../assets/fresh/html-css-collage-concept-with-person.jpg";
import reviewImg from "../../assets/fresh/engineering_standup_meeting.jpg";
import caseImg from "../../assets/unique_agents/swe_agent_case.jpg";

export const softwareEngineeringAgentData = {
  id: "software-engineering-agent",
  category: "Engineering & IT",
  name: "Software Engineering Agent",
  tagline: "Autonomous Feature Synthesis, Refactoring & Pull Request Review",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Ship Production Code Faster with",
    titleBold: "DevOpsTRIO SWE Agent",
    description: "Autonomous software development agent that converts Jira user stories into tested GitHub pull requests, refactors legacy codebases, resolves API regressions, and enforces clean architecture standards with unit test coverage.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 48,
      latency: "340ms",
      connectedTools: 18,
      autonomyScore: "99.4%"
    }
  },
  metrics: [
    { value: "4.2x", label: "Feature Velocity", sub: "From Jira issue to tested pull request" },
    { value: "98.2%", label: "Test Pass Rate", sub: "Autonomous unit & integration tests" },
    { value: "< 2 Mins", label: "PR Review Turnaround", sub: "Instant architectural & security audit" },
    { value: "65%", label: "Tech Debt Reduction", sub: "Continuous automated legacy refactoring" }
  ],
  overview: {
    heading: "The Autonomous Software Engineer for High-Velocity Product Teams",
    description: "Engineering velocity is slowed down by routine boilerplate coding, slow PR code reviews, legacy code refactoring, and missing test coverage.\n\nThe DevOpsTRIO Software Engineering Agent operates as an embedded senior software developer in your GitHub and GitLab repos. It understands your entire codebase architecture, converts tickets into modular pull requests with full unit test coverage, and catches security vulnerabilities during code reviews before merging.",
    keyPoints: [
      "Converts Jira and Linear issues into production-ready, modular pull requests",
      "Autonomous unit, integration, and E2E test generation with > 85% code coverage",
      "Automated legacy framework migrations (e.g. React class to hooks, Python 2 to 3, JS to TypeScript)",
      "Instant code review bot catching OWASP Top 10 vulnerabilities and API regressions"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Codebase Perception",
      role: "Repository Graph Ingestor",
      description: "Indexes AST trees, dependency graphs, API schemas, and historical git commits across your monorepo or microservices.",
      tech: "Abstract Syntax Tree (AST) & Graph Neural Embeddings"
    },
    {
      tier: "02",
      name: "Architectural Reasoning",
      role: "Synthesis & Planning Kernel",
      description: "Plans multi-file code modifications, verifies type contracts, and enforces design patterns (SOLID, Clean Architecture).",
      tech: "Tree-of-Thought Code Models & Formal Verification"
    },
    {
      tier: "03",
      name: "Git & Test Mesh",
      role: "Execution & CI Gateway",
      description: "Creates branches, commits clean code, runs test suites in isolated sandbox containers, and opens GitHub pull requests.",
      tech: "Sandboxed WebContainers, Docker & GitHub REST APIs"
    }
  ],
  capabilities: [
    {
      id: "feature-synthesis",
      tag: "FEATURE SYNTHESIS",
      title: "Jira-to-Pull Request Synthesis",
      description: "Reads user stories and acceptance criteria from Jira or Linear, implementing end-to-end features across frontend, backend, and database schemas.",
      features: [
        "Multi-file code changes respecting existing repository coding standards",
        "Generates accompanying unit tests mocking third-party APIs",
        "Updates API documentation, Swagger specs, and README files",
        "4.2x faster time-to-market for sprint deliverable epics"
      ],
      image: codeImg,
      metricBadge: "4.2x Velocity"
    },
    {
      id: "legacy-refactor",
      tag: "TECH DEBT",
      title: "Autonomous Legacy Refactoring",
      description: "Upgrades outdated libraries, converts legacy code (e.g., JavaScript to TypeScript), and eliminates dead code across large repositories.",
      features: [
        "Safe multi-repo TypeScript migrations with zero runtime breaking changes",
        "Dead code, deprecated dependency, and memory leak elimination",
        "Automated database query optimization and ORM index tuning",
        "Reduces technical debt backlog by an average of 65%"
      ],
      image: refactorImg,
      metricBadge: "65% Less Tech Debt"
    },
    {
      id: "pr-review-bot",
      tag: "CODE REVIEW",
      title: "Instant Architectural PR Reviewer",
      description: "Reviews developer pull requests in under 2 minutes, flagging race conditions, SQL injections, performance bottlenecks, and style violations.",
      features: [
        "OWASP Top 10 security scanning and dependency vulnerability checks",
        "Identifies N+1 database queries and unhandled edge-case promises",
        "Suggests 1-click inline GitHub commit patches for faster approvals",
        "Shortens code review turnaround from 24 hours to 2 minutes"
      ],
      image: reviewImg,
      metricBadge: "< 2 Min PR Review"
    },
    {
      id: "test-gen",
      tag: "TESTING & QA",
      title: "Autonomous Unit & Integration Test Generation",
      description: "Generates high-coverage Jest, PyTest, and Go test suites that exercise tricky boundary conditions and error handlers.",
      features: [
        "Boosts code coverage from < 40% to > 85% across critical microservices",
        "Fuzzes edge cases, negative inputs, and malformed network payloads",
        "Simulates third-party service outages with realistic mock servers",
        "98.2% test pass rate in standard CI/CD environments"
      ],
      image: prImg,
      metricBadge: "> 85% Code Coverage"
    }
  ],
  comparison: [
    { metric: "Boilerplate Implementation", legacy: "2 to 3 Days per feature", agent: "Under 15 Minutes (Ready for review)" },
    { metric: "Unit Test Coverage", legacy: "Skipped due to sprint deadlines", agent: "Automated > 85% comprehensive test suites" },
    { metric: "Code Review Speed", legacy: "Blocks PR for 12 to 48 hours", agent: "Instant architectural review in < 2 minutes" },
    { metric: "Legacy Migrations", legacy: "Months of painful manual refactoring", agent: "Automated branch-by-branch transformation" },
    { metric: "Security Vulnerabilities", legacy: "Caught late in pen tests", agent: "Prevented before merge in PR check phase" }
  ],
  interactiveDemo: {
    title: "SWE Agent Workspace",
    subtitle: "Observe the Software Engineering Agent turn a complex backend issue into modular code with unit tests and open a GitHub PR in real time.",
    scenarios: [
      {
        id: "jira-feature",
        title: "REST API Endpoint Implementation",
        role: "Jira #ENG-3049: Implement Stripe Webhook Ingestion & Idempotency",
        executionTime: "6.4s",
        humanTime: "6 Hours",
        status: "PR Opened on GitHub",
        agentsInvolved: ["AST Repo Ingestor", "TypeScript Code Generator", "Jest Test Suite Agent"],
        planSteps: [
          { step: "Analyzed express server architecture, middleware pipeline, and Prisma ORM models", time: "1.4s" },
          { step: "Created route handler: /api/v1/webhooks/stripe with HMAC signature verification", time: "1.8s" },
          { step: "Implemented Redis-based idempotency key cache preventing duplicate event processing", time: "1.4s" },
          { step: "Generated 6 Jest unit tests with mock Stripe webhook payloads (100% coverage)", time: "1.8s" }
        ],
        outcome: "Pull Request #512 opened with passing CI checks and 100% test coverage."
      },
      {
        id: "ts-migration",
        title: "Legacy JS to TypeScript Migration",
        role: "Refactor: 18 Legacy Node.js Services (auth & billing modules)",
        executionTime: "8.1s",
        humanTime: "2 Weeks",
        status: "Completed & Verified",
        agentsInvolved: ["AST Transformer", "Type Inferencing Engine", "Lint Guard"],
        planSteps: [
          { step: "Inferred strict TypeScript interface definitions from runtime database schemas", time: "2.1s" },
          { step: "Converted 18 .js files to .ts with explicit return types and zero 'any' escapes", time: "2.6s" },
          { step: "Executed TypeScript compiler (tsc --noEmit): 0 compilation errors detected", time: "1.8s" },
          { step: "Committed refactored modules with Git branch 'refactor/typescript-strict'", time: "1.6s" }
        ],
        outcome: "18 services converted to strict TypeScript with 0 compilation errors."
      },
      {
        id: "security-audit",
        title: "SQL Injection & N+1 PR Audit",
        role: "GitHub PR #892: User Search & Query Optimization",
        executionTime: "2.4s",
        humanTime: "1 Hour",
        status: "Reviewed & Inline Fix Suggested",
        agentsInvolved: ["Security SAST Analyzer", "Database Query Optimizer", "GitHub Review Bot"],
        planSteps: [
          { step: "Identified raw string concatenation in SQL query: High-risk SQL injection vector", time: "0.6s" },
          { step: "Detected N+1 database roundtrips in nested loop for user organization details", time: "0.8s" },
          { step: "Generated 1-click parameterized query patch with Prisma 'include' eager loading", time: "0.6s" },
          { step: "Posted inline GitHub review comment with complete code suggestion", time: "0.4s" }
        ],
        outcome: "Critical SQL vulnerability blocked before production merge. Query latency cut by 80%."
      }
    ]
  },
  integrations: [
    { name: "GitHub & GitLab", type: "Version Control & PRs" },
    { name: "Jira & Linear", type: "Sprint & Issue Sync" },
    { name: "VS Code & JetBrains", type: "IDE Extension Sync" },
    { name: "Docker & Kubernetes", type: "Sandbox Execution" },
    { name: "Snyk & SonarQube", type: "Security & Code Quality" },
    { name: "Datadog & Sentry", type: "Error Telemetry Ingestion" }
  ],
  governance: [
    { label: "Zero Public Model Training", desc: "Your proprietary codebase is never trained on or leaked" },
    { label: "Sandboxed Execution Enclaves", desc: "Generated code is executed in isolated containers" },
    { label: "Branch Protection Enforced", desc: "Agent cannot commit directly to main without review" },
    { label: "Cryptographic Code Signing", desc: "All automated commits are signed with enterprise GPG keys" }
  ],
  caseStudy: {
    client: "FinTech Banking Platform",
    industry: "Financial Services",
    headline: "How a 300-Engineer FinTech Increased Sprint Velocity by 4.2x While Slashing Code Review Lag by 90%",
    quote: "DevOpsTRIO SWE Agent is the most capable pair programmer our engineers have ever worked with. It handles the boilerplate and tests so our team can focus on complex business logic.",
    author: "Head of Engineering & Core Architecture",
    company: "Series D FinTech Unicorn",
    image: caseImg,
    results: [
      { stat: "4.2x", label: "Faster feature delivery" },
      { stat: "88%", label: "Average test coverage achieved" },
      { stat: "< 2 Min", label: "Average PR code review speed" }
    ]
  }
};
