import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import healthcareImg from "../../../assets/fresh/clinical_ai_diagnostics.jpg";
import bankingImg from "../../../assets/fresh/agent_finance_reconciliation.jpg";
import retailImg from "../../../assets/industries/retail_2.jpg";
import mfgImg from "../../../assets/fresh/automated_logistics_hub.jpg";
import energyImg from "../../../assets/industries/energy_4.jpg";
import autoImg from "../../../assets/fresh/automotive_autonomous_driving.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const SECTORS = [
  {
    badge: "HEALTHCARE & LIFE SCIENCES",
    title: "Clinical AI & Life Sciences",
    body: "From automated patient triage and EHR data pipelines to regulatory compliance engines that accelerate clinical discovery.",
    img: healthcareImg,
    route: "/industries/healthcare-life-sciences",
  },
  {
    badge: "BANKING & FINANCE",
    title: "Financial Systems & Risk",
    body: "Real-time algorithmic fraud detection, automated AML auditing, and intelligent quantitative wealth advisories.",
    img: bankingImg,
    route: "/industries/banking-financial-services",
  },
  {
    badge: "RETAIL & E-COMMERCE",
    title: "Intelligent Commerce & Demand",
    body: "Dynamic inventory forecasting, personalized shopping concierges, and visual search models that maximize customer lifetime value.",
    img: retailImg,
    route: "/industries/retail-ecommerce",
  },
  {
    badge: "MANUFACTURING & INDUSTRIAL",
    title: "Smart Factory & Vision AI",
    body: "Computer vision quality control, predictive equipment maintenance, and autonomous logistics dispatch systems.",
    img: mfgImg,
    route: "/industries/manufacturing",
  },
  {
    badge: "ENERGY & UTILITIES",
    title: "Grid Optimization & Telemetry",
    body: "Smart grid load prediction, asset lifecycle monitoring, and autonomous emissions tracking for national infrastructure.",
    img: energyImg,
    route: "/industries/energy-utilities",
  },
  {
    badge: "AUTOMOTIVE & MOBILITY",
    title: "Connected Vehicle & Fleets",
    body: "Autonomous fleet telemetry, connected cabin voice assistants, and AI-optimized component supply chains.",
    img: autoImg,
    route: "/industries/automotive",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 24px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.8vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    margin: 0,
    marginBottom: "56px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "28px",
  },
  card: {
    backgroundColor: "#0A0A0A",
    borderRadius: "24px",
    border: "1px solid rgba(39, 39, 42, 0.8)",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    textDecoration: "none",
    boxSizing: "border-box",
  },
  imageWrap: {
    position: "relative",
    overflow: "hidden",
    margin: "12px",
    borderRadius: "16px",
    height: "240px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "6px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(244, 63, 94, 0.25)",
    color: "#F43F5E",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
  },
  textWrap: {
    padding: "24px 26px 28px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontFamily: FONT,
    fontSize: "1.35rem",
    fontWeight: 700,
    color: "#FFFFFF",
    margin: "0 0 10px 0",
  },
  cardBody: {
    fontFamily: FONT,
    fontSize: "14.5px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.6)",
    margin: "0 0 20px 0",
    flex: 1,
  },
  cardLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#E11D48",
    fontSize: "14px",
    fontWeight: 700,
    marginTop: "auto",
  },
};

export default function IndustriesCards() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Powering Global Sectors with Proven AI Intelligence</h2>

        <div style={styles.grid}>
          {SECTORS.map((sec, idx) => (
            <motion.a
              key={idx}
              href={sec.route}
              style={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(225, 29, 72, 0.45)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
              }}
            >
              <div style={styles.imageWrap}>
                <img
                  src={sec.img}
                  alt={sec.title}
                  style={styles.img}
                  onError={(e) => { e.currentTarget.src = "/assets/services/webp/bg-ai.webp"; }}
                />
                <div style={styles.imgOverlay} />
                <span style={styles.badge}>{sec.badge}</span>
              </div>

              <div style={styles.textWrap}>
                <h3 style={styles.cardTitle}>{sec.title}</h3>
                <p style={styles.cardBody}>{sec.body}</p>
                <div style={styles.cardLink}>
                  Explore Industry Solutions <ArrowUpRight size={15} strokeWidth={2.5} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
