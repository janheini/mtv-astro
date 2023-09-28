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
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui")
    ],
    daisyui: {
        themes: [
            {
                mtv: {
                    "primary": "#365314",
                    "secondary": "#facc15",
                    "accent": "#feec00",
                    "neutral": "#171212",
                    "base-100": "#f9fcf7",
                    "info": "#a3e635",
                    "success": "#579933",
                    "warning": "#fbbf24",
                    "error": "#f87272",
                },
            },

        ],
    },
};
