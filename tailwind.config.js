/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        fantasy: {
          ...require("daisyui/src/theming/themes")["fantasy"],
          "base-100": "#f9fafb",
        }
      }
    ]
  },
  theme: {
  },
  plugins: [require("daisyui")],
};
