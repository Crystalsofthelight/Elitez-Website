import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Syne } from "next/font/google";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Web3Provider } from "@/components/Web3Provider";
import { site } from "@/lib/content";
import { wagmiConfig } from "@/lib/web3";
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
  metadataBase: new URL("https://www.elitez.xyz"),
  title: {
    default: "Elitez — Music, $ELITE, $ELTZ, and Dream Crafter",
    template: "%s · Elitez",
  },
  description: site.description,
  icons: {
    icon: "/brand/duck.png",
    apple: "/brand/duck.png",
  },
  openGraph: {
    title: "Elitez — Music, $ELITE, $ELTZ, and Dream Crafter",
    description: site.description,
    url: "https://www.elitez.xyz",
    siteName: "Elitez",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Elitez — Music, $ELITE, $ELTZ, and Dream Crafter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elitez — Music, $ELITE, $ELTZ, and Dream Crafter",
    description: site.description,
    images: ["/og.png"],
  },

};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const initialState = cookieToInitialState(
    wagmiConfig,
    (await headers()).get("cookie"),
  );

  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden">
        <Web3Provider initialState={initialState}>
          <div className="grain" aria-hidden />
          <Header />
          <main id="content" className="relative z-10 w-full min-w-0 flex-1">
            {children}
          </main>
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
