import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function HeroCTAs({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-4 ${className}`}>
      <Link href="/contact" className="btn-gold">
        Free Case Review <ArrowRight width={18} height={18} />
      </Link>
      <a href={site.phoneHref} className="btn-outline">
        <Phone width={18} height={18} /> Call {site.phone}
      </a>
    </div>
  );
}
