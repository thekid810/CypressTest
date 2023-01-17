# PracticeTest
# Cypress Note

Before run scripts:
1. Install Node.js
2. open cmd or terminal and type: 
    npm install npm-run-all

Structure of this Project
1. All testcase put on this folder:
    “integration/contourTest”
2. All define test step of testcase put on this folder:
    “integration/contourTest/testcase01-AddAndViewMember”
    “integration/contourTest/testcase02-SearchMember”
3. All Page Objects put on this folder:
    “integration/pageObjects”
4. Report will generate in
    “reports” folder
5. Test data put on fixtures folder

Command to run test: 
1. Copy/download Project to your PC
2. Open terminal(in MacOS) or cmd(in Window)) and change directory to folder that contains project then type this command(Make sure your system installed web browser that you want to run):
    npm run scenarioInChrome
    npm run scenarioInFirefox
    npm run scenarioInEdge
    
Note: 
1.  I uses 2 templates report(Cypress and Cucumber). The Report will be generated in folder:
    Cucumber Report: "Your Project location\cypress\reports\cucumberReport\index.html"
    Cypress Report: "Your Project location\cypress\reports\cypressReport\report.html"
2.  Some Macbooks have the error when generating cucumber report due to Permission Denied, if you see the error in your machine, please follow the link to fix https://github.com/cucumber/json-formatter/issues/24