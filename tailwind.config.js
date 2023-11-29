/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'background': 'url("https://images.unsplash.com/photo-1518047601542-79f18c655718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'mediumCake': 'url("https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1989&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'largeCake': 'url("https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=1950&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'blob': 'url("https://i.imgur.com/jebY6Ey.png")'
      },
      screens: {
        'lg': '1180px'
      }
    },
    colors: {
      'darkPink': '#F875AA',
      'mediumPink': '#F1B4BB',
      'lightPink': '#FFF6F6',
      'babyBlue': '#AEDEFC',
      ...colors
    }
  },
  plugins: []
};