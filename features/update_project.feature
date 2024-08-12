@ui
Feature: Update Project Settings
#US4-AC08_TC1 Verificar que se puede actualizar las configuraciones generales de un nuevo proyecto (ELIAS)
@US4-AC08_TC1 @login @createFirstProject @deleteFirstProject @functional @regression @PS
Scenario: Verify that updates for general settings are applied
    Given I navigate to the project settings page
    When I change the Project Title to: "<RandomValue,9>"
        And I change the Project Description to: "<RandomValue,9>"
        And I uncheck the enable tasks checkbox
        And I save the changes 
    Then I should see the changes saved correctly
#US4-AC08_TC2 Verificar que las configuraciones generales se actualizan con valores máximos permitidos (ELIAS)
@US4-AC08_TC2 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that updates for general settings are applied with a maximun values allowed
    Given I navigate to the project settings page
    When I change the Project Title to: "<RandomValue,50>"
        And I change the Project Description to: "<RandomValue,140>"
        And I uncheck the enable tasks checkbox
        And I save the changes 
    Then I should see the changes saved correctly
#US4-AC08_TC3 Verificar que las configuraciones generales se actualizan con valores mínimos permitidos (ELIAS)
@US4-AC08_TC3 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that updates for general settings are applied with a minimun values allowed
    Given I navigate to the project settings page
    When I change the Project Title to: "<RandomValue,1>"
        And I change the Project Description to: "<RandomValue,0>"
        And I uncheck the enable tasks checkbox
        And I save the changes 
    Then I should see the changes saved correctly
#US4-AC08_TC4 Verificar que las configuraciones generales no se actualizan cuando "Project Title" está vacío (ELIAS)
@US4-AC08_TC4 @login @createFirstProject @deleteFirstProject @regression @SS
Scenario: Verify that updates for general settings are not applied when "Project Title" is empty
    Given I navigate to the project settings page
    When I change the Project Title to: ""
        And I save the changes 
    Then I should see the error message "Name can't be blank" for Project Title