/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: '#BE123C',
        lightRose: 'rgba(190, 18, 60, 0.10)',
        lighterRose: 'rgba(190, 18, 60, 0.20)',
        lightestRose: 'rgba(248, 231, 235, 0.40)',
        gray: {
          300: '#333',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#666',
          900: 'rgba(243, 244, 246, 0.50)'
        },
        transparentBlack: 'rgba(0, 0, 0, 0.50)',
        transparentWhite: 'rgba(255, 255, 255, 0.35)',
        thickTransparentWhite: 'rgba(255, 255, 255, 0.5)'

      }
    }
  },
  plugins: []
}
