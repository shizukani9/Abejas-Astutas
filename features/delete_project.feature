@ui
Feature: Create a new project in Pivotal Tracker

@US5_AC09_TC1 @login @createFirstProject @functional @regression
Scenario: Verify that a new project can be deleted
    When I delete a new project
    Then I should see the Introduction page empty