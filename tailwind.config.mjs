/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#010d26",
        purple: "#8508fb",
        orange: "#ffa500",
        pink: "#d026e1",
        complementary: "#f3d3a0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
