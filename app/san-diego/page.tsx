import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, ArrowUpRight, MapPin } from "lucide-react";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { HeroCTAs } from "@/components/HeroCTAs";
import { SectionHeading } from "@/components/SectionHeading";
import { FindUs } from "@/components/FindUs";
import { CTABand } from "@/components/CTABand";
import { LocalBusinessSchema } from "@/components/Schema";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { practiceAreas } from "@/lib/practice-areas";
import { sanDiegoNeighborhoods } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Criminal Defense Lawyer San Diego, CA | Tegnelia & DeBose, APC",
  description:
    "Local San Diego criminal defense attorney at your Mission Valley office. DUI, domestic violence, drug & felony defense near the San Diego Central Courthouse. Free consult.",
  alternates: { canonical: "/san-diego" },
};

const crumbs: Crumb[] = [
  { label: "Service Areas", href: "/service-areas" },
  { label: "San Diego", href: "/san-diego" },
];

const courthouses = [
  { name: "San Diego Central Courthouse", detail: "1100 Union St, San Diego — felony & misdemeanor arraignments and trials." },
  { name: "Kearny Mesa (North County) Courthouse", detail: "Serving cases arising in the Kearny Mesa and central-north communities." },
  { name: "San Diego County Superior Court", detail: "The countywide court system where San Diego criminal cases are prosecuted." },
];

export default function SanDiegoPage() {
  return (
    <>
      <LocalBusinessSchema path="/san-diego" />
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="San Diego, CA"
        title="Criminal Defense Attorney in San Diego"
        subhead="Local, aggressive defense from an office minutes from the courthouse. When you're facing charges in San Diego, experience and proximity matter."
        size="sm"
        bgImage="/images/hero-sandiego.jpg"
      >
        <HeroCTAs />
      </PageHero>

      {/* Local intro */}
      <section className="container-x py-14 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="text-lg leading-relaxed text-cream-dim md:text-xl">
            San Diego is where our firm lives and works. From our office at 2820 Camino Del Rio S
            in Mission Valley, we're just minutes from the San Diego Central Courthouse and
            positioned to respond fast when you or a loved one is arrested. We defend clients from
            downtown and the Gaslamp to the beaches of Pacific Beach and La Jolla, across the East
            County communities, and down to the South Bay near the border. We know the San Diego
            County Superior Court, the local prosecutors, and the deputy district attorneys who
            handle these cases — and we use that knowledge to protect your record and your freedom.
            Whether you're facing a first-time DUI, a domestic violence accusation, a drug charge,
            or a serious felony, we bring the same relentless, trial-ready preparation to every San
            Diego case. Your first consultation is always free and completely confidential.
          </p>
        </Reveal>

        {/* Neighborhood chips */}
        <Reveal delay={0.1} className="mt-8">
          <p className="text-xs uppercase tracking-wider text-cream-dim">Neighborhoods we serve</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sanDiegoNeighborhoods.map((n) => (
              <span key={n} className="chip">
                {n}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Courthouse info */}
      <section className="bg-navy-900/40 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Local Courts"
            title="San Diego Courthouse Information"
            intro="Most San Diego criminal cases are heard in the county's Superior Court system. Here's where your case may be handled."
          />
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
            {courthouses.map((c) => (
              <RevealItem key={c.name}>
                <div className="h-full rounded-2xl border border-line bg-white/[0.02] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
                    <Landmark width={20} height={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-cream">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-dim">{c.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Practice areas served */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Practice Areas" title="How We Defend San Diego Clients" />
        <RevealStagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {practiceAreas.map((p) => (
            <RevealItem key={p.slug}>
              <Link href={`/${p.slug}`} className="card-dark group flex items-center justify-between gap-2 p-4">
                <span className="flex items-center gap-3">
                  <MapPin width={16} height={16} className="shrink-0 text-gold" />
                  <span className="text-sm font-medium text-cream group-hover:text-gold">{p.navLabel}</span>
                </span>
                <ArrowUpRight width={15} height={15} className="text-cream-dim/50 group-hover:text-gold" />
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <FindUs eyebrow="Our Office" title="Find Our San Diego Office" />

      <CTABand />
    </>
  );
}
