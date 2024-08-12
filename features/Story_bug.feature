@ui
Feature: Management of Story Type - Bug

@US3-AC05_TC1 @login @createFirstProject @deleteFirstProject @functional @regression
Scenario: Verify that a new "Bug" type story is created with the minimum requirements
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,9> |
        | StoryType | Bug             |
    Then I should see the story with name: "<RandomValue,9>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,9> |
            | StoryType | Bug             |

@US3-AC06_TC1 @login @createFirstProject @addAMemberToProject @deleteFirstProject @functional @regression
Scenario: Verify that a new "Bug" type story is created with an "Owner"
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,9> |
        | StoryType | Bug             |
        | Owners    | userMember01    |
    Then I should see the story with name: "<RandomValue,9>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,9> |
            | StoryType | Bug             |
            | Owners    | userMember01    |

@US3-AC07_TC1 @login @createFirstProject @createBugStory @deleteFirstProject @functional @regression
Scenario: Verify that a "Bug" type story can be deleted
    When I delete the bug type story from the backlog
    Then I should see the backlog empty     

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Bug" type story is created with a name of minimum size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,1> |
        | StoryType | Bug             |
    Then I should see the story with name: "<RandomValue,1>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,1> |
            | StoryType | Bug             |

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Bug" type story is created with a name of maximun size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,5000> |
        | StoryType | Bug                |
    Then I should see the story with name: "<RandomValue,5000>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,5000> |
            | StoryType | Bug                | 

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Bug" type story is not created with a empty name
    When I create a new story in backlog panel with following information:
        | Title     |     |
        | StoryType | Bug |
    Then I should see the the popup window with title: "Validation Error"

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Bug" type story is not created with a name that exceeds the maximum size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,5001> |
        | StoryType | Bug                |
    Then I should see the the popup window with title: "Validation Error"
