"use client";

import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const GlobeCanvas = dynamic(() => import("@/components/ui/globe-canvas"), {
  ssr: false,
});

interface DotGlobeHeroProps {
  rotationSpeed?: number;
  globeRadius?: number;
  className?: string;
  children?: React.ReactNode;
}

const DotGlobeHero = React.forwardRef<HTMLDivElement, DotGlobeHeroProps>(
  (
    { rotationSpeed = 0.005, globeRadius = 1, className, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full h-screen bg-background overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {children}
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <GlobeCanvas rotationSpeed={rotationSpeed} radius={globeRadius} />
        </div>
      </div>
    );
  }
);

DotGlobeHero.displayName = "DotGlobeHero";

export { DotGlobeHero, type DotGlobeHeroProps };
