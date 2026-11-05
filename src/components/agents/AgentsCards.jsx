import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import strategyImg from "../../assets/agent-references/Overview/Powering Agents/Image (AI Agent Roadmaps).webp";
import architectureImg from "../../assets/agent-references/Overview/Powering Agents/Image (Enterprise-Ready Agent Platforms).webp";
import deliveryImg from "../../assets/agent-references/Overview/Powering Agents/Image (End-to-End Agent Delivery).webp";
import governanceImg from "../../assets/agent-references/Overview/Powering Agents/Image (Responsible Autonomy by Design).webp";
import partnershipsImg from "../../assets/agent-references/Overview/Powering Agents/Image (Ecosystem Integration).webp";
import securityImg from "../../assets/agent-references/Overview/Powering Agents/Image (Secure & Compliant Agents).webp";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CARDS = [
  {
    badge: "STRATEGY",
    title: "AI Agent Roadmaps",
    body: "We don't just build agents; we design strategic orchestration plans for your entire enterprise.",
    more: "Our experts work with your stakeholders to identify high-value agent use cases, define clear ROI metrics, and map the full journey from proof-of-concept to production.",
    image: strategyImg
  },
  {
    badge: "ARCHITECTURE",
    title: "Enterprise-Ready Agent Platforms",
    body: "Scalable, resilient architectures designed specifically for multi-agent workflows.",
    more: "We build secure foundational platforms utilizing the latest cloud-native technologies, ensuring your agent infrastructure can handle massive parallel executions without breaking.",
    image: architectureImg
  },
  {
    badge: "DELIVERY",
    title: "End-to-End Agent Delivery",
    body: "From custom LLM wrappers to memory layers, orchestration, and continuous monitoring.",
    more: "One integrated team owns discovery through production support — no handoffs, no lost context, and a continuous feedback loop that keeps agents accurate as logic evolves.",
    image: deliveryImg
  },
  {
    badge: "GOVERNANCE",
    title: "Responsible Autonomy by Design",
    body: "Governance, explainability, and guardrails embedded from the start.",
    more: "Every agent ships with audit trails, hallucination checks, and human-in-the-loop review points built in, not bolted on. Scale autonomy securely while protecting your brand.",
    image: governanceImg
  },
  {
    badge: "PARTNERSHIPS",
    title: "Ecosystem Integration",
    body: "Together with major LLM providers, we design and deliver cutting-edge agent frameworks.",
    more: "Our deep engineering expertise across leading orchestration frameworks means we can select the absolute best-in-class components for your specific autonomous use case.",
    image: partnershipsImg
  },
  {
    badge: "SECURITY",
    title: "Secure & Compliant Agents",
    body: "Enterprise-grade security architectures built in from day one, so every action stays audit-ready.",
    more: "We ensure all data ingested by your agents is encrypted, access-controlled, and strictly isolated, guaranteeing that proprietary knowledge never leaks.",
    image: securityImg
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 24px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
    fontWeight: 600,
    letterSpacing: "-0.015em",
    margin: "0 0 48px 0",
    textAlign: "left",
  },
  headingAccent: { color: "#E11D48" },

  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "1fr",
    gap: "24px",
    alignItems: "stretch",
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
    height: "100%",
    transition: "all 0.35s ease",
    boxSizing: "border-box",
  },

  imageWrap: {
    position: "relative",
    width: "100%",
    height: "210px",
    minHeight: "210px",
    maxHeight: "210px",
    overflow: "hidden",
    flexShrink: 0,
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
    fontWeight: 600,
    letterSpacing: "0.05em",
    zIndex: 2,
  },
  textBlock: {
    padding: "24px 26px 28px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#FFFFFF",
    margin: "0 0 12px 0",
    letterSpacing: "-0.01em",
    lineHeight: 1.35,
    minHeight: "3.2rem",
    display: "flex",
    alignItems: "flex-start",
  },
  body: {
    fontFamily: FONT,
    fontSize: "14px",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.6,
    margin: 0,
    minHeight: "4.5rem",
    flex: 1,
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

export default function AgentsCards() {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (i) => {
    setOpenCardIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Powering Agents with <span style={styles.headingAccent}>Expertise and Trust</span>
        </motion.h2>

        <div style={styles.grid} className="agents-cards-responsive-grid">
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
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .agents-cards-responsive-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .agents-cards-responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
