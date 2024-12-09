'use client'

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import { Toaster } from "react-hot-toast"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        <Toaster />
      </ThemeProvider>
    </NextUIProvider>
  )
}
