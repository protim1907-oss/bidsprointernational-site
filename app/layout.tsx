import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

// Google Analytics 4 measurement ID for www.bidsprointernational.com.
const GA_MEASUREMENT_ID = "G-MRTSTCM520";

export const metadata: Metadata = {
  title: "BidsPro International | AI-Powered MVP & Custom Software Development",
  description:
    "BidsPro International builds MVPs, prototypes, and custom software using AI agents and automated workflows — led and reviewed by senior engineers. AI-accelerated product development, software configuration, and workflow automation for the US and Europe.",
  keywords: [
    "AI MVP development",
    "AI-powered software development",
    "AI agents development",
    "AI workflow automation",
    "custom software development",
    "software configuration and integration",
    "MVP development",
    "product development",
    "product development partner",
    "startup MVP build",
    "civic tech platform",
    "digital product launch",
    "MVP delivery",
    "product roadmap planning",
    "US Europe product development",
    "BidsPro International",
  ],
  metadataBase: new URL("https://www.bidsprointernational.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.bidsprointernational.com",
    title: "BidsPro International | AI-Powered MVP & Custom Software Development",
    description:
      "MVPs, prototypes, and custom software built with AI agents and automated workflows — led and reviewed by senior engineers, from idea to launch.",
    siteName: "BidsPro International",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BidsPro International – AI-Powered MVP & Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BidsPro International | AI-Powered MVP & Custom Software Development",
    description:
      "MVPs, prototypes, and custom software built with AI — senior-led, from idea to launch.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
