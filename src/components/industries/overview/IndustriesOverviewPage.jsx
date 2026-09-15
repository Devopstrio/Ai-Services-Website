import React from "react";
import { IndustriesHero } from "./IndustriesHero";
import { IndustriesPillars } from "./IndustriesPillars";
import { IndustriesGrid } from "./IndustriesGrid";
import { ExpertiseBanner } from "./ExpertiseBanner";
import { FeaturedIndustries } from "./FeaturedIndustries";
import { IndustryUseCases } from "./IndustryUseCases";
import { BusinessImpact } from "./BusinessImpact";
import { SuccessStories } from "./SuccessStories";
import { IndustriesCTA } from "./IndustriesCTA";

export default function IndustriesOverviewPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20 font-sans">
      {/* 1. Hero */}
      <IndustriesHero 
        breadcrumbCurrent="Industries"
        titlePrefix="Transforming Industries with"
        titleHighlight="Intelligence & Automation"
        subtitle="We design, build and scale industrial-grade digital architectures that automate field logistics, optimize resource planning, and enforce extreme telemetry safety standards."
        bgImage="/webp/assets/industries_hero_bg.webp"
      />

      {/* 1.5 Industries 3 Pillars */}
      <IndustriesPillars />

      {/* 2. Industries Overview Grid */}
      <IndustriesGrid />

      {/* 3. Industry Expertise Banner */}
      <ExpertiseBanner />

      {/* 4. Featured Industries */}
      <FeaturedIndustries />

      {/* 5. Industry Use Cases */}
      <IndustryUseCases />

      {/* 6. Business Impact */}
      <BusinessImpact />

      {/* 7. Success Stories */}
      <SuccessStories />

      {/* 8. CTA */}
      <IndustriesCTA />
    </main>
  );
}
