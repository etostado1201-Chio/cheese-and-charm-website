import Image from "next/image";
import { COPY, t, type Lang } from "../lib/content";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1320px] px-8 py-6 flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.jpg" alt="" width={40} height={40} className="rounded-full object-cover" />
          <div>
            <div className="font-script text-[22px] text-ink leading-none">Cheese and Charm</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mt-1">Charcuterie · DFW</div>
          </div>
        </div>
        <div className="text-[11px] text-ink-mute flex flex-wrap gap-2 items-center justify-center md:justify-start">
          <span>© 2026 Cheese and Charm Charcuterie</span>
          <span className="text-ink-mute">·</span>
          <span>{t(lang, COPY.footer_made)}</span>
        </div>
      </div>
    </footer>
  );
}
