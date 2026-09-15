import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SolutionsChallenges from "./SolutionsChallenges";
import SolutionsArchitecture from "./SolutionsArchitecture";
import SolutionsOutcomes from "./SolutionsOutcomes";
import SolutionsInsights from "./SolutionsInsights";

import enterpriseDashboardImg from "../../assets/fresh/dashboard_ai_model_training.jpg";
import digitalGlobeImg from "../../assets/fresh/dashboard_cloud_telemetry.jpg";
import teamCoworkersImg from "../../assets/fresh/dashboard_customer_journey.jpg";
import dataAnalyticsImg from "../../assets/fresh/dashboard_cyber_soc.jpg";
import datacenterFirewallImg from "../../assets/fresh/dashboard_fintech_metrics.jpg";
import cyberShieldImg from "../../assets/fresh/dashboard_supply_chain.jpg";
import analystTabletImg from "../../assets/fresh/data-anlytics-ai-database-management-260nw-2489189257.webp";

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
    textAlign: "left",
    paddingTop: "120px",
    paddingBottom: "80px"
  },
  heroBgGlow: {
    position: "absolute",
    top: "-20%",
    right: "-10%",
    width: "80%",
    height: "120%",
    background: "radial-gradient(circle, rgba(225,29,72,0.12) 0%, rgba(0,0,0,0) 60%)",
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "120px",
  },
  heroSplit: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  heroLeft: {
    maxWidth: "640px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  label: {
    color: "#E11D48",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  heading: {
    fontFamily: FONT,
    fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    margin: 0,
    color: "#FFFFFF",
    fontWeight: 700,
  },
  headingAccent: {
    color: "#E11D48",
  },
  paragraph: {
    fontFamily: FONT,
    fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.65)",
    fontWeight: 400,
    margin: 0,
    maxWidth: "540px"
  },
  ctaRow: {
    display: "flex",
    gap: "16px"
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
    gap: "8px"
  },
  secondaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 32px",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },
  featuresRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    marginTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "32px",
  },
  featItem: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  featIconWrap: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    background: "rgba(225,29,72,0.1)",
    border: "1px solid rgba(225,29,72,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#E11D48",
    marginBottom: "8px"
  },
  featTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#FFFFFF",
    margin: 0
  },
  featDesc: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)",
    margin: 0
  },
  heroRight: {
    position: "relative",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "1200px"
  },
  glassPanelWrap: {
    position: "relative",
    width: "120%",
    height: "85%",
    transformStyle: "preserve-3d"
  },
  dashboardGlow: {
    position: "absolute",
    top: "20%",
    left: "10%",
    right: "10%",
    bottom: "20%",
    background: "#E11D48",
    filter: "blur(80px)",
    opacity: 0.25,
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
    backgroundImage: `url(${enterpriseDashboardImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 2
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
    fontWeight: 700,
    fontSize: "2rem",
    letterSpacing: "-0.02em",
    margin: "0 0 12px 0"
  },
  solutionsTitle: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "1rem",
    fontWeight: 400,
    margin: 0,
    lineHeight: 1.6
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
    overflow: "hidden"
  },
  featImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    inset: 0
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
    justifyContent: "center"
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
    overflow: "hidden"
  },
  supImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    inset: 0
  },
  supImgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 100%)",
  },
  supContent: {
    padding: "24px 32px 32px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  catLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#E11D48",
    marginBottom: "12px",
    textTransform: "uppercase"
  },
  cardTitle: {
    fontFamily: FONT,
    fontSize: "1.4rem",
    fontWeight: 600,
    color: "#FFFFFF",
    margin: "0 0 12px 0",
    letterSpacing: "-0.01em",
    lineHeight: 1.2
  },
  cardDesc: {
    fontFamily: FONT,
    fontSize: "14.5px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
    margin: "0 0 24px 0",
  },
  exploreLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: 600,
    marginTop: "auto"
  },
  expandedBox: {
    marginTop: "24px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
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
    color: "rgba(255,255,255,0.8)",
    lineHeight: 1.5,
    margin: 0
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    lineHeight: 1.5
  },
  navigateBtn: {
    marginTop: "24px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#E11D48",
    fontSize: "14px",
    fontWeight: 700,
  }
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
          ) : (
            <motion.div
              key="collapsed"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ ...styles.exploreLink, gap: isHovered ? "12px" : "8px" }}
            >
              {isFeatured ? "Explore Solution" : `Explore ${label}`} <ArrowIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

const SOLUTIONS_DATA = [
  {
    isFeatured: true,
    label: "Core Solution",
    title: "Enterprise Custom AI",
    desc: "Build, deploy, and scale enterprise-grade AI applications. From conversational copilots to predictive intelligence engines, we seamlessly integrate AI into your core operations.",
    route: "/solutions/custom-ai-solutions",
    delay: 0,
    expandedData: {
      solves: "Complex enterprise AI adoption and fragmented deployment challenges.",
      capabilities: ["Custom LLM Wrappers", "Enterprise Copilots", "Predictive Intelligence", "Secure AI Integration"],
      value: "Faster AI adoption with scalable, secure enterprise foundations."
    },
    ImgComponent: <img src={digitalGlobeImg} style={styles.featImg} alt="Enterprise AI" />
  },
  {
    isFeatured: false,
    label: "Automation",
    title: "Intelligent Automation",
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
      <section style={styles.section}>
        <div style={styles.heroBgGlow} />

        <div style={styles.container}>
          <div style={styles.heroSplit}>
            <div style={styles.heroLeft}>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Solutions Built <br />
                <span style={styles.headingAccent}>for What's Next</span>
              </motion.h1>

              <motion.p 
                style={styles.paragraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We help enterprises modernize, automate and innovate with secure, scalable and intelligent solutions that drive real business outcomes.
              </motion.p>

              <motion.div 
                style={styles.ctaRow}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
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
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
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
                transition={{ duration: 0.6, delay: 0.4 }}
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

            <div style={styles.heroRight}>
              <motion.div 
                style={styles.glassPanelWrap}
                initial={{ opacity: 0, x: 40, rotateY: -15, rotateX: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: -15, rotateX: 10 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <div style={styles.dashboardGlow} />
                <div style={styles.glassPanel} />
              </motion.div>
            </div>
          </div>

          {/* SOLUTIONS GRID */}
          <div id="solution-areas" style={styles.solutionsSection}>
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
        </div>
      </section>

      <SolutionsChallenges />
      <SolutionsArchitecture />
      <SolutionsOutcomes />
      <SolutionsInsights />
    </>
  );
}
