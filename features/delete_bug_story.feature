@ui 
Feature: Delete a bug type user story

@deleteBugStory @login @createFirstProject @createBugStory @deleteFirstProject
Scenario: A user can create a bug with the minimum requirements
    When I delete the bug type story from the backlog
    Then I should see the backlog empty