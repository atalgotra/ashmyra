import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Gauge, 
  ShieldCheck, 
  Smartphone 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Web | High-Performance Digital Platforms & Web Applications",
  description:
    "Ultra-responsive Next.js, React and modern edge architecture engineered for maximum conversion, perfect Core Web Vitals, and global scalability.",
  alternates: {
    canonical: "https://ashmyra.com/products/web",
  },
};

export default function AshmyraWebPage() {
  const product = PRODUCTS.find((p) => p.id === "web")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-xs text-teal-300 font-mono mb-6">
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span>Digital Engineering &amp; Global Platforms</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            World-Class Digital Platforms
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-teal-200">
              Engineered for Conversion &amp; Speed.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra Web combines elite design craft with modern web engineering. We build lightning-fast web applications, corporate digital headquarters, and client portals with sub-second global edge delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=web-platform"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-lg shadow-teal-600/30 transition-all"
            >
              Build Your Digital Platform
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {product.keyCapabilities.map((cap, i) => (
            <div key={i} className="glass-panel rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-teal-400 block mb-2">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Engineered with strict WCAG 2.2 AA accessibility standards, responsive breakpoints, and zero layout shift.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-10 rounded-3xl bg-teal-950/20 border border-teal-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Elevate your digital presence to elite enterprise standards
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Consult with our engineering team to design and build an ultra-fast web application.
          </p>
          <Link
            href="/contact?intent=web"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-lg shadow-teal-600/30 transition-all"
          >
            <span>Consult With Web Architects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
