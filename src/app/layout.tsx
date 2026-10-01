import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterMinimal } from "@/components/footer-minimal";
import { SeoSchema } from "@/components/seo-schema";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ashmyra.com"),
  title: {
    default: "Ashmyra | AI-Native Technology Company | Intelligent Software & SaaS",
    template: "%s | Ashmyra",
  },
  description:
    "Ashmyra builds AI-powered software, SaaS platforms, autonomous agentic systems, and intelligent business solutions that help companies automate operations and scale without limits.",
  keywords: [
    "Ashmyra",
    "AI-Native Technology Company",
    "Agentic AI",
    "Ashmyra SEO",
    "Ashmyra HRMS",
    "Workflow Automation",
    "SaaS Development",
    "Generative Engine Optimization",
    "Enterprise Software",
    "Custom Software Engineering",
  ],
  authors: [
    { name: "Ashmyra Technologies" },
    { name: "Ashish Talgotra", url: "https://www.linkedin.com/in/atalgotra/" },
    { name: "Swati" },
  ],
  creator: "Ashmyra",
  publisher: "Ashmyra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ashmyra | Technology That Thinks Beyond Software",
    description:
      "Ashmyra builds AI-powered software, SaaS platforms, and intelligent business systems that turn complex operations into simple, scalable workflows.",
    url: "https://ashmyra.com",
    siteName: "Ashmyra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashmyra | AI-Native Technology Company",
    description:
      "Build Smarter. Automate Everything. Grow Without Limits. Explore Ashmyra's intelligent software and SaaS ecosystem.",
    creator: "@ashmyra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ashmyra.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050608] text-[#f1f5f9] selection:bg-indigo-500/30 selection:text-indigo-200">
        <CustomCursor />
        <SeoSchema />
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <FooterMinimal />
      </body>
    </html>
  );
}
