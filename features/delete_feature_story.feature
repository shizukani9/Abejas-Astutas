@ui 
Feature: Delete a feature type user story

@US2-AC04_TC1 @login @createFirstProject @createFeatureStory @deleteFirstProject @functional @regression @PS
Scenario: Verify that the “Feature” type story is deleted
    When I delete the feature type story from the backlog
    Then I should see the backlog empty