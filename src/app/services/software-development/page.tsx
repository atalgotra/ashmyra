import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, ENGINEERING_PROCESS } from "@/data/services";
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
  title: "Custom Software & SaaS Engineering Services",
  description:
    "End-to-end bespoke software engineering: multi-tenant SaaS architecture, cloud microservices, and mission-critical enterprise systems.",
  alternates: {
    canonical: "https://ashmyra.com/services/software-development",
  },
};

export default function SoftwareDevelopmentServicePage() {
  const service = SERVICES.find((s) => s.slug === "software-development")!;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
