import Link from "next/link";
import type { Event } from "@/types/domain";
import { formatCurrency, formatEventDate } from "@/lib/utils";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-fuchsia-300/50">
      <div className="h-40 bg-gradient-to-br from-fuchsia-500 via-violet-600 to-cyan-400 p-5">
        <div className="flex h-full items-end justify-between">
          <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">{event.category}</span>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-zinc-950">From {formatCurrency(event.minPrice, event.currency)}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-fuchsia-200">{formatEventDate(event.startsAt)}</p>
        <h3 className="mt-2 text-xl font-black text-white">{event.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-300">{event.description}</p>
        <p className="mt-4 text-sm font-semibold text-zinc-200">{event.venue}, {event.city}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200" key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="mt-6 inline-flex font-bold text-fuchsia-200 transition group-hover:text-white" href={`/events/${event.slug}`}>
          View details
        </Link>
      </div>
    </article>
  );
}
