import heroBg from "../../assets/library/agent_security_soc.jpg";
import threatImg from "../../assets/unique_agents/secops_threat_hunt.jpg";
import socImg from "../../assets/fresh/dashboard_cyber_soc.jpg";
import hsmImg from "../../assets/fresh/hardware_security_module.jpg";
import networkImg from "../../assets/fresh/cyber_digital_matrix.jpg";
import caseImg from "../../assets/unique_agents/secops_agent_case.jpg";

export const securityOperationsAgentData = {
  id: "security-operations-agent",
  category: "Engineering & IT",
  name: "Security Operations (SOC) Agent",
  tagline: "Real-Time Threat Hunting, Zero-Trust Access & Automated Vulnerability Remediation",
  hero: {
    badge: "AUTONOMOUS AGENT",
    autonomyLevel: "Level 4 Autonomous",
    titleLight: "Sub-Second Threat Defense with",
    titleBold: "DevOpsTRIO SOC Agent",
    description: "Autonomous cybersecurity agent that ingests millions of SIEM log events, detects zero-day lateral movement, isolates compromised endpoints, and auto-patches critical CVE vulnerabilities in real time with zero human latency.",
    bgImage: heroBg,
    liveBadge: "v4.2 Production Ready",
    agentStatus: {
      activeTasks: 76,
      latency: "180ms",
      connectedTools: 28,
      autonomyScore: "99.9%"
    }
  },
  metrics: [
    { value: "< 2s", label: "Threat Containment", sub: "Instant compromised host isolation" },
    { value: "99.4%", label: "False Positive Cut", sub: "Neural alert correlation & deduplication" },
    { value: "24/7/365", label: "Autonomous Hunting", sub: "Continuous MITRE ATT&CK coverage" },
    { value: "100%", label: "Zero-Trust Enforcement", sub: "Least-privilege IAM micro-segmentation" }
  ],
  overview: {
    heading: "The Autonomous Digital SOC Analyst for Enterprise Cybersecurity",
    description: "Enterprise Security Operations Centers (SOCs) are drowning in alert fatigue, processing over 50,000 security alarms a day with an average threat dwell time of 21 days.\n\nThe DevOpsTRIO Security Operations Agent operates as an autonomous tier-1 and tier-2 SOC analyst. It ingests telemetry across CrowdStrike, Splunk, AWS GuardDuty, and Okta, correlates signals against the MITRE ATT&CK framework, isolates infected hosts within 2 seconds, and drafts full incident response timelines automatically.",
    keyPoints: [
      "Sub-second autonomous threat hunting and host isolation across enterprise endpoints",
      "Suppresses 99%+ of benign false-positive alarms using behavioral baseline embeddings",
      "Automated CVE vulnerability triage and emergency patch generation for open PRs",
      "Continuous MITRE ATT&CK matrix mapping and Zero-Trust access token revocation"
    ]
  },
  swarmTiers: [
    {
      tier: "01",
      name: "Threat Perception",
      role: "SIEM & EDR Stream Ingestor",
      description: "Ingests millions of EPS (events per second) across CrowdStrike, SentinelOne, Splunk, Zeek network logs, and CloudTrail.",
      tech: "Kafka Streaming, Vector Search & Behavioral Ensembles"
    },
    {
      tier: "02",
      name: "Adversary Reasoning",
      role: "MITRE ATT&CK Correlation Engine",
      description: "Maps attacker tactics, techniques, and procedures (TTPs), evaluates lateral movement risk, and constructs attack graphs.",
      tech: "Graph Neural Networks & Threat Intelligence Feeds"
    },
    {
      tier: "03",
      name: "Containment Mesh",
      role: "SOAR Execution Gateway",
      description: "Executes deterministic response actions: host quarantine, firewall rule injection, token revocation, and CVE patching.",
      tech: "API Security Gateways & Scoped EDR Action Enclaves"
    }
  ],
  capabilities: [
    {
      id: "threat-containment",
      tag: "INCIDENT RESPONSE",
      title: "Sub-Second Endpoint Isolation",
      description: "When ransomware or credential dumping is detected, the agent immediately quarantines the host network and kills malicious processes.",
      features: [
        "Isolates compromised workstations via CrowdStrike and SentinelOne APIs in < 2s",
        "Captures forensic memory dump and active network connection state for investigation",
        "Revokes all active Okta, GitHub, and cloud session tokens for the affected user",
        "Reduces attacker dwell time from 21 days to under 2 seconds"
      ],
      image: threatImg,
      metricBadge: "< 2s Containment"
    },
    {
      id: "alert-dedup",
      tag: "SOC EFFICIENCY",
      title: "Neural Alert Correlation & Deduplication",
      description: "Groups thousands of noisy SIEM alerts into a single cohesive incident story, eliminating 99.4% of false-positive alarms.",
      features: [
        "Correlates disparate firewall, email, and authentication logs into an attack timeline",
        "Suppresses routine administrative tasks and authorized developer testing",
        "Calculates objective threat severity scores based on target asset criticality",
        "Eliminates analyst burnout and prevents critical alert fatigue"
      ],
      image: socImg,
      metricBadge: "99.4% Noise Cut"
    },
    {
      id: "vuln-patching",
      tag: "VULNERABILITY MANAGEMENT",
      title: "Autonomous CVE Triage & Remediation",
      description: "Scans codebases and container images for zero-day CVEs, generating verified pull requests to bump vulnerable dependencies safely.",
      features: [
        "Ingests live NIST NVD and GitHub Security Advisory feeds",
        "Determines actual exploitability within your specific application architecture",
        "Generates non-breaking package upgrade pull requests with passing tests",
        "Closes critical vulnerability exposure windows in hours instead of months"
      ],
      image: hsmImg,
      metricBadge: "Instant CVE Patching"
    },
    {
      id: "zero-trust",
      tag: "ACCESS & IDENTITY",
      title: "Zero-Trust Identity & Session Defense",
      description: "Monitors employee login behavior for impossible travel, MFA fatigue attacks, and session token theft, locking accounts proactively.",
      features: [
        "Detects session cookie hijacking and adversary-in-the-middle phishing",
        "Forces step-up biometric FIDO2 authentication on anomalous requests",
        "Automated access revocation for departing or compromised personnel",
        "100% compliance with Zero-Trust NIST 800-207 architecture guidelines"
      ],
      image: networkImg,
      metricBadge: "Zero-Trust Guard"
    }
  ],
  comparison: [
    { metric: "Threat Dwell Time", legacy: "14 to 21 Days (Traditional SOC)", agent: "Sub-Second Isolation (< 2s)" },
    { metric: "Alert Noise & Fatigue", legacy: "50,000+ Unfiltered alarms daily", agent: "99.4% Noise deduplication into incidents" },
    { metric: "Incident Investigation", legacy: "4 to 8 Hours of manual log digging", agent: "Instant automated MITRE ATT&CK graph" },
    { metric: "Vulnerability Patching", legacy: "30 to 90 Days SLA for critical CVEs", agent: "Automated PR patches within 2 hours" },
    { metric: "SOC Staffing", legacy: "Requires 24/7 3-shift human rotation", agent: "Autonomous 24/7/365 tier-1 & 2 coverage" }
  ],
  interactiveDemo: {
    title: "SOC Swarm Defense Studio",
    subtitle: "Launch a simulated cyber attack scenario to see how the SOC Agent detects lateral movement, isolates compromised assets, and remediates vulnerabilities in real time.",
    scenarios: [
      {
        id: "ransomware-intercept",
        title: "Ransomware Lateral Movement Intercept",
        role: "Attack Event: Mimikatz Credential Dumping // FinTech Workstation",
        executionTime: "1.6s",
        humanTime: "4 Hours",
        status: "Host Quarantined & Token Revoked",
        agentsInvolved: ["EDR Threat Ingestor", "CrowdStrike Isolator", "Okta Identity Mesh"],
        planSteps: [
          { step: "CrowdStrike detected unmapped lsass.exe process injection on host #WS-LONDON-402", time: "0.2s" },
          { step: "Correlated signal against MITRE ATT&CK T1003.001 (OS Credential Dumping)", time: "0.4s" },
          { step: "Executed CrowdStrike.isolateHost(id='host_892k1') within 400ms", time: "0.4s" },
          { step: "Revoked user Okta active sessions, GitHub SSH keys, and reset Active Directory password", time: "0.6s" }
        ],
        outcome: "Host network isolated in 1.6s. Prevented domain-wide ransomware deployment."
      },
      {
        id: "cve-patch",
        title: "Critical OpenSSL 0-Day Auto-Patching",
        role: "Vulnerability: Critical Remote Code Execution (CVSS 9.8)",
        executionTime: "4.2s",
        humanTime: "3 Weeks",
        status: "PR Opened with Passing Tests",
        agentsInvolved: ["NVD Advisory Scanner", "Docker Layer Healer", "Git PR Agent"],
        planSteps: [
          { step: "Ingested NIST CVE bulletin for OpenSSL buffer overflow vulnerability", time: "0.6s" },
          { step: "Scanned 84 production Docker images: Found 12 services using vulnerable base Alpine image", time: "1.4s" },
          { step: "Generated Dockerfile patch updating to secure base image tag v3.19.2", time: "1.1s" },
          { step: "Ran integration test suites and opened automated GitHub PR #4092 with CVE advisory brief", time: "1.1s" }
        ],
        outcome: "12 vulnerable microservices patched with passing CI tests in 4.2 seconds."
      },
      {
        id: "token-theft",
        title: "Session Cookie Hijack & Impossible Travel",
        role: "Target: Lead DevOps Engineer AWS Console Session",
        executionTime: "1.9s",
        humanTime: "1 Day",
        status: "Session Blocked & IP Banned",
        agentsInvolved: ["CloudTrail Anomaly Detector", "AWS IAM Enclave", "Security Alert Bot"],
        planSteps: [
          { step: "Detected AWS Console login from Ashburn, Virginia (IP: 198.51.100.2)", time: "0.3s" },
          { step: "Discovered active session token used 12 minutes later from Lagos, Nigeria (Impossible Travel)", time: "0.5s" },
          { step: "Executed AWS IAM: InvalidateStsSessions(user='devops.lead') and blacklisted IP range", time: "0.6s" },
          { step: "Pushed urgent verification notification to engineer's mobile authenticator", time: "0.5s" }
        ],
        outcome: "Hijacked session invalidated instantly. Zero unauthorized cloud modifications executed."
      }
    ]
  },
  integrations: [
    { name: "CrowdStrike Falcon", type: "EDR & Host Isolation" },
    { name: "Splunk & Microsoft Sentinel", type: "SIEM Log Streaming" },
    { name: "Okta & Entra ID", type: "Identity & Token Revoke" },
    { name: "AWS GuardDuty & CloudTrail", type: "Cloud Security Telemetry" },
    { name: "Palo Alto Networks & Cloudflare", type: "Firewall & WAF Mesh" },
    { name: "Snyk & Wiz", type: "Vulnerability Scanning" }
  ],
  governance: [
    { label: "MITRE ATT&CK Mapped", desc: "Every detection aligned to standard adversary tactics" },
    { label: "SOC 2 Type II & ISO 27001", desc: "Audited enterprise cryptographic security controls" },
    { label: "Air-Gapped Forensic Enclaves", desc: "Malware analysis runs in isolated detonation sandboxes" },
    { label: "Human-in-the-Loop Override", desc: "CISO emergency controls to restore isolated systems instantly" }
  ],
  caseStudy: {
    client: "Global Financial Infrastructure Network",
    industry: "Banking & Financial Services",
    headline: "How a Global Payment Network Reduced Threat Dwell Time from 18 Days to Under 2 Seconds",
    quote: "DevOpsTRIO SOC Agent gives our security team an unfair advantage. It investigates and neutralizes complex credential theft before human analysts can even open the ticket.",
    author: "Chief Information Security Officer (CISO)",
    company: "Publicly Traded Payment Giant",
    image: caseImg,
    results: [
      { stat: "< 2s", label: "Threat containment turnaround" },
      { stat: "99.4%", label: "False-positive alert reduction" },
      { stat: "$6.2M", label: "Estimated breach prevention value" }
    ]
  }
};
