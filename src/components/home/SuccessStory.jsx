import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

/* ---------------------------------------------------------------------- */
/*  Design tokens                                                         */
/* ---------------------------------------------------------------------- */

const COLORS = {
  bg: "#030303",
  panelBg: "#0A0A0A",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.62)",
  whiteFaint: "rgba(255,255,255,0.14)",
  accent: "#E11D48",
  accentDim: "rgba(225,29,72,0.35)",
  border: "rgba(39, 39, 42, 0.8)",
};

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net";
const COMPANY_ID = import.meta.env.VITE_COMPANY_ID || "DP-901265";

/* ---------------------------------------------------------------------- */
/*  Initial Fallback Data (Guarantees zero layout shift / instant render)  */
/* ---------------------------------------------------------------------- */

const FALLBACK_STORIES = [
  {
    tag: "Client Transformation",
    title: "From Compliance Gaps to Continuous Control: How Devopstrio Strengthens Microsoft 365 Security",
    description:
      "A leading enterprise healthcare network partnered with Devopstrio to build an autonomous compliance auditor and security posture engine, reducing audit prep from weeks to hours.",
    image: "/assets/services/webp/bg-cloud.webp",
    href: "https://devopstrio.co.uk/insights/client-transformations/from-compliance-gaps-to-continuous-control-how-devopstrio-strengthens-microsoft-365-security-gvfrcw",
  },
  {
    tag: "Client Transformation",
    title: "From Backup to Business Resilience: How Devopstrio Modernizes Cloud Recovery Strategies",
    description:
      "Discover how Devopstrio helps organizations modernize cloud backup and disaster recovery to improve data protection, recovery readiness, operational continuity, and cost efficiency.",
    image: "/assets/services/webp/bg-data.webp",
    href: "https://devopstrio.co.uk/insights/client-transformations/from-backup-to-business-resilience-how-devopstrio-modernizes-cloud-recovery-strategies-u97m4j",
  },
  {
    tag: "Client Transformation",
    title: "From Manual Workflows to Intelligent Operations: How Devopstrio Scales Power Platform Automation",
    description:
      "Automating complex clinical operations, EHR intake queues, and hospital scheduling pipelines with enterprise governance and intelligent agent orchestration.",
    image: "/assets/services/webp/bg-ai.webp",
    href: "https://devopstrio.co.uk/insights/client-transformations/from-manual-workflows-to-intelligent-operations-how-devopstrio-scales-power-platform-automation-t214qj",
  },
  {
    tag: "Client Transformation",
    title: "Azure Under Control: How Devopstrio Turns Complex Cloud Estates into Governed Platforms",
    description:
      "Transforming multi-subscription enterprise cloud estates into fully automated, policy-enforced platforms with automated cost guardrails and real-time observability.",
    image: "/assets/services/webp/bg-devops.webp",
    href: "https://devopstrio.co.uk/insights/client-transformations/azure-under-control-how-devopstrio-turns-complex-cloud-estates-into-governed-platforms-k3u6is",
  },
  {
    tag: "Client Transformation",
    title: "From AI Curiosity to Workplace Capability: How Devopstrio Operationalizes Microsoft 365 Copilot",
    description:
      "Enabling enterprise clinical and executive teams to deploy production-grade sovereign AI copilots with verified compliance boundaries and auditable governance.",
    image: "/assets/services/webp/bg-case-study.webp",
    href: "https://devopstrio.co.uk/insights/client-transformations/from-ai-curiosity-to-workplace-capability-how-devopstrio-operationalizes-microsoft-365-copilot-lahm3x",
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
  const [stories, setStories] = useState(FALLBACK_STORIES);
  const [[index, direction], setIndex] = useState([0, 0]);

  // Fetch live client transformations dynamically from Devopstrio Insights API
  useEffect(() => {
    let isMounted = true;
    async function loadDynamicStories() {
      try {
        const url = `${API_BASE_URL.replace(/\/+$/, "")}/api/public/${COMPANY_ID}/content?category_slug=client-transformations&limit=10`;
        const res = await fetch(url);
        if (!res.ok) return;

        const data = await res.json();
        const list = Array.isArray(data) ? data : data.items || [];

        if (list.length > 0 && isMounted) {
          const formatted = list.map((item, idx) => ({
            tag: item.category?.name || "Client Transformation",
            title: item.title,
            description:
              item.subtitle ||
              item.summary ||
              item.excerpt ||
              FALLBACK_STORIES[idx % FALLBACK_STORIES.length].description,
            image: item.cover_image_id
              ? `${API_BASE_URL.replace(/\/+$/, "")}/api/images/${item.cover_image_id}`
              : FALLBACK_STORIES[idx % FALLBACK_STORIES.length].image,
            href: `https://devopstrio.co.uk/insights/client-transformations/${item.slug}`,
          }));
          setStories(formatted);
        }
      } catch (err) {
        // Fallback silently handles offline / sandbox network restriction
        console.warn("Using offline fallback stories:", err.message);
      }
    }

    loadDynamicStories();
    return () => {
      isMounted = false;
    };
  }, []);

  const total = stories.length;

  const goTo = (newIndex, dir) => {
    const wrapped = (newIndex + total) % total;
    setIndex([wrapped, dir]);
  };

  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  const story = stories[index] || FALLBACK_STORIES[0];

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
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
                fontWeight: 600,
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
              href="https://devopstrio.co.uk/insights/client-transformations"
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
                  onError={(e) => {
                    e.currentTarget.src = "/assets/services/webp/bg-ai.webp";
                  }}
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
                      fontWeight: 600,
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
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: COLORS.white,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <a
                      href={story.href}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {story.title}
                    </a>
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
                    fontWeight: 600,
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
          {stories.map((_, i) => (
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
