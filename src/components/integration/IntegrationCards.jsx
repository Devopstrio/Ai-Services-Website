import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import int1 from "../../assets/fresh/ai_circuit_mesh.jpg";
import int2 from "../../assets/fresh/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks.jpg";
import int3 from "../../assets/fresh/innovation_neural_network.jpg";
import strategyImg from "../../assets/fresh/integration_api_gateway.jpg";
import archImg from "../../assets/fresh/integration_cloud_mesh.jpg";
import deliveryImg from "../../assets/fresh/integration_event_streaming.jpg";

const FONT = '"Geist", sans-serif';

const CARDS = [
  {
    badge: "API GATEWAYS",
    title: "Event-Driven Microservices",
    body: "Unify fragmented ERP, CRM, and cloud services with ultra-low latency event mesh integrations.",
    more: "Our integration architects implement resilient Apache Kafka, RabbitMQ, and AWS EventBridge fabrics ensuring guaranteed delivery across distributed environments.",
    image: int1
  },
  {
    badge: "HYBRID CONNECT",
    title: "Legacy-to-Cloud Middleware",
    body: "Connect mainframe on-prem data silos with modern AI models without costly system rewrites.",
    more: "We build secure bi-directional CDC (Change Data Capture) pipelines that stream real-time updates directly into your AI context memory layer.",
    image: int2
  },
  {
    badge: "ECOSYSTEM",
    title: "Enterprise SaaS Mesh",
    body: "Pre-built connectors for Salesforce, ServiceNow, SAP, Workday, and Microsoft 365 ecosystems.",
    more: "Eliminate manual data syncing and API token friction with automated OAuth management, webhook listeners, and automatic schema reconciliation.",
    image: int3
  },
  {
    badge: "ARCHITECTURE",
    title: "Zero-Trust API Security",
    body: "Enforce strict mTLS, API rate limiting, and automated threat filtering on every network hop.",
    more: "Every API endpoint is protected by continuous identity validation, automated schema validation, and instant anomaly alerting.",
    image: archImg
  },
  {
    badge: "ORCHESTRATION",
    title: "Workflow Automation Fabric",
    body: "Orchestrate multi-step transactional workflows spanning dozens of heterogeneous systems.",
    more: "Built with idempotency, automated rollbacks, and human approval gates to handle critical financial and logistics transactions safely.",
    image: strategyImg
  },
  {
    badge: "DATA PIPELINES",
    title: "Streaming ETL & Sync",
    body: "Sub-second streaming pipelines that transform, cleanse, and load petabytes of enterprise data.",
    more: "Zero data loss architectures designed for continuous 24/7 uptime under massive burst traffic loads.",
    image: deliveryImg
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 5%",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  heading: {
    maxWidth: "1300px",
    margin: "0 auto 50px",
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.015em",
  },
  headingAccent: { color: "#E11D48" },

  grid: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },

  card: {
    position: "relative",
    borderRadius: "16px",
    backgroundColor: "#0c0c0c",
    border: "1px solid rgba(255,255,255,0.08)",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.35s ease",
  },

  imageWrap: {
    position: "relative",
    width: "100%",
    height: "200px",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,10,10,0.9) 100%)",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "5px 12px",
    borderRadius: "6px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    zIndex: 2,
  },
  textBlock: {
    padding: "24px 26px 28px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#FFFFFF",
    margin: "0 0 12px 0",
    letterSpacing: "-0.01em",
  },
  body: {
    fontFamily: FONT,
    fontSize: "14px",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.6,
    margin: 0,
  },
  moreText: {
    fontFamily: FONT,
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.6,
    margin: 0,
    paddingTop: "14px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    marginTop: "14px",
  },
};

export default function IntegrationCards() {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (i) => {
    setOpenCardIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Connecting Systems with <span style={styles.headingAccent}>Speed and Precision</span>
      </motion.h2>

      <div style={styles.grid}>
        {CARDS.map((card, i) => {
          const isOpen = openCardIndex === i;

          return (
            <motion.div
              key={card.title}
              onClick={() => toggleCard(i)}
              style={{
                ...styles.card,
                borderColor: isOpen ? "rgba(225,29,72,0.6)" : "rgba(255,255,255,0.08)",
                boxShadow: isOpen ? "0 14px 40px rgba(225,29,72,0.15)" : "none",
              }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                borderColor: "rgba(225,29,72,0.5)",
                boxShadow: "0 12px 35px rgba(225,29,72,0.15)",
                transform: "translateY(-4px)"
              }}
            >
              <div style={styles.imageWrap}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={styles.img}
                />
                <div style={styles.imgOverlay} />
                <div style={styles.badge}>{card.badge}</div>
              </div>

              <motion.div style={styles.textBlock} layout>
                <motion.h3 style={styles.title} layout>
                  {card.title}
                </motion.h3>
                <motion.p style={styles.body} layout>
                  {card.body}
                </motion.p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p style={styles.moreText}>{card.more}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
