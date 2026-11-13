import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FAQ({
  faqs = [],
  badge = "FAQ",
  title = "Frequently Asked",
  highlight = "Questions",
  className = "",
  contactHref = "https://devopstrio.co.uk/contact",
  contactBtnText = "Contact AI Engineers"
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      id="faq"
      className={`w-full py-20 md:py-28 bg-[#030303] text-white relative border-b border-zinc-900/60 font-sans ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          {badge && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rose-500">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            {title}{" "}
            <span className="font-semibold bg-gradient-to-r from-red-500 via-rose-500 to-rose-400 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
        </div>

        {/* Accordion List with Horizontal Dividers */}
        <div className="flex flex-col border-t border-zinc-900 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-zinc-900/80 py-6 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group py-1 cursor-pointer"
                >
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div className="text-zinc-400 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0 p-1.5 rounded-full bg-zinc-900/50 group-hover:bg-zinc-800">
                    {isOpen ? (
                      <Minus size={20} className="w-5 h-5" />
                    ) : (
                      <Plus size={20} className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 text-sm md:text-base text-zinc-300 font-normal leading-relaxed max-w-4xl flex flex-col gap-3 pl-1 text-left">
                    <p>{faq.a}</p>

                    {/* Emerald Proof Metric */}
                    {faq.proof && (
                      <div className="pt-1">
                        <span className="text-xs text-emerald-400 font-semibold tracking-wide font-mono bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">
                          {faq.proof}
                        </span>
                      </div>
                    )}

                    {/* Technical Tag Pills */}
                    {faq.tags && faq.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-xs font-mono font-medium tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="border border-zinc-800/80 bg-gradient-to-r from-zinc-950/90 via-zinc-900/40 to-zinc-950/90 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl text-left">
          <p className="text-base md:text-lg font-semibold text-zinc-200">
            Still have questions? Don't sit with them. Reach out to our AI engineering team — we respond personally.
          </p>
          {contactHref.startsWith("http") ? (
            <a
              href={contactHref}
              className="gap-2.5 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider uppercase border border-rose-600/30 bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {contactBtnText} <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link
              to={contactHref}
              className="gap-2.5 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider uppercase border border-rose-600/30 bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {contactBtnText} <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
