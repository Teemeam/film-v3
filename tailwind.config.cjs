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
        green: {
          ...defaultTheme.colors.green,
          900: '#001E1E',
        },
        orange: {
          ...defaultTheme.colors.orange,
          900: '#FC6862',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
