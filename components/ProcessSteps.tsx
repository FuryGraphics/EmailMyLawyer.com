import type { ProcessStep } from "@/lib/practice-areas";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

type Props = {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export function ProcessSteps({ steps, eyebrow = "How It Works", title = "How We Work", intro }: Props) {
  return (
    <section className="bg-navy-900/40 py-16 md:py-24">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h2 className="text-3xl md:text-4xl font-semibold text-cream gold-underline">{title}</h2>
          {intro && <p className="mt-6 text-lg leading-relaxed text-cream-dim">{intro}</p>}
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <RevealItem key={i}>
              <div className="relative h-full rounded-2xl border border-line bg-white/[0.02] p-6 pt-8">
                <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-navy-900">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < steps.length - 1 && (
                  <span className="absolute right-4 top-1/2 hidden text-gold/30 lg:block">→</span>
                )}
                <h3 className="text-lg font-semibold text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
