import React from "react";
import { motion } from "framer-motion";

/**
 * AICapabilities.jsx — Devopstrio
 * Asymmetric bento grid — 5 cards.
 * Two-Face Crossfade transition on hover:
 *   - Face 1 (Rest): Dark Photography + Gradient + "Reveal Insights"
 *   - Face 2 (Hover): Solid White Reveal Card + High-Level Rich Content (No Explore CTA)
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CAPABILITIES = [
  {
    id: "a",
    tag: "Predictive Analytics",
    title: "Forecast demand before it happens",
    description:
      "Anticipate enterprise compute workloads, infrastructure bottlenecks, and mission-critical capacity deficits days in advance using time-series transformers and adaptive neural telemetry.",
    highlights: [
      { label: "Workload Forecasting", text: "Pre-empt compute spikes and queue backlogs 72 hours ahead." },
      { label: "Autonomous Rebalancing", text: "Dynamically scale multi-cloud clusters before SLAs degrade." },
      { label: "Deficit Interception", text: "Eliminate emergency firefighting with continuous predictive signals." },
    ],
    href: "#predictive-analytics",
    img: "/assets/Home-page/AI%20Capabilities/Forecast%20demand%20before%20it%20happens.webp",
    imageFit: "contain",
    size: "large",
  },
  {
    id: "b",
    tag: "Natural Language & LLMs",
    title: "Turn enterprise documents into structured signal",
    description:
      "Transform petabytes of unstructured contracts, clinical EHR records, and financial documentation into deterministic knowledge graphs and automated executive decision pipelines.",
    highlights: [
      { label: "Semantic Extraction", text: "Zero-loss structured ingestion across PDFs, scanned records, and legacy logs." },
      { label: "Agentic Synthesis", text: "Autonomous verification pipelines that cross-audit against regulatory standards." },
    ],
    href: "#nlu",
    img: "/assets/Home-page/AI%20Capabilities/Turn%20enterprise%20documents%20into%20structured%20signal.webp",
    imageFit: "contain",
    imagePosition: "right center",
    size: "wide",
  },
  {
    id: "c",
    tag: "Computer Vision",
    title: "Automated Visual Intelligence",
    description:
      "Deploy sub-millisecond edge visual inspection, spatial defect detection, and automated regulatory quality validation directly on device without cloud latency.",
    href: "#computer-vision",
    img: "/assets/Home-page/AI%20Capabilities/Automated%20Visual%20Intelligence.webp",
    imageFit: "cover",
    imagePosition: "center 15%",
    size: "small",
  },
  {
    id: "d",
    tag: "Anomaly Detection",
    title: "Catch Drift Before Outages",
    description:
      "Continuous real-time observability across multi-cloud clusters and foundational AI models to intercept data drift, hallucination spikes, and outages before SLAs breach.",
    href: "#anomaly-detection",
    img: "/assets/Home-page/AI%20Capabilities/Catch%20Drift%20Before%20Outages.webp",
    imageFit: "cover",
    imagePosition: "center center",
    size: "small",
  },
  {
    id: "e",
    tag: "Autonomous Decisioning",
    title: "Rule-aware AI that recommends the next best action",
    description:
      "Synthesize strict enterprise governance policies, live streaming telemetry, and LLM reasoning into auditable, deterministic operational actions with full human-in-the-loop oversight.",
    highlights: [
      { label: "Policy Guardrails", text: "Deterministic adherence to corporate governance and compliance rules." },
      { label: "Audit-Ready Reasoning", text: "Full trace lineage generated for every automated recommendation." },
      { label: "Human-in-the-Loop", text: "High-impact actions require explicit sign-off with contextual rationale." },
    ],
    href: "#decisioning",
    img: "/images/downloaded/ed43542bb6_photo-1556742049-0cfed4f6a45d.jpg",
    imageFit: "cover",
    imagePosition: "center 80%",
    size: "banner",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "100px 24px",
    backgroundColor: "#030303",
    fontFamily: FONT,
    boxSizing: "border-box",
    marginTop: "-40px",
  },
  intro: {
    maxWidth: "880px",
    margin: "0 auto 40px",
    textAlign: "center",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(225, 29, 72, 0.35)",
    backgroundColor: "rgba(225, 29, 72, 0.08)",
    color: "#F43F5E",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "18px",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#E11D48",
    boxShadow: "0 0 10px 2px rgba(225, 29, 72, 0.8)",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.8vw, 3rem)",
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "-0.025em",
    margin: 0,
  },
  headingAccent: { color: "#F43F5E" },

  grid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "270px 270px 230px",
    gridTemplateAreas: `
      "a a b b"
      "a a c d"
      "e e e e"
    `,
    gap: "20px",
  },

  card: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(39, 39, 42, 0.8)",
    backgroundColor: "#0A0A0A",
    cursor: "pointer",
    display: "block",
    textDecoration: "none",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },

  /* Face 1: Image Face (Default Rest state) */
  imgFace: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },
  cardImgWrap: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlayVertical: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.96) 100%)",
  },
  overlayHorizontal: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.0) 100%)",
  },

  contentBottom: {
    position: "absolute",
    left: "24px",
    right: "24px",
    bottom: "22px",
    zIndex: 2,
  },
  contentSide: {
    position: "absolute",
    left: "32px",
    top: 0,
    bottom: 0,
    width: "46%",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  tag: {
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#FDA4AF",
    marginBottom: "8px",
  },
  titleBase: {
    fontFamily: FONT,
    fontWeight: 600,
    color: "#FFFFFF",
    lineHeight: 1.2,
    letterSpacing: "-0.025em",
    margin: 0,
  },

  linkRow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "14px",
    fontFamily: FONT,
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#FFFFFF",
  },

  /* Face 2: Hover Face (Solid White Reveal Card) */
  hoverFace: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#FFFFFF",
    zIndex: 3,
    boxSizing: "border-box",
  },
  hoverTag: {
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#E11D48",
  },
  hoverTitle: {
    fontFamily: FONT,
    color: "#0A0A0A",
    fontWeight: 600,
    lineHeight: 1.25,
    margin: "6px 0 0",
    letterSpacing: "-0.02em",
  },
  hoverDesc: {
    fontFamily: FONT,
    color: "#3F3F46",
    lineHeight: 1.6,
    margin: "8px 0 0",
  },
};

function getTitleSize(id) {
  switch (id) {
    case "a": return "26px";
    case "e": return "24px";
    case "b": return "20px";
    default: return "19px";
  }
}

function areaStyle(id) {
  return { gridArea: id };
}

function ArrowIcon({ color = "#FFFFFF" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function CapabilityCard({ item, index }) {
  const isBanner = item.size === "banner";
  const isLarge = item.size === "large";
  const isWide = item.size === "wide";

  return (
    <motion.a
      className="home-ai-capabilities__card"
      href={item.href}
      style={{ ...styles.card, ...areaStyle(item.id) }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      custom={index}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* ----------------- FACE 1: DEFAULT (REST) ----------------- */}
      <motion.div
        style={styles.imgFace}
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <motion.div style={styles.cardImgWrap}>
          <motion.img
            src={item.img}
            alt={item.title}
            style={{
              ...styles.cardImg,
              objectFit: item.imageFit || styles.cardImg.objectFit,
              objectPosition: item.imagePosition || "center center",
            }}
          />
        </motion.div>

        <div style={isBanner ? styles.overlayHorizontal : styles.overlayVertical} />

        <div
          className={isBanner ? "home-ai-capabilities__banner-content" : undefined}
          style={isBanner ? styles.contentSide : styles.contentBottom}
        >
          <span style={styles.tag}>{item.tag}</span>
          <h3 style={{ ...styles.titleBase, fontSize: getTitleSize(item.id) }}>
            {item.title}
          </h3>

          <div style={styles.linkRow}>
            Reveal Insights
            <span style={{ display: "flex", marginLeft: "2px" }}>
              <ArrowIcon />
            </span>
          </div>
        </div>
      </motion.div>

      {/* ----------------- FACE 2: HOVER (WHITE REVEAL CARD — NO EXPLORE BUTTON) ----------------- */}
      {isBanner ? (
        /* WIDE BANNER (Card E) */
        <motion.div
          style={{
            ...styles.hoverFace,
            padding: "28px 44px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1.3fr 1.4fr",
            alignItems: "center",
            gap: "36px",
          }}
          variants={{
            rest: { opacity: 0, pointerEvents: "none" },
            hover: { opacity: 1, pointerEvents: "auto" },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div>
            <div style={styles.hoverTag}>{item.tag}</div>
            <h3 style={{ ...styles.hoverTitle, fontSize: "21px", marginTop: "6px" }}>
              {item.title}
            </h3>
          </div>

          <div style={{ borderLeft: "1px solid #E4E4E7", paddingLeft: "26px" }}>
            <p style={{ ...styles.hoverDesc, margin: 0, fontSize: "13.5px", color: "#3F3F46", lineHeight: 1.65 }}>
              {item.description}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "9px", borderLeft: "1px solid #E4E4E7", paddingLeft: "26px" }}>
            {item.highlights?.map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E11D48", shrink: 0 }} />
                <div style={{ fontSize: "12px", lineHeight: 1.45 }}>
                  <strong style={{ color: "#18181B", fontWeight: 600 }}>{h.label}: </strong>
                  <span style={{ color: "#52525B" }}>{h.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ) : isLarge ? (
        /* LARGE TALL CARD (Card A: Predictive Analytics) */
        <motion.div
          style={{
            ...styles.hoverFace,
            padding: "40px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          variants={{
            rest: { opacity: 0, pointerEvents: "none" },
            hover: { opacity: 1, pointerEvents: "auto" },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div>
            <div style={styles.hoverTag}>{item.tag}</div>
            <h3 style={{ ...styles.hoverTitle, fontSize: "25px", marginTop: "8px" }}>
              {item.title}
            </h3>
            <p style={{ ...styles.hoverDesc, fontSize: "14.5px", marginTop: "14px", lineHeight: 1.65 }}>
              {item.description}
            </p>

            <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "14px", borderTop: "1px solid #E4E4E7", paddingTop: "24px" }}>
              {item.highlights?.map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E11D48", marginTop: "7px", shrink: 0 }} />
                  <div>
                    <span style={{ fontFamily: FONT, fontSize: "13.5px", fontWeight: 600, color: "#18181B" }}>{h.label}: </span>
                    <span style={{ fontFamily: FONT, fontSize: "13px", color: "#52525B", lineHeight: 1.55 }}>{h.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : isWide ? (
        /* WIDE CARD (Card B: Natural Language & LLMs) */
        <motion.div
          style={{
            ...styles.hoverFace,
            padding: "26px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          variants={{
            rest: { opacity: 0, pointerEvents: "none" },
            hover: { opacity: 1, pointerEvents: "auto" },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div>
            <div style={styles.hoverTag}>{item.tag}</div>
            <h3 style={{ ...styles.hoverTitle, fontSize: "19px", marginTop: "6px" }}>
              {item.title}
            </h3>
            <p style={{ ...styles.hoverDesc, fontSize: "13px", marginTop: "8px" }}>
              {item.description}
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", borderTop: "1px solid #E4E4E7", paddingTop: "12px", marginTop: "10px" }}>
            {item.highlights?.map((h, i) => (
              <div key={i} style={{ flex: 1, fontSize: "11.5px", lineHeight: 1.45 }}>
                <strong style={{ color: "#18181B", display: "block", fontWeight: 600 }}>{h.label}</strong>
                <span style={{ color: "#52525B" }}>{h.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        /* STANDARD COMPACT CARDS (Cards C & D) */
        <motion.div
          style={{
            ...styles.hoverFace,
            padding: "26px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          variants={{
            rest: { opacity: 0, pointerEvents: "none" },
            hover: { opacity: 1, pointerEvents: "auto" },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <div style={styles.hoverTag}>{item.tag}</div>
          <h3 style={{ ...styles.hoverTitle, fontSize: "18px", marginTop: "6px" }}>
            {item.title}
          </h3>
          <p style={{ ...styles.hoverDesc, fontSize: "13px", marginTop: "10px", lineHeight: 1.6 }}>
            {item.description}
          </p>
        </motion.div>
      )}
    </motion.a>
  );
}

export default function AICapabilities() {
  return (
    <section className="home-ai-capabilities" style={styles.section}>
      <motion.div
        style={styles.intro}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span style={styles.eyebrow}>
          <span style={styles.dot} />
          AI Capabilities
        </span>
        <h2 style={styles.heading}>
          Five ways <span style={styles.headingAccent}>AI</span> works inside
          Devopstrio
        </h2>
      </motion.div>

      <div className="home-ai-capabilities__grid" style={styles.grid}>
        {CAPABILITIES.map((item, i) => (
          <CapabilityCard item={item} index={i} key={item.id} />
        ))}
      </div>
    </section>
  );
}
