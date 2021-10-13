module.exports = {
  purge: ["/src/*.html"],
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
        success: "hsl(113, 54%, 39%)",
        danger: "hsl(0, 54%, 49%)",
      },
      backgroundImage: {
        "slide-1": "url(/public/olav-ahrens-rotne-4Ennrbj1svk-unsplash.jpg)",
        "slide-2": "url(/public/annie-spratt-9VpI3gQ1iUo-unsplash.jpg)",
        "slide-3": "url(/public/chris-liverani-ViEBSoZH6M4-unsplash.jpg)",
        "slide-4": "url(/public/sigmund-B-x4VaIriRc-unsplash.jpg)",
        industries: "url(/public/bill-eccles-9r3WhfQhAX8-unsplash.jpg)",
        credit: "url(/public/pay.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
