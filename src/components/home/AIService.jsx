import React from "react";
import { motion } from "framer-motion";

/**
 * AIService.jsx — DevOpsTRIO AI Services
 * "What is DevOpsTRIO AI" — Label + large statement paragraph, subtle vertical divider.
 * Obsidian dark theme, #E11D48 accent, Inter typography.
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "100px 5%",
    backgroundColor: "#030303",
    background: "radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.06) 0%, rgba(3, 3, 3, 1) 75%)",
    fontFamily: '"Inter", "DM Sans", system-ui, -apple-system, sans-serif',
    boxSizing: "border-box",
    textAlign: "left",
    marginTop: "-40px",
    zIndex: 10,
  },
  grid: {
    maxWidth: "1360px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gap: "60px",
  },
  labelCol: {
    borderLeft: "2px solid rgba(225, 29, 72, 0.8)",
    paddingLeft: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  label: {
    fontFamily: '"DM Sans", "Inter", sans-serif',
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    lineHeight: 1.5,
  },
  textCol: {
    borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
    paddingLeft: "44px",
  },
  paragraph: {
    fontFamily: '"Inter", "DM Sans", system-ui, sans-serif',
    color: "rgba(212, 212, 216, 0.85)",
    fontSize: "clamp(1.35rem, 2.4vw, 1.95rem)",
    fontWeight: 400,
    lineHeight: 1.55,
    letterSpacing: "-0.015em",
    margin: 0,
  },
  strong: {
    color: "#FFFFFF",
    fontWeight: 600,
  },
  accent: {
    color: "#F43F5E",
    fontWeight: 600,
  },
};

const wordVariants = {
  hidden: { opacity: 0.15 },
  visible: { opacity: 1 },
};

function RevealText({ children }) {
  const parts = children;
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
  { text: "enterprise AI & DevOps engineering partner", type: "strong" },
  {
    text: ". Originating in mission-critical infrastructure, cloud security, and compliance engineering, we build and deploy production-grade AI systems across global enterprises.",
    type: "normal",
  },
  { text: "By unifying sovereign LLMs, autonomous agentic workflows, and real-time MLOps pipelines", type: "normal" },
  { text: ", our mission is to deliver", type: "normal" },
  { text: "measurable operational breakthroughs and compounding ROI through enterprise AI.", type: "accent" },
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
            DEVOPSTRIO AI
          </span>
        </div>

        <div style={styles.textCol}>
          <RevealText>{content}</RevealText>
        </div>
      </motion.div>
    </section>
  );
}