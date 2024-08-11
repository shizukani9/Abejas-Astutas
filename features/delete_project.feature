@ui
Feature: Create a new project in Pivotal Tracker
    Scenarios related to delete project

@deleteNewFirstProject @login @createFirstProject
Scenario: A user delete a new first project successfully 
    When I delete a new project
    Then I should see the Introduction page empty