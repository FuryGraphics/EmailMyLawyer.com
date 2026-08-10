import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import { practiceAreas, getPracticeArea } from "@/lib/practice-areas";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { HeroCTAs } from "@/components/HeroCTAs";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyPrivate } from "@/components/WhyPrivate";
import { FAQSection } from "@/components/FAQSection";
import { RelatedAreas } from "@/components/RelatedAreas";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.seoTitle,
    description: area.metaDescription,
    alternates: { canonical: `/${area.slug}` },
    openGraph: {
      title: `${area.seoTitle} | ${site.legalName}`,
      description: area.metaDescription,
      url: `${site.domain}/${area.slug}`,
      type: "article",
    },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const crumbs: Crumb[] = [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: area.name, href: `/${area.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Criminal Defense"
        title={area.h1}
        subhead={area.heroSubhead}
        size="sm"
      >
        <HeroCTAs />
      </PageHero>

      {/* Intro */}
      <section className="container-x py-14 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="text-lg leading-relaxed text-cream-dim md:text-xl">{area.intro}</p>
        </Reveal>
      </section>

      {/* What We Handle */}
      <section className="bg-navy-900/40 py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">What We Handle</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-cream gold-underline">
              Charges &amp; Cases We Defend
            </h2>
            <p className="mt-6 text-cream-dim leading-relaxed">
              Our defense covers the full range of related charges and proceedings. If your
              situation isn't listed, call us — we handle it.
            </p>
            <a href={site.phoneHref} className="btn-gold mt-8">
              <Phone width={17} height={17} /> {site.phone}
            </a>
          </Reveal>

          <RevealStagger className="grid gap-3 sm:grid-cols-2" stagger={0.05}>
            {area.handles.map((h) => (
              <RevealItem key={h}>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-white/[0.02] p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">
                    <Check width={14} height={14} />
                  </span>
                  <span className="text-sm text-cream">{h}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* The Process */}
      <ProcessSteps
        steps={area.process}
        eyebrow="The Process"
        title="How We Defend Your Case"
        intro="Every case is different, but our approach is disciplined and relentless from the first call to the final resolution."
      />

      {/* Penalties box */}
      <section className="container-x py-16 md:py-24">
        <Reveal className="overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-navy/50 to-navy-900/60">
          <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-line p-8 md:border-b-0 md:border-r">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
                <AlertTriangle width={24} height={24} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-cream">{area.penalties.heading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">{area.penalties.body}</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {area.penalties.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-cream-dim">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <WhyPrivate />

      <FAQSection
        faqs={area.faqs}
        title={`${area.name} FAQs`}
        intro={`Answers to common questions about ${area.name.toLowerCase()} cases in San Diego.`}
      />

      {/* Inline CTA before related */}
      <section className="container-x pb-4">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-white/[0.02] p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-cream">
              Charged with {area.name.replace(" Defense", "").replace(" & Violent Crime", "")}? Don't wait.
            </h2>
            <p className="mt-2 text-cream-dim">
              The sooner we get involved, the more we can do. Your first consultation is free.
            </p>
          </div>
          <Link href="/contact" className="btn-gold shrink-0">
            Free Case Review <ArrowRight width={18} height={18} />
          </Link>
        </Reveal>
      </section>

      <RelatedAreas slugs={area.related} />

      <CTABand />
    </>
  );
}
