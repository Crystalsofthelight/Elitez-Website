import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitez.xyz"),
  title: {
    default: "Elitez — Music, $ELITE, and Dream Crafter",
    template: "%s · Elitez",
  },
  description: site.description,
  icons: {
    icon: "/brand/duck.png",
    apple: "/brand/duck.png",
  },
  openGraph: {
    title: "Elitez — Music, $ELITE, and Dream Crafter",
    description: site.description,
    url: "https://elitez.xyz",
    siteName: "Elitez",
    type: "website",
    images: [{ url: "/brand/hero.jpg", width: 1376, height: 768 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elitez — Music, $ELITE, and Dream Crafter",
    description: site.description,
    images: ["/brand/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden">
        <div className="grain" aria-hidden />
        <Header />
        <main id="content" className="relative z-10 w-full min-w-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
