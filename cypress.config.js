module.exports = {
  e2e: {
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "viewportHeight": 1080,
      "viewportWidth": 1920,
      "pageLoadTimeout": 2000000,
      baseUrl: "https://colorhunt.co/palette/900c3fc70039f94c10f8de22",
      background_color_website: "https://cssgradient.io/shades-of-blue/",
      dragAnddropWebsite: "https://demo.automationtesting.in/Static.html"

    }
  },
};
