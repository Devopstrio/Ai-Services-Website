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
    paragraph: "Legacy OCR is brittle and breaks when a template changes. Devopstrio engineers Intelligent Document Processing (IDP) pipelines utilizing state-of-the-art vision-language models. Our systems read documents like a human—understanding context, tables, and layouts regardless of the format. We automate back-office operations, instantly turning messy paperwork into structured JSON data fed directly into your ERP.",
    buttonText: "See IDP in Action",
    imageSrc: "/images/downloaded/2fcc20e90b_img.jpg",
  },
  metricsCards: [
    { value: "95%", label: "Straight-Through Processing", image: "/images/downloaded/58dc99f461_img.jpg" },
    { value: "10x", label: "Faster Invoice Handling", image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg" },
    { value: "Zero", label: "Template Configuration", image: "/images/downloaded/609150f783_img.jpg" },
    { value: "Multi", label: "Language Support", image: "/images/downloaded/d8fce458be_photo-1555255707-c07966088b7b.jpg" }
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
      { title: "Template-Free", desc: "Our AI understands document semantics. If a vendor changes their invoice layout, the system still extracts the data perfectly.", image: "/assets/fresh/product_document_ocr.jpg" },
      { title: "Eliminate Human Error", desc: "Remove the typos and fatigue associated with manual data entry, ensuring perfect data integrity in your databases.", image: "/assets/fresh/automated_invoice_processing.jpg" },
      { title: "Rapid Scalability", desc: "Process 10 documents or 10,000 documents a day without needing to hire and train additional back-office staff.", image: "/assets/fresh/cloud_data_center_hall.jpg" }
    ]
  },
  cards: {
    titleLight: "IDP",
    titleRed: "Capabilities",
    items: [
      { badge: "EXTRACTION", title: "Cognitive Extraction", body: "Extract key-value pairs, dates, and amounts from highly unstructured documents.", more: "We use Donut and LayoutLM models that analyze both the text and the visual structure of the document simultaneously.", image: "/images/downloaded/930d9ac6ae_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "TABLES", title: "Complex Table Parsing", body: "Accurately digitize nested tables, multi-page lists, and borderless tables.", more: "Our pipelines reconstruct table structures into clean JSON or CSV formats, even when lines are skewed or missing.", image: "/images/downloaded/2a360fc242_photo-1558494949-ef010cbdcc31.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HANDWRITING", title: "Handwriting (ICR)", body: "Transcribe cursive and messy handwritten notes from legacy forms.", more: "Advanced Intelligent Character Recognition (ICR) models translate scribbles into searchable text.", image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-3.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CLASSIFICATION", title: "Document Sorting", body: "Automatically identify document types within a massive unorganized PDF.", more: "Split a 50-page scanned packet into separate Invoices, Tax Forms, and Receipts autonomously.", image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-4.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VALIDATION", title: "Automated Validation", body: "Cross-check extracted data against external databases for instant verification.", more: "E.g., verify that the extracted VAT number matches the official government registry automatically.", image: "/images/downloaded/3243e93894_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "HUMAN IN LOOP", title: "Confidence Scoring", body: "The AI flags low-confidence fields for human review via an intuitive UI.", more: "Ensure 100% accuracy by letting humans verify only the edge cases while the AI handles 95% of the volume.", image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-5.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "IDP",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Automating Accounts Payable", desc: "How a logistics firm processed 1M invoices without hiring a single clerk.", image: "/images/downloaded/0d2d507676_photo-1551288049-bebda4e38f71.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The End of Templates", desc: "Why LayoutLM and Vision-Language models have made legacy OCR obsolete.", image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-6.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Parsing Complex Tables", desc: "Technical approaches to digitizing multi-page, borderless financial statements.", image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-7.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Human-in-the-Loop UI Design", desc: "Best practices for building verification screens that maximize clerk efficiency.", image: "/images/downloaded/478798247d_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Digitizing Medical Records", desc: "Extracting handwritten physician notes into structured EHR systems.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "IDP Cost Analysis", desc: "The hard ROI metrics of replacing BPO data entry with AI.", image: "/assets/ecosystem/grid/accelerators-frameworks-_Grid/webp/Generated-Design-8.webp", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default idp;