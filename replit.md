# Overview

This is a full-stack car listing notification service called Amiquus that tracks used car listings across multiple websites and sends real-time alerts to users via Telegram. The application allows users to set up custom search criteria and receive instant notifications when matching cars become available.

The system is built as a modern TypeScript monorepo with a React frontend and Express backend, using PostgreSQL (via Neon) for data persistence. It integrates with external services including Stripe for payments, Brevo for email notifications, and Telegram for instant messaging.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: React 18 with TypeScript, Vite as the build tool, and TanStack Query for state management.

**UI Framework**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling. The theme uses CSS variables for customization with support for dark mode via class-based theming.

**Routing**: Client-side routing with React Router, configured for SPA behavior with fallback to index.html.

**Internationalization**: Multi-language support with translation files for 40+ languages stored in the `shared/translations` directory. Translation system uses structured objects with nested keys for organizing UI text.

**Form Handling**: React Hook Form with Zod resolvers for type-safe form validation.

**State Management**: TanStack Query handles server state with built-in caching, while React Context/hooks manage local UI state.

## Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js.

**API Design**: RESTful API architecture with endpoints organized by resource type.

**Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`. Migrations stored in the `migrations` directory.

**Authentication**: Session-based authentication using bcrypt for password hashing. User credentials stored securely with hashed passwords.

**Build Process**: Server code bundled with esbuild for production deployment, compiling to ESM format with external packages.

## Data Storage

**Primary Database**: PostgreSQL hosted on Neon serverless platform via `@neondatabase/serverless` driver.

**Schema Management**: Drizzle Kit manages schema migrations with push-based deployment strategy.

**Connection**: Database URL provided via environment variable `DATABASE_URL`.

## External Dependencies

**Payment Processing**: Stripe integration via `@stripe/stripe-js` and `@stripe/react-stripe-js` for handling subscriptions and payments.

**Email Service**: Brevo (formerly Sendinblue) via `@getbrevo/brevo` SDK for transactional emails and notifications.

**Messaging Platform**: Telegram Bot API for delivering real-time car listing alerts to users.

**Deployment Platform**: Vercel for hosting with specialized build configuration:
- API routes handled by Vercel serverless functions
- Static assets served from `dist/public`
- Rewrites configured to route API calls to `/api/index.ts`

**Analytics**: Google Analytics (gtag.js) with tag ID `G-XGFR0QKE05` for tracking user behavior.

**Security**: Google reCAPTCHA v3 integration for bot protection on forms.

**Consent Management**: Consent Manager for GDPR compliance with cookie consent tracking.

## Development Tools

**Type Checking**: TypeScript with strict mode enabled, shared types between client and server via path aliases.

**Code Quality**: TSConfig configured with incremental builds and build info caching.

**Development Environment**: Replit-specific plugins for runtime error overlay and code mapping during development.

**Hot Reload**: Vite HMR for frontend, tsx for backend development server.

## Architectural Decisions

**Monorepo Structure**: Single repository with `client/`, `server/`, and `shared/` directories enables code sharing and consistent type definitions across frontend and backend.

**Serverless Deployment**: Vercel's serverless functions chosen for scalability and zero-configuration deployment, with static assets pre-built for optimal performance.

**Type Safety**: End-to-end TypeScript provides compile-time guarantees and improved developer experience through shared interfaces and schemas.

**Component Library**: Shadcn/ui selected for its unstyled, accessible components that can be customized via Tailwind CSS rather than fighting against opinionated styling.

**Database Choice**: Neon PostgreSQL serverless chosen for automatic scaling, branching capabilities, and generous free tier suitable for the use case.

**Real-time Notifications**: Telegram chosen over email/SMS for instant delivery, rich formatting, and no per-message costs.