import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-fuchsia-400/20 bg-black/80">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-zinc-400 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Link className="flex items-center gap-3 text-white" href="/">
            <img className="size-11 rounded-full border border-yellow-300/50 object-cover shadow-[0_0_20px_rgba(250,204,21,0.35)]" src="/images/logo.jpg" alt="Night Events smiley logo" />
            <span className="font-black uppercase tracking-[0.22em]">Night Events</span>
          </Link>
          <p className="mt-4 max-w-lg leading-6">Neon nights, loud memories, premium event energy. Follow the socials for weekly drops and behind-the-scenes chaos.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2">
          <Link className="rounded-2xl border border-white/10 px-4 py-3 font-bold text-zinc-200 transition hover:border-fuchsia-300/60 hover:bg-fuchsia-400/10 hover:text-white" href="#">Instagram</Link>
          <Link className="rounded-2xl border border-white/10 px-4 py-3 font-bold text-zinc-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:text-white" href="#">TikTok</Link>
          <Link className="rounded-2xl border border-white/10 px-4 py-3 font-bold text-zinc-200 transition hover:border-blue-300/60 hover:bg-blue-400/10 hover:text-white" href="#">Facebook</Link>
          <Link className="rounded-2xl border border-white/10 px-4 py-3 font-bold text-zinc-200 transition hover:border-yellow-300/60 hover:bg-yellow-300/10 hover:text-white" href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
