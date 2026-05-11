import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="w-full rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/30">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Account</p>
        <h1 className="mt-2 text-3xl font-black text-white">Log in</h1>
        <p className="mt-3 text-zinc-300">Supabase Auth will power this form in a later phase.</p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-300" placeholder="Email address" type="email" />
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-fuchsia-300" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-fuchsia-500 px-5 py-3 font-black text-white opacity-80" type="button" disabled>Auth coming soon</button>
        </form>
        <p className="mt-6 text-sm text-zinc-400">Need an account? <Link className="font-bold text-fuchsia-200" href="/register">Register</Link></p>
      </div>
    </section>
  );
}
