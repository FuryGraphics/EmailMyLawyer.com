import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", className }: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={[
        centered ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className ?? "",
      ].join(" ")}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={[
          "text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-tight text-cream gold-underline",
          centered ? "gold-underline-center" : "",
        ].join(" ")}
      >
        {title}
      </h2>
      {intro && <p className="mt-6 text-cream-dim text-lg leading-relaxed">{intro}</p>}
    </Reveal>
  );
}
