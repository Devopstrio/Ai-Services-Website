import React, { useRef } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";











const allUseCaseImages = [
  "/webp/assets/Industries-page/main-usecases/multicloudgitopsingress.webp",
  "/webp/assets/Industries-page/main-usecases/infra.webp",
  "/webp/assets/Industries-page/main-usecases/zerotrustacces.webp",
  "/webp/assets/Industries-page/main-usecases/automationintegrate.webp",
  "/webp/assets/Industries-page/main-usecases/distributedtelemetrylogging.webp",
  "/webp/assets/Industries-page/main-usecases/loadverification.webp",
  "/webp/assets/Industries-page/main-usecases/Dynamiccreditscoring.webp",
  "/webp/assets/Industries-page/main-usecases/transactionledgerauditing.webp"
];

const getUseCaseImage = (title, index) => {
  const cleanTitle = title.toLowerCase().trim();

  if (cleanTitle.includes("credit") || cleanTitle.includes("score") || cleanTitle.includes("scoring")) {
    return "/webp/assets/Industries-page/main-usecases/Dynamiccreditscoring.webp";
  }
  if (cleanTitle.includes("automation") || cleanTitle.includes("integrate")) {
    return "/webp/assets/Industries-page/main-usecases/automationintegrate.webp";
  }
  if (cleanTitle.includes("telemetry") || cleanTitle.includes("logging") || cleanTitle.includes("log")) {
    return "/webp/assets/Industries-page/main-usecases/distributedtelemetrylogging.webp";
  }
  if (cleanTitle.includes("infra") || cleanTitle.includes("code") || cleanTitle.includes("iac") || cleanTitle.includes("baseline")) {
    return "/webp/assets/Industries-page/main-usecases/infra.webp";
  }
  if (cleanTitle.includes("load") || cleanTitle.includes("verification") || cleanTitle.includes("peak")) {
    return "/webp/assets/Industries-page/main-usecases/loadverification.webp";
  }
  if (cleanTitle.includes("gitops") || cleanTitle.includes("ingress") || cleanTitle.includes("multi-cloud")) {
    return "/webp/assets/Industries-page/main-usecases/multicloudgitopsingress.webp";
  }
  if (cleanTitle.includes("ledger") || cleanTitle.includes("audit") || cleanTitle.includes("transaction")) {
    return "/webp/assets/Industries-page/main-usecases/transactionledgerauditing.webp";
  }
  if (cleanTitle.includes("zero") || cleanTitle.includes("trust") || cleanTitle.includes("access") || cleanTitle.includes("isolation")) {
    return "/webp/assets/Industries-page/main-usecases/zerotrustacces.webp";
  }

  return allUseCaseImages[index % allUseCaseImages.length];
};

const defaultExtraUseCases = [
  {
    title: "Multi-Cloud GitOps Ingress",
    result: React.createElement(React.Fragment, null, "Unified " , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "continuous deployment" ), " gates across Azure and AWS, cutting release times by 84%."          )
  },
  {
    title: "Infrastructure-as-Code Baseline",
    result: React.createElement(React.Fragment, null, "99.98% drop in environment configuration "     , React.createElement(Link, { to: "/services/devops-automation/platform-engineering", className: "text-rose-500 hover:underline" ,}, "drift"), " via Terraform standardization audits."    )
  },
  {
    title: "Zero-Trust Access Isolation",
    result: React.createElement(React.Fragment, null, "Secured credential flows and database access paths under "        , React.createElement(Link, { to: "/services/cybersecurity", className: "text-rose-500 hover:underline" ,}, "SOC-2 compliance" ), " parameters." )
  },
  {
    title: "SRE Automation Integration",
    result: React.createElement(React.Fragment, null, "Automated alert resolution rules that resolved 92% of server-load incidents under "           , React.createElement(Link, { to: "/services/devops-automation/site-reliability-engineering", className: "text-rose-500 hover:underline" ,}, "SRE automation" ), " parameters." )
  },
  {
    title: "Distributed Telemetry Logging",
    result: React.createElement(React.Fragment, null, "Gathered 4TB of daily "    , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "application logs" ), " into unified ElasticSearch systems under 15ms indexing latency."        )
  },
  {
    title: "High-Throughput Load Verification",
    result: React.createElement(React.Fragment, null, "Simulated 500,000 requests per second under "      , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline" ,}, "peak-period models" ), " to discover database lock bugs."     )
  }
];

export function IndustryUseCases({ useCases }) {
  const scrollContainerRef = useRef(null);

  // Merge to guarantee at least 8 use cases are rendered
  const mergedUseCases = [...useCases];
  let extraIdx = 0;
  while (mergedUseCases.length < 8 && extraIdx < defaultExtraUseCases.length) {
    const item = { ...defaultExtraUseCases[extraIdx] };
    mergedUseCases.push(item);
    extraIdx++;
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    React.createElement('section', { id: "use-cases", className: "w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white"       ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left"       ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-12",}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Proven "
             , React.createElement('span', { className: "text-[#E11D48] font-semibold" ,}, "use case portfolio"  )
          )
        )

        /* CSS style block to hide scrollbar across all major browsers */
        , React.createElement('style', { dangerouslySetInnerHTML: {
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
          .hide-scrollbar {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
        `},} )

        /* Carousel Slider Wrapper */
        , React.createElement('div', { className: "relative w-full" ,}
          , React.createElement('div', {
            ref: scrollContainerRef,
            className: "flex items-stretch gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"        ,
            style: {
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            },}

            , mergedUseCases.map((uc, idx) => {
              const displayImage = uc.image || getUseCaseImage(uc.title, idx);

              return (
                React.createElement('div', {
                  key: idx,
                  className: "snap-start flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative group"                  ,}

                  /* Padded image layout */
                  , React.createElement('div', { className: "p-3 pb-0" ,}
                    , React.createElement('div', { className: "relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 rounded-[16px] border border-white/5"       ,}
                      , React.createElement('img', { src: displayImage,
                        alt: uc.title,
                        className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none select-none"       ,
                      loading: "lazy",} )
                      , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"      ,} )
                    )
                  )

                  /* Card Content */
                  , React.createElement('div', { className: "p-6 flex flex-col flex-grow text-left"    ,}
                    /* <span className="text-xs font-mono tracking-widest text-[#E11D48] uppercase font-semibold block mb-2">
                      Success Case {(idx + 1).toString().padStart(2, "0")}
                    </span> */

                    , React.createElement('h3', { className: "text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors font-sans"        ,}
                      , uc.title
                    )

                    /* <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                      {uc.result}
                    </p> */
                  )

                  /* Card Actions Footer */
                  , React.createElement('div', { className: "px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between text-[#E11D48] group-hover:text-rose-455 transition-colors"           ,}
                    , React.createElement('span', { className: "text-xs uppercase font-semibold tracking-wider"   ,}, "Metrics Verified"

                    )
                    , React.createElement(ArrowUpRight, { size: 13, className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"  ,} )
                  )
                )
              );
            })
          )
        )

        /* Carousel Navigation Arrow Controls */
        , React.createElement('div', { className: "flex gap-4 mt-8 justify-start relative z-20"     ,}
          , React.createElement('button', {
            onClick: () => scroll("left"),
            'aria-label': "Scroll left" ,
            className: "w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"              ,}

            , React.createElement(ArrowLeft, { size: 18,} )
          )
          , React.createElement('button', {
            onClick: () => scroll("right"),
            'aria-label': "Scroll right" ,
            className: "w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"              ,}

            , React.createElement(ArrowUpRight, { size: 18,} )
          )
        )

      )
    )
  );
}
