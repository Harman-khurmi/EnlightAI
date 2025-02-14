/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              darkBlue: "#1E4D7B",
              lightBlue: "#4BA3D8",
              pink: "#C8A2C8",
            },
          },
    },
    darkMode: 'class', // This is the key line for dark mode
    plugins: [],
  }