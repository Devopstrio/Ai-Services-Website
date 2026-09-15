import React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";









export function IndustryHero({
  industryName,
  title,
  highlightedWord,
  bgImage
}) {
  return (
    React.createElement('section', { className: "w-full relative overflow-hidden bg-black text-white min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between border-b border-zinc-900/60 -mt-16 font-sans"              ,}
      /* Background Graphic Asset with High-End Gradients */
      , React.createElement('div', { className: "absolute inset-0 z-0"  ,}
        , React.createElement('img', { src: bgImage, 
          alt: `${industryName} Hero Background`, 
          className: "w-full h-full object-cover object-center select-none pointer-events-none opacity-75 filter brightness-[1.15] contrast-[1.05]"         ,
        loading: "eager",} )
        /* Spotlights and dark linear gradient masking */
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-r from-black via-black/95 via-50% to-transparent"      ,} )
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"     ,} )
        , React.createElement('div', { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.06),transparent_50%)] pointer-events-none"   ,} )
      )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-8 relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 flex-grow flex flex-col justify-between"                 ,}

        /* Custom Breadcrumb - Pinned at top side right below Navbar */
        , React.createElement(Reveal, { className: "flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-widest"         ,}
          , React.createElement(Link, { to: "/", className: "hover:text-white transition-colors" ,}, "Home")
          , React.createElement(ChevronRight, { size: 14, className: "text-zinc-600 flex-shrink-0" ,} )
          , React.createElement(Link, { to: "/industries", className: "hover:text-white transition-colors" ,}, "Industries")
          , React.createElement(ChevronRight, { size: 14, className: "text-zinc-600 flex-shrink-0" ,} )
          , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, industryName)
        )

        /* Animated Header */
        , React.createElement('div', { className: "max-w-4xl text-left my-auto py-4"   ,}
          , React.createElement(Reveal, { delay: 0.1,}
            , React.createElement('h1', { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.12] text-white font-sans"         ,}
              , title, " "
              , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, highlightedWord)
            )
          )
        )

      )
    )
  );
}


