# NightEvents

NightEvents is a foundation for a full-stack nightlife and city events platform. It is designed for event discovery, ticket purchasing, merchandise, user accounts, community features, loyalty rewards, and admin operations.

This phase intentionally uses placeholder data and starter UI only. Real Supabase data, payments, admin CRUD, loyalty logic, and full community workflows are planned for later phases.

## Tech Stack

Next.js App Router, TypeScript, Tailwind CSS, Supabase, and a Stripe or Yoco-ready payment structure.

## Folder Structure

`app/` contains App Router routes, layouts, public pages, account pages, and admin pages.

`components/` contains reusable layout, card, and UI components.

`features/` contains feature module boundaries for events, merchandise, community, and payments.

`lib/` contains shared utilities and Supabase client setup.

`constants/` contains navigation and placeholder data.

`types/` contains shared TypeScript domain models.

`DATABASE_SCHEMA_PLAN.md` documents planned Supabase tables and relationships.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

No secrets are committed. Payment provider keys are not needed in Phase 1.

## Phase 1 Completed

Created project structure for routes, reusable components, feature modules, utilities, Supabase clients, types, constants, admin pages, and user/community pages.

Added starter pages for home, events listing, event detail, merchandise shop, community, login, register, user dashboard, and admin dashboard.

Added responsive global layout with navbar, footer, mobile menu, and modern dark nightlife styling.

Added TypeScript models for profiles, events, ticket types, merchandise products, orders, community posts, and loyalty points.

Added Supabase browser and server client setup with placeholder environment variables.

Added schema planning documentation for the future database.

Added placeholder event cards, merch cards, community post previews, and admin management cards.

## Suggested Next Phases

1. Create Supabase migrations, RLS policies, and seed data.
2. Connect event, merch, profile, and community pages to Supabase.
3. Implement Supabase Auth for login, registration, profiles, and protected dashboards.
4. Add admin CRUD for events, tickets, merchandise, users, and community moderation.
5. Integrate Stripe or Yoco checkout for ticket and merch orders.
6. Add event attendance tracking and loyalty point rules.
7. Add community posting, comments, reactions, and reporting.
