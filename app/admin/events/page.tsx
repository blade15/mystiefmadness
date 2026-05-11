export default function AdminEventsPage() {
  return <AdminPlaceholder title="Manage Events" description="Event CRUD, publishing workflow, media, and venue details will be added in a future phase." />;
}

function AdminPlaceholder({ title, description }: { title: string; description: string }) {
  return <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Admin placeholder</p><h1 className="mt-2 text-4xl font-black text-white">{title}</h1><p className="mt-3 text-zinc-300">{description}</p></section>;
}
