@ui
Feature: Create a new project in Pivotal Tracker
#US1-AC01_TC1 Verificar que se pueda crear un nuevo proyecto (TATIANA)
@US1_AC01_TC1 @login @deleteFirstProject @functional @regression @PS
Scenario: Verify that a new project can be created
    When I create a new project with name: "<RandomValue,9>"
    Then I sould see the name of new project at the top left of the page
#US1_AC01_TC2 Verificar que se pueda crear un proyecto con un nombre de tamaño mínimo (TATIANA)
@US1_AC01_TC2 @login @deleteFirstProject @regression @SS
Scenario: Verify that a new project can be created is created with a name of minimum size
    When I create a new project with name: "<RandomValue,1>"
    Then I sould see the name of new project at the top left of the page
#US1_AC01_TC3 Verificar que se pueda crear un proyecto con un nombre de tamaño máximo (TATIANA)
@US1_AC01_TC3 @login @deleteFirstProject @regression @SS
Scenario: Verify that a new project can be created is created with a name of maximun size
    When I create a new project with name: "<RandomValue,50>"
    Then I sould see the name of new project at the top left of the page