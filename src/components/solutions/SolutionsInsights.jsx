import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import insight1 from "../../assets/fresh/binary_code_tunnel.jpg";
import insight2 from "../../assets/fresh/agent_finance_reconciliation.jpg";
import insight3 from "../../assets/fresh/clinical_ai_diagnostics.jpg";
import insight4 from "../../assets/fresh/cloud-security-hub-hero.jpg";

const FONT = '"Geist", sans-serif';

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
    padding: "130px 5%",
    backgroundColor: "#000000",
    fontFamily: FONT
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "60px",
    flexWrap: "wrap",
    gap: "24px"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.02em"
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 28px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "all 0.25s ease"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
    alignItems: "stretch"
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
    height: "200px",
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
    letterSpacing: "0.05em",
    zIndex: 2,
  },
  body: {
    padding: "26px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "16px",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "1.25rem",
    fontWeight: 700,
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
    marginTop: "8px"
  }
};

export default function SolutionsInsights() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          <motion.button 
            style={styles.cta}
            whileHover={{ scale: 1.03, backgroundColor: "#BE123C" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
          >
            Schedule Consultation <ArrowRight size={16} />
          </motion.button>
        </div>

        <div style={styles.grid}>
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
                onClick={() => navigate(item.route)}
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
