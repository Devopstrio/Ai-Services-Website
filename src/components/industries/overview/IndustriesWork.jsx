import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Database, Sparkles, ArrowRight } from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const PILLARS = [
  {
    icon: <ShieldCheck size={26} color="#E11D48" />,
    title: "Regulated AI & Data Governance",
    body: "Pre-audited compliance architectures built specifically for HIPAA, SOC-2, GDPR, and PCI-DSS requirements. Deploy foundation models with built-in audit trails.",
  },
  {
    icon: <Cpu size={26} color="#E11D48" />,
    title: "Autonomous Industrial Operations",
    body: "Edge computer vision, predictive telemetry, and smart factory robotics that optimize output, eliminate unexpected downtime, and enforce extreme safety standards.",
  },
  {
    icon: <Database size={26} color="#E11D48" />,
    title: "Financial & Risk Intelligence",
    body: "Sub-second fraud detection, automated AML compliance, and quantitative risk modeling deployed in isolated, encrypted cloud VPC environments.",
  },
  {
    icon: <Sparkles size={26} color="#E11D48" />,
    title: "Industry Copilots & Agent Swarms",
    body: "Customized conversational assistants for clinical workflows, retail customer concierges, and engineering teams that eliminate manual administrative drag.",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 24px",
    backgroundColor: "#030303",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "64px",
  },
  tag: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#E11D48",
    textTransform: "uppercase",
    marginBottom: "14px",
    display: "block",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.8vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#09090c",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    padding: "36px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  iconBox: {
    width: "54px",
    height: "54px",
    borderRadius: "14px",
    backgroundColor: "rgba(225, 29, 72, 0.1)",
    border: "1px solid rgba(225, 29, 72, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
  },
  cardTitle: {
    fontFamily: FONT,
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#FFFFFF",
    margin: "0 0 14px 0",
  },
  cardBody: {
    fontFamily: FONT,
    fontSize: "14.5px",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.6)",
    margin: 0,
    flex: 1,
  },
};

export default function IndustriesWork() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>METHODOLOGY & EXPERTISE</span>
          <h2 style={styles.heading}>How We Put AI to Work Across Global Industries</h2>
        </div>

        <div style={styles.grid}>
          {PILLARS.map((p, idx) => (
            <motion.div
              key={idx}
              style={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(225, 29, 72, 0.4)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
              }}
            >
              <div>
                <div style={styles.iconBox}>{p.icon}</div>
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <p style={styles.cardBody}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
