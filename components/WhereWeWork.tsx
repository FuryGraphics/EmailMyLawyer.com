import Link from "next/link";
import { MapPin, ArrowUpRight, Building2 } from "lucide-react";
import { cities, sanDiegoNeighborhoods } from "@/lib/cities";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

export function WhereWeWork() {
  const secondary = cities.slice(0, 11);

  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading
        eyebrow="Where We Work"
        title="Serving San Diego & the Surrounding Counties"
        intro="From our office in Mission Valley, we defend clients across San Diego County and into Riverside County. No matter which courthouse your case lands in, we're ready."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Primary San Diego card */}
        <Reveal className="card-dark flex flex-col p-7 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
              <Building2 width={22} height={22} />
            </span>
            <div>
              <p className="eyebrow">Primary Office</p>
              <h3 className="text-2xl font-semibold text-cream">San Diego, CA</h3>
            </div>
          </div>
          <p className="text-cream-dim leading-relaxed">
            San Diego is home base for our firm and the heart of our practice. We appear
            regularly at the San Diego Central Courthouse and throughout the San Diego County
            Superior Court system, defending clients from downtown and the Gaslamp to the
            coastal communities and the neighborhoods of the East County. If you've been
            arrested anywhere in the city, we know the courts, the prosecutors, and the
            fastest path to protecting your record.
          </p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider text-cream-dim">Neighborhoods we serve</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sanDiegoNeighborhoods.map((n) => (
                <span key={n} className="chip">
                  {n}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/san-diego"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-gold hover:gap-3 transition-all"
          >
            Explore San Diego services <ArrowUpRight width={18} height={18} />
          </Link>
        </Reveal>

        {/* Secondary cities grid */}
        <RevealStagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
          {secondary.map((c) => (
            <RevealItem key={c.name}>
              <Link
                href="/service-areas"
                className="card-dark group flex h-full items-center gap-3 p-4"
              >
                <MapPin width={18} height={18} className="shrink-0 text-gold" />
                <div className="min-w-0">
                  <p className="truncate font-medium text-cream group-hover:text-gold">{c.name}</p>
                  <p className="truncate text-xs text-cream-dim">{c.county}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
          <RevealItem>
            <Link
              href="/service-areas"
              className="flex h-full items-center justify-center gap-2 rounded-2xl border border-gold/30 bg-gold/5 p-4 font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              View all areas <ArrowUpRight width={16} height={16} />
            </Link>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
