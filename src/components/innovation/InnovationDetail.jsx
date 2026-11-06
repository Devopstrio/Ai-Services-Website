import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getInnovationData } from "../../data/innovation";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Check,
  Award
} from "lucide-react";
import RepresentativeCTA from "../ui/RepresentativeCTA";
import FAQ from "../ui/FAQ";
import { getInnovationFaqs } from "../../data/faqs";
import { insightsApi } from "../../lib/insightsApi";
import CategoryPopup from "../common/CategoryPopup";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

const INNOVATION_SUBSCRIPTION_TOPICS = [
  "Overview",
  "AI Research",
  "Experimental Projects",
  "AI Prototypes",
  "Open Source",
  "Technology Exploration",
  "Innovation Programs",
  "Product Roadmap",
  "AI Demonstrations",
  "Publications"
];

/* ─── Fade-up animation wrapper ─── */
const FadeUp = ({ children, delay = 0, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    style={style}
  >
    {children}
  </motion.div>
);

/* ─── Section heading reusable block (Left-aligned, clean, no glows, no H2 descriptions) ─── */
const SectionHeading = ({ tag, title, accent, subtitle }) => (
  <div style={{ textAlign: "left", marginBottom: "40px", position: "relative", zIndex: 2 }}>
    {tag && (
      <div
        style={{
          color: "#E11D48",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "10px",
          display: "inline-block"
        }}
      >
        {tag}
      </div>
    )}
    <h2
      style={{
        fontSize: "clamp(2rem, 3.8vw, 3.25rem)", fontWeight: 700,
        fontWeight: 600,
        color: "#FFFFFF",
        margin: 0,
        letterSpacing: "-0.025em",
        lineHeight: 1.2
      }}
    >
      {title} {accent && <span style={{ color: "#E11D48" }}>{accent}</span>}
    </h2>
    {subtitle && (
      <p
        style={{
          color: "rgba(255,255,255,0.68)",
          fontSize: "1.05rem",
          maxWidth: "640px",
          margin: "14px 0 0 0",
          lineHeight: 1.65,
          fontWeight: 400
        }}
      >
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
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathSegments[pathSegments.length - 1] || "";
  const innovationSlug = params.innovationId || slugFromPath || "ai-research";
  const data = getInnovationData(innovationSlug);

  const [activeFrontierIndex, setActiveFrontierIndex] = useState(0);
  const [subEmail, setSubEmail] = useState("");
  const [subLoading, setSubLoading] = useState(false);
  const [subStatus, setSubStatus] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupEmail, setPopupEmail] = useState("");

  const handlePublicationsSubscribe = async (e) => {
    e.preventDefault();
    if (!subEmail || !subEmail.includes("@")) {
      setSubStatus({ type: "error", message: "Please enter a valid work email address." });
      return;
    }
    setSubLoading(true);
    setSubStatus(null);
    try {
      const res = await insightsApi.subscribe(subEmail, ["insights-knowledge"], INNOVATION_SUBSCRIPTION_TOPICS);
      setSubStatus({
        type: "success",
        message: res?.message || "Successfully subscribed! You will receive early-access white papers and research updates."
      });
      setPopupEmail(subEmail);
      setSubEmail("");
    } catch (err) {
      setSubStatus({
        type: "error",
        message: err.message || "Subscription could not be processed. Please try again."
      });
    } finally {
      setSubLoading(false);
    }
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveFrontierIndex(0);
    if (data?.name) {
      document.title = `${data.name} — Innovation Lab | Devopstrio`;
    }
  }, [location.pathname, data?.name]);

  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020203",
          color: "#fff",
          fontFamily: FONT
        }}
      >
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
    <div
      style={{
        backgroundColor: "#020203",
        color: "#FFFFFF",
        fontFamily: FONT,
        overflowX: "hidden"
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. STICKY SUB-SERVICE NAVIGATION BAR (Flat, No Flask, 600 max)
      ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 40,
          backgroundColor: "rgba(4,4,7,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "10px 24px"
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            overflowX: "auto",
            scrollbarWidth: "none"
          }}
          className="no-scrollbar"
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#E11D48",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginRight: "8px",
              whiteSpace: "nowrap"
            }}
          >
            LAB HUB:
          </span>
          <Link
            to="/innovation/overview"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.75)",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              marginRight: "6px",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease"
            }}
            className="lab-nav-pill"
          >
            ← Overview
          </Link>
          {SUB_SERVICES.map((item) => {
            const isActive = innovationSlug === item.id;
            return (
              <Link
                key={item.id}
                to={item.route}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                  backgroundColor: isActive ? "rgba(225,29,72,0.18)" : "transparent",
                  border: `1px solid ${
                    isActive ? "rgba(225,29,72,0.4)" : "rgba(255,255,255,0.06)"
                  }`,
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

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION (Left-Aligned, Flat Eyebrow, No Radial Orb, No Glow)
      ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "110px",
          paddingBottom: "80px"
        }}
      >
        {/* Parallax Background (Linear overlay only, balanced brightness) */}
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img
            src={data.hero.bgImage}
            alt={data.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.42
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(2,2,3,0.72) 0%, rgba(2,2,3,0.52) 45%, #020203 100%)"
            }}
          />
        </motion.div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            padding: "0 24px",
            textAlign: "left"
          }}
        >
          <motion.div style={{ opacity: opacityText }}>
            {/* Plain Minimal Breadcrumb */}
            <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600, marginBottom: "24px" }}>
              <span
                style={{ cursor: "pointer", transition: "color 0.2s ease" }}
                className="hover:text-white"
                onClick={() => navigate("/innovation/overview")}
              >
                Innovation Lab
              </span>
              <span>/</span>
              <span style={{ color: "#E11D48" }}>
                {data.name}
              </span>
            </div>

            {/* Clean Plain Authority H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.05,
                fontWeight: 600,
                margin: "0 0 24px 0",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                maxWidth: "920px"
              }}
            >
              {data.name}
            </motion.h1>

            {/* Short 1-Line Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(1.05rem, 1.25vw, 1.15rem)",
                color: "rgba(255,255,255,0.70)",
                lineHeight: 1.6,
                margin: "0 0 34px 0",
                maxWidth: "760px",
                fontWeight: 400
              }}
            >
              {(data.hero?.description || "").includes(". ") ? data.hero.description.split(". ")[0] + "." : data.hero?.description}
            </motion.p>

            {/* CTA Group (Primary + Secondary Flat, No Glow) */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              <a
                href="#pillars"
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
                  border: "none",
                  transition: "background-color 0.2s ease"
                }}
                className="hero-primary-cta"
              >
                {data.hero.primaryCtaText || "Explore Research Areas"} <ArrowRight size={16} />
              </a>
              <Link
                to="/capabilities/overview"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "13px 26px",
                  borderRadius: "10px",
                  transition: "border-color 0.2s ease"
                }}
                className="hero-secondary-cta"
              >
                {data.hero.secondaryCtaText || "View Capabilities"}
              </Link>
            </div>
          </motion.div>
        </div>

        <style>{`
          .hero-primary-cta:hover { background-color: #BE123C !important; }
          .hero-secondary-cta:hover { border-color: rgba(255,255,255,0.3) !important; }
          .lab-nav-pill:hover { background-color: rgba(255,255,255,0.06) !important; color: #FFFFFF !important; }
        `}</style>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. STATS STRIP / CAPABILITY TILES (Flat 1px border, 600 weight)
      ───────────────────────────────────────────────────────────── */}
      {stats.length > 0 && (
        <section
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 24px",
            marginBottom: "0px"
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              backgroundColor: "rgba(10,10,14,0.9)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "28px 24px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "20px"
            }}
          >
            {stats.map((item, i) => (
              <FadeUp key={i} delay={i * 0.05} style={{ height: "100%", display: "flex" }}>
                <div
                  style={{
                    textAlign: "left",
                    padding: "8px 12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.8rem, 2.6vw, 2.2rem)",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      marginBottom: "6px"
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#E11D48",
                      fontWeight: 600,
                      marginBottom: "3px"
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 400
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. CORE RESEARCH PILLARS (Left-Aligned, No H2 Description, Flat 1px)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="pillars"
        style={{
          padding: "72px 24px 96px",
          backgroundColor: "#020203",
          position: "relative"
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <FadeUp>
            <SectionHeading
              tag="CORE RESEARCH PILLARS"
              title="Foundational Science &"
              accent="Breakthroughs"
            />
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px"
            }}
            className="pillars-grid"
          >
            {pillars.map((pillar, idx) => (
              <FadeUp key={pillar.id} delay={idx * 0.06} style={{ height: "100%", display: "flex" }}>
                <div
                  className="pillar-card-flat"
                  style={{
                    backgroundColor: "#0A0A0C",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "border-color 0.25s ease, transform 0.25s ease",
                    boxSizing: "border-box",
                    isolation: "isolate",
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    transform: "translate3d(0, 0, 0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                >
                  {/* Clean Image Container (Seam-free subpixel alignment, no breaking line) */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "210px",
                      overflow: "hidden",
                      flexShrink: 0,
                      backgroundColor: "#0A0A0C",
                      marginBottom: "-2px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      transform: "translate3d(0, 0, 0)",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                        transition: "transform 0.4s ease"
                      }}
                      className="pillar-img"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(10,10,12,0.85) 85%, #0A0A0C 100%)",
                        pointerEvents: "none"
                      }}
                    />

                    {/* Tag Eyebrow */}
                    <span
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        background: "rgba(0,0,0,0.85)",
                        border: "1px solid rgba(225,29,72,0.3)",
                        borderRadius: "6px",
                        padding: "4px 10px",
                        color: "#E11D48",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em"
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Card Content with continuous solid background */}
                  <div
                    style={{
                      padding: "24px 26px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flex: 1,
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      backgroundColor: "#0A0A0C"
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.22rem",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          margin: "0 0 10px 0",
                          lineHeight: 1.35
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.68)",
                          fontSize: "0.92rem",
                          lineHeight: 1.65,
                          margin: "0 0 20px 0",
                          fontWeight: 400
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bullet Highlights (Neutral Check Icons, 400 Weight) */}
                    <div
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}
                    >
                      {pillar.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.82)"
                          }}
                        >
                          <CheckCircle2
                            size={14}
                            color="rgba(255, 255, 255, 0.6)"
                            style={{ marginTop: "3px", flexShrink: 0 }}
                          />
                          <span style={{ lineHeight: 1.5, fontWeight: 400 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <style>{`
            .pillar-card-flat {
              isolation: isolate;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            .pillar-card-flat:hover {
              border-color: rgba(255, 255, 255, 0.18) !important;
              transform: translateY(-2px);
            }
            .pillar-card-flat:hover .pillar-img {
              transform: scale(1.02);
            }
            @media (max-width: 768px) {
              .pillars-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. INTERACTIVE FRONTIER LAB (Left-Aligned, No H2 Description, Flat Tab)
      ───────────────────────────────────────────────────────────── */}
      {frontiers.length > 0 && (
        <section
          id="frontiers"
          style={{
            padding: "96px 24px",
            backgroundColor: "#060609",
            position: "relative"
          }}
        >
          <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeUp>
              <SectionHeading
                tag="INTERACTIVE FRONTIER LAB"
                title="Live Research Vectors &"
                accent="Verified Benchmarks"
              />
            </FadeUp>

            {/* Frontier Tabs (Flat, 600 weight, Pill Tabs with subtle accent border) */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "32px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "14px"
              }}
            >
              {frontiers.map((fr, idx) => {
                const isSelected = activeFrontierIndex === idx;
                return (
                  <button
                    key={fr.id}
                    onClick={() => setActiveFrontierIndex(idx)}
                    role="tab"
                    aria-selected={isSelected}
                    style={{
                      padding: "9px 20px",
                      borderRadius: "8px",
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      backgroundColor: isSelected ? "rgba(225,29,72,0.14)" : "rgba(255,255,255,0.03)",
                      border: isSelected ? "1px solid rgba(225,29,72,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    className="frontier-tab-btn"
                  >
                    {fr.tabLabel || fr.title}
                  </button>
                );
              })}
            </div>

            {/* Active Frontier Showcase Card */}
            {currentFrontier && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFrontier.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    backgroundColor: "#0A0A0C",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "1.15fr 0.85fr"
                  }}
                  className="frontier-showcase-grid"
                >
                  {/* Left: Content Block */}
                  <div
                    style={{
                      padding: "36px 32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      {/* Quiet Prototype Label */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "14px"
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            color: "#E11D48",
                            textTransform: "uppercase"
                          }}
                        >
                          PROTOTYPE
                        </span>
                        <span
                          style={{
                            color: "rgba(255,255,255,0.3)",
                            fontSize: "0.72rem"
                          }}
                        >
                          //
                        </span>
                        <span
                          style={{
                            fontSize: "0.74rem",
                            color: "rgba(255,255,255,0.7)",
                            fontWeight: 500
                          }}
                        >
                          {currentFrontier.badge}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          margin: "0 0 12px 0",
                          lineHeight: 1.3
                        }}
                      >
                        {currentFrontier.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.68)",
                          fontSize: "0.94rem",
                          lineHeight: 1.65,
                          margin: "0 0 20px 0",
                          fontWeight: 400
                        }}
                      >
                        {currentFrontier.summary}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          marginBottom: "24px"
                        }}
                      >
                        {currentFrontier.features.map((feat, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              fontSize: "0.85rem",
                              color: "rgba(255,255,255,0.82)"
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              color="rgba(255, 255, 255, 0.6)"
                              style={{ marginTop: "3px", flexShrink: 0 }}
                            />
                            <span style={{ lineHeight: 1.5, fontWeight: 400 }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Secondary Button Style per §3.5 */}
                      <a
                        href="https://devopstrio.co.uk/contact#contact-form"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          backgroundColor: "transparent",
                          border: "1px solid rgba(255,255,255,0.16)",
                          color: "#FFFFFF",
                          textDecoration: "none",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          padding: "11px 22px",
                          borderRadius: "8px",
                          transition: "border-color 0.2s ease"
                        }}
                        className="frontier-demo-btn"
                      >
                        Request a Demo <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Right: Clean Image View */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "320px",
                      backgroundColor: "#070709"
                    }}
                  >
                    <img
                      src={currentFrontier.image}
                      alt={currentFrontier.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                    <div className="frontier-img-gradient" />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <style>{`
            .frontier-tab-btn:hover { border-color: rgba(225,29,72,0.3) !important; color: #FFFFFF !important; }
            .frontier-demo-btn:hover { border-color: rgba(255,255,255,0.35) !important; }
            .frontier-img-gradient {
              position: absolute;
              inset: 0;
              background: linear-gradient(90deg, #0A0A0C 0%, rgba(10,10,12,0.2) 40%, transparent 100%);
            }
            @media (max-width: 860px) {
              .frontier-showcase-grid { grid-template-columns: 1fr !important; }
              .frontier-img-gradient {
                background: linear-gradient(180deg, #0A0A0C 0%, rgba(10,10,12,0.2) 40%, transparent 100%) !important;
              }
            }
          `}</style>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. CO-INNOVATION INITIATIVE / CASE STUDY
      ───────────────────────────────────────────────────────────── */}
      {data.caseStudy && (
        <section
          style={{
            padding: "64px 24px 96px",
            backgroundColor: "#020203",
            position: "relative"
          }}
        >
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <FadeUp>
              <div
                style={{
                  backgroundColor: "#0A0A0C",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "1.15fr 0.85fr",
                  alignItems: "stretch"
                }}
                className="case-study-grid"
              >
                {/* Left: Content Block */}
                <div
                  style={{
                    padding: "38px 34px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#E11D48",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <Award size={14} /> {data.caseStudy.collaborationType} // {data.caseStudy.partner}
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        lineHeight: 1.35,
                        margin: "0 0 14px 0"
                      }}
                    >
                      {data.caseStudy.title || data.caseStudy.headline}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.93rem",
                        color: "rgba(255,255,255,0.68)",
                        lineHeight: 1.65,
                        margin: "0 0 20px 0",
                        fontWeight: 400
                      }}
                    >
                      {data.caseStudy.description || data.caseStudy.quote}
                    </p>

                    {data.caseStudy.highlights && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          marginBottom: "24px"
                        }}
                      >
                        {data.caseStudy.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              fontSize: "0.85rem",
                              color: "rgba(255,255,255,0.82)"
                            }}
                          >
                            <CheckCircle2
                              size={14}
                              color="rgba(255, 255, 255, 0.6)"
                              style={{ marginTop: "3px", flexShrink: 0 }}
                            />
                            <span style={{ lineHeight: 1.5, fontWeight: 400 }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {data.caseStudy.metrics && (
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "20px",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        {data.caseStudy.metrics.map((res, idx) => (
                          <div key={idx}>
                            <div
                              style={{
                                fontSize: "1.45rem",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                lineHeight: 1
                              }}
                            >
                              {res.stat}
                            </div>
                            <div
                              style={{
                                fontSize: "0.75rem",
                                color: "rgba(255,255,255,0.5)",
                                marginTop: "4px",
                                fontWeight: 400
                              }}
                            >
                              {res.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {data.caseStudy.ctaText && (
                        <a
                          href={data.caseStudy.ctaHref || "https://devopstrio.co.uk/contact#contact-form"}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(255,255,255,0.16)",
                            color: "#FFFFFF",
                            textDecoration: "none",
                            fontSize: "0.86rem",
                            fontWeight: 600,
                            padding: "9px 18px",
                            borderRadius: "8px",
                            transition: "border-color 0.2s ease"
                          }}
                          className="frontier-demo-btn"
                        >
                          {data.caseStudy.ctaText} <ArrowRight size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: Asset Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: "340px",
                    backgroundColor: "#070709",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src={data.caseStudy.image}
                    alt={data.caseStudy.partner}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(90deg, #0A0A0C 0%, rgba(10,10,12,0.2) 40%, transparent 100%)"
                    }}
                    className="case-study-img-gradient"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
          <style>{`
            @media (max-width: 860px) {
              .case-study-grid { grid-template-columns: 1fr !important; }
              .case-study-img-gradient {
                background: linear-gradient(180deg, #0A0A0C 0%, rgba(10,10,12,0.2) 40%, transparent 100%) !important;
              }
            }
          `}</style>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. PUBLICATIONS & RESEARCH NOTES (Empty-State per §4.5)
      ───────────────────────────────────────────────────────────── */}
      {data.publicationsState ? (
        <section
          id="publications"
          style={{
            padding: "96px 24px",
            backgroundColor: "#060609"
          }}
        >
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <FadeUp>
              <SectionHeading
                tag={data.publicationsState.tag}
                title={data.publicationsState.heading}
              />
            </FadeUp>

            <FadeUp delay={0.06}>
              <div
                style={{
                  backgroundColor: "#0A0A0C",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  textAlign: "left",
                  display: "grid",
                  gridTemplateColumns: data.publicationsState.statusBadge ? "1.4fr 1fr" : "1fr",
                  gap: "28px",
                  alignItems: "center",
                  width: "100%",
                  boxSizing: "border-box"
                }}
                className="pub-empty-card"
              >
                <div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "0.96rem",
                      lineHeight: 1.65,
                      margin: "0 0 18px 0",
                      fontWeight: 400
                    }}
                  >
                    {data.publicationsState.body}
                  </p>

                  <form onSubmit={handlePublicationsSubscribe} style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "520px" }}>
                    <input
                      type="email"
                      required
                      value={subEmail}
                      onChange={(e) => setSubEmail(e.target.value)}
                      placeholder="Enter your email to receive research dispatches..."
                      style={{
                        flex: "1 1 240px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        borderRadius: "8px",
                        padding: "11px 16px",
                        fontSize: "0.88rem",
                        color: "#FFFFFF",
                        outline: "none"
                      }}
                      className="pub-email-input"
                    />
                    <button
                      type="submit"
                      disabled={subLoading}
                      style={{
                        backgroundColor: "#E11D48",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "8px",
                        padding: "11px 22px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        cursor: subLoading ? "not-allowed" : "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "background-color 0.2s ease"
                      }}
                      className="hero-primary-cta"
                    >
                      {subLoading ? "Subscribing..." : "Subscribe for Updates"} <ArrowRight size={14} />
                    </button>
                  </form>

                  {subStatus && (
                    <div
                      style={{
                        fontSize: "0.84rem",
                        color: subStatus.type === "success" ? "#10B981" : "#EF4444",
                        marginTop: "12px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      {subStatus.type === "success" && <Check size={14} />}
                      {subStatus.message}
                    </div>
                  )}

                  {/* Research Topics Badges */}
                  <div style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {INNOVATION_SUBSCRIPTION_TOPICS.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          backgroundColor: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.6)"
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {data.publicationsState.statusBadge && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "22px 24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        color: "#E11D48",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em"
                      }}
                    >
                      {data.publicationsState.statusBadge}
                    </div>
                    <div
                      style={{
                        fontSize: "0.86rem",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.5,
                        fontWeight: 400
                      }}
                    >
                      {data.publicationsState.statusNote}
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>
          <style>{`
            .pub-subscribe-btn:hover { border-color: rgba(255,255,255,0.35) !important; }
            .pub-email-input:focus { border-color: #E11D48 !important; }
            @media (max-width: 768px) {
              .pub-empty-card {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
              }
            }
          `}</style>
        </section>
      ) : (
        papers.length > 0 && (
          <section id="publications" style={{ padding: "96px 24px", backgroundColor: "#020203" }}>
            <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
              <FadeUp>
                <SectionHeading
                  tag="PEER-REVIEWED RESEARCH"
                  title="Scientific Publications &"
                  accent="Whitepapers"
                />
              </FadeUp>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "24px"
                }}
              >
                {papers.map((paper, idx) => (
                  <FadeUp key={idx} delay={idx * 0.06} style={{ height: "100%", display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#0A0A0C",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        padding: "26px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "220px",
                        height: "100%",
                        boxSizing: "border-box"
                      }}
                    >
                      <div>
                        <div style={{ marginBottom: "12px" }}>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "#E11D48",
                              background: "rgba(225,29,72,0.1)",
                              padding: "4px 10px",
                              borderRadius: "4px",
                              border: "1px solid rgba(225,29,72,0.2)"
                            }}
                          >
                            {paper.venue}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#FFFFFF",
                            lineHeight: 1.4,
                            margin: "0 0 8px 0"
                          }}
                        >
                          {paper.title}
                        </h3>
                        <p
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "0.82rem",
                            lineHeight: 1.5,
                            margin: 0,
                            fontWeight: 400
                          }}
                        >
                          {paper.authors}
                        </p>
                      </div>

                      <div
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                          paddingTop: "14px",
                          marginTop: "16px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                      >
                        <a
                          href={paper.downloadUrl}
                          style={{
                            color: "#E11D48",
                            textDecoration: "none",
                            fontSize: "0.84rem",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px"
                          }}
                        >
                          Read Paper <ExternalLink size={13} />
                        </a>
                        <span style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.4)" }}>
                          Open Access
                        </span>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. HOW WE WORK WITH PARTNERS (§4.6 Replaces unverified Testimonial)
      ───────────────────────────────────────────────────────────── */}
      {data.howWeWork ? (
        <section
          style={{
            padding: "96px 24px",
            backgroundColor: "#060609"
          }}
        >
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <FadeUp>
              <SectionHeading
                tag={data.howWeWork.tag}
                title={data.howWeWork.title}
              />
            </FadeUp>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px"
              }}
              className="how-we-work-grid"
            >
              {data.howWeWork.steps.map((st, idx) => (
                <FadeUp key={st.step} delay={idx * 0.06} style={{ height: "100%", display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "#0A0A0C",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      height: "100%",
                      boxSizing: "border-box"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#E11D48",
                        marginBottom: "16px",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {st.step}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        margin: "0 0 10px 0"
                      }}
                    >
                      {st.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "rgba(255,255,255,0.68)",
                        lineHeight: 1.6,
                        margin: 0,
                        fontWeight: 400
                      }}
                    >
                      {st.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <style>{`
              @media (max-width: 768px) {
                .how-we-work-grid {
                  grid-template-columns: 1fr !important;
                }
              }
            `}</style>
          </div>
        </section>
      ) : null}

      {/* ─────────────────────────────────────────────────────────────
          8. UNIVERSAL REPRESENTATIVE CTA
      ───────────────────────────────────────────────────────────── */}
      <RepresentativeCTA
        title="Work with"
        highlightText="Our Research Team"
        description={data.closingCta?.description || "Collaborate with our research scientists on foundational AI breakthroughs, apply for academic PhD fellowships, or request compute grant allocations."}
        primaryBtnText={data.closingCta?.primaryText || "Apply for Fellowship"}
        primaryBtnHref={data.closingCta?.primaryHref || "https://devopstrio.co.uk/contact#contact-form"}
        secondaryBtnText={data.closingCta?.secondaryText || "Research Collaboration"}
        secondaryBtnHref={data.closingCta?.secondaryHref || "https://devopstrio.co.uk/contact#contact-form"}
      />

      {/* Optional Category Preference Modal */}
      {isPopupOpen && (
        <CategoryPopup
          email={popupEmail}
          closePopup={() => {
            setIsPopupOpen(false);
            setPopupEmail("");
          }}
        />
      )}
    </div>
  );
}
