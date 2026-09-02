const fs = require('fs');
const files = [
  'src/components/capabilities/CapabilitiesInsights.jsx',
  'src/components/agents/AgentsInsights.jsx',
  'src/components/innovation/InnovationInsights.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Add useRef if missing
  if (content.includes('useState') && !content.includes('useRef')) {
    content = content.replace('useState } from "react"', 'useState, useRef } from "react"');
  }

  // Dark mode hoverFace
  content = content.replace(/background: "linear-gradient\(160deg, #F6EFE4 0%, #EDD9C4 100%\)"/g, 'background: "#0b0b0b"');
  content = content.replace(/color: "#3a2f28"/g, 'color: "#9ca3af"');
  content = content.replace(/color: "#1a1512"/g, 'color: "#ffffff"');
  content = content.replace(/color: "#4a4038"/g, 'color: "#d1d5db"');

  // Fix image top content fade. Just replacing the opening div of imgTopContent.
  content = content.replace('<div style={styles.imgTopContent}>', '<motion.div style={styles.imgTopContent} animate={{ opacity: isHovered ? 0 : 1 }} transition={{ duration: 0.2 }}>');
  
  // Need to replace the closing </div> of imgTopContent with </motion.div>
  // We can do this by looking for:
  //           <h3 style={styles.imgTitle}>{item.title}</h3>
  //         </div>
  //       </div>
  //       <AnimatePresence>
  content = content.replace('</h3>\n        </div>\n      </div>', '</h3>\n        </motion.div>\n      </div>');


  // Add navControls styles
  const controlsStyles = `
  navControls: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    padding: "30px 5% 0",
    maxWidth: "1300px",
    margin: "0 auto",
  },
  navBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "4px",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
  },`;

  if (!content.includes('navControls:')) {
    content = content.replace('scrollWrap: {', controlsStyles + '\n  scrollWrap: {');
  }

  // NavArrowIcon
  if (!content.includes('NavArrowIcon')) {
    const navArrowCode = `
function NavArrowIcon({ direction }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}>
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
`;
    content = content.replace('function ArrowIcon()', navArrowCode + '\nfunction ArrowIcon()');
  }

  const compNameMatch = content.match(/export default function (\w+Insights)\(\)/);
  if (compNameMatch) {
    const compName = compNameMatch[1];
    
    if (!content.includes('const trackRef = useRef(null)')) {
      content = content.replace(
        `export default function ${compName}() {\n  return (`,
        `export default function ${compName}() {\n  const trackRef = useRef(null);\n  const scroll = (direction) => {\n    if(trackRef.current) {\n      const scrollAmount = 320;\n      trackRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });\n    }\n  };\n\n  return (`
      );
    }
    
    content = content.replace('<div style={styles.track}>', '<div style={styles.track} ref={trackRef}>');
    
    const buttonsHtml = `
      <div style={styles.navControls}>
        <motion.div style={styles.navBtn} onClick={() => scroll('left')} whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }} whileTap={{ scale: 0.95 }}>
          <NavArrowIcon direction="left" />
        </motion.div>
        <motion.div style={styles.navBtn} onClick={() => scroll('right')} whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }} whileTap={{ scale: 0.95 }}>
          <NavArrowIcon direction="right" />
        </motion.div>
      </div>
    `;
    if (!content.includes('styles.navControls')) {
      content = content.replace('</div>\n    </section>', '</div>\n' + buttonsHtml + '    </section>');
    }
  }

  fs.writeFileSync(file, content);
});
console.log('Done modifying Insights components.');
