"use client";

import {
  Sparkles,
  RefreshCcw,
  Layers,
  Award,
  Store,
  Users,
  Building2,
  Handshake,
  Map,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { slides } from "@/lib/slides";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  RefreshCcw,
  Layers,
  Award,
  Store,
  Users,
  Building2,
  Handshake,
  Map,
};

interface BottomNavProps {
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export function BottomNav({ currentSlide, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-dust-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-2 py-2">
        {/* Prev button */}
        <button
          onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
            currentSlide === 0
              ? "text-muted-foreground/30 cursor-not-allowed"
              : "text-muted-foreground hover:bg-dust-surface hover:text-foreground"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Slide dots / icons */}
        <div className="flex items-center gap-1 overflow-x-auto px-2">
          {slides.map((slide, i) => {
            const Icon = iconMap[slide.icon];
            const isActive = i === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => onNavigate(i)}
                className={cn(
                  "group relative flex flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 transition-all",
                  isActive
                    ? "bg-dust-surface text-dust-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-dust-surface/50"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive && "text-dust-primary")} />
                <span
                  className={cn(
                    "text-[10px] font-medium leading-none hidden sm:block",
                    isActive ? "text-dust-primary" : "text-muted-foreground"
                  )}
                >
                  {slide.title}
                </span>
                {isActive && (
                  <span className="absolute -top-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-dust-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={() =>
            onNavigate(Math.min(slides.length - 1, currentSlide + 1))
          }
          disabled={currentSlide === slides.length - 1}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
            currentSlide === slides.length - 1
              ? "text-muted-foreground/30 cursor-not-allowed"
              : "text-muted-foreground hover:bg-dust-surface hover:text-foreground"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 w-full bg-dust-border">
        <div
          className="h-full bg-gradient-to-r from-dust-primary to-dust-secondary transition-all duration-500"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </nav>
  );
}
