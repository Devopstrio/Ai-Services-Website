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
    paragraph: "Before you can run a Large Language Model or a Predictive algorithm, you need clean, accessible, and structured data. DevOpsTRIO builds the central nervous system for your enterprise data. We migrate legacy data silos into modern Lakehouses (Databricks, Snowflake), build real-time streaming pipelines (Kafka), and implement rigorous data governance to ensure your AI models are trained on truth.",
    buttonText: "Modernize Your Data",
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "Petabytes", label: "Data Managed", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" },
    { value: "Sub-Second", label: "Query Latency", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "100%", label: "Data Lineage", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" },
    { value: "Zero", label: "Data Silos", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop" }
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
      { title: "Single Source of Truth", desc: "Eliminate conflicting reports. Everyone in your organization queries the exact same unified dataset.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
      { title: "AI-Ready Format", desc: "We structure and vectorize your data so it can be immediately consumed by Machine Learning and LLMs.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
      { title: "Real-Time Streaming", desc: "Stop relying on overnight batch jobs. Make decisions based on data that is milliseconds old.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Data",
    titleRed: "Capabilities",
    items: [
      { badge: "LAKEHOUSE", title: "Modern Data Stack", body: "Migrate from rigid legacy warehouses to scalable Lakehouses like Databricks and Snowflake.", more: "Enjoy the scalability of a data lake with the ACID transactions of a traditional warehouse.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "STREAMING", title: "Real-Time Pipelines", body: "Process millions of events per second using Apache Kafka and Flink.", more: "Crucial for IoT telemetry, financial trading, and dynamic website personalization.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "ETL", title: "Automated ETL/ELT", body: "Build robust, self-healing data pipelines using dbt and Apache Airflow.", more: "Automate the extraction, transformation, and cleaning of messy data from hundreds of SaaS sources.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GOVERNANCE", title: "Data Governance", body: "Implement strict access controls, data masking, and automated PII redaction.", more: "Ensure that sensitive data is anonymized before it ever reaches your data scientists or AI models.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MESH", title: "Data Mesh Architecture", body: "Decentralize data ownership to individual business domains rather than a central IT bottleneck.", more: "Enable agility by treating data as a product that domains expose to each other securely.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "FEATURE STORE", title: "ML Feature Stores", body: "Centralize machine learning features so they can be reused across multiple models.", more: "Ensure that a feature calculated in training is exactly the same as the feature calculated in production.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Data",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Migrating 10PB to Snowflake", desc: "How a global retailer consolidated 15 regional data warehouses into one Lakehouse.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Data Lake vs. Data Warehouse vs. Lakehouse", desc: "Choosing the right architecture for your enterprise AI initiatives.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Implementing Data Mesh", desc: "Organizational and technical challenges of moving away from centralized data teams.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Automated PII Redaction", desc: "Using AI to scan and mask sensitive data before it enters the data lake.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Kafka for Financial Trading", desc: "Building a sub-millisecond event streaming platform for a high-frequency trading firm.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Rise of dbt", desc: "Why Data Build Tool has become the industry standard for ELT transformations.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default dataIntelligence;