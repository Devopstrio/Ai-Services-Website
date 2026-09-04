import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 62C36 62 10 46.5 10 27.5C10 17.8 17.6 10 27 10C31 10 34.5 12 36 15C37.5 12 41 10 45 10C54.4 10 62 17.8 62 27.5C62 46.5 36 62 36 62Z" stroke="#E11D48" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M18 33H27L31 24L38 42L42 33H54" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  people: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="22" cy="20" r="9" stroke="#E11D48" strokeWidth="4"/>
      <path d="M8 44c0-8 6.3-14 14-14s14 6 14 14" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <rect x="42" y="10" width="14" height="30" rx="7" transform="rotate(20 49 25)" stroke="#FF6E8E" strokeWidth="4"/>
      <line x1="43" y1="26" x2="53" y2="22" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="58" cy="46" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <line x1="54" y1="46" x2="62" y2="46" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  capsule: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="14" y="30" width="52" height="22" rx="11" transform="rotate(-35 40 41)" stroke="#E11D48" strokeWidth="4"/>
      <path d="M31 24L49 42" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="40" cy="33" r="6" fill="#FF6E8E" opacity="0.35"/>
    </svg>
  ),
  
  // Banking
  bank: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="32" width="56" height="32" rx="4" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 8L8 32H64L36 8Z" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
      <line x1="28" y1="40" x2="44" y2="40" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  chart: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M8 56H64" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <path d="M28 56V32L44 16L52 24L64 12" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="28" cy="32" r="4" fill="#E11D48"/>
      <circle cx="44" cy="16" r="4" fill="#E11D48"/>
      <circle cx="64" cy="12" r="4" fill="#E11D48"/>
    </svg>
  ),
  rocket: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 8C28 20 22 32 22 44C22 50 24 56 36 62C48 56 50 50 50 44C50 32 44 20 36 8Z" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="36" cy="36" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <path d="M22 44L8 58" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 44L64 58" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  
  // Retail
  store: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="6" y="28" width="60" height="34" rx="4" stroke="#E11D48" strokeWidth="4"/>
      <path d="M14 28L18 12H54L58 28" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="28" y1="40" x2="44" y2="40" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  cart: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M12 16H64L58 40H18L12 16Z" stroke="#E11D48" strokeWidth="4" strokeLinejoin="round"/>
      <circle cx="24" cy="56" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <circle cx="48" cy="56" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <line x1="16" y1="16" x2="8" y2="8" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  brand: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="28" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 8C36 8 44 20 44 36C44 52 36 64 36 64" stroke="#FF6E8E" strokeWidth="4"/>
      <path d="M36 8C36 8 28 20 28 36C28 52 36 64 36 64" stroke="#FF6E8E" strokeWidth="4"/>
      <circle cx="36" cy="36" r="8" fill="#E11D48" opacity="0.3"/>
    </svg>
  ),
  
  // Manufacturing
  factory: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="40" width="56" height="24" rx="2" stroke="#E11D48" strokeWidth="4"/>
      <path d="M20 40V24L36 32L52 24V40" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
      <line x1="28" y1="48" x2="44" y2="48" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  chain: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="24" cy="36" r="12" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="48" cy="36" r="12" stroke="#FF6E8E" strokeWidth="4"/>
      <path d="M36 28L40 24" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 44L32 48" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  process: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M12 36H28L36 20L44 52L52 36H60" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="36" r="6" fill="#FF6E8E" opacity="0.4"/>
      <circle cx="60" cy="36" r="6" fill="#FF6E8E" opacity="0.4"/>
    </svg>
  ),
  
  // Insurance
  shield: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 8L12 16V28C12 42 22 56 36 60C50 56 60 42 60 28V16L36 8Z" stroke="#E11D48" strokeWidth="4" strokeLinejoin="round"/>
      <line x1="28" y1="36" x2="44" y2="36" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="36" y1="28" x2="36" y2="44" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  umbrella: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M12 40C12 26 22 10 36 10C50 10 60 26 60 40" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 10V24" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="36" cy="36" r="4" fill="#E11D48"/>
    </svg>
  ),
  lightning: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M44 12L24 36H40L28 60" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="44" cy="12" r="6" fill="#FF6E8E" opacity="0.4"/>
      <circle cx="28" cy="60" r="6" fill="#FF6E8E" opacity="0.4"/>
    </svg>
  ),
  
  // Education
  school: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="32" width="56" height="32" rx="2" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 8L8 32H64L36 8Z" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
      <circle cx="36" cy="48" r="6" fill="#E11D48" opacity="0.3"/>
    </svg>
  ),
  university: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M12 56H60" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <rect x="20" y="40" width="32" height="16" stroke="#E11D48" strokeWidth="4"/>
      <path d="M20 40L36 20L52 40" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
  ),
  "education-tech": () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="12" y="20" width="48" height="36" rx="4" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 20V36" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="24" y1="28" x2="48" y2="28" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="36" cy="44" r="4" fill="#E11D48"/>
    </svg>
  ),
  
  // Logistics
  truck: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="28" width="40" height="28" rx="2" stroke="#E11D48" strokeWidth="4"/>
      <rect x="48" y="36" width="16" height="20" rx="2" stroke="#FF6E8E" strokeWidth="4"/>
      <circle cx="18" cy="56" r="8" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="56" cy="56" r="8" stroke="#FF6E8E" strokeWidth="4"/>
    </svg>
  ),
  warehouse: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="32" width="56" height="32" rx="2" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 16L8 32H64L36 16Z" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
      <line x1="28" y1="40" x2="44" y2="40" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  transport: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M8 44H64" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <rect x="12" y="28" width="48" height="16" rx="2" stroke="#FF6E8E" strokeWidth="4"/>
      <circle cx="24" cy="52" r="8" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="48" cy="52" r="8" stroke="#E11D48" strokeWidth="4"/>
    </svg>
  ),
  
  // Government
  federal: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 8L8 28H64L36 8Z" stroke="#E11D48" strokeWidth="4" strokeLinejoin="round"/>
      <rect x="20" y="28" width="32" height="36" rx="2" stroke="#FF6E8E" strokeWidth="4"/>
      <line x1="28" y1="38" x2="44" y2="38" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  local: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="28" r="16" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 44V64" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <rect x="20" y="48" width="32" height="16" rx="2" stroke="#FF6E8E" strokeWidth="4"/>
    </svg>
  ),
  public: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="28" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="36" cy="36" r="12" stroke="#FF6E8E" strokeWidth="4"/>
      <line x1="36" y1="8" x2="36" y2="16" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <line x1="36" y1="56" x2="36" y2="64" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  
  // Telecom
  network: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="20" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="36" cy="18" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <circle cx="56" cy="44" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <circle cx="16" cy="44" r="8" stroke="#FF6E8E" strokeWidth="4"/>
    </svg>
  ),
  "5g": () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M8 28L28 28L8 48L28 48" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 16L64 16L40 48L64 48" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  digital: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="12" y="20" width="48" height="32" rx="4" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="36" cy="36" r="8" stroke="#FF6E8E" strokeWidth="4"/>
      <line x1="24" y1="28" x2="48" y2="28" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="24" y1="44" x2="48" y2="44" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  
  // Energy
  energy: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 12L12 40H36L24 60" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="48" cy="36" r="16" stroke="#FF6E8E" strokeWidth="4"/>
    </svg>
  ),
  solar: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="12" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 16V8" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 64V56" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M16 36H8" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <path d="M64 36H56" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  oil: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M24 8L24 48" stroke="#E11D48" strokeWidth="4" strokeLinecap="round"/>
      <path d="M48 16L48 56" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="24" cy="48" r="8" stroke="#E11D48" strokeWidth="4"/>
      <circle cx="48" cy="56" r="8" stroke="#FF6E8E" strokeWidth="4"/>
    </svg>
  ),
  
  // Real Estate
  building: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="12" y="20" width="48" height="44" rx="2" stroke="#E11D48" strokeWidth="4"/>
      <path d="M24 20V12L48 12V20" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
      <line x1="28" y1="28" x2="44" y2="28" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="28" y1="36" x2="44" y2="36" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  investment: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M8 48L24 32L40 44L56 28" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="32" r="6" fill="#FF6E8E" opacity="0.4"/>
      <circle cx="40" cy="44" r="6" fill="#FF6E8E" opacity="0.4"/>
      <circle cx="56" cy="28" r="6" fill="#FF6E8E" opacity="0.4"/>
    </svg>
  ),
  management: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="24" width="56" height="40" rx="4" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 24V16" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="20" y1="32" x2="52" y2="32" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  
  // Hospitality
  hotel: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="24" width="56" height="40" rx="2" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 24V16" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
      <line x1="24" y1="32" x2="48" y2="32" stroke="#FF6E8E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  travel: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="28" stroke="#E11D48" strokeWidth="4"/>
      <path d="M36 8L44 24L60 28L46 40L52 56L36 48L20 56L26 40L12 28L28 24L36 8Z" stroke="#FF6E8E" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
  ),
  hospitality: () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 20L12 36L20 44L36 60L52 44L60 36L36 20Z" stroke="#E11D48" strokeWidth="4" strokeLinejoin="round"/>
      <circle cx="36" cy="36" r="6" fill="#FF6E8E" opacity="0.4"/>
    </svg>
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

function Column({ group, index }) {
  const Icon = IconComponents[group.icon] || IconComponents.leaders;
  
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
          <Column group={group} index={i} key={group.title} />
        ))}
      </div>
    </section>
  );
}