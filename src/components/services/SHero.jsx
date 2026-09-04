import React from "react";
import { motion } from "framer-motion";
import AIInAction from "./AIinaction";
import AIwork from "./AIwork";
import Cards from "./Cards";
import Business from "./Business";
import ManagedService from "./ManagedService";

/**
 * ServicesHero.jsx — DevOpsTRIO
 * Services page hero: left divider, mixed-weight headline, paragraph,
 * abstract fanned-ribbon graphic bleeding in from the right, fading into
 * the black background. Black theme, #E11D48 accent, white text, inline
 * CSS only. Font: Geist
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "720px",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",    
      fontFamily: FONT,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    textAlign: "left",
    marginTop: "70px",
  },
  graphicWrap: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "68%",
    marginRight: "0%",
    marginTop: "-50px",
    zIndex: 0,
    pointerEvents: "none",
    zIndex: 0,
    maskImage:
      "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)",
    WebkitMaskImage:
      "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)",
  },

  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "90px 5%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "1px 1fr",
    gap: "60px",
  },
  divider: {
    backgroundColor: "rgba(255,255,255,0.14)",
    height: "100%",
    minHeight: "380px",
  },

  textCol: {
    maxWidth: "980px",
  },
  heading: {
    fontFamily: FONT,
    fontSize: "clamp(2rem, 4.2vw, 3rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  headingBold: {
    fontWeight: 700,
    color: "#FFFFFF",
  },
  headingLight: {
    fontWeight: 400,
    color: "rgba(255,255,255,0.7)",
  },
  paragraph: {
    marginTop: "30px",
    maxWidth: "860px",
    fontFamily: FONT,
    fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.55)",
    fontWeight: 400,
  },
  accent: {
    color: "#E11D48",
    fontWeight: 700,
  },
};

/* Procedurally generated fanned-ribbon graphic — many thin rotated bars
   sweeping across an arc, echoing the reference's folded-paper motif. */
function RibbonGraphic() {
  const bars = Array.from({ length: 60 }, (_, i) => i);
  const cx = 520;
  const cy = 300;
  const baseAngle = -70;
  const angleStep = 2.6;

  return (
    <svg
      viewBox="0 0 900 600"
      style={{ width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {bars.map((i) => {
        const angle = baseAngle + i * angleStep;
        const rad = (angle * Math.PI) / 180;
        const len = 260 + Math.sin(i * 0.35) * 40;
        const x2 = cx + Math.cos(rad) * len;
        const y2 = cy + Math.sin(rad) * len;
        return (
          <motion.line
            key={i}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke="url(#barGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.008, ease: "easeOut" }}
          />
        );
      })}
    </svg>
  );
}

export default function ServicesHero() {
  return (
    <>
    <section style={styles.section}>
      <motion.div
        style={styles.graphicWrap}
        initial={{ opacity: 0, rotate: -4 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          style={{ width: "100%", height: "100%" }}
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <RibbonGraphic />
        </motion.div>
      </motion.div>

      <div style={styles.container}>
        <div style={styles.divider} />

        <div style={styles.textCol}>
          <motion.h1
            style={styles.heading}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={styles.headingBold}>AI That Ships:</span>{" "}
            <span style={styles.headingLight}>Today and Tomorrow</span>
          </motion.h1>

          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            The future of healthcare is{" "}
            <span style={styles.accent}>AI-centric</span>. We get you there.
            Whether you're looking to modernize clinical infrastructure,
            automate compliance, or scale AI safely across your
            organization, we help you achieve measurable ROI through our
            proven methodology, tooling, and engineering. From
            AI-powered diagnostics support to enterprise-wide DevOps
            automation, we build systems that deliver real impact and
            scale with your business.
          </motion.p>
        </div>
      </div>
    </section>
<AIInAction />
<AIwork />
<Cards />
<ManagedService />
<Business />

</>
  );
}