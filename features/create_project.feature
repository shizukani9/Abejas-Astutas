@ui
Feature: Create project in Pivotal Tracker

    Scenarios related to create project
@create
Scenario: Create project
    Given I am logged into Pivotal Tracker
        | Username | mamanierika251@gmail.com |
        | Password | QAAbejitas1234! |
    When I create a new project with the name
        | NameFirstProject | Project test |
    Then I should see the project dashboard with the title
    #Then I logout from the application