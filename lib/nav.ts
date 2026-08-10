import { practiceAreas } from "./practice-areas";
import type { NavItem } from "./site";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: practiceAreas.map((p) => ({
      label: p.navLabel,
      href: `/${p.slug}`,
    })),
  },
  { label: "Attorney", href: "/attorney" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// Cities shown in the "Serving …" strip under the main nav row.
export const servingStrip = ["San Diego", "Chula Vista", "El Cajon", "Oceanside", "Escondido", "Temecula"];
