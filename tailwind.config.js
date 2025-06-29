/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#04346E",
        "secondary": "#111827",
        "1":"#6EACDA",
        "light":"#6EACDA",
      },
    },
  },
  plugins: [],
}

