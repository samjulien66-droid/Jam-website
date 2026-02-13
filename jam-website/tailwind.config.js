/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ocean Breeze (default)
        ocean: {
          bg: '#fafcfd',
          'bg-secondary': '#f0f7fa',
          accent: '#3b8bba',
          'accent-hover': '#2a7aa8',
          warm: '#1a3a4a',
          text: '#2d4a5e',
          'text-muted': '#7a9aad',
          border: '#d4e5ed',
          highlight: '#e8f4f8',
        },
        // Clear Sky
        sky: {
          bg: '#ffffff',
          'bg-secondary': '#f5f9fc',
          accent: '#5ba4c9',
          'accent-hover': '#4a93b8',
          warm: '#1e3d4d',
          text: '#334d5c',
          'text-muted': '#8ca3b0',
          border: '#dde9f0',
          highlight: '#fff5f3',
          coral: '#e8846e',
        },
        // Morning Mist
        mist: {
          bg: '#fdfefe',
          'bg-secondary': '#f4f8fa',
          accent: '#6fa8c7',
          'accent-hover': '#5e97b6',
          warm: '#2a4554',
          text: '#3d5565',
          'text-muted': '#94a8b4',
          border: '#e2ecf1',
          highlight: '#fef6f3',
          coral: '#dda090',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
}
