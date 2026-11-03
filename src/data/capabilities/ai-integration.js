const aiIntegration = {
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
    paragraph: "The hardest part of AI isn't training the model; it's getting it to work inside your existing software stack. Devopstrio specializes in complex enterprise AI integrations. We build the secure APIs, middleware, and microservices necessary to embed Large Language Models and predictive algorithms directly into your CRM, ERP, and bespoke internal applications—without disrupting daily operations.",
    buttonText: "Discuss Integration",
    imageSrc: "/assets/capability-references/ai-integration/in-action.webp",
  },
  metricsCards: [
    { value: "200+", label: "Systems Integrated", image: "/assets/capability-references/ai-integration/metric-0.webp" },
    { value: "Zero", label: "Downtime Deployments", image: "/assets/capability-references/ai-integration/metric-1.webp" },
    { value: "API", label: "First Architecture", image: "/assets/capability-references/ai-integration/metric-2.webp" },
    { value: "100%", label: "Secure VPC Bridging", image: "/assets/capability-references/ai-integration/metric-3.webp" }
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
      { title: "Maximize Existing ROI", desc: "Extend the life of your legacy systems. Add modern AI capabilities without the risk and cost of a full rewrite.", image: "/assets/capability-references/ai-integration/benefit-0.webp" },
      { title: "User Adoption", desc: "Employees don't want to learn another tool. We put the AI directly inside the software they already use every day.", image: "/assets/capability-references/ai-integration/benefit-1.webp" },
      { title: "Enterprise Security", desc: "We build secure middleware that ensures data passed between your systems and the AI models is encrypted and compliant.", image: "/assets/capability-references/ai-integration/benefit-2.webp" }
    ]
  },
  cards: {
    titleLight: "Integration",
    titleRed: "Capabilities",
    items: [
      { badge: "MIDDLEWARE", title: "AI API Gateways", body: "Centralize and monitor all AI requests across your enterprise through a secure gateway.", more: "Manage rate limits, handle fallbacks if an LLM provider goes down, and audit every prompt securely.", image: "/assets/capability-references/ai-integration/capability-0.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "COPILOTS", title: "Custom Copilot UI", body: "Inject chat interfaces or AI suggestion widgets directly into your existing web applications.", more: "We build React/Vue components that seamlessly blend into your app's existing design system.", image: "/assets/capability-references/ai-integration/capability-1.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SAAS", title: "SaaS Ecosystems", body: "Deep integrations with platforms like Salesforce, ServiceNow, Zendesk, and Workday.", more: "We use native APIs and Webhooks to trigger AI actions based on events in your core SaaS platforms.", image: "/assets/capability-references/ai-integration/capability-2.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HYBRID", title: "Cloud to On-Premise", body: "Connect cloud-based LLMs to your secure, on-premise databases without opening firewalls.", more: "We deploy secure tunnels and reverse proxies to allow safe, one-way querying of your internal data.", image: "/assets/capability-references/ai-integration/capability-3.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PIPELINES", title: "Event-Driven AI", body: "Trigger AI models asynchronously based on Kafka events or database inserts.", more: "For example, automatically running a computer vision model the millisecond an image is uploaded to an S3 bucket.", image: "/assets/capability-references/ai-integration/capability-4.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MIGRATION", title: "LLM Agnostic Design", body: "Don't get locked into one provider. We build abstraction layers so you can swap models instantly.", more: "Switch from OpenAI to Anthropic to open-source Llama seamlessly without changing a single line of frontend code.", image: "/assets/capability-references/ai-integration/capability-5.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Integration",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "AI in the Salesforce Ecosystem", desc: "Embedding a custom RAG chatbot directly into the Salesforce Service Console.", image: "/images/downloaded/ed43542bb6_photo-1556742049-0cfed4f6a45d.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Building an Enterprise AI Gateway", desc: "How to centralize API keys, manage rate limits, and audit prompts across a large organization.", image: "/images/downloaded/179ada9fcc_photo-1550745165-9bc0b252726f.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "LLM Vendor Lock-In", desc: "Architectural patterns for keeping your AI integrations agnostic and easily swappable.", image: "/images/downloaded/a8c62fbe44_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Secure Cloud-to-Ground Data Access", desc: "Allowing OpenAI to query your on-premise SQL database without compromising security.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Modernizing a 25-Year-Old Mainframe", desc: "Putting a conversational NLP interface on top of an AS/400 inventory system.", image: "/images/downloaded/ede5d7b698_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Hidden Costs of AI", desc: "Why integration and middleware often cost more than training the model itself.", image: "/assets/ecosystem/card/webp/ecosystem-main-page_overview-card.webp", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiIntegration;