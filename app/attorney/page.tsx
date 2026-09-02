import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Scale, Award, Landmark, Users, ShieldCheck } from "lucide-react";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { HeroCTAs } from "@/components/HeroCTAs";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { AttorneySchema } from "@/components/Schema";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marcus DeBose — San Diego Criminal Defense Lawyer",
  description:
    "Meet Marcus DeBose, criminal defense attorney at EmailMyLawyer.com in San Diego. Aggressive, experienced representation for DUI, felony & serious charges.",
  alternates: { canonical: "/attorney" },
};

const crumbs: Crumb[] = [{ label: "Attorney", href: "/attorney" }];

const credentials = [
  { icon: GraduationCap, title: "Juris Doctor", body: "Legal education with a focus on criminal litigation and trial advocacy." },
  { icon: Landmark, title: "State Bar of California", body: "Licensed and in good standing to practice throughout California's state and federal courts." },
  { icon: Scale, title: "Criminal Defense Focus", body: "A practice dedicated exclusively to defending the accused — not a general practice dabbling in criminal law." },
  { icon: Award, title: "Trial-Tested", body: "Courtroom experience across misdemeanor and felony matters, including serious and violent charges." },
  { icon: Users, title: "Client-Centered", body: "Direct attorney access and clear communication at every stage of your case." },
  { icon: ShieldCheck, title: "Se Habla Español", body: "Bilingual service so every client fully understands their rights and options." },
];

const results = [
  { stat: "Charges Dismissed", body: "Secured outright dismissals by exposing unlawful searches and insufficient evidence." },
  { stat: "Reduced to Misdemeanor", body: "Negotiated felony 'wobbler' charges down to misdemeanors, protecting clients' records and rights." },
  { stat: "Not-Guilty Verdicts", body: "Took cases to trial and held the prosecution to its burden of proof before a jury." },
  { stat: "Records Cleared", body: "Helped clients expunge convictions and reopen doors to jobs and housing." },
];

export default function AttorneyPage() {
  return (
    <>
      <AttorneySchema />
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Meet Your Attorney"
        title="Marcus DeBose — Criminal Defense Attorney"
        subhead="A relentless advocate for the accused across San Diego County, dedicated to protecting your rights, your record, and your future."
        size="sm"
      >
        <HeroCTAs />
      </PageHero>

      {/* Bio + headshot */}
      <section className="container-x py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/marcus-debose.jpg"
                  alt="Marcus DeBose, San Diego criminal defense attorney"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-gold/30 bg-navy-900 p-5 shadow-2xl md:-right-6">
                <p className="font-serif text-3xl font-bold text-gold">25</p>
                <p className="mt-1 text-sm text-cream-dim">Years Practicing</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">Biography</p>
            <h2 className="text-3xl font-semibold text-cream gold-underline md:text-4xl">
              A Defense Built on Preparation
            </h2>
            <div className="mt-6 space-y-4 text-cream-dim leading-relaxed">
              <p>
                For 25 years, Marcus E. DeBose has built his San Diego criminal defense practice
                on a conviction that never wavers: the accused deserve a fierce, fully prepared
                advocate standing between them and the power of the state. He built
                EmailMyLawyer.com to be that advocate for people across San Diego County facing
                the most frightening moment of their lives.
              </p>
              <p>
                Marcus's practice is devoted entirely to criminal defense — from DUI and domestic
                violence to drug charges, theft, weapons offenses, and serious felonies. That focus
                means he knows how San Diego prosecutors build their cases, where those cases tend
                to break down, and how to turn procedural missteps and weak evidence into
                dismissals and reductions.
              </p>
              <p>
                Clients choose Marcus for his direct, no-nonsense communication and his willingness
                to take a case to trial when the prosecution overreaches. He treats every client
                with respect and every case as if it's headed to a jury — because that preparation
                is exactly what creates leverage. Bilingual and available around the clock, he
                makes sure every client understands their rights and never feels alone in the fight.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 text-lg italic text-cream">
              "An arrest is an accusation, not a verdict. My job is to make the government prove
              every word of it — and to protect your future while I do."
              <cite className="mt-2 block text-sm not-italic text-cream-dim">— Marcus DeBose</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* In the media */}
      <section className="container-x pb-8 md:pb-12">
        <Reveal>
          <div className="rounded-2xl border border-line bg-white/[0.02] p-6 md:p-8">
            <p className="eyebrow mb-6 text-center">Featured in the National Media</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-line">
                <Image
                  src="/images/media-dateline.jpg"
                  alt="Attorney Marcus DeBose interviewed on Dateline NBC"
                  width={800}
                  height={430}
                  className="h-52 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-cream-dim">
                  Featured as a legal analyst on <span className="text-cream">Dateline NBC</span>
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-line">
                <Image
                  src="/images/media-nbc.jpg"
                  alt="Attorney Marcus DeBose featured on NBC covering a criminal case"
                  width={800}
                  height={600}
                  className="h-52 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-cream-dim">
                  Sought-after commentary on <span className="text-cream">NBC News</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Credentials */}
      <section className="bg-navy-900/40 py-16 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Credentials" title="Experience & Qualifications" />
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full rounded-2xl border border-line bg-white/[0.02] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
                    <c.icon width={20} height={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-cream">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-dim">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Notable results (generalized) */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          eyebrow="Case Results"
          title="A Record of Results"
          intro="Past results do not guarantee future outcomes, and every case is different. These generalized examples reflect the kinds of outcomes we fight for."
        />
        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r) => (
            <RevealItem key={r.stat}>
              <div className="h-full rounded-2xl border border-line bg-white/[0.02] p-6">
                <p className="font-serif text-xl font-semibold text-gold">{r.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">{r.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CTABand
        heading="Ready to Talk to Marcus?"
        subheading={`Your first consultation is free and completely confidential. Call ${site.phone} or request a case review online.`}
      />
    </>
  );
}
