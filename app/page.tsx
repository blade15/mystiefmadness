import Link from "next/link";
import { EventCard } from "@/components/cards/event-card";
import { MerchCard } from "@/components/cards/merch-card";
import { PostPreviewCard } from "@/components/cards/post-preview-card";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredEvents, merchandiseProducts, communityPosts } from "@/constants/placeholder-data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-semibold text-fuchsia-100">
            Concerts, parties, games, and city nights
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Build your night around the best events in the city.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            NightEvents is the foundation for discovering nightlife experiences, buying tickets, shopping merch, and staying connected after the event.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-full bg-fuchsia-500 px-6 py-3 text-center font-bold text-white shadow-lg shadow-fuchsia-500/25 transition hover:bg-fuchsia-400" href="/events">
              Browse Events
            </Link>
            <Link className="rounded-full border border-white/15 px-6 py-3 text-center font-bold text-white transition hover:border-white/35 hover:bg-white/10" href="/community">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Upcoming" title="Featured events" description="Placeholder event data keeps the foundation visible while Supabase integration is added later." actionHref="/events" actionLabel="View all" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredEvents.slice(0, 3).map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Merch" title="Premium drops" description="Starter shop cards are ready for future Stripe or Yoco checkout flows." actionHref="/shop" actionLabel="Shop merch" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {merchandiseProducts.slice(0, 3).map((product) => (
            <MerchCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 pb-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Afterparty" title="Community previews" description="A future space for attendees to share memories, reviews, clips, and recommendations." actionHref="/community" actionLabel="Open community" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {communityPosts.map((post) => (
            <PostPreviewCard post={post} key={post.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
