import Image from "next/image";
import { COPY, GALLERY, t, type Lang } from "../lib/content";

const SPANS = [
  "col-span-5 row-span-3",
  "col-span-4 row-span-2",
  "col-span-3 row-span-3",
  "col-span-4 row-span-2",
  "col-span-3 row-span-2",
  "col-span-5 row-span-3",
  "col-span-4 row-span-2",
  "col-span-4 row-span-2",
  "col-span-4 row-span-2",
];

export function Gallery({ lang }: { lang: Lang }) {
  return (
    <section id="gallery" className="border-t border-line">
      <div className="mx-auto max-w-[1320px] px-8 py-[100px]">
        <div className="max-w-[800px]">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            — {t(lang, COPY.gallery_kicker).toUpperCase()}
          </div>
          <h2 className="mt-6 font-display italic text-ink" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            {t(lang, COPY.gallery_h)}
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-12 gap-4" style={{ gridAutoRows: "140px" }}>
          {GALLERY.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-[2px] ${SPANS[i] || "col-span-4 row-span-2"} group`}>
              <Image src={src} alt="" fill className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
