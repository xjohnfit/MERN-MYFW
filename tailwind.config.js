/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        heartbeat: "heartbeat 2s ease infinite",
      },
      keyframes: {
        heartbeat: {
          "0%": {
            transform: "scale(1) rotate(-135deg)",
          },
         "25%": {
          transform: "scale(1.25 rotate(-135deg))",
          },
          "45%": {
            transform: "scale(1.5) rotate(-135deg)",
          },
        },
      },
    },
  },
  plugins: [],
}