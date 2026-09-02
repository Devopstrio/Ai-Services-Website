const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

if (!content.includes('CapabilityDetail')) {
  content = content.replace(
    'import CapabilitiesOverview from "./components/capabilities/CapabilitiesOverview";',
    'import CapabilitiesOverview from "./components/capabilities/CapabilitiesOverview";\nimport CapabilityDetail from "./components/capabilities/CapabilityDetail";'
  );

  content = content.replace(
    '<Route path="/capabilities/*" element={<CapabilitiesOverview />} />',
    '<Route path="/capabilities/:serviceId" element={<CapabilityDetail />} />\n          <Route path="/capabilities/*" element={<CapabilitiesOverview />} />'
  );
  
  fs.writeFileSync('src/App.jsx', content);
  console.log('App.jsx updated.');
} else {
  console.log('App.jsx already has CapabilityDetail.');
}
