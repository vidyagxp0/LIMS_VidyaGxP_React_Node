/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "mobile":  "425px",
      "tablet":  "640px",
      "laptop":  "1024px",
      "desktop": "1280px",
    },
    plugins: [],
  },
};
