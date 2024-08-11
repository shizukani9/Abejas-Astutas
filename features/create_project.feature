@ui
Feature: Create a new project in Pivotal Tracker
    Scenarios related to create project

@createNewFirstProject @login @deleteFirstProject
Scenario: A user create a new first project successfully 
    When I create a new project
    Then I sould see the name of new project at the top left of the page