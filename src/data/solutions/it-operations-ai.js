import img1 from '../../assets/unique_solutions/it_ops_noc.jpg';
import img2 from '../../assets/fresh/dark_ai_neural_grid.jpg';
import img3 from '../../assets/unique_solutions/it_ops_case.jpg';
import img4 from '../../assets/fresh/cloud_data_center_hall.jpg';
import img5 from '../../assets/fresh/holographic_data_globe.jpg';
import img6 from '../../assets/fresh/server_rack_neon_glow.jpg';
import img7 from '../../assets/fresh/microchip_wafer_lithography.jpg';
import img8 from '../../assets/fresh/cyber_digital_matrix.jpg';

const data = {
  id: 'it-operations-ai',
  breadcrumbs: ['Enterprise Solutions', 'IT Operations AI (AIOps)'],
  hero: {
    titleLight: 'IT Operations',
    titleBold: 'AI (AIOps)',
    description: "Eliminate downtime and alert fatigue with autonomous incident triage, predictive outage forecasting, and self-healing cloud infrastructure orchestrated by AIOps intelligence.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "85%",
    "label": "Alert Noise Reduction"
  },
  {
    "value": "70%",
    "label": "Faster Mean-Time-to-Resolution"
  },
  {
    "value": "Zero",
    "label": "Unplanned Production Downtime"
  },
  {
    "value": "99.999%",
    "label": "Target Infrastructure Availability"
  }
],
  overview: {
    heading: "Predictive Infrastructure Resilience & Autonomous AIOps",
    paragraph: "Devopstrio helps enterprise Site Reliability Engineering (SRE) and IT Operations teams transition from reactive firefighting to predictive incident prevention. Our AIOps platform ingests millions of telemetry signals, logs, and distributed traces in real-time, isolating true anomalies from background noise.\n\nWhen anomalies appear, our root-cause engine correlates infrastructure topology across Kubernetes clusters, cloud networks, and databases to pinpoint the exact failure point—automatically executing self-healing runbooks before end-users experience service degradation.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Intelligent Alert Correlation",
    "desc": "Cluster thousands of cascading alerts into single, actionable incident tickets with clear root-cause explanations and blast-radius visualization.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Predictive Anomaly Detection",
    "desc": "Forecast memory leaks, database connection exhaustion, and disk saturation hours before they cause catastrophic system failure.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Self-Healing Automated Runbooks",
    "desc": "Execute safe remediation actions—restarting failing containers, scaling replica sets, and clearing stale locks—without human on-call intervention.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Topology-Aware Blast Radius Analysis",
    "desc": "Map dynamic microservice dependencies to understand how a failure in a database tier cascades to user-facing API endpoints.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "LOG INTELLIGENCE",
    "title": "High-Volume Unstructured Log Analytics",
    "text": "Analyze terabytes of unstructured application logs in real-time using specialized language models that extract error patterns, stack traces, and anomalous spikes without manual regex maintenance.",
    "image": img7
  },
  {
    "tag": "INCIDENT COPILOT",
    "title": "SRE Incident Command & War Room Assistant",
    "text": "Synthesize active incident context for on-call engineers, automatically retrieving related past post-mortems, recent code deployments, and suggested Git commits that likely caused the regression.",
    "image": img8
  },
  {
    "tag": "OBSERVABILITY UNIFICATION",
    "title": "Full-Stack Observability Integration",
    "text": "Integrate seamlessly with Datadog, Dynatrace, Prometheus, Grafana, Splunk, and PagerDuty to create a unified intelligence layer over your existing monitoring investments.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Global Financial Exchange",
    "metric": "Zero Outages",
    "desc": "Predicted database thread contention 20 minutes prior to market open, automatically optimizing connection pooling and averting critical trading delays."
  },
  {
    "company": "E-Commerce Cloud SaaS",
    "metric": "88% Noise Drop",
    "desc": "Reduced weekly on-call alerts from 14,000 to under 1,600 meaningful incidents, dramatically improving SRE team morale and preventing engineer burnout."
  },
  {
    "company": "FinTech Banking Core",
    "metric": "6-Minute MTTR",
    "desc": "Reduced Mean Time to Resolution from 45 minutes to 6 minutes by deploying autonomous self-healing remediation runbooks for Kubernetes pod failures."
  }
]
};

export default data;
