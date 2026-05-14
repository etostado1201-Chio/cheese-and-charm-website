import Image from "next/image";
import { COPY, t, type Lang } from "../lib/content";

export function About({ lang }: { lang: Lang }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[1320px] items-center gap-20 px-8 py-[100px] lg:grid-cols-[1fr_1.1fr]">
        <div className="overflow-hidden rounded-[2px]" style={{ aspectRatio: "4 / 5" }}>
          <Image
            src="/assets/our-story-boxes-section.jpg"
            alt={lang === "es" ? "Cajas de charcutería artesanales" : "Handcrafted charcuterie boxes"}
            width={800}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — {t(lang, COPY.about_kicker).toUpperCase()}
          </div>

          <h2
            className="mt-6 font-display italic text-ink"
            style={{
              fontSize: "clamp(32px, 4.4vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {t(lang, COPY.about_h)}
          </h2>

          <p className="mt-6 max-w-[60ch] text-base text-ink-soft">
            {t(lang, COPY.about_p)}
          </p>

          <div className="my-8 h-px w-[60px] bg-ink"></div>

          <div className="text-ink-soft">
            — <span className="font-script text-[22px] text-ink">Cheese and Charm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
