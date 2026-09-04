import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import outcome1 from "../../assets/fresh/cloud_data_center_hall.jpg";
import outcome2 from "../../assets/fresh/crm-software-platforms-hero-2026-1000x600.webp";
import outcome3 from "../../assets/fresh/crm_revenue_forecasting.jpg";
import outcome4 from "../../assets/fresh/cyber_digital_matrix.jpg";
import outcome5 from "../../assets/fresh/cyber_threat_map.jpg";
import outcome6 from "../../assets/fresh/dark_ai_neural_grid.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const OUTCOMES = [
  {
    tag: "ACCELERATION",
    title: "5x Faster Innovation Velocity",
    desc: "Accelerate software delivery and time-to-market with automated CI/CD blueprints and cloud platform engineering.",
    image: outcome1
  },
  {
    tag: "EFFICIENCY",
    title: "65% Operational Cost Reduction",
    desc: "Automate complex manual workflows and eliminate repetitive tasks using autonomous multi-agent systems.",
    image: outcome2
  },
  {
    tag: "INTELLIGENCE",
    title: "Real-Time Decision Intelligence",
    desc: "Transform enterprise data silos into actionable foresight with continuous predictive machine learning pipelines.",
    image: outcome3
  },
  {
    tag: "RELIABILITY",
    title: "99.99% Infrastructure Uptime",
    desc: "Ensure high availability and fault tolerance across multi-cloud environments with predictive AIOps self-healing.",
    image: outcome4
  },
  {
    tag: "SECURITY",
    title: "Zero-Trust Security & Governance",
    desc: "Embed continuous compliance monitoring and automated guardrails natively into every layer of your application stack.",
    image: outcome5
  },
  {
    tag: "SIMPLIFICATION",
    title: "Legacy Stack Modernization",
    desc: "Consolidate sprawling, expensive legacy systems into unified, scalable cloud-native platforms with zero disruption.",
    image: outcome6
  }
];

const styles = {
  section: {
    padding: "130px 5%",
    backgroundColor: "#000000",
    fontFamily: FONT,
    position: "relative"
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "70px"
  },
  label: {
    color: "#E11D48",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "16px"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
    fontWeight: 700,
    margin: "0 0 16px 0",
    letterSpacing: "-0.02em"
  },
  subheading: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "1.15rem",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "28px"
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
  },
  title: {
    color: "#FFFFFF",
    fontSize: "1.3rem",
    fontWeight: 700,
    margin: "0 0 10px 0",
    letterSpacing: "-0.01em",
    lineHeight: 1.3
  },
  desc: {
    color: "rgba(255,255,255,0.65)",
    fontSize: "14px",
    lineHeight: 1.6,
    margin: 0
  }
};

export default function SolutionsOutcomes() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <motion.div 
            style={styles.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            REAL WORLD IMPACT
          </motion.div>
          <motion.h2 
            style={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1 }}
          >
            Driving Tangible <span style={{ color: "#E11D48" }}>Outcomes</span>
          </motion.h2>
          <motion.p
            style={styles.subheading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2 }}
          >
            Measurable operational improvements and high-ROI digital transformation delivered across global enterprises.
          </motion.p>
        </div>

        <div style={styles.grid}>
          {OUTCOMES.map((item, i) => {
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
                  <div style={styles.tagBadge}>{item.tag}</div>
                </div>

                <div style={styles.body}>
                  <h3 style={styles.title}>{item.title}</h3>
                  <p style={styles.desc}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
