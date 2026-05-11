import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>NightEvents foundation. Built for future tickets, merch, community, and loyalty.</p>
        <div className="flex gap-4">
          <Link className="hover:text-white" href="/events">Events</Link>
          <Link className="hover:text-white" href="/shop">Shop</Link>
          <Link className="hover:text-white" href="/admin">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
