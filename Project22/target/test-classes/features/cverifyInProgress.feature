Feature: The user can view the batches that are in progress

Scenario: The user can view the batches that are in progress
    Given The user is on the overview page
    When  the user clicks the menu button
    And the user clicks the inProgress button
    Then  the user can view the inProgress batches
