const idp = {
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
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "95%", label: "Straight-Through Processing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
    { value: "10x", label: "Faster Invoice Handling", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Template Configuration", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
    { value: "Multi", label: "Language Support", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop" }
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
      { title: "Template-Free", desc: "Our AI understands document semantics. If a vendor changes their invoice layout, the system still extracts the data perfectly.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
      { title: "Eliminate Human Error", desc: "Remove the typos and fatigue associated with manual data entry, ensuring perfect data integrity in your databases.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
      { title: "Rapid Scalability", desc: "Process 10 documents or 10,000 documents a day without needing to hire and train additional back-office staff.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "IDP",
    titleRed: "Capabilities",
    items: [
      { badge: "EXTRACTION", title: "Cognitive Extraction", body: "Extract key-value pairs, dates, and amounts from highly unstructured documents.", more: "We use Donut and LayoutLM models that analyze both the text and the visual structure of the document simultaneously.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "TABLES", title: "Complex Table Parsing", body: "Accurately digitize nested tables, multi-page lists, and borderless tables.", more: "Our pipelines reconstruct table structures into clean JSON or CSV formats, even when lines are skewed or missing.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HANDWRITING", title: "Handwriting (ICR)", body: "Transcribe cursive and messy handwritten notes from legacy forms.", more: "Advanced Intelligent Character Recognition (ICR) models translate scribbles into searchable text.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CLASSIFICATION", title: "Document Sorting", body: "Automatically identify document types within a massive unorganized PDF.", more: "Split a 50-page scanned packet into separate Invoices, Tax Forms, and Receipts autonomously.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VALIDATION", title: "Automated Validation", body: "Cross-check extracted data against external databases for instant verification.", more: "E.g., verify that the extracted VAT number matches the official government registry automatically.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HUMAN IN LOOP", title: "Confidence Scoring", body: "The AI flags low-confidence fields for human review via an intuitive UI.", more: "Ensure 100% accuracy by letting humans verify only the edge cases while the AI handles 95% of the volume.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "IDP",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Automating Accounts Payable", desc: "How a logistics firm processed 1M invoices without hiring a single clerk.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The End of Templates", desc: "Why LayoutLM and Vision-Language models have made legacy OCR obsolete.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Parsing Complex Tables", desc: "Technical approaches to digitizing multi-page, borderless financial statements.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Human-in-the-Loop UI Design", desc: "Best practices for building verification screens that maximize clerk efficiency.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Digitizing Medical Records", desc: "Extracting handwritten physician notes into structured EHR systems.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "IDP Cost Analysis", desc: "The hard ROI metrics of replacing BPO data entry with AI.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default idp;