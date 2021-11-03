module.exports = {
  purge: [
    "./src/*.html",
    "./src/html/*.html",
    "./src/*.js",
    "./src/js/*.js",
    "./src/js/requestHandlers/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: "'Birthstone', cursive",
        titles: "'Bebas Neue', cursive",
        primary: "'Hind Siliguri', sans-serif",
      },
      colors: {
        dark: "hsl(0, 0%, 10%)",
        light: "hsl(0, 0%, 98%)",
        accent: "hsl(183, 100%, 40%)",
        "drk-accent": "hsl(183, 100%, 20%)",
      },
      backgroundImage: {
        "slide-1":
          "url(/public/images/olav-ahrens-rotne-4Ennrbj1svk-unsplash.jpg)",
        "slide-2": "url(/public/images/annie-spratt-9VpI3gQ1iUo-unsplash.jpg)",
        "slide-3":
          "url(/public/images/chris-liverani-ViEBSoZH6M4-unsplash.jpg)",
        "slide-4": "url(/public/images/sigmund-B-x4VaIriRc-unsplash.jpg)",
        industries: "url(/public/images/bill-eccles-9r3WhfQhAX8-unsplash.jpg)",
        credit: "url(/public/images/pay.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
