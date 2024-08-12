@ui
Feature: Management of Story Type - Bug
#US3-AC05_TC1 Verificar que una nueva historia de tipo "Bug" es creada con los mínimos requerimientos (JORGE)
@US3-AC05_TC1 @login @createFirstProject @deleteFirstProject @functional @regression @PS
Scenario: Verify that a new "Bug" type story is created with the minimum requirements
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,9> |
        | StoryType | Bug             |
    Then I should see the story with name: "<RandomValue,9>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,9> |
            | StoryType | Bug             |
#US3-AC06_TC1 US3-AC06_TC1 Verificar que una nueva historia de tipo "Bug" es creada con un "Owner" (JORGE)
@US3-AC06_TC1 @login @createFirstProject @addAMemberToProject @deleteFirstProject @functional @regression @PS
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
#US3-AC07_TC1 Verificar que una  historia de tipo "Bug" puede ser eliminada (VALERIA)
@US3-AC07_TC1 @login @createFirstProject @createBugStory @deleteFirstProject @functional @regression @PS
Scenario: Verify that a "Bug" type story can be deleted
    When I delete the bug type story from the backlog
    Then I should see the backlog empty     
#US3-AC05_TC2 Verificar que una nueva historia de tipo "Bug" es creada con un nombre de tamaño mínimo permitido (JORGE)
@US3-AC05_TC2 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that a new "Bug" type story is created with a name of minimum size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,1> |
        | StoryType | Bug             |
    Then I should see the story with name: "<RandomValue,1>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,1> |
            | StoryType | Bug             |
#US3-AC05_TC3 Verificar que una nueva historia de tipo "Bug" es creada con un nombre de tamaño máximo permitido (JORGE)
@US3-AC05_TC3 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that a new "Bug" type story is created with a name of maximun size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,5000> |
        | StoryType | Bug                |
    Then I should see the story with name: "<RandomValue,5000>" in backlog panel
        And  I should see the story in backlog panel with following information:
            | Title     | <RandomValue,5000> |
            | StoryType | Bug                | 
#US3-AC05_TC4 Verificar que una nueva historia de tipo "Bug" no es creada con un nombre vacío(JORGE)
@US3-AC05_TC4 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that a new "Bug" type story is not created with a empty name
    When I create a new story in backlog panel with following information:
        | Title     |     |
        | StoryType | Bug |
    Then I should see the the popup window with title: "Validation Error"
#US3-AC05_TC5 Verificar que una nueva historia de tipo "Bug" no es creada con un nombre que excede el tamaño máximo permitido(JORGE)
@US3-AC05_TC5 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that a new "Bug" type story is not created with a name that exceeds the maximum size allowed
    When I create a new story in backlog panel with following information:
        | Title     | <RandomValue,5001> |
        | StoryType | Bug                |
    Then I should see the the popup window with title: "Validation Error"