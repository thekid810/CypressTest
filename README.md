# PracticeTest

Before run scenario:
1. Install NodeJS
2. open cmd or terminal and type: 
    npm i

Structure of this Project
1. All testcase put on this folder:
    e2e/PracticeTest
2. All define test step of testcase put on this folder:
    e2e/PracticeTest/testcase01-SearchFlights
3. All Page Objects put on this folder:
    e2e/pageObjects”
4. Report will generate in
    “reports” folder
5. Test data put on fixtures folder

Run scenario: 
1. Install web browser that you want to test
2. Open terminal(in MacOS) or cmd(in Window) and change directory to folder that contains project then type this command:
    npm run scenarioInChrome
    npm run scenarioInFirefox
    npm run scenarioInEdge

Report:
I use 2 templates report(Cypress Report and Cucumber Report). The Report will be generated in folder:
    Cucumber Report: "Your Project location\cypress\reports\cucumberReport\index.html"
    Cypress Report: "Your Project location\cypress\reports\cypressReport\report.html"

Note: Some MacOS have the error when generating cucumber report due to Permission Denied, if you see the error in your machine, please follow the link to fix https://github.com/cucumber/json-formatter/issues/24