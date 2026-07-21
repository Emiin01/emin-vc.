const MILESTONES = [
  { year: "2020", label: "Founded first venture in AI technology" },
  { year: "2022", label: "Launched strategic investment initiatives" },
  { year: "2024", label: "Expanded into the venture capital ecosystem" },
  { year: "2026", label: "Scaling AIGEN and preparing Emin Capital for launch" },
] as const;

export function Journey() {
  return (
    <div className="relative rounded-xl border border-white/10 bg-neutral-900/85 p-5 shadow-2xl overflow-hidden h-full flex flex-col">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4">
        Journey
      </div>
      <div className="relative flex-1 flex flex-col justify-between pl-4">
        <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" />
        {MILESTONES.map((m) => (
          <div key={m.year} className="relative pb-4 last:pb-0">
            <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="font-heading text-gold-soft text-sm mb-0.5">{m.year}</div>
            <p className="text-white/65 text-xs leading-relaxed">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
