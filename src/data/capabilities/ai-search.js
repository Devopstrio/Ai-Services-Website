const aiSearch = {
  id: "ai-search",
  breadcrumbs: ["AI Capabilities", "AI Search & Knowledge"],
  hero: {
    titleLight: "AI Search &",
    titleBold: "Knowledge Management",
    description: "Stop searching, start finding. We build unified, conversational search engines that instantly retrieve exact answers from across your enterprise's siloed data.",
  },
  inAction: {
    headingLight: "Conversational",
    headingRed: "Discovery",
    paragraph: "Traditional keyword search is broken. Employees waste hours looking for documents in SharePoint, Google Drive, and Confluence. DevOpsTRIO builds Enterprise Neural Search systems using dense vector embeddings and Large Language Models. Instead of a list of blue links, your employees can ask natural language questions and receive instantly synthesized, cited answers drawn directly from your secure proprietary data.",
    buttonText: "Try Enterprise Search",
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "40%", label: "Time Saved Searching", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
    { value: "100+", label: "Data Connectors", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Semantic", label: "Intent Understanding", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Hallucinations (RAG)", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Search",
    titleRed: "Use Cases",
    items: [
      { title: "Employee Onboarding", desc: "New hires can ask an internal bot 'How do I request PTO?' and get an instant cited answer.", icon: "users" },
      { title: "R&D & Engineering", desc: "Engineers can instantly search across millions of past bug reports, PRs, and Slack threads.", icon: "cpu" },
      { title: "Customer Success", desc: "Agents receive auto-generated answers to customer emails based on internal policy docs.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "The Search",
    titleRed: "Advantage",
    items: [
      { title: "Unified Knowledge", desc: "Connect Confluence, Jira, Google Drive, and internal databases into a single, omniscient search bar.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
      { title: "Strict Access Control", desc: "Search respects IAM permissions. The AI will never summarize a document the user doesn't have access to.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
      { title: "Conversational UI", desc: "Interact with your data via chat. Ask follow-up questions, summarize long PDFs, and request data comparisons.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Search",
    titleRed: "Capabilities",
    items: [
      { badge: "SEMANTIC", title: "Vector Search", body: "Search by concepts, not exact keywords. 'Cost reduction' will match with 'savings'.", more: "We deploy highly optimized Vector Databases (Pinecone, Milvus) to instantly search millions of embedded documents.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RAG", title: "Generative Answers", body: "Instead of links, get a paragraph answer synthesized from the top 5 matching documents.", more: "Retrieval-Augmented Generation (RAG) ensures the LLM only uses your proprietary data, eliminating hallucinations.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HYBRID", title: "Hybrid Retrieval", body: "Combine the best of semantic vector search with traditional keyword (BM25) search.", more: "This ensures that specific product IDs and names are found exactly, while abstract concepts are searched semantically.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CONNECTORS", title: "Enterprise Connectors", body: "We build secure data pipelines that continuously sync your SaaS apps into the search index.", more: "Slack, Notion, SharePoint, Salesforce—all synced in real-time while preserving document-level ACL permissions.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MULTIMODAL", title: "Multimodal Search", body: "Search through images, charts, and scanned PDFs using natural language.", more: "Our pipelines use Vision-Language models to embed the contents of graphs and photos so they are just as searchable as text.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CITATIONS", title: "Verifiable Citations", body: "Every answer generated by the AI includes clickable footnote citations to the source files.", more: "Build trust with your users. If the AI makes a claim, they can instantly open the original PDF to verify.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Search",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Unifying 50TB of Enterprise Data", desc: "Building a central neural search engine for a fragmented multinational corporation.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "RAG Architecture Best Practices", desc: "Chunking strategies, embedding selection, and vector DB optimization.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Hybrid Search Methods", desc: "Why combining BM25 and Vector Search yields the highest MRR.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Implementing Document-Level Security", desc: "Ensuring your LLM doesn't accidentally reveal the CEO's salary.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Developer Productivity", desc: "Reducing code-search time by letting engineers chat with the entire Git repository.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The End of Folders", desc: "Why hierarchical file storage is being replaced by conversational discovery.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiSearch;