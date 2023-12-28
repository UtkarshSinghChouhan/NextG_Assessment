import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url(/static-assets/images/hero-bg.webp)",
      },

      colors: {
        "bg-gray": "#37384c",
        "buy-bg": "#f9f7f6",
        "text-gray": "#656675",
      },
    },
  },
  plugins: [],
};
export default config;
