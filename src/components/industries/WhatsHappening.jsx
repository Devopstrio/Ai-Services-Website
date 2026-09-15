import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getIndustryImages } from "../../data/industries/industryImages";

/* ---------------------------------------------------------------------- */
/*  Design tokens                                                         */
/* ---------------------------------------------------------------------- */

const COLORS = {
  bg: "#000000",
  cardBg: "#0A0A0A",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.66)",
  whiteFaint: "rgba(255,255,255,0.14)",
  accent: "#E11D48",
  accentDim: "rgba(225,29,72,0.35)",
};

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

/* ---------------------------------------------------------------------- */
/*  Industry Data                                                         */
/* ---------------------------------------------------------------------- */

const INDUSTRY_DATA = {
  healthcare: {
    title: "What's Happening",
    subtitle: "Making your healthcare pipelines future ready",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio and Azure Announce Strategic Partnership to Accelerate Healthcare AI",
        image: "https://picsum.photos/seed/trio-news-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Pipelines-as-a-Service Explained for Healthcare",
        image: "https://picsum.photos/seed/trio-news-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Launched Devopstrio Compliance Automation Suite for Healthcare",
        image: "https://picsum.photos/seed/trio-news-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How a Regional Hospital Network Cut Release Cycles by 68%",
        image: "https://picsum.photos/seed/trio-news-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Webinar",
        title: "AI-Powered Clinical Decision Support: The Future of Patient Care",
        image: "https://picsum.photos/seed/trio-news-5/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  banking: {
    title: "What's Happening",
    subtitle: "Transforming financial services with AI-powered solutions",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches AI-Powered Fraud Detection Platform for Banks",
        image: "https://picsum.photos/seed/trio-bank-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Financial Services Automation Explained",
        image: "https://picsum.photos/seed/trio-bank-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Major Bank Partner for Digital Transformation",
        image: "https://picsum.photos/seed/trio-bank-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How a Regional Bank Reduced Fraud by 45% with AI",
        image: "https://picsum.photos/seed/trio-bank-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  retail: {
    title: "What's Happening",
    subtitle: "Reinventing retail with AI-driven customer experiences",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches AI-Powered Personalization Engine for Retail",
        image: "https://picsum.photos/seed/trio-retail-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Retail Automation Explained",
        image: "https://picsum.photos/seed/trio-retail-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Leading Retailer Partner for Omnichannel Success",
        image: "https://picsum.photos/seed/trio-retail-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How a Fashion Retailer Increased Sales by 32% with AI",
        image: "https://picsum.photos/seed/trio-retail-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  manufacturing: {
    title: "What's Happening",
    subtitle: "Driving Industry 4.0 with intelligent automation",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches Predictive Maintenance Solution for Manufacturing",
        image: "https://picsum.photos/seed/trio-mfg-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Smart Factory Automation Explained",
        image: "https://picsum.photos/seed/trio-mfg-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Major Manufacturer Partner for Digital Transformation",
        image: "https://picsum.photos/seed/trio-mfg-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How an Automotive Manufacturer Reduced Downtime by 56%",
        image: "https://picsum.photos/seed/trio-mfg-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  insurance: {
    title: "What's Happening",
    subtitle: "Transforming insurance with intelligent automation",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches AI-Powered Claims Automation Platform",
        image: "https://picsum.photos/seed/trio-ins-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Insurance Process Automation Explained",
        image: "https://picsum.photos/seed/trio-ins-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Major Insurer Partner for Digital Innovation",
        image: "https://picsum.photos/seed/trio-ins-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How an Insurance Provider Reduced Claims Processing Time by 70%",
        image: "https://picsum.photos/seed/trio-ins-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  education: {
    title: "What's Happening",
    subtitle: "Transforming education with AI-powered learning solutions",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches AI-Powered Adaptive Learning Platform",
        image: "https://picsum.photos/seed/trio-edu-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Education Technology Explained",
        image: "https://picsum.photos/seed/trio-edu-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Leading University Partner for Digital Learning",
        image: "https://picsum.photos/seed/trio-edu-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How a University Improved Student Outcomes by 28% with AI",
        image: "https://picsum.photos/seed/trio-edu-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  logistics: {
    title: "What's Happening",
    subtitle: "Building intelligent supply chains with AI innovation",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches AI-Powered Logistics Optimization Platform",
        image: "https://picsum.photos/seed/trio-log-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Supply Chain Automation Explained",
        image: "https://picsum.photos/seed/trio-log-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Global Logistics Leader Partner for Innovation",
        image: "https://picsum.photos/seed/trio-log-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How a Logistics Provider Reduced Delivery Times by 34%",
        image: "https://picsum.photos/seed/trio-log-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  },
  government: {
    title: "What's Happening",
    subtitle: "Modernizing public services with AI-driven solutions",
    slides: [
      {
        tag: "Press Release",
        title: "Devopstrio Launches AI-Powered Citizen Services Platform",
        image: "https://picsum.photos/seed/trio-gov-1/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Video",
        title: "Devopstrio Agent Platform: Government Digital Transformation Explained",
        image: "https://picsum.photos/seed/trio-gov-2/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
      {
        tag: "Press Release",
        title: "Devopstrio and Government Agency Partner for Digital Innovation",
        image: "https://picsum.photos/seed/trio-gov-3/700/560",
        href: "https://devopstrio.co.uk/insights/blogs",
      },
      {
        tag: "Case Study",
        title: "How a Government Agency Improved Service Delivery by 45%",
        image: "https://picsum.photos/seed/trio-gov-4/700/560",
        href: "https://devopstrio.co.uk/insights/case-studies",
      },
    ]
  }
};

const DEFAULT_DATA = {
  title: "What's Happening",
  subtitle: "Making your industry future ready with AI innovation",
  slides: [
    {
      tag: "Press Release",
      title: "Devopstrio Announces Strategic Partnership to Accelerate AI Innovation",
      image: "https://picsum.photos/seed/trio-default-1/700/560",
      href: "https://devopstrio.co.uk/insights/blogs",
    },
    {
      tag: "Video",
      title: "Devopstrio Agent Platform: Pipelines-as-a-Service Explained",
      image: "https://picsum.photos/seed/trio-default-2/700/560",
      href: "https://devopstrio.co.uk/insights/case-studies",
    },
    {
      tag: "Press Release",
      title: "Launched Devopstrio Compliance Automation Suite",
      image: "https://picsum.photos/seed/trio-default-3/700/560",
      href: "https://devopstrio.co.uk/insights/blogs",
    },
    {
      tag: "Case Study",
      title: "How Enterprise Clients Cut Release Cycles by 60%",
      image: "https://picsum.photos/seed/trio-default-4/700/560",
      href: "https://devopstrio.co.uk/insights/case-studies",
    },
  ]
};

/* ---------------------------------------------------------------------- */
/*  Slide card                                                            */
/* ---------------------------------------------------------------------- */

function SlideCard({ slide }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a href={slide.href || "https://devopstrio.co.uk/insights/case-studies"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6 }}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: COLORS.cardBg,
        border: `1px solid ${hovered ? "rgba(225,29,72,0.5)" : COLORS.whiteFaint}`,
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? `0 12px 40px rgba(225,29,72,0.18)`
          : "0 4px 20px rgba(0,0,0,0.4)",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 11",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={slide.image}
          alt={slide.title}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            padding: "6px 14px",
            borderRadius: "7px",
            backgroundColor: COLORS.accent,
            color: COLORS.white,
            fontFamily: FONT,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          {slide.tag}
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          padding: "22px",
          flex: 1,
          minHeight: "150px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: FONT,
            fontSize: "17px",
            fontWeight: 600,
            lineHeight: 1.4,
            color: COLORS.white,
            letterSpacing: "-0.01em",
          }}
        >
          {slide.title}
        </h3>

        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "8px",
            backgroundColor: COLORS.white,
            color: COLORS.bg,
            fontFamily: FONT,
            fontSize: "13.5px",
            fontWeight: 700,
            alignSelf: "flex-start",
          }}
        >
          Read More
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </motion.span>
      </div>
    </motion.a>
  );
}

/* ---------------------------------------------------------------------- */
/*  Main Component                                                        */
/* ---------------------------------------------------------------------- */

export function WhatsHappening() {
  const location = useLocation();
  const [industryData, setIndustryData] = useState(DEFAULT_DATA);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    let data = DEFAULT_DATA;

    if (path.includes("healthcare-life-sciences") || path.includes("healthcare")) {
      data = INDUSTRY_DATA.healthcare;
    } else if (path.includes("banking-financial-services") || path.includes("banking")) {
      data = INDUSTRY_DATA.banking;
    } else if (path.includes("retail-ecommerce") || path.includes("retail")) {
      data = INDUSTRY_DATA.retail;
    } else if (path.includes("manufacturing")) {
      data = INDUSTRY_DATA.manufacturing;
    } else if (path.includes("insurance")) {
      data = INDUSTRY_DATA.insurance;
    } else if (path.includes("education")) {
      data = INDUSTRY_DATA.education;
    } else if (path.includes("logistics-supply-chain") || path.includes("logistics")) {
      data = INDUSTRY_DATA.logistics;
    } else if (path.includes("government-public-sector") || path.includes("government")) {
      data = INDUSTRY_DATA.government;
    }

    setIndustryData(data);
    setPage(0);
  }, [location.pathname]);

  const slides = industryData.slides || DEFAULT_DATA.slides;
  const localImages = getIndustryImages(location.pathname);
  const perView = 3;
  const totalPages = slides.length;

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const visibleSlides = Array.from({ length: perView }, (_, i) => {
    const idx = (page + i) % slides.length;
    const slideItem = slides[idx];
    return {
      ...slideItem,
      image: localImages[idx % localImages.length] || slideItem.image,
      _key: `${idx}-${page}`
    };
  });

  // "What's Happening" -> white "What's" + accent "Happening", built from
  // the title string itself so it stays correct even if copy changes.
  const titleWords = industryData.title.split(" ");
  const titleAccentWord = titleWords[titleWords.length - 1];
  const titleLeadWords = titleWords.slice(0, -1).join(" ");

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: COLORS.bg,
        fontFamily: FONT,
        padding: "96px 24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto 44px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              margin: 0,
              fontFamily: FONT,
              fontSize: "clamp(30px, 4vw, 40px)",
              fontWeight: 700,
              color: COLORS.white,
              letterSpacing: "-0.02em",
            }}
          >
            {titleLeadWords} <span style={{ color: COLORS.accent }}>{titleAccentWord}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              margin: "10px 0 0",
              fontFamily: FONT,
              fontSize: "16px",
              color: COLORS.whiteDim,
            }}
          >
            {industryData.subtitle}
          </motion.p>
        </div>

        {/* Nav controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <motion.button
            onClick={prev}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: `1px solid ${COLORS.whiteFaint}`,
              backgroundColor: "transparent",
              color: COLORS.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            aria-label="Previous"
          >
            <ArrowLeft size={17} strokeWidth={2.25} />
          </motion.button>

          <span
            style={{
              fontFamily: FONT,
              fontSize: "14px",
              fontWeight: 600,
              color: COLORS.whiteDim,
              minWidth: "34px",
              textAlign: "center",
            }}
          >
            {page + 1} / {totalPages}
          </span>

          <motion.button
            onClick={next}
            whileHover={{ backgroundColor: COLORS.accentDim }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: COLORS.accent,
              color: COLORS.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            aria-label="Next"
          >
            <ArrowRight size={17} strokeWidth={2.25} />
          </motion.button>
        </div>
      </div>

      {/* Cards row — CSS grid guarantees perfectly even columns, no wrap gaps */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: `repeat(${perView}, 1fr)`,
          gap: "24px",
        }}
      >
        <AnimatePresence mode="popLayout">
          {visibleSlides.map((slide) => (
            <SlideCard key={slide._key} slide={slide} />
          ))}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "40px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === page ? "22px" : "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: i === page ? COLORS.accent : COLORS.whiteFaint,
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default WhatsHappening;