import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ptfloraagung.com'),
  title: "PT FLORA AGUNG - Perdagangan Besar Minyak dan Lemak Nabati",
  description: "PT FLORA AGUNG adalah perusahaan terpercaya dalam perdagangan besar minyak dan lemak nabati. Menyediakan produk berkualitas tinggi untuk industri makanan, kosmetik, farmasi, dan lainnya.",
  keywords: ["PT FLORA AGUNG", "minyak nabati", "lemak nabati", "perdagangan besar", "minyak kelapa sawit", "minyak kedelai", "Jakarta", "Indonesia"],
  authors: [{ name: "PT FLORA AGUNG" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT FLORA AGUNG - Perdagangan Besar Minyak dan Lemak Nabati",
    description: "Perusahaan terpercaya dalam perdagangan besar minyak dan lemak nabati berkualitas tinggi",
    url: "https://ptfloraagung.com",
    siteName: "PT FLORA AGUNG",
    type: "website",
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1440,
        height: 720,
        alt: "PT FLORA AGUNG - Perdagangan Besar Minyak dan Lemak Nabati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT FLORA AGUNG - Perdagangan Besar Minyak dan Lemak Nabati",
    description: "Perusahaan terpercaya dalam perdagangan besar minyak dan lemak nabati berkualitas tinggi",
    images: ["/hero-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
