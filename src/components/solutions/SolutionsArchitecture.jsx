import { motion } from "framer-motion";
import { useState } from "react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
    padding: "140px 24px",
    backgroundColor: "#000000",
    fontFamily: FONT,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 700,
    margin: "0 0 80px 0",
    textAlign: "center",
    letterSpacing: "-0.02em"
  },
  diagramWrap: {
    position: "relative",
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column",
    gap: "0px", 
    alignItems: "center"
  },
  layer: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "40px",
    background: "rgba(10,10,10,0.8)",
    backdropFilter: "blur(20px)",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    boxSizing: "border-box",
    cursor: "crosshair",
    transition: "border-color 0.3s ease, background 0.3s ease"
  },
  layerHover: {
    borderColor: "rgba(225,29,72,0.4)",
    background: "rgba(20,10,12,0.9)",
  },
  layerTop: {
    background: "linear-gradient(180deg, rgba(225,29,72,0.15) 0%, rgba(10,10,10,0.8) 100%)",
    borderColor: "rgba(225,29,72,0.3)"
  },
  layerTitle: {
    color: "#FFFFFF",
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "12px",
    letterSpacing: "-0.01em"
  },
  layerDesc: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "1.1rem",
    maxWidth: "500px",
    margin: "0 auto"
  },
  connectorContainer: {
    height: "60px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 1
  },
  connectorLine: {
    width: "2px",
    height: "100%",
    background: "rgba(255,255,255,0.1)",
    position: "relative"
  },
  connectorPulse: {
    position: "absolute",
    top: 0,
    left: "-1px",
    width: "4px",
    height: "20px",
    background: "#E11D48",
    borderRadius: "2px",
    boxShadow: "0 0 10px #E11D48"
  },
  nodeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginTop: "32px",
    paddingTop: "32px",
    borderTop: "1px solid rgba(255,255,255,0.06)"
  },
  nodeBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "8px",
    padding: "16px",
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.8)",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  }
};

function ArchitectureLayer({ title, desc, nodes, isTop, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      style={{
        ...styles.layer, 
        ...(isTop ? styles.layerTop : {}),
        ...(isHovered && !isTop ? styles.layerHover : {})
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isTop && <div style={{ color: "#E11D48", fontWeight: 800, fontSize: "14px", marginBottom: "16px", letterSpacing: "0.15em" }}>ENTERPRISE OUTCOME</div>}
      <div style={styles.layerTitle}>{title}</div>
      <div style={styles.layerDesc}>{desc}</div>
      
      {nodes && (
        <div style={styles.nodeGrid}>
          {nodes.map(n => (
            <div key={n} style={{...styles.nodeBox, borderColor: isHovered ? "rgba(225,29,72,0.2)" : "rgba(255,255,255,0.05)"}}>
              {n}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Connector({ delay }) {
  return (
    <div style={styles.connectorContainer}>
      <div style={styles.connectorLine}>
        <motion.div 
          style={styles.connectorPulse}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay }}
        />
      </div>
    </div>
  );
}

export default function SolutionsArchitecture() {
  return (
    <section style={styles.section}>
      <motion.h2 
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Integrated <span style={{ color: "#E11D48" }}>Enterprise Architecture</span>
      </motion.h2>

      <div style={styles.diagramWrap}>
        
        <ArchitectureLayer 
          isTop={true}
          title="Enterprise Transformation"
          desc="Faster innovation, intelligent operations, and resilient growth powered by a unified technology stack."
          delay={0}
        />

        <Connector delay={0} />

        <ArchitectureLayer 
          title="Intelligent Applications & AI Agents"
          desc="The interaction layer where users and autonomous agents execute workflows."
          nodes={["Copilots", "Autonomous Agents", "Generative AI"]}
          delay={0.2}
        />

        <Connector delay={0.4} />

        <ArchitectureLayer 
          title="Unified Data & AI Models"
          desc="The intelligence layer where data is refined and models are trained and served."
          nodes={["Data Lakes", "MLOps Pipelines", "Predictive Analytics"]}
          delay={0.4}
        />
        
        <Connector delay={0.8} />

        <ArchitectureLayer 
          title="Secure Cloud & Platform Foundations"
          desc="The infrastructure layer providing scalable compute, security, and governance."
          nodes={["Multi-Cloud", "DevSecOps", "Zero-Trust Security"]}
          delay={0.6}
        />

      </div>
    </section>
  );
}
