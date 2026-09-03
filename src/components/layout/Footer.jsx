import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

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
    <footer className="w-full bg-[#030303] text-zinc-400 pt-20 sm:pt-24 pb-6 relative font-sans mt-28 sm:mt-36 text-left">
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
        <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl p-6 sm:p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 -mt-20 sm:-mt-24 md:-mt-28 mb-16 sm:mb-20 shadow-[0_25px_50px_rgba(0,0,0,0.6)] relative z-20 border border-zinc-200/50">
          <div className="flex-1 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 tracking-tight leading-tight">Subscribe Newsletter</h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md leading-relaxed">
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

        {/* 6-Column Mega Menu (Strict Left-Aligned Content matching DevOpsTRIO Site) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr 1fr 1fr 1fr 1fr",
            gap: "24px 32px",
            marginBottom: "72px",
            textAlign: "left",
          }}
          className="footer-columns-container"
        >

          {/* Col 1: Brand Intro */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", textAlign: "center", paddingTop: "8px" }}>
            <a href="https://devopstrio.co.uk/" className="flex flex-col items-center gap-3 group inline-flex mb-4">
              <img
                src="https://devopstrio.co.uk/assets/logo/logo.png"
                alt="Devopstrio logo"
                style={{ width: "64px", height: "64px", objectFit: "contain", filter: "drop-shadow(0 0 15px rgba(255,255,255,0.15))" }}
                loading="lazy"
              />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <span style={{ fontSize: "28px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  Devopstrio
                </span>
              </div>
            </a>
          </div>

          {/* Col 2: Services / Practice Areas */}
          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "18px", fontFamily: '"DM Sans", sans-serif' }}>
              Core Expertise
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <li><a href="https://devopstrio.co.uk/services/ai-data-innovation" style={navLinkStyle}>AI & Data Innovation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cloud-services" style={navLinkStyle}>Cloud Services</a></li>
              <li><a href="https://devopstrio.co.uk/services/devops-automation" style={navLinkStyle}>DevOps & Automation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cybersecurity" style={navLinkStyle}>Cybersecurity</a></li>
              <li><a href="https://devopstrio.co.uk/services/software-development" style={navLinkStyle}>Software Development</a></li>
              <li><a href="https://devopstrio.co.uk/services/digital-transformation" style={navLinkStyle}>Digital Transformation</a></li>
              <li><a href="https://devopstrio.co.uk/services/data-engineering" style={navLinkStyle}>Data Engineering</a></li>
              <li><a href="https://devopstrio.co.uk/services/managed-services" style={navLinkStyle}>Managed Services</a></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "18px", fontFamily: '"DM Sans", sans-serif' }}>
              Industries
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <li><a href="https://devopstrio.co.uk/industries/banking-finance" style={navLinkStyle}>Banking & Finance</a></li>
              <li><a href="https://devopstrio.co.uk/industries/healthcare-life-sciences" style={navLinkStyle}>Healthcare & Life Sciences</a></li>
              <li><a href="https://devopstrio.co.uk/industries/retail-ecommerce" style={navLinkStyle}>Retail & E-Commerce</a></li>
              <li><a href="https://devopstrio.co.uk/industries/manufacturing" style={navLinkStyle}>Manufacturing</a></li>
              <li><a href="https://devopstrio.co.uk/industries/telecommunications" style={navLinkStyle}>Telecommunications</a></li>
              <li><a href="https://devopstrio.co.uk/industries/media-entertainment" style={navLinkStyle}>Media & Entertainment</a></li>
              <li><a href="https://devopstrio.co.uk/industries/education" style={navLinkStyle}>Education</a></li>
              <li><a href="https://devopstrio.co.uk/industries/government-public-sector" style={navLinkStyle}>Government & Public Sector</a></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem */}
          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "18px", fontFamily: '"DM Sans", sans-serif' }}>
              Ecosystem
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <li><a href="https://devopstrio.co.uk/ecosystem/partnerships" style={navLinkStyle}>Strategic Partnerships</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/innovation-labs" style={navLinkStyle}>R&D Innovation Labs</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/platforms-solutions" style={navLinkStyle}>Platforms & Solutions</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/technology-stack" style={navLinkStyle}>Technology Stack</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/global-delivery" style={navLinkStyle}>Global Delivery</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/engineering-excellence" style={navLinkStyle}>Engineering Excellence</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/accelerators-frameworks" style={navLinkStyle}>Accelerators & Frameworks</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/landing-zone" style={navLinkStyle}>Landing Zone</a></li>
            </ul>
          </div>

          {/* Col 5: Insights & Events */}
          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "18px", fontFamily: '"DM Sans", sans-serif' }}>
              Insights & Events
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <li><a href="https://devopstrio.co.uk/insights/blogs" style={navLinkStyle}>Blogs</a></li>
              <li><a href="https://devopstrio.co.uk/insights/case-studies" style={navLinkStyle}>Case Studies</a></li>
              <li><a href="https://devopstrio.co.uk/insights/white-paper" style={navLinkStyle}>White Paper</a></li>
              <li><a href="https://devopstrio.co.uk/insights/awards-milestones" style={navLinkStyle}>Awards & Milestones</a></li>
              <li><a href="https://devopstrio.co.uk/insights/industry-events" style={navLinkStyle}>Industry Events</a></li>
              <li><a href="https://devopstrio.co.uk/insights/celebrations" style={navLinkStyle}>Celebrations</a></li>
              <li><a href="https://devopstrio.co.uk/insights/team-culture" style={navLinkStyle}>Team Culture</a></li>
              <li><a href="https://devopstrio.co.uk/insights/our-offerings" style={navLinkStyle}>Our Offerings</a></li>
            </ul>
          </div>

          {/* Col 6: Company */}
          <div style={{ textAlign: "left" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "18px", fontFamily: '"DM Sans", sans-serif' }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
              <li><a href="https://devopstrio.co.uk/about/company-overview" style={navLinkStyle}>Company Overview</a></li>
              <li><a href="https://devopstrio.co.uk/about/our-culture-people" style={navLinkStyle}>Our Culture & People</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-internship" style={navLinkStyle}>Global Internship</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-presence" style={navLinkStyle}>Global Presence</a></li>
              <li><a href="https://devopstrio.co.uk/about/partnerships-certifications" style={navLinkStyle}>Partnerships & Certifications</a></li>
              <li><a href="https://devopstrio.co.uk/about/awards-recognition" style={navLinkStyle}>Awards & Recognition</a></li>
              <li><a href="https://devopstrio.co.uk/about/sustainability-csr" style={navLinkStyle}>Sustainability & CSR</a></li>
              <li><a href="https://devopstrio.co.uk/contact#contact-form" style={navLinkStyle}>Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: Cookie Icon, Legal Links & Socials (Exact Image 2 Match) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "24px",
            gap: "20px",
          }}
        >
          {/* Legal Links with Cookie Icon */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px", fontSize: "13px", fontWeight: 500, color: "#9CA3AF" }}>
            {/* Red Cookie Consent Icon Badge */}
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#E11D48",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "4px",
                boxShadow: "0 0 10px rgba(225,29,72,0.4)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="#E11D48" />
                <circle cx="8" cy="9" r="1.5" fill="white" />
                <circle cx="15" cy="10" r="1.5" fill="white" />
                <circle cx="11" cy="15" r="1.5" fill="white" />
                <circle cx="16" cy="16" r="1" fill="white" />
              </svg>
            </div>

            <a href="https://devopstrio.co.uk/disclaimer" style={legalLinkStyle}>Disclaimer</a>
            <span style={{ color: "#3F3F46" }}>•</span>
            <a href="https://devopstrio.co.uk/privacy-policy" style={legalLinkStyle}>Privacy Policy</a>
            <span style={{ color: "#3F3F46" }}>•</span>
            <a href="https://devopstrio.co.uk/terms-of-service" style={legalLinkStyle}>Terms of Service</a>
            <span style={{ color: "#3F3F46" }}>•</span>
            <a href="https://devopstrio.co.uk/cookie-policy" style={legalLinkStyle}>Cookie Policy</a>
            <span style={{ color: "#3F3F46" }}>•</span>
            <a href="https://devopstrio.co.uk/gdpr" style={legalLinkStyle}>GDPR Compliance</a>
            <span style={{ color: "#3F3F46" }}>•</span>
            <a href="https://devopstrio.co.uk/sitemap" style={legalLinkStyle}>Sitemap</a>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              title="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579126233218"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              title="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.instagram.com/devopstrio_offcl/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              title="Instagram"
            >
              <FaInstagram size={15} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <span style={{ fontSize: "12px", color: "#71717A", fontWeight: 500 }}>
            Copyright © 2026 Devopstrio Limited. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}

const navLinkStyle = {
  color: "#D4D4D8",
  fontSize: "14.5px",
  fontWeight: 400,
  textDecoration: "none",
  lineHeight: 1.4,
  display: "inline-block",
  transition: "color 0.2s ease, transform 0.2s ease",
  textAlign: "left",
};

const legalLinkStyle = {
  color: "#A1A1AA",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const socialIconStyle = {
  color: "#A1A1AA",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "color 0.2s ease, transform 0.2s ease",
};

export default Footer;