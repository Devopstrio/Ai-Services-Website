import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, X } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsPopupOpen(true);
    }
  };

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#030303",
        color: "#A1A1AA",
        paddingTop: "90px",
        paddingBottom: "32px",
        position: "relative",
        fontFamily: '"DM Sans", "Geist", sans-serif',
        marginTop: "120px",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Background Ambient Radial Glows */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle at center, rgba(225,29,72,0.03), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle at center, rgba(225,29,72,0.02), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Floating Newsletter Card (Half outside top border / Half inside footer) */}
        <div
          style={{
            maxWidth: "1050px",
            margin: "-140px auto 70px auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            padding: "36px 44px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            position: "relative",
            zIndex: 20,
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: "1 1 340px", minWidth: "280px" }}>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "#000000",
                margin: "0 0 8px 0",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Subscribe Newsletter
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#4B5563",
                margin: 0,
                fontWeight: 500,
                lineHeight: 1.5,
                maxWidth: "460px",
              }}
            >
              Get the latest insights on enterprise cloud transformations and technical engineering directly to your inbox.
            </p>
          </div>

          <div style={{ flex: "1 1 380px", maxWidth: "440px", width: "100%" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F4F4F5",
                border: "1px solid #E4E4E7",
                borderRadius: "14px",
                padding: "6px",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  padding: "10px 16px",
                  fontSize: "14px",
                  color: "#000000",
                  fontWeight: 500,
                  minWidth: "160px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 22px",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background-color 0.2s ease, transform 0.1s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#27272A")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
              >
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Confirmation Modal */}
        {isPopupOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(6px)",
              padding: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                border: "1px solid #27272A",
                color: "#FFFFFF",
                borderRadius: "18px",
                padding: "32px",
                maxWidth: "420px",
                width: "100%",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
                position: "relative",
              }}
            >
              <button
                onClick={() => setIsPopupOpen(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "transparent",
                  border: "none",
                  color: "#A1A1AA",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", color: "#34D399" }}>
                <CheckCircle size={28} />
                <h4 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>Subscription Confirmed!</h4>
              </div>
              <p style={{ color: "#A1A1AA", fontSize: "14px", lineHeight: 1.6, margin: "0 0 20px 0" }}>
                Thank you for subscribing with <strong style={{ color: "#FFFFFF" }}>{email}</strong>. You will receive enterprise AI updates and technical engineering insights.
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#E11D48",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6-Column Mega Menu Horizontal Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "36px 24px",
            marginBottom: "64px",
          }}
          className="devopstrio-footer-grid"
        >
          {/* Column 1: Brand Intro Logo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <a
              href="https://devopstrio.co.uk/"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
                textDecoration: "none",
              }}
            >
              <img
                src="https://devopstrio.co.uk/assets/logo/logo.png"
                alt="Devopstrio Logo"
                style={{
                  width: "56px",
                  height: "56px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 16px rgba(255,255,255,0.18))",
                }}
                loading="lazy"
              />
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Devopstrio
              </span>
            </a>
          </div>

          {/* Column 2: CORE EXPERTISE */}
          <div>
            <h4
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Core Expertise
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><a href="https://devopstrio.co.uk/services/ai-data-innovation" style={linkStyle}>AI & Data Innovation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cloud-services" style={linkStyle}>Cloud Services</a></li>
              <li><a href="https://devopstrio.co.uk/services/devops-automation" style={linkStyle}>DevOps & Automation</a></li>
              <li><a href="https://devopstrio.co.uk/services/cybersecurity" style={linkStyle}>Cybersecurity</a></li>
              <li><a href="https://devopstrio.co.uk/services/software-development" style={linkStyle}>Software Development</a></li>
              <li><a href="https://devopstrio.co.uk/services/digital-transformation" style={linkStyle}>Digital Transformation</a></li>
              <li><a href="https://devopstrio.co.uk/services/data-engineering" style={linkStyle}>Data Engineering</a></li>
              <li><a href="https://devopstrio.co.uk/services/managed-services" style={linkStyle}>Managed Services</a></li>
            </ul>
          </div>

          {/* Column 3: INDUSTRIES */}
          <div>
            <h4
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Industries
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link to="/industries/banking-financial-services" style={linkStyle}>Banking & Finance</Link></li>
              <li><Link to="/industries/healthcare-life-sciences" style={linkStyle}>Healthcare & Life Sciences</Link></li>
              <li><Link to="/industries/retail-ecommerce" style={linkStyle}>Retail & E-Commerce</Link></li>
              <li><Link to="/industries/manufacturing" style={linkStyle}>Manufacturing</Link></li>
              <li><Link to="/industries/telecommunications" style={linkStyle}>Telecommunications</Link></li>
              <li><Link to="/industries/media-entertainment" style={linkStyle}>Media & Entertainment</Link></li>
              <li><Link to="/industries/education" style={linkStyle}>Education</Link></li>
              <li><Link to="/industries/government-public-sector" style={linkStyle}>Government & Public Sector</Link></li>
            </ul>
          </div>

          {/* Column 4: ECOSYSTEM */}
          <div>
            <h4
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Ecosystem
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><a href="https://devopstrio.co.uk/ecosystem/partnerships" style={linkStyle}>Strategic Partnerships</a></li>
              <li><Link to="/innovation/overview" style={linkStyle}>R&D Innovation Labs</Link></li>
              <li><Link to="/products/overview" style={linkStyle}>Platforms & Solutions</Link></li>
              <li><Link to="/integrations/overview" style={linkStyle}>Technology Stack</Link></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/global-delivery" style={linkStyle}>Global Delivery</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/engineering-excellence" style={linkStyle}>Engineering Excellence</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/accelerators-frameworks" style={linkStyle}>Accelerators & Frameworks</a></li>
              <li><a href="https://devopstrio.co.uk/ecosystem/landing-zone" style={linkStyle}>Landing Zone</a></li>
            </ul>
          </div>

          {/* Column 5: INSIGHTS & EVENTS */}
          <div>
            <h4
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Insights & Events
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><a href="https://devopstrio.co.uk/insights/blogs" style={linkStyle}>Blogs</a></li>
              <li><a href="https://devopstrio.co.uk/insights/case-studies" style={linkStyle}>Case Studies</a></li>
              <li><a href="https://devopstrio.co.uk/insights/white-paper" style={linkStyle}>White Paper</a></li>
              <li><a href="https://devopstrio.co.uk/insights/awards-milestones" style={linkStyle}>Awards & Milestones</a></li>
              <li><a href="https://devopstrio.co.uk/insights/industry-events" style={linkStyle}>Industry Events</a></li>
              <li><a href="https://devopstrio.co.uk/insights/celebrations" style={linkStyle}>Celebrations</a></li>
              <li><a href="https://devopstrio.co.uk/insights/team-culture" style={linkStyle}>Team Culture</a></li>
              <li><a href="https://devopstrio.co.uk/insights/our-offerings" style={linkStyle}>Our Offerings</a></li>
            </ul>
          </div>

          {/* Column 6: COMPANY */}
          <div>
            <h4
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><a href="https://devopstrio.co.uk/about/company-overview" style={linkStyle}>Company Overview</a></li>
              <li><a href="https://devopstrio.co.uk/about/our-culture-people" style={linkStyle}>Our Culture & People</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-internship" style={linkStyle}>Global Internship</a></li>
              <li><a href="https://devopstrio.co.uk/about/global-presence" style={linkStyle}>Global Presence</a></li>
              <li><a href="https://devopstrio.co.uk/about/partnerships-certifications" style={linkStyle}>Partnerships & Certifications</a></li>
              <li><a href="https://devopstrio.co.uk/about/awards-recognition" style={linkStyle}>Awards & Recognition</a></li>
              <li><a href="https://devopstrio.co.uk/about/sustainability-csr" style={linkStyle}>Sustainability & CSR</a></li>
              <li><a href="https://devopstrio.co.uk/contact#contact-form" style={linkStyle}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Legal Links & Socials (Exactly as in screenshot) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          {/* Legal Links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "14px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#9CA3AF",
            }}
          >
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

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
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

const linkStyle = {
  color: "#D4D4D8",
  fontSize: "14px",
  fontWeight: 400,
  textDecoration: "none",
  lineHeight: 1.4,
  display: "inline-block",
  transition: "color 0.2s ease, transform 0.2s ease",
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