import React from "react";
import { motion } from "framer-motion";
import inActionImg from "../../assets/industries/industry_ai_in_action_reference.webp";

/**
 * AIInAction.jsx — Devopstrio
 * Structured identically to IndustriesInAction: 1.05fr / 1fr grid, exact image cover framing,
 * smooth gradient overlay blend, and responsive mobile stacking.
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  outerSection: {
    position: "relative",
    width: "100%",
    padding: "60px 0",
    backgroundColor: "#030303",
    fontFamily: FONT,
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    boxSizing: "border-box",
  },
  boxWrapper: {
    position: "relative",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    minHeight: "520px",
    backgroundColor: "#0A0A0A",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    textAlign: "left",
  },
  imageCol: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#000000",
    minHeight: "360px",
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
      "linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%), linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)",
  },
  textCol: {
    position: "relative",
    backgroundColor: "#160608",
    display: "flex",
    alignItems: "center",
    padding: "60px 48px",
    boxSizing: "border-box",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "480px",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: FONT,
    fontSize: "11.5px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#FDA4AF",
    marginBottom: "14px",
  },
  eyebrowDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#E11D48",
    boxShadow: "0 0 8px #E11D48",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.85rem, 3vw, 2.5rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    margin: 0,
    marginBottom: "20px",
  },
  accent: {
    color: "#E11D48",
  },
  paragraph: {
    fontFamily: FONT,
    color: "rgba(255,255,255,0.7)",
    fontSize: "15px",
    lineHeight: 1.75,
    margin: 0,
    marginBottom: "32px",
  },
  strong: {
    color: "#FFFFFF",
    fontWeight: 600,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "13px 26px",
    borderRadius: "10px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    width: "fit-content",
    textDecoration: "none",
    boxShadow: "0 4px 18px rgba(225, 29, 72, 0.35)",
    transition: "all 0.25s ease",
  },
};

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AIInAction() {
  return (
    <section style={styles.outerSection}>
      <div style={styles.container}>
        <div className="aiInActionWrapper" style={styles.boxWrapper}>
          {/* LEFT — identically framed visual matching Industry AI in Action */}
          <div style={styles.imageCol}>
            <motion.img
              src={inActionImg}
              alt="AI in action"
              style={styles.imgEl}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onError={(e) => {
                e.currentTarget.src = "/assets/services/webp/bg-ai.webp";
              }}
            />
            <div style={styles.imgOverlay} />
          </div>

          {/* RIGHT — dark red-tinted text panel */}
          <div style={styles.textCol}>
            <div style={styles.inner}>
              <div style={styles.eyebrow}>
                <span style={styles.eyebrowDot} />
                AI in Action
              </div>

              <motion.h2
                style={styles.heading}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Want to See AI <span style={styles.accent}>in Action?</span>
              </motion.h2>

              <motion.p
                style={styles.paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                No problem. At <span style={styles.strong}>DevOpsTRIO</span>, we
                have a proven AI track record. Whether you're exploring your
                first AI use case or reimagining clinical operations
                end-to-end, our AI services help you move faster, work
                smarter, and innovate responsibly. For example, we built a
                compliance-native AI pipeline for a national hospital network,
                processing petabyte-scale patient data securely at scale. This
                is AI that works — engineered by DevOpsTRIO.
              </motion.p>

              <motion.a
                href="https://devopstrio.co.uk/company/contact"
                style={styles.ctaBtn}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 26px rgba(225, 29, 72, 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                See AI in Action
                <ArrowIcon />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .aiInActionWrapper {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
