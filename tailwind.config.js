/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: "#082F49",
          90: "#0C4A6E",
          80: "#075985",
          70: "#0369A1",
          60: "#0284C7",
          50: "#0EA5E9",
          40: "#38BDF8",
          30: "#7DD3FC",
          20: "#BAE6FD",
          10: "#E0F2FE"
        },
        secondary: {
          DEFAULT: "#FF6F00",
          90: "#FF8F00",
          80: "#FF8F00",
          70: "#FFA000",
          60: "#FFB300",
          50: "#FFC107",
          40: "#FFCA28",
          30: "#FFD54F",
          20: "#FFE082",
          10: "#FFECB3",
        }
      }
    },
  },
  plugins: [],
};
