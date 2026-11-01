import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Ashmyra software, SaaS platforms, and engineering services.",
  alternates: {
    canonical: "https://www.ashmyra.com/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { name: "Legal", href: "/legal/terms" },
              { name: "Terms of Service" },
            ]}
          />
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
              By accessing or using the Ashmyra website (<code>ashmyra.com</code>), software applications, hosted SaaS platforms, APIs, or consulting services provided by Ashmyra Technologies, you enter into a binding agreement governed by these Terms of Service, our Privacy Policy, and any executed Master Services Agreements (MSAs) or Statements of Work (SOWs). If you represent an organization, you affirm that you possess full corporate authority to bind that entity to these provisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Proprietary Intellectual Property & Deliverables</h2>
            <p>
              All core software architectures, proprietary algorithms, agentic orchestration engines, heuristics, vector workflows, and interface designs created by Ashmyra Technologies remain the exclusive intellectual property of Ashmyra Technologies. Custom software deliverables tailored specifically for client deployment are licensed or assigned in accordance with explicit terms set forth in individual client contracts and MSAs. Clients retain exclusive ownership of their pre-existing proprietary data, business schemas, and brand assets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Acceptable Use of AI Systems & Infrastructure</h2>
            <p>
              Users, developers, and enterprise clients agree not to utilize Ashmyra AI modules, orchestration frameworks, APIs, or automated services for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li>Unlawful, deceptive, fraudulent, or defamatory business practices.</li>
              <li>Unauthorized vulnerability probing, denial-of-service attempts, or reverse engineering of proprietary AI models.</li>
              <li>Generation, storage, or dissemination of malicious code, malware, or surveillance tracking in violation of global privacy statutes.</li>
              <li>Circumvention of API rate limits, computational quotas, or security authentication controls.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Service Level Commitments & Hosting</h2>
            <p>
              Enterprise SaaS products and mission-critical cloud deployments engineered by Ashmyra Technologies are backed by dedicated Service Level Agreements (SLAs). Standard SLAs specify 99.9% targeted uptime, round-the-clock infrastructure telemetry, prioritized incident escalation protocols, and scheduled maintenance windows communicated in advance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Client Data & Confidentiality</h2>
            <p>
              Ashmyra Technologies maintains strict confidentiality regarding all proprietary client data, operational logs, and trade secrets transmitted during the course of engineering engagements. Client data processed through Ashmyra AI systems is never shared with third-party model providers for foundation model training without explicit written enterprise consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Limitation of Liability & Warranties</h2>
            <p>
              To the maximum extent permitted by applicable law, Ashmyra Technologies provides services and platforms &ldquo;as is&rdquo; without implied warranties of merchantability or fitness for a particular purpose beyond express contractual commitments. In no event shall Ashmyra Technologies be liable for indirect, punitive, or consequential damages resulting from operational interruptions, network outages, or unauthorized third-party intrusion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of India, without regard to conflict of law principles. Any legal actions, proceedings, or disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in New Delhi, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Amendments & Inquiries</h2>
            <p>
              Ashmyra Technologies reserves the right to periodically update these Terms to reflect technical innovations, regulatory developments, or operational enhancements. Continued engagement with our services constitutes acceptance of revised terms. For questions regarding enterprise agreements or these Terms, contact our legal counsel at <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">legal@ashmyra.com</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
