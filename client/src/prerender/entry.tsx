// Server-side prerender entry. Built separately (vite.prerender.config.ts) and
// loaded by server/seo.ts so crawlers that do not run JavaScript receive the
// same copy the React pages display. The page components themselves are the
// single source of truth for wording; nothing here adds or rewrites copy.
import type { ComponentType } from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import Puppy from "@/pages/puppy";
import BehaviourObedience from "@/pages/behaviour-obedience";
import WalkingAdventure from "@/pages/walking-adventure";
import ServicesOverview from "@/pages/services-overview";
import PackagesOverview from "@/pages/packages-overview";
import Method from "@/pages/method";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Sandgate from "@/pages/sandgate";
import Northgate from "@/pages/northgate";
import Chermside from "@/pages/chermside";
import Aspley from "@/pages/aspley";
import Ascot from "@/pages/ascot";
import LocalResources from "@/pages/local-resources";
import FAQ from "@/pages/faq";

// Mirrors the routes in App.tsx. /reviews, /blog and /blog/:slug keep their
// existing data-driven prerender in server/seo.ts.
export const PRERENDER_ROUTES: Record<string, ComponentType> = {
  "/": Home,
  "/puppy": Puppy,
  "/behaviour-obedience": BehaviourObedience,
  "/walking-adventure": WalkingAdventure,
  "/services": ServicesOverview,
  "/packages": PackagesOverview,
  "/method": Method,
  "/about": About,
  "/contact": Contact,
  "/privacy": Privacy,
  "/terms": Terms,
  "/dog-training-sandgate": Sandgate,
  "/dog-training-northgate": Northgate,
  "/dog-training-chermside": Chermside,
  "/dog-training-aspley": Aspley,
  "/dog-training-ascot": Ascot,
  "/local-resources": LocalResources,
  "/faq": FAQ,
};

// Same API responses the client fetches, supplied by the server from storage
// so prices and catalogue details come from one place.
export type PrerenderData = Record<string, unknown>;

export function renderPage(urlPath: string, data: PrerenderData): string | null {
  const Page = PRERENDER_ROUTES[urlPath];
  if (!Page) return null;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        enabled: false,
        queryFn: () => Promise.resolve(null),
      },
    },
  });
  for (const [key, value] of Object.entries(data)) {
    queryClient.setQueryData([key], value);
  }

  return renderToString(
    <HelmetProvider context={{}}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router ssrPath={urlPath}>
            <Page />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );
}
