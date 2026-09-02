import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const FONT = '"Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export default function Footer() {
  const currentYear = 2026;

  const companyLinks = [
    { label: "Careers", route: "https://devopstrio.co.uk/careers", external: true },
    { label: "Investor Relations", route: "https://devopstrio.co.uk/about/testimonials", external: true },
    { label: "Partners", route: "https://devopstrio.co.uk/about/partnerships-certifications", external: true },
    { label: "Newsroom & Events", route: "https://devopstrio.co.uk/insights/industry-events", external: true },
    { label: "Awards & Recognition", route: "https://devopstrio.co.uk/about/awards-recognition", external: true },
    { label: "Analyst Reports", route: "https://devopstrio.co.uk/about/partnerships-certifications", external: true },
  ];

  const insightsLinks = [
    { label: "AI Transformation", route: "https://devopstrio.co.uk/services/ai-data-innovation", external: true },
    { label: "Sustainability & CSR", route: "https://devopstrio.co.uk/about/sustainability-csr", external: true },
    { label: "Thought Leadership", route: "https://devopstrio.co.uk/about/leadership-team", external: true },
    { label: "Success Stories", route: "https://devopstrio.co.uk/about/testimonials", external: true },
    { label: "DevOpsTRIO Engineering Blog", route: "https://devopstrio.co.uk/insights/blogs", external: true },
  ];

  const quickLinks = [
    { label: "Browse Services", route: "/services", internal: true },
    { label: "Industry Solutions", route: "/industries", internal: true },
    { label: "AI Product Suite", route: "/products/overview", internal: true },
    { label: "Global Offerings", route: "https://devopstrio.co.uk/insights/our-offerings", external: true },
    { label: "Careers & Open Roles", route: "https://devopstrio.co.uk/contact#contact-form", external: true },
  ];

  const socialProfiles = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all",
      icon: <FaLinkedinIn size={14} />,
      hoverBg: "#0A66C2"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61579126233218",
      icon: <FaFacebookF size={14} />,
      hoverBg: "#1877F2"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/devopstrio_offcl/",
      icon: <FaInstagram size={14} />,
      hoverBg: "#E4405F"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Devopstrioltd",
      icon: <FaYoutube size={14} />,
      hoverBg: "#FF0000"
    }
  ];

  const legalLinks = [
    { label: "Privacy Notice", route: "https://devopstrio.co.uk/privacy-policy" },
    { label: "Cookie Declaration", route: "https://devopstrio.co.uk/cookie-policy" },
    { label: "Legal Disclaimer", route: "https://devopstrio.co.uk/gdpr" },
    { label: "Terms of Service", route: "https://devopstrio.co.uk/terms-of-service" },
    { label: "Sitemap", route: "https://devopstrio.co.uk/sitemap" },
  ];

  return (
    <footer className="footer-root">
      {/* Top ambient glow line */}
      <div className="footer-top-accent" />

      <div className="footer-wrapper">
        <div className="footer-grid">
          
          {/* COLUMN 1: Brand & Mission */}
          <div className="col-brand">
            <div className="brand-header">
              <img
                src="https://devopstrio.co.uk/assets/logo/logo.png"
                alt="Devopstrio"
                className="brand-logo-img"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <span className="brand-logo-text">Devopstrio</span>
            </div>

            <p className="brand-mission">
              Future-ready solutions to accelerate your business beyond limits. We architect and deploy enterprise-grade AI platforms, cognitive automation, and resilient multi-cloud infrastructure.
            </p>

            <div className="brand-social-section">
              <div className="social-heading">Follow Us</div>
              <div className="social-pill-group">
                {socialProfiles.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Company */}
          <div className="col-nav">
            <div className="col-header">
              <span className="col-header-badge">01</span>
              <h4 className="col-title">Company</h4>
            </div>
            <ul className="nav-list">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <span className="link-text">{item.label}</span>
                    <ArrowUpRight size={12} className="link-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Insights & Expertise */}
          <div className="col-nav">
            <div className="col-header">
              <span className="col-header-badge">02</span>
              <h4 className="col-title">Insights & Expertise</h4>
            </div>
            <ul className="nav-list">
              {insightsLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <span className="link-text">{item.label}</span>
                    <ArrowUpRight size={12} className="link-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Quick Links */}
          <div className="col-nav">
            <div className="col-header">
              <span className="col-header-badge">03</span>
              <h4 className="col-title">Quick Links</h4>
            </div>
            <ul className="nav-list">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  {item.internal ? (
                    <Link to={item.route} className="nav-link">
                      <span className="link-text">{item.label}</span>
                      <ChevronRight size={12} className="link-chevron" />
                    </Link>
                  ) : (
                    <a
                      href={item.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      <span className="link-text">{item.label}</span>
                      <ArrowUpRight size={12} className="link-arrow" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: Contact Info */}
          <div className="col-contact">
            <div className="col-header">
              <span className="col-header-badge">04</span>
              <h4 className="col-title">Contact Us</h4>
            </div>

            <div className="contact-cards-stack">
              {/* Headquarters */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={16} />
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-label">Headquarters</div>
                  <div className="contact-card-value">
                    128, City Road, London,<br />EC1V 2NX, United Kingdom
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href="https://api.whatsapp.com/send/?phone=447471482903&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-clickable"
              >
                <div className="contact-card-icon">
                  <Phone size={16} />
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-label">Phone & WhatsApp</div>
                  <div className="contact-card-value highlight">+44 7471 482903</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@devopstrioglobal.com"
                className="contact-card contact-clickable"
              >
                <div className="contact-card-icon">
                  <Mail size={16} />
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-label">Email Support</div>
                  <div className="contact-card-value highlight">info@devopstrioglobal.com</div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <div className="bottom-copyright">
            © {currentYear} <span className="brand-name-highlight">Devopstrio Limited</span>. All rights reserved.
          </div>

          <div className="bottom-legal-group">
            {legalLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                <a
                  href={item.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-item"
                >
                  {item.label}
                </a>
                {idx < legalLinks.length - 1 && <span className="legal-dot">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          position: relative;
          width: 100%;
          background-color: #030304;
          color: #FFFFFF;
          font-family: ${FONT};
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .footer-top-accent {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: radial-gradient(ellipse at center, rgba(225, 29, 72, 0.6) 0%, rgba(225, 29, 72, 0) 70%);
        }

        .footer-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 5% 60px 5%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.15fr 1fr 1.35fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
          .col-brand {
            grid-column: span 3;
            max-width: 600px;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .col-brand {
            grid-column: span 1;
          }
        }

        /* ---------------- Brand Column ---------------- */
        .col-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .brand-logo-img {
          height: 32px;
          width: auto;
          object-fit: contain;
        }

        .brand-logo-text {
          font-size: 1.6rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.03em;
        }

        .brand-mission {
          font-size: 0.92rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.62);
          margin: 0 0 28px 0;
          text-align: left;
        }

        .brand-social-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .social-heading {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.45);
        }

        .social-pill-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-btn:hover {
          color: #FFFFFF;
          background: rgba(225, 29, 72, 0.2);
          border-color: rgba(225, 29, 72, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(225, 29, 72, 0.3);
        }

        /* ---------------- Nav Columns (Company, Insights, Quick Links) ---------------- */
        .col-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .col-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }

        .col-header-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #E11D48;
          background: rgba(225, 29, 72, 0.12);
          border: 1px solid rgba(225, 29, 72, 0.25);
          border-radius: 4px;
          padding: 2px 6px;
        }

        .col-title {
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          width: 100%;
        }

        .nav-list li {
          width: 100%;
          text-align: left;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.92rem;
          transition: all 0.2s ease;
          padding: 2px 0;
        }

        .link-text {
          text-align: left;
        }

        .link-arrow, .link-chevron {
          color: rgba(255, 255, 255, 0.25);
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-left: 6px;
        }

        .nav-link:hover {
          color: #FFFFFF;
          transform: translateX(4px);
        }

        .nav-link:hover .link-arrow,
        .nav-link:hover .link-chevron {
          color: #E11D48;
          transform: translate(2px, -2px);
        }

        /* ---------------- Contact Info Column ---------------- */
        .col-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .contact-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.25s ease;
          text-align: left;
        }

        .contact-clickable:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(225, 29, 72, 0.4);
          transform: translateY(-2px);
        }

        .contact-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(225, 29, 72, 0.12);
          border: 1px solid rgba(225, 29, 72, 0.25);
          color: #E11D48;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-card-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .contact-card-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.42);
          margin-bottom: 3px;
        }

        .contact-card-value {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.45;
          text-align: left;
        }

        .contact-card-value.highlight {
          color: #FFFFFF;
          font-weight: 600;
        }

        .contact-clickable:hover .contact-card-value.highlight {
          color: #E11D48;
        }

        /* ---------------- Bottom Legal Bar ---------------- */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: #010102;
          padding: 24px 0;
        }

        .footer-bottom-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }

        .bottom-copyright {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: left;
        }

        .brand-name-highlight {
          color: #FFFFFF;
          font-weight: 600;
        }

        .bottom-legal-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .legal-item {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-item:hover {
          color: #E11D48;
        }

        .legal-dot {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
        }
      `}</style>
    </footer>
  );
}