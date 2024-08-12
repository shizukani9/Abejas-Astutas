@ui
Feature: Create a new project in Pivotal Tracker

@US1_AC01_TC1 @login @deleteFirstProject
Scenario: Verify that a new project can be created
    When I create a new project
    Then I sould see the name of new project at the top left of the page