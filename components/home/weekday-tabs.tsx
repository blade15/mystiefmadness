import { weekdayEvents } from "@/constants/homepage";

export function WeekdayTabs() {
  return (
    <div className="space-y-3">
      {weekdayEvents.map((event) => (
        <div className="group min-h-14 overflow-hidden rounded-2xl border border-fuchsia-300/25 bg-black/55 px-4 py-3 shadow-[0_0_22px_rgba(217,70,239,0.08)] transition-all duration-300 hover:min-h-28 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:shadow-[0_0_34px_rgba(34,211,238,0.22)]" key={event.day}>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-black uppercase tracking-[0.28em] text-white">{event.day}</span>
            <span className="size-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(240,171,252,0.9)] transition group-hover:bg-cyan-200" />
          </div>
          <div className="grid max-h-0 grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-20 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3">
              <p className="text-lg font-black text-cyan-100">{event.title}</p>
              <p className="text-sm font-bold text-fuchsia-100">{event.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
