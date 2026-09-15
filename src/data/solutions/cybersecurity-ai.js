import img1 from '../../assets/unique_solutions/cyber_security_soc.jpg';
import img2 from '../../assets/fresh/utszepvw5y6gyqxeluri.webp';
import img3 from '../../assets/unique_solutions/cyber_security_case.jpg';
import img4 from '../../assets/fresh/cyber_threat_map.jpg';
import img5 from '../../assets/fresh/hardware_security_module.jpg';
import img6 from '../../assets/fresh/xwkj8sgbte1lnatibkes.webp';
import img7 from '../../assets/fresh/y4sreyneh9zwgyveiwch.webp';
import img8 from '../../assets/fresh/it-experts-server-hub-doing-brainstorming-finding-ways-shield-data.jpg';

const data = {
  id: 'cybersecurity-ai',
  breadcrumbs: ['Enterprise Solutions', 'Cybersecurity AI'],
  hero: {
    titleLight: 'Cybersecurity',
    titleBold: 'AI',
    description: "Defend against advanced persistent threats with autonomous SOC triage, predictive behavioral zero-trust analytics, real-time phishing neutralization, and self-patching vulnerability management.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "99.9%",
    "label": "Threat Neutralization Rate"
  },
  {
    "value": "< 1s",
    "label": "Intrusion Containment Speed"
  },
  {
    "value": "90%",
    "label": "Reduction in False Positives"
  },
  {
    "value": "24/7",
    "label": "Autonomous SOC Monitoring"
  }
],
  overview: {
    heading: "Autonomous Threat Hunting & Adaptive Zero-Trust Defense",
    paragraph: "Devopstrio equips Chief Information Security Officers (CISOs) with AI-native cyber defense systems capable of countering machine-speed cyber attacks. Our platform continuously ingests network telemetry, endpoint signals, cloud access logs, and dark web threat intelligence to isolate anomalous lateral movement.\n\nWhen zero-day intrusions or credential hijacking attempts occur, our autonomous containment agents isolate compromised workloads, revoke token permissions, and generate forensic timelines in milliseconds—empowering your Security Operations Center (SOC) to stay steps ahead of adversaries.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Behavioral Zero-Trust Analytics",
    "desc": "Detect credential theft and insider threats by modeling normal user baseline behavior and flagging anomalous access patterns instantly.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Autonomous SOC Analyst Copilot",
    "desc": "Correlate millions of disparate SIEM logs into structured attack graphs, generating comprehensive MITRE ATT&CK kill-chain visualizations.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "AI Phishing & Social Engineering Shield",
    "desc": "Analyze inbound email language, sender reputation, and embedded attachments with multi-modal vision models to quarantine deceptive spear-phishing.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Self-Patching Vulnerability Prioritization",
    "desc": "Prioritize CVEs based on active real-world exploitability and automatically generate verified security patches for underlying dependencies.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "THREAT INTELLIGENCE",
    "title": "Dark Web & Zero-Day Threat Correlation",
    "text": "Continuously scan global threat intelligence feeds, hacker forums, and dark web leak sites to identify compromised enterprise credentials and emerging zero-day vulnerabilities targeting your technology stack.",
    "image": img7
  },
  {
    "tag": "CONTAINMENT AUTOMATION",
    "title": "Micro-Segmentation & Instant Isolation",
    "text": "Automatically execute software-defined network quarantine rules the microsecond anomalous ransomware encryption or data exfiltration behavior is detected on any cloud endpoint.",
    "image": img8
  },
  {
    "tag": "COMPLIANCE & AUDIT",
    "title": "Continuous SOC2, ISO27001 & FedRAMP Auditing",
    "text": "Maintain continuous compliance posture with automated evidence gathering, IAM permission right-sizing, and immutable audit trails across multi-cloud environments.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Tier-1 Defense Contractor",
    "metric": "Zero Breaches",
    "desc": "Successfully neutralized a nation-state spear-phishing campaign within 800 milliseconds, preventing unauthorized access to sensitive aerospace schematics."
  },
  {
    "company": "Healthcare Hospital Network",
    "metric": "100% Ransomware Block",
    "desc": "Detected and isolated an active lateral ransomware spread across 8,000 hospital workstations, preventing medical database encryption and saving patient services."
  },
  {
    "company": "Global FinTech Platform",
    "metric": "92% SOC Efficiency",
    "desc": "Automated tier-1 incident triage across 50 million daily security events, allowing senior analysts to focus exclusively on high-priority threat hunting."
  }
]
};

export default data;
