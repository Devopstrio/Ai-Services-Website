import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import healthcareProvidersImg from "../../assets/industries/healthcare_who_work_with_providers.svg";
import healthcarePayersImg from "../../assets/industries/healthcare_who_work_with_payers.svg";
import healthcarePharmaImg from "../../assets/industries/healthcare_who_work_with_pharma_biotech_medtech.svg";
import retailBanksImg from "../../assets/industries/banking_who_work_with_retail_banks.svg";
import investmentBanksImg from "../../assets/industries/banking_who_work_with_investment_banks.svg";
import fintechDigitalBanksImg from "../../assets/industries/banking_who_work_with_fintech_digital_banks.svg";
import lifeHealthInsurersImg from "../../assets/industries/insurance_who_work_with_life_health.svg";
import pcInsurersImg from "../../assets/industries/insurance_who_work_with_pc.svg";
import insurtechInnovatorsImg from "../../assets/industries/insurance_who_work_with_insurtech.svg";
import brickMortarRetailersImg from "../../assets/industries/retail_who_work_with_brick_mortar.svg";
import ecommercePlatformsImg from "../../assets/industries/retail_who_work_with_ecommerce_platforms.svg";
import consumerBrandsImg from "../../assets/industries/retail_who_work_with_consumer_brands.svg";
import industrialManufacturersImg from "../../assets/industries/manufacturing_who_work_with_industrial_manufacturers.svg";
import supplyChainLeadersImg from "../../assets/industries/manufacturing_who_work_with_supply_chain_leaders.svg";
import processManufacturersImg from "../../assets/industries/manufacturing_who_work_with_process_manufacturers.svg";
import logisticsProvidersImg from "../../assets/industries/logistics_who_work_with_providers.svg";
import supplyChainEnterprisesImg from "../../assets/industries/logistics_who_work_with_supply_chain_enterprises.svg";
import transportationLeadersImg from "../../assets/industries/logistics_who_work_with_transportation_leaders.svg";
import federalAgenciesImg from "../../assets/industries/government_who_work_with_federal_agencies.svg";
import stateLocalGovernmentImg from "../../assets/industries/government_who_work_with_state_local_government.svg";
import publicSectorEnterprisesImg from "../../assets/industries/government_who_work_with_public_sector_enterprises.svg";
import k12InstitutionsImg from "../../assets/industries/education_who_work_with_k12_institutions.svg";
import higherEducationImg from "../../assets/industries/education_who_work_with_higher_education.svg";
import edtechEnterprisesImg from "../../assets/industries/education_who_work_with_edtech_enterprises.svg";
import telecomOperatorsImg from "../../assets/industries/telecom_who_work_with_operators.svg";
import telecom5gProvidersImg from "../../assets/industries/telecom_who_work_with_5g_technology_providers.svg";
import telecomDigitalProvidersImg from "../../assets/industries/telecom_who_work_with_digital_service_providers.svg";
import realEstatePropertyDevelopersImg from "../../assets/industries/realestate_who_work_with_property_developers.svg";
import realEstateInvestmentImg from "../../assets/industries/realestate_who_work_with_investment.svg";
import realEstatePropertyManagementImg from "../../assets/industries/realestate_who_work_with_property_management.svg";
import energyUtilitiesImg from "../../assets/industries/energy_who_work_with_utilities.svg";
import renewableEnergyProvidersImg from "../../assets/industries/energy_who_work_with_renewable_providers.svg";
import oilGasEnterprisesImg from "../../assets/industries/energy_who_work_with_oil_gas.svg";
import automotiveIndustryLeadersImg from "../../assets/industries/automotive_who_work_with_industry_leaders.svg";
import automotiveInnovatorsImg from "../../assets/industries/automotive_who_work_with_innovators.svg";
import automotiveEnterprisesImg from "../../assets/industries/automotive_who_work_with_enterprises.svg";
import hospitalityHotelsResortsImg from "../../assets/industries/hospitality_who_work_with_hotels_resorts.svg";
import hospitalityTravelPlatformsImg from "../../assets/industries/hospitality_who_work_with_travel_platforms.svg";
import hospitalityGroupsImg from "../../assets/industries/hospitality_who_work_with_hospitality_groups.svg";
import mediaIndustryLeadersImg from "../../assets/industries/media_who_work_with_industry_leaders.svg";
import mediaInnovatorsImg from "../../assets/industries/media_who_work_with_innovators.svg";
import mediaEnterprisesImg from "../../assets/industries/media_who_work_with_enterprises.svg";
import professionalServicesIndustryLeadersImg from "../../assets/industries/professional_services_who_work_with_industry_leaders.svg";
import professionalServicesInnovatorsImg from "../../assets/industries/professional_services_who_work_with_innovators.svg";
import professionalServicesEnterprisesImg from "../../assets/industries/professional_services_who_work_with_enterprises.svg";

/**
 * WhoWeWorkWith.jsx — DevOpsTRIO
 * Dynamic "Who We Work With" section that changes based on the current industry
 * Shows industry-specific groups with icons, titles, and descriptions
 */

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

// Industry-specific data configurations
const INDUSTRY_DATA = {
  healthcare: {
    heading: "Who we work with",
    groups: [
      {
        title: "Healthcare providers",
        desc: "Build next-gen smart hospitals and health systems with an integrated, patient-centric approach. Our transformation expertise helps hospitals improve care quality, streamline operations, and reduce costs.",
        icon: "heart",
      },
      {
        title: "Healthcare payers",
        desc: "Increase member loyalty and workforce productivity through intelligent technologies and secure data sharing, empowering members to manage their own health and wellness.",
        icon: "people",
      },
      {
        title: "Pharma, Biotech and Medtech",
        desc: "From molecule to market, we support you across your full life sciences journey. Data-driven innovation helps deliver precise, timely, and more affordable products that meet growing demand for healthier lives.",
        icon: "capsule",
      },
    ]
  },
  banking: {
    heading: "Who we work with",
    groups: [
      {
        title: "Retail Banks",
        desc: "Transform retail banking with AI-powered personalization, fraud detection, and omnichannel experiences that build customer loyalty and drive growth.",
        icon: "bank",
      },
      {
        title: "Investment Banks",
        desc: "Accelerate trading, risk management, and compliance with intelligent automation and predictive analytics for competitive advantage.",
        icon: "chart",
      },
      {
        title: "Fintech & Digital Banks",
        desc: "Scale innovative financial products with agile technology, robust security, and seamless customer experiences from onboarding to engagement.",
        icon: "rocket",
      },
    ]
  },
  retail: {
    heading: "Who we work with",
    groups: [
      {
        title: "Brick & Mortar Retailers",
        desc: "Modernize store operations with AI-powered inventory management, personalized customer engagement, and seamless omnichannel experiences.",
        icon: "store",
      },
      {
        title: "E-Commerce Platforms",
        desc: "Scale digital commerce with intelligent recommendation engines, dynamic pricing, and supply chain optimization that drives revenue growth.",
        icon: "cart",
      },
      {
        title: "Consumer Brands",
        desc: "Build direct-to-consumer relationships with data-driven marketing, personalized experiences, and AI-powered customer insights.",
        icon: "brand",
      },
    ]
  },
  manufacturing: {
    heading: "Who we work with",
    groups: [
      {
        title: "Industrial Manufacturers",
        desc: "Transform industrial operations with smart factory automation, predictive maintenance, and AI-powered quality control for increased productivity.",
        icon: "factory",
      },
      {
        title: "Supply Chain Leaders",
        desc: "Build resilient supply chains with demand forecasting, real-time visibility, and intelligent logistics that reduce costs and improve reliability.",
        icon: "chain",
      },
      {
        title: "Process Manufacturers",
        desc: "Optimize continuous manufacturing with AI-driven process control, quality optimization, and sustainability analytics for better outcomes.",
        icon: "process",
      },
    ]
  },
  insurance: {
    heading: "Who we work with",
    groups: [
      {
        title: "Life & Health Insurers",
        desc: "Transform underwriting, claims processing, and customer engagement with AI-powered analytics and personalized policy management.",
        icon: "shield",
      },
      {
        title: "P&C Insurers",
        desc: "Enhance risk assessment, fraud detection, and claims automation with intelligent systems that improve accuracy and customer satisfaction.",
        icon: "umbrella",
      },
      {
        title: "Insurtech Innovators",
        desc: "Scale disruptive insurance products with agile technology, seamless onboarding, and AI-driven customer experiences.",
        icon: "lightning",
      },
    ]
  },
  education: {
    heading: "Who we work with",
    groups: [
      {
        title: "K-12 Institutions",
        desc: "Transform K-12 education with adaptive learning platforms, student analytics, and AI-powered tools that personalize the learning journey.",
        icon: "school",
      },
      {
        title: "Higher Education",
        desc: "Modernize universities with intelligent student services, research analytics, and administrative automation for better outcomes.",
        icon: "university",
      },
      {
        title: "EdTech Enterprises",
        desc: "Scale innovative learning solutions with AI-powered content delivery, engagement analytics, and seamless platform experiences.",
        icon: "education-tech",
      },
    ]
  },
  logistics: {
    heading: "Who we work with",
    groups: [
      {
        title: "Logistics Providers",
        desc: "Optimize freight, warehousing, and last-mile delivery with AI-powered route optimization, real-time tracking, and predictive analytics.",
        icon: "truck",
      },
      {
        title: "Supply Chain Enterprises",
        desc: "Build intelligent supply chains with demand forecasting, inventory optimization, and automated logistics that reduce costs and improve service.",
        icon: "warehouse",
      },
      {
        title: "Transportation Leaders",
        desc: "Transform transportation with fleet optimization, predictive maintenance, and AI-driven logistics that improve efficiency and sustainability.",
        icon: "transport",
      },
    ]
  },
  government: {
    heading: "Who we work with",
    groups: [
      {
        title: "Federal Agencies",
        desc: "Modernize federal services with AI-powered citizen engagement, policy analytics, and secure digital transformation at scale.",
        icon: "federal",
      },
      {
        title: "State & Local Government",
        desc: "Improve local services with intelligent resource allocation, citizen portals, and data-driven decision making for better communities.",
        icon: "local",
      },
      {
        title: "Public Sector Enterprises",
        desc: "Transform public services with automation, analytics, and AI that improve efficiency, transparency, and citizen satisfaction.",
        icon: "public",
      },
    ]
  },
  telecom: {
    heading: "Who we work with",
    groups: [
      {
        title: "Telecom Operators",
        desc: "Transform network operations with AI-powered automation, predictive maintenance, and customer experience optimization.",
        icon: "network",
      },
      {
        title: "5G & Technology Providers",
        desc: "Accelerate 5G deployment with intelligent planning, network optimization, and AI-driven service orchestration.",
        icon: "5g",
      },
      {
        title: "Digital Service Providers",
        desc: "Scale digital services with cloud-native platforms, AI-powered analytics, and seamless customer experiences.",
        icon: "digital",
      },
    ]
  },
  energy: {
    heading: "Who we work with",
    groups: [
      {
        title: "Energy Utilities",
        desc: "Transform grid operations with AI-powered monitoring, predictive maintenance, and intelligent energy management.",
        icon: "energy",
      },
      {
        title: "Renewable Energy Providers",
        desc: "Accelerate renewable energy integration with weather prediction, grid optimization, and sustainability analytics.",
        icon: "solar",
      },
      {
        title: "Oil & Gas Enterprises",
        desc: "Optimize exploration, production, and distribution with AI-driven analytics, predictive maintenance, and operational efficiency.",
        icon: "oil",
      },
    ]
  },
  realestate: {
    heading: "Who we work with",
    groups: [
      {
        title: "Property Developers",
        desc: "Transform property development with AI-powered market analysis, smart building design, and sustainable construction optimization.",
        icon: "building",
      },
      {
        title: "Real Estate Investment",
        desc: "Optimize investment portfolios with predictive analytics, market intelligence, and AI-powered property valuation.",
        icon: "investment",
      },
      {
        title: "Property Management",
        desc: "Enhance property management with smart building operations, tenant engagement, and AI-powered maintenance optimization.",
        icon: "management",
      },
    ]
  },
  hospitality: {
    heading: "Who we work with",
    groups: [
      {
        title: "Hotels & Resorts",
        desc: "Transform guest experiences with AI-powered personalization, operational automation, and intelligent revenue management.",
        icon: "hotel",
      },
      {
        title: "Travel Platforms",
        desc: "Scale travel services with intelligent recommendations, dynamic pricing, and seamless booking experiences.",
        icon: "travel",
      },
      {
        title: "Hospitality Groups",
        desc: "Optimize multi-property operations with centralized AI, predictive analytics, and unified guest engagement.",
        icon: "hospitality",
      },
    ]
  }
};

// Default data for unknown industries
const DEFAULT_DATA = {
  heading: "Who we work with",
  groups: [
    {
      title: "Industry Leaders",
      desc: "We partner with industry leaders across sectors to drive digital transformation, innovation, and sustainable growth through AI-powered solutions.",
      icon: "leaders",
    },
    {
      title: "Innovators & Startups",
      desc: "Accelerate innovation with agile technology, AI expertise, and scalable platforms that help startups grow and disrupt markets.",
      icon: "innovators",
    },
    {
      title: "Enterprises",
      desc: "Transform enterprise operations with intelligent automation, data-driven insights, and AI solutions that deliver measurable business outcomes.",
      icon: "enterprise",
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
  heading: {
    maxWidth: "1200px",
    margin: "0 auto 56px",
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "50px",
  },
  col: {
    transition: "all 0.3s ease",
  },
  iconWrap: {
    marginBottom: "26px",
  },
  title: {
    fontFamily: FONT,
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#E11D48",
    margin: 0,
    marginBottom: "16px",
  },
  desc: {
    fontFamily: FONT,
    fontSize: "14.5px",
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.7)",
    margin: 0,
  },
};

// Icon components (expanded set)
const IconComponents = {
  // Healthcare
  heart: () => (
    <img src={healthcareProvidersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  people: () => (
    <img src={healthcarePayersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  capsule: () => (
    <img src={healthcarePharmaImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Banking
  bank: () => (
    <img src={retailBanksImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  chart: () => (
    <img src={investmentBanksImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  rocket: () => (
    <img src={fintechDigitalBanksImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Retail
  store: () => (
    <img src={brickMortarRetailersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  cart: () => (
    <img src={ecommercePlatformsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  brand: () => (
    <img src={consumerBrandsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Manufacturing
  factory: () => (
    <img src={industrialManufacturersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  chain: () => (
    <img src={supplyChainLeadersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  process: () => (
    <img src={processManufacturersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Insurance
  shield: () => (
    <img src={lifeHealthInsurersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  umbrella: () => (
    <img src={pcInsurersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  lightning: () => (
    <img src={insurtechInnovatorsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Education
  school: () => (
    <img src={k12InstitutionsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  university: () => (
    <img src={higherEducationImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  "education-tech": () => (
    <img src={edtechEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Logistics
  truck: () => (
    <img src={logisticsProvidersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  warehouse: () => (
    <img src={supplyChainEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  transport: () => (
    <img src={transportationLeadersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Government
  federal: () => (
    <img src={federalAgenciesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  local: () => (
    <img src={stateLocalGovernmentImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  public: () => (
    <img src={publicSectorEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Telecom
  network: () => (
    <img src={telecomOperatorsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  "5g": () => (
    <img src={telecom5gProvidersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  digital: () => (
    <img src={telecomDigitalProvidersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Energy
  energy: () => (
    <img src={energyUtilitiesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  solar: () => (
    <img src={renewableEnergyProvidersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  oil: () => (
    <img src={oilGasEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Real Estate
  building: () => (
    <img src={realEstatePropertyDevelopersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  investment: () => (
    <img src={realEstateInvestmentImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  management: () => (
    <img src={realEstatePropertyManagementImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Hospitality
  hotel: () => (
    <img src={hospitalityHotelsResortsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  travel: () => (
    <img src={hospitalityTravelPlatformsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  hospitality: () => (
    <img src={hospitalityGroupsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />
  ),
  
  // Default
  leaders: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="24" r="12" stroke="#E11D48" strokeWidth="4"/>
      <path d="M12 56C12 44 20 36 36 36C52 36 60 44 60 56" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <rect x="36" y="36" width="4" height="20" rx="2" fill="#FF6E8E"/>
    </svg>
  ),
  innovators: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="28" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 20V36L48 44" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  enterprise: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="12" y="32" width="48" height="32" rx="4" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 12L12 32H60L36 12Z" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
      <circle cx="36" cy="48" r="4" fill="#E11D48"/>
    </svg>
  ),
};

const AUTOMOTIVE_ICON_COMPONENTS = {
  leaders: () => <img src={automotiveIndustryLeadersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
  innovators: () => <img src={automotiveInnovatorsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
  enterprise: () => <img src={automotiveEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
};
const MEDIA_ICON_COMPONENTS = {
  leaders: () => <img src={mediaIndustryLeadersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
  innovators: () => <img src={mediaInnovatorsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
  enterprise: () => <img src={mediaEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
};
const PROFESSIONAL_SERVICES_ICON_COMPONENTS = {
  leaders: () => <img src={professionalServicesIndustryLeadersImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
  innovators: () => <img src={professionalServicesInnovatorsImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
  enterprise: () => <img src={professionalServicesEnterprisesImg} alt="" width="72" height="72" style={{ objectFit: "contain" }} />,
};

function Column({ group, index, iconComponents }) {
  const Icon = iconComponents[group.icon] || iconComponents.leaders;
  
  return (
    <motion.div
      style={styles.col}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={styles.iconWrap}
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Icon />
      </motion.div>
      <h3 style={styles.title}>{group.title}</h3>
      <p style={styles.desc}>{group.desc}</p>
    </motion.div>
  );
}

export default function WhoWeWorkWith() {
  const location = useLocation();
  const [industryData, setIndustryData] = useState(DEFAULT_DATA);

  useEffect(() => {
    const path = location.pathname;
    console.log("WhoWeWorkWith - Current path:", path);
    
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
    } else if (path.includes("hospitality-travel") || path.includes("hospitality")) {
      data = INDUSTRY_DATA.hospitality;
    }
    
    setIndustryData(data);
  }, [location.pathname]);

  const groups = industryData.groups || DEFAULT_DATA.groups;
  const iconComponents = location.pathname.includes("automotive")
    ? { ...IconComponents, ...AUTOMOTIVE_ICON_COMPONENTS }
    : location.pathname.includes("media-entertainment")
      ? { ...IconComponents, ...MEDIA_ICON_COMPONENTS }
      : location.pathname.includes("professional-services")
        ? { ...IconComponents, ...PROFESSIONAL_SERVICES_ICON_COMPONENTS }
      : IconComponents;

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
        {groups.map((group, i) => (
          <Column group={group} index={i} iconComponents={iconComponents} key={group.title} />
        ))}
      </div>
    </section>
  );
}