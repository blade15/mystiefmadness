import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredEvents, ticketTypes } from "@/constants/placeholder-data";
import { formatCurrency, formatEventDate } from "@/lib/utils";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = featuredEvents.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const tickets = ticketTypes.filter((ticket) => ticket.eventId === event.id);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Link className="text-sm font-bold text-fuchsia-200 hover:text-white" href="/events">Back to events</Link>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div className="mb-8 h-72 rounded-[2rem] bg-gradient-to-br from-fuchsia-500 via-violet-600 to-cyan-400 p-6 shadow-2xl shadow-fuchsia-950/30" />
          <SectionHeader eyebrow={event.category} title={event.title} description={event.description} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-400">Date and time</p>
              <p className="mt-2 font-bold text-white">{formatEventDate(event.startsAt)}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-400">Location</p>
              <p className="mt-2 font-bold text-white">{event.venue}, {event.city}</p>
            </div>
          </div>
        </div>
        <aside className="h-fit rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 shadow-2xl shadow-black/30">
          <h2 className="text-2xl font-black text-white">Tickets</h2>
          <p className="mt-2 text-sm text-zinc-300">Checkout is intentionally a placeholder for future Stripe or Yoco integration.</p>
          <div className="mt-6 space-y-4">
            {tickets.length > 0 ? tickets.map((ticket) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4" key={ticket.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-black text-white">{ticket.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{ticket.description}</p>
                  </div>
                  <span className="font-black text-fuchsia-200">{formatCurrency(ticket.price, ticket.currency)}</span>
                </div>
              </div>
            )) : (
              <p className="text-sm text-zinc-400">Ticket tiers will be configured in the admin dashboard later.</p>
            )}
          </div>
          <button className="mt-6 w-full rounded-full bg-fuchsia-500 px-5 py-3 font-black text-white opacity-80" type="button" disabled>
            Payment coming soon
          </button>
        </aside>
      </div>
    </section>
  );
}
