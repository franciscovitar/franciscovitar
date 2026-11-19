import { Newsreader } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.scss";

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://franciscovitar.vercel.app";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Francisco Vitar | Software Developer",
    template: "%s | Francisco Vitar",
  },
  description:
    "Software Developer and Full-Stack Developer. 5th-year Information Systems Engineering student at UTN Córdoba and founder of Genova.",
  keywords: [
    "Francisco Vitar",
    "Software Developer",
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
    title: "Francisco Vitar | Software Developer",
    description:
      "Software Developer and Full-Stack Developer building complete web products, from the interface to the database.",
  },
  twitter: {
    card: "summary",
    title: "Francisco Vitar | Software Developer",
    description:
      "Software Developer and Full-Stack Developer building complete web products, from the interface to the database.",
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
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Genova",
  },
  alumniOf: {
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
    "5th-year Information Systems Engineering student at UTN Córdoba and Software Developer building full-stack web products.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${GeistSans.variable} ${GeistMono.variable}`}
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
