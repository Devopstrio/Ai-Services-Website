import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import CategoryPopup from "../common/CategoryPopup";
import trademarkImg from "../../assets/trademark-icon.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    if (email && email.includes("@")) {
      setIsPopupOpen(true);
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
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 tracking-tight leading-tight">
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
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase bg-black hover:bg-zinc-800 text-white transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md"
                aria-label="Subscribe"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* Category Popup Modal */}
        {isPopupOpen && (
          <CategoryPopup
            email={email}
            closePopup={() => {
              setIsPopupOpen(false);
              setEmail("");
            }}
          />
        )}

        {/* 6-Column Mega Menu */}
        <div id="footer-sitemap" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20 text-left">

          {/* Col 1: Brand & Logo with Registered Trademark Symbol */}
          <div className="flex flex-col items-center text-center gap-0">
            <Link to="/" className="flex flex-col items-center gap-3 group inline-flex mb-4">
              <div className="relative inline-flex items-center justify-center">
                <img
                  src="/assets/logo/logo.webp"
                  alt="Devopstrio logo"
                  className="w-16 h-16 object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "/images/downloaded/a228f16227_logo.webp"; }}
                />
                <img
                  src={trademarkImg}
                  alt="Registered Trademark"
                  className="absolute top-0 -right-4 w-4 h-4 object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-semibold text-white tracking-tight leading-none">
                  Devopstrio
                </span>
                <span className="text-xs font-mono tracking-widest text-rose-500 uppercase mt-2">
                  AI Architecture
                </span>
              </div>
            </Link>
          </div>

          {/* Col 2: AI Capabilities */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Capabilities
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><Link to="/capabilities/generative-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Generative AI</Link></li>
              <li><Link to="/capabilities/ai-agents" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Autonomous Agents</Link></li>
              <li><Link to="/capabilities/machine-learning" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Machine Learning</Link></li>
              <li><Link to="/capabilities/computer-vision" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Computer Vision</Link></li>
              <li><Link to="/capabilities/nlp" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Natural Language</Link></li>
              <li><Link to="/capabilities/data-intelligence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Data Lakehouse</Link></li>
              <li><Link to="/capabilities/ai-infra" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI Infrastructure</Link></li>
              <li><Link to="/capabilities/responsible-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Responsible AI</Link></li>
              <li><Link to="/capabilities/overview" className="text-rose-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">All Capabilities →</Link></li>
            </ul>
          </div>

          {/* Col 3: Enterprise Solutions */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><Link to="/solutions/hr-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">HR AI</Link></li>
              <li><Link to="/solutions/devops-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">DevOps AI</Link></li>
              <li><Link to="/solutions/cybersecurity-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Cybersecurity AI</Link></li>
              <li><Link to="/solutions/document-intelligence" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Document Intelligence</Link></li>
              <li><Link to="/solutions/banking-financial-services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Banking & Finance AI</Link></li>
              <li><Link to="/solutions/healthcare-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Healthcare AI</Link></li>
              <li><Link to="/solutions/contact-center-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact Center AI</Link></li>
              <li><Link to="/solutions/workflow-automation" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Workflow Automation</Link></li>
              <li><Link to="/solutions/overview" className="text-rose-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">All Solutions →</Link></li>
            </ul>
          </div>

          {/* Col 4: AI Products */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Products
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><Link to="/products/document-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Document AI</Link></li>
              <li><Link to="/products/devops-copilot" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">DevOps Copilot</Link></li>
              <li><Link to="/products/safesign-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">SafeSign AI</Link></li>
              <li><Link to="/products/aihire" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI Hire</Link></li>
              <li><Link to="/products/humanex-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">HumanEx AI</Link></li>
              <li><Link to="/products/ai-studio" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">AI Studio</Link></li>
              <li><Link to="/products/assistant-ai" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Assistant AI</Link></li>
              <li><Link to="/products/overview" className="text-rose-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">All Products →</Link></li>
            </ul>
          </div>

          {/* Col 5: Autonomous AI Agents */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              AI Agents
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><Link to="/agents/cloud-operations-agent" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Cloud Operations</Link></li>
              <li><Link to="/agents/devops-agent" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">DevOps Agent</Link></li>
              <li><Link to="/agents/security-operations-agent" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Security Agent</Link></li>
              <li><Link to="/agents/executive-assistant" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Executive Assistant</Link></li>
              <li><Link to="/agents/finance-agent" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Finance Agent</Link></li>
              <li><Link to="/agents/procurement-agent" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Procurement Agent</Link></li>
              <li><Link to="/agents/hr-agent" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">HR Agent</Link></li>
              <li><Link to="/agents/overview" className="text-rose-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">All Agents →</Link></li>
            </ul>
          </div>

          {/* Col 6: Platform & Ecosystem */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-5 tracking-wider uppercase font-sans">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-zinc-300 font-normal tracking-wide">
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Managed AI Services</Link></li>
              <li><Link to="/industries/overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Industry Verticals</Link></li>
              <li><Link to="/innovation/overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Innovation Lab</Link></li>
              <li><Link to="/integrations/overview" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Integrations</Link></li>
              <li><a href="https://devopstrio.co.uk/contact#contact-form" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Architecture Review</a></li>
              <li><a href="https://devopstrio.co.uk/contact#contact-form" className="text-rose-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">Contact Engineers →</a></li>
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
            <a href="#footer-sitemap" className="hover:text-white transition-colors duration-300">Sitemap</a>
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

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-0 right-0 z-50 p-3.5 rounded-tl-[1.5rem] bg-zinc-900/40 backdrop-blur-xl border-t border-l border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-500 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] cursor-pointer ${
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
