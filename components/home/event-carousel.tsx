"use client";

import { useEffect, useState } from "react";
import { pastEventSlides } from "@/constants/homepage";

export function EventCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pastEventSlides.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-black/70 shadow-[0_0_60px_rgba(34,211,238,0.18)] sm:min-h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_42%),linear-gradient(135deg,rgba(217,70,239,0.14),transparent_55%)]" />
      {pastEventSlides.map((slide, index) => (
        <div className={`absolute inset-0 transition-all duration-700 ${index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} key={slide.title}>
          {slide.src ? (
            <img className="h-full w-full object-cover" src={slide.src} alt={slide.title} />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#111827,#581c87,#0891b2)] p-10 text-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-100">Photo Placeholder</p>
                <p className="mt-4 text-4xl font-black text-white">Drop event photos here</p>
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-200">Past Events</p>
            <h2 className="mt-2 text-3xl font-black text-white">{slide.title}</h2>
            <p className="mt-2 max-w-md text-sm text-zinc-300">{slide.caption}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {pastEventSlides.map((slide, index) => (
          <button className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-cyan-200 shadow-[0_0_16px_rgba(165,243,252,0.8)]" : "w-2 bg-white/35"}`} key={slide.title} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${slide.title}`} />
        ))}
      </div>
    </div>
  );
}
