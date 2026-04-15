import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elgreen Metex Private Limited | Circular Battery Intelligence",
  description:
    "Elgreen Metex builds a circular battery materials supply chain through advanced lithium-ion recycling, high-purity material recovery, and second-life energy solutions.",
  keywords: [
    "battery recycling",
    "EV recycling India",
    "lithium recovery",
    "circular economy",
    "critical minerals",
    "clean tech startup",
  ],
  metadataBase: new URL("https://www.elgreenmetex.com"),
  openGraph: {
    title: "Elgreen Metex Private Limited",
    description:
      "Powering the future with circular battery intelligence and proprietary recycling technology.",
    url: "https://www.elgreenmetex.com",
    siteName: "Elgreen Metex",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
