import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import inno1 from "../../assets/fresh/innovation_bio_ai_lab.jpg";
import inno2 from "../../assets/fresh/innovation_quantum_chip.jpg";
import inno3 from "../../assets/fresh/quantum_cryo_computing.jpg";
import strategyImg from "../../assets/fresh/quantum_laser_optics.jpg";
import archImg from "../../assets/fresh/enterprise_innovation_hub.jpg";
import deliveryImg from "../../assets/fresh/agent_cloud_infra.jpg";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CARDS = [
  {
    badge: "RESEARCH & LAB",
    title: "Applied AI Research",
    body: "We conduct proprietary research into foundational model fine-tuning, reasoning engines, and token compression.",
    more: "Our dedicated research team explores open-source advancements, translating academic breakthroughs into resilient enterprise-grade applications.",
    image: inno1
  },
  {
    badge: "PROTOTYPING",
    title: "Rapid POC Accelerator",
    body: "Go from concept to a production-grade interactive prototype in under four weeks with our pre-built accelerators.",
    more: "We build secure foundational sandboxes utilizing our pre-integrated LLM pipelines, proving ROI and user adoption before massive capital investment.",
    image: inno2
  },
  {
    badge: "INCUBATION",
    title: "Venture AI Co-Creation",
    body: "Partner with Devopstrio to build and launch novel AI-native software products and spinouts.",
    more: "We provide dedicated technical co-founders, research engineers, and cloud infrastructure credits to accelerate zero-to-one product development.",
    image: inno3
  },
  {
    badge: "ARCHITECTURE",
    title: "Emerging Architecture Lab",
    body: "Testing next-generation neural memory structures, vector indexing models, and edge hardware deployment.",
    more: "We benchmark emerging frameworks and specialized AI silicon to ensure your long-term tech stack remains flexible and competitive.",
    image: archImg
  },
  {
    badge: "STRATEGY",
    title: "Strategic Technology Roadmaps",
    body: "Anticipate market disruptions and future-proof your digital capabilities against rapid AI shifts.",
    more: "Our leadership advises executive boards and CTOs on where to invest, what to build internally, and what to buy across the dynamic AI landscape.",
    image: strategyImg
  },
  {
    badge: "ECOSYSTEM",
    title: "Open Source Contributions",
    body: "Actively contributing to open-weights AI models, agentic frameworks, and developer tooling worldwide.",
    more: "We believe in transparent, secure innovation and publish open benchmarks and security tools to foster responsible enterprise AI adoption.",
    image: deliveryImg
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
  heading: {
    maxWidth: "1280px",
    margin: "0 auto 50px",
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.015em",
  },
  headingAccent: { color: "#E11D48" },

  grid: {
    maxWidth: "1280px",
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
  
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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

export default function InnovationCards() {
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
        Accelerating Ideas with <span style={styles.headingAccent}>Agility and Expertise</span>
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
