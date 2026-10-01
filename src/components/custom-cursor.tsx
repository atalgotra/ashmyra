"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices and when reduced motion is not requested
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    setIsVisible(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Check for custom cursor targets
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;
      const interactiveTarget = target?.closest("a, button, input, [role='button']") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsPointer(true);
        gsap.to(cursor, {
          scale: 2.4,
          backgroundColor: "rgba(99, 102, 241, 0.25)",
          borderColor: "rgba(165, 180, 252, 0.8)",
          backdropFilter: "blur(4px)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (interactiveTarget) {
        setCursorText("");
        setIsPointer(true);
        gsap.to(cursor, {
          scale: 1.6,
          backgroundColor: "rgba(99, 102, 241, 0.15)",
          borderColor: "rgba(129, 140, 248, 0.6)",
          backdropFilter: "blur(2px)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        setCursorText("");
        setIsPointer(false);
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(0px)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth RAF loop for physics lag
    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.22, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      gsap.set(cursor, { x: pos.x, y: pos.y });
    });

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      gsap.ticker.remove(ticker);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/30 bg-white/5 flex items-center justify-center transition-opacity duration-300 will-change-transform shadow-[0_0_20px_rgba(99,102,241,0.2)]"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 absolute" />
      {cursorText && (
        <span
          ref={textRef}
          className="text-[7px] font-mono tracking-widest uppercase font-bold text-white whitespace-nowrap px-1"
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
