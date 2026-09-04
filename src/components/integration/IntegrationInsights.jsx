import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import insight1 from "../../assets/fresh/integration_microservices.jpg";
import insight2 from "../../assets/fresh/telecom_5g_network_tower.jpg";
import insight3 from "../../assets/fresh/agent_knowledge_graph_synthesis.jpg";
import insight4 from "../../assets/fresh/agent_meeting_notes.jpg";
import insight5 from "../../assets/fresh/agent_research_analyst.jpg";
import insight6 from "../../assets/fresh/agent_security_soc.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ITEMS = [
  {
    tag: "ARCHITECTURE GUIDE",
    title: "Designing Real-Time Event Meshes with Apache Kafka",
    desc: "How to decouple monolithic services and establish high-throughput message buses for distributed AI microservices.",
    image: insight1
  },
  {
    tag: "SECURITY BRIEF",
    title: "Zero-Trust Service-to-Service Authentication",
    desc: "Enforcing mTLS, SPIFFE/SPIRE workload identities, and token verification across hybrid Kubernetes clusters.",
    image: insight2
  },
  {
    tag: "CASE STUDY",
    title: "FinTech Giant Unifies 40 Core Banking APIs",
    desc: "Migrating from point-to-point SOAP endpoints to a centralized GraphQL and gRPC mesh with 99.999% uptime.",
    image: insight3
  },
  {
    tag: "ENTERPRISE PATTERN",
    title: "Change Data Capture (CDC) for AI Context Memory",
    desc: "Streaming database transactions into vector stores in real time to power dynamic LLM retrieval engines.",
    image: insight4
  },
  {
    tag: "INTEGRATION GUIDE",
    title: "Building Resilient SaaS Connectors at Scale",
    desc: "Handling third-party API rate limits, exponential backoff, and idempotent webhook listeners in production.",
    image: insight5
  },
  {
    tag: "CASE STUDY",
    title: "Global Retailer Connects 2,000 Stores to Cloud AI",
    desc: "Real-time inventory synchronization across multi-region edge servers cut stockout incidents by 45%.",
    image: insight6
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
    padding: "0 5%",
    maxWidth: "1300px",
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
  navControls: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "30px 5% 0",
    maxWidth: "1300px",
    margin: "0 auto",
  },
  navBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "4px",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
  },
  scrollWrap: {
    padding: "0 5%",
  },
  track: {
    display: "flex",
    gap: "24px",
    overflowX: "auto",
    paddingBottom: "20px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    maxWidth: "1300px",
    margin: "0 auto",
  },
  card: {
    flex: "0 0 360px",
    height: "440px",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#0A0A0A",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
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
    fontWeight: 700,
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
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.6)",
    margin: 0,
  },
  readMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#E11D48",
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "16px",
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
    <motion.div
      style={{
        ...styles.card,
        borderColor: isHovered ? "rgba(225,29,72,0.5)" : "rgba(255,255,255,0.08)",
        transform: isHovered ? "translateY(-6px)" : "none",
        boxShadow: isHovered ? "0 12px 35px rgba(225,29,72,0.15)" : "none",
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
        <div style={styles.readMore}>
          Read Article <ArrowIcon />
        </div>
      </div>
    </motion.div>
  );
}

export default function IntegrationInsights() {
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
          Explore Integration <span style={{ color: "#E11D48" }}>Insights</span>
        </motion.h2>

        <div style={styles.viewAll}>
          View All Insights
          <div style={styles.viewAllArrow}>
            <ArrowIcon />
          </div>
        </div>
      </div>

      <div style={styles.scrollWrap}>
        <div style={styles.track} ref={trackRef}>
          {ITEMS.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      <div style={styles.navControls}>
        <button style={styles.navBtn} onClick={() => handleScroll("left")} aria-label="Scroll left">
          <NavArrowIcon direction="left" />
        </button>
        <button style={styles.navBtn} onClick={() => handleScroll("right")} aria-label="Scroll right">
          <NavArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
