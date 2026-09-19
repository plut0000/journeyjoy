import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Suspense } from "react";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Royal Caribbean, Celebrity & boutique cruises`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Royal Caribbean",
    "Celebrity Cruises",
    "Princess Cruises",
    "river cruise",
    "ocean cruise",
    "JourneyJoy",
    "cruise specialist",
    "Mediterranean cruise",
  ],
  openGraph: {
    title: `${site.name} — Royal Caribbean, Celebrity & boutique cruises`,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Suspense fallback={<div className="h-16 bg-navy" />}>
          <SiteHeader />
        </Suspense>
        <PageTransition>
          <main id="main" className="flex-1">
            {children}
          </main>
        </PageTransition>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
