"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideWrapperProps {
  children: React.ReactNode;
  isActive: boolean;
}

export function SlideWrapper({ children, isActive }: SlideWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      setMounted(false);
      const t = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(t);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "slide-content absolute inset-0 overflow-y-auto pb-20 pt-4 px-4 sm:px-6 lg:px-8",
        mounted ? "slide-enter-active" : "slide-enter"
      )}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </div>
  );
}
