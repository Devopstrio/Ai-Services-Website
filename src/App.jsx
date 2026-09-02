import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import AIService from "./components/home/AIService";
import TrustedPartners from "./components/home/TrustedPartners";
import EnterpriseOverview from "./components/home/EnterpriseOverview";
import Capabilities from "./components/home/Capabilities";
import EnterpriseSolutions from "./components/home/EnterpriseSolutions";
import SuccessStory from "./components/home/SuccessStory";
import SHero from "./components/services/SHero";
import AIInAction from "./components/services/AIinaction";
import IndustriesHero from "./components/industries/IndustriesHero";
import CapabilitiesOverview from "./components/capabilities/CapabilitiesOverview";
import CapabilityDetail from "./components/capabilities/CapabilityDetail";
import AgentsOverview from "./components/agents/AgentsOverview";
import AgentDetail from "./components/agents/AgentDetail";
import InnovationOverview from "./components/innovation/InnovationOverview";
import InnovationDetail from "./components/innovation/InnovationDetail";
import IntegrationOverview from "./components/integration/IntegrationOverview";
import IntegrationDetail from "./components/integration/IntegrationDetail";
import SolutionsOverview from "./components/solutions/SolutionsOverview";
import SolutionDetail from "./components/solutions/SolutionDetail";
import ProductsOverview from "./components/products/ProductsOverview";
import ProductDetail from "./components/products/ProductDetail";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AIService />
                <TrustedPartners />
                <EnterpriseSolutions />
                
                <EnterpriseOverview />
                <Capabilities />
                <SuccessStory />
              </>
            }
          />
          <Route path="/services" element={<SHero />} />
          
          {/* AI Products Routes */}
          <Route path="/products/overview" element={<ProductsOverview />} />
          <Route path="/products/business-platforms/:productId" element={<ProductDetail />} />
          <Route path="/products/productivity-ai/:productId" element={<ProductDetail />} />
          <Route path="/products/business-ai/:productId" element={<ProductDetail />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/*" element={<ProductDetail />} />
          
          {/* Enterprise Solutions Routes */}
          <Route path="/solutions/overview" element={<SolutionsOverview />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
          <Route path="/solutions/*" element={<SolutionsOverview />} />
          
          {/* AI Agents Routes */}
          <Route path="/agents/overview" element={<AgentsOverview />} />
          <Route path="/agents/business-operations/:agentId" element={<AgentDetail />} />
          <Route path="/agents/engineering-it/:agentId" element={<AgentDetail />} />
          <Route path="/agents/productivity/:agentId" element={<AgentDetail />} />
          <Route path="/agents/:agentId" element={<AgentDetail />} />
          <Route path="/agents/*" element={<AgentDetail />} />
          
          {/* AI Capabilities Routes */}
          <Route path="/capabilities/overview" element={<CapabilitiesOverview />} />
          <Route path="/capabilities/:serviceId" element={<CapabilityDetail />} />
          <Route path="/capabilities/*" element={<CapabilitiesOverview />} />

          {/* Innovation Lab Routes */}
          <Route path="/innovation/overview" element={<InnovationOverview />} />
          <Route path="/innovation/:innovationId" element={<InnovationDetail />} />
          <Route path="/innovation/*" element={<InnovationOverview />} />

          {/* Integration Routes */}
          <Route path="/integration/overview" element={<IntegrationOverview />} />
          <Route path="/integration/:integrationId" element={<IntegrationDetail />} />
          <Route path="/integration/*" element={<IntegrationOverview />} />
          <Route path="/integrations/overview" element={<IntegrationOverview />} />
          <Route path="/integrations/:integrationId" element={<IntegrationDetail />} />
          <Route path="/integrations/*" element={<IntegrationOverview />} />
          
          {/* Industries Routes - Using dynamic routing */}
          <Route path="/industries" element={<IndustriesHero />} />
          <Route path="/industries/overview" element={<IndustriesHero />} />
          <Route path="/industries/:industry" element={<IndustriesHero />} />
          
          {/* If you want to handle all sub-paths dynamically */}
          <Route path="/industries/*" element={<IndustriesHero />} />
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;