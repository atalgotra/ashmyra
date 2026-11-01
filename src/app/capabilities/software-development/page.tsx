import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, ENGINEERING_PROCESS } from "@/data/services";
import { Breadcrumb } from "@/components/breadcrumb";
import { 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Layers 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software & SaaS Engineering",
  description:
    "End-to-end bespoke software engineering: multi-tenant SaaS architecture, cloud microservices, and mission-critical enterprise systems.",
  alternates: {
    canonical: "https://www.ashmyra.com/capabilities/software-development",
  },
  openGraph: {
    title: "Custom Software & SaaS Engineering | Ashmyra",
    description:
      "End-to-end bespoke software engineering: multi-tenant SaaS architecture, cloud microservices, and mission-critical enterprise systems.",
    url: "https://www.ashmyra.com/capabilities/software-development",
  },
};

export default function SoftwareDevelopmentServicePage() {
  const service = SERVICES.find((s) => s.slug === "software-development")!;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@id": "https://www.ashmyra.com/#organization",
    },
    "serviceType": "Enterprise Custom Software & SaaS Engineering",
    "areaServed": "Worldwide",
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Breadcrumb
            items={[
              { name: "Capabilities", href: "/capabilities" },
              { name: "Software Development" },
            ]}
          />
        </div>

        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-6">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Enterprise Software Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Custom Software &amp; SaaS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              Built for Scale &amp; Performance.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {service.longDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?intent=software-eng"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
            >
              Consult with Senior Software Architects
            </Link>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Core Engineering Capabilities</h2>
            <div className="space-y-3">
              {service.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-300">{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Primary Technology Stack</h2>
            <div className="grid grid-cols-2 gap-3">
              {service.technologies.map((tech, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <span className="text-xs font-mono font-bold text-indigo-300">{tech}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2">
              All systems are engineered type-safe with automated integration testing suites, containerized deployments, and continuous telemetry monitoring.
            </p>
          </div>
        </div>

        {/* Production Use Cases */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Production Use Cases We Architect
            </h2>
            <p className="text-sm text-neutral-400">
              Battle-tested software architectures designed for enterprise concurrency, multi-tenant compliance, and high availability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((uc, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                <div className="text-sm font-bold text-white mb-2">{uc.title}</div>
                <p className="text-xs text-neutral-300 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Stage Engineering Discipline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Our 7-Stage Engineering Discipline
            </h2>
            <p className="text-sm text-neutral-400">
              Deterministic milestones from technical discovery to zero-downtime production deployment and telemetry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ENGINEERING_PROCESS.map((proc) => (
              <div key={proc.step} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-indigo-400">{proc.step} · {proc.phase}</span>
                </div>
                <div className="text-xs font-bold text-white mb-1.5">{proc.title}</div>
                <p className="text-[11px] text-neutral-400 leading-relaxed mb-3">{proc.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {proc.outputs.map((out, oIdx) => (
                    <span key={oIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.06]">
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-2">
            Have a custom software or SaaS product to build?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto mb-6">
            Our architects will evaluate technical feasibility and estimate milestones for production deployment.
          </p>
          <Link
            href="/contact?intent=custom-software"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Start a Technical Scoping Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
