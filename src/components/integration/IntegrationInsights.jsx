import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import insight1 from "../../assets/fresh/integration_microservices.jpg";
import insight2 from "../../assets/fresh/telecom_5g_network_tower.jpg";
import insight3 from "../../assets/fresh/agent_knowledge_graph_synthesis.jpg";
import insight4 from "../../assets/fresh/agent_meeting_notes.jpg";
import insight5 from "../../assets/fresh/agent_research_analyst.jpg";
import insight6 from "../../assets/fresh/agent_security_soc.jpg";

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';

// Integration keywords for dynamic matching
const INTEGRATION_KEYWORDS = [
  "integration",
  "integrations",
  "api",
  "apis",
  "microservices",
  "cloud architecture",
  "architecture",
  "automation",
  "workflow",
  "mesh",
  "middleware",
  "connectors",
  "saas",
  "migration",
  "etl",
  "kafka",
  "zero-trust",
  "identity",
  "power platform",
  "azure",
  "aws",
  "gcp",
  "infrastructure",
  "resilience"
];

// Curated high-relevance defaults ensuring 100% uptime
const DEFAULT_INTEGRATION_ITEMS = [
  {
    tag: "WORKFLOW AUTOMATION",
    title: "From Manual Workflows to Intelligent Operations: How Devopstrio Scales Power Platform Automation",
    desc: "How enterprises eliminate operational bottlenecks and streamline cross-system workflows with robust automated pipelines.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6a91618a1827f20aab9041b0",
    fallback: insight1,
    href: "https://devopstrio.co.uk/insights/client-transformations/from-manual-workflows-to-intelligent-operations-how-devopstrio-scales-power-platform-automation-t214qj"
  },
  {
    tag: "CLOUD MIGRATION",
    title: "Azure to AWS Migration: Turn Cloud Transformation Into a Business Advantage",
    desc: "A strategic architectural playbook for migrating multi-tier enterprise workloads between hyperscalers with minimal downtime.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6a95539c83a0ae7068d8336c",
    fallback: insight2,
    href: "https://devopstrio.co.uk/insights/blogs/azure-to-aws-migration-turn-cloud-transformation-into-a-business-advantage-50zv8c"
  },
  {
    tag: "CLOUD ARCHITECTURE",
    title: "Why Does Cloud Architecture Matter?",
    desc: "Design secure, scalable, and reliable cloud environments for your business with modern architectural foundations.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6ae07b6032e71524990bd3f4",
    fallback: insight3,
    href: "https://devopstrio.co.uk/insights/blogs/why-does-cloud-architecture-matter-7unrl1"
  },
  {
    tag: "INFRASTRUCTURE",
    title: "How Can Businesses Make Their Cloud Infrastructure More Reliable?",
    desc: "Strategies for multi-region high availability, automated failover meshes, and continuous service resilience.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6ae32b19cdb5a7dc110e5762",
    fallback: insight4,
    href: "https://devopstrio.co.uk/insights/blogs/how-can-businesses-make-their-cloud-infrastructure-more-reliable-7klzbr"
  },
  {
    tag: "ZERO-TRUST ACCESS",
    title: "From Password Dependence to Identity Intelligence: Quantifying the Value of Zero-Trust Access",
    desc: "Implementing workload identity, mTLS service meshes, and continuous verification across distributed enterprise endpoints.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6a9133bdb0aa570c70b766bc",
    fallback: insight5,
    href: "https://devopstrio.co.uk/insights/impact-metrics/from-password-dependence-to-identity-intelligence-quantifying-the-value-of-zero-trust-access-7m40ff"
  },
  {
    tag: "BUSINESS RESILIENCE",
    title: "From Backup to Business Resilience: How Devopstrio Modernizes Cloud Recovery Strategies",
    desc: "Building immutable data pipelines, automated cross-cloud failovers, and transactional consistency across distributed databases.",
    image: "https://devopstrio.co.uk/api/insights-proxy/api/images/6a955c9b83a0ae7068d83371",
    fallback: insight6,
    href: "https://devopstrio.co.uk/insights/client-transformations/from-backup-to-business-resilience-how-devopstrio-modernizes-cloud-recovery-strategies-u97m4j"
  }
];

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "96px 0 110px",
    background: "#020203",
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
    fontSize: "clamp(2rem, 3.4vw, 2.8rem)",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  headingAccent: {
    color: "#E11D48",
    fontWeight: 600,
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
    backgroundColor: "#0A0A0C",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    textDecoration: "none",
    transition: "border-color 0.3s ease, transform 0.3s ease",
  },
  imgWrap: {
    position: "relative",
    width: "100%",
    height: "210px",
    minHeight: "210px",
    maxHeight: "210px",
    overflow: "hidden",
    flexShrink: 0,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(2,2,3,0.1) 0%, rgba(10,10,12,0.88) 100%)",
  },
  tagBadge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    padding: "4px 10px",
    borderRadius: "6px",
    backgroundColor: "rgba(10, 10, 12, 0.82)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#E11D48",
    fontFamily: FONT,
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.06em",
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
    backgroundColor: "#0A0A0C",
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
    minHeight: "44px",
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
    fontWeight: 400,
    minHeight: "64px",
  },
  readMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#FFFFFF",
    fontSize: "13px",
    fontWeight: 600,
    marginTop: "16px",
    transition: "color 0.2s ease, gap 0.2s ease",
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
        borderColor: isHovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)",
        transform: isHovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="integration-insight-card group"
    >
      <div style={styles.imgWrap}>
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => setImgSrc(fallbackImg)}
          style={{
            ...styles.img,
            transform: isHovered ? "scale(1.04)" : "scale(1)",
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
        <div style={{ ...styles.readMore, color: isHovered ? "#E11D48" : "#FFFFFF", gap: isHovered ? "9px" : "6px" }}>
          Read Article <ArrowIcon />
        </div>
      </div>
    </motion.a>
  );
}

export default function IntegrationInsights() {
  const trackRef = useRef(null);
  const [items, setItems] = useState(DEFAULT_INTEGRATION_ITEMS);
  const fallbackList = [insight1, insight2, insight3, insight4, insight5, insight6];

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
          const searchable = [
            item.title || "",
            item.subtitle || "",
            item.category_slug || "",
            item.section_slug || "",
            ...(item.tags || [])
          ].join(" ").toLowerCase();

          let score = 0;
          let matchedKeyword = "";
          for (const kw of INTEGRATION_KEYWORDS) {
            if (searchable.includes(kw.toLowerCase())) {
              score += 1;
              if (!matchedKeyword) matchedKeyword = kw.toUpperCase();
            }
          }

          if (score > 0) {
            const catSlug = item.category?.slug || item.category_slug || "blogs";
            const catName = item.category?.name || item.category_slug || "Integration";
            const imageUrl = item.cover_image_id
              ? `https://devopstrio.co.uk/api/insights-proxy/api/images/${item.cover_image_id}`
              : null;

            matched.push({
              tag: matchedKeyword || catName.toUpperCase(),
              title: item.title,
              desc:
                item.subtitle ||
                "Explore Devopstrio's technical architecture publication on enterprise system integration and cloud resilience.",
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
          // If fewer than 6, append non-duplicative default integration items
          const combined = [...matched];
          const existingSlugs = new Set(matched.map((m) => m.href));
          for (const def of DEFAULT_INTEGRATION_ITEMS) {
            if (!existingSlugs.has(def.href) && combined.length < 8) {
              combined.push(def);
            }
          }
          setItems(combined);
        }
      } catch (err) {
        // Silently preserve high-quality default items if offline/error
        console.error("Integration Insights live fetch fallback active:", err);
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Explore Integration <span style={styles.headingAccent}>Insights</span>
        </motion.h2>

        <a
          href="https://devopstrio.co.uk/insights"
          style={styles.viewAll}
          className="group"
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
              key={`${item.href || item.title}-${i}`}
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
          className="hover:border-white/30"
        >
          <NavArrowIcon direction="left" />
        </button>
        <button
          style={styles.navBtn}
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
          className="hover:border-white/30"
        >
          <NavArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
