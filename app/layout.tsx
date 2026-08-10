import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// GA4 placeholder — replace with the client's real Measurement ID.
const GA_ID = "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Criminal Defense Attorney San Diego CA | Tegnelia & DeBose, APC",
    template: "%s | Tegnelia & DeBose, APC",
  },
  description:
    "Aggressive San Diego criminal defense attorneys. DUI, domestic violence, drug, theft, and felony defense. Free consultation, 24/7. Call (619) 876-0992.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: "Criminal Defense Attorney San Diego CA | Tegnelia & DeBose, APC",
    description:
      "Aggressive San Diego criminal defense. DUI, domestic violence, drugs, theft, felonies. Free consultation, 24/7.",
    url: site.domain,
    locale: "en_US",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: site.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criminal Defense Attorney San Diego CA | Tegnelia & DeBose, APC",
    description: "Aggressive San Diego criminal defense. Free consultation, 24/7.",
    images: ["/images/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* GA4 — managed placeholder; SEO handled by 3rd-party firm */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />

        {/* LeadConnector live chat widget (bottom-right, all pages) */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a770f8022509c8ee229cd8b"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
