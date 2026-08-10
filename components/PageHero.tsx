import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subhead?: string;
  bgImage?: string; // optional path to a real photo (e.g. /images/hero-dui.jpg)
  children?: ReactNode; // CTAs / trust strip
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
};

export function PageHero({
  eyebrow,
  title,
  subhead,
  bgImage,
  children,
  align = "left",
  size = "md",
}: Props) {
  const pad =
    size === "lg"
      ? "pt-40 pb-24 md:pt-52 md:pb-32"
      : size === "sm"
        ? "pt-36 pb-16 md:pt-40 md:pb-20"
        : "pt-40 pb-20 md:pt-48 md:pb-28";
  const centered = align === "center";

  return (
    <section className={`relative isolate overflow-hidden ${pad}`}>
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {bgImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[70%_center]"
            loading="eager"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(120%_120%_at_20%_0%,#24255c_0%,#131333_45%,#0a0a0a_100%)]" />
        )}
        {/* Dark overlays for legibility — stronger on the text (left) side when a photo is used */}
        {bgImage && (
          <div
            className={`absolute inset-0 ${
              centered
                ? "bg-ink/75"
                : "bg-gradient-to-r from-ink/95 via-ink/80 to-ink/45"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />
        {/* Subtle gold glow */}
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x">
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow && <p className="reveal-css eyebrow mb-5">{eyebrow}</p>}
          <h1
            className={[
              "reveal-css text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] text-cream gold-underline",
              centered ? "gold-underline-center" : "",
            ].join(" ")}
            style={{ animationDelay: "0.08s" }}
          >
            {title}
          </h1>
          {subhead && (
            <p
              className={[
                "reveal-css mt-7 text-lg md:text-xl text-cream-dim leading-relaxed",
                centered ? "mx-auto max-w-2xl" : "max-w-2xl",
              ].join(" ")}
              style={{ animationDelay: "0.16s" }}
            >
              {subhead}
            </p>
          )}
          {children && (
            <div className="reveal-css mt-9" style={{ animationDelay: "0.24s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
