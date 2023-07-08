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
    
  },
});

