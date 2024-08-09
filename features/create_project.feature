@ui
Feature: Create a new project in Pivotal Tracker

@createFirstProject
Scenario: Create a project with valid name
    Given I am logged into Pivotal Tracker
    When I create a new project with the name
        | NameFirstProject | ProjectTest |
    Then I should see the project dashboard with the title