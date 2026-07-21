import { Mail } from "lucide-react";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { Journey } from "@/components/site/journey";
import { PortfolioTicker } from "@/components/site/portfolio-ticker";
import { LiveClock } from "@/components/site/live-clock";
import { XIcon, InstagramIcon } from "@/components/site/social-icons";
import { Reveal } from "@/components/site/reveal";

const PROJECTS = [
  {
    name: "AIGEN",
    status: "Building",
    desc: "Autonomous AI for traders – self-learning systems that analyse market microstructure and on-chain data, then execute without emotion or hesitation.",
    tags: ["Machine Learning", "Building"],
  },
  {
    name: "Emin Capital",
    status: "Launching 2026",
    desc: "Managing capital for those who believe in long-term building. Backing resilient founders and durable ideas — releases in the coming years.",
    tags: ["Venture Capital", "Launching 2026"],
  },
  {
    name: "Insight",
    status: "Stealth",
    desc: "Strategic advisory, frontier research, and exponential roadmapping for organisations navigating rapid change. Stealth until ~2030.",
    tags: ["Strategy", "Stealth"],
  },
] as const;

const FOCUS_AREAS = ["Artificial Intelligence", "Strategic Capital", "Systems"] as const;

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="text-gold/80 text-xs font-mono tracking-widest">
        {index}
      </span>
      <span className="text-xs tracking-[0.2em] uppercase text-white/40">
        {title}
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export default function Home() {
  return (
    <DotGlobeHero
      rotationSpeed={0.004}
      className="bg-gradient-to-br from-background via-background/95 to-muted/10"
    >
      {/* Scrolls on mobile, locked to one viewport from lg breakpoint up */}
      <div className="w-full h-full overflow-y-auto lg:overflow-hidden">
        <div className="min-h-full lg:h-full flex flex-col max-w-[1800px] mx-auto px-5 md:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1 lg:min-h-0 lg:auto-rows-fr">
            {/* ABOUT */}
            <Reveal className="lg:col-span-4 flex flex-col gap-6 lg:min-h-0 lg:overflow-y-auto lg:pr-1">
              <div className="text-xs tracking-[0.3em] uppercase text-white/50">
                Builder — Investor
              </div>
              <div>
                <h1 className="font-heading text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-4">
                  Emin
                  <br />
                  Turus
                </h1>
                <p className="text-white/50 text-sm">
                  Mönchengladbach · DE ·{" "}
                  <span className="text-white/70">
                    <LiveClock />
                  </span>
                </p>
              </div>

              <p className="text-white/70 text-base leading-relaxed">
                Builder, founder, and strategist. I create autonomous
                systems, patient capital, and ideas that outlive us. My work
                sits at the intersection of artificial intelligence and
                long-horizon investing.
              </p>

              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((f) => (
                  <span
                    key={f}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-gold/25 text-gold-soft/90 uppercase tracking-wide"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="border-l-2 border-gold/30 pl-4 py-1">
                <p className="font-heading italic text-white/80 text-lg leading-snug mb-2">
                  &ldquo;Mathematics is the queen of the sciences, and
                  number theory is the queen of mathematics.&rdquo;
                </p>
                <p className="text-[11px] text-white/40 uppercase tracking-wide">
                  — Carl Friedrich Gauss (1777–1855)
                </p>
              </div>

              <div className="mt-auto pt-4 text-xs text-white/35 leading-relaxed">
                Precision, relentless inquiry, and a bias toward building —
                the principles behind everything above.
              </div>
            </Reveal>

            {/* WORK */}
            <Reveal
              delay={0.08}
              className="lg:col-span-3 flex flex-col gap-4 lg:min-h-0 lg:overflow-y-auto lg:pr-1"
            >
              <SectionLabel index="01" title="Selected Work" />
              <div className="flex flex-col gap-4 flex-1">
                {PROJECTS.map((p) => (
                  <div
                    key={p.name}
                    className="relative rounded-xl border border-white/10 bg-neutral-900/85 p-5 shadow-2xl overflow-hidden hover:border-white/20 transition-colors duration-300 flex-1 flex flex-col"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                    <h3 className="font-heading text-xl font-medium mb-2">{p.name}</h3>
                    <div className="text-[10px] tracking-widest uppercase text-gold-soft/80 mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      {p.status}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/50 uppercase tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* VISION + TRACK RECORD */}
            <Reveal
              delay={0.16}
              className="lg:col-span-5 flex flex-col gap-6 lg:min-h-0 lg:overflow-y-auto lg:pr-1"
            >
              <div>
                <SectionLabel index="02" title="Vision & Philosophy" />
                <div className="space-y-3.5 text-white/65 text-sm leading-relaxed">
                  <p>
                    The future belongs to those who build it. At the
                    convergence of artificial intelligence, strategic
                    capital, and transformative leadership lies the
                    blueprint for solving civilization&apos;s most complex
                    challenges.
                  </p>
                  <p>
                    Innovation is never accidental. It is forged through
                    precision, relentless execution, and an uncompromising
                    vision that reshapes industries and redefines what&apos;s
                    achievable.
                  </p>
                  <p>
                    My mandate is clear: identify breakthrough technologies
                    at their inception, empower exceptional founders, and
                    scale ventures that don&apos;t just compete in markets
                    — they create them.
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-col lg:min-h-0">
                <SectionLabel index="03" title="Track Record" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 lg:min-h-0">
                  <Journey />
                  <PortfolioTicker />
                </div>
              </div>
            </Reveal>
          </div>

          {/* CONTACT FOOTER */}
          <div className="shrink-0 mt-6 lg:mt-8 pt-5 lg:pt-6 border-t border-white/10 flex flex-col items-center gap-3">
            <a
              href="mailto:contact@emin.vc"
              className="font-heading text-lg text-gold-soft hover:text-gold transition-colors"
            >
              contact@emin.vc
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/aigenvc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-gold/50 transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/emiintrs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-gold/50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@emin.vc"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-gold/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </DotGlobeHero>
  );
}
