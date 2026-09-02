import heroBg from "../../assets/integrations/vectordb_hero.jpg";
import pineconeImg from "../../assets/integrations/pinecone_vector.jpg";
import qdrantImg from "../../assets/integrations/qdrant_vector.jpg";
import milvusImg from "../../assets/integrations/milvus_vector.jpg";
import weaviateImg from "../../assets/integrations/weaviate_vector.jpg";
import caseImg from "../../assets/integrations/vectordb_case.jpg";

export const vectorDatabasesData = {
  id: "vector-databases",
  category: "Integrations",
  name: "Vector Databases",
  tagline: "Sub-Millisecond Vector Retrieval for Qdrant, Pinecone, Milvus & Weaviate",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // HIGH-DIMENSIONAL RETRIEVAL",
    subBadge: "HYBRID DENSE & SPARSE COGNITIVE SEARCH",
    titleLight: "High-Dimensional Vector Memory with",
    titleBold: "DevOpsTRIO Vector Database Integrations",
    description: "Index billions of high-dimensional embeddings with hybrid dense/sparse vector retrieval, metadata filtering, and automated real-time chunking across Qdrant, Pinecone, Milvus, Weaviate, and pgvector.",
    bgImage: heroBg,
    liveBadge: "Active Vector Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "2ms",
      activeWebhooks: "320,000+",
      authProtocol: "mTLS / gRPC SSL",
      securityStandard: "SOC 2 Type II"
    }
  },
  stats: [
    { value: "< 2ms", label: "Vector Search Latency (p99)", sub: "Sub-millisecond cosine & dot product similarity" },
    { value: "10B+", label: "Embeddings Indexed Globally", sub: "Distributed across multi-tenant vector clusters" },
    { value: "99.4%", label: "Hybrid Search Precision (MRR@10)", sub: "Combining dense semantic + sparse BM25 retrieval" },
    { value: "100%", label: "Real-Time Metadata Filtering", sub: "Enforce strict tenant and user permission isolation" }
  ],
  connectors: [
    {
      id: "qdrant-connector",
      name: "Qdrant Vector Engine",
      category: "Rust-Engineered Vector DB",
      badge: "Qdrant gRPC / REST",
      image: qdrantImg,
      description: "High-performance vector search engine written in Rust with native payload-based filtering, quantization, and distributed replication.",
      protocols: ["Qdrant gRPC API v1.9+", "REST API", "Scalar Quantization SQ/BQ"],
      syncCapabilities: [
        "Sub-millisecond search across 100M+ vectors with memory-mapped storage",
        "Fine-grained payload filtering by organization, department, and security clearance",
        "Automated index snapshotting and cross-region cluster replication"
      ],
      avgLatency: "2ms"
    },
    {
      id: "pinecone-connector",
      name: "Pinecone Serverless",
      category: "Managed Serverless Vectors",
      badge: "Pinecone SDK v3",
      image: pineconeImg,
      description: "Serverless vector database with zero infrastructure management, automatic scaling, and fast metadata-filtered vector queries.",
      protocols: ["Pinecone Serverless REST", "gRPC Fast Ingestion", "API Key / IAM"],
      syncCapabilities: [
        "Zero cold-start serverless vector retrieval with dynamic capacity scaling",
        "Native support for 1536-dim and 3072-dim OpenAI and Cohere embeddings",
        "Integrated namespace partitioning for multi-tenant SaaS applications"
      ],
      avgLatency: "4ms"
    },
    {
      id: "milvus-connector",
      name: "Milvus & Zilliz Cloud",
      category: "Billion-Scale Vector DB",
      badge: "Milvus 2.4 Distributed",
      image: milvusImg,
      description: "Massive scale cloud-native vector database designed for managing tens of billions of embeddings with GPU-accelerated indexing.",
      protocols: ["Milvus Python/Go gRPC", "Knowhere GPU Acceleration", "TLS 1.3"],
      syncCapabilities: [
        "GPU-accelerated vector indexing with NVIDIA CAGRA and HNSW algorithms",
        "Dynamic segment compaction and memory-efficient scalar indexing",
        "High-throughput batch upserts exceeding 50,000 vectors per second"
      ],
      avgLatency: "3ms"
    },
    {
      id: "weaviate-connector",
      name: "Weaviate Cloud",
      category: "Multi-Modal Vector Search",
      badge: "Weaviate GraphQL / gRPC",
      image: weaviateImg,
      description: "Open-source vector database supporting multi-modal search across images, text, audio, and graph relationships in a single schema.",
      protocols: ["Weaviate v4 gRPC", "GraphQL Schema API", "OIDC Authentication"],
      syncCapabilities: [
        "Multi-modal cross-attention search matching images to technical blueprints",
        "Native hybrid BM25 and dense vector search with automated alpha tuning",
        "Integrated generative search modules for inline answer synthesis"
      ],
      avgLatency: "3ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Vector Retrieval Studio",
    subtitle: "Select a high-dimensional search scenario below to observe dense/sparse embedding retrieval, metadata filtering, and latency.",
    scenarios: [
      {
        id: "hybrid-search-sim",
        title: "Hybrid Search ➔ Dense Vector + Sparse BM25 Fusion",
        trigger: "User Query: 'Clause 14 indemnification limits under Delaware law'",
        sourceApp: "Enterprise Legal Assistant",
        targetApp: "Qdrant Vector Cluster",
        executionTime: "3.2ms",
        status: "200 OK — 5 Exact Legal Clauses Retrieved (Cosine: 0.941)",
        payload: {
          event_type: "vector_hybrid_search",
          query_embedding_model: "text-embedding-3-large (3072d)",
          search_parameters: {
            dense_weight: 0.75,
            sparse_bm25_weight: 0.25,
            metadata_filter: { jurisdiction: "Delaware", contract_type: "Master Services Agreement" }
          },
          matched_records: [
            { id: "doc-9941-p14", score: 0.941, text: "Section 14.2: Aggregate liability shall not exceed 2x total fees paid..." },
            { id: "doc-8812-p22", score: 0.892, text: "Section 14.8: Delaware governing law and dispute resolution venue..." }
          ],
          search_latency_ms: 3.2
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Tenant-Isolated Metadata Partitioning",
      desc: "Every vector search enforces hard metadata filters matching the authenticated user's organization ID, preventing cross-tenant information leakage."
    },
    {
      title: "Hardware-Accelerated AES-256 Storage",
      desc: "All vector embeddings, payloads, and raw text chunks are encrypted at rest with customer-managed cryptographic keys."
    },
    {
      title: "Scalar & Binary Quantization Memory Bounds",
      desc: "Utilizes 4x to 16x scalar quantization to reduce RAM requirements by 80% while retaining >99% search recall accuracy."
    },
    {
      title: "Continuous Checkpoint Snapshotting",
      desc: "Automated vector index snapshots backed up to S3/GCS every hour, guaranteeing zero vector data loss in the event of hardware failure."
    }
  ],
  caseStudy: {
    client: "Global Legal Tech & Intellectual Property Firm",
    industry: "Legal AI & Intellectual Property",
    headline: "How Qdrant & Pinecone Vector Connectors Accelerated Legal Case Precedent Discovery by 95%",
    quote: "Searching across 40 million pages of legal case history used to take days. With DevOpsTRIO's hybrid vector database connectors, our attorneys locate relevant precedents in under 3 milliseconds.",
    author: "Head of Legal Technology & Knowledge Management",
    company: "Premier International Law Group",
    image: caseImg,
    results: [
      { stat: "95%", label: "Faster case precedent discovery time" },
      { stat: "< 2ms", label: "p99 vector search response latency" },
      { stat: "100%", label: "Client confidentiality & tenant isolation maintained" }
    ]
  }
};
