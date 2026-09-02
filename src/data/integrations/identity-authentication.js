import heroBg from "../../assets/integrations/auth_hero.jpg";
import oktaImg from "../../assets/integrations/okta_sso.jpg";
import entraImg from "../../assets/integrations/entra_id.jpg";
import auth0Img from "../../assets/integrations/auth0_jwt.jpg";
import cyberarkImg from "../../assets/integrations/cyberark_pam.jpg";
import caseImg from "../../assets/integrations/auth_case.jpg";

export const identityAuthenticationData = {
  id: "identity-authentication",
  category: "Integrations",
  name: "Identity & Authentication",
  tagline: "Zero-Trust SSO Connectors for Okta, Microsoft Entra ID, Auth0 & CyberArk",
  hero: {
    badge: "ENTERPRISE INTEGRATIONS // ZERO-TRUST IDENTITY & AUTH",
    subBadge: "SAML 2.0, OIDC, SCIM 2.0 & PRIVILEGED ACCESS GOVERNANCE",
    titleLight: "Zero-Trust Identity Governance with",
    titleBold: "DevOpsTRIO Identity Integrations",
    description: "Enforce granular role-based access control (RBAC), multi-factor authentication (MFA), automated SCIM user lifecycle provisioning, and privileged access management (PAM) across all enterprise AI agents and developer workflows.",
    bgImage: heroBg,
    liveBadge: "Active Identity Mesh: 99.999% SLA",
    telemetry: {
      avgSyncLatency: "5ms",
      activeWebhooks: "410,000+",
      authProtocol: "SAML 2.0 / OIDC / SCIM",
      securityStandard: "FIPS 140-3 & SOC 2 Type II"
    }
  },
  stats: [
    { value: "< 5ms", label: "SSO Authentication Latency", sub: "Sub-millisecond cryptographic JWT token issuance" },
    { value: "100%", label: "Zero-Trust Protocol Enforcement", sub: "Continuous posture evaluation on every API request" },
    { value: "2M+ Identities", label: "Enterprise Users & Service Accounts", sub: "Managed seamlessly across Okta & Microsoft Entra" },
    { value: "0 Breaches", label: "Uncompromised Enterprise Identity Record", sub: "Protected by hardware MFA & phishing-resistant FIDO2" }
  ],
  connectors: [
    {
      id: "okta-identity",
      name: "Okta Workforce & Customer Identity",
      category: "Enterprise Identity Cloud",
      badge: "Okta OIDC / SCIM 2.0",
      image: oktaImg,
      description: "Seamless integration with Okta Universal Directory, Single Sign-On (SSO), Adaptive MFA, and automated SCIM 2.0 user lifecycle provisioning.",
      protocols: ["OpenID Connect (OIDC)", "SAML 2.0 Assertions", "SCIM 2.0 Lifecycle API"],
      syncCapabilities: [
        "Instant user access provisioning and automated de-provisioning upon role change",
        "Context-aware adaptive MFA triggering for high-privilege AI administrative actions",
        "Granular group and role mapping synchronizing enterprise permissions dynamically"
      ],
      avgLatency: "5ms"
    },
    {
      id: "microsoft-entra-id",
      name: "Microsoft Entra ID (Azure AD)",
      category: "Global Enterprise Directory",
      badge: "Microsoft Graph Identity / Conditional Access",
      image: entraImg,
      description: "Deep integration with Microsoft Entra ID, Conditional Access policies, Privileged Identity Management (PIM), and Workload Identity.",
      protocols: ["Microsoft Graph Auth REST", "OAuth 2.0 PKCE", "Entra Workload Identity OIDC"],
      syncCapabilities: [
        "Seamless SSO across Microsoft 365, Teams, and enterprise cloud applications",
        "Enforces real-time Microsoft Conditional Access risk scores on API requests",
        "Automated just-in-time (JIT) role elevation via Privileged Identity Management"
      ],
      avgLatency: "6ms"
    },
    {
      id: "auth0-connector",
      name: "Auth0 by Okta",
      category: "Developer & Customer Identity",
      badge: "Auth0 Management API v2",
      image: auth0Img,
      description: "Custom authentication flows, passwordless WebAuthn, social logins, and universal login customization with programmable Auth0 Actions.",
      protocols: ["Auth0 Management API", "JWT / JWKS Token Signing", "WebAuthn / Passkeys"],
      syncCapabilities: [
        "Frictionless passkey and biometric login for consumer & B2B AI applications",
        "Custom Auth0 Actions executing automated risk and fraud verification scripts",
        "Multi-tenant organization branding and tenant isolation"
      ],
      avgLatency: "4ms"
    },
    {
      id: "cyberark-pam",
      name: "CyberArk Privileged Access Manager",
      category: "Privileged Access (PAM)",
      badge: "CyberArk REST / Conjur",
      image: cyberarkImg,
      description: "Secure and audit sensitive database credentials, API secrets, and root administrative access used by autonomous background service agents.",
      protocols: ["CyberArk REST API", "CyberArk Conjur Secrets Mesh", "Dynamic Credential Rotation"],
      syncCapabilities: [
        "Autonomous just-in-time credential checkout with automated password rotation",
        "Complete keystroke and session recording for compliance auditing",
        "Zero hardcoded secrets in codebases or CI/CD pipelines"
      ],
      avgLatency: "7ms"
    }
  ],
  interactiveSimulator: {
    title: "Interactive Identity & SCIM Provisioning Studio",
    subtitle: "Select an identity lifecycle event below to observe real-time SCIM user provisioning, SAML token signing, and permission sync.",
    scenarios: [
      {
        id: "scim-provision-sim",
        title: "Okta SCIM User Created ➔ Automated Role & Sandbox Provisioning",
        trigger: "Okta Event: 'User sarah.chen@enterprise.com assigned to AI_RESEARCH_LEAD group'",
        sourceApp: "Okta Universal Directory",
        targetApp: "DevOpsTRIO Agentic Hub",
        executionTime: "52ms",
        status: "200 OK — SCIM 2.0 User Created with Clearance L3",
        payload: {
          schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"],
          userName: "sarah.chen@enterprise.com",
          name: { formatted: "Dr. Sarah Chen" },
          roles: ["AI_RESEARCH_LEAD", "GPU_CLUSTER_ADMIN"],
          groups: ["Security_Clearance_Level_3", "EMEA_Engineering"],
          active: true,
          scim_provision_latency_ms: 52
        }
      }
    ]
  },
  securityProtocols: [
    {
      title: "Phishing-Resistant FIDO2 / WebAuthn MFA",
      desc: "Supports hardware security keys (YubiKey) and biometric passkeys, completely eliminating credential stuffing and phishing risks."
    },
    {
      title: "SCIM 2.0 Instant De-Provisioning Kill-Switch",
      desc: "When an employee departs or changes roles, access to all AI models, databases, and agent memory vectors is terminated in under 50 milliseconds."
    },
    {
      title: "Continuous Conditional Access Risk Scoring",
      desc: "Every API call evaluates device health, IP reputation, and anomalous geolocation before token issuance is permitted."
    },
    {
      title: "FIPS 140-3 Validated Cryptographic Modules",
      desc: "All identity tokens and signature verifications utilize NIST-standardized FIPS 140-3 cryptographic encryption suites."
    }
  ],
  caseStudy: {
    client: "Tier-1 Global Financial Institution ($600B AUM)",
    industry: "Banking & Financial Cybersecurity",
    headline: "How Okta & CyberArk Identity Connectors Enforced Zero-Trust Access for 30,000 Financial Analysts",
    quote: "DevOpsTRIO's identity integrations plugged straight into our Okta and CyberArk infrastructure. We gained total visibility over every AI interaction without compromising our strict banking compliance standards.",
    author: "Chief Information Security Officer",
    company: "Global Investment Banking Leader",
    image: caseImg,
    results: [
      { stat: "100%", label: "Zero-Trust policy enforcement on all AI requests" },
      { stat: "< 5ms", label: "Real-time token validation and permission verification" },
      { stat: "Zero", label: "Credential management overhead for DevOps teams" }
    ]
  }
};
