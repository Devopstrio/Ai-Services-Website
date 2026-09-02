import img1 from '../../assets/unique_solutions/contact_center_voice.jpg';
import img2 from '../../assets/fresh/man-using-laptop-tablet-analyze-260nw-2727872547.webp';
import img3 from '../../assets/fresh/manufacturing_predictive_maintenance.jpg';
import img4 from '../../assets/unique_solutions/contact_center_case.jpg';
import img5 from '../../assets/fresh/o617yuhzaypd5vculo0kdsgsuhhdutyfbvjrd9rcl5x-wzbxqjixxxbhgllopryznd7wbtmxxjpodopgxhf6lwocnpeyvjwvf5mhbjprzw37td8yjdmjrjdtxgc7t-tks81n3osnyjqcdnamznierpwomyaqkynpbt7lbcax7krombnudovmcqsgprgjgsqr.jpg';
import img6 from '../../assets/fresh/openinno_686062167_jacoblund02.jpg';
import img7 from '../../assets/solutions/12.jpg';
import img8 from '../../assets/fresh/person-using-ar-technology-perform-their-occupation.jpg';

const data = {
  id: 'contact-center-ai',
  breadcrumbs: ['Enterprise Solutions', 'Contact Center AI'],
  hero: {
    titleLight: 'Contact Center',
    titleBold: 'AI',
    description: "Modernize telecom and customer contact centers with sub-second conversational voice bots, real-time agent whisper guidance, and 100% automated quality assurance analytics.",
    bgImage: img1
  },
  metricsBanner: [
  {
    "value": "100%",
    "label": "Automated Call Quality Auditing"
  },
  {
    "value": "45%",
    "label": "Reduction in Hold Times"
  },
  {
    "value": "< 250ms",
    "label": "Voice Response Latency"
  },
  {
    "value": "+35%",
    "label": "First-Call Resolution Rate"
  }
],
  overview: {
    heading: "Conversational Voice Intelligence & Real-Time Agent Guidance",
    paragraph: "DevOpsTRIO upgrades traditional call centers into intelligent conversational hubs. Our low-latency voice AI engines engage callers in human-like dialogue, understanding natural speech, interruptions, accents, and emotional nuances to resolve caller requests autonomously.\n\nFor human-handled calls, our Real-Time Agent Whisper platform listens to the interaction, automatically surfacing policy answers, customer purchase history, and recommended next actions onto the representative's screen in under 200 milliseconds.",
    image: img2
  },
  benefitsBento: [
  {
    "title": "Human-Quality Voice Agents",
    "desc": "Deploy natural, interruption-friendly voice bots that converse fluidly to authenticate callers, book appointments, and process payments securely.",
    "colSpan": 2,
    "image": img3
  },
  {
    "title": "100% Automated Call QA",
    "desc": "Audit every single recorded call for regulatory compliance, script adherence, customer sentiment, and agent professionalism automatically.",
    "colSpan": 1,
    "image": img4
  },
  {
    "title": "Real-Time Agent Whisper",
    "desc": "Provide frontline representatives with live contextual prompts, objection handling tips, and knowledge base lookups during active customer calls.",
    "colSpan": 1,
    "image": img5
  },
  {
    "title": "Post-Call Auto-Summarization",
    "desc": "Generate structured call notes, root cause codes, and follow-up action items directly into Salesforce, Genesys, or Five9 in seconds.",
    "colSpan": 2,
    "image": img6
  }
],
  featuresZigZag: [
  {
    "tag": "VOICE ARCHITECTURE",
    "title": "Ultra-Low Latency Speech Synthesis & STT",
    "text": "Built on streaming WebRTC pipelines, our speech-to-text and neural voice models achieve lightning-fast roundtrip latency, eliminating unnatural pauses and conversational collisions.",
    "image": img7
  },
  {
    "tag": "SENTIMENT SURVEILLANCE",
    "title": "Acoustic Tone & Stress Analysis",
    "text": "Analyze speech acoustic patterns and pitch variations to detect escalating customer frustration in real-time, automatically triggering supervisor whisper coaching or warm call transfers.",
    "image": img8
  },
  {
    "tag": "TELEPHONY CONNECTIVITY",
    "title": "Turnkey Telephony Integration",
    "text": "Seamlessly integrate with Genesys Cloud, Amazon Connect, Cisco Webex, Avaya, and Twilio with zero disruption to existing SIP trunking and routing infrastructure.",
    "image": img1
  }
],
  successStories: [
  {
    "company": "Major Airline Group",
    "metric": "70,000 Calls/Day",
    "desc": "Handled massive weather-induced flight cancellation surges autonomously with conversational voice bots that rebooked 84% of stranded passengers."
  },
  {
    "company": "Utility & Energy Provider",
    "metric": "40% AHT Drop",
    "desc": "Reduced average call duration from 7.5 minutes to 4.5 minutes across 1,200 agents with real-time billing assist and automated post-call CRM logging."
  },
  {
    "company": "National Insurance Carrier",
    "metric": "100% QA Score",
    "desc": "Replaced 2% random human supervisor call sampling with 100% automated regulatory compliance auditing across 3 million annual claims calls."
  }
]
};

export default data;
