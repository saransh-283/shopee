/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#524cf0",  //blueish
        "secondary": "#f5f5f5",  //white
        "tertiary": "#e9e9e9",  // dark white
        "dark":"#080808"  // dark grey
      }
    },
  },
  plugins: [],
}
