Feature: Add and View Member
Scenario: Add member with valid values
    Given I am at home page
    When I click Add Member tab
    When I input all fields and click Submit
    Then I add member successful

Scenario: Add member with invalid values
    Given I am at home page
    When I click Add Member tab
    When I input all fields but the phone number is wrong format and click Submit
    Then I can not add member

Scenario: Search member with ID
    Given I am at home page
    When I click View Member tab
    When I enter ID then click Search button
    Then I see all informations of member