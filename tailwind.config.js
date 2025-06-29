/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
    },
  },
};
