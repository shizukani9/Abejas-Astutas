@ui @shoppingCart @functional
Feature: Shopping Product

    Scenarios related to the shopping cart
    //precondiciones background
    Background: Add two products to the shopping cart
        Given I login using the standard_user credentials
        And I add the first product to the cart
        And I add the second product to the cart
        And I should see two products add to the cart

    @005
    Scenario: A user is able remove products from the shooping cart
        And I open the shopping cart page
        And I should see two products listed
        When I remove the second product from the shopping cart page
        Then I should see only one product listed
        And I go back to continue shopping
        And I should see only one product added to the cart

    @006
    Scenario: A user is able remove products from the shopping cart
        When I remove the first product
        Then I should see only one product added to the cart
        And I remove the second product
        And I should see the shopping cart empty

