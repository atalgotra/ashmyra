import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ashmyra privacy policy, data protection commitments, and enterprise security architecture.",
  alternates: {
    canonical: "https://www.ashmyra.com/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div
      className="pt-32 pb-24 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { name: "Legal", href: "/legal/privacy" },
              { name: "Privacy Policy" },
            ]}
          />
        </div>

        <div
          className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono w-max mb-4"
          style={{
            backgroundColor: "var(--theme-pill-bg)",
            border: "1px solid var(--theme-pill-border)",
            color: "var(--accent-emerald)",
          }}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="font-semibold">Security &amp; Data Governance</span>
        </div>

        <h1
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-xs font-mono mb-12" style={{ color: "var(--text-muted)" }}>
          Effective Date: January 1, 2025 &bull; Last Revised: March 2025
        </p>

        <div className="space-y-8 text-sm leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
          <section className="space-y-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>1. Commitment to Data Privacy</h2>
            <p>
              Ashmyra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) designs software with security-first architecture. We do not sell client data to third parties, nor do we train public foundation models on private enterprise client information without explicit, opt-in consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>2. Information We Collect</h2>
            <p>
              When you interact with our website, request a demo, or use our software platforms, we may collect business contact information (name, company email, organization name, role) and technical telemetry (browser details, IP address, and platform usage metrics) to deliver and secure our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>3. Agentic AI &amp; Data Isolation</h2>
            <p>
              Workflows processed by Ashmyra AI and Ashmyra Automation run in isolated, tenant-segregated runtimes. Customer data passed through API tools remains strictly within designated compliance boundaries, backed by enterprise-grade encryption at rest and in transit.
            </p>
          </section>

          <section id="cookies" className="space-y-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>4. Cookies and Analytical Tracking</h2>
            <p>
              We use strictly necessary technical cookies to maintain user session security and performance diagnostics. Users may configure their browser preferences to refuse non-essential analytics cookies at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>5. Contact and Inquiries</h2>
            <p>
              For questions regarding our privacy practices or to exercise data access rights, please contact our legal and security desk via our{" "}
              <Link href="/contact" className="underline font-semibold" style={{ color: "var(--accent)" }}>
                Contact Page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
