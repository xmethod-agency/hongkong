import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorDot } from "@/components/cursor-dot";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SideRails } from "@/components/layout/side-rails";
import { BottomBlur } from "@/components/layout/bottom-blur";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiqotech.com"),
  title: "AIQO — Software, web, AI automation for growing teams",
  description:
    "AIQO is a product studio building software, websites, AI automation, and providing IT consulting for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <CursorDot />
        <SideRails />
        {children}
        <BottomBlur />
      </body>
    </html>
  );
}
