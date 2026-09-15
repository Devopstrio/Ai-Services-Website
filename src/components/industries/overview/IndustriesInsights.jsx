import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import healthImg from "../../../assets/fresh/clinical_ai_diagnostics.jpg";
import financeImg from "../../../assets/fresh/product_finance_ledger.jpg";
import retailImg from "../../../assets/fresh/dashboard_supply_chain.jpg";
import autoImg from "../../../assets/fresh/manufacturing_predictive_maintenance.jpg";
import energyImg from "../../../assets/fresh/energy_smart_grid_monitoring.jpg";
import telecomImg from "../../../assets/fresh/telecom_5g_network_tower.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ITEMS = [
  {
    tag: "HEALTHCARE & LIFE SCIENCES",
    title: "FHIR-Native AI Architectures in Clinical Decision Support",
    desc: "How national healthcare networks securely unify petabyte-scale EHR records with real-time diagnostic intelligence and HIPAA-compliant pipelines.",
    image: healthImg,
  },
  {
    tag: "FINANCIAL SERVICES",
    title: "Autonomous Fraud Prevention & Real-Time AML at Scale",
    desc: "How tier-1 banks cut fraudulent transaction losses by 75% using distributed graph neural networks and sub-millisecond anomaly detection.",
    image: financeImg,
  },
  {
    tag: "RETAIL & E-COMMERCE",
    title: "Omnichannel AI & Real-Time Dynamic Merchandising",
    desc: "Driving 28% higher customer lifetime value with hyper-personalized recommendation engines and automated multi-warehouse inventory balancing.",
    image: retailImg,
  },
  {
    tag: "MANUFACTURING & AUTO",
    title: "Predictive Maintenance & Smart Factory Telemetry",
    desc: "Eliminating unplanned factory downtime across global assembly plants through real-time IoT computer vision and sensory AI telemetry.",
    image: autoImg,
  },
  {
    tag: "ENERGY & UTILITIES",
    title: "Smart Grid Optimization & Clean Energy Forecasting",
    desc: "Balancing national renewable generation and demand distribution with probabilistic machine learning and real-time weather models.",
    image: energyImg,
  },
  {
    tag: "TELECOM & MEDIA",
    title: "Next-Gen 5G Network Autonomy & Self-Healing Ops",
    desc: "Automating edge slicing, cell traffic redistribution, and proactive fault mitigation across 50,000+ base stations.",
    image: telecomImg,
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
    fontWeight: 700,
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

  scrollWrap: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    boxSizing: "border-box",
    position: "relative",
  },
  track: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    paddingBottom: "12px",
    paddingTop: "4px",
  },

  card: {
    position: "relative",
    flex: "0 0 290px",
    width: "290px",
    height: "400px",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    boxSizing: "border-box",
    backgroundColor: "#0A0A0A",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  },

  imgFace: {
    position: "absolute",
    inset: 0,
  },
  imgEl: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.85) 100%)",
  },
  imgTopContent: {
    position: "absolute",
    top: "24px",
    left: "22px",
    right: "22px",
    zIndex: 2,
  },
  imgTag: {
    fontSize: "10.5px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#E11D48",
    textTransform: "uppercase",
    marginBottom: "12px",
    fontFamily: FONT,
  },
  imgTitle: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "1.15rem",
    fontWeight: 700,
    lineHeight: 1.35,
    margin: 0,
    letterSpacing: "-0.01em",
  },

  hoverFace: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#FFFFFF",
    padding: "32px 26px 28px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 3,
  },
  hoverTag: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#E11D48",
    textTransform: "uppercase",
    fontFamily: FONT,
  },
  hoverTitle: {
    fontFamily: FONT,
    color: "#000000",
    fontSize: "1.15rem",
    fontWeight: 700,
    lineHeight: 1.35,
    margin: "10px 0",
    letterSpacing: "-0.01em",
  },
  hoverDesc: {
    fontFamily: FONT,
    color: "#4a4a4a",
    fontSize: "13px",
    lineHeight: 1.6,
    margin: 0,
    flex: 1,
  },
  hoverExpand: {
    fontFamily: FONT,
    color: "#E11D48",
    fontSize: "13.5px",
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "16px",
    cursor: "pointer",
  },

  navRow: {
    maxWidth: "1280px",
    margin: "24px auto 0",
    padding: "0 24px",
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
    boxSizing: "border-box",
  },
  navBtn: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};

function ArrowIcon({ color = "#FFFFFF", dir = "right" }) {
  const transform = dir === "left" ? "rotate(180deg)" : "none";
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function TrendCard({ item, index }) {
  return (
    <motion.div
      style={styles.card}
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileInView={{ opacity: [0, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={styles.imgFace}
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={styles.imgEl}
          onError={(e) => { e.currentTarget.src = "/assets/services/webp/bg-ai.webp"; }}
        />
        <div style={styles.imgOverlay} />
        <div style={styles.imgTopContent}>
          <div style={styles.imgTag}>{item.tag}</div>
          <h3 style={styles.imgTitle}>{item.title}</h3>
        </div>
      </motion.div>

      <motion.div
        style={styles.hoverFace}
        variants={{
          rest: { opacity: 0, pointerEvents: "none" },
          hover: { opacity: 1, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div style={styles.hoverTag}>{item.tag}</div>
        <h3 style={styles.hoverTitle}>{item.title}</h3>
        <p style={styles.hoverDesc}>{item.desc}</p>
        <span style={styles.hoverExpand}>
          Read Article
          <ArrowIcon color="#E11D48" />
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function IndustriesInsights() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.headerRow}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 style={styles.heading}>Explore Industry Insights</h2>
        <span style={styles.viewAll}>
          View All Insights
          <span style={styles.viewAllArrow}>
            <ArrowIcon />
          </span>
        </span>
      </motion.div>

      <div style={styles.scrollWrap}>
        <div style={styles.track} ref={trackRef}>
          {ITEMS.map((item, i) => (
            <TrendCard item={item} index={i} key={item.title + i} />
          ))}
        </div>
      </div>

      <div style={styles.navRow}>
        <div
          style={styles.navBtn}
          onClick={() => scrollBy(-1)}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E11D48"; e.currentTarget.style.backgroundColor = "rgba(225,29,72,0.15)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)"; e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; }}
        >
          <ArrowIcon dir="left" />
        </div>
        <div
          style={styles.navBtn}
          onClick={() => scrollBy(1)}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E11D48"; e.currentTarget.style.backgroundColor = "rgba(225,29,72,0.15)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)"; e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; }}
        >
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}
