import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: "#1C0F13",
          foreground: "#BBBAC6",
          primary: "#E2C044",
          secondary: "#AF97C3",
          'content1': "#1C0F13"
        }
      },
      light: {
        colors: {
          background: "#E2C044",
          foreground: "#1C0F13",
          primary: "#255957",
          secondary: "#AF97C3",
          'content1': "#E2C044"
        }
      },
    }
  })],
} satisfies Config;
