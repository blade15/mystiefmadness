import Link from "next/link";

const dashboardItems = [
  { title: "Upcoming Tickets", value: "0", description: "Ticket purchases will appear here." },
  { title: "Loyalty Points", value: "0", description: "Points will come from attendance and purchases." },
  { title: "Community Posts", value: "0", description: "Your posts and comments will be tracked later." },
];

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">User dashboard</p>
      <h1 className="mt-2 text-4xl font-black text-white">Your night history</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">A foundation for tickets, saved events, merch orders, community activity, and loyalty rewards.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {dashboardItems.map((item) => (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5" key={item.title}>
            <p className="text-sm text-zinc-400">{item.title}</p>
            <p className="mt-2 text-4xl font-black text-white">{item.value}</p>
            <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
          </div>
        ))}
      </div>
      <Link className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/10" href="/events">Find your next event</Link>
    </section>
  );
}
