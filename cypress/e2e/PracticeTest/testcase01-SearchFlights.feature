Feature: Search flights
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