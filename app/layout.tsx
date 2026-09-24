import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import {
  BOROUGHS,
  FAQ_ITEMS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site-content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "Storefront window cleaning",
  keywords: [
    "recurring window cleaning NYC",
    "storefront window cleaning NYC",
    "weekly window cleaning service",
    "business front window cleaning NYC",
    "how often to clean storefront windows",
    "restaurant window cleaning NYC",
    "retail storefront glass cleaning",
    "custom shaped window cleaning",
    "interior exterior window cleaning",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PrimeGlass commercial window cleaning across New York City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0c4a6e",
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/opengraph-image`,
      areaServed: BOROUGHS.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
      knowsAbout: [
        "Recurring storefront window cleaning",
        "Street-level business front window cleaning",
        "Window cleaning frequency for storefronts",
        "Interior window cleaning",
        "Exterior window cleaning",
        "Oversized and custom-shaped storefront glass",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Recurring Storefront Window Cleaning Plans",
        itemListElement: [
          "Twice-weekly window cleaning plan",
          "Weekly window cleaning plan",
          "Every-other-week window cleaning plan",
          "Monthly window cleaning plan",
          "One-time storefront window cleaning",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            serviceType: "Storefront window cleaning",
            areaServed: "New York City",
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${jakarta.variable} ${manrope.variable} ${geistMono.variable}`}
      lang="en"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
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
