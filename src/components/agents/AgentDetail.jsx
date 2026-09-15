import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getAgentData } from "../../data/agents";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Zap,
  Lock,
  Workflow,
  ChevronRight,
  Radio,
  XCircle,
  Bot,
  RotateCw,
  Award,
  ChevronLeft,
  Sparkles
} from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

/* ─── Fade-up animation wrapper ─── */
const FadeUp = ({ children, delay = 0, style = {}, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className} style={{ height: "100%", display: "flex", flexDirection: "column", ...style }}
  >
    {children}
  </motion.div>
);

/* ─── Section heading reusable block ─── */
const SectionHeading = ({ tag, title, accent, subtitle }) => (
  <div style={{ textAlign: "center", marginBottom: "72px", position: "relative", zIndex: 2 }}>
    {tag && (
      <div style={{ color: "#E11D48", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
        <Sparkles size={13} /> {tag}
      </div>
    )}
    <h2 style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 18px 0", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
      {title} {accent && <span style={{ color: "#E11D48", textShadow: "0 0 30px rgba(225,29,72,0.3)" }}>{accent}</span>}
    </h2>
    {subtitle && (
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.08rem", maxWidth: "620px", margin: "0 auto", lineHeight: 1.7 }}>
        {subtitle}
      </p>
    )}
  </div>
);

export default function AgentDetail() {
  const params = useParams();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathSegments[pathSegments.length - 1] || "";
  const agentSlug = params.agentId || slugFromPath || "hr-agent";
  const data = getAgentData(agentSlug);

  const [flippedCards, setFlippedCards] = useState({});
  const [selectedScenario, setSelectedScenario] = useState(0);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFlippedCards({});
    setSelectedScenario(0);
  }, [location.pathname]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff", fontFamily: FONT }}>
        <h2>Agent Service Not Found</h2>
      </div>
    );
  }

  const scenarios = data.interactiveDemo?.scenarios || [];
  const currentScenario = scenarios[selectedScenario] || scenarios[0] || null;

  return (
    <div style={{ backgroundColor: "#020203", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "160px", paddingBottom: "120px" }}
      >
        {/* Parallax Background */}
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img src={data.hero.bgImage} alt={data.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(225,29,72,0.18) 0%, rgba(2,2,3,0.7) 50%, #020203 100%), linear-gradient(135deg, rgba(2,2,3,0.92) 0%, rgba(2,2,3,0.6) 50%, rgba(2,2,3,0.95) 100%)" }} />
        </motion.div>

        {/* Ambient Top Glow */}
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(circle, rgba(225,29,72,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", width: "100%", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "60px", alignItems: "center" }}>

          {/* Left — Text */}
          <motion.div style={{ opacity: opacityText }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 16px", backgroundColor: "rgba(225,29,72,0.12)", border: "1px solid rgba(225,29,72,0.35)", borderRadius: "999px", color: "#E11D48", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "0 0 20px rgba(225,29,72,0.2)" }}>
                <Radio size={13} className="animate-pulse" /> {data.hero.badge}
              </span>
              <span style={{ padding: "7px 14px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", fontWeight: 600 }}>
                {data.hero.autonomyLevel}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 4.2vw, 3.8rem)", lineHeight: 1.12, fontWeight: 700, margin: "0 0 24px 0", letterSpacing: "-0.03em" }}>
              <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 300 }}>{data.hero.titleLight} </span>
              <span style={{ color: "#FFFFFF", textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>{data.hero.titleBold}</span>
            </h1>

            <p style={{ fontSize: "1.12rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: "0 0 40px 0", maxWidth: "580px" }}>
              {data.hero.description}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                to="/agents/overview"
                className="agent-hero-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "15px 30px", borderRadius: "10px", transition: "all 0.25s ease", boxShadow: "0 4px 24px rgba(225,29,72,0.4)" }}
              >
                <ArrowLeft size={16} /> All AI Agents
              </Link>
              <a
                href="https://devopstrio.co.uk/contact#contact-form"
                className="agent-demo-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#FFFFFF", color: "#0A0A0E", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "15px 30px", borderRadius: "10px", transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(255,255,255,0.15)" }}
              >
                Request Demo <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right — Clean Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ background: "linear-gradient(145deg, rgba(12,12,18,0.85) 0%, rgba(8,8,12,0.95) 100%)", backdropFilter: "blur(24px)", border: "1px solid rgba(225,29,72,0.25)", borderRadius: "24px", padding: "40px", boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(225,29,72,0.12)" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", paddingBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981", boxShadow: "0 0 14px #10B981" }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.06em", color: "rgba(255,255,255,0.9)" }}>AGENT RUNTIME — ACTIVE</span>
              </div>
              <span style={{ fontSize: "0.75rem", color: "#E11D48", fontFamily: "monospace", fontWeight: 700, background: "rgba(225,29,72,0.1)", padding: "3px 8px", borderRadius: "4px" }}>
                v4.2 PROD
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { label: "Active Tasks", value: data.hero.agentStatus?.activeTasks || "42", color: "#FFFFFF" },
                { label: "Latency", value: data.hero.agentStatus?.latency || "420ms", color: "#10B981" },
                { label: "Connected APIs", value: data.hero.agentStatus?.connectedTools || "18", color: "#E11D48" },
                { label: "Autonomy", value: data.hero.agentStatus?.autonomyScore || "99.4%", color: "#FFFFFF" }
              ].map((stat, i) => (
                <div key={i} style={{ padding: "18px", background: "rgba(255,255,255,0.025)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.06)", transition: "all 0.25s ease" }} className="hero-stat-box">
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>{stat.label}</div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: stat.color }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          .agent-hero-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(225,29,72,0.6) !important; }
          .agent-demo-btn:hover { background-color: #F1F5F9 !important; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,255,255,0.25) !important; }
          .hero-stat-box:hover { border-color: rgba(225,29,72,0.3) !important; background: rgba(255,255,255,0.04) !important; }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — FLOATING METRICS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", zIndex: 10, marginTop: "-50px", padding: "0 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", background: "linear-gradient(180deg, rgba(14,14,20,0.9) 0%, rgba(8,8,12,0.95) 100%)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "22px", padding: "44px 36px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(225,29,72,0.08)" }}>
          {data.metrics.map((m, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="metric-item" style={{ textAlign: "center", padding: "12px", borderRadius: "12px", transition: "all 0.3s ease" }}>
                <div style={{ fontSize: "clamp(2.4rem, 3.6vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1, marginBottom: "10px" }}>{m.value}</div>
                <div style={{ fontSize: "0.92rem", color: "#E11D48", fontWeight: 700, marginBottom: "4px" }}>{m.label}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{m.sub}</div>
              </div>
            </FadeUp>
          ))}
        </div>
        <style>{`
          .metric-item:hover { transform: translateY(-4px); background: rgba(255,255,255,0.02); }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — OVERVIEW
      ═══════════════════════════════════════════════════════════════ */}
      {data.overview && (
        <section style={{ padding: "160px 5% 120px 5%", backgroundColor: "#020203", position: "relative" }}>
          {/* Ambient Glow */}
          <div style={{ position: "absolute", top: "20%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "80px", alignItems: "start" }}>
            <FadeUp>
              <div style={{ color: "#E11D48", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "18px" }}>OVERVIEW</div>
              <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 24px 0", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                {data.overview.heading}
              </h2>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                {data.overview.description.split("\n\n").map((p, i) => (
                  <p key={i} style={{ margin: i === 0 ? "0 0 20px 0" : "0" }}>{p}</p>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {data.overview.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "22px 24px", background: "linear-gradient(145deg, #09090D 0%, #0D0D12 100%)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", transition: "all 0.25s ease" }}
                    className="overview-card"
                  >
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "rgba(225,29,72,0.12)", border: "1px solid rgba(225,29,72,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle2 size={18} color="#E11D48" />
                    </div>
                    <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, paddingTop: "6px" }}>{point}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
          <style>{`.overview-card:hover { border-color: rgba(225,29,72,0.35) !important; transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 20px rgba(225,29,72,0.1); }`}</style>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — CAPABILITIES (3D Flip Cards)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "120px 5% 140px 5%", backgroundColor: "#060609", position: "relative" }}>
        {/* Center Glow */}
        <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "500px", background: "radial-gradient(circle, rgba(225,29,72,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <SectionHeading
              tag="ENTERPRISE CAPABILITIES"
              title="Autonomous Operations at"
              accent="Scale"
              subtitle="Explore each capability — click to flip and see the verified specifications."
            />
          </FadeUp>

          <div style={{ maxWidth: "1160px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "36px" }}>
            {data.capabilities.map((cap) => {
              const isFlipped = !!flippedCards[cap.id];
              return (
                <FadeUp key={cap.id}>
                  <div style={{ perspective: "1200px", height: "440px" }}>
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}
                    >
                      {/* FRONT */}
                      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", background: "linear-gradient(145deg, #0A0A0F 0%, #07070B 100%)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 15px 45px rgba(0,0,0,0.6)" }} className="capability-front-card">
                        <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden", transform: "translateZ(0)", WebkitBackfaceVisibility: "hidden", isolation: "isolate" }}>
                          <img src={cap.image} alt={cap.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 35%, #0A0A0F 100%)" }} />
                          <span style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(225,29,72,0.3)", borderRadius: "999px", padding: "5px 14px", color: "#E11D48", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em" }}>
                            {cap.tag}
                          </span>
                          <span style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(12,12,18,0.9)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "5px 14px", color: "#FFFFFF", fontSize: "0.73rem", fontWeight: 700, boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
                            ⚡ {cap.metricBadge}
                          </span>
                        </div>

                        <div style={{ padding: "22px 26px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                          <div>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px 0", lineHeight: 1.3 }}>{cap.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{cap.description}</p>
                          </div>
                          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <button
                              onClick={() => toggleFlip(cap.id)}
                              style={{ background: "none", border: "none", color: "#E11D48", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", padding: 0, fontFamily: FONT }}
                            >
                              <RotateCw size={14} /> View Specifications
                            </button>
                            <span style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.35)" }}>Click to flip</span>
                          </div>
                        </div>
                      </div>

                      {/* BACK */}
                      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(145deg, #0C0C14 0%, #11111A 100%)", border: "1px solid rgba(225,29,72,0.35)", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 20px 50px rgba(225,29,72,0.12)" }}>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "16px", marginBottom: "22px" }}>
                            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#E11D48", textTransform: "uppercase", letterSpacing: "0.08em" }}>VERIFIED SPECIFICATIONS</span>
                            <span style={{ fontSize: "0.73rem", color: "#FFFFFF", fontWeight: 700, background: "rgba(225,29,72,0.15)", padding: "3px 10px", borderRadius: "4px" }}>{cap.tag}</span>
                          </div>
                          <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 22px 0" }}>{cap.title}</h4>
                          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {(cap.features || cap.highlights || []).map((f, idx) => (
                              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.88rem", color: "rgba(255,255,255,0.88)" }}>
                                <CheckCircle2 size={16} color="#E11D48" style={{ marginTop: "2px", flexShrink: 0 }} />
                                <span style={{ lineHeight: 1.55 }}>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => toggleFlip(cap.id)}
                          style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", color: "#FFFFFF", fontSize: "0.84rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: FONT, transition: "all 0.2s ease", marginTop: "20px" }}
                        >
                          <ChevronLeft size={14} /> Back to Overview
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — HOW IT WORKS (3-Step Pipeline)
      ═══════════════════════════════════════════════════════════════ */}
      {data.swarmTiers && (
        <section style={{ padding: "140px 24px", backgroundColor: "#020203", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <FadeUp>
              <SectionHeading
                tag="HOW IT WORKS"
                title="Three-Tier Cognitive"
                accent="Architecture"
                subtitle="From perception to execution — every step is sandboxed, auditable, and deterministic."
              />
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", position: "relative" }}>
              {data.swarmTiers.map((tier, idx) => (
                <FadeUp key={idx} delay={idx * 0.12}>
                  <div
                    className="tier-card"
                    style={{ position: "relative", zIndex: 1, background: "linear-gradient(145deg, #09090E 0%, #060609 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", width: "100%", transition: "all 0.3s ease" }}
                  >
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                        <span style={{ fontSize: "2rem", fontWeight: 800, color: "#E11D48", opacity: 0.5 }}>{tier.tier}</span>
                        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", fontWeight: 600, padding: "4px 12px", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.06)" }}>{tier.role}</span>
                      </div>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px 0" }}>{tier.name}</h3>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.93rem", lineHeight: 1.75, margin: 0 }}>{tier.description}</p>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px", marginTop: "auto" }}>
                      <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Technology</div>
                      <div style={{ fontSize: "0.85rem", color: "#FFFFFF", fontWeight: 600 }}>{tier.tech}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <style>{`.tier-card:hover { border-color: rgba(225,29,72,0.4) !important; transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.8), 0 0 30px rgba(225,29,72,0.15); }`}</style>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — WORKFLOW STUDIO (Clean Dashboard)
      ═══════════════════════════════════════════════════════════════ */}
      {data.interactiveDemo && currentScenario && (
        <section style={{ padding: "140px 24px", backgroundColor: "#060609", position: "relative" }}>
          {/* Ambient Glow */}
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(circle, rgba(225,29,72,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <SectionHeading
                tag="LIVE WORKFLOW STUDIO"
                title={data.interactiveDemo.title || "Agent Workflow Studio"}
                subtitle={data.interactiveDemo.subtitle}
              />
            </FadeUp>

            {/* Scenario Tabs */}
            <FadeUp delay={0.1}>
              <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
                {scenarios.map((scen, idx) => (
                  <button
                    key={scen.id}
                    onClick={() => setSelectedScenario(idx)}
                    style={{
                      padding: "14px 26px",
                      borderRadius: "12px",
                      border: `1px solid ${selectedScenario === idx ? "#E11D48" : "rgba(255,255,255,0.07)"}`,
                      backgroundColor: selectedScenario === idx ? "rgba(225,29,72,0.12)" : "#08080C",
                      boxShadow: selectedScenario === idx ? "0 0 20px rgba(225,29,72,0.2)" : "none",
                      color: "#FFFFFF",
                      fontFamily: FONT,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: selectedScenario === idx ? "#E11D48" : "#FFFFFF" }}>{scen.title}</div>
                    <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", marginTop: "3px" }}>
                      ⚡ {scen.executionTime} {scen.humanTime && `vs ${scen.humanTime} manual`}
                    </div>
                  </button>
                ))}
              </div>
            </FadeUp>

            {/* Studio Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedScenario}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                style={{ maxWidth: "1000px", margin: "0 auto", background: "linear-gradient(145deg, #0A0A0F 0%, #08080C 100%)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 30px rgba(225,29,72,0.06)" }}
              >
                {/* Top Bar */}
                <div style={{ background: "#0D0D14", padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Bot size={18} color="#E11D48" />
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#FFFFFF" }}>{currentScenario.title}</span>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>— {currentScenario.role}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ padding: "5px 14px", backgroundColor: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px", color: "#10B981", fontSize: "0.78rem", fontWeight: 700, boxShadow: "0 0 10px rgba(16,185,129,0.15)" }}>
                      ● {currentScenario.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "36px 32px" }}>
                  {/* Agents involved */}
                  {currentScenario.agentsInvolved && (
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                      {currentScenario.agentsInvolved.map((ag, i) => (
                        <span key={i} style={{ fontSize: "0.78rem", padding: "5px 14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "rgba(255,255,255,0.85)" }}>
                          🤖 {ag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Steps */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {(currentScenario.planSteps || []).map((st, i) => (
                      <div
                        key={i}
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderRadius: i === 0 ? "12px 12px 4px 4px" : i === (currentScenario.planSteps || []).length - 1 ? "4px 4px 12px 12px" : "4px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.4 }}>
                            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 700, marginRight: "8px" }}>{String(i + 1).padStart(2, "0")}</span>
                            {st.step}
                          </span>
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", flexShrink: 0, marginLeft: "16px" }}>{st.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", marginTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                    <div style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px" }}>
                      <span style={{ color: "#10B981", fontWeight: 700 }}>✓ Outcome: </span>{currentScenario.outcome}
                    </div>
                    <a
                      href="https://devopstrio.co.uk/contact#contact-form"
                      style={{ padding: "11px 24px", backgroundColor: "#E11D48", color: "#FFFFFF", borderRadius: "10px", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700, flexShrink: 0, boxShadow: "0 4px 15px rgba(225,29,72,0.35)" }}
                    >
                      Deploy this Workflow →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — TRUST, COMPARISON & INTEGRATIONS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "140px 24px", backgroundColor: "#020203" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <FadeUp>
            <SectionHeading
              tag="ENTERPRISE TRUST"
              title="Security, Integrations &"
              accent="Compliance"
              subtitle="Enterprise-grade guardrails, certified integrations, and complete audit transparency."
            />
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "48px", alignItems: "start" }}>
            {/* Left — Comparison Table */}
            {data.comparison && (
              <FadeUp>
                <div style={{ background: "linear-gradient(145deg, #0A0A0E 0%, #07070B 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "18px 28px", background: "#0D0D14", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "rgba(255,255,255,0.5)" }}>
                    <div>Metric</div>
                    <div>Legacy</div>
                    <div style={{ color: "#E11D48" }}>Autonomous</div>
                  </div>
                  {data.comparison.map((row, idx) => (
                    <div
                      key={idx}
                      className="compare-row"
                      style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "18px 28px", borderBottom: idx < data.comparison.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", alignItems: "center", fontSize: "0.88rem", transition: "background 0.2s ease" }}
                    >
                      <div style={{ fontWeight: 700, color: "#FFFFFF" }}>{row.metric}</div>
                      <div style={{ color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "8px" }}>
                        <XCircle size={14} color="#EF4444" style={{ flexShrink: 0 }} />
                        <span>{row.legacy}</span>
                      </div>
                      <div style={{ color: "#FFFFFF", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
                        <CheckCircle2 size={14} color="#10B981" style={{ flexShrink: 0 }} />
                        <span>{row.agent}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            )}

            {/* Right — Integrations + Governance */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Integrations */}
              {data.integrations && (
                <FadeUp delay={0.1}>
                  <div style={{ background: "linear-gradient(145deg, #09090E 0%, #060609 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "32px 28px", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
                      <Workflow size={20} color="#E11D48" />
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Connected APIs</h3>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {data.integrations.map((item, i) => (
                        <div key={i} className="integ-pill" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px", padding: "14px 16px", transition: "all 0.2s ease" }}>
                          <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#FFFFFF", marginBottom: "2px" }}>{item.name}</div>
                          <div style={{ fontSize: "0.73rem", color: "#E11D48", fontWeight: 600 }}>{item.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* Governance */}
              {data.governance && (
                <FadeUp delay={0.2}>
                  <div style={{ background: "linear-gradient(145deg, #09090E 0%, #060609 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "32px 28px", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
                      <Shield size={20} color="#E11D48" />
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>Governance</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {data.governance.map((sec, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
                          <Lock size={14} color="#E11D48" style={{ flexShrink: 0 }} />
                          <div>
                            <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#FFFFFF" }}>{sec.label}</div>
                            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "1px" }}>{sec.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )}
            </div>
          </div>

          <style>{`
            .compare-row:hover { background: rgba(255,255,255,0.03); }
            .integ-pill:hover { border-color: rgba(225,29,72,0.35) !important; transform: translateY(-2px); background: rgba(255,255,255,0.04) !important; }
          `}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — CASE STUDY + CTA
      ═══════════════════════════════════════════════════════════════ */}
      {data.caseStudy && (
        <section style={{ padding: "120px 5% 80px 5%", backgroundColor: "#060609" }}>
          <FadeUp>
            <div style={{ maxWidth: "1280px", margin: "0 auto", background: "linear-gradient(145deg, #0A0A0E 0%, #07070B 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", alignItems: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.8)" }}>
              <div style={{ padding: "56px 48px" }}>
                <div style={{ color: "#E11D48", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Award size={15} /> {data.caseStudy.client}
                </div>
                <h3 style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.35, margin: "0 0 22px 0" }}>
                  {data.caseStudy.headline}
                </h3>
                <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.75, margin: "0 0 22px 0" }}>
                  "{data.caseStudy.quote}"
                </p>
                <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.9rem", marginBottom: "28px" }}>
                  {data.caseStudy.author} <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>— {data.caseStudy.company}</span>
                </div>
                <div style={{ display: "flex", gap: "28px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", flexWrap: "wrap" }}>
                  {data.caseStudy.results.map((res, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#E11D48" }}>{res.stat}</div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "3px" }}>{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px" }}>
                <img src={data.caseStudy.image} alt={data.caseStudy.client} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0E 0%, rgba(10,10,14,0.2) 30%, transparent 100%)" }} />
              </div>
            </div>
          </FadeUp>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "80px 5% 160px 5%", backgroundColor: "#020203", textAlign: "center" }}>
        <FadeUp>
          <div style={{ maxWidth: "900px", margin: "0 auto", background: "radial-gradient(circle at center, rgba(225,29,72,0.2) 0%, rgba(12,12,16,0.95) 65%)", border: "1px solid rgba(225,29,72,0.3)", borderRadius: "28px", padding: "80px 48px", boxShadow: "0 30px 80px rgba(225,29,72,0.15)" }}>
            <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", margin: "0 0 20px 0", letterSpacing: "-0.02em" }}>
              Ready to Deploy <span style={{ color: "#E11D48" }}>{data.name}</span>?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: "0 auto 40px auto", lineHeight: 1.7 }}>
              Schedule a custom proof-of-concept and see the {data.name} orchestrate live workflows across your enterprise stack.
            </p>
            <a
              href="https://devopstrio.co.uk/contact#contact-form"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "1rem", fontWeight: 700, padding: "17px 40px", borderRadius: "10px", boxShadow: "0 8px 32px rgba(225,29,72,0.5)", transition: "all 0.25s ease" }}
              className="cta-btn"
            >
              Schedule Architecture Demo <ArrowRight size={18} />
            </a>
          </div>
          <style>{`.cta-btn:hover { background-color: #BE123C !important; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(225,29,72,0.6) !important; }`}</style>
        </FadeUp>
      </section>

    </div>
  );
}
