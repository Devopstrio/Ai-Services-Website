const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.jsx', 'utf8');

const newResourcesBlock = `  {
    id: "resources",
    label: "Resources",
    heading: "Resources",
    image: {
      src: "https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/hm-unveils-ai-first-value-framework.jpg",
      title: "Everything You Need to Get Started",
      description: "Guides, case studies, and documentation to help you move faster.",
      cta: "Visit Resources",
      route: "https://devopstrio.co.uk/insights",
    },
    columns: [
      [
        {
          title: null,
          items: [
            { label: "Awards & Recognition", route: "https://devopstrio.co.uk/about/awards-recognition" },
            { label: "Case Studies", route: "https://devopstrio.co.uk/insights/case-studies" },
            { label: "Blogs", route: "https://devopstrio.co.uk/insights/blogs" },
            { label: "Whitepapers & Reports", route: "https://devopstrio.co.uk/insights/white-paper" },
          ],
        },
      ],
      [
        {
          title: null,
          items: [
            { label: "Webinars & Events", route: "https://devopstrio.co.uk/insights/industry-events" },
            { label: "Documentation", route: "https://devopstrio.co.uk/insights/awards-milestones" },
            { label: "Community Forum", route: "https://devopstrio.co.uk/about/our-culture-people" },
            { label: "Support Center", route: "https://devopstrio.co.uk/about/customer-support" },
          ],
        },
      ],
    ],
  }`;

const matchIdx = content.indexOf('id: "resources"');
if (matchIdx !== -1) {
  // Go backwards to find the `{`
  let startIdx = content.lastIndexOf('{', matchIdx);
  // Find the end by looking for `];` which ends the array, and go backwards to `}`
  let endArrIdx = content.indexOf('];', matchIdx);
  let endIdx = content.lastIndexOf('}', endArrIdx) + 1; // including the }
  
  if (startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + newResourcesBlock + content.substring(endIdx);
    
    // Modify TOP_LINKS "Resources" to have a custom action
    content = content.replace('{ label: "Resources", route: "/resources" }', '{ label: "Resources", route: "#", action: "open_resources" }');
    
    // Modify TOP_LINKS mapping
    // from:
    // href={link.route}
    // target={link.route.startsWith("http") ? "_blank" : undefined}
    // to:
    // href={link.route}
    // onClick={(e) => {
    //   if (link.action === 'open_resources') {
    //     e.preventDefault();
    //     setNavOpen(true);
    //     // we also need to trigger the side menu to select 'resources' tab.
    //     // We can dispatch a custom event.
    //     window.dispatchEvent(new CustomEvent('open-resources-tab'));
    //   }
    // }}
    
    content = content.replace(
      'href={link.route}', 
      'href={link.route}\n                onClick={(e) => {\n                  if(link.action === "open_resources") {\n                    e.preventDefault();\n                    setNavOpen(true);\n                    window.dispatchEvent(new CustomEvent("open-resources-tab"));\n                  }\n                }}'
    );
    
    fs.writeFileSync('src/components/layout/Header.jsx', content);
    console.log("Updated resources block in Header.");
  }
} else {
  console.log("Could not find start of resources block.");
}
