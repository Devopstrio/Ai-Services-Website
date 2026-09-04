import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';
const ACCENT = "#E11D48";
const COLORS = {
  bg: "#030303",
  cardBg: "#0A0A0A",
  white: "#FFFFFF",
  whiteDim: "rgba(255, 255, 255, 0.9)",
  whiteFaint: "rgba(255, 255, 255, 0.12)",
  accentDim: "rgba(225, 29, 72, 0.35)",
  border: "rgba(39, 39, 42, 0.8)",
};

/* ---------------------------------------------------------------------- */
/*  Data                                                                   */
/* ---------------------------------------------------------------------- */

const STORIES = [
  {
    title: "Meet Devopstrio Atlas",
    description:
      "Meet Atlas, the expert agent that helps healthcare leaders unlock AI value across clinical operations. Don't automate alone.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/ai-mountain-01.jpg",
    href: "/atlas",
  },
  {
    title: "Devopstrio Unveils AI-First Value Framework for Healthcare",
    description:
      "Uniquely positioned to capture the growing healthcare AI services opportunity, valued at over $60 billion.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-unveils-ai-first-value-framework.jpg",
    href: "/unveils",
  },
  {
    title: "Compliance Automation Reaches 500+ Hospital Systems",
    description:
      "Our autonomous compliance auditor now protects over 500 hospital systems, cutting audit prep time from weeks to days.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-top-3-it-services-brand-globally2026.jpg",
    href: "/comp",
  },
  {
    title: "New Agent Marketplace Launches for Clinical Teams",
    description:
      "Deploy pre-built agents for patient intake, care coordination, and revenue cycle automation in minutes, not months.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-championsevolve.jpg",
    href: "/launch",
  },
  {
    title: "Real-Time Interoperability Across 40+ Facilities",
    description:
      "Devopstrio connects disparate clinical systems for a growing care network, enabling secure, real-time data exchange.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-accelerate-enterprise-adoption-generative-ai.jpg",
    href: "/clinical",
  },
  {
    title: "99.99% Uptime for Patient-Facing Platforms",
    description:
      "Our observability suite keeps mission-critical healthcare infrastructure online around the clock, every day of the year.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-collaboration-accelerate-ai-value-journey.jpg",
    href: "/patient",
  },
];

/* ---------------------------------------------------------------------- */
/*  Slide variants                                                       */
/* ---------------------------------------------------------------------- */

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -50 : 50 }),
};

/* ---------------------------------------------------------------------- */
/*  Section                                                               */
/* ---------------------------------------------------------------------- */

export default function TopStories() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const total = STORIES.length;

  const goTo = (newIndex, dir) => {
    const wrapped = (newIndex + total) % total;
    setIndex([wrapped, dir]);
  };
  
  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  const story = STORIES[index];
  const peekStory = STORIES[(index + 1) % total];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: COLORS.bg,
        fontFamily: FONT,
        padding: "90px 32px 100px",
        overflow: "hidden",
        marginTop: "-70px",
        marginLeft: "1%",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: COLORS.whiteDim,
            }}
          >
            TOP STORIES
          </motion.span>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <motion.button
              onClick={prev}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                border: `1px solid ${COLORS.whiteFaint}`,
                backgroundColor: "transparent",
                color: COLORS.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Previous story"
            >
              <ArrowLeft size={16} strokeWidth={2.25} />
            </motion.button>

            <span style={{ fontSize: "15px", fontWeight: 600, color: COLORS.white }}>
              {index + 1} <span style={{ color: COLORS.whiteDim }}>/ {total}</span>
            </span>

            <motion.button
              onClick={next}
              whileHover={{ 
                scale: 1.06, 
                boxShadow: `0 0 18px ${COLORS.accentDim}`,
                backgroundColor: ACCENT,
              }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                border: `1px solid ${ACCENT}`,
                backgroundColor: "rgba(225,29,72,0.15)",
                color: COLORS.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Next story"
            >
              <ArrowRight size={16} strokeWidth={2.25} />
            </motion.button>
          </div>
        </div>

        {/* Card row: main card + peek card */}
        <div style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
          {/* Main card */}
          <div style={{ 
            position: "relative", 
            flex: "1 1 auto", 
            overflow: "hidden", 
            borderRadius: "20px",
            minHeight: "280px",
          }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.3fr",
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.whiteFaint}`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  minHeight: "280px",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: "200px" }}>
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "18px",
                    padding: "40px 44px",
                  }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{
                      margin: 0,
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: COLORS.white,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {story.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.16 }}
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: COLORS.whiteDim,
                    }}
                  >
                    {story.description}
                  </motion.p>

                  <motion.a
                    href={story.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.22 }}
                    whileHover={{ gap: "10px" }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14.5px",
                      fontWeight: 600,
                      color: COLORS.white,
                      textDecoration: "underline",
                      textDecorationColor: ACCENT,
                      textUnderlineOffset: "5px",
                      width: "fit-content",
                      transition: "gap 0.2s ease",
                    }}
                  >
                    Read More
                    <ArrowUpRight size={14} strokeWidth={2.25} />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Peek card — partial next-image preview */}
          <motion.div
            onClick={next}
            whileHover={{ 
              borderColor: ACCENT,
              scale: 1.02,
            }}
            transition={{ duration: 0.2 }}
            style={{
              position: "relative",
              width: "160px",
              flexShrink: 0,
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              border: `1px solid ${COLORS.whiteFaint}`,
              minHeight: "280px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={peekStory.image}
                src={peekStory.image}
                alt={peekStory.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </AnimatePresence>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                color: COLORS.white,
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "center",
                opacity: 0.8,
              }}
            >
              Next Story
              <br />
              <span style={{ fontSize: "11px", opacity: 0.6, fontWeight: 400 }}>
                {peekStory.title.substring(0, 30)}...
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {STORIES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to story ${i + 1}`}
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: i === index ? ACCENT : COLORS.whiteFaint,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ts-peek { display: none; }
        }
        @media (max-width: 768px) {
          .ts-main-card {
            grid-template-columns: 1fr !important;
          }
          .ts-main-card > div:first-child {
            min-height: 180px;
          }
          .ts-main-card > div:last-child {
            padding: 24px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}