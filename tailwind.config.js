/* eslint-disable @typescript-eslint/no-require-imports */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        serif: ['Nunito', ...defaultTheme.fontFamily.serif],
        mono: ['Nunito', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
