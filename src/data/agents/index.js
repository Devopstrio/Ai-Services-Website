import { hragentData } from "./hr-agent";
import { salesAgentData } from "./sales-agent";
import { marketingAgentData } from "./marketing-agent";
import { customerSupportAgentData } from "./customer-support-agent";
import { financeAgentData } from "./finance-agent";
import { procurementAgentData } from "./procurement-agent";
import { legalAgentData } from "./legal-agent";
import { executiveAssistantData } from "./executive-assistant";
import { devopsAgentData } from "./devops-agent";
import { softwareEngineeringAgentData } from "./software-engineering-agent";
import { qaTestingAgentData } from "./qa-testing-agent";
import { cloudOperationsAgentData } from "./cloud-operations-agent";
import { securityOperationsAgentData } from "./security-operations-agent";
import { databaseAgentData } from "./database-agent";
import { knowledgeAgentData } from "./knowledge-agent";
import { researchAgentData } from "./research-agent";
import { documentAgentData } from "./document-agent";
import { meetingAgentData } from "./meeting-agent";
import { emailAgentData } from "./email-agent";
import { workflowAgentData } from "./workflow-agent";
import { industryAgentsData } from "./industry-agents";
import { agentPlatformData } from "./agent-platform";

// Comprehensive Registry of all 22 AI Agents
export const AGENTS_REGISTRY = {
  // Business Operations
  "hr-agent": hragentData,
  "sales-agent": salesAgentData,
  "marketing-agent": marketingAgentData,
  "customer-support-agent": customerSupportAgentData,
  "finance-agent": financeAgentData,
  "procurement-agent": procurementAgentData,
  "legal-agent": legalAgentData,
  "executive-assistant": executiveAssistantData,

  // Engineering & IT
  "devops-agent": devopsAgentData,
  "software-engineering-agent": softwareEngineeringAgentData,
  "qa-testing-agent": qaTestingAgentData,
  "cloud-operations-agent": cloudOperationsAgentData,
  "security-operations-agent": securityOperationsAgentData,
  "database-agent": databaseAgentData,

  // Productivity & Specialized
  "knowledge-agent": knowledgeAgentData,
  "research-agent": researchAgentData,
  "document-agent": documentAgentData,
  "meeting-agent": meetingAgentData,
  "email-agent": emailAgentData,
  "workflow-agent": workflowAgentData,
  "industry-agents": industryAgentsData,
  "agent-platform": agentPlatformData
};

export function getAgentData(slug) {
  if (!slug) return hragentData;
  const cleanSlug = slug
    .toLowerCase()
    .replace(/^(agents\/)?(business-operations\/|engineering-it\/|productivity\/)?/, "")
    .replace(/^\/+|\/+$/g, "");
  
  return AGENTS_REGISTRY[cleanSlug] || AGENTS_REGISTRY["hr-agent"];
}
