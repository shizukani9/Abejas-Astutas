@ui
Feature: Management of Story Type - Feature

@US2-AC02_TC1 @login @createFirstProject @deleteFirstProject @functional @regression
Scenario: Verify that a “Feature” type story can be created with the minimum requirements
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,9> |
        | StoryType | Feature         |
    Then I should see the story with name: "<RandomValue,9>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,9> |
            | StoryType | Feature         |
     
@US2_AC03_TC1 @login @createFirstProject @addAMemberToProject @deleteFirstProject @functional @regression
Scenario: Verify that a new story of type "Feature" is created with an "Owner"
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,9> |
        | StoryType | Feature         |
        | Owners    | userMember01    |
    Then I should see the story with name: "<RandomValue,9>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,9> |
            | StoryType | Feature         |
            | Owners    | userMember01    |

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Feature" type story is created with a name of minimum size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,1> |
        | StoryType | Feature         |
    Then I should see the story with name: "<RandomValue,1>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,1> |
            | StoryType | Feature         |

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Feature" type story is created with a name of maximun size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,5000> |
        | StoryType | Feature            |
    Then I should see the story with name: "<RandomValue,5000>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,5000> |
            | StoryType | Feature            |

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Bug" type story is not created with a empty name
    When I create a new story in backlog panel with following information:
        | Title     |         |
        | StoryType | Feature |
    Then I should see the the popup window with title: "Validation Error"

@login @createFirstProject @deleteFirstProject @regression
Scenario: Verify that a new "Bug" type story is not created with a name that exceeds the maximum size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,5001> |
        | StoryType | Feature            |
    Then I should see the the popup window with title: "Validation Error"

