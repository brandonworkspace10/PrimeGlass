import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://primeglassnyc.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PrimeGlass | NYC Storefront Window Cleaning & Graffiti Removal",
  description:
    "Streak-free storefront window cleaning, graffiti removal, broken glass replacement, and sticker/adhesive removal for NYC businesses. Fully insured, serving all 5 boroughs.",
  keywords:
    "window cleaning NYC, storefront window cleaning, graffiti removal NYC, glass etching removal, anti-graffiti film, broken glass replacement, commercial glass cleaning, sticker removal storefront, Brooklyn Manhattan Queens Bronx Staten Island",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "PrimeGlass | NYC Storefront Window Cleaning & Graffiti Removal",
    description:
      "Streak-free storefront window cleaning, graffiti removal, broken glass replacement, and sticker/adhesive removal for NYC businesses. Fully insured, serving all 5 boroughs.",
    siteName: "PrimeGlass",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrimeGlass NYC Window Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeGlass | NYC Storefront Window Cleaning & Graffiti Removal",
    description: "Window cleaning, graffiti removal, glass replacement & adhesive removal across all 5 NYC boroughs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PrimeGlass",
  description:
    "Professional NYC storefront glass service — window cleaning on a fixed weekly schedule, graffiti removal, broken glass replacement, and sticker/adhesive removal.",
  url: SITE_URL,
  telephone: "+1-555-010-0100",
  email: "hello@primeglassnyc.com",
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  areaServed: [
    { "@type": "Borough", name: "Manhattan" },
    { "@type": "Borough", name: "Brooklyn" },
    { "@type": "Borough", name: "Queens" },
    { "@type": "Borough", name: "The Bronx" },
    { "@type": "Borough", name: "Staten Island" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.006,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${jakarta.variable} ${inter.variable}`} lang="en">
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data for SEO
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
          }}
          type="application/ld+json"
        />
      </head>
      <body className="antialiased">
        <a className="skip-to-content" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
