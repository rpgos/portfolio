import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react"

const myFont = localFont({
  src: "../fonts/FacultyGlyphic-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Rodrigo Guerreiro",
  description: "Senior Full Stack Developer",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>,
}>) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${myFont.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
