import { EventCard } from "@/components/cards/event-card";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredEvents } from "@/constants/placeholder-data";

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Events" title="Upcoming city nights" description="Browse placeholder event listings. Future phases will load events from Supabase with filters, search, and live ticket availability." />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredEvents.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
}
