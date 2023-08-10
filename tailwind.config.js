/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'radnika': ['Radnika', 'sans-serif'],
      },

      colors: {
        'primary': '#3DA2FD',
      }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
}
