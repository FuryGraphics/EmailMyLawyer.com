import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  {
    title: "Time & Attention",
    body: "Public defenders are overworked and stretched thin. We limit our caseload so your case gets the focus it deserves.",
  },
  {
    title: "Early Intervention",
    body: "We get involved from day one — often before charges are filed — when the biggest opportunities to change the outcome exist.",
  },
  {
    title: "Independent Investigation",
    body: "We deploy our own investigators and experts rather than relying on the police report the prosecution hands us.",
  },
  {
    title: "Direct Access",
    body: "You work directly with your attorney, not a rotating cast. Call, text, or email — we keep you informed at every step.",
  },
];

export function WhyPrivate() {
  return (
    <section className="bg-navy-900/40 py-16 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-4">The Difference</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cream gold-underline">
            Why Hire a Private Criminal Defense Attorney
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-dim">
            When your freedom and future are at stake, the right advocate makes all the
            difference. Here's what you get with a dedicated private defense team.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-line bg-white/[0.02] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/12 text-gold ring-1 ring-gold/25">
                  <Check width={18} height={18} />
                </span>
                <h3 className="mt-4 font-semibold text-cream">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">{r.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
