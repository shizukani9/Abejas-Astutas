@ui
Feature: Update Project Settings

@AC08 @login @createFirstProject @deleteFirstProject
Scenario: Change my project's general settings
    Given I navigate to the project settings page
    When I change the Project Title
        And I change the Project Description
        And I uncheck the enable tasks checkbox
        And I save the changes 
    Then I should see the changes saved correctly