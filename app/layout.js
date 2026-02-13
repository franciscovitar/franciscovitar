import { Inter, Sora } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://franciscovitar.com";
const ogImagePath = "/og-image.png"; // asegurate de tenerlo en /public
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  title: "Francisco Vitar | Full-Stack Web Developer & Founder @ Genova",
  description:
    "Full-Stack Web Developer specializing in service websites and landing pages with mobile-first UX and conversion-driven structure. Based in Córdoba, Argentina.",
  keywords:
    "Francisco Vitar, Full-Stack Developer, Web Developer, React, Next.js, Frontend, Backend, Córdoba Argentina, Genova, Landing Pages",
  authors: [
    {
      name: "Francisco Vitar",
      url: "https://www.linkedin.com/in/franciscovitar/",
    },
  ],
  creator: "Francisco Vitar",
  publisher: "Francisco Vitar",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Francisco Vitar | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer building premium service websites and landing pages with focus on conversion and mobile-first UX.",
    url: siteUrl,
    siteName: "Francisco Vitar Portfolio",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Francisco Vitar - Full-Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Vitar | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer building premium service websites and landing pages.",
    images: [ogImagePath],
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
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francisco Vitar",
  url: siteUrl,
  image: `${siteUrl}${ogImagePath}`,
  sameAs: [
    "https://www.linkedin.com/in/franciscovitar/",
    "https://github.com/franciscovitar",
  ],
  jobTitle: "Full-Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Genova",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "Argentina",
  },
  email: "mailto:franvitar15@gmail.com",
  description:
    "4th-year Systems Engineering student building service websites and landing pages end-to-end with focus on mobile-first UX and conversion-driven structure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
