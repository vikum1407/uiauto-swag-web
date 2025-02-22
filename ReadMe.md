# **Cypress UI Automation Framework**  

This Cypress automation framework is designed for testing a demo UI website. It includes **Mocha assertions** for web page validation, **data-driven testing**, and an integrated **Cypress Mochawesome Reporter** for better traceability and test execution tracking.  

## **Prerequisites**  

Before setting up the framework, ensure you have the following installed:  

- **Node.js** (Download: [Node.js Official Site](https://nodejs.org/en/download))  
- **Cypress** (Installation guide: [Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress))  

## **Project Setup**  

### **1. Install Node.js (If Not Installed)**  
Download and install **Node.js** from the official site.  

### **2. Install Cypress**  
Run the following command to install Cypress as a dev dependency:  
```bash
npm install --save-dev cypress
```

### **3. Load Environment Variables**  
To manage environment variables, install **dotenv**:  
```bash
npm install --save-dev dotenv
```

## **Project Structure**  

```
📂 cypress-automation-framework
│── 📂 cypress
│   ├── 📂 e2e                # Contains main test cases
│   ├── 📂 fixtures           # Stores test data for data-driven testing
│   ├── 📂 support            # Custom Cypress commands and utilities
│   ├── 📂 reports            # Stores generated test reports
│   ├── cypress.config.js     # Cypress configuration file
│── 📂 node_modules           # Node.js dependencies
│── package.json              # Project dependencies & scripts
│── README.md                 # Documentation
```

## **Running Test Cases**  

### **1. Run Cypress in Interactive Mode (Browser Mode)**  
```bash
npx cypress open
```
- This will open the **Cypress Test Runner**, allowing you to run test cases interactively.  

### **2. Run Tests in Headless Mode (Command Line Execution)**  
To execute a specific test file in **headless mode**:
```bash
npx cypress run --spec "cypress/e2e/<file-name.cy.js>"
```
- This will run the specified test file without opening the Cypress Test Runner.  

## **Setting Up Cypress Mochawesome Reporter**  

To generate **detailed and visually appealing test reports**, integrate **cypress-mochawesome-reporter**.  

### **1. Install Mochawesome Reporter**  
```bash
npm install --save-dev cypress-mochawesome-reporter
```

### **2. Configure Cypress to Use the Reporter**  
Modify **cypress.config.js** to enable the reporter:
```javascript
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

## **Generating and Viewing Test Reports**  

1. **Run tests and generate a report**  
   ```bash
   npx cypress run --reporter cypress-mochawesome-reporter
   ```
2. **Open the HTML report**  
   - Reports are generated inside the `cypress/reports` folder.
   - Open the **`mochawesome.html`** file in a browser to view the test results.

