const dataIntelligence = {
  id: "data-intelligence",
  breadcrumbs: ["AI Capabilities", "Data Intelligence"],
  hero: {
    titleLight: "Data",
    titleBold: "Intelligence",
    description: "Your AI is only as good as your data. We engineer modern data platforms, data lakes, and streaming pipelines that feed high-quality, real-time data to your AI models.",
  },
  inAction: {
    headingLight: "The Foundation of",
    headingRed: "Enterprise AI",
    paragraph: "Before you can run a Large Language Model or a Predictive algorithm, you need clean, accessible, and structured data. Devopstrio builds the central nervous system for your enterprise data. We migrate legacy data silos into modern Lakehouses (Databricks, Snowflake), build real-time streaming pipelines (Kafka), and implement rigorous data governance to ensure your AI models are trained on truth.",
    buttonText: "Modernize Your Data",
    imageSrc: "/images/downloaded/cd74058d06_img.jpg",
  },
  metricsCards: [
    { value: "Petabytes", label: "Data Managed", image: "/images/downloaded/58dc99f461_img.jpg" },
    { value: "Sub-Second", label: "Query Latency", image: "/images/downloaded/e90f091f58_photo-1563013544-824ae1b704d3.jpg" },
    { value: "100%", label: "Data Lineage", image: "/images/downloaded/609150f783_img.jpg" },
    { value: "Zero", label: "Data Silos", image: "/images/downloaded/d8fce458be_photo-1555255707-c07966088b7b.jpg" }
  ],
  whoWeWorkWith: {
    titleLight: "Data",
    titleRed: "Use Cases",
    items: [
      { title: "Financial Services", desc: "Build real-time streaming pipelines for millisecond fraud detection and algorithmic trading.", icon: "database" },
      { title: "Retail & CPG", desc: "Consolidate global POS and e-commerce data into a single Snowflake instance for unified analytics.", icon: "users" },
      { title: "Healthcare", desc: "Securely anonymize and aggregate patient EHRs into a central data lake for medical research.", icon: "cpu" }
    ]
  },
  benefits: {
    titleLight: "Modern Data",
    titleRed: "Architecture",
    items: [
      { title: "Single Source of Truth", desc: "Eliminate conflicting reports. Everyone in your organization queries the exact same unified dataset.", image: "/assets/fresh/2021_09_database-schema.jpg" },
      { title: "AI-Ready Format", desc: "We structure and vectorize your data so it can be immediately consumed by Machine Learning and LLMs.", image: "/assets/fresh/digital-workspace-with-data-analysis-visualization.jpg" },
      { title: "Real-Time Streaming", desc: "Stop relying on overnight batch jobs. Make decisions based on data that is milliseconds old.", image: "/assets/fresh/high_speed_fiber.jpg" }
    ]
  },
  cards: {
    titleLight: "Data",
    titleRed: "Capabilities",
    items: [
      { badge: "LAKEHOUSE", title: "Modern Data Stack", body: "Migrate from rigid legacy warehouses to scalable Lakehouses like Databricks and Snowflake.", more: "Enjoy the scalability of a data lake with the ACID transactions of a traditional warehouse.", image: "/images/downloaded/930d9ac6ae_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "STREAMING", title: "Real-Time Pipelines", body: "Process millions of events per second using Apache Kafka and Flink.", more: "Crucial for IoT telemetry, financial trading, and dynamic website personalization.", image: "/images/downloaded/2a360fc242_photo-1558494949-ef010cbdcc31.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "ETL", title: "Automated ETL/ELT", body: "Build robust, self-healing data pipelines using dbt and Apache Airflow.", more: "Automate the extraction, transformation, and cleaning of messy data from hundreds of SaaS sources.", image: "/assets/ecosystem/engineering-excellence-hero/3.png", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GOVERNANCE", title: "Data Governance", body: "Implement strict access controls, data masking, and automated PII redaction.", more: "Ensure that sensitive data is anonymized before it ever reaches your data scientists or AI models.", image: "/assets/ecosystem/engineering-excellence-hero/4.png", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MESH", title: "Data Mesh Architecture", body: "Decentralize data ownership to individual business domains rather than a central IT bottleneck.", more: "Enable agility by treating data as a product that domains expose to each other securely.", image: "/images/downloaded/3243e93894_img.jpg", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "FEATURE STORE", title: "ML Feature Stores", body: "Centralize machine learning features so they can be reused across multiple models.", more: "Ensure that a feature calculated in training is exactly the same as the feature calculated in production.", image: "/assets/ecosystem/engineering-excellence-hero/webp/1.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Data",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Migrating 10PB to Snowflake", desc: "How a global retailer consolidated 15 regional data warehouses into one Lakehouse.", image: "/images/downloaded/0d2d507676_photo-1551288049-bebda4e38f71.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Data Lake vs. Data Warehouse vs. Lakehouse", desc: "Choosing the right architecture for your enterprise AI initiatives.", image: "/assets/ecosystem/engineering-excellence-hero/webp/2.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Implementing Data Mesh", desc: "Organizational and technical challenges of moving away from centralized data teams.", image: "/assets/ecosystem/engineering-excellence-hero/webp/3.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Automated PII Redaction", desc: "Using AI to scan and mask sensitive data before it enters the data lake.", image: "/images/downloaded/478798247d_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Kafka for Financial Trading", desc: "Building a sub-millisecond event streaming platform for a high-frequency trading firm.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Rise of dbt", desc: "Why Data Build Tool has become the industry standard for ELT transformations.", image: "/assets/ecosystem/engineering-excellence-hero/webp/4.webp", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default dataIntelligence;