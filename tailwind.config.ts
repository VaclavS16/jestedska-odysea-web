import { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

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
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './app.vue',
  ],
}
