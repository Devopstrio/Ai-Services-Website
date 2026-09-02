import { motion } from "framer-motion";
import { useState } from "react";
import { Layers, Cpu, Database, ShieldCheck, Sparkles } from "lucide-react";

import eco1 from "../../assets/fresh/agent_database_tuning.jpg";
import eco2 from "../../assets/fresh/agent_finance_reconciliation.jpg";
import eco3 from "../../assets/fresh/agent_legal_compliance.jpg";

const FONT = '"Geist", sans-serif';

const styles = {
  section: {
    padding: "130px 5%",
    backgroundColor: "#050505",
    fontFamily: FONT,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  },
  header: {
    textAlign: "center",
    marginBottom: "70px"
  },
  label: {
    color: "#E11D48",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "16px"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.02em"
  },
  diagramWrap: {
    position: "relative",
    width: "100%",
    maxWidth: "1050px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0"
  },
  platformLayer: {
    width: "100%",
    borderRadius: "18px",
    padding: "36px 40px",
    position: "relative",
    zIndex: 2,
    textAlign: "left",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all 0.35s ease",
    cursor: "pointer",
  },
  layerBg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.15,
    transition: "opacity 0.4s ease, transform 0.6s ease"
  },
  layerOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(15,15,15,0.85) 60%, rgba(20,5,8,0.92) 100%)",
  },
  layerContent: {
    position: "relative",
    zIndex: 2
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    flexWrap: "wrap",
    gap: "12px"
  },
  platformTitle: {
    color: "#fff",
    fontSize: "1.4rem",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  iconBadge: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "rgba(225,29,72,0.15)",
    border: "1px solid rgba(225,29,72,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#E11D48"
  },
  platformDesc: {
    color: "rgba(255,255,255,0.65)",
    fontSize: "14.5px",
    lineHeight: 1.6,
    maxWidth: "700px",
    margin: "0 0 24px 0"
  },
  productRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  },
  productBox: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "10px 20px",
    color: "#FFFFFF",
    fontSize: "13px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backdropFilter: "blur(8px)",
    transition: "all 0.25s ease"
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  },
  connector: {
    height: "45px",
    width: "2px",
    background: "rgba(255,255,255,0.1)",
    position: "relative",
    zIndex: 1
  },
  pulse: {
    position: "absolute",
    top: 0,
    left: "-1px",
    width: "4px",
    height: "16px",
    background: "#E11D48",
    borderRadius: "2px",
    boxShadow: "0 0 10px #E11D48"
  }
};

function Layer({ title, desc, products, delay, image, icon: Icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      style={{
        ...styles.platformLayer,
        borderColor: isHovered ? "rgba(225,29,72,0.5)" : "rgba(255,255,255,0.08)",
        boxShadow: isHovered ? "0 14px 40px rgba(225,29,72,0.18)" : "none",
        transform: isHovered ? "translateY(-4px)" : "none"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        style={{
          ...styles.layerBg,
          opacity: isHovered ? 0.28 : 0.15,
          transform: isHovered ? "scale(1.05)" : "scale(1)"
        }} 
      />
      <div style={styles.layerOverlay} />

      <div style={styles.layerContent}>
        <div style={styles.topRow}>
          <div style={styles.platformTitle}>
            <div style={styles.iconBadge}>
              <Icon size={18} />
            </div>
            {title}
          </div>
          <span style={{ fontSize: "11px", color: "#E11D48", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            CONNECTED LAYER
          </span>
        </div>

        <div style={styles.platformDesc}>{desc}</div>
        
        <div style={styles.productRow}>
          {products.map(p => (
            <div 
              key={p} 
              style={{
                ...styles.productBox, 
                borderColor: isHovered ? "rgba(225,29,72,0.3)" : "rgba(255,255,255,0.08)",
                backgroundColor: isHovered ? "rgba(225,29,72,0.1)" : "rgba(255,255,255,0.04)"
              }}
            >
              <div style={{...styles.dot, backgroundColor: isHovered ? "#E11D48" : "rgba(255,255,255,0.4)"}} />
              {p}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Connector({ delay }) {
  return (
    <div style={styles.connector}>
      <motion.div 
        style={styles.pulse}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: delay }}
      />
    </div>
  );
}

export default function ProductsEcosystem() {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <div style={styles.label}>Platform Architecture</div>
        <motion.h2 
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Unified <span style={{ color: "#E11D48" }}>Ecosystem</span>
        </motion.h2>
      </div>

      <div style={styles.diagramWrap}>
        
        <Layer 
          title="Business AI Applications"
          desc="Domain-specific AI applications that integrate directly into your frontline enterprise workflows."
          products={["Sales AI", "Marketing AI", "Support AI", "Finance AI"]}
          image={eco1}
          icon={Sparkles}
          delay={0}
        />

        <Connector delay={0} />

        <Layer 
          title="Productivity & Task Orchestration"
          desc="Intelligent orchestration layer handling RAG vector search, multi-agent debates, and autonomous task execution."
          products={["Knowledge AI", "Workflow AI", "DevOps Copilot", "Document AI"]}
          image={eco2}
          icon={Cpu}
          delay={0.2}
        />

        <Connector delay={0.4} />

        <Layer 
          title="Secure Core Data & AI Foundation"
          desc="The hardened infrastructure layer hosting private LLMs, vector embeddings, and zero-trust IAM governance."
          products={["AI Studio", "SafeSign Engine", "Humanex Models", "Zero-Trust Security"]}
          image={eco3}
          icon={Database}
          delay={0.4}
        />

      </div>
    </section>
  );
}
