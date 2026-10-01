import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 pb-28 min-h-[80vh] flex items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400 font-mono text-xl font-bold">
          404
        </div>
        <h1 className="text-3xl font-bold text-white">System Node Not Found</h1>
        <p className="text-sm text-neutral-400 leading-relaxed">
          The requested route or resource does not exist in the Ashmyra architecture. You may return to the main platform overview below.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-neutral-300 text-xs border border-white/[0.08] transition-all"
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
