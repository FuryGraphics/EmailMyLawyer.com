import { ShieldCheck, Clock, MessageSquare } from "lucide-react";
import { StarRating } from "./StarRating";
import { site } from "@/lib/site";

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-sm ${className}`}
    >
      <div className="flex items-center gap-2">
        <StarRating value={site.rating} size={16} />
        <span className="font-semibold text-cream">
          {site.rating.toFixed(1)}
        </span>
        <span className="text-cream-dim">({site.reviewCount} Google reviews)</span>
      </div>
      <span className="hidden h-4 w-px bg-line sm:block" />
      <span className="flex items-center gap-1.5 text-cream-dim">
        <ShieldCheck width={16} height={16} className="text-gold" /> Free Consultation
      </span>
      <span className="flex items-center gap-1.5 text-cream-dim">
        <Clock width={16} height={16} className="text-gold" /> 24/7 Case Review
      </span>
      <span className="flex items-center gap-1.5 text-cream-dim">
        <MessageSquare width={16} height={16} className="text-gold" /> Se Habla Español
      </span>
    </div>
  );
}
