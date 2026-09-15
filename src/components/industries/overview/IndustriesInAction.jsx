import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import inActionImg from "../../../assets/fresh/clinical_ai_diagnostics.jpg";

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
    background: "linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%), linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)",
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
  body: {
    fontFamily: FONT,
    color: "rgba(255,255,255,0.7)",
    fontSize: "15px",
    lineHeight: 1.75,
    margin: 0,
    marginBottom: "32px",
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "13px 26px",
    borderRadius: "999px",
    backgroundColor: "#FFFFFF",
    color: "#030303",
    fontFamily: FONT,
    fontSize: "13.5px",
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "all 0.25s ease",
  },
};

export default function IndustriesInAction() {
  return (
    <section style={styles.outerSection}>
      <div style={styles.container}>
        <div style={styles.boxWrapper}>
          <div style={styles.imageCol}>
            <motion.img
              src={inActionImg}
              alt="Industry AI in Action"
              style={styles.imgEl}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onError={(e) => { e.currentTarget.src = "/assets/services/webp/bg-ai.webp"; }}
            />
            <div style={styles.imgOverlay} />
          </div>

          <div style={styles.textCol}>
            <div style={styles.inner}>
              <motion.h2
                style={styles.heading}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Want to See Industry AI <span style={styles.accent}>in Action?</span>
              </motion.h2>

              <motion.p
                style={styles.body}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                At Devopstrio, we engineer specialized AI ecosystems across 13+ global sectors. Whether deploying real-time clinical telemetry for healthcare networks, autonomous fraud deterrence for tier-1 banks, or computer vision for smart manufacturing, our industrial AI delivers measurable ROI and regulatory compliance.
              </motion.p>

              <motion.a
                href="/services"
                style={styles.btn}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.04, backgroundColor: "#f4f4f5" }}
                whileTap={{ scale: 0.96 }}
              >
                Explore Industry Solutions
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .boxWrapper {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
