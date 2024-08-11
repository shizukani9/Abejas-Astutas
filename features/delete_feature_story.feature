@ui 
Feature: Delete a feature type user story

@deleteFeatureStory @login @createFirstProject @createFeatureStory @deleteFirstProject
Scenario: A user can create a feature with the minimum requirements
    When I delete the feature type story from the backlog
    Then I should see the backlog empty