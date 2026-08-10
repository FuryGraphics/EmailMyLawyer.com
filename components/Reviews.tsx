"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Review } from "@/lib/reviews";
import { StarRating } from "./StarRating";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="card-dark flex h-full flex-col p-6 md:p-8">
      <Quote width={30} height={30} className="text-gold/50" />
      <p className="mt-4 flex-1 text-cream/90 leading-relaxed">{review.body}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-semibold text-gold">
          {review.initials}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-cream">{review.name}</p>
          <p className="text-xs text-cream-dim">
            {review.source} · {review.date}
          </p>
        </div>
        <StarRating value={review.rating} size={14} />
      </div>
    </div>
  );
}

// Carousel showing a page of reviews at a time (3 on desktop).
export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(reviews.length / perPage);
  const start = page * perPage;
  const visible = reviews.slice(start, start + perPage);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((r, i) => (
            <ReviewCard key={`${page}-${i}`} review={r} />
          ))}
        </motion.div>
      </AnimatePresence>

      {pages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Previous reviews"
          >
            <ChevronLeft width={18} height={18} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to review page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? "w-7 bg-gold" : "w-2.5 bg-cream-dim/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => (p + 1) % pages)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Next reviews"
          >
            <ChevronRight width={18} height={18} />
          </button>
        </div>
      )}
    </div>
  );
}

// Simple non-interactive grid used on the testimonials page.
export function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => (
        <ReviewCard key={i} review={r} />
      ))}
    </div>
  );
}
