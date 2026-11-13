const aiSearch = {
  id: "ai-search",
  breadcrumbs: ["AI Capabilities", "AI Search & Knowledge"],
  hero: {
    titleLight: "AI Search &",
    titleBold: "Knowledge Management",
    description: "Make business information easier to find with artificial intelligence. Devopstrio provides AI Search and Knowledge Management Solutions UK, helping businesses connect information from multiple platforms and access relevant answers quickly.\n\nOur enterprise AI search solutions use advanced AI technologies to understand search intent, organise business knowledge and retrieve information from different data sources. We help organisations reduce time spent searching and improve access to valuable business information.",
  },
  inAction: {
    headingLight: "Conversational",
    headingRed: "Discovery",
    paragraph: "Businesses often store important information across different platforms, databases and document repositories. Finding the right information can become difficult when data is spread across multiple systems.\n\nDevopstrio develops Enterprise AI Search systems that use natural language processing, vector search and Large Language Models (LLMs) to understand questions and retrieve relevant information.\n\nOur AI knowledge management solutions connect enterprise data sources and provide conversational search experiences. With Retrieval-Augmented Generation (RAG), AI-generated answers can be supported by relevant internal documents and source references, helping employees find information more efficiently.",
    buttonText: "Try Enterprise Search",
    imageSrc: "/assets/capability-references/ai-search/in-action.webp",
  },
  metricsCards: [
    { value: "40%", label: "Time Saved Searching", image: "/assets/capability-references/ai-search/metric-0.webp" },
    { value: "100+", label: "Data Connectors", image: "/assets/capability-references/ai-search/metric-1.webp" },
    { value: "Semantic", label: "Intent Understanding", image: "/assets/capability-references/ai-search/metric-2.webp" },
    { value: "Zero", label: "Hallucinations (RAG)", image: "/assets/capability-references/ai-search/metric-3.webp" }
  ],
  whoWeWorkWith: {
    titleLight: "Search",
    titleRed: "Use Cases",
    items: [
      { title: "Employee Onboarding", desc: "Help new employees access company policies, training materials and internal procedures through AI-powered knowledge search. Provide quick answers to common workplace questions.", icon: "users" },
      { title: "Research & Engineering", desc: "Enable engineering and research teams to search technical documents, previous project records, bug reports and internal knowledge repositories from one platform.", icon: "cpu" },
      { title: "Customer Success", desc: "Help customer support teams retrieve product information, service guidelines and company policies to provide more consistent and informed responses.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "The Search",
    titleRed: "Advantage",
    items: [
      { title: "Unified Knowledge Access", desc: "Connect information from platforms such as SharePoint, Google Drive, Confluence and internal databases. Bring business knowledge together through a unified search experience.", image: "/assets/capability-references/ai-search/benefit-0.webp" },
      { title: "Strict Access Control", desc: "Maintain access permissions when retrieving enterprise information. Ensure users can access only the documents and data they are authorised to view.", image: "/assets/capability-references/ai-search/benefit-1.webp" },
      { title: "Conversational UI", desc: "Allow employees to interact with business information using natural language. Ask questions, summarise documents and retrieve relevant information through an AI-powered interface.", image: "/assets/capability-references/ai-search/benefit-2.webp" }
    ]
  },
  cards: {
    titleLight: "Search",
    titleRed: "Capabilities",
    items: [
      { badge: "SEMANTIC", title: "Vector Search", body: "Search by concepts, not exact keywords. 'Cost reduction' will match with 'savings'.", more: "We deploy highly optimized Vector Databases (Pinecone, Milvus) to instantly search millions of embedded documents.", image: "/assets/capability-references/ai-search/capability-0.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RAG", title: "Generative Answers", body: "Instead of links, get a paragraph answer synthesized from the top 5 matching documents.", more: "Retrieval-Augmented Generation (RAG) ensures the LLM only uses your proprietary data, eliminating hallucinations.", image: "/assets/capability-references/ai-search/capability-1.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HYBRID", title: "Hybrid Retrieval", body: "Combine the best of semantic vector search with traditional keyword (BM25) search.", more: "This ensures that specific product IDs and names are found exactly, while abstract concepts are searched semantically.", image: "/assets/capability-references/ai-search/capability-2.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CONNECTORS", title: "Enterprise Connectors", body: "We build secure data pipelines that continuously sync your SaaS apps into the search index.", more: "Slack, Notion, SharePoint, Salesforce—all synced in real-time while preserving document-level ACL permissions.", image: "/assets/capability-references/ai-search/capability-3.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MULTIMODAL", title: "Multimodal Search", body: "Search through images, charts, and scanned PDFs using natural language.", more: "Our pipelines use Vision-Language models to embed the contents of graphs and photos so they are just as searchable as text.", image: "/assets/capability-references/ai-search/capability-4.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CITATIONS", title: "Verifiable Citations", body: "Every answer generated by the AI includes clickable footnote citations to the source files.", more: "Build trust with your users. If the AI makes a claim, they can instantly open the original PDF to verify.", image: "/assets/capability-references/ai-search/capability-5.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Search",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Unifying 50TB of Enterprise Data", desc: "Building a central neural search engine for a fragmented multinational corporation.", image: "/images/downloaded/0d2d507676_photo-1551288049-bebda4e38f71.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "RAG Architecture Best Practices", desc: "Chunking strategies, embedding selection, and vector DB optimization.", image: "/assets/services/webp/bg-devops.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Hybrid Search Methods", desc: "Why combining BM25 and Vector Search yields the highest MRR.", image: "/assets/services/webp/bg-data.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Implementing Document-Level Security", desc: "Ensuring your LLM doesn't accidentally reveal the CEO's salary.", image: "/images/downloaded/478798247d_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Developer Productivity", desc: "Reducing code-search time by letting engineers chat with the entire Git repository.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The End of Folders", desc: "Why hierarchical file storage is being replaced by conversational discovery.", image: "/assets/services/webp/bg-software.webp", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiSearch;