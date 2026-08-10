import { Star } from "lucide-react";

// Renders 5 stars with precise fractional fill (e.g. 4.4 → four full + a 40% star).
export function StarRating({ value = 5, size = 18 }: { value?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i)); // 0..1 for this star
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star width={size} height={size} className="text-cream-dim/35" strokeWidth={1.5} />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star width={size} height={size} className="fill-gold text-gold" strokeWidth={1.5} />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
