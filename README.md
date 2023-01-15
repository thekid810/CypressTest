# PracticeTest
# Cypress Note

How to install Cypress for MacOS:
1. Install Node.js
2. Install Visual Studio Code
3. Install Cypress by opening Terminal in Visual Studio Code(in bottom left) and type “npm install Cypress —save-dev”
4. Install Cucumber by opening Terminal in Visual Studio Code(in bottom left) and type “npm install @badeball/cypress-cucumber-preprocessor” and “npm install @cypress/browserify-preprocessor”
5. Download and install Cucumber (Gherkin) Full Support “[https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)”
6. Install Cucumber Report “npm install multiple-cucumber-html-reporter”
7. Open GooglePractice project

Structure of this Project
1.  All testcase will put on this folder “integration/GooglePractice”
2. All test step define and test setup of testcase will put on this folder “integration/GooglePractice/testcase01”
3. Add “testcase01.feature” to Cypress by opening “cypress.config.js” and add “specPattern: cypress/integration/GooglePractice/*.feature” between e2e:{ }
4. All Page Objects will put on this folder “integration/pageObjects”
5. Report will put in “cucumberReports” folder

Command to run test: 
1. Copy/download Project to this folder your PC
2. Open terminal(in MacOS) or cmd(in Window)) and change directory to folder that contain project then type this command:npm run scenario
