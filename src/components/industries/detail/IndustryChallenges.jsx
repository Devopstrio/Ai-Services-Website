import React from "react";
import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";










export function IndustryChallenges({ challenges }) {
  return (
    React.createElement('section', { id: "challenges", className: "w-full py-20 md:py-28 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white font-sans"         ,}
      /* Ambient Glow */
      , React.createElement('div', { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[140px] pointer-events-none z-0"           ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left"        ,}
        , React.createElement(Reveal, { className: "mb-14",}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Key operational "
              , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, "roadblocks"), " we address"
          )
        )

        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"     ,}
          , challenges.map((chal, idx) => (
            React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "h-full",}
              , React.createElement('div', { className: "group h-full bg-zinc-950/40 backdrop-blur-md border border-zinc-800/60 hover:border-rose-500/50 rounded-2xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(225,29,72,0.12)] flex flex-col justify-between relative overflow-hidden cursor-pointer"                   ,}

                /* Micro hover gradient glow inside card */
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"          ,} )

                , React.createElement('div', null
                  /* Top Header: Icon & Hover Indicator */
                  , React.createElement('div', { className: "flex items-center justify-between mb-6"   ,}
                    , React.createElement('div', { className: "w-13 h-13 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-black"              ,}
                      , React.createElement(AlertTriangle, { size: 22,} )
                    )

                    , React.createElement('span', { className: "w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-300"              ,}
                      , React.createElement(ArrowUpRight, { size: 14, className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"  ,} )
                    )
                  )

                  /* Title (Increased Font Size) */
                  , React.createElement('h4', { className: "text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors duration-300 leading-snug font-sans"         ,}
                    , chal.title
                  )
                )

                /* Description Revealed ONLY on Hover (Expandable Accordion Animation) */
                , React.createElement('div', { className: "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"       ,}
                  , React.createElement('div', { className: "overflow-hidden pt-4" ,}
                    , React.createElement('div', { className: "text-zinc-300 text-base sm:text-lg leading-relaxed font-normal border-t border-zinc-800/80 pt-3"       ,}
                      , chal.desc
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
