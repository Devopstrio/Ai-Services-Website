import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getProductData } from "../../data/products";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Layers,
  Cpu,
  UserCheck,
  BarChart3,
  Lock,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

export default function ProductDetail() {
  const params = useParams();
  const location = useLocation();
  
  // Extract slug from URL path (e.g. "/products/business-platforms/safesign-ai" -> "safesign-ai")
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathSegments[pathSegments.length - 1] || "";
  const productSlug = params.productId || slugFromPath || "aihire";
  const data = getProductData(productSlug);

  const [activeTab, setActiveTab] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState(0);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab(0);
    setSelectedPersona(0);
  }, [location.pathname]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff", fontFamily: FONT }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const activeFeature = (data.features && data.features[activeTab]) ? data.features[activeTab] : (data.features?.[0] || null);
  const currentPersona = (data.interactiveDemo?.personas && data.interactiveDemo.personas[selectedPersona]) ? data.interactiveDemo.personas[selectedPersona] : (data.interactiveDemo?.personas?.[0] || null);

  return (
    <div style={{ backgroundColor: "#000000", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>
      
      {/* 1. CINEMATIC PRODUCT HERO */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "140px",
          paddingBottom: "90px"
        }}
      >
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img
            src={data.hero.bgImage}
            alt={data.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 30%, rgba(225,29,72,0.18) 0%, rgba(0,0,0,0.85) 65%, #000000 100%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, #000000 100%)"
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "left",
            maxWidth: "1280px",
            width: "100%",
            padding: "0 24px",
            opacity: opacityText
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                backgroundColor: "rgba(225,29,72,0.15)",
                border: "1px solid rgba(225,29,72,0.35)",
                borderRadius: "999px",
                color: "#E11D48",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              <Sparkles size={14} /> {data.hero.badge}
            </span>
            <span
              style={{
                padding: "6px 14px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.8rem",
                fontWeight: 600
              }}
            >
              {data.hero.liveBadge}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.6rem, 5.2vw, 4.6rem)",
              lineHeight: 1.12,
              fontWeight: 700,
              margin: "0 0 22px 0",
              letterSpacing: "-0.03em"
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}>{data.hero.titleLight} </span>
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>{data.hero.titleBold}</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              margin: "0 0 34px 0",
              maxWidth: "840px"
            }}
          >
            {data.hero.description}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              to="/products/overview"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#E11D48",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 20px rgba(225,29,72,0.35)"
              }}
              className="product-back-btn"
            >
              <ArrowLeft size={16} /> View All Products
            </Link>

            <a
              href="https://devopstrio.co.uk/contact#contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                transition: "all 0.25s ease"
              }}
              className="product-demo-btn"
            >
              Book a Live Demo <ArrowRight size={16} />
            </a>

            <style>{`
              .product-back-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(225,29,72,0.5) !important; }
              .product-demo-btn:hover { background-color: #E2E8F0 !important; transform: translateY(-2px); }
            `}</style>
          </div>
        </motion.div>
      </section>

      {/* 2. METRICS BANNER - Glassmorphism Strip */}
      <section style={{ position: "relative", zIndex: 10, marginTop: "-40px", padding: "0 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            background: "rgba(15,15,15,0.75)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "36px 20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px"
          }}
        >
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className="metric-box"
              style={{
                textAlign: "center",
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid transparent",
                transition: "all 0.3s ease"
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.6rem, 3.8vw, 3.6rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "8px"
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#E11D48",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  marginBottom: "4px"
                }}
              >
                {metric.label}
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                {metric.sub}
              </div>
            </div>
          ))}
          <style>{`
            .metric-box:hover {
              background: rgba(255,255,255,0.03);
              border-color: rgba(225,29,72,0.3) !important;
              transform: translateY(-4px);
            }
          `}</style>
        </div>
      </section>

      {/* 3. PRODUCT OVERVIEW */}
      <section style={{ padding: "120px 5% 100px 5%" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "60px",
            alignItems: "center"
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>
              ENTERPRISE PLATFORM OVERVIEW
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.4vw, 2.9rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, margin: "0 0 24px 0", letterSpacing: "-0.02em" }}>
              {data.overview.heading}
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8, margin: "0 0 32px 0", whiteSpace: "pre-line" }}>
              {data.overview.description}
            </p>
            <a
              href="https://devopstrio.co.uk/contact#contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#E11D48",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px"
              }}
            >
              Request Custom Walkthrough <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "36px"
            }}
          >
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Zap color="#E11D48" size={20} /> Core Architectural Pillars
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {data.overview.keyPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "3px", color: "#E11D48", flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.98rem", lineHeight: 1.6 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. INTERACTIVE FEATURE DEEP-DIVE (Tabbed Product Capabilities) */}
      <section style={{ padding: "80px 5% 120px 5%", backgroundColor: "#050505" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>
              MODULAR CAPABILITIES
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)", fontWeight: 700, color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em" }}>
              Engineered for Precision & <span style={{ color: "#E11D48" }}>Scale</span>
            </h2>
          </div>

          {/* Tab navigation buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "45px" }}>
            {data.features.map((feat, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "999px",
                    border: `1px solid ${isActive ? "#E11D48" : "rgba(255,255,255,0.1)"}`,
                    backgroundColor: isActive ? "#E11D48" : "rgba(255,255,255,0.03)",
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                    fontFamily: FONT,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.25s ease"
                  }}
                >
                  {feat.tabTitle}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          {activeFeature && (
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                alignItems: "center"
              }}
            >
              <div style={{ padding: "48px 40px" }}>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px 0", letterSpacing: "-0.01em" }}>
                  {activeFeature.title}
                </h3>
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.7, margin: "0 0 28px 0" }}>
                  {activeFeature.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {activeFeature.highlights.map((h, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E11D48" }} />
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", fontWeight: 500 }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.2) 50%, transparent 100%)" }} />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. INTERACTIVE CANDIDATE INTELLIGENCE SIMULATOR */}
      {data.interactiveDemo && (
        <section style={{ padding: "100px 24px", backgroundColor: "#000000" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>
                LIVE PRODUCT SIMULATOR
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
                {data.interactiveDemo.title}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
                {data.interactiveDemo.subtitle}
              </p>
            </div>

            {/* Persona Switcher Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
              {data.interactiveDemo.personas.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPersona(idx)}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: `1px solid ${selectedPersona === idx ? "#E11D48" : "rgba(255,255,255,0.1)"}`,
                    backgroundColor: selectedPersona === idx ? "rgba(225,29,72,0.15)" : "#0A0A0A",
                    color: "#FFFFFF",
                    fontFamily: FONT,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: selectedPersona === idx ? "#E11D48" : "#FFFFFF" }}>{p.name}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>{p.role}</div>
                </button>
              ))}
            </div>

            {/* Simulated Candidate Dossier Card */}
            {currentPersona && (
              <motion.div
                key={selectedPersona}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                style={{
                  maxWidth: "1050px",
                  margin: "0 auto",
                  background: "linear-gradient(135deg, #0D0D0D 0%, #141414 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "28px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                        {currentPersona.name}
                      </h3>
                      <span style={{ padding: "4px 12px", backgroundColor: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "999px", color: "#22C55E", fontSize: "0.8rem", fontWeight: 700 }}>
                        {currentPersona.matchGrade}
                      </span>
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginTop: "4px" }}>
                      {currentPersona.role} • {currentPersona.experience}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "#E11D48", lineHeight: 1 }}>
                      {currentPersona.matchScore}%
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      AI Match Index
                    </div>
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "18px 24px", marginBottom: "30px", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  <strong style={{ color: "#FFFFFF", display: "block", marginBottom: "4px" }}>Cognitive Interview Synthesis:</strong>
                  {currentPersona.summary}
                </div>

                {/* Skill Bars */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
                  {currentPersona.competencies.map((comp, idx) => (
                    <div key={idx} style={{ background: "#080808", padding: "16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "8px" }}>
                        <span>{comp.skill}</span>
                        <span style={{ color: "#E11D48" }}>{comp.score}%</span>
                      </div>
                      <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{ width: `${comp.score}%`, height: "100%", backgroundColor: "#E11D48", borderRadius: "999px" }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Predictive Hiring Insight */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                    <Sparkles size={16} color="#E11D48" />
                    <span>{currentPersona.aiInsight}</span>
                  </div>
                  <a
                    href="https://devopstrio.co.uk/contact#contact-form"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#E11D48",
                      color: "#FFFFFF",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 700
                    }}
                  >
                    Fast-Track in Production →
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* 6. HOW IT WORKS / WORKFLOW */}
      <section style={{ padding: "100px 24px", backgroundColor: "#050505" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>
              END-TO-END PIPELINE
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)", fontWeight: 700, color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em" }}>
              How <span style={{ color: "#E11D48" }}>{data.name}</span> Operates
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {data.workflow.map((st, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease"
                }}
                className="step-box"
              >
                <div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#E11D48", marginBottom: "16px", opacity: 0.9 }}>
                    {st.step}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px 0" }}>
                    {st.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
            <style>{`
              .step-box:hover {
                border-color: rgba(225,29,72,0.4) !important;
                transform: translateY(-6px);
                box-shadow: 0 12px 35px rgba(225,29,72,0.15);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE INTEGRATIONS & SECURITY */}
      <section style={{ padding: "100px 24px", backgroundColor: "#000000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "60px" }}>
          {/* Integrations */}
          <div>
            <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>
              ECOSYSTEM SYNC
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 24px 0", letterSpacing: "-0.01em" }}>
              Native ATS & HRIS Connectors
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {data.integrations.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0A0A0A",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "16px",
                    transition: "border-color 0.2s ease"
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "4px" }}>{item.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#E11D48", fontWeight: 600 }}>{item.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div>
            <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>
              GOVERNANCE & TRUST
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 24px 0", letterSpacing: "-0.01em" }}>
              Enterprise Security Standards
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {data.security.map((sec, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0A0A0A",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                  }}
                >
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "rgba(225,29,72,0.15)", border: "1px solid rgba(225,29,72,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E11D48", flexShrink: 0 }}>
                    <Shield size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF" }}>{sec.label}</div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{sec.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CASE STUDY SPOTLIGHT */}
      {data.caseStudy && (
        <section style={{ padding: "80px 5% 120px 5%", backgroundColor: "#050505" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              alignItems: "center"
            }}
          >
            <div style={{ padding: "50px 45px" }}>
              <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                CUSTOMER SUCCESS SPOTLIGHT • {data.caseStudy.client}
              </div>
              <h3 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.3, margin: "0 0 20px 0" }}>
                "{data.caseStudy.headline}"
              </h3>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 28px 0" }}>
                "{data.caseStudy.quote}"
              </p>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.95rem" }}>
                {data.caseStudy.author}, <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>{data.caseStudy.company}</span>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "16px", marginTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
                {data.caseStudy.results.map((res, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#E11D48" }}>{res.stat}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px" }}>
              <img
                src={data.caseStudy.image}
                alt={data.caseStudy.client}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.1) 40%, transparent 100%)" }} />
            </div>
          </div>
        </section>
      )}

      {/* 9. BOTTOM CONVERSION CTA BANNER */}
      <section style={{ padding: "100px 5% 120px 5%", backgroundColor: "#000000", textAlign: "center" }}>
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            background: "radial-gradient(circle at center, rgba(225,29,72,0.2) 0%, rgba(15,15,15,0.95) 70%)",
            border: "1px solid rgba(225,29,72,0.35)",
            borderRadius: "28px",
            padding: "70px 40px",
            boxShadow: "0 25px 80px rgba(225,29,72,0.15)"
          }}
        >
          <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 800, color: "#FFFFFF", margin: "0 0 18px 0", letterSpacing: "-0.02em" }}>
            Ready to Deploy <span style={{ color: "#E11D48" }}>{data.name}</span> in Your Enterprise?
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)", maxWidth: "650px", margin: "0 auto 36px auto", lineHeight: 1.6 }}>
            Connect with our solution architects to schedule a custom proof-of-concept and see {data.name} in action with your enterprise data.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://devopstrio.co.uk/contact#contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#E11D48",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: "8px",
                boxShadow: "0 8px 30px rgba(225,29,72,0.4)"
              }}
            >
              Schedule Enterprise Demo <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
