"use client";

import { useEffect } from "react";

/**
 * TeamScrollHandler
 * Automatically navigates/scrolls the viewport to "The People Behind the Architecture" (#team)
 * when visiting /team, while gracefully respecting specific sub-hashes (#mission, #philosophy, #careers).
 */
export function TeamScrollHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Determine target anchor
    const rawHash = window.location.hash;
    const targetId = rawHash ? rawHash.replace("#", "") : "team";

    const performScroll = () => {
      const targetElement =
        document.getElementById(targetId) || document.getElementById("team");

      if (targetElement) {
        // Calculate header offset to ensure title isn't obscured by fixed navbar
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL to /team#team if landing directly on /team
        if (!rawHash && window.history?.replaceState) {
          window.history.replaceState(null, "", "/team#team");
        }
      }
    };

    // Run after a short tick to ensure layout and images are positioned
    const timer1 = setTimeout(performScroll, 80);
    const timer2 = setTimeout(performScroll, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return null;
}
