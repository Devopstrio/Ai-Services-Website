import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsEcosystem from "./ProductsEcosystem";

import productHeroImg from "../../assets/fresh/augmented_reality_simulation.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "850px",
    background: "#000000",
    fontFamily: FONT,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    paddingTop: "140px",
    paddingBottom: "80px",
    textAlign: "center"
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
    maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)",
  },
  glowBlob: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "800px",
    height: "600px",
    background: "radial-gradient(circle, rgba(225,29,72,0.15) 0%, rgba(0,0,0,0) 70%)",
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px"
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    borderRadius: "20px",
    border: "1px solid rgba(225,29,72,0.3)",
    backgroundColor: "rgba(225,29,72,0.1)",
    color: "#E11D48",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "24px"
  },
  dot: {
    width: "6px",
    height: "6px",
    backgroundColor: "#E11D48",
    borderRadius: "50%",
    boxShadow: "0 0 10px #E11D48"
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    margin: "0 0 24px 0",
    color: "#FFFFFF",
    fontWeight: 700,
    maxWidth: "900px"
  },
  desc: {
    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.65)",
    fontWeight: 400,
    maxWidth: "700px",
    margin: "0 auto 40px auto"
  },
  ctaRow: {
    display: "flex",
    gap: "16px",
    justifyContent: "center"
  },
  primaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 32px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
  },
  secondaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 32px",
    backgroundColor: "rgba(255,255,255,0.03)",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },
  visualShowcase: {
    width: "100%",
    maxWidth: "1000px",
    height: "500px",
    position: "relative",
    marginTop: "60px",
    perspective: "1200px",
    display: "flex",
    justifyContent: "center"
  },
  glassPanelWrap: {
    position: "relative",
    width: "85%",
    height: "100%",
    transformStyle: "preserve-3d"
  },
  dashboardGlow: {
    position: "absolute",
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "10%",
    background: "#E11D48",
    filter: "blur(60px)",
    opacity: 0.15,
    zIndex: 1,
    transform: "translateZ(-50px)"
  },
  glassPanel: {
    position: "absolute",
    inset: 0,
    background: "rgba(10,10,10,0.8)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
    backgroundImage: `url(${productHeroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 2
  }
};

export default function ProductsOverview() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section style={styles.section}>
        <div style={styles.bgGrid} />
        <div style={styles.glowBlob} />

        <div style={styles.container}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={styles.label}>
              <div style={styles.dot} /> ENTERPRISE AI PRODUCTS
            </div>
          </motion.div>
          
          <motion.h1 
            style={styles.heading} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ready-to-Deploy <br />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Intelligence Platforms</span>
          </motion.h1>

          <motion.p 
            style={styles.desc} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Accelerate your transformation with our suite of enterprise-grade AI products. Designed for security, scale, and immediate business value.
          </motion.p>

          <motion.div 
            style={styles.ctaRow} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button 
              style={styles.primaryCta}
              whileHover={{ scale: 1.03, backgroundColor: "#be123c" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Products
            </motion.button>
            <motion.button 
              style={styles.secondaryCta}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/solutions/overview")}
            >
              View Custom Solutions
            </motion.button>
          </motion.div>

          <motion.div 
            style={styles.visualShowcase}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              style={styles.glassPanelWrap}
              animate={{ 
                rotateX: [15, 12, 15],
                rotateY: [-8, 0, -8],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div style={styles.dashboardGlow} />
              <div style={styles.glassPanel} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProductsGrid />
      <ProductsEcosystem />
    </>
  );
}
