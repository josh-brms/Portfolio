import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-blond-xi-29.vercel.app"),
  title: {
    default: "Joshua Bermas — Full-Stack Developer",
    template: "%s — Joshua Bermas",
  },
  description:
    "Full-stack developer from Albay, Philippines building fast, intuitive web experiences with Next.js, TypeScript, and Supabase. Open to entry-level web development roles.",
  keywords: [
    "Joshua Bermas",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Supabase",
    "Portfolio",
    "Philippines",
  ],
  authors: [{ name: "Joshua Bermas" }],
  creator: "Joshua Bermas",
  openGraph: {
    type: "website",
    title: "Joshua Bermas — Full-Stack Developer",
    description:
      "Fast, intuitive, user-centered web experiences built with Next.js, TypeScript, and Supabase.",
    siteName: "Joshua Bermas Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Joshua Bermas — Full-Stack Developer",
    description:
      "Fast, intuitive, user-centered web experiences built with Next.js, TypeScript, and Supabase.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} font-body`}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
