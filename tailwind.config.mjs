import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          primary: "#6c8644",
          secondary: "#f8b428",
          accent: "#fdeb00",
          neutral: "#2b3440",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
