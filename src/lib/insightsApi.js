// API Backend Client for MediaHub / Newsletter Microservice

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net";

const COMPANY_ID = import.meta.env.VITE_COMPANY_ID || "DP-901265";

class InsightsApi {
  constructor(baseUrl = API_BASE_URL, companyId = COMPANY_ID) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
    this.companyId = companyId;
  }

  async fetchApi(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };

    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      let errMsg = `Request failed with status ${res.status}`;
      try {
        const errJson = await res.json();
        errMsg = errJson.message || errJson.error || errMsg;
      } catch {
        // ignore
      }
      if (options.throwError !== false) {
        throw new Error(errMsg);
      }
      return null;
    }

    try {
      return await res.json();
    } catch {
      return null;
    }
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
