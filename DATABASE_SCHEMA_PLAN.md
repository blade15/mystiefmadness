# Database Schema Plan

This is a planning document only. No Supabase migrations have been run for Phase 1.

## profiles

Fields: `id uuid primary key references auth.users(id)`, `email text unique not null`, `full_name text`, `username text unique`, `avatar_url text`, `role text default 'attendee'`, `created_at timestamptz default now()`, `updated_at timestamptz default now()`.

Relationships: one profile belongs to one Supabase Auth user. Profiles own ticket orders, merch orders, posts, comments, attendance records, and loyalty entries.

Notes: use Row Level Security so users can read public profile fields and update only their own profile. Admins can manage roles through admin policies.

## events

Fields: `id uuid primary key`, `slug text unique not null`, `title text not null`, `description text`, `venue text`, `city text`, `address text`, `starts_at timestamptz not null`, `ends_at timestamptz`, `category text`, `status text default 'draft'`, `image_url text`, `created_by uuid references profiles(id)`, `created_at timestamptz default now()`, `updated_at timestamptz default now()`.

Relationships: one event has many ticket types, ticket orders, community posts, and attendance records.

Notes: public users should read only published events. Admin users can create, update, cancel, and archive events.

## ticket_types

Fields: `id uuid primary key`, `event_id uuid references events(id) on delete cascade`, `name text not null`, `description text`, `price numeric(10,2) not null`, `currency text default 'ZAR'`, `quantity_available integer not null`, `quantity_sold integer default 0`, `sales_start_at timestamptz`, `sales_end_at timestamptz`, `is_active boolean default true`, `created_at timestamptz default now()`.

Relationships: many ticket types belong to one event. Ticket orders reference ticket types.

Notes: later checkout logic should reserve or decrement inventory transactionally.

## ticket_orders

Fields: `id uuid primary key`, `user_id uuid references profiles(id)`, `event_id uuid references events(id)`, `ticket_type_id uuid references ticket_types(id)`, `quantity integer not null`, `unit_price numeric(10,2) not null`, `total_amount numeric(10,2) not null`, `currency text default 'ZAR'`, `status text default 'pending'`, `payment_provider text`, `payment_reference text`, `created_at timestamptz default now()`, `paid_at timestamptz`.

Relationships: one order belongs to one user, event, and ticket type.

Notes: `payment_provider` is designed for Stripe or Yoco. Store provider references, not card data.

## merch_products

Fields: `id uuid primary key`, `slug text unique not null`, `name text not null`, `description text`, `price numeric(10,2) not null`, `currency text default 'ZAR'`, `image_url text`, `inventory_count integer default 0`, `is_active boolean default true`, `created_at timestamptz default now()`, `updated_at timestamptz default now()`.

Relationships: merch orders reference products.

Notes: variants can be added later with a `merch_product_variants` table if size and color inventory becomes necessary.

## merch_orders

Fields: `id uuid primary key`, `user_id uuid references profiles(id)`, `product_id uuid references merch_products(id)`, `quantity integer not null`, `unit_price numeric(10,2) not null`, `total_amount numeric(10,2) not null`, `currency text default 'ZAR'`, `status text default 'pending'`, `payment_provider text`, `payment_reference text`, `created_at timestamptz default now()`, `paid_at timestamptz`.

Relationships: one merch order belongs to one user and one product.

Notes: later phases may split this into `orders` and `order_items` if combined ticket and merch carts are required.

## community_posts

Fields: `id uuid primary key`, `author_id uuid references profiles(id)`, `event_id uuid references events(id)`, `title text not null`, `body text not null`, `status text default 'published'`, `created_at timestamptz default now()`, `updated_at timestamptz default now()`.

Relationships: one post belongs to an author and optionally an event. Posts have many comments.

Notes: moderation can use `status` values such as `published`, `hidden`, `flagged`, and `removed`.

## community_comments

Fields: `id uuid primary key`, `post_id uuid references community_posts(id) on delete cascade`, `author_id uuid references profiles(id)`, `body text not null`, `status text default 'published'`, `created_at timestamptz default now()`, `updated_at timestamptz default now()`.

Relationships: comments belong to posts and authors.

Notes: add report tables later if moderation workflows require audit trails.

## event_attendance

Fields: `id uuid primary key`, `event_id uuid references events(id)`, `user_id uuid references profiles(id)`, `ticket_order_id uuid references ticket_orders(id)`, `checked_in_at timestamptz`, `source text default 'ticket_scan'`, `created_at timestamptz default now()`.

Relationships: attendance connects users to events and can generate loyalty points.

Notes: use a unique constraint on `event_id` and `user_id` if each user should count once per event.

## loyalty_points

Fields: `id uuid primary key`, `user_id uuid references profiles(id)`, `points integer not null`, `source text not null`, `source_id uuid`, `description text`, `created_at timestamptz default now()`.

Relationships: loyalty entries belong to users and may reference attendance, ticket orders, merch orders, or admin adjustments through `source_id`.

Notes: keep points as a ledger instead of a single mutable balance. Calculate balance from entries or maintain a cached balance with triggers later.

## admin_users

Fields: `id uuid primary key`, `profile_id uuid references profiles(id) unique`, `permissions jsonb default '{}'`, `created_at timestamptz default now()`.

Relationships: one admin record belongs to one profile.

Notes: this can support granular permissions beyond the `profiles.role` field. Protect all admin tables and routes with RLS and server-side checks.
