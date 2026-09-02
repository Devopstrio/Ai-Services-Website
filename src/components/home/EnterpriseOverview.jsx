import React from "react";
import { motion } from "framer-motion";

/**
 * EnterpriseAIOverview.jsx — DevOpsTRIO
 * Left: sticky featured visual. Right: 2-col scrolling card grid.
 * Black theme, #E11D48 accent, white text, inline CSS only.
 * Font: Geist
 */

const FONT = '"Geist", sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "100px 5%",
    backgroundColor: "#000000",
    fontFamily: FONT,
    boxSizing: "border-box",
  },
  intro: {
    maxWidth: "680px",
    margin: "0 auto 64px",
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
      "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.92) 100%)",
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
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#E11D48",
    marginBottom: "10px",
  },
  leftTitle: {
    fontFamily: FONT,
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.25,
    margin: 0,
    maxWidth: "420px",
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
  cardOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.9) 100%)",
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
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    color: "#E11D48",
    marginBottom: "8px",
  },
  cardTitle: {
    fontFamily: FONT,
    fontSize: "15px",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.3,
    margin: 0,
  },
};

const rightCards = [
  {
    label: "Thought Leadership",
    tags: ["Healthcare", "GenAI"],
    title: "Beyond Automated Compliance",
    img: "https://www.gft.com/.imaging/focalpoint/1600x1920/dam/jcr:7a75f4c3-d0b8-4b1c-b5c2-786ba8506d62/gft-image-mood-03.webp",
  },
  {
    label: "Press Release",
    tags: ["Press Release", "2026"],
    title: "TRIO and Meridian Advance Sovereign AI for Health Systems",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-unveils-ai-first-value-framework.jpg",
  },
  {
    label: "Success Story",
    tags: ["Healthcare", "GenAI"],
    title: "Northbeam Accelerates Legacy Modernization",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-top-3-it-services-brand-globally2026.jpg",
  },
  {
    label: "Blog",
    tags: ["Healthcare", "AI Modernization"],
    title: "The Hidden Cost of Legacy Pipelines",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-championsevolve.jpg",
  },
  {
    label: "Case Study",
    tags: ["DevOps", "GenAI"],
    title: "Cascade Health Cuts Release Time by 6x",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-accelerate-enterprise-adoption-generative-ai.jpg",
  },
  {
    label: "Research",
    tags: ["Enterprise AI"],
    title: "Where Enterprise AI Actually Pays Off",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-collaboration-accelerate-ai-value-journey.jpg",
  },
  {
    label: "Webinar",
    tags: ["Compliance", "AI"],
    title: "Designing Compliance-Native AI Pipelines",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-crafting-intelligent-experiences-aster.jpg",
  },
  {
    label: "Press Release",
    tags: ["Healthcare", "2026"],
    title: "Ironframe Deploys TRIO Across 12 Facilities",
    img: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-crafting-intelligent-experiences-topaz.png",
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
          variants={{ hover: { scale: 1.08 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          Enterprise AI Overview
        </span>
        <h2 style={styles.heading}>
          One platform for every layer of{" "}
          <span style={styles.headingAccent}>enterprise AI</span> delivery
        </h2>
        <p style={styles.subtext}>
          Explore how healthcare and enterprise teams design, secure, and
          scale AI pipelines with DevOpsTRIO — from first model to
          full production.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {/* LEFT — sticky featured visual */}
        <div style={styles.leftSticky}>
          <motion.div
            style={styles.leftCard}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="https://www.gft.com/.imaging/focalpoint/1600x1920/dam/jcr:0e78c83e-9e06-49ce-b6bb-ca06015c2d8e/gft_platform-modernisation_web_a.webp"
              alt="Enterprise AI Overview"
              style={styles.leftImg}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
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
          </motion.div>
        </div>

        {/* RIGHT — scrolling 2-col grid */}
        <div style={styles.rightGrid}>
          {rightCards.map((card, i) => (
            <RightCard card={card} index={i} key={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}