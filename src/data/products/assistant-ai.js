import heroBg from "../../assets/fresh/devops_cloud_console.jpg";
import feat1Img from "../../assets/fresh/dashboard_supply_chain.jpg";
import feat2Img from "../../assets/fresh/digital-workspace-with-data-analysis-visualization.jpg";
import feat3Img from "../../assets/fresh/product_design_review.jpg";
import feat4Img from "../../assets/fresh/engineering_standup_meeting.jpg";
import caseImg from "../../assets/fresh/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg";

export const assistantaiData = {
  "id": "assistant-ai",
  "category": "Productivity AI",
  "name": "Assistant AI",
  "tagline": "Context-Aware Executive & Enterprise Productivity Copilot",
  "metrics": [
    {
      "value": "3.5 hrs",
      "label": "Daily Time Saved Per Leader",
      "sub": "Automated executive synthesis"
    },
    {
      "value": "100%",
      "label": "Action Item Accountability",
      "sub": "Zero missed meeting deliverables"
    },
    {
      "value": "< 5s",
      "label": "Meeting Briefing Generation",
      "sub": "Synthesizes attendee dossiers"
    },
    {
      "value": "98%",
      "label": "Executive Voice Consistency",
      "sub": "Trained on leadership communication"
    }
  ],
  "overview": {
    "heading": "The Autonomous Digital Chief of Staff for High-Impact Leadership",
    "description": "Executive leaders are overwhelmed by constant meeting cascades, fragmented Slack updates, and hundreds of daily action items. Assistant AI acts as your dedicated digital Chief of Staff.\n\nFrom preparing 60-second attendee briefing dossiers before client meetings to synthesizing post-meeting action plans and tracking team deliverables, Assistant AI ensures nothing falls through the cracks.",
    "keyPoints": [
      "Automated pre-meeting briefings with attendee background dossiers",
      "Real-time meeting audio transcription and structured action item extraction",
      "Executive ghostwriting for memos, board decks, and announcements",
      "Proactive calendar defense and high-priority schedule optimization"
    ]
  },
  "features": [
    {
      "id": "briefings",
      "tabTitle": "Pre-Meeting Prep",
      "title": "Automated Attendee & Context Dossiers",
      "description": "Receives calendar notifications 10 minutes before meetings and delivers a 1-page executive brief containing past conversation history, deal status, and key objectives.",
      "highlights": [
        "Synthesizes CRM history, emails, and LinkedIn bios",
        "Highlights open blockers from previous discussions",
        "Suggests tactical meeting agenda topics",
        "Delivered directly to mobile or Slack"
      ],
      "image": "executive_boardroom_ai.jpg"
    },
    {
      "id": "transcripts",
      "tabTitle": "Action Tracker",
      "title": "Multi-Speaker Audio Synthesis & Action Extraction",
      "description": "Listens to Zoom, Teams, or Google Meet conversations, identifying speakers, synthesizing technical decisions, and creating Jira tasks automatically.",
      "highlights": [
        "Accurate speaker identification and sentiment markers",
        "Differentiates casual chat from firm commitments",
        "Pushes action items directly to Asana and Linear",
        "Generates concise 3-minute executive summaries"
      ],
      "image": "ai_consultants_discussion.jpg"
    },
    {
      "id": "ghostwriting",
      "tabTitle": "Ghostwriting",
      "title": "Leadership Communication & Memo Drafting",
      "description": "Drafts all-hands announcements, strategy memos, and external partner updates matching the executive's unique voice and formatting preferences.",
      "highlights": [
        "Learns communication style from historical writing samples",
        "Maintains corporate brand guidelines and legal guardrails",
        "Generates multi-slide executive presentation outlines",
        "Supports rapid voice-to-text dictation refinement"
      ],
      "image": "product_design_review.jpg"
    },
    {
      "id": "calendar",
      "tabTitle": "Time Defense",
      "title": "Autonomous Calendar Defense & Focus Blocks",
      "description": "Defends deep work focus hours by automatically declining low-priority meeting invites and grouping fragmented calls into dedicated blocks.",
      "highlights": [
        "Protects minimum 3 hours of daily focus time",
        "Resolves executive scheduling conflicts autonomously",
        "Tracks recurring meeting ROI and recommends cancellations",
        "Integrates with personal and corporate calendars"
      ],
      "image": "multinational_team_summit.jpg"
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Calendar Monitor",
      "desc": "Monitors upcoming schedule and identifies required preparation."
    },
    {
      "step": "02",
      "title": "Context Dossier",
      "desc": "Assembles briefing dossier from emails, CRM, and files."
    },
    {
      "step": "03",
      "title": "Live Synthesis",
      "desc": "Transcribes meeting and isolates key decisions in real time."
    },
    {
      "step": "04",
      "title": "Deliverables Sync",
      "desc": "Assigns tasks to team members with agreed deadlines."
    },
    {
      "step": "05",
      "title": "Follow-Up Draft",
      "desc": "Generates tailored thank-you and recap email for participants."
    }
  ],
  "interactiveDemo": {
    "title": "Interactive Executive Assistant Simulator",
    "subtitle": "Select a leadership scenario below to see how Assistant AI prepares dossiers, transcribes meetings, and dispatches action plans.",
    "personas": [
      {
        "name": "Board of Directors Strategy Prep",
        "role": "Meeting: Q3 Revenue & Strategic Expansion Review",
        "experience": "Attendees: 8 Board Members • 60 Mins",
        "matchScore": 99,
        "matchGrade": "Dossier Ready",
        "summary": "Synthesized Q3 revenue (+34% YoY), highlighted European expansion progress, and prepared responses for expected margin questions.",
        "competencies": [
          {
            "skill": "Financial Data Synthesis",
            "score": 99
          },
          {
            "skill": "Board Member Bio Dossiers",
            "score": 98
          },
          {
            "skill": "Anticipated Q&A Prep",
            "score": 97
          },
          {
            "skill": "Executive Voice Match",
            "score": 99
          }
        ],
        "aiInsight": "Briefing delivered 15 mins prior. Action items auto-assigned to VP Finance immediately after call."
      }
    ]
  },
  "integrations": [
    {
      "name": "Zoom & Microsoft Teams",
      "type": "Meeting Audio Plugin"
    },
    {
      "name": "Google Meet",
      "type": "Real-Time In-Browser Capture"
    },
    {
      "name": "Google Calendar & Outlook",
      "type": "Full Schedule Access"
    },
    {
      "name": "Slack & WhatsApp",
      "type": "Executive Chat Assistant"
    },
    {
      "name": "Asana & Linear",
      "type": "Action Item Task Sync"
    },
    {
      "name": "Notion & Coda",
      "type": "Executive Memo Vault"
    }
  ],
  "security": [
    {
      "label": "SOC 2 Type II",
      "desc": "Certified executive data protection"
    },
    {
      "label": "Zero Audio Retention",
      "desc": "Audio streams processed in memory and discarded"
    },
    {
      "label": "Private LLM Encryption",
      "desc": "End-to-end encrypted model isolation"
    },
    {
      "label": "GDPR Compliant",
      "desc": "Attendee consent compliance controls"
    }
  ],
  "caseStudy": {
    "client": "Global Tech Enterprise",
    "industry": "Enterprise Software",
    "headline": "How 120 C-Suite Executives Reclaimed 400+ Hours Weekly of High-Leverage Strategic Focus",
    "quote": "Assistant AI is the closest thing to cloning your best executive assistant. Our leadership team is dramatically more organized, responsive, and accountable.",
    "author": "Chief Executive Officer",
    "company": "Public Cloud Enterprise",
    "image": "executive_boardroom_ai.jpg",
    "results": [
      {
        "stat": "3.5 hrs",
        "label": "Saved per executive daily"
      },
      {
        "stat": "100%",
        "label": "Post-meeting deliverables logged"
      },
      {
        "stat": "4.9/5",
        "label": "Executive satisfaction score"
      }
    ]
  },
  "hero": {
    "badge": "PRODUCTIVITY // EXECUTIVE ASSISTANT",
    "titleLight": "Supercharge Daily Output with",
    "titleBold": "Assistant AI",
    "description": "An intelligent digital assistant integrated directly into executive desktop and mobile workflows. Summarizes complex briefings, drafts memos, schedules meetings, and tracks team commitments.",
    "liveBadge": "v3.8 Production Ready",
    "bgImage": "heroBg"
  }
};
assistantaiData.hero.bgImage = heroBg;
assistantaiData.features[0].image = feat1Img || heroBg;
assistantaiData.features[1].image = feat2Img || heroBg;
assistantaiData.features[2].image = feat3Img || heroBg;
assistantaiData.features[3].image = feat4Img || heroBg;
assistantaiData.caseStudy.image = caseImg || heroBg;
