"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/staff", label: "Staff" },
  { href: "/events", label: "Events" },
  { href: "/corporate-functions", label: "Corporate Functions" },
  { href: "/shop", label: "Merch/Shop" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fuchsia-400/20 bg-black/70 shadow-[0_0_40px_rgba(217,70,239,0.18)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link className="group flex items-center gap-3 text-lg font-black uppercase tracking-[0.18em] text-white" href="/">
          <img className="size-12 rounded-full border border-yellow-300/50 object-cover shadow-[0_0_22px_rgba(250,204,21,0.45)] transition group-hover:scale-105" src="/images/logo.jpg" alt="Night Events smiley logo" />
          <span className="hidden sm:inline">Night Events</span>
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link className="rounded-full border border-transparent px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-zinc-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <button className="rounded-full border border-fuchsia-300/40 bg-white/5 p-2 text-white lg:hidden" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-fuchsia-300/20 px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-200 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/10" href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
