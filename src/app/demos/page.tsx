import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import { TryDemoSection } from "@/components/try-demo-section";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Terminal,
  Activity,
  Server,
  Lock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ashmyra Live Demos | Veyrix, MailFlow, Prospect IQ, Omnira & Unveil",
  description:
    "Test live Ashmyra AI platforms in your browser: Veyrix search intelligence, Omnira social media AI agent, MailFlow cold email automation, Prospect IQ B2B leads & Unveil AI photo/video watermark and noise removal. Instant sandbox access.",
  alternates: {
    canonical: "https://www.ashmyra.com/demos",
  },
  openGraph: {
    title: "Ashmyra Live Demos | Veyrix, MailFlow, Prospect IQ, Omnira & Unveil",
    description:
      "Test live Ashmyra AI platforms in your browser: Veyrix search intelligence, Omnira social media AI agent, MailFlow cold email automation, Prospect IQ B2B leads & Unveil AI photo/video watermark and noise removal. Instant sandbox access.",
    url: "https://www.ashmyra.com/demos",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashmyra Live Production Demos",
      },
    ],
  },
};

export default function DemosPage() {
  const demosSchema = {
    "@context": "https://schema.org",
    "@graph": DEMO_PRODUCTS.map((demo) => ({
      "@type": "SoftwareApplication",
      "@id": `${demo.url}#app`,
      "name": demo.name,
      "url": demo.url,
      "description": demo.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Cloud",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free Interactive Sandbox Demo",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "56",
        "bestRating": "5",
        "worstRating": "1",
      },
      "creator": {
        "@id": "https://www.ashmyra.com/#organization",
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ashmyra.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Demos",
        "item": "https://www.ashmyra.com/demos",
      },
    ],
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#04060a] text-white">
      <ScrollToTopOnMount />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(demosSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <div className="relative overflow-hidden pt-12 pb-16 text-center border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300 font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Production Sandboxes</span>
            <span className="text-neutral-500">·</span>
            <span>Zero Sign-up Friction</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Experience Our Working Systems.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Live in Your Browser.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We believe in proof over promises. Explore our production platforms
            running on live multi-agent clusters, real-time lead scrapers, and
            generative engine telemetry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full UI/UX Sandbox</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Real Live Data Models</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant Launch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Working Demos Grid */}
      <TryDemoSection />

      {/* Enterprise Sandbox Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
            <Server className="w-3.5 h-3.5 text-indigo-400" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How Ashmyra Production Sandboxes Work
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every demo environment connects to active test runners, simulated data streams, and sandbox API rate quotas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-7 rounded-3xl border border-white/[0.08] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Autonomous Agent Clusters</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Experience multi-agent swarms decomposing tasks, validating schemas, and handling edge cases without hallucinations.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl border border-white/[0.08] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Live Data Ingestion</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Test real lead enrichment, domain warmup metrics, and generative SEO radars against live web data in real-time.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl border border-white/[0.08] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Isolated Sandbox Security</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Every demo session runs in an isolated ephemeral container with encrypted traffic, role tokens, and zero data leakage.
            </p>
          </div>
        </div>

        {/* 3-Step PoC Execution */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              From Browser Sandbox to Enterprise PoC in 3 Steps
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              How enterprise teams evaluate, customize, and deploy Ashmyra platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-emerald-400">STAGE 01</div>
              <h4 className="text-base font-bold text-white">Test The Public Demo</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Launch any of our 4 live web demos above to review UI, workflow speed, and automated features firsthand.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-cyan-400">STAGE 02</div>
              <h4 className="text-base font-bold text-white">Private Scoping Session</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Meet with our engineering team to map your CRM, databases, ERPs, and custom compliance requirements.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-400">STAGE 03</div>
              <h4 className="text-base font-bold text-white">VPC / Dedicated Rollout</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We spin up a dedicated enterprise instance in your AWS/GCP cloud or Ashmyra managed infrastructure with custom SLAs.
              </p>
            </div>
          </div>
        </div>

        {/* Demo FAQ */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.06]">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                Are these live demos real working applications or static mockups?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Every demo linked on this page is a fully functional web application deployed on live cloud infrastructure with real databases, active worker threads, and AI agent execution.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/[0.06]">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                Can we customize these platforms for our specific business workflows?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Yes. Ashmyra specializes in custom enterprise software and agentic workflows. All demo platforms can be white-labeled, re-architected, and integrated directly with your internal APIs, databases, and LLM providers.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/[0.06]">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                Can Ashmyra platforms be deployed on-premise or in our own VPC?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Yes. We support single-tenant enterprise deployments across AWS, Google Cloud, Microsoft Azure, and private on-premise Kubernetes clusters for complete data sovereignty.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-indigo-950/25 border border-indigo-500/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready for a Personalized Enterprise Walkthrough?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Book an architecture session with our principal engineers to discuss tailored integrations, dedicated security, and pilot timelines.
          </p>
          <Link
            href="/contact?intent=enterprise-demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <span>Book Private Architecture Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
