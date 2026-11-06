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
    tag: "BLOG",
    title: "Predictive MLOps Across Global Cloud Infrastructure",
    desc: "Predictive infrastructure monitoring cut unplanned downtime by more than half across a massive multi-region cloud deployment.",
    image: insight6,
    href: "https://devopstrio.co.uk/insights/blogs/why-does-your-business-need-mlops-f6uvyy",
  },
  {
    tag: "WHITE PAPER",
    title: "The Executive's Guide to AI-Ready Infrastructure",
    desc: "What enterprise leadership teams need in place before scaling AI beyond a single department — infrastructure, governance, and talent.",
    image: insight5,
    href: "https://devopstrio.co.uk/insights/white-paper/ai-infrastructure-services-for-gpu-azure-ai-aws-sagemaker-mxn5by",
  },
  {
    tag: "CASE STUDY",
    title: "Reinventing Business Operations with AI-Native Workflows",
    desc: "How high-performing enterprises restructure core operations around AI-native workflows instead of bolting AI onto legacy processes.",
    image: insight4,
    href: "https://devopstrio.co.uk/insights/case-studies/from-frozen-legacy-to-ai-powered-velocity-transforming-a-global-investment-and-insurance-firm-ejni38",
  },
  {
    tag: "CASE STUDY",
    title: "Are You Ready for Autonomous AI Agents?",
    desc: "AI agents are moving from pilot to production. Here's what separates enterprises that scale autonomous workflows safely from those stuck testing.",
    image: insight1,
    href: "https://devopstrio.co.uk/insights/case-studies/next-gen-it-operations-with-agentic-ai-9jkmk0",
  },
  {
    tag: "BLOG",
    title: "How Mature Companies Use Gen AI to Support Enterprise Growth",
    desc: "Organizations with high operations maturity are 3.3x more likely to scale high-value gen AI use cases and report 2.5x efficiency gains.",
    image: insight2,
    href: "https://devopstrio.co.uk/insights/blogs/how-gen-ai-is-turning-business-ideas-into-smarter-service-in-the-uk-i161ge",
  },
  {
    tag: "CASE STUDY",
    title: "Global Logistics Leader Pioneers AI-Native Shared Services",
    desc: "By consolidating operational workflows onto an AI-managed platform, this global enterprise cut administrative overhead by 42% in under a year.",
    image: insight3,
    href: "https://devopstrio.co.uk/insights/case-studies/how-a-global-entertainment-giant-rebuilt-its-it-core-with-automation-first-cloud-engineering-0tff11",
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
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    boxSizing: "border-box",
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
    textDecoration: "none",
    transition: "color 0.2s ease",
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
    padding: "24px 24px 0",
    maxWidth: "1280px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  navBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "8px",
    backgroundColor: "rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    transition: "all 0.2s ease",
  },
  scrollWrap: {
    padding: "0 24px",
    boxSizing: "border-box",
  },
  track: {
    display: "flex",
    gap: "24px",
    overflowX: "auto",
    paddingBottom: "16px",
    paddingTop: "6px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  card: {
    flex: "0 0 360px",
    width: "360px",
    height: "450px",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#0A0A0A",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textDecoration: "none",
    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
  },
  imgWrap: {
    position: "relative",
    width: "100%",
    height: "195px",
    overflow: "hidden",
    flexShrink: 0,
    backgroundColor: "#000000",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,10,10,0.85) 100%)",
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
    letterSpacing: "0.06em",
    zIndex: 2,
    textTransform: "uppercase",
  },
  body: {
    padding: "22px 24px 24px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#0A0A0A",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#FFFFFF",
    lineHeight: 1.35,
    margin: "0 0 10px 0",
    minHeight: "3rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.6)",
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  readMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#E11D48",
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "16px",
  },
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavArrowIcon({ direction }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
    >
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        borderColor: isHovered
          ? "rgba(225,29,72,0.5)"
          : "rgba(255,255,255,0.08)",
        transform: isHovered ? "translateY(-6px)" : "none",
        boxShadow: isHovered ? "0 12px 35px rgba(225,29,72,0.18)" : "none",
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
    </motion.a>
  );
}

export default function CapabilitiesInsights() {
  const trackRef = useRef(null);

  const handleScroll = (dir) => {
    if (trackRef.current) {
      const scrollAmount = 384;
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
          Explore AI <span style={{ color: "#E11D48" }}>Insights</span>
        </motion.h2>

        <a
          href="https://devopstrio.co.uk/insights"
          style={styles.viewAll}
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
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#E11D48";
            e.currentTarget.style.backgroundColor = "rgba(225,29,72,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)";
          }}
        >
          <NavArrowIcon direction="left" />
        </button>
        <button
          style={styles.navBtn}
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#E11D48";
            e.currentTarget.style.backgroundColor = "rgba(225,29,72,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)";
          }}
        >
          <NavArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
