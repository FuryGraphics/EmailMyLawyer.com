import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight, Building2 } from "lucide-react";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { HeroCTAs } from "@/components/HeroCTAs";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Criminal Defense Attorney Serving San Diego County & Riverside County",
  description:
    "EmailMyLawyer.com defends clients across San Diego and Riverside counties — Chula Vista, El Cajon, Oceanside, Escondido, Temecula, Murrieta & more. Free consult.",
  alternates: { canonical: "/service-areas" },
};

const crumbs: Crumb[] = [{ label: "Service Areas", href: "/service-areas" }];

const counties = ["San Diego County", "Riverside County"];

export default function ServiceAreasHub() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Service Areas"
        title="Defending Clients Across Southern California"
        subhead="From our Mission Valley office, EmailMyLawyer.com represents clients throughout San Diego County and into Riverside County. Wherever your case is heard, we're ready to be there."
        size="sm"
      >
        <HeroCTAs />
      </PageHero>

      <section className="container-x pt-14">
        <p className="max-w-3xl text-lg leading-relaxed text-cream-dim md:text-xl">
          Criminal cases are decided in local courthouses by local prosecutors, and knowing those
          courts matters. We regularly appear across the region's Superior Court locations and
          defend clients in every community we serve. Select your city below or contact us for a
          free, confidential consultation.
        </p>
      </section>

      {/* Primary city highlight */}
      <section className="container-x py-14">
        <Reveal>
          <Link
            href="/san-diego"
            className="card-dark group flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                <Building2 width={26} height={26} />
              </span>
              <div>
                <p className="eyebrow">Primary Office</p>
                <h2 className="text-2xl font-semibold text-cream group-hover:text-gold md:text-3xl">
                  San Diego, CA
                </h2>
                <p className="mt-1 text-cream-dim">
                  Serving the San Diego Central Courthouse & County Superior Court
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 font-semibold text-gold">
              Visit San Diego page <ArrowUpRight width={18} height={18} />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* Cities by county */}
      {counties.map((county) => (
        <section key={county} className="container-x pb-14">
          <SectionHeading eyebrow={county} title={`Communities We Serve in ${county.replace(" County", "")} County`} />
          <RevealStagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {cities
              .filter((c) => c.county === county)
              .map((c) => (
                <RevealItem key={c.name}>
                  <Link
                    href="/san-diego"
                    className="card-dark group flex items-center gap-3 p-4"
                  >
                    <MapPin width={18} height={18} className="shrink-0 text-gold" />
                    <span className="font-medium text-cream group-hover:text-gold">{c.name}</span>
                  </Link>
                </RevealItem>
              ))}
          </RevealStagger>
        </section>
      ))}

      <CTABand
        heading="Arrested Outside the City of San Diego?"
        subheading="No matter which county or courthouse your case lands in, we're prepared to defend you. Reach out for a free case review today."
      />
    </>
  );
}
