import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PoweringAI.jsx — DevOpsTRIO
 * "Powering AI with Expertise and Trust" — 3x2 card grid.
 * Card = image (badge + icon overlay) + title + description + footer tags.
 * Click a card: the image collapses/hides and the text expands upward to
 * fill the freed space, revealing extra detail. Click again to restore.
 * Black theme, #E11D48 accent, white text, inline CSS only. Font: Geist
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const CARDS = [
  {
    badge: "AI PRACTICE",
    title: "AI in Practice",
    body: "Our AI-centric practices power our own delivery and help accelerate yours.",
    more: "We run every internal pipeline on the same AI tooling we ship to clients — so what you get has already been proven under real production load.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/exploring-transformative-intersection.jpg",
    icon: "brief",
  },
  {
    badge: "USE CASES",
    title: "Industry-Proven Use Cases",
    body: "Ready-to-use AI assets, proven methodologies, and real-world experience across healthcare, insurance, and clinical operations.",
    more: "From triage automation to claims intelligence, our accelerators cut time-to-value from quarters to weeks.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/ai-awards-2025.jpg",
    icon: "chart",
  },
  {
    badge: "DELIVERY",
    title: "End-to-End AI Delivery",
    body: "From strategy and prototyping to deployment and scaling, we help you realize AI value across the full lifecycle.",
    more: "One team owns discovery through production support — no handoffs, no lost context between phases.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/24/banner/transformation-telenet-mob.jpg",
    icon: "rocket",
  },
  {
    badge: "GOVERNANCE",
    title: "Responsible AI by Design",
    body: "Governance, explainability, and responsible AI principles embedded from the start so you can scale with confidence.",
    more: "Every model ships with audit trails, bias checks, and human-in-the-loop review points built in, not bolted on.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/automation-framework.jpg",
    icon: "shield",
  },
  {
    badge: "PARTNERSHIPS",
    title: "Innovation Through Partnerships",
    body: "Together with Microsoft, Google Cloud, AWS, and NVIDIA, we design and deliver AI solutions that keep healthcare ahead.",
    more: "Direct engineering access to hyperscaler roadmaps means your infrastructure never falls behind the platform.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/banner-images/extreme-automation-rpa-bots-mob.jpg",
    icon: "handshake",
  },
  {
    badge: "SECURITY",
    title: "Secure & Compliant AI",
    body: "HIPAA and SOC 2-aligned architectures built in from day one, so every model and pipeline stays audit-ready.",
    more: "Encryption, access control, and continuous compliance monitoring are default settings, not optional add-ons.",
    img: "https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/insights-quality-engineering.jpg",
    icon: "lock",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "110px 5%",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },

  card: {
    backgroundColor: "#0A0A0A",
    borderRadius: "24px",
    border: "1px solid rgba(39, 39, 42, 0.8)",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
  },

  imageWrap: {
    position: "relative",
    overflow: "hidden",
    margin: "12px",
    borderRadius: "16px",
  },
  cardImg: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.75) 100%)",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "6px 14px",
    borderRadius: "999px",
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(244, 63, 94, 0.25)",
    color: "#F43F5E",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
  },
  iconCircle: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textWrap: {
    padding: "22px 24px 24px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontFamily: FONT,
    fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)",
    fontWeight: 700,
    color: "#FFFFFF",
    margin: 0,
    marginBottom: "10px",
  },
  body: {
    fontFamily: FONT,
    fontSize: "14.5px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.6)",
    margin: 0,
  },
  more: {
    fontFamily: FONT,
    fontSize: "14px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.5)",
    marginTop: "12px",
    overflow: "hidden",
  },

  divider: {
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: "18px 0 14px",
  },
  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    flexWrap: "wrap",
  },
  footerTags: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  tagItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: FONT,
    fontSize: "11.5px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    color: "rgba(255,255,255,0.5)",
  },
  explore: {
    fontFamily: FONT,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    color: "#E11D48",
  },
};

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M2 8h12M8 1.8c1.8 1.8 1.8 10.4 0 12.4M8 1.8c-1.8 1.8-1.8 10.4 0 12.4"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M2.5 14V4l5.5-2.5L13.5 4v10M6 14V9h4v5M2.5 14h11"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 2l10 10M12 2L2 12"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS = {
  brief: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="5" width="12" height="8" rx="1.4" stroke="#FFFFFF" strokeWidth="1.3" />
      <path d="M5.5 5V3.6a1 1 0 011-1h3a1 1 0 011 1V5" stroke="#FFFFFF" strokeWidth="1.3" />
    </svg>
  ),
  chart: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 13.5V2.5M2.5 13.5H13.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4.5 11V8M8 11V5.5M11.5 11V7" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  rocket: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5c2.2 1 3.5 3.4 3.5 6 0 1.2-.3 2.3-.8 3.2L8 12l-2.7-1.3c-.5-.9-.8-2-.8-3.2 0-2.6 1.3-5 3.5-6z"
        stroke="#FFFFFF"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="6.5" r="1.2" stroke="#FFFFFF" strokeWidth="1.1" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.8l5 1.8v4c0 3.4-2.1 5.9-5 6.6-2.9-.7-5-3.2-5-6.6v-4l5-1.8z"
        stroke="#FFFFFF"
        strokeWidth="1.3"
      />
    </svg>
  ),
  handshake: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1.8 7.5l2.7-2.3 2 1.5 2-1.7 3.7 3-1.6 1.8-2.4-1.9-2 1.7-2.7-2z"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="7" width="10" height="7" rx="1.3" stroke="#FFFFFF" strokeWidth="1.3" />
      <path d="M5 7V4.8a3 3 0 016 0V7" stroke="#FFFFFF" strokeWidth="1.3" />
    </svg>
  ),
};

function Card({ card, isExpanded, onToggle }) {
  return (
    <motion.div
      style={styles.card}
      layout
      onClick={onToggle}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={styles.imageWrap}
        animate={{
          height: isExpanded ? 0 : 260,
          opacity: isExpanded ? 0 : 1,
          margin: isExpanded ? "0 10px" : "10px",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={card.img} alt={card.title} style={styles.cardImg} />
        <div style={styles.imgOverlay} />
        <span style={styles.badge}>{card.badge}</span>
        <span style={styles.iconCircle}>{ICONS[card.icon]}</span>
      </motion.div>

      <motion.div style={styles.textWrap} layout>
        <h3 style={styles.title}>{card.title}</h3>
        <p style={styles.body}>{card.body}</p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.p
              style={styles.more}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {card.more}
            </motion.p>
          )}
        </AnimatePresence>

        <div style={styles.divider} />

        <div style={styles.footerRow}>
          <div style={styles.footerTags}>
            <span style={styles.tagItem}>
              <GlobeIcon /> GLOBAL
            </span>
            <span style={styles.tagItem}>
              <BuildingIcon /> REGULATED
            </span>
          </div>
          <motion.span
            style={styles.explore}
            animate={{ opacity: 1 }}
          >
            {isExpanded ? (
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                CLOSE <CloseIcon />
              </span>
            ) : (
              "EXPLORE"
            )}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PoweringAI() {
  const [expanded, setExpanded] = useState({});

  const toggle = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Powering <span style={styles.headingAccent}>AI</span> with Expertise
        and Trust
      </motion.h2>

      <div style={styles.grid}>
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              card={card}
              isExpanded={!!expanded[card.title]}
              onToggle={() => toggle(card.title)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}