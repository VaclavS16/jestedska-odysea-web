import { Config } from '@tailwindcss/vite'

export default <Config>{
  theme: {
    extend: {
      minWidth: {
        '52': '13rem',
      },
      colors: {
        'jo-primary': "#FFFD0A",
        'slate-transparent': 'rgba(15, 23, 42, 0.9)',
        'black-transparent': 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  content: [
    './src/**/*.{astro,html,js,ts,md,mdx}',
  ],
}
