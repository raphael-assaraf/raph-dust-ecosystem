"use client";

import {
  LayoutGrid,
  Sparkles,
  RefreshCcw,
  Magnet,
  Award,
  Blocks,
  Users,
  Repeat,
  Building2,
  Map,
  ShieldOff,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { slides } from "@/lib/slides";

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Sparkles,
  RefreshCcw,
  Magnet,
  Award,
  Blocks,
  Users,
  Repeat,
  Building2,
  Map,
  ShieldOff,
};

interface BottomNavProps {
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export function BottomNav({ currentSlide, onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-3 left-4 right-4 z-50 mx-auto max-w-3xl flex flex-col items-center gap-1.5">
      {/* Progress bar — floating above the nav */}
      <div className="h-[3px] w-3/4 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-dust-blue rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Nav pill */}
      <nav className="w-full rounded-2xl border border-border bg-background/90 backdrop-blur-md shadow-lg shadow-black/5">
        <div className="flex items-center justify-between px-2 py-1.5">
        {/* Prev */}
        <button
          onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
            currentSlide === 0
              ? "text-gray-200 cursor-not-allowed"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Slide nav */}
        <div className="flex items-center gap-0.5 overflow-x-auto px-1">
          {slides.map((slide, i) => {
            const Icon = iconMap[slide.icon];
            const isActive = i === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => onNavigate(i)}
                className={cn(
                  "group relative flex flex-col items-center gap-0.5 rounded-lg px-2 py-1 transition-all",
                  isActive
                    ? "bg-dust-blue/8 text-dust-blue"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                <span
                  className={cn(
                    "text-[9px] font-medium leading-none hidden sm:block",
                    isActive ? "text-dust-blue" : "text-muted-foreground"
                  )}
                >
                  {slide.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={() =>
            onNavigate(Math.min(slides.length - 1, currentSlide + 1))
          }
          disabled={currentSlide === slides.length - 1}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
            currentSlide === slides.length - 1
              ? "text-gray-200 cursor-not-allowed"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        </div>
      </nav>
    </div>
  );
}
