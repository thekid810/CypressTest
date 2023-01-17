Feature: Search Member
Scenario: Search existing member
    Given I am at home page
    When I click Search Member tab
    When I enter an existing name of member
    Then I can see member in the list

Scenario: Search non-existing member
    Given I am at home page
    When I click Search Member tab
    When I enter an non-existing name of member
    Then The list is empty