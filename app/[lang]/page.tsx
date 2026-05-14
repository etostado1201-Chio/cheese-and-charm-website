import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Menu } from "../../components/Menu";
import { Gallery } from "../../components/Gallery";
import { Events } from "../../components/Events";
import { HowToOrder } from "../../components/HowToOrder";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import type { Lang } from "../../lib/content";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;

  if (rawLang !== "es" && rawLang !== "en") {
    notFound();
  }
  const lang = rawLang as Lang;

  return (
    <>
      <Nav lang={lang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Menu lang={lang} />
      <Gallery lang={lang} />
      <Events lang={lang} />
      <HowToOrder lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}