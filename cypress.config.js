
const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-await
const cyAwaitPreprocessor = require('cypress-await/src/preprocessor')

module.exports = {
  e2e: {
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        excelToJsonConverter(filepath) {
          const result = excelToJson({
            source: readFileSync(filepath)
          });
          return result;

        }
      })

    },
    env: {
      "viewportHeight": 1080,
      "viewportWidth": 1920,
      "pageLoadTimeout": 2000000,
      baseUrl: "https://colorhunt.co/palette/900c3fc70039f94c10f8de22",
      background_color_website: "https://cssgradient.io/shades-of-blue/",
      dragAnddropWebsite: "https://demo.automationtesting.in/Static.html",
      loginPage: "https://demo.guru99.com/test/newtours/login.php",
      registerPage: "https://demo.guru99.com/test/newtours/register.php",
      githubb: "https://github.com/"
    }
  },
};
