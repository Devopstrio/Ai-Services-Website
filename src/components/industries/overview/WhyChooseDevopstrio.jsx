import React from "react";
import { Award, Clock, ShieldCheck } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";







export function WhyChooseDevopstrio() {
  const advantages = [
    {
      icon: React.createElement(Award, { size: 16,} ),
      title: "Certified Platform Engineers",
      desc: React.createElement(React.Fragment, null, "Every lead architect holds principal qualifications in AWS, Azure, GCP, or "           , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline" ,}, "Kubernetes routing" ), " architectures." )
    },
    {
      icon: React.createElement(Clock, { size: 16,} ),
      title: "Guaranteed Availability SLAs",
      desc: React.createElement(React.Fragment, null, "Our contracts stipulate exact 99.99% system availability targets backed by automated "           , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline" ,}, "disaster recovery" ), " loops." )
    },
    {
      icon: React.createElement(ShieldCheck, { size: 16,} ),
      title: "Continuous Pipeline Auditing",
      desc: React.createElement(React.Fragment, null, "All platform configuration files are systematically audited against vulnerability CVE databases before "            , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "production deployment" ), ".")
    }
  ];

  return (
    React.createElement('section', { id: "why-choose", className: "w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white"       ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left"       ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-14",}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Why leading enterprises "
               , React.createElement('span', { className: "text-[#E11D48] font-semibold" ,}, "partner with Devopstrio"  )
          )
        )

        /* Grid Layout */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"    ,}
          , advantages.map((item, idx) => (
            React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "h-full",}
              , React.createElement('div', { className: "group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between min-h-[220px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"                 ,}

                /* Subtle Inner Glow on Hover */
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"          ,} )

                , React.createElement('div', { className: "relative z-10" ,}
                  , React.createElement('div', { className: "w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300 mb-6"              ,}
                    , item.icon
                  )

                  , React.createElement('h4', { className: "text-base font-bold text-white mb-2 tracking-tight transition-colors duration-300"      ,}
                    , item.title
                  )

                  , React.createElement('p', { className: "text-xs text-zinc-400 leading-relaxed font-semibold"   ,}
                    , item.desc
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
