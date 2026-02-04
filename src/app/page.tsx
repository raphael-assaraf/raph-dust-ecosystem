"use client";

import { useState, useCallback, useEffect } from "react";
import { BottomNav } from "@/components/BottomNav";
import { SlideWrapper } from "@/components/SlideWrapper";
import { VisionSlide } from "@/components/slides/VisionSlide";
import { FlywheelSlide } from "@/components/slides/FlywheelSlide";
import { PillarsSlide } from "@/components/slides/PillarsSlide";
import { ExpertsSlide } from "@/components/slides/ExpertsSlide";
import { MarketplaceSlide } from "@/components/slides/MarketplaceSlide";
import { CommunitySlide } from "@/components/slides/CommunitySlide";
import { TeamSlide } from "@/components/slides/TeamSlide";
import { EnterpriseSlide } from "@/components/slides/EnterpriseSlide";
import { RoadmapSlide } from "@/components/slides/RoadmapSlide";
import { slides } from "@/lib/slides";

const slideComponents = [
  VisionSlide,
  FlywheelSlide,
  PillarsSlide,
  ExpertsSlide,
  MarketplaceSlide,
  CommunitySlide,
  TeamSlide,
  EnterpriseSlide,
  RoadmapSlide,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch swipe support
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only trigger if horizontal swipe is dominant and significant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
        } else {
          setCurrentSlide((prev) => Math.max(0, prev - 1));
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <main className="relative h-dvh overflow-hidden bg-background">
      {/* Slide container */}
      <div className="relative h-full">
        {slideComponents.map((SlideComponent, index) => (
          <SlideWrapper key={slides[index].id} isActive={index === currentSlide}>
            <SlideComponent />
          </SlideWrapper>
        ))}
      </div>

      {/* Bottom navigation */}
      <BottomNav currentSlide={currentSlide} onNavigate={navigate} />
    </main>
  );
}
