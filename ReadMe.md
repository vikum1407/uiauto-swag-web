# Cypress UI Automation Framework 
Developed Cypress automation framework for demo UI web site and added mocha validation for each web pages and element validation with data driven test cases. Integrated cypress awsome report to improve the tracebility and track the test cases running.

## Nodejs Installation

   * Nodejs Installation - https://nodejs.org/en/download
    
## Cypress Installation

   * Cypress Installation - https://docs.cypress.io/guides/getting-started/installing-cypress

## Load the environment variables

   * npm install --save-dev dotenv

## Description and File Structure

   * Main test cases written on the 'e2e' folder.
   * Fixtures are used to do the data-driven test cases.
        
## Run Command

*   Through the browser
 ```bash
npx cypress open
 ```
 
* Command line
 ```bash
npx cypress run --spec "cypress/e2e/<file-name.cy.js>"
 ```

## install report:

    * Install cypress-mochawesome-reporter
 ```bash
npm i --save-dev cypress-mochawesome-reporter
 ```

    * Change cypress reporter & setup hooks
```bash
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
 ```