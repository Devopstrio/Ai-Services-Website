import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * TrendingManagedServices.jsx — DevOpsTRIO
 * "What's Trending" horizontal card carousel. Default = image card with
 * category tag + title. On hover, the card swaps to a light cream panel
 * with category label, full title, description, and an "Expand" link —
 * matching the reference's hover-reveal card exactly.
 * Black theme, #E11D48 accent, white text, inline CSS only. Font: Geist
 */

const FONT = '"Geist", sans-serif';

const ITEMS = [
  {
    tag: "RESEARCH REPORT",
    title: "Are You Ready for Autonomous Care Pathways?",
    desc: "AI-driven triage and scheduling are moving from pilot to production. Here's what separates health systems that scale it safely from those stuck testing.",
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Skim-woman-600x848%3Arad-card-full?ts=1783352088068&fit=constrain&dpr=off",
  },
  {
    tag: "RESEARCH REPORT",
    title: "Reinventing Clinical Operations — How Mature Health Systems Use Gen AI to Support Growth",
    desc: "Organizations with the highest operations maturity are 3.3x more likely to succeed at scaling high-value gen AI use cases and report 2.5x higher efficiency gains. Operational performance and gen AI enhance each other.",
    img: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-AI-Powered-Operations-Glance-600x848px%3Arad-card-full?ts=1777478475966&fit=constrain&dpr=off",
  },
  {
    tag: "CASE STUDY",
    title: "Cascade Health Pioneers AI-Native Shared Services Operations",
    desc: "By consolidating clinical operations onto a single AI-managed platform, Cascade Health cut administrative overhead by 42% in under a year.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-top-3-it-services-brand-globally2026.jpg",
  },
  {
    tag: "RESEARCH REPORT",
    title: "Reinventing Clinical Operations",
    desc: "A closer look at how the highest-performing health systems are restructuring operations around AI-native workflows instead of bolting AI onto legacy processes.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-championsevolve.jpg",
  },
  {
    tag: "RESEARCH REPORT",
    title: "The Executive's Guide to AI-Ready Infrastructure",
    desc: "What healthcare leadership teams need in place before scaling AI beyond a single department — infrastructure, governance, and talent.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-accelerate-enterprise-adoption-generative-ai.jpg",
  },
  {
    tag: "CASE STUDY",
    title: "Ironframe Deploys Predictive Maintenance Across 12 Facilities",
    desc: "Predictive infrastructure monitoring cut unplanned downtime by more than half across Ironframe's clinical facility network.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/ai-mountain-01.jpg",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 0 110px",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
          fontFamily: FONT,
    boxSizing: "border-box",
    overflow: "hidden",
    textAlign: "left",
  },
  headerRow: {
    padding: "0 5%",
    maxWidth: "1300px",
    margin: "0 auto 34px",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.6vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: 0,
    marginBottom: "22px",
  },
  viewAll: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 600,
    color: "#FFFFFF",
    cursor: "pointer",
  },
  viewAllArrow: {
    width: "24px",
    height: "24px",
    backgroundColor: "#E11D48",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollWrap: {
    padding: "0 5%",
  },
  track: {
    display: "flex",
    gap: "18px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    paddingBottom: "8px",
  },

  card: {
    position: "relative",
    flex: "0 0 auto",
    width: "300px",
    height: "400px",
    borderRadius: "6px",
    overflow: "hidden",
    cursor: "pointer",
  },

  imgFace: {
    position: "absolute",
    inset: 0,
  },
  imgEl: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.7) 100%)",
  },
  imgTopContent: {
    position: "absolute",
    top: "24px",
    left: "22px",
    right: "22px",
    zIndex: 2,
  },
  imgTag: {
    fontFamily: FONT,
    fontSize: "10.5px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.85)",
  },
  imgTitle: {
    fontFamily: FONT,
    fontSize: "1.02rem",
    fontWeight: 530,
    color: "#FFFFFF",
    lineHeight: 1.35,
    margin: "10px 0 0",
  },

  hoverFace: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(160deg, #F6EFE4 0%, #EDD9C4 100%)",
    padding: "26px 24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  hoverTag: {
    fontFamily: FONT,
    fontSize: "10.5px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#3a2f28",
  },
  hoverTitle: {
    fontFamily: FONT,
    fontSize: "1.02rem",
    fontWeight: 600,
    color: "#1a1512",
    lineHeight: 1.35,
    margin: "10px 0 0",
  },
  hoverDesc: {
    fontFamily: FONT,
    fontSize: "12.5px",
    lineHeight: 1.6,
    color: "#4a4038",
    marginTop: "14px",
  },
  hoverExpand: {
    marginTop: "auto",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: FONT,
    fontSize: "12.5px",
    fontWeight: 700,
    color: "#E11D48",
  },

  navRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    padding: "0 5%",
    marginTop: "22px",
  },
  navBtn: {
    width: "44px",
    height: "44px",
    borderRadius: "6px",
    backgroundColor: "#161616",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};

function ArrowIcon({ color = "#FFFFFF", dir = "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}
    >
      <path
        d="M2.5 8H13.5M13.5 8L9.5 4M13.5 8L9.5 12"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendCard({ item, index }) {
  return (
    <motion.div
      style={styles.card}
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileInView={{ opacity: [0, 1], y: [30, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* default image face */}
      <motion.div
        style={styles.imgFace}
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <img src={item.img} alt={item.title} style={styles.imgEl} />
        <div style={styles.imgOverlay} />
        <div style={styles.imgTopContent}>
          <div style={styles.imgTag}>{item.tag}</div>
          <h3 style={styles.imgTitle}>{item.title}</h3>
        </div>
      </motion.div>

      {/* hover face — cream info panel */}
      <motion.div
        style={styles.hoverFace}
        variants={{
          rest: { opacity: 0, pointerEvents: "none" },
          hover: { opacity: 1, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div style={styles.hoverTag}>{item.tag}</div>
        <h3 style={styles.hoverTitle}>{item.title}</h3>
        <p style={styles.hoverDesc}>{item.desc}</p>
        <span style={styles.hoverExpand}>
          Expand
          <ArrowIcon color="#E11D48" />
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function TrendingManagedServices() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.headerRow}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 style={styles.heading}>What's trending in managed services</h2>
        <span style={styles.viewAll}>
          View all work
          <span style={styles.viewAllArrow}>
            <ArrowIcon />
          </span>
        </span>
      </motion.div>

      <div style={styles.scrollWrap}>
        <div style={styles.track} ref={trackRef}>
          {ITEMS.map((item, i) => (
            <TrendCard item={item} index={i} key={item.title + i} />
          ))}
        </div>
      </div>

      <div style={styles.navRow}>
        <div style={styles.navBtn} onClick={() => scrollBy(-1)}>
          <ArrowIcon dir="left" />
        </div>
        <div style={styles.navBtn} onClick={() => scrollBy(1)}>
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}