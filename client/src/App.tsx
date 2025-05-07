import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Signup from "@/pages/signup";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import About from "@/pages/about";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import FAQ from "@/pages/faq";
import { AuthProvider } from "@/hooks/use-auth";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </AuthProvider>
  );
}

export default App;
