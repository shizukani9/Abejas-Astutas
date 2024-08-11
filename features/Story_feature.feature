@ui
Feature: Management of Story Type - Feature

@createFeatureStory @login @createFirstProject @deleteFirstProject
Scenario: A user can create a bug with the minimum requirements.
    When I create a new story in backlog panel with following information:
        | Title     | Test01  |
        | StoryType | Feature |
    Then I should see the story with name: "Test01" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | Test01  |
            | StoryType | Feature |
     
