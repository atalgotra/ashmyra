import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { FreelancerTrustBanner } from "@/components/freelancer-trust-banner";
import { 
  ArrowRight, 
  Cpu, 
  Search, 
  Users, 
  Zap, 
  BarChart3, 
  Target, 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  Activity,
  ArrowUpRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Products | AI, SEO, HRMS, Analytics, CRM & Automation Systems",
  description:
    "Explore the full Ashmyra intelligent software ecosystem: Ashmyra AI (agentic systems), Ashmyra SEO (GEO intelligence), Ashmyra HRMS (workforce management), Ashmyra Analytics (data intelligence), Ashmyra CRM, and Ashmyra Automation. Purpose-built for enterprise scale.",
  keywords: [
    "Ashmyra Products",
    "Ashmyra AI Platform",
    "Ashmyra SEO Tool",
    "Ashmyra HRMS",
    "Ashmyra Analytics",
    "Ashmyra CRM",
    "Ashmyra Automation",
    "Ashmyra Web Platform",
    "Agentic AI Products",
    "Enterprise SaaS India",
    "GEO Intelligence Platform",
    "HRMS Software India",
  ],
  openGraph: {
    title: "Ashmyra Products | AI-Native Software Ecosystem",
    description:
      "Seven flagship intelligent systems: Ashmyra AI, Ashmyra SEO, Ashmyra HRMS, Ashmyra Analytics, Ashmyra CRM, Ashmyra Automation, and Ashmyra Web—all engineered for enterprise performance.",
    url: "https://ashmyra.com/products",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashmyra Intelligent Software Products",
      },
    ],
  },
  alternates: {
    canonical: "https://ashmyra.com/products",
  },
};

const PRODUCT_IMAGES: Record<string, string> = {
  ai: "/wow/wow1-social-intelligence.png",
  seo: "/wow/wow2-seo-intelligence.png",
  crm: "/wow/wow3-project-management.png",
  hrms: "/wow/wow4-intelligent-workforce.png",
  analytics: "/wow/wow5-data-intelligence.png",
  automation: "/wow/wow6-workplace-communication.png",
  web: "/wow/wow7-engineering-playground.png",
};

export default function ProductsPage() {
  const getProductIcon = (id: string) => {
    switch (id) {
      case "ai":
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case "seo":
        return <Search className="w-6 h-6 text-sky-400" />;
      case "hrms":
        return <Users className="w-6 h-6 text-emerald-400" />;
      case "automation":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "analytics":
        return <BarChart3 className="w-6 h-6 text-purple-400" />;
      case "crm":
        return <Target className="w-6 h-6 text-pink-400" />;
      case "web":
        return <Globe className="w-6 h-6 text-teal-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Intelligent Product Suite · Enterprise Ready</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Software Engineered for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              Autonomous Business Era
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Ashmyra develops AI-native SaaS products and modular platforms designed to eliminate operational friction and accelerate enterprise growth.
          </p>
        </div>

        {/* Freelancer.com 100+ Enterprise Delivery Track Record */}
        <div className="mb-20">
          <FreelancerTrustBanner category="Enterprise AI, SaaS & Autonomous Workflows" />
        </div>

        {/* Product Catalog Cards */}
        <div className="space-y-16">
          {PRODUCTS.map((product) => {
            const wowImage = PRODUCT_IMAGES[product.id] || "/wow/wow1-social-intelligence.png";

            return (
              <div
                key={product.id}
                id={product.id}
                className="rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-300 hover:border-white/20"
                style={{
                  background: "linear-gradient(135deg, rgba(10, 13, 22, 0.95), rgba(6, 8, 14, 0.98))",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 25px 80px -20px rgba(0,0,0,0.8)",
                }}
              >
                {/* Top Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center shadow-inner">
                      {getProductIcon(product.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {product.name}
                        </h2>
                        <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono font-semibold">
                          {product.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-0.5">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
                    >
                      <span>Explore {product.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 16:9 WOW Image Preview Showcase */}
                <div className="mb-8">
                  <div 
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group bg-black/60 border border-white/[0.12] shadow-2xl"
                  >
                    <Image
                      src={wowImage}
                      alt={`${product.name} Interface & Architecture`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <Activity className="w-4 h-4 text-emerald-400" />
                        <span className="font-mono text-white font-semibold">{product.name} Live Telemetry</span>
                        <span className="text-neutral-500 hidden sm:inline">· {product.heroHighlight}</span>
                      </div>
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-xs font-mono text-indigo-300 hover:text-white flex items-center gap-1 font-semibold"
                      >
                        Deep Dive <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Description & Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Description Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {product.longDesc}
                    </p>

                    {/* Capabilities List */}
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                        Key Architecture &amp; Capabilities:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.keyCapabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Telemetry & Benchmark Column */}
                  <div className="lg:col-span-5 bg-[#06080e] border border-white/[0.08] rounded-2xl p-6 space-y-5">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1 font-semibold">
                        Operational Problem Solved
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {product.problemSolved}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 block mb-1 font-semibold">
                        AI-Native Advantage
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {product.aiAdvantage}
                      </p>
                    </div>

                    {/* Demo Metrics */}
                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-2 font-semibold">
                        Performance Telemetry
                      </span>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <div className="text-sm sm:text-base font-bold text-white font-mono">
                            {product.demoDataSummary.metric1.value}
                          </div>
                          <div className="text-[9px] text-neutral-400 mt-0.5 line-clamp-1">
                            {product.demoDataSummary.metric1.label}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                            {product.demoDataSummary.metric2.value}
                          </div>
                          <div className="text-[9px] text-neutral-400 mt-0.5 line-clamp-1">
                            {product.demoDataSummary.metric2.label}
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <div className="text-sm sm:text-base font-bold text-indigo-300 font-mono">
                            {product.demoDataSummary.metric3.value}
                          </div>
                          <div className="text-[9px] text-neutral-400 mt-0.5 line-clamp-1">
                            {product.demoDataSummary.metric3.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Bottom CTA */}
        <div className="mt-24 text-center p-10 sm:p-14 rounded-3xl bg-indigo-950/20 border border-indigo-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Need a tailored enterprise software solution?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Beyond off-the-shelf software, Ashmyra engineers bespoke agentic systems and SaaS platforms with full ownership.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <span>Start an Enterprise Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
