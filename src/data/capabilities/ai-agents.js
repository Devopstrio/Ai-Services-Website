const aiAgents = {
  id: "ai-agents",
  breadcrumbs: ["AI Capabilities", "AI Agents"],
  hero: {
    titleLight: "Autonomous",
    titleBold: "AI Agents",
    description: "Move from AI that talks to AI that acts. We build and deploy autonomous agents that execute multi-step workflows, orchestrate APIs, and resolve complex enterprise tasks without human intervention.",
  },
  inAction: {
    headingLight: "AI that",
    headingRed: "Takes Action",
    paragraph: "Static chatbots are obsolete. Devopstrio engineers agentic systems using advanced orchestration frameworks like LangChain and AutoGen. These agents dynamically plan, use external tools, query databases, and correct their own mistakes in real-time. Whether it's an autonomous customer success agent or an automated DevSecOps remediation bot, we build AI that works alongside your team as a fully capable digital employee.",
    buttonText: "See Agents Live",
    imageSrc: "/images/downloaded/179ada9fcc_photo-1550745165-9bc0b252726f.jpg",
  },
  metricsCards: [
    { 
      value: "40%", 
      label: "Faster Task Resolution",
      image: "/images/downloaded/478798247d_img.jpg"
    },
    { 
      value: "24/7", 
      label: "Autonomous Operations",
      image: "/images/downloaded/0d2d507676_photo-1551288049-bebda4e38f71.jpg"
    },
    { 
      value: "100+", 
      label: "API Integrations",
      image: "/images/downloaded/609150f783_img.jpg"
    },
    { 
      value: "5x", 
      label: "Ops Scalability",
      image: "/images/downloaded/d97187fdf9_img.jpg"
    }
  ],
  whoWeWorkWith: {
    titleLight: "Agentic",
    titleRed: "Use Cases",
    items: [
      {
        title: "IT & DevOps",
        desc: "Autonomous site reliability agents that monitor logs, identify anomalies, and automatically restart failing services or rollback deployments.",
        icon: "cpu" 
      },
      {
        title: "Customer Support",
        desc: "Agents that don't just answer questions, but actively log into your CRM to process refunds, update billing, and schedule appointments.",
        icon: "users"
      },
      {
        title: "Financial Operations",
        desc: "Reconciliation agents that automatically cross-reference bank statements with internal ledgers, flagging discrepancies for human review.",
        icon: "database"
      }
    ]
  },
  benefits: {
    titleLight: "Why Deploy",
    titleRed: "Agents?",
    items: [
      {
        title: "End-to-End Execution",
        desc: "Agents break down high-level goals into actionable steps, executing complex workflows across multiple software platforms autonomously.",
        image: "/assets/fresh/agent_swe_coding.jpg"
      },
      {
        title: "Human-in-the-Loop",
        desc: "Maintain total control with built-in pause points. Agents execute up to a critical decision, then wait for human approval before proceeding.",
        image: "/assets/fresh/agent_workflow_orchestrator.jpg" 
      },
      {
        title: "Tool Usage & APIs",
        desc: "Our agents are equipped with secure API keys to interact directly with Jira, Salesforce, AWS, and your internal proprietary systems.",
        image: "/assets/fresh/agent_automated_qa_pipeline.jpg" 
      }
    ]
  },
  cards: {
    titleLight: "Agentic",
    titleRed: "Capabilities",
    items: [
      {
        badge: "ORCHESTRATION",
        title: "Multi-Agent Systems",
        body: "Deploy teams of specialized agents that collaborate. A 'researcher' agent finds data, while a 'writer' agent formats it, and a 'reviewer' agent checks for errors.",
        more: "Using frameworks like AutoGen and crewAI, we build conversational architectures where AI agents debate and refine solutions together.",
        image: "/images/downloaded/930d9ac6ae_img.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "MEMORY",
        title: "Long-Term Context",
        body: "Equip agents with persistent memory architectures (Vector DBs) so they remember past user interactions and company policies across sessions.",
        more: "This ensures personalized, context-aware operations where the agent never has to ask the same question twice.",
        image: "/images/downloaded/2a360fc242_photo-1558494949-ef010cbdcc31.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "REASONING",
        title: "Dynamic Planning",
        body: "Agents capable of Chain-of-Thought (CoT) and ReAct (Reason + Act) methodologies to solve problems they haven't explicitly been programmed for.",
        more: "Instead of rigid if/then logic, our agents analyze the current state, determine the next best action, and adapt if they encounter an error.",
        image: "/images/downloaded/3f90bfcdd3_img.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SECURITY",
        title: "Agentic Guardrails",
        body: "Strict execution boundaries that prevent agents from taking destructive actions or leaking data across boundaries.",
        more: "We implement robust IAM roles for AI agents, ensuring they operate with the absolute principle of least privilege within your cloud.",
        image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "INTEGRATION",
        title: "Custom Tool Creation",
        body: "We build tailored OpenAPI specifications and Python functions that act as the 'hands' for your AI agents.",
        more: "Whether it's executing a SQL query on a mainframe or triggering a Jenkins CI/CD pipeline, we connect the agent to your stack.",
        image: "/images/downloaded/3243e93894_img.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "MONITORING",
        title: "Agent Observability",
        body: "Full visibility into the agent's thought process. Track every API call, token generated, and decision made in real-time.",
        more: "We integrate LangSmith and custom dashboards so you can audit agent behavior, track costs, and optimize prompts continuously.",
        image: "/images/downloaded/9ee44e4bd0_img.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      }
    ]
  },
  insights: {
    titleLight: "Agentic",
    titleRed: "Insights",
    items: [
      {
        tag: "CASE STUDY",
        title: "Automating Tier-1 IT Support with Autonomous Agents",
        desc: "How a global logistics firm reduced resolution time from 4 hours to 4 minutes.",
        image: "/images/downloaded/ed43542bb6_photo-1556742049-0cfed4f6a45d.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "WHITE PAPER",
        title: "The Architecture of Multi-Agent Systems",
        desc: "A technical guide to implementing LangGraph and AutoGen in enterprise environments.",
        image: "/assets/services/webp/bg-ai.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "RESEARCH",
        title: "Security & IAM for AI Agents",
        desc: "How to safely grant API keys and permissions to autonomous digital workers.",
        image: "/images/downloaded/a8c62fbe44_img.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "FRAMEWORK",
        title: "Measuring Agent ROI",
        desc: "Key performance indicators for evaluating the effectiveness of autonomous AI workflows.",
        image: "/assets/services/webp/bg-cloud.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "CASE STUDY",
        title: "AI Agents in E-Commerce Fulfillment",
        desc: "Using autonomous systems to handle supply chain disruptions and route optimization.",
        image: "/images/downloaded/ede5d7b698_img.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "REPORT",
        title: "The Transition from Chat to Actions",
        desc: "Why the future of enterprise software is invisible, agentic, and fully automated.",
        image: "/assets/services/webp/bg-devops.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      }
    ]
  }
};
export default aiAgents;
