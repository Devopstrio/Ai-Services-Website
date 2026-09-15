import heroBg from "../../assets/integrations/db_hero.jpg";
import pgImg from "../../assets/integrations/postgres_sql.jpg";
import snowImg from "../../assets/integrations/snowflake_dw.jpg";
import mongoImg from "../../assets/integrations/mongodb_nosql.jpg";
import bqImg from "../../assets/integrations/bigquery_analytics.jpg";
import caseImg from "../../assets/integrations/db_case.jpg";

export const databasesData = {
  id: "databases",
  category: "Integrations",
  name: "Databases",
  tagline: "High-Throughput Connectors for PostgreSQL, Snowflake, MongoDB & BigQuery",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // RELATIONAL & NOSQL",
    subBadge: "SUB-MILLISECOND READ/WRITE MESH & CDC",
    titleLight: "High-Throughput Data Access with",
    titleBold: "Devopstrio Database Integrations",
    description: "Enable natural language text-to-SQL querying, automated schema migration validation, and real-time Change Data Capture (CDC) streaming across PostgreSQL, Snowflake, Databricks, BigQuery, and MongoDB.",
    bgImage: heroBg,
    liveBadge: "Active DB Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "3ms",
      activeWebhooks: "450,000+",
      authProtocol: "mTLS / IAM Auth",
      securityStandard: "SOC 2 Type II & HIPAA"
    }
  },
  stats: [
    { value: "< 3ms", label: "Read Query Latency Overhead", sub: "Optimized connection pooling with PgBouncer" },
    { value: "35+ Engines", label: "Supported Relational & NoSQL", sub: "Postgres, MySQL, Snowflake, MongoDB, BigQuery" },
    { value: "100%", label: "Zero-Data-Corruption Guarantee", sub: "ACID transactions with automated rollbacks" },
    { value: "250M+", label: "Daily Change Data Capture Events", sub: "Streamed via Debezium & Kafka pipelines" }
  ],
  connectors: [
    {
      id: "postgresql-connector",
      name: "PostgreSQL & Supabase",
      category: "Enterprise Relational DB",
      badge: "Postgres Wire / pgvector",
      image: pgImg,
      description: "Direct connection to PostgreSQL 14/15/16 instances, Amazon Aurora, and Supabase with native pgvector extension support and connection pooling.",
      protocols: ["PostgreSQL Native Wire Protocol", "Logical Replication CDC", "TLS 1.3 / IAM Auth"],
      syncCapabilities: [
        "Natural language text-to-SQL with automated schema constraint checking",
        "Real-time Change Data Capture (CDC) streaming to vector databases",
        "Sub-millisecond vector indexing with HNSW and IVFFlat indexes"
      ],
      avgLatency: "2ms"
    },
    {
      id: "snowflake-connector",
      name: "Snowflake Data Cloud",
      category: "Cloud Data Warehouse",
      badge: "Snowflake SQL API / Streams",
      image: snowImg,
      description: "Integrate with Snowflake warehouses, Dynamic Tables, and Snowpark Python runtimes for high-throughput enterprise analytical querying.",
      protocols: ["Snowflake SQL REST API", "Snowpipe Streaming", "OAuth 2.0 / Keypair Auth"],
      syncCapabilities: [
        "Autonomous query cost optimization and warehouse auto-suspension",
        "Zero-copy data sharing across multi-tenant enterprise analytics hubs",
        "Automated semantic data dictionary indexing for business analysts"
      ],
      avgLatency: "12ms"
    },
    {
      id: "mongodb-connector",
      name: "MongoDB Atlas & DocumentDB",
      category: "Document NoSQL",
      badge: "MongoDB Wire / Atlas Search",
      image: mongoImg,
      description: "Store and retrieve unstructured JSON documents, graph hierarchies, and polymorphic event logs with native Atlas Search and vector indexes.",
      protocols: ["MongoDB Driver Protocol", "Change Streams WebSocket", "AWS IAM / SCRAM-SHA-256"],
      syncCapabilities: [
        "Real-time Change Streams triggering downstream cognitive workflows",
        "Dynamic schema evolution validation without requiring database downtime",
        "High-performance distributed document sharding across global regions"
      ],
      avgLatency: "4ms"
    },
    {
      id: "google-bigquery-connector",
      name: "Google BigQuery & Databricks",
      category: "Massive Petabyte Analytics",
      badge: "BigQuery Storage Read/Write API",
      image: bqImg,
      description: "Execute serverless petabyte-scale queries and Delta Lake parquet operations directly from autonomous AI analysis swarms.",
      protocols: ["BigQuery Storage Write API", "Delta Lake Lakehouse REST", "GCP Workload Identity"],
      syncCapabilities: [
        "Petabyte-scale distributed data ingestion with sub-second streaming inserts",
        "Automated SQL query generation with cost threshold estimation safeguards",
        "Continuous machine learning feature store synchronization for real-time models"
      ],
      avgLatency: "15ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Text-to-SQL & CDC Studio",
    subtitle: "Select a database query trigger below to observe safe SQL generation, permission validation, and execution results.",
    scenarios: [
      {
        id: "text-to-sql-safe",
        title: "Natural Language Prompt ➔ Verified Read-Only SQL",
        trigger: "Prompt: 'Show me total Q3 revenue by product category with >20% growth'",
        sourceApp: "Executive Analytics Copilot",
        targetApp: "Snowflake Warehouse",
        executionTime: "88ms",
        status: "200 OK — SQL Validated & Executed (Read-Only)",
        payload: {
          event_type: "text_to_sql_execution",
          generated_sql: "SELECT category, SUM(revenue) as q3_rev, growth_rate FROM analytics.fact_revenue WHERE quarter = '2026-Q3' AND growth_rate > 0.20 GROUP BY category, growth_rate ORDER BY q3_rev DESC;",
          safety_checks: {
            is_read_only: true,
            sql_injection_detected: false,
            estimated_scanned_bytes: 4290012,
            allowed_tables: ["analytics.fact_revenue"]
          },
          rows_returned: 6,
          execution_time_ms: 88
        }
      },
      {
        id: "postgres-cdc-event",
        title: "PostgreSQL Row Insert ➔ Real-Time Vector DB Sync",
        trigger: "New Customer Support Transcript inserted into 'public.support_tickets'",
        sourceApp: "PostgreSQL CDC (Debezium)",
        targetApp: "Qdrant Vector DB",
        executionTime: "18ms",
        status: "200 OK — Vector Index Updated",
        payload: {
          event_type: "db.cdc_row_inserted",
          table: "public.support_tickets",
          primary_key: 994012,
          embedding_dimension: 1536,
          vector_collection: "support-knowledge-base",
          sync_latency_ms: 18
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Automated SQL Injection Prevention & AST Parsing",
      desc: "Every generated SQL query is parsed into an Abstract Syntax Tree (AST) to strictly verify that only authorized read-only operations are executed."
    },
    {
      title: "Column-Level Dynamic Data Masking (DDM)",
      desc: "Sensitive customer PII, credit cards, and social security numbers are dynamically masked before query results are delivered to AI agents."
    },
    {
      title: "Short-Lived IAM Database Authentication",
      desc: "Eliminates database passwords by utilizing ephemeral 15-minute IAM tokens issued by AWS RDS, Azure Entra ID, and Google Cloud SQL."
    },
    {
      title: "Automatic Query Cost & Byte Scanned Thresholds",
      desc: "Queries projected to exceed pre-set spending limits (e.g. scanning > 500GB in BigQuery or Snowflake) are automatically rejected before execution."
    }
  ],
  caseStudy: {
    client: "Global Retail & E-Commerce Marketplace ($12B GMV)",
    industry: "Retail Analytics & Big Data",
    headline: "How Text-to-SQL Database Connectors Empowered 1,800 Business Users to Query Data in Real Time",
    quote: "Devopstrio's database connectors transformed our data culture. Business teams can ask questions in plain English and receive verified Snowflake charts in seconds, with zero risk of database overload or data leakage.",
    author: "VP of Enterprise Data & Analytics",
    company: "Global E-Commerce Enterprise",
    image: caseImg,
    results: [
      { stat: "98.5%", label: "Accurate text-to-SQL execution rate" },
      { stat: "< 3ms", label: "Query routing overhead latency" },
      { stat: "Zero", label: "Security incidents or unauthorized data access" }
    ]
  }
};
