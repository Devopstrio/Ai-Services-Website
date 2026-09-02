import img1 from '../../assets/unique_solutions/mfg_ai_robotics.jpg';
import img2 from '../../assets/fresh/microchip_wafer_lithography.jpg';
import img3 from '../../assets/unique_solutions/mfg_ai_case.jpg';
import img4 from '../../assets/fresh/manufacturing_predictive_maintenance.jpg';
import img5 from '../../assets/fresh/robotic_assembly_precision.jpg';
import img6 from '../../assets/fresh/innovation_robotics_arm.jpg';
import img7 from '../../assets/solutions/10.jpg';
import img8 from '../../assets/solutions/11.jpg';

const data = {
  id: 'manufacturing-ai',
  breadcrumbs: ['Enterprise Solutions', 'Manufacturing AI'],
  hero: {
    titleLight: 'Manufacturing',
    titleBold: 'AI',
    description: "Drive Industry 4.0 transformation with edge computer vision quality inspection, predictive machine maintenance, dynamic supply chain routing, and autonomous energy consumption optimization.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "35%",
    "label": "Reduction in Unplanned Downtime"
  },
  {
    "value": "0.02%",
    "label": "Defect Escape Rate"
  },
  {
    "value": "22%",
    "label": "Energy Consumption Savings"
  },
  {
    "value": "+18%",
    "label": "Overall Equipment Effectiveness"
  }
],
  overview: {
    heading: "Intelligent Factory Automation & Predictive Asset Management",
    paragraph: "DevOpsTRIO empowers manufacturing enterprises to maximize Overall Equipment Effectiveness (OEE) and eliminate unscheduled production downtime. By deploying high-performance computer vision models directly onto factory floor edge devices, we inspect manufactured goods at line speed with sub-millimeter precision.\n\nOur predictive maintenance algorithms ingest acoustic, thermal, and vibration sensor telemetry from turbines, robotic arms, and CNC machines to detect mechanical wear weeks before catastrophic equipment failure occurs.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Edge Computer Vision Quality Control",
    "desc": "Inspect microscopic soldering flaws, paint blemishes, and dimensional tolerances at 60+ frames per second directly on high-speed conveyor lines.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Predictive Equipment Maintenance",
    "desc": "Analyze vibration harmonics and thermal sensor telemetry to schedule maintenance off-shift, preventing costly mid-production breakdowns.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Dynamic Supply Chain Balancing",
    "desc": "Anticipate raw material shortages and transport bottlenecks by modeling weather, port congestion, and supplier lead times in real-time.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Autonomous Factory Energy Optimization",
    "desc": "Use reinforcement learning to orchestrate HVAC, smelting furnaces, and heavy machinery around dynamic grid peak-pricing tariffs.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "EDGE INTELLIGENCE",
    "title": "Sub-Millisecond Edge Vision Inference",
    "text": "Deploy quantized neural models onto ruggedized industrial edge hardware (NVIDIA Jetson, Intel OpenVINO) operating disconnected from cloud latency for real-time robotic sorting.",
    "image": img7
  },
  {
    "tag": "DIGITAL TWINS",
    "title": "Physics-Informed Digital Factory Twins",
    "text": "Simulate plant layout adjustments, assembly line bottlenecks, and tool re-configurations in a virtual physics twin before investing capital in physical retooling.",
    "image": img8
  },
  {
    "tag": "SAFETY SURVEILLANCE",
    "title": "Worker Safety & PPE Compliance Monitoring",
    "text": "Detect missing hardhats, hazardous chemical spills, and unauthorized personnel in danger zones automatically, alerting plant safety supervisors instantly.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Global Automotive OEM",
    "metric": "32% Downtime Drop",
    "desc": "Eliminated catastrophic robotic welding failures across 4 assembly plants, saving an estimated $12M annually in lost production capacity."
  },
  {
    "company": "Semiconductor Fabrication Leader",
    "metric": "99.98% QA Precision",
    "desc": "Detected micro-cracks on silicon wafers at 120 units per minute, reducing defect escape rate to an unprecedented 0.02%."
  },
  {
    "company": "Chemical Processing Conglomerate",
    "metric": "$4.5M Energy Saved",
    "desc": "Optimized multi-kiln energy consumption using predictive thermal modeling, cutting carbon emissions by 24,000 metric tons annually."
  }
]
};

export default data;
