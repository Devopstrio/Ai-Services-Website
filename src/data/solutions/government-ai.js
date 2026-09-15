import img1 from '../../assets/unique_solutions/gov_ai_civic.jpg';
import img2 from '../../assets/fresh/dark_ai_neural_grid.jpg';
import img3 from '../../assets/unique_solutions/gov_ai_case.jpg';
import img4 from '../../assets/overview/datacenter-firewall.jpg';
import img5 from '../../assets/fresh/server_rack_neon_glow.jpg';
import img6 from '../../assets/solutions/19.jpg';
import img7 from '../../assets/solutions/20.jpg';
import img8 from '../../assets/solutions/21.jpg';

const data = {
  id: 'government-ai',
  breadcrumbs: ['Enterprise Solutions', 'Government AI'],
  hero: {
    titleLight: 'Government',
    titleBold: 'AI',
    description: "Enhance citizen services, optimize urban transit, and accelerate public policy analysis with air-gapped, FedRAMP-compliant Artificial Intelligence designed for public sector security.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "24/7",
    "label": "Multi-Lingual Citizen Support"
  },
  {
    "value": "65%",
    "label": "Faster Benefit Claim Processing"
  },
  {
    "value": "30%",
    "label": "Reduction in Urban Traffic Congestion"
  },
  {
    "value": "FedRAMP",
    "label": "High Security Compliance"
  }
],
  overview: {
    heading: "Citizen-Centric Public Services & Smart Governance",
    paragraph: "Devopstrio delivers mission-critical AI solutions for federal agencies, state governments, and municipal public sector organizations. We streamline complex citizen interactions—from permit applications and tax filing assistance to veterans' benefit claims processing.\n\nOur smart city infrastructure models optimize municipal traffic signal timing, monitor civil infrastructure health, and support disaster relief coordination—all deployed with strict FedRAMP High, IL5/IL6, and StateRAMP security compliance.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Omnichannel Citizen Concierge",
    "desc": "Help residents navigate complex municipal permits, licensing, tax inquiries, and social services conversationally in over 50 languages.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Benefit Claims Acceleration",
    "desc": "Process veterans' affairs, unemployment, and healthcare assistance applications automatically, eliminating months of administrative backlogs.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Smart Traffic & Transit Optimization",
    "desc": "Analyze intersection camera feeds to dynamically synchronize traffic lights, reducing commuter congestion and emergency vehicle response times.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Disaster Response Coordination",
    "desc": "Synthesize satellite imagery, weather telemetry, and emergency call logs during natural disasters to route first responders and relief supplies efficiently.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "PUBLIC INFRASTRUCTURE",
    "title": "Computer Vision Civil Asset Monitoring",
    "text": "Analyze high-resolution municipal drone and vehicle camera footage to automatically detect potholes, damaged guardrails, bridge cracks, and failing streetlights.",
    "image": img7
  },
  {
    "tag": "POLICY INTELLIGENCE",
    "title": "Legislative Synthesis & Impact Modeling",
    "text": "Enable policy analysts to query thousands of pages of municipal code, zoning regulations, and federal statutes, evaluating budgetary and environmental impacts.",
    "image": img8
  },
  {
    "tag": "SECURITY & SOVEREIGNTY",
    "title": "Air-Gapped GovCloud Deployments",
    "text": "Deploy models entirely within AWS GovCloud or Azure Government regions, maintaining complete data sovereignty and strict CJIS/FedRAMP regulatory boundaries.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Metropolitan City Government",
    "metric": "28% Less Congestion",
    "desc": "Optimized traffic signal synchronization across 650 downtown intersections, reducing peak-hour commuter travel times by 28% and cutting vehicle emissions."
  },
  {
    "company": "State Department of Labor",
    "metric": "Zero Claim Backlog",
    "desc": "Automated unemployment benefit eligibility verification, reducing claim turnaround from 28 days to 48 hours for 450,000 citizens."
  },
  {
    "company": "Federal Transportation Agency",
    "metric": "10,000 Bridges",
    "desc": "Monitored structural integrity across 10,000 highway bridges using satellite and drone vision AI, identifying critical corrosion years before failure."
  }
]
};

export default data;
