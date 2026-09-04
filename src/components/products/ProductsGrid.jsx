import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import buildingTrustImg from "../../assets/fresh/agent_procurement_negotiation.jpg";
import datacenterFirewallImg from "../../assets/fresh/agent_swarm_orchestration.jpg";
import businessTeamImg from "../../assets/fresh/agent_swe_coding.jpg";
import analystTabletImg from "../../assets/fresh/ai-powered-device-concept.jpg";
import collaborationBundleImg from "../../assets/fresh/an9vuooimrqpn90whkub.webp";
import innovationArImg from "../../assets/overview/innovation-ar.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const PRODUCTS = [
  {
    category: "Business Platform",
    name: "eSigniva",
    desc: "Enterprise-grade digital signature and document workflow automation powered by intelligent contract analysis.",
    route: "/products/business-platforms/safesign-ai",
    delay: 0,
    expanded: {
      useCases: ["Automated Contract Review", "Secure Digital Signing", "Compliance Tracking"],
      tech: "Zero-Trust Security, NLP Contract Engine",
      value: "Reduce contract turnaround time by up to 70% while ensuring complete regulatory compliance."
    },
    bgCode: "linear-gradient(to bottom, rgba(17,17,17,0.85) 0%, rgba(26,5,8,0.95) 100%)",
    bgImage: `url(${buildingTrustImg})`,
    iconColor: "#E11D48"
  },
  {
    category: "Productivity",
    name: "DevOps Copilot",
    desc: "An intelligent autonomous agent that assists platform engineers with CI/CD debugging, infrastructure provisioning, and incident resolution.",
    route: "/products/business-platforms/devops-copilot",
    delay: 0.1,
    expanded: {
      useCases: ["Pipeline Auto-Healing", "IaC Generation", "Incident Root Cause Analysis"],
      tech: "Custom RAG, Multi-Agent Architecture",
      value: "Drastically reduce MTTR and automate repetitive platform engineering tasks."
    },
    bgCode: "linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(17,17,17,0.98) 100%)",
    bgImage: `url(${datacenterFirewallImg})`,
    iconColor: "#ffffff"
  },
  {
    category: "Business Platform",
    name: "Humanex AI",
    desc: "Next-generation HR and talent management platform leveraging predictive AI for employee retention and skill mapping.",
    route: "/products/business-platforms/humanex-ai",
    delay: 0.2,
    expanded: {
      useCases: ["Predictive Flight Risk", "Intelligent Skill Mapping", "Automated Onboarding"],
      tech: "Predictive Analytics, Graph Databases",
      value: "Increase employee retention and optimize workforce skill distribution."
    },
    bgCode: "linear-gradient(to bottom, rgba(5,5,5,0.85) 0%, rgba(21,21,21,0.98) 100%)",
    bgImage: `url(${businessTeamImg})`,
    iconColor: "rgba(225,29,72,0.8)"
  },
  {
    category: "Business AI",
    name: "Sales AI",
    desc: "Supercharge your revenue teams with predictive lead scoring, automated outreach, and conversational intelligence.",
    route: "/products/business-ai/sales-ai",
    delay: 0,
    expanded: {
      useCases: ["Predictive Lead Scoring", "Call Sentiment Analysis", "Automated Follow-ups"],
      tech: "Voice AI, CRM Integration Pipeline",
      value: "Accelerate sales cycles and increase conversion rates with data-driven outreach."
    },
    bgCode: "linear-gradient(to bottom, rgba(17,17,17,0.85) 0%, rgba(5,5,5,0.98) 100%)",
    bgImage: `url(${analystTabletImg})`,
    iconColor: "rgba(255,255,255,0.7)"
  },
  {
    category: "Productivity",
    name: "Knowledge AI",
    desc: "Unify your enterprise knowledge silos into a single, highly secure, conversational search interface.",
    route: "/products/productivity-ai/knowledge-ai",
    delay: 0.1,
    expanded: {
      useCases: ["Enterprise Semantic Search", "Internal IT/HR Helpdesk", "Document Q&A"],
      tech: "Vector Databases, Enterprise SSO Integration",
      value: "Eliminate information retrieval bottlenecks and boost employee productivity."
    },
    bgCode: "linear-gradient(to bottom, rgba(26,5,8,0.85) 0%, rgba(5,5,5,0.98) 100%)",
    bgImage: `url(${collaborationBundleImg})`,
    iconColor: "#E11D48"
  },
  {
    category: "Business AI",
    name: "Support AI",
    desc: "Deploy autonomous customer support agents that resolve complex tickets instantly while seamlessly routing escalations.",
    route: "/products/business-ai/support-ai",
    delay: 0.2,
    expanded: {
      useCases: ["Tier 1 Ticket Resolution", "Multi-lingual Support", "Sentiment-based Routing"],
      tech: "Conversational AI, Ticket System Connectors",
      value: "Deflect up to 60% of support tickets while increasing customer satisfaction scores."
    },
    bgCode: "linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(17,17,17,0.98) 100%)",
    bgImage: `url(${innovationArImg})`,
    iconColor: "rgba(255,255,255,0.9)"
  }
];

const styles = {
  section: {
    padding: "100px 5%",
    backgroundColor: "#000000",
    fontFamily: FONT
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "80px",
  },
  title: {
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: 0
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "32px"
  },
  flipContainer: {
    perspective: "1200px",
    height: "360px",
    width: "100%",
    cursor: "pointer"
  },
  innerMotion: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d"
  },
  cardFace: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: "16px",
    padding: "40px 32px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "border-color 0.3s ease, transform 0.3s ease",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Removed backgroundBlendMode: "overlay" as it washed out the dark gradient and destroyed readability on bright images
  },
  catLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.6)",
    marginBottom: "16px",
    textTransform: "uppercase",
    position: "relative",
    zIndex: 2
  },
  productName: {
    color: "#FFFFFF",
    fontSize: "1.6rem",
    fontWeight: 700,
    margin: "0 0 16px 0",
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
    position: "relative",
    zIndex: 2
  },
  desc: {
    color: "rgba(255,255,255,0.75)",
    fontSize: "15px",
    lineHeight: 1.6,
    margin: "0 0 32px 0",
    position: "relative",
    zIndex: 2
  },
  exploreLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#E11D48",
    fontSize: "14px",
    fontWeight: 700,
    marginTop: "auto",
    position: "relative",
    zIndex: 2
  },
  iconWrap: {
    position: "absolute",
    top: "32px",
    right: "32px",
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  },
  // Back Face Styles
  expandedBox: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    height: "100%"
  },
  expandedLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    marginBottom: "4px"
  },
  expandedText: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.5,
    margin: 0
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.5
  }
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5"/>
      <rect x="14" y="3" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5"/>
      <rect x="14" y="14" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="2" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

function FlipProductCard({ item }) {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate(item.route);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: item.delay, duration: 0.6 }}
      style={styles.flipContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)} 
    >
      <motion.div
        style={styles.innerMotion}
        initial={false}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered && !isFlipped ? 1.02 : 1,
          y: isHovered && !isFlipped ? -4 : 0
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT FACE */}
        <div style={{
          ...styles.cardFace,
          backgroundImage: `${item.bgCode}, ${item.bgImage}`,
          borderColor: isHovered ? "rgba(225,29,72,0.4)" : "rgba(255,255,255,0.06)",
        }}>
          <div style={styles.iconWrap}>
            <ProductIcon color={item.iconColor} />
          </div>
          <div style={styles.catLabel}>{item.category}</div>
          <h3 style={styles.productName}>{item.name}</h3>
          <p style={styles.desc}>{item.desc}</p>
          <motion.div 
            style={styles.exploreLink}
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Click to explore <ArrowIcon />
          </motion.div>
        </div>
        
        {/* BACK FACE */}
        <div style={{
          ...styles.cardFace,
          transform: "rotateY(180deg)",
          background: "linear-gradient(135deg, #111 0%, #161616 100%)",
          borderColor: isHovered ? "rgba(225,29,72,0.4)" : "rgba(255,255,255,0.06)",
        }}>
          <div style={styles.expandedBox}>
            <div>
              <div style={styles.expandedLabel}>Key Use Cases</div>
              <ul style={styles.list}>
                {item.expanded.useCases.map((uc, idx) => (
                  <li key={idx}>{uc}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={styles.expandedLabel}>Core Technology</div>
              <p style={styles.expandedText}>{item.expanded.tech}</p>
            </div>
            <div>
              <div style={styles.expandedLabel}>Business Value</div>
              <p style={styles.expandedText}>{item.expanded.value}</p>
            </div>
            
            <motion.div 
              style={{...styles.exploreLink, marginTop: "auto", cursor: "pointer"}} 
              onClick={handleNavigate}
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              View Full Details <ArrowIcon />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsGrid() {
  return (
    <section id="product-grid" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <motion.h2 
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Product <span style={{ color: "#E11D48" }}>Portfolio</span>
          </motion.h2>
        </div>

        <div style={styles.grid}>
          {PRODUCTS.map((item, i) => (
            <FlipProductCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
