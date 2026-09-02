import heroBg from "../../assets/unique_agents/legal_contract_review.jpg";
import riskImg from "../../assets/fresh/cyber_digital_matrix.jpg";
import esignImg from "../../assets/unique_solutions/doc_intel_ocr.jpg";
import playImg from "../../assets/fresh/talent_intelligence_portal.jpg";
import postImg from "../../assets/fresh/bajaj_finance_bharti_airtel_partnership_financial__1737355875195_1770527459556.webp";
import caseImg from "../../assets/unique_agents/legal_agent_case.jpg";

export const safesignaiData = {
  id: "safesign-ai",
  category: "Enterprise E-Signature Platform",
  name: "eSigniva",
  tagline: "Enterprise-Grade Electronic Signatures, AI Document Automation & Legally Binding Agreement Workflows",
  hero: {
    badge: "ENTERPRISE E-SIGNATURE PLATFORM // ESIGNIVA LIVE",
    titleLight: "Enterprise E-Signatures & Document Automation with",
    titleBold: "eSigniva",
    description: "The most secure, legally binding, and efficient way to sign, track, automate, and manage enterprise legal documents online. Backed by tamper-evident cryptographic digital certificates and AI-powered workflow automation.",
    bgImage: heroBg,
    liveBadge: "Active Enterprise Platform: Live on Cloud",
    primaryCta: "Launch eSigniva App",
    primaryCtaLink: "https://safesign.devopstrio.co.uk/",
    secondaryCta: "Start Free Trial",
    secondaryCtaLink: "https://safesign.devopstrio.co.uk/"
  },
  metrics: [
    { value: "80%", label: "Faster Contract Turnaround", sub: "From document creation to multi-party signature execution" },
    { value: "100%", label: "Legally Binding Compliance", sub: "Fully compliant with ESIGN Act, UETA, eIDAS, HIPAA & GDPR" },
    { value: "SHA-256", label: "Cryptographic Certificate Sealing", sub: "Tamper-evident audit trails and PKI digital verification" },
    { value: "65%", label: "Legal & Administrative Cost Reduction", sub: "Automate repetitive NDAs, MSAs, and employment contracts" }
  ],
  overview: {
    heading: "Enterprise-Grade Electronic Signatures & Document Intelligence",
    description: "Streamline your business with eSigniva. Built for modern enterprises, legal teams, and scaling organizations, eSigniva provides a legally binding, cloud-native electronic signature platform that eliminates paper bottlenecks and manual agreement tracking.\n\nFrom preparing multi-party signing orders and dynamic field assignments to automated reminders, tamper-evident cryptographic sealing, and automated cloud archiving, eSigniva secures every digital transaction.",
    keyPoints: [
      "Legally Binding Signatures: Conforms to ESIGN Act, UETA, eIDAS, HIPAA, and GDPR global standards",
      "Multi-Party Workflow Routing: Configure sequential or parallel signing orders with custom roles (Signer, Approver, CC)",
      "Tamper-Proof Audit Trail: Every signature is cryptographically stamped with IP addresses, timestamps, and SHA-256 hashes",
      "AI Document Automation: Dynamic field auto-placement, contract clause verification, and template libraries",
      "Seamless Cloud Storage Sync: Auto-export executed agreements directly to Google Drive, Dropbox, AWS S3, and OneDrive"
    ]
  },
  features: [
    {
      id: "esign",
      tabTitle: "E-Signatures",
      title: "Legally Binding, Multi-Device Digital Signatures",
      description: "Sign agreements effortlessly on any device — desktop, tablet, or smartphone — with drawn, typed, or uploaded biometric signatures adhering to highest international legal standards.",
      highlights: [
        "100% compliant with ESIGN Act, UETA, and eIDAS Regulation (EU)",
        "Zero software installation required for external signers",
        "Configurable multi-factor signer authentication (SMS OTP, Email Code, Passcode)",
        "Mobile-optimized signing interface with instant responsive preview"
      ],
      image: esignImg
    },
    {
      id: "workflow",
      tabTitle: "Workflow Routing",
      title: "Automated Multi-Party Signing & Approval Workflows",
      description: "Set up complex multi-stakeholder contract flows in seconds. Define sequential signing hierarchies, automated recipient reminders, and conditional routing based on agreement value.",
      highlights: [
        "Sequential and parallel signing order configuration",
        "Automated deadline alerts and customizable reminder schedules",
        "Real-time envelope status tracking (Sent, Viewed, Signed, Declined)",
        "In-flight recipient corrections and document replacement capabilities"
      ],
      image: playImg
    },
    {
      id: "audit",
      tabTitle: "Cryptographic Audit",
      title: "Tamper-Evident PKI Certificates & Digital Audit Trails",
      description: "Every completed agreement is sealed with a court-admissible certificate of completion, embedding cryptographic checksums, signer geolocation metadata, and full event histories.",
      highlights: [
        "SHA-256 digital certificate sealing preventing post-signing document alterations",
        "Detailed audit logs containing IP addresses, device user-agents, and timestamps",
        "Bank-grade AES-256 at-rest and TLS 1.3 in-transit data encryption",
        "Compliant with SOC 2 Type II, ISO 27001, and HIPAA security frameworks"
      ],
      image: riskImg
    },
    {
      id: "templates",
      tabTitle: "Template Automation",
      title: "Reusable Contract Templates & Bulk Send Engine",
      description: "Standardize enterprise agreements with reusable templates for NDAs, offer letters, vendor contracts, and sales orders. Send agreements to hundreds of recipients simultaneously with Bulk Send.",
      highlights: [
        "Pre-built template library for HR, Legal, Sales, and Procurement",
        "Dynamic custom fields, checkboxes, dropdowns, and formula calculations",
        "Bulk CSV recipient upload for high-volume employee policy rollouts",
        "REST API and Webhook triggers for automated CRM and ERP document generation"
      ],
      image: postImg
    }
  ],
  architecture: {
    heading: "The eSigniva Security & Cloud Architecture",
    description: "eSigniva is engineered with a zero-trust security model, ensuring that every document, biometric signature, and identity token is protected by enterprise-grade cryptographic protocols.",
    layers: [
      {
        title: "Presentation & Cross-Device Signing Layer",
        desc: "High-performance responsive Web canvas rendering vector-smooth signatures across all mobile and desktop web browsers."
      },
      {
        title: "Workflow & State Orchestration Engine",
        desc: "State-machine managing multi-party routing, automated dunning notifications, and real-time webhook broadcasts."
      },
      {
        title: "PKI Cryptographic Certification Core",
        desc: "Hardware Security Module (HSM) backed digital signature certificates sealing documents with immutable SHA-256 hashes."
      },
      {
        title: "Encrypted Storage & Enterprise Integration Mesh",
        desc: "Zero-data-retention options, dedicated customer encryption keys (BYOK), and bi-directional CRM/ERP connectors."
      }
    ]
  },
  caseStudy: {
    client: "Global Financial Services & Advisory Group",
    industry: "Banking & Financial Services",
    headline: "How eSigniva Accelerated 50,000 Annual Client Agreements with 100% Legal Enforceability",
    quote: "Switching to eSigniva cut our agreement completion cycle from 5 days to under 4 hours. The tamper-evident cryptographic certificates and automated compliance audit trails satisfy all our regulatory banking requirements.",
    author: "Head of Legal & Compliance Operations",
    company: "Tier-1 Financial Services Leader",
    image: caseImg,
    results: [
      { stat: "92%", label: "Reduction in contract turnaround cycle time" },
      { stat: "100%", label: "Audit compliance with zero legal discrepancies" },
      { stat: "50,000+", label: "Legally binding contracts executed annually" }
    ]
  },
  faq: [
    {
      q: "Are electronic signatures generated through eSigniva legally binding?",
      a: "Yes! eSigniva complies with the US ESIGN Act (2000), Uniform Electronic Transactions Act (UETA), European Union eIDAS Regulation, and UK Electronic Communications Act, making signatures legally enforceable in court."
    },
    {
      q: "How does eSigniva ensure documents cannot be tampered with after signing?",
      a: "Upon completion, eSigniva cryptographically seals the PDF with an industry-standard digital certificate (PKI) and SHA-256 hash. Any subsequent alteration invalidates the digital seal immediately."
    },
    {
      q: "Where can I access the live eSigniva platform?",
      a: "You can sign in and start sending documents immediately at https://safesign.devopstrio.co.uk/."
    },
    {
      q: "Can eSigniva be integrated into our custom SaaS application or CRM?",
      a: "Yes, eSigniva offers a comprehensive REST API and Webhooks allowing developers to embed signing ceremonies, generate dynamic contract PDFs, and receive real-time webhook status updates."
    }
  ]
};
