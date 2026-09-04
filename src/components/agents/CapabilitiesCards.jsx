import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CARDS = [
  {
    badge: "AI STRATEGY",
    title: "AI from Strategy to Execution",
    body: "We don't just build models; we align AI investments directly with business outcomes.",
    more: "Our experts work with your stakeholders to identify high-value use cases, define clear ROI metrics, and map the full journey from proof-of-concept to production.",
    color1: "#E11D48",
    color2: "#9f1239"
  },
  {
    badge: "ARCHITECTURE",
    title: "Enterprise-Ready AI Platforms",
    body: "Scalable, resilient architectures designed specifically for modern AI and data workloads.",
    more: "We build secure foundational platforms utilizing the latest cloud-native technologies, ensuring your AI infrastructure can handle petabyte-scale data and massive inference demands without breaking.",
    color1: "#be123c",
    color2: "#881337"
  },
  {
    badge: "DELIVERY",
    title: "End-to-End AI Delivery",
    body: "From data engineering to model training, deployment, and ongoing MLOps.",
    more: "One integrated team owns discovery through production support — no handoffs, no lost context, and a continuous feedback loop that keeps models accurate as data drifts.",
    color1: "#9f1239",
    color2: "#4c0519"
  },
  {
    badge: "GOVERNANCE",
    title: "Responsible AI by Design",
    body: "Governance, explainability, and responsible AI principles embedded from the start.",
    more: "Every model ships with audit trails, bias checks, and human-in-the-loop review points built in, not bolted on. Scale AI securely while protecting your brand and customer trust.",
    color1: "#881337",
    color2: "#000000"
  },
  {
    badge: "PARTNERSHIPS",
    title: "Ecosystem Integration",
    body: "Together with major cloud hyperscalers, we design and deliver cutting-edge AI solutions.",
    more: "Our deep engineering expertise across leading LLM providers and cloud platforms means we can select the absolute best-in-class components for your specific use case.",
    color1: "#E11D48",
    color2: "#4c0519"
  },
  {
    badge: "SECURITY",
    title: "Secure & Compliant AI",
    body: "Enterprise-grade security architectures built in from day one, so every pipeline stays audit-ready.",
    more: "Encryption, role-based access control, and continuous compliance monitoring are default settings. We ensure your proprietary data never leaks into public models.",
    color1: "#be123c",
    color2: "#000000"
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
    gap: "22px",
  },

  card: {
    position: "relative",
    borderRadius: "18px",
    backgroundColor: "#0c0c0c",
    border: "1px solid rgba(255,255,255,0.10)",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },

  imageWrap: {
    position: "relative",
    overflow: "hidden",
    margin: "10px",
    borderRadius: "12px",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.55) 100%)",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "8px 16px",
    borderRadius: "999px",
    backgroundColor: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(4px)",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
  },
  textBlock: {
    padding: "24px 26px 30px",
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

export default function CapabilitiesCards() {
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
        Powering AI with <span style={styles.headingAccent}>Expertise and Trust</span>
      </motion.h2>

      <div style={styles.grid}>
        {CARDS.map((card, i) => {
          const isOpen = openCardIndex === i;

          return (
            <motion.div
              key={card.title}
              onClick={() => toggleCard(i)}
              style={styles.card}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                borderColor: "rgba(225,29,72,0.3)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <motion.div
                    style={styles.imageWrap}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "260px", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{
                      width: "100%", height: "100%",
                      background: `linear-gradient(135deg, ${card.color1} 0%, ${card.color2} 100%)`,
                      opacity: 0.8
                    }}>
                      <div style={{
                        width: "100%", height: "100%",
                        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                        backgroundSize: "20px 20px"
                      }} />
                    </div>
                    <div style={styles.imgOverlay} />
                    <div style={styles.badge}>{card.badge}</div>
                  </motion.div>
                )}
              </AnimatePresence>

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
