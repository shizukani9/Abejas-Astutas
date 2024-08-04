@ui @productView @004 @functional
Feature: View Product

    Scenarios related to view and organize products

    Scenario Outline: A user is able to view products and organize them
        Given I login using standard_user credentials
        And I should see the products in alphabetical order
        When I organize the products with <"orderOption"> order
        Then I should see the products in <inventoryOrder> order
        And I enter to the firts product of the inventory
        And I should see the product page with complete information

        Examples:
            | orderOption         | inventoryOrder         |
            | Name (Z to A)       | inverted alphabetical  | 
            | Price (Low to high) | low to high price      | 
            | Price (High to low) | high to low price      | 