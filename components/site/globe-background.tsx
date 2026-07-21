import Globe from "@/components/ui/globe";

export function GlobeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[3] md:scale-[4.2] opacity-70">
        <Globe />
      </div>
      {/* Legibility scrim over the globe */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background" />
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_0%,var(--background)_78%)]" />
    </div>
  );
}
