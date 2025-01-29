/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        blanco: "#e2def5",
        lightPurple: "#9a55dc",
        fondo: "#18092d",
        aFondo: "#7850ca",
      },
      backgroundImage: {
        homeBanner:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('/src/assets/image.webp')",
      },
    },
  },
  plugins: [require("taos/plugin")],
};
