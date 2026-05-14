import Image from "next/image";
import { COPY, INSTAGRAM_URL, INSTAGRAM_HANDLE, PHONE_DISPLAY, PHONE_TEL, AREA, t, type Lang } from "../lib/content";

export function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-[1320px] gap-20 px-8 py-[100px] lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — {t(lang, COPY.contact_kicker).toUpperCase()}
          </div>
          <h2 className="mt-6 font-display italic text-ink" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            {t(lang, COPY.contact_h)}
          </h2>
          <p className="mt-6 text-base text-ink-soft max-w-[55ch]">{t(lang, COPY.contact_p)}</p>
          <div className="mt-10 border-t border-line">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="grid grid-cols-[120px_1fr] gap-4 border-b border-line py-5 transition-all hover:pl-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute self-center">Instagram</span>
              <span className="font-display italic text-[22px] text-ink">{INSTAGRAM_HANDLE}</span>
            </a>
            <a href={`tel:${PHONE_TEL}`} className="grid grid-cols-[120px_1fr] gap-4 border-b border-line py-5 transition-all hover:pl-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute self-center">{t(lang, COPY.contact_phone)}</span>
              <span className="font-display italic text-[22px] text-ink">{PHONE_DISPLAY}</span>
            </a>
            <div className="grid grid-cols-[120px_1fr] gap-4 border-b border-line py-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute self-center">{t(lang, COPY.contact_area)}</span>
              <span className="font-display italic text-[22px] text-ink">{AREA}</span>
            </div>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-full bg-ink px-8 py-4 text-[14px] text-white transition-all hover:-translate-y-[1px] hover:bg-accent-soft">
            {t(lang, COPY.cta_order)} →
          </a>
        </div>
        <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: "4 / 5" }}>
          <Image src="/assets/board-heart.jpg" alt="" fill className="object-cover" sizes="40vw" />
        </div>
      </div>
    </section>
  );
}
