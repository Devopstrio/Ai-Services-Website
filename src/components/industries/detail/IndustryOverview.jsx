import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";










export function IndustryOverview({
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
  challenges,
  image
}) {
  // Map incoming bgImage/image to the premium illustration from /assets/Industries-page/industries/
  const getPremiumIllustration = (imgSrc) => {
    const src = imgSrc.toLowerCase();

    if (src.includes("finance") || src.includes("banking") || src.includes("bank")) {
      return "/webp/assets/Industries-page/industries/Banking-and-Finance.webp";
    }
    if (src.includes("education")) {
      return "/webp/assets/Industries-page/industries/Education.webp";
    }
    if (src.includes("public") || src.includes("government") || src.includes("govt")) {
      return "/webp/assets/Industries-page/industries/Government-and-Public-Sector.webp";
    }
    if (src.includes("healthcare") || src.includes("health") || src.includes("life")) {
      return "/webp/assets/Industries-page/industries/Healthcare-and-Life-Sciences.webp";
    }
    if (src.includes("manufactur") || src.includes("manuf")) {
      return "/webp/assets/Industries-page/industries/Manufacturing.webp";
    }
    if (src.includes("media") || src.includes("entertainment")) {
      return "/webp/assets/Industries-page/industries/Media-and-Entertainment.webp";
    }
    if (src.includes("retail") || src.includes("commerce") || src.includes("retails")) {
      return "/webp/assets/Industries-page/industries/Retail-and-E-Commerce.webp";
    }
    if (src.includes("telecommunication") || src.includes("telecom") || src.includes("tele")) {
      return "/webp/assets/Industries-page/industries/Telecommunications.webp";
    }

    return "/webp/assets/Home-page/business-overview/overview-lifestyle.webp";
  };

  const displayImage = getPremiumIllustration(image || "");

  return (
    React.createElement('section', { id: "overview", className: "w-full py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60"       ,}
      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8"    ,}
        , React.createElement(Reveal, null
          , React.createElement('div', { className: "group relative overflow-hidden rounded-[32px] border border-zinc-800/60 bg-zinc-950/30 backdrop-blur-xl"       ,}

            /* Background Glow */
            , React.createElement('div', { className: "absolute inset-0 pointer-events-none"  ,}
              , React.createElement('div', { className: "absolute -top-20 -left-20 w-96 h-96 bg-rose-600/10 blur-[120px]"      ,} )
              , React.createElement('div', { className: "absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px]"      ,} )
            )

            , React.createElement('div', { className: "relative grid lg:grid-cols-2 gap-0"   ,}

              /* LEFT CONTENT: Overview Context & Approach */
              , React.createElement('div', { className: "flex flex-col justify-center p-8 md:p-10 lg:p-12 text-left"      ,}
                , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white font-sans"        ,}
                  , overviewHeading
                )

                /* <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  <p className="border-l-2 border-[#E11D48] pl-4">{overviewDesc1}</p>
                  <p className="border-l-2 border-zinc-800/80 pl-4">{overviewDesc2}</p>
                </div> */

                , React.createElement('a', {
                  to: "#challenges",
                  className: "inline-flex items-center gap-2 text-white font-semibold group/link w-fit text-sm"       ,}
, "Analyze Challenges"

                  , React.createElement('span', { className: "w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1"         ,}
                    , React.createElement(ArrowUpRight, { size: 14,} )
                  )
                )
              )

              /* RIGHT CONTENT: Lifestyle/Sector Image with Curved Padding */
              , React.createElement('div', { className: "p-0.5 flex items-center justify-center bg-zinc-950/20 border-t lg:border-t-0 lg:border-l border-zinc-900/60"        ,}
                , React.createElement('div', { className: "relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img"        ,}
                  , React.createElement('img', { src: displayImage,
                    alt: "Industry Domain Context"  ,
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"     ,
                  loading: "lazy",} )
                  /* Subtle glow/reflection */
                  , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none"      ,} )
                )
              )

            )
          )
        )
      )
    )
  );
}
