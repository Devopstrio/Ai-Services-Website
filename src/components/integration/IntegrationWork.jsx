import React from "react";
import { motion } from "framer-motion";

const FONT = '"Geist", sans-serif';

const ITEMS = [
  {
    title: "AI Engineering & Data Foundations.",
    body: "Embed AI into your enterprise products, services, and workflows with scalable architectures, modern APIs, MLOps pipelines, and trusted data platforms that enable reliable, enterprise-scale AI.",
    linkWord: "trusted data platforms",
  },
  {
    title: "Applied AI & Machine Learning.",
    body: "Optimize operational workflows with predictive, generative, and optimization intelligence to improve efficiency, increase reliability, and enable smarter decision-making across the enterprise.",
  },
  {
    title: "Conversational & Generative AI Solutions.",
    body: "Deploy secure, compliance-ready copilots, enterprise assistants, and LLM-powered tools that boost employee productivity, enhance personalization, and elevate customer engagement.",
  },
  {
    title: "Intelligent Automation.",
    body: "Transform legacy processes with autonomous agents that automate complex tasks, enabling your team to focus on strategic initiatives rather than repetitive manual work.",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 5%",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  container: {
    maxWidth: "1080px",
    margin: "0 auto",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.6vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: 0,
    marginBottom: "56px",
  },
  headingAccent: { color: "#E11D48" },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  item: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  bullet: {
    width: "9px",
    height: "9px",
    marginTop: "9px",
    flexShrink: 0,
    backgroundColor: "#E11D48",
  },
  itemTextWrap: {
    flex: 1,
  },
  itemTitle: {
    fontFamily: FONT,
    fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)",
    fontWeight: 700,
    color: "#FFFFFF",
    margin: 0,
    marginBottom: "10px",
  },
  itemBody: {
    fontFamily: FONT,
    fontSize: "15.5px",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.55)",
    margin: 0,
  },
  link: {
    color: "#FFFFFF",
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },

  ctaRow: {
    display: "flex",
    marginTop: "60px",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "stretch",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
  },
  ctaMain: {
    padding: "18px 30px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "15px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  },
  ctaIcon: {
    padding: "18px 22px",
    backgroundColor: "rgba(225,29,72,0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function IntegrationWork() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          How We Put <span style={styles.headingAccent}>AI</span> to Work
        </motion.h2>

        <div style={styles.list}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              style={styles.item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={itemVariants}
              custom={i}
            >
              <span style={styles.bullet} />
              <div style={styles.itemTextWrap}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemBody}>
                  {item.linkWord
                    ? item.body.split(item.linkWord).map((part, pi, arr) => (
                        <React.Fragment key={pi}>
                          {part}
                          {pi < arr.length - 1 && (
                            <span style={styles.link}>{item.linkWord}</span>
                          )}
                        </React.Fragment>
                      ))
                    : item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            style={styles.ctaBtn}
            onClick={() => window.location.href = "https://devopstrio.co.uk/contact"}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 26px rgba(225, 29, 72, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <span style={styles.ctaMain}>Start Your AI Journey</span>
            <motion.span
              style={styles.ctaIcon}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ArrowIcon />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
