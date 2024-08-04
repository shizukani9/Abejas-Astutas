Feature: Login related scenarios

    Scenarios related to login acceptance creteria

    Scenario: A user is able to login with his credentials
    Given I set the login credentials with:
        | Username | standard_user |
        | Password | secret_sauce |
    When I try to login the application
    Then I should see the inventory page

    Scenario: A user is able to login with his credentials
    Given I set the login credentials with:
        | Username | locked_out_user |
        | Password | secret_sauce |
    When I try to login the application
    Then I should see the locked out error message