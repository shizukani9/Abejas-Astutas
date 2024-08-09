@ui
Feature: Login related scenarios
    Scenarios related to login acceptance creteria
    
Scenario: A user is able to login with his credentials
    Given I set the login credentials with:
        | Username | <username> |
        | Password | <password> |
    When I try to login the application
    Then I should see the Introduction page