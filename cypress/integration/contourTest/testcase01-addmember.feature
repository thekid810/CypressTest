Feature: End to End Testing
Scenario: Add Member with valid values
    Given I am at home page
    When I click Add Member tab
    When I input all fields and click Submit
    Then I add member sucessful

Scenario: Add member with invalid values
    Given I am at home page
    When I click Add Member tab
    When I input all fields but the phone number is wrong format and click Submit
    Then I can not add member