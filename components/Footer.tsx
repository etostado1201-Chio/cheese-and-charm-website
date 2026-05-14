import Image from "next/image";
import { COPY, t, type Lang } from "../lib/content";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1320px] px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.jpg" alt="" width={40} height={40} className="rounded-full mix-blend-multiply" />
          <div>
            <div className="font-script text-[22px] text-ink leading-none">Cheese and Charm</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mt-1">Charcuterie · DFW</div>
          </div>
        </div>
        <div className="text-[13px] text-ink-soft flex flex-wrap gap-2 items-center">
          <span>© 2026 Cheese and Charm Charcuterie</span>
          <span className="text-ink-mute">·</span>
          <span>{t(lang, COPY.footer_made)}</span>
        </div>
      </div>
    </footer>
  );
}
