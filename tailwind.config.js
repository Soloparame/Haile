/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: 'var(--surface)',
        'surface-border': 'var(--surface-border)',
        'text-muted': 'var(--text-muted)',
        primary: {
          green: '#00ff88',
          dark: 'var(--primary-dark)',
          gray: '#1a1a1a',
          'gray-light': '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['Red Hat Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}
