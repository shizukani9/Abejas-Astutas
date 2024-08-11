@ui 
Feature: Eliminar una historia de usuario de tipo bug

@deleteBugStory @login @createFirstProject @deleteFirstProject
Scenario: A user can create a bug with the minimum requirements.
    When I create a new story in backlog panel with following information:
        | Title     | Test01  |
        | StoryType | Bug     |
    Then I should see the story with name: "Test01" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | Test01  |
            | StoryType | Bug     |
    Then I have a bug story in the backlog
    Then I delete the bug type story from the backlog
    Then I should see the backlog empty