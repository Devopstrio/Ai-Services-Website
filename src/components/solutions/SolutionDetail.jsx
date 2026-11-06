import React, { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ENTERPRISE_SOLUTIONS_DATA } from "../../data/solutions";
import { ArrowRight, ArrowLeft } from "lucide-react";
import RepresentativeCTA from "../ui/RepresentativeCTA";
import FAQ from "../ui/FAQ";
import { getSolutionFaqs } from "../../data/faqs";

/**
 * ============================================================================
 * DEVOPSTRIO AI — ENTERPRISE SOLUTION TYPOGRAPHY & DESIGN TOKENS
 * ============================================================================
 * Applied consistently across all 20 Enterprise Solutions subpages.
 * Official Brand Red Accent: #E11D48 (RGB 225, 29, 72)
 */
const TYPO = {
  fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif',
  colors: {
    headingPrimary: "#FFFFFF",
    bodyPrimary: "#D4D4D8",     // Zinc-300: High-contrast body copy
    bodySecondary: "#A1A1AA",   // Zinc-400: Neutral supporting labels & descriptors
    brandAccent: "#E11D48",     // Devopstrio Official Brand Red (Strict Single Accent)
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    cardBg: "#0E0E10",
    cardBgAlt: "#141416",
  },
  hero: {
    eyebrow: {
      fontSize: "0.75rem",       // 12px
      fontWeight: 700,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      lineHeight: 1,
    },
    h1: {
      fontSize: "clamp(2rem, 5vw, 4.5rem)", // 32px – 72px desktop/mobile
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: "-0.035em",
      maxWidth: "920px",
    },
    description: {
      fontSize: "clamp(1rem, 1.25vw, 1.125rem)", // 16px – 18px
      fontWeight: 400,
      lineHeight: "28px",
      maxWidth: "720px",
      color: "#A1A1AA",
    },
    cta: {
      fontSize: "0.875rem",      // 14px
      fontWeight: 600,
      lineHeight: 1.4,
    }
  },
  metricsBanner: {
    value: {
      fontSize: "clamp(2.1rem, 3vw, 2.85rem)", // 44–48px desktop, 34–36px mobile
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
    },
    label: {
      fontSize: "0.875rem",      // 14px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "0.02em",
    }
  },
  overview: {
    h2: {
      fontSize: "clamp(1.85rem, 2.7vw, 2.5rem)", // 40–42px desktop, 28–30px mobile
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    body: {
      fontSize: "1.0625rem",     // 16–17px
      fontWeight: 400,
      lineHeight: 1.7,
      maxWidth: "680px",
    },
    cta: {
      fontSize: "0.875rem",      // 14px
      fontWeight: 600,
    }
  },
  bento: {
    h2: {
      fontSize: "clamp(1.85rem, 2.7vw, 2.5rem)", // 40–42px
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    wideTitle: {
      fontSize: "1.5rem",        // 24px wide cards
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.02em",
    },
    narrowTitle: {
      fontSize: "1.375rem",      // 21–22px narrow cards
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.02em",
    },
    description: {
      fontSize: "0.9375rem",     // 14–15px
      fontWeight: 400,
      lineHeight: 1.55,
      color: "#D4D4D8",
    }
  },
  features: {
    tag: {
      fontSize: "0.875rem",      // 14px desktop, 12–13px mobile
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      lineHeight: 1.4,
    },
    h3: {
      fontSize: "clamp(1.6rem, 2.2vw, 2rem)", // 30–32px desktop, 24–26px mobile
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.025em",
    },
    body: {
      fontSize: "1.0625rem",     // 16–17px
      fontWeight: 400,
      lineHeight: 1.7,
      maxWidth: "540px",
    }
  },
  approach: {
    eyebrow: {
      fontSize: "0.875rem",      // 14px
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      lineHeight: 1.4,
    },
    h2: {
      fontSize: "clamp(1.85rem, 2.7vw, 2.5rem)", // 40–42px
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    subtitle: {
      fontSize: "1.0625rem",     // 17px
      fontWeight: 400,
      lineHeight: 1.6,
    },
    stageNumber: {
      fontSize: "1.75rem",       // 28px
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.02em",
    },
    stageTitle: {
      fontSize: "1.3125rem",     // 21px
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.015em",
    },
    stageDesc: {
      fontSize: "0.9375rem",     // 15px
      fontWeight: 400,
      lineHeight: 1.6,
    }
  },
  results: {
    h2: {
      fontSize: "clamp(1.85rem, 2.7vw, 2.5rem)", // 40–42px
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.03em",
    },
    company: {
      fontSize: "0.8125rem",     // 13px
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      lineHeight: 1.4,
    },
    metric: {
      fontSize: "clamp(2.15rem, 2.8vw, 2.5rem)", // 36–40px
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
    },
    descriptor: {
      fontSize: "1.0625rem",     // 16–18px outcome descriptor
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
    },
    description: {
      fontSize: "0.9375rem",     // 14–15px
      fontWeight: 400,
      lineHeight: 1.6,
    }
  }
};

/**
 * Concise, topic-focused minimal 1–2 line hero descriptions
 * tailored specifically to each solution's domain on Devopstrio AI.
 */
const MINIMAL_HERO_DESCRIPTIONS = {
  "hr-ai": "Intelligent workforce operations, recruitment automation, and predictive people analytics for modern enterprise teams.",
  "customer-support-ai": "Autonomous tier-1 issue resolution, sentiment-aware routing, and real-time agent copilots to elevate customer experience.",
  "sales-intelligence": "Predictive pipeline forecasting, automated prospect intelligence, and live deal execution copilots to accelerate B2B revenue.",
  "marketing-ai": "Generative campaign orchestration, dynamic audience targeting, and real-time creative optimization driving measurable conversion.",
  "finance-ai": "Automated invoice reconciliation, intelligent fraud mitigation, and continuous cash flow forecasting across corporate finance.",
  "document-intelligence": "Zero-template neural extraction, automated compliance scanning, and structured data intelligence from complex enterprise documents.",
  "knowledge-management": "Enterprise neural search and grounded conversational RAG connecting distributed repositories into a verified source of truth.",
  "workflow-automation": "Autonomous AI agent swarms orchestrating cross-departmental operations and eliminating manual administrative friction.",
  "contact-center-ai": "Sub-second conversational voice bots, real-time agent guidance, and automated quality assurance analytics for contact centers.",
  "it-operations-ai": "Predictive outage prevention, autonomous incident triage, and self-healing cloud infrastructure orchestrated by AIOps.",
  "devops-ai": "AI-augmented CI/CD pipelines, automated pull request security reviews, and predictive release risk scoring across engineering.",
  "cybersecurity-ai": "Autonomous threat hunting, adaptive zero-trust defense, and real-time remediation against modern attack surfaces.",
  "manufacturing-ai": "Edge computer vision inspection, predictive asset maintenance, and intelligent factory automation for Industry 4.0.",
  "retail-ai": "Dynamic algorithmic pricing, demand forecasting, visual product search, and hyper-personalized customer recommendation engines.",
  "healthcare-ai": "Ambient clinical documentation support, predictive patient triage, and HIPAA-compliant administrative automation.",
  "banking-financial-services": "Sub-second credit decisioning, automated KYC/AML verification, and real-time transaction fraud defense for modern banking.",
  "legal-ai": "Rapid due diligence review, autonomous contract redlining, and compliant clause intelligence with verifiable citations.",
  "education-ai": "Adaptive learning personalization, automated curriculum grading, and predictive student retention analytics.",
  "government-ai": "Secure, FedRAMP-aligned public sector intelligence, automated constituent services, and data-driven civic policy analysis.",
  "custom-ai-solutions": "Bespoke proprietary models, autonomous multi-agent systems, and production AI engineered for your enterprise workflows."
};

/**
 * Splits combined metric strings (e.g. "94% First-Contact", "68% Faster", "$14M Saved", "3.5x Faster AHT")
 * into distinct numeric statistics and outcome descriptors for clean visual hierarchy.
 */
function parseMetric(metricStr) {
  if (!metricStr) return { value: "", label: "" };
  const trimmed = metricStr.trim();
  const match = trimmed.match(/^([+$€£]?\d+(?:\.\d+)?[%xXkKmMbB+]?|\$\d+(?:\.\d+)?[kKmMbB+]?)\s*(.*)$/);
  if (match && match[1]) {
    return {
      value: match[1],
      label: match[2] || ""
    };
  }
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex !== -1) {
    return {
      value: trimmed.slice(0, spaceIndex),
      label: trimmed.slice(spaceIndex + 1)
    };
  }
  return { value: trimmed, label: "" };
}

/**
 * Highlights only the core subject phrase in #E11D48 (e.g. "Talent Strategy" in HR AI)
 * using the structured "Theme & Subject" pattern present across all solution headings.
 */
function renderOverviewHeading(headingText) {
  if (!headingText) return null;
  const parts = headingText.split(" & ");
  if (parts.length === 2) {
    return (
      <>
        <span>{parts[0]} &amp; </span>
        <br className="overview-heading-br" />
        <span style={{ color: TYPO.colors.brandAccent }}>{parts[1]}</span>
      </>
    );
  }
  return <span>{headingText}</span>;
}

/**
 * Tailored enterprise CTA configuration for every solution subpage.
 * Matches specific enterprise outcomes, terminology, and action verbs.
 */
const SOLUTION_CTA_CONFIG = {
  "hr-ai": {
    title: "Ready to Transform Your Workplace with",
    highlightText: "Intelligent HR AI?",
    description: "Automate talent screening, accelerate employee onboarding, and empower workforce analytics with autonomous HR intelligence.",
    primaryBtnText: "SCHEDULE HR AI DEMO",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE HR SOLUTIONS",
    secondaryBtnTo: "/solutions/overview"
  },
  "customer-support-ai": {
    title: "Ready to Deliver 24/7 Omnichannel",
    highlightText: "Customer Support AI?",
    description: "Resolve support tickets autonomously, reduce first-response latency, and deliver empathetic customer experiences at scale.",
    primaryBtnText: "DEPLOY SUPPORT COPILOT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "VIEW BENCHMARK METRICS",
    secondaryBtnTo: "/solutions/overview"
  },
  "sales-intelligence": {
    title: "Accelerate Pipeline Velocity with",
    highlightText: "Predictive Sales Intelligence?",
    description: "Equip your revenue teams with real-time deal scoring, automated buyer journey signals, and autonomous CRM enrichment.",
    primaryBtnText: "REQUEST SALES AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE REVENUE PLATFORM",
    secondaryBtnTo: "/solutions/overview"
  },
  "marketing-ai": {
    title: "Scale Personalized Campaigns with",
    highlightText: "Generative Marketing AI?",
    description: "Orchestrate multi-channel audience targeting, automated content generation, and closed-loop attribution analytics.",
    primaryBtnText: "LAUNCH MARKETING PILOT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE CAMPAIGN ENGINE",
    secondaryBtnTo: "/solutions/overview"
  },
  "finance-ai": {
    title: "Modernize Corporate Treasury with",
    highlightText: "Autonomous Finance AI?",
    description: "Automate financial reconciliation, continuous audit anomaly detection, and predictive cash flow forecasting.",
    primaryBtnText: "SCHEDULE FINANCIAL AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "VIEW TREASURY PLATFORM",
    secondaryBtnTo: "/solutions/overview"
  },
  "document-intelligence": {
    title: "Extract Mission-Critical Knowledge with",
    highlightText: "Document Intelligence AI?",
    description: "Parse complex PDF invoices, multi-lingual contracts, and regulatory filings with sub-second verified semantic extraction.",
    primaryBtnText: "TEST DOCUMENT PARSER",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE OCR ARCHITECTURE",
    secondaryBtnTo: "/solutions/overview"
  },
  "knowledge-management": {
    title: "Connect Enterprise Repositories with",
    highlightText: "Neural Knowledge AI?",
    description: "Break down data silos with grounded conversational RAG, enterprise semantic search, and zero-hallucination verification.",
    primaryBtnText: "REQUEST KNOWLEDGE PILOT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ENTERPRISE RAG",
    secondaryBtnTo: "/solutions/overview"
  },
  "workflow-automation": {
    title: "Eliminate Manual Operations with",
    highlightText: "Intelligent Workflow Automation?",
    description: "Deploy autonomous cross-departmental agent swarms that coordinate complex tasks, approvals, and system handoffs seamlessly.",
    primaryBtnText: "AUTOMATE YOUR WORKFLOWS",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE AGENT SWARMS",
    secondaryBtnTo: "/solutions/overview"
  },
  "contact-center-ai": {
    title: "Revolutionize Call Operations with",
    highlightText: "Real-Time Contact Center AI?",
    description: "Empower front-line agents with sub-second conversational voice bots, real-time sentiment telemetry, and automatic call summaries.",
    primaryBtnText: "DEPLOY VOICE COPILOT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "VIEW CONTACT CENTER SUITE",
    secondaryBtnTo: "/solutions/overview"
  },
  "it-operations-ai": {
    title: "Eliminate Unplanned Downtime with",
    highlightText: "Autonomous AIOps & IT Operations?",
    description: "Predict infrastructure bottlenecks, automate root-cause triage, and self-heal cloud workloads before incidents impact users.",
    primaryBtnText: "START AIOPS ASSESSMENT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE INCIDENT AUTOMATION",
    secondaryBtnTo: "/solutions/overview"
  },
  "devops-ai": {
    title: "Accelerate Software Delivery with",
    highlightText: "Next-Gen DevOps AI?",
    description: "Automate pull request risk scoring, self-healing CI/CD pipelines, and proactive cloud infrastructure provisioning.",
    primaryBtnText: "SCHEDULE PIPELINE AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE CI/CD COPILOT",
    secondaryBtnTo: "/solutions/overview"
  },
  "cybersecurity-ai": {
    title: "Defend Your Digital Perimeter with",
    highlightText: "Autonomous Cybersecurity AI?",
    description: "Neutralize zero-day threats in milliseconds, automate SOC incident response, and enforce adaptive zero-trust posture.",
    primaryBtnText: "REQUEST SECURITY AUDIT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "VIEW THREAT DETECTION MATRIX",
    secondaryBtnTo: "/solutions/overview"
  },
  "manufacturing-ai": {
    title: "Maximize Industrial Yield with",
    highlightText: "Predictive Manufacturing AI?",
    description: "Deploy computer vision defect detection, predictive machinery maintenance, and dynamic supply chain optimization.",
    primaryBtnText: "BOOK FACTORY ASSESSMENT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE INDUSTRIAL PLATFORM",
    secondaryBtnTo: "/solutions/overview"
  },
  "retail-ai": {
    title: "Elevate Omnichannel Commerce with",
    highlightText: "Personalized Retail AI?",
    description: "Power dynamic pricing models, predictive shelf inventory replenishment, and hyper-personalized customer recommendations.",
    primaryBtnText: "LAUNCH RETAIL TRIAL",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE COMMERCE ENGINE",
    secondaryBtnTo: "/solutions/overview"
  },
  "healthcare-ai": {
    title: "Enhance Patient Outcomes with",
    highlightText: "HIPAA-Compliant Healthcare AI?",
    description: "Streamline clinical documentation, accelerate diagnostic triage, and secure patient records with zero-trust AI infrastructure.",
    primaryBtnText: "REQUEST CLINICAL REVIEW",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE HEALTHCARE COMPLIANCE",
    secondaryBtnTo: "/solutions/overview"
  },
  "banking-financial-services": {
    title: "Pioneer Next-Generation Banking with",
    highlightText: "Core Financial AI?",
    description: "Modernize core banking with sub-second loan underwriting, continuous KYC/AML compliance, and real-time fraud defense.",
    primaryBtnText: "SCHEDULE BANKING BRIEFING",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE FINTECH PLATFORM",
    secondaryBtnTo: "/solutions/overview"
  },
  "legal-ai": {
    title: "Accelerate Contract Lifecycle with",
    highlightText: "Grounded Legal AI?",
    description: "Automate clause risk extraction, redlining compliance checks, and regulatory discovery with citation-backed legal models.",
    primaryBtnText: "SCHEDULE LEGAL BRIEFING",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE LEGAL ARCHITECTURE",
    secondaryBtnTo: "/solutions/overview"
  },
  "education-ai": {
    title: "Transform Student Learning with",
    highlightText: "Adaptive Education AI?",
    description: "Deliver personalized curriculum pacing, automated grading copilots, and predictive student retention analytics.",
    primaryBtnText: "REQUEST CAMPUS TRIAL",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE LEARNING PLATFORM",
    secondaryBtnTo: "/solutions/overview"
  },
  "government-ai": {
    title: "Modernize Citizen Services with",
    highlightText: "Sovereign Government AI?",
    description: "Deploy air-gapped citizen service assistants, automated benefit claims processing, and multi-agency records intelligence.",
    primaryBtnText: "REQUEST PUBLIC SECTOR BRIEFING",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE SOVEREIGN AI",
    secondaryBtnTo: "/solutions/overview"
  },
  "custom-ai-solutions": {
    title: "Co-Engineer Proprietary IP with",
    highlightText: "Bespoke Enterprise AI?",
    description: "Partner with our elite research engineers to design custom foundation models, private VPC runtimes, and proprietary agent networks.",
    primaryBtnText: "START CUSTOM ENGAGEMENT",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ARCHITECTURE REVIEW",
    secondaryBtnTo: "/solutions/overview"
  }
};

export default function SolutionDetail() {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const data = ENTERPRISE_SOLUTIONS_DATA[solutionId];
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff" }}>
        <h2 style={{ fontFamily: TYPO.fontFamily, fontSize: "1.5rem", fontWeight: 600 }}>Solution Not Found</h2>
      </div>
    );
  }

  // Deduplicate and format clean two-line headline (e.g. "Human Resources AI" -> "AI for Human Resources")
  const rawTitle = `${data.hero.titleLight || ""} ${data.hero.titleBold || ""}`.trim();
  const displayTitle = rawTitle.replace(/\s+AI$/i, "");

  // Minimal focused 1–2 line hero description
  const heroDescription = MINIMAL_HERO_DESCRIPTIONS[solutionId] || 
    (data.hero.description ? data.hero.description.split(". ")[0] + "." : "");

  // Customized CTA configuration for this solution page
  const ctaConfig = SOLUTION_CTA_CONFIG[solutionId] || {
    title: "Ready to Transform Your Enterprise with",
    highlightText: `${displayTitle || "Enterprise AI"}?`,
    description: heroDescription || "Deploy enterprise-grade AI solutions across your infrastructure with guaranteed SLA, SOC2 compliance, and dedicated engineering support.",
    primaryBtnText: "SCHEDULE ARCHITECTURE REVIEW",
    primaryBtnHref: "https://devopstrio.co.uk/contact#contact-form",
    secondaryBtnText: "EXPLORE ALL SOLUTIONS",
    secondaryBtnTo: "/solutions/overview"
  };

  // Split overview paragraph into readable paragraphs
  const rawOverview = data.overview.paragraph || "";
  const overviewParagraphs = rawOverview.includes("\n\n")
    ? rawOverview.split("\n\n").filter(Boolean)
    : rawOverview.includes("\n")
    ? rawOverview.split("\n").filter(Boolean)
    : [rawOverview];

  // 4-Stage AI Transformation Framework
  const approachStages = [
    {
      number: "01",
      title: "Discover",
      desc: "Understand organizational goals, operational workflows, and domain constraints."
    },
    {
      number: "02",
      title: "Architect",
      desc: "Design secure, scalable, and audit-compliant AI solutions tailored to your enterprise."
    },
    {
      number: "03",
      title: "Integrate",
      desc: "Plan seamless integration with existing core enterprise systems and live data pipelines."
    },
    {
      number: "04",
      title: "Optimize",
      desc: "Define continuous model evaluation, governance safeguards, and improvement loops."
    }
  ];

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: TYPO.fontFamily, overflowX: "hidden" }}>
      
      {/* 1. HERO - Cinematic Fullscreen */}
      <section ref={heroRef} style={{ position: "relative", width: "100%", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", paddingTop: "120px", paddingBottom: "70px" }}>
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img src={data.hero.bgImage} alt="Hero Background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.92) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)" }} />
        </motion.div>

        <motion.div style={{ position: "relative", zIndex: 1, textAlign: "left", maxWidth: "1200px", width: "100%", padding: "0 24px", opacity: opacityText }}>
          {/* Eyebrow Breadcrumb Pill with Devopstrio Brand Red */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", backgroundColor: "rgba(225,29,72,0.12)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(225,29,72,0.28)", borderRadius: "999px", color: TYPO.colors.brandAccent, ...TYPO.hero.eyebrow, marginBottom: "22px" }}>
            <span style={{ cursor: "pointer", color: "rgba(255,255,255,0.6)" }} onClick={() => navigate("/solutions/overview")}>
              {data.breadcrumbs[0] || "Enterprise Solutions"}
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
            <span style={{ color: TYPO.colors.brandAccent }}>
              {data.breadcrumbs[1] || displayTitle}
            </span>
          </div>

          {/* Unified Authority H1 */}
          <h1 style={{ ...TYPO.hero.h1, color: TYPO.colors.headingPrimary, margin: "0 0 20px 0" }}>
            <span>AI for </span>
            <span style={{ color: "rgba(255,255,255,0.95)" }}>{displayTitle}</span>
          </h1>

          {/* Minimal 1–2 Line Focused Hero Description */}
          <p style={{ ...TYPO.hero.description, color: TYPO.colors.bodyPrimary, margin: "0 0 32px 0" }}>
            {heroDescription}
          </p>

          <div>
            <Link to="/solutions/overview" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: TYPO.colors.brandAccent, color: "#fff", textDecoration: "none", ...TYPO.hero.cta, padding: "13px 26px", borderRadius: "8px", transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(225,29,72,0.3)" }} className="hero-view-btn">
              <ArrowLeft size={16} /> View All Solutions
            </Link>
            <style>{`
              .hero-view-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 6px 25px rgba(225,29,72,0.5) !important; }
            `}</style>
          </div>
        </motion.div>
      </section>

      {/* 2. METRICS BANNER - Standardized Statistics Strip */}
      <section style={{ position: "relative", zIndex: 10, marginTop: "-40px", padding: "0 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", background: "rgba(18,18,20,0.85)", backdropFilter: "blur(20px)", borderWidth: "1px", borderStyle: "solid", borderColor: TYPO.colors.borderSubtle, borderRadius: "20px", padding: "26px 16px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", gap: "20px" }}>
          {data.metricsBanner.map((metric, i) => (
            <div key={i} className="metric-card" style={{ textAlign: "center", flex: "1 1 200px", padding: "16px 20px", borderRadius: "14px", borderWidth: "1px", borderStyle: "solid", borderColor: "transparent", transition: "all 0.3s ease" }}>
              <div style={{ ...TYPO.metricsBanner.value, color: TYPO.colors.headingPrimary, marginBottom: "8px" }}>
                {metric.value}
              </div>
              <div style={{ ...TYPO.metricsBanner.label, color: TYPO.colors.bodySecondary }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .metric-card:hover {
            background: rgba(255,255,255,0.03);
            border-color: rgba(225,29,72,0.3) !important;
            transform: translateY(-4px);
          }
        `}</style>
      </section>

      {/* 3. OVERVIEW - Editorial Split Layout with Single Phrase Red Highlight */}
      <section style={{ padding: "100px 5% 120px 5%" }}>
        <div className="solution-split-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <h2 style={{ ...TYPO.overview.h2, color: TYPO.colors.headingPrimary, marginBottom: "26px" }}>
              {renderOverviewHeading(data.overview.heading)}
            </h2>
            
            <div style={{ marginBottom: "36px" }}>
              {overviewParagraphs.map((para, pIdx) => (
                <p key={pIdx} style={{ ...TYPO.overview.body, color: TYPO.colors.bodyPrimary, marginBottom: pIdx === overviewParagraphs.length - 1 ? 0 : "18px" }}>
                  {para}
                </p>
              ))}
            </div>

            <a href="https://devopstrio.co.uk/contact#contact-form" style={{ textDecoration: "none", backgroundColor: "#FFFFFF", color: "#000000", border: "none", padding: "14px 32px", borderRadius: "999px", ...TYPO.overview.cta, display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", transition: "all 0.25s ease" }} className="overview-demo-btn">
              Book a Demo <ArrowRight size={16} />
            </a>
            <style>{`
              .overview-demo-btn:hover { background-color: #E4E4E7 !important; transform: translateY(-2px); box-shadow: 0 4px 20px rgba(255,255,255,0.2) !important; }
            `}</style>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} style={{ position: "relative", borderRadius: "20px", overflow: "hidden", borderWidth: "1px", borderStyle: "solid", borderColor: TYPO.colors.borderSubtle, aspectRatio: "4/3" }}>
            <img src={data.overview.image} alt="Overview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        </div>
      </section>

      {/* 4. BENEFITS BENTO BOX (KEY OUTCOMES - Exact "card typo" Specification) */}
      <section style={{ padding: "90px 24px", backgroundColor: "#060608" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ ...TYPO.features.tag, color: TYPO.colors.brandAccent, marginBottom: "12px" }}>
              ENTERPRISE VALUE
            </div>
            <h2 style={{ ...TYPO.bento.h2, color: TYPO.colors.headingPrimary, margin: 0 }}>
              Key Outcomes
            </h2>
          </div>
          
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", gridAutoRows: "minmax(380px, auto)" }}>
            {data.benefitsBento.map((bento, i) => {
              const isWide = bento.colSpan === 2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{
                    gridColumn: `span ${bento.colSpan}`,
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: TYPO.colors.borderSubtle,
                    background: TYPO.colors.cardBg,
                    minHeight: "380px",
                    display: "flex",
                    alignItems: "flex-end"
                  }}
                  className={`bento-card ${isWide ? 'bento-wide' : 'bento-narrow'}`}
                >
                  <img
                    src={bento.image}
                    alt={bento.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
                    className="bento-img"
                  />
                  {/* Bottom Localized Dark Vignette Gradient (from-black/95 via-black/40 to-transparent) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.96) 100%)",
                    }}
                  />

                  {/* Exact "card typo" Specification Content Overlay */}
                  <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px", zIndex: 2 }}>
                    {/* Eyebrow / Tag: #FDA4AF (rose-300), 12px, font-semibold (600), tracking-[0.12em], uppercase + subtle text shadow */}
                    <div
                      style={{
                        fontFamily: TYPO.fontFamily,
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        color: "#FDA4AF",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      KEY OUTCOME {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Headline: Pure white #FFFFFF, 700 bold, line-height ~1.2, tight tracking -0.025em, text-shadow */}
                    <h3
                      style={{
                        fontFamily: TYPO.fontFamily,
                        fontSize: isWide ? "24px" : "21px",
                        fontWeight: 600,
                        margin: "0 0 10px 0",
                        color: "#FFFFFF",
                        lineHeight: 1.2,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {bento.title}
                    </h3>

                    {/* Description: #E4E4E7 (zinc-200), 14px, line-height 1.6 */}
                    <p
                      style={{
                        fontFamily: TYPO.fontFamily,
                        fontSize: "14px",
                        color: "#E4E4E7",
                        margin: 0,
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      {bento.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <style>{`
            .bento-card { transition: border-color 0.35s ease, transform 0.35s ease; }
            .bento-card:hover { border-color: rgba(225,29,72,0.45) !important; transform: translateY(-4px); }
            .bento-img { transition: transform 0.6s ease, opacity 0.6s ease; }
            .bento-card:hover .bento-img { transform: scale(1.04); opacity: 0.6 !important; }
          `}</style>
        </div>
      </section>

      {/* 5. FEATURES ZIG-ZAG (Alternating Feature Sections) */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "100px" }}>
          {data.featuresZigZag.map((feat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>
                <motion.div initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} style={{ order: isEven ? 1 : 2 }}>
                  {/* Prominent 14px Weight 650 Brand Red Eyebrow Label */}
                  <div style={{ ...TYPO.features.tag, color: TYPO.colors.brandAccent, marginBottom: "14px" }}>
                    {feat.tag}
                  </div>
                  <h3 style={{ ...TYPO.features.h3, color: TYPO.colors.headingPrimary, marginBottom: "20px" }}>
                    {feat.title}
                  </h3>
                  <p style={{ ...TYPO.features.body, color: TYPO.colors.bodyPrimary, margin: 0 }}>
                    {feat.text}
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: isEven ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} style={{ order: isEven ? 2 : 1, position: "relative", borderRadius: "18px", overflow: "hidden", aspectRatio: "1/1", borderWidth: "1px", borderStyle: "solid", borderColor: TYPO.colors.borderSubtle }}>
                  <img src={feat.image} alt={feat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. HOW WE APPROACH YOUR AI TRANSFORMATION (New Enterprise Standard Section) */}
      <section style={{ padding: "110px 24px", backgroundColor: "#060608", borderTop: `1px solid ${TYPO.colors.borderSubtle}`, borderBottom: `1px solid ${TYPO.colors.borderSubtle}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ ...TYPO.approach.eyebrow, color: TYPO.colors.brandAccent, marginBottom: "12px" }}>
              OUR APPROACH
            </div>
            <h2 style={{ ...TYPO.approach.h2, color: TYPO.colors.headingPrimary, marginBottom: "14px" }}>
              How We Approach Your AI Transformation
            </h2>
            <p style={{ ...TYPO.approach.subtitle, color: TYPO.colors.bodySecondary, maxWidth: "600px", margin: "0 auto" }}>
              From business challenges to practical AI solutions.
            </p>
          </div>

          <div className="approach-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {approachStages.map((stage, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: sIdx * 0.08 }}
                style={{
                  backgroundColor: TYPO.colors.cardBg,
                  borderRadius: "18px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: TYPO.colors.borderSubtle,
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s ease",
                  position: "relative",
                }}
                className="approach-card"
              >
                <div style={{ ...TYPO.approach.stageNumber, color: TYPO.colors.brandAccent, marginBottom: "20px" }}>
                  {stage.number}
                </div>
                <h3 style={{ ...TYPO.approach.stageTitle, color: TYPO.colors.headingPrimary, marginBottom: "12px" }}>
                  {stage.title}
                </h3>
                <p style={{ ...TYPO.approach.stageDesc, color: TYPO.colors.bodyPrimary, margin: 0 }}>
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <style>{`
            .approach-card:hover {
              transform: translateY(-5px);
              border-color: rgba(225,29,72,0.45) !important;
              box-shadow: 0 10px 30px rgba(225,29,72,0.12);
            }
          `}</style>
        </div>
      </section>

      {/* 7. PROVEN RESULTS (Success Stories with Split Numeric & Descriptor Hierarchy) */}
      <section style={{ padding: "100px 24px", backgroundColor: "#08080a" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...TYPO.results.h2, textAlign: "center", marginBottom: "56px", color: TYPO.colors.headingPrimary }}>
            Proven Results
          </h2>
          <div className="results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {data.successStories.map((story, i) => {
              const { value, label } = parseMetric(story.metric);
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ padding: "36px 32px", backgroundColor: TYPO.colors.cardBg, borderRadius: "18px", borderWidth: "1px", borderStyle: "solid", borderColor: TYPO.colors.borderSubtle, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }} className="success-card">
                   <div style={{ ...TYPO.results.company, color: TYPO.colors.bodySecondary, marginBottom: "20px" }}>
                     {story.company}
                   </div>
                   
                   {/* Split Metric Value & Descriptor for Comfortable Fitting */}
                   <div style={{ ...TYPO.results.metric, color: TYPO.colors.brandAccent, marginBottom: label ? "6px" : "16px" }}>
                     {value}
                   </div>
                   {label && (
                     <div style={{ ...TYPO.results.descriptor, color: TYPO.colors.headingPrimary, marginBottom: "16px" }}>
                       {label}
                     </div>
                   )}

                   <p style={{ ...TYPO.results.description, color: TYPO.colors.bodyPrimary, margin: 0, marginTop: "auto" }}>
                     {story.desc}
                   </p>
                </motion.div>
              );
            })}
          </div>
          <style>{`
             .success-card { transition: all 0.35s ease; }
             .success-card:hover { 
               transform: translateY(-6px); 
               background: #141416;
               border-color: rgba(225,29,72,0.45) !important;
               box-shadow: 0 10px 30px rgba(225,29,72,0.12);
             }
          `}</style>
        </div>
      </section>

      {/* 7.5 FAQ SECTION */}
      <FAQ
        faqs={getSolutionFaqs(solutionId)}
        badge="SOLUTION TECHNICAL FAQ"
        title="Technical Architecture:"
        highlight="Frequently Asked Questions"
      />

      {/* 8. UNIVERSAL REPRESENTATIVE CTA */}
      <RepresentativeCTA
        title={ctaConfig.title}
        highlightText={ctaConfig.highlightText}
        description={ctaConfig.description}
        primaryBtnText={ctaConfig.primaryBtnText}
        primaryBtnHref={ctaConfig.primaryBtnHref}
        secondaryBtnText={ctaConfig.secondaryBtnText}
        secondaryBtnTo={ctaConfig.secondaryBtnTo}
        theme="rose"
      />

      {/* Responsive Breakpoint Helpers */}
      <style>{`
        @media (max-width: 1024px) {
          .approach-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 900px) {
          .solution-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .feature-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .feature-row > div {
            order: initial !important;
          }
          .overview-heading-br {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-card {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 600px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
