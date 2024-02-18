import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7100ff",

          "secondary": "#007e9b",

          "accent": "#0081ff",

          "neutral": "#2b2524",

          "base-100": "#ffffff",

          "info": "#00fbff",

          "success": "#00b481",

          "warning": "#ae5400",

          "error": "#ff525b",
        },
      },
    ],
  },
};
export default config;
