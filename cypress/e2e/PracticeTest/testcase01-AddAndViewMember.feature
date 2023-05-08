Feature: Search flights
Scenario: I select returning time less than departing time
    Given As a MarsAir Sales Director - Mark, I am at home page.
    When I select departing time then select returning time that less than departing time.
    When I click Search button.
    Then I should see the message like: Unfortunately, this schedule is not possible. Please try again.
Scenario: I select returning time greater than departing time then I can search available seats
    Given As a MarsAir Sales Director - Mark, I am at home page.
    When I select departing time then select returning time that greater than departing time.
    When I click Search button.
    Then I should see the message like: Seat available!Call now on 0800 MARSAIR to book!.
