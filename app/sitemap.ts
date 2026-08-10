import type { MetadataRoute } from "next";
import { practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/practice-areas", priority: 0.9, freq: "monthly" as const },
    { path: "/attorney", priority: 0.8, freq: "monthly" as const },
    { path: "/service-areas", priority: 0.8, freq: "monthly" as const },
    { path: "/san-diego", priority: 0.8, freq: "monthly" as const },
    { path: "/testimonials", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/disclaimer", priority: 0.3, freq: "yearly" as const },
  ];

  const practiceRoutes = practiceAreas.map((p) => ({
    path: `/${p.slug}`,
    priority: 0.8,
    freq: "monthly" as const,
  }));

  return [...staticRoutes, ...practiceRoutes].map((r) => ({
    url: `${site.domain}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
