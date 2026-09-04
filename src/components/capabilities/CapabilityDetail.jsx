import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CAPABILITY_SERVICES_DATA } from "../../data/capabilities";

import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Cpu, Users, Database } from "lucide-react";

const FONT = '"Inter", "DM Sans", system-ui, -apple-system, sans-serif';

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const iconMap = {
  cpu: <Cpu size={32} color="#E11D48" />,
  users: <Users size={32} color="#E11D48" />,
  database: <Database size={32} color="#E11D48" />
};

function RibbonGraphic() {
  const bars = Array.from({ length: 60 }, (_, i) => i);
  const cx = 520;
  const cy = 300;
  const baseAngle = -70;
  const angleStep = 2.6;

  return (
    <svg viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block", opacity: 0.85, mixBlendMode: "screen" }}>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#BE123C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#881337" stopOpacity="0" />
        </linearGradient>
      </defs>
      {bars.map((i) => {
        const rad = (baseAngle + i * angleStep) * (Math.PI / 180);
        const len = 200 + Math.sin(i * 0.4) * 120 + i * 2;
        const x2 = cx + Math.cos(rad) * len;
        const y2 = cy + Math.sin(rad) * len;
        return (
          <motion.line key={i} x1={cx} y1={cy} x2={x2} y2={y2} stroke="url(#barGrad)" strokeWidth="6" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 + i * 0.008, ease: "easeOut" }} />
        );
      })}
    </svg>
  );
}

export default function CapabilityDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const data = CAPABILITY_SERVICES_DATA[serviceId];
  const trackRef = useRef(null);

  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff" }}>
        <h2 style={{ fontFamily: FONT }}>Service Not Found</h2>
      </div>
    );
  }

  const scroll = (direction) => {
    if(trackRef.current) {
      const scrollAmount = 320;
      trackRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: FONT, overflowX: "hidden" }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ position: "relative", width: "100%", minHeight: "720px", background: "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)", display: "flex", alignItems: "center", marginTop: "70px", overflow: "hidden" }}>
        <motion.div initial={{ opacity: 0, rotate: -4 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "68%", marginTop: "-50px", zIndex: 0, pointerEvents: "none", maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 22%, #000 46%, #000 100%)" }}>
          <motion.div style={{ width: "100%", height: "100%" }} animate={{ rotate: [0, 2, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}>
            <RibbonGraphic />
          </motion.div>
        </motion.div>

        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 5%", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", left: "0", top: "10%", bottom: "10%", width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)" }} />
          <div style={{ maxWidth: "600px", paddingLeft: "clamp(20px, 4vw, 50px)" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "rgba(255,255,255,0.5)", fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600, marginBottom: "24px" }}>
                <span style={{ cursor: "pointer" }} onClick={() => navigate("/capabilities/overview")}>{data.breadcrumbs[0]}</span>
                <span>/</span>
                <span style={{ color: "#E11D48" }}>{data.breadcrumbs[1]}</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, fontWeight: 300, margin: "0 0 24px 0", letterSpacing: "-0.02em", color: "#fff" }}>
              <span style={{ fontWeight: 700 }}>{data.hero.titleLight}</span> <span style={{ color: "rgba(255,255,255,0.85)" }}>{data.hero.titleBold}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)", lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>
              {data.hero.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} style={{ marginTop: "32px" }}>
              <Link to="/capabilities/overview" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#E11D48", color: "#fff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, padding: "13px 26px", borderRadius: "8px", transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(225,29,72,0.3)" }} className="hero-view-btn">
                <ArrowLeft size={16} /> View All Capabilities
              </Link>
              <style>{`
                .hero-view-btn:hover { background-color: #BE123C !important; transform: translateY(-2px); box-shadow: 0 6px 25px rgba(225,29,72,0.5) !important; }
              `}</style>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TALL METRICS CARDS (Reference Image Style) */}
      <section style={{ backgroundColor: "#000", padding: "80px 5% 0 5%" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {data.metricsCards.map((metric, i) => (
             <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ position: "relative", height: "350px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
               <img src={metric.image} alt="Metric" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)" }} />
               <div style={{ position: "absolute", bottom: "30px", left: "30px", right: "30px" }}>
                  <h3 style={{ fontSize: "3rem", fontWeight: 700, margin: "0 0 8px 0", color: "#fff", lineHeight: 1 }}>{metric.value}</h3>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", margin: 0, fontWeight: 500 }}>{metric.label}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* 3. IN ACTION (Merged and Less Repetitive) */}
      <section style={{ position: "relative", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: "520px", marginTop: "120px" }}>
        <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#0a0a0a" }}>
          <img src={data.inAction.imageSrc} alt="In Action" style={{ position: "absolute", top: "-8%", left: 90, width: "100%", height: "106%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%), linear-gradient(0deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%)" }} />
          <div style={{ position: "absolute", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225, 29, 72, 0.4) 0%, transparent 70%)", top: "40%", left: "30%", filter: "blur(40px)", mixBlendMode: "screen", pointerEvents: "none" }} />
        </div>
        <div style={{ position: "relative", backgroundColor: "#0b0b0b", display: "flex", alignItems: "center", padding: "8% 10% 8% 8%" }}>
          <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 70%)", bottom: "-10%", right: "-10%", filter: "blur(60px)", pointerEvents: "none" }} />
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 300, lineHeight: 1.1, margin: "0 0 24px 0", letterSpacing: "-0.02em", color: "#ffffff" }}>
              <span style={{ fontWeight: 700 }}>{data.inAction.headingLight}</span> <span style={{ color: "#E11D48" }}>{data.inAction.headingRed}</span>
            </h2>
            <p style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "40px" }}>
              {data.inAction.paragraph}
            </p>
            <motion.button onClick={() => window.location.href = "https://devopstrio.co.uk/contact"} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", backgroundColor: "#E11D48", color: "#ffffff", border: "none", borderRadius: "999px", fontSize: "0.95rem", fontWeight: 500, cursor: "pointer", outline: "none", transition: "background-color 0.25s ease" }} whileHover={{ scale: 1.03, boxShadow: "0 8px 26px rgba(225, 29, 72, 0.4)" }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25, ease: "easeOut" }}>
              {data.inAction.buttonText}
              <ArrowIcon />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 4. WHO WE WORK WITH (Bubbling Icons Section) */}
      <section style={{ backgroundColor: "#000", padding: "120px 5%" }}>
         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} style={{ marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
                <span style={{ fontWeight: 700 }}>{data.whoWeWorkWith.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.whoWeWorkWith.titleRed}</span>
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px" }}>
               {data.whoWeWorkWith.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                     <motion.div 
                        whileHover={{ scale: 1.15, rotate: [-5, 5, -5, 0], y: -5 }} 
                        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                        style={{ width: "70px", height: "70px", borderRadius: "16px", backgroundColor: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", cursor: "pointer" }}
                     >
                        {iconMap[item.icon] || <Cpu size={32} color="#E11D48"/>}
                     </motion.div>
                     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#E11D48", marginBottom: "16px" }}>{item.title}</h3>
                     <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. HOW YOU BENEFIT (Image Box Overlay Cards) */}
      <section style={{ backgroundColor: "#0b0b0b", padding: "120px 5%" }}>
         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} style={{ marginBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
                <span style={{ fontWeight: 700 }}>{data.benefits.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.benefits.titleRed}</span>
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
               {data.benefits.items.map((benefit, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ position: "relative", height: "450px", borderRadius: "16px", overflow: "hidden", display: "flex", alignItems: "flex-end", backgroundColor: "#111" }}>
                     <img src={benefit.image} alt={benefit.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
                     
                     <div style={{ position: "relative", zIndex: 2, backgroundColor: "rgba(10,10,10,0.85)", backdropFilter: "blur(10px)", margin: "20px", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", width: "calc(100% - 40px)" }}>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#E11D48", margin: "0 0 12px 0", lineHeight: 1.3 }}>{benefit.title}</h3>
                        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6 }}>{benefit.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. CORE CAPABILITIES CARDS SECTION (Beige Hover) */}
      <section style={{ backgroundColor: "#000", padding: "120px 5%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1400px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: "60px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
              <span style={{ fontWeight: 700 }}>{data.cards.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.cards.titleRed}</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "24px" }}>
            {data.cards.items.map((card, i) => {
              const isHovered = hoveredCard === i;
              return (
                <motion.div key={i} onHoverStart={() => setHoveredCard(i)} onHoverEnd={() => setHoveredCard(null)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }} style={{ position: "relative", height: "380px", borderRadius: "16px", overflow: "hidden", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0b0b0b" }}>
                  
                  {/* Background Image (visible before hover) */}
                  <motion.div initial={false} animate={{ opacity: isHovered ? 0 : 0.4 }} transition={{ duration: 0.4 }} style={{ position: "absolute", inset: 0 }}>
                     <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.2) 100%)" }} />
                  </motion.div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${card.color1} 0%, ${card.color2} 100%)`, zIndex: 0 }} />
                    )}
                  </AnimatePresence>
                  
                  <div style={{ position: "relative", zIndex: 2, padding: "40px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", color: isHovered ? "#E11D48" : "#E11D48", marginBottom: "24px", transition: "color 0.4s ease-in-out" }}>
                      {card.badge}
                    </div>
                    
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: isHovered ? "#000000" : "#ffffff", lineHeight: 1.2, margin: "0 0 16px 0", letterSpacing: "-0.01em", transition: "color 0.4s ease-in-out" }}>
                      {card.title}
                    </h3>
                    
                    <div style={{ position: "relative", flex: 1 }}>
                      <motion.p animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: 0, left: 0, fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0 }}>
                        {card.body}
                      </motion.p>
                      
                      <motion.p animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.3 }} style={{ position: "absolute", top: 0, left: 0, fontSize: "1.05rem", color: "#000000", lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                        {card.more}
                      </motion.p>
                    </div>
                    
                    <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                      <motion.div animate={{ x: isHovered ? 5 : 0, color: isHovered ? "#E11D48" : "rgba(255,255,255,0.3)" }} transition={{ duration: 0.3 }}>
                        <ArrowRight size={24} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. INSIGHTS SECTION */}
      <section style={{ backgroundColor: "#0b0b0b", padding: "120px 5%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1400px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "24px" }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.02em", margin: 0 }}>
              <span style={{ fontWeight: 700 }}>{data.insights.titleLight}</span> <span style={{ color: "#E11D48" }}>{data.insights.titleRed}</span>
            </motion.h2>
            <div style={{ display: "flex", gap: "12px" }}>
               <button onClick={() => scroll('left')} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronLeft size={20}/></button>
               <button onClick={() => scroll('right')} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><ChevronRight size={20}/></button>
            </div>
          </div>
          <div ref={trackRef} style={{ display: "flex", gap: "24px", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom: "20px" }}>
            {data.insights.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }} style={{ flex: "0 0 380px", position: "relative", height: "440px", borderRadius: "16px", padding: "40px", display: "flex", flexDirection: "column", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)", background: "#111", overflow: "hidden" }} className="insight-card">
                 
                 {/* Background Image */}
                 <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5, transition: "opacity 0.4s ease, transform 0.4s ease" }} className="insight-img" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)" }} />
                 </div>

                 <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", marginBottom: "32px", zIndex: 2, position: "relative" }} className="insight-tag">
                   {item.tag}
                 </div>
                 
                 <div style={{ marginTop: "auto", zIndex: 2, position: "relative" }}>
                   <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, margin: "0 0 16px 0", letterSpacing: "-0.01em" }} className="insight-title">
                     {item.title}
                   </h3>
                   <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }} className="insight-desc">
                     {item.desc}
                   </p>
                 </div>

                 <style>{`
                   .insight-card {
                     transition: transform 0.4s ease, border-color 0.4s ease;
                   }
                   .insight-card:hover {
                     transform: translateY(-8px);
                     border-color: rgba(225,29,72,0.5) !important;
                   }
                   .insight-card:hover .insight-img {
                     transform: scale(1.05);
                     opacity: 0.7 !important;
                   }
                   .insight-card:hover .insight-title, .insight-card:hover .insight-tag {
                     color: #ffffff !important;
                   }
                   .insight-card:hover .insight-desc {
                     color: rgba(255,255,255,0.85) !important;
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
