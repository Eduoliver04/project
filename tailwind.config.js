/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6633',
        'primary-blue': '#001F3F',
        'light-bg': '#F5F5F5',
        'text-dark': '#333333',
        'success': '#00D084',
        'warning': '#FFA500',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
