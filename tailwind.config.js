/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("daisyui"), ("tw-elements-react/dist/plugin.cjs")],
  daisyui: {
    themes: ["cupcake", "black", "light"],
  },
});
