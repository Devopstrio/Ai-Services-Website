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
    paragraph: "80% of enterprise data is trapped in unstructured text: emails, support tickets, contracts, and social media. DevOpsTRIO engineers advanced Natural Language Processing (NLP) solutions that unlock this data. We don't just count words; we deploy transformer-based models that grasp context, entity relationships, and sentiment, turning chaotic text into structured, actionable intelligence.",
    buttonText: "See NLP Use Cases",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { 
      value: "100+", 
      label: "Languages Supported",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
    },
    { 
      value: "80%", 
      label: "Faster Document Triage",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop"
    },
    { 
      value: "99%", 
      label: "Entity Extraction Accuracy",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
    },
    { 
      value: "1B+", 
      label: "Documents Processed",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Automate Triage",
        desc: "Save thousands of human hours by having NLP models read, classify, and route incoming communications instantly.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" 
      },
      {
        title: "Global Reach",
        desc: "With multi-lingual translation and cross-lingual understanding, analyze customer feedback globally without manual translation.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
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
        image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "CLASSIFICATION",
        title: "Text Classification",
        body: "Sort documents, emails, and tickets into predefined categories with high accuracy.",
        more: "Replace manual inbox sorting with deep learning models that understand the true intent of the message, not just keyword matching.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SENTIMENT",
        title: "Sentiment Analysis",
        body: "Gauge the emotional tone behind customer reviews, survey responses, and social media mentions.",
        more: "Our models go beyond simple positive/negative, detecting sarcasm, urgency, and specific emotional states.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SUMMARIZATION",
        title: "Document Summarization",
        body: "Condense 100-page reports into highly accurate, 1-page executive summaries.",
        more: "We use both extractive (pulling key sentences) and abstractive (generating new text) summarization techniques based on your needs.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "TRANSLATION",
        title: "Machine Translation",
        body: "Seamlessly translate text across hundreds of languages while preserving domain-specific terminology.",
        more: "We deploy localized, offline translation models for highly sensitive environments where data cannot be sent to public APIs.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
        color1: "#F5F2EA", color2: "#E6DBC6"
      },
      {
        badge: "SEARCH",
        title: "Semantic Search",
        body: "Search by meaning, not just keywords. Find exact answers buried deep within your knowledge base.",
        more: "We build dense vector embeddings of your textual data, allowing users to query using natural language questions.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "WHITE PAPER",
        title: "Beyond Keywords: The Shift to Semantic Search",
        desc: "Understanding vector embeddings and how they revolutionize enterprise search.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "RESEARCH",
        title: "Fine-Tuning BERT for Medical Jargon",
        desc: "Techniques for adapting open-source NLP models to highly specialized domains.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "FRAMEWORK",
        title: "Handling Multilingual Customer Support",
        desc: "Architecting a real-time translation and sentiment analysis pipeline.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "CASE STUDY",
        title: "Social Media Sentiment at Scale",
        desc: "Processing 1M+ tweets a day to track brand health during a product launch.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
        color1: "#2A2A2A", color2: "#1A1A1A"
      },
      {
        tag: "REPORT",
        title: "The Evolution of Transformer Models",
        desc: "From BERT to GPT: How attention mechanisms changed NLP forever.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        color1: "#2A2A2A", color2: "#1A1A1A"
      }
    ]
  }
};
export default nlp;
