import React, { useEffect, useState, useRef } from "react";

const defaultSections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "Use Cases" },
  { id: "casestudy", label: "Case Study" },
  { id: "compliance", label: "Compliance" },
  { id: "why-choose", label: "Why Devopstrio" },
  { id: "faq", label: "FAQ" }
];

export function SectionNavbar({ sections = defaultSections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 100);

      let currentActive = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const elRect = el.getBoundingClientRect();
          if (elRect.top <= 200 && elRect.bottom >= 150) {
            currentActive = section.id;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      ref={navRef}
      className="sticky top-20 z-40 w-full transition-all duration-300 py-3 bg-[#000000]/80 backdrop-blur-md border-y border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none gap-6 md:gap-8">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleLinkClick(e, section.id)}
              className={`relative py-1 text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
                isActive ? "text-rose-500 font-bold" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {section.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-500 rounded-full" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SectionNavbar;
