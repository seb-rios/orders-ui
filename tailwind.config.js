/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#4CAF50",
      //     secondary: "#FF9800",
      //     accent: "#03A9F4",
      //     neutral: "#333",
      //     "base-100": "#fff",
      //     info: "#209CEE",
      //     success: "#4CAF50",
      //     warning: "#FF9800",
      //     error: "#FF5722",
      //   },
      // },
      // "cupcake",
      "light",
      // "dark",
    ],
  },
};
