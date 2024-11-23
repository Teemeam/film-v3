/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  plugins: [],
  safelist: [...[...Array(2000).keys()].flatMap((i) => [`pb-[${((i + 1) * 0.1).toFixed(1)}%]`])],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#e3e6e6',
          200: '#c6cdcd',
          300: '#aab4b4',
          400: '#8e9b9b',
          500: '#718282',
          600: '#556969',
          700: '#395050',
          800: '#1c3737',
          900: '#001e1e',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat\\ Variable', 'ui-sans-serif', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.75rem',
        '2xl': '3.5rem',
        '3xl': '7rem',
      },
    },
  },
};
