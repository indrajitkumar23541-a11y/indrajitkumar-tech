import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INDRA OS — Personal Developer Operating System | Indrajit Kumar",
  description:
    "INDRA OS is an interactive developer portfolio and personal AI operating system for Indrajit Kumar — Full-Stack Developer, AI Builder, and Systems Explorer.",
  keywords: [
    "Indrajit Kumar",
    "INDRA OS",
    "ARXON",
    "Full-Stack Developer",
    "AI Systems Architect",
    "Computer Science Engineer",
    "380+ DSA Problems Solved",
    "Next.js App Router",
    "Tailwind CSS",
  ],
  authors: [{ name: "Indrajit Kumar" }],
  creator: "Indrajit Kumar",
  openGraph: {
    title: "INDRA OS — Personal Developer Operating System",
    description:
      "Interactive developer operating system and portfolio for Indrajit Kumar, featuring the ARXON Intelligence Core.",
    type: "website",
    locale: "en_US",
    siteName: "INDRA OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "INDRA OS — Indrajit Kumar",
    description:
      "Interactive developer operating system and portfolio for Indrajit Kumar, featuring the ARXON Intelligence Core.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050608] text-[#F5F7FA] font-sans antialiased selection:bg-[#FFB000]/25 selection:text-[#FFB000]">
        {children}
      </body>
    </html>
  );
}
