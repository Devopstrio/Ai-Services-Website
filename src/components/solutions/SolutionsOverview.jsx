import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SolutionsChallenges from "./SolutionsChallenges";
import SolutionsArchitecture from "./SolutionsArchitecture";
import SolutionsOutcomes from "./SolutionsOutcomes";
import SolutionsInsights from "./SolutionsInsights";
import RepresentativeCTA from "../ui/RepresentativeCTA";

import digitalGlobeImg from "../../assets/enterprise-references/overview/card-core-solution.webp";
import teamCoworkersImg from "../../assets/enterprise-references/overview/card-automation.webp";
import dataAnalyticsImg from "../../assets/enterprise-references/overview/card-data-knowledge.webp";
import datacenterFirewallImg from "../../assets/enterprise-references/overview/card-infrastructure.webp";
import cyberShieldImg from "../../assets/enterprise-references/overview/card-security.webp";
import analystTabletImg from "../../assets/enterprise-references/overview/card-business-operations.webp";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

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

const styles = {
  heroSection: {
    position: "relative",
    width: "100%",
    minHeight: "720px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
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
    marginTop: "0",
    zIndex: 0,
    pointerEvents: "none",
    maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)",
    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)",
  },
  heroContainer: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "90px 24px",
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
  heroTextCol: {
    maxWidth: "980px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    color: "#E11D48",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  heading: {
    fontFamily: FONT,
    fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    margin: 0,
    color: "#FFFFFF",
  },
  primaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 30px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    gap: "8px",
    transition: "all 0.25s ease",
  },
  secondaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 30px",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
  featuresRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    marginTop: "44px",
    maxWidth: "720px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "28px",
  },
  featItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  featIconWrap: {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    background: "rgba(225,29,72,0.1)",
    border: "1px solid rgba(225,29,72,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#E11D48",
    marginBottom: "6px",
  },
  featTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#FFFFFF",
    margin: 0,
  },
  featDesc: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.55)",
    margin: 0,
  },

  solutionsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  solutionsHeader: {
    maxWidth: "600px",
  },
  solutionsSub: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "2rem",
    letterSpacing: "-0.02em",
    margin: "0 0 12px 0",
  },
  solutionsTitle: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "1rem",
    fontWeight: 400,
    margin: 0,
    lineHeight: 1.6,
  },
  solutionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "minmax(380px, auto)",
    alignItems: "start",
    gap: "24px",
    width: "100%",
  },
  featCard: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    background: "#111",
    border: "1px solid rgba(255,255,255,0.06)",
    gridColumn: "span 2",
    display: "flex",
    minHeight: "380px",
  },
  featImgWrap: {
    width: "45%",
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
  },
  featImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    inset: 0,
  },
  featImgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 100%)",
  },
  featContent: {
    width: "55%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 2,
    justifyContent: "center",
  },
  supCard: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    background: "#0a0a0a",
    border: "1px solid rgba(255,255,255,0.06)",
    gridColumn: "span 1",
    display: "flex",
    flexDirection: "column",
    minHeight: "380px",
  },
  supImgWrap: {
    width: "100%",
    height: "180px",
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
  },
  supImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    inset: 0,
  },
  supImgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 100%)",
  },
  supContent: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  catLabel: {
    color: "#E11D48",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: "1.3rem",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    margin: "0 0 10px 0",
    lineHeight: 1.3,
  },
  cardDesc: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "13.5px",
    lineHeight: 1.6,
    margin: 0,
  },
  expandedBox: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  expandedLabel: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#E11D48",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "4px",
  },
  expandedText: {
    fontSize: "13px",
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.8)",
    margin: 0,
  },
  list: {
    margin: 0,
    paddingLeft: "16px",
    fontSize: "13px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.8)",
  },
  navigateBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#E11D48",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "8px",
  },
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function ExpandableSolutionCard({ isFeatured, label, title, desc, expandedData, route, delay, ImgComponent }) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate(route);
  };

  const cardStyle = isFeatured ? styles.featCard : styles.supCard;
  const imgWrapStyle = isFeatured ? styles.featImgWrap : styles.supImgWrap;
  const contentStyle = isFeatured ? styles.featContent : styles.supContent;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay, duration: 0.6, layout: { duration: 0.4, ease: "easeInOut" } }}
      style={{
        ...cardStyle,
        borderColor: isHovered ? "rgba(225,29,72,0.4)" : "rgba(255,255,255,0.06)",
        y: isHovered && !isExpanded ? -4 : 0
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleExpand}
    >
      <motion.div layout style={imgWrapStyle}>
        <motion.div 
          style={{ width: "100%", height: "100%" }} 
          animate={{ scale: isHovered && !isExpanded ? 1.05 : 1 }} 
          transition={{ duration: 0.6 }}
        >
          {ImgComponent}
        </motion.div>
        <div style={isFeatured ? styles.featImgOverlay : styles.supImgOverlay} />
      </motion.div>

      <motion.div layout style={contentStyle}>
        <motion.div layout style={styles.catLabel}>{label}</motion.div>
        <motion.h3 layout style={styles.cardTitle}>{title}</motion.h3>
        <motion.p layout style={styles.cardDesc}>{desc}</motion.p>
        
        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div style={styles.expandedBox}>
                <div>
                  <div style={styles.expandedLabel}>What it solves</div>
                  <p style={styles.expandedText}>{expandedData.solves}</p>
                </div>
                <div>
                  <div style={styles.expandedLabel}>Key Capabilities</div>
                  <ul style={styles.list}>
                    {expandedData.capabilities.map((cap, idx) => (
                      <li key={idx}>{cap}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={styles.expandedLabel}>Business Value</div>
                  <p style={styles.expandedText}>{expandedData.value}</p>
                </div>
                
                <div style={styles.navigateBtn} onClick={handleNavigate}>
                  Explore Details <ArrowIcon />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div style={{ marginTop: "auto", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
            {isExpanded ? "Click to collapse" : "Click to expand details"}
          </div>
          <div style={{ 
            width: "28px", 
            height: "28px", 
            borderRadius: "50%", 
            background: isHovered ? "rgba(225,29,72,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isHovered ? "rgba(225,29,72,0.3)" : "rgba(255,255,255,0.1)"}`,
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: isHovered ? "#E11D48" : "rgba(255,255,255,0.7)",
            transition: "all 0.3s ease"
          }}>
            <ArrowIcon />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const SOLUTIONS_DATA = [
  {
    isFeatured: true,
    label: "Core Enterprise AI",
    title: "Enterprise AI Development",
    desc: "Build mission-critical custom intelligence with enterprise-grade foundation models, fine-tuned specifically on your private proprietary datasets.",
    route: "/solutions/custom-ai-solutions",
    delay: 0,
    expandedData: {
      solves: "Generic LLMs lacking domain precision, security compliance, and private data integration.",
      capabilities: ["Custom LLM Fine-Tuning", "Retrieval-Augmented Generation (RAG)", "Enterprise Security Guardrails", "Multi-Modal Architectures"],
      value: "Up to 60% reduction in manual analytical overhead with zero proprietary data leakage."
    },
    ImgComponent: <img src={digitalGlobeImg} style={styles.featImg} alt="Enterprise AI Development" />
  },
  {
    isFeatured: false,
    label: "Intelligent Automation",
    title: "Workflow Automation",
    desc: "Transform complex operational workflows with AI-driven autonomous cognitive agents.",
    route: "/solutions/workflow-automation",
    delay: 0.1,
    expandedData: {
      solves: "Manual bottlenecks and high-error repetitive tasks.",
      capabilities: ["Autonomous Agents", "Robotic Process Automation", "Cognitive Workflows"],
      value: "Scalable efficiency and reduced administrative overhead."
    },
    ImgComponent: <img src={teamCoworkersImg} style={styles.supImg} alt="Workflow Automation" />
  },
  {
    isFeatured: false,
    label: "Data & Knowledge",
    title: "Data & Analytics",
    desc: "Unify siloed unstructured data into real-time decision intelligence with neural RAG platforms.",
    route: "/solutions/knowledge-management",
    delay: 0.2,
    expandedData: {
      solves: "Fragmented data silos preventing real-time intelligence.",
      capabilities: ["Data Lakes", "Real-Time Pipelines", "Predictive Modeling", "Neural Search"],
      value: "Enable true decision intelligence across the organization."
    },
    ImgComponent: <img src={dataAnalyticsImg} style={styles.supImg} alt="Data & Analytics" />
  },
  {
    isFeatured: true,
    label: "Infrastructure",
    title: "Cloud & DevOps AI",
    desc: "Modernize legacy infrastructure with scalable, secure, and resilient cloud-native architectures and self-healing CI/CD pipelines.",
    route: "/solutions/devops-ai",
    delay: 0,
    expandedData: {
      solves: "Legacy IT complexity, slow deployment cycles, and production outages.",
      capabilities: ["Cloud Migration", "Platform Engineering", "AIOps Incident Triage", "IaC Generation"],
      value: "Accelerated innovation and reduced maintenance overhead."
    },
    ImgComponent: <img src={datacenterFirewallImg} style={styles.featImg} alt="Cloud & DevOps AI" />
  },
  {
    isFeatured: false,
    label: "Security",
    title: "Cybersecurity & Risk AI",
    desc: "Protect critical enterprise assets with machine-speed threat hunting, behavioral zero-trust analytics, and automated SOC triage.",
    route: "/solutions/cybersecurity-ai",
    delay: 0.1,
    expandedData: {
      solves: "Ransomware, lateral intrusions, and alert fatigue across SecOps teams.",
      capabilities: ["Threat Hunting", "Zero Trust Architecture", "SOC Analyst Copilot", "Air-Gapped Defense"],
      value: "Neutralize intrusions in milliseconds with 90% fewer false positives."
    },
    ImgComponent: <img src={cyberShieldImg} style={styles.supImg} alt="Cybersecurity AI" />
  },
  {
    isFeatured: false,
    label: "Business Operations",
    title: "Finance & Sales Intelligence",
    desc: "Empower executive leadership with sub-second invoice reconciliation, algorithmic revenue forecasting, and deal execution copilots.",
    route: "/solutions/finance-ai",
    delay: 0.2,
    expandedData: {
      solves: "Manual reconciliation backlogs and subjective revenue forecasting.",
      capabilities: ["Predictive Lead Scoring", "Automated AP/AR", "Fraud Prevention", "Deal Coaching"],
      value: "Close books in hours instead of weeks while boosting sales win rates by 35%."
    },
    ImgComponent: <img src={analystTabletImg} style={styles.supImg} alt="Finance & Sales AI" />
  }
];

export default function SolutionsOverview() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. HERO SECTION (Aligned with Industry reference design) */}
      <section style={styles.heroSection}>
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

        <div style={styles.heroContainer}>
          <div style={styles.divider} />
          <div style={styles.heroTextCol}>
            <motion.div 
              style={styles.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ENTERPRISE SOLUTIONS
            </motion.div>
            
            <motion.h1 
              style={styles.heading}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ fontWeight: 600, color: "#FFFFFF" }}>Solutions Built</span>{" "}
              <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.7)" }}>for What's Next</span>
            </motion.h1>

            <motion.div 
              style={{ display: "flex", gap: "16px", marginTop: "36px", flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button 
                style={styles.primaryCta}
                whileHover={{ scale: 1.03, backgroundColor: "#be123c" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  document.getElementById('solution-areas')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore All Solutions <ArrowIcon />
              </motion.button>
              <motion.button 
                style={styles.secondaryCta}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/contact")}
              >
                Talk to an Expert
              </motion.button>
            </motion.div>

            <motion.div 
              style={styles.featuresRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div style={styles.featItem}>
                <div style={styles.featIconWrap}>
                  <SettingsIcon />
                </div>
                <h4 style={styles.featTitle}>End-to-End</h4>
                <p style={styles.featDesc}>Strategy to Support</p>
              </div>
              <div style={styles.featItem}>
                <div style={styles.featIconWrap}>
                  <SettingsIcon />
                </div>
                <h4 style={styles.featTitle}>Enterprise Grade</h4>
                <p style={styles.featDesc}>Secure by Design</p>
              </div>
              <div style={styles.featItem}>
                <div style={styles.featIconWrap}>
                  <SettingsIcon />
                </div>
                <h4 style={styles.featTitle}>Outcome Focused</h4>
                <p style={styles.featDesc}>Built for Impact</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section id="solution-areas" style={{ backgroundColor: "#000000", padding: "100px 24px 120px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1280px", display: "flex", flexDirection: "column", gap: "50px" }}>
          <div style={styles.solutionsHeader}>
            <h2 style={styles.solutionsSub}>Our Enterprise Solutions</h2>
            <p style={styles.solutionsTitle}>Comprehensive solutions to accelerate your digital transformation journey.</p>
          </div>

          <div style={styles.solutionsGrid}>
            {SOLUTIONS_DATA.map((item, i) => (
              <ExpandableSolutionCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <SolutionsChallenges />
      <SolutionsArchitecture />
      <SolutionsOutcomes />
      <SolutionsInsights />
      <RepresentativeCTA
        title="Ready to Build Your Enterprise AI"
        highlightText="Solution Architecture?"
        description="Accelerate your digital transformation with bespoke AI models, autonomous workflow swarms, and enterprise-grade VPC deployment."
        primaryBtnText="SCHEDULE ARCHITECTURE REVIEW"
        primaryBtnHref="https://devopstrio.co.uk/contact#contact-form"
        secondaryBtnText="TALK TO AN AI EXPERT"
        secondaryBtnHref="/contact"
        theme="rose"
      />
    </>
  );
}
