import { AdminCard } from "@/components/cards/admin-card";
import { adminCards } from "@/constants/navigation";

export default function AdminDashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Admin</p>
      <h1 className="mt-2 text-4xl font-black text-white">Operations dashboard</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">Starter admin foundation for managing events, tickets, merch, users, community content, and loyalty.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {adminCards.map((card) => (
          <AdminCard {...card} key={card.href} />
        ))}
      </div>
    </section>
  );
}
