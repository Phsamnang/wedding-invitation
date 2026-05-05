import type { Metadata } from "next";
import { Inter, Playfair_Display, Battambang, Moul } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const battambang = Battambang({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-battambang",
  subsets: ["khmer"],
});

const moul = Moul({
  weight: "400",
  variable: "--font-moul",
  subsets: ["khmer"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "We respectfully invite you as an honored guest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="km"
      className={`${inter.variable} ${playfair.variable} ${battambang.variable} ${moul.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
