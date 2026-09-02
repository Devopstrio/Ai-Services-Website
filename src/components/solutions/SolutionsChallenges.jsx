import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import challenge1 from "../../assets/fresh/automated_invoice_processing.jpg";
import challenge2 from "../../assets/fresh/automated_logistics_hub.jpg";
import challenge3 from "../../assets/fresh/automotive_autonomous_driving.jpg";
import challenge4 from "../../assets/fresh/bajaj_finance_bharti_airtel_partnership_financial__1737355875195_1770527459556.webp";

const FONT = '"Geist", sans-serif';

const CHALLENGES = [
  {
    num: "01",
    tag: "LEGACY ARCHITECTURE",
    challenge: "Legacy Monolith Complexity",
    solution: "Cloud & App Modernization",
    outcome: "Cut infrastructure maintenance by 40% and accelerate deployment velocity 5x.",
    image: challenge1
  },
  {
    num: "02",
    tag: "DATA FRAGMENTATION",
    challenge: "Fragmented Data Silos",
    solution: "Unified Data & AI Foundations",
    outcome: "Enable sub-second decision intelligence across all distributed business units.",
    image: challenge2
  },
  {
    num: "03",
    tag: "WORKFLOW BOTTLENECK",
    challenge: "Manual Process Bottlenecks",
    solution: "Intelligent Automation & Agents",
    outcome: "Deflect 85% of repetitive administrative tasks with zero operational error.",
    image: challenge3
  },
  {
    num: "04",
    tag: "CYBER RISK & AUDIT",
    challenge: "Security & Compliance Gaps",
    solution: "DevSecOps & Zero-Trust AI",
    outcome: "Continuous audit-ready compliance across multi-cloud enterprise deployments.",
    image: challenge4
  }
];

const styles = {
  section: {
    padding: "130px 5%",
    backgroundColor: "#050505",
    fontFamily: FONT,
    position: "relative",
    overflow: "hidden"
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "70px",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
    fontWeight: 700,
    margin: "0 0 18px 0",
    letterSpacing: "-0.02em"
  },
  subheading: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "1.15rem",
    maxWidth: "640px",
    margin: "0 auto",
    lineHeight: 1.6
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
  },
  card: {
    background: "#0a0a0a",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.35s ease",
  },
  imgWrap: {
    position: "relative",
    width: "100%",
    height: "190px",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,10,10,0.9) 100%)",
  },
  tagBadge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "5px 12px",
    borderRadius: "6px",
    backgroundColor: "rgba(225,29,72,0.9)",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    zIndex: 2,
  },
  body: {
    padding: "26px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "18px",
  },
  challengeTitle: {
    color: "#FFFFFF",
    fontSize: "1.25rem",
    fontWeight: 700,
    margin: "0 0 8px 0",
    letterSpacing: "-0.01em"
  },
  solutionText: {
    color: "#E11D48",
    fontSize: "0.95rem",
    fontWeight: 600,
    margin: "0 0 14px 0",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },
  outcomeBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "10px",
    padding: "14px",
    color: "rgba(255,255,255,0.75)",
    fontSize: "13.5px",
    lineHeight: 1.5,
  }
};

export default function SolutionsChallenges() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <motion.h2 
            style={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            From Challenge to <span style={{ color: "#E11D48" }}>Outcome</span>
          </motion.h2>
          <motion.p 
            style={styles.subheading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every enterprise faces distinct technical hurdles. Here is how we systematically transform operational bottlenecks into measurable ROI.
          </motion.p>
        </div>

        <div style={styles.grid}>
          {CHALLENGES.map((item, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                style={{
                  ...styles.card,
                  borderColor: isHovered ? "rgba(225,29,72,0.5)" : "rgba(255,255,255,0.08)",
                  transform: isHovered ? "translateY(-8px)" : "none",
                  boxShadow: isHovered ? "0 14px 40px rgba(225,29,72,0.18)" : "none",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div style={styles.imgWrap}>
                  <img
                    src={item.image}
                    alt={item.challenge}
                    style={{
                      ...styles.img,
                      transform: isHovered ? "scale(1.08)" : "scale(1)"
                    }}
                  />
                  <div style={styles.imgOverlay} />
                  <div style={styles.tagBadge}>{item.tag}</div>
                </div>

                <div style={styles.body}>
                  <div>
                    <h3 style={styles.challengeTitle}>{item.challenge}</h3>
                    <div style={styles.solutionText}>
                      <ArrowRight size={14} /> {item.solution}
                    </div>
                  </div>

                  <div style={styles.outcomeBox}>
                    <strong style={{ color: "#fff", display: "block", marginBottom: "4px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Tangible Outcome</strong>
                    {item.outcome}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
