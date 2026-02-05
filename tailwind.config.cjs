/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4B6333',
        },
        text: {
          primary: '#0E1829',
          muted: '#4E534B',
        },
        surface: {
          base: '#F7F7F0',
        },
        border: {
          primary: '#BEC6B9',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
