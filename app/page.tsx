import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Award } from "lucide-react";
import { site } from "@/lib/site";
import { generalFaqs } from "@/lib/faqs";
import { TrustStrip } from "@/components/TrustStrip";
import { PracticeGrid } from "@/components/PracticeGrid";
import { StatSplit } from "@/components/StatSplit";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhereWeWork } from "@/components/WhereWeWork";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { FindUs } from "@/components/FindUs";
import { CTABand } from "@/components/CTABand";
import { LegalServiceSchema } from "@/components/Schema";

export const metadata: Metadata = {
  // Root-segment page: the layout's title.template doesn't apply here, so include the brand.
  title: "Criminal Defense Attorney San Diego CA | EmailMyLawyer.com",
  description:
    "Aggressive San Diego criminal defense attorneys handling DUI, domestic violence, drug, theft & felony charges. Free consultation, 24/7 response. Call (619) 876-0992.",
  alternates: { canonical: "/" },
};

const homeSteps = [
  {
    title: "Free Consultation",
    body: "Call us any time for a free, confidential case review. We listen, answer your questions, and explain exactly what you're facing.",
  },
  {
    title: "Case Evaluation & Strategy",
    body: "We investigate the evidence, identify weaknesses in the state's case, and build a defense strategy tailored to your goals.",
  },
  {
    title: "Aggressive Representation",
    body: "We handle every hearing, motion, and negotiation — challenging the prosecution at every step to protect your rights.",
  },
  {
    title: "Resolution",
    body: "Whether by dismissal, reduced charges, a favorable plea, or a trial verdict, we fight for the best possible outcome.",
  },
];

export default function HomePage() {
  return (
    <>
      <LegalServiceSchema />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-sandiego.jpg"
            alt="Attorney Marcus DeBose with the San Diego skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          {/* Overlays tuned so left-aligned copy stays legible over the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/90" />
          <div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="container-x">
          <div className="max-w-3xl">
            <div className="reveal-css mb-5 flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
              <Award width={16} height={16} /> 25 Years Serving San Diego
            </div>
            <p className="reveal-css eyebrow mb-5">EmailMyLawyer.com · San Diego Criminal Defense</p>
            <h1
              className="reveal-css text-4xl font-semibold leading-[1.06] text-cream gold-underline md:text-6xl lg:text-[4.25rem]"
              style={{ animationDelay: "0.08s" }}
            >
              Criminal Defense Attorney in San Diego, CA
            </h1>
            <p
              className="reveal-css mt-7 max-w-2xl text-lg leading-relaxed text-cream-dim md:text-xl"
              style={{ animationDelay: "0.16s" }}
            >
              An arrest is not a conviction. When your freedom, your record, and your future
              are on the line, you need an aggressive, experienced defense. We fight to protect
              what matters most — and we're available 24/7.
            </p>
            <div className="reveal-css" style={{ animationDelay: "0.24s" }}>
              <TrustStrip className="mt-8" />
            </div>
            <div className="reveal-css mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.32s" }}>
              <Link href="/contact" className="btn-gold">
                Free Case Review <ArrowRight width={18} height={18} />
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                <Phone width={18} height={18} /> Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <PracticeGrid />

      <StatSplit
        eyebrow="Our Story"
        title="25 Years of Experience on Your Side"
        paragraphs={[
          "For 25 years, EmailMyLawyer.com and attorney Marcus E. DeBose have stood between San Diego's accused and the power of the state. That experience means an insider's understanding of how local prosecutors build — and lose — their cases, and the judgment that only comes from decades in the courtroom.",
          "We treat every client with respect and every case as if it's headed to trial. That preparation is what gives us leverage to win dismissals, reductions, and acquittals for the people who trust us with their future.",
        ]}
        stats={[
          { value: "25", label: "Years Serving San Diego" },
          { value: "500+", label: "Cases Defended" },
          { value: "24/7", label: "Client Availability" },
        ]}
        linkHref="/attorney"
        linkLabel="Meet Attorney DeBose"
        image="/images/story-consultation.jpg"
      />

      <ProcessSteps
        steps={homeSteps}
        intro="From your first call to the final resolution, here's how we defend your case — with clear communication at every stage."
      />

      <WhereWeWork />

      <ReviewsSection />

      <FAQSection
        faqs={generalFaqs}
        intro="Straight answers to the questions we hear most from people facing criminal charges in San Diego."
      />

      <FindUs />

      <CTABand />
    </>
  );
}
