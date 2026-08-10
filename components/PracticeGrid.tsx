import { practiceAreas } from "@/lib/practice-areas";
import { PracticeCard } from "./PracticeCard";
import { SectionHeading } from "./SectionHeading";
import { RevealStagger, RevealItem } from "./Reveal";

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  withHeading?: boolean;
};

export function PracticeGrid({
  eyebrow = "What We Handle",
  title = "Criminal Defense Practice Areas",
  intro = "We defend the full range of misdemeanor and felony charges across San Diego County. Select a practice area to learn how we build a defense for your specific case.",
  withHeading = true,
}: Props) {
  return (
    <section className="container-x py-16 md:py-24">
      {withHeading && <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />}
      <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {practiceAreas.map((area) => (
          <RevealItem key={area.slug} className="h-full">
            <PracticeCard area={area} />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
