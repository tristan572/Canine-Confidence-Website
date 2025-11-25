# Canine Confidence Website

## Overview

This is a comprehensive dog training business website built with a modern full-stack architecture. The application serves as a complete business solution for Canine Confidence, a North Brisbane-based dog training service. It features service booking, product sales with e-commerce functionality, blog content, and integrated payment processing through Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with a custom design system based on shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **UI Library**: Comprehensive component library based on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API**: RESTful API with Express routes
- **Session Management**: express-session with PostgreSQL store

### Key Design Decisions
- **Monorepo Structure**: Client, server, and shared code in a single repository
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern UI**: shadcn/ui component system for consistent, accessible design
- **Database-First**: Schema-driven development with Drizzle ORM

## Key Components

### Database Schema (shared/schema.ts)
- **Services**: Training services with categories, pricing, and features
- **Products**: E-commerce products with inventory management
- **Packages**: Training package deals with multiple sessions
- **Blog Posts**: Content management for blog articles
- **Bookings**: Service appointment scheduling
- **Consultations**: Free consultation requests
- **Contact Submissions**: General contact form submissions
- **Cart Items**: E-commerce shopping cart functionality
- **Testimonials**: Customer reviews and feedback
- **Subscribers**: Newsletter email subscribers with subscription dates

### Frontend Pages
- **Home**: Landing page with service highlights, testimonials (prominently displayed after hero), and booking widget
- **Services**: Detailed service listings with booking integration
- **Packages**: Training package offerings with online booking
- **Products**: E-commerce catalog with cart functionality
- **Blog**: Content marketing with search, filtering, and newsletter subscription form
- **About**: Company information and team details
- **Contact**: Contact forms, business information, interactive service area map, and video consultation details
- **Checkout**: Stripe-powered payment processing
- **Admin**: Content management, booking widget setup, and newsletter subscriber management with CSV export
- **Location Pages**: SEO-optimized suburb-specific pages for local search rankings
  - Sandgate/Shorncliffe (/dog-training-sandgate) - Live
  - Northgate (/dog-training-northgate) - Live
  - Future locations: Boondall, Ascot, Aspley, Chermside (planned)

### API Endpoints
- Services CRUD operations
- Products and inventory management
- Package management
- Blog post management
- Booking and consultation handling
- Shopping cart operations
- Stripe payment processing
- Contact form submissions
- Newsletter subscription management

## Data Flow

### E-commerce Flow
1. Products displayed from database via API
2. Items added to session-based shopping cart
3. Cart persisted in PostgreSQL with session ID
4. Checkout process integrated with Stripe
5. Payment confirmation and cart clearing

### Booking Flow
1. Services displayed with pricing and details
2. SimplyBook.me widget integration for appointment scheduling
3. Booking confirmation and notification system

### Content Management
1. Blog posts stored in database with rich metadata
2. Dynamic content rendering with search and filtering
3. SEO-optimized content structure
4. Newsletter subscription system with email collection and CSV export for integration with email marketing platforms

## Business Information

### Service Area
- **Location**: Boondall, Brisbane 4034
- **Service Radius**: 20km from base location
- **Travel Policy**: Travel beyond 10km may incur additional charges
- **Remote Services**: Video consultations available worldwide

### Interactive Map
- Leaflet.js integration with OpenStreetMap
- Visual 20km radius display
- Located on Contact page for client convenience

## External Dependencies

### Mapping
- **Leaflet**: Open-source interactive maps
- **react-leaflet**: React wrapper for Leaflet (v4.2.1)
- **OpenStreetMap**: Free map tiles (no API keys required)

### Payment Processing
- **Stripe**: Complete payment processing integration
- **@stripe/stripe-js**: Frontend Stripe integration
- **@stripe/react-stripe-js**: React-specific Stripe components

### Booking System
- **SimplyBook.me**: Third-party booking widget integration
- Custom widget configuration for branded experience

### Email Notifications
- **Resend**: Transactional email service for form notifications
- **Service**: Automatic email alerts to info@canineconfidence.com.au
- **Notifications sent for**:
  - Booking requests (all customer and dog details)
  - Free consultation requests (contact info and concerns)
  - Contact form submissions (general inquiries)
- **Security**: All user input is HTML-escaped to prevent injection attacks
- **Configuration**: RESEND_API_KEY stored as environment secret
- **Important**: The "from" domain (noreply@canineconfidence.com.au) MUST be verified in Resend before production deployment. Without domain verification, emails will fail to send.
- **Implementation**: Email service in `server/email.ts`, integrated into API routes with graceful error handling

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon system
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the application
- **ESBuild**: Production bundling
- **Drizzle Kit**: Database migration and management

## Performance Optimizations

### Code Splitting
- **Route-based code splitting**: All pages are lazy-loaded using React.lazy() and Suspense
- **Reduced initial JS bundle**: Only essential code loads on first visit
- **Dynamic imports**: Each page loads on-demand when navigated to

### Image Optimization
- **LCP optimization**: Hero images use `loading="eager"` and `decoding="sync"` for fastest paint
- **Image compression**: All images compressed to ~85% quality at max 1200px width (reduced from ~70MB to ~8.5MB)
- **Lazy loading**: Below-fold images use `loading="lazy"` to defer loading
- **Aspect ratios**: All image containers have explicit aspect-ratio CSS to prevent CLS
- **Dimensions**: All images specify width/height to reserve space during load

### Resource Hints (index.html)
- **Preconnect**: fonts.googleapis.com, fonts.gstatic.com, replit.com
- **DNS Prefetch**: canineconfidence.simplybook.net
- **Preload**: Hero image and fonts for faster LCP
- **Critical CSS**: Inline styles for above-the-fold content

### Caching Strategy
- **Static assets**: 1-year cache for attached_assets directory
- **Immutable files**: JS/CSS bundles with hash-based naming

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Assets**: Static assets served from `attached_assets` directory

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Stripe integration via `STRIPE_SECRET_KEY` and `VITE_STRIPE_PUBLIC_KEY`
- Production-ready configuration with proper error handling

### Database Management
- Drizzle migrations in `migrations` directory
- Schema definitions in `shared/schema.ts`
- Push-based deployment with `db:push` command

### Development vs Production
- Development: Hot module replacement with Vite middleware
- Production: Static file serving with Express
- Environment-specific logging and error handling
- Replit-specific development features and banner integration

## Local SEO Strategy

### Location Pages
- **Purpose**: Suburb-specific landing pages for local search engine optimization
- **Structure**: Each location page targets specific suburbs with localized content
- **Configuration**: Centralized location management in `client/src/config/locations.ts`
- **Features**:
  - LocalBusiness schema with suburb-specific data
  - Absolute canonical URLs for proper SEO signaling
  - Suburb-specific copy highlighting local landmarks and challenges
  - Direct booking links to SimplyBook.me services/packages
  - Internal links to main services and packages pages
  
### Current Locations
- **Sandgate/Shorncliffe** (/dog-training-sandgate)
  - Features: Bayside Adventure Walk, Confident Start Program
  - Local highlights: Shorncliffe Pier, Sandgate Foreshore, Flinders Parade
  - Target keywords: "dog training Sandgate", "dog trainer Shorncliffe"

- **Northgate** (/dog-training-northgate)
  - Features: Kalinga Park Walk & Train, 1-on-1 Coaching Sessions, Initial Canine Success Assessment
  - Local highlights: Kalinga Park, Kedron Brook bikeway, Nundah
  - Target keywords: "dog training Northgate", "dog trainer Nundah", "Kalinga Park dog training"
  - Services: Walk & Train (Service ID 6), Private Coaching (Service ID 7), Assessment (Service ID 16)

### Scalability
- Location configuration in `client/src/config/locations.ts` defines all service areas
- Footer Service Areas section automatically generated from config
- Adding new location pages requires:
  1. Create new page component (copy from sandgate.tsx template)
  2. Add route to App.tsx
  3. Update location config `isLive: true`
  4. Customize content for suburb-specific landmarks and challenges