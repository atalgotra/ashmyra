"use client";

import { useEffect } from "react";

export function ScrollToTopOnMount() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Instruct browser to not restore prior scroll position on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Temporarily set scrollBehavior to auto so jump to (0,0) is instant
    const root = document.documentElement;
    const prevScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);

    // 3. Restore smooth scroll behavior for in-page link navigation
    const timer = setTimeout(() => {
      root.style.scrollBehavior = prevScrollBehavior;
    }, 120);

    // 4. Handle navigation / bfcache reloads
    const handlePageShow = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}
