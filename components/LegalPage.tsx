import type { ReactNode } from "react";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "./Breadcrumbs";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  updated: string;
  crumbLabel: string;
  href: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, crumbLabel, href, children }: Props) {
  const crumbs: Crumb[] = [{ label: crumbLabel, href }];
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      {/* Simple dark header, no hero imagery */}
      <header className="container-x pt-10 pb-8 md:pt-16">
        <Reveal>
          <h1 className="text-4xl font-semibold text-cream gold-underline md:text-5xl">{title}</h1>
          <p className="mt-6 text-sm text-cream-dim">Last updated: {updated}</p>
        </Reveal>
      </header>

      <div className="container-x pb-20">
        <Reveal className="legal-prose max-w-3xl">{children}</Reveal>
      </div>
    </>
  );
}
