import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Network, Sparkles, Layers, Box, Bot, Building2, FlaskConical, Cpu, ShieldCheck } from "lucide-react";
import FAQ from "../ui/FAQ";
import RepresentativeCTA from "../ui/RepresentativeCTA";

const SITEMAP_SECTIONS = [
  {
    title: "AI Capabilities",
    badge: "ENGINEERING FOUNDATIONS",
    icon: Sparkles,
    overviewLink: "/capabilities/overview",
    overviewText: "All Capabilities Overview",
    links: [
      { name: "Generative AI Engineering", path: "/capabilities/generative-ai", desc: "Fine-tuned LLMs, private inference, prompt architectures & embeddings" },
      { name: "Autonomous Agents", path: "/capabilities/ai-agents", desc: "Goal-directed multi-agent orchestration, MCP runtime & memory" },
      { name: "Machine Learning Solutions", path: "/capabilities/machine-learning", desc: "Predictive analytics, custom PyTorch architectures & MLOps pipelines" },
      { name: "Computer Vision Systems", path: "/capabilities/computer-vision", desc: "Edge inference, YOLOv9 object detection, defect inspection & spatial AI" },
      { name: "Natural Language Processing", path: "/capabilities/nlp", desc: "Contract parsing, semantic embeddings, sentiment extraction & translation" },
      { name: "Data Lakehouse & Intelligence", path: "/capabilities/data-intelligence", desc: "Apache Iceberg, Databricks Lakehouse, vector stores & real-time ETL" },
      { name: "AI Infrastructure & LLMOps", path: "/capabilities/ai-infra", desc: "vLLM, TensorRT-LLM, Ray clusters, GPU cluster autoscaling & cost guardrails" },
      { name: "Responsible AI & Governance", path: "/capabilities/responsible-ai", desc: "EU AI Act compliance, bias auditing, red-teaming & model cards" }
    ]
  },
  {
    title: "Enterprise Solutions",
    badge: "BUSINESS IMPACT DOMAINS",
    icon: Layers,
    overviewLink: "/solutions/overview",
    overviewText: "All Solutions Overview",
    links: [
      { name: "HR AI & Workforce Analytics", path: "/solutions/hr-ai", desc: "Automated talent sourcing, candidate ranking & attrition prediction" },
      { name: "DevOps & Infrastructure AI", path: "/solutions/devops-ai", desc: "Autonomous root-cause analysis, self-healing deployments & pipeline AI" },
      { name: "Cybersecurity AI & Threat Defense", path: "/solutions/cybersecurity-ai", desc: "Real-time SIEM anomaly detection, Zero-Day mitigation & autonomous SOAR" },
      { name: "Document Intelligence & OCR", path: "/solutions/document-intelligence", desc: "Zero-shot table extraction, multimodal OCR & automated invoice matching" },
      { name: "Banking & Financial Services AI", path: "/solutions/banking-financial-services", desc: "Algorithmic fraud scoring, AML transaction analysis & credit risk models" },
      { name: "Healthcare & Clinical AI", path: "/solutions/healthcare-ai", desc: "HIPAA-compliant medical record indexing & clinical pathway predictions" },
      { name: "Contact Center & Conversational AI", path: "/solutions/contact-center-ai", desc: "Omnichannel voice agents, sentiment-adaptive routing & real-time agent copilot" },
      { name: "Workflow Automation & RPA", path: "/solutions/workflow-automation", desc: "End-to-end agentic workflow automation across enterprise ERP systems" }
    ]
  },
  {
    title: "AI Products",
    badge: "PROPRIETARY PLATFORMS",
    icon: Box,
    overviewLink: "/products/overview",
    overviewText: "All Products Overview",
    links: [
      { name: "Document AI Platform", path: "/products/document-ai", desc: "Multimodal document understanding, verification & OCR pipeline engine" },
      { name: "DevOps Copilot", path: "/products/devops-copilot", desc: "Autonomous CI/CD failure triaging, manifest generator & telemetry analyzer" },
      { name: "SafeSign AI", path: "/products/safesign-ai", desc: "Cryptographic contract verification, legal risk scanner & compliance sealing" },
      { name: "AI Hire Engine", path: "/products/aihire", desc: "Unbiased technical screening, asynchronous interviews & candidate evaluation" },
      { name: "HumanEx AI", path: "/products/humanex-ai", desc: "Employee lifecycle engagement, performance synthesis & internal mobility" },
      { name: "AI Studio", path: "/products/ai-studio", desc: "No-code model fine-tuning, benchmark evaluation & LLM sandbox environment" },
      { name: "Assistant AI", path: "/products/assistant-ai", desc: "Enterprise cognitive knowledge assistant connected to private data lakes" }
    ]
  },
  {
    title: "Autonomous AI Agents",
    badge: "MULTI-AGENT SWARMS",
    icon: Bot,
    overviewLink: "/agents/overview",
    overviewText: "All Agents Overview",
    links: [
      { name: "Cloud Operations Agent", path: "/agents/cloud-operations-agent", desc: "Autonomous multi-cloud cost optimization, FinOps auditing & cluster health" },
      { name: "DevOps Orchestration Agent", path: "/agents/devops-agent", desc: "Zero-touch release management, branch synchronization & rollback controller" },
      { name: "Security Operations Agent", path: "/agents/security-operations-agent", desc: "24/7 autonomous SOC tier-1 incident triaging & quarantine execution" },
      { name: "Executive Assistant Agent", path: "/agents/executive-assistant", desc: "Context-aware schedule orchestration, brief generation & follow-up tracking" },
      { name: "Finance & Ledger Agent", path: "/agents/finance-agent", desc: "Continuous ledger reconciliation, anomaly alerts & cash-flow forecasting" },
      { name: "Procurement Agent", path: "/agents/procurement-agent", desc: "Vendor RFP scoring, SLA adherence tracking & dynamic purchase negotiation" },
      { name: "HR Operations Agent", path: "/agents/hr-agent", desc: "Zero-touch employee onboarding, compliance tracking & policy assistant" }
    ]
  },
  {
    title: "Industry Verticals",
    badge: "SECTOR ARCHITECTURES",
    icon: Building2,
    overviewLink: "/industries/overview",
    overviewText: "All Industries Overview",
    links: [
      { name: "Banking & Financial Services", path: "/industries/banking-financial-services", desc: "Real-time fraud engines, regulatory compliance & algorithmic wealth tools" },
      { name: "Healthcare & Life Sciences", path: "/industries/healthcare-life-sciences", desc: "HIPAA-ready clinical data analysis, imaging diagnostics & triage support" },
      { name: "Insurance", path: "/industries/insurance", desc: "Automated claims adjudication, dynamic risk pricing & catastrophe modeling" },
      { name: "Retail & E-Commerce", path: "/industries/retail-ecommerce", desc: "Hyper-personalized product recommendations, dynamic pricing & basket AI" },
      { name: "Manufacturing & Industry 4.0", path: "/industries/manufacturing", desc: "Predictive maintenance sensors, vision inspection & digital twin modeling" },
      { name: "Logistics & Supply Chain", path: "/industries/logistics-supply-chain", desc: "Autonomous dispatch routing, demand surge prediction & fleet analytics" },
      { name: "Telecommunications & 5G", path: "/industries/telecommunications", desc: "Self-optimizing radio networks, subscriber churn models & billing AI" },
      { name: "Energy, Oil & Utilities", path: "/industries/energy-utilities", desc: "Smart grid load balancing, renewable dispatch forecasting & leak detection" },
      { name: "Government & Public Sector", path: "/industries/government-public-sector", desc: "Digital citizen service portals, policy impact modeling & civic records" },
      { name: "Education & EdTech", path: "/industries/education", desc: "Adaptive learning pathways, automated assessment & student retention AI" },
      { name: "Real Estate & PropTech", path: "/industries/real-estate", desc: "Automated valuation models (AVM), spatial analytics & asset intelligence" },
      { name: "Automotive & Mobility", path: "/industries/automotive", desc: "Connected vehicle telemetry, ADAS validation & assembly line robotics" },
      { name: "Hospitality & Travel", path: "/industries/hospitality-travel", desc: "Revenue yield management, guest personalization & autonomous booking" }
    ]
  },
  {
    title: "Innovation & Integrations",
    badge: "R&D & CONNECTIVITY",
    icon: FlaskConical,
    overviewLink: "/innovation/overview",
    overviewText: "Innovation Overview",
    links: [
      { name: "Innovation Lab Overview", path: "/innovation/overview", desc: "Cutting-edge exploratory AI research, prototype incubators & open patents" },
      { name: "AI Research & Frontier Models", path: "/innovation/ai-research", desc: "Proprietary GPU speedups, synthetic data pipelines & model evaluations" },
      { name: "Open Source AI Initiatives", path: "/innovation/open-source", desc: "Community-driven model weights, fine-tuning scripts & evaluation suites" },
      { name: "Experimental Projects", path: "/innovation/experimental-projects", desc: "Next-gen multi-modal reasoning prototypes & neuromorphic computing" },
      { name: "Integrations & Connectors Hub", path: "/integrations/overview", desc: "Zero-latency connectivity into AWS, Azure, GCP, Databricks & Snowflake" },
      { name: "Multi-Cloud Platforms", path: "/integrations/cloud-platforms", desc: "Direct integrations across AWS, Azure, Google Cloud and private sovereign clouds" },
      { name: "Enterprise ERP & Legacy Connectors", path: "/integrations/erp-systems", desc: "Secure edge proxies and bi-directional connectors for SAP, Oracle & Microsoft" },
      { name: "Managed AI Services", path: "/services", desc: "24/7 dedicated AI SRE teams, custom model maintenance & infrastructure support" }
    ]
  }
];

const SITEMAP_FAQS = [
  {
    q: "What is the structural architecture of the Devopstrio AI website?",
    a: "The Devopstrio AI website is organized into core engineering layers: Capabilities (foundational AI engineering disciplines), Solutions (business domain problem-solvers), Products (deployable standalone software platforms), Agents (autonomous multi-agent swarms), Industries (sector-specialized compliance & workflows), and Innovation (open-source R&D and proprietary kernels).",
    proof: "Architecture: 6 Primary Service Pillars | 45+ Production Endpoints",
    tags: ["Site Map", "Information Architecture", "Enterprise AI"]
  },
  {
    q: "How do Devopstrio Capabilities differ from Enterprise Solutions?",
    a: "Capabilities represent our core technical proficiencies—such as Generative AI, Computer Vision, and Data Lakehouses—which serve as the building blocks. Solutions are pre-architected, industry-tested packages designed to address specific business operational pain points, such as HR AI, DevOps automation, and Cybersecurity threat hunting.",
    proof: "Modularity: 100% Composable Across Client Clouds",
    tags: ["Capabilities", "Solutions", "Modular AI"]
  },
  {
    q: "Are all AI Products available for private VPC or self-hosted on-premises deployment?",
    a: "Yes. Every product in the Devopstrio AI catalogue—including Document AI, DevOps Copilot, SafeSign AI, and AI Studio—can be deployed directly inside your private VPC (AWS, Azure, GCP) or air-gapped on-premises Kubernetes clusters with zero outbound data leakage.",
    proof: "Deployment Guarantee: Air-Gapped & Private Tenant Compatible",
    tags: ["Products", "Private VPC", "Air-Gapped"]
  },
  {
    q: "How do Autonomous Agents integrate into existing corporate infrastructure?",
    a: "Our autonomous agents utilize Model Context Protocol (MCP) servers, enterprise REST/GraphQL APIs, and Zero-Trust IAM roles. They operate within sandbox boundaries with human-in-the-loop permission gates for any sensitive database mutations or high-value transactions.",
    proof: "Safety Protocol: Human-in-the-Loop Safeguards Built-in",
    tags: ["Autonomous Agents", "MCP Runtime", "Zero-Trust"]
  },
  {
    q: "Can enterprises request bespoke AI architectures for industries not listed on the sitemap?",
    a: "Absolutely. While our primary industry verticals showcase common deployment patterns, our engineering team regularly designs custom architectures for specialized sectors such as aerospace, maritime logistics, biotech, and defense with specialized regulatory compliance guarantees.",
    proof: "Tailored Architecture: 10-Day Discovery & Prototyping Sprints",
    tags: ["Custom Architecture", "Bespoke AI", "Discovery Sprints"]
  },
  {
    q: "How frequently are the Innovation Lab prototypes and benchmarks updated?",
    a: "The Innovation Lab is updated on a monthly cadence as our internal research engineers evaluate frontier model releases, publish GPU optimization kernels like TrioKernel, and stress-test emerging open-weight architectures.",
    proof: "Release Cadence: Continuous Monthly Research Updates",
    tags: ["Innovation", "TrioKernel", "R&D Benchmarks"]
  },
  {
    q: "How do integrations connect with proprietary on-premises ERP systems?",
    a: "We deploy secure edge connectors and private API gateways that interface with SAP, Oracle EBS, Microsoft Dynamics, and custom SQL/legacy systems without requiring inbound public Internet exposure.",
    proof: "Zero Inbound Ports: Reverse Proxy & VPC Peering Architecture",
    tags: ["Integrations", "Legacy ERP", "Edge Connectors"]
  },
  {
    q: "Where can I schedule an architectural review with Devopstrio AI engineers?",
    a: "You can schedule a dedicated architecture review directly via our Contact page or by clicking any 'Contact Engineers' button. Our AI architects will evaluate your current cloud estate, data readiness, and ROI objectives.",
    proof: "Response Time: Within 24 Business Hours",
    tags: ["Architecture Review", "Advisory", "Consultation"]
  }
];

export default function SitemapPage() {
  return (
    <div className="w-full bg-[#030303] text-white min-h-screen pt-28 pb-16 font-sans">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-6">
          <Network className="w-3.5 h-3.5" />
          <span>FULL SITE ARCHITECTURE</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Complete Sitemap &{" "}
          <span className="bg-gradient-to-r from-red-500 via-rose-500 to-rose-400 bg-clip-text text-transparent">
            Platform Directory
          </span>
        </h1>
        
        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          Navigate through every capability, enterprise vertical, autonomous agent swarm, proprietary product, and managed cloud AI service engineered across the Devopstrio platform.
        </p>

        {/* Quick Jump Pills */}
        <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-zinc-900/80">
          {SITEMAP_SECTIONS.map((sec) => (
            <a
              key={sec.title}
              href={`#${sec.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-xs sm:text-sm px-3.5 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-rose-950/40 border border-zinc-800/80 hover:border-rose-500/40 text-zinc-300 hover:text-white transition-all duration-300 inline-flex items-center gap-1.5"
            >
              <span>{sec.title}</span>
              <span className="text-rose-500">↓</span>
            </a>
          ))}
        </div>
      </section>

      {/* Main Sitemap Grid Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {SITEMAP_SECTIONS.map((section) => {
          const Icon = section.icon;
          const sectionId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <section
              key={section.title}
              id={sectionId}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#080808] border border-zinc-900/80 hover:border-zinc-800 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />

              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-900">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest text-rose-500 uppercase">
                      {section.badge}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <Link
                  to={section.overviewLink}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose-400 hover:text-white px-4 py-2 rounded-lg bg-zinc-900/80 hover:bg-rose-950/40 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 self-start sm:self-auto"
                >
                  <span>{section.overviewText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Section Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group p-4 sm:p-5 rounded-xl bg-[#0d0d0d] hover:bg-zinc-900/90 border border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                        {link.desc}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-600 group-hover:text-zinc-400 mt-4 block">
                      {link.path}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Corporate, Governance & Legal Links Card */}
        <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#080808] border border-zinc-900/80">
          <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-zinc-900">
            <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/40 flex items-center justify-center text-zinc-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                GOVERNANCE & TRUST
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Corporate & Legal Policies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs sm:text-sm font-medium text-zinc-300">
            <a href="https://devopstrio.co.uk/about/company-overview" className="p-3 rounded-lg bg-[#0d0d0d] hover:bg-zinc-900 hover:text-white border border-zinc-800/40 transition-colors">
              Company Overview
            </a>
            <a href="https://devopstrio.co.uk/about/our-culture-people" className="p-3 rounded-lg bg-[#0d0d0d] hover:bg-zinc-900 hover:text-white border border-zinc-800/40 transition-colors">
              Culture & People
            </a>
            <a href="https://devopstrio.co.uk/about/global-presence" className="p-3 rounded-lg bg-[#0d0d0d] hover:bg-zinc-900 hover:text-white border border-zinc-800/40 transition-colors">
              Global Presence
            </a>
            <a href="https://devopstrio.co.uk/privacy-policy" className="p-3 rounded-lg bg-[#0d0d0d] hover:bg-zinc-900 hover:text-white border border-zinc-800/40 transition-colors">
              Privacy Policy
            </a>
            <a href="https://devopstrio.co.uk/terms-of-service" className="p-3 rounded-lg bg-[#0d0d0d] hover:bg-zinc-900 hover:text-white border border-zinc-800/40 transition-colors">
              Terms of Service
            </a>
            <a href="https://devopstrio.co.uk/gdpr" className="p-3 rounded-lg bg-[#0d0d0d] hover:bg-zinc-900 hover:text-white border border-zinc-800/40 transition-colors">
              GDPR Compliance
            </a>
          </div>
        </section>
      </div>

      {/* Standardized Minimalist FAQ Accordion */}
      <div className="mt-20">
        <FAQ
          faqs={SITEMAP_FAQS}
          badge="SITEMAP & DIRECTORY FAQ"
          title="Frequently Asked"
          highlight="Questions"
        />
      </div>

      {/* Tailored Representative CTA */}
      <RepresentativeCTA
        title="Looking for a Tailored"
        highlightText="AI Architecture Blueprint?"
        description="Connect with our principal AI architects to evaluate custom models, multi-agent frameworks, and sovereign cloud infrastructure tailored for your enterprise scale."
        primaryBtnText="SCHEDULE ARCHITECT REVIEW"
        primaryBtnHref="https://devopstrio.co.uk/contact#contact-form"
        secondaryBtnText="EXPLORE ALL SOLUTIONS"
        secondaryBtnTo="/solutions/overview"
        theme="rose"
      />
    </div>
  );
}
