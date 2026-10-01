import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Kanban, 
  Mail, 
  PhoneCall, 
  TrendingUp 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra CRM | Modern Sales Pipeline & AI Deal Intelligence",
  description:
    "A clutter-free CRM engineered for high-velocity sales teams with automated pipeline progression, contact enrichment, and AI follow-up copilot.",
  alternates: {
    canonical: "https://ashmyra.com/products/crm",
  },
};

export default function AshmyraCrmPage() {
  const product = PRODUCTS.find((p) => p.id === "crm")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-xs text-pink-300 font-mono mb-6">
            <Target className="w-3.5 h-3.5 text-pink-400" />
            <span>High-Velocity Deal Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Build Deeper Relationships.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-300 to-pink-200">
              Close Faster with AI Intelligence.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra CRM eliminates bloated enterprise clutter. Sales reps get visual deal progression, automated activity tracking, firmographic data enrichment, and AI-assisted personalized follow-ups.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=crm-demo"
              className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold text-xs shadow-lg shadow-pink-600/30 transition-all"
            >
              Request Sales Pipeline Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {product.keyCapabilities.map((cap, i) => (
            <div key={i} className="glass-panel rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-pink-400 block mb-2">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Engineered to reduce manual data logging so account executives focus on strategic deal engagement.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-10 rounded-3xl bg-pink-950/20 border border-pink-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Accelerate your sales velocity and deal conversions
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Equip your sales team with modern pipeline automation and AI sales assistance.
          </p>
          <Link
            href="/contact?intent=crm"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold text-xs shadow-lg shadow-pink-600/30 transition-all"
          >
            <span>Consult With Sales CRM Architects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
