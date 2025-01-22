import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          background: "#3d1f0b",
          foreground: "#fdfbed",
          primary: "#E2C044",
          secondary: "#034C3C",
          'content1': {
            '50': '#fdfbed',
            '100': '#f7f2ce',
            '200': '#efe498',
            '300': '#e7d062',
            '400': '#e2c044',
            '500': '#d9a227',
            '600': '#c07f1f',
            '700': '#9f5e1e',
            '800': '#824a1e',
            '900': '#6b3d1c',
          },
        }
      },
      light: {
        colors: {
          background: "#f7f2ce",
          foreground: "#6b3d1c",
          primary: '#c07f1f',
          secondary: "#034C3C",
          'content1': {
            '50': '#fdfbed',
            '100': '#f7f2ce',
            '200': '#efe498',
            '300': '#e7d062',
            '400': '#e2c044',
            '500': '#d9a227',
            '600': '#c07f1f',
            '700': '#9f5e1e',
            '800': '#824a1e',
            '900': '#6b3d1c',
          },
        }
      }
    }
  })],
} satisfies Config;
