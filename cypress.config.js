const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '35ki3n',
  //chromeWebSecurity: false

  e2e: {
    "viewportHeight": 1080,
    "viewportWidth":1920,
    "pageLoadTimeout": 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "https://colorhunt.co/palette/900c3fc70039f94c10f8de22",
    }
    
  },
});

