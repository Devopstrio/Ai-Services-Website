import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
// Import from services folder since these components are shared
import AIInAction from "../services/AIinaction";
import AIwork from "../services/AIwork";
import Cards from "../services/Cards";
import Business from "../services/Business";
import ManagedService from "../services/ManagedService";
import HowToReinvent from "./HowToReinvent"; // Same folder import
import AboutIndustry from "./AboutIndustry";
import WhoWeWorkWith from "./WhoWeWorkWith";
import HowYouBenefit from "./HowYouBenefit";
import WhatsHappening from "./WhatsHappening";

/**
 * IndustriesHero.jsx — Dynamic Industries Page
 * Same structure as ServicesHero but with dynamic content from industries data
 * Shows industry-specific content based on route params
 */

const FONT = '"Geist", sans-serif';

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
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "90px 5%",
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
  industryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  industryCard: {
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
  industryName: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#FFFFFF",
    marginBottom: "8px",
  },
  industryDescription: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
  },
};

/* Industry data - with 5-line descriptions */
const INDUSTRIES_DATA = {
  id: "industries",
  label: "Industries",
  heading: "Industries",
  image: {
    src: "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/e-learning-now-serious-mob.jpg",
    title: "AI Built for Every Industry",
    description: "From banking to healthcare — tailored AI solutions for your sector.",
    cta: "Explore Industries",
    route: "/industries/overview",
  },
  columns: [
    [
      {
        title: null,
        items: [
          { 
            label: "Banking & Financial Services", 
            route: "/industries/banking-financial-services", 
            description: "AI-powered risk management, fraud detection, and personalized banking. Automate compliance monitoring and KYC processes with intelligent systems. Enhance customer experience through AI-driven financial advisory and portfolio management. Optimize trading strategies and market analysis with predictive analytics. Reduce operational costs while improving accuracy and security across all banking operations."
          },
          { 
            label: "Healthcare & Life Sciences", 
            route: "/industries/healthcare-life-sciences", 
            description: "Clinical decision support, drug discovery, and patient care optimization. Accelerate medical research with AI-powered genomic analysis and pattern recognition. Enable personalized treatment plans through predictive patient outcome modeling. Streamline hospital operations with intelligent resource allocation and scheduling. Enhance diagnostic accuracy with computer vision and deep learning algorithms."
          },
          { 
            label: "Insurance", 
            route: "/industries/insurance", 
            description: "Automated claims processing, underwriting, and risk assessment. Detect fraudulent claims with advanced pattern recognition and anomaly detection. Optimize premium pricing through AI-driven risk modeling and actuarial analysis. Streamline customer onboarding with intelligent document processing and verification. Improve customer retention through personalized policy recommendations and proactive engagement."
          },
          { 
            label: "Retail & E-Commerce", 
            route: "/industries/retail-ecommerce", 
            description: "Personalized recommendations, inventory optimization, and customer insights. Predict consumer behavior with advanced analytics and purchase pattern recognition. Optimize supply chain and inventory management with demand forecasting AI. Enhance customer experience through AI-powered chatbots and personalized shopping. Maximize revenue with dynamic pricing strategies and promotional optimization."
          },
          { 
            label: "Manufacturing", 
            route: "/industries/manufacturing", 
            description: "Predictive maintenance, quality control, and supply chain optimization. Reduce downtime with AI-powered equipment monitoring and failure prediction. Enhance product quality through computer vision-based defect detection systems. Optimize production schedules and resource allocation with intelligent planning. Streamline supply chain logistics with predictive analytics and automated workflows. Improve safety and efficiency with AI-powered worker assistance and training."
          },
        ],
      },
    ],
    [
      {
        title: null,
        items: [
          { 
            label: "Logistics & Supply Chain", 
            route: "/industries/logistics-supply-chain", 
            description: "Route optimization, demand forecasting, and warehouse automation. Optimize delivery routes with real-time traffic data and predictive algorithms. Automate warehouse operations with AI-powered robotics and inventory management. Forecast demand accurately with machine learning and historical pattern analysis. Reduce shipping costs and delivery times through intelligent logistics planning. Enhance supply chain visibility with predictive analytics and real-time tracking."
          },
          { 
            label: "Government & Public Sector", 
            route: "/industries/government-public-sector", 
            description: "Citizen services, policy analysis, and public safety solutions. Modernize government services with AI-powered automation and digital transformation. Enhance public safety with predictive policing and emergency response optimization. Optimize resource allocation for public services through data-driven decision making. Improve policy outcomes with advanced analytics and simulation modeling. Streamline administrative processes with intelligent document processing and workflow automation."
          },
          { 
            label: "Education", 
            route: "/industries/education", 
            description: "Adaptive learning, student analytics, and administrative automation. Personalize learning pathways with AI-powered adaptive assessment and content delivery. Identify at-risk students early with predictive analytics and intervention systems. Automate administrative tasks with intelligent document processing and scheduling. Enhance curriculum development with learning outcome analysis and optimization. Improve student engagement through interactive and personalized learning experiences."
          },
          { 
            label: "Telecommunications", 
            route: "/industries/telecommunications", 
            description: "Network optimization, customer churn prediction, and 5G automation. Optimize network performance with AI-powered resource allocation and monitoring. Predict customer churn and improve retention with behavioral analytics. Automate network maintenance with predictive fault detection and self-healing. Enhance customer experience with intelligent support and personalized services. Accelerate 5G deployment and optimization with AI-driven planning and management."
          },
          { 
            label: "Energy & Utilities", 
            route: "/industries/energy-utilities", 
            description: "Grid optimization, predictive maintenance, and sustainability analytics. Balance energy supply and demand with AI-powered grid management systems. Predict equipment failures before they occur with intelligent maintenance systems. Optimize renewable energy integration with weather pattern prediction and forecasting. Improve sustainability with energy consumption optimization and carbon tracking. Enhance customer engagement with smart metering and personalized energy insights."
          },
        ],
      },
    ],
    [
      {
        title: null,
        items: [
          { 
            label: "Real Estate", 
            route: "/industries/real-estate", 
            description: "Property valuation, market analysis, and smart building management. Automate property valuation with AI-powered market analysis and comparable research. Predict market trends and investment opportunities with predictive analytics. Optimize building operations with smart sensors and energy management systems. Enhance tenant experience with AI-powered service requests and communication. Streamline property management with automated maintenance scheduling and compliance."
          },
          { 
            label: "Automotive", 
            route: "/industries/automotive", 
            description: "Autonomous driving, predictive maintenance, and supply chain optimization. Accelerate autonomous vehicle development with AI-powered simulation and testing. Predict component failures and optimize maintenance schedules with machine learning. Optimize manufacturing processes with intelligent quality control and automation. Enhance driver experience with personalized in-vehicle AI assistants and services. Streamline supply chain with predictive analytics and demand forecasting."
          },
          { 
            label: "Hospitality & Travel", 
            route: "/industries/hospitality-travel", 
            description: "Personalized experiences, dynamic pricing, and operational efficiency. Deliver personalized guest experiences with AI-powered recommendations and services. Optimize revenue with dynamic pricing based on demand prediction and analysis. Automate operations with intelligent check-in, housekeeping, and service scheduling. Enhance customer engagement with AI-powered chatbots and virtual assistants. Improve operational efficiency with predictive maintenance and resource optimization."
          },
          { 
            label: "Media & Entertainment", 
            route: "/industries/media-entertainment", 
            description: "Content personalization, audience analytics, and production optimization. Deliver personalized content recommendations with AI-powered algorithms. Predict content success and optimize production decisions with audience analytics. Automate content creation with AI-assisted editing, captioning, and production. Enhance audience engagement with interactive and personalized experiences. Optimize distribution and monetization with predictive audience behavior modeling."
          },
          { 
            label: "Professional Services", 
            route: "/industries/professional-services", 
            description: "Automated workflows, client insights, and AI-powered consulting. Automate routine tasks and workflows with intelligent document processing and RPA. Enhance client insights with AI-powered data analysis and visualization. Deliver AI-powered consulting services with predictive analytics and modeling. Optimize resource allocation and project management with intelligent planning. Improve decision making with advanced analytics and machine learning insights."
          },
        ],
      },
    ],
  ],
};

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

/* Helper function to get industry by route */
function getIndustryByRoute(route) {
  const allItems = INDUSTRIES_DATA.columns.flatMap(column => 
    column.flatMap(group => group.items)
  );
  return allItems.find(item => item.route === route);
}

/* Helper to get all industries for overview page */
function getAllIndustries() {
  return INDUSTRIES_DATA.columns.flatMap(column => 
    column.flatMap(group => group.items)
  );
}

export default function IndustriesHero() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndustry, setCurrentIndustry] = useState(null);
  const [isOverview, setIsOverview] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    
    // Check if we're on the overview page
    if (path === "/industries/overview" || path === "/industries") {
      setIsOverview(true);
      setCurrentIndustry(null);
      return;
    }

    // Find matching industry
    const industry = getIndustryByRoute(path);
    if (industry) {
      setCurrentIndustry(industry);
      setIsOverview(false);
    } else {
      // Default to overview if no match
      setIsOverview(true);
      setCurrentIndustry(null);
    }
  }, [location.pathname]);

  const handleIndustryClick = (route) => {
    navigate(route);
  };

  // Render overview page (shows all industries in grid)
  if (isOverview) {
    const allIndustries = getAllIndustries();
    
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
                <span style={styles.headingBold}>AI Built for</span>{" "}
                <span style={styles.headingLight}>Every Industry</span>
              </motion.h1>

              <motion.p
                style={styles.paragraph}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                From banking to healthcare — tailored AI solutions for your sector.
                We bring deep industry expertise combined with cutting-edge AI
                capabilities to solve your most complex challenges. Explore how
                we're transforming industries through intelligent automation and
                data-driven insights.
              </motion.p>

              <div style={styles.industryGrid}>
                {allIndustries.map((industry, index) => (
                  <motion.div
                    key={index}
                    style={styles.industryCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    onClick={() => handleIndustryClick(industry.route)}
                    whileHover={{
                      background: "rgba(225,29,72,0.08)",
                      borderColor: "rgba(225,29,72,0.2)",
                      y: -4,
                    }}
                  >
                    <div style={styles.industryName}>{industry.label}</div>
                    <div style={styles.industryDescription}>
                      {industry.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <AIInAction />
        <AIwork />
        <Cards />
        <ManagedService />
        <Business />
      </>
    );
  }

  // Render specific industry page
  if (currentIndustry) {
    // Generate industry-specific content with full description
    const industryHeading = currentIndustry.label;
    const industryDescription = currentIndustry.description;

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
                <span style={styles.headingBold}>AI for</span>{" "}
                <span style={styles.headingLight}>{industryHeading}</span>
              </motion.h1>

              <motion.p
                style={styles.paragraph}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {industryDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ marginTop: "40px" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "12px 32px",
                    background: "#E11D48",
                    color: "white",
                    borderRadius: "6px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => navigate("/industries/overview")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#b8183a";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#E11D48";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ← View All Industries
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <AboutIndustry />
        <WhoWeWorkWith />
        <HowYouBenefit />
        <WhatsHappening />
        <HowToReinvent />
      </>
    );
  }

  // Fallback - should not reach here
  return null;
}