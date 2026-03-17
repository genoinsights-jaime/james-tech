/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        black: "var(--color-black)",
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        gray: "var(--color-gray)",
        "gray-bg": "var(--color-gray-bg)",
      },
      maxWidth: {
        page: "var(--page-max-width)",
      },
    },
  },
};
