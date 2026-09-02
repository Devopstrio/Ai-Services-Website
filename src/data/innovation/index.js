import { aiResearchData } from "./ai-research";
import { experimentalProjectsData } from "./experimental-projects";
import { aiPrototypesData } from "./ai-prototypes";
import { openSourceData } from "./open-source";
import { technologyExplorationData } from "./technology-exploration";
import { innovationProgramsData } from "./innovation-programs";
import { productRoadmapData } from "./product-roadmap";
import { aiDemonstrationsData } from "./ai-demonstrations";
import { publicationsData } from "./publications";

export const INNOVATION_REGISTRY = {
  "ai-research": aiResearchData,
  "experimental-projects": experimentalProjectsData,
  "ai-prototypes": aiPrototypesData,
  "open-source": openSourceData,
  "technology-exploration": technologyExplorationData,
  "innovation-programs": innovationProgramsData,
  "product-roadmap": productRoadmapData,
  "ai-demonstrations": aiDemonstrationsData,
  "publications": publicationsData
};

export function getInnovationData(slug) {
  if (!slug) return aiResearchData;
  const cleanSlug = slug
    .toLowerCase()
    .replace(/^(\/)?(innovation\/)?/, "")
    .replace(/^\/+|\/+$/g, "");
  
  return INNOVATION_REGISTRY[cleanSlug] || INNOVATION_REGISTRY["ai-research"];
}
