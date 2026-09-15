import React, { useRef } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";








const successStories = [
  {
    company: "Apex Clearing Bank",
    achievement: "Mainframe Modernization",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-368.webp"
  },
  {
    company: "Novis Diagnostics",
    achievement: "Secure Medical Ingest",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-369.webp"
  },
  {
    company: "Horizon Retailers",
    achievement: "Black Friday Scaling",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-370.webp"
  },
  {
    company: "Global Telecom",
    achievement: "Zero-Downtime Migration",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-371.webp"
  },
  {
    company: "Aerotech Logistics",
    achievement: "Autonomous Scheduling",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-372.webp"
  },
  {
    company: "EduLearn Portal",
    achievement: "Virtual Class Scaling",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-373.webp"
  },
  {
    company: "Public Safety Net",
    achievement: "High-Availability Gateway",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-374.webp"
  },
  {
    company: "MediaFlow CDN",
    achievement: "Edge Content Cache",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-375.webp"
  },
  {
    company: "SmartForge IoT",
    achievement: "Predictive Machine Care",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-376.webp"
  },
  {
    company: "PaySafe Integrations",
    achievement: "Fraud Filtering Pipeline",
    image: "/assets/Services-Page/CAPABILITIES-Core-Practice-Specializations/webp/Frame-377.webp"
  }
];

export function SuccessStories() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 344; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    React.createElement('section', { id: "success", className: "w-full pt-6 pb-14 md:pt-8 md:pb-18 bg-[#030303] relative overflow-hidden text-white"        ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      /* Hide Scrollbar Style Block */
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

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left"        ,}

        /* Section Header with Navigation Arrow Actions */
        , React.createElement('div', { className: "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12"       ,}
          , React.createElement(Reveal, null
            , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight"       ,}, "Featured client "
                , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, "success stories" )
            )
          )

          /* Navigation controls */
          , React.createElement(Reveal, { className: "flex gap-4" ,}
            , React.createElement('button', {
              onClick: () => scroll("left"),
              'aria-label': "Scroll left" ,
              className: "w-11 h-11 rounded-full border border-white/10 bg-[#0b0b0c] hover:bg-rose-600 hover:border-rose-600 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300"              ,}

              , React.createElement(ArrowLeft, { size: 16,} )
            )
            , React.createElement('button', {
              onClick: () => scroll("right"),
              'aria-label': "Scroll right" ,
              className: "w-11 h-11 rounded-full border border-white/10 bg-[#0b0b0c] hover:bg-rose-600 hover:border-rose-600 flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-300"              ,}

              , React.createElement(ArrowUpRight, { size: 16,} )
            )
          )
        )

        /* Horizontal Slider List (Microsoft Style Cards) */
        , React.createElement('div', {
          ref: scrollContainerRef,
          className: "flex gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory relative"        ,}

          , successStories.map((story, idx) => (
            React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "flex-shrink-0 snap-start" ,}
              , React.createElement('div', { className: "group block w-[290px] sm:w-[320px] bg-[#0b0b0c] border border-white/10 rounded-[24px] p-5 hover:border-rose-500/35 hover:shadow-[0_12px_36px_rgba(244,63,94,0.12)] transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between h-full"                   ,}

                /* Subtle Inner Glow on Hover */
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"           ,} )

                , React.createElement('div', { className: "relative z-10 flex flex-col h-full justify-between"     ,}

                  , React.createElement('div', null
                    /* Flush Image Container without padding */
                    , React.createElement('div', { className: "relative w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden mb-5 group-hover:border-rose-500/30 transition-colors duration-300"          ,}
                      , React.createElement('img', {
                        src: story.image,
                        alt: story.achievement,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"       ,
                        loading: "lazy",}
                      )
                    )

                    /* Title */
                    , React.createElement('h3', { className: "text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-rose-400 transition-colors duration-300 font-sans"        ,}
                      , story.achievement
                    )
                  )

                  /* Simple CTA Footer Link */
                  , React.createElement('div', { className: "mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300"          ,}
                    , React.createElement('span', { className: "text-xs uppercase font-mono tracking-wider font-semibold text-zinc-400"     ,}, "Case Study"

                    )
                    , React.createElement('span', { className: "text-xs sm:text-sm font-bold flex items-center gap-1.5 text-rose-400 group-hover:text-white transition-colors"        ,}, "Read Story "
                        , React.createElement(ArrowUpRight, { size: 14, className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"  ,} )
                    )
                  )

                )

              )
            )
          ))
        )

      )
    )
  );
}
