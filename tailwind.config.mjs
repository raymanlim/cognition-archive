/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        leaf: 'var(--leaf)',
        card: 'var(--card)',
        obi: 'var(--obi)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        cinnabar: 'var(--cinnabar)',
        pine: 'var(--pine)',
        rule: 'var(--rule)',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', '"Songti SC"', '"STSong"', '"SimSun"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        archive: '78rem',
      },
    },
  },
  plugins: [],
};
