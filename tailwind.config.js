/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|border|from|to)-(elementalist|engineer|guardian|mesmer|necromancer|ranger|revenant|thief|warrior)/,
      variants: ["hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'main-text': 'rgb(var(--text-main) / <alpha-value>)',
        'secondary-text': 'rgb(var(--text-secondary) / <alpha-value>)',
        elementalist: '#EC5752',
        engineer: '#996633',
        guardian: '#3399CC',
        mesmer: '#993399',
        necromancer: '#339966',
        ranger: '#66CC33',
        revenant: '#CC6342',
        thief: '#CC6666',
        warrior: '#FF9933',        
      }
    },
  },
  plugins: [],
}
