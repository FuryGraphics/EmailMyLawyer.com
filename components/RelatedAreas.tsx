import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPracticeArea } from "@/lib/practice-areas";
import { SectionHeading } from "./SectionHeading";
import { RevealStagger, RevealItem } from "./Reveal";

export function RelatedAreas({ slugs }: { slugs: string[] }) {
  const areas = slugs.map(getPracticeArea).filter(Boolean);
  if (!areas.length) return null;

  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Related Practice Areas" title="Explore Related Defenses" />
      <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
        {areas.map((area) => (
          <RevealItem key={area!.slug}>
            <Link href={`/${area!.slug}`} className="card-dark group flex h-full flex-col p-6">
              <h3 className="text-lg font-semibold text-cream group-hover:text-gold">
                {area!.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-dim">
                {area!.heroSubhead}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Learn more <ArrowUpRight width={15} height={15} />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
