@ui
Feature: Create a new project in Pivotal Tracker
    Scenarios related to create project

@createNewFirstProject @login @deleteProjectForSettings 
Scenario: A user create a new first project successfully 
    When I navigate to the Introduction page
    Then I create a new project with the random name
    Then I should see the stories tab project 

@createNewFirstProject @deleteProjectForSettings
Scenario: A user create a new first project with static name successfully
    When I navigate to the Introduction page
    Then I create a new project with the static name
        | NameFirstProject | Project Test |
    Then I should see the stories tab project 