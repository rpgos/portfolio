import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const myFont = localFont({
  src: "./fonts/FacultyGlyphic-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Rodrigo Guerreiro",
  description: "Senior Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${myFont.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
