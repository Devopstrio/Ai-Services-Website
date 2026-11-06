import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import insight1 from "../../assets/fresh/binary_code_tunnel.jpg";
import insight2 from "../../assets/fresh/agent_finance_reconciliation.jpg";
import insight3 from "../../assets/fresh/clinical_ai_diagnostics.jpg";
import insight4 from "../../assets/fresh/cloud-security-hub-hero.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const RESOURCES = [
  {
    type: "SOLUTION BLUEPRINT",
    title: "Generative AI Platform Architecture",
    desc: "Explore how we architect secure enterprise LLM wrappers, private vector stores, and custom internal copilots.",
    route: "/solutions/custom-ai-solutions",
    image: insight1,
    value: "Boost workforce productivity by unlocking proprietary enterprise knowledge safely."
  },
  {
    type: "SERVICE BLUEPRINT",
    title: "DevSecOps & Platform Engineering",
    desc: "Accelerate software delivery velocity with our automated CI/CD pipelines and infrastructure as code blueprints.",
    route: "/solutions/devops-ai",
    image: insight2,
    value: "Release 5x faster with zero-trust automated security built into every commit."
  },
  {
    type: "DATA STRATEGY",
    title: "Data & Analytics Modernization",
    desc: "Transform legacy SQL warehouses into real-time streaming architectures supporting intelligent predictive applications.",
    route: "/solutions/knowledge-management",
    image: insight3,
    value: "Empower executive leadership with sub-second, highly accurate decision intelligence."
  },
  {
    type: "SECURITY INSIGHT",
    title: "The Enterprise Guide to AI Security",
    desc: "Essential architectural principles for securing generative AI models and preventing corporate data leakage in production.",
    route: "/solutions/cybersecurity-ai",
    image: insight4,
    value: "Deploy AI confidently without compromising confidential intellectual property."
  }
];

const styles = {
  section: {
    padding: "130px 24px",
    backgroundColor: "#000000",
    fontFamily: FONT,
    position: "relative",
    overflow: "hidden"
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "50px",
    flexWrap: "wrap",
    gap: "24px"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
    fontWeight: 600,
    margin: 0,
    letterSpacing: "-0.02em"
  },
  actionsRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap"
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "13px 26px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    transition: "all 0.25s ease",
    boxShadow: "0 4px 15px rgba(225,29,72,0.3)"
  },
  navRow: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  navBtn: {
    width: "44px",
    height: "44px",
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
    height: "220px",
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
  title: {
    color: "#FFFFFF",
    fontSize: "1.25rem",
    fontWeight: 600,
    margin: "0 0 10px 0",
    letterSpacing: "-0.01em",
    lineHeight: 1.35
  },
  desc: {
    color: "rgba(255,255,255,0.65)",
    fontSize: "13.5px",
    lineHeight: 1.6,
    margin: 0
  },
  linkBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#E11D48",
    fontSize: "13.5px",
    fontWeight: 600,
    marginTop: "20px"
  }
};

export default function SolutionsInsights() {
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
          <div>
            <motion.h2 
              style={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Explore <span style={{ color: "#E11D48" }}>Expertise</span>
            </motion.h2>
          </div>

          <div style={styles.actionsRow}>
            <a 
              href="https://devopstrio.co.uk/contact#schedule"
              style={styles.cta}
              className="schedule-consultation-btn"
            >
              Schedule Consultation <ArrowRight size={16} />
            </a>
            <style>{`
              .schedule-consultation-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(225,29,72,0.5) !important; }
              .expertise-nav-btn:hover { background-color: rgba(225,29,72,0.15) !important; border-color: #E11D48 !important; }
            `}</style>

            <div style={styles.navRow}>
              <button 
                onClick={() => scroll("left")} 
                style={styles.navBtn}
                aria-label="Previous Expertise"
                className="expertise-nav-btn"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll("right")} 
                style={styles.navBtn}
                aria-label="Next Expertise"
                className="expertise-nav-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div ref={trackRef} style={styles.track}>
          {RESOURCES.map((item, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                style={{
                  ...styles.card,
                  borderColor: isHovered ? "rgba(225,29,72,0.5)" : "rgba(255,255,255,0.08)",
                  transform: isHovered ? "translateY(-6px)" : "none",
                  boxShadow: isHovered ? "0 12px 35px rgba(225,29,72,0.18)" : "none",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (item.route.startsWith("http")) {
                    window.location.href = item.route;
                  } else {
                    window.location.href = item.route;
                  }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div style={styles.imgWrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      ...styles.img,
                      transform: isHovered ? "scale(1.08)" : "scale(1)"
                    }}
                  />
                  <div style={styles.imgOverlay} />
                  <div style={styles.tagBadge}>{item.type}</div>
                </div>

                <div style={styles.body}>
                  <div>
                    <h3 style={styles.title}>{item.title}</h3>
                    <p style={styles.desc}>{item.desc}</p>
                  </div>

                  <div style={styles.linkBtn}>
                    Explore Details <ArrowRight size={14} />
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
