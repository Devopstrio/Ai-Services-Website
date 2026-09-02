import heroBg from "../../assets/integrations/comm_hero.jpg";
import twilioImg from "../../assets/integrations/twilio_voice.jpg";
import waImg from "../../assets/integrations/whatsapp_api.jpg";
import sendgridImg from "../../assets/integrations/sendgrid_email.jpg";
import webrtcImg from "../../assets/integrations/webrtc_media.jpg";
import caseImg from "../../assets/integrations/comm_case.jpg";

export const communicationData = {
  id: "communication",
  category: "Integrations",
  name: "Communication",
  tagline: "Omnichannel Gateway for Twilio, WhatsApp Business, SendGrid & WebRTC Voice",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // OMNICHANNEL VOICE & SMS",
    subBadge: "SUB-100MS STREAMING VOICE & MESSAGING",
    titleLight: "Real-Time Customer Reach with",
    titleBold: "DevOpsTRIO Communication Integrations",
    description: "Deploy sub-100ms duplex conversational voice agents, automated WhatsApp transaction notifications, and AI email triage pipelines across Twilio, WhatsApp Business Cloud API, SendGrid, and WebRTC.",
    bgImage: heroBg,
    liveBadge: "Active Comm Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "6ms",
      activeWebhooks: "600,000+",
      authProtocol: "HMAC Signatures / WebRTC DTLS",
      securityStandard: "SOC 2 Type II & GDPR"
    }
  },
  stats: [
    { value: "< 85ms", label: "Duplex Voice Turnaround Latency", sub: "Sub-100ms conversational audio streaming" },
    { value: "50M+", label: "Monthly Delivered Messages & Calls", sub: "Dispatched with 99.999% carrier delivery rate" },
    { value: "190+ Countries", label: "Global Telephony & SMS Reach", sub: "Direct tier-1 carrier routing interconnects" },
    { value: "100%", label: "GDPR & TCPA Regulatory Compliance", sub: "Automated opt-out & quiet hours enforcement" }
  ],
  connectors: [
    {
      id: "twilio-voice-sms",
      name: "Twilio Voice & Messaging",
      category: "Telephony & SMS Cloud",
      badge: "Twilio Media Streams / Programmable Voice",
      image: twilioImg,
      description: "Direct bi-directional WebSocket streaming for Twilio Media Streams, programmable SMS/MMS, and SIP trunking with real-time speech-to-speech synthesis.",
      protocols: ["Twilio Media Streams WebSocket", "Programmable SMS REST API", "SIP Trunking over TLS"],
      syncCapabilities: [
        "Real-time bidirectional 8kHz/16kHz audio stream ingestion and playback",
        "Sub-second SMS two-factor authentication and transactional alerts",
        "Dynamic call transfer to human agents with full context handover"
      ],
      avgLatency: "6ms"
    },
    {
      id: "whatsapp-business-api",
      name: "WhatsApp Business Cloud API",
      category: "Global Messaging",
      badge: "Meta Graph API v20.0",
      image: waImg,
      description: "Connect to Meta WhatsApp Business Platform for automated customer support, interactive rich message templates, and dynamic commerce catalogs.",
      protocols: ["Meta Graph API Webhooks", "WhatsApp Cloud REST", "End-to-End Encrypted Signal Protocol"],
      syncCapabilities: [
        "Automated conversational commerce, order tracking, and appointment booking",
        "Rich interactive message buttons, carousels, and location pin sharing",
        "Sub-second customer message acknowledgment and verified green badge routing"
      ],
      avgLatency: "8ms"
    },
    {
      id: "sendgrid-email",
      name: "Twilio SendGrid & Postmark",
      category: "Transactional Email",
      badge: "SendGrid v3 / Inbound Parse",
      image: sendgridImg,
      description: "Automate inbound email parsing, AI email triage, dynamic personalized HTML marketing blasts, and deliverability reputation tracking.",
      protocols: ["SendGrid Web API v3", "Inbound Parse Webhook", "DKIM / SPF / DMARC Verification"],
      syncCapabilities: [
        "Real-time parsing of incoming customer support emails with attachment extraction",
        "Dynamic AI drafting of email responses with human-in-the-loop review",
        "99.8% inbox placement rate with automated bounce and spam score suppression"
      ],
      avgLatency: "10ms"
    },
    {
      id: "webrtc-streaming",
      name: "WebRTC Ultra-Low Latency Voice",
      category: "Browser & Mobile Voice",
      badge: "WebRTC / Opus Codec / DTLS-SRTP",
      image: webrtcImg,
      description: "Embed zero-latency voice conversations directly into web applications, iOS, and Android apps with native Opus audio compression.",
      protocols: ["WebRTC PeerConnection", "Opus Audio Codec (48kHz)", "DTLS 1.3 / SRTP Encryption"],
      syncCapabilities: [
        "Crystal-clear 48kHz HD audio with dynamic noise suppression and echo cancellation",
        "Natural conversational turn-taking with immediate interruption handling",
        "Zero carrier telecom costs — direct peer-to-peer audio streaming"
      ],
      avgLatency: "4ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Voice & SMS Dispatch Studio",
    subtitle: "Select a real-time communication event below to observe sub-100ms voice synthesis and carrier delivery telemetry.",
    scenarios: [
      {
        id: "twilio-voice-call",
        title: "Inbound Telephony Call ➔ Sub-85ms Duplex Voice AI",
        trigger: "Inbound PSTN Call: '+1 (415) 882-9011' (Customer Inquiring on Flight Reschedule)",
        sourceApp: "Twilio Media Streams",
        targetApp: "DevOpsTRIO Voice Engine",
        executionTime: "74ms",
        status: "200 OK — Audio Stream Active (Opus 48kHz)",
        payload: {
          event_type: "telephony.call_answered",
          call_sid: "CA9940192810a9f",
          caller_number: "+1 (415) 882-9011",
          audio_stream_url: "wss://api.devopstrio.com/v1/voice/stream",
          turnaround_latency_ms: 74,
          sentiment: "Urgent / Anxious",
          selected_action: "FLIGHT_REBOOK_AIR_CANADA_882",
          dispatched_sms_confirmation: true
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "HMAC-SHA256 Webhook Cryptographic Verification",
      desc: "Every incoming webhook from Twilio, WhatsApp, and SendGrid is verified with SHA-256 signatures to reject forged or spoofed messages."
    },
    {
      title: "Encrypted DTLS-SRTP Audio Streams",
      desc: "Voice audio packets are encrypted end-to-end with Datagram Transport Layer Security (DTLS) and Secure Real-Time Transport Protocol (SRTP)."
    },
    {
      title: "TCPA & Global Quiet Hours Enforcement",
      desc: "Built-in regulatory guards automatically suppress marketing SMS messages during regional evening hours and respect consumer DND registries."
    },
    {
      title: "Automated Carrier Unsubscribe / STOP Handlers",
      desc: "Incoming 'STOP', 'UNSUBSCRIBE', or 'CANCEL' keywords trigger instantaneous, mandatory suppression lists across all outbound channels."
    }
  ],
  caseStudy: {
    client: "Leading Global Airline & Travel Group (40M Passengers/Yr)",
    industry: "Aviation & Customer Experience",
    headline: "How Sub-85ms Duplex Voice Connectors Resolved 68% of Flight Rebooking Calls Without Human Agent Queues",
    quote: "During severe storm ground delays, our phone lines used to see 4-hour hold times. DevOpsTRIO's Twilio voice integration answered 15,000 concurrent calls simultaneously with sub-second response times.",
    author: "Global VP of Customer Experience",
    company: "Major International Airline Group",
    image: caseImg,
    results: [
      { stat: "68%", label: "First-contact call resolution rate by voice AI" },
      { stat: "74ms", label: "Average conversational voice turnaround latency" },
      { stat: "Zero", label: "Customer hold queue time during major flight disruptions" }
    ]
  }
};
