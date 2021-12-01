module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#4ea97d",
        },
        blue: {
          DEFAULT: "#98e0ef",
        },
        darkBleu: {
          DEFAULT: "rgb(5,41,66)",
        },
        yellow: {
          DEFAULT: "#fff600",
        },
        red: {
          DEFAULT: "#e5383b",
        }
      },
      fontFamily: {
        pixel: "Press Start 2P",
      },
    }


  },
  variants: {
    extend: {},
  },
  plugins: [],
};
