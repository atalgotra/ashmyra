import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Ashmyra",
  description: "Terms and conditions governing the use of Ashmyra software, SaaS platforms, and engineering services.",
  alternates: {
    canonical: "https://ashmyra.com/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Ashmyra</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-mono text-xs w-max mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-neutral-500 font-mono mb-12">
          Last Updated: March 2025
        </p>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Ashmyra website (`ashmyra.com`), software applications, or consulting services, you agree to be bound by these Terms of Service and applicable Master Services Agreements (MSAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Proprietary Intellectual Property</h2>
            <p>
              All software architectures, proprietary algorithms, agentic orchestration engines, and website designs developed by Ashmyra are the protected intellectual property of Ashmyra, unless explicitly assigned in custom development contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Acceptable Use of AI Systems</h2>
            <p>
              Customers and users agree not to utilize Ashmyra AI, automation tools, or APIs for unlawful operations, deceptive practices, security probing without authorization, or generation of hazardous content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Service Level Commitments</h2>
            <p>
              Enterprise SaaS products provided by Ashmyra are backed by dedicated Service Level Agreements (SLAs) specifying uptime, support response windows, and incident escalation protocols.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
