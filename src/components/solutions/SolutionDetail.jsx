import React, { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ENTERPRISE_SOLUTIONS_DATA } from "../../data/solutions";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

export default function SolutionDetail() {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const data = ENTERPRISE_SOLUTIONS_DATA[solutionId];
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff" }}>
        <h2 style={{ fontFamily: FONT }}>Solution Not Found</h2>
      </div>
    );
  }

  const overviewHeadingWords = data.overview.heading.split(' ');
  const lastWord = overviewHeadingWords.pop();
  const restHeading = overviewHeadingWords.join(' ');

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: FONT, overflowX: "hidden" }}>
      
      {/* 1. HERO - Cinematic Fullscreen */}
      <section ref={heroRef} style={{ position: "relative", width: "100%", minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", paddingTop: "120px", paddingBottom: "80px" }}>
        <motion.div style={{ position: "absolute", inset: 0, y: yBg, zIndex: 0 }}>
          <img src={data.hero.bgImage} alt="Hero Background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.92) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)" }} />
        </motion.div>

        <motion.div style={{ position: "relative", zIndex: 1, textAlign: "left", maxWidth: "1200px", width: "100%", padding: "0 5%", opacity: opacityText }}>
          <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "rgba(225,29,72,0.15)", border: "1px solid rgba(225,29,72,0.3)", borderRadius: "999px", color: "#E11D48", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>
            {data.breadcrumbs.join(" / ")}
          </div>
          <h1 style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", lineHeight: 1.15, fontWeight: 700, margin: "0 0 24px 0", letterSpacing: "-0.03em" }}>
            <span style={{ color: "#fff" }}>AI for </span>
            <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.75)" }}>{data.hero.titleLight} {data.hero.titleBold}</span>
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 0 32px 0", maxWidth: "800px" }}>
            {data.hero.description}
          </p>
          <div>
            <Link to="/solutions/overview" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#fff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "13px 26px", borderRadius: "8px", transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(225,29,72,0.3)" }} className="hero-view-btn">
              <ArrowLeft size={16} /> View All Solutions
            </Link>
            <style>{`
              .hero-view-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 6px 25px rgba(225,29,72,0.5) !important; }
            `}</style>
          </div>
        </motion.div>
      </section>

      {/* 2. METRICS BANNER - Glassmorphism Strip */}
      <section style={{ position: "relative", zIndex: 10, marginTop: "-40px", padding: "0 5%" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", background: "rgba(20,20,20,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "30px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", gap: "20px" }}>
          {data.metricsBanner.map((metric, i) => (
            <div key={i} className="metric-card" style={{ textAlign: "center", flex: "1 1 200px", padding: "20px", borderRadius: "16px", border: "1px solid transparent", transition: "all 0.3s ease" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: "12px", textShadow: "0 0 20px rgba(255,255,255,0.2)" }}>{metric.value}</div>
              <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>{metric.label}</div>
            </div>
          ))}
        </div>
        <style>{`
          .metric-card:hover {
            background: rgba(255,255,255,0.03);
            border-color: rgba(225,29,72,0.3) !important;
            transform: translateY(-5px);
          }
        `}</style>
      </section>

      {/* 3. OVERVIEW - Large Split Layout */}
      <section style={{ padding: "100px 5% 120px 5%" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: "30px", letterSpacing: "-0.02em" }}>
              {restHeading} <span style={{ fontWeight: 700, color: "#E11D48" }}>{lastWord}</span>
            </h2>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "40px", whiteSpace: "pre-line" }}>
              {data.overview.paragraph}
            </p>
            <a href="https://devopstrio.co.uk/contact#contact-form" target="_blank" rel="noreferrer" style={{ textDecoration: "none", backgroundColor: "#fff", color: "#000", border: "none", padding: "16px 36px", borderRadius: "999px", fontSize: "1rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              Book a Demo <ArrowRight size={18} />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "4/3" }}>
            <img src={data.overview.image} alt="Overview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        </div>
      </section>

      {/* 4. BENEFITS BENTO BOX */}
      <section style={{ padding: "80px 5%", backgroundColor: "#080808" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 300, textAlign: "center", marginBottom: "60px", color: "#fff" }}>
            Key <span style={{ fontWeight: 700, color: "#E11D48" }}>Outcomes</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", gridAutoRows: "minmax(350px, auto)" }}>
            {data.benefitsBento.map((bento, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ gridColumn: `span ${bento.colSpan}`, position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#111" }} className="bento-card">
                <img src={bento.image} alt={bento.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} className="bento-img" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 100%)" }} />
                <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px", zIndex: 2 }}>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>{bento.title}</h3>
                  <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0 }}>{bento.desc}</p>
                </div>
                <style>{`
                   .bento-card { transition: border-color 0.4s ease; }
                   .bento-card:hover { border-color: rgba(225,29,72,0.6) !important; }
                   .bento-img { transition: transform 0.6s ease, opacity 0.6s ease; }
                   .bento-card:hover .bento-img { transform: scale(1.05); opacity: 0.6 !important; }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURES ZIG-ZAG */}
      <section style={{ padding: "120px 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "120px" }}>
          {data.featuresZigZag.map((feat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr", gap: "80px", alignItems: "center" }}>
                <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} style={{ order: isEven ? 1 : 2 }}>
                  <div style={{ color: "#E11D48", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "16px" }}>{feat.tag}</div>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "24px", letterSpacing: "-0.02em" }}>{feat.title}</h3>
                  <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{feat.text}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: isEven ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} style={{ order: isEven ? 2 : 1, position: "relative", borderRadius: "16px", overflow: "hidden", aspectRatio: "1/1", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <img src={feat.image} alt={feat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section style={{ padding: "100px 5%", backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 300, textAlign: "center", marginBottom: "60px", color: "#fff" }}>
            Proven <span style={{ fontWeight: 700, color: "#E11D48" }}>Results</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {data.successStories.map((story, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ padding: "40px", backgroundColor: "#111", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }} className="success-card">
                 <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "30px" }}>{story.company}</div>
                 <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "#E11D48", lineHeight: 1, marginBottom: "20px", letterSpacing: "-0.03em" }}>{story.metric}</div>
                 <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0 }}>{story.desc}</p>
                 <style>{`
                    .success-card { transition: all 0.4s ease; }
                    .success-card:hover { 
                      transform: translateY(-10px); 
                      background: #151515;
                      border-color: rgba(225,29,72,0.5) !important;
                      box-shadow: 0 10px 40px rgba(225,29,72,0.15);
                    }
                 `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
