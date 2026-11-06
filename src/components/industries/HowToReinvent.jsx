import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import bankingCustomerExperienceImg from "../../assets/industries/banking_reinvent_personalized_customer_experience.webp";
import bankingComplianceImg from "../../assets/industries/banking_reinvent_intelligent_compliance.webp";
import healthcareFrontlineImg from "../../assets/industries/healthcare_reinvent_frontline_clinicians.webp";
import healthcareDataImg from "../../assets/industries/healthcare_reinvent_ai_data.webp";
import insuranceClaimsImg from "../../assets/industries/insurance_reinvent_ai_claims.webp";
import insuranceComplianceImg from "../../assets/industries/insurance_reinvent_intelligent_compliance.webp";
import retailFrontlineImg from "../../assets/industries/retail_reinvent_frontline_customer_engagement.webp";
import retailChannelsImg from "../../assets/industries/retail_reinvent_digital_physical_connections.webp";
import manufacturingAutomationImg from "../../assets/industries/manufacturing_reinvent_intelligent_automation.webp";
import manufacturingWorkforceImg from "../../assets/industries/manufacturing_reinvent_workforce_empowerment.webp";
import logisticsInnovationImg from "../../assets/industries/logistics_reinvent_ai_innovation.webp";
import logisticsCustomerExperienceImg from "../../assets/industries/logistics_reinvent_customer_experience.webp";
import governmentInnovationImg from "../../assets/industries/government_reinvent_ai_innovation.webp";
import governmentOperationalExcellenceImg from "../../assets/industries/government_reinvent_operational_excellence.webp";
import educationPersonalizedLearningImg from "../../assets/industries/education_reinvent_personalized_learning.webp";
import educationDigitalTransformationImg from "../../assets/industries/education_reinvent_digital_transformation.webp";
import telecomInnovationImg from "../../assets/industries/telecom_reinvent_ai_innovation.webp";
import telecomOperationalExcellenceImg from "../../assets/industries/telecom_reinvent_operational_excellence.webp";
import realEstateInnovationImg from "../../assets/industries/realestate_reinvent_ai_innovation.webp";
import realEstateCustomerExperienceImg from "../../assets/industries/realestate_reinvent_customer_experience.webp";
import energyInnovationImg from "../../assets/industries/energy_reinvent_ai_innovation.webp";
import energyOperationalExcellenceImg from "../../assets/industries/energy_reinvent_operational_excellence.webp";
import automotiveInnovationImg from "../../assets/industries/automotive_reinvent_ai_innovation.webp";
import automotiveOperationalExcellenceImg from "../../assets/industries/automotive_reinvent_operational_excellence.webp";
import hospitalityInnovationImg from "../../assets/industries/hospitality_reinvent_ai_innovation.webp";
import hospitalityOperationalExcellenceImg from "../../assets/industries/hospitality_reinvent_operational_excellence.webp";
import mediaInnovationImg from "../../assets/industries/media_reinvent_ai_innovation.webp";
import mediaCustomerExperienceImg from "../../assets/industries/media_reinvent_customer_experience.webp";
import professionalServicesInnovationImg from "../../assets/industries/professional_services_reinvent_ai_innovation.webp";
import professionalServicesOperationalExcellenceImg from "../../assets/industries/professional_services_reinvent_operational_excellence.webp";
import {
  FiActivity,
  FiTrendingUp,
  FiZap,
  FiFeather,
  FiCpu,
  FiGlobe,
  FiShield,
  FiPieChart,
  FiSettings,
  FiBarChart2,
  FiClipboard,
  FiUsers,
  FiTool,
  FiCheckCircle,
  FiBox,
  FiWifi,
  FiFileText,
  FiHeart,
  FiRefreshCw,
  FiShoppingBag,
  FiBookOpen,
  FiTarget,
  FiLayers,
} from "react-icons/fi";

/**
 * HowToReinvent.jsx — DevOpsTRIO
 * Dynamic "How to Reinvent" section — changes content based on the current
 * industry route. Cards use react-icons (no emoji), a distinct icon-box +
 * index-number header, and a click-to-expand description that swaps in
 * new text rather than navigating immediately.
 * Black theme, #E11D48 accent, white text, inline CSS only. Font: Geist
 */

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

// shared icon lookup — reused across industries so recurring categories
// (AI and Data, Managed Services, etc.) stay visually consistent
const ICON_MAP = {
  workforce: FiUsers,
  operations: FiRefreshCw,
  managedServices: FiZap,
  esg: FiFeather,
  aiData: FiCpu,
  network: FiGlobe,
  digitalExperience: FiHeart,
  risk: FiShield,
  bankingOps: FiSettings,
  wealth: FiTrendingUp,
  regulatory: FiClipboard,
  maintenance: FiTool,
  quality: FiCheckCircle,
  supplyChain: FiBox,
  workforceExcellence: FiActivity,
  claims: FiFileText,
  riskAssessment: FiPieChart,
  customerExperience: FiUsers,
  fraud: FiShield,
  adaptiveLearning: FiBookOpen,
  studentAnalytics: FiBarChart2,
  adminAutomation: FiSettings,
  contentDelivery: FiLayers,
  digitalTransformation: FiWifi,
  marketplaces: FiShoppingBag,
  targetGeneric: FiTarget,
};

// Industry-specific data configurations
const INDUSTRY_DATA = {
  healthcare: {
    heading: "How to reinvent healthcare",
    images: [healthcareFrontlineImg, healthcareDataImg],
    cards: [
      {
        label: "FRONTLINE CLINICAL WORKFORCE",
        title: "Empower clinical teams with real-time diagnostic AI and automated charting.",
        description: "Enable healthcare professionals with AI-powered clinical decision support, real-time patient data access, and automated documentation to reduce administrative burden.",
        iconKey: "workforce",
        route: "/industries/healthcare-life-sciences"
      },
      {
        label: "OPERATIONS & ACUTE SUPPLY",
        title: "Streamline acute care throughput and medical supply allocation with predictive telemetry.",
        description: "Optimize hospital operations with AI-driven resource allocation, predictive supply chain management, and enhanced clinical workflow automation.",
        iconKey: "operations",
        route: "/industries/healthcare-life-sciences"
      },
      {
        label: "CLINICAL MANAGED SERVICES",
        title: "Eliminate manual EHR overhead to maximize clinician focus and patient face-time.",
        description: "Automate repetitive healthcare IT workflows, streamline compliance monitoring, and improve staff satisfaction with intelligent managed services.",
        iconKey: "managedServices",
        route: "/industries/healthcare-life-sciences"
      },
      {
        label: "HEALTHCARE ESG & OUTREACH",
        title: "Expand equitable patient outreach and sustainable care delivery across communities.",
        description: "Drive sustainable healthcare operations, reduce medical waste, and improve health equity through community-focused, data-driven initiatives.",
        iconKey: "esg",
        route: "/industries/healthcare-life-sciences"
      },
      {
        label: "AI & CLINICAL DATA MESH",
        title: "Consolidate petabyte-scale FHIR telemetry into compliant diagnostic intelligence.",
        description: "Modernize healthcare data infrastructure to enable generative AI applications, advanced clinical analytics, and secure medical research collaboration.",
        iconKey: "aiData",
        route: "/industries/healthcare-life-sciences"
      },
      {
        label: "CONNECTED HEALTHCARE CONTINUUM",
        title: "Bridge virtual telemetry and inpatient clinics into a synchronized care continuum.",
        description: "Create seamless care transitions between digital front doors, ambulatory clinics, and home health settings with unified patient intelligence.",
        iconKey: "network",
        route: "/industries/healthcare-life-sciences"
      }
    ]
  },
  banking: {
    heading: "How to reinvent banking",
    images: [bankingCustomerExperienceImg, bankingComplianceImg],
    cards: [
      {
        label: "DIGITAL CUSTOMER EXPERIENCE",
        title: "Deliver hyper-personalized banking journeys that elevate customer retention.",
        description: "Create tailored financial experiences with AI-powered recommendation engines, conversational banking assistants, and omnichannel self-service.",
        iconKey: "digitalExperience",
        route: "/industries/banking-financial-services"
      },
      {
        label: "RISK & FRAUD MANAGEMENT",
        title: "Proactively identify and neutralize transaction risks with autonomous intelligence.",
        description: "Deploy sub-millisecond fraud detection, automated AML screening, and predictive credit risk modeling to protect financial institutional assets.",
        iconKey: "risk",
        route: "/industries/banking-financial-services"
      },
      {
        label: "BANKING OPERATIONS",
        title: "Automate complex core workflows and reduce overhead with cognitive orchestration.",
        description: "Streamline loan origination, trade reconciliation, and account servicing with end-to-end intelligent automation and straight-through processing.",
        iconKey: "bankingOps",
        route: "/industries/banking-financial-services"
      },
      {
        label: "WEALTH MANAGEMENT",
        title: "Provide institutional-grade advisory and portfolio insights powered by predictive AI.",
        description: "Empower wealth advisors with generative research summaries, automated rebalancing algorithms, and personalized client portfolio reports.",
        iconKey: "wealth",
        route: "/industries/banking-financial-services"
      },
      {
        label: "AI AND DATA PLATFORMS",
        title: "Unify fragmented banking data into compliant real-time intelligence foundations.",
        description: "Break down core banking silos to establish enterprise-grade customer data platforms, predictive feature stores, and automated governance.",
        iconKey: "aiData",
        route: "/industries/banking-financial-services"
      },
      {
        label: "REGULATORY COMPLIANCE",
        title: "Automate statutory audits and stay ahead of global financial regulations seamlessly.",
        description: "Ensure continuous adherence to Basel III/IV, GDPR, and consumer protection mandates with auditable, explainable compliance automation.",
        iconKey: "regulatory",
        route: "/industries/banking-financial-services"
      }
    ]
  },
  retail: {
    heading: "How to reinvent retail",
    images: [retailFrontlineImg, retailChannelsImg],
    cards: [
      {
        label: "OMNICHANNEL CUSTOMER ENGAGEMENT",
        title: "Deliver real-time personalized recommendations that drive conversions and brand affinity.",
        description: "Connect digital touchpoints with physical stores through context-aware mobile apps, personalized offers, and conversational commerce copilots.",
        iconKey: "digitalExperience",
        route: "/industries/retail-ecommerce"
      },
      {
        label: "DYNAMIC SUPPLY CHAIN & LOGISTICS",
        title: "Synchronize multi-node inventory and automated fulfillment with predictive demand models.",
        description: "Forecast SKU demand with machine learning, balance warehouse stocks dynamically, and reduce delivery lead times across sales channels.",
        iconKey: "supplyChain",
        route: "/industries/retail-ecommerce"
      },
      {
        label: "RETAIL MANAGED OPERATIONS",
        title: "Automate store inventory workflows and back-office reconciliations with cognitive agents.",
        description: "Eliminate repetitive retail back-office tasks, optimize staff scheduling, and streamline vendor dispute processing automatically.",
        iconKey: "managedServices",
        route: "/industries/retail-ecommerce"
      },
      {
        label: "SUSTAINABLE COMMERCE & ESG",
        title: "Optimize ethical sourcing and circular packaging to strengthen modern consumer trust.",
        description: "Track carbon footprints across retail logistics, verify ethical vendor credentials, and offer transparent sustainability information to buyers.",
        iconKey: "esg",
        route: "/industries/retail-ecommerce"
      },
      {
        label: "AI & REAL-TIME MERCHANDISING",
        title: "Harness live shopper sentiment and predictive pricing algorithms to maximize margins.",
        description: "Dynamically adjust pricing and promotions based on market demand signals, competitive inventory levels, and shopper intent models.",
        iconKey: "aiData",
        route: "/industries/retail-ecommerce"
      },
      {
        label: "CONNECTED DIGITAL MARKETPLACES",
        title: "Bridge physical storefronts with virtual marketplace ecosystems for frictionless checkout.",
        description: "Unify POS checkout, mobile self-checkout, and digital marketplace seller platforms into a single continuous transaction engine.",
        iconKey: "marketplaces",
        route: "/industries/retail-ecommerce"
      }
    ]
  },
  manufacturing: {
    heading: "How to reinvent manufacturing",
    images: [manufacturingAutomationImg, manufacturingWorkforceImg],
    cards: [
      {
        label: "SMART FACTORY AUTOMATION",
        title: "Accelerate production throughput with autonomous robotics and real-time sensory control.",
        description: "Deploy edge-connected industrial automation, robotic cell coordination, and closed-loop process optimization across assembly plants.",
        iconKey: "workforce",
        route: "/industries/manufacturing"
      },
      {
        label: "PREDICTIVE ASSET MAINTENANCE",
        title: "Eliminate costly equipment downtime using edge AI vibration and thermal telemetry.",
        description: "Predict critical machine failures before they happen with continuous sensor monitoring, anomaly detection, and automated work orders.",
        iconKey: "maintenance",
        route: "/industries/manufacturing"
      },
      {
        label: "AUTONOMOUS QUALITY INSPECTION",
        title: "Detect microscopic manufacturing defects with sub-millimeter computer vision models.",
        description: "Implement automated optical inspection on high-speed production lines to identify surface anomalies and ensure defect-free shipments.",
        iconKey: "quality",
        route: "/industries/manufacturing"
      },
      {
        label: "SUPPLY CHAIN RESILIENCE",
        title: "Mitigate tier-1 component shortages with predictive multi-tier logistics intelligence.",
        description: "Anticipate raw material lead time fluctuations, optimize safety stock thresholds, and collaborate securely with global supplier tiers.",
        iconKey: "supplyChain",
        route: "/industries/manufacturing"
      },
      {
        label: "INDUSTRIAL DATA PLATFORMS",
        title: "Unify disparate SCADA and MES telemetry into central AI-ready digital twin foundations.",
        description: "Harmonize operational technology (OT) with enterprise IT to power real-time digital factory twins and simulation environments.",
        iconKey: "aiData",
        route: "/industries/manufacturing"
      },
      {
        label: "CONNECTED OPERATOR EXCELLENCE",
        title: "Empower shop-floor engineers with augmented reality and contextual AI copilot assistance.",
        description: "Provide assembly technicians with hands-free interactive SOPs, remote expert support, and continuous safety monitoring on the floor.",
        iconKey: "workforceExcellence",
        route: "/industries/manufacturing"
      }
    ]
  },
  insurance: {
    heading: "How to reinvent insurance",
    images: [insuranceClaimsImg, insuranceComplianceImg],
    cards: [
      {
        label: "AUTONOMOUS CLAIMS PROCESSING",
        title: "Accelerate end-to-end claim settlement from days to minutes with visual AI assessment.",
        description: "Automate first notice of loss (FNOL), damage estimation via computer vision, and instant electronic payout for straightforward claims.",
        iconKey: "claims",
        route: "/industries/insurance"
      },
      {
        label: "PREDICTIVE RISK UNDERWRITING",
        title: "Refine actuarial accuracy and policy pricing using multidimensional algorithmic models.",
        description: "Incorporate telematics, geospatial data, and dynamic economic indicators into algorithmic underwriting to improve loss-ratio performance.",
        iconKey: "riskAssessment",
        route: "/industries/insurance"
      },
      {
        label: "OMNICHANNEL POLICYHOLDER CARE",
        title: "Deliver proactive, compassionate claims support through conversational AI assistance.",
        description: "Provide 24/7 empathetic conversational assistance for policy questions, status updates, and emergency roadside assistance requests.",
        iconKey: "customerExperience",
        route: "/industries/insurance"
      },
      {
        label: "ADVANCED FRAUD PREVENTION",
        title: "Uncover sophisticated syndicates and suspicious claim patterns using graph analytics.",
        description: "Detect organized fraud rings, staged incidents, and inflated billing through graph neural networks and entity resolution engines.",
        iconKey: "fraud",
        route: "/industries/insurance"
      },
      {
        label: "AI & ACTUARIAL DATA MESH",
        title: "Transform legacy policy records into high-velocity, compliance-ready predictive pipelines.",
        description: "Consolidate core policy administration systems into modern data platforms to power rapid risk modeling and predictive product design.",
        iconKey: "aiData",
        route: "/industries/insurance"
      },
      {
        label: "STATUTORY REGULATORY COMPLIANCE",
        title: "Automate Solvency II and IFRS 17 reporting with auditable, transparent AI governance.",
        description: "Streamline regulatory capital reporting, maintain auditable model lineage, and ensure strict adherence to state insurance department rules.",
        iconKey: "regulatory",
        route: "/industries/insurance"
      }
    ]
  },
  education: {
    heading: "How to reinvent education",
    images: [bankingCustomerExperienceImg, bankingComplianceImg],
    cards: [
      {
        label: "ADAPTIVE PERSONALIZED LEARNING",
        title: "Tailor individualized curriculum pathways and real-time pacing with cognitive AI tutors.",
        description: "Deliver dynamic study plans, interactive quizzes, and personalized learning pace adjustments based on individual student mastery.",
        iconKey: "adaptiveLearning",
        route: "/industries/education"
      },
      {
        label: "PREDICTIVE STUDENT SUCCESS",
        title: "Identify early academic drop-off risks and intervene proactively with student telemetry.",
        description: "Analyze learning management system engagement metrics to alert advisors before students fall behind, ensuring timely intervention.",
        iconKey: "studentAnalytics",
        route: "/industries/education"
      },
      {
        label: "INSTITUTIONAL ADMINISTRATION",
        title: "Streamline enrollment, credential verification, and grading with automated workflows.",
        description: "Eliminate manual administrative bottlenecks in admissions, financial aid processing, and transcript verification with intelligent automation.",
        iconKey: "adminAutomation",
        route: "/industries/education"
      },
      {
        label: "IMMERSIVE CONTENT DELIVERY",
        title: "Transform static textbooks into interactive, multimodal simulations and digital labs.",
        description: "Generate interactive 3D simulations, virtual laboratory environments, and contextual educational media using generative AI tools.",
        iconKey: "contentDelivery",
        route: "/industries/education"
      },
      {
        label: "AI & CAMPUS DATA PLATFORMS",
        title: "Unify student records, LMS telemetry, and research datasets into secure data lakes.",
        description: "Consolidate institutional data silos to enable advanced academic analytics, research collaboration, and sovereign campus AI services.",
        iconKey: "aiData",
        route: "/industries/education"
      },
      {
        label: "DIGITAL CAMPUS TRANSFORMATION",
        title: "Enable hybrid learning infrastructure and automated student services across faculties.",
        description: "Build future-ready connected campus ecosystems supporting seamless hybrid classroom streaming, automated attendance, and safety.",
        iconKey: "digitalTransformation",
        route: "/industries/education"
      }
    ]
  },
  logistics: {
    heading: "How to reinvent logistics",
    images: [logisticsInnovationImg, logisticsCustomerExperienceImg],
    cards: [
      {
        label: "AUTONOMOUS FLEET OPTIMIZATION",
        title: "Minimize fuel consumption and dynamic transit delays with predictive route modeling.",
        description: "Optimize long-haul and last-mile dispatching with real-time traffic, weather, and payload telemetry to reduce transport operating costs.",
        iconKey: "workforce",
        route: "/industries/logistics-supply-chain"
      },
      {
        label: "SMART WAREHOUSE AUTOMATION",
        title: "Orchestrate automated picking, AGV fleets, and pallet staging with vision systems.",
        description: "Coordinate robotic order pickers, automated storage retrieval systems (ASRS), and inventory packing with sub-second accuracy.",
        iconKey: "operations",
        route: "/industries/logistics-supply-chain"
      },
      {
        label: "PREDICTIVE FREIGHT DEMAND",
        title: "Forecast seasonal capacity constraints and carrier availability with machine learning.",
        description: "Anticipate freight volume surges, optimize deadhead miles, and match carrier contracts dynamically to secure optimal shipping rates.",
        iconKey: "supplyChain",
        route: "/industries/logistics-supply-chain"
      },
      {
        label: "END-TO-END SHIPMENT VISIBILITY",
        title: "Track high-value cargo conditions and real-time milestones via IoT telemetry networks.",
        description: "Monitor container temperature, humidity, and location continuously to prevent spoilage and meet stringent chain-of-custody standards.",
        iconKey: "network",
        route: "/industries/logistics-supply-chain"
      },
      {
        label: "AI & LOGISTICS DATA FOUNDATION",
        title: "Consolidate customs, carrier EDI, and telematics into an intelligent operational hub.",
        description: "Unify fragmented customs declarations, bill-of-lading documents, and GPS tracking into a real-time predictive visibility engine.",
        iconKey: "aiData",
        route: "/industries/logistics-supply-chain"
      },
      {
        label: "SUSTAINABLE GREEN CORRIDORS",
        title: "Reduce carbon intensity across long-haul freight through multimodal route balancing.",
        description: "Calculate Scope 3 transport emissions accurately and recommend low-carbon multimodal freight alternatives to reach ESG milestones.",
        iconKey: "esg",
        route: "/industries/logistics-supply-chain"
      }
    ]
  },
  government: {
    heading: "How to reinvent government",
    images: [governmentInnovationImg, governmentOperationalExcellenceImg],
    cards: [
      {
        label: "DIGITAL CITIZEN ENGAGEMENT",
        title: "Provide accessible, 24/7 public service portals powered by multilingual AI assistants.",
        description: "Enable citizens to access government services, permits, and documentation around the clock through intuitive conversational interfaces.",
        iconKey: "digitalExperience",
        route: "/industries/government-public-sector"
      },
      {
        label: "PREDICTIVE POLICY ANALYTICS",
        title: "Model socioeconomic impacts and public health outcomes with robust data simulations.",
        description: "Test proposed regulatory policies using demographic digital twins and econometric models to optimize public program investments.",
        iconKey: "riskAssessment",
        route: "/industries/government-public-sector"
      },
      {
        label: "PUBLIC SAFETY & CRISIS RESPONSE",
        title: "Enhance emergency response coordination with real-time geospatial incident intelligence.",
        description: "Synthesize 911 dispatch calls, traffic feeds, and disaster sensors to deploy first responders swiftly and safeguard community lives.",
        iconKey: "regulatory",
        route: "/industries/government-public-sector"
      },
      {
        label: "AGENCY OPERATIONAL EFFICIENCY",
        title: "Eliminate paper bottlenecks and streamline benefit disbursements with secure automation.",
        description: "Automate complex eligibility reviews, entitlement claims, and tax filings to ensure fast, equitable distribution of public assistance.",
        iconKey: "adminAutomation",
        route: "/industries/government-public-sector"
      },
      {
        label: "SOVEREIGN DATA INFRASTRUCTURE",
        title: "Unify cross-departmental datasets inside FedRAMP and GDPR compliant sovereign clouds.",
        description: "Establish zero-trust sovereign data repositories enabling secure inter-agency data sharing while upholding strict civil privacy laws.",
        iconKey: "aiData",
        route: "/industries/government-public-sector"
      },
      {
        label: "DIGITAL GOVERNANCE & INTEGRITY",
        title: "Prevent fraud, waste, and identity theft in entitlement programs using graph intelligence.",
        description: "Identify synthetic identity rings and fraudulent payment claims across social programs to protect critical taxpayer funds from abuse.",
        iconKey: "fraud",
        route: "/industries/government-public-sector"
      }
    ]
  },
  telecom: {
    heading: "How to reinvent telecommunications",
    images: [telecomInnovationImg, telecomOperationalExcellenceImg],
    cards: [
      {
        label: "AUTONOMOUS NETWORK SLICING",
        title: "Dynamically allocate low-latency 5G bandwidth for enterprise and industrial use cases.",
        description: "Deploy autonomous software-defined network slicing to support mission-critical IoT, autonomous vehicles, and private enterprise networks.",
        iconKey: "network",
        route: "/industries/telecommunications"
      },
      {
        label: "PREDICTIVE CUSTOMER RETENTION",
        title: "Anticipate subscriber churn and deliver personalized retention offers in real time.",
        description: "Analyze call drop trends, data usage anomalies, and customer support history to proactively resolve issues before cancellations occur.",
        iconKey: "digitalExperience",
        route: "/industries/telecommunications"
      },
      {
        label: "ZERO-TOUCH TOWER MAINTENANCE",
        title: "Predict cell site hardware failures and dispatch field engineers before outages occur.",
        description: "Monitor base station radio frequency metrics, power consumption, and thermal telemetry with edge AI to eliminate coverage blackouts.",
        iconKey: "maintenance",
        route: "/industries/telecommunications"
      },
      {
        label: "COGNITIVE CUSTOMER CARE",
        title: "Resolve billing and connectivity inquiries autonomously via empathetic AI voice agents.",
        description: "Empower subscribers with instant conversational diagnostics, billing explanations, and eSIM activations without waiting on hold.",
        iconKey: "customerExperience",
        route: "/industries/telecommunications"
      },
      {
        label: "AI & TELEMETRY DATA FABRIC",
        title: "Process billions of streaming network CDRs per second with distributed edge analytics.",
        description: "Consolidate massive call detail records (CDRs) and packet telemetry into high-throughput analytical fabrics for real-time optimization.",
        iconKey: "aiData",
        route: "/industries/telecommunications"
      },
      {
        label: "NEXT-GEN 5G & EDGE ECOSYSTEMS",
        title: "Monetize multi-access edge computing (MEC) applications for smart cities and enterprises.",
        description: "Partner with cloud providers and enterprise clients to host low-latency edge AI workloads directly on carrier infrastructure.",
        iconKey: "digitalTransformation",
        route: "/industries/telecommunications"
      }
    ]
  },
  energy: {
    heading: "How to reinvent energy & utilities",
    images: [energyInnovationImg, energyOperationalExcellenceImg],
    cards: [
      {
        label: "SMART GRID LOAD BALANCING",
        title: "Balance renewable generation and grid distribution with sub-second probabilistic AI.",
        description: "Harmonize intermittent solar and wind outputs with fluctuating consumer demand curves to maintain grid frequency and avoid blackouts.",
        iconKey: "operations",
        route: "/industries/energy-utilities"
      },
      {
        label: "CRITICAL INFRASTRUCTURE DEFENSE",
        title: "Prevent turbine and transmission failures using acoustic, thermal, and sensor telemetry.",
        description: "Monitor high-voltage transformers, substations, and wind turbine gearboxes with continuous sensor diagnostics to avert costly outages.",
        iconKey: "maintenance",
        route: "/industries/energy-utilities"
      },
      {
        label: "CARBON & ESG EMISSION TRACKING",
        title: "Measure Scope 1-3 greenhouse gas emissions with auditable, sensor-driven telemetry.",
        description: "Track emissions across generation plants, transmission networks, and supply chains to verify compliance with strict environmental regulations.",
        iconKey: "esg",
        route: "/industries/energy-utilities"
      },
      {
        label: "DECENTRALIZED VIRTUAL POWER PLANTS",
        title: "Orchestrate distributed battery storage and solar microgrids into reliable reserve power.",
        description: "Aggregate distributed rooftop solar, residential batteries, and commercial EV fleets into dynamic virtual power generation reserves.",
        iconKey: "network",
        route: "/industries/energy-utilities"
      },
      {
        label: "AI-POWERED RESOURCE EXPLORATION",
        title: "Accelerate subsurface geothermal and clean energy exploration with seismic machine learning.",
        description: "Analyze complex geophysical seismic datasets with deep neural networks to locate optimal renewable energy reservoir locations.",
        iconKey: "aiData",
        route: "/industries/energy-utilities"
      },
      {
        label: "INTELLIGENT UTILITY OPERATIONS",
        title: "Streamline billing, field service dispatch, and customer conservation programs at scale.",
        description: "Automate smart meter reconciliation, optimize emergency truck rolls during storms, and provide actionable energy-saving consumer tips.",
        iconKey: "adminAutomation",
        route: "/industries/energy-utilities"
      }
    ]
  },
  realestate: {
    heading: "How to reinvent real estate",
    images: [realEstateInnovationImg, realEstateCustomerExperienceImg],
    cards: [
      {
        label: "ALGORITHMIC ASSET VALUATION",
        title: "Appraise commercial and residential portfolios with real-time spatial and market analytics.",
        description: "Synthesize transaction comps, neighborhood demographic trends, and transit access metrics to produce reliable asset appraisals.",
        iconKey: "riskAssessment",
        route: "/industries/real-estate"
      },
      {
        label: "AUTONOMOUS BUILDING TELEMETRY",
        title: "Reduce HVAC energy consumption and carbon footprints with cognitive BMS optimization.",
        description: "Connect building management systems (BMS) with environmental sensors to dynamically modulate heating, cooling, and lighting schedules.",
        iconKey: "operations",
        route: "/industries/real-estate"
      },
      {
        label: "PREDICTIVE TENANT RETENTION",
        title: "Anticipate lease renewals and optimize amenity investments through space utilization telemetry.",
        description: "Analyze turnstile badge data and tenant satisfaction sentiment to proactively address lease turnover risks and negotiate terms.",
        iconKey: "digitalExperience",
        route: "/industries/real-estate"
      },
      {
        label: "INTELLIGENT DEAL UNDERWRITING",
        title: "Automate zoning compliance, property due diligence, and financial waterfall modeling.",
        description: "Extract lease terms from thousands of tenant contracts automatically to model net operating income and accelerate property acquisitions.",
        iconKey: "regulatory",
        route: "/industries/real-estate"
      },
      {
        label: "AI & SPATIAL DATA PLATFORMS",
        title: "Consolidate GIS layers, title deeds, and leasing data into central investment dashboards.",
        description: "Break down real estate data silos to give asset managers single-pane-of-glass visibility into regional portfolio performance metrics.",
        iconKey: "aiData",
        route: "/industries/real-estate"
      },
      {
        label: "CONNECTED SMART PRECINCTS",
        title: "Deliver frictionless keyless access, tenant apps, and digital concierge experiences.",
        description: "Provide tenants with seamless mobile credentials, visitor management, conference room reservation, and amenity services in one app.",
        iconKey: "network",
        route: "/industries/real-estate"
      }
    ]
  }
};

const DEFAULT_DATA = {
  heading: "How to reinvent your industry",
  cards: [
    {
      label: "DIGITAL TRANSFORMATION",
      title: "Transform enterprise operations with AI-powered innovation and digital architectures.",
      description: "Leverage cutting-edge AI to drive digital transformation and create competitive advantage across your industry.",
      iconKey: "digitalTransformation",
      route: "/industries/overview"
    },
    {
      label: "AI IMPLEMENTATION",
      title: "Deploy specialized AI models tailored to mission-critical business challenges.",
      description: "Deploy AI solutions that address your specific industry challenges and deliver measurable business outcomes.",
      iconKey: "aiData",
      route: "/industries/overview"
    },
    {
      label: "DATA STRATEGY & MESH",
      title: "Unify fragmented data silos into high-performance analytical intelligence layers.",
      description: "Develop comprehensive data strategies that enable AI adoption and drive innovation across your organization.",
      iconKey: "targetGeneric",
      route: "/industries/overview"
    },
    {
      label: "TALENT & WORKFORCE COPILOTS",
      title: "Empower enterprise teams with specialized domain copilots and automated workflows.",
      description: "Develop organizational AI capabilities and cultivate an agile, innovation-first operating culture.",
      iconKey: "workforce",
      route: "/industries/overview"
    },
    {
      label: "MANAGED SERVICE DELIVERY",
      title: "Achieve continuous operational excellence through proactive AI infrastructure monitoring.",
      description: "Ensure mission-critical system reliability with 24/7 intelligent automation and performance optimization.",
      iconKey: "managedServices",
      route: "/industries/overview"
    },
    {
      label: "REGULATORY GOVERNANCE",
      title: "Ensure responsible AI compliance and ethical auditability across global standards.",
      description: "Establish transparent AI governance models that guarantee data privacy, safety, and regulatory compliance.",
      iconKey: "regulatory",
      route: "/industries/overview"
    }
  ]
};

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "70px 5% 90px",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)", 
          fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  heading: {
    maxWidth: "1200px",
    margin: "0 auto 32px",
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
    fontWeight: 600,
    letterSpacing: "-0.015em",
  },

  columns: {
    maxWidth: "1200px",
    margin: "0 auto",
    columnCount: 2,
    columnGap: "18px",
  },
  item: {
    breakInside: "avoid",
    marginBottom: "18px",
  },

  card: {
    position: "relative",
    backgroundColor: "#141414",
    border: "1px solid rgba(255,255,255,0.07)",
    padding: "26px 24px 28px",
    boxSizing: "border-box",
    cursor: "pointer",
    minHeight: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
  },

  topRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "18px",
  },
  dash: {
    width: "32px",
    height: "3px",
    backgroundColor: "#E11D48",
  },
  iconBadge: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "1px solid rgba(225,29,72,0.5)",
    backgroundColor: "rgba(225,29,72,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#E11D48",
    flexShrink: 0,
  },

  label: {
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.85)",
    marginBottom: "14px",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.12rem",
    fontWeight: 600,
    lineHeight: 1.35,
    margin: 0,
    marginBottom: "14px",
    color: "#FFFFFF",
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)",
    margin: "0 0 16px 0",
    overflow: "hidden",
  },

  footerRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  learnMore: {
    fontFamily: FONT,
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#FFFFFF",
  },
  arrowBox: {
    width: "22px",
    height: "22px",
    backgroundColor: "#E11D48",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px",
  },

  imgWrap: {
    overflow: "hidden",
    borderRadius: "10px",
  },
  imgEl: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  },
};

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6h8M10 6L6.5 2.5M10 6L6.5 9.5"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TextCard({ card, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = ICON_MAP[card.iconKey] || ICON_MAP.targetGeneric;

  return (
    <motion.div
      style={{
        ...styles.card,
        borderColor: isHovered
          ? "rgba(225,29,72,0.45)"
          : "rgba(255,255,255,0.07)",
        backgroundColor: isHovered ? "#180d11" : "#141414",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      <div>
        <div style={styles.topRow}>
          <motion.div
            style={styles.dash}
            animate={{ width: isHovered ? "52px" : "32px" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <div style={styles.iconBadge}>
            <Icon size={17} />
          </div>
        </div>

        <div style={styles.label}>{card.label}</div>
        <h3 style={styles.title}>{card.title}</h3>

        {/* Short description revealed on hover */}
        <AnimatePresence>
          {isHovered && card.description && (
            <motion.p
              style={styles.desc}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 10 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {card.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div style={styles.footerRow}>
        <span style={styles.learnMore}>Learn more</span>
        <motion.span
          style={styles.arrowBox}
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowIcon />
        </motion.span>
      </div>
    </motion.div>
  );
}

function ImageBlock({ src }) {
  return (
    <motion.div
      style={styles.imgWrap}
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt=""
        style={styles.imgEl}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function HowToReinvent() {
  const location = useLocation();
  const [industryData, setIndustryData] = useState(DEFAULT_DATA);

  useEffect(() => {
    const path = location.pathname;
    let data = DEFAULT_DATA;

    if (path.includes("healthcare-life-sciences") || path.includes("healthcare")) {
      data = INDUSTRY_DATA.healthcare;
    } else if (path.includes("banking-financial-services") || path.includes("banking")) {
      data = INDUSTRY_DATA.banking;
    } else if (path.includes("retail-ecommerce") || path.includes("retail")) {
      data = INDUSTRY_DATA.retail;
    } else if (path.includes("manufacturing")) {
      data = INDUSTRY_DATA.manufacturing;
    } else if (path.includes("insurance")) {
      data = INDUSTRY_DATA.insurance;
    } else if (path.includes("education")) {
      data = INDUSTRY_DATA.education;
    } else if (path.includes("logistics-supply-chain") || path.includes("logistics")) {
      data = INDUSTRY_DATA.logistics;
    } else if (path.includes("government-public-sector") || path.includes("government")) {
      data = INDUSTRY_DATA.government;
    } else if (path.includes("telecommunications") || path.includes("telecom")) {
      data = INDUSTRY_DATA.telecom;
    } else if (path.includes("energy-utilities") || path.includes("energy")) {
      data = INDUSTRY_DATA.energy;
    } else if (path.includes("real-estate") || path.includes("realestate")) {
      data = INDUSTRY_DATA.realestate;
    }

    setIndustryData(data);
  }, [location.pathname]);

  const cards = industryData.cards || [];
  const images = location.pathname.includes("government-public-sector") || location.pathname.includes("government")
    ? [governmentInnovationImg, governmentOperationalExcellenceImg]
    : location.pathname.includes("telecommunications") || location.pathname.includes("telecom")
      ? [telecomInnovationImg, telecomOperationalExcellenceImg]
      : location.pathname.includes("real-estate") || location.pathname.includes("realestate")
        ? [realEstateInnovationImg, realEstateCustomerExperienceImg]
          : location.pathname.includes("energy-utilities") || location.pathname.includes("energy")
            ? [energyInnovationImg, energyOperationalExcellenceImg]
            : location.pathname.includes("automotive")
              ? [automotiveInnovationImg, automotiveOperationalExcellenceImg]
              : location.pathname.includes("hospitality-travel") || location.pathname.includes("hospitality")
                ? [hospitalityInnovationImg, hospitalityOperationalExcellenceImg]
                : location.pathname.includes("media-entertainment")
                  ? [mediaInnovationImg, mediaCustomerExperienceImg]
                  : location.pathname.includes("professional-services")
                    ? [professionalServicesInnovationImg, professionalServicesOperationalExcellenceImg]
            : location.pathname.includes("logistics")
              ? [logisticsInnovationImg, logisticsCustomerExperienceImg]
              : industryData.images || [];

  const flow = [];
  if (cards.length > 0) {
    flow.push({ type: "text", data: cards[0], idx: 0 });
    if (images.length > 0) flow.push({ type: "img", data: images[0] });
    if (cards.length > 1) flow.push({ type: "text", data: cards[1], idx: 1 });
    if (cards.length > 2) flow.push({ type: "text", data: cards[2], idx: 2 });
    if (cards.length > 3) flow.push({ type: "text", data: cards[3], idx: 3 });
    if (cards.length > 4) flow.push({ type: "text", data: cards[4], idx: 4 });
    if (images.length > 1) flow.push({ type: "img", data: images[1] });
    if (cards.length > 5) flow.push({ type: "text", data: cards[5], idx: 5 });
  }

  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {industryData.heading}
      </motion.h2>

      <div style={styles.columns}>
        {flow.map((entry, i) => (
          <div style={styles.item} key={i}>
            {entry.type === "text" ? (
              <TextCard card={entry.data} index={entry.idx} />
            ) : (
              <ImageBlock src={entry.data} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}