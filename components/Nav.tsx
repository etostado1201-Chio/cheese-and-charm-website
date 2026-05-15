"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { COPY, INSTAGRAM_URL, t, type Lang } from "../lib/content";

export function Nav({ lang }: { lang: Lang }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const newLang: Lang = lang === "es" ? "en" : "es";
    const newPath = pathname.replace(/^\/(es|en)/, `/${newLang}`);
    router.push(newPath);
  };

  const links: { href: string; es: string; en: string }[] = [
    { href: "#menu", es: "Menú", en: "Menu" },
    { href: "#gallery", es: "Galería", en: "Gallery" },
    { href: "#events", es: "Eventos", en: "Events" },
    { href: "#how", es: "Ordenar", en: "Order" },
    { href: "#contact", es: "Contacto", en: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white/[0.88] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-8 py-[14px]">
     <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpg"
            alt="Cheese and Charm Charcuterie"
            width={500}
            height={500}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-script text-[24px] leading-none text-ink hidden sm:block">
            Cheese and Charm
          </span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              {link[lang]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1 font-mono text-[11px]"
          >
            <span
              className={lang === "es" ? "font-bold text-ink" : "text-ink-mute"}
              aria-pressed={lang === "es"}
            >
              ES
            </span>
            <span className="text-ink-mute">/</span>
            <span
              className={lang === "en" ? "font-bold text-ink" : "text-ink-mute"}
              aria-pressed={lang === "en"}
            >
              EN
            </span>
          </button>
          
            <a href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-[22px] py-3 text-[13px] text-white transition-all hover:-translate-y-[1px] hover:bg-accent-soft"
            >
            {t(lang, COPY.cta_order)}
          </a>
        </div>
      </div>
    </nav>
  );
}