/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, 0.14)'
      }
    }
  },
  plugins: []
}
