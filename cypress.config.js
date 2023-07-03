const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //chromeWebSecurity: false,
  "env":{
  "colorWebsite" : "https://colorhunt.co/palette/b9f3e4ea8feaffaacff6e6c2",
  "colorBoxes": "https://colorhunt.co/palette/116d6e321e1e4e3636cd1818",
  "lengthOfLikes": "https://colorhunt.co/palettes/vintage",
  "rahulWebsite": "https://courses.rahulshettyacademy.com/",
  "demoWebsiteUrls": "https://abstracta.us/blog/software-testing/best-demo-websites-for-practicing-different-types-of-software-tests",
  },
  e2e: {
    "viewportHeight": 1080,
    "viewportWidth":1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});

