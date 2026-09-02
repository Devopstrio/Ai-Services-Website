import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

/* ---------------------------------------------------------------------- */
/*  Design tokens                                                         */
/* ---------------------------------------------------------------------- */

const COLORS = {
  bg: "#000000",
  panelBg: "#0B0B0B",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.62)",
  whiteFaint: "rgba(255,255,255,0.14)",
  accent: "#E11D48",
  accentDim: "rgba(225,29,72,0.35)",
};

const FONT = '"Geist", sans-serif';

/* ---------------------------------------------------------------------- */
/*  Data                                                                   */
/* ---------------------------------------------------------------------- */

const STORIES = [
  {
    tag: "Success Story",
    title: "Automation of Clinical Data Onboarding",
    description:
      "The client is a leading regional hospital network. DevOpsTRIO helped automate the onboarding of multiple EHR data pipelines, cutting manual review time significantly.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/compensation-plan-management-mob.jpg",
    href: "#",
  },
  {
    tag: "Success Story",
    title: "Compliance Auditing at Scale",
    description:
      "A multi-state payer group partnered with DevOpsTRIO to build an autonomous compliance auditor, reducing audit prep time from weeks to days.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/asset-management-services-mob.jpg",
    href: "#",
  },
  {
    tag: "Case Study",
    title: "Cutting Release Cycles by 68%",
    description:
      "A national hospital system adopted DevOpsTRIO's Agent Platform to modernize legacy pipelines, shipping releases nearly 3x faster with full audit trails.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/l2-banner/admission-service-providers.jpg",
    href: "#",
  },
  {
    tag: "Success Story",
    title: "Real-Time Patient Data Interoperability",
    description:
      "DevOpsTRIO connected disparate clinical systems for a growing care network, enabling real-time data exchange across 40+ facilities.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/digital-banking-services.jpg",
    href: "#",
  },
  {
    tag: "Case Study",
    title: "24/7 Monitoring for Critical Infrastructure",
    description:
      "A healthcare SaaS provider deployed DevOpsTRIO's observability suite to achieve 99.99% uptime across their patient-facing platforms.",
    image:
      "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/market-leader.jpg",
    href: "#",
  },
];

/* ---------------------------------------------------------------------- */
/*  Slide variants for the sliding animation                             */
/* ---------------------------------------------------------------------- */

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
  }),
};

/* ---------------------------------------------------------------------- */
/*  Section                                                               */
/* ---------------------------------------------------------------------- */

export default function ClientSuccessStories() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const total = STORIES.length;

  const goTo = (newIndex, dir) => {
    const wrapped = (newIndex + total) % total;
    setIndex([wrapped, dir]);
  };

  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  const story = STORIES[index];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: COLORS.bg,
        fontFamily: FONT,
        padding: "100px 24px 120px",
        overflow: "hidden",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 38px)",
                fontWeight: 700,
                color: COLORS.white,
                letterSpacing: "-0.02em",
                textAlign: "left",
                fontFamily: FONT,
              }}
            >
              Client Success <span style={{ color: COLORS.accent }}>Stories</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ margin: "10px 0 16px", fontSize: "16px", color: COLORS.whiteDim }}
            >
              Learn from our clients how we've been empowering their healthcare teams
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14.5px",
                fontWeight: 600,
                color: COLORS.white,
                textDecoration: "underline",
                textDecorationColor: COLORS.accent,
                textUnderlineOffset: "5px",
              }}
            >
              View More
              <ArrowUpRight size={15} strokeWidth={2.25} />
            </motion.a>
          </div>

          {/* Nav controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <motion.button
              onClick={prev}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                border: `1px solid ${COLORS.whiteFaint}`,
                backgroundColor: "transparent",
                color: COLORS.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Previous story"
            >
              <ArrowLeft size={18} strokeWidth={2.25} />
            </motion.button>

            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: COLORS.whiteDim,
                minWidth: "40px",
                textAlign: "center",
              }}
            >
              {index + 1} / {total}
            </span>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${COLORS.accentDim}` }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: COLORS.accent,
                color: COLORS.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Next story"
            >
              <ArrowRight size={18} strokeWidth={2.25} />
            </motion.button>
          </div>
        </div>

        {/* Card stack with layered peek cards */}
        <div style={{ position: "relative" }}>
          {/* Layer 3 — furthest back */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.45, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              position: "absolute",
              top: "48px",
              left: "-56px",
              right: "56px",
              bottom: "-48px",
              borderRadius: "22px",
              backgroundColor: "#3a1420",
              border: `1px solid ${COLORS.whiteFaint}`,
              zIndex: 0,
            }}
          />
          {/* Layer 2 — middle */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              position: "absolute",
              top: "24px",
              left: "-28px",
              right: "28px",
              bottom: "-24px",
              borderRadius: "22px",
              backgroundColor: "#1a0a0e",
              border: `1px solid ${COLORS.whiteFaint}`,
              zIndex: 0,
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr",
                borderRadius: "22px",
                overflow: "hidden",
                border: `1px solid ${COLORS.whiteFaint}`,
                backgroundColor: COLORS.panelBg,
                minHeight: "560px",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <motion.img
                  src={story.image}
                  alt={story.title}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0) 60%, rgba(11,11,11,0.5) 100%)",
                  }}
                />
              </div>

              {/* Content panel */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "44px 44px",
                }}
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{
                      display: "inline-flex",
                      padding: "7px 16px",
                      borderRadius: "8px",
                      backgroundColor: COLORS.accent,
                      color: COLORS.white,
                      fontSize: "12.5px",
                      fontWeight: 700,
                      marginBottom: "24px",
                    }}
                  >
                    {story.tag}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    style={{
                      margin: "0 0 20px",
                      fontSize: "clamp(26px, 2.6vw, 34px)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      color: COLORS.white,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {story.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    style={{
                      margin: 0,
                      fontSize: "15.5px",
                      lineHeight: 1.7,
                      color: COLORS.whiteDim,
                    }}
                  >
                    {story.description}
                  </motion.p>
                </div>

                <motion.a
                  href={story.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.28 }}
                  whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${COLORS.accentDim}` }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "13px 24px",
                    borderRadius: "10px",
                    backgroundColor: "#151515",
                    border: `1px solid ${COLORS.whiteFaint}`,
                    color: COLORS.white,
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                >
                  Know More
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {STORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to story ${i + 1}`}
              style={{
                width: i === index ? "22px" : "8px",
                height: "8px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: i === index ? COLORS.accent : COLORS.whiteFaint,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}