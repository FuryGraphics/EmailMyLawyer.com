import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

type Props = {
  heading?: string;
  subheading?: string;
};

export function CTABand({
  heading = "Get a Free, Confidential Case Review",
  subheading = "Speak directly with Attorney Marcus DeBose about your case. No pressure, no judgment — just a clear plan to protect your future.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_120%_at_80%_0%,rgba(252,192,102,0.14)_0%,transparent_60%)]" />
      <div className="container-x py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cream leading-tight">
            {heading}
          </h2>
          <p className="mt-5 text-lg text-cream-dim leading-relaxed">{subheading}</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Free Case Review <ArrowRight width={18} height={18} />
            </Link>
            <a href={site.phoneHref} className="btn-outline">
              <Phone width={18} height={18} /> {site.phone}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {site.trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-cream-dim">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15">
                  <Check width={13} height={13} className="text-gold" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
