import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "@/components/cookie-consent";
import { FacebookPixel } from "@/components/facebook-pixel";
import { BRAND, PRODUCT_NAME, PUBLISHER, SITE_URL } from "@/lib/site";
import "./globals.css";

// One family for everything: Google's own brand typeface. The opsz axis
// (6-144) gives large headlines true display-cut letterforms, the same idea
// as SF Pro Display vs Text, driven automatically by font-optical-sizing.
// Weight is variable by default. No other axis is requested: unused axes are
// downloaded and never rendered (LCP cost).
const sans = Google_Sans_Flex({
  variable: "--font-gsf",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06141f",
};

const title = `Free ${PRODUCT_NAME} for MSPs · TetraNoodle`;
const description =
  "Five questions about your clients and services. A personalized AI Opportunity Score and one practical Managed Intelligence service to explore. Free, no credit card.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s · ${PUBLISHER}` },
  description,
  applicationName: BRAND,
  authors: [{ name: "Manuj Aggarwal", url: "https://manujaggarwal.com" }],
  creator: "Manuj Aggarwal",
  publisher: PUBLISHER,
  category: "IT services",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: BRAND,
    images: [{ url: "/images/ocean-depth.jpg", width: 2400, height: 1600, alt: "" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${sans.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: extensions inject attributes on <body>. */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        {/* Consent-gated: injected only after Accept. */}
        <FacebookPixel />
        <CookieConsent />
        {/* Cookieless, runs without consent. */}
        <Analytics />
        <Script
          id="tetranoodle-analytics"
          src="https://growth-os.tetranoodle.workers.dev/a.js"
          data-site="msp"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
