import React, { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to Devopstrio Newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-zinc-400 pt-20 sm:pt-24 pb-6 relative font-sans mt-24 sm:mt-32 text-left">
      {/* Top Laser Border Glow */}
      <div className="absolute top-0 inset-x-0 flex flex-col items-center z-10 pointer-events-none">
        <div className="relative w-full flex justify-center opacity-90">
          <div className="w-full h-[2px] bg-gradient-to-r from-zinc-950 via-white/70 to-zinc-950" />
          <div className="absolute top-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
        </div>
        <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-[3px]" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] pointer-events-none z-0 overflow-hidden" />
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Newsletter Floating Box */}
        <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl p-6 sm:p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 -mt-20 sm:-mt-24 md:-mt-28 mb-12 sm:mb-16 shadow-[0_25px_50px_rgba(0,0,0,0.6)] relative z-20 border border-zinc-200/50">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 tracking-tight leading-tight">
              Subscribe Newsletter
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md mx-auto md:mx-0 leading-relaxed">
              Get the latest insights on enterprise cloud transformations and technical engineering directly to your inbox.
            </p>
          </div>
          <div className="w-full md:w-[400px] shrink-0">
            <form onSubmit={handleSubmit} className="flex relative w-full border border-zinc-200 rounded-xl bg-zinc-50 focus-within:border-rose-500 focus-within:shadow-[0_0_15px_rgba(225,29,72,0.15)] transition-all duration-300 p-1.5 shadow-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow bg-transparent px-3.5 py-2.5 text-xs sm:text-sm font-medium text-black focus:outline-none placeholder:text-zinc-400 min-w-0"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase bg-black hover:bg-zinc-800 text-white transition-all duration-300 cursor-pointer shadow-md"
                aria-label="Subscribe"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* 6-Column Mega Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20 text-left">

          {/* Col 1: Brand & Logo */}
          <div className="flex flex-col items-center text-center gap-0">
            <a href="https://devopstrio.co.uk/" className="flex flex-col items-center gap-3 group inline-flex mb-4">
              <img
                src="/images/downloaded/a228f16227_logo.webp"
                alt="Devopstrio logo"
                className="w-16 h-16 object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "/images/downloaded/3225cf5a28_logo.png"; }}
              />
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-semibold text-white tracking-tight leading-none">
                  Devopstrio
                </span>
              </div>
            </a>
          </div>

          {/* Col 2: Core Expertise */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Core Expertise
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><a href="https://devopstrio.co.uk/services/ai-data-innovation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI & Data Innovation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cloud-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Cloud Services</a></li>
              <li><a href="https://devopstrio.co.uk/services/devops-automation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">DevOps & Automation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cybersecurity" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Cybersecurity</a></li>
              <li><a href="https://devopstrio.co.uk/services/software-development" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Software Development</a></li>
              <li><a href="https://devopstrio.co.uk/services/digital-transformation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Digital Transformation</a></li>
              <li><a href="https://devopstrio.co.uk/services/data-engineering" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Data Engineering</a></li>
              <li><a href="https://devopstrio.co.uk/services/managed-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Managed Services</a></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Industries
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><a href="https://devopstrio.co.uk/industries/banking-finance" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Banking & Finance</a></li>
              <li><a href="https://devopstrio.co.uk/industries/healthcare-life-sciences" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Healthcare & Life Sciences</a></li>
              <li><a href="https://devopstrio.co.uk/industries/retail-ecommerce" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Retail & E-Commerce</a></li>
              <li><a href="https://devopstrio.co.uk/industries/manufacturing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Manufacturing</a></li>
              <li><a href="https://devopstrio.co.uk/industries/telecommunications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Telecommunications</a></li>
              <li><a href="https://devopstrio.co.uk/industries/media-entertainment" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Media & Entertainment</a></li>
              <li><a href="https://devopstrio.co.uk/industries/education" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Education</a></li>
              <li><a href="https://devopstrio.co.uk/industries/government-public-sector" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Government & Public Sector</a></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><a href="https://devopstrio.co.uk/ecosystem/partnerships" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Strategic Partnerships</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/innovation-labs" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">R&D Innovation Labs</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/platforms-solutions" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Platforms & Solutions</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/technology-stack" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Technology Stack</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/global-delivery" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Delivery</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/engineering-excellence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Engineering Excellence</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/accelerators-frameworks" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Accelerators & Frameworks</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/landing-zone" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Landing Zone</a></li>
            </ul>
          </div>

          {/* Col 5: Insights & Events */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Insights & Events
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><a href="https://devopstrio.co.uk/insights/blogs" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Blogs</a></li>
              <li><a href="https://devopstrio.co.uk/insights/case-studies" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Case Studies</a></li>
              <li><a href="https://devopstrio.co.uk/insights/white-paper" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">White Paper</a></li>
              <li><a href="https://devopstrio.co.uk/insights/awards-milestones" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Awards & Milestones</a></li>
              <li><a href="https://devopstrio.co.uk/insights/industry-events" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Industry Events</a></li>
              <li><a href="https://devopstrio.co.uk/insights/celebrations" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Celebrations</a></li>
              <li><a href="https://devopstrio.co.uk/insights/team-culture" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Team Culture</a></li>
              <li><a href="https://devopstrio.co.uk/insights/our-offerings" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Offerings</a></li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><a href="https://devopstrio.co.uk/about/company-overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Company Overview</a></li>
              <li><a href="https://devopstrio.co.uk/about/our-culture-people" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Culture & People</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-internship" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Internship</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-presence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Presence</a></li>
              <li><a href="https://devopstrio.co.uk/about/partnerships-certifications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Partnerships & Certifications</a></li>
              <li><a href="https://devopstrio.co.uk/about/awards-recognition" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Awards & Recognition</a></li>
              <li><a href="https://devopstrio.co.uk/about/sustainability-csr" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Sustainability & CSR</a></li>
              <li><a href="https://devopstrio.co.uk/contact#contact-form" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row: Legal Links & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 w-full pt-4 border-t border-zinc-900/60">
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-5 gap-y-2 text-xs md:text-sm font-semibold tracking-wide text-zinc-400">
            <a href="https://devopstrio.co.uk/disclaimer" className="hover:text-white transition-colors duration-300">Disclaimer</a>
            <span className="text-zinc-800">•</span>
            <a href="https://devopstrio.co.uk/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <span className="text-zinc-800">•</span>
            <a href="https://devopstrio.co.uk/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <span className="text-zinc-800">•</span>
            <a href="https://devopstrio.co.uk/cookie-policy" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            <span className="text-zinc-800">•</span>
            <a href="https://devopstrio.co.uk/gdpr" className="hover:text-white transition-colors duration-300">GDPR Compliance</a>
            <span className="text-zinc-800">•</span>
            <a href="https://devopstrio.co.uk/sitemap" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a
              href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579126233218"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 5.848 5.848 0 0 0-.742-.018c-1.384 0-1.884.582-1.884 1.986v1.989h3.766l-.587 3.667h-3.179v7.98H9.101z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/devopstrio_offcl/"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center">
          <span className="text-xs text-zinc-500 font-medium tracking-wide">
            Copyright © 2026 Devopstrio Limited. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;