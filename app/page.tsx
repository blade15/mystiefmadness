import Link from "next/link";
import { EventCarousel } from "@/components/home/event-carousel";
import { WeekdayTabs } from "@/components/home/weekday-tabs";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(217,70,239,0.25),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(180deg,#020617_0%,#09090b_48%,#000_100%)]" />
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-14">
        <aside className="order-2 rounded-[2rem] border border-fuchsia-300/20 bg-black/50 p-4 shadow-[0_0_60px_rgba(217,70,239,0.12)] backdrop-blur lg:order-1">
          <div className="mb-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-200">Weekly Lineup</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-white">Hover a day</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">Each tab expands in place to reveal the night&apos;s event and time.</p>
          </div>
          <WeekdayTabs />
        </aside>

        <div className="order-1 space-y-8 lg:order-2">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_90px_rgba(34,211,238,0.12)] backdrop-blur sm:p-8">
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -bottom-28 left-20 size-64 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative flex flex-col items-center text-center">
              <img className="size-32 rounded-full border-4 border-yellow-200/70 object-cover shadow-[0_0_55px_rgba(250,204,21,0.45)] sm:size-40" src="/images/logo.jpg" alt="Night Events smiley logo" />
              <p className="mt-6 text-sm font-black uppercase tracking-[0.45em] text-fuchsia-200">Nightclub Events Template</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
                Mystery Madness
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Weekly nightlife, private functions, merch drops, and unforgettable past-event moments in one polished frontend showcase.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="rounded-full bg-fuchsia-500 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_32px_rgba(217,70,239,0.45)] transition hover:-translate-y-1 hover:bg-fuchsia-400" href="/events">
                  See Events
                </Link>
                <Link className="rounded-full border border-cyan-300/50 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]" href="/corporate-functions">
                  Book Function
                </Link>
              </div>
            </div>
          </div>

          <EventCarousel />
        </div>
      </section>
    </div>
  );
}
