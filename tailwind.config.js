/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffff7f',
          100: '#ffff75',
          200: '#fffe6b',
          300: '#fff461',
          400: '#ffea57',
          500: '#fae04d',
          600: '#f0d643',
          700: '#e6cc39',
          800: '#dcc22f',
          900: '#d2b825'
        }
      }
    }
  },
  plugins: []
}
