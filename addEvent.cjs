const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Header.jsx', 'utf8');

const effectCode = `  useEffect(() => {
    const handleOpenResources = () => {
      setActive('resources');
    };
    window.addEventListener('open-resources-tab', handleOpenResources);
    return () => window.removeEventListener('open-resources-tab', handleOpenResources);
  }, []);`;

if (!content.includes('handleOpenResources')) {
  // We need to inject this inside the FullScreenNav component.
  // It has:
  //   const [active, setActive] = useState(NAV_SECTIONS[0].id);
  //   const [direction, setDirection] = useState(1);
  //   const activeSection = NAV_SECTIONS.find((s) => s.id === active) || NAV_SECTIONS[0];
  // 
  //   useEffect(() => {
  //     if (open) setActive(NAV_SECTIONS[0].id);
  //   }, [open]);

  let replaced = false;
  content = content.replace(
    '  useEffect(() => {\n    if (open) setActive(NAV_SECTIONS[0].id);\n  }, [open]);', 
    '  useEffect(() => {\n    if (open) setActive(NAV_SECTIONS[0].id);\n  }, [open]);\n\n' + effectCode
  );
  content = content.replace(
    '  useEffect(() => {\r\n    if (open) setActive(NAV_SECTIONS[0].id);\r\n  }, [open]);', 
    '  useEffect(() => {\r\n    if (open) setActive(NAV_SECTIONS[0].id);\r\n  }, [open]);\n\n' + effectCode
  );
  
  fs.writeFileSync('src/components/layout/Header.jsx', content);
  console.log('Added event listener.');
} else {
  console.log('Already added.');
}
