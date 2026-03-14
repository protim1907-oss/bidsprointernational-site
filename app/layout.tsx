import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BidsPro International",
  description: "IT management, delivery oversight, and MVP advisory for Europe and the U.S.",
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
