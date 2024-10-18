import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        geistSans: ["var(--font-geist-sans)"],
      },
      screens: {
        'xs': {'max': '599px'},
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...other plugins
  ],
};

export default config;
