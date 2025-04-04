import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletProviderWrapper } from "@/components/WalletProviderWrapper";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebulart",
  description:
    "Nebulart is a sleek Solana-based NFT dApp where users can seamlessly view their NFT collections and mint new digital assets with ease. Inspired by the vastness and beauty of the cosmos, Nebulart provides an immersive interface to showcase your digital art, collectibles, and creations — all powered by the speed and efficiency of the Solana blockchain. Whether you're an artist, collector, or enthusiast, Nebulart is your launchpad into the decentralized art universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-primary/10 to-secondary/10 min-h-full bg-fixed bg-cover`}
        suppressHydrationWarning
      >
        <WalletProviderWrapper>
          {children}
          <Toaster richColors closeButton />
        </WalletProviderWrapper>
      </body>
    </html>
  );
}
