import { aihireData } from "./aihire";
import { mailtabData } from "./mailtab";
import { safesignaiData } from "./safesign-ai";
import { humanexaiData } from "./humanex-ai";
import { brioaiData } from "./brio-ai";
import { devopscopilotData } from "./devops-copilot";
import { knowledgeaiData } from "./knowledge-ai";
import { documentaiData } from "./document-ai";
import { workflowaiData } from "./workflow-ai";
import { assistantaiData } from "./assistant-ai";
import { aistudioData } from "./ai-studio";
import { salesaiData } from "./sales-ai";
import { marketingaiData } from "./marketing-ai";
import { supportaiData } from "./support-ai";
import { financeaiData } from "./finance-ai";
import { futureproductsData } from "./future-products";

export const PRODUCTS_REGISTRY = {
  // Business Platforms
  "aihire": aihireData,
  "mailtab": mailtabData,
  "safesign-ai": safesignaiData,
  "esigniva": safesignaiData,
  "esign": safesignaiData,
  "humanex-ai": humanexaiData,
  "brio-ai": brioaiData,
  "devops-copilot": devopscopilotData,

  // Productivity AI
  "knowledge-ai": knowledgeaiData,
  "document-ai": documentaiData,
  "workflow-ai": workflowaiData,
  "assistant-ai": assistantaiData,
  "ai-studio": aistudioData,

  // Business AI
  "sales-ai": salesaiData,
  "marketing-ai": marketingaiData,
  "support-ai": supportaiData,
  "finance-ai": financeaiData,

  // Future & Innovation
  "future-products": futureproductsData
};

export function getProductData(slug) {
  if (!slug) return aihireData;
  const cleanSlug = slug
    .toLowerCase()
    .replace(/^(products\/)?(business-platforms\/|productivity-ai\/|business-ai\/)?/, "")
    .replace(/^\/+|\/+$/g, "");
  
  return PRODUCTS_REGISTRY[cleanSlug] || PRODUCTS_REGISTRY["aihire"];
}
