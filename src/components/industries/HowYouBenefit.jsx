import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { getIndustryImages } from "../../data/industries/industryImages";

/**
 * HowYouBenefit.jsx — DevOpsTRIO
 * Dynamic "How You Benefit" section that changes based on the current industry
 * Shows industry-specific benefit cards with images and descriptions
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

// Industry-specific data configurations
const INDUSTRY_DATA = {
  healthcare: {
    heading: "How you benefit",
    cards: [
      {
        title: "Enhanced experience across all stakeholders",
        desc: "We deliver an improved omnichannel experience through digital channels that foster **better engagement and collaboration** among patients, members, caregivers, and physicians. Our innovative solutions — digital front doors, AI applications, and chatbots — help **reduce barriers to care**.",
        img: "https://picsum.photos/seed/healthcare-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Well-being of your staff and care team",
        desc: "Healthcare organizations **face rising burnout** and operational inefficiencies. Interoperability, agentic AI, and smart hospital solutions help break down data silos, **optimize workflows and enable more effective interventions** for care teams.",
        img: "https://picsum.photos/seed/healthcare-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Data-driven population care and well-being",
        desc: "Data management tools create a single pane of glass view of patient data. Advanced analytics and AI models assess population risk to **enable earlier interventions**, advancing value-based care and helping **speed up drug research and development**.",
        img: "https://picsum.photos/seed/healthcare-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Health equity",
        desc: "We help you **improve access to care**, including home health, through virtual triage, telehealth, and remote monitoring — even in rural areas. Predictive metrics support **tailored outreach and personalized engagement**.",
        img: "https://picsum.photos/seed/healthcare-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Cost reduction",
        desc: "We support clients in **modernizing legacy systems and implementing modern infrastructure** with secure cloud and cybersecurity solutions — reducing technical debt and lowering costs while improving interoperability across every system.",
        img: "https://picsum.photos/seed/healthcare-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  banking: {
    heading: "How you benefit",
    cards: [
      {
        title: "Enhanced customer experience",
        desc: "Deliver **personalized banking experiences** through AI-powered recommendations, seamless omnichannel interactions, and intelligent customer service that **builds loyalty and trust**.",
        img: "https://picsum.photos/seed/banking-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Operational efficiency",
        desc: "Automate back-office operations, streamline workflows, and **reduce costs** with intelligent automation. Our solutions help you **eliminate manual processes** and improve accuracy across all banking operations.",
        img: "https://picsum.photos/seed/banking-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Risk management and compliance",
        desc: "Proactively identify and **mitigate risks** with AI-powered intelligence. Automate compliance monitoring, detect fraud in real-time, and **ensure regulatory adherence** with advanced analytics.",
        img: "https://picsum.photos/seed/banking-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Data-driven insights",
        desc: "Transform data into **actionable intelligence** for better decision-making. Our analytics solutions help you **unlock customer insights**, optimize pricing, and identify growth opportunities.",
        img: "https://picsum.photos/seed/banking-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Innovation and growth",
        desc: "Accelerate **digital transformation** and drive innovation with AI-powered solutions. We help you **launch new products faster**, enter new markets, and stay ahead of the competition.",
        img: "https://picsum.photos/seed/banking-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  retail: {
    heading: "How you benefit",
    cards: [
      {
        title: "Personalized customer experiences",
        desc: "Deliver **tailored shopping experiences** with AI-powered recommendations, personalized offers, and seamless omnichannel interactions that **drive customer loyalty** and increase revenue.",
        img: "https://picsum.photos/seed/retail-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Supply chain optimization",
        desc: "Optimize your **supply chain operations** with AI-powered demand forecasting, inventory management, and logistics optimization that **reduce costs** and improve efficiency.",
        img: "https://picsum.photos/seed/retail-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Operational excellence",
        desc: "Streamline retail operations with **intelligent automation**, from inventory management to workforce scheduling. Our solutions help you **eliminate inefficiencies** and improve productivity.",
        img: "https://picsum.photos/seed/retail-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Data-driven merchandising",
        desc: "Leverage **customer insights and analytics** to optimize merchandising strategies. Our AI solutions help you **predict trends**, optimize pricing, and maximize revenue across all channels.",
        img: "https://picsum.photos/seed/retail-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Sustainability and ESG",
        desc: "Embed **sustainable practices** into your retail operations with AI-powered solutions that **reduce waste**, optimize energy usage, and build consumer trust through responsible business practices.",
        img: "https://picsum.photos/seed/retail-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  manufacturing: {
    heading: "How you benefit",
    cards: [
      {
        title: "Predictive maintenance",
        desc: "**Eliminate unplanned downtime** with AI-powered predictive maintenance. Our solutions help you **predict equipment failures** before they occur and optimize maintenance schedules.",
        img: "https://picsum.photos/seed/manufacturing-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Quality excellence",
        desc: "Ensure **product quality** with AI-powered inspection systems. Computer vision and deep learning help you **detect defects** in real-time and maintain consistent quality standards.",
        img: "https://picsum.photos/seed/manufacturing-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Supply chain resilience",
        desc: "Build **resilient supply chains** with predictive intelligence. Our solutions help you **optimize inventory**, predict disruptions, and ensure on-time delivery.",
        img: "https://picsum.photos/seed/manufacturing-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Operational efficiency",
        desc: "Transform manufacturing operations with **smart factory automation** and intelligent process optimization that **increase productivity** and reduce operational costs.",
        img: "https://picsum.photos/seed/manufacturing-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Workforce empowerment",
        desc: "Empower your **manufacturing workforce** with AI-powered tools for training, safety monitoring, and real-time decision support that **improve performance** and job satisfaction.",
        img: "https://picsum.photos/seed/manufacturing-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  insurance: {
    heading: "How you benefit",
    cards: [
      {
        title: "Streamlined claims processing",
        desc: "**Accelerate claims processing** with AI-powered automation. Our solutions help you **reduce processing time**, improve accuracy, and enhance customer satisfaction.",
        img: "https://picsum.photos/seed/insurance-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Risk assessment and underwriting",
        desc: "Transform underwriting with **predictive risk analytics**. Our AI solutions help you **assess risk more accurately**, price policies competitively, and make faster decisions.",
        img: "https://picsum.photos/seed/insurance-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Fraud detection",
        desc: "Protect your business with **AI-powered fraud prevention**. Our solutions help you **detect suspicious patterns**, prevent fraudulent claims, and reduce losses.",
        img: "https://picsum.photos/seed/insurance-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Customer engagement",
        desc: "Deliver **personalized insurance experiences** at scale. Our solutions help you **create tailored policy recommendations** and proactive engagement strategies.",
        img: "https://picsum.photos/seed/insurance-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Regulatory compliance",
        desc: "Stay ahead of **regulatory requirements** with intelligent compliance solutions. Our AI systems help you **automate reporting**, ensure compliance, and adapt to evolving regulations.",
        img: "https://picsum.photos/seed/insurance-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  education: {
    heading: "How you benefit",
    cards: [
      {
        title: "Personalized learning",
        desc: "Deliver **personalized learning journeys** with AI-powered adaptive learning platforms that **adapt to each student's pace** and learning style.",
        img: "https://picsum.photos/seed/education-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Student success",
        desc: "**Improve student outcomes** with predictive analytics. Our solutions help you **identify at-risk students** early and implement effective interventions.",
        img: "https://picsum.photos/seed/education-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Administrative efficiency",
        desc: "Streamline **administrative operations** with intelligent automation. Our solutions help you **reduce manual tasks** and improve operational efficiency.",
        img: "https://picsum.photos/seed/education-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Content delivery",
        desc: "Transform **learning content** with AI-powered delivery systems. Our solutions help you **create engaging, interactive** and personalized learning materials.",
        img: "https://picsum.photos/seed/education-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Digital transformation",
        desc: "Transform **educational institutions** with digital innovation. We help you **create seamless digital experiences** for students, faculty, and staff.",
        img: "https://picsum.photos/seed/education-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  logistics: {
    heading: "How you benefit",
    cards: [
      {
        title: "Route optimization",
        desc: "Optimize **delivery routes** with AI-powered algorithms that **reduce fuel costs**, improve delivery times, and enhance customer satisfaction.",
        img: "https://picsum.photos/seed/logistics-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Warehouse automation",
        desc: "Transform **warehouse operations** with AI-powered automation. Our solutions help you **increase efficiency**, reduce errors, and improve inventory management.",
        img: "https://picsum.photos/seed/logistics-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Demand forecasting",
        desc: "**Predict demand accurately** with machine learning. Our solutions help you **optimize inventory levels**, reduce stockouts, and improve supply chain planning.",
        img: "https://picsum.photos/seed/logistics-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Supply chain visibility",
        desc: "Gain **real-time visibility** into your supply chain with predictive analytics. Our solutions help you **track shipments**, monitor performance, and identify bottlenecks.",
        img: "https://picsum.photos/seed/logistics-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Cost optimization",
        desc: "**Reduce logistics costs** with intelligent planning and optimization. Our AI solutions help you **minimize waste**, improve resource utilization, and increase profitability.",
        img: "https://picsum.photos/seed/logistics-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  government: {
    heading: "How you benefit",
    cards: [
      {
        title: "Citizen services",
        desc: "**Modernize government services** with AI-powered automation. Our solutions help you **improve response times**, reduce wait times, and enhance citizen satisfaction.",
        img: "https://picsum.photos/seed/government-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Policy analytics",
        desc: "**Improve policy outcomes** with advanced analytics. Our solutions help you **analyze data**, model scenarios, and make evidence-based policy decisions.",
        img: "https://picsum.photos/seed/government-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Public safety",
        desc: "**Enhance public safety** with predictive analytics and AI-powered solutions that **improve emergency response**, optimize resource allocation, and prevent crime.",
        img: "https://picsum.photos/seed/government-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Operational efficiency",
        desc: "Streamline **government operations** with intelligent automation. Our solutions help you **reduce costs**, improve efficiency, and deliver better services.",
        img: "https://picsum.photos/seed/government-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Digital transformation",
        desc: "Transform **public sector services** with digital innovation. We help you **create seamless digital experiences** for citizens and businesses.",
        img: "https://picsum.photos/seed/government-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  telecom: {
    heading: "How you benefit",
    cards: [
      {
        title: "Network optimization",
        desc: "**Optimize network performance** with AI-powered resource allocation and monitoring that **improves reliability**, reduces congestion, and enhances user experience.",
        img: "https://picsum.photos/seed/telecom-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Customer retention",
        desc: "**Predict customer churn** and improve retention with behavioral analytics. Our solutions help you **identify at-risk customers** and implement effective retention strategies.",
        img: "https://picsum.photos/seed/telecom-benefit-2/700/560",
        span: 2,
      },
      {
        title: "5G acceleration",
        desc: "**Accelerate 5G deployment** with AI-driven planning and optimization. Our solutions help you **reduce deployment costs** and maximize network efficiency.",
        img: "https://picsum.photos/seed/telecom-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Operational excellence",
        desc: "Achieve **operational excellence** with intelligent automation. Our solutions help you **reduce costs**, improve service quality, and enhance customer satisfaction.",
        img: "https://picsum.photos/seed/telecom-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Digital services",
        desc: "**Scale digital services** with cloud-native platforms and AI-powered analytics. We help you **launch new services faster** and create seamless customer experiences.",
        img: "https://picsum.photos/seed/telecom-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  energy: {
    heading: "How you benefit",
    cards: [
      {
        title: "Grid optimization",
        desc: "**Balance energy supply and demand** with AI-powered grid management systems that **improve reliability**, reduce costs, and enhance sustainability.",
        img: "https://picsum.photos/seed/energy-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Predictive maintenance",
        desc: "**Predict equipment failures** before they occur with intelligent maintenance systems that **reduce downtime** and extend asset life.",
        img: "https://picsum.photos/seed/energy-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Sustainability analytics",
        desc: "**Improve sustainability** with energy consumption optimization and carbon tracking. Our solutions help you **reduce environmental impact** and achieve ESG goals.",
        img: "https://picsum.photos/seed/energy-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Renewable integration",
        desc: "**Optimize renewable energy integration** with weather pattern prediction and forecasting. Our solutions help you **maximize renewable output** and grid stability.",
        img: "https://picsum.photos/seed/energy-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Customer engagement",
        desc: "**Enhance customer engagement** with smart metering and personalized energy insights. Our solutions help you **improve customer satisfaction** and reduce energy consumption.",
        img: "https://picsum.photos/seed/energy-benefit-5/900/560",
        span: 3,
      },
    ]
  },
  realestate: {
    heading: "How you benefit",
    cards: [
      {
        title: "Property valuation",
        desc: "**Automate property valuation** with AI-powered market analysis. Our solutions help you **make informed investment decisions** and maximize returns.",
        img: "https://picsum.photos/seed/realestate-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Market analytics",
        desc: "**Predict market trends** and identify opportunities with predictive analytics. Our solutions help you **stay ahead of the market** and make strategic decisions.",
        img: "https://picsum.photos/seed/realestate-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Smart buildings",
        desc: "**Optimize building operations** with smart sensors and AI-powered management systems that **reduce costs**, improve efficiency, and enhance tenant experience.",
        img: "https://picsum.photos/seed/realestate-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Investment optimization",
        desc: "**Optimize investment portfolios** with AI-powered analytics. Our solutions help you **maximize returns**, manage risk, and identify opportunities.",
        img: "https://picsum.photos/seed/realestate-benefit-4/900/560",
        span: 3,
      },
      {
        title: "Property management",
        desc: "**Streamline property management** with automated maintenance and compliance solutions. Our AI systems help you **reduce costs** and improve service quality.",
        img: "https://picsum.photos/seed/realestate-benefit-5/900/560",
        span: 3,
      },
    ]
  }
};

// Default data for unknown industries
const DEFAULT_DATA = {
  heading: "How you benefit",
  cards: [
    {
      title: "Enhanced customer experience",
      desc: "Deliver **exceptional customer experiences** with AI-powered solutions that **increase satisfaction**, build loyalty, and drive business growth.",
      img: "https://picsum.photos/seed/default-benefit-1/700/560",
      span: 2,
    },
    {
      title: "Operational efficiency",
      desc: "**Optimize operations** with intelligent automation. Our solutions help you **reduce costs**, improve efficiency, and achieve better outcomes.",
      img: "https://picsum.photos/seed/default-benefit-2/700/560",
      span: 2,
    },
    {
      title: "Data-driven insights",
      desc: "**Transform data into actionable intelligence** for better decision-making. Our analytics solutions help you **unlock insights** and drive innovation.",
      img: "https://picsum.photos/seed/default-benefit-3/700/560",
      span: 2,
    },
    {
      title: "Innovation and growth",
      desc: "**Accelerate innovation** and drive growth with AI-powered solutions. We help you **launch new products faster** and stay ahead of the competition.",
      img: "https://picsum.photos/seed/default-benefit-4/900/560",
      span: 3,
    },
    {
      title: "Sustainability",
      desc: "**Embed sustainable practices** with AI-powered solutions that **reduce environmental impact**, improve efficiency, and build trust with stakeholders.",
      img: "https://picsum.photos/seed/default-benefit-5/900/560",
      span: 3,
    },
  ]
};

function parseBold(str) {
  return str.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#FFFFFF", fontWeight: 700 }}>
          {chunk.slice(2, -2)}
        </strong>
      );
    }
    return chunk;
  });
}

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "90px 5% 130px",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)", 
          fontFamily: FONT,
    boxSizing: "border-box",
    textAlign: "left",
    marginTop: "-60px",
  },
  heading: {
    maxWidth: "1200px",
    margin: "0 auto 46px",
    fontFamily: FONT,
    color: "#FFFFFF",
    fontSize: "clamp(1.9rem, 3.2vw, 2.5rem)",
    fontWeight: 700,
    letterSpacing: "-0.015em",
  },
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "24px",
    rowGap: "70px",
  },
  cardWrap: {
    position: "relative",
  },
  imgBox: {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    height: "260px",
  },
  imgEl: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)",
  },
  panel: {
    position: "relative",
    marginTop: "-70px",
    marginLeft: "22px",
    marginRight: "22px",
    backgroundColor: "#121212",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "26px 26px 28px",
    boxSizing: "border-box",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    transition: "all 0.35s ease",
  },
  panelTitle: {
    fontFamily: FONT,
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#E11D48",
    margin: 0,
    marginBottom: "14px",
    lineHeight: 1.3,
  },
  panelDesc: {
    fontFamily: FONT,
    fontSize: "13.5px",
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.6)",
    margin: 0,
  },
};

function BenefitCard({ card, index }) {
  return (
    <motion.div
      style={{ ...styles.cardWrap, gridColumn: `span ${card.span}` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={styles.imgBox}>
        <motion.img
          src={card.img}
          alt={card.title}
          style={styles.imgEl}
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.06 }}
        />
        <div style={styles.imgOverlay} />
      </div>

      <motion.div
        style={styles.panel}
        whileHover={{
          y: -6,
          borderColor: "rgba(225,29,72,0.4)",
          boxShadow: "0 24px 48px rgba(225,29,72,0.18)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <h3 style={styles.panelTitle}>{card.title}</h3>
        <p style={styles.panelDesc}>{parseBold(card.desc)}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HowYouBenefit() {
  const location = useLocation();
  const [industryData, setIndustryData] = useState(DEFAULT_DATA);

  useEffect(() => {
    const path = location.pathname;
    console.log("HowYouBenefit - Current path:", path);
    
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
    } else if (path.includes("telecommunications") || path.includes("telecom")) {
      data = INDUSTRY_DATA.telecom;
    } else if (path.includes("energy-utilities") || path.includes("energy")) {
      data = INDUSTRY_DATA.energy;
    } else if (path.includes("real-estate") || path.includes("realestate")) {
      data = INDUSTRY_DATA.realestate;
    }
    
    setIndustryData(data);
  }, [location.pathname]);

  const cards = industryData.cards || DEFAULT_DATA.cards;
  const localImages = getIndustryImages(location.pathname);

  return (
    <section style={styles.section}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {industryData.heading}
      </motion.h2>

      <div style={styles.grid}>
        {cards.map((card, i) => (
          <BenefitCard
            card={{ ...card, img: localImages[i % localImages.length] || card.img }}
            index={i}
            key={card.title}
          />
        ))}
      </div>
    </section>
  );
}