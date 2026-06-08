import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BidsPro International | Product & MVP Development for US & Europe",
  description:
    "BidsPro International is a product development partner that helps startups, civic-tech teams, and growing organisations take an idea from concept to a working MVP — with senior-led build leadership, structured roadmaps, and launch and iteration support across the US and Europe.",
  keywords: [
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
    title: "BidsPro International | Product & MVP Development",
    description:
      "A product development partner helping startups and teams take ideas from concept to a working MVP — with senior-led build leadership and structured roadmaps, from idea to launch and beyond.",
    siteName: "BidsPro International",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BidsPro International – Product & MVP Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BidsPro International | Product & MVP Development",
    description:
      "Helping startups and teams take ideas from concept to a working MVP — senior-led product development, from idea to launch.",
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
