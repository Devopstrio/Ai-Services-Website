import heroBg from "../../assets/integrations/entapp_hero.jpg";
import snowImg from "../../assets/integrations/servicenow_itsm.jpg";
import docusignImg from "../../assets/integrations/docusign_esign.jpg";
import stripeImg from "../../assets/integrations/stripe_billing.jpg";
import coupaImg from "../../assets/integrations/coupa_procure.jpg";
import caseImg from "../../assets/integrations/entapp_case.jpg";

export const enterpriseApplicationsData = {
  id: "enterprise-applications",
  category: "Integrations",
  name: "Enterprise Applications",
  tagline: "Pre-Built Connectors for ServiceNow, DocuSign, Stripe, Coupa & Workato",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // CORE BUSINESS APPLICATIONS",
    subBadge: "END-TO-END WORKFLOW AUTOMATION & REVENUE ORCHESTRATION",
    titleLight: "End-to-End Enterprise Orchestration with",
    titleBold: "DevOpsTRIO Enterprise App Integrations",
    description: "Connect ServiceNow ITSM incident dispatch, DocuSign cryptographic contract sealing, Stripe enterprise billing pipelines, and Coupa procurement workflows into unified autonomous agent workflows.",
    bgImage: heroBg,
    liveBadge: "Active App Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "10ms",
      activeWebhooks: "380,000+",
      authProtocol: "OAuth 2.0 / Webhooks",
      securityStandard: "PCI-DSS Level 1 & SOC 2"
    }
  },
  stats: [
    { value: "< 10ms", label: "Application Webhook Dispatch Latency", sub: "Sub-second business process orchestration" },
    { value: "50+ Enterprise Apps", label: "Pre-Built Native Connectors", sub: "ServiceNow, DocuSign, Stripe, Coupa, Workato" },
    { value: "100%", label: "PCI-DSS & SOC 2 Compliance", sub: "Tokenized payment processing & cryptographic seals" },
    { value: "85%", label: "Reduction in Manual Workflow Steps", sub: "Achieved via autonomous end-to-end orchestration" }
  ],
  connectors: [
    {
      id: "servicenow-itsm",
      name: "ServiceNow ITSM & CSM",
      category: "Enterprise Service Management",
      badge: "ServiceNow Table & Flow API",
      image: snowImg,
      description: "Automate incident creation, CMDB configuration item discovery, change request approval workflows, and employee self-service catalog requests.",
      protocols: ["ServiceNow REST Table API", "Flow Designer Webhooks", "OAuth 2.0 Client Credentials"],
      syncCapabilities: [
        "Autonomous IT ticket classification, priority assignment, and root-cause tagging",
        "Automated change advisory board (CAB) risk scoring and approval dispatch",
        "Self-healing automated password resets and software license provisioning"
      ],
      avgLatency: "11ms"
    },
    {
      id: "docusign-esignature",
      name: "DocuSign eSignature & CLM",
      category: "Contract Lifecycle Management",
      badge: "DocuSign eSign REST API",
      image: docusignImg,
      description: "Automate contract generation, dynamic recipient envelope routing, cryptographic electronic signing, and compliance audit vault storage.",
      protocols: ["DocuSign eSignature REST v2.1", "DocuSign Connect Webhooks", "OAuth 2.0 JWT Grant"],
      syncCapabilities: [
        "Autonomous contract drafting from CRM data with custom dynamic clauses",
        "Real-time envelope signing status webhook listeners triggering billing activation",
        "Cryptographically sealed PDF audit trails archived directly into enterprise storage"
      ],
      avgLatency: "9ms"
    },
    {
      id: "stripe-billing",
      name: "Stripe Payments & Billing",
      category: "Global Payment Infrastructure",
      badge: "Stripe API v2024 / Webhooks",
      image: stripeImg,
      description: "Manage subscription lifecycles, automated usage-based meter billing, smart dunning recovery, and global tax compliance calculation.",
      protocols: ["Stripe REST API", "Stripe Event Webhooks (HMAC-SHA256)", "Stripe Connect"],
      syncCapabilities: [
        "Sub-second subscription provisioning and license entitlement synchronization",
        "Autonomous smart retries recovering up to 45% of failed recurring payments",
        "Automated invoice reconciliation synced directly to ERP general ledgers"
      ],
      avgLatency: "8ms"
    },
    {
      id: "coupa-procurement",
      name: "Coupa Business Spend Management",
      category: "Procure-to-Pay (P2P)",
      badge: "Coupa REST API / cXML",
      image: coupaImg,
      description: "Automate purchase requisitions, supplier onboarding verification, contract pricing validation, and accounts payable invoice matching.",
      protocols: ["Coupa Core REST API v35", "cXML / OData Webhooks", "OAuth 2.0 Token Auth"],
      syncCapabilities: [
        "Touchless purchase requisition approval routing matching departmental budget caps",
        "Automated vendor risk score evaluation before purchase order release",
        "Real-time spend analytics identifying duplicate SaaS software subscriptions"
      ],
      avgLatency: "12ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Enterprise App Studio",
    subtitle: "Select a cross-application business workflow below to observe multi-system synchronization and payment/contract execution.",
    scenarios: [
      {
        id: "docusign-signed-flow",
        title: "DocuSign Contract Signed ➔ Stripe Activation & ServiceNow Onboarding",
        trigger: "DocuSign Envelope Completed: 'Enterprise MSA ($240k/yr) — signed by VP Legal'",
        sourceApp: "DocuSign Connect Webhook",
        targetApp: "Stripe Billing & ServiceNow ITSM",
        executionTime: "135ms",
        status: "200 OK — Subscription Active & Customer Tenant Provisioned",
        payload: {
          event_type: "envelope_signed_completed",
          envelope_id: "DOCU-99401-ENV",
          customer_name: "Apex Global Technologies",
          contract_term: "36 Months",
          annual_contract_value: "$240,000.00",
          triggered_actions: [
            { system: "Stripe", action: "create_subscription_and_invoice", status: "SUCCESS ($20k/mo)" },
            { system: "ServiceNow", action: "create_customer_tenant_ticket", status: "SUCCESS (TICKET-8812)" },
            { system: "Salesforce", action: "update_opportunity_closed_won", status: "SUCCESS" }
          ],
          total_orchestration_time_ms: 135
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "PCI-DSS Level 1 & Zero Cardholder Data Retention",
      desc: "All billing connections strictly utilize tokenized Stripe references; no raw credit card details ever enter your application infrastructure."
    },
    {
      title: "Cryptographic Envelope Sealing & PKI Signing",
      desc: "DocuSign contract workflows enforce tamper-evident digital certificates conforming to eIDAS and ESIGN Act standards."
    },
    {
      title: "HMAC-SHA256 Webhook Signature Verification",
      desc: "Every incoming event from ServiceNow, DocuSign, and Stripe is cryptographically validated using rotating shared secrets."
    },
    {
      title: "Automated Segregation of Duties (SoD) Checks",
      desc: "Procurement workflows enforce strict checks preventing the same user from creating and approving purchase orders or payments."
    }
  ],
  caseStudy: {
    client: "Global B2B Software Enterprise ($1.4B Annual Recurring Revenue)",
    industry: "Enterprise SaaS & Business Operations",
    headline: "How Unified Enterprise App Connectors Reduced Customer Deal-to-Activation Time by 85%",
    quote: "Closing enterprise software deals used to involve 12 manual handoffs between legal, finance, and customer success. DevOpsTRIO's DocuSign, Stripe, and ServiceNow connectors automated the entire workflow in under 2 minutes.",
    author: "Chief Operating Officer",
    company: "Public Enterprise Software Corporation",
    image: caseImg,
    results: [
      { stat: "85%", label: "Faster contract signing to customer onboarding time" },
      { stat: "< 10ms", label: "Real-time webhook sync and orchestration speed" },
      { stat: "100%", label: "Audit accuracy across billing and customer contracts" }
    ]
  }
};
