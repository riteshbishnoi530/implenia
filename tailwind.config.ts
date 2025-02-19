import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-grey": "#1D1D1B",
      },
      backgroundImage: {
        "hero": "url('/assets/images/hero-bg.webp')",
        "youtube-img": "url('/assets/images/how-it-work-img.webp')"
      },
      lineHeight: {
        "custom-sm": "103%",
        "custom-md": "125%",
      },
      
      fontSize:{
        "custom-sm": "21px",
        "custom-md": "49px",
        "custom-lg": "76px",
        "custom-xl": "80px",

      }
    },
  },
  plugins: [],
} satisfies Config;
