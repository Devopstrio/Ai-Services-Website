import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AgentsInAction from "./AgentsInAction";
import AgentsWork from "./AgentsWork";
import AgentsCards from "./AgentsCards";
import AgentsManaged from "./AgentsManaged";
import AgentsInsights from "./AgentsInsights";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const styles = {
  section: {
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
    marginTop: "-50px",
    zIndex: 0,
    pointerEvents: "none",
    maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)",
    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)",
  },
  container: {
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
  textCol: {
    maxWidth: "980px",
  },
  heading: {
    fontFamily: FONT,
    fontSize: "clamp(2rem, 4.2vw, 3rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  headingBold: {
    fontWeight: 700,
    color: "#FFFFFF",
  },
  headingLight: {
    fontWeight: 400,
    color: "rgba(255,255,255,0.7)",
  },
  paragraph: {
    marginTop: "30px",
    maxWidth: "860px",
    fontFamily: FONT,
    fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.55)",
    fontWeight: 400,
  },
  accent: {
    color: "#E11D48",
    fontWeight: 700,
  },
  capabilityGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  capabilityCard: {
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  },
  capabilityName: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  capabilityDescription: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
  },
};

const AGENTS_DATA = [
  {
    label: "Customer Support Agents",
    route: "/agents/customer-support",
    description: "Deploy autonomous customer service agents capable of resolving complex queries, processing refunds, and handling multi-turn conversations 24/7 across omnichannel platforms."
  },
  {
    label: "Workflow Automation Agents",
    route: "/agents/workflow-automation",
    description: "Intelligent agents that integrate with your ERP, CRM, and internal APIs to autonomously execute multi-step business workflows without human intervention."
  },
  {
    label: "Data Analysis Agents",
    route: "/agents/data-analysis",
    description: "Empower your teams with autonomous data analysts. These agents can query SQL databases, generate charts, and summarize business intelligence in real-time."
  },
  {
    label: "Multi-Agent Orchestration",
    route: "/agents/orchestration",
    description: "Coordinate swarms of specialized AI agents. Watch them collaborate, debate, and sequentially execute complex, large-scale enterprise projects autonomously."
  },
  {
    label: "Coding & DevOps Agents",
    route: "/agents/devops",
    description: "Accelerate software delivery. Our engineering agents can autonomously debug code, write unit tests, provision cloud infrastructure, and monitor deployments."
  },
  {
    label: "Knowledge Management Agents",
    route: "/agents/knowledge",
    description: "Give your enterprise an intelligent brain. Agents that securely index internal documents, wikis, and chats to instantly answer complex organizational questions."
  },
  {
    label: "Sales & SDR Agents",
    route: "/agents/sales",
    description: "Automate top-of-funnel outbound. AI SDR agents that research prospects, craft hyper-personalized outreach, and automatically schedule qualified meetings."
  },
  {
    label: "Custom Autonomous Systems",
    route: "/agents/custom",
    description: "Need something unique? We design, build, and deploy highly specialized autonomous agents tailored perfectly to your proprietary business logic and constraints."
  }
];

function RibbonGraphic() {
  const bars = Array.from({ length: 60 }, (_, i) => i);
  const cx = 520;
  const cy = 300;
  const baseAngle = -70;
  const angleStep = 2.6;

  return (
    <svg
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        opacity: 0.85,
        mixBlendMode: "screen",
      }}
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#BE123C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#881337" stopOpacity="0" />
        </linearGradient>
      </defs>

      {bars.map((i) => {
        const rad = (baseAngle + i * angleStep) * (Math.PI / 180);
        const len = 200 + Math.sin(i * 0.4) * 120 + i * 2;
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

export default function AgentsOverview() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <section style={styles.section}>
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

        <div style={styles.container}>
          <div style={styles.divider} />
          <div style={styles.textCol}>
            <motion.h1
              style={styles.heading}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={styles.headingBold}>Autonomous Systems,</span>{" "}
              <span style={styles.headingLight}>Built to Scale</span>
            </motion.h1>

            <motion.p
              style={styles.paragraph}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Move beyond basic automation. We design, build, and orchestrate intelligent AI agents capable of reasoning, executing complex workflows, and seamlessly integrating with your enterprise systems. Experience true operational autonomy.
            </motion.p>

            <div style={styles.capabilityGrid}>
              {AGENTS_DATA.map((capability, index) => (
                <motion.div
                  key={index}
                  style={styles.capabilityCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => handleCardClick(capability.route)}
                  whileHover={{
                    background: "rgba(225,29,72,0.08)",
                    borderColor: "rgba(225,29,72,0.2)",
                    y: -4,
                  }}
                >
                  <div style={styles.capabilityName}>{capability.label}</div>
                  <div style={styles.capabilityDescription}>
                    {capability.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <AgentsInAction />
      <AgentsWork />
      <AgentsCards />
      <AgentsManaged />
      <AgentsInsights />
    </>
  );
}
