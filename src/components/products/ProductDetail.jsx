import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import RepresentativeCTA from "../ui/RepresentativeCTA";
import FAQ from "../ui/FAQ";
import { getProductFaqs } from "../../data/faqs";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getProductData } from "../../data/products";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
    Shield,
  Zap,
  Layers,
  Cpu,
  UserCheck,
  BarChart3,
  Lock,
  ExternalLink,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

const TYPO = {
  fontFamily: FONT,
  colors: {
    headingPrimary: "#FFFFFF",
    headingSecondary: "rgba(255, 255, 255, 0.75)",
    heroDesc: "rgba(255, 255, 255, 0.70)",
    bodyPrimary: "rgba(255, 255, 255, 0.70)",
    bodySecondary: "rgba(255, 255, 255, 0.60)",
    cardDesc: "rgba(255, 255, 255, 0.65)",
    brandAccent: "#E11D48",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    cardBg: "#0A0A0C",
    cardBgAlt: "#0E0E12",
  },
  sharedH2: {
    fontSize: "clamp(1.75rem, 2.5vw, 2.375rem)",
    fontWeight: 600,
    lineHeight: 1.18,
    letterSpacing: "-0.025em",
  },
  featureH3: {
    fontSize: "clamp(1.5rem, 2vw, 1.75rem)",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
  },
  bodyCopy: {
    fontSize: "1.0625rem",
    fontWeight: 400,
    lineHeight: 1.7,
    maxWidth: "680px",
  },
  caseStudyH3: {
    fontSize: "clamp(1.6rem, 2.2vw, 2rem)",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  finalCtaH2: {
    fontSize: "clamp(2.1rem, 3.2vw, 2.625rem)",
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: "-0.025em",
  }
};

/**
 * Product-specific 3-stage enterprise workflows:
 * Stage 01: Existing Process
 * Stage 02: AI-Assisted Workflow (Emphasized)
 * Stage 03: Business Action
 */
const PRODUCT_WORKFLOWS = {
  "aihire": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Candidate Ingestion",
        phrase: "Candidate applications and recruitment information.",
        detailTitle: "Manual Application Ingestion & Triage Bottlenecks",
        detailDesc: "In traditional recruiting workflows, incoming candidate resumes sit in disparate ATS queues, requiring recruiters to manually scan PDFs, check basic criteria, and coordinate initial touchpoints.",
        deliverables: ["Disparate resume formats & ATS ingestion", "High recruiter manual screening hours", "Delayed initial candidate touchpoints"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Screening & Review",
        phrase: "Candidate screening and structured review.",
        detailTitle: "Structured Multi-Dimensional Candidate Evaluation",
        detailDesc: "AIHire conducts instant, unbiased resume analysis against technical rubrics, generates deep candidate competency profiles, and orchestrates automated conversational pre-screening interviews.",
        deliverables: ["Instant skill-to-role matching index", "Automated interview synthesis & grading", "Bias-free ranking against enterprise rubrics"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Hiring Decision",
        phrase: "Recruiter-led evaluation and hiring decisions.",
        detailTitle: "Informed Human-Led Decision Making",
        detailDesc: "Hiring managers receive synthesized dossiers with exact interview timestamps, verified competency metrics, and behavioral insights—enabling fast, high-confidence hiring decisions.",
        deliverables: ["Verified candidate evaluation dossier", "Collaborative interview panel calibration", "Accelerated time-to-offer velocity"]
      }
    ]
  },
  "safesign-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Contract Dispatch",
        phrase: "Draft agreements circulated via email and PDF attachments.",
        detailTitle: "Manual Redlining & Fragmented Document Circulation",
        detailDesc: "Drafting contracts, NDA renewals, and procurement agreements currently relies on back-and-forth email chains, manual version tracking, and slow multi-stakeholder approval queues.",
        deliverables: ["Unstructured agreement variations", "Manual clause verification cycles", "Risk of unapproved deviations"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Analysis & Sealing",
        phrase: "Automated clause risk analysis and tamper-proofing.",
        detailTitle: "Autonomous Contract Inspection & Cryptographic Sealing",
        detailDesc: "eSigniva inspects every clause against corporate legal playbooks, flags non-standard commitments in milliseconds, and applies tamper-evident cryptographic digital signatures.",
        deliverables: ["Automated deviation detection", "eIDAS & ESIGN compliance check", "Tamper-evident cryptographic ledger"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Authorized Execution",
        phrase: "Executive sign-off, closing, and immutable audit logs.",
        detailTitle: "Executive Execution & Governance Ingestion",
        detailDesc: "Authorized signatories execute binding agreements in one click, while contracts and comprehensive audit trails are automatically deposited into enterprise document archives.",
        deliverables: ["Instant multi-party signature execution", "Immutable forensic audit certificate", "Automatic ERP/CRM contract repository sync"]
      }
    ]
  },
  "esigniva": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Contract Dispatch",
        phrase: "Draft agreements circulated via email and PDF attachments.",
        detailTitle: "Manual Redlining & Fragmented Document Circulation",
        detailDesc: "Drafting contracts, NDA renewals, and procurement agreements currently relies on back-and-forth email chains, manual version tracking, and slow multi-stakeholder approval queues.",
        deliverables: ["Unstructured agreement variations", "Manual clause verification cycles", "Risk of unapproved deviations"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Analysis & Sealing",
        phrase: "Automated clause risk analysis and tamper-proofing.",
        detailTitle: "Autonomous Contract Inspection & Cryptographic Sealing",
        detailDesc: "eSigniva inspects every clause against corporate legal playbooks, flags non-standard commitments in milliseconds, and applies tamper-evident cryptographic digital signatures.",
        deliverables: ["Automated deviation detection", "eIDAS & ESIGN compliance check", "Tamper-evident cryptographic ledger"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Authorized Execution",
        phrase: "Executive sign-off, closing, and immutable audit logs.",
        detailTitle: "Executive Execution & Governance Ingestion",
        detailDesc: "Authorized signatories execute binding agreements in one click, while contracts and comprehensive audit trails are automatically deposited into enterprise document archives.",
        deliverables: ["Instant multi-party signature execution", "Immutable forensic audit certificate", "Automatic ERP/CRM contract repository sync"]
      }
    ]
  },
  "devops-copilot": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Incident Triage",
        phrase: "Engineers parse raw CI/CD failures and cloud telemetry.",
        detailTitle: "Manual Pipeline Debugging & Alert Fatigue",
        detailDesc: "When production pipelines fail or infrastructure alerts trigger, engineers spend valuable hours combing through megabytes of raw logs across microservices to isolate the failure point.",
        deliverables: ["Scattered Kubernetes & CI/CD logs", "Extended Mean Time to Detect (MTTD)", "On-call engineering cognitive strain"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Telemetry Correlation",
        phrase: "Multi-agent root cause analysis and IaC generation.",
        detailTitle: "Autonomous Root-Cause Isolation & Fix Generation",
        detailDesc: "DevOps Copilot correlates telemetry, pinpoints configuration drift or code breakage, and synthesizes tested Infrastructure-as-Code (IaC) or patch pull requests automatically.",
        deliverables: ["Root-cause diagnosis within seconds", "Automated Terraform/YAML remediation PR", "Pre-validated test suite verification"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Production Release",
        phrase: "Engineer PR review, verified merge, and auto-rollback.",
        detailTitle: "Safe Platform Deployment & Zero-Downtime Rollback",
        detailDesc: "Platform leads review the verified remediation plan, approve the automated merge with full human oversight, and monitor automated self-healing rollouts.",
        deliverables: ["Single-click verified fix deployment", "Automated canary health validation", "Significant reduction in enterprise MTTR"]
      }
    ]
  },
  "humanex-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Siloed HR Records",
        phrase: "Fragmented reviews, annual surveys, and delayed notices.",
        detailTitle: "Retrospective HR Analytics & Unpredicted Churn",
        detailDesc: "Organizations typically rely on lagging exit interviews and annual performance reviews, remaining blind to emergent employee burnout and critical organizational skill gaps.",
        deliverables: ["Delayed employee sentiment feedback", "Reactive talent departure handling", "Incomplete workforce capability visibility"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Predictive Analytics",
        phrase: "Predictive flight risk modeling and skill graph mapping.",
        detailTitle: "Continuous Talent Health & Dynamic Skill Mapping",
        detailDesc: "Humanex AI continuously aggregates workforce data, maps organizational knowledge graphs, and flags early retention risks with granular attribution factors.",
        deliverables: ["Early flight-risk probability scoring", "Real-time enterprise skill-gap matrix", "Benchmarked compensation parity insights"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Retention & Mobility",
        phrase: "Targeted leadership interventions and internal paths.",
        detailTitle: "Proactive Retention Plans & Strategic Succession",
        detailDesc: "People leaders deploy proactive retention packages, tailor personalized upskilling pathways, and identify internal succession candidates before talent gaps disrupt delivery.",
        deliverables: ["Proactive retention intervention plans", "Personalized employee growth roadmaps", "Optimized internal mobility & succession"]
      }
    ]
  },
  "knowledge-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Dispersed Silos",
        phrase: "Knowledge trapped in wikis, Notion, Jira, and Drive.",
        detailTitle: "Information Retrieval Bottlenecks Across Silos",
        detailDesc: "Employees waste up to 20% of their working hours searching through fragmented SharePoint sites, Slack channels, and code repositories for accurate company documentation.",
        deliverables: ["Outdated and duplicated documentation", "Hours lost in manual knowledge searches", "Inconsistent customer and technical responses"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Neural RAG Indexing",
        phrase: "Grounded semantic search and contextual answers.",
        detailTitle: "Zero-Latency Hybrid Vector Search & Verification",
        detailDesc: "Knowledge AI indexes all enterprise silos into an encrypted vector database, executing semantic search with continuous role-based access control (RBAC) and source citation.",
        deliverables: ["Sub-second grounded question answering", "Every claim linked to verified source documents", "Strict IAM role and document permission filtering"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Informed Execution",
        phrase: "Rapid employee execution with verified source citations.",
        detailTitle: "Decisive Knowledge Application & Workflow Velocity",
        detailDesc: "Teams solve customer inquiries, onboard new hires in record time, and make accurate technical decisions backed by enterprise-verified company truth.",
        deliverables: ["Immediate task resolution across teams", "Dramatic reduction in internal support tickets", "Single unified enterprise truth repository"]
      }
    ]
  },
  "document-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Manual Data Entry",
        phrase: "Teams manually retype PDF forms and scan receipts.",
        detailTitle: "Labor-Intensive Document Processing & High Error Rates",
        detailDesc: "Accounts payable, legal, and operations teams spend endless hours manually transcribing fields from vendor invoices, shipping manifests, and scanned forms into core business systems.",
        deliverables: ["Repetitive manual data transcription", "High typographical error and dispute rates", "Document processing backlogs during peak cycles"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Zero-Template OCR",
        phrase: "Multi-modal extraction, table parsing, and verification.",
        detailTitle: "Zero-Template Multimodal Vision & Entity Extraction",
        detailDesc: "Document AI reads any complex layout—including skewed scans, nested tables, and handwritten signatures—extracting structured JSON fields with confidence scores.",
        deliverables: ["Instant 99.4% field extraction accuracy", "Complex multi-page table reconstruction", "Automated business rule & math validation"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "ERP Ledger Ingestion",
        phrase: "Direct system synchronization with human-in-the-loop audit.",
        detailTitle: "Straight-Through Processing & Automated ERP Posting",
        detailDesc: "Validated records flow automatically into SAP, Oracle, or NetSuite, while low-confidence edge cases are routed to a human reviewer with highlighted visual diffs.",
        deliverables: ["Zero-touch straight-through ledger posting", "Real-time human-in-the-loop exception queue", "Auditable visual bounding box verification"]
      }
    ]
  },
  "sales-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Cold Prospecting",
        phrase: "Reps manually research accounts and guess buyer intent.",
        detailTitle: "Unstructured Outreach & Low Prospect Conversion",
        detailDesc: "B2B sales teams spend excessive hours manually researching LinkedIn profiles and company filings, resulting in generic cold outreach and wasted sales cycles on low-intent accounts.",
        deliverables: ["Generic, unpersonalized email templates", "Disorganized lead qualification scoring", "Low reply rates and drawn-out sales cycles"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Intent Scoring",
        phrase: "Predictive qualification and contextual message drafting.",
        detailTitle: "Predictive Buyer Intent & Hyper-Personalized Dossiers",
        detailDesc: "Sales AI correlates buying signals, predicts conversion probability, and generates hyper-personalized outreach strategies tailored to each prospect's pain points.",
        deliverables: ["Predictive pipeline prioritization index", "Hyper-targeted value proposition drafting", "Real-time deal risk and momentum indicators"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Deal Acceleration",
        phrase: "High-conviction executive meetings and closed revenue.",
        detailTitle: "Informed Sales Execution & Accelerated Closing",
        detailDesc: "Account executives enter meetings with AI-generated objection handling playbooks, competitive battle cards, and next-best-action guidance to maximize win rates.",
        deliverables: ["Live deal whisper coaching during calls", "Accelerated pipeline progression velocity", "Higher average contract value and win rates"]
      }
    ]
  },
  "support-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Ticket Queueing",
        phrase: "Customers wait in long queues for repetitive tier-1 issues.",
        detailTitle: "Support Backlogs & Prolonged First-Response Delays",
        detailDesc: "Support teams struggle with incoming ticket spikes, routing simple password resets, order lookups, and routine questions through the same queue as critical escalations.",
        deliverables: ["Lengthy customer wait and hold times", "Repetitive ticket burden on human agents", "Elevated support representative burnout"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Autonomous Resolution",
        phrase: "Instant contextual resolution and intelligent routing.",
        detailTitle: "Sub-Second Conversational Triage & Auto-Resolution",
        detailDesc: "Support AI connects directly into backend APIs to autonomously resolve routine customer inquiries in real time, while understanding emotional sentiment and context.",
        deliverables: ["Sub-second first-response resolution", "Automated API action execution (refunds, status)", "Sentiment-driven intelligent tier routing"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Specialist Escalation",
        phrase: "Complex cases handed to specialists with full summaries.",
        detailTitle: "Seamless Human-in-the-Loop Escalation",
        detailDesc: "Complex edge cases transfer to human specialists with a structured 3-line case summary, sentiment history, and recommended next steps—eliminating customer repetition.",
        deliverables: ["Zero-repetition customer handoffs", "Pre-populated agent response drafts", "Substantially elevated CSAT and retention"]
      }
    ]
  },
  "finance-ai": {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Manual Matching",
        phrase: "Spreadsheets reconciled at month-end across bank feeds.",
        detailTitle: "Delayed Financial Closes & Manual Reconciliation",
        detailDesc: "Finance teams struggle with month-end closes due to disparate bank statements, unallocated invoices, and manual spreadsheet lookups spanning multiple global entities.",
        deliverables: ["Extended 10-15 day month-end closing cycles", "Manual transaction reconciliation errors", "Delayed visibility into real-time corporate cash"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Continuous Audit",
        phrase: "Real-time ledger reconciliation and anomaly detection.",
        detailTitle: "Continuous Neural Ledger Matching & Anomaly Scoring",
        detailDesc: "Finance AI reconciles accounts continuously in the background, matching 98%+ of transactions automatically and flagging duplicates or compliance variances instantly.",
        deliverables: ["Continuous real-time ledger matching", "Algorithmic anomaly & fraud detection", "Dynamic daily cash flow forecasts"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "CFO Sign-Off",
        phrase: "One-day month close with verified regulatory audit trails.",
        detailTitle: "Accelerated Financial Close & Strategic Capital Deployment",
        detailDesc: "Finance executives review pre-reconciled ledgers, verify automated adjustments with full audit logs, and close monthly books in hours instead of weeks.",
        deliverables: ["Same-day month-end financial closes", "Audit-ready regulatory documentation", "Data-backed capital allocation decisions"]
      }
    ]
  }
};

/**
 * Reusable Enterprise Workflow Section Component
 * Description removed as explicitly requested.
 */
function DesignedAroundWorkflowSection({ slug, productName }) {
  const [activeStage, setActiveStage] = useState(1);

  const config = PRODUCT_WORKFLOWS[slug] || {
    stages: [
      {
        num: "01",
        stageName: "Existing Process",
        title: "Raw Information Ingestion",
        phrase: `Incoming operational data and unstructured tasks for ${productName}.`,
        detailTitle: `Legacy Information Ingestion & Manual Friction`,
        detailDesc: `Unstructured inputs and disparate legacy files slow down day-to-day team execution, requiring heavy manual coordination and repetitive validation before action can be taken.`,
        deliverables: ["Dispersed input channels and unstructured formats", "High cognitive friction and manual touchpoints", "Extended processing delays across operations"]
      },
      {
        num: "02",
        stageName: "AI-Assisted Workflow",
        title: "Intelligent Processing",
        phrase: `Cognitive synthesis, verification, and autonomous agentic workflows.`,
        detailTitle: `Continuous AI-Driven Processing & Analysis`,
        detailDesc: `${productName} processes inputs in real time against strict enterprise parameters, generating structured summaries, validated outputs, and actionable next steps.`,
        deliverables: ["Sub-second automated evaluation and parsing", "Strict enterprise compliance and validation rules", "Continuous machine-augmented quality checks"]
      },
      {
        num: "03",
        stageName: "Business Action",
        title: "Decisive Execution",
        phrase: `Human-led review, executive authorization, and verified business outcomes.`,
        detailTitle: `Executive Authorization & Accelerated Business Value`,
        detailDesc: `Cross-functional enterprise leaders review clean outputs, authorize strategic actions with one click, and seamlessly synchronize validated results with downstream systems.`,
        deliverables: ["Verified executive decision dossier", "Streamlined cross-team handoffs", "Measurable velocity and audit-ready governance"]
      }
    ]
  };

  const activeData = config.stages[activeStage] || config.stages[1];

  return (
    <section 
      style={{ 
        padding: "90px 24px 100px 24px", 
        backgroundColor: "#050507", 
        borderTop: `1px solid ${TYPO.colors.borderSubtle}`,
        borderBottom: `1px solid ${TYPO.colors.borderSubtle}` 
      }}
      aria-label="Enterprise Workflow Section"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Section Header: Description removed per user instruction */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: TYPO.colors.brandAccent, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            ENTERPRISE WORKFLOW
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)", fontWeight: 700, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.025em", margin: 0 }}>
            Designed Around Your Workflow
          </h2>
        </div>

        {/* 3-Stage Connected Stepper */}
        <div style={{ position: "relative", marginBottom: "36px" }}>
          
          <div 
            className="hidden md:block"
            style={{ 
              position: "absolute", 
              top: "36px", 
              left: "15%", 
              right: "15%", 
              height: "1px", 
              backgroundColor: "rgba(255, 255, 255, 0.12)", 
              zIndex: 1 
            }} 
          />

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "24px",
              position: "relative",
              zIndex: 2
            }}
            role="tablist"
            aria-label="Workflow Stages"
          >
            {config.stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const isAiStage = idx === 1;

              return (
                <div
                  key={idx}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isSelected}
                  onClick={() => setActiveStage(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStage(idx);
                    }
                  }}
                  style={{
                    backgroundColor: isSelected 
                      ? (isAiStage ? "rgba(225, 29, 72, 0.08)" : "rgba(255, 255, 255, 0.04)") 
                      : "#0A0A0C",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: isSelected 
                      ? TYPO.colors.brandAccent 
                      : (isAiStage ? "rgba(225, 29, 72, 0.35)" : "rgba(255, 255, 255, 0.08)"),
                    borderRadius: "18px",
                    padding: "28px 24px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    outline: "none"
                  }}
                  className="workflow-stage-card"
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span 
                        style={{ 
                          fontSize: "12.5px", 
                          fontWeight: 600, 
                          color: isSelected || isAiStage ? TYPO.colors.brandAccent : "rgba(255, 255, 255, 0.60)", 
                          letterSpacing: "0.08em" 
                        }}
                      >
                        {stage.num}
                      </span>
                      <span 
                        style={{ 
                          fontSize: "11px", 
                          fontWeight: 600, 
                          color: isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.60)", 
                          textTransform: "uppercase", 
                          letterSpacing: "0.08em" 
                        }}
                      >
                        {stage.stageName}
                      </span>
                    </div>

                    {isAiStage && (
                      <span 
                        style={{ 
                          fontSize: "10.5px", 
                          fontWeight: 600, 
                          padding: "2px 8px", 
                          borderRadius: "999px", 
                          backgroundColor: "rgba(225, 29, 72, 0.15)", 
                          color: TYPO.colors.brandAccent, 
                          borderWidth: "1px", 
                          borderStyle: "solid", 
                          borderColor: "rgba(225, 29, 72, 0.3)" 
                        }}
                      >
                        AI ENGINE
                      </span>
                    )}
                  </div>

                  <h3 
                    style={{ 
                      fontSize: "1.15rem", 
                      fontWeight: 600, 
                      color: "#FFFFFF", 
                      margin: "0 0 8px 0",
                      letterSpacing: "-0.01em" 
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p 
                    style={{ 
                      fontSize: "13.5px", 
                      color: isSelected ? "rgba(255, 255, 255, 0.80)" : "rgba(255, 255, 255, 0.65)", 
                      lineHeight: 1.55, 
                      margin: 0 
                    }}
                  >
                    {stage.phrase}
                  </p>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeStageIndicator" 
                      style={{ 
                        position: "absolute", 
                        bottom: "-1px", 
                        left: "24px", 
                        right: "24px", 
                        height: "2px", 
                        backgroundColor: TYPO.colors.brandAccent, 
                        borderRadius: "2px" 
                      }} 
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Explanation Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              backgroundColor: "#08080B",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "36px 32px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)"
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "36px", alignItems: "center" }} className="workflow-detail-grid">
              
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: 600, color: TYPO.colors.brandAccent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    STAGE {activeData.num} DETAILS • {activeData.stageName}
                  </span>
                </div>

                <h4 style={{ fontSize: "clamp(1.35rem, 2vw, 1.55rem)", fontWeight: 600, color: "#FFFFFF", margin: "0 0 14px 0", letterSpacing: "-0.02em" }}>
                  {activeData.detailTitle}
                </h4>

                <p style={{ fontSize: "14.5px", color: "rgba(255, 255, 255, 0.70)", lineHeight: 1.65, margin: 0, maxWidth: "620px" }}>
                  {activeData.detailDesc}
                </p>
              </div>

              <div 
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.02)", 
                  borderWidth: "1px", 
                  borderStyle: "solid", 
                  borderColor: "rgba(255, 255, 255, 0.06)", 
                  borderRadius: "14px", 
                  padding: "24px" 
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                  Stage Characteristics & Outputs
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeData.deliverables.map((item, dIdx) => (
                    <div key={dIdx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} color={TYPO.colors.brandAccent} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "13.5px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        <style>{`
          .workflow-stage-card:hover {
            border-color: rgba(225, 29, 72, 0.4) !important;
            transform: translateY(-2px);
          }
          @media (max-width: 860px) {
            .workflow-detail-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
}

export default function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract slug robustly from URL path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const slugFromPath = pathSegments[pathSegments.length - 1] || "";
  const productSlug = params.productId || slugFromPath || "aihire";
  const data = getProductData(productSlug);

  const [activeTab, setActiveTab] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState(0);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab(0);
    setSelectedPersona(0);
  }, [location.pathname]);

  if (!data) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#000000", color: "#FFFFFF", fontFamily: FONT, padding: "24px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Product Not Found</h2>
        <p style={{ color: "rgba(255, 255, 255, 0.70)", marginBottom: "24px" }}>The requested product intelligence suite does not exist.</p>
        <button
          onClick={() => navigate("/products/overview")}
          style={{ padding: "12px 24px", backgroundColor: "#E11D48", color: "#FFFFFF", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: 600 }}
        >
          View All Products
        </button>
      </div>
    );
  }

  const activeFeature = (data.features && data.features[activeTab]) ? data.features[activeTab] : (data.features?.[0] || null);
  const currentPersona = (data.interactiveDemo?.personas && data.interactiveDemo.personas[selectedPersona]) ? data.interactiveDemo.personas[selectedPersona] : (data.interactiveDemo?.personas?.[0] || null);

  const metricsList = data.metrics || data.stats || [];

  const cleanProductName = (name, slug) => {
    if (!name) return "AI Product";
    if (name.toUpperCase() === "AIHIRE") return "AI Hire";
    if (name.toLowerCase() === "esigniva" || slug === "safesign-ai") return "SafeSign AI";
    return name;
  };

  const displayProductName = cleanProductName(data.name, productSlug);

  // Shorten hero description to 1 clean concise line
  const rawDesc = data.hero?.description || data.description || "";
  const heroDescription = rawDesc.includes(". ") ? rawDesc.split(". ")[0] + "." : rawDesc;

  return (
    <div style={{ backgroundColor: "#000000", color: "#FFFFFF", fontFamily: FONT, overflowX: "hidden" }}>
      
      {/* ==================================================================== */}
      {/* 1. CINEMATIC PRODUCT HERO (Restored with background & styling)       */}
      {/* ==================================================================== */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "140px",
          paddingBottom: "90px"
        }}
      >
        {/* Parallax Background with Ambient Vignette Overlay */}
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          {data.hero?.bgImage && (
            <img
              src={data.hero.bgImage}
              alt={data.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }}
            />
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 30%, rgba(225,29,72,0.18) 0%, rgba(0,0,0,0.85) 65%, #000000 100%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, #000000 100%)"
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "left",
            maxWidth: "1280px",
            width: "100%",
            padding: "0 24px",
            opacity: opacityText
          }}
        >
          {/* Plain Minimal Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600, marginBottom: "24px" }}>
            <span
              style={{ cursor: "pointer", transition: "color 0.2s ease" }}
              className="hover:text-white"
              onClick={() => navigate("/products/overview")}
            >
              AI Products
            </span>
            <span>/</span>
            <span style={{ color: "#E11D48" }}>
              {displayProductName}
            </span>
          </div>

          {/* Clean Plain Authority H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              fontWeight: 600,
              margin: "0 0 24px 0",
              letterSpacing: "-0.02em",
              color: "#FFFFFF"
            }}
          >
            {displayProductName}
          </motion.h1>

          {/* Short 1-Line Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1.05rem, 1.25vw, 1.15rem)",
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.6,
              margin: "0 0 34px 0",
              maxWidth: "800px"
            }}
          >
            {heroDescription}
          </motion.p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              to="/products/overview"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#E11D48",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 20px rgba(225,29,72,0.35)"
              }}
              className="product-back-btn"
            >
              <ArrowLeft size={16} /> View All Products
            </Link>

            <a
              href="https://devopstrio.co.uk/contact#contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                transition: "all 0.25s ease"
              }}
              className="product-demo-btn"
            >
              Book a Live Demo <ArrowRight size={16} />
            </a>

            <style>{`
              .product-back-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(225,29,72,0.5) !important; }
              .product-demo-btn:hover { background-color: #E2E8F0 !important; transform: translateY(-2px); }
            `}</style>
          </div>
        </motion.div>
      </section>

      {/* ==================================================================== */}
      {/* 2. METRICS BANNER — Glassmorphism Strip (Restored & Preserved)        */}
      {/* ==================================================================== */}
      {metricsList.length > 0 && (
        <section style={{ position: "relative", zIndex: 10, marginTop: "-40px", padding: "0 24px" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              background: "rgba(15,15,15,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "36px 20px",
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
              gap: "24px"
            }}
          >
            {metricsList.map((metric, i) => (
              <div
                key={i}
                className="metric-box"
                style={{
                  textAlign: "center",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  border: "1px solid transparent",
                  transition: "all 0.3s ease"
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 3.8vw, 3.4rem)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    marginBottom: "8px"
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "#E11D48",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    marginBottom: "4px"
                  }}
                >
                  {metric.label}
                </div>
                {metric.sub && (
                  <div style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.55)" }}>
                    {metric.sub}
                  </div>
                )}
              </div>
            ))}
            <style>{`
              .metric-box:hover {
                background: rgba(255,255,255,0.03);
                border-color: rgba(225,29,72,0.3) !important;
                transform: translateY(-4px);
              }
            `}</style>
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* 3. ENTERPRISE PLATFORM OVERVIEW (With Restored Walkthrough Button)    */}
      {/* ==================================================================== */}
      <section style={{ padding: "120px 24px 100px 24px", backgroundColor: "#000000" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "60px",
            alignItems: "center"
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ color: "#E11D48", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px" }}>
              ENTERPRISE PLATFORM OVERVIEW
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.4vw, 2.9rem)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.2, margin: "0 0 24px 0", letterSpacing: "-0.02em" }}>
              {data.overview?.heading || data.overview?.title || "Architected for Enterprise Excellence"}
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8, margin: "0 0 32px 0", whiteSpace: "pre-line" }}>
              {data.overview?.description}
            </p>
            {data.overview?.secondaryDescription && (
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8, margin: "0 0 32px 0" }}>
                {data.overview.secondaryDescription}
              </p>
            )}

            {/* Restored Request Custom Walkthrough Button */}
            <a
              href="https://devopstrio.co.uk/contact#contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#E11D48",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(225,29,72,0.3)",
                transition: "all 0.25s ease"
              }}
              className="overview-walkthrough-btn"
            >
              Request Custom Walkthrough <ArrowRight size={16} />
            </a>
            <style>{`
              .overview-walkthrough-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); }
            `}</style>
          </motion.div>

          {/* Right Column: Architectural Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "36px"
            }}
          >
            <div style={{ fontSize: "1.2rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Zap color="#E11D48" size={20} /> Core Architectural Pillars
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {data.overview?.keyPoints?.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ marginTop: "3px", color: "#E11D48", flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <span style={{ color: "rgba(255, 255, 255, 0.70)", fontSize: "14.5px", lineHeight: 1.6 }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. MODULAR CAPABILITIES — Tabbed Interactive Deep-Dive               */}
      {/* ==================================================================== */}
      {data.features?.length > 0 && (
        <section style={{ padding: "80px 24px 110px 24px", backgroundColor: "#060608" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ color: "#E11D48", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                MODULAR CAPABILITIES
              </div>
              <h2 style={{ ...TYPO.sharedH2, color: "#FFFFFF", margin: 0 }}>
                Engineered for Precision & <span style={{ color: "#E11D48" }}>Scale</span>
              </h2>
            </div>

            {/* Tab navigation buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
              {data.features.map((feat, i) => {
                const isActive = activeTab === i;
                return (
                  <button
                    key={feat.id || i}
                    onClick={() => setActiveTab(i)}
                    style={{
                      padding: "10px 22px",
                      borderRadius: "999px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: isActive ? "#E11D48" : "rgba(255,255,255,0.1)",
                      backgroundColor: isActive ? "#E11D48" : "rgba(255,255,255,0.03)",
                      color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.60)",
                      fontFamily: FONT,
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.25s ease"
                    }}
                  >
                    {feat.tabTitle || feat.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            {activeFeature && (
              <motion.div
                key={activeFeature.id || activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  background: "#0A0A0C",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                  alignItems: "center"
                }}
              >
                <div style={{ padding: "48px 40px" }}>
                  <h3 style={{ ...TYPO.featureH3, color: "#FFFFFF", margin: "0 0 14px 0" }}>
                    {activeFeature.title}
                  </h3>
                  <p style={{ ...TYPO.bodyCopy, color: "rgba(255, 255, 255, 0.70)", margin: "0 0 24px 0" }}>
                    {activeFeature.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {activeFeature.highlights?.map((h, idx) => (
                      <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E11D48" }} />
                        <span style={{ color: "#FFFFFF", fontSize: "14.5px", fontWeight: 400 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {activeFeature.image && (
                  <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                    <img
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0C 0%, rgba(10,10,12,0.2) 50%, transparent 100%)" }} />
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* 5. LIVE PRODUCT SIMULATOR (Description Removed Per Instruction)       */}
      {/* ==================================================================== */}
      {data.interactiveDemo && (
        <section style={{ padding: "90px 24px 100px 24px", backgroundColor: "#000000" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            
            {/* Header: Description removed per user instruction */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ color: "#E11D48", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                LIVE PRODUCT SIMULATOR
              </div>
              <h2 style={{ ...TYPO.sharedH2, color: "#FFFFFF", margin: 0 }}>
                {data.interactiveDemo.title}
              </h2>
            </div>

            {/* Persona Switcher Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
              {data.interactiveDemo.personas.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPersona(idx)}
                  style={{
                    padding: "12px 22px",
                    borderRadius: "12px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: selectedPersona === idx ? "#E11D48" : "rgba(255,255,255,0.1)",
                    backgroundColor: selectedPersona === idx ? "rgba(225,29,72,0.14)" : "#0A0A0C",
                    color: "#FFFFFF",
                    fontFamily: FONT,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: "14.5px", color: selectedPersona === idx ? "#E11D48" : "#FFFFFF" }}>{p.name}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.60)" }}>{p.role}</div>
                </button>
              ))}
            </div>

            {/* Simulated Candidate Dossier Card */}
            {currentPersona && (
              <motion.div
                key={selectedPersona}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                style={{
                  maxWidth: "1050px",
                  margin: "0 auto",
                  background: "linear-gradient(135deg, #0D0D10 0%, #141418 100%)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "36px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "26px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <h3 style={{ fontSize: "1.7rem", fontWeight: 600, color: "#FFFFFF", margin: 0 }}>
                        {currentPersona.name}
                      </h3>
                      <span style={{ padding: "4px 12px", backgroundColor: "rgba(34,197,94,0.15)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(34,197,94,0.3)", borderRadius: "999px", color: "#22C55E", fontSize: "12px", fontWeight: 600 }}>
                        {currentPersona.matchGrade}
                      </span>
                    </div>
                    <div style={{ color: "rgba(255, 255, 255, 0.60)", fontSize: "14.5px", marginTop: "4px" }}>
                      {currentPersona.role} • {currentPersona.experience}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "2.4rem", fontWeight: 600, color: "#E11D48", lineHeight: 1 }}>
                      {currentPersona.matchScore}%
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.60)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      AI Match Index
                    </div>
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "18px 22px", marginBottom: "26px", color: "rgba(255, 255, 255, 0.70)", fontSize: "14.5px", lineHeight: 1.6 }}>
                  <strong style={{ color: "#FFFFFF", display: "block", marginBottom: "4px", fontWeight: 600 }}>Cognitive Interview Synthesis:</strong>
                  {currentPersona.summary}
                </div>

                {/* Skill Bars */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginBottom: "26px" }}>
                  {currentPersona.competencies.map((comp, idx) => (
                    <div key={idx} style={{ background: "#08080A", padding: "14px 16px", borderRadius: "10px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.05)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>
                        <span>{comp.skill}</span>
                        <span style={{ color: "#E11D48" }}>{comp.score}%</span>
                      </div>
                      <div style={{ width: "100%", height: "5px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{ width: `${comp.score}%`, height: "100%", backgroundColor: "#E11D48", borderRadius: "999px" }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Insight footer */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255, 255, 255, 0.65)", fontSize: "14px" }}>
                    <span>{currentPersona.aiInsight}</span>
                  </div>
                  <a
                    href="https://devopstrio.co.uk/contact#contact-form"
                    style={{
                      padding: "9px 18px",
                      backgroundColor: "#E11D48",
                      color: "#FFFFFF",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "13.5px",
                      fontWeight: 600
                    }}
                  >
                    Deploy in Production →
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* 6. ENTERPRISE WORKFLOW (Description Removed Per Instruction)         */}
      {/* ==================================================================== */}
      <DesignedAroundWorkflowSection slug={productSlug} productName={data.name} />

      {/* ==================================================================== */}
      {/* 7. ENTERPRISE INTEGRATIONS & SECURITY                                */}
      {/* ==================================================================== */}
      {(data.integrations?.length > 0 || data.security?.length > 0) && (
        <section style={{ padding: "100px 24px", backgroundColor: "#000000" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "60px" }}>
            {/* Integrations */}
            {data.integrations?.length > 0 && (
              <div>
                <div style={{ color: "#E11D48", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                  ECOSYSTEM SYNC
                </div>
                <h2 style={{ ...TYPO.sharedH2, color: "#FFFFFF", margin: "0 0 24px 0" }}>
                  Native Enterprise Connectors
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {data.integrations.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#0A0A0C",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        padding: "16px",
                        transition: "border-color 0.2s ease"
                      }}
                    >
                      <div style={{ fontWeight: 600, fontSize: "14.5px", color: "#FFFFFF", marginBottom: "4px" }}>{item.name}</div>
                      <div style={{ fontSize: "12px", color: "#E11D48", fontWeight: 500 }}>{item.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security & Compliance */}
            {data.security?.length > 0 && (
              <div>
                <div style={{ color: "#E11D48", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                  GOVERNANCE & TRUST
                </div>
                <h2 style={{ ...TYPO.sharedH2, color: "#FFFFFF", margin: "0 0 24px 0" }}>
                  Enterprise Security Standards
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {data.security.map((sec, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#0A0A0C",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        padding: "18px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px"
                      }}
                    >
                      <div style={{ width: "38px", height: "38px", borderRadius: "8px", backgroundColor: "rgba(225,29,72,0.12)", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(225,29,72,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E11D48", flexShrink: 0 }}>
                        <Shield size={18} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "15px", color: "#FFFFFF" }}>{sec.label}</div>
                        <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.65)", marginTop: "2px" }}>{sec.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* 8. CASE STUDY SPOTLIGHT (CUSTOMER SUCCESS)                            */}
      {/* ==================================================================== */}
      {data.caseStudy && (
        <section style={{ padding: "90px 24px 110px 24px", backgroundColor: "#060608" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              background: "#0A0A0C",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              alignItems: "center"
            }}
            className="case-study-split-grid"
          >
            <div style={{ padding: "48px 42px" }}>
              <div style={{ color: "#E11D48", fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                CUSTOMER SUCCESS SPOTLIGHT • {data.caseStudy.client}
              </div>
              <h3 style={{ ...TYPO.caseStudyH3, color: "#FFFFFF", margin: "0 0 18px 0" }}>
                "{data.caseStudy.headline}"
              </h3>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255, 255, 255, 0.70)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 24px 0" }}>
                "{data.caseStudy.quote}"
              </p>
              <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "14.5px" }}>
                {data.caseStudy.author}, <span style={{ color: "rgba(255, 255, 255, 0.60)", fontWeight: 400 }}>{data.caseStudy.company}</span>
              </div>

              {/* Verified Metrics Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "16px", marginTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                {data.caseStudy.results?.map((res, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: "1.65rem", fontWeight: 600, color: "#E11D48", lineHeight: 1 }}>{res.stat}</div>
                    <div style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.60)", marginTop: "4px" }}>{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {data.caseStudy.image && (
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "380px" }}>
                <img
                  src={data.caseStudy.image}
                  alt={data.caseStudy.client}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A0A0C 0%, rgba(10,10,12,0.1) 40%, transparent 100%)" }} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 8.5 FAQ SECTION */}
      <FAQ
        faqs={getProductFaqs(data?.id, data?.name)}
        badge="PRODUCT TECHNICAL FAQ"
        title={`${data?.name || "Product"}:`}
        highlight="Key Technical Clarifications"
      />

      {/* ==================================================================== */}
      {/* 9. UNIVERSAL REPRESENTATIVE CTA                                      */}
      {/* ==================================================================== */}
      <RepresentativeCTA
        title="Ready to Deploy"
        highlightText={data.name + " in Your Enterprise?"}
        description={"Connect with our solution architects to schedule a custom proof-of-concept and see " + data.name + " in action with your enterprise data."}
        primaryBtnText="Request Enterprise Demo"
        primaryBtnHref="https://devopstrio.co.uk/contact#contact-form"
        secondaryBtnText="Explore Documentation"
        secondaryBtnHref="https://devopstrio.co.uk/contact#contact-form"
      />

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 960px) {
          .case-study-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
