import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import fallbackImg1 from "../../assets/fresh/agent_database_optimizer.jpg";
import fallbackImg2 from "../../assets/fresh/agent_devops_cicd.jpg";
import fallbackImg3 from "../../assets/fresh/agent_knowledge_graph.jpg";
import fallbackImg4 from "../../assets/fresh/agent_meeting_intelligence.jpg";
import fallbackImg5 from "../../assets/fresh/agent_qa_testing.jpg";
import fallbackImg6 from "../../assets/fresh/agent_secops_incident_responder.jpg";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

// Innovation keywords requested for priority matching & future overview articles
const INNOVATION_KEYWORDS = [
  "overview",
  "ai research",
  "research",
  "experimental projects",
  "experimental",
  "experiment",
  "ai prototypes",
  "prototypes",
  "prototype",
  "prototyping",
  "open source",
  "technology exploration",
  "exploration",
  "innovation programs",
  "innovation",
  "product roadmap",
  "roadmap",
  "ai demonstrations",
  "demonstration",
  "demo",
  "publications",
  "publication",
  "white paper",
  "gen ai",
  "generative ai",
  "mlops",
  "llmops",
  "cloud architecture",
  "saas product development",
  "frontier",
  "neural"
];

// Slugs reserved for the Agents Overview page so Innovation insights remain distinct
const AGENT_SPECIFIC_SLUGS = [
  "next-gen-it-operations-with-agentic-ai-9jkmk0",
  "how-ai-agents-boost-enterprise-automation-and-business-growth-l0yqvh",
  "enhancing-institutional-banking-productivity-with-agentic-ai-s5t8ui",
  "from-manual-workflows-to-intelligent-operations-how-devopstrio-automated-enterprise-workflows-g8f9k2"
];

const DEFAULT_INNOVATION_ITEMS = [
  {
    tag: "AI RESEARCH",
    title: "How Gen AI Is Turning Business Ideas Into Smarter Service in the UK",
    desc: "Discover how UK businesses can use gen AI to simplify everyday tasks, improve productivity, and turn innovative ideas into practical business solutions.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6ac8c02bf30105f99be25f2d",
    fallback: fallbackImg1,
    href: "https://devopstrio.co.uk/insights/blogs/how-gen-ai-is-turning-business-ideas-into-smarter-service-in-the-uk-i161ge",
  },
  {
    tag: "TECHNOLOGY EXPLORATION",
    title: "Why Does Cloud Architecture Matter?",
    desc: "Design secure, scalable, and reliable cloud environments for your business with modern architectural foundations.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6ae07b6032e71524990bd3f4",
    fallback: fallbackImg2,
    href: "https://devopstrio.co.uk/insights/blogs/why-does-cloud-architecture-matter-7unrl1",
  },
  {
    tag: "AI PROTOTYPES",
    title: "Why Does Your Business Need MLOps?",
    desc: "Build, deploy, and monitor machine learning models with reliable MLOps practices designed to support business growth and continuous experimentation.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6ad210cfa49baf5b00ad3a74",
    fallback: fallbackImg3,
    href: "https://devopstrio.co.uk/insights/blogs/why-does-your-business-need-mlops-f6uvyy",
  },
  {
    tag: "PRODUCT ROADMAP",
    title: "How Does SaaS Product Development Work?",
    desc: "From the first idea to a scalable software platform, discover how the right SaaS development approach can help you build products customers want to use.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6acf3ec4a83a49f70192470b",
    fallback: fallbackImg4,
    href: "https://devopstrio.co.uk/insights/blogs/how-can-saas-product-development-turn-your-business-idea-into-reality-mptpcz",
  },
  {
    tag: "PUBLICATIONS",
    title: "Why Use AI Consulting Services?",
    desc: "Navigate strategic transformation, model selection, and enterprise integration safely with seasoned AI engineering leaders.",
    image: fallbackImg5,
    fallback: fallbackImg5,
    href: "https://devopstrio.co.uk/insights/blogs/why-use-ai-consulting-services-ahq80j",
  },
  {
    tag: "EXPERIMENTAL PROJECTS",
    title: "What Makes Cloud Architecture Work?",
    desc: "A blueprint for resilient distributed architectures, high-performance compute clusters, and scalable AI infrastructure.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6ac0aa4d1aa9fdd74ac1d529",
    fallback: fallbackImg6,
    href: "https://devopstrio.co.uk/insights/blogs/what-makes-cloud-architecture-work-vg2437",
  },
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 0 110px",
    background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
    fontFamily: FONT,
    boxSizing: "border-box",
    overflow: "hidden",
    textAlign: "left",
  },
  headerRow: {
    padding: "0 24px",
    maxWidth: "1280px",
    margin: "0 auto 34px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "16px",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(2rem, 3.6vw, 3rem)",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  viewAll: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    fontFamily: FONT,
    fontSize: "14px",
    fontWeight: 600,
    color: "#FFFFFF",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
  viewAllArrow: {
    width: "24px",
    height: "24px",
    backgroundColor: "#E11D48",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  },
  navControls: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "30px 24px 0",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  navBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "6px",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    transition: "all 0.2s ease",
  },
  scrollWrap: {
    padding: "0 24px",
  },
  track: {
    display: "flex",
    gap: "24px",
    overflowX: "auto",
    paddingBottom: "20px",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  card: {
    flex: "0 0 360px",
    height: "440px",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#0A0A0A",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    textDecoration: "none",
    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
  },
  imgWrap: {
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
    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,10,10,0.92) 100%)",
  },
  tagBadge: {
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
    maxWidth: "85%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  body: {
    padding: "22px 24px 24px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#0A0A0A",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.12rem",
    fontWeight: 600,
    color: "#FFFFFF",
    lineHeight: 1.4,
    margin: "0 0 10px 0",
    letterSpacing: "-0.01em",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  desc: {
    fontFamily: FONT,
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.65)",
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  readMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#E11D48",
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "16px",
    transition: "gap 0.2s ease",
  }
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavArrowIcon({ direction }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}>
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ item, fallbackImg }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.image || fallbackImg);

  return (
    <motion.a
      href={item.href}
      style={{
        ...styles.card,
        borderColor: isHovered ? "rgba(225,29,72,0.55)" : "rgba(255,255,255,0.08)",
        transform: isHovered ? "translateY(-6px)" : "none",
        boxShadow: isHovered ? "0 14px 40px rgba(225,29,72,0.18)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.imgWrap}>
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => setImgSrc(fallbackImg)}
          style={{
            ...styles.img,
            transform: isHovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <div style={styles.imgOverlay} />
        <div style={styles.tagBadge}>{item.tag}</div>
      </div>

      <div style={styles.body}>
        <div>
          <h3 style={styles.title}>{item.title}</h3>
          <p style={styles.desc}>{item.desc}</p>
        </div>
        <div style={{ ...styles.readMore, gap: isHovered ? "9px" : "6px" }}>
          Read Article <ArrowIcon />
        </div>
      </div>
    </motion.a>
  );
}

export default function InnovationInsights() {
  const trackRef = useRef(null);
  const [items, setItems] = useState(DEFAULT_INNOVATION_ITEMS);
  const fallbackList = [fallbackImg1, fallbackImg2, fallbackImg3, fallbackImg4, fallbackImg5, fallbackImg6];

  // Dynamic fetch from Devopstrio live Insights API
  useEffect(() => {
    let isMounted = true;
    const fetchLatestInsights = async () => {
      try {
        const response = await fetch(
          "https://devopstrio.co.uk/api/insights-proxy/api/public/DP-901265/content?skip=0&limit=50"
        );
        if (!response.ok) return;

        const data = await response.json();
        const rawItems = data?.items || [];
        if (!rawItems.length) return;

        const matched = [];
        for (const item of rawItems) {
          // Keep distinct from agents overview insights
          if (AGENT_SPECIFIC_SLUGS.includes(item.slug)) continue;

          const searchable = [
            item.title || "",
            item.subtitle || "",
            item.category_slug || "",
            item.section_slug || "",
            ...(item.tags || [])
          ].join(" ").toLowerCase();

          let score = 0;
          let matchedKeyword = "";
          for (const kw of INNOVATION_KEYWORDS) {
            if (searchable.includes(kw.toLowerCase())) {
              score += 1;
              if (!matchedKeyword) matchedKeyword = kw.toUpperCase();
            }
          }

          if (score > 0) {
            const catSlug = item.category?.slug || item.category_slug || "blogs";
            const catName = item.category?.name || item.category_slug || "Innovation";
            const imageUrl = item.cover_image_id
              ? `https://devopstrio.co.uk/api/insights-proxy/api/images/${item.cover_image_id}`
              : null;

            matched.push({
              tag: matchedKeyword || catName.toUpperCase(),
              title: item.title,
              desc:
                item.subtitle ||
                "Explore Devopstrio's latest technical publication and enterprise engineering insights.",
              image: imageUrl,
              href: `https://devopstrio.co.uk/insights/${catSlug}/${item.slug}`,
              score,
              date: item.published_at || item.created_at || ""
            });
          }
        }

        // Sort by relevance score, then publication date (newest first)
        matched.sort(
          (a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        if (isMounted && matched.length > 0) {
          // If fewer than 6, append non-duplicative default innovation items
          const combined = [...matched];
          const existingSlugs = new Set(matched.map((m) => m.href));
          for (const def of DEFAULT_INNOVATION_ITEMS) {
            if (!existingSlugs.has(def.href) && combined.length < 8) {
              combined.push(def);
            }
          }
          setItems(combined);
        }
      } catch (err) {
        // Silently preserve high-quality default items if offline/error
        console.error("Insights live fetch fallback active:", err);
      }
    };

    fetchLatestInsights();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleScroll = (dir) => {
    if (trackRef.current) {
      const scrollAmount = 384;
      trackRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.headerRow}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Explore Innovation <span style={{ color: "#E11D48" }}>Insights</span>
        </motion.h2>

        <a
          href="https://devopstrio.co.uk/insights"
          style={styles.viewAll}
          className="insights-view-all-btn"
        >
          View All Insights
          <div style={styles.viewAllArrow}>
            <ArrowIcon />
          </div>
        </a>
      </div>

      <div style={styles.scrollWrap}>
        <div style={styles.track} ref={trackRef}>
          {items.map((item, i) => (
            <Card
              key={`${item.href}-${i}`}
              item={item}
              fallbackImg={fallbackList[i % fallbackList.length]}
            />
          ))}
        </div>
      </div>

      <div style={styles.navControls}>
        <button
          style={styles.navBtn}
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(225,29,72,0.2)";
            e.currentTarget.style.borderColor = "rgba(225,29,72,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          <NavArrowIcon direction="left" />
        </button>
        <button
          style={styles.navBtn}
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(225,29,72,0.2)";
            e.currentTarget.style.borderColor = "rgba(225,29,72,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          <NavArrowIcon direction="right" />
        </button>
      </div>

      <style>{`
        .insights-view-all-btn:hover {
          color: #E11D48 !important;
        }
        .insights-view-all-btn:hover div {
          transform: translateX(4px);
          background-color: #BE123C !important;
        }
      `}</style>
    </section>
  );
}
