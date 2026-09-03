import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, CheckCircle, X, MapPin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("AI & Cloud Engineering");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsPopupOpen(true);
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-zinc-400 pt-20 sm:pt-24 pb-4 relative font-sans mt-24 sm:mt-32">
      {/* Premium Dual-Line White Top Border */}
      <div className="absolute top-0 inset-x-0 flex flex-col items-center z-10 pointer-events-none">
        <div className="relative w-full flex justify-center opacity-90">
          <div className="w-full h-[2px] bg-gradient-to-r from-zinc-950 via-white/70 to-zinc-950" />
          <div className="absolute top-0 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
        </div>
        <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-[3px]" />
      </div>

      {/* Background Glows for visual depth */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] pointer-events-none z-0 overflow-hidden" />
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Floating Newsletter Card (Half outside top border / Half inside footer) */}
        <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl p-6 sm:p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 -mt-20 sm:-mt-24 md:-mt-28 mb-12 sm:mb-16 shadow-[0_25px_50px_rgba(0,0,0,0.6)] relative z-20 border border-zinc-200/50">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 tracking-tight leading-tight">Subscribe Newsletter</h3>
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
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase bg-black hover:bg-zinc-800 text-white transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md"
                aria-label="Subscribe"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Confirmation Modal */}
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-[#111111] border border-zinc-800 text-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <CheckCircle size={28} />
                <h4 className="text-lg font-bold text-white">Subscription Confirmed!</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Thank you for subscribing with <span className="text-white font-semibold">{email}</span>. You will receive enterprise AI updates and insights.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Location Modal */}
        {isLocationOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-[#111111] border border-zinc-800 text-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setIsLocationOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-4 text-rose-500">
                <MapPin size={28} />
                <h4 className="text-lg font-bold text-white">DevOpsTRIO Global Headquarters</h4>
              </div>
              <p className="text-zinc-300 text-sm mb-2 leading-relaxed">
                <strong>London (Head Office):</strong> 128 City Road, London, EC1V 2NX, United Kingdom
              </p>
              <p className="text-zinc-400 text-xs mb-6">
                Phone: +44 1784 640216 | Email: contact@devopstrio.co.uk
              </p>
              <div className="flex justify-end gap-3">
                <a
                  href="https://devopstrio.co.uk/about/global-presence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
                >
                  View All Locations
                </a>
                <button
                  onClick={() => setIsLocationOpen(false)}
                  className="px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6-Column Mega Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20">

          {/* Col 1: Brand Intro */}
          <div className="flex flex-col items-center text-center gap-0">
            <a href="https://devopstrio.co.uk/" className="flex flex-col items-center gap-3 group inline-flex mb-4">
              <img
                src="https://devopstrio.co.uk/assets/logo/logo.png"
                alt="Devopstrio logo"
                className="w-16 h-16 object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                loading="lazy"
              />
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-semibold text-white tracking-tight leading-none">
                  Devopstrio
                </span>
              </div>
            </a>
          </div>

          {/* Col 2: Services / Practice Areas */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">Core Expertise</h4>
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
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">Industries</h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><Link to="/industries/banking-financial-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Banking & Finance</Link></li>
              <li><Link to="/industries/healthcare-life-sciences" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Healthcare & Life Sciences</Link></li>
              <li><Link to="/industries/retail-ecommerce" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Retail & E-Commerce</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Manufacturing</Link></li>
              <li><Link to="/industries/telecommunications" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Telecommunications</Link></li>
              <li><Link to="/industries/media-entertainment" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Media & Entertainment</Link></li>
              <li><Link to="/industries/education" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Education</Link></li>
              <li><Link to="/industries/government-public-sector" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Government & Public Sector</Link></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">Ecosystem</h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><a href="https://devopstrio.co.uk/ecosystem/partnerships" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Strategic Partnerships</a></li>
              <li><Link to="/innovation/overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">R&D Innovation Labs</Link></li>
              <li><Link to="/products/overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Platforms & Solutions</Link></li>
              <li><Link to="/integrations/overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Technology Stack & Integrations</Link></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/global-delivery" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Global Delivery</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/engineering-excellence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Engineering Excellence</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/accelerators-frameworks" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Accelerators & Frameworks</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/landing-zone" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Landing Zone</a></li>
            </ul>
          </div>

          {/* Col 5: Insights & Events */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">Insights & Events</h4>
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
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">Company</h4>
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

        {/* BOTTOM ROW: Socials & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 w-full">

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs md:text-sm font-semibold tracking-wide text-zinc-400">
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright - Moved to bottom */}
        <div className="text-center">
          <span className="text-xs text-zinc-500 font-medium tracking-wide">
            Copyright © 2026 Devopstrio Limited. All rights reserved.
          </span>
        </div>

        {/* Collapsible HTML Directory Index for Search Bots & Users */}
        <details className="hidden mt-8 group border border-zinc-900 rounded-xl bg-zinc-950/20 text-left">
          <summary className="list-none flex items-center justify-between px-6 py-4 cursor-pointer text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-rose-500 transition-colors select-none">
            <span>Explore Site Directory (HTML Index)</span>
            <span className="transition-transform duration-300 group-open:rotate-180 text-sm">&darr;</span>
          </summary>
          <div className="px-6 pb-6 pt-4 border-t border-zinc-900/60 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-[11px] text-zinc-400 font-medium">
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">AI & Data Innovation</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/generative-ai-solutions" className="hover:text-white transition-colors">Generative AI Solutions</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/ai-agents-automation" className="hover:text-white transition-colors">AI Agents & Automation</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/machine-learning-engineering" className="hover:text-white transition-colors">Machine Learning Engineering</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/data-engineering" className="hover:text-white transition-colors">Data Engineering</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/business-intelligence-analytics" className="hover:text-white transition-colors">BI & Analytics</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/predictive-analytics" className="hover:text-white transition-colors">Predictive Analytics</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/data-governance" className="hover:text-white transition-colors">Data Governance</a></li>
                <li><a href="https://devopstrio.co.uk/services/ai-data-innovation/mlops-ai-operations" className="hover:text-white transition-colors">MLOps & AI Operations</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">Cloud Services</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="https://devopstrio.co.uk/services/cloud-services/cloud-strategy-consulting" className="hover:text-white transition-colors">Cloud Strategy & Consulting</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/cloud-migration" className="hover:text-white transition-colors">Cloud Migration</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/cloud-architecture" className="hover:text-white transition-colors">Cloud Architecture</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/azure-services" className="hover:text-white transition-colors">Azure Services</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/aws-services" className="hover:text-white transition-colors">AWS Services</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/google-cloud-services" className="hover:text-white transition-colors">Google Cloud Services</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/cloud-security" className="hover:text-white transition-colors">Cloud Security</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/cloud-managed-services" className="hover:text-white transition-colors">Cloud Managed Services</a></li>
                <li><a href="https://devopstrio.co.uk/services/cloud-services/finops-cost-optimization" className="hover:text-white transition-colors">FinOps & Cost Optimization</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">DevOps & Automation</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="https://devopstrio.co.uk/services/devops-automation/cicd-implementation" className="hover:text-white transition-colors">CI/CD Implementation</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/platform-engineering" className="hover:text-white transition-colors">Platform Engineering</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/infrastructure-as-code" className="hover:text-white transition-colors">Infrastructure as Code</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/kubernetes-services" className="hover:text-white transition-colors">Kubernetes Services</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/devsecops" className="hover:text-white transition-colors">DevSecOps</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/site-reliability-engineering" className="hover:text-white transition-colors">SRE</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/release-automation" className="hover:text-white transition-colors">Release Automation</a></li>
                <li><a href="https://devopstrio.co.uk/services/devops-automation/monitoring-observability" className="hover:text-white transition-colors">Monitoring & Observability</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">Cybersecurity</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/security-assessment" className="hover:text-white transition-colors">Security Assessment</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/vulnerability-management" className="hover:text-white transition-colors">Vulnerability Management</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/penetration-testing" className="hover:text-white transition-colors">Penetration Testing</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/security-operations-center" className="hover:text-white transition-colors">Security Operations Center</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/identity-access-management" className="hover:text-white transition-colors">Identity & Access</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/cloud-security" className="hover:text-white transition-colors">Cloud Security</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/compliance-governance" className="hover:text-white transition-colors">Compliance & Governance</a></li>
                <li><a href="https://devopstrio.co.uk/services/cybersecurity/zero-trust-architecture" className="hover:text-white transition-colors">Zero Trust Architecture</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2 uppercase text-[9px] tracking-wider text-rose-500/80">Software Development</h5>
              <ul className="flex flex-col gap-1.5">
                <li><a href="https://devopstrio.co.uk/services/software-development/enterprise-app-development" className="hover:text-white transition-colors">Enterprise Application Dev</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/web-app-development" className="hover:text-white transition-colors">Web Application Dev</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/mobile-app-development" className="hover:text-white transition-colors">Mobile Application Dev</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/saas-product-development" className="hover:text-white transition-colors">SaaS Product Dev</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/api-development-integration" className="hover:text-white transition-colors">API Dev & Integration</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/microservices-architecture" className="hover:text-white transition-colors">Microservices Architecture</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/product-engineering" className="hover:text-white transition-colors">Product Engineering</a></li>
                <li><a href="https://devopstrio.co.uk/services/software-development/application-modernization" className="hover:text-white transition-colors">Application Modernization</a></li>
              </ul>
            </div>
          </div>
        </details>

      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-0 right-0 z-50 p-3.5 rounded-tl-[1.5rem] bg-zinc-900/30 backdrop-blur-xl border-t border-l border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-500 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] ${
          showScrollTop ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-full"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} strokeWidth={2} className="hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}

export default Footer;