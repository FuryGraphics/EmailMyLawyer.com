import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, ShieldCheck, Clock, MessageSquare, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { practiceAreas } from "@/lib/practice-areas";
import { cities } from "@/lib/cities";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-900">
      {/* Trust badges row */}
      <div className="border-b border-line">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Free Consultation" },
            { icon: Clock, label: "24/7 Case Review" },
            { icon: MessageSquare, label: "Se Habla Español" },
            { icon: Globe, label: "Former Prosecutor Insight" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/12 text-gold ring-1 ring-gold/25">
                <Icon width={18} height={18} />
              </span>
              <span className="text-sm font-medium text-cream">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <Logo wordmarkOnly />
          <p className="mt-5 text-sm leading-relaxed text-cream-dim">
            Aggressive, experienced criminal defense for San Diego and the surrounding
            counties. When your freedom is on the line, you deserve a lawyer who fights.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-cream-dim transition-colors hover:border-gold hover:text-gold"
            aria-label="Facebook"
          >
            <Facebook width={18} height={18} />
          </a>
        </div>

        {/* Practice areas */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Practice Areas
          </h3>
          <ul className="mt-5 space-y-2.5">
            {practiceAreas.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="text-sm text-cream-dim transition-colors hover:text-cream"
                >
                  {p.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Service Areas
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            <li>
              <Link href="/san-diego" className="text-sm text-cream-dim transition-colors hover:text-cream">
                San Diego
              </Link>
            </li>
            {cities.slice(0, 13).map((c) => (
              <li key={c.name}>
                <Link
                  href="/service-areas"
                  className="text-sm text-cream-dim transition-colors hover:text-cream"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-3 inline-block text-sm font-semibold text-gold">
            View all areas →
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
              <a href={site.maps} target="_blank" rel="noopener noreferrer" className="text-cream-dim hover:text-cream">
                {site.address.full}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone width={18} height={18} className="shrink-0 text-gold" />
              <a href={site.phoneHref} className="text-cream-dim hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail width={18} height={18} className="shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="text-cream-dim hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-line p-4">
            <p className="text-xs uppercase tracking-wider text-cream-dim">Hours</p>
            <p className="mt-1 text-sm text-cream">Mon–Fri: 8:00 AM – 6:00 PM</p>
            <p className="text-sm text-cream">Sat: By Appointment</p>
            <p className="text-sm text-gold">24/7 Case Review Line</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-dim md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brand}, a service of {site.legalName}. All rights
            reserved. Attorney Advertising.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-cream transition-colors">
              Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="hover:text-cream transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
