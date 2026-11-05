import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import int1 from "../../assets/fresh/integration-event-driven.webp";
import int2 from "../../assets/fresh/integration-legacy-cloud.webp";
import int3 from "../../assets/fresh/integration-enterprise-saas.webp";
import strategyImg from "../../assets/fresh/integration-flow-automation.webp";
import archImg from "../../assets/fresh/integration-zero-trust.webp";
import deliveryImg from "../../assets/fresh/integration-streaming-etl.webp";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CARDS = [
  {
    badge: "API GATEWAYS",
    title: "Event-Driven Microservices",
    body: "Unify fragmented ERP, CRM, and cloud services with ultra-low latency event mesh integrations and guaranteed delivery.",
    route: "/integrations/custom-integration",
    linkText: "Explore Event Mesh",
    image: int1
  },
  {
    badge: "HYBRID CONNECT",
    title: "Legacy-to-Cloud Middleware",
    body: "Connect mainframe and on-prem data silos with modern AI models without expensive and disruptive system rewrites.",
    route: "/integrations/cloud-platforms",
    linkText: "Explore Hybrid Cloud",
    image: int2
  },
  {
    badge: "ECOSYSTEM",
    title: "Enterprise SaaS Mesh",
    body: "Pre-built connectors for Salesforce, ServiceNow, SAP, Workday, and Microsoft 365 environments with automated OAuth.",
    route: "/integrations/enterprise-applications",
    linkText: "Explore SaaS Mesh",
    image: int3
  },
  {
    badge: "ARCHITECTURE",
    title: "Zero-Trust API Security",
    body: "Enforce strict mTLS, API rate limiting, and continuous identity verification across every distributed network hop.",
    route: "/integrations/identity-authentication",
    linkText: "Explore Security",
    image: archImg
  },
  {
    badge: "ORCHESTRATION",
    title: "Workflow Automation Fabric",
    body: "Orchestrate multi-step transactional workflows spanning dozens of heterogeneous systems with idempotent rollbacks.",
    route: "/integrations/crm-platforms",
    linkText: "Explore Workflows",
    image: strategyImg
  },
  {
    badge: "DATA PIPELINES",
    title: "Streaming ETL & Sync",
    body: "Sub-second streaming pipelines that transform, cleanse, and ingest petabytes of enterprise data for live AI retrieval.",
    route: "/integrations/databases",
    linkText: "Explore Data Pipelines",
    image: deliveryImg
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "96px 24px",
    background: "#020203",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
  headerWrap: {
    marginBottom: "44px",
    textAlign: "left",
  },
  eyebrow: {
    color: "#E11D48",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.85rem, 3vw, 2.4rem)",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    margin: 0,
    lineHeight: 1.25,
  },
  headingAccent: {
    color: "#E11D48",
    fontWeight: 600,
  },

  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "24px",
    alignItems: "stretch",
  },

  card: {
    position: "relative",
    borderRadius: "14px",
    backgroundColor: "#0A0A0C",
    border: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "border-color 0.25s ease, transform 0.25s ease",
    boxSizing: "border-box",
    isolation: "isolate",
    transform: "translate3d(0, 0, 0)",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },

  imageWrap: {
    position: "relative",
    width: "100%",
    height: "210px",
    minHeight: "210px",
    maxHeight: "210px",
    overflow: "hidden",
    flexShrink: 0,
    backgroundColor: "#0A0A0C",
    marginBottom: "-2px",
    transform: "translate3d(0, 0, 0)",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,12,0.85) 85%, #0A0A0C 100%)",
    pointerEvents: "none",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "4px 10px",
    borderRadius: "6px",
    backgroundColor: "rgba(10, 10, 12, 0.85)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#E11D48",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    zIndex: 2,
  },
  textBlock: {
    padding: "24px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    backgroundColor: "#0A0A0C",
    position: "relative",
    zIndex: 1,
  },
  contentTop: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#FFFFFF",
    margin: "0 0 10px 0",
    letterSpacing: "-0.015em",
    lineHeight: 1.35,
    minHeight: "54px",
    display: "flex",
    alignItems: "flex-start",
  },
  body: {
    fontFamily: FONT,
    fontSize: "14px",
    color: "rgba(255,255,255,0.68)",
    lineHeight: 1.6,
    margin: 0,
    minHeight: "68px",
    fontWeight: 400,
  },
  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "16px",
    marginTop: "16px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  linkText: {
    color: "#FFFFFF",
    fontSize: "13px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    letterSpacing: "0.01em",
    transition: "color 0.2s ease, transform 0.2s ease",
  },
  linkIconWrap: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.06)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#E11D48",
    transition: "background-color 0.2s ease, transform 0.2s ease",
  }
};

export default function IntegrationCards() {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerWrap}>
          <span style={styles.eyebrow}>SYSTEM CONNECTIVITY</span>
          <motion.h2
            style={styles.heading}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Connecting Systems with <span style={styles.headingAccent}>Speed and Precision</span>
          </motion.h2>
        </div>

        <div style={styles.grid} className="integration-cards-responsive-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              onClick={() => navigate(card.route)}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -2,
                borderColor: "rgba(255,255,255,0.22)"
              }}
              className="integration-overview-card group"
            >
              <div style={styles.imageWrap}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={styles.img}
                  className="card-thumbnail"
                />
                <div style={styles.imgOverlay} />
                <div style={styles.badge}>{card.badge}</div>
              </div>

              <div style={styles.textBlock}>
                <div style={styles.contentTop}>
                  <h3 style={styles.title}>
                    {card.title}
                  </h3>
                  <p style={styles.body}>
                    {card.body}
                  </p>
                </div>

                <div style={styles.footerRow}>
                  <span style={styles.linkText} className="card-link-text">
                    {card.linkText}
                  </span>
                  <span style={styles.linkIconWrap} className="card-link-icon">
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .integration-overview-card {
          isolation: isolate;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .integration-overview-card:hover .card-thumbnail {
          transform: scale(1.02);
        }
        .integration-overview-card:hover .card-link-text {
          color: #E11D48 !important;
        }
        .integration-overview-card:hover .card-link-icon {
          background-color: rgba(225,29,72,0.18) !important;
          transform: translateX(3px);
        }
        @media (max-width: 1024px) {
          .integration-cards-responsive-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 680px) {
          .integration-cards-responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
