import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Packages from "@/pages/packages";
import Products from "@/pages/products";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/blog-detail";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Checkout from "@/pages/checkout";
import PaymentSuccess from "@/pages/payment-success";
import Sandgate from "@/pages/sandgate";
import Northgate from "@/pages/northgate";

// Lazy load non-critical pages
const Privacy = lazy(() => import("@/pages/privacy"));
const Admin = lazy(() => import("@/pages/admin"));
const NotFound = lazy(() => import("@/pages/not-found"));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="text-2xl font-bold text-charcoal mb-4">Loading...</div>
    </div>
  </div>
);

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/packages" component={Packages} />
        <Route path="/products" component={Products} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/payment-success" component={PaymentSuccess} />
        <Route path="/dog-training-sandgate" component={Sandgate} />
        <Route path="/dog-training-northgate" component={Northgate} />
        <Route path="/privacy">
          {() => (
            <Suspense fallback={<LoadingFallback />}>
              <Privacy />
            </Suspense>
          )}
        </Route>
        <Route path="/admin">
          {() => (
            <Suspense fallback={<LoadingFallback />}>
              <Admin />
            </Suspense>
          )}
        </Route>
        <Route>
          {() => (
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          )}
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
