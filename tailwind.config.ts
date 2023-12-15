import { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

export default <Config>{
  theme: {
    extend: {
      minWidth: {
        '52': '13rem',
      },
      colors: {
        'joyellow': "#FADD00",
        'slate-transparent': 'rgba(15, 23, 42, 0.9)',
      },
    },
  },
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './app.vue',
  ],
}
