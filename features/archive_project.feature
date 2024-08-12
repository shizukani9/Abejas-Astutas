@ui
Feature: Archive a project

@US5-AC10_TC1 @login @createFirstProject @deleteFirstProject
Scenario: Verify that a created project can be archived
    When I navigate to the project settings page
    Then I archive the project
        And I should see the project archived confirmation message
