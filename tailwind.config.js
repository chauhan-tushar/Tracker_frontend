/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontSize: {
          'title-sm': ['16px', {
              lineHeight: '2rem',
              fontWeight: '600',
          }],
          'title-md': ['18px', {
            lineHeight: '2rem',
            fontWeight: '600',
        }],
      }
  },
  plugins: [],
}

