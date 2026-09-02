import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
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

const FONT = '"Geist", sans-serif';

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
    cards: [
      {
        label: "FRONTLINE CLINICAL WORKFORCE",
        title: "Empower your frontline clinicians for faster, safer patient care.",
        description: "Enable healthcare professionals with AI-powered clinical decision support, real-time patient data access, and automated documentation to reduce administrative burden.",
        iconKey: "workforce",
        route: "/industries/healthcare-life-sciences/frontline-clinical-workforce"
      },
      {
        label: "TRANSFORM OPERATIONS & SUPPLY CHAIN",
        title: "Transform operations to create seamless patient experiences in healthcare.",
        description: "Optimize hospital operations with AI-driven resource allocation, predictive patient flow management, and automated supply chain logistics.",
        iconKey: "operations",
        route: "/industries/healthcare-life-sciences/transform-operations-supply-chain"
      },
      {
        label: "HEALTHCARE MANAGED SERVICES",
        title: "Eliminate repetitive tasks to boost efficiency and clinician focus.",
        description: "Automate administrative tasks, billing processes, and compliance monitoring so clinicians can focus on patient care.",
        iconKey: "managedServices",
        route: "/industries/healthcare-life-sciences/healthcare-managed-services"
      },
      {
        label: "HEALTHCARE ESG & SUSTAINABILITY",
        title: "Enhance outcomes and community trust by embedding sustainability.",
        description: "Reduce healthcare's environmental footprint while improving community health outcomes through sustainable practices.",
        iconKey: "esg",
        route: "/industries/healthcare-life-sciences/healthcare-esg-sustainability"
      },
      {
        label: "AI AND DATA",
        title: "Prepare your data for the new generative AI era.",
        description: "Build robust data infrastructure, ensure interoperability, and implement AI-ready data governance for healthcare organizations.",
        iconKey: "aiData",
        route: "/industries/healthcare-life-sciences/ai-and-data"
      },
      {
        label: "HEALTHCARE ACROSS THE NETWORK",
        title: "Bridge digital and in-person care for stronger patient connections.",
        description: "Create seamless omnichannel healthcare experiences with telemedicine, remote monitoring, and integrated patient engagement.",
        iconKey: "network",
        route: "/industries/healthcare-life-sciences/healthcare-across-network"
      },
    ],
    images: [
      "https://picsum.photos/seed/healthcare-reinvent-1/700/500",
      "https://picsum.photos/seed/healthcare-reinvent-2/700/500",
    ]
  },
  banking: {
    heading: "How to reinvent banking",
    cards: [
      {
        label: "DIGITAL CUSTOMER EXPERIENCE",
        title: "Create personalized banking experiences that customers love.",
        description: "Transform customer interactions with AI-powered personalization, intelligent chatbots, and seamless omnichannel experiences.",
        iconKey: "digitalExperience",
        route: "/industries/banking-financial-services/digital-customer-experience"
      },
      {
        label: "RISK & FRAUD MANAGEMENT",
        title: "Proactively identify and mitigate risks with AI-powered intelligence.",
        description: "Detect fraud in real-time, automate compliance monitoring, and optimize risk assessment with advanced analytics.",
        iconKey: "risk",
        route: "/industries/banking-financial-services/risk-fraud-management"
      },
      {
        label: "BANKING OPERATIONS",
        title: "Streamline operations and reduce costs with intelligent automation.",
        description: "Automate back-office processes, optimize workflows, and improve operational efficiency with AI-driven solutions.",
        iconKey: "bankingOps",
        route: "/industries/banking-financial-services/banking-operations"
      },
      {
        label: "WEALTH MANAGEMENT",
        title: "Deliver sophisticated wealth management with AI-powered insights.",
        description: "Enhance advisory services with predictive analytics, personalized portfolio optimization, and market intelligence.",
        iconKey: "wealth",
        route: "/industries/banking-financial-services/wealth-management"
      },
      {
        label: "AI AND DATA",
        title: "Transform data into actionable intelligence for better decisions.",
        description: "Implement AI-ready data architectures, ensure data quality, and enable real-time analytics for strategic advantage.",
        iconKey: "aiData",
        route: "/industries/banking-financial-services/ai-and-data"
      },
      {
        label: "REGULATORY COMPLIANCE",
        title: "Stay ahead of regulations with intelligent compliance solutions.",
        description: "Automate regulatory reporting, ensure KYC/AML compliance, and adapt to evolving regulatory requirements.",
        iconKey: "regulatory",
        route: "/industries/banking-financial-services/regulatory-compliance"
      },
    ],
    images: [
      "https://picsum.photos/seed/banking-reinvent-1/700/500",
      "https://picsum.photos/seed/banking-reinvent-2/700/500",
    ]
  },
  retail: {
    heading: "How to reinvent retail",
    cards: [
      {
        label: "FRONTLINE WORKFORCE",
        title: "Empower your frontline workforce for enhanced customer engagement.",
        description: "Equip store teams with AI-powered tools for real-time inventory access, personalized recommendations, and efficient customer service.",
        iconKey: "workforce",
        route: "/industries/retail-ecommerce/frontline-workforce"
      },
      {
        label: "RETAIL ESG & SUSTAINABILITY",
        title: "Enhance profitability and market position by embedding sustainability.",
        description: "Optimize supply chains, reduce waste, and build consumer trust through sustainable retail practices powered by AI.",
        iconKey: "esg",
        route: "/industries/retail-ecommerce/retail-esg-sustainability"
      },
      {
        label: "AI AND DATA",
        title: "Prepare your data for the new generative AI era.",
        description: "Transform retail data into a strategic asset with robust data infrastructure and governance for AI applications.",
        iconKey: "aiData",
        route: "/industries/retail-ecommerce/ai-and-data"
      },
      {
        label: "TRANSFORM MARKETING, MERCH & SUPPLY CHAIN",
        title: "Transform operations to create seamless customer experiences.",
        description: "Integrate AI across marketing, merchandising, and supply chain for unified retail operations and consistent experiences.",
        iconKey: "operations",
        route: "/industries/retail-ecommerce/transform-operations"
      },
      {
        label: "RETAIL MANAGED SERVICES",
        title: "Eliminate repetitive tasks to boost efficiency and employee focus.",
        description: "Automate routine retail operations from inventory reconciliation to customer support with AI-powered managed services.",
        iconKey: "managedServices",
        route: "/industries/retail-ecommerce/retail-managed-services"
      },
      {
        label: "RETAIL ACROSS THE MARKETPLACES",
        title: "Bridge digital and physical retail for stronger customer connections.",
        description: "Create seamless shopping experiences across online, mobile, and in-store channels with unified commerce solutions.",
        iconKey: "marketplaces",
        route: "/industries/retail-ecommerce/retail-marketplaces"
      },
    ],
    images: [
      "https://picsum.photos/seed/retail-reinvent-1/700/500",
      "https://picsum.photos/seed/retail-reinvent-2/700/500",
    ]
  },
  manufacturing: {
    heading: "How to reinvent manufacturing",
    cards: [
      {
        label: "SMART FACTORY AUTOMATION",
        title: "Transform manufacturing with intelligent automation and robotics.",
        description: "Deploy AI-powered robots, automated quality control, and intelligent process optimization for increased productivity.",
        iconKey: "operations",
        route: "/industries/manufacturing/smart-factory-automation"
      },
      {
        label: "PREDICTIVE MAINTENANCE",
        title: "Eliminate unplanned downtime with AI-powered maintenance.",
        description: "Predict equipment failures before they occur and optimize maintenance schedules with machine learning algorithms.",
        iconKey: "maintenance",
        route: "/industries/manufacturing/predictive-maintenance"
      },
      {
        label: "QUALITY CONTROL & INSPECTION",
        title: "Ensure product quality with AI-powered inspection systems.",
        description: "Implement computer vision and deep learning for automated defect detection and quality assurance.",
        iconKey: "quality",
        route: "/industries/manufacturing/quality-control"
      },
      {
        label: "SUPPLY CHAIN OPTIMIZATION",
        title: "Build resilient supply chains with predictive intelligence.",
        description: "Optimize inventory, predict disruptions, and ensure on-time delivery with AI-driven supply chain solutions.",
        iconKey: "supplyChain",
        route: "/industries/manufacturing/supply-chain-optimization"
      },
      {
        label: "AI AND DATA",
        title: "Unlock manufacturing intelligence with AI-ready data systems.",
        description: "Transform manufacturing data into actionable insights for process optimization and strategic decision-making.",
        iconKey: "aiData",
        route: "/industries/manufacturing/ai-and-data"
      },
      {
        label: "WORKFORCE EXCELLENCE",
        title: "Empower your manufacturing workforce with AI assistance.",
        description: "Enable workers with AI-powered tools for training, safety monitoring, and real-time decision support.",
        iconKey: "workforceExcellence",
        route: "/industries/manufacturing/workforce-excellence"
      },
    ],
    images: [
      "https://picsum.photos/seed/manufacturing-reinvent-1/700/500",
      "https://picsum.photos/seed/manufacturing-reinvent-2/700/500",
    ]
  },
  insurance: {
    heading: "How to reinvent insurance",
    cards: [
      {
        label: "DIGITAL CLAIMS PROCESSING",
        title: "Streamline claims with AI-powered automation and intelligence.",
        description: "Automate claims intake, validation, and processing with intelligent document processing and fraud detection systems.",
        iconKey: "claims",
        route: "/industries/insurance/digital-claims-processing"
      },
      {
        label: "RISK ASSESSMENT & UNDERWRITING",
        title: "Transform underwriting with predictive risk analytics.",
        description: "Leverage AI for more accurate risk assessment, personalized pricing, and faster underwriting decisions.",
        iconKey: "riskAssessment",
        route: "/industries/insurance/risk-assessment-underwriting"
      },
      {
        label: "CUSTOMER EXPERIENCE",
        title: "Deliver personalized insurance experiences at scale.",
        description: "Create tailored policy recommendations, proactive engagement, and seamless omnichannel customer journeys.",
        iconKey: "customerExperience",
        route: "/industries/insurance/customer-experience"
      },
      {
        label: "FRAUD DETECTION",
        title: "Protect your business with AI-powered fraud prevention.",
        description: "Detect suspicious patterns, prevent fraudulent claims, and reduce losses with advanced anomaly detection.",
        iconKey: "fraud",
        route: "/industries/insurance/fraud-detection"
      },
      {
        label: "AI AND DATA",
        title: "Unlock insurance intelligence with AI-ready data systems.",
        description: "Build robust data infrastructure for predictive modeling, customer insights, and strategic decision-making.",
        iconKey: "aiData",
        route: "/industries/insurance/ai-and-data"
      },
      {
        label: "REGULATORY COMPLIANCE",
        title: "Stay ahead of regulatory requirements with intelligent compliance.",
        description: "Automate compliance monitoring, reporting, and adapt to evolving regulatory landscapes with AI.",
        iconKey: "regulatory",
        route: "/industries/insurance/regulatory-compliance"
      },
    ],
    images: [
      "https://picsum.photos/seed/insurance-reinvent-1/700/500",
      "https://picsum.photos/seed/insurance-reinvent-2/700/500",
    ]
  },
  education: {
    heading: "How to reinvent education",
    cards: [
      {
        label: "ADAPTIVE LEARNING",
        title: "Personalize learning journeys with AI-powered adaptation.",
        description: "Deliver personalized learning experiences that adapt to each student's pace, style, and comprehension level.",
        iconKey: "adaptiveLearning",
        route: "/industries/education/adaptive-learning"
      },
      {
        label: "STUDENT ANALYTICS",
        title: "Predict and improve student outcomes with data intelligence.",
        description: "Identify at-risk students early, optimize interventions, and improve retention with predictive analytics.",
        iconKey: "studentAnalytics",
        route: "/industries/education/student-analytics"
      },
      {
        label: "ADMINISTRATIVE AUTOMATION",
        title: "Streamline education administration with intelligent automation.",
        description: "Automate scheduling, admissions, grading, and other administrative tasks with AI-powered solutions.",
        iconKey: "adminAutomation",
        route: "/industries/education/administrative-automation"
      },
      {
        label: "CONTENT DELIVERY",
        title: "Transform learning content with AI-powered delivery.",
        description: "Create engaging, interactive, and personalized learning materials with generative AI and content optimization.",
        iconKey: "contentDelivery",
        route: "/industries/education/content-delivery"
      },
      {
        label: "AI AND DATA",
        title: "Prepare education data for the AI era.",
        description: "Build data infrastructure for learning analytics, student insights, and educational research.",
        iconKey: "aiData",
        route: "/industries/education/ai-and-data"
      },
      {
        label: "DIGITAL TRANSFORMATION",
        title: "Transform educational institutions with digital innovation.",
        description: "Create seamless digital experiences for students, faculty, and staff across all touchpoints.",
        iconKey: "digitalTransformation",
        route: "/industries/education/digital-transformation"
      },
    ],
    images: [
      "https://picsum.photos/seed/education-reinvent-1/700/500",
      "https://picsum.photos/seed/education-reinvent-2/700/500",
    ]
  }
};

// Default/fallback data
const DEFAULT_DATA = {
  heading: "How to reinvent your industry",
  cards: [
    {
      label: "DIGITAL TRANSFORMATION",
      title: "Transform your organization with AI-powered innovation.",
      description: "Leverage cutting-edge AI to drive digital transformation and create competitive advantage across your industry.",
      iconKey: "digitalTransformation",
      route: "/industries/overview"
    },
    {
      label: "AI IMPLEMENTATION",
      title: "Implement AI solutions tailored to your industry needs.",
      description: "Deploy AI solutions that address your specific industry challenges and deliver measurable business outcomes.",
      iconKey: "aiData",
      route: "/industries/overview"
    },
    {
      label: "DATA STRATEGY",
      title: "Build a data-driven culture with AI-ready infrastructure.",
      description: "Develop comprehensive data strategies that enable AI adoption and drive innovation across your organization.",
      iconKey: "targetGeneric",
      route: "/industries/overview"
    },
    {
      label: "TALENT & CULTURE",
      title: "Build AI capabilities and foster a culture of innovation.",
      description: "Develop your workforce capabilities and create a culture that embraces AI-driven transformation.",
      iconKey: "workforce",
      route: "/industries/overview"
    },
    {
      label: "CUSTOMER INNOVATION",
      title: "Transform customer experiences with AI-powered solutions.",
      description: "Create personalized, intelligent experiences that delight customers and drive business growth.",
      iconKey: "customerExperience",
      route: "/industries/overview"
    },
    {
      label: "OPERATIONAL EXCELLENCE",
      title: "Achieve operational excellence with AI-driven optimization.",
      description: "Optimize operations, reduce costs, and improve efficiency with intelligent automation and analytics.",
      iconKey: "operations",
      route: "/industries/overview"
    },
  ],
  images: [
    "https://picsum.photos/seed/default-reinvent-1/700/500",
    "https://picsum.photos/seed/default-reinvent-2/700/500",
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
    fontWeight: 700,
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
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.85)",
    marginBottom: "14px",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.15rem",
    fontWeight: 700,
    lineHeight: 1.35,
    margin: 0,
    marginBottom: "22px",
    color: "#FFFFFF",
  },

  footerRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  learnMore: {
    fontFamily: FONT,
    fontSize: "13.5px",
    fontWeight: 700,
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
  const Icon = ICON_MAP[card.iconKey] || ICON_MAP.targetGeneric;

  return (
    <motion.div
      style={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        y: -4,
        borderColor: "rgba(225,29,72,0.35)",
        backgroundColor: "#170d10",
      }}
    >
      <div style={styles.topRow}>
        <motion.div
          style={styles.dash}
          whileHover={{ width: "52px" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
        <div style={styles.iconBadge}>
          <Icon size={17} />
        </div>
      </div>

      <div style={styles.label}>{card.label}</div>
      <h3 style={styles.title}>{card.title}</h3>

      <div style={styles.footerRow}>
        <span style={styles.learnMore}>Learn more</span>
        <motion.span
          style={styles.arrowBox}
          whileHover={{ x: 3 }}
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
    }

    setIndustryData(data);
  }, [location.pathname]);

  const cards = industryData.cards || [];
  const images = industryData.images || [];

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