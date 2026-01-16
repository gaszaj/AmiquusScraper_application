import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Signup from "@/pages/signup";
import Login from "@/pages/login";
import Register from "@/pages/Register";
import VerifyEmail from "@/pages/verify-email";
import SubscriptionPage from "@/pages/subscription";
import Dashboard from "@/pages/dashboard";
import About from "@/pages/about";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import FAQ from "@/pages/faq";
import Checkout from "@/pages/checkout";
import Subscribe from "@/pages/subscribe";
import SetupAlerts from "@/pages/setup-alerts";
import Profile from "@/pages/Profile";
import NewProfile from "@/pages/new-profile";
import Waitlist from "@/pages/waitlist";
import Blog from "@/pages/blog";
import Careers from "@/pages/careers";
import Support from "@/pages/support";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";
import { LanguageProvider } from "@/components/language-provider";
import CheckSubscriptionPage from "@/pages/check-subscription";
import Refund from "@/pages/refund";
import DodoTestPage from "./pages/test";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute path="/verify-email" component={VerifyEmail} />
      <ProtectedRoute path="/test-dodo" component={DodoTestPage} />
      <ProtectedRoute path="/dashboard" component={NewProfile} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/setup-alerts" component={SetupAlerts} />
      <ProtectedRoute path="/profile" component={NewProfile} />
      <ProtectedRoute path="/edit/:id" component={SubscriptionPage} />
      {/* <Route path="/old-profile" component={Profile} /> */}
      {/* <Route path="/test-profile" component={NewProfile} /> */}
      <Route path="/about" component={About} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/refund" component={Refund} />
      <Route path="/faq" component={FAQ} />
      <Route path="/waitlist" component={Waitlist} />
      <Route path="/blog" component={Blog} />
      <Route path="/careers" component={Careers} />
      <Route path="/support" component={Support} />
      <Route path="/check-subscription" component={CheckSubscriptionPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
