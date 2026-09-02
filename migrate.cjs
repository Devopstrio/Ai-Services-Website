const fs = require('fs');

// Read the old data file
const oldData = fs.readFileSync('src/components/capabilities/capabilityServicesData.js', 'utf8');

// Extract the generative-ai object
const lines = oldData.split('\n');
const start = lines.findIndex(l => l.includes('"generative-ai": {'));
const end = lines.lastIndexOf('};');

// Create the new file content
let objLines = lines.slice(start, end);
objLines[0] = 'const generativeAi = {';
const newData = objLines.join('\n') + '\n};\nexport default generativeAi;';

// Write to new location
fs.writeFileSync('src/data/capabilities/generative-ai.js', newData);

// Update CapabilityDetail.jsx import
let component = fs.readFileSync('src/components/capabilities/CapabilityDetail.jsx', 'utf8');
component = component.replace(
  'import { CAPABILITY_SERVICES_DATA } from "./capabilityServicesData";',
  'import { CAPABILITY_SERVICES_DATA } from "../../data/capabilities";'
);
fs.writeFileSync('src/components/capabilities/CapabilityDetail.jsx', component);

console.log('Migration complete.');
