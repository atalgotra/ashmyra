import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="pt-36 pb-28 min-h-[80vh] flex items-center justify-center text-center px-4"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-md mx-auto space-y-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto font-mono text-xl font-bold"
          style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}
        >
          404
        </div>
        <h1 className="text-3xl font-bold" style={{ color: "var(--text)" }}>System Node Not Found</h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          The requested route or resource does not exist in the Ashmyra architecture. You may return to the main platform overview below.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: "var(--accent, #4f46e5)" }}
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs transition-all hover:scale-105"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
