import React, { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to DevOpsTRIO Newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-zinc-400 pt-16 sm:pt-20 pb-4 relative font-sans mt-20 sm:mt-28 text-left">
      {/* Premium Dual-Line White Top Border */}
      <div className="absolute top-0 inset-x-0 flex flex-col items-center z-10 pointer-events-none">
        <div className="relative w-full flex justify-center opacity-90">
          <div className="w-full h-[2px] bg-gradient-to-r from-zinc-950 via-white/70 to-zinc-950" />
          <div className="absolute top-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
        </div>
        <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-[3px]" />
      </div>

      {/* Background Glows for visual depth */}
      <div className="absolute bottom-0 right-0 w-[440px] h-[440px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] pointer-events-none z-0 overflow-hidden" />
      <div className="absolute top-0 left-[20%] w-[340px] h-[340px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">

        {/* Floating Newsletter Card (Exact 957px width requested) */}
        <div className="max-w-[957px] mx-auto w-full bg-white rounded-2xl p-5 sm:p-6 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 -mt-16 sm:-mt-20 md:-mt-24 mb-11 sm:mb-15 shadow-[0_20px_45px_rgba(0,0,0,0.6)] relative z-20 border border-zinc-200/60">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-[23px] font-bold text-black mb-1.5 tracking-tight leading-tight">
              Subscribe Newsletter
            </h3>
            <p className="text-zinc-600 text-[13.2px] sm:text-[13.5px] font-normal max-w-sm mx-auto md:mx-0 leading-relaxed">
              Get the latest insights on enterprise cloud transformations and technical engineering directly to your inbox.
            </p>
          </div>
          <div className="w-full md:w-[380px] shrink-0">
            <form onSubmit={handleSubmit} className="flex relative w-full border border-zinc-200 rounded-xl bg-zinc-50 focus-within:border-rose-500 focus-within:shadow-[0_0_12px_rgba(225,29,72,0.15)] transition-all duration-300 p-1 shadow-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow bg-transparent px-3 py-2 text-[13.2px] sm:text-[13.5px] font-normal text-black focus:outline-none placeholder:text-zinc-400 min-w-0"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-lg text-[11.8px] sm:text-[12.2px] font-bold tracking-wider uppercase bg-black hover:bg-zinc-800 text-white transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md"
                aria-label="Subscribe"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* 6-Column Mega Menu (Font size increased to 14.2px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-11 mb-16 text-left">

          {/* Col 1: Brand Intro */}
          <div className="flex flex-col items-center text-center gap-0">
            <a href="https://devopstrio.co.uk/" className="flex flex-col items-center gap-2.5 group inline-flex mb-3">
              <img
                src="https://devopstrio.co.uk/assets/logo/logo.png"
                alt="Devopstrio logo"
                className="w-14 h-14 object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_0_14px_rgba(255,255,255,0.15)]"
                loading="lazy"
              />
              <div className="flex flex-col items-center text-center">
                <span className="text-[25px] font-semibold text-white tracking-tight leading-none">
                  Devopstrio
                </span>
              </div>
            </a>
          </div>

          {/* Col 2: Services / Practice Areas */}
          <div className="text-left">
            <h4 className="text-[14.2px] sm:text-[14.5px] font-semibold text-white mb-4 tracking-wider uppercase font-sans whitespace-nowrap">
              Core Expertise
            </h4>
            <ul className="flex flex-col gap-3 text-[13.8px] sm:text-[14.2px] text-zinc-300 font-normal tracking-normal text-left">
              <li><a href="https://devopstrio.co.uk/services/ai-data-innovation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">AI & Data Innovation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cloud-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Cloud Services</a></li>
              <li><a href="https://devopstrio.co.uk/services/devops-automation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">DevOps & Automation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cybersecurity" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Cybersecurity</a></li>
              <li><a href="https://devopstrio.co.uk/services/software-development" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Software Development</a></li>
              <li><a href="https://devopstrio.co.uk/services/digital-transformation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Digital Transformation</a></li>
              <li><a href="https://devopstrio.co.uk/services/data-engineering" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Data Engineering</a></li>
              <li><a href="https://devopstrio.co.uk/services/managed-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Managed Services</a></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="text-left">
            <h4 className="text-[14.2px] sm:text-[14.5px] font-semibold text-white mb-4 tracking-wider uppercase font-sans whitespace-nowrap">
              Industries
            </h4>
            <ul className="flex flex-col gap-3 text-[13.8px] sm:text-[14.2px] text-zinc-300 font-normal tracking-normal text-left">
              <li><a href="https://devopstrio.co.uk/industries/banking-finance" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Banking & Finance</a></li>
              <li><a href="https://devopstrio.co.uk/industries/healthcare-life-sciences" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Healthcare & Life Sciences</a></li>
              <li><a href="https://devopstrio.co.uk/industries/retail-ecommerce" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Retail & E-Commerce</a></li>
              <li><a href="https://devopstrio.co.uk/industries/manufacturing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Manufacturing</a></li>
              <li><a href="https://devopstrio.co.uk/industries/telecommunications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Telecommunications</a></li>
              <li><a href="https://devopstrio.co.uk/industries/media-entertainment" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Media & Entertainment</a></li>
              <li><a href="https://devopstrio.co.uk/industries/education" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Education</a></li>
              <li><a href="https://devopstrio.co.uk/industries/government-public-sector" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Government & Public Sector</a></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem */}
          <div className="text-left">
            <h4 className="text-[14.2px] sm:text-[14.5px] font-semibold text-white mb-4 tracking-wider uppercase font-sans whitespace-nowrap">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-3 text-[13.8px] sm:text-[14.2px] text-zinc-300 font-normal tracking-normal text-left">
              <li><a href="https://devopstrio.co.uk/ecosystem/partnerships" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Strategic Partnerships</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/innovation-labs" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">R&D Innovation Labs</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/platforms-solutions" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Platforms & Solutions</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/technology-stack" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Technology Stack</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/global-delivery" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Global Delivery</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/engineering-excellence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Engineering Excellence</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/accelerators-frameworks" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Accelerators & Frameworks</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/landing-zone" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Landing Zone</a></li>
            </ul>
          </div>

          {/* Col 5: Insights & Events */}
          <div className="text-left">
            <h4 className="text-[14.2px] sm:text-[14.5px] font-semibold text-white mb-4 tracking-wider uppercase font-sans whitespace-nowrap">
              Insights & Events
            </h4>
            <ul className="flex flex-col gap-3 text-[13.8px] sm:text-[14.2px] text-zinc-300 font-normal tracking-normal text-left">
              <li><a href="https://devopstrio.co.uk/insights/blogs" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Blogs</a></li>
              <li><a href="https://devopstrio.co.uk/insights/case-studies" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Case Studies</a></li>
              <li><a href="https://devopstrio.co.uk/insights/white-paper" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">White Paper</a></li>
              <li><a href="https://devopstrio.co.uk/insights/awards-milestones" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Awards & Milestones</a></li>
              <li><a href="https://devopstrio.co.uk/insights/industry-events" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Industry Events</a></li>
              <li><a href="https://devopstrio.co.uk/insights/celebrations" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Celebrations</a></li>
              <li><a href="https://devopstrio.co.uk/insights/team-culture" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Team Culture</a></li>
              <li><a href="https://devopstrio.co.uk/insights/our-offerings" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Our Offerings</a></li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div className="text-left">
            <h4 className="text-[14.2px] sm:text-[14.5px] font-semibold text-white mb-4 tracking-wider uppercase font-sans whitespace-nowrap">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[13.8px] sm:text-[14.2px] text-zinc-300 font-normal tracking-normal text-left">
              <li><a href="https://devopstrio.co.uk/about/company-overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Company Overview</a></li>
              <li><a href="https://devopstrio.co.uk/about/our-culture-people" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Our Culture & People</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-internship" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Global Internship</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-presence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Global Presence</a></li>
              <li><a href="https://devopstrio.co.uk/about/partnerships-certifications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Partnerships & Certifications</a></li>
              <li><a href="https://devopstrio.co.uk/about/awards-recognition" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Awards & Recognition</a></li>
              <li><a href="https://devopstrio.co.uk/about/sustainability-csr" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Sustainability & CSR</a></li>
              <li><a href="https://devopstrio.co.uk/contact#contact-form" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 whitespace-nowrap">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: Socials & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-5 w-full pt-4 border-t border-white/[0.08]">

          {/* Legal Links with Cookie Badge */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-[12.8px] sm:text-[13.2px] font-semibold tracking-wide text-zinc-400">
            {/* Red Cookie Consent Icon Badge */}
            <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center mr-1 shadow-[0_0_8px_rgba(225,29,72,0.4)]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="#E11D48" />
                <circle cx="8" cy="9" r="1.5" fill="white" />
                <circle cx="15" cy="10" r="1.5" fill="white" />
                <circle cx="11" cy="15" r="1.5" fill="white" />
                <circle cx="16" cy="16" r="1" fill="white" />
              </svg>
            </div>

            <a href="https://devopstrio.co.uk/disclaimer" className="hover:text-white transition-colors duration-300">Disclaimer</a>
            <span className="text-zinc-700">•</span>
            <a href="https://devopstrio.co.uk/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <span className="text-zinc-700">•</span>
            <a href="https://devopstrio.co.uk/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <span className="text-zinc-700">•</span>
            <a href="https://devopstrio.co.uk/cookie-policy" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            <span className="text-zinc-700">•</span>
            <a href="https://devopstrio.co.uk/gdpr" className="hover:text-white transition-colors duration-300">GDPR Compliance</a>
            <span className="text-zinc-700">•</span>
            <a href="https://devopstrio.co.uk/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 items-center">
            <a
              href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579126233218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 5.848 5.848 0 0 0-.742-.018c-1.384 0-1.884.582-1.884 1.986v1.989h3.766l-.587 3.667h-3.179v7.98H9.101z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/devopstrio_offcl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <span className="text-[12px] text-zinc-500 font-medium tracking-wide">
            Copyright © 2026 Devopstrio Limited. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;