import type { Metadata, Viewport } from "next";

import {
  SITE_URL,
  PERSON,
  SEO_KEYWORDS,
  DEFAULT_OG_IMAGE,
} from "@/constants/seo";
import {
  LocalBusinessStructuredData,
  OrganizationStructuredData,
} from "@/components/seo/StructuredData";

import { fontMontserrat } from "./fonts";
import "./globals.css";

const title = `${PERSON.name} | ${PERSON.jobTitle}`;
const description = PERSON.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${PERSON.name}`,
  },
  description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: PERSON.name,
    title,
    description,
    locale: "pt_BR",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE.url],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#161618" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" translate="no" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <LocalBusinessStructuredData />
        <OrganizationStructuredData />
      </head>
      <body className={`${fontMontserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
