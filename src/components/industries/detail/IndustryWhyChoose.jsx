import React from "react";
import { Award, ShieldCheck, Cpu, Workflow, Clock, Sliders, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";










const extraWhyChoose = [
  {
    title: "Zero-Downtime Migration Models",
    desc: React.createElement(React.Fragment, null, "Every " , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline font-semibold"  ,}, "cloud refactoring" ), " release is backed by rigorous traffic-shadowing checks, preventing database locks and transactional drops."             )
  },
  {
    title: "100% Declarative Stacks",
    desc: React.createElement(React.Fragment, null, "We enforce complete state declarations using Terraform and "        , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline font-semibold"  ,}, "GitOps controllers" ), ", meaning your network, compute, and IAM policies are always auditable."          )
  },
  {
    title: "Pre-Configured Telemetry Baselines",
    desc: React.createElement(React.Fragment, null, "Every repository we launch comes integrated with "       , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline font-semibold"  ,}, "OpenTelemetry"), " agents, giving you instant dashboards for database queries and CPU usage."           )
  }
];

export function IndustryWhyChoose({ whyChoose }) {
  // Pad the incoming list to exactly 6 items for our 3-column grid
  const mergedWhyChoose = [...whyChoose];
  let extraIdx = 0;
  while (mergedWhyChoose.length < 6 && extraIdx < extraWhyChoose.length) {
    mergedWhyChoose.push(extraWhyChoose[extraIdx]);
    extraIdx++;
  }
  const finalWhyChoose = mergedWhyChoose.slice(0, 6);

  // Icon mapping list
  const iconsList = [
    React.createElement(Award, { size: 24, key: "0", className: "transition-transform duration-300 group-hover:scale-110"  ,} ),
    React.createElement(ShieldCheck, { size: 24, key: "1", className: "transition-transform duration-300 group-hover:scale-110"  ,} ),
    React.createElement(Cpu, { size: 24, key: "2", className: "transition-transform duration-300 group-hover:scale-110"  ,} ),
    React.createElement(Workflow, { size: 24, key: "3", className: "transition-transform duration-300 group-hover:scale-110"  ,} ),
    React.createElement(Clock, { size: 24, key: "4", className: "transition-transform duration-300 group-hover:scale-110"  ,} ),
    React.createElement(Sliders, { size: 24, key: "5", className: "transition-transform duration-300 group-hover:scale-110"  ,} )
  ];

  return (
    React.createElement('section', { id: "why-choose", className: "w-full py-20 md:py-28 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white font-sans"         ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10 text-left"        ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-14",}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Unrivaled "
             , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, "engineering advantages" )
          )
        )

        /* 3-Column Grid of Premium Cards */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-12"     ,}
          , finalWhyChoose.map((why, idx) => {
            const borderColors = [
              "hover:border-rose-500/50",
              "hover:border-blue-500/50",
              "hover:border-emerald-500/50",
              "hover:border-amber-500/50",
              "hover:border-purple-500/50",
              "hover:border-cyan-500/50"
            ];
            const glowGradients = [
              "from-rose-500/10",
              "from-blue-500/10",
              "from-emerald-500/10",
              "from-amber-500/10",
              "from-purple-500/10",
              "from-cyan-500/10"
            ];
            const titleHoverColors = [
              "group-hover:text-rose-400",
              "group-hover:text-blue-400",
              "group-hover:text-emerald-400",
              "group-hover:text-amber-400",
              "group-hover:text-purple-400",
              "group-hover:text-cyan-400"
            ];
            const graphicColors = [
              "text-rose-500",
              "text-blue-500",
              "text-emerald-500",
              "text-amber-500",
              "text-purple-500",
              "text-cyan-500"
            ];

            return (
              React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "h-full",}
                , React.createElement('div', { className: `group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between ${borderColors[idx]} hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 transition-all duration-500 relative cursor-pointer`,}

                  /* Subtle Inner Glow on Hover */
                  , React.createElement('div', { className: `absolute inset-0 bg-gradient-to-br ${glowGradients[idx]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`,} )

                  /* Top Padded Graphic Container */
                  , React.createElement('div', { className: "p-3 pb-0" ,}
                    , React.createElement('div', { className: "relative w-full aspect-[16/6] overflow-hidden bg-zinc-950 rounded-[16px] border border-white/5 flex items-center justify-center transition-colors duration-300"            ,}
                      , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none"      ,} )
                      , React.createElement('span', { className: `${graphicColors[idx]} transition-colors duration-300`,}
                        , iconsList[idx]
                      )
                    )
                  )

                  /* Card Main Body */
                  , React.createElement('div', { className: "p-6 sm:p-7 flex flex-col flex-grow text-left"     ,}
                    , React.createElement('h3', { className: `text-xl sm:text-2xl font-bold text-white mb-2 leading-snug ${titleHoverColors[idx]} transition-colors duration-300 font-sans`,}
                      , why.title
                    )

                    /* Description Revealed ONLY on Hover */
                    , React.createElement('div', { className: "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"       ,}
                      , React.createElement('div', { className: "overflow-hidden pt-3" ,}
                        , React.createElement('div', { className: "text-base sm:text-lg text-zinc-300 leading-relaxed font-normal border-t border-white/10 pt-3"       ,}
                          , why.desc
                        )
                      )
                    )
                  )

                  /* Card Footer */
                  , React.createElement('div', { className: "px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between"        ,}
                    , React.createElement('span', { className: `text-xs ${graphicColors[idx]} font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5`,}, "Enterprise Advantage "
                        , React.createElement(ArrowUpRight, { size: 13, className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"  ,} )
                    )
                  )

                )
              )
            );
          })
        )

      )
    )
  );
}
