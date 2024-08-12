@ui
Feature: Update Project Settings

@US4-AC08_TC1 @login @createFirstProject @deleteFirstProject
Scenario: Verify that you can update the general settings of a new project
    Given I navigate to the project settings page
    When I change the Project Title
        And I change the Project Description
        And I uncheck the enable tasks checkbox
        And I save the changes 
    Then I should see the changes saved correctly