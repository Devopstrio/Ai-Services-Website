import RepresentativeCTA from "../ui/RepresentativeCTA";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getIntegrationData } from "../../data/integrations";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Workflow,
  Radio,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Cpu,
  Layers,
  Activity,
  Code,
  Terminal,
  Check,
  Share2,
  RefreshCw,
  Server,
  Copy,
  SlidersHorizontal,
  CheckCheck
} from "lucide-react";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

/* ─── Concise Hero Titles & Single-Line Descriptions ─── */
const INTEGRATION_HERO_COPY = {
  "productivity-collaboration": {
    title: "Productivity & Collaboration",
    desc: "Connect workplace tools and streamline workflows across your enterprise."
  },
  "crm-platforms": {
    title: "CRM Platforms",
    desc: "Synchronize customer records, opportunities, and omnichannel interactions across leading CRMs."
  },
  "erp-systems": {
    title: "ERP Systems",
    desc: "Automate purchase matching, invoice reconciliation, and general ledger sync across enterprise ERPs."
  },
  "cloud-platforms": {
    title: "Cloud Platforms",
    desc: "Connect distributed AI swarms directly into AWS, Azure, GCP, and Kubernetes environments."
  },
  "ai-llm-providers": {
    title: "AI & LLM Providers",
    desc: "Route prompts dynamically across frontier models and private clusters with unified governance."
  },
  "databases": {
    title: "Databases & Warehouses",
    desc: "Enable verified text-to-SQL querying and real-time data streaming across enterprise databases."
  },
  "vector-databases": {
    title: "Vector Databases",
    desc: "Index and retrieve high-dimensional embeddings with hybrid search and real-time chunking."
  },
  "communication": {
    title: "Communication APIs",
    desc: "Deploy streaming voice agents, automated messaging, and triage pipelines at enterprise scale."
  },
  "storage": {
    title: "Storage & Object Stores",
    desc: "Stream unstructured files, datasets, and media directly into enterprise AI pipelines."
  },
  "identity-authentication": {
    title: "Identity & Access",
    desc: "Enforce zero-trust RBAC, MFA, and automated SCIM provisioning across all enterprise workflows."
  },
  "devops": {
    title: "DevOps & CI/CD",
    desc: "Automate pull request reviews, pipeline rollbacks, and infrastructure provisioning seamlessly."
  },
  "business-intelligence": {
    title: "Business Intelligence",
    desc: "Transform data queries into interactive reports, semantic models, and executive KPI dashboards."
  },
  "enterprise-applications": {
    title: "Enterprise Applications",
    desc: "Unify ITSM incidents, contract execution, and billing workflows into reliable agent pipelines."
  },
  "custom-integration": {
    title: "Custom Integrations",
    desc: "Build bespoke enterprise connectors for proprietary APIs and legacy systems with lightweight SDKs."
  }
};

/* ─── Fade-up animation wrapper ─── */
const FadeUp = ({ children, delay = 0, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    style={style}
  >
    {children}
  </motion.div>
);

/* ─── Clean Section Heading (No Sparkle Icon, No Subtitle Paragraph) ─── */
const SectionHeading = ({ tag, title, accent, center = true }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: "44px", position: "relative", zIndex: 2 }}>
    {tag && (
      <div
        style={{
          color: "#E11D48",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "12px",
          display: "inline-block"
        }}
      >
        {tag}
      </div>
    )}
    <h2
      style={{
        fontSize: "clamp(2rem, 3.8vw, 3.25rem)", fontWeight: 700,
        fontWeight: 700,
        color: "#FFFFFF",
        margin: 0,
        letterSpacing: "-0.025em",
        lineHeight: 1.2
      }}
    >
      {title} {accent && <span style={{ color: "#E11D48" }}>{accent}</span>}
    </h2>
  </div>
);

const INTEGRATION_CATEGORIES = [
  { id: "productivity-collaboration", label: "Productivity & Collab", route: "/integrations/productivity-collaboration" },
  { id: "crm-platforms", label: "CRM Platforms", route: "/integrations/crm-platforms" },
  { id: "erp-systems", label: "ERP Systems", route: "/integrations/erp-systems" },
  { id: "cloud-platforms", label: "Cloud Platforms", route: "/integrations/cloud-platforms" },
  { id: "ai-llm-providers", label: "AI & LLM Providers", route: "/integrations/ai-llm-providers" },
  { id: "databases", label: "Databases", route: "/integrations/databases" },
  { id: "vector-databases", label: "Vector Databases", route: "/integrations/vector-databases" },
  { id: "communication", label: "Communication", route: "/integrations/communication" },
  { id: "storage", label: "Storage", route: "/integrations/storage" },
  { id: "identity-authentication", label: "Identity & Auth", route: "/integrations/identity-authentication" },
  { id: "devops", label: "DevOps", route: "/integrations/devops" },
  { id: "business-intelligence", label: "BI & Analytics", route: "/integrations/business-intelligence" },
  { id: "enterprise-applications", label: "Enterprise Apps", route: "/integrations/enterprise-applications" },
  { id: "custom-integration", label: "Custom Integration", route: "/integrations/custom-integration" }
];

export default function IntegrationDetail() {
  const params = useParams();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathSegments[pathSegments.length - 1] || "";
  const integrationSlug = params.integrationId || slugFromPath || "productivity-collaboration";
  const data = getIntegrationData(integrationSlug);

  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [showPayload, setShowPayload] = useState(false);
  const [copied, setCopied] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveScenarioIndex(0);
    setShowPayload(false);
    setCopied(false);
  }, [location.pathname]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020203", color: "#fff", fontFamily: FONT }}>
        <h2>Integration Category Not Found</h2>
      </div>
    );
  }

  const connectors = data.connectors || [];
  const stats = data.stats || [];
  const scenarios = data.interactiveSimulator?.scenarios || [];
  const currentScenario = scenarios[activeScenarioIndex] || scenarios[0] || null;
  const securityProtocols = data.securityProtocols || [];

  // Hero Copy
  const heroCopy = INTEGRATION_HERO_COPY[integrationSlug] || {
    title: data.name,
    desc: data.hero?.description?.split(".")[0] + "." || "Connect enterprise tools and streamline workflows across your organization."
  };
  const heroTitle = data.hero?.shortTitle || heroCopy.title;
  const heroDescription = data.hero?.shortDescription || heroCopy.desc;

  const handleCopyPayload = () => {
    if (!currentScenario?.payload) return;
    try {
      navigator.clipboard.writeText(JSON.stringify(currentScenario.payload, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div style={{ backgroundColor: "#020203", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════════════════════════════
          1. STICKY SUB-CATEGORY NAVIGATION BAR
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ position: "sticky", top: "72px", zIndex: 40, backgroundColor: "rgba(4,4,7,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }} className="no-scrollbar">
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#E11D48", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: "12px", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }}>
            <Share2 size={14} /> CONNECTORS:
          </span>
          {INTEGRATION_CATEGORIES.map((item) => {
            const isActive = integrationSlug === item.id;
            return (
              <Link
                key={item.id}
                to={item.route}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                  backgroundColor: isActive ? "rgba(225,29,72,0.18)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(225,29,72,0.4)" : "rgba(255,255,255,0.04)"}`,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease"
                }}
                className="integ-nav-pill"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          2. CINEMATIC INTEGRATION HERO (Left-to-Right, Minimal Heading, 1-Line Description)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "95px",
          paddingBottom: "80px"
        }}
      >
        {/* Parallax Background with Left-to-Right Gradient for Visual Contrast */}
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img
            src={data.hero.bgImage}
            alt={data.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "right center",
              opacity: 0.32
            }}
          />
          {/* Linear gradient from left to right: solid dark on the left so text pops, visual art on the right */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #020203 0%, rgba(2,2,3,0.92) 42%, rgba(2,2,3,0.6) 72%, rgba(2,2,3,0.38) 100%), linear-gradient(to bottom, rgba(2,2,3,0.6) 0%, transparent 40%, rgba(2,2,3,0.9) 100%)"
            }}
          />
        </motion.div>

        {/* Ambient Subtle Glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: "550px",
            height: "400px",
            background: "radial-gradient(circle, rgba(225,29,72,0.12) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", width: "100%", padding: "0 24px", textAlign: "left" }}>
          <motion.div style={{ opacity: opacityText, maxWidth: "760px" }}>
            {/* Small Category Label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                backgroundColor: "rgba(225,29,72,0.12)",
                border: "1px solid rgba(225,29,72,0.3)",
                borderRadius: "999px",
                color: "#E11D48",
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px"
              }}
            >
              <Share2 size={13} /> ENTERPRISE INTEGRATIONS / {data.name.toUpperCase()}
            </div>

            {/* Short Minimal Page-Specific Headline */}
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700,
                lineHeight: 1.1,
                fontWeight: 700,
                margin: "0 0 16px 0",
                letterSpacing: "-0.03em",
                color: "#FFFFFF"
              }}
            >
              {heroTitle}
            </h1>

            {/* Concise One-Line Description */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.6,
                margin: "0 0 32px 0",
                maxWidth: "680px"
              }}
            >
              {heroDescription}
            </p>

            {/* Hero CTAs */}
            <div style={{ display: "flex", gap: "14px", justifyContent: "flex-start", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#connectors"
                className="hero-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#E11D48",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "13px 28px",
                  borderRadius: "10px",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 20px rgba(225,29,72,0.4)"
                }}
              >
                Explore Integrations <ArrowRight size={16} />
              </a>
              <a
                href="https://devopstrio.co.uk/contact#contact-form"
                className="hero-btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "13px 24px",
                  borderRadius: "10px",
                  transition: "all 0.25s ease"
                }}
              >
                Contact Our Team <Terminal size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <style>{`
          .hero-btn-primary:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(225,29,72,0.6) !important; }
          .hero-btn-secondary:hover { background-color: rgba(255,255,255,0.1) !important; transform: translateY(-2px); }
          .integ-nav-pill:hover { background-color: rgba(255,255,255,0.06) !important; color: #FFFFFF !important; }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. ENTERPRISE STATISTICS (Neat, Properly Aligned Grid, No Descriptions)
      ═══════════════════════════════════════════════════════════════ */}
      {stats.length > 0 && (
        <section style={{ position: "relative", zIndex: 10, marginTop: "-24px", padding: "0 24px" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              background: "linear-gradient(180deg, rgba(14,14,20,0.94) 0%, rgba(8,8,12,0.98) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "28px 32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
            }}
          >
            {stats.map((item, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div
                  style={{
                    padding: "8px 16px",
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                  className="stat-col"
                >
                  <div
                    style={{
                      fontSize: "clamp(1.9rem, 2.5vw, 2.4rem)",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      color: "rgba(255,255,255,0.72)",
                      fontWeight: 600,
                      letterSpacing: "0.01em"
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <style>{`
            @media (max-width: 640px) {
              .stat-col { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px !important; }
              .stat-col:first-child { border-top: none !important; }
            }
          `}</style>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          4. PRE-BUILT CONNECTIVITY MESH (Seamless Cards with Zero Breaking Line)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="connectors" style={{ padding: "120px 5% 90px 5%", backgroundColor: "#020203", position: "relative" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <FadeUp>
            <SectionHeading
              tag="PRE-BUILT CONNECTIVITY MESH"
              title="Connect Your Enterprise"
              accent="Tools"
            />
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "28px" }} className="connectors-grid">
            {connectors.map((conn, idx) => (
              <FadeUp key={conn.id || idx} delay={idx * 0.07} style={{ height: "100%", display: "flex" }}>
                <div
                  className="connector-card"
                  style={{
                    background: "linear-gradient(145deg, #09090E 0%, #060609 100%)",
                    backgroundColor: "#09090E",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    boxShadow: "0 18px 50px rgba(0,0,0,0.7)",
                    transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease"
                  }}
                >
                  {/* Image Header with Subpixel Anti-Seam Protection */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "230px",
                      overflow: "hidden",
                      backgroundColor: "#09090E",
                      borderTopLeftRadius: "19px",
                      borderTopRightRadius: "19px",
                      transform: "translateZ(0)",
                      WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                      isolation: "isolate"
                    }}
                  >
                    <img
                      src={conn.image}
                      alt={conn.name}
                      style={{
                        width: "calc(100% + 2px)",
                        height: "calc(100% + 2px)",
                        margin: "-1px",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                        willChange: "transform",
                        backfaceVisibility: "hidden"
                      }}
                      className="conn-img"
                    />
                    {/* Dark gradient blend into the card body */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, transparent 35%, rgba(9,9,14,0.6) 75%, #09090E 100%)",
                        pointerEvents: "none"
                      }}
                    />

                    {/* Category Tag */}
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        background: "rgba(5,5,8,0.9)",
                        border: "1px solid rgba(225,29,72,0.35)",
                        borderRadius: "999px",
                        padding: "5px 14px",
                        color: "#E11D48",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em"
                      }}
                    >
                      {conn.category}
                    </span>

                    {/* Latency Badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "rgba(12,12,18,0.9)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "999px",
                        padding: "5px 14px",
                        color: "#10B981",
                        fontSize: "0.74rem",
                        fontWeight: 700
                      }}
                    >
                      ⚡ {conn.avgLatency} Sync
                    </span>
                  </div>

                  {/* Content Body */}
                  <div style={{ padding: "26px 30px 32px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, backgroundColor: "#09090E" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px", gap: "12px", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                          {conn.name}
                        </h3>
                        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>
                          {conn.badge}
                        </span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.93rem", lineHeight: 1.65, margin: "0 0 20px 0" }}>
                        {conn.description}
                      </p>
                    </div>

                    {/* Sync Capabilities */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px", marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {conn.syncCapabilities?.map((cap, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.86rem", color: "rgba(255,255,255,0.85)" }}>
                          <CheckCircle2 size={15} color="#E11D48" style={{ marginTop: "2px", flexShrink: 0 }} />
                          <span style={{ lineHeight: 1.5 }}>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <style>{`
            .connector-card:hover {
              border-color: rgba(225,29,72,0.4) !important;
              transform: translateY(-4px);
              box-shadow: 0 20px 50px rgba(0,0,0,0.85), 0 0 25px rgba(225,29,72,0.12) !important;
            }
            .connector-card:hover .conn-img {
              transform: scale(1.03);
            }
            @media (max-width: 640px) {
              .connectors-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. LIVE INTERACTION STUDIO (Human-Engineered Integration Inspection Console)
      ═══════════════════════════════════════════════════════════════ */}
      {scenarios.length > 0 && (
        <section id="simulator" style={{ padding: "100px 5% 120px 5%", backgroundColor: "#050508", position: "relative" }}>
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(circle, rgba(225,29,72,0.06) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <SectionHeading
                tag="INTEGRATION STUDIO"
                title="Explore an Integration"
                accent="Workflow"
              />
            </FadeUp>

            {/* Studio Layout: Workflow Picker + Restrained Inspection Console */}
            <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: "28px" }} className="studio-layout">
              {/* Left Column: Select Workflow */}
              <div>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <SlidersHorizontal size={13} color="#E11D48" /> SELECT WORKFLOW
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {scenarios.map((scen, idx) => {
                    const isSelected = activeScenarioIndex === idx;
                    return (
                      <button
                        key={scen.id || idx}
                        onClick={() => {
                          setActiveScenarioIndex(idx);
                          setShowPayload(false);
                        }}
                        style={{
                          width: "100%",
                          padding: "16px 20px",
                          borderRadius: "14px",
                          border: `1px solid ${isSelected ? "#E11D48" : "rgba(255,255,255,0.08)"}`,
                          backgroundColor: isSelected ? "rgba(225,29,72,0.12)" : "rgba(10,10,14,0.6)",
                          boxShadow: isSelected ? "0 4px 20px rgba(225,29,72,0.2)" : "none",
                          color: "#FFFFFF",
                          fontFamily: FONT,
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.2s ease"
                        }}
                        className="scenario-btn"
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                          <span style={{ fontWeight: 700, fontSize: "0.92rem", color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.88)" }}>
                            {scen.title.split("➔")[0]?.trim() || scen.title}
                          </span>
                          <span style={{ fontSize: "0.7rem", color: isSelected ? "#E11D48" : "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                            {scen.sourceApp} ➔ {scen.targetApp}
                          </span>
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                          {scen.trigger?.slice(0, 65)}...
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Professional Workflow Inspection Console */}
              {currentScenario && (
                <div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Activity size={13} color="#E11D48" /> WORKFLOW PREVIEW
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScenario.id || activeScenarioIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        background: "#09090D",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "18px",
                        overflow: "hidden",
                        boxShadow: "0 24px 70px rgba(0,0,0,0.85)"
                      }}
                    >
                      {/* Console Header */}
                      <div
                        style={{
                          background: "#0E0E14",
                          padding: "16px 24px",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "12px"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E11D48" }} />
                          <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "#FFFFFF" }}>
                            {currentScenario.sourceApp} ➔ {currentScenario.targetApp}
                          </span>
                        </div>
                        <span
                          style={{
                            padding: "3px 12px",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "999px",
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "0.74rem",
                            fontWeight: 600
                          }}
                        >
                          Illustrative Example
                        </span>
                      </div>

                      {/* 3 Clear Linear Workflow Stages */}
                      <div style={{ padding: "26px 28px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        {/* Stage 1: Inbound Message / Event */}
                        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              backgroundColor: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              flexShrink: 0
                            }}
                          >
                            01
                          </div>
                          <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                              Inbound Event Trigger
                            </div>
                            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px 16px", fontSize: "0.88rem", color: "rgba(255,255,255,0.88)", fontStyle: "italic", lineHeight: 1.5 }}>
                              "{currentScenario.trigger}"
                            </div>
                          </div>
                        </div>

                        {/* Stage 2: Schema Mapping & Policy Validation */}
                        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              backgroundColor: "rgba(225,29,72,0.12)",
                              border: "1px solid rgba(225,29,72,0.25)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: "#E11D48",
                              flexShrink: 0
                            }}
                          >
                            02
                          </div>
                          <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                              Transformation & Policy Validation
                            </div>
                            <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                              Input validated against tenant schema, parameters mapped, and compliance guarantees applied before dispatch.
                            </div>
                          </div>
                        </div>

                        {/* Stage 3: Ready for Destination Review */}
                        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              backgroundColor: "rgba(16,185,129,0.12)",
                              border: "1px solid rgba(16,185,129,0.25)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: "#10B981",
                              flexShrink: 0
                            }}
                          >
                            03
                          </div>
                          <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                              Ready for Review & Action
                            </div>
                            <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)", fontWeight: 500, lineHeight: 1.5 }}>
                              Synchronized action ready in {currentScenario.targetApp}. No unverified background execution.
                            </div>
                          </div>
                        </div>

                        {/* Collapsible View Example Payload Section */}
                        {currentScenario.payload && (
                          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px", marginTop: "6px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <button
                                onClick={() => setShowPayload(!showPayload)}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  background: "none",
                                  border: "none",
                                  color: "#E11D48",
                                  fontSize: "0.84rem",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  padding: 0
                                }}
                              >
                                {showPayload ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                                {showPayload ? "Hide Example Payload" : "View Example Payload"}
                              </button>

                              {showPayload && (
                                <button
                                  onClick={handleCopyPayload}
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "6px",
                                    padding: "4px 10px",
                                    color: "rgba(255,255,255,0.75)",
                                    fontSize: "0.74rem",
                                    cursor: "pointer"
                                  }}
                                >
                                  {copied ? <CheckCheck size={12} color="#10B981" /> : <Copy size={12} />}
                                  {copied ? "Copied" : "Copy JSON"}
                                </button>
                              )}
                            </div>

                            {showPayload && (
                              <pre
                                style={{
                                  marginTop: "14px",
                                  padding: "16px",
                                  background: "#050508",
                                  borderRadius: "10px",
                                  border: "1px solid rgba(255,255,255,0.06)",
                                  fontSize: "0.78rem",
                                  color: "rgba(255,255,255,0.85)",
                                  fontFamily: "monospace",
                                  lineHeight: 1.55,
                                  overflowX: "auto",
                                  maxHeight: "260px"
                                }}
                              >
                                {JSON.stringify(currentScenario.payload, null, 2)}
                              </pre>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Footer Note */}
                      <div
                        style={{
                          background: "#08080C",
                          padding: "12px 24px",
                          borderTop: "1px solid rgba(255,255,255,0.04)",
                          fontSize: "0.74rem",
                          color: "rgba(255,255,255,0.4)",
                          lineHeight: 1.5
                        }}
                      >
                        Example flow only. Enterprise connectors operate with mutual TLS, tenant worker isolation, and zero retention.
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>

            <style>{`
              .scenario-btn:hover { border-color: rgba(225,29,72,0.4) !important; background-color: rgba(225,29,72,0.08) !important; }
              @media (max-width: 880px) {
                .studio-layout { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          6. ENTERPRISE SECURITY & GOVERNANCE (No Sparkles, Clean 4-Column Grid)
      ═══════════════════════════════════════════════════════════════ */}
      {securityProtocols.length > 0 && (
        <section style={{ padding: "100px 5% 90px 5%", backgroundColor: "#020203" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <FadeUp>
              <SectionHeading
                tag="SECURITY & GOVERNANCE"
                title="Zero-Trust Architecture &"
                accent="Compliance"
              />
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {securityProtocols.map((sec, idx) => (
                <FadeUp key={idx} delay={idx * 0.07} style={{ height: "100%", display: "flex" }}>
                  <div
                    className="sec-card"
                    style={{
                      background: "linear-gradient(145deg, #09090E 0%, #060609 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "18px",
                      padding: "30px 26px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                      minHeight: "200px",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(225,29,72,0.12)",
                          border: "1px solid rgba(225,29,72,0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "18px"
                        }}
                      >
                        <Shield size={18} color="#E11D48" />
                      </div>
                      <h3 style={{ fontSize: "1.12rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px 0" }}>
                        {sec.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <style>{`.sec-card:hover { border-color: rgba(225,29,72,0.35) !important; transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.8), 0 0 25px rgba(225,29,72,0.1); }`}</style>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          7. CO-INTEGRATION CASE STUDY (Clean Editorial Presentation)
      ═══════════════════════════════════════════════════════════════ */}
      {data.caseStudy && (
        <section style={{ padding: "80px 5% 60px 5%", backgroundColor: "#020203" }}>
          <FadeUp>
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                background: "linear-gradient(145deg, #0A0A0E 0%, #07070B 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "22px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.15fr 0.85fr",
                alignItems: "center",
                boxShadow: "0 24px 80px rgba(0,0,0,0.8)"
              }}
              className="case-grid"
            >
              <div style={{ padding: "48px 42px" }}>
                <div style={{ color: "#E11D48", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>
                  INTEGRATION USE CASE // {data.caseStudy.client || data.caseStudy.industry}
                </div>
                <h3 style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.35, margin: "0 0 18px 0" }}>
                  {data.caseStudy.headline}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 20px 0" }}>
                  "{data.caseStudy.quote}"
                </p>
                <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.88rem", marginBottom: "24px" }}>
                  {data.caseStudy.author} <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>— {data.caseStudy.company}</span>
                </div>
                <div style={{ display: "flex", gap: "28px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", flexWrap: "wrap" }}>
                  {data.caseStudy.results?.map((res, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "#E11D48" }}>{res.stat}</div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                <img src={data.caseStudy.image} alt={data.caseStudy.client} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0E 0%, rgba(10,10,14,0.2) 30%, transparent 100%)" }} />
              </div>
            </div>
          </FadeUp>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          8. UNIVERSAL REPRESENTATIVE CTA
      ═══════════════════════════════════════════════════════════════ */}
      <RepresentativeCTA
        title="Connect Your Stack with"
        highlightText={data.name}
        description="Need a custom connector for proprietary internal APIs, legacy mainframe databases, or private cloud endpoints? We build and deploy verified enterprise connectors in days."
        primaryBtnText="Request Enterprise Connector"
        primaryBtnHref="https://devopstrio.co.uk/contact#contact-form"
        secondaryBtnText="Explore SDK Documentation"
        secondaryBtnHref="https://devopstrio.co.uk/contact#contact-form"
      />

    </div>
  );
}
