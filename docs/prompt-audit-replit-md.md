# Prompt audit: `replit.md` (2026-09-26)

## Assumptions

- **Scope:** the whole repo. The only prompt surface is `replit.md`, the agent instruction file the Replit Agent reads. Nothing else was found: no `CLAUDE.md`/`AGENTS.md`, no `.claude/` skills, commands or rules, no LLM API calls, and no Anthropic or other LLM SDK dependencies. Also checked for non-Anthropic provider markers (OpenAI, Gemini and so on) and found none. `.replit` is platform run config, not prompt text.
- **Target model:** no model is named and nothing in the repo pins one. The coding-agent file was audited against the current Claude generation (Claude Opus 5.5). All findings below are stale facts, so they don't depend on which model reads the file.
- **Edits:** applied to `replit.md` on 2026-09-26 at the owner's request (all 8 findings).

## Summary

Nothing in `replit.md` is dated prompting: no pressure language, no scaffolds, no fossils. The brand-voice rules on line 11 are recent (2026-08-05), come from the owner, and target a real problem in current-model copy, so they stay. The problem is **stale facts**. Several sections from the 2026-05-18 snapshot describe a site that has since changed. An agent reading them would hunt for Inter fonts, a `requestIdleCallback` deferral and a `RESEND_AUDIENCE_ID` that don't exist, would think Ascot, Aspley and Chermside are unbuilt, and would copy a 700-line page instead of using the shared `LocalTrainingPage` component.

The three with the most impact:
1. **Location pages (L59–61, L200–226):** says Ascot, Aspley and Chermside are "planned". All three are live, and new pages use the shared component.
2. **Performance notes (L144–157):** says Inter is the site font and that ReactMarkdown was removed and queries are deferred. Manrope is the site font, ReactMarkdown is used again, and there is no deferral.
3. **Newsletter config (L117):** names `RESEND_AUDIENCE_ID`, which no code reads. Sign-ups go to MailerLite.

Counts: Group 1 (dated prompt text): 0 · Group 2 (stale config facts): 8 · Group 3 (tool descriptions): not applicable · Group 4 (request config): not applicable.

## Findings

| # | Location | Evidence | Pattern | Why obsolete | Confidence | Action |
|---|---|---|---|---|---|---|
| 1 | `replit.md:59-61` | "Future locations: Boondall, Ascot, Aspley, Chermside (planned)" | G2 Volatile specifics | `client/src/config/locations.ts` sets Ascot, Aspley and Chermside to `isLive: true`, and `App.tsx:109-111` routes them. Only Boondall is planned. | High | rewrite |
| 2 | `replit.md:222-226` (+ L200 list) | "Create new page component (copy from sandgate.tsx template)" | G2 Volatile specifics | `ascot.tsx` and `aspley.tsx` (68 lines each) render the shared `LocalTrainingPage` component. Copying `sandgate.tsx` (674 lines) is the old pattern. The "Current Locations" list also leaves out Ascot and Aspley. | Medium | rewrite + add |
| 3 | `replit.md:144` | "Removed ReactMarkdown: Plain JSX used for package descriptions" | G2 Volatile specifics | `react-markdown` is in `package.json`. `formatted-text.tsx` uses it, and `packages.tsx:79` renders package descriptions with it. | High | remove |
| 4 | `replit.md:145-146` | "Deferred queries … using requestIdleCallback" | G2 Volatile specifics | `requestIdleCallback` appears nowhere in `client/src`. `home.tsx:95-100` fetches testimonials and blog posts straight away. | High | remove |
| 5 | `replit.md:149-152, 157` | "Self-hosted Inter fonts … inter-latin-{400..700}.woff2 … Inter font" | G2 Volatile specifics | Since the "Warm Professional" redesign, Manrope is the site font (`index.css:6`, `index.html:50,55`) and Fraunces italic is used for quotes. The Inter files are still on disk but unused. | High | rewrite |
| 6 | `replit.md:155` | "Preconnect: replit.com" | G2 Volatile specifics | `client/index.html` has no preconnect hint. | High | remove |
| 7 | `replit.md:117` | "RESEND_API_KEY and RESEND_AUDIENCE_ID stored as environment secrets" | G2 Volatile specifics | No code reads `RESEND_AUDIENCE_ID`. Newsletter sign-ups use `server/mailerlite.ts` with `MAILERLITE_API_KEY` and `MAILERLITE_GROUP_ID`. | High | rewrite |
| 8 | `replit.md:40, 46` vs `replit.md:5` | "Products: E-commerce products with inventory management" / "Cart Items: E-commerce shopping cart functionality" | G2 Contradiction (inside the file) | Line 5 (added 2026-07-11, per git blame) says e-commerce was removed and the tables are unused. The older schema lines still describe it as a working feature. | High | rewrite |

### Reviewed and kept (not findings)

- **L11 brand-voice rules** ("Never use the parallel construction…", banned sales terms). These are business voice constraints for public copy. The owner added them on 2026-08-05 against current-model habits, so the reason for them is clear and still applies. Keep list items 1 and 5.
- **L118 "Important: … MUST be verified in Resend"**. This is a real environment requirement with its reason next to it. It stays.
- **L177 "Drizzle migrations in `migrations` directory"**. The folder is missing, but `drizzle.config.ts` generates it there (`out: "./migrations"`). Generated paths don't count as contradicted.

## Proposed diff

One hunk per finding. Applied.

```diff
--- a/replit.md
+++ b/replit.md
@@ -37,13 +37,13 @@
 
 ### Database Schema (shared/schema.ts)
 - **Services**: Training services with categories, pricing, and features
-- **Products**: E-commerce products with inventory management
+- **Products**: Unused (e-commerce was removed; table kept for a possible future shop)
 - **Packages**: Training package deals with multiple sessions
 - **Blog Posts**: Content management for blog articles
 - **Bookings**: Service appointment scheduling
 - **Consultations**: Free consultation requests
 - **Contact Submissions**: General contact form submissions
-- **Cart Items**: E-commerce shopping cart functionality
+- **Cart Items**: Unused (e-commerce was removed; table kept for a possible future shop)
 - **Testimonials**: Customer reviews and feedback
 - **Subscribers**: Newsletter email subscribers with subscription dates
 
@@ -56,9 +56,9 @@
 - **Contact**: Contact forms, business information, interactive service area map, and video consultation details
 - **Admin**: Content management, booking widget setup, and newsletter subscriber management with CSV export (requires `ADMIN_USERNAME`/`ADMIN_PASSWORD`)
 - **Location Pages**: SEO-optimized suburb-specific pages for local search rankings
-  - Sandgate/Shorncliffe (/dog-training-sandgate) - Live
-  - Northgate (/dog-training-northgate) - Live
-  - Future locations: Boondall, Ascot, Aspley, Chermside (planned)
+  - Live: Sandgate/Shorncliffe, Northgate, Chermside, Ascot, Aspley
+  - Planned: Boondall
+  - `client/src/config/locations.ts` is the source of truth for which locations are live
 
 ### API Endpoints
 - Services CRUD operations
@@ -114,7 +114,7 @@
   - Free consultation requests (contact info and concerns)
   - Contact form submissions (general inquiries)
 - **Security**: All user input is HTML-escaped to prevent injection attacks
-- **Configuration**: RESEND_API_KEY and RESEND_AUDIENCE_ID stored as environment secrets
+- **Configuration**: RESEND_API_KEY stored as an environment secret. Newsletter sign-ups sync to MailerLite (`server/mailerlite.ts`) via MAILERLITE_API_KEY and MAILERLITE_GROUP_ID
 - **Important**: The "from" domain (noreply@canineconfidence.com.au) MUST be verified in Resend before production deployment. Without domain verification, emails will fail to send.
 - **Implementation**: Email service in `server/email.ts`, integrated into API routes with graceful error handling
 
@@ -140,21 +140,15 @@
 - **Lazy loading**: Below-fold images use `loading="lazy"` to defer loading
 - **Dimensions**: All images specify width/height to prevent layout shift (CLS)
 
-### JavaScript Bundle Optimization
-- **Removed ReactMarkdown**: Plain JSX used for package descriptions (saves ~50KB)
-- **Deferred queries**: Non-critical API calls (testimonials, blog) load after initial paint using requestIdleCallback
-- **Critical queries only**: Services and packages load immediately for above-fold content
-
 ### Font Optimization
-- **Self-hosted Inter fonts**: Eliminated render-blocking Google Fonts CSS
-- **Font files**: /attached_assets/inter-latin-{400,500,600,700}.woff2
+- **Self-hosted fonts**: Manrope (variable, site font) and Fraunces italic (quotes only); no Google Fonts CSS
+- **Font files**: /attached_assets/manrope-latin-wght.woff2, /attached_assets/fraunces-latin-400-italic.woff2
 - **font-display: swap**: Text renders immediately with fallback font
-- **Font preload**: Primary font (400 weight) preloaded in index.html
+- **Font preload**: Manrope preloaded in index.html
 
 ### Resource Hints (index.html)
-- **Preconnect**: replit.com
 - **DNS Prefetch**: canineconfidence.simplybook.net
-- **Preload**: Hero image (responsive with media queries) and Inter font
+- **Preload**: Hero image (responsive with media queries) and Manrope font
 - **Critical CSS**: Inline styles for above-the-fold content
 
 ### Caching Strategy
@@ -209,6 +203,9 @@
   - Target keywords: "dog training Northgate", "dog trainer Nundah", "Kalinga Park dog training"
   - Services: Walk & Train (Service ID 6), Private Coaching (Service ID 7), Assessment (Service ID 16)
 
+- **Ascot** (/dog-training-ascot) and **Aspley** (/dog-training-aspley)
+  - Built on the shared `LocalTrainingPage` component (`client/src/components/locations/local-training-page.tsx`)
+
 - **Chermside** (/dog-training-chermside)
   - Features: Urban dog training, apartment living skills, 1-on-1 Coaching Sessions
   - Local highlights: Westfield Chermside, 7th Brigade Park, Gympie Road
@@ -220,7 +217,7 @@
 - Location configuration in `client/src/config/locations.ts` defines all service areas
 - Footer Service Areas section automatically generated from config
 - Adding new location pages requires:
-  1. Create new page component (copy from sandgate.tsx template)
+  1. Create a page that renders `LocalTrainingPage` with suburb-specific props (see `ascot.tsx`)
   2. Add route to App.tsx
   3. Update location config `isLive: true`
   4. Customize content for suburb-specific landmarks and challenges
```

## Verify after applying

Each item is a fact check against the repo, so no model probe is needed. Re-run `grep -rn requestIdleCallback client/src`, check `locations.ts` for `isLive`, and check `index.html` for the font preload. Then confirm that `RESEND_AUDIENCE_ID` can be deleted from the hosting provider's secrets.
