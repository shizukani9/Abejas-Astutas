@ui
Feature: Crear un nuevo proyecto en Pivotal Tracker

@create
Scenario: Crear un proyecto con nombre válido
    Given I am logged into Pivotal Tracker
    When I create a new project with the name
        | NameFirstProject | ProjectTest |
    Then I should see the project dashboard with the title