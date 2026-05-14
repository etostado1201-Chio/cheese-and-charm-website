import { COPY, STEPS, t, type Lang } from "../lib/content";

export function HowToOrder({ lang }: { lang: Lang }) {
  return (
    <section id="how" className="border-t border-line" style={{ background: "var(--color-bg-alt)" }}>
      <div className="mx-auto max-w-[1320px] px-8 py-[100px]">
        <div className="text-center max-w-[600px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — {t(lang, COPY.how_kicker).toUpperCase()}
          </div>
          <h2 className="mt-6 font-display italic text-ink" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            {t(lang, COPY.how_h)}
          </h2>
        </div>
        <div className="mt-16 grid gap-12 max-w-[1080px] mx-auto md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="font-display italic text-[56px] text-ink leading-none">{s.n}</div>
              <h3 className="mt-4 font-display text-[24px] text-ink font-medium">{lang === "es" ? s.es_h : s.en_h}</h3>
              <p className="mt-3 text-[14px] text-ink-soft max-w-[28ch] mx-auto">{lang === "es" ? s.es_p : s.en_p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
