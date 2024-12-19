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
        sans: ['Nunito', 'sans-serif'],
        serif: ['Nunito', 'sans-serif'],
        mono: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
}
