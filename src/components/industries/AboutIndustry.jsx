import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { getIndustryImages } from "../../data/industries/industryImages";

/**
 * AboutIndustry.jsx — DevOpsTRIO
 * Dynamic "About" section that changes based on the current industry
 * Shows industry-specific stats, heading, and description
 */

const FONT = '"Geist", sans-serif';

// Industry-specific data configurations
const INDUSTRY_DATA = {
  healthcare: {
    heading: "About Healthcare",
    description: [
      "Devopstrio helps payers, providers, and health-tech enterprises modernize platforms, streamline operations, and enhance patient and member experiences.",
      "With deep expertise across the clinical value chain and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from compliance automation and revenue cycle optimization to EHR implementation and clinical workflow modernization.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved outcomes, operational efficiency, regulatory compliance, and seamless interoperability — creating a more connected, patient-centric healthcare ecosystem."
    ],
    stats: [
      {
        value: 500,
        suffix: "+",
        label: "Healthcare experts",
        img: "https://picsum.photos/seed/healthcare-about-1/700/900",
      },
      {
        value: 80,
        suffix: "+",
        label: "Pre-trained AI models",
        img: "https://picsum.photos/seed/healthcare-about-2/700/900",
      },
      {
        value: 25,
        suffix: "+",
        label: "Health enterprises",
        img: "https://picsum.photos/seed/healthcare-about-3/700/900",
      },
      {
        value: 40,
        suffix: "",
        label: "Healthcare partners",
        img: "https://picsum.photos/seed/healthcare-about-4/700/900",
      },
    ]
  },
  banking: {
    heading: "About Banking & Financial Services",
    description: [
      "Devopstrio helps banks, financial institutions, and fintech enterprises modernize core systems, enhance customer experiences, and drive digital transformation.",
      "With deep expertise in financial services and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from risk management and fraud detection to personalized banking and regulatory compliance.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved customer engagement, operational efficiency, risk mitigation, and seamless omnichannel experiences — creating a more resilient, customer-centric financial ecosystem."
    ],
    stats: [
      {
        value: 350,
        suffix: "+",
        label: "Banking experts",
        img: "https://picsum.photos/seed/banking-about-1/700/900",
      },
      {
        value: 60,
        suffix: "+",
        label: "AI banking models",
        img: "https://picsum.photos/seed/banking-about-2/700/900",
      },
      {
        value: 20,
        suffix: "+",
        label: "Financial institutions",
        img: "https://picsum.photos/seed/banking-about-3/700/900",
      },
      {
        value: 50,
        suffix: "",
        label: "Banking partners",
        img: "https://picsum.photos/seed/banking-about-4/700/900",
      },
    ]
  },
  retail: {
    heading: "About Retail & E-Commerce",
    description: [
      "Devopstrio helps retailers, e-commerce platforms, and consumer brands modernize operations, enhance customer engagement, and drive omnichannel growth.",
      "With deep expertise in retail transformation and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from supply chain optimization and inventory management to personalized shopping and customer analytics.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved customer experiences, operational efficiency, sustainable practices, and seamless omnichannel experiences — creating a more connected, customer-centric retail ecosystem."
    ],
    stats: [
      {
        value: 400,
        suffix: "+",
        label: "Retail experts",
        img: "https://picsum.photos/seed/retail-about-1/700/900",
      },
      {
        value: 70,
        suffix: "+",
        label: "AI retail models",
        img: "https://picsum.photos/seed/retail-about-2/700/900",
      },
      {
        value: 30,
        suffix: "+",
        label: "Retail enterprises",
        img: "https://picsum.photos/seed/retail-about-3/700/900",
      },
      {
        value: 45,
        suffix: "",
        label: "Retail partners",
        img: "https://picsum.photos/seed/retail-about-4/700/900",
      },
    ]
  },
  manufacturing: {
    heading: "About Manufacturing",
    description: [
      "Devopstrio helps manufacturers, industrial enterprises, and supply chain leaders modernize operations, enhance efficiency, and drive Industry 4.0 transformation.",
      "With deep expertise in manufacturing and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from predictive maintenance and quality control to supply chain optimization and smart factory automation.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved productivity, operational efficiency, quality excellence, and sustainable manufacturing — creating a more intelligent, efficient manufacturing ecosystem."
    ],
    stats: [
      {
        value: 300,
        suffix: "+",
        label: "Manufacturing experts",
        img: "https://picsum.photos/seed/manufacturing-about-1/700/900",
      },
      {
        value: 50,
        suffix: "+",
        label: "AI manufacturing models",
        img: "https://picsum.photos/seed/manufacturing-about-2/700/900",
      },
      {
        value: 15,
        suffix: "+",
        label: "Manufacturing enterprises",
        img: "https://picsum.photos/seed/manufacturing-about-3/700/900",
      },
      {
        value: 35,
        suffix: "",
        label: "Manufacturing partners",
        img: "https://picsum.photos/seed/manufacturing-about-4/700/900",
      },
    ]
  },
  insurance: {
    heading: "About Insurance",
    description: [
      "Devopstrio helps insurers, brokers, and insurtech enterprises modernize operations, enhance underwriting, and drive digital transformation.",
      "With deep expertise in insurance and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from claims processing and risk assessment to customer engagement and regulatory compliance.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved customer experiences, operational efficiency, risk mitigation, and seamless policy management — creating a more agile, customer-centric insurance ecosystem."
    ],
    stats: [
      {
        value: 250,
        suffix: "+",
        label: "Insurance experts",
        img: "https://picsum.photos/seed/insurance-about-1/700/900",
      },
      {
        value: 40,
        suffix: "+",
        label: "AI insurance models",
        img: "https://picsum.photos/seed/insurance-about-2/700/900",
      },
      {
        value: 18,
        suffix: "+",
        label: "Insurance enterprises",
        img: "https://picsum.photos/seed/insurance-about-3/700/900",
      },
      {
        value: 30,
        suffix: "",
        label: "Insurance partners",
        img: "https://picsum.photos/seed/insurance-about-4/700/900",
      },
    ]
  },
  education: {
    heading: "About Education",
    description: [
      "Devopstrio helps educational institutions, edtech enterprises, and learning organizations modernize platforms, enhance student outcomes, and drive digital learning transformation.",
      "With deep expertise in education and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from adaptive learning and student analytics to administrative automation and content delivery.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved learning outcomes, operational efficiency, student engagement, and seamless educational experiences — creating a more personalized, future-ready education ecosystem."
    ],
    stats: [
      {
        value: 200,
        suffix: "+",
        label: "Education experts",
        img: "https://picsum.photos/seed/education-about-1/700/900",
      },
      {
        value: 35,
        suffix: "+",
        label: "AI education models",
        img: "https://picsum.photos/seed/education-about-2/700/900",
      },
      {
        value: 12,
        suffix: "+",
        label: "Educational institutions",
        img: "https://picsum.photos/seed/education-about-3/700/900",
      },
      {
        value: 25,
        suffix: "",
        label: "Education partners",
        img: "https://picsum.photos/seed/education-about-4/700/900",
      },
    ]
  },
  logistics: {
    heading: "About Logistics & Supply Chain",
    description: [
      "Devopstrio helps logistics providers, supply chain enterprises, and transportation leaders modernize operations, enhance visibility, and drive supply chain resilience.",
      "With deep expertise in logistics and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from route optimization and warehouse automation to demand forecasting and real-time tracking.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved operational efficiency, supply chain visibility, cost optimization, and seamless logistics — creating a more agile, resilient supply chain ecosystem."
    ],
    stats: [
      {
        value: 280,
        suffix: "+",
        label: "Logistics experts",
        img: "https://picsum.photos/seed/logistics-about-1/700/900",
      },
      {
        value: 45,
        suffix: "+",
        label: "AI logistics models",
        img: "https://picsum.photos/seed/logistics-about-2/700/900",
      },
      {
        value: 20,
        suffix: "+",
        label: "Logistics enterprises",
        img: "https://picsum.photos/seed/logistics-about-3/700/900",
      },
      {
        value: 38,
        suffix: "",
        label: "Logistics partners",
        img: "https://picsum.photos/seed/logistics-about-4/700/900",
      },
    ]
  },
  government: {
    heading: "About Government & Public Sector",
    description: [
      "Devopstrio helps government agencies, public sector organizations, and civic institutions modernize services, enhance citizen engagement, and drive digital government transformation.",
      "With deep expertise in public sector and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from citizen services and policy analysis to public safety and administrative efficiency.",
      "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved public services, operational efficiency, policy outcomes, and seamless citizen experiences — creating a more responsive, citizen-centric government ecosystem."
    ],
    stats: [
      {
        value: 180,
        suffix: "+",
        label: "Public sector experts",
        img: "https://picsum.photos/seed/government-about-1/700/900",
      },
      {
        value: 30,
        suffix: "+",
        label: "AI government models",
        img: "https://picsum.photos/seed/government-about-2/700/900",
      },
      {
        value: 10,
        suffix: "+",
        label: "Government agencies",
        img: "https://picsum.photos/seed/government-about-3/700/900",
      },
      {
        value: 22,
        suffix: "",
        label: "Public sector partners",
        img: "https://picsum.photos/seed/government-about-4/700/900",
      },
    ]
  }
};

// Default data for unknown industries
const DEFAULT_DATA = {
  heading: "About Devopstrio",
  description: [
    "Devopstrio helps enterprises across industries modernize platforms, streamline operations, and drive digital transformation with AI-powered solutions.",
    "With deep expertise across multiple sectors and expanded platform capabilities through our AI Delivery Framework, Devopstrio enables end-to-end transformation from automation and optimization to innovation and growth.",
    "Leveraging AI, automation, cloud, and data-driven solutions, Devopstrio drives improved outcomes, operational efficiency, innovation, and seamless experiences — creating a more connected, intelligent business ecosystem."
  ],
  stats: [
    {
      value: 1000,
      suffix: "+",
      label: "Industry experts",
      img: "https://picsum.photos/seed/default-about-1/700/900",
    },
    {
      value: 150,
      suffix: "+",
      label: "AI models",
      img: "https://picsum.photos/seed/default-about-2/700/900",
    },
    {
      value: 50,
      suffix: "+",
      label: "Enterprise clients",
      img: "https://picsum.photos/seed/default-about-3/700/900",
    },
    {
      value: 80,
      suffix: "",
      label: "Global partners",
      img: "https://picsum.photos/seed/default-about-4/700/900",
    },
  ]
};

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 5% 100px",
    background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)", 
    fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
  },
  topRow: {
    maxWidth: "1200px",
    margin: "0 auto 56px",
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: "60px",
  },
  heading: {
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    margin: 0,
  },
  paragraph: {
    fontFamily: FONT,
    fontSize: "15.5px",
    lineHeight: 1.85,
    color: "rgba(255,255,255,0.6)",
    margin: 0,
    marginBottom: "18px",
  },
  link: {
    color: "#FFFFFF",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    textDecorationColor: "#E11D48",
    cursor: "pointer",
  },

  grid: {
    maxWidth: "1250px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },
  card: {
    position: "relative",
    borderRadius: "16px 16px 6px 6px",
    overflow: "hidden",
    height: "440px",
  },
  imgEl: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.85) 100%)",
  },
  cardBottom: {
    position: "absolute",
    left: "24px",
    right: "24px",
    bottom: "26px",
    zIndex: 2,
  },
  statNumber: {
    fontFamily: FONT,
    fontSize: "clamp(2.2rem, 3.6vw, 3rem)",
    fontWeight: 800,
    color: "#FFFFFF",
    lineHeight: 1,
    margin: 0,
  },
  statLabel: {
    fontFamily: FONT,
    fontSize: "14.5px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.8)",
    marginTop: "10px",
  },
};

function CountUp({ target, suffix, duration = 1.4 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <h3 style={styles.statNumber} ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </h3>
  );
}

function StatCard({ stat, index }) {
  return (
    <motion.div
      style={styles.card}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={stat.img}
        alt={stat.label}
        style={styles.imgEl}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <div style={styles.overlay} />
      <div style={styles.cardBottom}>
        <CountUp target={stat.value} suffix={stat.suffix} />
        <div style={styles.statLabel}>{stat.label}</div>
      </div>
    </motion.div>
  );
}

export default function AboutIndustry() {
  const location = useLocation();
  const [industryData, setIndustryData] = useState(DEFAULT_DATA);

  useEffect(() => {
    const path = location.pathname;
    console.log("AboutIndustry - Current path:", path);
    
    // Determine which industry data to show based on the path
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
  }, [location.pathname]);

  const stats = industryData.stats || DEFAULT_DATA.stats;
  const localImages = getIndustryImages(location.pathname);

  return (
    <section style={styles.section}>
      <div style={styles.topRow}>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {industryData.heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {industryData.description.map((text, index) => (
            <p key={index} style={styles.paragraph}>
              {text}
            </p>
          ))}
        </motion.div>
      </div>

      <div style={styles.grid}>
        {stats.map((stat, i) => (
          <StatCard
            stat={{ ...stat, img: localImages[i % localImages.length] || stat.img }}
            index={i}
            key={stat.label}
          />
        ))}
      </div>
    </section>
  );
}