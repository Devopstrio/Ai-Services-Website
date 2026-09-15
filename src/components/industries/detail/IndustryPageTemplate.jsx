import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SectionNavbar } from "../../ui/SectionNavbar";
import { IndustryHero } from "./IndustryHero";
import { IndustryOverview } from "./IndustryOverview";
import { IndustryChallenges } from "./IndustryChallenges";
import { IndustrySolutions } from "./IndustrySolutions";
import { IndustryFocusAreas } from "./IndustryFocusAreas";
import { IndustryUseCases } from "./IndustryUseCases";
import { IndustryCaseStudy } from "./IndustryCaseStudy";
import { IndustryCompliance } from "./IndustryCompliance";
import { IndustryWhyChoose } from "./IndustryWhyChoose";
import { IndustryInsights } from "./IndustryInsights";
import { IndustryRelatedServices } from "./IndustryRelatedServices";
import { IndustryFAQ } from "./IndustryFAQ";
import { IndustryCTA } from "./IndustryCTA";
import { INDUSTRY_DETAIL_DATA } from "../../../data/industries/industryDetailData";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "Use Cases" },
  { id: "casestudy", label: "Case Study" },
  { id: "compliance", label: "Compliance" },
  { id: "why-choose", label: "Why Devopstrio" },
  { id: "faq", label: "FAQ" }
];

export function IndustryPageTemplate() {
  const params = useParams();
  const navigate = useNavigate();
  const slug = params.industry || params.industrySlug || params["*"] || "";
  
  // Normalize slug
  const normalizedSlug = slug.replace(/^industries\//, '').replace(/\/$/, '');
  const data = INDUSTRY_DETAIL_DATA[normalizedSlug] || INDUSTRY_DETAIL_DATA["banking-finance"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-24">
        <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
        <Link to="/industries/overview" className="text-rose-500 hover:underline">← Back to Industries Overview</Link>
      </div>
    );
  }

  const mappedOverviewChallenges = data.challenges ? data.challenges.map(c => typeof c === 'string' ? c : c.title) : [];
  const mappedCompliance = data.compliance ? data.compliance.map(c => typeof c === 'string' ? c : `${c.title}: ${typeof c.desc === 'string' ? c.desc : ''}`) : [];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      {/* 1. Hero */}
      <IndustryHero
        industryName={data.industryName || "Industry Solutions"}
        title={data.hero?.title || "Intelligent Enterprise Solutions for"}
        highlightedWord={data.hero?.highlightedWord || data.industryName}
        subtitle={data.hero?.subtitle || "Architecting compliant, high-throughput digital systems."}
        bgImage={data.hero?.bgImage || "/webp/assets/industries_hero_bg.webp"}
      />

      {/* Sticky Secondary Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview */}
      {data.overview && (
        <section id="overview">
          <IndustryOverview
            overviewHeading={data.overview.heading}
            overviewDesc1={data.overview.desc1}
            overviewDesc2={data.overview.desc2}
            challenges={mappedOverviewChallenges}
            image={data.hero?.bgImage || "/webp/assets/industries_hero_bg.webp"}
          />
        </section>
      )}

      {/* 3. Challenges We Solve */}
      {data.challenges && data.challenges.length > 0 && (
        <section id="challenges">
          <IndustryChallenges challenges={data.challenges} />
        </section>
      )}

      {/* 4. Solutions We Deliver */}
      {data.solutions && data.solutions.length > 0 && (
        <section id="solutions">
          <IndustrySolutions solutions={data.solutions} />
        </section>
      )}

      {/* 5. Core Capabilities */}
      {data.capabilities && data.capabilities.length > 0 && (
        <section id="capabilities">
          <IndustryFocusAreas focusAreas={data.capabilities} />
        </section>
      )}

      {/* 6. Use Cases */}
      {data.useCases && data.useCases.length > 0 && (
        <section id="use-cases">
          <IndustryUseCases useCases={data.useCases} />
        </section>
      )}

      {/* 7. Success Stories / Case Study */}
      {data.caseStudy && (
        <section id="casestudy">
          <IndustryCaseStudy
            caseStudyTitle={data.caseStudy.title}
            caseStudyDesc={data.caseStudy.desc}
            metrics={data.caseStudy.metrics}
            caseStudyHighlights={data.caseStudy.highlights}
          />
        </section>
      )}

      {/* 8. Compliance & Security */}
      {data.compliance && data.compliance.length > 0 && (
        <section id="compliance">
          <IndustryCompliance compliances={mappedCompliance} />
        </section>
      )}

      {/* 9. Why Devopstrio */}
      {data.whyChoose && data.whyChoose.length > 0 && (
        <section id="why-choose">
          <IndustryWhyChoose whyChoose={data.whyChoose} />
        </section>
      )}

      {/* 10. Insights */}
      {data.insights && data.insights.length > 0 && (
        <section id="insights">
          <IndustryInsights insights={data.insights} />
        </section>
      )}

      {/* 11. Related Services */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section id="related-services">
          <IndustryRelatedServices relatedServices={data.relatedServices} />
        </section>
      )}

      {/* 12. FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section id="faq">
          <IndustryFAQ faqs={data.faqs} />
        </section>
      )}

      {/* 13. CTA */}
      {data.cta && (
        <IndustryCTA
          ctaTitle={data.cta.ctaTitle}
          ctaHighlight={data.cta.ctaHighlight}
          ctaDesc={data.cta.ctaDesc}
          ctaBtnText={data.cta.ctaBtnText}
        />
      )}
    </main>
  );
}

export default IndustryPageTemplate;
