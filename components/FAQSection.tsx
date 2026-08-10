import type { FAQ } from "@/lib/practice-areas";
import { SectionHeading } from "./SectionHeading";
import { FAQAccordion, FAQSchema } from "./FAQAccordion";
import { Reveal } from "./Reveal";

type Props = {
  faqs: FAQ[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  includeSchema?: boolean;
};

export function FAQSection({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  intro,
  includeSchema = true,
}: Props) {
  return (
    <section className="container-x py-16 md:py-24">
      {includeSchema && <FAQSchema faqs={faqs} />}
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        </div>
        <Reveal delay={0.1}>
          <FAQAccordion faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
