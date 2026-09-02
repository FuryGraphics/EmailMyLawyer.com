import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function FindUs({ eyebrow = "Find Us", title = "Visit Our San Diego Office" }: { eyebrow?: string; title?: string }) {
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Map to EmailMyLawyer.com office"
            src={site.mapEmbed}
            className="h-[340px] w-full md:h-full"
            style={{ minHeight: 340, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center gap-5">
          <ContactRow icon={<MapPin width={20} height={20} />} label="Office">
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              {site.address.full}
            </a>
          </ContactRow>
          <ContactRow icon={<Phone width={20} height={20} />} label="Phone">
            <a href={site.phoneHref} className="hover:text-gold transition-colors">
              {site.phone}
            </a>
          </ContactRow>
          <ContactRow icon={<Mail width={20} height={20} />} label="Email">
            <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
              {site.email}
            </a>
          </ContactRow>

          <div className="mt-2 rounded-2xl border border-line bg-white/[0.02] p-6">
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
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-cream-dim">{label}</p>
        <p className="mt-0.5 text-lg text-cream">{children}</p>
      </div>
    </div>
  );
}
