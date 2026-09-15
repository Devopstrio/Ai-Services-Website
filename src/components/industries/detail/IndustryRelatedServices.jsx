import React from "react";
import { Link } from "react-router-dom";
import { Layers, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";










// Map outdated/incorrect service page URLs to valid routes defined in Navbar.tsx
function getCorrectServiceLink(href) {
  const h = href.toLowerCase();
  if (h.includes("cloud-platform-engineering") || h.includes("platform-engineering")) {
    return { title: "Platform Engineering", href: "/services/devops-automation/platform-engineering" };
  }
  if (h.includes("sre-operations") || h.includes("site-reliability-engineering")) {
    return { title: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" };
  }
  if (h.includes("product-engineering")) {
    return { title: "Product Engineering", href: "/services/software-development/product-engineering" };
  }
  if (h.includes("devops-automation")) {
    return { title: "DevOps & Automation", href: "/services/devops-automation" };
  }
  return { title: "", href: "" };
}

function resolveServiceLink(item) {
  const corrected = getCorrectServiceLink(item.href);
  if (corrected.href) {
    return corrected;
  }
  
  // Fallback checks on title strings
  const t = item.title.toLowerCase();
  if (t.includes("platform")) return { title: "Platform Engineering", href: "/services/devops-automation/platform-engineering" };
  if (t.includes("sre") || t.includes("reliability")) return { title: "Site Reliability Engineering (SRE)", href: "/services/devops-automation/site-reliability-engineering" };
  if (t.includes("product")) return { title: "Product Engineering", href: "/services/software-development/product-engineering" };
  if (t.includes("devops")) return { title: "DevOps & Automation", href: "/services/devops-automation" };
  
  return item;
}

// Premium description lookups matching Navbar descriptions
const serviceDescriptions = {
  "/services/devops-automation/platform-engineering": "Developer self-service templates and Backstage portal configurations.",
  "/services/devops-automation/site-reliability-engineering": "SLI/SLO definition, error budget tracking, and pager alerts.",
  "/services/software-development/product-engineering": "Rapid MVP prototyping and customer experience design sprints.",
  "/services/devops-automation": "Automated delivery frameworks and continuous deployment controllers."
};

export function IndustryRelatedServices({ relatedServices }) {
  return (
    React.createElement('section', { id: "related-services", className: "w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white"       ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center"       ,}

        /* Section Header */
        , React.createElement(Reveal, { className: "mb-14 w-full flex flex-col items-center text-center"     ,}
          , React.createElement('h2', { className: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans text-center mx-auto"         ,}, "Explore related "
              , React.createElement('span', { className: "text-rose-500 font-semibold" ,}, "services")
          )
        )

        /* Services Links Grid */
        , React.createElement('div', { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"    ,}
          , relatedServices.map((srv, idx) => {
            const resolved = resolveServiceLink(srv);
            const desc = serviceDescriptions[resolved.href] || "Enterprise integrations, deployment automations, and modern telemetry.";
            
            return (
              React.createElement(Reveal, { key: idx, delay: idx * 0.05, className: "h-full",}
                , React.createElement(Link, {
                  to: resolved.href,
                  className: "group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900 hover:border-rose-500/35 hover:bg-zinc-900/10 rounded-[24px] p-6 transition-all duration-300 overflow-hidden text-left cursor-pointer hover:scale-[1.01] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative"                   ,}


                  /* Subtle Inner Glow on Hover */
                  , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"          ,} )

                  /* Top card row */
                  , React.createElement('div', { className: "flex justify-between items-center relative z-10 w-full"     ,}
                    , React.createElement('span', { className: "w-8 h-8 rounded-[8px] bg-rose-950/15 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300"             ,}
                      , React.createElement(Layers, { size: 14,} )
                    )
                    , React.createElement('span', { className: "w-8 h-8 rounded-full bg-zinc-955/40 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-rose-500 group-hover:border-rose-500/20 transition-all duration-300"              ,}
                      , React.createElement(ArrowUpRight, { size: 14, className: "stroke-[2.5]",} )
                    )
                  )

                  /* Text details */
                  , React.createElement('div', { className: "mt-8 relative z-10"  ,}
                    , React.createElement('h4', { className: "text-lg font-semibold text-white group-hover:text-rose-500 transition-colors duration-300"     ,}
                      , resolved.title
                    )
                    /* <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mt-2">
                      {desc}
                    </p> */
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
