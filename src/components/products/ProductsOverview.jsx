import React, { useEffect } from "react";
import RepresentativeCTA from "../ui/RepresentativeCTA";
import FAQ from "../ui/FAQ";
import { PRODUCTS_OVERVIEW_FAQS } from "../../data/faqs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Scale, 
  Users, 
  Briefcase, 
  FileText, 
  Headphones, 
  LineChart 
} from "lucide-react";

import ProductsGrid from "./ProductsGrid";
import ProductsEcosystem from "./ProductsEcosystem";
import oldHeroImg from "../../assets/fresh/augmented_reality_simulation.jpg";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';
const BRAND_RED = "#E11D48";

/**
 * ============================================================================
 * ELEGANT ENTERPRISE NETWORK CORE ANIMATION
 * ============================================================================
 * Clean, subtle, non-gaming visualization of an integrated AI network core.
 */
function NetworkCoreVisual({ reducedMotion = false }) {
  const nodes = [
    { label: "Platforms", angle: 0, r: 140, color: BRAND_RED },
    { label: "Productivity", angle: 90, r: 140, color: "#FFFFFF" },
    { label: "Business AI", angle: 180, r: 140, color: BRAND_RED },
    { label: "Intelligence", angle: 270, r: 140, color: "#FFFFFF" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "520px", height: "460px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Ambient background glow */}
      <div style={{ position: "absolute", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(0,0,0,0) 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
      
      <svg viewBox="0 0 460 460" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Orbital rings */}
        <circle cx="230" cy="230" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="230" cy="230" r="90" fill="none" stroke="rgba(225,29,72,0.18)" strokeWidth="1" />
        <circle cx="230" cy="230" r="190" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Dynamic rotating ring */}
        <motion.circle
          cx="230"
          cy="230"
          r="140"
          fill="none"
          stroke="url(#coreGradient)"
          strokeWidth="2"
          strokeDasharray="40 180"
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "230px 230px" }}
        />

        <defs>
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central Intelligence Core */}
        <motion.circle
          cx="230"
          cy="230"
          r="44"
          fill="#0D0D10"
          stroke={BRAND_RED}
          strokeWidth="2"
          animate={reducedMotion ? {} : { scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="230" cy="230" r="28" fill="rgba(225,29,72,0.12)" />
        <text x="230" y="226" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily={FONT} letterSpacing="0.05em">
          DEVOPSTRIO
        </text>
        <text x="230" y="242" textAnchor="middle" fill={BRAND_RED} fontSize="10" fontWeight="600" fontFamily={FONT} letterSpacing="0.1em">
          AI CORE
        </text>

        {/* Connecting Lines and Orbiting Nodes */}
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = 230 + Math.cos(rad) * node.r;
          const ny = 230 + Math.sin(rad) * node.r;
          return (
            <g key={i}>
              <line x1="230" y1="230" x2={nx} y2={ny} stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx={nx} cy={ny} r="18" fill="#121216" stroke={node.color} strokeWidth="1.5" />
              <circle cx={nx} cy={ny} r="5" fill={node.color} />
              <text x={nx} y={ny + 32} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontWeight="600" fontFamily={FONT}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function ProductsOverview() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToProductGrid = () => {
    document.getElementById("product-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  // 4 Business Value Points
  const valueCards = [
    {
      icon: Zap,
      title: "Accelerate productivity",
      desc: "Reduce manual, repetitive cognitive effort and empower teams to deliver higher-quality work in significantly less time."
    },
    {
      icon: Workflow,
      title: "Automate workflows",
      desc: "Streamline cross-system enterprise processes with autonomous AI agents that handle edge-cases and exceptions gracefully."
    },
    {
      icon: BarChart3,
      title: "Improve decision-making",
      desc: "Convert fragmented, unstructured enterprise data into verifiable, real-time operational intelligence across leadership."
    },
    {
      icon: ShieldCheck,
      title: "Scale with confidence",
      desc: "Adopt enterprise AI in a structured, audit-ready architecture with strict access governance, data privacy, and zero vendor lock-in."
    }
  ];

  // 6 Where Our Products Fit Blocks
  const fitAudience = [
    {
      icon: Users,
      role: "Operations teams",
      desc: "Streamline process execution, gain end-to-end operational visibility, and eliminate manual coordination bottlenecks."
    },
    {
      icon: FileText,
      role: "Knowledge workers",
      desc: "Accelerate information retrieval across documents and code repositories with grounded, hallucination-free neural search."
    },
    {
      icon: Briefcase,
      role: "Business functions",
      desc: "Deploy domain-trained intelligence across HR, legal review, financial reconciliation, and outbound marketing workflows."
    },
    {
      icon: Headphones,
      role: "Customer-facing teams",
      desc: "Deliver sub-second empathetic support, automated multilingual ticket resolution, and live agent guidance."
    },
    {
      icon: LineChart,
      role: "Service delivery teams",
      desc: "Enhance client fulfillment velocity, automate technical diagnostics, and maintain 100% SLA adherence."
    },
    {
      icon: Scale,
      role: "Enterprise leadership",
      desc: "Gain unified visibility into cross-departmental AI adoption, robust data governance, and strategic growth drivers."
    }
  ];

  return (
    <div style={{ backgroundColor: "#000000", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>
      
      {/* ==================================================================== */}
      {/* 1. HERO SECTION — Clean Enterprise Product Portfolio Header (NEW)   */}
      {/* ==================================================================== */}
      <section style={{ position: "relative", width: "100%", minHeight: "84vh", display: "flex", alignItems: "center", paddingTop: "130px", paddingBottom: "70px", boxSizing: "border-box", overflow: "hidden" }}>
        {/* Subtle radial ambient background glow */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(225,29,72,0.12) 0%, rgba(0,0,0,0) 70%)", filter: "blur(70px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", width: "100%", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "60px", alignItems: "center" }} className="hero-split-grid">
          
          {/* Left: Clean, Focused Content */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(225,29,72,0.28)", backgroundColor: "rgba(225,29,72,0.1)", color: BRAND_RED, fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: BRAND_RED, boxShadow: `0 0 8px ${BRAND_RED}` }} />
              AI PRODUCT ECOSYSTEM
            </div>

            <h1 style={{ fontSize: "clamp(2.35rem, 4.2vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.035em", margin: "0 0 22px 0", color: "#FFFFFF" }}>
              AI Products for Modern <br />
              <span style={{ color: "rgba(255,255,255,0.95)" }}>Enterprise Operations</span>
            </h1>

            <p style={{ fontSize: "clamp(1.05rem, 1.25vw, 1.15rem)", color: "#D4D4D8", lineHeight: 1.65, margin: "0 0 36px 0", maxWidth: "600px", fontWeight: 400 }}>
              A growing portfolio of AI products across business platforms, productivity, operations, and enterprise intelligence.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <motion.button
                onClick={scrollToProductGrid}
                whileHover={{ scale: 1.02, backgroundColor: "#be123c" }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", backgroundColor: BRAND_RED, color: "#FFFFFF", borderRadius: "8px", fontSize: "14.5px", fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(225,29,72,0.3)", transition: "all 0.25s ease" }}
              >
                Explore Products <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href="https://devopstrio.co.uk/contact#contact-form"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", backgroundColor: "rgba(255,255,255,0.04)", color: "#FFFFFF", borderRadius: "8px", fontSize: "14.5px", fontWeight: 600, textDecoration: "none", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.12)", cursor: "pointer", transition: "all 0.25s ease" }}
              >
                Talk to Our Team
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Premium Animated Network Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <NetworkCoreVisual />
          </motion.div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. SECTION AFTER HERO — MODULAR ARCHITECTURE (WITH OLD HERO IMAGE)  */}
      {/* ==================================================================== */}
      <section style={{ padding: "110px 24px", backgroundColor: "#060608", borderWidth: "1px 0", borderStyle: "solid", borderColor: "rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "68px", alignItems: "center" }} className="ecosystem-split-grid">
          
          {/* Left: Reused Old Hero Image in Sleek Enterprise Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", borderRadius: "20px", overflow: "hidden", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.12)", background: "#0B0B0E", boxShadow: "0 24px 60px rgba(0,0,0,0.8)" }}
          >
            <div style={{ position: "absolute", top: "-10%", left: "-10%", right: "-10%", bottom: "-10%", background: "radial-gradient(circle, rgba(225,29,72,0.18) 0%, rgba(0,0,0,0) 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
            <img 
              src={oldHeroImg} 
              alt="Devopstrio AI Platform Architecture Simulation"
              style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", position: "relative", zIndex: 1 }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 60%, rgba(6,6,8,0.92) 100%)", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: "24px", left: "28px", right: "28px", zIndex: 3 }}>
              <div style={{ color: BRAND_RED, fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                CONNECTED PLATFORM
              </div>
              <div style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 600, letterSpacing: "-0.01em" }}>
                Enterprise Intelligence Core
              </div>
            </div>
          </motion.div>

          {/* Right: Strategic Overview Block */}
          <div>
            <div style={{ color: BRAND_RED, fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
              MODULAR ARCHITECTURE
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.18, letterSpacing: "-0.03em", margin: "0 0 20px 0" }}>
              Built as a connected <br />
              <span style={{ color: "rgba(255,255,255,0.95)" }}>AI product ecosystem</span>
            </h2>

            <p style={{ fontSize: "1.0625rem", color: "#D4D4D8", lineHeight: 1.7, margin: "0 0 36px 0", maxWidth: "600px", fontWeight: 400 }}>
              Devopstrio AI Products are designed as a modular ecosystem—helping teams improve workflows, accelerate productivity, automate business operations, and support enterprise decision-making across core functions.
            </p>

            {/* 4 Supporting Points */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="supporting-points-grid">
              {[
                { title: "Modular by design", desc: "Deploy standalone tools or connect into an integrated AI fabric." },
                { title: "Built for enterprise workflows", desc: "Engineered for compliance, role-based access, and human oversight." },
                { title: "Ready for integration", desc: "Native connectors for ERP, CRM, Slack, and cloud databases." },
                { title: "Scalable across teams", desc: "Grows seamlessly from pilot use-cases to company-wide automation." },
              ].map((point, pIdx) => (
                <div key={pIdx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color={BRAND_RED} style={{ flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF", margin: "0 0 4px 0" }}>{point.title}</h4>
                    <p style={{ fontSize: "13px", color: "#A1A1AA", margin: 0, lineHeight: 1.5 }}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. PLATFORM ARCHITECTURE — Unified Ecosystem (RESTORED FROM OLD)     */}
      {/* ==================================================================== */}
      <ProductsEcosystem />

      {/* ==================================================================== */}
      {/* 4. PRODUCT PORTFOLIO — Interactive 3D Flip Grid (RESTORED FROM OLD)  */}
      {/* ==================================================================== */}
      <ProductsGrid />

      {/* ==================================================================== */}
      {/* 5. VALUE CREATION — How these products create value (KEPT)           */}
      {/* ==================================================================== */}
      <section style={{ padding: "110px 24px", backgroundColor: "#060608", borderWidth: "1px 0", borderStyle: "solid", borderColor: "rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ color: BRAND_RED, fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
              ENTERPRISE VALUE
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.03em", margin: "0 0 16px 0" }}>
              Designed to create measurable business value
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#A1A1AA", lineHeight: 1.65, maxWidth: "640px", margin: "0 auto", fontWeight: 400 }}>
              Purpose-built applications that deliver operational velocity, accuracy, and enterprise scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="value-cards-grid">
            {valueCards.map((val, vIdx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={vIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: vIdx * 0.08 }}
                  style={{
                    backgroundColor: "#0B0B0E",
                    borderRadius: "18px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(255,255,255,0.08)",
                    padding: "32px 26px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease"
                  }}
                  className="value-card"
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "rgba(225,29,72,0.12)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(225,29,72,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <IconComp size={22} color={BRAND_RED} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#FFFFFF", margin: "0 0 10px 0" }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#D4D4D8", lineHeight: 1.6, margin: 0 }}>
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <style>{`
            .value-card:hover {
              border-color: rgba(225,29,72,0.4) !important;
              transform: translateY(-4px);
              box-shadow: 0 12px 30px rgba(0,0,0,0.5);
            }
          `}</style>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. USAGE CONTEXT — Where our products fit (KEPT)                     */}
      {/* ==================================================================== */}
      <section style={{ padding: "120px 24px", backgroundColor: "#000000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ color: BRAND_RED, fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
              DEPLOYMENT CONTEXT
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.03em", margin: "0 0 16px 0" }}>
              Where Devopstrio AI Products fit
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#A1A1AA", lineHeight: 1.65, maxWidth: "640px", margin: "0 auto", fontWeight: 400 }}>
              Structured, mission-critical intelligence engineered for cross-functional teams and operational domains.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }} className="fit-cards-grid">
            {fitAudience.map((item, iIdx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={iIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: iIdx * 0.08 }}
                  style={{
                    backgroundColor: "#0B0B0E",
                    borderRadius: "18px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(255,255,255,0.08)",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease"
                  }}
                  className="fit-card"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.04)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <IconComponent size={18} color="#FFFFFF" />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#FFFFFF", margin: 0 }}>
                      {item.role}
                    </h3>
                  </div>

                  <p style={{ fontSize: "14px", color: "#D4D4D8", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <style>{`
            .fit-card:hover {
              border-color: rgba(225,29,72,0.35) !important;
              transform: translateY(-4px);
              box-shadow: 0 12px 30px rgba(0,0,0,0.5);
            }
          `}</style>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6.5 FAQ SECTION */}
      <FAQ
        faqs={PRODUCTS_OVERVIEW_FAQS}
        badge="AI PRODUCTS FAQ"
        title="Enterprise AI Suite:"
        highlight="Frequently Asked Questions"
      />

      {/* 7. UNIVERSAL REPRESENTATIVE CTA */}
      <RepresentativeCTA
        title="Ready to Explore The Right"
        highlightText="AI Product For Your Business?"
        description="Discover the products that match your workflows, teams, and enterprise priorities."
        primaryBtnText="Explore All Products"
        primaryBtnOnClick={scrollToProductGrid}
        secondaryBtnText="Contact Us"
        secondaryBtnHref="https://devopstrio.co.uk/contact"
      />

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-split-grid > div:first-child {
            margin: 0 auto;
          }
          .hero-split-grid div {
            justify-content: center !important;
          }
          .ecosystem-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .value-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .fit-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .supporting-points-grid {
            grid-template-columns: 1fr !important;
          }
          .value-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .fit-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
