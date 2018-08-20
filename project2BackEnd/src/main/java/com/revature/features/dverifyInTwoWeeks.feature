Feature: The user can view the batches that are beginging in two weeks

Scenario: The user can view the batches that are begining in two weeks
    Given The user is on the overview page after displaying bathes in progress
    When  the user clicks the menu button
    And the user clicks the two weeks button
    Then  the user can view the begining in two weeks batches
