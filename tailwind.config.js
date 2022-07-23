/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'main-text': 'rgb(var(--text-main) / <alpha-value>)',
        'secondary-text': 'rgb(var(--text-secondary) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
