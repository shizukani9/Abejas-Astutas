@ui
Feature: Login related scenarios

    Scenarios related to login acceptance creteria
@wip
Scenario: A user is able to login with his credentials
    Given I set the login credentials with:
        | Username | equipoaamodulo6@gmail.com |
        | Password | AbejasAstutas5 |
    When I try to login the application
    Then I should see the Dashboard page
