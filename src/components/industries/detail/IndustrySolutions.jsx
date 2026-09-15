import React from "react";
import { Lightbulb, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";










export function IndustrySolutions({ solutions }) {
  return (
    React.createElement('section', { id: "solutions", className: "w-full py-20 md:py-28 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white font-sans"         ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left"        ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-14",}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Customized "
             , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, "technology strategies" )
          )
        )

        /* Solutions Grid */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"    ,}
          , solutions.map((sol, idx) => (
            React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "h-full",}
              , React.createElement('div', { className: "group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between hover:border-rose-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 transition-all duration-500 relative cursor-pointer"                ,}

                /* Subtle Inner Glow on Hover */
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"         ,} )

                /* Top Padded Graphic Container */
                , React.createElement('div', { className: "p-3 pb-0" ,}
                  , React.createElement('div', { className: "relative w-full aspect-[16/6] overflow-hidden bg-zinc-950 rounded-[16px] border border-white/5 flex items-center justify-center text-rose-500 group-hover:text-white transition-colors duration-300"              ,}
                    , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-transparent pointer-events-none"      ,} )
                    , React.createElement(Lightbulb, { size: 24, className: "transition-transform duration-300 group-hover:scale-110"  ,} )
                  )
                )

                /* Card Main Body */
                , React.createElement('div', { className: "p-6 sm:p-7 flex flex-col flex-grow text-left"     ,}
                  , React.createElement('h3', { className: "text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-rose-400 transition-colors duration-300 font-sans"         ,}
                    , sol.title
                  )

                  /* Description Revealed ONLY on Hover */
                  , React.createElement('div', { className: "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"       ,}
                    , React.createElement('div', { className: "overflow-hidden pt-3" ,}
                      , React.createElement('div', { className: "text-base sm:text-lg text-zinc-300 leading-relaxed font-normal border-t border-white/10 pt-3"       ,}
                        , sol.desc
                      )
                    )
                  )
                )

                /* Card Footer */
                , React.createElement('div', { className: "px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between"        ,}
                  , React.createElement('span', { className: "text-xs text-rose-500 font-semibold uppercase tracking-wider group-hover:text-white transition-colors inline-flex items-center gap-1.5"         ,}, "Engineering Architecture "
                      , React.createElement(ArrowUpRight, { size: 13, className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"  ,} )
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
