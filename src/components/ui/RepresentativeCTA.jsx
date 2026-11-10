import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function CtaButton({ text, href, to, onClick, isPrimary = true, isEmerald = false }) {
  const target = href || to;
  const isExternal =
    typeof target === "string" &&
    (target.startsWith("http") || target.startsWith("#") || target.startsWith("mailto:"));

  const className = isPrimary
    ? `btn-tactile group ${isEmerald ? "[--btn-theme-bg:#059669] [--btn-theme-focus:#10b981]" : ""}`
    : "btn-tactile btn-tactile-secondary group";

  const content = (
    <div>
      <span>
        {text}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={className} type="button">
        {content}
      </button>
    );
  }

  if (isExternal) {
    return (
      <a
        href={target}
        className={className}
        
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={target || "/solutions/overview"} className={className}>
      {content}
    </Link>
  );
}

export function RepresentativeCTA({
  title = "Ready To Shape The Next Era Of",
  highlightText = "AI & Digital Innovation?",
  description, // Intentionally omitted from rendering per design specification
  primaryBtnText = "GET STARTED",
  primaryBtnHref = "https://devopstrio.co.uk/contact#contact-form",
  primaryBtnTo,
  primaryBtnOnClick,
  secondaryBtnText = "EXPLORE PLATFORM",
  secondaryBtnHref = "/solutions/overview",
  secondaryBtnTo,
  secondaryBtnOnClick,
  imageSrc = "/cta-img-001.webp",
  imageAlt = "AI Representative",
  theme = "rose",
  hideImageOnMobile = false,
  badgeText
}) {
  const isEmerald = theme === "emerald";
  const highlightColor = isEmerald
    ? "text-emerald-400 font-semibold"
    : "text-rose-500 font-semibold";

  return (
    <section className="w-full pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 bg-black relative font-sans overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-[#080808] border border-zinc-800/80 rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 lg:pl-14 lg:pr-8 relative shadow-2xl flex flex-col lg:flex-row items-stretch justify-between gap-8 min-h-[340px] sm:min-h-[360px] lg:min-h-[390px] xl:min-h-[410px] overflow-hidden">
            {/* Left Content Column: Title at Top, CTA Buttons at Bottom */}
            <div className="w-full lg:w-[58%] xl:w-[60%] z-20 flex flex-col justify-between items-start text-left relative py-1 sm:py-2">
              <div>
                {/* Title at Top */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-white leading-[1.16] font-sans max-w-2xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  {title}{" "}
                  {highlightText && (
                    <span className={`${highlightColor} block sm:inline mt-1 sm:mt-0`}>
                      {highlightText}
                    </span>
                  )}
                </h2>
              </div>

              {/* Tactile CTA Buttons */}
              <div className="mt-8 sm:mt-10 lg:mt-auto pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                {primaryBtnText && (
                  <CtaButton
                    text={primaryBtnText}
                    href={primaryBtnHref || primaryBtnTo}
                    onClick={primaryBtnOnClick}
                    isPrimary={true}
                    isEmerald={isEmerald}
                  />
                )}
                {secondaryBtnText && (
                  <CtaButton
                    text={secondaryBtnText}
                    href={secondaryBtnHref || secondaryBtnTo}
                    onClick={secondaryBtnOnClick}
                    isPrimary={false}
                    isEmerald={isEmerald}
                  />
                )}
              </div>
            </div>

            {/* Right Representative Image (Fitted seamlessly inside card with head clearance) */}
            <div
              className={`${
                hideImageOnMobile ? "hidden lg:flex" : "flex"
              } lg:absolute lg:bottom-0 lg:right-2 xl:right-6 lg:top-auto lg:h-[94%] xl:h-[96%] w-full sm:w-[460px] md:w-[500px] lg:w-[520px] xl:w-[580px] justify-center lg:justify-end items-end pointer-events-none z-10 mt-6 sm:mt-8 lg:mt-0 mx-auto lg:mx-0`}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-auto h-auto max-h-[260px] sm:max-h-[320px] lg:h-full lg:max-h-full object-contain object-bottom pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] lg:drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RepresentativeCTA;
