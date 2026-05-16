/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#080c14',
        panel: '#0e1624',
        line: 'rgba(148, 163, 184, 0.18)',
        accent: '#2dd4bf',
        flame: '#fb7185',
      },
      boxShadow: {
        glow: '0 20px 70px rgba(45, 212, 191, 0.14)',
      },
    },
  },
  plugins: [],
}
