@ui @buyProducts @001 @acceptance
Feature: Buy products

    Scenarios related to finish a checkout of products

    Scenario: Finish a product checkout
        Given I login using the standard_user credentials
        And I add the first product to the cart 
        And I add the second product to the cart
        And I should see two products added to the cart
        And I open the shopping cart page
        And I should see two products listed
        When I checkout my products
        And I fill my information with:
            | First Name | Carlos    |
            | Last Name  | Gutierrez |
            | Zip        | 12345     |
        Then I should see the products total price
        And I finish the checkout
        And I should see a confirmation message
    


