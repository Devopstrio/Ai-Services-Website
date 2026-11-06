import { useState, useRef } from "react";
import { motion } from "framer-motion";

import insight1 from "../../assets/fresh/agent_code_refactoring.jpg";
import insight2 from "../../assets/fresh/agent_deep_market_research.jpg";
import insight3 from "../../assets/fresh/agent_hr_workforce.jpg";
import insight4 from "../../assets/fresh/agent_marketing_campaign.jpg";
import insight5 from "../../assets/fresh/agent_procurement_vendor.jpg";
import insight6 from "../../assets/fresh/agent_sales_outreach.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ITEMS = [
  {
    tag: "CASE STUDY",
    title: "Next-Gen IT Operations with Autonomous Agentic AI",
    desc: "How enterprises deploy autonomous multi-agent swarms to auto-resolve infrastructure alerts and slash incident response times.",
    image: insight1,
    href: "https://devopstrio.co.uk/insights/case-studies/next-gen-it-operations-with-agentic-ai-9jkmk0",
  },
  {
    tag: "BLOG",
    title: "How AI Agents Boost Enterprise Automation and Business Growth",
    desc: "A strategic blueprint for orchestrating autonomous agents across enterprise workflows, driving productivity and operational velocity.",
    image: insight2,
    href: "https://devopstrio.co.uk/insights/blogs/how-ai-agents-boost-enterprise-automation-and-business-growth-l0yqvh",
  },
  {
    tag: "CASE STUDY",
    title: "Enhancing Institutional Banking Productivity with Agentic AI",
    desc: "Autonomous agent deployment in financial services: automating compliance checks, transaction auditing, and sub-second anomaly isolation.",
    image: insight3,
    href: "https://devopstrio.co.uk/insights/case-studies/enhancing-institutional-banking-productivity-with-agentic-ai-s5t8ui",
  },
  {
    tag: "CLIENT TRANSFORMATION",
    title: "From Manual Workflows to Intelligent Agentic Operations",
    desc: "How Devopstrio modernized legacy operational workflows with autonomous agents, eliminating cross-departmental coordination bottlenecks.",
    image: insight4,
    href: "https://devopstrio.co.uk/insights/client-transformations/from-manual-workflows-to-intelligent-operations-how-devopstrio-automated-enterprise-workflows-g8f9k2",
  },
  {
    tag: "WHITE PAPER",
    title: "MLOps to LLMOps: Streamlining AI Model Deployment & Scaling",
    desc: "Key architectural principles for deploying, supervising, and scaling production-grade agent platforms with zero model retention risk.",
    image: insight5,
    href: "https://devopstrio.co.uk/insights/blogs/mlops-to-llmops-streamlining-ai-model-deployment-scaling-4ckbn4",
  },
  {
    tag: "CASE STUDY",
    title: "From Frozen Legacy to AI-Powered Velocity with Autonomous AI",
    desc: "Transforming a global enterprise by replacing fragile manual handoffs with autonomous, self-healing cognitive agent pipelines.",
    image: insight6,
    href: "https://devopstrio.co.uk/insights/case-studies/from-frozen-legacy-to-ai-powered-velocity-transforming-a-global-investment-and-insurance-firm-ejni38",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "16px",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.6vw, 3rem)",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    margin: 0,
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
    transition: "color 0.2s ease",
  },
  viewAllArrow: {
    width: "24px",
    height: "24px",
    backgroundColor: "#E11D48",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  },
  navControls: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "30px 24px 0",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  navBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "6px",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#FFFFFF",
    transition: "all 0.2s ease",
  },
  scrollWrap: {
    padding: "0 24px",
  },
  track: {
    display: "flex",
    gap: "24px",
    overflowX: "auto",
    paddingBottom: "20px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  card: {
    flex: "0 0 360px",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#0A0A0A",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
  },
  imgWrap: {
    position: "relative",
    width: "100%",
    height: "220px",
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
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.04em",
    zIndex: 2,
  },
  body: {
    padding: "24px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#0A0A0A",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#FFFFFF",
    lineHeight: 1.4,
    margin: "0 0 12px 0",
    letterSpacing: "-0.01em",
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.65)",
    margin: 0,
  },
  readMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#E11D48",
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "20px",
    transition: "gap 0.2s ease",
  }
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavArrowIcon({ direction }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}>
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      style={{
        ...styles.card,
        borderColor: isHovered ? "rgba(225,29,72,0.5)" : "rgba(255,255,255,0.08)",
        transform: isHovered ? "translateY(-6px)" : "none",
        boxShadow: isHovered ? "0 14px 40px rgba(225,29,72,0.18)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.imgWrap}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            ...styles.img,
            transform: isHovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <div style={styles.imgOverlay} />
        <div style={styles.tagBadge}>{item.tag}</div>
      </div>

      <div style={styles.body}>
        <div>
          <h3 style={styles.title}>{item.title}</h3>
          <p style={styles.desc}>{item.desc}</p>
        </div>
        <div style={{ ...styles.readMore, gap: isHovered ? "10px" : "6px" }}>
          Read Article <ArrowIcon />
        </div>
      </div>
    </motion.a>
  );
}

export default function AgentsInsights() {
  const trackRef = useRef(null);

  const handleScroll = (dir) => {
    if (trackRef.current) {
      const scrollAmount = 380;
      trackRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.headerRow}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Explore Agent <span style={{ color: "#E11D48" }}>Insights</span>
        </motion.h2>

        <a 
          href="https://devopstrio.co.uk/insights"
          style={styles.viewAll}
          className="view-all-insights-link"
        >
          View All Insights
          <div style={styles.viewAllArrow}>
            <ArrowIcon />
          </div>
        </a>
      </div>

      <div style={styles.scrollWrap}>
        <div style={styles.track} ref={trackRef}>
          {ITEMS.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      <div style={styles.navControls}>
        <button 
          style={styles.navBtn} 
          onClick={() => handleScroll("left")} 
          aria-label="Scroll left"
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(225,29,72,0.4)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
        >
          <NavArrowIcon direction="left" />
        </button>
        <button 
          style={styles.navBtn} 
          onClick={() => handleScroll("right")} 
          aria-label="Scroll right"
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(225,29,72,0.4)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
        >
          <NavArrowIcon direction="right" />
        </button>
      </div>

      <style>{`
        .view-all-insights-link:hover {
          color: #E11D48 !important;
        }
        .view-all-insights-link:hover div {
          background-color: #BE123C !important;
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
}
