import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import challenge1 from "../../assets/enterprise-references/overview/challenge-1.webp";
import challenge2 from "../../assets/enterprise-references/overview/challenge-2.webp";
import challenge3 from "../../assets/enterprise-references/overview/challenge-3.webp";
import challenge4 from "../../assets/enterprise-references/overview/challenge-4.webp";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

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
    padding: "130px 24px",
    backgroundColor: "#050505",
    fontFamily: FONT,
    position: "relative",
    overflow: "hidden"
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "50px",
    flexWrap: "wrap",
    gap: "20px"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
    fontWeight: 600,
    margin: 0,
    letterSpacing: "-0.02em"
  },
  navRow: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  navBtn: {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.15)",
    backgroundColor: "transparent",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  track: {
    display: "flex",
    gap: "28px",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    scrollSnapType: "x mandatory",
    paddingBottom: "10px"
  },
  card: {
    background: "#0a0a0a",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.08)",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.35s ease",
    flex: "0 0 calc((100% - 56px) / 3)",
    minWidth: "320px",
    scrollSnapAlign: "start",
    boxSizing: "border-box"
  },
  imgWrap: {
    position: "relative",
    height: "200px",
    width: "100%",
    overflow: "hidden"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.6s ease"
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.85) 100%)"
  },
  tagBadge: {
    position: "absolute",
    top: "16px",
    left: "16px",
    backgroundColor: "rgba(0,0,0,0.65)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#E11D48",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    padding: "6px 12px",
    borderRadius: "6px",
    textTransform: "uppercase"
  },
  body: {
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between"
  },
  challengeTitle: {
    color: "#FFFFFF",
    fontSize: "1.25rem",
    fontWeight: 600,
    margin: "0 0 12px 0",
    letterSpacing: "-0.01em",
    lineHeight: 1.3
  },
  solutionText: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#E11D48",
    fontSize: "13.5px",
    fontWeight: 600,
    marginBottom: "20px"
  },
  outcomeBox: {
    padding: "16px",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.7)",
    fontSize: "13.5px",
    lineHeight: 1.5,
  }
};

export default function SolutionsChallenges() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth / 3 + 28;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

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

          <div style={styles.navRow}>
            <button 
              onClick={() => scroll("left")} 
              style={styles.navBtn}
              aria-label="Previous Challenge"
              className="challenge-nav-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              style={styles.navBtn}
              aria-label="Next Challenge"
              className="challenge-nav-btn"
            >
              <ChevronRight size={20} />
            </button>
            <style>{`
              .challenge-nav-btn:hover { background-color: rgba(225,29,72,0.15) !important; border-color: #E11D48 !important; }
            `}</style>
          </div>
        </div>

        <div ref={trackRef} style={styles.track}>
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
