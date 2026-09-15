const responsibleAi = {
  id: "responsible-ai",
  breadcrumbs: ["AI Capabilities", "Responsible AI & Governance"],
  hero: {
    titleLight: "Responsible AI",
    titleBold: "& Governance",
    description: "Innovate without the risk. We implement strict governance frameworks, bias detection, and ethical guardrails to ensure your AI systems are fair, secure, and compliant.",
  },
  inAction: {
    headingLight: "Trust in",
    headingRed: "Intelligence",
    paragraph: "AI can inadvertently amplify bias, leak private data, or hallucinate harmful information. Devopstrio engineers Responsible AI frameworks that act as the safety net for your innovation. We audit models for fairness, implement deterministic output guardrails, and ensure compliance with global regulations like the EU AI Act—protecting both your users and your brand reputation.",
    buttonText: "Audit Your AI",
    imageSrc: "/images/downloaded/1a772fb840_photo-1563013544-824ae1b704d3.jpg",
  },
  metricsCards: [
    { value: "100%", label: "GDPR Compliant", image: "/images/downloaded/aa314d90f7_photo-1550751827-4bd374c3f58b.jpg" },
    { value: "Automated", label: "Bias Detection", image: "/images/downloaded/001f4d30d1_img.jpg" },
    { value: "Zero", label: "Data Leakage", image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg" },
    { value: "SOC2", label: "Certified Pipelines", image: "/images/downloaded/090bb5653b_img.jpg" }
  ],
  whoWeWorkWith: {
    titleLight: "Governance",
    titleRed: "Use Cases",
    items: [
      { title: "Financial Services", desc: "Ensuring credit-scoring algorithms do not discriminate based on protected demographics.", icon: "database" },
      { title: "Healthcare", desc: "De-identifying patient data and ensuring diagnostic models provide explainable outputs.", icon: "cpu" },
      { title: "Human Resources", desc: "Auditing automated resume-screening tools to guarantee fair and unbiased hiring practices.", icon: "users" }
    ]
  },
  benefits: {
    titleLight: "Why Governance",
    titleRed: "Matters",
    items: [
      { title: "Regulatory Compliance", desc: "Stay ahead of the EU AI Act and state-level privacy laws with built-in audit trails and transparency.", image: "/assets/fresh/agent_compliance_auditing.jpg" },
      { title: "Brand Protection", desc: "Prevent catastrophic PR incidents caused by rogue chatbots or discriminatory automated decisions.", image: "/assets/fresh/enabling_secure_innovation_for_devops_globalsign.jpg" },
      { title: "User Trust", desc: "Customers are more likely to engage with AI features when they know their data is secure and the AI is unbiased.", image: "/assets/fresh/1200x627_blog-buildingtrust.webp" }
    ]
  },
  cards: {
    titleLight: "Governance",
    titleRed: "Capabilities",
    items: [
      { badge: "FAIRNESS", title: "Bias Detection & Mitigation", body: "Statistically analyze training data and model outputs to identify and correct demographic biases.", more: "We utilize tools like IBM AI Fairness 360 to ensure your models treat all users equitably.", image: "/images/downloaded/930d9ac6ae_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PRIVACY", title: "Data Anonymization", body: "Automatically scrub Personally Identifiable Information (PII) before it enters a training pipeline or LLM.", more: "Implement robust NER models that replace names, SSNs, and addresses with synthetic placeholders.", image: "/assets/ecosystem/grid/platforms-solutions-page_grid_5/webp/Generated-Design-4.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "EXPLAINABILITY", title: "Explainable AI (XAI)", body: "Generate human-readable explanations for why an AI model made a specific decision.", more: "Crucial for highly regulated industries where 'black box' algorithms are legally prohibited.", image: "/images/downloaded/3f90bfcdd3_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GUARDRAILS", title: "Input/Output Guardrails", body: "Place deterministic filters around LLMs to prevent prompt injection and toxic outputs.", more: "We deploy NeMo Guardrails to ensure conversational AI strictly adheres to corporate policy.", image: "/assets/ecosystem/grid/platforms-solutions-page_grid_5/webp/Generated-Design.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SECURITY", title: "Adversarial Defense", body: "Harden models against adversarial attacks that attempt to manipulate or extract data.", more: "We conduct AI red-teaming to discover vulnerabilities before malicious actors do.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-1.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "AUDIT", title: "Model Lineage & Auditing", body: "Maintain a cryptographic ledger of exactly which data was used to train which version of a model.", more: "Easily comply with 'Right to be Forgotten' requests by quickly identifying and retraining affected models.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-2.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Governance",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Auditing a National Bank's AI", desc: "How we identified and mitigated historical bias in an automated mortgage approval system.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-3.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Preparing for the EU AI Act", desc: "A practical checklist for classifying risk levels and ensuring compliance.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-4.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Red-Teaming Large Language Models", desc: "Techniques for discovering prompt injection vulnerabilities before launch.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-5.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Implementing NeMo Guardrails", desc: "How to use Nvidia's open-source tool to force LLMs to stay on topic.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Securing Healthcare Chatbots", desc: "Automated PII scrubbing for an AI symptom checker.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-6.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Cost of AI Bias", desc: "Why investing in fairness and governance upfront is cheaper than settling lawsuits.", image: "/assets/ecosystem/grid/technology-stack-page_categories-Grid/webp/Generated-Design-7.webp", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default responsibleAi;