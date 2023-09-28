/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui")
    ],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#6c8644",
                    "secondary": "#f8b428",
                    "accent": "#fdeb00",
                    "neutral": "#2b3440",
                    "base-100": "#ffffff",
                    "base-200": "#f9fcf7",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#f8b428",
                    "error": "#f87272",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=halloween]"],
                    "primary": "#6c8644",
                },

            },
        ],
    },
};
