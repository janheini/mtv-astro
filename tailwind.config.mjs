import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            // style blockquotes in tailwind typography after images
            blockquote: {
              border: "none",
              quotes: "none",
              color: "inherit",
              "font-size": "0.875rem",
              "line-height": "1.125rem",
              "padding-inline-start": 0,
              "padding-left": "1rem",
              "padding-right": "1rem",
            },
            "p:has(img) + blockquote": {
              "margin-top": "-1.5em",
            },
          },
        },
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          primary: "#6c8644",
          secondary: "#f8b428",
          accent: "#fdeb00",
          neutral: "#f9fcf7",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
