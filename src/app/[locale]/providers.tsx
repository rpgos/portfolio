

import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import { Toaster } from "react-hot-toast"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface ProvidersProps {
  children: React.ReactNode
}

export default async function Providers({ children }: ProvidersProps) {
  const messages = await getMessages();

  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </ThemeProvider>
    </HeroUIProvider>
  )
}
