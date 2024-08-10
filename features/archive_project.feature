@ui
Feature: Archivar un Proyecto

@archive @login @createFirstProject 
Scenario: Archivar un proyecto existente
    When I navigate to the project settings page
    Then I archive the project
    Then I should see the project archived confirmation message
