import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Breadcrumbs, BreadcrumbSchema, type Crumb } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ContactFormEmbed } from "@/components/ContactFormEmbed";
import { LocalBusinessSchema } from "@/components/Schema";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Consultation | San Diego Criminal Lawyer Contact",
  description:
    "Contact Tegnelia & DeBose, APC for a free, confidential case review. Call (619) 876-0992 24/7 or request a review online. San Diego criminal defense attorneys.",
  alternates: { canonical: "/contact" },
};

const crumbs: Crumb[] = [{ label: "Contact", href: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema path="/contact" />
      <BreadcrumbSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Free Case Review"
        title="Contact Tegnelia & DeBose, APC"
        subhead="Facing charges is frightening — but you don't have to face them alone. Reach out for a free, confidential consultation. We answer 24/7."
        size="sm"
      />

      <section className="container-x py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            <h2 className="text-2xl font-semibold text-cream gold-underline">Request Your Free Review</h2>
            <p className="mt-5 mb-8 text-cream-dim">
              Tell us what happened and we'll get back to you quickly with a clear next step.
              There's no cost and no obligation.
            </p>
            <ContactFormEmbed />
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <InfoCard icon={<Phone width={20} height={20} />} label="Call Us 24/7" href={site.phoneHref}>
                {site.phone}
              </InfoCard>
              <InfoCard icon={<Mail width={20} height={20} />} label="Email" href={`mailto:${site.email}`}>
                {site.email}
              </InfoCard>
              <InfoCard icon={<MapPin width={20} height={20} />} label="Office" href={site.maps}>
                {site.address.full}
              </InfoCard>

              <div className="rounded-2xl border border-line bg-white/[0.02] p-6">
                <div className="mb-4 flex items-center gap-2 text-gold">
                  <Clock width={18} height={18} />
                  <span className="font-semibold text-cream">Office Hours</span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {site.hours.map((h) => (
                      <tr key={h.day} className="border-t border-line/60">
                        <td className="py-2 text-cream-dim">{h.day}</td>
                        <td className="py-2 text-right font-medium text-cream">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line">
                <iframe
                  title="Map to Tegnelia & DeBose, APC"
                  src={site.mapEmbed}
                  className="h-64 w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="card-dark flex items-center gap-4 p-5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-cream-dim">{label}</p>
        <p className="mt-0.5 text-lg text-cream">{children}</p>
      </div>
    </a>
  );
}
