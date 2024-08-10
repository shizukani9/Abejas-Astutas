@ui
Feature: Archive a project

@archiveProject @login @createFirstProject @deleteArchiveProject
Scenario: Archive an existing project 
    When I navigate to the project settings page
    Then I archive the project
    Then I should see the project archived confirmation message
