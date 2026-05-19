import Link from "next/link";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.2),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.16),transparent_30%)]" />
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-[0_0_70px_rgba(217,70,239,0.12)] backdrop-blur sm:p-10">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-fuchsia-300">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="rounded-full bg-fuchsia-500 px-6 py-3 text-center font-black uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(217,70,239,0.35)] transition hover:bg-fuchsia-400" href="/">
            Back Home
          </Link>
          <Link className="rounded-full border border-cyan-300/40 px-6 py-3 text-center font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-cyan-300/10" href="/events">
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}
