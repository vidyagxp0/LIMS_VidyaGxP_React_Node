/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': {'max': '320px'}, // 320px screen size
        'xs': {'max': '420px'}, // 420px screen size
        'xm': {'max': '355px'},
        'xsm': {'max': '475px'},
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1536px'},
      },
    },
  },
  variants: {},
  plugins: [],
}
