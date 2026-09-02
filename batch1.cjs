const fs = require('fs');

const cvData = `const computerVision = {
  id: "computer-vision",
  breadcrumbs: ["AI Capabilities", "Computer Vision"],
  hero: {
    titleLight: "Computer",
    titleBold: "Vision",
    description: "Give your software the power of sight. We build real-time visual AI models that analyze images and video feeds to automate inspection, enhance security, and extract spatial insights.",
  },
  inAction: {
    headingLight: "Seeing Beyond",
    headingRed: "Pixels",
    paragraph: "Computer Vision is transforming the physical world. DevOpsTRIO engineers deep learning vision models capable of real-time object detection, facial recognition, and defect analysis. We deploy lightweight, high-performance models directly to edge devices on the factory floor, or scale massive video-processing pipelines in the cloud for global surveillance networks.",
    buttonText: "See Vision AI Live",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "99.9%", label: "Defect Detection Rate", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "30fps+", label: "Real-Time Inference", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "Edge", label: "Optimized Deployment", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "10M+", label: "Frames Processed", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Vision",
    titleRed: "Applications",
    items: [
      { title: "Manufacturing", desc: "Automate quality assurance by detecting microscopic defects on assembly lines in real-time.", icon: "cpu" },
      { title: "Retail", desc: "Analyze customer foot traffic, heatmaps, and automate checkout processes using camera feeds.", icon: "users" },
      { title: "Healthcare", desc: "Assist radiologists by automatically identifying anomalies in X-rays and MRI scans.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "The Vision",
    titleRed: "Advantage",
    items: [
      { title: "Tireless Inspection", desc: "Cameras don't get fatigued. Maintain perfect quality control 24/7 without human error.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Edge Processing", desc: "Process video directly on local cameras to avoid massive bandwidth costs and ensure privacy.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Spatial Analytics", desc: "Understand physical spaces dynamically. Track inventory levels or monitor safety compliance visually.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Vision",
    titleRed: "Capabilities",
    items: [
      { badge: "DETECTION", title: "Object Detection", body: "Locate and classify multiple objects within a single image or video frame.", more: "We use YOLO and Faster R-CNN architectures to track inventory, vehicles, and personnel.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SEGMENTATION", title: "Image Segmentation", body: "Classify every single pixel in an image for highly precise boundaries.", more: "Crucial for medical imaging and autonomous driving where bounding boxes aren't accurate enough.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RECOGNITION", title: "Facial & Biometrics", body: "Securely identify individuals for access control or personalized experiences.", more: "We implement advanced liveness detection to prevent spoofing and ensure strict GDPR compliance.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "OCR", title: "Optical Character Recognition", body: "Extract text from messy real-world images, street signs, or handwritten notes.", more: "We combine OCR with NLP to not just read the text, but understand the context of the document.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VIDEO", title: "Video Analytics", body: "Process live streams to detect complex events over time, like theft or safety hazards.", more: "Our pipelines handle RTSP streams, utilizing GPU-accelerated decoding for massive scalability.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GENERATION", title: "Image Synthesis", body: "Use GANs and Diffusion models to generate missing training data or edit images.", more: "We create synthetic datasets to train vision models for rare edge cases (like specific factory defects).", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Vision",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Zero-Defect Manufacturing", desc: "Deploying Edge AI to detect 2mm defects on a high-speed automotive assembly line.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Edge vs. Cloud Vision", desc: "A technical guide on where to process video feeds to balance latency, privacy, and cost.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Synthetic Data Generation", desc: "Using Diffusion models to bootstrap vision datasets for rare anomalies.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Optimizing YOLOv8", desc: "Techniques for achieving 60fps object detection on low-power IoT devices.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Smart City Traffic Analytics", desc: "Monitoring 500+ intersections to optimize traffic light timing dynamically.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Future of Spatial AI", desc: "How Apple Vision Pro and advanced CV are merging the digital and physical worlds.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default computerVision;`;

const idpData = `const idp = {
  id: "intelligent-document-processing",
  breadcrumbs: ["AI Capabilities", "Intelligent Document Processing"],
  hero: {
    titleLight: "Intelligent",
    titleBold: "Document Processing",
    description: "End manual data entry forever. We build advanced IDP systems that instantly extract, validate, and route data from chaotic PDFs, invoices, and handwritten forms.",
  },
  inAction: {
    headingLight: "Automate the",
    headingRed: "Paper Trail",
    paragraph: "Legacy OCR is brittle and breaks when a template changes. DevOpsTRIO engineers Intelligent Document Processing (IDP) pipelines utilizing state-of-the-art vision-language models. Our systems read documents like a human—understanding context, tables, and layouts regardless of the format. We automate back-office operations, instantly turning messy paperwork into structured JSON data fed directly into your ERP.",
    buttonText: "See IDP in Action",
    imageSrc: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "95%", label: "Straight-Through Processing", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "10x", label: "Faster Invoice Handling", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Template Configuration", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Multi", label: "Language Support", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "IDP",
    titleRed: "Use Cases",
    items: [
      { title: "Finance & Accounts", desc: "Automate accounts payable by instantly extracting line items from varied vendor invoices.", icon: "cpu" },
      { title: "Insurance", desc: "Accelerate claims processing by digitizing and verifying complex medical and damage reports.", icon: "users" },
      { title: "Logistics", desc: "Digitize bills of lading, customs declarations, and shipping manifests in real-time.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "Why Upgrade",
    titleRed: "to IDP?",
    items: [
      { title: "Template-Free", desc: "Our AI understands document semantics. If a vendor changes their invoice layout, the system still extracts the data perfectly.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Eliminate Human Error", desc: "Remove the typos and fatigue associated with manual data entry, ensuring perfect data integrity in your databases.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Rapid Scalability", desc: "Process 10 documents or 10,000 documents a day without needing to hire and train additional back-office staff.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "IDP",
    titleRed: "Capabilities",
    items: [
      { badge: "EXTRACTION", title: "Cognitive Extraction", body: "Extract key-value pairs, dates, and amounts from highly unstructured documents.", more: "We use Donut and LayoutLM models that analyze both the text and the visual structure of the document simultaneously.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "TABLES", title: "Complex Table Parsing", body: "Accurately digitize nested tables, multi-page lists, and borderless tables.", more: "Our pipelines reconstruct table structures into clean JSON or CSV formats, even when lines are skewed or missing.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HANDWRITING", title: "Handwriting (ICR)", body: "Transcribe cursive and messy handwritten notes from legacy forms.", more: "Advanced Intelligent Character Recognition (ICR) models translate scribbles into searchable text.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CLASSIFICATION", title: "Document Sorting", body: "Automatically identify document types within a massive unorganized PDF.", more: "Split a 50-page scanned packet into separate Invoices, Tax Forms, and Receipts autonomously.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VALIDATION", title: "Automated Validation", body: "Cross-check extracted data against external databases for instant verification.", more: "E.g., verify that the extracted VAT number matches the official government registry automatically.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HUMAN IN LOOP", title: "Confidence Scoring", body: "The AI flags low-confidence fields for human review via an intuitive UI.", more: "Ensure 100% accuracy by letting humans verify only the edge cases while the AI handles 95% of the volume.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "IDP",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Automating Accounts Payable", desc: "How a logistics firm processed 1M invoices without hiring a single clerk.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The End of Templates", desc: "Why LayoutLM and Vision-Language models have made legacy OCR obsolete.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Parsing Complex Tables", desc: "Technical approaches to digitizing multi-page, borderless financial statements.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Human-in-the-Loop UI Design", desc: "Best practices for building verification screens that maximize clerk efficiency.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Digitizing Medical Records", desc: "Extracting handwritten physician notes into structured EHR systems.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "IDP Cost Analysis", desc: "The hard ROI metrics of replacing BPO data entry with AI.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default idp;`;

const searchData = `const aiSearch = {
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
    imageSrc: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "40%", label: "Time Saved Searching", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { value: "100+", label: "Data Connectors", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop" },
    { value: "Semantic", label: "Intent Understanding", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Hallucinations (RAG)", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
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
      { title: "Unified Knowledge", desc: "Connect Confluence, Jira, Google Drive, and internal databases into a single, omniscient search bar.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { title: "Strict Access Control", desc: "Search respects IAM permissions. The AI will never summarize a document the user doesn't have access to.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Conversational UI", desc: "Interact with your data via chat. Ask follow-up questions, summarize long PDFs, and request data comparisons.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Search",
    titleRed: "Capabilities",
    items: [
      { badge: "SEMANTIC", title: "Vector Search", body: "Search by concepts, not exact keywords. 'Cost reduction' will match with 'savings'.", more: "We deploy highly optimized Vector Databases (Pinecone, Milvus) to instantly search millions of embedded documents.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RAG", title: "Generative Answers", body: "Instead of links, get a paragraph answer synthesized from the top 5 matching documents.", more: "Retrieval-Augmented Generation (RAG) ensures the LLM only uses your proprietary data, eliminating hallucinations.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HYBRID", title: "Hybrid Retrieval", body: "Combine the best of semantic vector search with traditional keyword (BM25) search.", more: "This ensures that specific product IDs and names are found exactly, while abstract concepts are searched semantically.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CONNECTORS", title: "Enterprise Connectors", body: "We build secure data pipelines that continuously sync your SaaS apps into the search index.", more: "Slack, Notion, SharePoint, Salesforce—all synced in real-time while preserving document-level ACL permissions.", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MULTIMODAL", title: "Multimodal Search", body: "Search through images, charts, and scanned PDFs using natural language.", more: "Our pipelines use Vision-Language models to embed the contents of graphs and photos so they are just as searchable as text.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CITATIONS", title: "Verifiable Citations", body: "Every answer generated by the AI includes clickable footnote citations to the source files.", more: "Build trust with your users. If the AI makes a claim, they can instantly open the original PDF to verify.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Search",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Unifying 50TB of Enterprise Data", desc: "Building a central neural search engine for a fragmented multinational corporation.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "RAG Architecture Best Practices", desc: "Chunking strategies, embedding selection, and vector DB optimization.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Hybrid Search Methods", desc: "Why combining BM25 and Vector Search yields the highest MRR.", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Implementing Document-Level Security", desc: "Ensuring your LLM doesn't accidentally reveal the CEO's salary.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Developer Productivity", desc: "Reducing code-search time by letting engineers chat with the entire Git repository.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The End of Folders", desc: "Why hierarchical file storage is being replaced by conversational discovery.", image: "https://images.unsplash.com/photo-1684369175836-8208a0d4c988?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default aiSearch;`;

fs.writeFileSync('src/data/capabilities/computer-vision.js', cvData);
fs.writeFileSync('src/data/capabilities/idp.js', idpData);
fs.writeFileSync('src/data/capabilities/ai-search.js', searchData);
