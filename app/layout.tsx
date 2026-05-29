import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BidsPro International | IT Management & MVP Delivery for US & Europe",
  description:
    "BidsPro International provides senior-led IT program management, MVP planning, delivery governance, and PMO support for startups, civic tech platforms, and growing organisations across the US and Europe.",
  keywords: [
    "IT program management",
    "MVP planning",
    "delivery management",
    "PMO consulting",
    "civic tech",
    "digital platform delivery",
    "IT management consultant",
    "startup MVP advisor",
    "US Europe IT services",
    "BidsPro International",
  ],
  metadataBase: new URL("https://www.bidsprointernational.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.bidsprointernational.com",
    title: "BidsPro International | IT Management & MVP Delivery",
    description:
      "Senior-led IT program management, MVP planning, and delivery governance for organisations across the US and Europe. Structured support from concept to execution.",
    siteName: "BidsPro International",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BidsPro International – IT Management & MVP Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BidsPro International | IT Management & MVP Delivery",
    description:
      "Senior-led IT program management, MVP planning, and delivery governance for organisations across the US and Europe.",
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
      <body>{children}</body>
    </html>
  );
}
