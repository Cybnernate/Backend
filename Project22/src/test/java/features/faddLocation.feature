Feature: The user can add a location

Scenario: The user can add a location
    Given The user is on the locations page
    When  the user clicks on teh adding location button
    And the user enters a valid <locationName>
    And the user enters a valid <cityName>
    And the user enters a valid <stateName>
    Then the user can click the add button