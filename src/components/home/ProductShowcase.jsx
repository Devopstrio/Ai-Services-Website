import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ProductsShowcase.jsx — DevOpsTRIO
 * Lightweight scrollspy showcase (IntersectionObserver, no scroll-loop math)
 * Left list underline fills when a product becomes active, right side swaps
 * text + image. Black theme, #E11D48 accent, white text, inline CSS only.
 * Font: Geist
 */

const FONT = '"Geist", sans-serif';

const PRODUCTS = [
  {
    label: "CareSuite",
    industry: "Healthcare",
    title: "AI-Powered Patient Care Platform",
    description:
      "CareSuite gives care teams a single, AI-assisted view of every patient — faster triage, cleaner records, better outcomes.",
    cta: "Explore CareSuite",
    img: "https://picsum.photos/seed/caresuite-ai/900/700",
  },
  {
    label: "Campix",
    industry: "Education",
    title: "AI Campus & School Management",
    description:
      "Campix automates admissions, attendance, and academic tracking so schools spend less time on paperwork and more on students.",
    cta: "Explore Campix",
    img: "https://picsum.photos/seed/campix-ai/900/700",
  },
  {
    label: "Prestivo",
    industry: "Ecommerce",
    title: "AI-Driven Commerce Engine",
    description:
      "Prestivo personalizes storefronts, predicts demand, and automates fulfillment — built to grow with every product line.",
    cta: "Explore Prestivo",
    img: "https://picsum.photos/seed/prestivo-ai/900/700",
  },
  {
    label: "eSigniva",
    industry: "Document Signature",
    title: "Enterprise-Grade E-Signatures",
    description:
      "eSigniva combines legally binding e-signatures with AI-based document verification, so every signed file is authentic and audit-ready.",
    cta: "Explore eSigniva",
    img: "https://picsum.photos/seed/safesign-ai/900/700",
  },
  {
    label: "Humanex",
    industry: "Recruitment",
    title: "AI Hiring & Talent Platform",
    description:
      "Humanex screens, ranks, and shortlists candidates with AI — cutting time-to-hire while keeping every decision explainable.",
    cta: "Explore Humanex",
    img: "https://picsum.photos/seed/humanex-ai/900/700",
  },
  {
    label: "Homela",
    industry: "Housing",
    title: "AI-Matched Rental & Housing",
    description:
      "Homela matches tenants to homes using AI on budget, commute, and lifestyle fit — making the search faster for everyone involved.",
    cta: "Explore Homela",
    img: "https://picsum.photos/seed/homela-ai/900/700",
  },
  {
    label: "Brio",
    industry: "Influencer Marketing",
    title: "AI Creator & Brand Matching",
    description:
      "Brio pairs brands with the right creators using AI-driven audience and performance signals — no more guesswork campaigns.",
    cta: "Explore Brio",
    img: "https://picsum.photos/seed/brio-ai/900/700",
  },
  {
    label: "Justivon",
    industry: "Legal & Court",
    title: "AI Legal Case Management",
    description:
      "Justivon organizes case files, tracks filings, and surfaces precedent with AI — built for solicitors and court workflows.",
    cta: "Explore Justivon",
    img: "https://picsum.photos/seed/justivon-ai/900/700",
  },
];

const STEP_VH = 60;

const styles = {
  section: {
    position: "relative",
    width: "100%",
    backgroundColor: "#000000",
    fontFamily: FONT,
  },
  sticky: {
    position: "sticky",
    top: 0,
    height: "100vh",
    display: "flex",
    overflow: "hidden",
  },
  bgGlow: {
    position: "absolute",
    top: "-10%",
    right: "-10%",
    width: "560px",
    height: "560px",
    background:
      "radial-gradient(circle, rgba(225,29,72,0.10) 0%, rgba(225,29,72,0) 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  markerCol: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "1px",
    height: "100%",
    zIndex: -1,
  },
  marker: {
    position: "absolute",
    left: 0,
    width: "1px",
    height: "1px",
  },

  left: {
    position: "relative",
    zIndex: 1,
    width: "34%",
    minWidth: "300px",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 5%",
    boxSizing: "border-box",
  },
  listItem: {
    position: "relative",
    padding: "16px 0",
    cursor: "pointer",
  },
  listLabelRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "10px",
  },
  listLabel: {
    fontFamily: FONT,
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    transition: "color 0.3s ease",
  },
  listIndustry: {
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.3)",
    whiteSpace: "nowrap",
  },
  listTrack: {
    position: "relative",
    marginTop: "14px",
    height: "1.5px",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.10)",
    overflow: "hidden",
  },
  listFill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#E11D48",
  },

  right: {
    position: "relative",
    zIndex: 1,
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "48px",
    padding: "0 5%",
    boxSizing: "border-box",
  },
  textCol: {
    flex: 1,
    minWidth: 0,
  },
  eyebrow: {
    display: "inline-block",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#E11D48",
    marginBottom: "16px",
  },
  title: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  description: {
    fontFamily: FONT,
    marginTop: "20px",
    color: "rgba(255,255,255,0.6)",
    fontSize: "16px",
    lineHeight: 1.7,
    maxWidth: "460px",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "32px",
    padding: "15px 28px",
    borderRadius: "10px",
    backgroundColor: "#E11D48",
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    width: "fit-content",
  },

  imageCol: {
    width: "38%",
    maxWidth: "420px",
    flexShrink: 0,
  },
  imageCard: {
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden",
    height: "360px",
    border: "1px solid rgba(255,255,255,0.10)",
    backgroundColor: "#0a0a0a",
  },
  imageEl: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)",
  },
  imageTag: {
    position: "absolute",
    top: "16px",
    left: "16px",
    padding: "7px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(255,255,255,0.94)",
    color: "#0a0a0a",
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 600,
  },

  progressCount: {
    position: "absolute",
    bottom: "36px",
    left: "5%",
    fontFamily: FONT,
    fontSize: "13px",
    color: "rgba(255,255,255,0.35)",
    fontWeight: 500,
    letterSpacing: "0.04em",
  },
};

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductsShowcase() {
  const sectionRef = useRef(null);
  const markerRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillKey, setFillKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
            setFillKey((k) => k + 1);
          }
        });
      },
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
    );

    markerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (i) => {
    const el = markerRefs.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const active = PRODUCTS[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{ ...styles.section, height: `${PRODUCTS.length * STEP_VH}vh` }}
    >
      {/* invisible scrollspy markers, one per product step */}
      <div style={styles.markerCol}>
        {PRODUCTS.map((_, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => (markerRefs.current[i] = el)}
            style={{ ...styles.marker, top: `${(i / PRODUCTS.length) * 100}%` }}
          />
        ))}
      </div>

      <div style={styles.sticky}>
        <div style={styles.bgGlow} />

        {/* LEFT — product list */}
        <div style={styles.left}>
          {PRODUCTS.map((p, i) => {
            const isActive = i === activeIndex;
            const isDone = i < activeIndex;
            return (
              <div
                key={p.label}
                style={styles.listItem}
                onClick={() => jumpTo(i)}
              >
                <div style={styles.listLabelRow}>
                  <span
                    style={{
                      ...styles.listLabel,
                      color: isActive
                        ? "#FFFFFF"
                        : isDone
                        ? "rgba(255,255,255,0.5)"
                        : "rgba(255,255,255,0.28)",
                    }}
                  >
                    {p.label}
                  </span>
                  {isActive && (
                    <span style={styles.listIndustry}>{p.industry}</span>
                  )}
                </div>
                <div style={styles.listTrack}>
                  {isActive ? (
                    <motion.div
                      key={fillKey}
                      style={styles.listFill}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.6, ease: "linear" }}
                    />
                  ) : (
                    <div
                      style={{
                        ...styles.listFill,
                        width: isDone ? "100%" : "0%",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — active product content + image */}
        <div style={styles.right}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              style={styles.textCol}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={styles.eyebrow}>{active.industry}</span>
              <h2 style={styles.title}>{active.title}</h2>
              <p style={styles.description}>{active.description}</p>
              <motion.button
                style={styles.ctaBtn}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 26px rgba(225, 29, 72, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {active.cta}
                <ArrowIcon />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <div style={styles.imageCol}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeIndex}`}
                style={styles.imageCard}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={active.img} alt={active.label} style={styles.imageEl} />
                <div style={styles.imageOverlay} />
                <span style={styles.imageTag}>{active.label}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div style={styles.progressCount}>
          {String(activeIndex + 1).padStart(2, "0")} — 08 Products
        </div>
      </div>
    </section>
  );
}