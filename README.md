# PracticeTest
# Cypress Note

Before run scripts:
1. Install Node.js
2. open cmd or terminal and type: 
    npm install npm-run-all

Structure of this Project
1. All testcase put on this folder “integration/contourTest”
2. All define test step of testcase put on this folder:
    “integration/contourTest/testcase01-addmember”
3. All Page Objects put on this folder “integration/pageObjects”
4. Report will generate in “reports/cucumberReport” folder
5. Parameters/Test data put on fixtures folder

Command to run test: 
1. Copy/download Project to this folder your PC
2. Open terminal(in MacOS) or cmd(in Window)) and change directory to folder that contains project then type this command(make sure your system installed web browser that you want to run):
    npm run scenarioInChrome
    npm run scenarioInFirefox
    npm run scenarioInEdge
Note: 
1.  The Report will be generated folder "Your Project location\cypress\cucumberReports\report.html\index.html"
2.  Some Macbooks orrcur the error when generating report due to Permission Denied, if you see the error in your machine, please follow the link to fix https://github.com/cucumber/json-formatter/issues/24