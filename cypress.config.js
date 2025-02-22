const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-terminal-report/src/installLogsPrinter')(on)
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
