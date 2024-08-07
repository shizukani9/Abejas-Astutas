Feature: Create a new project in Pivotal Tracker

@functional @create_project
Scenario: The user creates a new project
  Given The user has logged in to Pivotal Tracker
    When The user creates a new project named:
      | ProjectName | Test Project |
    Then The new project should be listed on the project dashboard
    