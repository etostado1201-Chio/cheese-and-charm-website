import Image from "next/image";
import { COPY, INSTAGRAM_URL, t, type Lang } from "../lib/content";

export function Hero({ lang }: { lang: Lang }) {
  return (
    <header id="top" className="mx-auto max-w-[1320px] px-8 pt-20 pb-[100px]">
      <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — DFW · Texas
          </div>
          <h1 className="mt-6 font-display italic text-ink" style={{ fontSize: "clamp(48px, 9vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
            <span className="font-script" style={{ fontSize: "1.05em" }}>Cheese</span>
            <span style={{ fontSize: "0.55em", verticalAlign: "0.18em" }}> &amp; </span>
            <span className="font-script" style={{ fontSize: "1.05em" }}>Charm</span>
          </h1>
          <p className="mt-6 font-display text-[22px] italic text-ink-soft">
            {t(lang, COPY.tagline)}
          </p>
          <p className="mt-6 max-w-[52ch] text-base text-ink-soft">
            {t(lang, COPY.hero_sub)}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-[22px] py-3 text-[13px] text-white text-center transition-all hover:-translate-y-[1px] hover:bg-accent-soft">
              {t(lang, COPY.cta_order)}
            </a>
            <a href="#menu" className="rounded-full border border-line px-[22px] py-3 text-[13px] text-ink text-center transition-all hover:border-ink hover:bg-[var(--color-bg-alt)]">
              {t(lang, COPY.cta_explore)} →
            </a>
          </div>
          <ul className="mt-12 space-y-2 border-t border-line pt-7 text-[13px] text-ink-soft">
            <li>🎄 <span className="ml-2">{t(lang, COPY.meta_holidays)}</span></li>
            <li>🧀 <span className="ml-2">{t(lang, COPY.meta_local)}</span></li>
            <li>📍 <span className="ml-2">{t(lang, COPY.meta_dfw)}</span></li>
          </ul>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2px]" style={{ aspectRatio: "4 / 5" }}>
            <Image src="/assets/hero-board.jpg" alt={lang === "es" ? "Tabla de charcuteria signature" : "Signature charcuterie board"} width={800} height={1000} priority className="h-full w-full object-cover" />
          </div>
          <div className="cc-spin absolute -bottom-9 -left-9 flex h-40 w-40 items-center justify-center rounded-full border border-line bg-white">
            <div className="flex flex-col items-center text-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">EST.</span>
              <span className="mt-1 font-script text-[28px] leading-none text-ink">Cheese &amp; Charm</span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-ink-mute">— DFW —</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
