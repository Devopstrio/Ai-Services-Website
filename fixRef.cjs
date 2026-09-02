const fs = require('fs');
['src/components/capabilities/CapabilitiesInsights.jsx', 'src/components/agents/AgentsInsights.jsx', 'src/components/innovation/InnovationInsights.jsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const refCode = `  const trackRef = useRef(null);
  const scroll = (direction) => {
    if(trackRef.current) {
      const scrollAmount = 320;
      trackRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };\n`;

  if (!content.includes('const trackRef = useRef(null)')) {
    content = content.replace(/(export default function \w+Insights\(\) \{\r?\n)/, '$1' + refCode);
    fs.writeFileSync(file, content);
  }
});
console.log('Fixed undefined trackRef.');
