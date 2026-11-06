import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { getIndustryImages } from "../../data/industries/industryImages";
import bankingBenefitCustomerExperience from "../../assets/industries/banking_benefit_enhanced_customer_experience.webp";
import bankingBenefitOperationalEfficiency from "../../assets/industries/banking_benefit_operational_efficiency.webp";
import bankingBenefitRiskManagement from "../../assets/industries/banking_benefit_risk_management_compliance.webp";
import bankingBenefitDataInsights from "../../assets/industries/banking_benefit_data_driven_insights.webp";
import bankingBenefitInnovationGrowth from "../../assets/industries/banking_benefit_innovation_growth.webp";
import healthcareBenefitExperience from "../../assets/industries/healthcare_benefit_enhanced_experience.webp";
import healthcareBenefitStaffWellbeing from "../../assets/industries/healthcare_benefit_staff_wellbeing.webp";
import healthcareBenefitPopulationCare from "../../assets/industries/healthcare_benefit_population_care.webp";
import healthcareBenefitHealthEquity from "../../assets/industries/healthcare_benefit_health_equity.webp";
import healthcareBenefitCostReduction from "../../assets/industries/healthcare_benefit_cost_reduction.webp";
import insuranceBenefitClaims from "../../assets/industries/insurance_benefit_streamlined_claims.webp";
import insuranceBenefitRiskAssessment from "../../assets/industries/insurance_benefit_risk_assessment_underwriting.webp";
import insuranceBenefitFraudDetection from "../../assets/industries/insurance_benefit_fraud_detection.webp";
import insuranceBenefitCustomerEngagement from "../../assets/industries/insurance_benefit_customer_engagement.webp";
import insuranceBenefitCompliance from "../../assets/industries/insurance_benefit_regulatory_compliance.webp";
import retailBenefitPersonalizedExperiences from "../../assets/industries/retail_benefit_personalized_experiences.webp";
import retailBenefitSupplyChain from "../../assets/industries/retail_benefit_supply_chain_optimization.webp";
import retailBenefitOperationalExcellence from "../../assets/industries/retail_benefit_operational_excellence.webp";
import retailBenefitMerchandising from "../../assets/industries/retail_benefit_data_driven_merchandising.webp";
import retailBenefitSustainability from "../../assets/industries/retail_benefit_sustainability_esg.webp";
import manufacturingBenefitPredictiveMaintenance from "../../assets/industries/manufacturing_benefit_predictive_maintenance.webp";
import manufacturingBenefitQuality from "../../assets/industries/manufacturing_benefit_quality_excellence.webp";
import manufacturingBenefitSupplyChain from "../../assets/industries/manufacturing_benefit_supply_chain_resilience.webp";
import manufacturingBenefitOperationalEfficiency from "../../assets/industries/manufacturing_benefit_operational_efficiency.webp";
import manufacturingBenefitWorkforce from "../../assets/industries/manufacturing_benefit_workforce_empowerment.webp";
import logisticsBenefitRouteOptimization from "../../assets/industries/logistics_benefit_route_optimization.webp";
import logisticsBenefitWarehouseAutomation from "../../assets/industries/logistics_benefit_warehouse_automation.webp";
import logisticsBenefitDemandForecasting from "../../assets/industries/logistics_benefit_demand_forecasting.webp";
import logisticsBenefitSupplyChainVisibility from "../../assets/industries/logistics_benefit_supply_chain_visibility.webp";
import logisticsBenefitCostOptimization from "../../assets/industries/logistics_benefit_cost_optimization.webp";
import governmentBenefitCitizenServices from "../../assets/industries/government_benefit_citizen_services.webp";
import governmentBenefitPolicyAnalytics from "../../assets/industries/government_benefit_policy_analytics.webp";
import governmentBenefitPublicSafety from "../../assets/industries/government_benefit_public_safety.webp";
import governmentBenefitOperationalEfficiency from "../../assets/industries/government_benefit_operational_efficiency.webp";
import governmentBenefitDigitalTransformation from "../../assets/industries/government_benefit_digital_transformation.webp";
import educationBenefitPersonalizedLearning from "../../assets/industries/education_benefit_personalized_learning.webp";
import educationBenefitStudentSuccess from "../../assets/industries/education_benefit_student_success.webp";
import educationBenefitAdministrativeEfficiency from "../../assets/industries/education_benefit_administrative_efficiency.webp";
import educationBenefitContentDelivery from "../../assets/industries/education_benefit_content_delivery.webp";
import educationBenefitDigitalTransformation from "../../assets/industries/education_benefit_digital_transformation.webp";
import telecomBenefitNetworkOptimization from "../../assets/industries/telecom_benefit_network_optimization.webp";
import telecomBenefitCustomerRetention from "../../assets/industries/telecom_benefit_customer_retention.webp";
import telecomBenefit5gAcceleration from "../../assets/industries/telecom_benefit_5g_acceleration.webp";
import telecomBenefitOperationalExcellence from "../../assets/industries/telecom_benefit_operational_excellence.webp";
import telecomBenefitDigitalServices from "../../assets/industries/telecom_benefit_digital_services.webp";
import realEstateBenefitPropertyValuation from "../../assets/industries/realestate_benefit_property_valuation.webp";
import realEstateBenefitMarketAnalytics from "../../assets/industries/realestate_benefit_market_analytics.webp";
import realEstateBenefitSmartBuildings from "../../assets/industries/realestate_benefit_smart_buildings.webp";
import realEstateBenefitInvestmentOptimization from "../../assets/industries/realestate_benefit_investment_optimization.webp";
import realEstateBenefitPropertyManagement from "../../assets/industries/realestate_benefit_property_management.webp";
import energyBenefitGridOptimization from "../../assets/industries/energy_benefit_grid_optimization.webp";
import energyBenefitPredictiveMaintenance from "../../assets/industries/energy_benefit_predictive_maintenance.webp";
import energyBenefitSustainabilityAnalytics from "../../assets/industries/energy_benefit_sustainability_analytics.webp";
import energyBenefitRenewableIntegration from "../../assets/industries/energy_benefit_renewable_integration.webp";
import energyBenefitCustomerEngagement from "../../assets/industries/energy_benefit_customer_engagement.webp";
import automotiveBenefitCustomerExperience from "../../assets/industries/automotive_benefit_customer_experience.webp";
import automotiveBenefitOperationalEfficiency from "../../assets/industries/automotive_benefit_operational_efficiency.webp";
import automotiveBenefitDataInsights from "../../assets/industries/automotive_benefit_data_insights.webp";
import automotiveBenefitInnovationGrowth from "../../assets/industries/automotive_benefit_innovation_growth.webp";
import automotiveBenefitSustainability from "../../assets/industries/automotive_benefit_sustainability.webp";
import hospitalityBenefitCustomerExperience from "../../assets/industries/hospitality_benefit_customer_experience.webp";
import hospitalityBenefitOperationalEfficiency from "../../assets/industries/hospitality_benefit_operational_efficiency.webp";
import hospitalityBenefitDataInsights from "../../assets/industries/hospitality_benefit_data_insights.webp";
import hospitalityBenefitInnovationGrowth from "../../assets/industries/hospitality_benefit_innovation_growth.webp";
import hospitalityBenefitSustainability from "../../assets/industries/hospitality_benefit_sustainability.webp";
import mediaBenefitCustomerExperience from "../../assets/industries/media_benefit_customer_experience.webp";
import mediaBenefitOperationalEfficiency from "../../assets/industries/media_benefit_operational_efficiency.webp";
import mediaBenefitDataInsights from "../../assets/industries/media_benefit_data_insights.webp";
import mediaBenefitInnovationGrowth from "../../assets/industries/media_benefit_innovation_growth.webp";
import mediaBenefitSustainability from "../../assets/industries/media_benefit_sustainability.webp";
import professionalServicesBenefitCustomerExperience from "../../assets/industries/professional_services_benefit_customer_experience.webp";
import professionalServicesBenefitOperationalEfficiency from "../../assets/industries/professional_services_benefit_operational_efficiency.webp";
import professionalServicesBenefitDataInsights from "../../assets/industries/professional_services_benefit_data_insights.webp";
import professionalServicesBenefitInnovationGrowth from "../../assets/industries/professional_services_benefit_innovation_growth.webp";
import professionalServicesBenefitSustainability from "../../assets/industries/professional_services_benefit_sustainability.webp";

/**
 * HowYouBenefit.jsx — DevOpsTRIO
 * Dynamic "How You Benefit" section that changes based on the current industry
 * Shows industry-specific benefit cards with images and descriptions
 */

const FONT = '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", "Plus Jakarta Sans", sans-serif';
const BANKING_BENEFIT_IMAGES = [
  bankingBenefitCustomerExperience,
  bankingBenefitOperationalEfficiency,
  bankingBenefitRiskManagement,
  bankingBenefitDataInsights,
  bankingBenefitInnovationGrowth,
];
const HEALTHCARE_BENEFIT_IMAGES = [
  healthcareBenefitExperience,
  healthcareBenefitStaffWellbeing,
  healthcareBenefitPopulationCare,
  healthcareBenefitHealthEquity,
  healthcareBenefitCostReduction,
];
const INSURANCE_BENEFIT_IMAGES = [
  insuranceBenefitClaims,
  insuranceBenefitRiskAssessment,
  insuranceBenefitFraudDetection,
  insuranceBenefitCustomerEngagement,
  insuranceBenefitCompliance,
];
const RETAIL_BENEFIT_IMAGES = [
  retailBenefitPersonalizedExperiences,
  retailBenefitSupplyChain,
  retailBenefitOperationalExcellence,
  retailBenefitMerchandising,
  retailBenefitSustainability,
];
const MANUFACTURING_BENEFIT_IMAGES = [
  manufacturingBenefitPredictiveMaintenance,
  manufacturingBenefitQuality,
  manufacturingBenefitSupplyChain,
  manufacturingBenefitOperationalEfficiency,
  manufacturingBenefitWorkforce,
];
const LOGISTICS_BENEFIT_IMAGES = [
  logisticsBenefitRouteOptimization,
  logisticsBenefitWarehouseAutomation,
  logisticsBenefitDemandForecasting,
  logisticsBenefitSupplyChainVisibility,
  logisticsBenefitCostOptimization,
];
const GOVERNMENT_BENEFIT_IMAGES = [
  governmentBenefitCitizenServices,
  governmentBenefitPolicyAnalytics,
  governmentBenefitPublicSafety,
  governmentBenefitOperationalEfficiency,
  governmentBenefitDigitalTransformation,
];
const EDUCATION_BENEFIT_IMAGES = [
  educationBenefitPersonalizedLearning,
  educationBenefitStudentSuccess,
  educationBenefitAdministrativeEfficiency,
  educationBenefitContentDelivery,
  educationBenefitDigitalTransformation,
];
const TELECOM_BENEFIT_IMAGES = [
  telecomBenefitNetworkOptimization,
  telecomBenefitCustomerRetention,
  telecomBenefit5gAcceleration,
  telecomBenefitOperationalExcellence,
  telecomBenefitDigitalServices,
];
const REAL_ESTATE_BENEFIT_IMAGES = [
  realEstateBenefitPropertyValuation,
  realEstateBenefitMarketAnalytics,
  realEstateBenefitSmartBuildings,
  realEstateBenefitInvestmentOptimization,
  realEstateBenefitPropertyManagement,
];
const ENERGY_BENEFIT_IMAGES = [
  energyBenefitGridOptimization,
  energyBenefitPredictiveMaintenance,
  energyBenefitSustainabilityAnalytics,
  energyBenefitRenewableIntegration,
  energyBenefitCustomerEngagement,
];
const AUTOMOTIVE_BENEFIT_IMAGES = [
  automotiveBenefitCustomerExperience,
  automotiveBenefitOperationalEfficiency,
  automotiveBenefitDataInsights,
  automotiveBenefitInnovationGrowth,
  automotiveBenefitSustainability,
];
const HOSPITALITY_BENEFIT_IMAGES = [
  hospitalityBenefitCustomerExperience,
  hospitalityBenefitOperationalEfficiency,
  hospitalityBenefitDataInsights,
  hospitalityBenefitInnovationGrowth,
  hospitalityBenefitSustainability,
];
const MEDIA_BENEFIT_IMAGES = [
  mediaBenefitCustomerExperience,
  mediaBenefitOperationalEfficiency,
  mediaBenefitDataInsights,
  mediaBenefitInnovationGrowth,
  mediaBenefitSustainability,
];
const PROFESSIONAL_SERVICES_BENEFIT_IMAGES = [
  professionalServicesBenefitCustomerExperience,
  professionalServicesBenefitOperationalEfficiency,
  professionalServicesBenefitDataInsights,
  professionalServicesBenefitInnovationGrowth,
  professionalServicesBenefitSustainability,
];

// Industry-specific data configurations
const INDUSTRY_DATA = {
  healthcare: {
    heading: "How you benefit",
    cards: [
      {
        title: "Enhanced clinical experience",
        desc: "Deliver **seamless omnichannel engagement** across patients, care teams, and physicians. Our intelligent digital portals and clinical chatbots help **reduce barriers to care**.",
        img: "https://picsum.photos/seed/healthcare-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Staff and clinician wellbeing",
        desc: "Combat **severe healthcare burnout** with automated administrative charting. Agentic workflows and smart telemetry free clinical staff to **focus on direct patient care**.",
        img: "https://picsum.photos/seed/healthcare-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Data-driven population health",
        desc: "Unify disparate clinical records into **longitudinal patient profiles**. Advanced predictive models detect chronic risk factors early and **improve community health outcomes**.",
        img: "https://picsum.photos/seed/healthcare-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Equitable care access",
        desc: "Close healthcare equity disparities with **multilingual AI triage** and virtual telemetry. Broaden preventative interventions to **underserved and rural communities**.",
        img: "https://picsum.photos/seed/healthcare-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Operational cost reduction",
        desc: "Streamline hospital bed management, **optimize clinical resource allocation**, and lower medical supply chain waste to **achieve sustainable margins**.",
        img: "https://picsum.photos/seed/healthcare-benefit-5/700/560",
        span: 3,
      },
    ],
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
        desc: "Automate back-office operations, **streamline core workflows**, and eliminate manual overhead with intelligent automation to **improve transaction processing accuracy**.",
        img: "https://picsum.photos/seed/banking-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Risk management and compliance",
        desc: "Proactively identify and **neutralize systemic risks** with AI intelligence. Automate compliance monitoring, detect fraud in real time, and **ensure strict regulatory adherence**.",
        img: "https://picsum.photos/seed/banking-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Data-driven financial insights",
        desc: "Transform raw transactional data into **actionable predictive intelligence**. Advanced analytics unlock deep client behavior trends and **accelerate growth opportunities**.",
        img: "https://picsum.photos/seed/banking-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Sustainable innovation and growth",
        desc: "Accelerate **digital product transformation** with modular AI architectures. Launch differentiated banking offerings faster to **stay ahead of market competition**.",
        img: "https://picsum.photos/seed/banking-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  retail: {
    heading: "How you benefit",
    cards: [
      {
        title: "Personalized shopper journeys",
        desc: "Drive conversion and basket size through **hyper-personalized product curation**. Real-time contextual recommendations create **memorable omnichannel shopper loyalty**.",
        img: "https://picsum.photos/seed/retail-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Resilient supply chain networks",
        desc: "Eliminate stockouts and overstock costs with **predictive inventory orchestration**. Automated distribution centers optimize fulfillment to **accelerate delivery timelines**.",
        img: "https://picsum.photos/seed/retail-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Store operational excellence",
        desc: "Empower store associates with **intelligent inventory scanners** and task copilots. Streamline checkout processes to **elevate customer satisfaction**.",
        img: "https://picsum.photos/seed/retail-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Dynamic pricing intelligence",
        desc: "Optimize gross merchandise value with **algorithmic markdown strategies**. Real-time competitive monitoring helps **maximize profitability margins**.",
        img: "https://picsum.photos/seed/retail-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Circular commerce and ESG",
        desc: "Embed sustainable packaging tracking and **ethical supply verification** across product lines to **deepen conscious consumer trust**.",
        img: "https://picsum.photos/seed/retail-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  manufacturing: {
    heading: "How you benefit",
    cards: [
      {
        title: "Predictive asset maintenance",
        desc: "Eliminate catastrophic production halts with **continuous vibration telemetry**. Proactive maintenance alerts extend equipment life and **minimize costly factory downtime**.",
        img: "https://picsum.photos/seed/mfg-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Autonomous quality inspection",
        desc: "Detect microscopic surface defects with **high-precision computer vision**. Real-time quality verification reduces scrap rates and **ensures flawless assembly output**.",
        img: "https://picsum.photos/seed/mfg-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Supply chain agility",
        desc: "Forecast component bottlenecks across tier-1 suppliers using **predictive procurement models**. Dynamic scheduling prevents delays to **guarantee reliable delivery cycles**.",
        img: "https://picsum.photos/seed/mfg-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Factory operational efficiency",
        desc: "Synchronize plant floor robotics and **conveyor throughput with edge AI**. Energy-efficient production scheduling helps **lower industrial operating costs**.",
        img: "https://picsum.photos/seed/mfg-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Connected workforce empowerment",
        desc: "Equip shop-floor technicians with **augmented reality work instructions**. Contextual digital guidance accelerates troubleshooting and **improves worker safety standards**.",
        img: "https://picsum.photos/seed/mfg-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  insurance: {
    heading: "How you benefit",
    cards: [
      {
        title: "Touchless claims settlement",
        desc: "Accelerate adjudication from weeks to minutes using **automated visual damage assessment**. Instant claim resolution dramatically **elevates policyholder satisfaction**.",
        img: "https://picsum.photos/seed/insurance-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Precision risk underwriting",
        desc: "Evaluate applicant risk profiles accurately with **multidimensional behavioral telemetry**. Dynamic policy pricing models **strengthen loss-ratio performance**.",
        img: "https://picsum.photos/seed/insurance-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Syndicate fraud detection",
        desc: "Uncover organized staged accidents and **fraudulent claim networks** using graph intelligence. Proactive investigation triggers **save millions in leaked payouts**.",
        img: "https://picsum.photos/seed/insurance-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Proactive policyholder care",
        desc: "Engage policyholders before disasters with **localized risk weather alerts**. Empathetic virtual assistants guide policy renewals to **maximize retention rates**.",
        img: "https://picsum.photos/seed/insurance-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Automated regulatory compliance",
        desc: "Streamline complex Solvency II filings and **statutory financial reporting**. Auditable model explainability tools **ensure comprehensive regulatory trust**.",
        img: "https://picsum.photos/seed/insurance-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  education: {
    heading: "How you benefit",
    cards: [
      {
        title: "Adaptive personalized learning",
        desc: "Tailor instruction pacing and curriculum delivery with **conversational AI learning companions**. Individualized study modules **boost student academic mastery**.",
        img: "https://picsum.photos/seed/education-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Proactive student retention",
        desc: "Identify early indicators of academic struggle using **multimodal student telemetry**. Targeted advisor interventions **reduce institutional drop-out rates**.",
        img: "https://picsum.photos/seed/education-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Automated campus administration",
        desc: "Eliminate administrative paper queues by **automating student admissions** and transcripts. Staff workflow optimization lets faculty **focus on pedagogical excellence**.",
        img: "https://picsum.photos/seed/education-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Interactive digital courseware",
        desc: "Convert static course materials into **dynamic simulation environments**. Interactive labs and virtual scenarios **deepen conceptual comprehension**.",
        img: "https://picsum.photos/seed/education-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Institutional digital transformation",
        desc: "Unify campus student information systems into **centralized analytical repositories**. Modern cloud infrastructure supports **scalable hybrid learning models**.",
        img: "https://picsum.photos/seed/education-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  logistics: {
    heading: "How you benefit",
    cards: [
      {
        title: "Autonomous route optimization",
        desc: "Reduce fuel consumption and transit delays using **dynamic multimodal routing**. Machine learning forecasts traffic bottlenecks to **guarantee on-time deliveries**.",
        img: "https://picsum.photos/seed/logistics-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Smart warehouse fulfillment",
        desc: "Coordinate autonomous guided vehicles and **intelligent robotic sorting systems**. Automated packing orchestration significantly **improves palletizing speed**.",
        img: "https://picsum.photos/seed/logistics-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Predictive freight forecasting",
        desc: "Anticipate seasonal volume surges and **optimize container capacity allocation**. Data-driven carrier matching prevents backlogs to **stabilize freight margins**.",
        img: "https://picsum.photos/seed/logistics-benefit-3/700/560",
        span: 2,
      },
      {
        title: "End-to-end cargo visibility",
        desc: "Monitor sensitive cold-chain cargo with **continuous IoT sensor telemetry**. Real-time tracking alerts prevent spoilage and **ensure regulatory compliance**.",
        img: "https://picsum.photos/seed/logistics-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Green logistics and ESG",
        desc: "Model and mitigate carbon emissions across **intermodal transportation networks**. Clean fleet routing options help **achieve corporate net-zero targets**.",
        img: "https://picsum.photos/seed/logistics-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  government: {
    heading: "How you benefit",
    cards: [
      {
        title: "Accessible citizen portals",
        desc: "Provide 24/7 self-service public assistance with **multilingual AI citizen agents**. Frictionless service delivery dramatically **improves civic satisfaction ratings**.",
        img: "https://picsum.photos/seed/government-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Evidence-based policy modeling",
        desc: "Simulate demographic trends and economic impacts using **sophisticated data models**. Evidence-based policy design **optimizes public resource allocation**.",
        img: "https://picsum.photos/seed/government-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Coordinated public safety",
        desc: "Enhance first responder readiness with **real-time geospatial intelligence**. Automated incident triage accelerates emergency support and **saves critical lives**.",
        img: "https://picsum.photos/seed/government-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Agency process automation",
        desc: "Eliminate legacy bureaucracy with **secure digital document workflows**. Automated benefits processing delivers assistance to **citizens in urgent need**.",
        img: "https://picsum.photos/seed/government-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Sovereign data integrity",
        desc: "Protect vital government records with **zero-trust cryptographic security**. FedRAMP-grade infrastructure guards against fraud and **maintains public trust**.",
        img: "https://picsum.photos/seed/government-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  telecom: {
    heading: "How you benefit",
    cards: [
      {
        title: "Autonomous network slicing",
        desc: "Dynamically allocate cellular bandwidth to **critical enterprise applications**. AI network orchestration optimizes radio resources and **lowers operational overhead**.",
        img: "https://picsum.photos/seed/telecom-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Predictive subscriber retention",
        desc: "Detect subtle churn risk signals early with **behavioral telemetry models**. Proactive loyalty perks and targeted offers **improve subscriber lifetime value**.",
        img: "https://picsum.photos/seed/telecom-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Zero-outage cell infrastructure",
        desc: "Forecast hardware component failure on remote towers using **predictive telemetry algorithms**. Preemptive repairs eliminate downtime and **maintain connectivity uptime**.",
        img: "https://picsum.photos/seed/telecom-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Cognitive customer assistance",
        desc: "Resolve technical troubleshooting and billing inquiries via **natural voice AI assistants**. Instant resolution reduces call center wait times and **cuts support costs**.",
        img: "https://picsum.photos/seed/telecom-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Next-gen edge monetization",
        desc: "Deploy low-latency compute platforms for **smart cities and industrial automation**. High-performance edge infrastructure creates **lucrative B2B enterprise revenues**.",
        img: "https://picsum.photos/seed/telecom-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  energy: {
    heading: "How you benefit",
    cards: [
      {
        title: "Intelligent grid balancing",
        desc: "Harmonize intermittent renewable generation with **real-time probabilistic load models**. Automated grid switching maintains stability and **prevents blackout disruptions**.",
        img: "https://picsum.photos/seed/energy-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Predictive turbine telemetry",
        desc: "Monitor wind and solar asset performance through **continuous sensory diagnostics**. Preemptive maintenance scheduling reduces repair costs and **extends asset operating life**.",
        img: "https://picsum.photos/seed/energy-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Comprehensive ESG accounting",
        desc: "Track greenhouse gas emissions across utility operations with **automated sensor telemetry**. Auditable reporting dashboards **satisfy strict carbon compliance**.",
        img: "https://picsum.photos/seed/energy-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Decentralized microgrid management",
        desc: "Orchestrate distributed battery storage and **virtual power plant networks**. Smart microgrid dispatching unlocks reserve power and **lowers wholesale energy costs**.",
        img: "https://picsum.photos/seed/energy-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Customer energy empowerment",
        desc: "Provide residential and commercial clients with **personalized conservation recommendations**. Smart meter insights lower peak tariffs and **elevate customer satisfaction**.",
        img: "https://picsum.photos/seed/energy-benefit-5/700/560",
        span: 3,
      },
    ],
  },
  realestate: {
    heading: "How you benefit",
    cards: [
      {
        title: "Automated property valuation",
        desc: "Generate accurate residential and commercial appraisals with **real-time spatial intelligence**. Machine learning analysis of neighborhood metrics **enhances investment confidence**.",
        img: "https://picsum.photos/seed/realestate-benefit-1/700/560",
        span: 2,
      },
      {
        title: "Cognitive building automation",
        desc: "Cut HVAC operating expenditure through **autonomous environmental controls**. Smart occupancy sensors optimize energy use to **attain green building certifications**.",
        img: "https://picsum.photos/seed/realestate-benefit-2/700/560",
        span: 2,
      },
      {
        title: "Predictive tenant retention",
        desc: "Analyze office foot-traffic and lease milestones to **anticipate renewal decisions**. Proactive property enhancements **maximize occupancy and rental yields**.",
        img: "https://picsum.photos/seed/realestate-benefit-3/700/560",
        span: 2,
      },
      {
        title: "Accelerated deal underwriting",
        desc: "Streamline commercial property due diligence with **automated lease extraction tools**. Rapid cash flow waterfall modeling helps **close acquisitions faster**.",
        img: "https://picsum.photos/seed/realestate-benefit-4/700/560",
        span: 3,
      },
      {
        title: "Smart precinct connectivity",
        desc: "Provide unified tenant mobile apps for **keyless access and amenity booking**. Frictionless digital building experiences **command premium rental rates**.",
        img: "https://picsum.photos/seed/realestate-benefit-5/700/560",
        span: 3,
      },
    ],
  },
};

const DEFAULT_DATA = {
  heading: "How you benefit",
  cards: [
    {
      title: "Enhanced customer experience",
      desc: "Deliver **exceptional customer journeys** with AI-powered solutions that **increase satisfaction**, build long-term loyalty, and drive sustained business revenue.",
      img: "https://picsum.photos/seed/default-benefit-1/700/560",
      span: 2,
    },
    {
      title: "Operational efficiency",
      desc: "**Optimize enterprise workflows** with intelligent automation. Our solutions help you **reduce overhead costs**, eliminate errors, and achieve superior throughput.",
      img: "https://picsum.photos/seed/default-benefit-2/700/560",
      span: 2,
    },
    {
      title: "Risk management and compliance",
      desc: "Proactively identify and **neutralize enterprise vulnerabilities**. Automated monitoring and auditing frameworks **guarantee strict regulatory compliance**.",
      img: "https://picsum.photos/seed/default-benefit-3/700/560",
      span: 2,
    },
    {
      title: "Data-driven insights",
      desc: "**Transform raw telemetry into actionable intelligence** for superior decision-making. Advanced analytics empower teams to **unlock new strategic opportunities**.",
      img: "https://picsum.photos/seed/default-benefit-4/700/560",
      span: 3,
    },
    {
      title: "Innovation and growth",
      desc: "**Accelerate digital reinvention** with modern AI architectures. Launch market-leading capabilities faster and **sustain a lasting competitive edge**.",
      img: "https://picsum.photos/seed/default-benefit-5/700/560",
      span: 3,
    },
  ],
};

function parseBold(str) {
  return str.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#FFFFFF", fontWeight: 600 }}>
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
    fontWeight: 600,
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
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imgBox: {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    height: "260px",
    flexShrink: 0,
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
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: "225px",
  },
  panelTitle: {
    fontFamily: FONT,
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#E11D48",
    margin: 0,
    marginBottom: "14px",
    lineHeight: 1.3,
    minHeight: "3.2rem",
    display: "flex",
    alignItems: "flex-start",
  },
  panelDesc: {
    fontFamily: FONT,
    fontSize: "13.5px",
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.6)",
    margin: 0,
    flex: 1,
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
  const benefitImages = location.pathname.includes("healthcare")
    ? HEALTHCARE_BENEFIT_IMAGES
    : location.pathname.includes("banking")
      ? BANKING_BENEFIT_IMAGES
      : location.pathname.includes("insurance")
        ? INSURANCE_BENEFIT_IMAGES
        : location.pathname.includes("retail-ecommerce") || location.pathname.includes("retail")
          ? RETAIL_BENEFIT_IMAGES
          : location.pathname.includes("manufacturing")
            ? MANUFACTURING_BENEFIT_IMAGES
            : location.pathname.includes("logistics")
              ? LOGISTICS_BENEFIT_IMAGES
              : location.pathname.includes("government-public-sector") || location.pathname.includes("government")
                ? GOVERNMENT_BENEFIT_IMAGES
                : location.pathname.includes("education")
                  ? EDUCATION_BENEFIT_IMAGES
                  : location.pathname.includes("telecommunications") || location.pathname.includes("telecom")
                    ? TELECOM_BENEFIT_IMAGES
                    : location.pathname.includes("real-estate") || location.pathname.includes("realestate")
                      ? REAL_ESTATE_BENEFIT_IMAGES
                      : location.pathname.includes("energy-utilities") || location.pathname.includes("energy")
                        ? ENERGY_BENEFIT_IMAGES
                        : location.pathname.includes("automotive")
                          ? AUTOMOTIVE_BENEFIT_IMAGES
                          : location.pathname.includes("hospitality-travel") || location.pathname.includes("hospitality")
                            ? HOSPITALITY_BENEFIT_IMAGES
                            : location.pathname.includes("media-entertainment")
                              ? MEDIA_BENEFIT_IMAGES
                              : location.pathname.includes("professional-services")
                                ? PROFESSIONAL_SERVICES_BENEFIT_IMAGES
                            : localImages;

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
            card={{ ...card, img: benefitImages[i % benefitImages.length] || card.img }}
            index={i}
            key={card.title}
          />
        ))}
      </div>
    </section>
  );
}