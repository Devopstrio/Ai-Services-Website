import heroBg from "../../assets/library/agent_workflow_orchestrator.jpg";
import flowImg from "../../assets/fresh/integration_event_streaming.jpg";
import apiImg from "../../assets/fresh/integration_api_gateway.jpg";
import gateImg from "../../assets/fresh/integration_microservices.jpg";
import meshImg from "../../assets/fresh/integration_hybrid_network.jpg";
import caseImg from "../../assets/fresh/multinational_team_summit.jpg";

export const workflowAgentData = {
  id: "workflow-agent",
  category: "Productivity",
  name: "Workflow Agent Swarm",
  tagline: "Cross-System Process Automation, Self-Healing Connectors & Human Approval Gates",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Autonomous Operations with",
    titleBold: "Devopstrio Workflow Agent",
    description: "Autonomous process orchestration agent that coordinates multi-step business transactions across Salesforce, SAP, Workday, ServiceNow, and cloud databases with built-in human verification gates and self-healing API connectors.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 64,
      latency: "230ms",
      connectedTools: 32,
      autonomyScore: "99.8%"
    }
  },
  metrics: [
    { value: "98.5%", label: "Straight-Through Execution", sub: "Autonomous multi-system workflows" },
    { value: "< 2s", label: "Cross-App Sync Latency", sub: "Real-time event mesh orchestration" },
    { value: "0", label: "API Breakage Incidents", sub: "Self-healing schema drift adaptation" },
    { value: "85%", label: "Process Cost Reduction", sub: "Eliminates manual integration glue" }
  ],
  overview: {
    heading: "The Autonomous Digital Orchestrator for Enterprise Business Processes",
    description: "Traditional enterprise automation platforms (Zapier, Workato, MuleSoft) rely on brittle static triggers that break whenever an API schema changes or an unexpected data type is encountered.\n\nThe Devopstrio Workflow Agent acts as an intelligent process conductor. It understands end-to-end business goals, coordinates asynchronous actions across legacy and modern enterprise applications, handles errors intelligently, and routes critical checkpoints to human leaders for approval.",
    keyPoints: [
      "Autonomous orchestration of complex multi-step workflows across 100+ enterprise SaaS and ERP tools",
      "Self-healing API connectors that dynamically adapt to schema changes without breaking pipelines",
      "Interactive human-in-the-loop approval gates via Slack and Microsoft Teams cards",
      "Cryptographically verified audit trails for SOX, HIPAA, and GDPR regulatory compliance"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Event & Webhook Perception",
      role: "Enterprise Event Mesh Ingestor",
      description: "Listens to Kafka, AWS SQS, Salesforce CDC (Change Data Capture), and webhook streams across your application landscape.",
      tech: "Apache Kafka, Real-Time WebSockets & CDC Streams"
    },
    {
      tier: "02",
      name: "Orchestration & Plan Kernel",
      role: "Deterministic State Machine",
      description: "Calculates execution dependencies, evaluates business rule branching, and handles transient API retries.",
      tech: "Temporal.io Workflows, DAG Scheduling & Self-Correcting Planners"
    },
    {
      tier: "03",
      name: "Enterprise Action Gateway",
      role: "Secure Tool Execution Mesh",
      description: "Executes verified transactional API calls against SAP, Salesforce, Okta, and Stripe with cryptographic rollback guarantees.",
      tech: "Scoped OAuth 2.0, Circuit Breakers & Distributed Sagas"
    }
  ],
  capabilities: [
    {
      id: "cross-system-flow",
      tag: "ORCHESTRATION",
      title: "End-to-End Enterprise Process Flows",
      description: "Coordinates complex multi-department workflows spanning Sales, Legal, Finance, and IT without manual spreadsheet glue.",
      features: [
        "Executes complex conditional branching and asynchronous long-running tasks",
        "Stateful workflow persistence ensuring zero lost transactions during server restarts",
        "Coordinates distributed transactions using the Saga design pattern with automated rollbacks",
        "98.5% straight-through automated process execution"
      ],
      image: flowImg,
      metricBadge: "98.5% Execution Rate"
    },
    {
      id: "self-healing-api",
      tag: "SELF-HEALING CONNECTORS",
      title: "Self-Healing API & Schema Connectors",
      description: "When an external SaaS API updates or deprecates a field, the agent infers the updated payload structure and repairs the integration.",
      features: [
        "Dynamically transforms field name changes (e.g. 'postal_code' to 'zipCode')",
        "Adapts to REST, GraphQL, SOAP, and gRPC endpoint interfaces automatically",
        "Eliminates 90%+ of integration maintenance and broken pipeline fire drills",
        "0 API breakage incidents experienced in production environments"
      ],
      image: apiImg,
      metricBadge: "0 Broken Integrations"
    },
    {
      id: "human-approval-gates",
      tag: "HUMAN-IN-THE-LOOP",
      title: "Interactive Human Approval Checkpoints",
      description: "Pushes rich, actionable approval cards to Slack, Teams, or mobile before high-stakes actions like wire transfers or contract sealing.",
      features: [
        "1-Click Approve / Reject buttons inside Slack and Microsoft Teams",
        "Includes full context, cost impact, and recommendation summary on the card",
        "Automated escalation if the primary approver is out of office",
        "Maintains complete audit log of who approved each transaction and when"
      ],
      image: gateImg,
      metricBadge: "1-Click Approvals"
    },
    {
      id: "event-mesh",
      tag: "DATA SYNCHRONIZATION",
      title: "Real-Time Bi-Directional Data Mesh",
      description: "Keeps customer, order, and employee records in exact synchrony across Salesforce, SAP, HubSpot, and cloud databases.",
      features: [
        "Sub-2-second data propagation across 20+ distributed enterprise systems",
        "Automated conflict resolution prioritizing authoritative master data records",
        "Eliminates data silos between sales, marketing, and operations teams",
        "85% reduction in custom integration development costs"
      ],
      image: meshImg,
      metricBadge: "< 2s Sync Latency"
    }
  ],
  comparison: [
    { metric: "Process Execution Speed", legacy: "Days of manual email and form handoffs", agent: "Sub-Second Automated Orchestration (< 2s)" },
    { metric: "API Maintenance", legacy: "Pipelines break with every SaaS API update", agent: "Self-healing schema adaptation" },
    { metric: "Approval Bottlenecks", legacy: "Stuck in buried email inboxes for days", agent: "Interactive 1-click Slack/Teams cards" },
    { metric: "Data Consistency", legacy: "Conflicting data across fragmented tools", agent: "Continuous real-time bi-directional sync" },
    { metric: "Failure Handling", legacy: "Silent failures requiring manual cleanup", agent: "Automated distributed rollbacks (Saga pattern)" }
  ],
  interactiveDemo: {
    title: "Workflow Swarm Studio",
    subtitle: "Trigger an enterprise Quote-to-Cash workflow to watch the agent coordinate Salesforce, DocuSign, Stripe, and SAP in real time.",
    scenarios: [
      {
        id: "quote-to-cash",
        title: "Enterprise Quote-to-Cash Orchestration",
        role: "Event: Deal Closed-Won in Salesforce ($340,000 Contract)",
        executionTime: "4.8s",
        humanTime: "5 Days",
        status: "Completed across 5 Systems",
        agentsInvolved: ["Salesforce Listener", "DocuSign Gateway", "SAP Billing Mesh"],
        planSteps: [
          { step: "Detected 'Closed-Won' opportunity event in Salesforce Revenue Cloud", time: "0.4s" },
          { step: "Generated order schedule and dispatched DocuSign contract envelope to client", time: "1.2s" },
          { step: "Created customer account and billing schedule in SAP S/4HANA ERP", time: "1.4s" },
          { step: "Provisioned enterprise tenant in AWS cloud cluster and notified CS Lead in Slack", time: "1.8s" }
        ],
        outcome: "Quote-to-cash cycle executed in 4.8s across 5 enterprise systems."
      },
      {
        id: "self-heal-schema",
        title: "API Schema Drift Self-Healing",
        role: "Event: Stripe Webhook Payload v2026.04 Schema Update",
        executionTime: "2.1s",
        humanTime: "2 Days",
        status: "Connector Repaired",
        agentsInvolved: ["Schema Validator", "Payload Transformer", "Circuit Breaker"],
        planSteps: [
          { step: "Received incoming webhook with renamed field: 'customer_address' -> 'billing_details.address'", time: "0.4s" },
          { step: "Inferred semantic mapping and updated transformer adapter in real time", time: "0.8s" },
          { step: "Re-processed queued payment event successfully into general ledger", time: "0.5s" },
          { step: "Opened Git pull request updating connector type definition in codebase", time: "0.4s" }
        ],
        outcome: "Connector self-healed in 2.1s with 0 lost customer transactions."
      },
      {
        id: "human-gate",
        title: "High-Value Hardware Purchase Approval",
        role: "Trigger: $180k GPU Cluster Procurement Request",
        executionTime: "1.6s",
        humanTime: "3 Days",
        status: "Approved via Slack",
        agentsInvolved: ["Budget Checker", "Slack Approval Bot", "Coupa Gateway"],
        planSteps: [
          { step: "Evaluated department quarterly budget: Request exceeds $50k auto-approval threshold", time: "0.3s" },
          { step: "Pushed interactive approval card to VP of Infrastructure on Slack", time: "0.4s" },
          { step: "VP clicked 'Approve with 2-Year Amortization' inside Slack mobile app", time: "0.5s" },
          { step: "Issued PO in Coupa and notified procurement team with cryptographic signature", time: "0.4s" }
        ],
        outcome: "High-value purchase approved and dispatched within minutes."
      }
    ]
  },
  integrations: [
    { name: "Salesforce & HubSpot", type: "CRM & Pipeline" },
    { name: "SAP S/4HANA & NetSuite", type: "Enterprise ERP" },
    { name: "Workday & ServiceNow", type: "HR & IT Workflows" },
    { name: "Stripe & Coupa", type: "Financial Gateways" },
    { name: "Slack & Microsoft Teams", type: "Interactive Approval Cards" },
    { name: "Kafka & AWS SQS", type: "Event Streaming Mesh" }
  ],
  governance: [
    { label: "Deterministic State Machines", desc: "Guaranteed exactly-once execution semantics" },
    { label: "Cryptographic Transaction Hashes", desc: "Every step is logged to an immutable audit ledger" },
    { label: "Automated Compensation Rollbacks", desc: "Saga patterns ensure partial failures leave zero corrupt data" },
    { label: "SOC 2 Type II & ISO 27001", desc: "Enterprise data encryption in transit and at rest" }
  ],
  caseStudy: {
    client: "Global Telecommunications Giant",
    industry: "Telecommunications",
    headline: "How a Global Telecom Automated 180+ Enterprise Workflows Across 40 SaaS Tools with 98.5% Straight-Through Execution",
    quote: "Devopstrio Workflow Agent replaced hundreds of fragile point-to-point scripts. Our business processes now run seamlessly with built-in self-healing and instant human approvals.",
    author: "VP of Enterprise Architecture",
    company: "Publicly Traded Telecom Provider",
    image: caseImg,
    results: [
      { stat: "98.5%", label: "Straight-through automation rate" },
      { stat: "< 2s", label: "Cross-system sync latency" },
      { stat: "$4.2M", label: "Annual operational labor unlocked" }
    ]
  }
};
