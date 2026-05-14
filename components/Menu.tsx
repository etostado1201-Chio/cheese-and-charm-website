import Image from "next/image";
import { COPY, PRODUCT_TYPES, INSTAGRAM_URL, t, type Lang } from "../lib/content";

export function Menu({ lang }: { lang: Lang }) {
  return (
    <section id="menu" className="border-t border-line">
      <div className="mx-auto max-w-[1320px] px-8 py-[100px]">
        <div className="max-w-[800px]">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — {t(lang, COPY.menu_kicker).toUpperCase()}
          </div>
          <h2 className="mt-6 font-display italic text-ink" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            {t(lang, COPY.menu_h)}
          </h2>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_TYPES.map((p, i) => (
            <article key={p.id} className="group">
              <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: "4 / 5" }}>
                <Image src={p.img} alt={p[lang]} width={600} height={750} className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]" />
                <span className="absolute top-3 left-3 font-mono text-[11px] text-white bg-black/75 px-2 py-1 backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[24px] text-ink font-medium">{p[lang]}</h3>
              <p className="mt-2 text-[14px] text-ink-soft">{lang === "es" ? p.blurb_es : p.blurb_en}</p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-ink border-b border-ink pb-1">
                {t(lang, COPY.menu_cta)} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
