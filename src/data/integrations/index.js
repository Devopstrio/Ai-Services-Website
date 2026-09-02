import { productivityCollaborationData } from "./productivity-collaboration";
import { crmPlatformsData } from "./crm-platforms";
import { erpSystemsData } from "./erp-systems";
import { cloudPlatformsData } from "./cloud-platforms";
import { aiLlmProvidersData } from "./ai-llm-providers";
import { databasesData } from "./databases";
import { vectorDatabasesData } from "./vector-databases";
import { communicationData } from "./communication";
import { storageData } from "./storage";
import { identityAuthenticationData } from "./identity-authentication";
import { devopsData } from "./devops";
import { businessIntelligenceData } from "./business-intelligence";
import { enterpriseApplicationsData } from "./enterprise-applications";
import { customIntegrationData } from "./custom-integration";

export const INTEGRATION_REGISTRY = {
  "productivity-collaboration": productivityCollaborationData,
  "crm-platforms": crmPlatformsData,
  "erp-systems": erpSystemsData,
  "cloud-platforms": cloudPlatformsData,
  "ai-llm-providers": aiLlmProvidersData,
  "databases": databasesData,
  "vector-databases": vectorDatabasesData,
  "communication": communicationData,
  "storage": storageData,
  "identity-authentication": identityAuthenticationData,
  "devops": devopsData,
  "business-intelligence": businessIntelligenceData,
  "enterprise-applications": enterpriseApplicationsData,
  "custom-integration": customIntegrationData
};

export function getIntegrationData(slug) {
  if (!slug) return productivityCollaborationData;
  const cleanSlug = slug
    .toLowerCase()
    .replace(/^(\/)?(integrations\/|integration\/)?/, "")
    .replace(/^\/+|\/+$/g, "");

  return INTEGRATION_REGISTRY[cleanSlug] || INTEGRATION_REGISTRY["productivity-collaboration"];
}
