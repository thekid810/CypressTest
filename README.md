# PracticeTest

Before run scenario:
1. Install NodeJS
2. open cmd or terminal and type: 
    npm i

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

Run scenario: 
1. Install web browser that you want to test
2. Open terminal(in MacOS) or cmd(in Window)) and change directory to folder that contains project then type this command:
    npm run scenarioInChrome
    npm run scenarioInFirefox
    npm run scenarioInEdge

Test Scenario (2 testcases):
1. Add and View Member:
    User add member with valid values -> Verify that user can add member
    User and member with invalid values(For example: user input phone number with wrong fomat, phone number should be digits) -> Verify that user can not add member. This testcase is bug because user can add member.
    User input ID that he/she created to view member -> Verify that all informations of member are corrected
2. Search member: 
    User input string that exsiting -> Verify information's member is displayed in the list
    User input string that non-exsiting -> Verify the list is empty

Report:
I use 2 templates report(Cypress Report and Cucumber Report). The Report will be generated in folder:
    Cucumber Report: "Your Project location\cypress\reports\cucumberReport\index.html"
    Cypress Report: "Your Project location\cypress\reports\cypressReport\report.html"

Note: Some MacOS have the error when generating cucumber report due to Permission Denied, if you see the error in your machine, please follow the link to fix https://github.com/cucumber/json-formatter/issues/24