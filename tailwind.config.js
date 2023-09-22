/** @type {import('tailwindcss').Config} */
const FormKitVariants = require("@formkit/themes/tailwindcss");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./tailwind-theme.js",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ew: {
        DEFAULT: "#009645",
        background: "#e6f5ec",
        light: "#4db67d",
        "v-light": "#99d5b5",
        dark: "#006930",
        "v-dark": "#003c1c",
      },
      dt: {
        DEFAULT: "#005EC4",
        background: "#e6eff9",
        light: "#4d8ed6",
        "v-light": "#99bfe7",
        dark: "#004289",
        "v-dark": "#00264e",
      },
      ns: {
        DEFAULT: "#D42E12",
        background: "#fbeae7",
        light: "#e16d59",
        "v-light": "#eeaba0",
        dark: "#94200d",
        "v-dark": "#551207",
      },
      cc: {
        DEFAULT: "#FA9E0D",
        background: "#fff5e7",
        light: "#fcbb56",
        "v-light": "#fdd89e",
        dark: "#af6f09",
        "v-dark": "#643f05",
      },
      te: {
        DEFAULT: "#9D5B25",
        background: "#f5efe9",
        light: "#ba8c66",
        "v-light": "#d8bda8",
        dark: "#6e401a",
        "v-dark": "#3f240f",
      },
      ne: {
        DEFAULT: "#9900AA",
        background: "#f5e6f7",
        light: "#b84dc4",
        "v-light": "#d699dd",
        dark: "#6b0077",
        "v-dark": "#3d0044",
      },
      jr: {
        DEFAULT: "#0099AA",
        background: "#e6f5f7",
        light: "#4db8c4",
        "v-light": "#99d6dd",
        dark: "#006b77",
        "v-dark": "#003d44",
      },
      lrt: {
        DEFAULT: "#748477",
        background: "#f1f3f1",
        light: "#9EA9A0",
        "v-light": "#C7CEC9",
        dark: "#515C53",
        "v-dark": "#2E3530",
      },
      light: "#FAFAFA",
      black: "#424242",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [FormKitVariants],
};
