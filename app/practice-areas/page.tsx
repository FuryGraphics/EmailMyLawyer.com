import type { Metadata } from "next";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { HeroCTAs } from "@/components/HeroCTAs";
import { PracticeGrid } from "@/components/PracticeGrid";
import { WhyPrivate } from "@/components/WhyPrivate";
import { CTABand } from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "San Diego Criminal Defense Law Firm | Practice Areas",
  description:
    "Explore the criminal defense practice areas of Tegnelia & DeBose, APC — DUI, domestic violence, drug, theft, assault, weapons, white collar & felony defense in San Diego.",
  alternates: { canonical: "/practice-areas" },
};

const crumbs: Crumb[] = [{ label: "Practice Areas", href: "/practice-areas" }];

export default function PracticeAreasHub() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Practice Areas"
        title="San Diego Criminal Defense — Full Service"
        subhead="Whatever you're facing, we've defended it. From a first-time misdemeanor to the most serious felony, Tegnelia & DeBose, APC brings the same relentless preparation to every case."
        size="sm"
      >
        <HeroCTAs />
      </PageHero>

      <section className="container-x pt-14">
        <p className="max-w-3xl text-lg leading-relaxed text-cream-dim md:text-xl">
          A criminal charge touches every part of your life — your job, your family, your
          freedom, and your reputation. Our firm defends the full spectrum of state and federal
          charges across San Diego County and into Riverside County. Select a practice area below
          to learn how we build a defense tailored to your case, or call us for a free,
          confidential consultation.
        </p>
      </section>

      <PracticeGrid withHeading={false} />

      <WhyPrivate />

      <CTABand
        heading="Not Sure Which Practice Area Fits Your Case?"
        subheading={`Call ${site.phone} for a free, confidential review. We'll tell you exactly what you're facing and how we can help.`}
      />
    </>
  );
}
