import Link from "next/link";

type AdminCardProps = {
  href: string;
  title: string;
  description: string;
};

export function AdminCard({ href, title, description }: AdminCardProps) {
  return (
    <Link className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:bg-white/[0.07]" href={href}>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{description}</p>
      <span className="mt-5 inline-flex text-sm font-bold text-fuchsia-200">Open placeholder</span>
    </Link>
  );
}
