import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="container-x pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cream-dim">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-gold" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-cream transition-colors">
                  {c.label}
                </Link>
              )}
              {!last && <ChevronRight width={14} height={14} className="text-cream-dim/50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Emit BreadcrumbList JSON-LD for a list of crumbs.
export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.domain}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
