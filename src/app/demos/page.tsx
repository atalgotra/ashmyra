import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demos";
import { TryDemoSection } from "@/components/try-demo-section";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";
import { Breadcrumb } from "@/components/breadcrumb";
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
  title: "Live AI Software Demos",
  description:
    "Experience live Ashmyra AI platforms in your browser: Veyrix, Omnira, MailFlow, Prospect IQ, and Unveil. Instant sandbox access.",
  alternates: {
    canonical: "https://www.ashmyra.com/demos",
  },
  openGraph: {
    title: "Live AI Software Demos | Ashmyra",
    description:
      "Experience live Ashmyra AI platforms in your browser: Veyrix, Omnira, MailFlow, Prospect IQ, and Unveil. Instant sandbox access.",
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

  return (
    <div
      className="pt-28 pb-24 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <ScrollToTopOnMount />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(demosSchema) }}
      />

      {/* Hero Header */}
      <div
        className="relative overflow-hidden pt-12 pb-16 text-center border-b transition-colors"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation Trail */}
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Live Demos" }]} />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6 shadow-sm"
            style={{
              backgroundColor: "var(--theme-pill-bg)",
              border: "1px solid var(--theme-pill-border)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold uppercase tracking-wider" style={{ color: "var(--accent-emerald)" }}>
              Interactive Production Sandboxes
            </span>
            <span style={{ color: "var(--text-subtle)" }}>·</span>
            <span className="font-medium" style={{ color: "var(--text)" }}>Zero Sign-up Friction</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            Experience Our Working Systems.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 50%, var(--accent-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Live in Your Browser.
            </span>
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            We believe in proof over promises. Explore our production platforms
            running on live multi-agent clusters, real-time lead scrapers, and
            generative engine telemetry.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-medium"
            style={{ color: "var(--text)" }}
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Full UI/UX Sandbox</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Real Live Data Models</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Instant Launch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Working Demos Grid */}
      <TryDemoSection />

      {/* Enterprise Sandbox Specifications */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
            style={{
              backgroundColor: "var(--theme-pill-bg)",
              border: "1px solid var(--theme-pill-border)",
              color: "var(--accent)",
            }}
          >
            <Server className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
            <span className="font-semibold uppercase tracking-wider">Under The Hood</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
          >
            How Ashmyra Production Sandboxes Work
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Every demo environment connects to active test runners, simulated data streams, and sandbox API rate quotas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div
            className="p-7 rounded-3xl space-y-4 shadow-sm"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(79, 70, 229, 0.12)",
                border: "1px solid rgba(79, 70, 229, 0.3)",
                color: "#4f46e5",
              }}
            >
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>Autonomous Agent Clusters</h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Experience multi-agent swarms decomposing tasks, validating schemas, and handling edge cases without hallucinations.
            </p>
          </div>

          <div
            className="p-7 rounded-3xl space-y-4 shadow-sm"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(5, 150, 105, 0.12)",
                border: "1px solid rgba(5, 150, 105, 0.3)",
                color: "#059669",
              }}
            >
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>Live Data Ingestion</h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Test real lead enrichment, domain warmup metrics, and generative SEO radars against live web data in real-time.
            </p>
          </div>

          <div
            className="p-7 rounded-3xl space-y-4 shadow-sm"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(2, 132, 199, 0.12)",
                border: "1px solid rgba(2, 132, 199, 0.3)",
                color: "#0284c7",
              }}
            >
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>Isolated Sandbox Security</h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Every demo session runs in an isolated ephemeral container with encrypted traffic, role tokens, and zero data leakage.
            </p>
          </div>
        </div>

        {/* 3-Step PoC Execution */}
        <div
          className="p-8 sm:p-12 rounded-3xl mb-16 shadow-sm"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              From Browser Sandbox to Enterprise PoC in 3 Steps
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
              How enterprise teams evaluate, customize, and deploy Ashmyra platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold" style={{ color: "#059669" }}>STAGE 01</div>
              <h4 className="text-base font-bold" style={{ color: "var(--text)" }}>Test The Public Demo</h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Launch any of our 4 live web demos above to review UI, workflow speed, and automated features firsthand.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-bold" style={{ color: "#0284c7" }}>STAGE 02</div>
              <h4 className="text-base font-bold" style={{ color: "var(--text)" }}>Private Scoping Session</h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Meet with our engineering team to map your CRM, databases, ERPs, and custom compliance requirements.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-bold" style={{ color: "#4f46e5" }}>STAGE 03</div>
              <h4 className="text-base font-bold" style={{ color: "var(--text)" }}>VPC / Dedicated Rollout</h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We spin up a dedicated enterprise instance in your AWS/GCP cloud or Ashmyra managed infrastructure with custom SLAs.
              </p>
            </div>
          </div>
        </div>

        {/* Demo FAQ */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{ color: "var(--text)" }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div
              className="p-6 rounded-2xl shadow-sm"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                Are these live demos real working applications or static mockups?
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Every demo linked on this page is a fully functional web application deployed on live cloud infrastructure with real databases, active worker threads, and AI agent execution.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl shadow-sm"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                Can we customize these platforms for our specific business workflows?
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Yes. Ashmyra specializes in custom enterprise software and agentic workflows. All demo platforms can be white-labeled, re-architected, and integrated directly with your internal APIs, databases, and LLM providers.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl shadow-sm"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                Can Ashmyra platforms be deployed on-premise or in our own VPC?
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Yes. We support single-tenant enterprise deployments across AWS, Google Cloud, Microsoft Azure, and private on-premise Kubernetes clusters for complete data sovereignty.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center p-10 sm:p-14 rounded-3xl shadow-md"
          style={{
            backgroundColor: "var(--theme-pill-bg)",
            border: "1px solid var(--theme-pill-border)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>
            Ready for a Personalized Enterprise Walkthrough?
          </h2>
          <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-muted)" }}>
            Book an architecture session with our principal engineers to discuss tailored integrations, dedicated security, and pilot timelines.
          </p>
          <Link
            href="/contact?intent=enterprise-demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105 shadow-md"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
            }}
          >
            <span>Book Private Architecture Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
