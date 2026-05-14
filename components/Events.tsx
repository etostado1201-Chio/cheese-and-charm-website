import Image from "next/image";
import { COPY, EVENT_OCCASIONS, t, type Lang } from "../lib/content";

export function Events({ lang }: { lang: Lang }) {
  return (
    <section id="events" className="border-t border-line">
      <div className="mx-auto grid max-w-[1320px] gap-20 px-8 py-[100px] lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — {t(lang, COPY.events_kicker).toUpperCase()}
          </div>
          <h2 className="mt-6 font-display italic text-ink" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            {t(lang, COPY.events_h)}
          </h2>
          <p className="mt-6 text-base text-ink-soft max-w-[55ch]">{t(lang, COPY.events_p)}</p>
          <ul className="mt-10 grid grid-cols-2 gap-y-3 gap-x-8 text-[14px] text-ink-soft">
            {EVENT_OCCASIONS.map((o, i) => (
              <li key={i}>
                <span className="font-script text-[1.4em] text-ink">{o.es}</span>
                {o.en !== o.es && <span> · {o.en}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-6 gap-3" style={{ gridAutoRows: "180px" }}>
          <div className="relative col-span-4 row-span-2 overflow-hidden rounded-[2px]">
            <Image src="/assets/mesas-de-eventos.png" alt="" fill className="object-cover" sizes="40vw" />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden rounded-[2px]">
            <Image src="/assets/board-valentine.jpg" alt="" fill className="object-cover" sizes="20vw" />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden rounded-[2px]">
            <Image src="/assets/box-pair.jpg" alt="" fill className="object-cover" sizes="20vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
