const predictiveAnalytics = {
  id: "predictive-analytics",
  breadcrumbs: ["AI Capabilities", "Predictive Analytics"],
  hero: {
    titleLight: "Predictive",
    titleBold: "Analytics",
    description: "Don't just analyze the past; predict the future. We build advanced statistical models that forecast trends, anticipate risks, and optimize enterprise decision-making.",
  },
  inAction: {
    headingLight: "Forecast with",
    headingRed: "Precision",
    paragraph: "Looking in the rearview mirror is not enough. DevOpsTRIO leverages historical data, external market signals, and machine learning to build predictive models that give you a view into the future. From forecasting supply chain disruptions months in advance to predicting exactly which customers are about to churn, we turn uncertainty into calculated, actionable strategy.",
    buttonText: "See Forecasting Models",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "92%", label: "Forecast Accuracy", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop" },
    { value: "30 Days", label: "Early Warning System", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
    { value: "15%", label: "Inventory Cost Reduction", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "24/7", label: "Continuous Scoring", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Predictive",
    titleRed: "Use Cases",
    items: [
      { title: "Supply Chain", desc: "Forecast demand surges and reroute logistics automatically before stockouts occur.", icon: "database" },
      { title: "Marketing & Sales", desc: "Score leads in real-time based on their likelihood to convert, focusing sales efforts on high-value targets.", icon: "users" },
      { title: "Heavy Industry", desc: "Predict machinery failure weeks before it happens, scheduling maintenance during planned downtime.", icon: "cpu" }
    ]
  },
  benefits: {
    titleLight: "The Predictive",
    titleRed: "Advantage",
    items: [
      { title: "Proactive Strategy", desc: "Stop reacting to crises. Identify risks and opportunities weeks or months before your competitors do.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
      { title: "Optimized Resources", desc: "Allocate budget, personnel, and inventory exactly where they will be needed, minimizing waste.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      { title: "Data-Backed Decisions", desc: "Remove gut-feel from executive planning. Use statistically rigorous models to justify major investments.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Analytics",
    titleRed: "Capabilities",
    items: [
      { badge: "TIME SERIES", title: "Time Series Forecasting", body: "Predict future values based on historical timestamps, accounting for seasonality and trends.", more: "We use ARIMA, Prophet, and LSTM neural networks for highly accurate sales and weather forecasting.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "CHURN", title: "Churn Prediction", body: "Identify exactly which customers are most likely to cancel their subscription in the next 30 days.", more: "Integrate the model directly into your CRM to automatically trigger personalized retention campaigns.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "MAINTENANCE", title: "Predictive Maintenance", body: "Analyze IoT sensor data to predict when a physical asset (server, turbine, vehicle) will fail.", more: "Save millions by replacing parts right before they break, avoiding catastrophic unplanned downtime.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RISK", title: "Risk & Credit Scoring", body: "Calculate the probability of default or fraud for individual transactions or loan applications in real-time.", more: "We build highly interpretable models (XGBoost) that comply with strict financial regulations.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "PRICING", title: "Dynamic Pricing", body: "Automatically adjust product prices based on competitor data, current demand, and inventory levels.", more: "Maximize margins continuously without requiring manual intervention from pricing analysts.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SIMULATION", title: "Monte Carlo Simulations", body: "Model the probability of different outcomes in highly uncertain environments.", more: "Run millions of simulated scenarios to stress-test your financial models against massive market shocks.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Analytics",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Reducing Airline Delays", desc: "Using predictive maintenance to repair jet engines before failure, saving $50M annually.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "The Limits of Time Series", desc: "When to use traditional ARIMA vs Deep Learning LSTMs for forecasting.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "External Data Signals", desc: "Improving demand forecasting by integrating weather data and social media sentiment.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Building a Lead Scoring Engine", desc: "A technical guide to implementing real-time predictive scoring in Salesforce.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Dynamic Pricing in Retail", desc: "How a major grocer optimized markdown pricing to reduce food waste by 30%.", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Future of Analytics", desc: "Moving from dashboards that show the past to prescriptive models that dictate the future.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default predictiveAnalytics;