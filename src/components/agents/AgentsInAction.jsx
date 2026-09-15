import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import agentGovernanceImg from "../../assets/fresh/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    minHeight: "620px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    overflow: "hidden",
    textAlign: "left",
  },
  imageCol: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#0a0a0a",
  },
  imgEl: {
    position: "absolute",
    top: "-8%",
    left: 90,
    width: "100%",
    height: "106%",
    objectFit: "cover",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%), linear-gradient(0deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%)",
  },
  glowDot: {
    position: "absolute",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(225,29,72,0.55) 0%, rgba(225,29,72,0) 70%)",
    filter: "blur(10px)",
    pointerEvents: "none",
  },
  textCol: {
    position: "relative",
    backgroundColor: "#160608",
    display: "flex",
    alignItems: "center",
    padding: "80px 24px",
    boxSizing: "border-box",
  },
  textColGlow: {
    position: "absolute",
    top: "-10%",
    right: "-10%",
    width: "420px",
    height: "420px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "480px",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.9rem, 3.2vw, 2.7rem)",
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
    margin: 0,
  },
  paragraph: {
    marginTop: "24px",
    fontFamily: FONT,
    color: "rgba(255,255,255,0.6)",
    fontSize: "15.5px",
    lineHeight: 1.85,
  },
  strong: {
    color: "#FFFFFF",
    fontWeight: 600,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "34px",
    padding: "15px 28px",
    borderRadius: "10px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    width: "fit-content",
  },
};

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

export default function AgentsInAction() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["10%", "60%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["70%", "20%"]);

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.imageCol}>
        <motion.div
          style={{ ...styles.imgEl, backgroundColor: "#000", y: imgY }}
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={agentGovernanceImg} alt="Agent Governance Architecture" style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 0.85, padding: "20px" }} />
        </motion.div>
        <motion.div style={{ ...styles.glowDot, left: glowX, top: glowY }} />
        <div style={styles.imgOverlay} />
      </div>

      <div style={styles.textCol}>
        <div style={styles.textColGlow} />
        <motion.div
          style={styles.inner}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={styles.heading}>Want to See Agents in Action?</h2>
          <p style={styles.paragraph}>
            No problem. At <span style={styles.strong}>Devopstrio</span>, we
            have a proven track record of deploying autonomous systems. Whether you're exploring your
            first multi-agent orchestration or reimagining operations end-to-end,
            our specialized AI Agents help you move faster, work smarter, and automate
            safely. We build secure, highly capable autonomous agents that 
            execute complex workflows reliably at scale. This is autonomy that works — 
            engineered by Devopstrio.
          </p>

          <motion.button
            onClick={() => window.location.href = "https://devopstrio.co.uk/contact"}
            style={styles.ctaBtn}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 26px rgba(225, 29, 72, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            See Agents in Action
            <ArrowIcon />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
