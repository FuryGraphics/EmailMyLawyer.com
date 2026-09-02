import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ReviewsGrid } from "@/components/Reviews";
import { StarRating } from "@/components/StarRating";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description:
    "Read reviews and testimonials from clients of EmailMyLawyer.com. See why San Diego trusts our criminal defense team. Free consultation — (619) 876-0992.",
  alternates: { canonical: "/testimonials" },
};

const crumbs: Crumb[] = [{ label: "Testimonials", href: "/testimonials" }];

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Testimonials"
        title="What Our Clients Say"
        subhead="Behind every review is a person who faced one of the hardest moments of their life — and came through it with our team in their corner."
        size="sm"
        align="center"
      >
        <div className="mx-auto flex w-fit flex-col items-center gap-3 rounded-2xl border border-line bg-white/[0.03] px-8 py-5">
          <div className="flex items-center gap-3">
            <span className="font-serif text-4xl font-bold text-gold">{site.rating.toFixed(1)}</span>
            <StarRating value={site.rating} size={20} />
          </div>
          <p className="text-sm text-cream-dim">Based on {site.reviewCount} verified Google reviews</p>
        </div>
      </PageHero>

      <section className="container-x py-14 md:py-20">
        <ReviewsGrid reviews={reviews} />

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={site.maps} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Leave a Review on Google <ArrowUpRight width={17} height={17} />
          </a>
        </Reveal>
      </section>

      <CTABand
        heading="Ready to Be Our Next Success Story?"
        subheading={`Call ${site.phone} for a free, confidential consultation and find out how we can defend your case.`}
      />
    </>
  );
}
