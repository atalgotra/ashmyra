import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductWowPreview } from "@/components/product-wow-preview";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Gauge, 
  ShieldCheck, 
  Smartphone,
  Layers,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Web | High-Performance Digital Platforms & Web Applications",
  description:
    "Ultra-responsive Next.js, React and modern edge architecture engineered for maximum conversion, perfect Core Web Vitals, and global scalability.",
  keywords: [
    "Ashmyra Web",
    "High-Performance Web Applications",
    "Next.js Enterprise Engineering",
    "Full-Stack Web Development",
    "Edge Architecture",
    "Core Web Vitals 100",
  ],
  openGraph: {
    title: "Ashmyra Web | High-Performance Digital Platforms",
    description:
      "World-class digital platforms engineered for conversion and speed with sub-second global edge delivery.",
    url: "https://ashmyra.com/products/web",
    images: [{ url: "/wow/wow7-engineering-playground.png", width: 1200, height: 675, alt: "Ashmyra Web Engineering Playground" }],
  },
  alternates: {
    canonical: "https://ashmyra.com/products/web",
  },
};

export default function AshmyraWebPage() {
  const product = PRODUCTS.find((p) => p.id === "web")!;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 01. Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-xs text-teal-300 font-mono mb-6">
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span>Digital Engineering &amp; Global Platforms · Edge Accelerated</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            World-Class Digital Platforms
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-200">
              Engineered for Conversion &amp; Speed.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ashmyra Web combines elite design craft with modern web engineering. We build lightning-fast web applications, corporate digital headquarters, and client portals with sub-second global edge delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=web-platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-xl shadow-teal-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Build Your Digital Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── 02. WOW Visual Showcase ─────────────────────────────────── */}
        <ProductWowPreview
          imageSrc="/wow/wow7-engineering-playground.png"
          imageAlt="Ashmyra Web & Engineering Playground"
          productName="Ashmyra Web & 3D Interactive Platform"
          productTagline="Sub-second global edge delivery, perfect Core Web Vitals, and interactive WebGL craft."
          accentColor="#38bdf8"
          badgeText="Edge Delivery Global Mesh Online"
          telemetry={[
            { label: "Core Web Vitals", value: "100/100", detail: "Sub-second LCP, zero CLS, immediate interaction" },
            { label: "Global Edge Latency", value: "<25ms", detail: "Distributed CDN edge nodes worldwide" },
            { label: "Conversion Lift", value: "+38%", detail: "Optimized mobile typography & intuitive funnel architecture" },
            { label: "Delivered on Freelancer", value: "100+", detail: "Full-stack platforms deployed across diverse sectors" },
          ]}
          capabilities={[
            {
              title: "Next.js & Turbopack Core",
              description: "Leverages modern React Server Components, streaming SSR, and edge middleware for blistering speed.",
            },
            {
              title: "Rich Cinematic Aesthetics",
              description: "State-of-the-art dark modes, interactive physics micro-animations, and glassmorphism that wows prospects.",
            },
            {
              title: "Zero-Downtime CI/CD",
              description: "Automated test suites, preview branch deployments, and atomic rollbacks protecting your production state.",
            },
          ]}
        />

        {/* ── 03. Freelancer.com 100+ Delivery Proof Banner ─────────────── */}
        <div className="my-16">
          <FreelancerTrustBanner category="Full-Stack Web Platforms & Digital Experiences" />
        </div>

        {/* ── 04. Capabilities Grid ───────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 block mb-2 font-semibold">
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Craft Meets Enterprise Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyCapabilities.map((cap, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-teal-500/35 transition-all flex flex-col justify-between hover:bg-white/[0.04]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cap}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Engineered for high conversion, search engine crawlability, and fluid cross-device experiences.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[10px] font-mono text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Edge Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05. Bottom CTA ──────────────────────────────────────────── */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-teal-950/20 border border-teal-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Build a digital presence that commands authority
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Transform your website into an intelligent software application that captures, educates, and converts high-value prospects.
          </p>
          <Link
            href="/contact?intent=web"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-xl shadow-teal-600/30 transition-all hover:scale-105"
          >
            <span>Start Web Architecture Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
