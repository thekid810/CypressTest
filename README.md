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

Acceptance criterias:
Scenario: Select a departing time and a returning time that is less than 1 year from the departure
    Given As a MarsAir Sales Director - Mark, I am at home page
    When I select a departing time and a returning time that is less than 1 year from the departure, then I click the Search button
    Then I should see a message that says: Unfortunately, this schedule is not possible. Please try again
    Then I click Back button and I am at home page

Scenario: Select a departing time and a returning time that is greater than 1 year from the departure
    Given As a MarsAir Sales Director - Mark, I am at home page
    When I select a departing time and a returning time that is greater than 1 year from the departure, then I click the Search button
    Then I should see a message that says: Seats available! Call now on 0800 MARSAIR to book!
    Then I click Back button and I am at home page

Scenario: Select returning time and departing time that have no available seats
    Given As a MarsAir Sales Director - Mark, I am at home page
    When I select a departing time and a returning time that is equal 1 year from the departure, then I click the Search button
    Then I should see a message that says: Sorry, there are no more seats available
    Then I click Back button and I am at home page

Scenario: Input valid promotional code, and search for available seats with discount
    Given As a MarsAir Sales Director - Mark, I am at home page
    When I select a departing time and a returning time that is greater than 1 year from the departure, and I input a valid promotional code, then I click the Search button
    Then I should see a message that says: Promotional code XX9-XXX-999 used: xx% discount!
    Then I click Back button and I am at home page

Scenario: Input invalid promotional code, and search for available seats with discount
    Given As a MarsAir Sales Director - Mark, I am at home page
    When I select a departing time and a returning time that is greater than 1 year from the departure, and I input a invalid promotional code, then I click the Search button
    Then I should see a message that says: Sorry, code XX9-XXX-999 is not valid.
    Then I click Back button and I am at home page
    
Report:
I use 2 templates report(Cypress Report and Cucumber Report). The Report will be generated in folder:
    Cucumber Report: "Your Project location\cypress\reports\cucumberReport\index.html"
    Cypress Report: "Your Project location\cypress\reports\cypressReport\report.html"

Note: Some MacOS have the error when generating cucumber report due to Permission Denied, if you see the error in your machine, please follow the link to fix https://github.com/cucumber/json-formatter/issues/24