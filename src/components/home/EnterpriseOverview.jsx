import React from "react";
import { motion } from "framer-motion";

/**
 * EnterpriseAIOverview.jsx — Devopstrio
 * Left: sticky featured visual. Right: 2-col scrolling card grid.
 * Black theme, #E11D48 accent, white text, inline CSS only.
 * Font: Geist
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "100px 24px",
    backgroundColor: "#030303",
    fontFamily: FONT,
    boxSizing: "border-box",
  },
  intro: {
    maxWidth: "680px",
    margin: "0 auto 40px",
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
  headingAccent: {
    color: "#E11D48",
  },
  subtext: {
    marginTop: "16px",
    color: "rgba(255,255,255,0.55)",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
    gap: "24px",
    alignItems: "start",
  },

  /* left sticky card */
  leftSticky: {
    position: "sticky",
    top: "40px",
  },
  leftCard: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    height: "780px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "#0a0a0a",
    display: "block",
    textDecoration: "none",
    cursor: "pointer",
  },
  leftImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  leftOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.78) 70%, rgba(0,0,0,0.96) 100%)",
  },
  leftTopRow: {
    position: "absolute",
    top: "22px",
    right: "22px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "12px",
    zIndex: 2,
  },
  leftTag: {
    padding: "9px 18px",
    borderRadius: "999px",
    backgroundColor: "rgba(255,255,255,0.94)",
    color: "#0a0a0a",
    fontFamily: FONT,
    fontSize: "13px",
    fontWeight: 600,
  },
  scanBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.94)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leftBottom: {
    position: "absolute",
    left: "28px",
    right: "28px",
    bottom: "28px",
    zIndex: 2,
  },
  leftLabel: {
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#FDA4AF",
    marginBottom: "10px",
    textShadow: "0 1px 8px rgba(0,0,0,0.6)",
  },
  leftTitle: {
    fontFamily: FONT,
    fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.2,
    letterSpacing: "-0.025em",
    margin: 0,
    maxWidth: "440px",
    textShadow: "0 2px 14px rgba(0,0,0,0.65)",
  },
  leftLinkRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "18px",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 600,
    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
  },

  /* right grid */
  rightGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  card: {
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden",
    height: "340px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "#0a0a0a",
    cursor: "pointer",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
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
    objectPosition: "center top",
    display: "block",
  },
  cardOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.96) 100%)",
  },
  cardTagsRow: {
    position: "absolute",
    top: "16px",
    left: "16px",
    right: "16px",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    zIndex: 2,
  },
  cardTag: {
    padding: "7px 13px",
    borderRadius: "999px",
    backgroundColor: "rgba(255,255,255,0.94)",
    color: "#0a0a0a",
    fontFamily: FONT,
    fontSize: "11.5px",
    fontWeight: 600,
  },
  cardBottom: {
    position: "absolute",
    left: "18px",
    right: "18px",
    bottom: "18px",
    zIndex: 2,
  },
  cardLabel: {
    fontFamily: FONT,
    fontSize: "11.5px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#FDA4AF",
    marginBottom: "8px",
    textShadow: "0 1px 6px rgba(0,0,0,0.6)",
  },
  cardTitle: {
    fontFamily: FONT,
    fontSize: "16px",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    margin: 0,
    textShadow: "0 2px 12px rgba(0,0,0,0.65)",
  },
};

const rightCards = [
  {
    label: "Thought Leadership",
    tags: ["Healthcare", "GenAI"],
    title: "Beyond Automated Compliance",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/Image%20(Beyond%20Automated%20Compliance).webp",
  },
  {
    label: "Press Release",
    tags: ["Press Release", "2026"],
    title: "TRIO and Meridian Advance Sovereign AI for Health Systems",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/TRIO%20and%20Meridian%20Advance%20Sovereign%20AI%20for%20Health%20Systems.webp",
  },
  {
    label: "Success Story",
    tags: ["Healthcare", "GenAI"],
    title: "Northbeam Accelerates Legacy Modernization",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/Image%20(Northbeam%20Accelerates%20Legacy%20Modernization).webp",
  },
  {
    label: "Blog",
    tags: ["Healthcare", "AI Modernization"],
    title: "The Hidden Cost of Legacy Pipelines",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/The%20Hidden%20Cost%20of%20Legacy%20Pipelines.webp",
  },
  {
    label: "Case Study",
    tags: ["DevOps", "GenAI"],
    title: "Cascade Health Cuts Release Time by 6x",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/Image%20(Cascade%20Health%20Cuts%20Release%20Time%20by%206x).webp",
  },
  {
    label: "Research",
    tags: ["Enterprise AI"],
    title: "Where Enterprise AI Actually Pays Off",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/Where%20Enterprise%20AI%20Actually%20Pays%20Off.webp",
  },
  {
    label: "Webinar",
    tags: ["Compliance", "AI"],
    title: "Designing Compliance-Native AI Pipelines",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/Image%20(Designing%20Compliance-Native%20AI%20Pipelines).webp",
  },
  {
    label: "Press Release",
    tags: ["Healthcare", "2026"],
    title: "Ironframe Deploys TRIO Across 12 Facilities",
    img: "/assets/Home-page/Enterprise%20AI%20Overview/Ironframe%20Deploys%20TRIO%20Across%2012%20Facilities.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function RightCard({ card, index }) {
  return (
    <motion.div
      className="home-enterprise-ai-overview__card"
      style={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={index}
      whileHover="hover"
    >
      <motion.div style={styles.cardImgWrap}>
        <motion.img
          src={card.img}
          alt={card.title}
          style={styles.cardImg}
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      <div style={styles.cardOverlay} />

      <div style={styles.cardTagsRow}>
        {card.tags.map((t) => (
          <span style={styles.cardTag} key={t}>
            {t}
          </span>
        ))}
      </div>

      <div style={styles.cardBottom}>
        <div style={styles.cardLabel}>{card.label}</div>
        <h3 style={styles.cardTitle}>{card.title}</h3>
      </div>
    </motion.div>
  );
}

function ScanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2 6V3.5C2 2.67 2.67 2 3.5 2H6M12 2H14.5C15.33 2 16 2.67 16 3.5V6M16 12V14.5C16 15.33 15.33 16 14.5 16H12M6 16H3.5C2.67 16 2 15.33 2 14.5V12"
        stroke="#0a0a0a"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="2.2" stroke="#0a0a0a" strokeWidth="1.4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
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

export default function EnterpriseAIOverview() {
  return (
    <section className="home-enterprise-ai-overview" style={styles.section}>
      <motion.div
        style={styles.intro}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span style={styles.eyebrow}>
          <span style={styles.dot} />
          Enterprise AI Overview
        </span>
        <h2 style={styles.heading}>
          One platform for every layer of{" "}
          <span style={styles.headingAccent}>enterprise AI</span> delivery
        </h2>
        
      </motion.div>

      <div className="home-enterprise-ai-overview__grid" style={styles.grid}>
        {/* LEFT — sticky featured visual */}
        <div className="home-enterprise-ai-overview__left-sticky" style={styles.leftSticky}>
          <motion.a
            href="/solutions/overview"
            className="home-enterprise-ai-overview__left-card"
            style={styles.leftCard}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/assets/Home-page/Enterprise%20AI%20Overview/A%20unified%20control%20layer%20for%20AI%20across%20the%20enterprise.webp"
              alt="Enterprise AI Overview"
              style={styles.leftImg}
            />
            <div style={styles.leftOverlay} />

            <div style={styles.leftTopRow}>
              <span style={styles.leftTag}>AI</span>
              <motion.div
                style={styles.scanBtn}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(225,29,72,0.0)",
                    "0 0 0 8px rgba(225,29,72,0.0)",
                  ],
                }}
              >
                <ScanIcon />
              </motion.div>
            </div>

            <div style={styles.leftBottom}>
              <div style={styles.leftLabel}>Enterprise AI Overview</div>
              <h3 style={styles.leftTitle}>
                A unified control layer for AI across the enterprise
              </h3>
              <motion.div
                style={styles.leftLinkRow}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                Explore the platform
                <ArrowIcon />
              </motion.div>
            </div>
          </motion.a>
        </div>

        {/* RIGHT — scrolling 2-col grid */}
        <div className="home-enterprise-ai-overview__right-grid" style={styles.rightGrid}>
          {rightCards.map((card, i) => (
            <RightCard card={card} index={i} key={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}