/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      m: "490px",

      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      colors: {
        white: "#FBFBFB",

        "teal-900": "#103931;",
        "stone-200": "rgba(251, 251, 251, 0.40)",
        gray: "#8A8A89",
        "light-gray": "#F3F3F3;",
        green: "#38CD3E",
        yellow: "#FFC531",
        black: "#11101C",
        "light-teal": "rgba(16, 57, 49, 0.20)",
        "border-gray": "rgba(17, 16, 28, 0.10);",
      },
    },
  },
  plugins: [],
};
