const fs = require('fs');

const files = [
  'src/components/capabilities/CapabilitiesInsights.jsx',
  'src/components/agents/AgentsInsights.jsx',
  'src/components/innovation/InnovationInsights.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const buttonsHtml = `
      <div style={styles.navControls}>
        <motion.div style={styles.navBtn} onClick={() => scroll('left')} whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }} whileTap={{ scale: 0.95 }}>
          <NavArrowIcon direction="left" />
        </motion.div>
        <motion.div style={styles.navBtn} onClick={() => scroll('right')} whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }} whileTap={{ scale: 0.95 }}>
          <NavArrowIcon direction="right" />
        </motion.div>
      </div>`;
      
  if (!content.includes('NavArrowIcon direction')) {
    content = content.replace(/<\/div>\s*<\/section>/, '</div>' + buttonsHtml + '\n    </section>');
    fs.writeFileSync(file, content);
  }
});
console.log('Done');
