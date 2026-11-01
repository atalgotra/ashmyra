import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

export function Breadcrumb({
  items,
  className = "",
  showHomeIcon = true,
}: BreadcrumbProps) {
  // Construct Schema.org BreadcrumbList payload
  const breadcrumbListElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ashmyra.com",
    },
    ...items.map((item, index) => {
      const position = index + 2;
      const element: {
        "@type": string;
        position: number;
        name: string;
        item?: string;
      } = {
        "@type": "ListItem",
        "position": position,
        "name": item.name,
      };
      if (item.href) {
        element.item = item.href.startsWith("http")
          ? item.href
          : `https://www.ashmyra.com${item.href.startsWith("/") ? item.href : `/${item.href}`}`;
      }
      return element;
    }),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbListElements,
  };

  return (
    <>
      {/* Schema.org BreadcrumbList Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Breadcrumb Navigation Trail */}
      <nav
        aria-label="Breadcrumb"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono backdrop-blur-md transition-colors ${className}`}
      >
        <ol className="flex items-center gap-1.5 list-none m-0 p-0 text-neutral-400">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
              title="Return to Ashmyra Home"
            >
              {showHomeIcon && <Home className="w-3.5 h-3.5" />}
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" aria-hidden="true" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors truncate max-w-[160px] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className="text-white font-medium truncate max-w-[180px] sm:max-w-none"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
