import React from "react";
import { motion } from "framer-motion";

import managedImg1 from "../../assets/v1_covers/service_managed1.jpg";
import managedImg2 from "../../assets/v1_covers/service_managed2.jpg";

/**
 * ReinventManagedServices.jsx — DevOpsTRIO
 * "Reinvent with Managed Services" — asymmetric bento grid of dark cards
 * (text, stat, image). Hovering a text card swaps the heading for its
 * fuller description (text-change-on-hover), not just a static reveal.
 * Black theme, #E11D48 accent, white text, inline CSS only. Font: Geist
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 24px 110px",
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
    borderRadius: "8px",
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
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#050505",
    transform: "translateZ(0)",
    WebkitBackfaceVisibility: "hidden",
    isolation: "isolate"
  },
  imgEl: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.4) 100%)",
  },
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        <span style={styles.dash} />
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
        <motion.span
          style={styles.arrowBox}
          variants={{ rest: { x: 0 }, hover: { x: 3 } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowIcon />
        </motion.span>
      </div>
    </motion.div>
  );
}

function ParagraphCard({ label, body, bg = "#121212", span }) {
  return (
    <motion.div
      style={{ ...styles.cardBase, backgroundColor: bg, gridColumn: span }}
      whileHover={{ backgroundColor: "#171012" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <span style={styles.dash} />
        <div style={styles.label}>{label}</div>
        <p
          style={{
            fontFamily: FONT,
            fontSize: "15px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          {body}
        </p>
      </div>
      <div style={styles.learnMore}>
        Learn more
        <span style={styles.arrowBox}>
          <ArrowIcon />
        </span>
      </div>
    </motion.div>
  );
}

function StatCard({ value, desc, span }) {
  return (
    <motion.div
      style={{ ...styles.cardBase, backgroundColor: "#121212", gridColumn: span }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div>
        <span style={styles.dash} />
        <div style={styles.statNumber}>{value}</div>
        <p style={styles.statDesc}>{desc}</p>
      </div>
    </motion.div>
  );
}

function ImageCard({ img, span }) {
  return (
    <motion.div
      style={{ ...styles.imgCard, gridColumn: span }}
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={img}
        alt="Managed Service Visual"
        style={styles.imgEl}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <div style={styles.imgOverlay} />
    </motion.div>
  );
}

export default function ReinventManagedServices() {
  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Reinvent with managed services
      </motion.h2>

      <div style={styles.grid}>
        <TextCard
          span="span 2"
          label="Managed Clinical Data, AI & Automation"
          heading="Do you have the insights to make real-time care decisions?"
          description="Unify clinical data streams into a single AI-ready pipeline that surfaces the right insight the moment it matters — not after the fact."
          bg="#0b0b0b"
        />
        <StatCard
          span="span 1"
          value="3x"
          desc="faster incident response reported by AI-managed healthcare infrastructure"
        />

        <TextCard
          span="span 1"
          label="Global Delivery Centers"
          heading="Access healthcare engineering talent, wherever it lives"
          description="Tap into our distributed delivery centers for round-the-clock coverage without sacrificing clinical domain expertise."
          bg="#141414"
        />
        <ParagraphCard
          span="span 1"
          label="Application Managed Services"
          body="Emerging AI has raised clinical application complexity, and downtime is costlier than ever. We integrate cloud and generative AI into new and legacy systems to simplify delivery and get to value faster."
          bg="#0d0d0d"
        />
        <ImageCard
          span="span 1"
          img={managedImg1}
        />

        <ImageCard
          span="span 1"
          img={managedImg2}
        />
        <TextCard
          span="span 1"
          label="Compliance Managed Services"
          heading="Is your infrastructure staying audit-ready?"
          description="Continuous HIPAA and SOC 2 monitoring built into every layer, so audit prep stops being a quarterly fire drill."
          bg="#111111"
        />
        <ParagraphCard
          span="span 1"
          label="Infrastructure Managed Services"
          body="Managing today's clinical IT landscape with yesterday's tooling drags on your reinvention timeline. Reach your goals, cut spend, and see value faster with modern, AI-managed infrastructure."
          bg="#090909"
        />
      </div>
    </section>
  );
}
