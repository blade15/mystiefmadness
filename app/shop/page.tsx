import { MerchCard } from "@/components/cards/merch-card";
import { SectionHeader } from "@/components/ui/section-header";
import { merchandiseProducts } from "@/constants/placeholder-data";

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Shop" title="Merchandise drops" description="Starter storefront structure for future inventory, cart, and payment provider integration." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {merchandiseProducts.map((product) => (
          <MerchCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
