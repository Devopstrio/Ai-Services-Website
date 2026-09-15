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
    imageSrc: "/images/downloaded/1f3b03c63c_img.jpg",
  },
  metricsCards: [
    { value: "200+", label: "Systems Integrated", image: "/images/downloaded/0d2d507676_photo-1551288049-bebda4e38f71.jpg" },
    { value: "Zero", label: "Downtime Deployments", image: "/images/downloaded/9ee44e4bd0_img.jpg" },
    { value: "API", label: "First Architecture", image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg" },
    { value: "100%", label: "Secure VPC Bridging", image: "/images/downloaded/478798247d_img.jpg" }
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
      { title: "Maximize Existing ROI", desc: "Extend the life of your legacy systems. Add modern AI capabilities without the risk and cost of a full rewrite.", image: "/assets/fresh/crm-software-platforms-hero-2026-1000x600.webp" },
      { title: "User Adoption", desc: "Employees don't want to learn another tool. We put the AI directly inside the software they already use every day.", image: "/assets/fresh/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg" },
      { title: "Enterprise Security", desc: "We build secure middleware that ensures data passed between your systems and the AI models is encrypted and compliant.", image: "/assets/fresh/cloud-security-hub-hero.jpg" }
    ]
  },
  cards: {
    titleLight: "Integration",
    titleRed: "Capabilities",
    items: [
      { badge: "MIDDLEWARE", title: "AI API Gateways", body: "Centralize and monitor all AI requests across your enterprise through a secure gateway.", more: "Manage rate limits, handle fallbacks if an LLM provider goes down, and audit every prompt securely.", image: "/images/downloaded/2a360fc242_photo-1558494949-ef010cbdcc31.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "COPILOTS", title: "Custom Copilot UI", body: "Inject chat interfaces or AI suggestion widgets directly into your existing web applications.", more: "We build React/Vue components that seamlessly blend into your app's existing design system.", image: "/images/downloaded/930d9ac6ae_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SAAS", title: "SaaS Ecosystems", body: "Deep integrations with platforms like Salesforce, ServiceNow, Zendesk, and Workday.", more: "We use native APIs and Webhooks to trigger AI actions based on events in your core SaaS platforms.", image: "/images/downloaded/3f90bfcdd3_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HYBRID", title: "Cloud to On-Premise", body: "Connect cloud-based LLMs to your secure, on-premise databases without opening firewalls.", more: "We deploy secure tunnels and reverse proxies to allow safe, one-way querying of your internal data.", image: "/assets/services/webp/bg-ai.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PIPELINES", title: "Event-Driven AI", body: "Trigger AI models asynchronously based on Kafka events or database inserts.", more: "For example, automatically running a computer vision model the millisecond an image is uploaded to an S3 bucket.", image: "/images/downloaded/3243e93894_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MIGRATION", title: "LLM Agnostic Design", body: "Don't get locked into one provider. We build abstraction layers so you can swap models instantly.", more: "Switch from OpenAI to Anthropic to open-source Llama seamlessly without changing a single line of frontend code.", image: "/assets/services/webp/bg-cloud.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
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