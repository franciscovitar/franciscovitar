import { headers } from "next/headers";
import "@fontsource-variable/newsreader/index.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "@fontsource-variable/manrope/index.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteUrl } from "../lib/site-metadata";
import "./globals.scss";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Francisco Vitar | Software Engineer",
    template: "%s | Francisco Vitar",
  },
  description:
    "Software Engineer and Full-Stack Developer. 4th-year Information Systems Engineering student at UTN Córdoba and co-founder of Genova.",
  keywords: [
    "Francisco Vitar",
    "Software Engineer",
    "Full-Stack Developer",
    "TypeScript",
    "Next.js",
    "React",
    "PostgreSQL",
    "Python",
    "Software Testing",
    "AI-native engineering",
    "Córdoba Argentina",
  ],
  authors: [{ name: "Francisco Vitar" }],
  creator: "Francisco Vitar",
  publisher: "Francisco Vitar",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Francisco Vitar",
    title: "Francisco Vitar | Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building complete web products, from the interface to the database.",
  },
  twitter: {
    card: "summary",
    title: "Francisco Vitar | Software Engineer",
    description:
      "Software Engineer and Full-Stack Developer building complete web products, from the interface to the database.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francisco Vitar",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/franciscovitar/",
    "https://github.com/franciscovitar",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Genova",
    url: "https://www.genovasite.com/",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Tecnológica Nacional",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  email: "mailto:franvitar15@gmail.com",
  description:
    "4th-year Information Systems Engineering student at UTN Córdoba and Software Engineer building full-stack web products.",
};

export default async function RootLayout({ children }) {
  const lang = (await headers()).get("x-site-lang") === "es" ? "es" : "en";

  return (
    <html
      lang={lang}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
