import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getIntegrationData } from "../../data/integrations";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Workflow,
  Radio,
  XCircle,
  RotateCw,
  Award,
  ChevronLeft,
  Sparkles,
  ExternalLink,
  Cpu,
  Layers,
  Activity,
  Code,
  Terminal,
  Check,
  Share2,
  RefreshCw,
  Server
} from "lucide-react";

const FONT = '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

/* ─── Fade-up animation wrapper ─── */
const FadeUp = ({ children, delay = 0, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    style={style}
  >
    {children}
  </motion.div>
);

/* ─── Section heading reusable block ─── */
const SectionHeading = ({ tag, title, accent, subtitle, center = true }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: "54px", position: "relative", zIndex: 2 }}>
    {tag && (
      <div style={{ color: "#E11D48", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
        <Sparkles size={13} /> {tag}
      </div>
    )}
    <h2 style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px 0", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
      {title} {accent && <span style={{ color: "#E11D48", textShadow: "0 0 30px rgba(225,29,72,0.3)" }}>{accent}</span>}
    </h2>
    {subtitle && (
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: center ? "660px" : "100%", margin: center ? "0 auto" : "0", lineHeight: 1.7 }}>
        {subtitle}
      </p>
    )}
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

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveScenarioIndex(0);
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

  return (
    <div style={{ backgroundColor: "#020203", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════════════════════════════
          1. STICKY SUB-CATEGORY NAVIGATION BAR
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ position: "sticky", top: "72px", zIndex: 40, backgroundColor: "rgba(4,4,7,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 5%" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }} className="no-scrollbar">
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
          2. CINEMATIC INTEGRATION HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{ position: "relative", width: "100%", minHeight: "84vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "110px", paddingBottom: "90px" }}
      >
        {/* Parallax Background */}
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img src={data.hero.bgImage} alt={data.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 75% 25%, rgba(225,29,72,0.18) 0%, rgba(2,2,3,0.7) 45%, #020203 100%), linear-gradient(180deg, rgba(2,2,3,0.85) 0%, rgba(2,2,3,0.5) 50%, #020203 100%)" }} />
        </motion.div>

        {/* Ambient Center Glow */}
        <div style={{ position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)", width: "650px", height: "420px", background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1120px", margin: "0 auto", width: "100%", padding: "0 5%", textAlign: "center" }}>
          <motion.div style={{ opacity: opacityText }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", backgroundColor: "rgba(225,29,72,0.14)", border: "1px solid rgba(225,29,72,0.35)", borderRadius: "999px", color: "#E11D48", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>
              <Share2 size={13} /> {data.hero.badge}
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 4.4vw, 4rem)", lineHeight: 1.15, fontWeight: 700, margin: "0 0 22px 0", letterSpacing: "-0.03em" }}>
              <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>{data.hero.titleLight} </span>
              <span style={{ color: "#FFFFFF", textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>{data.hero.titleBold}</span>
            </h1>

            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8, margin: "0 auto 36px auto", maxWidth: "760px" }}>
              {data.hero.description}
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#connectors"
                className="hero-btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "14px 30px", borderRadius: "10px", transition: "all 0.25s ease", boxShadow: "0 4px 24px rgba(225,29,72,0.4)" }}
              >
                Explore Native Connectors <ArrowRight size={16} />
              </a>
              <a
                href="#simulator"
                className="hero-btn-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "14px 26px", borderRadius: "10px", transition: "all 0.25s ease" }}
              >
                Test Live Sync Studio <Terminal size={16} />
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
          3. ENTERPRISE CONNECTIVITY STRIP
      ═══════════════════════════════════════════════════════════════ */}
      {stats.length > 0 && (
        <section style={{ position: "relative", zIndex: 10, marginTop: "-20px", padding: "0 5%" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", background: "linear-gradient(180deg, rgba(14,14,20,0.9) 0%, rgba(8,8,12,0.95) 100%)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "36px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
            {stats.map((item, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div style={{ textAlign: "center", padding: "8px" }}>
                  <div style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1, marginBottom: "8px" }}>{item.value}</div>
                  <div style={{ fontSize: "0.88rem", color: "#E11D48", fontWeight: 700, marginBottom: "4px" }}>{item.label}</div>
                  <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.45)" }}>{item.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          4. PRE-BUILT CONNECTOR ECOSYSTEM GRID (Visual Cards)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="connectors" style={{ padding: "140px 5% 100px 5%", backgroundColor: "#020203", position: "relative" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <FadeUp>
            <SectionHeading
              tag="PRE-BUILT CONNECTIVITY MESH"
              title="Native SaaS Connectors &"
              accent="Ecosystem"
              subtitle="Connect your AI swarms directly into your everyday productivity platforms with sub-15ms webhook execution and enterprise security."
            />
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "32px" }} className="connectors-grid">
            {connectors.map((conn, idx) => (
              <FadeUp key={conn.id} delay={idx * 0.08}>
                <div
                  className="connector-card"
                  style={{
                    background: "linear-gradient(145deg, #09090E 0%, #060609 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "22px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 18px 50px rgba(0,0,0,0.7)",
                    transition: "all 0.3s ease"
                  }}
                >
                  {/* Image Header */}
                  <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                    <img
                      src={conn.image}
                      alt={conn.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                      className="conn-img"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, #09090E 100%)" }} />

                    {/* Category Tag */}
                    <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(225,29,72,0.35)", borderRadius: "999px", padding: "5px 14px", color: "#E11D48", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                      {conn.category}
                    </span>

                    {/* Latency Badge */}
                    <span style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(12,12,18,0.9)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "5px 14px", color: "#10B981", fontSize: "0.74rem", fontWeight: 700 }}>
                      ⚡ {conn.avgLatency} Sync
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "28px 32px 34px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", margin: 0, lineHeight: 1.3 }}>
                          {conn.name}
                        </h3>
                        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>
                          {conn.badge}
                        </span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.94rem", lineHeight: 1.7, margin: "0 0 20px 0" }}>
                        {conn.description}
                      </p>
                    </div>

                    {/* Sync Capabilities */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {conn.syncCapabilities.map((cap, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "rgba(255,255,255,0.85)" }}>
                          <CheckCircle2 size={15} color="#E11D48" style={{ marginTop: "3px", flexShrink: 0 }} />
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
            .connector-card:hover { border-color: rgba(225,29,72,0.4) !important; transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.85), 0 0 30px rgba(225,29,72,0.15) !important; }
            .connector-card:hover .conn-img { transform: scale(1.04); }
            @media (max-width: 640px) { .connectors-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. INTERACTIVE LIVE WEBHOOK & PAYLOAD STUDIO
      ═══════════════════════════════════════════════════════════════ */}
      {scenarios.length > 0 && (
        <section id="simulator" style={{ padding: "120px 5% 140px 5%", backgroundColor: "#060609", position: "relative" }}>
          {/* Glow */}
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <SectionHeading
                tag="LIVE INTERACTION STUDIO"
                title="Cross-Tool Webhook &"
                accent="Payload Simulator"
                subtitle="Select an integration trigger below to inspect real-time bi-directional payload transformation and execution telemetry."
              />
            </FadeUp>

            {/* Scenario Tabs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
              {scenarios.map((scen, idx) => {
                const isSelected = activeScenarioIndex === idx;
                return (
                  <button
                    key={scen.id}
                    onClick={() => setActiveScenarioIndex(idx)}
                    style={{
                      padding: "12px 24px",
                      borderRadius: "12px",
                      border: `1px solid ${isSelected ? "#E11D48" : "rgba(255,255,255,0.08)"}`,
                      backgroundColor: isSelected ? "rgba(225,29,72,0.14)" : "rgba(10,10,14,0.7)",
                      boxShadow: isSelected ? "0 0 20px rgba(225,29,72,0.2)" : "none",
                      color: "#FFFFFF",
                      fontFamily: FONT,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      textAlign: "left"
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: isSelected ? "#E11D48" : "#FFFFFF" }}>{scen.title}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>⏱ {scen.executionTime}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Scenario Card */}
            {currentScenario && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScenario.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "#09090D", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.85)" }}
                >
                  {/* Top Bar */}
                  <div style={{ background: "#0E0E14", padding: "18px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                      </div>
                      <span style={{ fontSize: "0.84rem", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
                        {currentScenario.sourceApp} ➔ {currentScenario.targetApp}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ padding: "4px 12px", backgroundColor: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px", color: "#10B981", fontSize: "0.78rem", fontWeight: 700 }}>
                        ● {currentScenario.status}
                      </span>
                      <span style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>
                        Latency: {currentScenario.executionTime}
                      </span>
                    </div>
                  </div>

                  {/* Body Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="sim-grid">
                    {/* Left: Trigger & Description */}
                    <div style={{ padding: "32px", borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Activity size={13} color="#E11D48" /> Inbound Webhook Event
                        </div>
                        <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px 0" }}>
                          {currentScenario.title}
                        </h4>
                        <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "18px", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", fontStyle: "italic", lineHeight: 1.6, marginBottom: "20px" }}>
                          "{currentScenario.trigger}"
                        </div>
                      </div>

                      <div>
                        <a
                          href="https://devopstrio.co.uk/contact#contact-form"
                          target="_blank"
                          rel="noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700, padding: "12px 24px", borderRadius: "8px", boxShadow: "0 4px 18px rgba(225,29,72,0.35)" }}
                        >
                          Deploy This Connector <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>

                    {/* Right: Live JSON Payload */}
                    <div style={{ padding: "28px", backgroundColor: "#06060A" }}>
                      <div style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                        <Code size={13} color="#10B981" /> Bi-Directional JSON Sync Payload
                      </div>
                      <pre style={{ margin: 0, padding: "16px", background: "rgba(0,0,0,0.5)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.04)", fontSize: "0.78rem", color: "#E2E8F0", fontFamily: "monospace", lineHeight: 1.55, overflowX: "auto", maxHeight: "300px" }}>
                        {JSON.stringify(currentScenario.payload, null, 2)}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <style>{`
            @media (max-width: 860px) { .sim-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          6. ENTERPRISE SECURITY & DATA GOVERNANCE
      ═══════════════════════════════════════════════════════════════ */}
      {securityProtocols.length > 0 && (
        <section style={{ padding: "120px 5% 100px 5%", backgroundColor: "#020203" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
            <FadeUp>
              <SectionHeading
                tag="ENTERPRISE SECURITY & GOVERNANCE"
                title="Zero-Trust Architecture &"
                accent="Compliance"
                subtitle="Engineered for high-security enterprise environments with strict cryptographic guarantees."
              />
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {securityProtocols.map((sec, idx) => (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div
                    className="sec-card"
                    style={{
                      background: "linear-gradient(145deg, #09090E 0%, #060609 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "18px",
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "220px",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <div>
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "rgba(225,29,72,0.12)", border: "1px solid rgba(225,29,72,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                        <Shield size={18} color="#E11D48" />
                      </div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px 0" }}>
                        {sec.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
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
          7. CO-INTEGRATION CASE STUDY
      ═══════════════════════════════════════════════════════════════ */}
      {data.caseStudy && (
        <section style={{ padding: "80px 5% 60px 5%", backgroundColor: "#020203" }}>
          <FadeUp>
            <div style={{ maxWidth: "1280px", margin: "0 auto", background: "linear-gradient(145deg, #0A0A0E 0%, #07070B 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", overflow: "hidden", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", alignItems: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.8)" }} className="case-grid">
              <div style={{ padding: "52px 44px" }}>
                <div style={{ color: "#E11D48", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Award size={15} /> {data.caseStudy.industry} // {data.caseStudy.client}
                </div>
                <h3 style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.35, margin: "0 0 18px 0" }}>
                  {data.caseStudy.headline}
                </h3>
                <p style={{ fontSize: "0.96rem", color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 20px 0" }}>
                  "{data.caseStudy.quote}"
                </p>
                <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.88rem", marginBottom: "24px" }}>
                  {data.caseStudy.author} <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>— {data.caseStudy.company}</span>
                </div>
                <div style={{ display: "flex", gap: "28px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", flexWrap: "wrap" }}>
                  {data.caseStudy.results.map((res, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#E11D48" }}>{res.stat}</div>
                      <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{res.label}</div>
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
          8. CUSTOM INTEGRATION CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 5% 150px 5%", backgroundColor: "#020203", textAlign: "center" }}>
        <FadeUp>
          <div style={{ maxWidth: "900px", margin: "0 auto", background: "radial-gradient(circle at center, rgba(225,29,72,0.18) 0%, rgba(12,12,16,0.96) 65%)", border: "1px solid rgba(225,29,72,0.3)", borderRadius: "28px", padding: "70px 40px", boxShadow: "0 30px 80px rgba(225,29,72,0.15)" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
              Connect Your Stack with <span style={{ color: "#E11D48" }}>{data.name}</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", margin: "0 auto 34px auto", lineHeight: 1.7 }}>
              Need a custom connector for proprietary internal APIs, legacy mainframe databases, or private cloud endpoints? We build and deploy verified enterprise connectors in days.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://devopstrio.co.uk/contact#contact-form"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700, padding: "15px 34px", borderRadius: "10px", boxShadow: "0 8px 32px rgba(225,29,72,0.5)", transition: "all 0.25s ease" }}
                className="cta-primary-btn"
              >
                Request Enterprise Connector <ArrowRight size={17} />
              </a>
              <a
                href="https://devopstrio.co.uk/contact#contact-form"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "15px 30px", borderRadius: "10px", transition: "all 0.25s ease" }}
                className="cta-secondary-btn"
              >
                Explore SDK Documentation
              </a>
            </div>
          </div>
          <style>{`
            .cta-primary-btn:hover { background-color: #BE123C !important; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(225,29,72,0.6) !important; }
            .cta-secondary-btn:hover { background-color: rgba(255,255,255,0.1) !important; transform: translateY(-3px); }
            @media (max-width: 860px) { .case-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </FadeUp>
      </section>

    </div>
  );
}
