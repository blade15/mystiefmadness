import Link from "next/link";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export function SectionHeader({ eyebrow, title, description, actionHref, actionLabel }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-zinc-300">{description}</p> : null}
      </div>
      {actionHref && actionLabel ? (
        <Link className="w-fit rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-fuchsia-300/60 hover:bg-white/10" href={actionHref}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
