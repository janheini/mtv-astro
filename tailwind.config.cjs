/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c8644",
        background: "#f9fcf7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
