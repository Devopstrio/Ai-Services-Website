import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import navIndustriesImg from "../../assets/v1_covers/nav_industries.jpg";
import navCapabilitiesImg from "../../assets/v1_covers/nav_capabilities.png";
import navSolutionsImg from "../../assets/v1_covers/nav_solutions.jpg";
import navAgentsImg from "../../assets/v1_covers/nav_agents.png";
import navIntegrationsImg from "../../assets/v1_covers/nav_integrations.jpg";
import navInnovationImg from "../../assets/v1_covers/nav_innovation.jpg";



const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';
const ACCENT = "#E11D48";
const BG = "#030303";
const PANEL_BG = "#0A0A0A";

const LOGO_SRC = "/assets/logo/logo.webp";
const BRAND_NAME = "Devopstrio";

/* Smooth, consistent motion curve used across the whole nav */
const EASE = [0.16, 1, 0.3, 1];

/* Helper */
const clamp = (min, val, max) => Math.min(Math.max(min, val), max);

/* ---------------------------------------------------------------------- */
/*  Top quick-links (small pill row, center of navbar)                    */
/* ---------------------------------------------------------------------- */

const TOP_LINKS = [
  { label: "Services", route: "/services" },
  { label: "Case Studies", route: "https://devopstrio.co.uk/insights/case-studies" },
  { label: "Resources", route: "#", action: "open_resources" },
  { label: "Company", route: "https://devopstrio.co.uk/" },
  { label: "Careers", route: "https://devopstrio.co.uk/careers" },
];

/* Secondary links shown at the base of the full-screen nav sidebar */
const SECONDARY_LINKS = [
  { label: "About Us", route: "https://devopstrio.co.uk/about/company-overview" },
  { label: "Company", route: "https://devopstrio.co.uk/insights/blogs" },
  { label: "Careers", route: "https://devopstrio.co.uk/careers" },
  { label: "Contact Us", route: "https://devopstrio.co.uk/contact" },
];

/* ---------------------------------------------------------------------- */
/*  Full-screen nav data                                                  */
/*  Every section is rendered as columns. Each column is a list of        */
/*  "blocks" — a block optionally has a title (sub-group label) and a     */
/*  list of items. Blocks with title:null render as a plain link list.    */
/* ---------------------------------------------------------------------- */

const ov = (route) => ({ label: "Overview", route, overview: true });

const NAV_SECTIONS = [
  {
    id: "industries",
    label: "Industries",
    heading: "Industries",
    image: {
      src: navIndustriesImg,
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
            ov("/industries/overview"),
            { label: "Banking & Financial Services", route: "/industries/banking-financial-services" },
            { label: "Healthcare & Life Sciences", route: "/industries/healthcare-life-sciences" },
            { label: "Insurance", route: "/industries/insurance" },
            { label: "Retail & E-Commerce", route: "/industries/retail-ecommerce" },
            { label: "Manufacturing", route: "/industries/manufacturing" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Logistics & Supply Chain", route: "/industries/logistics-supply-chain" },
            { label: "Government & Public Sector", route: "/industries/government-public-sector" },
            { label: "Education", route: "/industries/education" },
            { label: "Telecommunications", route: "/industries/telecommunications" },
            { label: "Energy & Utilities", route: "/industries/energy-utilities" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Real Estate", route: "/industries/real-estate" },
            { label: "Automotive", route: "/industries/automotive" },
            { label: "Hospitality & Travel", route: "/industries/hospitality-travel" },
            { label: "Media & Entertainment", route: "/industries/media-entertainment" },
            { label: "Professional Services", route: "/industries/professional-services" },
          ],
        },
      ],
    ],
  },
  {
    id: "ai-capabilities",
    label: "AI Capabilities",
    heading: "AI Capabilities",
    image: {
      src: navCapabilitiesImg,
      title: "The Full AI Stack, In-House",
      description: "NLP, vision, generative AI, and MLOps — engineered for the enterprise.",
      cta: "See Capabilities",
      route: "/capabilities/overview",
    },
    columns: [
      [
        {
          title: null,
          items: [
            ov("/capabilities/overview"),
            { label: "Generative AI", route: "/capabilities/generative-ai" },
            { label: "AI Agents", route: "/capabilities/ai-agents" },
            { label: "Enterprise AI Development", route: "/capabilities/enterprise-ai-development" },
            { label: "Machine Learning", route: "/capabilities/machine-learning" },
            { label: "Natural Language Processing", route: "/capabilities/nlp" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Computer Vision", route: "/capabilities/computer-vision" },
            { label: "Intelligent Document Processing", route: "/capabilities/intelligent-document-processing" },
            { label: "AI Search & Knowledge Management", route: "/capabilities/ai-search-knowledge-management" },
            { label: "Intelligent Automation", route: "/capabilities/intelligent-automation" },
            { label: "Data Intelligence", route: "/capabilities/data-intelligence" },
            { label: "Predictive Analytics", route: "/capabilities/predictive-analytics" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "AI Integration", route: "/capabilities/ai-integration" },
            { label: "AI Infrastructure & MLOps", route: "/capabilities/ai-infrastructure-mlops" },
            { label: "Responsible AI & Governance", route: "/capabilities/responsible-ai-governance" },
            { label: "AI Strategy & Consulting", route: "/capabilities/ai-strategy-consulting" },
            { label: "AI Innovation Lab", route: "/capabilities/ai-innovation-lab" },
          ],
        },
      ],
    ],
  },
  {
    id: "enterprise-solutions",
    label: "Enterprise Solutions",
    heading: "Enterprise Solutions",
    image: {
      src: navSolutionsImg,
      title: "Solutions That Scale With You",
      description: "Purpose-built AI for every function, from HR to compliance.",
      cta: "Explore Solutions",
      route: "/solutions/overview",
    },
    columns: [
      [
        {
          title: null,
          items: [
            ov("/solutions/overview"),
            { label: "Human Resources AI", route: "/solutions/hr-ai" },
            { label: "Customer Support AI", route: "/solutions/customer-support-ai" },
            { label: "Sales Intelligence", route: "/solutions/sales-intelligence" },
            { label: "Marketing AI", route: "/solutions/marketing-ai" },
            { label: "Finance AI", route: "/solutions/finance-ai" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Document Intelligence", route: "/solutions/document-intelligence" },
            { label: "Knowledge Management", route: "/solutions/knowledge-management" },
            { label: "Workflow Automation", route: "/solutions/workflow-automation" },
            { label: "Contact Center AI", route: "/solutions/contact-center-ai" },
            { label: "IT Operations AI", route: "/solutions/it-operations-ai" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "DevOps AI", route: "/solutions/devops-ai" },
            { label: "Cybersecurity AI", route: "/solutions/cybersecurity-ai" },
            { label: "Manufacturing AI", route: "/solutions/manufacturing-ai" },
            { label: "Retail AI", route: "/solutions/retail-ai" },
            { label: "Healthcare AI", route: "/solutions/healthcare-ai" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Banking & Financial Services", route: "/solutions/banking-financial-services" },
            { label: "Legal AI", route: "/solutions/legal-ai" },
            { label: "Education AI", route: "/solutions/education-ai" },
            { label: "Government AI", route: "/solutions/government-ai" },
            { label: "Custom AI Solutions", route: "/solutions/custom-ai-solutions" },
          ],
        },
      ],
    ],
  },
  {
    id: "ai-products",
    label: "AI Products",
    heading: "AI Products",
    image: {
      src: navAgentsImg,
      title: "Products Teams Actually Use",
      description: "AIHire, MailTab, eSigniva, Brio AI and more — ready to deploy out of the box.",
      cta: "Browse Products",
      route: "/products/overview",
    },
    columns: [
      [
        {
          title: "Business Platforms",
          items: [
            { label: "AIHire", route: "/products/business-platforms/aihire" },
            { label: "MailTab", route: "/products/business-platforms/mailtab" },
            { label: "eSigniva", route: "/products/business-platforms/safesign-ai" },
            { label: "Humanex AI", route: "/products/business-platforms/humanex-ai" },
            { label: "Brio AI", route: "/products/business-platforms/brio-ai" },
            { label: "DevOps Copilot", route: "/products/business-platforms/devops-copilot" },
          ],
        },
      ],
      [
        {
          title: "Productivity AI",
          items: [
            { label: "Knowledge AI", route: "/products/productivity-ai/knowledge-ai" },
            { label: "Document AI", route: "/products/productivity-ai/document-ai" },
            { label: "Workflow AI", route: "/products/productivity-ai/workflow-ai" },
            { label: "Assistant AI", route: "/products/productivity-ai/assistant-ai" },
            { label: "AI Studio", route: "/products/productivity-ai/ai-studio" },
          ],
        },
      ],
      [
        {
          title: "Business AI",
          items: [
            { label: "Sales AI", route: "/products/business-ai/sales-ai" },
            { label: "Marketing AI", route: "/products/business-ai/marketing-ai" },
            { label: "Support AI", route: "/products/business-ai/support-ai" },
            { label: "Finance AI", route: "/products/business-ai/finance-ai" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [{ label: "Future Products", route: "/products/future-products" }],
        },
      ],
    ],
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    heading: "AI Agents",
    image: {
      src: navIntegrationsImg,
      title: "Agents That Work Alongside Your Teams",
      description: "From HR to DevOps — autonomous agents built for the enterprise.",
      cta: "Meet the Agents",
      route: "/agents/overview",
    },
    columns: [
      [
        {
          title: "Business Agents",
          items: [
            { label: "HR Agent", route: "/agents/business/hr-agent" },
            { label: "Sales Agent", route: "/agents/business/sales-agent" },
            { label: "Marketing Agent", route: "/agents/business/marketing-agent" },
            { label: "Customer Support Agent", route: "/agents/business/customer-support-agent" },
            { label: "Finance Agent", route: "/agents/business/finance-agent" },
            { label: "Procurement Agent", route: "/agents/business/procurement-agent" },
            { label: "Legal Agent", route: "/agents/business/legal-agent" },
            { label: "Executive Assistant", route: "/agents/business/executive-assistant" },
          ],
        },
      ],
      [
        {
          title: "IT & Engineering Agents",
          items: [
            { label: "DevOps Agent", route: "/agents/it-engineering/devops-agent" },
            { label: "Software Engineering Agent", route: "/agents/it-engineering/software-engineering-agent" },
            { label: "QA Testing Agent", route: "/agents/it-engineering/qa-testing-agent" },
            { label: "Cloud Operations Agent", route: "/agents/it-engineering/cloud-operations-agent" },
            { label: "Security Operations Agent", route: "/agents/it-engineering/security-operations-agent" },
            { label: "Database Agent", route: "/agents/it-engineering/database-agent" },
          ],
        },
      ],
      [
        {
          title: "Knowledge & Productivity Agents",
          items: [
            { label: "Knowledge Agent", route: "/agents/knowledge-productivity/knowledge-agent" },
            { label: "Research Agent", route: "/agents/knowledge-productivity/research-agent" },
            { label: "Document Agent", route: "/agents/knowledge-productivity/document-agent" },
            { label: "Meeting Agent", route: "/agents/knowledge-productivity/meeting-agent" },
            { label: "Email Agent", route: "/agents/knowledge-productivity/email-agent" },
            { label: "Workflow Agent", route: "/agents/knowledge-productivity/workflow-agent" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Industry Agents", route: "/agents/industry-agents" },
            { label: "Agent Platform", route: "/agents/platform" },
          ],
        },
      ],
    ],
  },
  {
    id: "innovation-lab",
    label: "Innovation Lab",
    heading: "Innovation Lab",
    image: {
      src: navInnovationImg,
      title: "Where We Build What's Next",
      description: "Research, prototypes, and open-source experiments from our labs.",
      cta: "Visit the Lab",
      route: "/innovation/overview",
    },
    columns: [
      [
        {
          title: null,
          items: [
            ov("/innovation/overview"),
            { label: "AI Research", route: "/innovation/ai-research" },
            { label: "Experimental Projects", route: "/innovation/experimental-projects" },
            { label: "AI Prototypes", route: "/innovation/ai-prototypes" },
            { label: "Open Source", route: "/innovation/open-source" },
            { label: "Technology Exploration", route: "/innovation/technology-exploration" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Innovation Programs", route: "/innovation/innovation-programs" },
            { label: "Product Roadmap", route: "/innovation/product-roadmap" },
            { label: "AI Demonstrations", route: "/innovation/ai-demonstrations" },
            { label: "Publications", route: "/innovation/publications" },
          ],
        },
      ],
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    heading: "Integrations",
    image: {
      src: "/assets/services/webp/usecase_integration.webp",
      title: "Connect AI to Your Entire Stack",
      description: "Pre-built connectors for CRM, ERP, databases, and LLM providers.",
      cta: "View All Integrations",
      route: "/integrations/overview",
    },
    columns: [
      [
        {
          title: null,
          items: [
            ov("/integrations/overview"),
            { label: "Productivity & Collaboration", route: "/integrations/productivity-collaboration" },
            { label: "CRM Platforms", route: "/integrations/crm-platforms" },
            { label: "ERP Systems", route: "/integrations/erp-systems" },
            { label: "Cloud Platforms", route: "/integrations/cloud-platforms" },
            { label: "AI & LLM Providers", route: "/integrations/ai-llm-providers" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Databases", route: "/integrations/databases" },
            { label: "Vector Databases", route: "/integrations/vector-databases" },
            { label: "Communication", route: "/integrations/communication" },
            { label: "Storage", route: "/integrations/storage" },
            { label: "Identity & Authentication", route: "/integrations/identity-authentication" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "DevOps", route: "/integrations/devops" },
            { label: "Business Intelligence", route: "/integrations/business-intelligence" },
            { label: "Enterprise Applications", route: "/integrations/enterprise-applications" },
            { label: "Custom Integration", route: "/integrations/custom-integration" },
          ],
        },
      ],
    ],
  }
];

const SOCIALS = [
  { Icon: FaLinkedin, href: "https://linkedin.com" },
  { Icon: FaTwitter, href: "https://x.com" },
  { Icon: FaFacebook, href: "https://facebook.com" },
  { Icon: FaYoutube, href: "https://youtube.com" },
];

/* ---------------------------------------------------------------------- */
/*  Sidebar item                                                          */
/* ---------------------------------------------------------------------- */

function SidebarItem({ section, active, onClick, index }) {
  const [hover, setHover] = useState(false);
  const isActive = active === section.id;

  return (
    <motion.button
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.03 * index, ease: EASE } }}
      whileHover={{ x: 4, transition: { duration: 0.2, ease: EASE } }}
      whileTap={{ scale: 0.97, transition: { duration: 0.15, ease: EASE } }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        textAlign: "left",
        padding: "12px 18px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        backgroundColor: isActive
          ? "rgba(225,29,72,0.12)"
          : hover
          ? "rgba(255,255,255,0.045)"
          : "transparent",
        fontFamily: FONT,
        fontSize: "clamp(13.5px, 1.05vw, 15.5px)",
        fontWeight: isActive ? 700 : 500,
        color: isActive ? "#ffffff" : "rgba(255,255,255,0.62)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {isActive && (
        <motion.span
          layoutId="sidebar-indicator"
          transition={{ type: "spring", stiffness: 420, damping: 38 }}
          style={{
            position: "absolute",
            left: 0,
            top: "18%",
            bottom: "18%",
            width: "3px",
            borderRadius: "3px",
            backgroundColor: ACCENT,
          }}
        />
      )}
      {section.label}
    </motion.button>
  );
}

/* ---------------------------------------------------------------------- */
/*  Content panel — grouped column links                                 */
/* ---------------------------------------------------------------------- */

function ColumnLink({ item, index }) {
  const [hover, setHover] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = item.route;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.025 * index, ease: EASE }}
    >
      <div
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textAlign: "left",
          fontSize: "clamp(13.5px, 1.05vw, 15px)",
          fontWeight: item.overview ? 700 : 500,
          color: item.overview ? (hover ? ACCENT : "#ffffff") : hover ? ACCENT : "#e5e7eb",
          textDecoration: "none",
          padding: "clamp(9px, 0.85vw, 12px) 0",
          cursor: "pointer",
          transition: "color 0.25s ease, transform 0.25s ease",
          transform: hover ? "translateX(4px)" : "translateX(0)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {item.label}
      </div>
    </motion.div>
  );
}

function ColumnBlock({ block, blockIndex, startIndex }) {
  return (
    <div style={{ marginBottom: blockIndex > 0 ? "clamp(14px, 1.5vw, 20px)" : 0 }}>
      {block.title && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          style={{
            textAlign: "left",
            fontSize: "clamp(11px, 0.85vw, 12.5px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            color: "rgba(225,29,72,0.85)",
            marginBottom: "8px",
            paddingTop: blockIndex > 0 ? "4px" : 0,
          }}
        >
          {block.title}
        </motion.div>
      )}
      {block.items.map((item, li) => (
        <ColumnLink key={item.label} item={item} index={startIndex + li} />
      ))}
    </div>
  );
}

function ColumnsContent({ section }) {
  const columnCount = section.columns.length;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gap: "clamp(20px, 2.5vw, 40px)",
        backgroundColor: PANEL_BG,
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "18px",
        padding: "clamp(20px, 2.5vw, 32px) clamp(16px, 2vw, 36px)",
        alignItems: "start",
      }}
      className="columns-content"
    >
      {section.columns.map((blocks, ci) => {
        let runningIndex = 0;
        return (
          <div key={ci} style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            {blocks.map((block, bi) => {
              const start = runningIndex;
              runningIndex += block.items.length;
              return <ColumnBlock key={bi} block={block} blockIndex={bi} startIndex={start} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/*  Related image banner — fills the empty space below the columns       */
/* ---------------------------------------------------------------------- */

function ImageBanner({ image }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const handleLeave = () => {
    setHover(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = image.route;
  };

  if (!image) return null;

  return (
    <motion.div
      key={image.route}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
      style={{ marginTop: "clamp(20px, 2.5vw, 28px)", perspective: 1000 }}
    >
      <motion.div
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 150, damping: 16 }}
        style={{
          position: "relative",
          height: "clamp(160px, 22vw, 260px)",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          cursor: "pointer",
          transformStyle: "preserve-3d",
        }}
        className="nav-banner"
      >
        {/* ambient glow blobs behind/around the image */}
        <div className="banner-glow banner-glow-a" />
        <div className="banner-glow banner-glow-b" />

        <motion.img
          src={image.src}
          alt={image.title}
          animate={{ scale: hover ? 1.08 : 1.02 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.88) 8%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(6px, 1vw, 10px)",
            padding: "clamp(18px, 2.5vw, 34px)",
            maxWidth: "min(560px, 70%)",
            textAlign: "left",
          }}
        >
          <h4
            style={{
              margin: 0,
              fontSize: "clamp(17px, 1.8vw, 24px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 1.25,
            }}
          >
            {image.title}
          </h4>
          {image.description && (
            <p
              style={{
                margin: 0,
                fontSize: "clamp(12.5px, 1vw, 14.5px)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.45,
              }}
            >
              {image.description}
            </p>
          )}
          <motion.span
            animate={{ x: hover ? 6 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "4px",
              fontSize: "clamp(12px, 1vw, 14px)",
              fontWeight: 700,
              color: "#ffffff",
              textDecoration: "underline",
              textDecorationColor: ACCENT,
              textUnderlineOffset: "4px",
              width: "fit-content",
            }}
          >
            {image.cta} <ArrowUpRight size={clamp(13, 1.2, 15)} strokeWidth={2.5} />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/* ---------------------------------------------------------------------- */
/*  Full-screen nav overlay                                              */
/* ---------------------------------------------------------------------- */

function FullScreenNav({ open, onClose }) {
  const [active, setActive] = useState(NAV_SECTIONS[0].id);
  const [direction, setDirection] = useState(1);
  const activeSection = NAV_SECTIONS.find((s) => s.id === active) || NAV_SECTIONS[0];

  useEffect(() => {
    if (open) setActive(NAV_SECTIONS[0].id);
  }, [open]);

  useEffect(() => {
    const handleOpenResources = () => {
      setActive('resources');
    };
    window.addEventListener('open-resources-tab', handleOpenResources);
    return () => window.removeEventListener('open-resources-tab', handleOpenResources);
  }, []);

  const handleSelect = (id) => {
    const from = NAV_SECTIONS.findIndex((s) => s.id === active);
    const to = NAV_SECTIONS.findIndex((s) => s.id === id);
    setDirection(to >= from ? 1 : -1);
    setActive(id);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: BG,
            fontFamily: FONT,
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* Top Bar inside Drawer: Close Button + Brand Logo Link */}
          <div
            style={{
              position: "absolute",
              top: "clamp(16px, 2vw, 24px)",
              left: "clamp(16px, 2vw, 24px)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              zIndex: 10,
            }}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
              whileHover={{ scale: 1.08, backgroundColor: "rgba(225,29,72,0.18)" }}
              whileTap={{ scale: 0.92 }}
              onClick={onClose}
              aria-label="Close menu"
              style={{
                width: "clamp(36px, 3vw, 44px)",
                height: "clamp(36px, 3vw, 44px)",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                backgroundColor: "rgba(255,255,255,0.04)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={clamp(18, 1.5, 20)} />
            </motion.button>

            <a
              href="https://devopstrio.co.uk/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={LOGO_SRC}
                alt="Devopstrio logo"
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
              <span
                style={{
                  fontSize: "clamp(18px, 1.6vw, 22px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Devopstrio
              </span>
            </a>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: -44, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              width: "clamp(230px, 22vw, 300px)",
              flexShrink: 0,
              height: "100%",
              padding: "clamp(75px, 9vh, 100px) clamp(12px, 1.5vw, 20px) clamp(20px, 3vh, 32px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              overflowY: "auto",
            }}
            className="sidebar-scroll"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {NAV_SECTIONS.map((section, i) => (
                <SidebarItem
                  key={section.id}
                  section={section}
                  active={active}
                  onClick={() => handleSelect(section.id)}
                  index={i}
                />
              ))}
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  gap: "clamp(12px, 1.5vw, 16px)",
                  padding: "clamp(14px, 1.8vh, 18px) 18px 0",
                  flexWrap: "wrap",
                }}
              >
                {SOCIALS.map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    whileHover={{ y: -3, scale: 1.12, color: ACCENT }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      display: "flex",
                      fontSize: "clamp(16px, 1.3vw, 18px)",
                    }}
                  >
                    <Icon size={clamp(16, 1.3, 18)} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div
            style={{
              position: "relative",
              flex: 1,
              padding: "clamp(60px, 8vh, 96px) clamp(16px, 3vw, 56px) clamp(20px, 3vh, 56px)",
              overflowY: "auto",
            }}
            className="content-scroll"
          >
            <div className="ambient-glow ambient-glow-1" />
            <div className="ambient-glow ambient-glow-2" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSection.id}
                custom={direction}
                initial={(dir) => ({ opacity: 0, x: dir * 28 })}
                animate={{ opacity: 1, x: 0 }}
                exit={(dir) => ({ opacity: 0, x: dir * -28 })}
                transition={{ duration: 0.45, ease: EASE }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <h2
                  style={{
                    margin: "0 0 clamp(20px, 2.5vw, 32px)",
                    fontSize: "clamp(26px, 3.2vw, 38px)",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                  }}
                >
                  {activeSection.heading}
                </h2>

                <ColumnsContent section={activeSection} />
                <ImageBanner image={activeSection.image} />
              </motion.div>
            </AnimatePresence>
          </div>

          <style>{`
            .sidebar-scroll::-webkit-scrollbar,
            .content-scroll::-webkit-scrollbar {
              width: 4px;
            }
            .sidebar-scroll::-webkit-scrollbar-track,
            .content-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .sidebar-scroll::-webkit-scrollbar-thumb,
            .content-scroll::-webkit-scrollbar-thumb {
              background: rgba(225,29,72,0.3);
              border-radius: 10px;
            }

            /* Ambient glow blobs drifting behind the content panel */
            .ambient-glow {
              position: absolute;
              border-radius: 50%;
              filter: blur(90px);
              pointer-events: none;
              z-index: 0;
              opacity: 0.35;
            }
            .ambient-glow-1 {
              top: -10%;
              right: 8%;
              width: clamp(260px, 28vw, 420px);
              height: clamp(260px, 28vw, 420px);
              background: radial-gradient(circle, rgba(225,29,72,0.55) 0%, rgba(225,29,72,0) 70%);
              animation: driftA 16s ease-in-out infinite;
            }
            .ambient-glow-2 {
              bottom: 5%;
              left: 20%;
              width: clamp(200px, 22vw, 340px);
              height: clamp(200px, 22vw, 340px);
              background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%);
              animation: driftB 20s ease-in-out infinite;
            }
            @keyframes driftA {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-30px, 40px) scale(1.15); }
            }
            @keyframes driftB {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(40px, -30px) scale(1.1); }
            }

            /* Banner image ken-burns + glow accents */
            .nav-banner {
              transition: box-shadow 0.4s ease;
              box-shadow: 0 0 0 rgba(225,29,72,0);
            }
            .nav-banner:hover {
              box-shadow: 0 20px 50px -12px rgba(225,29,72,0.35);
            }
            .banner-glow {
              position: absolute;
              border-radius: 50%;
              filter: blur(50px);
              pointer-events: none;
              opacity: 0.5;
              z-index: 0;
            }
            .banner-glow-a {
              top: -20%;
              left: 10%;
              width: 180px;
              height: 180px;
              background: radial-gradient(circle, rgba(225,29,72,0.6) 0%, rgba(225,29,72,0) 70%);
              animation: pulseGlow 6s ease-in-out infinite;
            }
            .banner-glow-b {
              bottom: -25%;
              right: 15%;
              width: 220px;
              height: 220px;
              background: radial-gradient(circle, rgba(225,29,72,0.35) 0%, rgba(225,29,72,0) 70%);
              animation: pulseGlow 8s ease-in-out infinite reverse;
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.35; transform: scale(1); }
              50% { opacity: 0.65; transform: scale(1.2); }
            }

            @media (max-width: 768px) {
              .columns-content {
                grid-template-columns: 1fr !important;
                gap: 6px !important;
              }
              .columns-content > div:not(:last-child) {
                border-bottom: 1px solid rgba(255,255,255,0.05);
                padding-bottom: 8px;
                margin-bottom: 8px;
              }
              .ambient-glow {
                display: none;
              }
            }

            @media (min-width: 769px) and (max-width: 1024px) {
              .columns-content {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 20px !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------------------------------- */
/*  Header                                                                 */
/* ---------------------------------------------------------------------- */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <>
      {/* Centered Capsule Pill Navbar Wrapper */}
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3.5 pointer-events-none">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className={`w-full max-w-7xl relative rounded-full border overflow-hidden pointer-events-auto flex items-center justify-between transition-all duration-350 ${
            scrolled
              ? "border-zinc-800 bg-[#030303]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-2.5 sm:py-3.5 px-5 sm:px-8"
              : "border-zinc-900/50 bg-[#030303]/60 backdrop-blur-sm py-2.5 sm:py-3.5 px-5 sm:px-8"
          } text-white`}
          style={{ fontFamily: FONT, isolation: "isolate" }}
        >
          {/* Left — Hamburger button + Brand Logo & Name */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <motion.button
              aria-label="Open menu"
              onClick={() => setNavOpen(true)}
              whileHover={{ scale: 1.06, backgroundColor: "rgba(225,29,72,0.18)" }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-700/60 bg-zinc-900/60 hover:border-zinc-600 flex items-center justify-center text-white cursor-pointer shrink-0 transition-colors"
            >
              <Menu size={18} />
            </motion.button>

            <a
              href="/"
              className="flex items-center gap-2.5 group cursor-pointer select-none no-underline text-white"
            >
              {logoOk ? (
                <motion.img
                  src={LOGO_SRC}
                  alt={`${BRAND_NAME} logo`}
                  onError={() => setLogoOk(false)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300"
                />
              ) : (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E11D48] flex items-center justify-center text-white font-bold text-base shadow-[0_0_15px_rgba(225,29,72,0.5)]"
                >
                  {BRAND_NAME.charAt(0)}
                </motion.span>
              )}
              <span className="text-[21px] sm:text-[24px] font-bold tracking-tight text-white font-sans leading-none">
                {BRAND_NAME}
              </span>
            </a>
          </div>

          {/* Center Links — Clean Direct Links without new tabs */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-7"
          >
            {TOP_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.route}
                onClick={(e) => {
                  if (link.action === "open_resources") {
                    e.preventDefault();
                    setNavOpen(true);
                    setTimeout(() => window.dispatchEvent(new CustomEvent("open-resources-tab")), 20);
                  }
                }}
                className="px-2.5 xl:px-3.5 py-1.5 text-base xl:text-[17px] font-semibold tracking-[0.3px] text-white hover:text-rose-500 transition-colors cursor-pointer select-none"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Action — Contact Us Red Pill Button without new tab */}
          <div className="flex items-center gap-2">
            <motion.a
              href="https://devopstrio.co.uk/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex nav-contact-btn items-center gap-1.5"
            >
              <span>Contact Us</span>
              <ChevronDown size={14} className="text-zinc-300" />
            </motion.a>
          </div>
        </motion.header>
      </div>

      <FullScreenNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
