@ui
Feature: Bug
    Scenarios related to login acceptance creteria

@wip @login @createFirstProject @deleteFirstProject
Scenario: A user can create a bug with the minimum requirements.
    When I create a new story in backlog panel with following information:
        | Title     | Test01  |
        | StoryType | Bug           |
    Then I should see the story with name: "<RandomName>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomName>  |
            | StoryType | Bug           |

     
