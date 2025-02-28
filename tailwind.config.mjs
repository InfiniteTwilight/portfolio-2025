/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
            "./node_modules/preline/preline.js",
            "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
      },
    },
  },
  plugins: [daisyui,require("preline/plugin"),require("flyonui"),require("flyonui/plugin")],
};
