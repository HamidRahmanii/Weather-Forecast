module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add paths to all your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4", // Your custom primary color
        secondary: "#ecc94b", // Your custom secondary color
      },
    },
  },
  plugins: [],
};
