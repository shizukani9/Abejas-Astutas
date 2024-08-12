@ui
Feature: Create a new project in Pivotal Tracker

@US1_AC01_TC1 @login @deleteFirstProject
Scenario: Verify that a new project can be created
    When I create a new project with name: "TestName01"
    Then I sould see the name of new project at the top left of the page

@login @deleteFirstProject
Scenario: Verify that a new project can be created is created with a name of minimum size
    When I create a new project with name: "A"
    Then I sould see the name of new project at the top left of the page

@login @deleteFirstProject
Scenario: Verify that a new project can be created is created with a name of maximun size
    When I create a new project with name: "Name____________________________________________50"
    Then I sould see the name of new project at the top left of the page