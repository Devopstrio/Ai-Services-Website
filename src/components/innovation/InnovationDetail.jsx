import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getInnovationData } from "../../data/innovation";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  BookOpen,
  ExternalLink,
  Download,
  Award,
  Layers,
  Activity
} from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

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
const SectionHeading = ({ tag, title, accent, subtitle }) => (
  <div style={{ textAlign: "center", marginBottom: "54px", position: "relative", zIndex: 2 }}>
    {tag && (
      <div style={{ color: "#E11D48", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "12px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
        <Sparkles size={13} /> {tag}
      </div>
    )}
    <h2 style={{ fontSize: "clamp(2rem, 3.2vw, 2.8rem)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px 0", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
      {title} {accent && <span style={{ color: "#E11D48", textShadow: "0 0 30px rgba(225,29,72,0.3)" }}>{accent}</span>}
    </h2>
    {subtitle && (
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: "660px", margin: "0 auto", lineHeight: 1.7 }}>
        {subtitle}
      </p>
    )}
  </div>
);

const SUB_SERVICES = [
  { id: "ai-research", label: "AI Research", route: "/innovation/ai-research" },
  { id: "experimental-projects", label: "Experimental Projects", route: "/innovation/experimental-projects" },
  { id: "ai-prototypes", label: "AI Prototypes", route: "/innovation/ai-prototypes" },
  { id: "open-source", label: "Open Source", route: "/innovation/open-source" },
  { id: "technology-exploration", label: "Tech Exploration", route: "/innovation/technology-exploration" },
  { id: "innovation-programs", label: "Innovation Programs", route: "/innovation/innovation-programs" },
  { id: "product-roadmap", label: "Product Roadmap", route: "/innovation/product-roadmap" },
  { id: "ai-demonstrations", label: "AI Demos", route: "/innovation/ai-demonstrations" },
  { id: "publications", label: "Publications", route: "/innovation/publications" }
];

export default function InnovationDetail() {
  const params = useParams();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathSegments[pathSegments.length - 1] || "";
  const innovationSlug = params.innovationId || slugFromPath || "ai-research";
  const data = getInnovationData(innovationSlug);

  const [activeFrontierIndex, setActiveFrontierIndex] = useState(0);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveFrontierIndex(0);
  }, [location.pathname]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020203", color: "#fff", fontFamily: FONT }}>
        <h2>Innovation Service Not Found</h2>
      </div>
    );
  }

  const frontiers = data.interactiveFrontiers || [];
  const currentFrontier = frontiers[activeFrontierIndex] || frontiers[0] || null;
  const pillars = data.pillars || [];
  const stats = data.stats || [];
  const papers = data.papers || [];

  return (
    <div style={{ backgroundColor: "#020203", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>

      {/* ═══════════════════════════════════════════════════════════════
          1. STICKY SUB-SERVICE NAVIGATION BAR
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ position: "sticky", top: "72px", zIndex: 40, backgroundColor: "rgba(4,4,7,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }} className="no-scrollbar">
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#E11D48", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: "12px", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }}>
            <FlaskConical size={14} /> LAB HUB:
          </span>
          {SUB_SERVICES.map((item) => {
            const isActive = innovationSlug === item.id;
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
                className="lab-nav-pill"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          2. CINEMATIC VISION HERO (Clean & Bold)
      ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{ position: "relative", width: "100%", minHeight: "82vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "100px", paddingBottom: "80px" }}
      >
        {/* Parallax Background */}
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img src={data.hero.bgImage} alt={data.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(225,29,72,0.18) 0%, rgba(2,2,3,0.7) 50%, #020203 100%), linear-gradient(180deg, rgba(2,2,3,0.85) 0%, rgba(2,2,3,0.5) 50%, #020203 100%)" }} />
        </motion.div>

        {/* Ambient Center Glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1080px", margin: "0 auto", width: "100%", padding: "0 24px", textAlign: "center" }}>
          <motion.div style={{ opacity: opacityText }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", backgroundColor: "rgba(225,29,72,0.14)", border: "1px solid rgba(225,29,72,0.35)", borderRadius: "999px", color: "#E11D48", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>
              <FlaskConical size={13} /> {data.hero.badge}
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 4.4vw, 4rem)", lineHeight: 1.15, fontWeight: 700, margin: "0 0 22px 0", letterSpacing: "-0.03em" }}>
              <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>{data.hero.titleLight} </span>
              <span style={{ color: "#FFFFFF", textShadow: "0 0 40px rgba(255,255,255,0.2)" }}>{data.hero.titleBold}</span>
            </h1>

            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8, margin: "0 auto 36px auto", maxWidth: "720px" }}>
              {data.hero.description}
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="#frontiers"
                className="hero-cta-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "14px 30px", borderRadius: "10px", transition: "all 0.25s ease", boxShadow: "0 4px 24px rgba(225,29,72,0.4)" }}
              >
                Explore Research Vectors <ArrowRight size={16} />
              </a>
              <a
                href="#publications"
                className="hero-cta-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "14px 26px", borderRadius: "10px", transition: "all 0.25s ease" }}
              >
                Scientific Papers <BookOpen size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <style>{`
          .hero-cta-primary:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(225,29,72,0.6) !important; }
          .hero-cta-secondary:hover { background-color: rgba(255,255,255,0.1) !important; transform: translateY(-2px); }
          .lab-nav-pill:hover { background-color: rgba(255,255,255,0.06) !important; color: #FFFFFF !important; }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. CLEAN IMPACT STATS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      {stats.length > 0 && (
        <section style={{ position: "relative", zIndex: 10, marginTop: "-20px", padding: "0 24px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", background: "linear-gradient(180deg, rgba(14,14,20,0.9) 0%, rgba(8,8,12,0.95) 100%)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "36px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
            {stats.map((item, i) => (
              <FadeUp key={i} delay={i * 0.06} style={{ height: "100%", display: "flex" }}>
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
          4. CORE RESEARCH PILLARS (Large Image-Centric Showcase)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "140px 5% 100px 5%", backgroundColor: "#020203", position: "relative" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <FadeUp>
            <SectionHeading
              tag="CORE RESEARCH PILLARS"
              title="Foundational Science &"
              accent="Breakthroughs"
              subtitle="Pioneering artificial intelligence across mathematical foundations, safety alignment, physical simulation, and biomolecular engineering."
            />
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(520px, 1fr))", gap: "32px" }} className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <FadeUp key={pillar.id} delay={idx * 0.08} style={{ height: "100%", display: "flex" }}>
                <div
                  className="pillar-card"
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
                  {/* Large High-Definition Image */}
                  <div style={{ position: "relative", width: "100%", height: "230px", overflow: "hidden", transform: "translateZ(0)", WebkitBackfaceVisibility: "hidden", isolation: "isolate" }}>
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                      className="pillar-img"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, #09090E 100%)" }} />

                    {/* Tag */}
                    <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(225,29,72,0.35)", borderRadius: "999px", padding: "5px 14px", color: "#E11D48", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                      {pillar.tag}
                    </span>

                    {/* Metric Badge */}
                    <span style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(12,12,18,0.9)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "5px 14px", color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 700 }}>
                      ⚡ {pillar.metricBadge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: "28px 32px 34px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                    <div>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 12px 0", lineHeight: 1.3 }}>
                        {pillar.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.94rem", lineHeight: 1.7, margin: "0 0 22px 0" }}>
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {pillar.highlights.map((h, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "rgba(255,255,255,0.85)" }}>
                          <CheckCircle2 size={15} color="#E11D48" style={{ marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ lineHeight: 1.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <style>{`
            .pillar-card:hover { border-color: rgba(225,29,72,0.4) !important; transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.85), 0 0 30px rgba(225,29,72,0.15) !important; }
            .pillar-card:hover .pillar-img { transform: scale(1.04); }
            @media (max-width: 640px) { .pillars-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. INTERACTIVE RESEARCH FRONTIERS STUDIO (Visual & Clean)
      ═══════════════════════════════════════════════════════════════ */}
      {frontiers.length > 0 && (
        <section id="frontiers" style={{ padding: "120px 5% 140px 5%", backgroundColor: "#060609", position: "relative" }}>
          {/* Ambient Glow */}
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <SectionHeading
                tag="INTERACTIVE FRONTIER LAB"
                title="Live Research Vectors &"
                accent="Verified Benchmarks"
                subtitle="Select a research vector to review verified performance benchmarks, neural architectures, and scientific methodologies."
              />
            </FadeUp>

            {/* Frontier Tabs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "44px" }}>
              {frontiers.map((fr, idx) => {
                const isSelected = activeFrontierIndex === idx;
                return (
                  <button
                    key={fr.id}
                    onClick={() => setActiveFrontierIndex(idx)}
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
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: isSelected ? "#E11D48" : "#FFFFFF" }}>{fr.title}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{fr.badge}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Frontier Showcase Card */}
            {currentFrontier && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFrontier.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "linear-gradient(145deg, #09090E 0%, #060609 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 0.9fr",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.85)"
                  }}
                  className="frontier-showcase-grid"
                >
                  {/* Left: Content & Benchmarks */}
                  <div style={{ padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#E11D48", textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(225,29,72,0.12)", padding: "4px 12px", borderRadius: "999px" }}>
                          {currentFrontier.category}
                        </span>
                        <span style={{ fontSize: "0.78rem", color: "#10B981", fontWeight: 700 }}>
                          ✓ {currentFrontier.benchmark}
                        </span>
                      </div>

                      <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", margin: "0 0 14px 0", lineHeight: 1.3 }}>
                        {currentFrontier.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "0.98rem", lineHeight: 1.75, margin: "0 0 24px 0" }}>
                        {currentFrontier.summary}
                      </p>

                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                        {currentFrontier.features.map((feat, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "rgba(255,255,255,0.85)" }}>
                            <CheckCircle2 size={15} color="#10B981" style={{ marginTop: "3px", flexShrink: 0 }} />
                            <span style={{ lineHeight: 1.5 }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <a
                        href="https://devopstrio.co.uk/contact#contact-form"
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.88rem", fontWeight: 700, padding: "12px 26px", borderRadius: "8px", boxShadow: "0 4px 18px rgba(225,29,72,0.35)" }}
                      >
                        Request Lab Sandbox Access <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Right: High-Res Visual Image */}
                  <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                    <img src={currentFrontier.image} alt={currentFrontier.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #09090E 0%, rgba(9,9,14,0.2) 40%, transparent 100%)" }} />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <style>{`
            @media (max-width: 860px) { .frontier-showcase-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          6. SCIENTIFIC PUBLICATIONS (Clean Paper Cards)
      ═══════════════════════════════════════════════════════════════ */}
      {papers.length > 0 && (
        <section id="publications" style={{ padding: "130px 5% 100px 5%", backgroundColor: "#020203" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <FadeUp>
              <SectionHeading
                tag="PEER-REVIEWED RESEARCH"
                title="Scientific Publications &"
                accent="Whitepapers"
                subtitle="Open-access foundational research published at top peer-reviewed international conferences."
              />
            </FadeUp>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
              {papers.map((paper, idx) => (
                <FadeUp key={idx} delay={idx * 0.08} style={{ height: "100%", display: "flex" }}>
                  <div
                    className="paper-card-clean"
                    style={{
                      background: "linear-gradient(145deg, #09090E 0%, #060609 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "18px",
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "240px",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#E11D48", background: "rgba(225,29,72,0.12)", padding: "4px 12px", borderRadius: "999px", border: "1px solid rgba(225,29,72,0.25)" }}>
                          {paper.venue}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
                          DOI: {paper.doi}
                        </span>
                      </div>

                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, margin: "0 0 10px 0" }}>
                        {paper.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>
                        {paper.authors}
                      </p>
                    </div>

                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px", marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <a
                        href={paper.downloadUrl}
                        style={{ color: "#E11D48", textDecoration: "none", fontSize: "0.84rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}
                      >
                        Read Paper <ExternalLink size={13} />
                      </a>
                      <span style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.35)" }}>Open Access PDF</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <style>{`.paper-card-clean:hover { border-color: rgba(225,29,72,0.35) !important; transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.8), 0 0 20px rgba(225,29,72,0.1); }`}</style>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          7. CO-INNOVATION BREAKTHROUGH & CASE STUDY
      ═══════════════════════════════════════════════════════════════ */}
      {data.caseStudy && (
        <section style={{ padding: "80px 5% 60px 5%", backgroundColor: "#020203" }}>
          <FadeUp>
            <div style={{ maxWidth: "1280px", margin: "0 auto", background: "linear-gradient(145deg, #0A0A0E 0%, #07070B 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", overflow: "hidden", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", alignItems: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.8)" }} className="case-grid">
              <div style={{ padding: "52px 44px" }}>
                <div style={{ color: "#E11D48", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Award size={15} /> {data.caseStudy.collaborationType} // {data.caseStudy.partner}
                </div>
                <h3 style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.35, margin: "0 0 18px 0" }}>
                  {data.caseStudy.headline}
                </h3>
                <p style={{ fontSize: "0.96rem", color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 20px 0" }}>
                  "{data.caseStudy.quote}"
                </p>
                <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.88rem", marginBottom: "24px" }}>
                  {data.caseStudy.author} <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>— {data.caseStudy.organization}</span>
                </div>
                <div style={{ display: "flex", gap: "28px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", flexWrap: "wrap" }}>
                  {data.caseStudy.metrics.map((res, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#E11D48" }}>{res.stat}</div>
                      <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                <img src={data.caseStudy.image} alt={data.caseStudy.partner} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0E 0%, rgba(10,10,14,0.2) 30%, transparent 100%)" }} />
              </div>
            </div>
          </FadeUp>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          8. FELLOWSHIP & RESEARCH COLLABORATION CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 5% 150px 5%", backgroundColor: "#020203", textAlign: "center" }}>
        <FadeUp>
          <div style={{ maxWidth: "900px", margin: "0 auto", background: "radial-gradient(circle at center, rgba(225,29,72,0.18) 0%, rgba(12,12,16,0.96) 65%)", border: "1px solid rgba(225,29,72,0.3)", borderRadius: "28px", padding: "70px 40px", boxShadow: "0 30px 80px rgba(225,29,72,0.15)" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
              Pioneer with <span style={{ color: "#E11D48" }}>Devopstrio AI Research</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", margin: "0 auto 34px auto", lineHeight: 1.7 }}>
              Collaborate with our research scientists on foundational AI breakthroughs, apply for academic PhD fellowships, or request compute grant allocations.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://devopstrio.co.uk/contact#contact-form"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700, padding: "15px 34px", borderRadius: "10px", boxShadow: "0 8px 32px rgba(225,29,72,0.5)", transition: "all 0.25s ease" }}
                className="cta-primary-btn"
              >
                Apply for Research Fellowship <ArrowRight size={17} />
              </a>
              <a
                href="https://devopstrio.co.uk/contact#contact-form"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "15px 30px", borderRadius: "10px", transition: "all 0.25s ease" }}
                className="cta-secondary-btn"
              >
                Request GPU Compute Grants
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
