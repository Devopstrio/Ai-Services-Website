const nlp = {
  id: "natural-language-processing",
  breadcrumbs: ["AI Capabilities", "Natural Language Processing"],
  hero: {
    titleLight: "Natural Language",
    titleBold: "Processing",
    description: "Extract meaning, sentiment, and intent from massive volumes of unstructured text. We build NLP pipelines that let your software understand human language at scale.",
  },
  inAction: {
    headingLight: "Understand the",
    headingRed: "Unstructured",
    paragraph: "80% of enterprise data is trapped in unstructured text: emails, support tickets, contracts, and social media. Devopstrio engineers advanced Natural Language Processing (NLP) solutions that unlock this data. We don't just count words; we deploy transformer-based models that grasp context, entity relationships, and sentiment, turning chaotic text into structured, actionable intelligence.",
    buttonText: "See NLP Use Cases",
    imageSrc: "/images/downloaded/2fcc20e90b_img.jpg",
  },
  metricsCards: [
    { 
      value: "100+", 
      label: "Languages Supported",
      image: "/images/downloaded/58dc99f461_img.jpg"
    },
    { 
      value: "80%", 
      label: "Faster Document Triage",
      image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg"
    },
    { 
      value: "99%", 
      label: "Entity Extraction Accuracy",
      image: "/images/downloaded/609150f783_img.jpg"
    },
    { 
      value: "1B+", 
      label: "Documents Processed",
      image: "/images/downloaded/d8fce458be_photo-1555255707-c07966088b7b.jpg"
    }
  ],
  whoWeWorkWith: {
    titleLight: "NLP",
    titleRed: "Use Cases",
    items: [
      {
        title: "Legal & Compliance",
        desc: "Automatically review thousands of contracts to extract clauses, obligations, and risk factors.",
        icon: "database" 
      },
      {
        title: "Customer Support",
        desc: "Instantly categorize incoming tickets, detect customer frustration, and route to the correct human agent.",
        icon: "users"
      },
      {
        title: "Market Research",
        desc: "Scrape and analyze social media, news, and earnings calls to gauge public sentiment around your brand.",
        icon: "cpu"
      }
    ]
  },
  benefits: {
    titleLight: "Why Invest in",
    titleRed: "NLP?",
    items: [
      {
        title: "Unlock Dark Data",
        desc: "Stop letting valuable insights sit idle in PDFs and emails. Turn all your textual data into a queryable, structured format.",
        image: "/assets/fresh/agent_knowledge_graph_synthesis.jpg"
      },
      {
        title: "Automate Triage",
        desc: "Save thousands of human hours by having NLP models read, classify, and route incoming communications instantly.",
        image: "/assets/fresh/crm_revenue_forecasting.jpg" 
      },
      {
        title: "Global Reach",
        desc: "With multi-lingual translation and cross-lingual understanding, analyze customer feedback globally without manual translation.",
        image: "/assets/fresh/holographic_data_globe.jpg" 
      }
    ]
  },
  cards: {
    titleLight: "NLP",
    titleRed: "Capabilities",
    items: [
      {
        badge: "EXTRACTION",
        title: "Named Entity Recognition (NER)",
        body: "Automatically identify and extract people, organizations, locations, and custom medical/financial terms from text.",
        more: "We train custom Spacy and HuggingFace models tailored to your highly specific industry jargon.",
        image: "/images/downloaded/930d9ac6ae_img.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "CLASSIFICATION",
        title: "Text Classification",
        body: "Sort documents, emails, and tickets into predefined categories with high accuracy.",
        more: "Replace manual inbox sorting with deep learning models that understand the true intent of the message, not just keyword matching.",
        image: "/images/downloaded/2a360fc242_photo-1558494949-ef010cbdcc31.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SENTIMENT",
        title: "Sentiment Analysis",
        body: "Gauge the emotional tone behind customer reviews, survey responses, and social media mentions.",
        more: "Our models go beyond simple positive/negative, detecting sarcasm, urgency, and specific emotional states.",
        image: "/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/webp/Generated-Design-2.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SUMMARIZATION",
        title: "Document Summarization",
        body: "Condense 100-page reports into highly accurate, 1-page executive summaries.",
        more: "We use both extractive (pulling key sentences) and abstractive (generating new text) summarization techniques based on your needs.",
        image: "/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/webp/Generated-Design-3.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "TRANSLATION",
        title: "Machine Translation",
        body: "Seamlessly translate text across hundreds of languages while preserving domain-specific terminology.",
        more: "We deploy localized, offline translation models for highly sensitive environments where data cannot be sent to public APIs.",
        image: "/images/downloaded/3243e93894_img.jpg",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SEARCH",
        title: "Semantic Search",
        body: "Search by meaning, not just keywords. Find exact answers buried deep within your knowledge base.",
        more: "We build dense vector embeddings of your textual data, allowing users to query using natural language questions.",
        image: "/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/webp/Generated-Design-4.webp",
        color1: "#F5F2EA", color2: "#E6DBC6"
      }
    ]
  },
  insights: {
    titleLight: "NLP",
    titleRed: "Insights",
    items: [
      {
        tag: "CASE STUDY",
        title: "Automating Contract Review in Big Law",
        desc: "How a custom NER model reduced manual contract review time by 60%.",
        image: "/images/downloaded/0d2d507676_photo-1551288049-bebda4e38f71.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "WHITE PAPER",
        title: "Beyond Keywords: The Shift to Semantic Search",
        desc: "Understanding vector embeddings and how they revolutionize enterprise search.",
        image: "/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/webp/Generated-Design-5.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "RESEARCH",
        title: "Fine-Tuning BERT for Medical Jargon",
        desc: "Techniques for adapting open-source NLP models to highly specialized domains.",
        image: "/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/webp/Generated-Design-6.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "FRAMEWORK",
        title: "Handling Multilingual Customer Support",
        desc: "Architecting a real-time translation and sentiment analysis pipeline.",
        image: "/images/downloaded/478798247d_img.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "CASE STUDY",
        title: "Social Media Sentiment at Scale",
        desc: "Processing 1M+ tweets a day to track brand health during a product launch.",
        image: "/images/downloaded/d97187fdf9_img.jpg",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "REPORT",
        title: "The Evolution of Transformer Models",
        desc: "From BERT to GPT: How attention mechanisms changed NLP forever.",
        image: "/assets/ecosystem/grid/engineering-excellence-page_categories-Grid/webp/Generated-Design-7.webp",
        color1: "#2A2A2A", color2: "#1A1A1A"
      }
    ]
  }
};
export default nlp;
