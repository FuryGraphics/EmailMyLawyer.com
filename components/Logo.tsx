import Link from "next/link";
import Image from "next/image";

// Brand lockup: the firm's gold lion mark (transparent PNG extracted from the
// supplied logo) + a cream/gold wordmark that stays legible on the dark nav.
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Tegnelia & DeBose, APC — Home">
      <Image
        src="/images/logo-lion.png"
        alt="Tegnelia & DeBose, APC lion emblem"
        width={1029}
        height={900}
        priority
        className="h-11 w-auto"
      />
      <span className="leading-tight">
        <span className="block font-serif text-lg font-semibold tracking-tight text-cream">
          Tegnelia <span className="text-gold">&amp;</span> DeBose
        </span>
        {!compact && (
          <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-cream-dim">
            EmailMyLawyer.com
          </span>
        )}
      </span>
    </Link>
  );
}
