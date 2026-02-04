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
      if (ref.current) ref.current.scrollTop = 0;
      return () => cancelAnimationFrame(t);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "slide-content absolute inset-0 overflow-y-auto pb-16 pt-6 px-5 sm:px-8 lg:px-12",
        mounted ? "slide-enter-active" : "slide-enter"
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
}
