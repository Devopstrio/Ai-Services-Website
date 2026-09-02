const fs = require('fs');

const autoData = `const intelligentAutomation = {
  id: "intelligent-automation",
  breadcrumbs: ["AI Capabilities", "Intelligent Automation"],
  hero: {
    titleLight: "Intelligent",
    titleBold: "Automation",
    description: "Move beyond rigid RPA bots. We build intelligent automation workflows that learn from exceptions, handle unstructured data, and dynamically adapt to changing enterprise processes.",
  },
  inAction: {
    headingLight: "Automate the",
    headingRed: "Unpredictable",
    paragraph: "Traditional Robotic Process Automation (RPA) breaks the moment a UI changes or an exception occurs. DevOpsTRIO engineers Cognitive Automation systems that combine RPA with Machine Learning and Generative AI. Our bots can read unstructured emails, make judgement calls based on historical data, and dynamically navigate complex GUI interfaces without brittle xpath selectors.",
    buttonText: "Explore Automation",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "60%", label: "Reduction in Manual Tasks", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "24/7", label: "Operational Uptime", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "0", label: "Fatigue Errors", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "10x", label: "Faster Exception Handling", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Automation",
    titleRed: "Use Cases",
    items: [
      { title: "HR & Onboarding", desc: "Automate background checks, hardware provisioning, and payroll setup for new employees.", icon: "users" },
      { title: "Supply Chain", desc: "Bots that automatically re-order stock when inventory drops, reading unstructured vendor quotes.", icon: "database" },
      { title: "IT Operations", desc: "Automated L1 support that provisions virtual machines and resets passwords based on Jira tickets.", icon: "cpu" }
    ]
  },
  benefits: {
    titleLight: "The Cognitive",
    titleRed: "Advantage",
    items: [
      { title: "Resilient Workflows", desc: "Our AI-powered bots use computer vision to navigate UIs. If a button moves, the bot still finds it.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Unstructured Data", desc: "Process free-text emails, PDFs, and hand-written notes directly within the automation pipeline.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Human in the Loop", desc: "Bots automatically pause and route edge cases to human managers for approval before continuing.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Automation",
    titleRed: "Capabilities",
    items: [
      { badge: "RPA + AI", title: "Cognitive RPA", body: "Enhance traditional UiPath or Automation Anywhere bots with LLMs to handle complex reasoning.", more: "We build bots that don't just move data, but understand the context of the data they are moving.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PROCESS MINING", title: "Task Mining", body: "Deploy background agents to quietly observe how employees work and automatically generate process maps.", more: "Discover exactly where the bottlenecks are in your organization before you build the automation.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "ORCHESTRATION", title: "BPM Orchestration", body: "Coordinate hundreds of bots, API calls, and human approvals into a single massive workflow.", more: "We use Camunda and temporal.io to build stateful, resilient automation pipelines that never drop a task.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "EMAIL", title: "Intelligent Triage", body: "Bots that read shared inboxes (e.g., support@, billing@), classify the intent, and reply autonomously.", more: "Reduce initial response times from hours to seconds while routing complex issues to the right department.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MAINFRAME", title: "Legacy Integration", body: "Automate green-screen AS/400 mainframes without APIs using computer vision and terminal emulation.", more: "Connect your 40-year-old mainframe directly to modern web apps without rewriting the legacy code.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "LOW CODE", title: "Low-Code Platforms", body: "Empower your business users to build their own automations safely using PowerAutomate and Zapier.", more: "We set up the governance, guardrails, and custom connectors so citizen developers can automate safely.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Automation",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Automating 2M Emails a Year", desc: "How a global bank used Cognitive RPA to triage incoming loan applications.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "When RPA Breaks", desc: "Why traditional RPA fails and how adding Vision models fixes brittle UI selectors.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Process Mining ROI", desc: "Using AI to automatically discover the most profitable automation opportunities.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Scaling Center of Excellence (CoE)", desc: "Governance models for managing thousands of bots in a global enterprise.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Modernizing AS/400", desc: "Using Computer Vision RPA to extract data from legacy green-screens into Salesforce.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Future of Low-Code", desc: "Balancing citizen developer speed with enterprise IT security.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default intelligentAutomation;`;

const dataIntelData = `const dataIntelligence = {
  id: "data-intelligence",
  breadcrumbs: ["AI Capabilities", "Data Intelligence"],
  hero: {
    titleLight: "Data",
    titleBold: "Intelligence",
    description: "Your AI is only as good as your data. We engineer modern data platforms, data lakes, and streaming pipelines that feed high-quality, real-time data to your AI models.",
  },
  inAction: {
    headingLight: "The Foundation of",
    headingRed: "Enterprise AI",
    paragraph: "Before you can run a Large Language Model or a Predictive algorithm, you need clean, accessible, and structured data. DevOpsTRIO builds the central nervous system for your enterprise data. We migrate legacy data silos into modern Lakehouses (Databricks, Snowflake), build real-time streaming pipelines (Kafka), and implement rigorous data governance to ensure your AI models are trained on truth.",
    buttonText: "Modernize Your Data",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "Petabytes", label: "Data Managed", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "Sub-Second", label: "Query Latency", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "100%", label: "Data Lineage", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Data Silos", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Data",
    titleRed: "Use Cases",
    items: [
      { title: "Financial Services", desc: "Build real-time streaming pipelines for millisecond fraud detection and algorithmic trading.", icon: "database" },
      { title: "Retail & CPG", desc: "Consolidate global POS and e-commerce data into a single Snowflake instance for unified analytics.", icon: "users" },
      { title: "Healthcare", desc: "Securely anonymize and aggregate patient EHRs into a central data lake for medical research.", icon: "cpu" }
    ]
  },
  benefits: {
    titleLight: "Modern Data",
    titleRed: "Architecture",
    items: [
      { title: "Single Source of Truth", desc: "Eliminate conflicting reports. Everyone in your organization queries the exact same unified dataset.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "AI-Ready Format", desc: "We structure and vectorize your data so it can be immediately consumed by Machine Learning and LLMs.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Real-Time Streaming", desc: "Stop relying on overnight batch jobs. Make decisions based on data that is milliseconds old.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Data",
    titleRed: "Capabilities",
    items: [
      { badge: "LAKEHOUSE", title: "Modern Data Stack", body: "Migrate from rigid legacy warehouses to scalable Lakehouses like Databricks and Snowflake.", more: "Enjoy the scalability of a data lake with the ACID transactions of a traditional warehouse.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "STREAMING", title: "Real-Time Pipelines", body: "Process millions of events per second using Apache Kafka and Flink.", more: "Crucial for IoT telemetry, financial trading, and dynamic website personalization.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "ETL", title: "Automated ETL/ELT", body: "Build robust, self-healing data pipelines using dbt and Apache Airflow.", more: "Automate the extraction, transformation, and cleaning of messy data from hundreds of SaaS sources.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GOVERNANCE", title: "Data Governance", body: "Implement strict access controls, data masking, and automated PII redaction.", more: "Ensure that sensitive data is anonymized before it ever reaches your data scientists or AI models.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MESH", title: "Data Mesh Architecture", body: "Decentralize data ownership to individual business domains rather than a central IT bottleneck.", more: "Enable agility by treating data as a product that domains expose to each other securely.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "FEATURE STORE", title: "ML Feature Stores", body: "Centralize machine learning features so they can be reused across multiple models.", more: "Ensure that a feature calculated in training is exactly the same as the feature calculated in production.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Data",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Migrating 10PB to Snowflake", desc: "How a global retailer consolidated 15 regional data warehouses into one Lakehouse.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Data Lake vs. Data Warehouse vs. Lakehouse", desc: "Choosing the right architecture for your enterprise AI initiatives.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Implementing Data Mesh", desc: "Organizational and technical challenges of moving away from centralized data teams.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Automated PII Redaction", desc: "Using AI to scan and mask sensitive data before it enters the data lake.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Kafka for Financial Trading", desc: "Building a sub-millisecond event streaming platform for a high-frequency trading firm.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Rise of dbt", desc: "Why Data Build Tool has become the industry standard for ELT transformations.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default dataIntelligence;`;

const predictiveData = `const predictiveAnalytics = {
  id: "predictive-analytics",
  breadcrumbs: ["AI Capabilities", "Predictive Analytics"],
  hero: {
    titleLight: "Predictive",
    titleBold: "Analytics",
    description: "Don't just analyze the past; predict the future. We build advanced statistical models that forecast trends, anticipate risks, and optimize enterprise decision-making.",
  },
  inAction: {
    headingLight: "Forecast with",
    headingRed: "Precision",
    paragraph: "Looking in the rearview mirror is not enough. DevOpsTRIO leverages historical data, external market signals, and machine learning to build predictive models that give you a view into the future. From forecasting supply chain disruptions months in advance to predicting exactly which customers are about to churn, we turn uncertainty into calculated, actionable strategy.",
    buttonText: "See Forecasting Models",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "92%", label: "Forecast Accuracy", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "30 Days", label: "Early Warning System", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "15%", label: "Inventory Cost Reduction", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "24/7", label: "Continuous Scoring", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Predictive",
    titleRed: "Use Cases",
    items: [
      { title: "Supply Chain", desc: "Forecast demand surges and reroute logistics automatically before stockouts occur.", icon: "database" },
      { title: "Marketing & Sales", desc: "Score leads in real-time based on their likelihood to convert, focusing sales efforts on high-value targets.", icon: "users" },
      { title: "Heavy Industry", desc: "Predict machinery failure weeks before it happens, scheduling maintenance during planned downtime.", icon: "cpu" }
    ]
  },
  benefits: {
    titleLight: "The Predictive",
    titleRed: "Advantage",
    items: [
      { title: "Proactive Strategy", desc: "Stop reacting to crises. Identify risks and opportunities weeks or months before your competitors do.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Optimized Resources", desc: "Allocate budget, personnel, and inventory exactly where they will be needed, minimizing waste.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Data-Backed Decisions", desc: "Remove gut-feel from executive planning. Use statistically rigorous models to justify major investments.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Analytics",
    titleRed: "Capabilities",
    items: [
      { badge: "TIME SERIES", title: "Time Series Forecasting", body: "Predict future values based on historical timestamps, accounting for seasonality and trends.", more: "We use ARIMA, Prophet, and LSTM neural networks for highly accurate sales and weather forecasting.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CHURN", title: "Churn Prediction", body: "Identify exactly which customers are most likely to cancel their subscription in the next 30 days.", more: "Integrate the model directly into your CRM to automatically trigger personalized retention campaigns.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MAINTENANCE", title: "Predictive Maintenance", body: "Analyze IoT sensor data to predict when a physical asset (server, turbine, vehicle) will fail.", more: "Save millions by replacing parts right before they break, avoiding catastrophic unplanned downtime.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RISK", title: "Risk & Credit Scoring", body: "Calculate the probability of default or fraud for individual transactions or loan applications in real-time.", more: "We build highly interpretable models (XGBoost) that comply with strict financial regulations.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PRICING", title: "Dynamic Pricing", body: "Automatically adjust product prices based on competitor data, current demand, and inventory levels.", more: "Maximize margins continuously without requiring manual intervention from pricing analysts.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SIMULATION", title: "Monte Carlo Simulations", body: "Model the probability of different outcomes in highly uncertain environments.", more: "Run millions of simulated scenarios to stress-test your financial models against massive market shocks.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Analytics",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Reducing Airline Delays", desc: "Using predictive maintenance to repair jet engines before failure, saving $50M annually.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The Limits of Time Series", desc: "When to use traditional ARIMA vs Deep Learning LSTMs for forecasting.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "External Data Signals", desc: "Improving demand forecasting by integrating weather data and social media sentiment.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Building a Lead Scoring Engine", desc: "A technical guide to implementing real-time predictive scoring in Salesforce.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Dynamic Pricing in Retail", desc: "How a major grocer optimized markdown pricing to reduce food waste by 30%.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Future of Analytics", desc: "Moving from dashboards that show the past to prescriptive models that dictate the future.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default predictiveAnalytics;`;

const aiIntegrationData = `const aiIntegration = {
  id: "ai-integration",
  breadcrumbs: ["AI Capabilities", "AI Integration Services"],
  hero: {
    titleLight: "AI Integration",
    titleBold: "Services",
    description: "Don't rip and replace. We seamlessly integrate cutting-edge AI models into your existing legacy systems, SaaS applications, and enterprise architecture.",
  },
  inAction: {
    headingLight: "Connecting",
    headingRed: "Intelligence",
    paragraph: "The hardest part of AI isn't training the model; it's getting it to work inside your existing software stack. DevOpsTRIO specializes in complex enterprise AI integrations. We build the secure APIs, middleware, and microservices necessary to embed Large Language Models and predictive algorithms directly into your CRM, ERP, and bespoke internal applications—without disrupting daily operations.",
    buttonText: "Discuss Integration",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "200+", label: "Systems Integrated", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Downtime Deployments", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "API", label: "First Architecture", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "100%", label: "Secure VPC Bridging", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Integration",
    titleRed: "Use Cases",
    items: [
      { title: "Salesforce & CRMs", desc: "Embed Generative AI directly into Salesforce to auto-draft emails and summarize call notes.", icon: "users" },
      { title: "SAP & ERPs", desc: "Connect predictive models to your ERP to automatically flag anomalous invoices or supply chain delays.", icon: "database" },
      { title: "Custom Legacy Apps", desc: "Modernize 20-year-old internal tools by wrapping them in APIs and adding an AI conversational interface.", icon: "cpu" }
    ]
  },
  benefits: {
    titleLight: "Why Choose Our",
    titleRed: "Integration?",
    items: [
      { title: "Maximize Existing ROI", desc: "Extend the life of your legacy systems. Add modern AI capabilities without the risk and cost of a full rewrite.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "User Adoption", desc: "Employees don't want to learn another tool. We put the AI directly inside the software they already use every day.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Enterprise Security", desc: "We build secure middleware that ensures data passed between your systems and the AI models is encrypted and compliant.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Integration",
    titleRed: "Capabilities",
    items: [
      { badge: "MIDDLEWARE", title: "AI API Gateways", body: "Centralize and monitor all AI requests across your enterprise through a secure gateway.", more: "Manage rate limits, handle fallbacks if an LLM provider goes down, and audit every prompt securely.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "COPILOTS", title: "Custom Copilot UI", body: "Inject chat interfaces or AI suggestion widgets directly into your existing web applications.", more: "We build React/Vue components that seamlessly blend into your app's existing design system.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SAAS", title: "SaaS Ecosystems", body: "Deep integrations with platforms like Salesforce, ServiceNow, Zendesk, and Workday.", more: "We use native APIs and Webhooks to trigger AI actions based on events in your core SaaS platforms.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HYBRID", title: "Cloud to On-Premise", body: "Connect cloud-based LLMs to your secure, on-premise databases without opening firewalls.", more: "We deploy secure tunnels and reverse proxies to allow safe, one-way querying of your internal data.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PIPELINES", title: "Event-Driven AI", body: "Trigger AI models asynchronously based on Kafka events or database inserts.", more: "For example, automatically running a computer vision model the millisecond an image is uploaded to an S3 bucket.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MIGRATION", title: "LLM Agnostic Design", body: "Don't get locked into one provider. We build abstraction layers so you can swap models instantly.", more: "Switch from OpenAI to Anthropic to open-source Llama seamlessly without changing a single line of frontend code.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Integration",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "AI in the Salesforce Ecosystem", desc: "Embedding a custom RAG chatbot directly into the Salesforce Service Console.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Building an Enterprise AI Gateway", desc: "How to centralize API keys, manage rate limits, and audit prompts across a large organization.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "LLM Vendor Lock-In", desc: "Architectural patterns for keeping your AI integrations agnostic and easily swappable.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Secure Cloud-to-Ground Data Access", desc: "Allowing OpenAI to query your on-premise SQL database without compromising security.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Modernizing a 25-Year-Old Mainframe", desc: "Putting a conversational NLP interface on top of an AS/400 inventory system.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Hidden Costs of AI", desc: "Why integration and middleware often cost more than training the model itself.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiIntegration;`;

fs.writeFileSync('src/data/capabilities/intelligent-automation.js', autoData);
fs.writeFileSync('src/data/capabilities/data-intelligence.js', dataIntelData);
fs.writeFileSync('src/data/capabilities/predictive-analytics.js', predictiveData);
fs.writeFileSync('src/data/capabilities/ai-integration.js', aiIntegrationData);
