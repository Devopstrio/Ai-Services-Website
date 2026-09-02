import React from "react";
import { motion } from "framer-motion";

/**
 * AICapabilities.jsx — DevOpsTRIO
 * Asymmetric bento grid — 5 cards, image + overlay text, individual links.
 * Black theme, #E11D48 accent, white text, inline CSS only. Font: Geist
 */

const FONT = '"Geist", sans-serif';

const CAPABILITIES = [
  {
    id: "a",
    tag: "Predictive Analytics",
    title: "Forecast demand before it happens",
    description:
      "Predict patient load, infra strain, and resource gaps days ahead — not after the alert fires.",
    href: "#predictive-analytics",
    img: "https://picsum.photos/seed/ai-cap-predictive/900/1100",
    size: "large",
  },
  {
    id: "b",
    tag: "Natural Language Understanding",
    title: "Turn clinical notes into structured signal",
    description:
      "Extract diagnoses, meds, and follow-ups from free-text notes in real time.",
    href: "#nlu",
    img: "https://picsum.photos/seed/ai-cap-nlu/900/650",
    size: "wide",
  },
  {
    id: "c",
    tag: "Computer Vision",
    title: "Automated imaging support",
    description: "Flag anomalies in scans faster, without replacing clinical judgment.",
    href: "#computer-vision",
    img: "https://picsum.photos/seed/ai-cap-vision/700/700",
    size: "small",
  },
  {
    id: "d",
    tag: "Anomaly Detection",
    title: "Catch drift before it breaks",
    description: "Real-time monitoring across pipelines, models, and infra.",
    href: "#anomaly-detection",
    img: "https://picsum.photos/seed/ai-cap-anomaly/700/700",
    size: "small",
  },
  {
    id: "e",
    tag: "Automated Decisioning",
    title: "Rule-aware AI that recommends the next best action",
    description:
      "Combine clinical rules, live data, and model output into a single, explainable recommendation — reviewed, not blind-trusted.",
    href: "#decisioning",
    img: "https://picsum.photos/seed/ai-cap-decision/1400/560",
    size: "banner",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 5%",
    backgroundColor: "#000000",
    fontFamily: FONT,
    boxSizing: "border-box",
    marginTop: "-70px",
  },
  intro: {
    maxWidth: "880px",
    margin: "0 auto 56px",
    textAlign: "center",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "7px 15px",
    borderRadius: "999px",
    border: "1px solid rgba(225, 29, 72, 0.35)",
    backgroundColor: "rgba(225, 29, 72, 0.07)",
    color: "#E11D48",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "20px",
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
    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
    margin: 0,
  },
  headingAccent: { color: "#E11D48" },
  subtext: {
    marginTop: "16px",
    color: "rgba(255,255,255,0.55)",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  grid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "260px 260px 220px",
    gridTemplateAreas: `
      "a a b b"
      "a a c d"
      "e e e e"
    `,
    gap: "18px",
  },

  card: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.09)",
    backgroundColor: "#0a0a0a",
    cursor: "pointer",
    display: "block",
    textDecoration: "none",
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
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.92) 100%)",
  },
  overlayHorizontal: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
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
    fontSize: "11.5px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#E11D48",
    marginBottom: "10px",
  },
  titleLg: {
    fontFamily: FONT,
    fontSize: "22px",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.3,
    margin: 0,
  },
  titleSm: {
    fontFamily: FONT,
    fontSize: "16px",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.3,
    margin: 0,
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.6)",
    marginTop: "8px",
  },

  linkRow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "14px",
    fontFamily: FONT,
    fontSize: "13px",
    fontWeight: 600,
    color: "#FFFFFF",
  },
  linkUnderline: {
    position: "relative",
  },
};

function areaStyle(id) {
  return { gridArea: id };
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#FFFFFF"
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

  return (
    <motion.a
      href={item.href}
      style={{ ...styles.card, ...areaStyle(item.id) }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={cardVariants}
      custom={index}
      whileHover="hover"
    >
      <motion.div style={styles.cardImgWrap}>
        <motion.img
          src={item.img}
          alt={item.title}
          style={styles.cardImg}
          variants={{ hover: { scale: 1.07 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      <div style={isBanner ? styles.overlayHorizontal : styles.overlayVertical} />

      <div style={isBanner ? styles.contentSide : styles.contentBottom}>
        <span style={styles.tag}>{item.tag}</span>
        <h3 style={isLarge || isBanner ? styles.titleLg : styles.titleSm}>
          {item.title}
        </h3>
        {(isLarge || isBanner) && <p style={styles.desc}>{item.description}</p>}

        <motion.span style={styles.linkRow} variants={{ hover: { x: 4 } }}>
          Learn more
          <motion.span
            style={{ display: "flex" }}
            variants={{ hover: { x: 3 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ArrowIcon />
          </motion.span>
        </motion.span>
      </div>
    </motion.a>
  );
}

export default function AICapabilities() {
  return (
    <section style={styles.section}>
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
        <p style={styles.subtext}>
          Not a feature list — a set of capabilities running quietly under
          every pipeline, dashboard, and decision.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {CAPABILITIES.map((item, i) => (
          <CapabilityCard item={item} index={i} key={item.id} />
        ))}
      </div>
    </section>
  );
}