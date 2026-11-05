import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getIndustryImages } from "../../data/industries/industryImages";

/* ---------------------------------------------------------------------- */
/*  Design tokens                                                         */
/* ---------------------------------------------------------------------- */

const COLORS = {
  bg: "#000000",
  cardBg: "#0A0A0A",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.66)",
  whiteFaint: "rgba(255,255,255,0.14)",
  accent: "#E11D48",
  accentDim: "rgba(225,29,72,0.35)",
};

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

/* ---------------------------------------------------------------------- */
/*  Industry Data                                                         */
/* ---------------------------------------------------------------------- */

const INDUSTRY_DATA = {
  banking: {
    title: "What's Happening",
    subtitle: "Pioneering intelligent autonomous banking and resilient cloud platforms",
    slides: [
      {
        tag: "Case Study",
        title: "Enhancing Institutional Banking Productivity with Agentic AI on AWS",
        image: "https://picsum.photos/seed/banking-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/enhancing-institutional-banking-productivity-with-agentic-ai-on-aws-3lome6",
      },
      {
        tag: "Client Transformation",
        title: "How Devopstrio Powered a Next-Generation Cloud Banking Platform on AWS",
        image: "https://picsum.photos/seed/banking-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/how-devopstrio-powered-a-next-generation-cloud-banking-platform-on-aws-v5yaq6",
      },
      {
        tag: "Case Study",
        title: "Optimizing Microsoft Dynamics 365 on AWS for Resilience and Compliance",
        image: "https://picsum.photos/seed/banking-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/banking-meets-cloud-precision-qpxcm1",
      },
      {
        tag: "Article",
        title: "Transforming Enterprise Data into Actionable Insights with AI & Analytics",
        image: "https://picsum.photos/seed/banking-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/data-without-insights-has-little-value-discover-how-devopstrio-transforms-enterprise-data-into-actionable-insights-with-ai-and-analytics-tq2rtg",
      },
      {
        tag: "Article",
        title: "Why Enterprises Choose Oracle Cloud for Secure and Scalable Performance",
        image: "https://picsum.photos/seed/banking-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/why-enterprises-choose-oracle-cloud-for-secure-and-scalable-performance-d1hvik",
      },
    ],
  },
  healthcare: {
    title: "What's Happening",
    subtitle: "Making your clinical operations and healthcare pipelines future ready",
    slides: [
      {
        tag: "Case Study",
        title: "Transforming Healthcare Operations Through Intelligent Cloud Automation",
        image: "https://picsum.photos/seed/health-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/from-manual-to-intelligent-healthcare-systems-4i86t3",
      },
      {
        tag: "Client Transformation",
        title: "Cloud AI Integration & Secure Scalable Adoption for State Healthcare",
        image: "https://picsum.photos/seed/health-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/cloud-ai-integration-how-we-built-a-secure-scalable-ai-adoption-framework-for-a-state-healthcare-agency-8oj451",
      },
      {
        tag: "Article",
        title: "AI Success Starts with High-Quality Data & Trusted Clinical Data Foundations",
        image: "https://picsum.photos/seed/health-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/ai-success-starts-with-high-quality-data-how-devopstrio-helps-enterprises-build-trusted-ai-ready-data-foundations-h5z61r",
      },
      {
        tag: "White Paper",
        title: "Azure Data Lake Analytics Security: Secure Clinical Data & Telemetry",
        image: "https://picsum.photos/seed/health-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/azure-data-lake-analytics-security-secure-data-analytics-devopstrio-g7ewug",
      },
      {
        tag: "Article",
        title: "Cybersecurity in the Quantum Era: Protecting Sensitive Patient Telemetry",
        image: "https://picsum.photos/seed/health-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/the-future-of-cybersecurity-in-the-quantum-era-protecting-data-beyond-traditional-security-2fg7hs",
      },
    ],
  },
  insurance: {
    title: "What's Happening",
    subtitle: "Accelerating underwriting intelligence and touchless claim settlement",
    slides: [
      {
        tag: "Case Study",
        title: "AI-Driven Modernization of Insurance Claims Systems",
        image: "https://picsum.photos/seed/ins-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/ai-driven-modernization-of-insurance-claims-systems-1bvufz",
      },
      {
        tag: "Case Study",
        title: "From Frozen Legacy to AI Velocity: Global Investment & Insurance Firm",
        image: "https://picsum.photos/seed/ins-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/from-frozen-legacy-to-ai-powered-velocity-transforming-a-global-investment-and-insurance-firm-ejni38",
      },
      {
        tag: "Article",
        title: "Vulnerability Management Service: Finding Risk Gaps Before Problems Emerge",
        image: "https://picsum.photos/seed/ins-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/vulnerability-management-service-finding-security-gaps-before-they-become-problems-meku90",
      },
      {
        tag: "Client Transformation",
        title: "Manual Workflows to Intelligent Operations: Power Platform Automation",
        image: "https://picsum.photos/seed/ins-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/from-manual-workflows-to-intelligent-operations-how-devopstrio-scales-power-platform-automation-t214qj",
      },
      {
        tag: "Article",
        title: "Zero Trust Architecture: Reducing Actuarial Multi-Cloud Security Risks by 60%",
        image: "https://picsum.photos/seed/ins-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/how-zero-trust-helps-reduce-multi-cloud-security-risks-by-60-kahf1c",
      },
    ],
  },
  retail: {
    title: "What's Happening",
    subtitle: "Connecting omnichannel journeys with automated cloud fulfillment",
    slides: [
      {
        tag: "Case Study",
        title: "How Cloud Migration Modernized a Retail Enterprise Devopstrio Azure Case Study",
        image: "https://picsum.photos/seed/ret-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/how-cloud-migration-modernized-a-retail-enterprise-devopstrio-azure-case-study-eu7msq",
      },
      {
        tag: "Client Transformation",
        title: "Cutting Cloud Waste by 52%: How a Global Retail Brand Reclaimed ROI",
        image: "https://picsum.photos/seed/ret-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/cutting-cloud-waste-by-52-how-a-retail-brand-reclaimed-its-cloud-investment-and-shipped-3-faster-7l1nwu",
      },
      {
        tag: "Client Transformation",
        title: "Reimagining Customer Experience Through Cloud-Powered Data Strategy",
        image: "https://picsum.photos/seed/ret-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/reimagining-customer-experience-through-cloud-powered-data-driven-strategy-a-devopstrio-client-story-jo5f4r",
      },
      {
        tag: "Article",
        title: "BigQuery Omni vs. Snowflake: 35% Lower Multi-Cloud Warehousing Costs",
        image: "https://picsum.photos/seed/ret-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/bigquery-omni-vs-snowflake-achieve-35-lower-multi-cloud-data-warehousing-costs-devopstrio-othriq",
      },
      {
        tag: "Article",
        title: "The Future of AI Search and Retrieval: Faster, Contextual Shopping Results",
        image: "https://picsum.photos/seed/ret-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/the-future-of-ai-search-and-retrieval-faster-smarter-and-more-accurate-results-tk4mcv",
      },
    ],
  },
  manufacturing: {
    title: "What's Happening",
    subtitle: "Empowering shop floors and supply chains with industrial AI",
    slides: [
      {
        tag: "White Paper",
        title: "AI Infrastructure Services for GPU Clusters, Azure AI & AWS SageMaker",
        image: "https://picsum.photos/seed/mfg-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/ai-infrastructure-services-for-gpu-azure-ai-aws-sagemaker-mxn5by",
      },
      {
        tag: "Article",
        title: "Edge Cloud Computing: The Future of Real-Time Industrial Telemetry Access",
        image: "https://picsum.photos/seed/mfg-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/edge-cloud-computing-the-future-of-real-time-data-access-and-security-6livbh",
      },
      {
        tag: "Article",
        title: "How AI Agents Boost Enterprise Automation and Factory Floor Output",
        image: "https://picsum.photos/seed/mfg-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/how-ai-agents-boost-enterprise-automation-and-business-growth-l0y60v",
      },
      {
        tag: "Article",
        title: "MLOps to LLMOps: Streamlining Industrial Model Deployment & Vision Scaling",
        image: "https://picsum.photos/seed/mfg-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/mlops-to-llmops-streamlining-ai-model-deployment-scaling-4ckbn4",
      },
      {
        tag: "Article",
        title: "Why Cloud-Native Applications Power Modern Industrial Digital Transformation",
        image: "https://picsum.photos/seed/mfg-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/why-cloud-native-applications-are-powering-the-future-of-digital-transformation-ow0oxd",
      },
    ],
  },
  logistics: {
    title: "What's Happening",
    subtitle: "Synchronizing global fleets and multi-modal transit corridors",
    slides: [
      {
        tag: "Article",
        title: "Turning High-Volume Telematics Data into Real-Time Operational Insights with GCP",
        image: "https://picsum.photos/seed/log-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/turning-high-volume-data-into-real-time-insights-with-gcp-aov6ti",
      },
      {
        tag: "Client Transformation",
        title: "From Backup to Business Resilience: Modern Cloud Recovery Strategies",
        image: "https://picsum.photos/seed/log-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/from-backup-to-business-resilience-how-devopstrio-modernizes-cloud-recovery-strategies-u97m4j",
      },
      {
        tag: "Case Study",
        title: "Cloud Cost Optimization Case Study: Reduce Multi-Cloud Spend by 40%",
        image: "https://picsum.photos/seed/log-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/cloud-cost-optimization-case-study-reduce-aws-azure-gcp-costs-by-40-devopstrio-11d95i",
      },
      {
        tag: "Article",
        title: "Reduce Cloud Compute Costs by 30% with AWS Graviton4 & Trainium2",
        image: "https://picsum.photos/seed/log-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/reduce-cloud-compute-costs-by-30-with-aws-graviton4-trainium2-and-devopstrio-g45kal",
      },
      {
        tag: "Article",
        title: "How Zero Trust Helps Reduce Multi-Cloud Logistics Security Risks by 60%",
        image: "https://picsum.photos/seed/log-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/how-zero-trust-helps-reduce-multi-cloud-security-risks-by-60-kahf1c",
      },
    ],
  },
  government: {
    title: "What's Happening",
    subtitle: "Building secure, sovereign public cloud platforms for citizens",
    slides: [
      {
        tag: "White Paper",
        title: "Digital Public Services for UK Councils: Empower Transformation",
        image: "https://picsum.photos/seed/gov-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/uk-solutions-proposal-tpygc3",
      },
      {
        tag: "Client Transformation",
        title: "Azure Under Control: Turning Complex Cloud Estates into Governed Platforms",
        image: "https://picsum.photos/seed/gov-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/azure-under-control-how-devopstrio-turns-complex-cloud-estates-into-governed-platforms-k3u6is",
      },
      {
        tag: "White Paper",
        title: "Microsoft 365 Security & Compliance Services UK",
        image: "https://picsum.photos/seed/gov-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/microsoft-365-security-compliance-services-uk-vcwzcx",
      },
      {
        tag: "Article",
        title: "Azure Governance Guardrails and Configuration Management for Public Sector",
        image: "https://picsum.photos/seed/gov-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/azure-governance-guardrails-and-configuration-management-for-enterprise-cloud-security-62kcnf",
      },
      {
        tag: "Article",
        title: "GCP Secret Manager & Cloud KMS: Zero-Trust Security for Sovereign Records",
        image: "https://picsum.photos/seed/gov-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/gcp-secret-manager-and-cloud-kms-building-zero-trust-security-with-automated-secrets-rotation-l386zv",
      },
    ],
  },
  education: {
    title: "What's Happening",
    subtitle: "Modernizing student analytics and collaborative digital learning",
    slides: [
      {
        tag: "White Paper",
        title: "Devopstrio Global Internship & Academic AI Program Guide 2026",
        image: "https://picsum.photos/seed/edu-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/global-internship-program-guide-2026-ai-cybersecurity-cloud-devops-devopstrio-global-ru0mmg",
      },
      {
        tag: "Client Transformation",
        title: "From AI Curiosity to Workplace Capability: Microsoft 365 Copilot",
        image: "https://picsum.photos/seed/edu-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/from-ai-curiosity-to-workplace-capability-how-devopstrio-operationalizes-microsoft-365-copilot-lahm3x",
      },
      {
        tag: "Article",
        title: "AI-Powered Workplace Evolution: Teams, Copilot & Intelligent Workflows",
        image: "https://picsum.photos/seed/edu-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/ai-powered-workplace-evolution-how-devopstrio-transforms-collaboration-with-microsoft-teams-copilot-and-intelligent-ai-workflows-ckustv",
      },
      {
        tag: "Article",
        title: "Unlock Knowledge Faster with Amazon Q for Business & Campus Assistants",
        image: "https://picsum.photos/seed/edu-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/unlock-business-knowledge-faster-with-amazon-q-for-business-and-enterprise-ai-assistants-x9ypd1",
      },
      {
        tag: "Article",
        title: "AI-Enabled Azure Virtual Desktop for Modern Hybrid Campuses",
        image: "https://picsum.photos/seed/edu-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/ai-enabled-azure-virtual-desktop-for-modern-workspaces-skuy61",
      },
    ],
  },
  telecom: {
    title: "What's Happening",
    subtitle: "Architecting autonomous networks, zero-touch towers, and 5G edge computing",
    slides: [
      {
        tag: "Case Study",
        title: "From Manual IT Operations to Autonomous Systems: Agentic AI with Google Cloud",
        image: "https://picsum.photos/seed/tel-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/next-gen-it-operations-with-agentic-ai-9jkmk0",
      },
      {
        tag: "White Paper",
        title: "Network & Server Administration Services | IT Infrastructure Support",
        image: "https://picsum.photos/seed/tel-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/network-server-administration-services-it-infrastructure-support-ndb01e",
      },
      {
        tag: "Article",
        title: "Edge Cloud Computing: Real-Time Data Access for 5G Base Stations",
        image: "https://picsum.photos/seed/tel-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/edge-cloud-computing-the-future-of-real-time-data-access-and-security-6livbh",
      },
      {
        tag: "Client Transformation",
        title: "Reducing Alert Fatigue with Intelligent Cloud Telemetry Monitoring",
        image: "https://picsum.photos/seed/tel-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/reducing-alert-fatigue-with-intelligent-cloud-monitoring-u5d5d0",
      },
      {
        tag: "White Paper",
        title: "Hybrid Multi-Cloud Services for Telecom Azure AWS VMware Architecture",
        image: "https://picsum.photos/seed/tel-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/hybrid-multi-cloud-services-for-azure-aws-vmware-architecture-xa486l",
      },
    ],
  },
  energy: {
    title: "What's Happening",
    subtitle: "Balancing green grid generation and hardening critical energy assets",
    slides: [
      {
        tag: "Client Transformation",
        title: "How Devopstrio Helped a Leading Electric Utility Modernize with GCP",
        image: "https://picsum.photos/seed/ene-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/how-devopstrio-helped-a-leading-electric-utility-modernize-its-it-operations-with-gcp-cloud-migration-unf5oi",
      },
      {
        tag: "Article",
        title: "AI-First Cloud Strategy with Google Cloud: Accelerating Utility Innovation",
        image: "https://picsum.photos/seed/ene-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/ai-first-cloud-strategy-with-google-cloud-accelerating-enterprise-innovation-devopstrio-svk0mh",
      },
      {
        tag: "Case Study",
        title: "Building a Ransomware Resilient Backup Strategy with AWS for Utilities",
        image: "https://picsum.photos/seed/ene-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/building-a-ransomware-resilient-backup-strategy-with-aws-bfhdcv",
      },
      {
        tag: "White Paper",
        title: "Devopstrio Azure Architecture Resilience: High Availability & DR",
        image: "https://picsum.photos/seed/ene-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/devopstrio-azure-architecture-resilience-high-availability-disaster-recovery-7z2gyy",
      },
      {
        tag: "Article",
        title: "Stop Ransomware Before It Starts: Modern Backup Strategy for Power Utilities",
        image: "https://picsum.photos/seed/ene-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/modern-backup-ransomware-protection-aws-strategy-every-enterprise-needs-2kr8pp",
      },
    ],
  },
  realestate: {
    title: "What's Happening",
    subtitle: "Unlocking asset valuation intelligence and connected building efficiency",
    slides: [
      {
        tag: "Article",
        title: "Smart Azure Data Tagging & Privacy Solutions for Real Estate Portfolios",
        image: "https://picsum.photos/seed/re-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/smart-azure-data-tagging-and-privacy-solutions-powering-secure-digital-transformation-globally-t5p6ph",
      },
      {
        tag: "Client Transformation",
        title: "Identity at the Centre: How Devopstrio Modernizes Access with Entra ID",
        image: "https://picsum.photos/seed/re-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/identity-at-the-centre-how-devopstrio-modernizes-access-with-microsoft-entra-id-3l24rp",
      },
      {
        tag: "White Paper",
        title: "Microsoft Intune Services UK | Modern Real Estate Endpoint Management",
        image: "https://picsum.photos/seed/re-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/microsoft-intune-services-uk-endpoint-device-management-9xdg69",
      },
      {
        tag: "Client Transformation",
        title: "From Digital Silos to Connected Work: Re-Engineering M365 Property Teams",
        image: "https://picsum.photos/seed/re-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/from-digital-silos-to-connected-work-how-devopstrio-re-engineers-microsoft-365-collaboration-jthhc0",
      },
      {
        tag: "Article",
        title: "Top Benefits of Microsoft Azure for Enterprise Real Estate Scalability",
        image: "https://picsum.photos/seed/re-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/top-benefits-of-microsoft-azure-for-business-growth-and-scalability-1kaq0y",
      },
    ],
  },
  automotive: {
    title: "What's Happening",
    subtitle: "Powering autonomous mobility, software-defined vehicles, and edge AI",
    slides: [
      {
        tag: "Article",
        title: "How AWS Trainium Is Powering the Future of Automotive AI Computing",
        image: "https://picsum.photos/seed/auto-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/how-aws-trainium-is-powering-the-future-of-ai-computing-and-transforming-cloud-based-ai-infrastructure-2poiwp",
      },
      {
        tag: "Article",
        title: "Why Does Your Connected Vehicle Fleet Need Continuous MLOps?",
        image: "https://picsum.photos/seed/auto-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/why-does-your-business-need-mlops-f6uvyy",
      },
      {
        tag: "White Paper",
        title: "CI/CD Pipeline Services with Azure DevOps & GitHub for Embedded Software",
        image: "https://picsum.photos/seed/auto-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/ci-cd-pipeline-services-with-azure-devops-github-jenkins-uf61y0",
      },
      {
        tag: "Article",
        title: "Strengthening Serverless Edge Security with AWS Lambda in Connected Cars",
        image: "https://picsum.photos/seed/auto-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/strengthening-serverless-security-with-aws-lambda-7vase2",
      },
      {
        tag: "White Paper",
        title: "Cloud Migration Services: Modern Automotive Cloud Transformation Guide",
        image: "https://picsum.photos/seed/auto-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/cloud-migration-services-pn66hu",
      },
    ],
  },
  hospitality: {
    title: "What's Happening",
    subtitle: "Personalizing guest stays and modernizing hospitality cloud operations",
    slides: [
      {
        tag: "Client Transformation",
        title: "Casino & Resort Cloud-Driven Business Transformation Client Story",
        image: "https://picsum.photos/seed/hosp-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/client-testimonial-cloud-driven-business-transformation-do4bon",
      },
      {
        tag: "Client Transformation",
        title: "Reimagining Guest Experience Through Cloud-Powered Data Strategy",
        image: "https://picsum.photos/seed/hosp-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/reimagining-customer-experience-through-cloud-powered-data-driven-strategy-a-devopstrio-client-story-jo5f4r",
      },
      {
        tag: "Article",
        title: "What Can AI Concierge Agents Do for Your Hospitality Operations?",
        image: "https://picsum.photos/seed/hosp-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/what-can-ai-agents-do-for-your-business-d0jfy6",
      },
      {
        tag: "Article",
        title: "Reduce Cloud Costs and Boost Hospitality Resource Utilization by 70%",
        image: "https://picsum.photos/seed/hosp-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/reduce-cloud-costs-and-boost-resource-utilization-by-70-with-serverless-computing-fi5sj6",
      },
      {
        tag: "Article",
        title: "How Gen AI Is Turning Guest Service Ideas Into Reality in the UK",
        image: "https://picsum.photos/seed/hosp-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/how-gen-ai-is-turning-business-ideas-into-smarter-service-in-the-uk-i161ge",
      },
    ],
  },
  media: {
    title: "What's Happening",
    subtitle: "Scaling high-concurrency streaming pipelines and intelligent media archives",
    slides: [
      {
        tag: "Case Study",
        title: "How JioCinema & JioHotstar Handle 30–55 Million Peak Viewers Without Lag",
        image: "https://picsum.photos/seed/med-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/how-jiocinema-jiohotstar-handle-30-55-million-peak-ipl-viewers-without-lag-a-modern-cloud-computing-breakdown-5qx4va",
      },
      {
        tag: "Case Study",
        title: "How a Global Entertainment Giant Rebuilt Its IT Core with Automation",
        image: "https://picsum.photos/seed/med-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies/how-a-global-entertainment-giant-rebuilt-its-it-core-with-automation-first-cloud-engineering-0tff11",
      },
      {
        tag: "Article",
        title: "Azure AI Studio vs Amazon Bedrock: Choosing the Right Generative Platform",
        image: "https://picsum.photos/seed/med-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/azure-ai-studio-vs-amazon-bedrock-which-enterprise-ai-platform-is-right-for-your-business-9cqi1h",
      },
      {
        tag: "Article",
        title: "AWS RAG: Combining Cloud Knowledge Retrieval with AI for Media Archives",
        image: "https://picsum.photos/seed/med-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/aws-rag-combines-cloud-knowledge-retrieval-with-ai-for-accurate-contextual-responses-o1ozz1",
      },
      {
        tag: "Article",
        title: "Strengthening Cloud Infrastructure Security with AWS for Streaming Media",
        image: "https://picsum.photos/seed/med-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/strengthening-cloud-infrastructure-security-with-aws-1wkq00",
      },
    ],
  },
  professional: {
    title: "What's Happening",
    subtitle: "Accelerating consultancy deliverables and secure AI workplace capabilities",
    slides: [
      {
        tag: "Article",
        title: "From AI Curiosity to Real Results: The Role of Machine Learning Engineering",
        image: "https://picsum.photos/seed/prof-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/from-ai-ideas-to-real-results-the-role-of-machine-learning-engineering-vvd8j3",
      },
      {
        tag: "Client Transformation",
        title: "Microsoft 365 Copilot ROI: Achieving 25% User Productivity Gains",
        image: "https://picsum.photos/seed/prof-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/client-transformations/from-ai-curiosity-to-workplace-capability-how-devopstrio-operationalizes-microsoft-365-copilot-lahm3x",
      },
      {
        tag: "White Paper",
        title: "Azure DevSecOps: Secure DevOps & CI/CD Best Practices for Consultancies",
        image: "https://picsum.photos/seed/prof-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/azure-devsecops-secure-devops-ci-cd-best-practices-devopstrio-jbyw3n",
      },
      {
        tag: "Article",
        title: "Enterprise AI at Scale: Why Azure AI Studio Is the Future for Consultancies",
        image: "https://picsum.photos/seed/prof-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/blogs/enterprise-ai-at-scale-why-azure-ai-studio-is-the-future-u27l78",
      },
      {
        tag: "White Paper",
        title: "Cloud Cost & Licensing Optimization Services: Reducing Enterprise IT Spend",
        image: "https://picsum.photos/seed/prof-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/white-paper/cloud-cost-licensing-optimization-services-reduce-it-spend-r2kiuk",
      },
    ],
  },
};

const DEFAULT_DATA = {
  title: "What's Happening",
  subtitle: "Explore our latest research, enterprise transformations, and cloud breakthroughs",
  slides: [
    {
      tag: "Case Study",
      title: "Enhancing Institutional Banking Productivity with Agentic AI on AWS",
      image: "https://picsum.photos/seed/def-news-1/700/560",
      href: "https://devopstrio.co.uk/insights/case-studies/enhancing-institutional-banking-productivity-with-agentic-ai-on-aws-3lome6",
    },
    {
      tag: "Case Study",
      title: "How JioCinema & JioHotstar Handle 30–55 Million Peak Viewers Without Lag",
      image: "https://picsum.photos/seed/def-news-2/700/560",
      href: "https://devopstrio.co.uk/insights/case-studies/how-jiocinema-jiohotstar-handle-30-55-million-peak-ipl-viewers-without-lag-a-modern-cloud-computing-breakdown-5qx4va",
    },
    {
      tag: "Client Transformation",
      title: "Azure Under Control: Turning Complex Cloud Estates into Governed Platforms",
      image: "https://picsum.photos/seed/def-news-3/700/560",
      href: "https://devopstrio.co.uk/insights/client-transformations/azure-under-control-how-devopstrio-turns-complex-cloud-estates-into-governed-platforms-k3u6is",
    },
    {
      tag: "Article",
      title: "Transforming Enterprise Data into Actionable Insights with AI & Analytics",
      image: "https://picsum.photos/seed/def-news-4/700/560",
      href: "https://devopstrio.co.uk/insights/blogs/data-without-insights-has-little-value-discover-how-devopstrio-transforms-enterprise-data-into-actionable-insights-with-ai-and-analytics-tq2rtg",
    },
    {
      tag: "White Paper",
      title: "Digital Public Services for UK Councils: Empower Transformation",
      image: "https://picsum.photos/seed/def-news-5/700/560",
      href: "https://devopstrio.co.uk/insights/white-paper/uk-solutions-proposal-tpygc3",
    },
  ],
};

/* ---------------------------------------------------------------------- */
/*  Slide card                                                            */
/* ---------------------------------------------------------------------- */

function SlideCard({ slide }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={slide.href || "https://devopstrio.co.uk/insights"}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6 }}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: COLORS.cardBg,
        border: `1px solid ${hovered ? "rgba(225,29,72,0.5)" : COLORS.whiteFaint}`,
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? `0 12px 40px rgba(225,29,72,0.18)`
          : "0 4px 20px rgba(0,0,0,0.4)",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 11",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={slide.image}
          alt={slide.title}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            padding: "6px 14px",
            borderRadius: "7px",
            backgroundColor: COLORS.accent,
            color: COLORS.white,
            fontFamily: FONT,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          {slide.tag}
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          padding: "22px",
          flex: 1,
          minHeight: "150px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: FONT,
            fontSize: "17px",
            fontWeight: 600,
            lineHeight: 1.4,
            color: COLORS.white,
            letterSpacing: "-0.01em",
          }}
        >
          {slide.title}
        </h3>

        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "8px",
            backgroundColor: COLORS.white,
            color: COLORS.bg,
            fontFamily: FONT,
            fontSize: "13.5px",
            fontWeight: 700,
            alignSelf: "flex-start",
          }}
        >
          Read More
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </motion.span>
      </div>
    </motion.a>
  );
}

/* ---------------------------------------------------------------------- */
/*  Main Component                                                        */
/* ---------------------------------------------------------------------- */

export function WhatsHappening() {
  const location = useLocation();
  const [industryData, setIndustryData] = useState(DEFAULT_DATA);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    let data = DEFAULT_DATA;

    if (path.includes("healthcare-life-sciences") || path.includes("healthcare")) {
      data = INDUSTRY_DATA.healthcare;
    } else if (path.includes("banking-financial-services") || path.includes("banking")) {
      data = INDUSTRY_DATA.banking;
    } else if (path.includes("insurance")) {
      data = INDUSTRY_DATA.insurance;
    } else if (path.includes("retail-ecommerce") || path.includes("retail")) {
      data = INDUSTRY_DATA.retail;
    } else if (path.includes("manufacturing")) {
      data = INDUSTRY_DATA.manufacturing;
    } else if (path.includes("logistics-supply-chain") || path.includes("logistics")) {
      data = INDUSTRY_DATA.logistics;
    } else if (path.includes("government-public-sector") || path.includes("government")) {
      data = INDUSTRY_DATA.government;
    } else if (path.includes("education")) {
      data = INDUSTRY_DATA.education;
    } else if (path.includes("telecommunications") || path.includes("telecom")) {
      data = INDUSTRY_DATA.telecom;
    } else if (path.includes("energy-utilities") || path.includes("energy")) {
      data = INDUSTRY_DATA.energy;
    } else if (path.includes("real-estate") || path.includes("realestate")) {
      data = INDUSTRY_DATA.realestate;
    } else if (path.includes("automotive")) {
      data = INDUSTRY_DATA.automotive;
    } else if (path.includes("hospitality-travel") || path.includes("hospitality")) {
      data = INDUSTRY_DATA.hospitality;
    } else if (path.includes("media-entertainment") || path.includes("media")) {
      data = INDUSTRY_DATA.media;
    } else if (path.includes("professional-services") || path.includes("professional")) {
      data = INDUSTRY_DATA.professional;
    }

    setIndustryData(data);
    setPage(0);
  }, [location.pathname]);

  const slides = industryData.slides || DEFAULT_DATA.slides;
  const localImages = getIndustryImages(location.pathname);
  const perView = 3;
  const totalPages = slides.length;

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const visibleSlides = Array.from({ length: perView }, (_, i) => {
    const idx = (page + i) % slides.length;
    const slideItem = slides[idx];
    return {
      ...slideItem,
      image: localImages[idx % localImages.length] || slideItem.image,
      _key: `${idx}-${page}`
    };
  });

  // "What's Happening" -> white "What's" + accent "Happening", built from
  // the title string itself so it stays correct even if copy changes.
  const titleWords = industryData.title.split(" ");
  const titleAccentWord = titleWords[titleWords.length - 1];
  const titleLeadWords = titleWords.slice(0, -1).join(" ");

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: COLORS.bg,
        fontFamily: FONT,
        padding: "96px 24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto 44px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              margin: 0,
              fontFamily: FONT,
              fontSize: "clamp(30px, 4vw, 40px)",
              fontWeight: 700,
              color: COLORS.white,
              letterSpacing: "-0.02em",
            }}
          >
            {titleLeadWords} <span style={{ color: COLORS.accent }}>{titleAccentWord}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              margin: "10px 0 0",
              fontFamily: FONT,
              fontSize: "16px",
              color: COLORS.whiteDim,
            }}
          >
            {industryData.subtitle}
          </motion.p>
        </div>

        {/* Nav controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <motion.button
            onClick={prev}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: `1px solid ${COLORS.whiteFaint}`,
              backgroundColor: "transparent",
              color: COLORS.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            aria-label="Previous"
          >
            <ArrowLeft size={17} strokeWidth={2.25} />
          </motion.button>

          <span
            style={{
              fontFamily: FONT,
              fontSize: "14px",
              fontWeight: 600,
              color: COLORS.whiteDim,
              minWidth: "34px",
              textAlign: "center",
            }}
          >
            {page + 1} / {totalPages}
          </span>

          <motion.button
            onClick={next}
            whileHover={{ backgroundColor: COLORS.accentDim }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: COLORS.accent,
              color: COLORS.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            aria-label="Next"
          >
            <ArrowRight size={17} strokeWidth={2.25} />
          </motion.button>
        </div>
      </div>

      {/* Cards row — CSS grid guarantees perfectly even columns, no wrap gaps */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: `repeat(${perView}, 1fr)`,
          gap: "24px",
        }}
      >
        <AnimatePresence mode="popLayout">
          {visibleSlides.map((slide) => (
            <SlideCard key={slide._key} slide={slide} />
          ))}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "40px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === page ? "22px" : "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: i === page ? COLORS.accent : COLORS.whiteFaint,
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default WhatsHappening;