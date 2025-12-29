import type { Config } from "tailwindcss";

const config: Config = {
  // 1. The "content" section must point to "./src/..."
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rome: {
          black: "#0a0a0a",
          dark: "#171717",
          gray: "#525252",
          light: "#f5f5f5",
          white: "#ffffff",
          accent: "#D4AF37", 
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;