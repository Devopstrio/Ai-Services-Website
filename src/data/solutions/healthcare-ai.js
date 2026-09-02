import img1 from '../../assets/fresh/man-using-laptop-tablet-analyze-260nw-2727872547.webp';
import img2 from '../../assets/fresh/clinical_ai_diagnostics.jpg';
import img3 from '../../assets/fresh/clinical_ai_diagnostics.jpg';
import img4 from '../../assets/solutions/7.jpg';
import img5 from '../../assets/fresh/clinical_ai_diagnostics.jpg';
import img6 from '../../assets/fresh/man-using-laptop-tablet-analyze-260nw-2727872547.webp';
import img7 from '../../assets/fresh/innovation_bio_ai_lab.jpg';
import img8 from '../../assets/fresh/innovation_bio_ai_lab.jpg';

const data = {
  id: 'healthcare-ai',
  breadcrumbs: ['Enterprise Solutions', 'Healthcare AI'],
  hero: {
    titleLight: 'Healthcare',
    titleBold: 'AI',
    description: "Empower clinicians and healthcare systems with ambient clinical documentation, AI-assisted radiological diagnostics, predictive patient triage, and HIPAA-compliant administrative automation.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "2.5h",
    "label": "Saved per Doctor Daily"
  },
  {
    "value": "99.2%",
    "label": "Radiological Anomaly Detection"
  },
  {
    "value": "40%",
    "label": "Faster Patient Triage"
  },
  {
    "value": "100%",
    "label": "HIPAA / HITECH Compliant"
  }
],
  overview: {
    heading: "Clinical Decision Support & Ambient Hospital Intelligence",
    paragraph: "DevOpsTRIO helps hospitals, medical networks, and life sciences organizations deliver better patient outcomes while curbing physician burnout. Our ambient voice systems listen to doctor-patient consultations, automatically generating structured SOAP notes and billing codes directly into electronic health records (EHR).\n\nWith strict HIPAA, HITECH, and GDPR compliance, our deep learning imaging models assist radiologists in identifying early-stage nodules, micro-fractures, and anomalies in CT, MRI, and X-ray scans with remarkable precision.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Ambient Clinical Note Generation",
    "desc": "Capture doctor-patient conversations ambiently, automatically structuring medical notes, symptom timelines, and prescription orders into Epic or Cerner.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "Radiology & Imaging AI Assist",
    "desc": "Flag early indicators of malignancies, stroke, and cardiovascular anomalies on CT and MRI scans to assist radiologists during emergency triage.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Predictive ICU Sepsis Early Warning",
    "desc": "Analyze real-time bedside telemetry to alert medical teams to impending septic shock hours before visible physiological deterioration.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Automated Prior-Authorization & Billing",
    "desc": "Match medical records against insurance criteria automatically to eliminate prior-authorization delays and reduce claim denials.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "CLINICAL AMBIENT AI",
    "title": "Multi-Specialty Medical Vocabulary Models",
    "text": "Trained on millions of verified medical transcripts across cardiology, oncology, pediatrics, and neurology to understand complex pharmacology and clinical terminology with zero transcription errors.",
    "image": img7
  },
  {
    "tag": "PATIENT FLOW",
    "title": "Emergency Department Triage Optimization",
    "text": "Continuously score incoming emergency room patients by combining vital signs, medical history, and presenting symptoms to optimize bed allocation and nurse staffing.",
    "image": img8
  },
  {
    "tag": "DATA PRIVACY",
    "title": "Air-Gapped On-Premise Healthcare Clouds",
    "text": "Deploy models entirely within hospital on-premise infrastructure with zero patient data transmission over the public internet, ensuring absolute compliance with federal privacy standards.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "National Hospital Network",
    "metric": "1,200 Doctors",
    "desc": "Eliminated 2.5 hours of daily nighttime EHR documentation per physician across 14 hospitals, significantly improving doctor satisfaction and retention."
  },
  {
    "company": "Regional Diagnostic Center",
    "metric": "45% Faster Review",
    "desc": "Accelerated emergency brain CT scan triage from 40 minutes to under 8 minutes for suspected stroke victims, dramatically improving patient recovery rates."
  },
  {
    "company": "Specialty Healthcare Provider",
    "metric": "82% Denial Drop",
    "desc": "Cut insurance claim denial rates from 18% to under 3% by auto-validating medical necessity documentation prior to billing submission."
  }
]
};

export default data;
