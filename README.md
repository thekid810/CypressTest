# PracticeTest
# Cypress Note

Before run scripts:
1. Install Node.js
2. open cmd or terminal and type: 
    npm i

Structure of this Project
1. All testcase put on this folder “integration/GooglePractice”
2. All define test step and test setup of testcase put on this folder “integration/GooglePractice/testcase01”
3. All Page Objects put on this folder “integration/pageObjects”
4. Report will generate in “reports/cucumberReport” folder
5. Parameters/Test data put on fixtures folder

Command to run test: 
1. Open terminal(in MacOS) or cmd(in Window)) and change directory to folder that contain project then type this command:
    npm run scenario

Note: Note: Some MacOS have the error when generating cucumber report due to Permission Denied, if you see the error in your machine, please follow the link to fix https://github.com/cucumber/json-formatter/issues/24