import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { Reveal } from "./Reveal";

type Stat = { value: string; label: string };

type Props = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  stats: Stat[];
  linkHref?: string;
  linkLabel?: string;
  image?: string; // optional real photo path
  imageSide?: "left" | "right";
};

export function StatSplit({
  eyebrow = "Our Story",
  title,
  paragraphs,
  stats,
  linkHref = "/attorney",
  linkLabel = "Meet Attorney DeBose",
  image,
  imageSide = "left",
}: Props) {
  const imageFirst = imageSide === "left";

  const Visual = (
    <Reveal className={imageFirst ? "" : "lg:order-2"}>
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-line">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full items-center justify-center bg-[radial-gradient(120%_120%_at_30%_10%,#24255c_0%,#131333_55%,#0a0a0a_100%)]">
              <Scale width={72} height={72} className="text-gold/30" strokeWidth={1} />
            </div>
          )}
        </div>
        {/* Stat callout */}
        <div className="absolute -bottom-6 -right-4 rounded-2xl border border-gold/30 bg-navy-900 p-5 shadow-2xl md:-right-6 md:p-6">
          <p className="font-serif text-4xl font-bold text-gold md:text-5xl">{stats[0].value}</p>
          <p className="mt-1 text-sm text-cream-dim">{stats[0].label}</p>
        </div>
      </div>
    </Reveal>
  );

  const Copy = (
    <Reveal delay={0.1} className={imageFirst ? "" : "lg:order-1"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-cream gold-underline">{title}</h2>
      <div className="mt-6 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-cream-dim leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-2xl font-bold text-gold md:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs leading-tight text-cream-dim">{s.label}</p>
          </div>
        ))}
      </div>

      {linkHref && (
        <Link
          href={linkHref}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-gold hover:gap-3 transition-all"
        >
          {linkLabel} <ArrowRight width={18} height={18} />
        </Link>
      )}
    </Reveal>
  );

  return (
    <section className="container-x py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {imageFirst ? (
          <>
            {Visual}
            {Copy}
          </>
        ) : (
          <>
            {Copy}
            {Visual}
          </>
        )}
      </div>
    </section>
  );
}
