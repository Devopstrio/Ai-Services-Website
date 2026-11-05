// API Backend Client for MediaHub / Newsletter Microservice

const PRIMARY_API_URL = "https://devopstrio.co.uk/api/insights-proxy/api";
const FALLBACK_API_URL = "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net/api";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  PRIMARY_API_URL;

const COMPANY_ID = import.meta.env.VITE_COMPANY_ID || "DP-901265";

class InsightsApi {
  constructor(baseUrl = API_BASE_URL, companyId = COMPANY_ID) {
    let cleanBase = (baseUrl || PRIMARY_API_URL).replace(/\/+$/, "");
    if (!cleanBase.endsWith("/api")) {
      cleanBase = `${cleanBase}/api`;
    }
    this.baseUrl = cleanBase;
    this.companyId = companyId;
  }

  async fetchApi(endpoint, options = {}) {
    let cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    if (cleanEndpoint.startsWith("/api/")) {
      cleanEndpoint = cleanEndpoint.replace(/^\/api/, "");
    }

    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };

    const targetUrls = [
      `${this.baseUrl}${cleanEndpoint}`,
      `${FALLBACK_API_URL}${cleanEndpoint}`,
    ];

    let lastError = null;

    for (const url of targetUrls) {
      try {
        const res = await fetch(url, {
          ...options,
          headers,
        });

        if (res.ok) {
          try {
            return await res.json();
          } catch {
            return { success: true };
          }
        }

        let errMsg = `Request failed with status ${res.status}`;
        try {
          const errJson = await res.json();
          errMsg = errJson.message || errJson.error || errJson.detail || errMsg;
        } catch {
          // ignore
        }
        lastError = new Error(errMsg);
      } catch (networkErr) {
        lastError = networkErr;
      }
    }

    if (options.throwError !== false && lastError) {
      throw lastError;
    }
    return null;
  }

  // 1. Subscribe API Call
  async subscribe(email, sections = [], categories = []) {
    return this.fetchApi(`/public/subscribe`, {
      method: "POST",
      body: JSON.stringify({
        email,
        company_id: this.companyId,
        sections,
        categories,
      }),
      throwError: true,
    });
  }

  // 2. Fetch Existing Subscriber Preferences (if already subscribed)
  async getSubscriberPreferences(email) {
    return this.fetchApi(
      `/public/subscriber-preferences?email=${encodeURIComponent(email)}&company_id=${this.companyId}`,
    );
  }
}

export const insightsApi = new InsightsApi();
export default insightsApi;
