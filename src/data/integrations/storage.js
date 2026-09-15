import heroBg from "../../assets/integrations/storage_hero.jpg";
import s3Img from "../../assets/integrations/s3_storage.jpg";
import azureBlobImg from "../../assets/integrations/azure_blob.jpg";
import gcsImg from "../../assets/integrations/gcs_storage.jpg";
import minioImg from "../../assets/integrations/minio_storage.jpg";
import caseImg from "../../assets/integrations/storage_case.jpg";

export const storageData = {
  id: "storage",
  category: "Integrations",
  name: "Storage",
  tagline: "Object & Block Storage Connectors for AWS S3, Azure Blob, Google Cloud Storage & MinIO",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // OBJECT & MULTI-CLOUD STORAGE",
    subBadge: "HIGH-THROUGHPUT PETABYTE UNSTRUCTURED DATA STREAMING",
    titleLight: "High-Throughput Storage Fabric with",
    titleBold: "Devopstrio Storage Integrations",
    description: "Stream high-volume unstructured files, video recordings, medical imaging, and scientific datasets directly into AI inference pipelines with automated chunking, S3 event triggers, and cross-cloud replication.",
    bgImage: heroBg,
    liveBadge: "Active Storage Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "5ms",
      activeWebhooks: "280,000+",
      authProtocol: "Presigned URLs / IAM Roles",
      securityStandard: "SOC 2 Type II & HIPAA"
    }
  },
  stats: [
    { value: "100+ GB/s", label: "Peak Ingestion Bandwidth", sub: "Parallel multipart streaming into GPU memory" },
    { value: "100 Petabytes", label: "Managed Enterprise Object Data", sub: "Distributed across AWS, Azure, GCP, and on-premises" },
    { value: "100%", label: "Zero-Knowledge Server-Side Encryption", sub: "Customer-managed KMS keys (SSE-KMS / SSE-C)" },
    { value: "40% Average", label: "Storage Cost Savings via Tiering", sub: "Automated transition to Glacier / Deep Archive" }
  ],
  connectors: [
    {
      id: "amazon-s3",
      name: "Amazon S3 & Glacier",
      category: "Hyperscale Object Store",
      badge: "S3 Event Notifications / SigV4",
      image: s3Img,
      description: "Direct multipart streaming for Amazon S3 Standard, S3 Express One Zone, and S3 Glacier with automated S3 Event Notification listeners and IAM role assumption.",
      protocols: ["Amazon S3 REST API v2", "S3 Event Notifications (SNS/SQS)", "AWS SigV4 Presigned URLs"],
      syncCapabilities: [
        "Sub-10ms upload triggers initiating instant AI multi-modal vectorization",
        "High-throughput chunked parallel downloads for multi-gigabyte video files",
        "Automated lifecycle tiering transitioning cold training data to Glacier Deep Archive"
      ],
      avgLatency: "5ms"
    },
    {
      id: "azure-blob-storage",
      name: "Azure Blob Storage & Data Lake Gen2",
      category: "Enterprise Data Lake",
      badge: "Azure Storage REST / Event Grid",
      image: azureBlobImg,
      description: "Seamless integration with Azure Blob Storage, Azure Data Lake Storage (ADLS Gen2), and hierarchical namespaces for big data analytics.",
      protocols: ["Azure Blob REST API", "Azure Event Grid Blob Triggers", "Shared Access Signatures (SAS)"],
      syncCapabilities: [
        "Hierarchical directory access control lists (ACLs) mapped to user roles",
        "Instant vectorization of newly saved Word, PDF, and PowerPoint office files",
        "Geo-redundant cross-region replication with automatic failover"
      ],
      avgLatency: "6ms"
    },
    {
      id: "google-cloud-storage",
      name: "Google Cloud Storage (GCS)",
      category: "High-Performance Cloud Store",
      badge: "GCS JSON API / Cloud Pub/Sub",
      image: gcsImg,
      description: "Connect to Google Cloud Storage buckets for training dataset ingestion, model checkpoint distribution, and multimodal document archiving.",
      protocols: ["GCS JSON API v1", "Cloud Pub/Sub Notifications", "GCP Workload Identity"],
      syncCapabilities: [
        "Direct high-speed streaming into Google Vertex AI training pipelines",
        "Automated OCR text extraction from scanned medical and insurance documents",
        "Dual-region and multi-region bucket synchronization for global low latency"
      ],
      avgLatency: "6ms"
    },
    {
      id: "minio-storage",
      name: "MinIO & On-Premises S3",
      category: "High-Speed Private S3",
      badge: "S3-Compatible / MinIO Client",
      image: minioImg,
      description: "High-performance S3-compatible object storage designed for private Kubernetes clusters, edge IoT hardware, and air-gapped sovereign environments.",
      protocols: ["S3 API Specification", "MinIO Webhook Notifications", "mTLS Encryption"],
      syncCapabilities: [
        "Ultra-fast local throughput reaching 100+ GB/s over NVMe storage arrays",
        "Complete data sovereignty with 100% on-premises containment",
        "Seamless synchronization with public cloud storage for hybrid workflows"
      ],
      avgLatency: "2ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Storage Trigger & Ingestion Studio",
    subtitle: "Select an object upload event below to observe automated event notification processing, presigned URL generation, and vectorization.",
    scenarios: [
      {
        id: "s3-upload-trigger",
        title: "S3 PutObject Event ➔ Automated Multi-Modal Vectorization",
        trigger: "New 4K Video Upload: 's3://enterprise-media/surveillance-q3/feed_cam_09.mp4' (2.4 GB)",
        sourceApp: "Amazon S3 Event Notification",
        targetApp: "Devopstrio Vision Ingestion Pod",
        executionTime: "45ms",
        status: "200 OK — Video Chunking & Keyframe Embedding Dispatched",
        payload: {
          event_type: "s3:ObjectCreated:Put",
          bucket: "enterprise-media",
          key: "surveillance-q3/feed_cam_09.mp4",
          file_size_bytes: 2576980377,
          presigned_download_url_ttl: "15 minutes",
          assigned_gpu_worker: "worker-gpu-h100-node-04",
          extracted_keyframes: 180,
          vector_index_updated: true
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Short-Lived Presigned URLs (TTL < 15 Mins)",
      desc: "Storage connectors never expose permanent bucket credentials; all uploads and downloads use time-limited, cryptographically signed presigned URLs."
    },
    {
      title: "Customer-Managed KMS Encryption Keys",
      desc: "Supports AWS KMS, Azure Key Vault, and Google Cloud KMS for full server-side encryption with customer-controlled key rotation."
    },
    {
      title: "Object Immutability & WORM Retention",
      desc: "Enforces S3 Object Lock and compliance retention rules to protect regulatory records against accidental deletion or ransomware modification."
    },
    {
      title: "Automated Malware & Virus Scanning",
      desc: "Every newly ingested object is asynchronously scanned in an isolated sandbox container before downstream processing begins."
    }
  ],
  caseStudy: {
    client: "Leading Global Medical Imaging & Radiology Network",
    industry: "Healthcare & Medical Imaging",
    headline: "How Automated Multi-Cloud Storage Connectors Ingested 100TB of Daily DICOM Scans with Zero Pipeline Latency",
    quote: "Devopstrio's S3 and Azure Blob storage connectors stream high-resolution MRI and CT scans directly into our diagnostic AI models in under 5 milliseconds. It has transformed patient turnaround times.",
    author: "Chief Medical Information Officer",
    company: "Global Diagnostic Radiology Network",
    image: caseImg,
    results: [
      { stat: "100 TB", label: "Daily medical imaging data processed seamlessly" },
      { stat: "< 5ms", label: "Event notification to ingestion dispatch latency" },
      { stat: "100%", label: "HIPAA and SOC 2 Type II data encryption compliance" }
    ]
  }
};
