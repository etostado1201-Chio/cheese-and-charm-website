// All bilingual copy, products, and gallery for the site.
// Edit this file to change any text or product on the page.

export type Lang = "es" | "en";

export type Bilingual = {
  es: string;
  en: string;
};

export type Product = {
  id: string;
  en: string;
  es: string;
  img: string;
  blurb_en: string;
  blurb_es: string;
};

export type Step = {
  n: string;
  en_h: string;
  es_h: string;
  en_p: string;
  es_p: string;
};

// =====================================================
// PRODUCTS — 6 cards in the Menu section
// =====================================================
export const PRODUCT_TYPES: Product[] = [
  {
    id: "single",
    en: "Single Box",
    es: "Caja Individual",
    img: "/assets/box-single.jpg",
    blurb_en:
      "A perfectly portioned snack for one — fruit, cheese, nuts, sweets.",
    blurb_es:
      "Una porción perfecta para una persona — fruta, queso, nueces, dulces.",
  },
  {
    id: "duo",
    en: "Duo Boxes",
    es: "Cajas para Dos",
    img: "/assets/box-pair.jpg",
    blurb_en: "Twin boxes tied with ribbon — share the moment.",
    blurb_es: "Cajas gemelas atadas con listón — comparte el momento.",
  },
  {
    id: "grand",
    en: "Grand Board",
    es: "Tabla Grande",
    img: "/assets/grazing-table-1.png",
    blurb_en: "An abundant centerpiece for gatherings of 6–10.",
    blurb_es: "Un centro de mesa abundante para reuniones de 6–10.",
  },
  {
    id: "tower",
    en: "Themed Tower",
    es: "Torre Temática",
    img: "/assets/tower-front.jpg",
    blurb_en: "Showstopping cone towers for holidays and celebrations.",
    blurb_es: "Torres cónicas espectaculares para fiestas y celebraciones.",
  },
  {
    id: "themed",
    en: "Themed Boards",
    es: "Tablas Temáticas",
    img: "/assets/tablas-tematicas.png",
    blurb_en:
      "Día de Muertos, Valentine's, weddings — designed around your day.",
    blurb_es:
      "Día de Muertos, San Valentín, bodas — diseñadas para tu día.",
  },
  {
    id: "events",
    en: "Event Tables",
    es: "Mesas de Eventos",
    img: "/assets/mesas-de-eventos.png",
    blurb_en:
      "Full-scale catering tables for weddings and corporate events.",
    blurb_es: "Mesas completas para bodas y eventos corporativos.",
  },
];

// =====================================================
// GALLERY — 9 tiles in the asymmetric mosaic
// =====================================================
export const GALLERY: string[] = [
  "/assets/grazing-table-2.png",
  "/assets/board-brie.jpg",
  "/assets/tower-front.jpg",
  "/assets/grazing-table-3.png",
  "/assets/board-heart.jpg",
  "/assets/large-board-2.jpg",
  "/assets/board-tools.jpg",
  "/assets/grazing-table-4.png",
  "/assets/board-valentine.jpg",
];

// =====================================================
// COPY — all bilingual text
// =====================================================
export const COPY = {
  tagline: {
    en: "Custom Charcuterie Boards",
    es: "Tablas de Charcutería a la Medida",
  },
  hero_sub: {
    en: "Locally sourced, hand-curated creations for holidays, events & gifting across the DFW area.",
    es: "Creaciones artesanales con ingredientes locales — para fiestas, eventos y regalos en todo DFW.",
  },
  cta_order: { en: "DM to Order", es: "Ordena por DM" },
  cta_explore: { en: "Explore the menu", es: "Ver el menú" },

  meta_holidays: {
    en: "Holidays, events & gifting",
    es: "Fiestas, eventos y regalos",
  },
  meta_local: { en: "Locally sourced", es: "Ingredientes locales" },
  meta_dfw: { en: "Serving the DFW Area", es: "Servicio en el área de DFW" },

  about_kicker: { en: "Our Story", es: "Nuestra Historia" },
  about_h: {
    en: "Made with care, by hand, for your moments.",
    es: "Hechas a mano, con cariño, para tus momentos.",
  },
  about_p: {
    en: "Every board is arranged the morning of your event with cheeses, cured meats, fresh fruit, nuts and sweets — sourced locally and styled with edible flowers, pretzel bundles and our signature salami roses.",
    es: "Cada tabla se arma la mañana de tu evento con quesos, embutidos, fruta fresca, nueces y dulces — de origen local y decoradas con flores comestibles, manojos de pretzel y nuestras rosas de salami.",
  },

  menu_kicker: { en: "The Menu", es: "El Menú" },
  menu_h: {
    en: "From single boxes to grand tables.",
    es: "Desde cajas individuales hasta grandes mesas.",
  },
  menu_cta: { en: "Get a quote", es: "Cotizar" },

  gallery_kicker: { en: "The Gallery", es: "La Galería" },
  gallery_h: { en: "Recent boards.", es: "Tablas recientes." },

  events_kicker: { en: "Special Events", es: "Eventos Especiales" },
  events_h: {
    en: "Weddings, birthdays, holidays.",
    es: "Bodas, cumpleaños, fechas especiales.",
  },
  events_p: {
    en: "Tell us the date, the headcount and the vibe — we'll design a board that fits your celebration.",
    es: "Cuéntanos la fecha, el número de personas y el ambiente — diseñamos una tabla a la medida de tu celebración.",
  },

  how_kicker: { en: "How to Order", es: "Cómo Ordenar" },
  how_h: { en: "Three simple steps.", es: "Tres pasos sencillos." },

  contact_kicker: { en: "Get in touch", es: "Contáctanos" },
  contact_h: { en: "Let's plan your board.", es: "Diseñemos tu tabla." },
  contact_p: {
    en: "DM us on Instagram or give us a call. We respond fast and design with you.",
    es: "Escríbenos por Instagram o llámanos. Respondemos rápido y diseñamos contigo.",
  },
  contact_phone: { en: "Phone", es: "Teléfono" },
  contact_area: { en: "Area", es: "Área" },

  footer_made: {
    en: "Made with care in Texas",
    es: "Hecho con cariño en Texas",
  },
};

// =====================================================
// STEPS — 3 cards in the How to Order section
// =====================================================
export const STEPS: Step[] = [
  {
    n: "01",
    en_h: "Send a DM",
    es_h: "Envía un DM",
    en_p: "Reach out on Instagram or call us — share your date, guest count and any dietary notes.",
    es_p: "Escríbenos por Instagram o llámanos — comparte la fecha, número de personas y restricciones alimenticias.",
  },
  {
    n: "02",
    en_h: "We design",
    es_h: "Diseñamos",
    en_p: "We'll send back a curated proposal with the board style, ingredients and your quote.",
    es_p: "Te enviamos una propuesta con el estilo de la tabla, los ingredientes y tu cotización.",
  },
  {
    n: "03",
    en_h: "Pickup or delivery",
    es_h: "Recoge o entregamos",
    en_p: "Boards are arranged the morning of, ready for pickup or delivery in the DFW area.",
    es_p: "Las tablas se preparan la mañana del evento, listas para recoger o entrega en DFW.",
  },
];

// =====================================================
// EVENT OCCASIONS — list in the Events section
// =====================================================
export const EVENT_OCCASIONS = [
  { es: "Bodas", en: "Weddings" },
  { es: "Cumpleaños", en: "Birthdays" },
  { es: "Día de Muertos", en: "Día de Muertos" },
  { es: "San Valentín", en: "Valentine's" },
  { es: "Navidad", en: "Christmas" },
  { es: "Corporativo", en: "Corporate" },
];

// =====================================================
// CONSTANTS
// =====================================================
export const INSTAGRAM_URL =
  "https://instagram.com/cheese.and.charm.charcuterie";
export const INSTAGRAM_HANDLE = "@cheese.and.charm.charcuterie";
export const PHONE_DISPLAY = "972 · 750 · 0337";
export const PHONE_TEL = "9727500337";
export const AREA = "Dallas–Fort Worth, TX";

// =====================================================
// HELPER — pick the right language
// =====================================================
export function t(lang: Lang, key: Bilingual): string {
  return key[lang];
}