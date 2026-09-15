import React from "react";
import { motion } from "framer-motion";
import datacenterFirewallImg from "../../assets/fresh/1200x627_blog-buildingtrust.webp";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 5% 110px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  heading: {
    maxWidth: "1280px",
    margin: "0 auto 40px",
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.6vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },

  grid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "260px",
    gap: "16px",
  },

  cardBase: {
    position: "relative",
    borderRadius: "4px",
    padding: "32px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    cursor: "pointer",
  },

  dash: {
    width: "34px",
    height: "3px",
    backgroundColor: "#E11D48",
    marginBottom: "22px",
  },
  label: {
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)",
    marginBottom: "18px",
  },

  textStackWrap: {
    position: "relative",
    minHeight: "84px",
  },
  textLine: {
    position: "absolute",
    inset: 0,
    fontFamily: FONT,
    fontSize: "clamp(1.2rem, 1.9vw, 1.6rem)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.3,
    margin: 0,
  },
  descLine: {
    position: "absolute",
    inset: 0,
    fontFamily: FONT,
    fontSize: "14.5px",
    fontWeight: 400,
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.7,
  },

  learnMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 700,
    color: "#FFFFFF",
  },
  arrowBox: {
    width: "22px",
    height: "22px",
    backgroundColor: "#E11D48",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px",
  },

  statNumber: {
    fontFamily: FONT,
    fontSize: "clamp(2.6rem, 4vw, 3.4rem)",
    fontWeight: 800,
    color: "#FFFFFF",
    lineHeight: 1,
    marginBottom: "18px",
  },
  statDesc: {
    fontFamily: FONT,
    fontSize: "14.5px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.6)",
    maxWidth: "220px",
  },

  imgCard: {
    position: "relative",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#050505",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.4) 100%)",
  },
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TextCard({ label, heading, description, bg = "#121212", span }) {
  return (
    <motion.div
      style={{ ...styles.cardBase, backgroundColor: bg, gridColumn: span }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileInView={{ opacity: [0, 1], y: [24, 0] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <div style={styles.dash} />
        <div style={styles.label}>{label}</div>
        <div style={styles.textStackWrap}>
          <motion.h3
            style={styles.textLine}
            variants={{ rest: { opacity: 1, y: 0 }, hover: { opacity: 0, y: -10 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {heading}
          </motion.h3>
          <motion.p
            style={styles.descLine}
            variants={{ rest: { opacity: 0, y: 10 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div style={styles.learnMore}>
        Learn more
        <motion.span variants={{ rest: { x: 0 }, hover: { x: 4 } }} style={styles.arrowBox}>
          <ArrowIcon />
        </motion.span>
      </div>
    </motion.div>
  );
}

function StatCard({ number, description, bg = "#121212", span }) {
  return (
    <motion.div
      style={{ ...styles.cardBase, backgroundColor: bg, gridColumn: span }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <div style={styles.dash} />
        <div style={styles.statNumber}>{number}</div>
        <div style={styles.statDesc}>{description}</div>
      </div>
    </motion.div>
  );
}

function PatternCard({ span }) {
  return (
    <motion.div
      style={{ ...styles.imgCard, gridColumn: span }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src={datacenterFirewallImg} alt="Datacenter Firewall" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.65 }} />
      <div style={styles.imgOverlay} />
    </motion.div>
  );
}

export default function AgentsManaged() {
  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Scale Autonomy with <span style={{ color: "#E11D48" }}>Managed Delivery</span>
      </motion.h2>

      <div style={styles.grid}>
        <TextCard
          span="span 2"
          label="Managed Agent Operations"
          heading="Unify enterprise tools into a single agentic ecosystem."
          description="Surface the right action the moment it matters. We manage your entire AI agent lifecycle from custom skill building to orchestration and continuous monitoring."
          bg="#0b0b0b"
        />
        <StatCard
          span="span 1"
          number="2x"
          description="faster deployment times reported by our enterprise clients using our managed orchestration platforms."
          bg="#E11D48"
        />
        <PatternCard span="span 1" />
        <TextCard
          span="span 1"
          label="Distributed Engineering"
          heading="Access world-class AI engineering talent, wherever it lives."
          description="Tap into our distributed delivery centers for round-the-clock coverage without sacrificing technical domain expertise or security standards."
          bg="#161616"
        />
        <TextCard
          span="span 1"
          label="Legacy Modernization"
          heading="Modernizing legacy platforms with intelligent automation."
          description="Managing today's IT landscape with yesterday's tooling drags on your reinvention timeline. Cut spend and see value faster with AI-managed infrastructure."
          bg="#0a0a0a"
        />
      </div>
    </section>
  );
}
