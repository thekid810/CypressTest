# PracticeTest
# Cypress Note

Before run scripts:
1. Install Node.js
2. open cmd or terminal and type: npm install npm-run-all

Structure of this Project
1. All testcase put on this folder “integration/GooglePractice”
2. All define test step and test setup of testcase put on this folder “integration/GooglePractice/testcase01”
3. All Page Objects put on this folder “integration/pageObjects”
4. Report will generate in “cucumberReports” folder
5. Parameters/Test data put on fixtures folder

Command to run test: 
1. Copy/download Project to this folder your PC
2. Open terminal(in MacOS) or cmd(in Window)) and change directory to folder that contain project then type this command:npm run scenario
Note: The Report will be opened when finishing the test if you run in MacOS. If you run in window, you have to manual open the report in folder "Your Project location\cypress\cucumberReports\report.html\index.html"