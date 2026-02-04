"use client";

import {
  Sparkles,
  RefreshCcw,
  Layers,
  Award,
  Blocks,
  Users,
  Repeat,
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
  Blocks,
  Users,
  Repeat,
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-md">
      {/* Progress bar */}
      <div className="h-[2px] w-full bg-gray-100">
        <div
          className="h-full bg-dust-blue transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between px-2 py-1.5">
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
  );
}
