import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";









export function IndustriesHero({
  breadcrumbCurrent = "Industries",
  titlePrefix = "Driving Innovation and Excellence across",
  titleHighlight = "Global Industries",
  subtitle = (
    React.createElement(React.Fragment, null, "We design, build and scale industrial-grade "
            , React.createElement(Link, { to: "/services/digital-transformation", className: "text-rose-500 hover:underline" ,}, "digital architectures" ), " that "  , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "automate field logistics"  ), ", optimize resource planning, and enforce extreme "       , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline" ,}, "telemetry safety standards"  ), "."
    )
  ),
  bgImage = "/webp/assets/industries_hero_bg.webp"
}) {
  return (
    React.createElement('section', { className: "w-full relative overflow-hidden bg-black text-white min-h-screen md:min-h-[100dvh] flex flex-col justify-between -mt-24 font-sans"           ,}

      /* Cover Background Image */
      , React.createElement('div', { className: "absolute inset-0 z-0"  ,}
        , React.createElement('img', {
          src: bgImage, 
          alt: `${breadcrumbCurrent} Background`, 
          className: "w-full h-full object-cover object-center select-none pointer-events-none opacity-40 filter brightness-[0.8] contrast-[1.05]"         ,
          loading: "eager",}
        )
        /* Premium Dark Gradient Overlay for Text Readability */
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/90 via-30% to-transparent"      ,} )
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"     ,} )
      )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-8 relative z-10 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 flex-grow flex flex-col justify-between"                  ,}

        /* Breadcrumb Navigation - Pinned at top side right below Navbar */
        , React.createElement(Reveal, { className: "flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-400 mb-6 sm:mb-8 uppercase tracking-widest"          ,}
          , React.createElement(Link, { to: "/", className: "hover:text-white transition-colors" ,}, "Home")
          , React.createElement(ChevronRight, { size: 14, className: "text-zinc-600 flex-shrink-0" ,} )
          , breadcrumbCurrent !== "Industries" ? (
            React.createElement(React.Fragment, null
              , React.createElement(Link, { to: "/industries", className: "hover:text-white transition-colors" ,}, "Industries")
              , React.createElement(ChevronRight, { size: 14, className: "text-zinc-600 flex-shrink-0" ,} )
            )
          ) : null
          , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, breadcrumbCurrent)
        )

        /* Main Content Area */
        , React.createElement('div', { className: "max-w-4xl text-left my-auto py-4"   ,}

          /* Headline */
          , React.createElement(Reveal, { delay: 0.1,}
            , React.createElement('h1', { className: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white font-sans"        ,}
              , titlePrefix, " " , React.createElement('br', { className: "hidden sm:inline" ,} )
              , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, titleHighlight)
            )
          )

        )

      )
    )
  );
}

