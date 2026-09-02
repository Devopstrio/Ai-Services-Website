import heroBg from "../../assets/library/agent_qa_testing.jpg";
import autoQaImg from "../../assets/fresh/agent_automated_qa_pipeline.jpg";
import playwrightImg from "../../assets/unique_agents/qa_automated_testing.jpg";
import visualImg from "../../assets/fresh/html-css-collage-concept-with-person.jpg";
import fuzzingImg from "../../assets/fresh/binary_code_tunnel.jpg";
import caseImg from "../../assets/unique_agents/qa_agent_case.jpg";

export const qaTestingAgentData = {
  id: "qa-testing-agent",
  category: "Engineering & IT",
  name: "QA Testing Agent Swarm",
  tagline: "End-to-End Automated Test Generation, Edge-Case Fuzzing & Regression Audits",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Zero-Defect Software Delivery with",
    titleBold: "DevOpsTRIO QA Agent",
    description: "Autonomous quality assurance agent that explores user flows in headless browser environments, generates Playwright and Cypress test suites directly from Jira requirements, and catches visual regressions before release.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 44,
      latency: "280ms",
      connectedTools: 17,
      autonomyScore: "99.7%"
    }
  },
  metrics: [
    { value: "10x", label: "Test Creation Speed", sub: "Autonomous Playwright & Cypress suites" },
    { value: "99.8%", label: "Defect Catch Rate", sub: "Catches edge cases before production" },
    { value: "85%", label: "QA Maintenance Cut", sub: "Self-healing selectors & dynamic locators" },
    { value: "0", label: "Release Regression Escapes", sub: "Verified production release gate" }
  ],
  overview: {
    heading: "The Autonomous Quality Assurance Engineer for Continuous Deployment",
    description: "Manual QA testing creates release bottlenecks, while brittle test automation scripts constantly break when CSS selectors or page layouts change.\n\nThe DevOpsTRIO QA Testing Agent operates as an autonomous testing swarm. It spins up browser sessions, navigates complex user journeys, validates API contracts, catches pixel-level visual layout bugs, and automatically heals broken test selectors when UI changes occur.",
    keyPoints: [
      "Autonomous Playwright and Cypress test script synthesis directly from design specs and user stories",
      "Self-healing test locators that adapt dynamically to DOM and class name changes",
      "Pixel-perfect cross-browser visual regression testing on Chrome, Safari, Firefox, and mobile viewports",
      "Intelligent API boundary fuzzing and security edge-case simulation"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "UI & Flow Perception",
      role: "Headless Browser Explorer",
      description: "Interacts with web and mobile DOM trees, captures viewport screenshots, network waterfalls, and console logs.",
      tech: "Headless Chromium, Playwright & Visual AI Object Detection"
    },
    {
      tier: "02",
      name: "Test Generation Kernel",
      role: "Scenario & Edge-Case Planner",
      description: "Synthesizes boundary values, invalid form inputs, race conditions, and user flows into resilient test suites.",
      tech: "Combinatorial Test Design & Self-Healing Locator Models"
    },
    {
      tier: "03",
      name: "CI/CD Gatekeeper",
      role: "Execution & Reporting Mesh",
      description: "Runs parallelized test suites in cloud containers, blocks broken PR builds, and files rich bug reports with video replays.",
      tech: "Docker Test Grids, Allure Reporting & GitHub Status Checks"
    }
  ],
  capabilities: [
    {
      id: "test-synthesis",
      tag: "AUTOMATION",
      title: "Autonomous Playwright Test Synthesis",
      description: "Generates robust end-to-end test suites in TypeScript from Figma mockups, user stories, or exploratory sessions.",
      features: [
        "Full support for Playwright, Cypress, Selenium, and Appium",
        "Generates Page Object Models (POM) with clean modular abstractions",
        "Mocking of third-party payment gateways and SSO authentication providers",
        "10x faster test creation compared to manual authoring"
      ],
      image: autoQaImg,
      metricBadge: "10x Faster Tests"
    },
    {
      id: "self-healing",
      tag: "MAINTENANCE",
      title: "Self-Healing Test Selectors",
      description: "When UI class names or DOM structures change, the agent infers the target element's semantic intent and auto-heals the test locator.",
      features: [
        "Eliminates 85% of flaky test failures caused by UI updates",
        "Uses semantic accessibility attributes (aria-label, role) as primary anchors",
        "Automatically updates test source code via Git pull requests",
        "Zero developer intervention required for UI layout shifts"
      ],
      image: playwrightImg,
      metricBadge: "85% Less Flakiness"
    },
    {
      id: "visual-regression",
      tag: "VISUAL QA",
      title: "Pixel-Perfect Visual Regression",
      description: "Compares staging builds against baseline designs across 20+ screen resolutions and themes, catching accidental CSS regressions.",
      features: [
        "Multi-viewport visual auditing (Desktop, Tablet, Mobile iOS/Android)",
        "Dark mode and multi-lingual layout truncation detection",
        "Smart masking of dynamic elements like timestamps and avatars",
        "Catches visual glitches invisible to standard DOM assertions"
      ],
      image: visualImg,
      metricBadge: "20+ Viewport Checks"
    },
    {
      id: "api-fuzzing",
      tag: "SECURITY & RELIABILITY",
      title: "Intelligent API Boundary Fuzzing",
      description: "Stress-tests REST and GraphQL endpoints with malformed payloads, rate-limit storms, and authentication edge cases.",
      features: [
        "Generates OpenAPI/Swagger-guided schema mutation tests",
        "Verifies HTTP status codes, error schemas, and response latency SLAs",
        "Simulates network dropouts and slow 3G connection degradation",
        "99.8% defect detection rate before production release"
      ],
      image: fuzzingImg,
      metricBadge: "99.8% Defect Catch"
    }
  ],
  comparison: [
    { metric: "E2E Test Authoring", legacy: "2 to 3 Days per complex feature", agent: "Under 10 Minutes (Autonomous Synthesis)" },
    { metric: "Test Flakiness & Maintenance", legacy: "30% of QA sprint spent fixing selectors", agent: "Self-healing locators adapt automatically" },
    { metric: "Cross-Browser Coverage", legacy: "Sampled on 1–2 desktop browsers", agent: "Parallelized matrix on 20+ viewports" },
    { metric: "Bug Reporting", legacy: "Vague text descriptions in Jira", agent: "Rich reports with step video, DOM & network log" },
    { metric: "Release Regression Escapes", legacy: "3 to 5 critical bugs per release", agent: "Zero defect escapes through automated gate" }
  ],
  interactiveDemo: {
    title: "QA Swarm Test Grid",
    subtitle: "Launch a simulated release verification to watch the QA Agent explore a checkout workflow, detect a visual regression, and heal a broken selector in real time.",
    scenarios: [
      {
        id: "e2e-checkout",
        title: "Checkout Flow E2E Test Suite",
        role: "Target: Multi-Step E-Commerce Checkout (Auth -> Cart -> Stripe)",
        executionTime: "5.2s",
        humanTime: "2 Days",
        status: "Passed (18/18 Tests)",
        agentsInvolved: ["Browser Controller", "Playwright Synthesizer", "Network Mock Agent"],
        planSteps: [
          { step: "Launched headless Chromium and navigated to staging store checkout", time: "0.8s" },
          { step: "Generated test: Guest user cart addition, coupon code validation, and Stripe payment", time: "1.6s" },
          { step: "Simulated 3DS secure authentication popup with mocked token response", time: "1.4s" },
          { step: "Verified order confirmation invoice generation and webhook dispatch", time: "1.4s" }
        ],
        outcome: "Complete 18-step Playwright test suite created and passing in CI/CD pipeline."
      },
      {
        id: "self-heal-demo",
        title: "Self-Healing Selector Repair",
        role: "Scenario: Button class renamed from '.btn-primary' to '.submit-cta-v2'",
        executionTime: "2.4s",
        humanTime: "3 Hours",
        status: "Selector Auto-Healed",
        agentsInvolved: ["DOM Semantic Analyzer", "Git PR Healer", "Test Runner"],
        planSteps: [
          { step: "Detected failed locator assertion: Element '.btn-primary' not found in DOM", time: "0.4s" },
          { step: "Scanned accessibility tree: Identified button matching 'Complete Order' intent", time: "0.8s" },
          { step: "Updated locator in tests/checkout.spec.ts to: page.getByRole('button', { name: 'Complete Order' })", time: "0.6s" },
          { step: "Re-ran test suite: Test passed with 100% reliability", time: "0.6s" }
        ],
        outcome: "Test suite healed automatically without developer intervention. Git patch committed."
      },
      {
        id: "visual-audit",
        title: "Dark Mode Visual Regression Catch",
        role: "Target: Mobile Viewport (iPhone 15 Pro) // Dark Mode Profile Screen",
        executionTime: "3.1s",
        humanTime: "1 Day",
        status: "Regression Blocked",
        agentsInvolved: ["Visual Diff Analyzer", "Jira Bug Filer", "CI Gatekeeper"],
        planSteps: [
          { step: "Captured full-page DOM screenshot in 393x852 viewport under Dark Mode", time: "0.6s" },
          { step: "Detected contrast bug: Black text rendered on #0B0B0E dark background (Contrast ratio 1.2:1)", time: "0.9s" },
          { step: "Captured video replay and DOM node reference #user-profile-bio", time: "0.8s" },
          { step: "Blocked CI release gate and filed Jira bug #BUG-4902 with screenshot diff", time: "0.8s" }
        ],
        outcome: "Severe UI regression caught and blocked before production deployment."
      }
    ]
  },
  integrations: [
    { name: "Playwright & Cypress", type: "Test Frameworks" },
    { name: "Selenium & Appium", type: "Cross-Platform Grid" },
    { name: "GitHub Actions & GitLab", type: "CI Release Gates" },
    { name: "Percy & Applitools", type: "Visual Testing Mesh" },
    { name: "Jira & Linear", type: "Automated Bug Filing" },
    { name: "BrowserStack & SauceLabs", type: "Cloud Device Fleet" }
  ],
  governance: [
    { label: "Zero Production Data Exposure", desc: "All testing runs strictly against synthetic sandbox data" },
    { label: "Deterministic Test Execution", desc: "Zero flakiness through reproducible browser states" },
    { label: "SOC 2 Type II Certified", desc: "Enterprise cloud test infrastructure encryption" },
    { label: "Cryptographic Release Logs", desc: "Test evidence and video replays signed for regulatory audits" }
  ],
  caseStudy: {
    client: "Global E-Commerce Enterprise",
    industry: "Retail & E-Commerce",
    headline: "How a Global Retail Giant Cut QA Testing Cycles from 3 Days to 15 Minutes with Zero Defect Escapes",
    quote: "DevOpsTRIO QA Agent allowed us to transition from weekly scheduled releases to continuous production deployments 8 times a day without fearing regressions.",
    author: "Head of Quality Engineering",
    company: "Publicly Traded Retail Group",
    image: caseImg,
    results: [
      { stat: "10x", label: "Faster test suite creation" },
      { stat: "85%", label: "Flaky test maintenance reduction" },
      { stat: "0", label: "Production regression escapes" }
    ]
  }
};
