import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hawleydesignco.com"),
  title: {
    default: "Hawley Design Co. — Custom furniture & art gallery, Tulsa & Santa Fe",
    template: "%s | Hawley Design Co.",
  },
  description:
    "A Tulsa furniture atelier and art gallery. Custom furniture designed and built by hand by Mark Hawley since 1979, alongside original art and a represented gallery. Tulsa & Santa Fe.",
  openGraph: {
    title: "Hawley Design Co.",
    description:
      "Custom furniture designed and built by hand in Tulsa since 1979, alongside an original-art gallery. Tulsa & Santa Fe.",
    url: "https://hawleydesignco.com",
    siteName: "Hawley Design Co.",
    type: "website",
    images: [{ url: "/images/hero-root-table.jpg", width: 1860, height: 1300 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
