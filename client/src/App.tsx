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
import Register from "@/pages/Register"
import VerifyEmail from "@/pages/verify-email"
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
import { ProtectedRoute } from "@/lib/protected-route"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute path="/verify-email" component={VerifyEmail} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/setup-alerts" component={SetupAlerts} />
      <ProtectedRoute path="/profile" component={NewProfile} />
      <Route path="/old-profile" component={Profile} />
      {/* <Route path="/test-profile" component={NewProfile} /> */}
      <Route path="/about" component={About} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/faq" component={FAQ} />
      <Route path="/waitlist" component={Waitlist} />
      <Route path="/blog" component={Blog} />
      <Route path="/careers" component={Careers} />
      <Route path="/support" component={Support} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
