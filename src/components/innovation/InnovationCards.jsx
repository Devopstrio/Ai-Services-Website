import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import inno1 from "../../assets/fresh/innovation_lab_applied_ai_research.webp";
import inno2 from "../../assets/fresh/innovation_lab_rapid_poc_accelerator.webp";
import inno3 from "../../assets/fresh/innovation_lab_venture_ai_cocreation.webp";
import archImg from "../../assets/fresh/innovation_lab_emerging_architecture.webp";
import strategyImg from "../../assets/fresh/innovation_lab_technology_roadmaps.webp";
import deliveryImg from "../../assets/fresh/innovation_lab_open_source.webp";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CARDS = [
  {
    badge: "RESEARCH LAB",
    title: "Applied AI Research",
    body: "Proprietary research into foundation model fine-tuning, reasoning engines, and mechanistic model interpretability.",
    route: "/innovation/ai-research",
    linkText: "Explore Research",
    image: inno1
  },
  {
    badge: "RAPID POC",
    title: "Rapid POC Accelerator",
    body: "Go from concept to production-grade interactive prototype in under 14 days with our pre-built enterprise sandboxes.",
    route: "/innovation/ai-prototypes",
    linkText: "Explore Prototypes",
    image: inno2
  },
  {
    badge: "CO-CREATION",
    title: "Venture AI Co-Creation",
    body: "Partner with Devopstrio to design, build, and launch novel AI-native software architectures and enterprise spinouts.",
    route: "/innovation/innovation-programs",
    linkText: "Explore Programs",
    image: inno3
  },
  {
    badge: "ARCHITECTURE",
    title: "Emerging Architecture Lab",
    body: "Benchmarking next-generation neural memory structures, optical tensor processing, and edge hardware deployment.",
    route: "/innovation/technology-exploration",
    linkText: "Explore Tech Radar",
    image: archImg
  },
  {
    badge: "STRATEGY",
    title: "Strategic Technology Roadmaps",
    body: "Anticipate platform disruptions and future-proof enterprise digital capabilities against rapidly shifting model paradigms.",
    route: "/innovation/product-roadmap",
    linkText: "View Roadmap",
    image: strategyImg
  },
  {
    badge: "OPEN SOURCE",
    title: "Open Source Contributions",
    body: "Actively contributing high-throughput inference kernels, agentic frameworks, and developer tooling to the global ecosystem.",
    route: "/innovation/open-source",
    linkText: "Explore Open Source",
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

export default function InnovationCards() {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerWrap}>
          <span style={styles.eyebrow}>INNOVATION PILLARS</span>
          <motion.h2
            style={styles.heading}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Accelerating Ideas with <span style={styles.headingAccent}>Agility and Expertise</span>
          </motion.h2>
        </div>

        <div style={styles.grid} className="innovation-cards-responsive-grid">
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
              className="innovation-overview-card group"
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
        .innovation-overview-card {
          isolation: isolate;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .innovation-overview-card:hover .card-thumbnail {
          transform: scale(1.02);
        }
        .innovation-overview-card:hover .card-link-text {
          color: #E11D48 !important;
        }
        .innovation-overview-card:hover .card-link-icon {
          background-color: rgba(225,29,72,0.18) !important;
          transform: translateX(3px);
        }
        @media (max-width: 1024px) {
          .innovation-cards-responsive-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 680px) {
          .innovation-cards-responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
