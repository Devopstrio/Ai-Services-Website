import React from "react";
import { RepresentativeCTA } from "../../ui/RepresentativeCTA";








export function IndustryCTA({
  ctaTitle,
  ctaHighlight,
  ctaDesc,
  ctaBtnText
}) {
  return (
    React.createElement(RepresentativeCTA, {
      title: ctaTitle,
      highlightText: ctaHighlight,
      description: ctaDesc,
      primaryBtnText: ctaBtnText,
      primaryBtnHref: "/contact#contact-form",
      secondaryBtnText: "BACK TO INDUSTRIES INDEX"   ,
      secondaryBtnHref: "/industries",}
    )
  );
}
