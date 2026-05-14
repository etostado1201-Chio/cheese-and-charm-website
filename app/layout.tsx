import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Mrs_Saint_Delafield,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheese & Charm Charcuterie — DFW",
  description:
    "Custom charcuterie boards in the Dallas–Fort Worth area. Locally sourced, hand-curated creations for holidays, events & gifting.",
  openGraph: {
    title: "Cheese & Charm Charcuterie — DFW",
    description:
      "Custom charcuterie boards in the Dallas–Fort Worth area.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} ${script.variable} ${mono.variable}`}
    >
      <body className="font-body bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}