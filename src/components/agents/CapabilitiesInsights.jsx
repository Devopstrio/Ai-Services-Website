import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ITEMS = [
  {
    tag: "RESEARCH REPORT",
    title: "Are You Ready for Autonomous AI Agents?",
    desc: "AI agents are moving from pilot to production. Here's what separates enterprises that scale autonomous workflows safely from those stuck testing.",
    color1: "#E11D48",
    color2: "#9f1239"
  },
  {
    tag: "RESEARCH REPORT",
    title: "Reinventing Enterprise Operations — How Mature Companies Use Gen AI to Support Growth",
    desc: "Organizations with the highest operations maturity are 3.3x more likely to succeed at scaling high-value gen AI use cases and report 2.5x higher efficiency gains.",
    color1: "#be123c",
    color2: "#881337"
  },
  {
    tag: "CASE STUDY",
    title: "Global Logistics Leader Pioneers AI-Native Shared Services",
    desc: "By consolidating operational workflows onto a single AI-managed platform, this global enterprise cut administrative overhead by 42% in under a year.",
    color1: "#9f1239",
    color2: "#4c0519"
  },
  {
    tag: "RESEARCH REPORT",
    title: "Reinventing Business Operations",
    desc: "A closer look at how the highest-performing enterprises are restructuring operations around AI-native workflows instead of bolting AI onto legacy processes.",
    color1: "#881337",
    color2: "#000000"
  },
  {
    tag: "RESEARCH REPORT",
    title: "The Executive's Guide to AI-Ready Infrastructure",
    desc: "What enterprise leadership teams need in place before scaling AI beyond a single department — infrastructure, governance, and talent.",
    color1: "#E11D48",
    color2: "#4c0519"
  },
  {
    tag: "CASE STUDY",
    title: "Predictive MLOps Across Global Cloud Infrastructure",
    desc: "Predictive infrastructure monitoring cut unplanned downtime by more than half across a massive multi-region cloud deployment.",
    color1: "#be123c",
    color2: "#000000"
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 0 110px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    overflow: "hidden",
    textAlign: "left",
  },
  headerRow: {
    padding: "0 24px",
    maxWidth: "1280px",
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
    padding: "0 24px",
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
  
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  imgFace: {
    position: "absolute",
    inset: 0,
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.7) 100%)",
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
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div style={styles.imgFace}>
        <div style={{
          width: "100%", height: "100%",
          background: `linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%)`,
        }}>
          <div style={{
            width: "100%", height: "100%",
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }} />
        </div>
        <div style={styles.imgOverlay} />
        <div style={styles.imgTopContent}>
          <div style={styles.imgTag}>{item.tag}</div>
          <h3 style={styles.imgTitle}>{item.title}</h3>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            style={styles.hoverFace}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div style={styles.hoverTag}>{item.tag}</div>
            <h3 style={styles.hoverTitle}>{item.title}</h3>
            <p style={styles.hoverDesc}>{item.desc}</p>
            <span style={styles.hoverExpand}>
              Expand <ArrowIcon />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CapabilitiesInsights() {
  return (
    <section style={styles.section}>
      <div style={styles.headerRow}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Explore AI <span style={{ color: "#E11D48" }}>Insights</span>
        </motion.h2>

        <motion.div
          style={styles.viewAll}
          onClick={() => window.location.href = "https://devopstrio.co.uk/contact"}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          View all insights
          <span style={styles.viewAllArrow}>
            <ArrowIcon />
          </span>
        </motion.div>
      </div>

      <div style={styles.scrollWrap}>
        <div style={styles.track}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
