import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function RepresentativeCTA({
  title = "Ready To Design Your Industry",
  highlightText = "Regulatory & Cloud Roadmap?",
  description = "Book a dedicated architectural mapping session with our principal systems engineering practice.",
  primaryBtnText = "Schedule Discovery Call",
  primaryBtnHref = "/contact",
  secondaryBtnText = "Explore Solutions",
  secondaryBtnHref = "/solutions/overview",
  badgeText = "Enterprise Advisory",
  imageSrc = "/webp/assets/Industries-page/industries/Banking-and-Finance.webp",
  imageAlt = "Devopstrio Architect"
}) {
  return (
    <section className="w-full py-20 bg-black text-white relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900/60 to-black border border-zinc-800/80 p-8 sm:p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-left">
              {badgeText && (
                <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-rose-500/10 text-rose-500 border border-rose-500/20 mb-6">
                  {badgeText}
                </span>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-6">
                {title} <span className="font-semibold text-rose-500">{highlightText}</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl">
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={primaryBtnHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-[0_0_25px_rgba(225,29,72,0.3)] hover:-translate-y-0.5"
                >
                  {primaryBtnText}
                  <ArrowUpRight size={16} />
                </Link>
                {secondaryBtnText && (
                  <Link
                    to={secondaryBtnHref}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800 text-white transition-all hover:-translate-y-0.5"
                  >
                    {secondaryBtnText}
                    <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            </div>
            {imageSrc && (
              <div className="w-full lg:w-96 flex justify-center lg:justify-end">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full max-h-72 object-cover rounded-2xl border border-zinc-800/80 shadow-2xl"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default RepresentativeCTA;
