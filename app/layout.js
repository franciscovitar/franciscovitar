import "./globals.scss";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://franciscovitar.vercel.app";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Francisco Vitar | Software Engineer",
    template: "%s | Francisco Vitar",
  },
  description:
    "Software Engineer and Full-Stack Product Engineer building reliable product systems across web, data and AI-assisted workflows.",
  keywords: [
    "Francisco Vitar",
    "Software Engineer",
    "Full-Stack Product Engineer",
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
      "Software Engineer building reliable product systems across web, data and AI-assisted workflows.",
  },
  twitter: {
    card: "summary",
    title: "Francisco Vitar | Software Engineer",
    description:
      "Software Engineer building reliable product systems across web, data and AI-assisted workflows.",
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
    "Fourth-year Systems Engineering student and Software Engineer building full-stack products, data-backed applications and AI-assisted engineering workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
