import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CAPABILITY_SERVICES_DATA } from "../../data/capabilities";
import RepresentativeCTA from "../ui/RepresentativeCTA";
import { getCapabilityUseCaseIcon } from "../../data/capabilities/useCaseIcons";
import { getCapabilityInsights } from "../../data/capabilities/capabilityInsightsMap";
import enterpriseItOpsIcon from "../../assets/capabilities/enterprise-it-ops.svg";
import customerExperienceIcon from "../../assets/capabilities/customer-experience.svg";
import dataAnalyticsIcon from "../../assets/capabilities/data-analytics.svg";

import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const iconMap = {
  cpu: enterpriseItOpsIcon,
  users: customerExperienceIcon,
  database: dataAnalyticsIcon
};

function RibbonGraphic() {
  const bars = Array.from({ length: 60 }, (_, i) => i);
  const cx = 520;
  const cy = 300;
  const baseAngle = -70;
  const angleStep = 2.6;

  return (
    <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block", opacity: 0.85, mixBlendMode: "screen" }}>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#BE123C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#881337" stopOpacity="0" />
        </linearGradient>
      </defs>
      {bars.map((i) => {
        const rad = (baseAngle + i * angleStep) * (Math.PI / 180);
        const len = 200 + Math.sin(i * 0.4) * 120 + i * 2;
        const x2 = cx + Math.cos(rad) * len;
        const y2 = cy + Math.sin(rad) * len;
        return (
          <motion.line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke="url(#barGrad)" strokeWidth="6" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 + i * 0.008, ease: "easeOut" }} />
        );
      })}
    </svg>
  );
}

function InsightTwoFaceCard({ item, index }) {
  const targetUrl = item.url || "https://devopstrio.co.uk/insights";

  return (
    <motion.a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      style={{
        flex: "0 0 380px",
        position: "relative",
        height: "440px",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "#0A0A0A",
        boxSizing: "border-box",
        textDecoration: "none",
        display: "block",
      }}
    >
      {/* 1. Default Image Face (Dark Photo + Card Typo) */}
      <motion.div
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "26px",
            right: "26px",
            bottom: "26px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#FDA4AF",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {item.tag}
          </div>
          <h3
            style={{
              fontFamily: FONT,
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.25,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {item.title}
          </h3>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "14px",
              fontFamily: FONT,
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            Reveal Insights
            <ArrowRight size={15} strokeWidth={2.2} />
          </div>
        </div>
      </motion.div>

      {/* 2. Hover Face (Solid White Reveal Template) */}
      <motion.div
        variants={{
          rest: { opacity: 0, pointerEvents: "none" },
          hover: { opacity: 1, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          padding: "36px 30px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#E11D48",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          {item.tag}
        </div>
        <h3
          style={{
            fontFamily: FONT,
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#0A0A0A",
            lineHeight: 1.25,
            margin: "0 0 12px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontFamily: FONT,
            fontSize: "13.5px",
            color: "#3F3F46",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {item.desc}
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "18px",
            fontFamily: FONT,
            fontSize: "13.5px",
            fontWeight: 600,
            color: "#E11D48",
          }}
        >
          Read Full Article
          <ArrowRight size={15} strokeWidth={2.2} />
        </div>
      </motion.div>
    </motion.a>
  );
}


/**
 * Tailored enterprise CTA configuration for every AI Capability / Service subpage.
 */
const CAPABILITY_CTA_CONFIG = {
  "generative-ai": {
    title: "Ready to Scale Generative Intelligence with",
    highlightText: "Custom Foundational Models?",
    description: "Deploy enterprise LLMs, multi-modal reasoning engines, and private VPC inference with strict compliance guardrails.",
    primaryBtnText: "SCHEDULE GENAI CONSULTATION",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE AI CAPABILITIES",
    secondaryBtnTo: "/capabilities/overview"
  },
  "ai-agents": {
    title: "Ready to Deploy Autonomous",
    highlightText: "Enterprise AI Agent Swarms?",
    description: "Automate complex reasoning, deterministic multi-agent collaboration, and human-in-the-loop workflows across your systems.",
    primaryBtnText: "DEPLOY AGENT SWARM",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "VIEW AGENT ARCHITECTURE",
    secondaryBtnTo: "/capabilities/overview"
  },
  "enterprise-ai-development": {
    title: "Ready to Build Bespoke",
    highlightText: "Enterprise AI Platforms?",
    description: "Architect custom neural architectures, low-latency microservices, and private AI infrastructure tailored to your business.",
    primaryBtnText: "START AI ENGAGEMENT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ARCHITECTURE",
    secondaryBtnTo: "/capabilities/overview"
  },
  "machine-learning": {
    title: "Accelerate Predictive Accuracy with",
    highlightText: "Production Machine Learning?",
    description: "Build, train, and deploy high-throughput ML pipelines with continuous model evaluation, drift detection, and automated retraining.",
    primaryBtnText: "REQUEST ML AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ML PIPELINES",
    secondaryBtnTo: "/capabilities/overview"
  },
  "nlp": {
    title: "Unlock Unstructured Data with",
    highlightText: "Advanced Natural Language Processing?",
    description: "Transform multilingual enterprise documents, conversational sentiment, and domain text into structured actionable intelligence.",
    primaryBtnText: "REQUEST NLP DEMO",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE LANGUAGE MODELS",
    secondaryBtnTo: "/capabilities/overview"
  },
  "computer-vision": {
    title: "Transform Visual Perception with",
    highlightText: "Enterprise Computer Vision?",
    description: "Deploy edge-accelerated object detection, visual quality inspection, and biometric authentication across your operations.",
    primaryBtnText: "REQUEST VISION PILOT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE VISION MODELS",
    secondaryBtnTo: "/capabilities/overview"
  },
  "intelligent-document-processing": {
    title: "Eliminate Manual Ingestion with",
    highlightText: "Intelligent Document Processing?",
    description: "Automate complex document extraction, tabular invoice parsing, and regulatory audit classification with zero-shot accuracy.",
    primaryBtnText: "TEST IDP ENGINE",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE DOCUMENT PARSER",
    secondaryBtnTo: "/capabilities/overview"
  },
  "ai-search-knowledge-management": {
    title: "Unify Enterprise Repositories with",
    highlightText: "Neural Search & Knowledge AI?",
    description: "Connect siloed corporate data stores with grounded hybrid search, semantic reranking, and citation-backed knowledge retrieval.",
    primaryBtnText: "REQUEST SEARCH AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ENTERPRISE RAG",
    secondaryBtnTo: "/capabilities/overview"
  },
  "intelligent-automation": {
    title: "Automate End-to-End Workflows with",
    highlightText: "Intelligent AI Automation?",
    description: "Connect legacy ERPs, CRM workflows, and modern cloud APIs with self-healing cognitive automations that eliminate human bottlenecks.",
    primaryBtnText: "START AUTOMATION PILOT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE AUTOMATION STACK",
    secondaryBtnTo: "/capabilities/overview"
  },
  "data-intelligence": {
    title: "Transform Enterprise Telemetry with",
    highlightText: "Predictive Data Intelligence?",
    description: "Unify real-time streaming pipelines, automated feature stores, and automated data quality governance at scale.",
    primaryBtnText: "REQUEST DATA ASSESSMENT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE DATA PLATFORM",
    secondaryBtnTo: "/capabilities/overview"
  },
  "predictive-analytics": {
    title: "Forecast High-Stakes Outcomes with",
    highlightText: "Enterprise Predictive Analytics?",
    description: "Anticipate market fluctuations, customer churn, and operational risks with real-time probabilistic forecasting models.",
    primaryBtnText: "SCHEDULE ANALYTICS DEMO",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "VIEW ANALYTICS METRICS",
    secondaryBtnTo: "/capabilities/overview"
  },
  "ai-integration": {
    title: "Seamlessly Connect Systems with",
    highlightText: "Enterprise AI Integration?",
    description: "Deploy sub-second webhook meshes, event-driven streaming connectors, and enterprise API gateways across multi-cloud environments.",
    primaryBtnText: "REQUEST INTEGRATION AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE CONNECTOR MESH",
    secondaryBtnTo: "/capabilities/overview"
  },
  "ai-infrastructure-mlops": {
    title: "Scale Production AI with",
    highlightText: "Enterprise MLOps & Infrastructure?",
    description: "Orchestrate high-throughput GPU clusters, automated CI/CD for models, and sub-millisecond inference runtimes with 99.999% SLA.",
    primaryBtnText: "SCHEDULE MLOPS AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE INFRASTRUCTURE",
    secondaryBtnTo: "/capabilities/overview"
  },
  "responsible-ai-governance": {
    title: "Safeguard Enterprise AI with",
    highlightText: "Responsible AI & Governance?",
    description: "Enforce algorithmic fairness, automated bias audits, explainability dashboards, and regulatory compliance frameworks across models.",
    primaryBtnText: "REQUEST GOVERNANCE AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE COMPLIANCE FRAMEWORK",
    secondaryBtnTo: "/capabilities/overview"
  },
  "ai-strategy-consulting": {
    title: "Navigate Digital Transformation with",
    highlightText: "AI Strategy & Consulting?",
    description: "Align technology roadmaps, prioritize high-ROI AI initiatives, and build organizational AI readiness with our elite architects.",
    primaryBtnText: "BOOK STRATEGY BRIEFING",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ADVISORY SERVICES",
    secondaryBtnTo: "/capabilities/overview"
  },
  "ai-innovation-lab": {
    title: "Pioneer Future Breakthroughs with",
    highlightText: "Our AI Innovation Lab?",
    description: "Co-create bleeding-edge prototypes, explore novel foundation model architectures, and pilot experimental AI research.",
    primaryBtnText: "START INNOVATION PROJECT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE LAB PROTOTYPES",
    secondaryBtnTo: "/capabilities/overview"
  }
};

export default function CapabilityDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const data = CAPABILITY_SERVICES_DATA[serviceId];
  const trackRef = useRef(null);
  const displayTitle = data ? `${data.hero?.titleLight || ""} ${data.hero?.titleBold || ""}`.trim() : "";
  const ctaConfig = (data && CAPABILITY_CTA_CONFIG[serviceId]) || {
    title: "Ready to Transform Your Enterprise with",
    highlightText: `${displayTitle || "Enterprise AI"}?`,
    description: data?.hero?.description || "Deploy state-of-the-art AI capabilities across your enterprise infrastructure with enterprise-grade SLA and dedicated support.",
    primaryBtnText: "SCHEDULE CONSULTATION",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ALL CAPABILITIES",
    secondaryBtnTo: "/capabilities/overview"
  };
  const insightItems = data ? getCapabilityInsights(serviceId, data.insights) : [];

  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff" }}>
        <h2 style={{ fontFamily: FONT }}>Service Not Found</h2>
      </div>
    );
  }

  const scroll = (direction) => {
    if(trackRef.current) {
      const scrollAmount = 320;
      trackRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: FONT, overflowX: "hidden" }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ position: "relative", width: "100%", minHeight: "720px", background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)", display: "flex", alignItems: "center", marginTop: "70px", overflow: "hidden" }}>
        <motion.div initial={{ opacity: 0, rotate: -4 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "68%", marginTop: 0, zIndex: 0, pointerEvents: "none", maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)" }}>
          <motion.div style={{ width: "100%", height: "100%" }} animate={{ rotate: [0, 2, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}>
            <RibbonGraphic />
          </motion.div>
        </motion.div>

        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", left: "0", top: "10%", bottom: "10%", width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)" }} />
          <div style={{ maxWidth: "600px", paddingLeft: "clamp(20px, 4vw, 50px)" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600, marginBottom: "24px" }}>
                <span style={{ cursor: "pointer" }} onClick={() => navigate("/capabilities/overview")}>{data.breadcrumbs[0]}</span>
                <span>/</span>
                <span style={{ color: "#E11D48" }}>{data.breadcrumbs[1]}</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, fontWeight: 300, margin: "0 0 24px 0", letterSpacing: "-0.02em", color: "#fff" }}>
              <span style={{ fontWeight: 600 }}>{data.hero.titleLight}</span> <span style={{ color: "rgba(255,255,255,0.85)" }}>{data.hero.titleBold}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)", lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>
              {data.hero.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} style={{ marginTop: "32px" }}>
              <Link to="/capabilities/overview" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#fff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "13px 26px", borderRadius: "8px", transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(225,29,72,0.3)" }} className="hero-view-btn">
                <ArrowLeft size={16} /> View All Capabilities
              </Link>
              <style>{`
                .hero-view-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 6px 25px rgba(225,29,72,0.5) !important; }
              `}</style>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TALL METRICS CARDS (Reference Image Style) */}
      <section style={{ backgroundColor: "#000", padding: "80px 5% 0 5%" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {data.metricsCards.map((metric, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               style={{
                 position: "relative",
                 height: "360px",
                 borderRadius: "16px",
                 overflow: "hidden",
                 border: "1px solid rgba(255,255,255,0.08)",
                 backgroundColor: "#0A0A0A",
               }}
             >
               <img
                 src={metric.image}
                 alt={metric.label}
                 style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
               />
               <div
                 style={{
                   position: "absolute",
                   inset: 0,
                   background:
                     "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.96) 100%)",
                 }}
               />
               <div style={{ position: "absolute", bottom: "26px", left: "24px", right: "24px", zIndex: 2 }}>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontSize: "11.5px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: "#FDA4AF",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    CAPABILITY IMPACT
                  </div>
                  <h3
                    style={{
                      fontFamily: FONT,
                      fontSize: "2.8rem",
                      fontWeight: 600,
                      margin: "0 0 6px 0",
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {metric.value}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontSize: "14px",
                      color: "#E4E4E7",
                      margin: 0,
                      fontWeight: 500,
                      lineHeight: 1.45,
                    }}
                  >
                    {metric.label}
                  </p>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* 3. IN ACTION (Framed identically to Want to See Industry AI in Action) */}
      <section style={{ position: "relative", width: "100%", padding: "70px 0 30px", backgroundColor: "#000000", fontFamily: FONT, boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div className="capInActionWrapper" style={{ position: "relative", width: "100%", display: "grid", gridTemplateColumns: "1.05fr 1fr", minHeight: "520px", backgroundColor: "#0A0A0A", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.08)", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.6)", textAlign: "left" }}>
            
            {/* LEFT — edge-to-edge framed visual matching Industry AI in Action */}
            <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#000000", minHeight: "360px" }}>
              <motion.img
                src={data.inAction.imageSrc}
                alt="In Action"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                onError={(e) => { e.currentTarget.src = "/assets/services/webp/bg-ai.webp"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%), linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)" }} />
            </div>

            {/* RIGHT — deep crimson tinted content panel */}
            <div style={{ position: "relative", backgroundColor: "#160608", display: "flex", alignItems: "center", padding: "60px 48px", boxSizing: "border-box" }}>
              <div style={{ position: "relative", zIndex: 1, maxWidth: "480px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: FONT, fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FDA4AF", marginBottom: "14px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E11D48", boxShadow: "0 0 8px #E11D48" }} />
                  AI IN ACTION
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: FONT, color: "#FFFFFF", fontSize: "clamp(1.85rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0, marginBottom: "20px" }}
                >
                  {data.inAction.headingLight} <span style={{ color: "#E11D48" }}>{data.inAction.headingRed}</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: FONT, color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.75, margin: 0, marginBottom: "32px" }}
                >
                  {data.inAction.paragraph}
                </motion.p>

                <motion.a
                  href="https://devopstrio.co.uk/company/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.04, backgroundColor: "#f4f4f5" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "13px 26px",
                    borderRadius: "999px",
                    backgroundColor: "#FFFFFF",
                    color: "#030303",
                    fontFamily: FONT,
                    fontSize: "13.5px",
                    fontWeight: 600,
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    transition: "all 0.25s ease",
                  }}
                >
                  {data.inAction.buttonText || "See in Action"}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </motion.a>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 868px) {
            .capInActionWrapper {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 4. WHO WE WORK WITH (Bubbling Icons Section) */}
      <section style={{ backgroundColor: "#000", padding: "120px 24px" }}>
         <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} style={{ marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
                <span style={{ fontWeight: 600 }}>{data.whoWeWorkWith.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.whoWeWorkWith.titleRed}</span>
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
               {data.whoWeWorkWith.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                     <motion.div 
                        whileHover={{ scale: 1.15, rotate: [-5, 5, -5, 0], y: -5 }} 
                        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                        style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", cursor: "pointer" }}
                     >
                        <img
                          src={getCapabilityUseCaseIcon(serviceId, item.title) || iconMap[item.icon] || iconMap.cpu}
                          alt=""
                          aria-hidden="true"
                          style={{ width: "32px", height: "32px" }}
                        />
                     </motion.div>
                     <h3 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#E11D48", marginBottom: "16px" }}>{item.title}</h3>
                     <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. HOW YOU BENEFIT (Image Box Overlay Cards) */}
      <section style={{ backgroundColor: "#0b0b0b", padding: "120px 24px" }}>
         <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} style={{ marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
                <span style={{ fontWeight: 600 }}>{data.benefits.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.benefits.titleRed}</span>
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
               {data.benefits.items.map((benefit, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ position: "relative", height: "450px", borderRadius: "16px", overflow: "hidden", display: "flex", alignItems: "flex-end", backgroundColor: "#111" }}>
                     <img src={benefit.image} alt={benefit.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
                     
                     <div style={{ position: "relative", zIndex: 2, backgroundColor: "rgba(10,10,10,0.85)", backdropFilter: "blur(10px)", margin: "20px", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", width: "calc(100% - 40px)" }}>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#E11D48", margin: "0 0 12px 0", lineHeight: 1.3 }}>{benefit.title}</h3>
                        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6 }}>{benefit.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. CORE CAPABILITIES CARDS SECTION (Beige Hover) */}
      <section style={{ backgroundColor: "#000", padding: "120px 24px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1280px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: "60px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
              <span style={{ fontWeight: 600 }}>{data.cards.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.cards.titleRed}</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "24px" }}>
            {data.cards.items.map((card, i) => {
              const isHovered = hoveredCard === i;
              return (
                <motion.div key={i} onHoverStart={() => setHoveredCard(i)} onHoverEnd={() => setHoveredCard(null)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }} style={{ position: "relative", height: "380px", borderRadius: "16px", overflow: "hidden", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0b0b0b" }}>
                  
                  {/* Background Image (visible before hover) */}
                  <motion.div initial={false} animate={{ opacity: isHovered ? 0 : 0.4 }} transition={{ duration: 0.4 }} style={{ position: "absolute", inset: 0 }}>
                     <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.2) 100%)" }} />
                  </motion.div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${card.color1} 0%, ${card.color2} 100%)`, zIndex: 0 }} />
                    )}
                  </AnimatePresence>
                  
                  <div style={{ position: "relative", zIndex: 2, padding: "40px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", color: isHovered ? "#E11D48" : "#E11D48", marginBottom: "24px", transition: "color 0.4s ease-in-out" }}>
                      {card.badge}
                    </div>
                    
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 600, color: isHovered ? "#000000" : "#ffffff", lineHeight: 1.2, margin: "0 0 16px 0", letterSpacing: "-0.01em", transition: "color 0.4s ease-in-out" }}>
                      {card.title}
                    </h3>
                    
                    <div style={{ position: "relative", flex: 1 }}>
                      <motion.p animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: 0, left: 0, fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0 }}>
                        {card.body}
                      </motion.p>
                      
                      <motion.p animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: 0, left: 0, fontSize: "1.05rem", color: "#000000", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                        {card.more}
                      </motion.p>
                    </div>
                    
                    <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                      <motion.div animate={{ x: isHovered ? 5 : 0, color: isHovered ? "#E11D48" : "rgba(255,255,255,0.3)" }} transition={{ duration: 0.3 }}>
                        <ArrowRight size={24} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. INSIGHTS SECTION */}
      <section style={{ backgroundColor: "#0b0b0b", padding: "120px 24px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1280px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "24px" }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
              <span style={{ fontWeight: 600 }}>{data.insights.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.insights.titleRed}</span>
            </motion.h2>
            <div style={{ display: "flex", gap: "12px" }}>
               <a
                 href="https://devopstrio.co.uk/insights"
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                   display: "inline-flex",
                   alignItems: "center",
                   gap: "8px",
                   backgroundColor: "#E11D48",
                   color: "#FFFFFF",
                   textDecoration: "none",
                   padding: "10px 22px",
                   borderRadius: "9999px",
                   fontSize: "13.5px",
                   fontWeight: 600,
                   transition: "all 0.25s ease",
                   boxShadow: "0 4px 15px rgba(225,29,72,0.3)",
                   marginRight: "6px",
                 }}
                 className="cap-all-insights-btn"
               >
                 View All Insights <ArrowRight size={15} />
               </a>
               <button onClick={() => scroll('left')} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20}/></button>
               <button onClick={() => scroll('right')} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronRight size={20}/></button>
            </div>
          </div>
          <div ref={trackRef} style={{ display: "flex", gap: "24px", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom: "20px" }}>
            {insightItems.map((item, i) => (
              <InsightTwoFaceCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. UNIVERSAL REPRESENTATIVE CTA */}
      <RepresentativeCTA
        title={ctaConfig.title}
        highlightText={ctaConfig.highlightText}
        description={ctaConfig.description}
        primaryBtnText={ctaConfig.primaryBtnText}
        primaryBtnHref={ctaConfig.primaryBtnHref}
        secondaryBtnText={ctaConfig.secondaryBtnText}
        secondaryBtnTo={ctaConfig.secondaryBtnTo}
        theme="rose"
      />
    </div>
  );
}
