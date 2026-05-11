import type { MerchandiseProduct } from "@/types/domain";
import { formatCurrency } from "@/lib/utils";

export function MerchCard({ product }: { product: MerchandiseProduct }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex h-36 items-end rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-fuchsia-950 p-4">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-950">Drop</span>
      </div>
      <h3 className="text-xl font-black text-white">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{product.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-lg font-black text-fuchsia-200">{formatCurrency(product.price, product.currency)}</span>
        <span className="text-sm text-zinc-400">{product.inventoryCount} in stock</span>
      </div>
    </article>
  );
}
