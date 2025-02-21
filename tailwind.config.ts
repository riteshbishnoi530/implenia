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
        "light-gray": "#8F9090",
        "custom-grey": "#D9D9D9",
        "off-white": "#F5F5F5",
        "custom-red": "#FF132D",
        "custom-blue": "#009FE3",
        "custom-yellow": "#FEBE32",
      },
      backgroundImage: {
        "hero": "url('/assets/images/hero-bg.webp')",
      },
      lineHeight: {
        "custom-sm": "103%",
        "custom-md": "125%",
        "custom-lg": "128%",
      },
      
      fontSize:{
        "custom-sm": "21px",
        "custom-ssm": "35px",
        "custom-md": "49px",
        "custom-lg": "76px",
        "custom-xl": "80px",

      },

      
    },
  },
  plugins: [],
} satisfies Config;
