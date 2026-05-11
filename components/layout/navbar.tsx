"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { accountNavItems, publicNavItems } from "@/constants/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [...publicNavItems, ...accountNavItems];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link className="flex items-center gap-2 text-xl font-black tracking-tight text-white" href="/">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-fuchsia-500 text-sm shadow-lg shadow-fuchsia-500/30">NE</span>
          NightEvents
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link className="text-sm font-semibold text-zinc-300 transition hover:text-white" href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link className="rounded-full bg-white px-4 py-2 text-sm font-black text-zinc-950 transition hover:bg-fuchsia-100" href="/login">Log in</Link>
        </div>
        <button className="rounded-full border border-white/15 p-2 text-white md:hidden" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link className="rounded-2xl px-3 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/10" href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
            <Link className="rounded-2xl bg-fuchsia-500 px-3 py-3 text-center text-sm font-black text-white" href="/login" onClick={() => setIsOpen(false)}>Log in</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
