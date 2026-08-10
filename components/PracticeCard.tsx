import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { PracticeArea } from "@/lib/practice-areas";

// Resolve a lucide icon by name, falling back to a shield.
function Icon({ name, ...props }: { name: string } & Icons.LucideProps) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Shield;
  return <Cmp {...props} />;
}

export function PracticeCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/${area.slug}`}
      className="card-dark group flex h-full flex-col p-6 md:p-7"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
          <Icon name={area.icon} width={22} height={22} strokeWidth={1.75} />
        </span>
        <ArrowUpRight
          width={20}
          height={20}
          className="text-cream-dim/50 transition-all group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <h3 className="text-xl font-semibold text-cream">{area.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-cream-dim">{area.heroSubhead}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
        Learn more
        <ArrowUpRight width={15} height={15} />
      </span>
    </Link>
  );
}
