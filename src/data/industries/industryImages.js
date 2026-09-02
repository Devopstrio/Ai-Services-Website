// Centralized local image loader for AI Industries components
// 75 unique, topic-specific high-res photos (5 unique photos per industry)

// Healthcare
import healthcare_1 from "../../assets/industries/healthcare_1.jpg";
import healthcare_2 from "../../assets/industries/healthcare_2.jpg";
import healthcare_3 from "../../assets/industries/healthcare_3.jpg";
import healthcare_4 from "../../assets/industries/healthcare_4.jpg";
import healthcare_5 from "../../assets/industries/healthcare_5.jpg";

// Banking & Financial Services
import banking_1 from "../../assets/industries/banking_1.jpg";
import banking_2 from "../../assets/industries/banking_2.jpg";
import banking_3 from "../../assets/industries/banking_3.jpg";
import banking_4 from "../../assets/industries/banking_4.jpg";
import banking_5 from "../../assets/industries/banking_5.jpg";

// Retail & E-Commerce
import retail_1 from "../../assets/industries/retail_1.jpg";
import retail_2 from "../../assets/industries/retail_2.jpg";
import retail_3 from "../../assets/industries/retail_3.jpg";
import retail_4 from "../../assets/industries/retail_4.jpg";
import retail_5 from "../../assets/industries/retail_5.jpg";

// Manufacturing
import manufacturing_1 from "../../assets/industries/manufacturing_1.jpg";
import manufacturing_2 from "../../assets/industries/manufacturing_2.jpg";
import manufacturing_3 from "../../assets/industries/manufacturing_3.jpg";
import manufacturing_4 from "../../assets/industries/manufacturing_4.jpg";
import manufacturing_5 from "../../assets/industries/manufacturing_5.jpg";

// Insurance
import insurance_1 from "../../assets/industries/insurance_1.jpg";
import insurance_2 from "../../assets/industries/insurance_2.jpg";
import insurance_3 from "../../assets/industries/insurance_3.jpg";
import insurance_4 from "../../assets/industries/insurance_4.jpg";
import insurance_5 from "../../assets/industries/insurance_5.jpg";

// Logistics & Supply Chain
import logistics_1 from "../../assets/industries/logistics_1.jpg";
import logistics_2 from "../../assets/industries/logistics_2.jpg";
import logistics_3 from "../../assets/industries/logistics_3.jpg";
import logistics_4 from "../../assets/industries/logistics_4.jpg";
import logistics_5 from "../../assets/industries/logistics_5.jpg";

// Government & Public Sector
import government_1 from "../../assets/industries/government_1.jpg";
import government_2 from "../../assets/industries/government_2.jpg";
import government_3 from "../../assets/industries/government_3.jpg";
import government_4 from "../../assets/industries/government_4.jpg";
import government_5 from "../../assets/industries/government_5.jpg";

// Education
import education_1 from "../../assets/industries/education_1.jpg";
import education_2 from "../../assets/industries/education_2.jpg";
import education_3 from "../../assets/industries/education_3.jpg";
import education_4 from "../../assets/industries/education_4.jpg";
import education_5 from "../../assets/industries/education_5.jpg";

// Telecommunications
import telecom_1 from "../../assets/industries/telecom_1.jpg";
import telecom_2 from "../../assets/industries/telecom_2.jpg";
import telecom_3 from "../../assets/industries/telecom_3.jpg";
import telecom_4 from "../../assets/industries/telecom_4.jpg";
import telecom_5 from "../../assets/industries/telecom_5.jpg";

// Energy & Utilities
import energy_1 from "../../assets/industries/energy_1.jpg";
import energy_2 from "../../assets/industries/energy_2.jpg";
import energy_3 from "../../assets/industries/energy_3.jpg";
import energy_4 from "../../assets/industries/energy_4.jpg";
import energy_5 from "../../assets/industries/energy_5.jpg";

// Real Estate
import realestate_1 from "../../assets/industries/realestate_1.jpg";
import realestate_2 from "../../assets/industries/realestate_2.jpg";
import realestate_3 from "../../assets/industries/realestate_3.jpg";
import realestate_4 from "../../assets/industries/realestate_4.jpg";
import realestate_5 from "../../assets/industries/realestate_5.jpg";

// Automotive
import automotive_1 from "../../assets/industries/automotive_1.jpg";
import automotive_2 from "../../assets/industries/automotive_2.jpg";
import automotive_3 from "../../assets/industries/automotive_3.jpg";
import automotive_4 from "../../assets/industries/automotive_4.jpg";
import automotive_5 from "../../assets/industries/automotive_5.jpg";

// Hospitality & Travel
import hospitality_1 from "../../assets/industries/hospitality_1.jpg";
import hospitality_2 from "../../assets/industries/hospitality_2.jpg";
import hospitality_3 from "../../assets/industries/hospitality_3.jpg";
import hospitality_4 from "../../assets/industries/hospitality_4.jpg";
import hospitality_5 from "../../assets/industries/hospitality_5.jpg";

// Media & Entertainment
import media_1 from "../../assets/industries/media_1.jpg";
import media_2 from "../../assets/industries/media_2.jpg";
import media_3 from "../../assets/industries/media_3.jpg";
import media_4 from "../../assets/industries/media_4.jpg";
import media_5 from "../../assets/industries/media_5.jpg";

// Professional Services
import profservices_1 from "../../assets/industries/profservices_1.jpg";
import profservices_2 from "../../assets/industries/profservices_2.jpg";
import profservices_3 from "../../assets/industries/profservices_3.jpg";
import profservices_4 from "../../assets/industries/profservices_4.jpg";
import profservices_5 from "../../assets/industries/profservices_5.jpg";

export const INDUSTRY_IMAGES = {
  healthcare: [healthcare_1, healthcare_2, healthcare_3, healthcare_4, healthcare_5],
  banking: [banking_1, banking_2, banking_3, banking_4, banking_5],
  retail: [retail_1, retail_2, retail_3, retail_4, retail_5],
  manufacturing: [manufacturing_1, manufacturing_2, manufacturing_3, manufacturing_4, manufacturing_5],
  insurance: [insurance_1, insurance_2, insurance_3, insurance_4, insurance_5],
  education: [education_1, education_2, education_3, education_4, education_5],
  logistics: [logistics_1, logistics_2, logistics_3, logistics_4, logistics_5],
  government: [government_1, government_2, government_3, government_4, government_5],
  telecommunications: [telecom_1, telecom_2, telecom_3, telecom_4, telecom_5],
  energy: [energy_1, energy_2, energy_3, energy_4, energy_5],
  realEstate: [realestate_1, realestate_2, realestate_3, realestate_4, realestate_5],
  automotive: [automotive_1, automotive_2, automotive_3, automotive_4, automotive_5],
  hospitality: [hospitality_1, hospitality_2, hospitality_3, hospitality_4, hospitality_5],
  media: [media_1, media_2, media_3, media_4, media_5],
  professionalServices: [profservices_1, profservices_2, profservices_3, profservices_4, profservices_5],
  default: [healthcare_1, banking_1, retail_1, manufacturing_1, logistics_1]
};

export function getIndustryImages(industryKey) {
  const key = (industryKey || "").toLowerCase();
  if (key.includes("health")) return INDUSTRY_IMAGES.healthcare;
  if (key.includes("bank") || key.includes("finan")) return INDUSTRY_IMAGES.banking;
  if (key.includes("retail") || key.includes("ecom")) return INDUSTRY_IMAGES.retail;
  if (key.includes("manufactur")) return INDUSTRY_IMAGES.manufacturing;
  if (key.includes("insur")) return INDUSTRY_IMAGES.insurance;
  if (key.includes("edu")) return INDUSTRY_IMAGES.education;
  if (key.includes("logist") || key.includes("supply")) return INDUSTRY_IMAGES.logistics;
  if (key.includes("govern") || key.includes("public")) return INDUSTRY_IMAGES.government;
  if (key.includes("telecom")) return INDUSTRY_IMAGES.telecommunications;
  if (key.includes("energy") || key.includes("utilit")) return INDUSTRY_IMAGES.energy;
  if (key.includes("estate") || key.includes("real")) return INDUSTRY_IMAGES.realEstate;
  if (key.includes("auto")) return INDUSTRY_IMAGES.automotive;
  if (key.includes("hospit") || key.includes("travel")) return INDUSTRY_IMAGES.hospitality;
  if (key.includes("media") || key.includes("entertain")) return INDUSTRY_IMAGES.media;
  if (key.includes("profess") || key.includes("service")) return INDUSTRY_IMAGES.professionalServices;
  return INDUSTRY_IMAGES.default;
}
