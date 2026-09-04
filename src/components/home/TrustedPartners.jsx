import React from "react";
import { motion } from "framer-motion";

/**
 * TechnologyAlliances.jsx — DevOpsTRIO
 * "Through our Technology Alliances we Accelerate Digital Reinvention" —
 * 4x2 grid of white alliance cards (logo box + name + description) on a
 * black section background. Black theme, #E11D48 accent, Geist font,
 * inline CSS only. Logo images point to /images/*, matching your
 * uploaded assets.
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ALLIANCES = [
  {
    name: "SAP",
    desc: "Innovative SAP solutions for global healthcare operations",
    img: "/images/sap-1.jpg",
  },
  {
    name: "Oracle",
    desc: "Empowering health systems with cutting-edge Oracle infrastructure",
    img: "/images/oracle.png",
  },
  {
    name: "Salesforce",
    desc: "Innovative processes that elevate patient experiences",
    img: "/images/salesforce.png",
  },
  {
    name: "ServiceNow",
    desc: "Elevate digital excellence across clinical operations",
    img: "/images/servicenow.jpg",
  },
  {
    name: "Microsoft",
    desc: "Drive digital transformation on Microsoft cloud services",
    img: "/images/microsoft.png",
  },
  {
    name: "Icertis",
    desc: "Adopt contract lifecycle management for healthcare vendors",
    img: "/images/icertis.png",
  },
  {
    name: "Infor",
    desc: "Create new operational value with Infor expertise",
    img: "/images/infor.png",
  },
  {
    name: "BlueYonder",
    desc: "Make autonomous clinical supply chains a reality",
    img: "/images/blue-yonder.png",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 5% 100px",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
          fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
    marginTop: "-80px",
  },
  heading: {
    maxWidth: "1300px",
    margin: "0 auto 46px",
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.8rem, 3.2vw, 2rem)",
    fontWeight: 700,
    letterSpacing: "-0.015em",
    lineHeight: 1.25,
  },
  headingAccent: { color: "#E11D48" },

  grid: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "22px",
  },

  card: {
    backgroundColor: "#000000",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
    cursor: "pointer",
  },
  logoBox: {
    height: "220px",
    backgroundColor: "#100000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 26px",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  logoImg: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
  },
  textArea: {
    padding: "22px 22px 26px",
  },
  name: {
    fontFamily: FONT,
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#fff8f8",
    margin: 0,
    marginBottom: "10px",
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "#fffcfc",
    margin: 0,
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: (i % 4) * 0.07 + Math.floor(i / 4) * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function AllianceCard({ alliance, index }) {
  return (
    <motion.div
      style={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      custom={index}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 34px rgba(225,29,72,0.25)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div style={styles.logoBox}>
        <motion.img
          src={alliance.img}
          alt={alliance.name}
          style={styles.logoImg}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.06 }}
        />
      </div>
      <div style={styles.textArea}>
        <h3 style={styles.name}>{alliance.name}</h3>
        <p style={styles.desc}>{alliance.desc}</p>
      </div>
    </motion.div>
  );
}

export default function TechnologyAlliances() {
  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Through our <span style={styles.headingAccent}>Technology Alliances</span> we
        Accelerate Digital Reinvention
      </motion.h2>

      <div style={styles.grid}>
        {ALLIANCES.map((alliance, i) => (
          <AllianceCard alliance={alliance} index={i} key={alliance.name} />
        ))}
      </div>
    </section>
  );
}