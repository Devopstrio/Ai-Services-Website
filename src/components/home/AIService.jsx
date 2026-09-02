import React from "react";
import { motion } from "framer-motion";

/**
 * WhatIsDevOpsTRIO.jsx — DevOpsTRIO
 * "What is DevOpsTRIO" — label + large statement paragraph, vertical divider.
 * Black theme, #E11D48 accent, white text, inline CSS only. Font: Geist
 */

const FONT = '"Geist", sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 5%",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
          fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
    marginTop: "-70px",
  },
  grid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: "60px",
  },
  labelCol: {
    borderLeft: "1px solid rgba(255,255,255,0.14)",
    paddingLeft: "24px",
  },
  label: {
    fontFamily: FONT,
    fontSize: "12.5px",
    fontWeight: 600,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.84)",
    lineHeight: 1.6,
  },
  textCol: {
    borderLeft: "1px solid rgba(255,255,255,0.14)",
    paddingLeft: "40px",
  },
  paragraph: {
    fontFamily: FONT,
    color: "rgba(255, 255, 255, 0.64)",
    fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
    fontWeight: 400,
    lineHeight: 1.55,
    letterSpacing: "-0.005em",
    margin: 0,
  },
  strong: {
    color: "#FFFFFF",
    fontWeight: 700,
  },
  accent: {
    color: "#E11D48",
    fontWeight: 700,
  },
};

const wordVariants = {
  hidden: { opacity: 0.15 },
  visible: { opacity: 1 },
};

/* splits text into words, each animated in on scroll for a subtle
   "reading reveal" effect without being distracting */
function RevealText({ children }) {
  const parts = children; // array of {text, type} segments

  let wordIndex = 0;
  return (
    <p style={styles.paragraph}>
      {parts.map((part, pi) => {
        const words = part.text.split(" ");
        return words.map((w, wi) => {
          const idx = wordIndex++;
          const style =
            part.type === "accent"
              ? styles.accent
              : part.type === "strong"
              ? styles.strong
              : undefined;
          return (
            <motion.span
              key={`${pi}-${wi}`}
              style={{ display: "inline-block", marginRight: "0.28em" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={wordVariants}
              transition={{ duration: 0.4, delay: idx * 0.012 }}
            >
              <span style={style}>{w}</span>
            </motion.span>
          );
        });
      })}
    </p>
  );
}

const content = [
  { text: "Devopstrio is a globally active,", type: "normal" },
  { text: "AI-centric Devops partner", type: "strong" },
  {
    text: "for healthcare. Originating in clinical infrastructure and compliance engineering, we bring deep expertise in secure, scalable delivery to healthcare organizations across the industry.",
    type: "normal",
  },
  { text: "By combining clinical know-how with modern AI tooling", type: "normal" },
  { text: ", our mission is to unlock the full", type: "normal" },
  { text: "value of healthcare data", type: "accent" },
  {
    text: ", build resilient production systems, and deliver measurable outcomes through AI.",
    type: "normal",
  },
];

export default function WhatIsDevOpsTRIO() {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.grid}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={styles.labelCol}>
          <span style={styles.label}>
            WHAT IS
            <br />
            DEVOPSTRIO
          </span>
        </div>

        <div style={styles.textCol}>
          <RevealText>{content}</RevealText>
        </div>
      </motion.div>
    </section>
  );
}