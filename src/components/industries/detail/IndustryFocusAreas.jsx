import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";










const defaultExtraFocusAreas = [
  {
    title: "Automated GitOps Pipelines",
    desc: React.createElement(React.Fragment, null, "Building secure, audited "   , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "continuous delivery" ), " pipelines with container integrity scanning and environment drift detection."         )
  },
  {
    title: "Cloud Platform Scale",
    desc: React.createElement(React.Fragment, null, "Constructing multi-region "  , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline" ,}, "Kubernetes"), " clusters and auto-scaling database nodes under strict SOC-2/HIPAA guidelines."         )
  },
  {
    title: "24/7 SRE Observability",
    desc: React.createElement(React.Fragment, null, "Designing distributed "  , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "telemetry logging" ), ", synthetic load runs, and auto-remediation loops to guarantee 99.99% uptime."          )
  }
];

export function IndustryFocusAreas({ focusAreas }) {
  // Merge focus areas to ensure a minimum of 6 cards are rendered
  const mergedFocusAreas = [...focusAreas];
  let defaultIdx = 0;
  while (mergedFocusAreas.length < 6 && defaultIdx < defaultExtraFocusAreas.length) {
    mergedFocusAreas.push(defaultExtraFocusAreas[defaultIdx]);
    defaultIdx++;
  }

  return (
    React.createElement('section', { id: "capabilities", className: "w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white"       ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left"       ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-14",}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Specialized "
             , React.createElement('span', { className: "text-[#E11D48] font-semibold" ,}, "capability groups" )
          )
        )

        /* Capability Cards Grid */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"     ,}
          , mergedFocusAreas.map((area, idx) => (
            React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "h-full",}
              , React.createElement('div', { className: "group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-7 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-pointer"                    ,}

                /* Subtle Inner Glow on Hover */
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"         ,} )

                , React.createElement('div', null
                  , React.createElement('span', { className: "block text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-3 font-mono"       ,}, "Focus Domain"

                  )

                  , React.createElement('h3', { className: "text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-rose-500 transition-colors duration-300 font-sans"         ,}
                    , area.title
                  )
                )

                /* Card Footer */
                , React.createElement('div', { className: "mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300"          ,}
                  , React.createElement('span', { className: "text-xs uppercase font-semibold tracking-wider"   ,}, "Operational Focus"

                  )
                  , React.createElement(ArrowUpRight, { size: 14, className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300"   ,} )
                )

              )
            )
          ))
        )

      )
    )
  );
}
