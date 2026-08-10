import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import { ReviewsCarousel } from "./Reviews";
import { StarRating } from "./StarRating";
import { Reveal } from "./Reveal";

export function ReviewsSection() {
  return (
    <section className="bg-navy-900/40 py-16 md:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-cream gold-underline">
              What Our Clients Say
            </h2>
          </div>
          <div className="rounded-2xl border border-line bg-white/[0.02] px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold text-gold">{site.rating.toFixed(1)}</span>
              <StarRating value={site.rating} size={16} />
            </div>
            <p className="mt-1 text-sm text-cream-dim">
              Based on {site.reviewCount} Google reviews
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <ReviewsCarousel reviews={reviews} />
        </div>

        <Reveal className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={site.maps} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Leave a Review <ArrowUpRight width={17} height={17} />
          </a>
          <Link href="/testimonials" className="btn-outline">
            Read all testimonials
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
