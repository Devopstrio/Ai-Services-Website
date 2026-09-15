import React from "react";
import { ShieldCheck, Lock, CheckCircle, FileText } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { Link } from "react-router-dom";







const certs = [
  {
    icon: React.createElement(ShieldCheck, { size: 18,} ),
    title: "SOC-2 Type II Certification",
    desc: React.createElement(React.Fragment, null, "Rigorous annual security evaluations on all hosting centers, employee access permissions, and "            , React.createElement(Link, { to: "/services/devops-automation", className: "text-rose-500 hover:underline" ,}, "codebase modifications" ), ".")
  },
  {
    icon: React.createElement(Lock, { size: 18,} ),
    title: "HIPAA & GDPR Standards",
    desc: React.createElement(React.Fragment, null, "Strict personal data masking algorithms and "      , React.createElement(Link, { to: "/services/cloud-services", className: "text-rose-500 hover:underline" ,}, "database security patterns"  ), " that protect medical files and client credentials."       )
  },
  {
    icon: React.createElement(FileText, { size: 18,} ),
    title: "PCI-DSS Level 1 Compliance",
    desc: React.createElement(React.Fragment, null, React.createElement(Link, { to: "/services/cybersecurity", className: "text-rose-500 hover:underline" ,}, "Vulnerability scanning" ), ", payment processor isolation, and end-to-end tokenization configurations."       )
  },
  {
    icon: React.createElement(CheckCircle, { size: 18,} ),
    title: "ISO/IEC 27001 Alignment",
    desc: React.createElement(React.Fragment, null, "Standardized risk assessment procedures, operational checks, and incident logs under "          , React.createElement(Link, { to: "/services/cybersecurity", className: "text-rose-500 hover:underline" ,}, "security standards" ), ".")
  }
];

export function IndustrialCapabilities() {
  return (
    React.createElement('section', { className: "w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white"       ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10"      ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-14 text-center" ,}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"      ,}, "Regulatory security by "
               , React.createElement('span', { className: "text-[#E11D48] font-semibold" ,}, "default")
          )
        )

        /* Grid Layout */
        , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"    ,}
          , certs.map((cert, idx) => (
            React.createElement(Reveal, { key: cert.title, delay: idx * 0.05, className: "h-full",}
              , React.createElement('div', { className: "group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer text-left"                 ,}

                /* Subtle Inner Glow on Hover */
                , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"          ,} )

                , React.createElement('div', { className: "relative z-10" ,}
                  , React.createElement('div', { className: "w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300 mb-6"              ,}
                    , cert.icon
                  )

                  , React.createElement('h3', { className: "text-base font-bold text-white mb-2 tracking-tight group-hover:text-[#E11D48] transition-colors duration-300"       ,}
                    , cert.title
                  )

                  , React.createElement('p', { className: "text-xs text-zinc-400 leading-relaxed font-semibold"   ,}
                    , cert.desc
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
